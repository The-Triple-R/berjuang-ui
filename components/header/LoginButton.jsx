'use client';
import { Button } from '../ui/button';
import GoogleIcon from '../icons/google-icon';
import useLanguageStore from '@/lib/zustand/useLanguageStore';
import langData from '@/lib/lang';

const LoginButton = () => {
  const { lang } = useLanguageStore();

  const handleLogin = () => {
    localStorage.setItem('isPressLogin', 'true');
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/login/google`;
  };

  return (
    <Button className="bg-white" onClick={handleLogin}>
      <GoogleIcon />
      {langData[lang].loginButton}
    </Button>
  );
};

export default LoginButton;
