import "./style.css";
import Card from "../card";
import ContaintedImage from "../../assets/images/containedObjects.svg";
import HumanImage from "../../assets/images/humanContacts.svg";
import AirImage from "../../assets/images/airTransmission.svg";

const Contagion = () => {
	return (
		<section className="contagion_section" id="contagion">
			<div className="contagion_header">
				<h3>Covid-19</h3>
				<h1>Contagion</h1>
				<p>
					Corona viruses are a type of virus. There are many different kinds,
					<br />
					and some cause disease. A newly identified type
				</p>
			</div>
			<div className="contagion_cards">
				<Card
					heading="Air Transmission"
					content="Objectively evolve tactical expertise before extensible initiatives. Efficiently simplify"
					image={AirImage}
				/>
				<Card
					heading="Human Contacts"
					content="Washing your hands is one of thesimplest ways you can protect"
					image={HumanImage}
				/>
				<Card
					heading="Containted Objects"
					content="Use the tissue while sneezing,In this way, you can protect your droplets."
					image={ContaintedImage}
				/>
			</div>
		</section>
	);
};

export default Contagion;

// Contagion section