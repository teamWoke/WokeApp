import React, { Component } from "react";
import { Link } from "react-router-dom";
import DashboardTile from "./dashboardTile";
import "../App.css";

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.showSearchTerm = this.showSearchTerm.bind(this);
		this.deleteTile = this.deleteTile.bind(this);
		}

	showSearchTerm(term, index){
		console.log("in showSearchTerm", term);
		return (
			<DashboardTile key={index.toString()} tileText={term.term}/>
			)
	}

	deleteTile(){

	}

	render() {
		const tilesSearchTerms = this.props.results.map(this.showSearchTerm);
		return (
			<div className="MainContainer">
				<div className="NavBar">
					<div className="NavBarLeft">
						<p className="WokeNavText">Woke</p>
					</div>
					<div className="NavBarRight">
						<Link to="/woke/" className="InactiveText">Search</Link>
						<p className="CurrentLinkText">Dashboard</p>
						<p className="InactiveText" onClick={this.props.logout}>Logout</p>
					</div>
				</div>

				<div className="DashboardContainer">
				<div className="Username">
					<p className="LogInText">Hey {this.props.name},</p>
					<p className="WokeSearchText">Here are your woke words.</p>
				</div>

					<div className="TileContainer">{tilesSearchTerms}</div>
				</div>
			</div>
		);
	}
}

export default Dashboard;