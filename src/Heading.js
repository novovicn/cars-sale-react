import React from 'react'
import Search from './Search'
import './Heading.css';

function Heading() {
    return (
        <div className="heading">
            <div className="heading__photo">
                <h1>Find a car for you.</h1>
            </div>
            <Search/>
        </div>
    )
}

export default Heading
