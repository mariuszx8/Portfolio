import React, { Suspense }from 'react'
import { CircularProgress } from '@material-ui/core';
const ContactBtn = React.lazy(() => import('../ContactBtn'));
const Header = React.lazy(() => import('../Header'));
const ProjectElement = React.lazy(() => import('../ProjectElement'));

function Smarthive() {

    const images = [
        {
            src: "./assets/sh1.png",
            width: 3,
            height: 4
        },
        {
            src: "./assets/sh2.png",
            width: 14,
            height: 25
        },        
        {
            src: "./assets/sh3.png",
            width: 16,
            height: 25
        },        
        {
            src: "./assets/sh4.png",
            width: 71,
            height: 50
        }
      ]

    const technology = [{ name: 'Angular' }, {name: 'SCSS'}, {name: 'HTML'}];

    return (
        <div>
            <Suspense fallback={<div className="progress-bar"><CircularProgress /></div>}>
                <ContactBtn/>
                <Header title='Strona Smarthive' back='/portfolio'/>
                <link rel="preload" as="image" href="/assets/Smarthive.png" />
                <ProjectElement 
                    name='Strona Smarthive'
                    src='/assets/Smarthive.png'
                    description="Prosta strona stworzona dla projektu Smarthive, oparta na frameworku Angular. Prezentuje niezbędne informacje dotyczące projektu oraz zawiera formularz kontaktowy."
                    technology={technology}
                    link="https://smarthive.pl/"
                    images={images}
                />
            </Suspense>
        </div>
    )
}

export default Smarthive
