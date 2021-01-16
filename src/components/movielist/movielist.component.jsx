import React from 'react';
import "./movielist.styles.scss";
import Spinner from "../spinner/spinner.component";
import MovieDialog from "../movie-dialog/movie-dialog.component";


const MovieList = ({data, isFetching}) => {

    return (
        <>
            <div className="movie-list">
                {data && data.pages.map(page => page.results.map(movie=> <MovieDialog key={movie.id} movie={movie} />))}
            </div>
            {isFetching && <Spinner/>}
        </>
    );
};

export default MovieList;
