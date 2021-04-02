import React from 'react';

import { AnimatePresence, motion } from "framer-motion";
import Navigation from '../components/Navigation/Navigation';

import { withNamespaces } from 'react-i18next';
import styles from './Education.module.css';

function Education({ t }) {
    return (
        <div>
            <Navigation />
            <div className={styles.info}>
                <div className={styles.photo}>

                </div>
                <div className={styles.text}>
                    <p>&#60;h3&#62; </p>
                    <h1>{t('Education &')}<br></br>{t(' Experience')}</h1>
                    <p> &#60;/h3&#62;</p>
                    <p className={styles.education}>orem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu aliquet enim, a fringilla ligula. Donec placerat mauris sit amet lorem suscipit, quis cursus dui interdum. Phasellus posuere vehicula fringilla. Sed egestas fringilla eros auctor scelerisque.</p>
                </div>

            </div>
        </div>
    );
}

export default withNamespaces()(Education);

