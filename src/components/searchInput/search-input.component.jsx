import React from 'react';
import "./search-input.styles.scss";

const SearchInput = () => {

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit} className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn" type="submit">Search</button>
        </form>
    );
};

export default SearchInput;
