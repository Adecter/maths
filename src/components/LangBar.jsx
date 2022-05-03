import React, { useState,useContext } from 'react'
import { useTranslation, Trans } from 'react-i18next';
import {Context} from "./Wrapper";

export default function LangBar() {

  const context = useContext(Context);

    const lngs = {
        en: { nativeName: 'En' },
        de: { nativeName: 'De' },
        ru: {nativeName: 'Рус'}
      };
              
  return (
    <div className='Language__content'>
      <button value='en' style={{ opacity: context.locale === 'en' ? '1' : '.2'}} onClick={(e)=> context.selectLanguage(e)} type="submit">EN</button>
      <button value='lv' style={{ opacity: context.locale === 'lv' ? '1' : '.2'}} onClick={(e)=> context.selectLanguage(e)} type="submit">LV</button>
      <button value='ru' style={{ opacity: context.locale === 'ru' ? '1' : '.2'}} onClick={(e)=> context.selectLanguage(e)} type="submit">RU</button>
    </div>
  )
}







