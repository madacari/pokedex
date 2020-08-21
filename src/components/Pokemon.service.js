function getFirstAbility(pokemon) {
    if (pokemon.abilities.length > 0) {
        const firstAbility = pokemon.abilities[0].ability.name;
        return firstAbility;
    }
    return null;
}

function getAbilities(pokemon) {
    if (pokemon.abilities.length > 0) {
        const allAbilities = pokemon.abilities.map((elt) => {
                                return elt.ability.name;
                             })
        return allAbilities.join(' ');
    }
    return null;
}

function convertPoundsToKilograms(pokemon) {
    const weightInPounds = pokemon.weight;
    return Math.round(weightInPounds / 2.205);
}

function convertFeetToCentimeters(pokemon) {
    const heightInFeet = pokemon.height;
    return Math.round(heightInFeet * 30.48);
}

export { getFirstAbility, convertPoundsToKilograms, getAbilities, convertFeetToCentimeters };
