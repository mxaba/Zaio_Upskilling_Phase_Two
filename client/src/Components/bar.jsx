import React, { useState, Fragment } from 'react';
import { useHistory } from "react-router-dom";

function bar() {
    const history = useHistory();
    const [search, setSearchQuery] = useState("");
    const redirectToFilterSearchResult = (location) => {
        history.push(`/search/results-location/${location}`);
    };

  const searchBoxResults = () => {
    history.push(`/house/search/${search}`);
  };
        return (<Fragment>
            <section className="banner bg-holder bg-overlay-black-30" style={{ backgroundImage: "url('common/images/banner-01.jpg')" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-white text-center mb-2">Find your dream home</h1>
                            <p className="lead text-center text-white mb-4 font-weight-normal">Find it by:</p>
                            <div className="property-search-field bg-white">
                                <div className="property-search-item">
                                    <form className="form-row basic-select-wrapper">
                                        <div className="form-group col-lg col-md-6">
                                            <label>Filter By Province:</label>
                                            <select className="form-control basic-select" onChange={(e) => redirectToFilterSearchResult(e.target.value)}>
                                            <option>...</option>
                                            <option>Limpopo</option>
                                            <option>Western Cape</option>
                                            <option>Eastern Cape</option>
                                            <option>Mpumalanga</option>
                                            <option>Northern Cape</option>
                                            <option>Johannesburg</option>
                                            <option>Pretoria</option>
                                            <option>Port Elizabeth</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-lg col-md-6">
                                            <label>Status</label>
                                            <select className="form-control basic-select">
                                                <option>For Rent</option>
                                                <option>For Sale</option>
                                            </select>
                                        </div>
                                        <div className="form-group d-flex col-lg-5">
                                            <div className="form-group-search">
                                                <label>Location</label>
                                                <div className="d-flex align-items-center"><i className="far fa-compass mr-1"></i><input className="form-control" type="text" placeholder="Search for your dream home" onChange={(e) => setSearchQuery(e.target.value)}/></div>
                                            </div>
                                            <span className="align-items-center ml-3 d-none d-lg-block"><button className="btn btn-primary d-flex align-items-center" type="submit"><i className="fas fa-search mr-1"></i><span>Search</span></button></span>
                                        </div>
                                        <div className="d-lg-none btn-block btn-mobile m-3">
                                            <button className="btn btn-primary btn-block align-items-center" type="submit"><i className="fas fa-search mr-1"></i><span>Search</span></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>);
    }

export default bar;