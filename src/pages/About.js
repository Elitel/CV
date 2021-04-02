import React from 'react';

import { AnimatePresence, motion } from "framer-motion";
import Navigation from '../components/Navigation/Navigation';

import { withNamespaces } from 'react-i18next';
import styles from './About.module.css';

function About({ t }) {
    return (
        <div>
            <Navigation />
            <div className= {styles.info}>
                <div className= {styles.title}>
                    <p>&#60;h3&#62; </p>
                    <h1>{t('About me')}</h1>
                    <p> &#60;/h3&#62;</p>
                </div>
                <div class= {styles.about}>
                    <div className= {styles.photo}>
                        dfbdhbtd  ryf ywgwrfyrwgfr
                    </div>
                    <div className= {styles.text}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu aliquet enim, a fringilla ligula. Donec placerat mauris sit amet lorem suscipit, quis cursus dui interdum. Phasellus posuere vehicula fringilla. Sed egestas fringilla eros auctor scelerisque.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu aliquet enim, a fringilla ligula. Donec placerat mauris sit amet lorem suscipit, quis cursus dui interdum. Phasellus posuere vehicula fringilla. Sed egestas fringilla eros auctor scelerisque.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu aliquet enim, a fringilla ligula. Donec placerat mauris sit amet lorem suscipit, quis cursus dui interdum. Phasellus posuere vehicula fringilla. Sed egestas fringilla eros auctor scelerisque.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu aliquet enim, a fringilla ligula. Donec placerat mauris sit amet lorem suscipit, quis cursus dui interdum. Phasellus posuere vehicula fringilla. Sed egestas fringilla eros auctor scelerisque.</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default withNamespaces()(About);