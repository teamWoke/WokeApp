import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

class Search extends Component {
	render() {
		return (
			<div className="MainContainer">
				<div className="NavBar">
					<div className="NavBarLeft" />
					<div className="NavBarRight">
						<p className="CurrentLinkText">Search</p>
						<Link to="/woke/dashboard" className="InactiveText">Dashboard</Link>
						<p className="InactiveText" onClick={this.props.logout}>Logout</p>
					</div>
				</div>

				<div className="MiniContainer">
					<p id="WokeSearchText">Woke</p>
					<form onSubmit={this.props.onSubmit}>
					<input type="text" placeholder="Search a topic" id="SearchBar" onChange={this.props.onChange} />
					<br />
					<br />
					<button>Search</button>
					</form>
				</div>
			</div>
		);
	}
}

export default Search;