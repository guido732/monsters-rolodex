import React from "react";
import Card from "../card/card.component";

// Alt - Le asigno el nombre que quiero marcando la ruta
// import { Card } from "../card/card.component";

import "./card-list.styles.css";

export const CardList = props => {
	return (
		<div className="card-list">
			{props.monsters.map(monster => (
				<Card key={monster.id} monster={monster} />
			))}
		</div>
	);
};
