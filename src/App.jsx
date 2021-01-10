import Header from "./components/header/header.component";
import './App.scss';
import MainView from "./components/main-view/main-view.component";
import ScrollToTop from "react-scroll-to-top";
import {QueryClient, QueryClientProvider} from "react-query";




const queryClient = new QueryClient();


function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="App">
                <Header/>
                <MainView/>
                <ScrollToTop smooth color={"#064789"}/>
            </div>
        </QueryClientProvider>
    );
}

export default App;
