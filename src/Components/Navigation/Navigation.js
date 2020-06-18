import React from 'react';
import './Navigation.css';
function Navigation () {
    return (
    <div className="container">
        <div className="logo-container">
            <div className="logo">Home</div>
        </div>
        <div className="items-container">
            <div className="item-1">Articles</div>
            <div className="item-2">Work</div>
            <div className="item-3">Videos</div>
            <div className="item-4">Newsletter</div>
            <div className="item-5">Account</div>
        </div>
        <div className="search-container">
            <div className="search-icon">Search</div>
        </div>
    </div>
    )
}
export default Navigation