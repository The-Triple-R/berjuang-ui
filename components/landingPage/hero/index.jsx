import Image from "next/image";
import { motion } from 'framer-motion';
import langData from '@/lib/lang';
import useLanguageStore from '@/lib/zustand/useLanguageStore';
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
        className="flex flex-col gap-3 md:justify-center text-center md:text-start w-full"
      >
        <h2 className="font-extrabold text-4xl text-center md:text-start lg:text-5xl">
          Kelola Keuangan Bisnis Anda dengan AI
        </h2>
        <p className="text-mtext md:text-start">
          <span className="uppercase font-extrabold">Berjuang</span> dapat membantu mengelola keuangan UMKM dengan bantuan AI supaya menjadi lebih mudah, cepat, dan akurat dengan insight cerdas untuk pertumbuhan bisnis.
        </p>
        <Link href="/dashboard">
          <Button>Menuju Dashboard</Button>
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
        <div className="absolute top-[20%] right-0 flex flex-col p-4 rounded-md bg-white bg-opacity-40 backdrop-blur-lg border border-white/30 text-black shadow-md">
          <p className="text-[0.8rem] text-gray-800">Saldo Anda</p>
          <p className="font-bold">Rp 20.000</p>
        </div>
        <div className="absolute top-[60%] left-0 flex flex-col p-4 rounded-md bg-white bg-opacity-40 backdrop-blur-lg border border-white/30 text-black shadow-md">
          <p className="text-[0.8rem] text-gray-800">Pengeluaran Anda</p> 
          <p className="font-bold">Rp 100.000</p> 
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
