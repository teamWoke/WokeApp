import React, { Component } from "react";
import "../App.css";

class CnnLog extends Component {
	render() {
		return (
			<div className="ResultsLogContainer">
				<div className="NewsSource">
					<p>CNN</p>
				</div>

				<div className="CurrentResult">
					<p className="CurrentResultText">{this.props.eachResult[0].term}: {this.props.eachResult[0].cnn}</p>
				</div>

				<div className="PrevResult">
					<p className="ResultText">{this.props.eachResult[1].term}: {this.props.eachResult[1].cnn}</p>
				</div>

				<div className="PrevResult">
					<p className="ResultText">{this.props.eachResult[2].term}: {this.props.eachResult[3].cnn}</p>
				</div>

				<div className="PrevResult">
					<p className="ResultText">{this.props.eachResult[3].term}: {this.props.eachResult[3].cnn}</p>
				</div>
			</div>
		);
	}
}

export default CnnLog;