import React from 'react';

import {AnimatePresence, motion} from "framer-motion";
import Navigation from '../components/Navigation/Navigation';

import { withNamespaces } from 'react-i18next';
import styles from './Skills.module.css';

function Skills({t}) {
    return (
        <div>
            <Navigation />
            <div className= {styles.info}>
                <div className= {styles.title}>
                    <p>&#60;h3&#62; </p>
                    <h1>{t('Skills')}</h1>
                    <p> &#60;/h3&#62;</p>
                </div>
                <div class="about">
                  
                </div>
            </div>
        </div>
    );
}

export default withNamespaces()(Skills);
