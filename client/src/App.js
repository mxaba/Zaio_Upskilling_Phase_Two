import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import store from "./store/store";
import { setCurrentUser, logoutUser } from "./store/Actions/authActions";

// import NavBar from "./Components/NavBar/NavBar";
import NavBar from "./Components/common/Navbar";
import Register from "./Components/common/register";
import Login from "./Components/common/login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchBar from "./Components/SearchBar.jsx";
// import bar from "./Components/bar.jsx";
// import Banner from "./Components/Banner";
import MainContent from "./Components/MainContent";
import Footer from "./Components/common/Footer";
import HouseListing from "./Components/HouseListing";
import HouseOnSale from "./Components/HouseOnSale";
import HouseOnRent from "./Components/HouseOnRent";
import "./StyleSheet/App.css";
import HouseDescription from "./Components/HouseDescription";
import FilterSearchResults from "./Components/FilterSearch";
import Contact from "./Components/Contact-us";
import SearchResults from "./Components/SearchResults";

import PrivateRoute from "./Components/common/PrivateRoute";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/house/search/:query">
            <NavBar />
            <SearchResults />
            <Footer />
          </Route>
          <Route exact path="/register" component={Register}>
            <NavBar />
            <Register />
            <Footer />
          </Route>
          <Route path="/login">
            <NavBar />
            <Login />
            <Footer />
          </Route>
          <Route path="/contact-us">
            <NavBar />
            <Contact />
            <Footer />
          </Route>
          <Route path="/search/results-location/:location">
            <NavBar />
            <FilterSearchResults />
            <Footer />
          </Route>
          <Route path="/house/:location/:id">
            <NavBar />
            <HouseDescription />
          </Route>
          <Route path="/properties/sale" render={(routeProps) => <HouseOnSale {...routeProps}/>}>
            <NavBar />
            <HouseOnSale />
            <Footer />
          </Route>
          <Route path="/properties/rent">
            <NavBar />
            <HouseOnRent />
            <Footer />
          </Route>
          <PrivateRoute exact path="/properties/sell" component={HouseListing}>
            <NavBar />
            <HouseListing />
            <Footer />
          </PrivateRoute>
          <Route to="/">
            <NavBar />
            <SearchBar />
            <MainContent />
            <Footer />
          </Route>
        </Switch>
      </Router>
    );
  }
};

export default App
