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
            />
            <ImageItem
                src='/assets/Smarthive-app-mockup.png'
                name='Aplikacja Smarthive'
                path='/portfolio/smarthive-app'
            />
            <ImageItem 
                src='/assets/Simpla_mockup.png'
                name='Strona aplikacji Simpla'
                path='/portfolio/simpla'
            />
            <ImageItem
                src='/assets/Parafia_Przyszowa_mockup.png'
                name='Strona parafii Przyszowa'
                path='/portfolio/parafia'
            />
        </div>
    )
}

export default ImagesContainer
