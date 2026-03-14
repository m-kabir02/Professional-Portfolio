import React from 'react'
import WindowWrapper from '#hoc/WindowWrapper';
import { WindowControls } from '#components';
import { socials } from '#constants';

const Contact = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target='contact' />
                <h2>Contact me</h2>
            </div>
            <div className='p-5 space-y-5'>
                <img src="./images/my-image2.jpg" 
                alt="Mosammad" 
                className='w-20 rounded-full' />
                <h3>Let's Connect</h3>
                <p>Got an idea? Want to Collaborate? I'm in.</p>
                <p>sxdiyak@gmail.com</p>
                <ul>
                    {socials.map(({ id, bg, link, icon, text }) => (
                        <li key={id} style={{ backgroundColor: bg }}>
                            <a href={link} 
                            target='_blank' 
                            rel='noopener noreferrer'
                            title={text}>
                                <img src={icon} alt={text} className='size-5' />
                                <p>{text}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};


const ContactWindow = WindowWrapper(Contact, 'contact');

export default ContactWindow;