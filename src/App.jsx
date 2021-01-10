import Header from "./components/header/header.component";
import './App.scss';
import MainView from "./components/main-view/main-view.component";
import SearchInput from "./components/searchInput/search-input.component";

function App() {
  return (
    <div className="App">
      <Header/>
      <MainView/>
    </div>
  );
}

export default App;
