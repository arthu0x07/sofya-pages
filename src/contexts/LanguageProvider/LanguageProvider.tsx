import { createContext, useState } from "react";
import { Languages } from "/src/mocks/language.ts";

export const LanguageContext = createContext({});

interface LanguageContextProps {
  children: JSX.Element;
}

enum LanguagesType {
  portuguese = "portuguese",
  english = "english",
}

export function LanguageProvider({ children }: LanguageContextProps) {
  const [selectedLanguage, setSelectedLanguage] = useState(
    Languages.portuguese
  );

  const setPortugueseLanguage = () => {
    setSelectedLanguage(Languages.portuguese);
  };

  const setEnglishLanguage = () => {
    setSelectedLanguage(Languages.english);
  };

  const setContextLanguage = (language: string) => {
    console.log("context", language);

    language == LanguagesType.portuguese
      ? setPortugueseLanguage()
      : setEnglishLanguage();
  };

  return (
    <LanguageContext.Provider
      value={{
        selectedLanguage,
        setPortugueseLanguage,
        setEnglishLanguage,
        setContextLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
