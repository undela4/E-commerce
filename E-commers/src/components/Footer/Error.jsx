

import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Error = () => {
    return (
        <div className="container d-flex flex-column justify-content-center align-items-center vh-75 text-center">
            <h1 className="display-1 font-weight-bold text-danger">404</h1>
            <p className="lead">Oops! The page you're looking for doesn't exist.</p>
            <Link to="/" className="btn btn-primary mt-3">Go back to Home</Link>
        </div>
    );
};


