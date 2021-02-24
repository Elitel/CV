import React from 'react';

import { withNamespaces } from 'react-i18next';

function Contact({t}) {
    return (
        <div>
            {t('Contact')}
        </div>
    );
}

export default withNamespaces()(Contact);