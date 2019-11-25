import React from "react";
import "./card.styles.css";

// Alt - tengo que poner Export para que sea exportable (sería como poner "public" en java)
// Export const Card = props => (

const Card = props => (
	<div className="card-container">
		<img alt="Monster" src={`https://robohash.org/${props.monster.id}?set=set2`} />
		<h2>{props.monster.name}</h2>
		<p>{props.monster.email}</p>
	</div>
);

export default Card;

// Alt
// Eliminar export
