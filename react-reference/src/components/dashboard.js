import React, { Component } from "react";
import { Link } from "react-router-dom";
import DashboardTile from "./dashboardTile";
import "../App.css";

class Dashboard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			tileText: ''
		}

		this.onMouseEnter = this.onMouseEnter.bind(this);
	}

	componentDidMount() {
		this.setState({ tileText: "Topic" });
	}

	onMouseEnter(e) {
		e.preventDefault();
		this.setState({ tileText: "Delete" });
	}

	render() {
		return (
			<div className="MainContainer">
				<div className="NavBar">
					<div className="NavBarLeft">
						<p className="WokeSmallText">Woke</p>
					</div>
					<div className="NavBarRight">
						<Link to="/woke/" className="InactiveText">Search</Link>
						<p className="CurrentLinkText">Dashboard</p>
						<p className="InactiveText" onClick={this.props.logout}>Logout</p>
					</div>
				</div>

				<div className="Username">
					<p className="LogInText">Hey {this.props.name},</p>
					<p className="WokeSearchText">Here are your woke words.</p>
				</div>

				<div className="TileContainer">
					<DashboardTile onMouseEnter={this.onMouseEnter} tileText={this.state.tileText}/>
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