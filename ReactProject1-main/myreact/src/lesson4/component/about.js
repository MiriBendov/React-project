import React from "react";
import { useTranslation } from "react-i18next";

function About(){
    const{t}=useTranslation();
    return(
        <h1>{t('about.title')}</h1>
    )
}
export default About;