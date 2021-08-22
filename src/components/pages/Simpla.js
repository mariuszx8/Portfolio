import React, { Suspense }from 'react'
import { CircularProgress } from '@material-ui/core';
const ContactBtn = React.lazy(() => import('../ContactBtn'));
const Header = React.lazy(() => import('../Header'));
const ProjectElement = React.lazy(() => import('../ProjectElement'));

function Simpla() {

    const images = [
        {
            src: "./assets/Simpla.gif",
            width: 1889,
            height: 907,
            alt: "Strona aplikacji Simpla"
        }
      ]

    const technology = [{ name: 'Wordpress' }, { name: 'Elementor' }, {name: 'CSS'}];

    return (
        <div>
            <Suspense fallback={<div className="progress-bar"><CircularProgress /></div>}>
                <ContactBtn/>
                <Header title='Strona Simpla' back='/portfolio'/>
                <link rel="preload" as="image" href="/assets/Simpla.png"/>
                <link rel="preload" as="image" href="/assets/Simpla.gif"/>
                <ProjectElement 
                    name='Strona aplikacji Simpla'
                    src='./assets/Simpla.png'
                    description="Minimalistyczna, w  pełni responsywna, oparta na Wordpressie strona prezentująca aplikację do nauki, opartą na metodzie tzw. 'fiszek'. "
                    technology={technology}
                    nolink="Strona już nie istnieje"
                    images={images}
                    direction="row"
                    width="919"
                    height="455"
                />
            </Suspense>
        </div>
    )
}

export default Simpla
