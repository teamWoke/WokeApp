import React, { Component } from "react";
import { BrowserRouter, Route, Link, Redirect, Switch } from "react-router-dom";
import "../App.css";

class ResultsLog extends Component {
	constructor(props) {
		super(props);
	}
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