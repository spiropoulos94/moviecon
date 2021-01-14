import React from 'react';
import "./movie-avatar.styles.scss";

const MovieAvatar = ({movie}) => {
    return (
        <div className="col-10 col-md-3 movie-avatar-wrapper" data-wow-delay="0.1s">
            <div className="related-movie">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="img-fluid" alt=""/>
                <div className="movie-avatar">
                    <div className="related-movie-content">
                        <h4>{movie.original_title}</h4>
                        <h2>{movie.vote_average}</h2>
                        {movie.release_date && <span>{movie.release_date.substring(0, 4)}</span>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieAvatar;
