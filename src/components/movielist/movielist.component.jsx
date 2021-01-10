import React from 'react';
import "./movielist.styles.scss";
import MovieCard from "../movie-card/movie-card.component";

const MovieList = () => {
    return (
        <div className="movie-list">
            <MovieCard/><MovieCard/><MovieCard/><MovieCard/><MovieCard/><MovieCard/><MovieCard/><MovieCard/><MovieCard/><MovieCard/>
            <MovieCard/><MovieCard/><MovieCard/><MovieCard/><MovieCard/><MovieCard/><MovieCard/><MovieCard/><MovieCard/><MovieCard/>
        </div>
    );
};

export default MovieList;
