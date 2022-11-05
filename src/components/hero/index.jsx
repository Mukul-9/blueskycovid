import React from "react";
import "./style.css";
import HeroImage from "../../assets/images/hero.svg";

const Hero = () => {
	return (
		<section className="hero_section">
			<div className="hero">
				<div className="hero_text">
					<h3>COVID-19 Alert</h3>
					<h1>
						Stay at Home Quarantine <br /> To Stop Corona Virus
					</h1>
					<p>
						There is no specific medicine to prevent or treat coronavirus
						disease (COVID-19). People may need supportive care to .
					</p>
					<button className="heroButton">Let Us Help</button>
				</div>
				<img className="hero_image" src={HeroImage} alt="" />
			</div>
		</section>
	);
};

export default Hero;

// Landing screen for the website.
