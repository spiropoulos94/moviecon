import React, {useState} from 'react';
import "./main-view.styles.scss";
import Jumbotron from "../jumbotron/jumbotron.component";
import MovieList from "../movielist/movielist.component";
import SearchInput from "../searchInput/search-input.component";
import {useInfiniteQuery} from "react-query";
import Button from "@material-ui/core/Button";
import FullWidthTabs from "../searchInput/search-input.component";

const MainView = () => {


    const [content, setContent] = useState("now_playing")

    const [latestMoviesPage, setLatestMoviesPage] = useState(1)
    const [searchResultsPage, setSearchResultsPage] = useState(1)
    const [searchQuery, setSearchQuery] = useState("")

    const fetchLatestMovies = async (latestMoviesPage) => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=bc50218d91157b1ba4f142ef7baaa6a0&language=en-US&page=${latestMoviesPage}`)
        const data = await res.json();
        return data
    }

    const fetchMoviesBySearch = async (searchQuery, searchResultsPage) => {
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=bc50218d91157b1ba4f142ef7baaa6a0&language=en-US&query=${searchQuery}&page=${searchResultsPage}&include_adult=false`)
        const data = await res.json();
        return data
    }

    const {
        data:movies,fetchNextPage
    } = useInfiniteQuery(`latestMovies_page_${latestMoviesPage}`, (page) => fetchLatestMovies(latestMoviesPage),
        {
            getNextPageParam: ((lastPage) => {
                console.log("last page is", lastPage)
                if (lastPage.page === lastPage.total_pages) return undefined;
                return lastPage.page + 1;
            })
        })

    const {
        data:searchResults

    } = useInfiniteQuery(`movies_results_for_${searchQuery}`, (page) => fetchMoviesBySearch(searchQuery, searchResultsPage),
        {
            getNextPageParam: ((lastPage) => {
                console.log("last page is", lastPage)
                if (lastPage.page === lastPage.total_pages) return undefined;
                return lastPage.page + 1;
            })
        })





    return (
        <div>
            <>
            <Jumbotron/>
            <div className="container my-5">
                <FullWidthTabs setContent={setContent} setSearchQuery={setSearchQuery} />
            </div>
            { content=="now_playing" && <MovieList data={movies}/>}
            { content=="search" && searchQuery!="" && <MovieList data={searchResults}/>}

            </>

        </div>
    );
};

export default MainView;
