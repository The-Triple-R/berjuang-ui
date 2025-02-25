import { create } from 'zustand';

const useLanguageStore = create((set) => ({
  lang: window.localStorage.getItem('lang') || 'id',
  setLang: (language) => {
    set(() => ({ lang: language }));
    window.localStorage.setItem('lang', language);
  },
}));

export default useLanguageStore;
