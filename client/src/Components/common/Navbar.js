import React, { Fragment } from 'react';
// import Logout from '../auth/Logout';
import logo from './images/logo.svg';

function Navbar() {
    return (
        <Fragment>
            <header className="header">
                <nav className="navbar navbar-light bg-white navbar-static-top navbar-expand-lg header-sticky">
                    <div className="container-fluid">
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target=".navbar-collapse"><i className="fas fa-align-left"></i></button>
                        <a className="navbar-brand" href="/">
                            <img className="img-fluid" src={logo} alt="logo" />
                        </a>
                        <div className="navbar-collapse collapse justify-content-center">
                            <ul className="nav navbar-nav">
                            <li className="nav-item">
                                    <a className="nav-link" href="/login" id="navbarDropdown" role="button" data-toggle="dropdown">Login</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/register" id="navbarDropdown" role="button" data-toggle="dropdown" style={{color:'red'}}>Sign Up</a>
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
                            </ul>
                        </div>
                        <div className="add-listing d-none d-sm-block">
                            <a className="btn btn-primary btn-md" href="/properties/sell" id="navbarDropdown"> <i className="fa fa-plus-circle"></i>Add listing </a>
                        </div>
                    </div>
                </nav>
            </header>
        </Fragment >
    )
}


export default Navbar;
