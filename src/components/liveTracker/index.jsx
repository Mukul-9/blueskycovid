import "./style.css";
import WorldMap from "../../assets/images/Map.svg";
import axios from "axios";
import { useEffect, useState } from "react";

const LiveTracker = () => {
	const [fullData, setFullData] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	// pagination setup (displaying 5 countries per page. Total 20 countries.)
	const lastItemidx = currentPage * 5;
	const firstItemidx = lastItemidx - 5;
	const currentItems = fullData.slice(firstItemidx, lastItemidx);

	// fetching data from a free covid api and displaying the top 20 countries with highest confirmed cases
	useEffect(() => {
		axios
			.get("https://disease.sh/v3/covid-19/jhucsse/")
			.then((res) => {
				let temp = res.data;
				let temp1 = temp.sort((a, b) => {
					return parseInt(b.stats.confirmed) - parseInt(a.stats.confirmed);
				});
				temp1 = temp1.slice(0, 20);
				const h = temp1.map((value, index) => {
					return {
						country: value.country,
						confirmed: value.stats.confirmed,
						id: index,
					};
				});
				setFullData(h);
			})
			.catch((err) => {
				console.log(err);
				window.alert(
					"There is a problem at our end and we are trying to fix it"
				);
			});
	}, []);

	return (
		<section className="live_section">
			<div className="live_container">
				<div className="world_map">
					<img src={WorldMap} alt="" />
				</div>
				<div className="live_list">
					<div className="list_container">
						<div className="header_arrow">
							<h1 className="list_header">Live Reports</h1>
							<div className="arrows">
								<p
									onClick={() => {
										if (currentPage !== 1) setCurrentPage(currentPage - 1);
									}}
								>
									{"<"}
								</p>
								<p>|</p>
								<p
									onClick={() => {
										if (currentPage !== 4) setCurrentPage(currentPage + 1);
									}}
								>
									{">"}
								</p>
							</div>
							<br />
						</div>
						<div className="list_items">
							{currentItems.map((obj, _) => {
								return (
									<div className="list_content">
										<h5 id={obj.id}>{obj.id + 1}</h5>
										<h5 id={obj.id}>{obj.country}</h5>
										<p id={obj.id}>
											{obj.confirmed
												.toString()
												.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
											{/* adding commas for the thousand's separator for the total number of confirmed cases */}
										</p>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LiveTracker;
