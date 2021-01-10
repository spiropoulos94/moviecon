import React from 'react';
import "./header.styles.scss";
import SearchInput from "../searchInput/search-input.component";

const Header = () => {
    return (
        <nav className="navbar navbar-dark ">
            <a className="navbar-brand" href="#">MovieCon</a>
        </nav>
    );
};

export default Header;
