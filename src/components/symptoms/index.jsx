import React from "react";
import "./style.css";
import SymptomsImage from "../../assets/images/symptoms.svg";

const Symptoms = () => {
	return (
		<section className="symptoms_section" id="symptoms">
			<div className="symptoms_content">
				<h3>Covid-19</h3>
				<h1>Symptoms</h1>
				<p>
					Corona viruses are a type of virus. There are many different kinds,
					and some cause disease. <br /> A newly identified type has caused a
					recent outbreak of respiratory
				</p>
				<img
					className="symptomsImage"
					src={SymptomsImage}
					alt="COVID-19 Symptoms"
				/>
			</div>
		</section>
	);
};

export default Symptoms;
