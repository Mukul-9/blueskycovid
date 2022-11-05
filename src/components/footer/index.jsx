import "./style.css";
import Logo from "../../assets/images/logo.svg";
import Social from "../../assets/images/social.svg";
import Nav from "react-bootstrap/Nav";

const Footer = () => {
	return (
		<>
			<div className="footer_section">
				<img
					src={Logo}
					alt="Covid-19"
					className="logo"
					onClick={() => {
						window.scrollTo({
							top: 0,
							left: 0,
							behavior: "smooth",
						});
					}}
				/>
				<div className="footer_links">
					<Nav.Link href="#overview">Overview</Nav.Link>
					<Nav.Link href="#contagion">Contagion</Nav.Link>
					<Nav.Link href="#symptoms">Symptoms</Nav.Link>
					<Nav.Link href="#prevention">Prevention</Nav.Link>
				</div>
				<div className="footer_social">
					<img src={Social} alt="Social Media Icons" />
				</div>
			</div>
			<p style={{ textAlign: "center" }}>
				2022 @ All rights reserved by pixelspark.co
			</p>
		</>
	);
};

export default Footer;

// a completely functional Footer, with clickable and scrollable links.
// social links are not clickable. cause links are not provided. hence used a single image to display all four social media links.
