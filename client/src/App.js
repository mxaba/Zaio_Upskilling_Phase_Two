import React from "react";
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

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/house/search/:query">
          <NavBar />
          <SearchResults />
          <Footer />
        </Route>
        <Route path="/register">
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
        <Route path="/properties/sale">
          <NavBar />
          <HouseOnSale />
          <Footer />
        </Route>
        <Route path="/properties/rent">
          <NavBar />
          <HouseOnRent />
          <Footer />
        </Route>
        <Route path="/properties/sell">
          <NavBar />
          <HouseListing />
          <Footer />
        </Route>
        <Route to="/">
          <NavBar />
          <SearchBar />
          <MainContent />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
