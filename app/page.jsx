'use client';
import { motion } from 'framer-motion';
import FeatureCard from '@/components/FeatureCard';
import { MdAttachMoney, MdAutoAwesome, MdQuestionMark, MdRecommend, MdAccessTime, MdCode, MdStorage } from 'react-icons/md';
import { AiFillSafetyCertificate } from 'react-icons/ai';
import { TbReport } from 'react-icons/tb';
import langData from '@/lib/lang';
import useLanguageStore from '@/lib/zustand/useLanguageStore';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa6';
import LandingLayout from './layouts/LandingLayout';
import Hero from '@/components/landingPage/hero';
import Feature from '@/components/landingPage/features';
import Benefit from '@/components/landingPage/benefits';
import Team from '@/components/landingPage/team';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export default function Home() {
  const { lang } = useLanguageStore((state) => state);

  return (
    <LandingLayout>
      <Hero />
      <Feature />
      <Benefit />
      <Team />
    </LandingLayout>
  );
}
