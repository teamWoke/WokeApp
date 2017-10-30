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
		// this.deleteTile = this.deleteTile.bind(this);
				this.delete = this.delete.bind(this);

	}

	componentDidMount() {
		axios
			.get("http://localhost:8080/news/dashboard", {params: {auth_token: this.props.user.token}})
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
		const onClick = event => {
			this.delete(event, event.target.id, index)
		}
		console.log("in showSearchTerm", term);
		return <DashboardTile key={term.id.toString()} id={term.id} tileText={term.term} onClick={onClick}/>;
	}

	// deleteTile(event) {
	// 	console.log("Inside deleteTile!");
	// 	event.preventDefault();
	// 	const id = this.state.termsArray.id;
	// 	axios.delete(`http://localhost:8080/news/${id}`)
	// 	.then(response => {
	// 		console.log('Deleting a tile', id);
	// 		this.showSearchTerm();
	// 	})
	// 	.catch(err => {
	// 		console.log("Error deleting tile: ", err);
	// 	})
	// }
delete(event, id, index) {
		console.log("Inside Dashboard deleteTile!");
		event.preventDefault();
		// const id = this.state.termsArray.id;
		this.props.delete(event, id);
		this.setState(prev=>{
			prev.termsArray.splice(index, 1);
			console.log(prev);
			return prev;
		});
	}

	render() {
		const tilesSearchTerms = this.state.termsArray.map(this.showSearchTerm);
		const id = this.state.termsArray.id;
		const onClick = event => {
			this.delete(event, id);
		}
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