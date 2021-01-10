import React from 'react';
import "./jumbotron.styles.scss";
import SearchInput from "../searchInput/search-input.component";

const Jumbotron = () => {
    return (
        <div className="jumbotron-wrapper">
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">In Theaters</h1>
                    <SearchInput/>
                </div>
            </div>
        </div>
    );
};

export default Jumbotron;
