import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom';

function Header(props) {
    return (
            <header>
                <span className="black inline-flex">
                    <Link to={props.back} className='arrow-back inline-flex'>
                        <span className="material-icons">arrow_right_alt</span>
                    </Link>
                    <span className='text'>{props.title}</span>
                </span>
            </header>
    )
}

export default Header
