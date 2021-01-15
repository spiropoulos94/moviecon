import React, {useState} from 'react';
import "./main-view.styles.scss";
import Jumbotron from "../jumbotron/jumbotron.component";
import MovieList from "../movielist/movielist.component";
import SearchInput from "../searchInput/search-input.component";
import {useInfiniteQuery} from "react-query";

const MainView = () => {


    const [content, setContent] = useState("now_playing")

    const [page, setPage] = useState(2)
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
        <div>
            <Jumbotron/>
            <div className="container my-5">
                <SearchInput setContent={setContent} setSearchQuery={setSearchQuery} />
            </div>
            { content=="now_playing" ? <MovieList data={movies}/> : <MovieList data={searchResults}/> }
        </div>
    );
};

export default MainView;
