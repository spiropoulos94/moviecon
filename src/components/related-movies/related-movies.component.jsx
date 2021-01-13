import React from 'react';
import "./related-movies.styles.scss";
import MovieAvatar from "../movie-avatar/movie-avatar.component";

const RelatedMovies = ({relatedMovies}) => {
    return (
        <div  className="related-movies">
            <div className="container-fluid">
                <div className="row related-movies-grid d-flex justify-content-center">
                    {relatedMovies.map(movie=> <MovieAvatar movie={movie} />)}
                </div>

            </div>
        </div>
    );
};

export default RelatedMovies;
