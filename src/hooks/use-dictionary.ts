'use client';

import { useState, useEffect } from 'react';
import { getDictionary } from '@/dictionaries';
import { Locale } from '../../i18n-config';

export function useDictionary(lang: Locale) {
  const [dictionary, setDictionary] = useState<any>(null);

  useEffect(() => {
    const fetchDictionary = async () => {
      const dict = await getDictionary(lang);
      setDictionary(dict);
    };

    fetchDictionary();
  }, [lang]);

  return dictionary;
}
