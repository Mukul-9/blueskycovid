import "./style.css";
import AboutImage from "../../assets/images/about.svg";
const About = () => {
	return (
		<section className="about_section" id="overview">
			<div className="about">
				<img className="about_image" src={AboutImage} alt="" />
				<div className="about_text">
					<h3>What is Covid-19</h3>
					<h1>Coronavirus</h1>
					<p>
						Corona viruses are a type of virus. There are many different kinds,
						and some cause disease. A newly identified type has caused a recent
						outbreak of respiratory illness now called COVID-19.Lauren Sauer,
						M.S., the director of operations with the Johns Hopkins Office of
						Critical Event Preparedness and Response
					</p>
					<button className="aboutButton">Learn More</button>
				</div>
			</div>
		</section>
	);
};

export default About;

// About section
