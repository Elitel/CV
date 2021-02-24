import React from "react";
import {Link} from 'react-router-dom'
import "./Navigation.css";
import i18n from '../../i18n';

import { withNamespaces } from 'react-i18next';

function Navigation ({ t }) {
  
  const changeLanguage = () => {
    let lang = document.getElementById("lang").textContent;
    i18n.changeLanguage(lang.toLocaleLowerCase());
    document.getElementById("lang").textContent = lang === 'RU' ? 'EN' : 'RU';
  }

  return (
    <div className="nav">
      <div className="navbar">
        <ul>
          <li className="nav-item" id="lang" onClick={() => changeLanguage()}>RU</li>
          <li className="nav-item"><Link to="/">{t('Home')}</Link></li>
          <li className="nav-item"><Link to="/about">About</Link></li>
          <li className="nav-item"><Link to="/education">Education</Link></li>
          <li className="nav-item"><Link to="/skills">Skills</Link></li>
          <li className="nav-item"><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default withNamespaces()(Navigation);
