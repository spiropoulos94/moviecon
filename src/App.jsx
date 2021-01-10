import Header from "./components/header/header.component";
import './App.scss';
import MainView from "./components/main-view/main-view.component";
import SearchInput from "./components/searchInput/search-input.component";
import ScrollToTop from "react-scroll-to-top";

const nowPlayingUrl = "https://api.themoviedb.org/3/movie/now_playing?api_key=bc50218d91157b1ba4f142ef7baaa6a0&language=en-US&page=1"
const genresList = "https://api.themoviedb.org/3/genre/movie/list?api_key=bc50218d91157b1ba4f142ef7baaa6a0&language=en-US&page=1"
const posterExample ="https://image.tmdb.org/t/p/w500/srYya1ZlI97Au4jUYAktDe3avyA.jpg"

function App() {
  return (
    <div className="App">
      <Header/>
      <MainView/>
      <ScrollToTop smooth color={"#064789"}/>
    </div>
  );
}

export default App;
