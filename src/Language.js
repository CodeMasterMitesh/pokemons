import React from 'react'
import { useTranslation } from 'react-i18next'  


function Language() {
    const {t,i18n} =useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
      };
  return (
    <div className='language'>
       <div>
          <span className='cursor-pointer'  onClick={() => changeLanguage('en')}>{t('english')}</span>
          <span className='cursor-pointer' onClick={() => changeLanguage('he')}>{t('hebrew')}</span>
          <span className='cursor-pointer' onClick={() => changeLanguage('pt')}>{t('purtuguese')}</span>
        </div>
    </div>
  )
}

export default Language
