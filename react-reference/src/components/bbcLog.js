import React, { Component } from "react";
import "../App.css";

class BbcLog extends Component {
	render() {
		return (
			<div className="ResultsLogContainer">
				<div className="NewsSource">
					<p>BBC</p>
				</div>

				<div className="CurrentResult">
					<p className="CurrentResultText">{this.props.eachResult[0].term}: {this.props.eachResult[0].bbc}</p>
				</div>

				<div className="PrevResult">
					<p className="ResultText">{this.props.eachResult[1].term}: {this.props.eachResult[1].bbc}</p>
				</div>

				<div className="PrevResult">
					<p className="ResultText">{this.props.eachResult[2].term}: {this.props.eachResult[2].bbc}</p>
				</div>

				<div className="PrevResult">
					<p className="ResultText">{this.props.eachResult[3].term}: {this.props.eachResult[3].bbc}</p>
				</div>
			</div>
		);
	}
}

export default BbcLog;