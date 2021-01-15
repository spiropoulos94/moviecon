import React, {useState} from 'react';
import "./movielist.styles.scss";
import Spinner from "../spinner/spinner.component";
import {useInfiniteQuery} from "react-query";
import MovieDialog from "../movie-dialog/movie-dialog.component";
import SearchInput from "../searchInput/search-input.component";


// nowPlayingUrl
// "https://api.themoviedb.org/3/movie/now_playing?api_key=bc50218d91157b1ba4f142ef7baaa6a0&language=en-US&page=1"
// genresList
// "https://api.themoviedb.org/3/genre/movie/list?api_key=bc50218d91157b1ba4f142ef7baaa6a0&language=en-US&page=1"
// posterExample  "https://image.tmdb.org/t/p/w500/srYya1ZlI97Au4jUYAktDe3avyA.jpg"

//TODO LEFT VIDEO ON 12.57 https://www.youtube.com/watch?v=ZE0xeClKosA
//TODO READ ABOUT DEPENDENT QUERIES
// append to response https://developers.themoviedb.org/3/getting-started/append-to-response

const MovieList = ({data}) => {

    return (
        <>
            <div className="movie-list">
                {!data && <Spinner/>}
                {data && data.pages[0].results.map(movie => <MovieDialog key={movie.id} movie={movie}/>)}
            </div>
        </>
    );
};

export default MovieList;
