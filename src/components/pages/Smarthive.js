import React, { Suspense }from 'react'
import { CircularProgress } from '@material-ui/core';
const ContactBtn = React.lazy(() => import('../ContactBtn'));
const Header = React.lazy(() => import('../Header'));
const ProjectElement = React.lazy(() => import('../ProjectElement'));

function Smarthive() {

    const images = [
        {
            src: "./assets/sh1.png",
            width: 1536,
            height: 2048,
            alt: "Strona Smarthive 1",
            // srcSet: "./assets/sh1-s.png 500w, ./assets/sh1-m.png 1000w, ./assets/sh1.png 1536w"
        },
        {
            src: "./assets/sh2.png",
            width: 1079,
            height: 1919,
            alt: "Strona Smarthive 2",
        },        
        {
            src: "./assets/sh3.png",
            width: 1920,
            height: 3018,
            alt: "Strona Smarthive 3",
        },        
        {
            src: "./assets/sh4.png",
            width: 1920,
            height: 1345,
            alt: "Strona Smarthive 4",
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
                    src='./assets/Smarthive.png'
                    description="Prosta strona stworzona dla projektu Smarthive, oparta na frameworku Angular. Prezentuje niezbędne informacje dotyczące projektu oraz zawiera formularz kontaktowy."
                    technology={technology}
                    link="https://smarthive.pl/"
                    images={images}
                    width="1900"
                    height="933"
                    srcSet='./assets/Smarthive-s.png 400w, ./assets/Smarthive-m.png 900w, ./assets/Smarthive.png 1900w'
                />
            </Suspense>
        </div>
    )
}

export default Smarthive
