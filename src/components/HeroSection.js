import React from 'react'
import ArrowButton from './ArrowButton'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className="hero-container">
            <div>
                <div className="title-box white">
                    <span>Mariusz Kudłacz</span>
                </div>
                <div className="title-box black">
                    <span>portfolio</span>
                </div>
            </div>

            <ArrowButton/>
        </div>
    )
}

export default HeroSection
