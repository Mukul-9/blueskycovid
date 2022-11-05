import "./style.css";

const Faq = () => {
	return (
		<div className="faq_section">
			<h1>Have A Question In Mind?</h1>
			<h1>Let Us Help You</h1>
			<div className="input_send">
				<input
					type="email"
					className="textInput"
					placeholder="snmoneydemo@gmail.com"
				/>
				<button className="sendButton">Send</button>
			</div>
		</div>
	);
};

export default Faq;

// FAQ section
