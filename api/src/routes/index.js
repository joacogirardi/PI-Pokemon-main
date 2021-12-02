const { Router } = require('express');
const axios = require('axios');
const {Type, Pokemon} = require('../db');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


const allPokes = async ()=>{
    const url = await axios.get("https://pokeapi.co/api/v2/pokemon");
    const next = await axios.get(url.data.next);
    const results = url.data.results;
    const result2 = next.data.results;
    const pokedata = [];
    //first 20
    for(let i = 0 ; i < results.length ; i++) {
        const pokes = await axios.get(results[i].url);
        const pokeparams = pokes.data;
        pokedata.push({
            id : pokeparams.id,
            name : pokeparams.name,
            types : pokeparams.types.map((e) => e.type.name).join(", "),
            hp : pokeparams.stats[0].base_stat,
            attack : pokeparams.stats[1].base_stat,
            defense : pokeparams.stats[2].base_stat,
            speed : pokeparams.stats[5].base_stat,
            height : pokeparams.height,
            weight : pokeparams.weight,
            image : pokeparams.sprites.other.home.front_default
        });
    }
    //+20
    for(let i = 0 ; i < result2.length ; i++) {
        const pokes = await axios.get(result2[i].url);
        const pokeparams = pokes.data;
        pokedata.push({
            id : pokeparams.id,
            name : pokeparams.name,
            types : pokeparams.types.map((e) => e.type.name).join(", "),
            hp : pokeparams.stats[0].base_stat,
            attack : pokeparams.stats[1].base_stat,
            defense : pokeparams.stats[2].base_stat,
            speed : pokeparams.stats[5].base_stat,
            height : pokeparams.height,
            weight : pokeparams.weight,
            image : pokeparams.sprites.other.home.front_default
        });
    }
    return pokedata;
};


const dbdata = async ()=>{
    return await Pokemon.findAll({
        include : {
            model : Type,                    //incluye los atributos del model type
            attributes : ['name'],
            throught : {                     //mediante
                attributes : [],
            },
        }
    })
};


const getpokemons = async ()=> {
    const apinf = await allPokes();
    const dbinf = await dbdata();
    const mergeinf = apinf.concat(dbinf);
    return mergeinf;
};

//get every pokemon
router.get('/pokemons', async (req, res)=> {
    const name = req.query.name;
    let allPokemons = await getpokemons();
    if (name) {
        let poke = await allPokemons.filter(key => key.name.toLowerCase().includes(name.toLowerCase()));
        poke.length?
        res.status(200).send(poke) :
        res.status(404).send('Pokemon not found')
    } else {
        res.status(200).send(allPokemons)
    }
});

//get pokemon by id from api
router.get('/pokemons/:id', async (req, res)=>{
    const id = req.params.id;
    if (id.length < 5) {
        let pokeId = [];
        const idApi = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokeparams = await idApi.data;
        pokeId.push({
            id : pokeparams.id,
            name : pokeparams.name,
            types : pokeparams.types.map((e) => e.type.name),
            hp : pokeparams.stats[0].base_stat,
            attack : pokeparams.stats[1].base_stat,
            defense : pokeparams.stats[2].base_stat,
            speed : pokeparams.stats[5].base_stat,
            height : pokeparams.height,
            weight : pokeparams.weight,
            image : pokeparams.sprites.other.home.front_default
        })
  res.send(pokeId)
    }
    else {
        const dbpoke = await Pokemon.findOne({
            where : { id : id },
            // attributes : []
        });
    res.send(dbpoke)
    }
}); 
 
//get pokemon types
router.get('/types', async(req, res)=>{
    const url = await axios.get('https://pokeapi.co/api/v2/type');

    const results = url.data.results.map(r=> r.name);
            results.forEach(e => {
                Type.findOrCreate({
                    where: {name : e}
                })
            });
    const allresults = await Type.findAll({
        attributes : ["name"]
    });
    res.send(allresults.map(e=>e.name))
});
 
//create new pokemon in DB
router.post('/pokemons', async(req, res)=>{
    const {
        name,
        types,
        hp,
        attack,
        defense,
        speed,
        height,
        weight,
        image,
    } = req.body;

    const newpoke = await Pokemon.create({
        name : name,
        hp : hp,
        attack : attack,
        defense : defense,
        speed : speed,
        height : height,
        weight : weight,
        image : image,
    });
    let poketypedb = await Type.findAll({
        where : {name : types}
    });
    newpoke.addType(poketypedb);
    res.send('Pokemon successfully created');
});
 
module.exports = router;

