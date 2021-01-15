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

const MovieList = () => {

    const [content, setContent] = useState("now_playing")

    const [page, setPage] = useState(1)
    const [searchResultsPage, setSearchResultsPage] = useState(1)
    const [searchQuery, setSearchQuery] = useState("potter")

    const fetchMovies = async (page) => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=bc50218d91157b1ba4f142ef7baaa6a0&language=en-US&page=${page}`)
        const data = await res.json();
        return data
    }

    const fetchMoviesBySearch = async (searchQuery, page) => {
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=bc50218d91157b1ba4f142ef7baaa6a0&language=en-US&query=${searchQuery}&page=${searchResultsPage}&include_adult=false`)
        const data = await res.json();
        return data
    }

    const {
        data:movies
    } = useInfiniteQuery("movies", (page) => fetchMovies(page),
        {
            getNextPageParam: ((lastPage) => {
                console.log("last page is", lastPage)
                if (lastPage.page === lastPage.total_pages) return undefined;
                return lastPage.page + 1;
            })
        })

    const {
        data:searchResults

    } = useInfiniteQuery(`movies_results_for_${searchQuery}`, (page) => fetchMoviesBySearch(searchQuery),
        {
            getNextPageParam: ((lastPage) => {
                console.log("last page is", lastPage)
                if (lastPage.page === lastPage.total_pages) return undefined;
                return lastPage.page + 1;
            })
        })





    return (
        <>
            <div className="container my-5">
                <SearchInput setSearchQuery={setSearchQuery} />
            </div>
            <div className="movie-list">
                {!movies && <Spinner/>}
                {movies && movies.pages[0].results.map(movie => <MovieDialog key={movie.id} movie={movie}/>)}
            </div>
        </>
    );
};

export default MovieList;
