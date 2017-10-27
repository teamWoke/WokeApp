import React, { Component } from "react";
import "../App.css";

class DashboardTile extends Component {
	render() {
		console.log("Rendering from DashboardTile", this.props.id);
		return (
			<div className="Tile" id={this.props.id} onClick={this.props.onClick}>
				<p className="TileText">{this.props.tileText}</p>
			</div>
		);
	}
}

export default DashboardTile;