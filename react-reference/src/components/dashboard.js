import React, { Component } from "react";
import { Link } from "react-router-dom";
import DashboardTile from "./dashboardTile";
import axios from 'axios';
import "../App.css";

class Dashboard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			termsArray: []
		};

		this.showSearchTerm = this.showSearchTerm.bind(this);
		this.deleteTile = this.deleteTile.bind(this);
	}

	componentDidMount() {
		axios
			.get("http://localhost:8080/news/dashboard")
			.then(response => {
				this.setState({ termsArray: response.data.news }, () => {
					console.log("Your terms: ", this.state.termsArray);
				});
			})
			.catch(err => {
				console.log("Error retrieving terms array", err);
			});
	}

	showSearchTerm(term, index) {
		console.log("in showSearchTerm", term);
		return <DashboardTile key={term.id.toString()} id={term.id} tileText={term.term} onClick={this.deleteTile}/>;
	}

	deleteTile(event) {
		console.log("Inside deleteTile!");
		event.preventDefault();
		const id = event.target.id;
		axios.delete(`http://localhost:8080/news/${id}`)
		.then(response => {
			console.log('Deleting a tile', id);
			this.showSearchTerm();
		})
		.catch(err => {
			console.log("Error deleting tile: ", err);
		})
	}

	render() {
		const tilesSearchTerms = this.state.termsArray.map(this.showSearchTerm);
		return (
			<div className="MainContainer">
				<div className="NavBar">
					<div className="NavBarLeft">
						<p className="WokeNavText">Woke</p>
					</div>
					<div className="NavBarRight">
						<Link to="/woke/" className="InactiveText">
							Search
						</Link>
						<p className="CurrentLinkText">Dashboard</p>
						<p className="InactiveText" onClick={this.props.logout}>
							Logout
						</p>
					</div>
				</div>

				<div className="DashboardContainer">
					<div className="Username">
						<p className="DashboardText">Hey {this.props.name},</p>
						<p className="WokeSearchText">Here are your woke words.</p>
					</div>

					<div className="TileContainer">{tilesSearchTerms}</div>
				</div>
			</div>
		);
	}
}

export default Dashboard;