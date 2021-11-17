// Correction exo optionnel (pokeapi)
const colours = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD',
};

const App = (props) => {
  const [pokemons, setPokemons] = React.useState([]);

  React.useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      .then((data) => setPokemons(data.results));
  }, []);

  return <PokemonList pokemons={pokemons} />;
};

const PokemonList = (props) => {

  return (
    <ul>
      {props.pokemons.map((pokemon) => (
        <PokemonItem key={pokemon.name} pokemon={pokemon} />
      ))}
    </ul>
  );
};

const PokemonItem = ({ pokemon : { url, name }}) => {

  const [poke, setPoke] = React.useState({});
  const [sprite, setSprite] = React.useState("");
  const [type, setType] = React.useState("");

  React.useEffect(() => {
      let str = "official-artwork";
      fetch(url)
      .then((response) => response.json())
      .then( data => {
          setPoke(data);
          setSprite(data.sprites.other[str].front_default);
          setType(data.types[0].type.name)})
  }, [])

  // React.useEffect(() => console.log(poke), [poke])
  // React.useEffect(() => console.log(type), [type])
  // React.useEffect(() => console.log(sprite), [sprite])

  return (
    <React.Fragment>
      <div className="pokemonCard" style={{backgroundColor: colours[type]}}>
          <li><img src={sprite}></img></li>
          <li>{poke.id < 100 && poke.id >= 10 ? "N°0" + poke.id : poke.id < 10 && poke.id >= 1 ? "N°00" + poke.id : "N°" + poke.id} {name}</li>
          <li>{"Poids : " + poke.weight/10 + " kg"}</li>
      </div>
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.querySelector("#app"));
