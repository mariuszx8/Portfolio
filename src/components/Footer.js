import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <footer className="black">
           <span className='website-rights'>&copy; {(new Date().getFullYear())} Mariusz Kudłacz</span> 
        </footer>
    )
}

export default Footer
