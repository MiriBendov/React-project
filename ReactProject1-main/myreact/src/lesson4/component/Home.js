import React from 'react';
import { useTranslation } from 'react-i18next'; // מייבא את useTranslation

function Home() {
  const { t } = useTranslation(); // מחזיר את פונקציית t

  return (
    <h1>{t('home.title')}</h1> // משתמש במפתח home כדי להחזיר את התרגום המתאים
    
  );
}

export default Home;
