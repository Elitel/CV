import React from 'react';
import { withNamespaces } from 'react-i18next';
import './Home.css'

function Home({t}) {
    return (
        <div className ="fullscreen">
            <div className ="ribbon">
                <p></p><h1>{t('Tatiana')}</h1><p></p>
            </div>
        </div>
    );
}

export default withNamespaces()(Home);

