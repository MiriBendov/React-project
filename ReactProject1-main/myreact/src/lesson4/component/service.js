import React from 'react';
import { useTranslation } from 'react-i18next';
function Service(){
    const {t}=useTranslation();
    return(
        <h1>{t('service.title')}</h1>
    )
}
export default Service;