import React from 'react';

import { AnimatePresence, motion } from "framer-motion";
import Navigation from '../components/Navigation/Navigation';

import { withNamespaces } from 'react-i18next';
import styles from './Skills.module.css';

function Skills({ t }) {
    return (
        <div>
            <Navigation />
            <div className={styles.info}>
                <div className={styles.title}>
                    <p>&#60;h3&#62; </p>
                    <h1>{t('Skills')}</h1>
                    <p> &#60;/h3&#62;</p>
                </div>
                <div className={styles.skills}>
                    <div className={styles.skill}>
                        <p className={styles.tag}>&#60;h4&#62; </p>
                        <h2>{t('Soft Skills')}</h2>
                        <p className={styles.tag}> &#60;/h4&#62;</p>
                        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu aliquet enim, a fringilla ligula. Donec placerat mauris sit amet lorem suscipit, quis cursus dui interdum. Phasellus posuere vehicula fringilla. Sed egestas fringilla eros auctor scelerisque.</p>
                    </div>
                    <div className={styles.skill}>
                        <p className={styles.tag}>&#60;h4&#62; </p>
                        <h2>{t('Hard Skills')}</h2>
                        <p className={styles.tag}> &#60;/h4&#62;</p>
                        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu aliquet enim, a fringilla ligula. Donec placerat mauris sit amet lorem suscipit, quis cursus dui interdum. Phasellus posuere vehicula fringilla. Sed egestas fringilla eros auctor scelerisque.</p>
                    </div>
                    <div classame={styles.hard_skills}></div>
                </div>
                <div className={styles.skills_list}>

                </div>
            </div>
        </div>
    );
}

export default withNamespaces()(Skills);
