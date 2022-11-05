import About from "../../components/about";
import Contagion from "../../components/contagion";
import Symptoms from "../../components/symptoms";
import Prevention from "../../components/prevention";
import LiveTracker from "../../components/liveTracker";
import Faq from "../../components/faq";
import Hero from "../../components/hero";
import HelperImages from "../../components/helperImages";

const Home = () => {
	return (
		<>
			<Hero />
			<About />
			<Contagion />
			<Symptoms />
			<Prevention />
			<LiveTracker />
			<Faq />
			<HelperImages />
		</>
	);
};

export default Home;

// Home page which contains all the sections.
