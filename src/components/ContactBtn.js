import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import './ContactBtn.css'

function ContactBtn() {
    const [click, setClick] = useState(true);

    const handleClick = () => setClick(!click);
    const hideContact = () => {
        setClick(true);
    }

    useEffect(() => {
        hideContact()
    }, []);

    return (
        <>
            <div className={click ? 'contact-btn' : 'contact-btn close-btn active-mb'} onClick={handleClick}>
                {click ? 'Kontakt' : 'Zamknij'}
            </div>
            <div className={click ? 'contact-details' : 'contact-details active active-mb'}>
                <span>
                    <div>Mariusz Kudłacz</div>
                    <div>mariusz.kudlacz(a)op.pl</div>
                    <br/>
                    <div>
                        <a className='link-no-style' href='https://www.linkedin.com/in/mariusz-kud%C5%82acz-00090b1b7/'>LinkedIn</a>,&nbsp;
                        <a className='link-no-style' href='https://github.com/mariuszx8'>GitHub</a>
                    </div>
                </span>
            </div>
        </>
    )
}

export default ContactBtn
