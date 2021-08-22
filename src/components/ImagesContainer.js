import React from 'react'
import ImageItem from './ImageItem'
import './ImagesContainer.css'

function ImagesContainer() {
    return (
        <div className="images-container">
            <ImageItem 
                src='/assets/Smarthive-mockup.png'
                name='Strona startupu Smarthive'
                path='/portfolio/smarthive'
                width='900'
                height='609'
                srcSet='/assets/Smarthive-mockup-s.png 300w, /assets/Smarthive-mockup-m.png 500w, /assets/Smarthive-mockup.png 900w'
            />
            <ImageItem
                src='/assets/Smarthive-app-mockup.png'
                name='Aplikacja Smarthive'
                path='/portfolio/smarthive-app'
                width='900'
                height='573'
                srcSet='/assets/Smarthive-app-mockup-s.png 300w, /assets/Smarthive-app-mockup-m.png 500w, /assets/Smarthive-app-mockup.png 900w'
            />
            <ImageItem 
                src='/assets/Simpla_mockup.png'
                name='Strona aplikacji Simpla'
                path='/portfolio/simpla'
                width='900'
                height='544'
                srcSet='/assets/Simpla_mockup-s.png 300w, /assets/Simpla_mockup-m.png 500w, /assets/Simpla_mockup.png 900w'
            />
            <ImageItem
                src='/assets/Parafia_Przyszowa_mockup.png'
                name='Strona parafii Przyszowa'
                path='/portfolio/parafia'
                width='900'
                height='563'
                srcSet='/assets/Parafia_Przyszowa_mockup-s.png 300w, /assets/Parafia_Przyszowa_mockup-m.png 500w, /assets/Parafia_Przyszowa_mockup.png 900w'
            />
        </div>
    )
}

export default ImagesContainer
