import { create } from 'zustand';
import { useEffect, useState } from 'react';

const languageStore = create((set) => ({
  lang: 'id',
  setLang: (language) => {
    set(() => ({ lang: language }));
    localStorage.setItem('lang', language);
  },
}));

// Tambahan custom hook agar dapat menggunakan localStorage di awal aplikasi berjalan
export const useLanguageStore = () => {
  const store = languageStore();
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
      store.setLang(savedLang);
    }

    setIsHydrated(true);
  }, []);

  return { ...store, isHydrated };
};

export default useLanguageStore;
