import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/LogoMain.png';

import './Menu.css';
import Button from '../Button';
//import ButtonLink from '../../components/Menu/components/ButtonLink';

export default function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Aluraflix" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    );
}