import React, { Component } from "react";
import { BrowserRouter, Route, Link, Redirect, Switch } from "react-router-dom";
import "../App.css";

class DashboardTile extends Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div className="Tile" onMouseEnter={this.props.onMouseEnter} onClick={this.props.deleteTerm}>
				<p className="TileText">{this.props.tileText}</p>
			</div>
		);
	}
}

export default DashboardTile;