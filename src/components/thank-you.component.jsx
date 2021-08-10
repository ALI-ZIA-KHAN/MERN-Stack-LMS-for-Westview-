import React from 'react';
import { Link } from 'react-router-dom';
import './Jitsi.css';
const ThankYouComponent = () => {
    return (
        <>
            <p style={{ fontSize: '40px' }}>Call Ended. Thank You</p>
            <div style={{ textAlign: 'center' }}>
                <Link to="/">Return to Home</Link>
            </div>
        </>
    );
}

export default ThankYouComponent;
