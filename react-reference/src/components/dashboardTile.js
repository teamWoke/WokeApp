import React, { Component } from "react";
import "../App.css";

class DashboardTile extends Component {
	constructor(props){
		super(props);
		this.state = {
			mouseOnTile: false
		};
		this.mouseEnter = this.mouseEnter.bind(this);
		this.mouseExit = this.mouseExit.bind(this);
	}

	mouseEnter(){
		this.setState({ mouseOnTile: true });
	}

	mouseExit(){
		this.setState({ mouseOnTile: false });
	}

	render() {
		console.log("Rendering from DashboardTile", this.props.id);
		return (
			<div className="Tile" id={this.props.id} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseExit} onClick={this.props.onClick}>
				{this.state.mouseOnTile === false && (<p className="TileText">{this.props.tileText}</p>)}
				{this.state.mouseOnTile === true && (<p className="TileText">Delete</p>)}
			</div>
		);
	}
}

export default DashboardTile;