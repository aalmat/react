import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './page/HomePage';
import Profile from './page/Profile';
import Auth from "./auth/Auth"

const App = () => {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Layout>
                            <HomePage />
                        </Layout>
                    }
                />
                <Route
                    path="/profile"
                    element={
                        <Layout>
                            <Profile />
                        </Layout>
                    }
                />
                <Route
                    path="/login"
                    element={
                        <Layout>
                            < Auth/>
                        </Layout>
                    }
                />
            </Routes>
        </Router>
    );
};

export default App;