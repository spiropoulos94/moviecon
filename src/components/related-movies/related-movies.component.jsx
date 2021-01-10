import React from 'react';
import "./related-movies.styles.scss";
import MovieAvatar from "../movie-avatar/movie-avatar.component";

const RelatedMovies = () => {
    return (
        <div  className="related-movies">
            <div className="container">
                <div className="row justify-content-center">
                    <MovieAvatar/>
                    <MovieAvatar/>
                    <MovieAvatar/>
                    <MovieAvatar/>
                </div>

            </div>
        </div>
    );
};

export default RelatedMovies;
