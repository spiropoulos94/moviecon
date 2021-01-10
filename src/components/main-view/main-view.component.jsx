import React from 'react';
import "./main-view.styles.scss";
import Jumbotron from "../jumbotron/jumbotron.component";
import MovieList from "../movielist/movielist.component";

const MainView = () => {
    return (
        <div>
            <Jumbotron/>
            <MovieList/>
        </div>
    );
};

export default MainView;
