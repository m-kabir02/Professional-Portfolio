import React from 'react'
import dayjs from 'dayjs';
import { navLinks, navIcons } from '../constants';
import useWindowStore from '#store/window';
import Battery from './Battery';

const Navbar = () => {
    const { openWindow } = useWindowStore();


    return <nav>
        <div>
            <img src="./images/logo.svg" alt="logo" />
            <p className="font-bold">Mosammad's Portfolio</p>

            <ul className="max-[730px]:hidden">
                {navLinks.map(({ id, name, type }) => (
                    <li key={id} onClick={() => openWindow(type)}>
                        <p>{name}</p>
                    </li>
                ))}
                
            </ul>
        </div>
    <div>
                <Battery />
            <ul>
                {navIcons.map(({id, img}) => (
                <li key={id}>
                    <img src={img} className="icon-hover" alt={ `icon-${id}`} />
                    </li>
                ))}
            </ul>
                                

            <time>{ dayjs().format('ddd MMM D h:mm A')}</time>
    </div>

    </nav>
};

export default Navbar;