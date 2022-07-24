import './App.css';
import Homepage from "./pages/Homepage/Homepage";
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import BeerPage from "./pages/BeerPage/BeerPage";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainPage />}>
                <Route path={''} element={<Homepage />} />
                <Route path={'/beer/:id'} element={<BeerPage />} />
            </Route>
        </Routes>
    );
}

export default App;
