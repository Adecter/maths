import React, {useState} from 'react';
import {IntlProvider} from 'react-intl';
import Russian from '../lang/ru.json';
import Latvian from '../lang/lv.json';
import English from '../lang/en.json';

export const Context = React.createContext();

const local = navigator.language;

let lang;
if (local === 'en') {
    lang = English;
}else {
    if (local === 'lv') {
        lang = Latvian;
    } else {
        lang = Russian;
    }
}

const Wrapper = (props) => {
    const [locale, setLocale] = useState(local);

    const [messages, setMessages] = useState(lang);

    function selectLanguage(e) {
        const newLocale = e.target.value;
        setLocale(newLocale);
        if (newLocale === 'en') {
            setMessages(English);
        } else {
            if (newLocale === 'lv'){
                setMessages(Latvian);
            } else {
                setMessages(Russian);
            }
        }
    }

    return (
        <Context.Provider value = {{locale, selectLanguage}}>
            <IntlProvider messages={messages} locale={locale}>
                {props.children}
            </IntlProvider>
        </Context.Provider>

    );
}


export default Wrapper;