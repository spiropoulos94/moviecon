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

    const fetchMoviesBySearch = async (searchQuery, searchResultsPage ) => {
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=bc50218d91157b1ba4f142ef7baaa6a0&language=en-US&query=${searchQuery}&page=${searchResultsPage}&include_adult=false`)
        const data = await res.json();
        return data
    }

    const {
        data:movies,fetchNextPage:fetchNextRecentsPage,
        hasNextPage:hasNextRecentsPage,
        isFetching:isFetchingRecents
    } = useInfiniteQuery(`latestMovies_page_${latestMoviesPage}`, ({ pageParam = 1 }) => fetchLatestMovies(pageParam),
        {
            getNextPageParam: ((lastPage) => {
                if (lastPage.page === lastPage.total_pages) return undefined;
                return lastPage.page + 1;
            })
        })


    const {
        data:searchResults,
        fetchNextPage:fetchNextSearchPage,
        hasNextPage:hasNextResultsPage,
        isFetching:isFetchingSearchResults

    } = useInfiniteQuery(`movies_results_for_${searchQuery}`, ({ pageParam = 1 }) => fetchMoviesBySearch(searchQuery, pageParam),
        {
            getNextPageParam: ((lastPage) => {
                if (lastPage.page === lastPage.total_pages) return undefined;
                return lastPage.page + 1;
            })
        })


    return (
        <div className="text-center">
            <>
            <Jumbotron/>
            <div className="container my-5">
                <FullWidthTabs setContent={setContent} setSearchQuery={setSearchQuery} />
            </div>
            { content=="now_playing" && <MovieList data={movies} isFetching={isFetchingRecents}/>}
            { content=="search" && searchQuery!="" && <MovieList data={searchResults} isFetching={isFetchingSearchResults}/>}

            </>
            {content ==="now_playing" && hasNextRecentsPage && <Button onClick={() => fetchNextRecentsPage()} className="m-5" color="primary" variant="contained">Load
                more</Button>}
            {content ==="search" && hasNextResultsPage &&  <Button onClick={() => fetchNextSearchPage()} className="m-5" color="primary" variant="contained">Load
                more</Button>}
        </div>
    );
};

export default MainView;
