import React from 'react';
import "./movie-avatar.styles.scss";

const MovieAvatar = () => {
    return (
        <div className="col-xl-4 col-lg-4 col-md-3 col-sm-4 col-5 movie-avatar-wrapper" data-wow-delay="0.1s">
            <div className="related-movie">
                <img src="https://images.pexels.com/photos/5797969/pexels-photo-5797969.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="img-fluid" alt=""/>
                <div className="movie-avatar">
                    <div className="related-movie-content">
                        <h4>Harry Poster</h4>
                        <span>2011</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieAvatar;
