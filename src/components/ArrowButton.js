import React from 'react'
import './ArrowButton.css'
import {Link} from 'react-router-dom';

function ArrowButton() {

    return (
        <>
        <Link to='/portfolio'>
            <div className="arrow-down">
                <span className="material-icons">
                    arrow_forward_ios
                </span>
            </div>
        </Link>
        </>
    )
}

export default ArrowButton
