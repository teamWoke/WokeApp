import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Redirect, Switch } from "react-router-dom";
import Search from './search';
import Results from './results';
import Dashboard from './dashboard';
import axios from 'axios';
import "../App.css";

class WokeApp extends Component{
	constructor(props) {
		super(props);
		this.state = {
			searchTerm: '',
			results: []
		}
		this.newsSearch = this.newsSearch.bind(this);
	}
	componentDidMount(){
		 this.newsSearch()
	}
	onChange(){
		//updates the search form with each keystroke
		//passed down to Search as props
	}
	onSubmit(){
//fires axios call to put search term in database
    axios({
      url: `http://localhost:8080/news/`,
      method: "POST"
    })
      .then(response => {
      	console.log("Added search term: ", response);
      })
      .catch(err => {});
//sent down to Search as props
//fires callback this.newsSearch()
	}
	newsSearch(element){
		const query = element.body.input;
		//fires axios call to 1. pull search terms from database and 2. call API
    axios({
      url: `http://localhost:8080/news/`,
      method: "GET"
    })
      .then(response => {
      	console.log("Saved search terms: ", response);
      	this.setState({ results: response.data.news })
      })
      .catch(err => {
      	console.log("Error fetching saved searches: ", err);
      });
		//fired this.onSubmit() and this.componentDidMount()
		//fires this.comparisonView() upon completion of axios call
	}
	comparisonView(){
		//parses data and provides comparison view
		//this will be a lot of logic
		//fired by axious().then() in this.newsSearch()
	}
	viewSearch(){
		//redirects to search
		//sent as props to Dashboard and Results
	}
	deleteTerm(){
		//fires axios.delete to database
		//sent as props to dashboard
	}


render() {
	return(
		<div></div>)
}



}

export default WokeApp;