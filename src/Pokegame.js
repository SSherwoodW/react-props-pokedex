import React from "react";
import Pokedex from "./Pokedex";

const Pokegame = (props) => {
    let hand1 = [];
    let hand2 = [...props.pokemon];

    while (hand1.length < hand2.length) {
        let randomIdx = Math.floor(Math.random() * hand2.length);
        let randomSwap = hand2.splice(randomIdx, 1)[0];
        hand1.push(randomSwap);
    }
    console.log(hand1);
    console.log(hand2);

    let totalExp1 = hand1.reduce(
        (exp, pokemon) => exp + pokemon.base_experience,
        0
    );
    let totalExp2 = hand2.reduce(
        (exp, pokemon) => exp + pokemon.base_experience,
        0
    );

    return (
        <div className="Pokegame">
            <Pokedex pokemon={hand1} winner={totalExp1 > totalExp2} />
            <Pokedex pokemon={hand2} winner={totalExp2 > totalExp1} />
        </div>
    );
};

Pokegame.defaultProps = {
    pokemon: [
        { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
        { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
        { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
        { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
        { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
        { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
        { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
        { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
    ],
};

export default Pokegame;
