import React from 'react'
import { Link } from 'react-router-dom';
import './ImageItem.css'

function ImageItem(props) {
    <link rel="preload" as="image" href={props.src} />
    return (
        <div className="clickable image-item">
            <Link className='link-no-style' to={props.path}>
                <img
                    className='image-item-img'
                    alt={props.name}
                    src={props.src}
                    width={props.width}
                    height={props.height}
                    srcSet={props.srcSet}
                />
                <p className='image-item-name'>
                    <span className="black">{props.name}</span>
                </p>
            </Link>
        </div>
    )
}

export default ImageItem
