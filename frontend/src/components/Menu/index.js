import React from 'react';

import Logo from '../../assets/LogoMain.png';

import './Menu.css';
import Button from '../Button';
//import ButtonLink from '../../components/Menu/components/ButtonLink';

export default function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Aluraflix" />
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>
    );
}