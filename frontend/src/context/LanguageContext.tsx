import React, { createContext, useContext, useState, useEffect } from 'react';
import enLocale from '../locales/en.json';
import hiLocale from '../locales/hi.json';
import asLocale from '../locales/as.json';
import bnLocale from '../locales/bn.json';

export type LanguageCode = 'en' | 'hi' | 'as' | 'bn' | 'kha' | 'mz' | 'mni';

export interface LanguageOption {
  code: LanguageCode;
  name: string;
  nativeName: string;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'hi', name: 'Hindi', nativeName: '???' },
  { code: 'as', name: 'Assamese', nativeName: '????' },
  { code: 'bn', name: 'Bengali', nativeName: '???' },
  { code: 'kha', name: 'Khasi', nativeName: 'Khasi' },
  { code: 'mz', name: 'Mizo', nativeName: 'Mizo' },
  { code: 'mni', name: 'Meitei', nativeName: '????' }
];

const TRANSLATION_DICTIONARIES: Record<string, any> = {
  en: enLocale,
  hi: hiLocale,
  as: asLocale,
  bn: bnLocale,
  kha: enLocale, // Fallback gracefully to English base for remaining dialect keys
  mz: enLocale,
  mni: enLocale
};

interface LanguageContextType {
  currentLanguage: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: (key: string, fallback?: string, params?: Record<string, any>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguageState] = useState<LanguageCode>(() => {
    const saved = localStorage.getItem('ner_lens_lang');
    return (saved as LanguageCode) || 'en';
  });

  const setLanguage = (lang: LanguageCode) => {
    setCurrentLanguageState(lang);
    localStorage.setItem('ner_lens_lang', lang);
  };

  const t = (key: string, fallback?: string, params?: Record<string, any>): string => {
    const dict = TRANSLATION_DICTIONARIES[currentLanguage] || TRANSLATION_DICTIONARIES.en;
    const fallbackDict = TRANSLATION_DICTIONARIES.en;

    const parts = key.split('.');
    
    // 1. Try selected language
    let val: any = dict;
    for (const part of parts) {
      if (val && typeof val === 'object' && part in val) {
        val = val[part];
      } else {
        val = null;
        break;
      }
    }

    // 2. Fallback to English dictionary if missing in selected language
    if (!val || typeof val !== 'string') {
      let fbVal: any = fallbackDict;
      for (const part of parts) {
        if (fbVal && typeof fbVal === 'object' && part in fbVal) {
          fbVal = fbVal[part];
        } else {
          fbVal = null;
          break;
        }
      }
      val = fbVal || fallback || key;
    }

    // 3. String interpolation: replace {{param}} with params[param]
    if (typeof val === 'string' && params) {
      for (const [pKey, pVal] of Object.entries(params)) {
        val = val.replace(new RegExp(`{{${pKey}}}`, 'g'), String(pVal));
      }
    }

    return typeof val === 'string' ? val : fallback || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
};
