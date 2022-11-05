import "./style.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/images/logo.svg";

function NavBar() {
	return (
		<div className="navbar_section">
			<Navbar collapseOnSelect expand="lg" bg="none" variant="light">
				<Container className="navbar_container">
					<Navbar.Brand href="#home">
						<img className="navbar_logo" src={Logo} alt="" />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<Nav.Link href="#overview">Overview</Nav.Link>
							<Nav.Link href="#contagion">Contagion</Nav.Link>
							<Nav.Link href="#symptoms">Symptoms</Nav.Link>
							<Nav.Link href="#prevention">Prevention</Nav.Link>
							<button className="navButton">Contact</button>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}

export default NavBar;

// Navigation bar with fully functional and clickable links. To scroll to a definite section.
