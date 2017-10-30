import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactLoading from 'react-loading';
import "../App.css";

class Search extends Component {
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

					{this.props.loading === true && (
						<div className="MiniContainer">
						<ReactLoading type="spokes" color="#6391c1" width="200px" height="200px"/>
						</div>
						)}
					{this.props.loading === false && (
					<div className="MiniContainer">
					<p id="WokeSearchText">Let's get started.</p>
					<form onSubmit={this.props.onSubmit}>
					<input type="text" placeholder="Enter a topic" id="SearchBar" onChange={this.props.onChange} />
					<br />
					<br />
					<button>Search</button>
					</form>
				</div>
				)}
			</div>
		);
	}
}

export default Search;