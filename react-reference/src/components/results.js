import React, { Component } from "react";
import { Link } from "react-router-dom";
import FoxLog from './foxLog';
import CnnLog from "./cnnLog";
import BbcLog from './bbcLog';
import "../App.css";

class Results extends Component {
	render() {
		return (
			<div className="MainContainer">
				<div className="NavBar">
					<div className="NavBarLeft">
						<p className="WokeNavText">Woke</p>
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
						<p className="CurrentSearchText">in the past 3 days</p>
					</div>

					<div className="ResultsContainer">
						<BbcLog eachResult={this.props.results}/>
						<CnnLog eachResult={this.props.results}/>
						<FoxLog eachResult={this.props.results}/>
					</div>
				</div>
			</div>
		);
	}
}

export default Results;