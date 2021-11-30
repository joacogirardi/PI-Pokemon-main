import pokeballoading from '../../src/content/pokeballoading.gif';

function Loader() {
    return (
        <div>
            <img
                src={pokeballoading}
                alt='pokeload'
                width="300"
                height="300"
            />
            <span>Loading...</span>
        </div>
    )
}

export default Loader;