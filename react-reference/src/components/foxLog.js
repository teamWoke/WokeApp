import React, { Component } from "react";
import "../App.css";

class FoxLog extends Component {
	render() {
		return (
			<div className="ResultsLogContainer">
				<div className="NewsSource">
					<p className="NewsSourceText">Fox</p>
				</div>

				<div className="CurrentResult">
					<p className="CurrentResultText">{this.props.eachResult[0].term}: {this.props.eachResult[0].fox}</p>
				</div>

				<div className="PrevResult">
					<p className="ResultText">{this.props.eachResult[1].term}: {this.props.eachResult[1].fox}</p>
				</div>

				<div className="PrevResult">
					<p className="ResultText">{this.props.eachResult[2].term}: {this.props.eachResult[2].fox}</p>
				</div>

				<div className="PrevResult">
					<p className="ResultText">{this.props.eachResult[3].term}: {this.props.eachResult[3].fox}</p>
				</div>
			</div>
		);
	}
}

export default FoxLog;