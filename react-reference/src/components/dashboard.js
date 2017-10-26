import React, { Component } from "react";
import { BrowserRouter, Route, Link, Redirect, Switch } from "react-router-dom";
import DashboardTile from "./dashboardTile";
import "../App.css";

class Dashboard extends Component {
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
						<a href="#">Search</a>
						<p className="CurrentLinkText">Dashboard</p>
						<a href="#">Logout</a>
					</div>
				</div>

				<div className="Username">
					<p className="LogInText">Hey Person,</p>
					<p className="WokeSearchText">Here are your woke words.</p>
				</div>

				<div className="TileContainer">
					<DashboardTile />
					<DashboardTile />
					<DashboardTile />
					<DashboardTile />
					<DashboardTile />
					<DashboardTile />
				</div>
			</div>
		);
	}
}

export default Dashboard;