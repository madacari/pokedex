import React from 'react';
import {getAbilities, convertFeetToCentimeters, convertPoundsToKilograms} from './Pokemon.service'
import './DetailPage.css'

class DetailPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        }
      }

    getPokemonDetails = (pokemonId) => {
        return fetch('https://pokeapi.co/api/v2/pokemon/' + pokemonId)
          .then((response) => response.json())
        //   .then((json) => console.log(json))
          .then((json) => this.setState({
            name: json.name,
            image: json.sprites.front_default,
            abilities: getAbilities(json),
            height: convertFeetToCentimeters(json),
            weight: convertPoundsToKilograms(json)
          }))
          .catch((error) => {
            console.error(error);
          });
        };

    componentDidMount() {
        const { match } = this.props
        const urlPokemonId = match.params.pokemonId
        this.getPokemonDetails(urlPokemonId);
    }

    render() {
        console.log(this.state);
        return (
            <div className='detailPage'>
                <p><strong>{this.state.name}</strong></p>
                <img src={this.state.image} className="pokemon" alt="pokemon" />
                <p>Abilities: {this.state.abilities}</p>
                <p>Height: {this.state.height} cm</p>
                <p>Weight: {this.state.weight} kg</p>
            </div>
        )
    }
}

export default DetailPage;
