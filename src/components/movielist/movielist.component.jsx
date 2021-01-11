import React, {useState} from 'react';
import "./movielist.styles.scss";
import MovieCard from "../movie-card/movie-card.component";
import Spinner from "../spinner/spinner.component";
import {useInfiniteQuery} from "react-query";


// nowPlayingUrl
// "https://api.themoviedb.org/3/movie/now_playing?api_key=bc50218d91157b1ba4f142ef7baaa6a0&language=en-US&page=1"
// genresList
// "https://api.themoviedb.org/3/genre/movie/list?api_key=bc50218d91157b1ba4f142ef7baaa6a0&language=en-US&page=1"
// posterExample  "https://image.tmdb.org/t/p/w500/srYya1ZlI97Au4jUYAktDe3avyA.jpg"

//TODO LEFT VIDEO ON 12.57 https://www.youtube.com/watch?v=ZE0xeClKosA
// append to response https://developers.themoviedb.org/3/getting-started/append-to-response

const MovieList = () => {

    const [page, setPage] = useState(1)

    const fetchMovies = async (page) => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=bc50218d91157b1ba4f142ef7baaa6a0&language=en-US&page=${page}`)
        const data = await res.json();
        return data
    }

    const {data, isFetching, fetchNextPage, isError, hasNextPage} = useInfiniteQuery("movies", (page)=> fetchMovies(page),
        {
            getNextPageParam:((lastPage) => {
                console.log("last page is", lastPage)
                if(lastPage.page === lastPage.total_pages ) return undefined;
                return lastPage.page + 1;
            })
        })

    console.log(data)


    return (
        <div className="movie-list">
            {isFetching && <Spinner/>}
            {data && data.pages[0].results.map(movie => <MovieCard key={movie.id} movie={movie} />)}
        </div>
    );
};

export default MovieList;
