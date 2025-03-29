'use client';
import Image from "next/image";
import { motion } from 'framer-motion';
import langData from '@/lib/lang';
import useLanguageStore from '@/lib/zustand/useLanguageStore';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TbTrendingUp, TbPigMoney } from "react-icons/tb";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const Hero = () => {
  const { lang } = useLanguageStore((state) => state);

  return (
    <section id="home" className="flex flex-col align-center md:flex-row min-h-screen bg-bg w-full gap-8 py-8 px-4 md:px-8">
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        variants={fadeInUp} 
        viewport={{ once: true }} 
        className="flex flex-col gap-3 md:justify-center text-center md:text-start w-full max-w-2xl"
      >
        <h2 className="font-extrabold text-4xl text-center md:text-start lg:text-5xl leading-tight">
          { langData[lang].heroSection.title }
        </h2>
        <p className="text-mtext md:text-start text-lg leading-relaxed">
          <span className="uppercase font-extrabold">Berjuang </span>
          { langData[lang].heroSection.description }
        </p>
        <Link href="/dashboard">
          <Button className="px-6 py-3 text-lg">{ langData[lang].heroSection.cta }</Button>
        </Link>
      </motion.div>

      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        variants={fadeInUp} 
        viewport={{ once: true }} 
        className="relative w-full flex justify-center"
      >
        <Image
          src="/images/people.png"
          alt="People Image"
          width={600} 
          height={400} 
          className="w-[80%] h-auto object-cover rounded-lg bg-black bg-opacity-10 backdrop-blur-md"
          priority
        />

        <div className="absolute top-[20%] right-0 flex flex-col p-3 max-w-[200px] rounded-lg bg-white bg-opacity-40 backdrop-blur-lg border border-white/30 text-black shadow-md">
          <div className="flex items-center gap-2">
            <TbTrendingUp className="text-green-500 text-2xl" />
            <p className="font-bold text-md">
              {lang === 'id' ? 'Keuangan Naik' : 'Financial Growth'}
            </p>
          </div>
          <p className="text-xs mt-1 leading-snug">
            {lang === 'id' 
              ? 'Kelola uangmu dan lihat pertumbuhannya!' 
              : 'Manage your money and watch it grow!'}
          </p>
        </div>

        <div className="absolute top-[60%] left-0 flex flex-col p-3 max-w-[200px] rounded-lg bg-white bg-opacity-40 backdrop-blur-lg border border-white/30 text-black shadow-md">
          <div className="flex items-center gap-2">
            <TbPigMoney className="text-blue-500 text-2xl" />
            <p className="font-bold text-md">
              {lang === 'id' ? 'Tabungan Mudah' : 'Easy Savings'}
            </p>
          </div>
          <p className="text-xs mt-1 leading-snug">
            {lang === 'id' 
              ? 'Atur uangmu dan capai kebebasan finansial.' 
              : 'Plan wisely, reach financial freedom.'}
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
