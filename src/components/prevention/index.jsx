import "./style.css";
import MaskGirl from "../../assets/images/Mask girl.svg";
import NoseRag from "../../assets/images/Nose Rag.svg";
import WashHands from "../../assets/images/Wash Hands.svg";
import AvoidContact from "../../assets/images/Avoid Contact.svg";

const Prevention = () => {
	return (
		<section className="prevent_section" id="prevention">
			<div className="prevent_header">
				<h3>Covid-19</h3>
				<h1>What Should We Do?</h1>
				<p>
					Corona viruses are a type of virus. There are many different kinds,
					and some cause disease. A newly identified type has caused
				</p>
			</div>
			<div className="prevent_content">
				<div className="prevent_text">
					<div className="prevent_text_align">
						<h1 className="prevent_number">01</h1>
						<div className="prevent_text_vertical">
							<h1>Wear Masks</h1>
							<p>
								Continually seize impactful vortals rather than future-proof
								supply chains. Uniquely exploit emerging niches via fully tested
								meta-services. Competently pursue standards compliant leadership
								skills vis-a-vis pandemic "outside the box" thinking.
								Objectively
							</p>
						</div>
					</div>
				</div>
				<img src={MaskGirl} alt="" className="prevent_img" />
			</div>
			<div className="prevent_content">
				<img src={WashHands} alt="" className="prevent_img" />
				<div className="prevent_text">
					<div className="prevent_text_align">
						<h1 className="prevent_number">02</h1>
						<div className="prevent_text_vertical">
							<h1>Wash Your Hands</h1>
							<p>
								Continually seize impactful vortals rather than future-proof
								supply chains. Uniquely exploit emerging niches via fully tested
								meta-services. Competently pursue standards compliant leadership
								skills vis-a-vis pandemic "outside the box" thinking.
								Objectively{" "}
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="prevent_content">
				<div className="prevent_text">
					<div className="prevent_text_align">
						<h1 className="prevent_number">03</h1>
						<div className="prevent_text_vertical">
							<h1>Use Nose-Rag</h1>
							<p>
								Continually seize impactful vortals rather than future-proof
								supply chains. Uniquely exploit emerging niches via fully tested
								meta-services. Competently pursue standards compliant leadership
								skills vis-a-vis pandemic "outside the box" thinking.
								Objectively{" "}
							</p>
						</div>
					</div>
				</div>
				<img src={NoseRag} alt="" className="prevent_img" />
			</div>
			<div className="prevent_content">
				<img src={AvoidContact} alt="" className="prevent_img" />
				<div className="prevent_text">
					<div className="prevent_text_align">
						<h1 className="prevent_number">04</h1>
						<div className="prevent_text_vertical">
							<h1>Avoid Contact</h1>
							<p>
								Continually seize impactful vortals rather than future-proof
								supply chains. Uniquely exploit emerging niches via fully tested
								meta-services. Competently pursue standards compliant leadership
								skills vis-a-vis pandemic "outside the box" thinking.
								Objectively{" "}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Prevention;
