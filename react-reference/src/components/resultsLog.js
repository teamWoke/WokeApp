import React, { Component } from "react";
import "../App.css";

class ResultsLog extends Component {
	render() {
		return (
			<div className="ResultsLogContainer">
				<div className="NewsSource">
					<p>CNN</p>
				</div>

				<div className="CurrentResult">
					<p className="CurrentResultText">Topic: 10,000</p>
				</div>

				<div className="PrevResult">
					<p className="ResultText">Topic: 10,000</p>
				</div>

				<div className="PrevResult">
					<p className="ResultText">Topic: 10,000</p>
				</div>

				<div className="PrevResult">
					<p className="ResultText">Topic: 10,000</p>
				</div>
			</div>
		);
	}
}

export default ResultsLog;