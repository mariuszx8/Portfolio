import React, { Suspense }from 'react'
import '../../App.css'
import { CircularProgress } from '@material-ui/core';
const ContactBtn = React.lazy(() => import('../ContactBtn'));
const HeroSection = React.lazy(() => import('../HeroSection'));

function Home() {
    return (
        <div>
            <Suspense fallback={<div className="progress-bar"><CircularProgress /></div>}>
                <ContactBtn/>
                <HeroSection/>
            </Suspense>
        </div>
    )
}

export default Home
