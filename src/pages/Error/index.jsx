import React from "react";
import { useNavigate } from "react-router-dom";
import Error404Image from "../../assets/images/error404.svg";
import "./style.css";

export const Error404 = () => {
	const navigate = useNavigate();
	return (
		<div className="error_container">
			<img src={Error404Image} alt="" />
			<h1>The Page You're Looking For Doesn't Exist</h1>
			<button onClick={() => navigate("/")}>Home</button>
		</div>
	);
};

// Error 404 page, with Home Button
