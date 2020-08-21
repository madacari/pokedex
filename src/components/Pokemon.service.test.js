import {getFirstAbility, convertPoundsToKilograms, getAbilities, convertFeetToCentimeters} from './Pokemon.service';
import React from 'react';

const emptyPokemon = {
    abilities: []
};
const pokemon = {
    abilities: [
        {
            ability:{
                name: "chlorophyll"
            }
        }
    ]
};
const pokemonWithTwoAbilities = {
    abilities: [
        {
            ability:{
                name: "chlorophyll"
            }
        },
        {
            ability: {
                name: 'lunge'
            }
        }
    ]
};
const pokemonWithWeight10 = {
    abilities: [
        {
            ability:{
                name: "chlorophyll"
            }
        }
    ],
    weight: 10
};
const pokemonWithWeight100 = {
    abilities: [
        {
            ability:{
                name: "chlorophyll"
            }
        }
    ],
    weight: 100
};
const pokemonWithHeight1 = {
    height: 1
};
const pokemonWithHeight10 = {
    height: 10
};
const pokemonWithHeight100 = {
    height: 100
};

describe('Tests for getFirstAbility', () => {
    it('Should return null if there is no abilities', () => {
        expect(getFirstAbility(emptyPokemon)).toEqual(null);
    })
    it('Should return the first ability', () => {
        expect(getFirstAbility(pokemon)).toEqual("chlorophyll");
    })
    it('Should return the first ability even when it has more', () => {
        expect(getFirstAbility(pokemonWithTwoAbilities)).toEqual("chlorophyll");
    })
});

describe('Tests for convertPoundsToKilograms', () => {
    it('Should return weight converted to kilograms rounded up', () => {
        expect(convertPoundsToKilograms(pokemonWithWeight10)).toEqual(5);
    })
    it('Should return weight converted to kilograms rounded down', () => {
        expect(convertPoundsToKilograms(pokemonWithWeight100)).toEqual(45);
    })
});

describe('Tests for getAbilities', () => {
    it('Should return null if there is no abilities', () => {
        expect(getAbilities(emptyPokemon)).toEqual(null);
    })
    it('Should return all abilities (case 1)', () => {
        expect(getAbilities(pokemon)).toEqual('chlorophyll');
    })
    it('Should return all abilities (case multiple)', () => {
        expect(getAbilities(pokemonWithTwoAbilities)).toEqual('chlorophyll lunge');
    })
});

describe('Tests for convertFeetToCentimeters', () => {
    it('Should return height converted to centimeters rounded up ', () => {
        expect(convertFeetToCentimeters(pokemonWithHeight10)).toEqual(305);
    })
    it('Should return height converted to centimeters rounded down', () => {
        expect(convertFeetToCentimeters(pokemonWithHeight1)).toEqual(305);
    })
    it('Should return exact height converted to centimeters', () => {
        expect(convertFeetToCentimeters(pokemonWithHeight100)).toEqual(3048);
    })
});
