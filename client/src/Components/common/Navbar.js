import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "./../../store/Actions/authActions";
import logo from './images/logo.svg';


class Navbar extends Component {

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
      };

  render() {
    const { user } = this.props.auth;
    if (user !== undefined){
        if (user.isAuthenticated) {
          var button1 = <a className="nav-link" onClick={this.onLogoutClick} id="navbarDropdown" role="button" data-toggle="dropdown">Hey {user.name} | Logout</a>
      } else {
          var button = <a className="nav-link" href="/login" id="navbarDropdown" role="button" data-toggle="dropdown" style={{color:'red'}}>Login / Sign-up</a>
      }
    }
    return (
        <header className="header">
                <nav className="navbar navbar-light bg-white navbar-static-top navbar-expand-lg header-sticky">
                    <div className="container-fluid">
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target=".navbar-collapse"><i className="fas fa-align-left"></i></button>
                        <a className="navbar-brand" href="/">
                            <img className="img-fluid" src={logo} alt="logo" />
                        </a>
                        <div className="col-sm-12 navbar-collapse collapse justify-content-center">
                            <ul className="nav navbar-nav">
                            <li className="nav-item">
                                {button}
                                {button1}
                            </li>
                            {/* <li className="nav-item">
                                    <a className="nav-link" href="/login" id="navbarDropdown" role="button" data-toggle="dropdown">Login</a>
                                </li> */}
                                <li className="nav-item">
                                    <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown">Developments</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown">Commercials</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown">Calculators</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown">Advice</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown">List Privately</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/properties/rent" id="navbarDropdown" role="button" data-toggle="dropdown">For rent</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/properties/sale" id="navbarDropdown" role="button" data-toggle="dropdown">For Sale</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/properties/sell" id="navbarDropdown" role="button" data-toggle="dropdown" style={{color: 'green'}}><i className="fa fa-plus-circle"></i>Add listing </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);
