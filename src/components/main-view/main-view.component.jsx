import React from 'react';
import "./main-view.styles.scss";
import Jumbotron from "../jumbotron/jumbotron.component";
import MovieList from "../movielist/movielist.component";
import SearchInput from "../searchInput/search-input.component";

const MainView = () => {
    return (
        <div>
            <Jumbotron/>
            <div className="container my-5">
                <SearchInput/>
            </div>
            <MovieList/>
        </div>
    );
};

export default MainView;
