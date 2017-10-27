import React, { Component } from "react";
import "../App.css";

class BbcLog extends Component {
	constructor(props) {
		super(props);
		this.showResults = this.showResults.bind(this);
	}

	showResults(term, index) {
		
			console.log("Inside.showResults", term);
			return (
				<div key={index.toString()} className="PrevResult">
					<p className="ResultText">
						{term.term}: {term.bbc}
					</p>
				</div>
			);
		}

	render() {
		const resultsDiv = this.props.eachResult.map(this.showResults);
		return (
			<div className="ResultsLogContainer">
				<div className="NewsSource">
					<p className="NewsSourceText">BBC</p>
				</div>
				<div className="ScrollResults">{resultsDiv}</div>
			</div>
		);
	}
}

export default BbcLog;
