import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Error404 } from "./pages/Error";
import Home from "./pages/Home";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="*" element={<Error404 />} />
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;

// React Router for navigation along with an error 404 page for invalid links.
