import React, { Suspense }from 'react'
import { CircularProgress } from '@material-ui/core';
const ContactBtn = React.lazy(() => import('../ContactBtn'));
const Header = React.lazy(() => import('../Header'));
const ProjectElement = React.lazy(() => import('../ProjectElement'));

function SmarthiveApp() {

    const images = [
        {
            src: "./assets/shapp2.png",
            width: 1920,
            height: 937,
            alt: 'Aplikacja Smarthive 2'
        },
        {
            src: "./assets/shapp1.png",
            width: 1536,
            height: 2048,
            alt: 'Aplikacja Smarthive 1'
        },        
        {
            src: "./assets/shapp3.png",
            width: 1920,
            height: 937,
            alt: 'Aplikacja Smarthive 3'
        }
      ]

    const technology = [{ name: 'Angular' }, {name: 'SCSS'}, {name: 'HTML'}];

    return (
        <div>
            <Suspense fallback={<div className="progress-bar"><CircularProgress /></div>}>
                <ContactBtn/>
                <Header title='Aplikacja Smarthive' back='/portfolio'/>
                <link rel="preload" as="image" href="/assets/Smarthive-app.png"/>
                <ProjectElement 
                    name='Aplikacja Smarthive'
                    src='./assets/Smarthive-app.png'
                    description="Aplikacja internetowa stworzona dla projektu Smarthive, oparta na frameworku Angular.
                    Służy do podglądu danych pomiarowych zgromadzonych przez specjalne czujniki."
                    technology={technology}
                    link="https://smarthive.pl/"
                    images={images}
                    width="1920"
                    height="933"
                    srcSet='./assets/Smarthive-app-s.png 400w, ./assets/Smarthive-app-m.png 900w, ./assets/Smarthive-app.png 1920w'
                />
            </Suspense>
        </div>
    )
}

export default SmarthiveApp
