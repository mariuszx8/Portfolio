import React, { Suspense }from 'react'
import '../../App.css'
import { CircularProgress } from '@material-ui/core';
const ContactBtn = React.lazy(() => import('../ContactBtn'));
const Header = React.lazy(() => import('../Header'));
const Footer = React.lazy(() => import('../Footer'));
const ImagesContainer = React.lazy(() => import('../ImagesContainer'));

function Portfolio() {
    return (
        <>
        <Suspense fallback={<div className="progress-bar"><CircularProgress /></div>}>
            <ContactBtn/>
            <Header title='Realizacje' back='/'/>
            <link rel="preload" as="image" href="/assets/Smarthive-mockup.png"/>
            <ImagesContainer/>
            <Footer/>
        </Suspense>
        </>
    )
}

export default Portfolio
