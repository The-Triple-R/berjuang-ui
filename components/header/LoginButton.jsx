'use client';
import { Button } from '../ui/button';
import GoogleIcon from '../icons/google-icon';
import useLanguageStore from '@/lib/zustand/useLanguageStore';
import langData from '@/lib/lang';
import Link from 'next/link';

const LoginButton = () => {
  const { lang } = useLanguageStore();

  return (
    <Link href={`${process.env.NEXT_PUBLIC_API_URL}/login/google`}>
      <Button className='bg-white'>
        <GoogleIcon />
        {langData[lang].loginButton}
      </Button>
    </Link>
  );
};

export default LoginButton;
