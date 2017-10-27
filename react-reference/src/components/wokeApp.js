import React, { Component } from "react";
import { BrowserRouter, Route, Link, Redirect, Switch } from "react-router-dom";
import Search from "./search";
import Results from "./results";
import Dashboard from "./dashboard";
import axios from "axios";
import "../App.css";

class WokeApp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchTerm: "",
			results: []
		};
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(event) {
		event.preventDefault();
		this.setState({ searchTerm: event.target.value });
		console.log("The current input is ", this.state.searchTerm);
		//updates the search form with each keystroke
		//passed down to Search as props
	}

	onSubmit(event) {
		//fires axios call to put search term in database
		event.preventDefault();
		const {searchTerm} = this.state;
		axios.post("http://localhost:8080/news/", {search_term: searchTerm})
			.then(response => {
				console.log("Added search term: ", response);
			})
			.catch(err => {
				console.log("Error adding search term: ", err);
			});
		//sent down to Search as props
		//fires callback this.newsSearch()
	}

	render() {
		return (
			<BrowserRouter>
				<Search onChange={this.onChange} onSubmit={this.onSubmit}/>
			</BrowserRouter>
		);
	}
}

export default WokeApp;