import React, { Suspense }from 'react'
import { CircularProgress } from '@material-ui/core';
const ContactBtn = React.lazy(() => import('../ContactBtn'));
const Header = React.lazy(() => import('../Header'));
const ProjectElement = React.lazy(() => import('../ProjectElement'));

function Smarthive() {

    // const images = [
    //     "./resources/bgdefault.jpg",
    //     "./resources/bg1.jpg",
    //     "./resources/bg2.jpg",
    //     "./resources/bg3.jpg",
    //     "./resources/bg4.jpg",
    //     "./resources/bg5.jpg",
    //     "./resources/bg6.jpg",
    //     "./resources/bg7.jpg",
    //     "./resources/bg8.jpg"
    //   ]
    // const items = [{ name: 'item 1' }, { name: 'item2' }];

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
                />
            </Suspense>
        </div>
    )
}

export default Smarthive
