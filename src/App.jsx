import Header from "./components/header/header.component";
import './App.scss';
import MainView from "./components/main-view/main-view.component";
import SearchInput from "./components/searchInput/search-input.component";
import ScrollToTop from "react-scroll-to-top";

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
