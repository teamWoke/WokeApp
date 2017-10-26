import React, { Component } from "react";
import { BrowserRouter, Route, Link, Redirect, Switch } from "react-router-dom";
import "../App.css";

class DashboardTile extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="Tile">
				<p className="TileText">A Topic</p>
			</div>
		);
	}
}

export default DashboardTile;