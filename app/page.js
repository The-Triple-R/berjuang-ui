'use client';
import FeatureCard from '@/components/FeatureCard';
import Header from '@/components/Header';
import { MdAttachMoney, MdAutoAwesome, MdQuestionMark, MdRecommend, MdAccessTime } from 'react-icons/md';
import { AiFillSafetyCertificate } from 'react-icons/ai';
import { TbReport } from 'react-icons/tb';
import { Button } from '@/components/ui/button';
import Image from "next/image";
import Footer from '@/components/Footer';
import langData from '@/lib/lang';
import useLanguageStore from '@/lib/zustand/useLanguageStore';

export default function Home() {
  const { lang } = useLanguageStore((state) => state);

  return (
    <>
      <Header />
      <main className='flex flex-col justify-center dark:bg-darkBg min-h-screen'>
        <section id="home" className="flex flex-col md:align-center md:flex-row min-h-screen bg-bg w-full gap-8 py-8 px-4 md:px-8">
          <div className="flex flex-col gap-3 md:justify-center text-center md:text-start w-full">
            <h2 className="font-extrabold text-4xl text-center md:text-start lg:text-5xl">
              Kelola Keuangan Bisnis Anda dengan AI
            </h2>
            <p className="text-mtext md:text-start">
              <span className="uppercase font-extrabold">Berjuang</span> dapat membantu mengelola keuangan UMKM dengan bantuan AI supaya menjadi lebih mudah, cepat, dan akurat dengan insight cerdas untuk pertumbuhan bisnis.
            </p>
          </div>

          <div className="relative w-full flex justify-center">
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
          </div>
        </section>
        <section id='features' className='border-t-4 flex flex-col gap-8 py-[2rem] px-4 md:px-8 border-border dark:border-darkBorder'>
          <div>
            <h3 className='text-center text-4xl font-bold'>Our <span className='text-main'>Features</span></h3>
            <p className='text-center text-mtext text-lg mt-2'>
              Apa saja fitur yang diberikan oleh kami?
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-8'>
            <FeatureCard 
              title='Analisis Keuangan Otomatis' 
              description='Dapatkan analisis keuangan secara otomatis dengan AI yang mengidentifikasi tren dan pola pengeluaran bisnis Anda.'
            >
              <MdAutoAwesome />
            </FeatureCard>

            <FeatureCard 
              title='Rekomendasi Keuangan Cerdas' 
              description='Terima saran keuangan yang dipersonalisasi berdasarkan kondisi bisnis Anda untuk pengambilan keputusan yang lebih baik.'
            >
              <MdRecommend />
            </FeatureCard>

            <FeatureCard 
              title='Laporan Keuangan Komprehensif' 
              description='Akses laporan keuangan yang lengkap dan mudah dipahami untuk membantu Anda mengelola bisnis dengan lebih efektif.'
            >
              <TbReport />
            </FeatureCard>

            <FeatureCard 
              title='Keamanan Data Terjamin' 
              description='Data keuangan Anda dilindungi dengan enkripsi tingkat tinggi dan sistem keamanan canggih untuk menjaga privasi bisnis Anda.'
            >
              <AiFillSafetyCertificate />
            </FeatureCard>
          </div>
        </section>
        <section id='benefits' className='border-t-4 border-border dark:border-darkBorder p-10'>
          <div>
            <h3 className='text-center text-4xl font-bold'>Manfaat <span className='text-main'>Produk</span></h3>
            <p className='text-center text-mtext text-lg mt-2'>
              Apa yang Bisa kami lakukan untuk bisnis anda?
            </p>
          </div>
          <div className='grid grid-cols-3 gap-5 justify-items-center'>
            <div className='text-center flex flex-col gap-4 w-[250px]'>
              <div className='flex justify-center'>
                <MdAttachMoney size={64} />
              </div>
              <h6 className='w-[200px] flex mx-auto font-semibold'>Meningkatkan Efisiensi Keuangan</h6>
              <p>Kelola keuangan bisnis Anda dengan lebih cepat dan mudah.</p>
            </div>
            <div className='text-center flex flex-col gap-4 w-[250px]'>
              <div className='flex justify-center'>
                <MdAccessTime size={64} />
              </div>
              <h6 className='w-[200px] flex mx-auto font-semibold'>Menghemat Waktu dan Biaya</h6>
              <p>Kurangi waktu yang dihabiskan untuk mengelola keuangan dan fokus pada pengembangan bisnis Anda.</p>
            </div>
            <div className='text-center flex flex-col gap-4 w-[250px]'>
              <div className='flex justify-center'>
                <MdQuestionMark size={64} />
              </div>
              <h6 className='w-[200px] flex mx-auto font-semibold'>Mengambil Keputusan Tepat</h6>
              <p>Dapatkan insight berharga untuk membuat keputusan keuangan yang lebih baik.</p>
            </div>
          </div>
          <div className='flex justify-center mt-10'>
            <Button className="text-xl">Coba Sekarang!</Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
