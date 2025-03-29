const { default: useUserStore } = require('@/lib/zustand/useUserStore');
const { default: axios } = require('axios');
const { useRouter } = require('next/navigation');
const { useEffect, useState } = require('react');

const useNeedLogin = () => {
  const [isLoading, setIsLoading] = useState(true);

  const { setUser, isLogin, setIsLogin } = useUserStore((state) => state);

  const router = useRouter();

  useEffect(() => {
    if (isLogin) return;

    const fetchDataUser = async () => {
      try {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/me`, {
          withCredentials: true,
        });

        setUser(data.data);
        setIsLogin(true);
        setIsLoading(false);
      } catch (error) {
        router.push('/');
      }
    };

    fetchDataUser();
  }, []);

  return {
    isLoading,
    isLogin
  }
};

export default useNeedLogin