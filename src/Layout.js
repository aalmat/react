import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/login">Login</Link></li>

                        {/* Add more navigation links as needed */}
                    </ul>
                </nav>
            </header>

            <main>
                {children}
            </main>

            <footer>
                <p>Footer content</p>
            </footer>
        </div>
    );
};

export default Layout;