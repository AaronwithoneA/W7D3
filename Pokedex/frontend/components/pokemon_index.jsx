import React from 'react';

class PokemonIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    // debugger
    return (
      <div>
        <ul>
          {this.props.pokemon.map((pokemon) => {
              return (
                <li key={pokemon.id}>
                  {pokemon.name}
                  <img src={pokemon.image_url} className='smallImage'></img>
                </li>);
          })}
        </ul>
      </div>
    );
  }

}

export default PokemonIndex;
