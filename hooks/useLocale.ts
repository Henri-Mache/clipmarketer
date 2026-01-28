'use client'

import { useState, useEffect } from 'react'

export type Locale = 'en' | 'de'

export function useLocale(): Locale {
  const [locale, setLocale] = useState<Locale>('en')

  useEffect(() => {
    // Check browser language
    const browserLang = navigator.language || (navigator as { userLanguage?: string }).userLanguage || 'en'

    // Check if German
    if (browserLang.toLowerCase().startsWith('de')) {
      setLocale('de')
      return
    }

    // Default to English
    setLocale('en')
  }, [])

  return locale
}

export const footerLinks = {
  en: [
    { href: '/imprint', label: 'Imprint' },
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms-of-service', label: 'Terms of Service' },
  ],
  de: [
    { href: '/de/impressum', label: 'Impressum' },
    { href: '/de/datenschutzerklaerung', label: 'Datenschutzerklärung' },
    { href: '/de/agb', label: 'AGB' },
  ],
}
