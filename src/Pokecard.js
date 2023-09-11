import React from "react";
import "./Pokecard.css";

const POKE_API =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

const Pokecard = (props) => {
    let img = `${POKE_API}/${props.id}.png`;

    return (
        <div className="Pokecard">
            <div className="Pokecard-name">{props.name}</div>
            <img className="Pokecard-img" src={img} />
            <div className="Pokecard-type">{props.type}</div>
            <div className="Pokecard-bx">{props.base_experience}</div>
        </div>
    );
};

export default Pokecard;
