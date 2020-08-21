import React from 'react';
import {getFirstAbility, convertPoundsToKilograms} from './Pokemon.service';

class Pokemon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        }
      }

    getPokemon = () => {
        return fetch('https://pokeapi.co/api/v2/pokemon/' + this.props.idPokemon)
          .then((response) => response.json())
        //   .then((json) => console.log(json))
          .then((json) => this.setState({
            name: json.name,
            image: json.sprites.front_default,
            firstAbility: getFirstAbility(json),
            weight: convertPoundsToKilograms(json)
          }))
          .catch((error) => {
            console.error(error);
          });
        };
    
    componentDidMount() {
        this.getPokemon();
      }

    render() {
        return (
            <div className='pokemon'>
                <p><strong>{this.state.name}</strong></p>
                <img src={this.state.image} className="pokemon" alt="pokemon" />
                <p>First ability: {this.state.firstAbility}</p>
                <p>Weight: {this.state.weight} kg</p>
            </div>
        )
    }
}

export default Pokemon;