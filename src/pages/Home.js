import React from 'react';

import {AnimatePresence, motion} from "framer-motion";
import Navigation from '../components/Navigation/Navigation';

import { withNamespaces } from 'react-i18next';
import './Home.css'

function Home({t}) {
    return (
        <div className ="fullscreen">
            <Navigation />
            <div className ="ribbon">
                <div>
                    <p className="tag">&#60;h1&#62;</p><h1>{t('Tatiana Lugovskaya')}</h1><p className="tag">&#60;/h1&#62;</p>
                    <br></br>
                    <p>&#60;h2&#62;</p><h2>{t('prof')}</h2><p>&#60;/h2&#62;</p>
                    <br></br>
                </div>
            </div>
        </div>
    );
}

export default withNamespaces()(Home);

