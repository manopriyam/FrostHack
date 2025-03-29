// importing from libraries
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// importing from files
import "./App.css";
import SERVER_URL from './config.jsx';
import HomePage from "./pages/HomePage.jsx";
import TestPage from "./pages/TestPage.jsx";


// app component
function App() {
    console.log(`Client Running on ${import.meta.env.VITE_MODE} Mode at Port ${location.port}`);
    console.log(`Server URL: ${SERVER_URL}`);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/test" element={<TestPage />} />
            </Routes>
        </Router>
    );
}

export default App;
