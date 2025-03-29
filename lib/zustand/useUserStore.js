const { create } = require("zustand");

const useUserStore = create((set) => ({
  isLogin: false,
  user: {},
  setIsLogin: (bool) => {
    set(() => ({ 
      isLogin: bool
     }));
  },
  setUser: (user) => {
    set(() => ({ 
      user: user
     }));
  },
}));

export default useUserStore;
