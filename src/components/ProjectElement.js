import React from 'react'
import './ProjectElement.css'
import Gallery from 'react-photo-gallery';

function ProjectElement(props) {
    return (
        <div className='project-element-container'>
            <div className='project-description'>{props.description}</div>
            <div className="project-flex">
                <img
                    className='project-cover-img'
                    alt={props.name}
                    src={props.src}
                    width={props.width}
                    height={props.height}
                    srcSet={props.srcSet}
                />
            </div>
            <div className='project-info'>
                <p>Wykorzystane technologie:</p>
                <div className='project-technology'>
                    {props.technology.map((technology,index) => (<span className='black' key={index}>{technology.name}</span>))}
                </div>
                <div>
                    <p>Link do strony:</p>
                    <div className='project-link'>
                        {props.link ? <a className='black' href={props.link}>{props.name}</a> : <span className='black'>{props.nolink}</span>}
                    </div>
                </div>
                {props.images ? 
                    <div>
                        <p>Galeria:</p> 
                        <div className='project-gallery'> 
                            <Gallery photos={props.images} margin={5} direction={props.direction ? props.direction : 'column'}/>
                        </div>
                    </div> 
                    : " "}
            </div>
        </div>
    )
}

export default ProjectElement
