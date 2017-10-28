import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Search from "./search";
import Results from "./results";
import Dashboard from "./dashboard";
import Cookies from "../helpers/cookies";
import UserAuth from "./userAuth";
import axios from "axios";
import "../App.css";
import DashboardTile from "./dashboardTile"

class AuthenticationShell extends Component {
  constructor(props) {
    super(props);
    // set up our state.
    this.state = {
      user: false,
      url: "http://localhost:8080",
      searchTerm: "",
      results: []
    };
    this.setUser = this.setUser.bind(this);
    this.logout = this.logout.bind(this);
    this.renderView = this.renderView.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.deleteTile = this.deleteTile.bind(this);
    this.showSearchTerm = this.showSearchTerm.bind(this);
  }

  // once the component mounted, we want to initialize our user
  componentDidMount() {
    this.initUser();
  }

  // method to initialize our user
  initUser() {
    // get the token from the cookie
    const token = Cookies.get("token");

    // if there is a token
    if (token && token !== "") {
      // send a request to our API to validate the user
      axios
        .get(`${this.state.url}/users/validate`, {
          // include the token as a parameter
          params: { auth_token: token }
        })
        .then(res => {
          // the response will be the user
          // set the user in the state, and change the mode to content
          this.setState({ user: res.data }, () => {
            this.props.history.push(`/woke/`);
          });
        })
        .catch(err => {
          // if there is an error
          Cookies.set("token", ""); // take away the cookie
          // change the state so that there is no user and render the auth
          this.setState({ user: false }, () => {
            this.props.history.push(`/auth/`);
          });
        });
    } else {
      // if there is no token
      // we should render the auth forms
      <Redirect to="/auth" />;
    }
  }

  // method to set a user
  setUser(user) {
    // set a cookie with the user's token
    Cookies.set("token", user.token);
    // set state to have the user and the mode to content
    this.setState({ user: user }, () => {
      this.props.history.push(`/woke/`);
    });
  }

  // method to log out
  logout() {
    // take away the cookie
    Cookies.set("token", "");
    // remove the user and set the mode to auth
    this.setState({ user: false }, () => {
      this.props.history.push(`/auth/`);
    });
  }

  onChange(event) {
    event.preventDefault();
    this.setState({ searchTerm: event.target.value });
    console.log("The current input is ", this.state.searchTerm);
    //updates searchTerm with each keystroke
  }

  onSubmit(event) {
    event.preventDefault();
    const { searchTerm } = this.state;
    axios
      .post("http://localhost:8080/news/", { search_term: searchTerm })
      .then(response => {
        console.log("Added search term: ", response.data);
        this.newsSearch();
      })
      .catch(err => {
        console.log("Error adding search term: ", err);
      });
    // posts searchTerm to the db
    // calls this.newsSearch()
  }

  newsSearch() {
    axios
      .get("http://localhost:8080/news/")
      .then(response => {
        this.setState({ results: response.data.news }, () => {
        console.log("Received news data: ", this.state.results);
        this.props.history.push(`/woke/results`);
      })
      })
      .catch(err => {
        console.log("Error receiving news data: ", err);
      });
    // pulls news from API call
    // redirect to <Results/>
  }

  viewTerms() {}

  showSearchTerm(term, index) {
    console.log("in showSearchTerm", term);
    return <DashboardTile key={term.id.toString()} id={term.id} tileText={term.term} onClick={this.deleteTile}/>;
  }

  deleteTile(event, id) {
    console.log("Inside deleteTile!");
    event.preventDefault();
    // const id = event.target.id;
    axios.delete(`http://localhost:8080/news/${id}`)
    .then(response => {
      console.log('Deleting a tile', id);
      this.showSearchTerm();
    })
    .catch(err => {
      console.log("Error deleting tile: ", err);
    })
  }

  // method that renders the view based on the mode in the state
  renderView() {
    return (
      <Switch>
        <Route exact path="/" render={_ => <Redirect to="/auth" />} />
        <Route
          exact
          path="/auth"
          render={props => (
            <UserAuth {...props} setUser={this.setUser} url={this.state.url} />
          )}
        />
        <Route
          path="/woke/results"
          render={props => (
            <Results
              {...props}
              results={this.state.results}
              logout={this.logout}
              searchTerm={this.state.searchTerm}
              user={this.state.user}
            />
          )}
        />
        <Route
          path="/woke/dashboard"
          render={props => (
            <Dashboard
              {...props}
              results={this.state.results}
              logout={this.logout}
              user={this.state.user}
              name={this.state.user.name}
              delete={this.deleteTile}
            />
          )}
        />
        <Route
          path="/woke"
          render={props => (
            <Search
              {...props}
              logout={this.logout}
              user={this.state.user}
              onChange={this.onChange}
              onSubmit={this.onSubmit}
            />
          )}
        />
      </Switch>
    );
  }

  render() {
    return <div className="Contents">{this.renderView()}</div>;
  }
}

export default AuthenticationShell;