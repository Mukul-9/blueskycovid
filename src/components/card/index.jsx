import React from "react";
import "./style.css";

const Card = ({ heading, content, image }) => {
	return (
		<div className="card">
			<div className="card_text">
				<img className="card_image" src={image} alt="" />
				<h3>{heading}</h3>
				<p>{content}</p>
			</div>
		</div>
	);
};

export default Card;

// individual cards component for displaying content.
