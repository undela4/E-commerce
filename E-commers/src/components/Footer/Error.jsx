

import React from 'react';
import { Link } from 'react-router-dom';

export const Error = () => {
    return (
        <div className="container d-flex flex-column justify-content-center align-items-center vh-75 text-center mb-5">
    <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?size=338&ext=jpg&ga=GA1.1.2082370165.1716768000&semt=ais_user"/>
            <p className="lead">Oops! The page you're looking for doesn't exist.</p>
            <Link to="/" className="btn btn-primary mt-3">Go back to Home</Link>
        </div>
    );
};


