import React from 'react';
import "./search-input.styles.scss";

const SearchInput = () => {

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <div className="mt-5 search-input">
            <form onSubmit={handleSubmit} className="d-flex no-wrap">
                <input className="form-control" type="search" placeholder="Type movie title..." aria-label="Search"/>
                <button className="btn" type="submit">Search</button>
            </form>
        </div>
    );
};

export default SearchInput;
