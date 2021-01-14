import React from 'react';
import "./jumbotron.styles.scss";
import SearchInput from "../searchInput/search-input.component";

const Jumbotron = () => {
    return (
        <div className="jumbotron-wrapper">
            <div className="jumbotron jumbotron-fluid">
                <div className="container d-flex justify-content-between ">
                    <div>
                        <h1 className="display-3 mb-4">In Theaters</h1>
                        <p className="lead">Browse through the latest releases or search for a specific movie</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Jumbotron;
