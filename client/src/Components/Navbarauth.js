import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "./../store/Actions/authActions";
import logo from './common/images/logo.svg';

class Navbarauth extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

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
                                    <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown">Hey there, {user.name}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={this.onLogoutClick} id="navbarDropdown" role="button" data-toggle="dropdown" style={{color:'red'}}>Logout</a>
                                </li>
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

Navbarauth.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbarauth);
