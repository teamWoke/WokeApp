import React, { Component } from "react";
import { BrowserRouter, Route, Link, Redirect, Switch } from "react-router-dom";
import ResultsLog from "./resultsLog";
import "../App.css";

class Results extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="MainContainer">
				<div className="NavBar">
					<div className="NavBarLeft">
						<p className="WokeSmallText">Woke</p>
					</div>
					<div className="NavBarRight">
						<p className="CurrentLinkText">Search</p>
						<Link to="/woke/dashboard" className="InactiveText">Dashboard</Link>
						<p className="InactiveText" onClick={this.props.logout}>Logout</p>
					</div>
				</div>

				<div className="MiniContainer">
					<div className="CurrentSearchHeader">
						<p className="CurrentSearchText">Relevancy of</p>
						<p className="CurrentSearchMainText">"{this.props.searchTerm}"</p>
						<p className="CurrentSearchText">in the past 30 days</p>
					</div>

					<div className="ResultsContainer">
						<ResultsLog />
						<ResultsLog />
						<ResultsLog />
					</div>
				</div>
			</div>
		);
	}
}

export default Results;