import React, { Suspense }from 'react'
import { CircularProgress } from '@material-ui/core';
const ContactBtn = React.lazy(() => import('../ContactBtn'));
const Header = React.lazy(() => import('../Header'));
const ProjectElement = React.lazy(() => import('../ProjectElement'));

function Parafia() {

    const technology = [{ name: 'Wordpress' }, { name: 'Elementor' }, {name: 'CSS'}, {name: 'JS'}, {name: 'PHP'}];

    return (
        <div>
            <Suspense fallback={<div className="progress-bar"><CircularProgress /></div>}>
                <ContactBtn/>
                <Header title='Parafia Przyszowa' back='/portfolio'/>
                <link rel="preload" as="image" href="/assets/Parafia_Przyszowa.png"/>
                <ProjectElement 
                    name='Parafia Przyszowa'
                    src='/assets/Parafia_Przyszowa.png'
                    description="Prosta i elegancka strona oparta na Wordpressie. W pełni responsywna, pozwala na dodawanie postów z wiadomościami. 
                    Wygląd strony był kompromisem pomiędzy minimalistycznym podejściem w tworzeniu nowoczesnych stron, a poprzednią wersją strony."
                    technology={technology}
                    nolink="Strona już nie istnieje"
                />
            </Suspense>
        </div>
    )
}

export default Parafia
