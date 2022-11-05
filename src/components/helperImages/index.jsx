import DarkVirus from "../../assets/images/add1.svg";
import LightVirus from "../../assets/images/add2.svg";
import ContagionHelperImage1 from "../../assets/images/contagionHelper1.svg";
import ContagionHelperImage2 from "../../assets/images/contagionHelper2.svg";
import GreenCovid from "../../assets/images/greenCovid.svg";
import "./style.css";
const HelperImages = () => {
	// scroll to top button code
	const scrollTop = () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	};
	return (
		<>
			<div className="helper_images">
				<img src={LightVirus} alt="" className="absolute_pos light_right_top" />
				<img src={DarkVirus} alt="" className="absolute_pos dark_right_top" />
				<img src={LightVirus} alt="" className="absolute_pos light_right_mid" />
				<img
					src={ContagionHelperImage1}
					alt=""
					className="absolute_pos cont_left"
				/>
				<img
					src={ContagionHelperImage2}
					alt=""
					className="absolute_pos cont_right"
				/>
				<img src={GreenCovid} alt="" className="absolute_pos green_left" />
				<img src={GreenCovid} alt="" className="absolute_pos green_right" />
			</div>
			<div className="scroll_div" onClick={() => scrollTop()}>
				<h2 className="scroll_top">^</h2>
			</div>
		</>
	);
};
export default HelperImages;

/* helper images for additional styling as mentioned in the styling */
