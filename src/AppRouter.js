import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Explore from './page/Explore';
import Profile from './page/Profile';
import Combo from './combo/Combo';
import Auth from './auth/Auth';
import Home from './page/HomePage';


const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/combo" element={<combo/>} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="/login" element={<Auth/>} />
                <Route path="/" element={<Home/>} />
            </Routes>
        </Router>
    );
};

export default AppRouter;