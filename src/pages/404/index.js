import React from 'react';

import './404.css';

import PageDefault from '../../components/PageDefault';

export default function Pagina404() {
    return (
        <PageDefault>
            <h1>Ops! Página não encontrada!</h1>
            <div id="game">

                <iframe scrolling="no" src="https://mariosouto.com/flappy-bird-devsoutinho/" title="Flappy Bird"/>
            </div>
        </PageDefault>
    )
}