import React, {useState, useEffect, createContext} from 'react';
import strings from '../constants/lang';

export const LanguageContext = createContext(null);

function LanguageProvider(props) {
  const [language, setLang] = useState(strings.getLanguage());

  useEffect(() => {
    strings.setLanguage(language);
  }, [language]);

  const updateLanguage = lang => {
    setLang(lang);
    strings.setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{language, updateLanguage}}>
      {props.children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;
