export const defaultLocale = 'en' as const

export const languageNames = {
  en: 'English',
  zh: '简中',
}

export type Locale = keyof typeof languageNames

export const locales =  Object.keys(languageNames) as Locale[]
