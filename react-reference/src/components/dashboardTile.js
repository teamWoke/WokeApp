import React, { Component } from "react";
import "../App.css";

class DashboardTile extends Component {
	render() {
		console.log("Rendering from DashboardTile", this.props.tileText);
		return (
			<div className="Tile">
				<p className="TileText">{this.props.tileText}</p>
			</div>
		);
	}
}

export default DashboardTile;