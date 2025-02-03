import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./components/HomePage/HomePage.jsx";
import RegisterPage from "./components/RegisterPage/RegisterPage.jsx"
import LoginPage from "./components/LoginPage/LoginPage.jsx"
import "./App.css";


export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="RegisterPage" element={<RegisterPage />} />
                <Route path="LoginPage" element={<LoginPage />} />

            </Routes>
        </Router>
    );
}
