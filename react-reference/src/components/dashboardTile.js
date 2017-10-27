import React, { Component } from "react";
import "../App.css";

class DashboardTile extends Component {
	render() {
		return (
			<div className="Tile" onMouseEnter={this.props.onMouseEnter} onClick={this.props.deleteTerm}>
				<p className="TileText">{this.props.tileText}</p>
			</div>
		);
	}
}

export default DashboardTile;