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
						<p className="CurrentSearchMainText">"{this.props.results[0].term}"</p>
						<p className="CurrentSearchText">in the past 30 days</p>
					</div>

					<div className="ResultsContainer">
						<FoxLog eachResult={this.props.results}/>
						<CnnLog eachResult={this.props.results}/>
						<BbcLog eachResult={this.props.results}/>
					</div>
				</div>
			</div>
		);
	}
}

export default Results;