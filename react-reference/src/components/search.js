import React, { Component } from "react";
import { BrowserRouter, Route, Link, Redirect, Switch } from "react-router-dom";
import "../App.css";

class Search extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="MainContainer">
				<div className="NavBar">
					<div className="NavBarLeft" />
					<div className="NavBarRight">
						<p className="CurrentLinkText">Search</p>
						<a href="#">Dashboard</a>
						<a href="#">Logout</a>
					</div>
				</div>

				<div className="MiniContainer">
					<p id="WokeSearchText">Woke</p>
					<input type="text" placeholder="Search a topic" id="SearchBar" />
					<br />
					<br />
					<button>Search</button>
				</div>
			</div>
		);
	}
}

export default Search;