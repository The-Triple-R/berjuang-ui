import FeatureCard from '@/components/FeatureCard';
import Header from '@/components/Header';
import { Badge } from '@/components/ui/badge';
import { MdAutoAwesome, MdRecommend } from 'react-icons/md';
import { AiFillSafetyCertificate } from 'react-icons/ai';
import { TbReport } from 'react-icons/tb';

export default function Home() {
  return (
    <>
      <Header />
      <main className='relative flex flex-col gap-44 items-center justify-center bg-bg dark:bg-darkBg px-5 py-[200px] min-h-[100svh]'>
        <section className='max-w-[800px] flex flex-col items-center gap-5'>
          <h3>
            <Badge className='font-bold text-xl'>BerjUANG</Badge>
          </h3>
          <p className='font-bold text-6xl text-center'>Kendalikan Keuangan Bisnis Anda dengan AI</p>
          <p className='text-lg text-center'>Kelola keuangan UMKM Anda dengan mudah dan efisien. BerjUANG memberikan insight berharga untuk membantu bisnis Anda tumbuh.</p>
        </section>
      </main>
      <div>
        <section className='border-b-4 border-t-4 border-border dark:border-darkBorder font-semibold p-10'>
          <h3 className='text-center text-2xl mb-16'>Features</h3>
          <div className='grid grid-cols-2 gap-5'>
            <FeatureCard description='Analisis Keuangan Otomatis'>
              <MdAutoAwesome />
            </FeatureCard>
            <FeatureCard description='Rekomendasi Keuangan Cerdas'>
              <MdRecommend />
            </FeatureCard>
            <FeatureCard description='Laporan Keuangan Komprehensif'>
              <TbReport />
            </FeatureCard>
            <FeatureCard description='Keamanan Data Terjamin'>
              <AiFillSafetyCertificate />
            </FeatureCard>
          </div>
        </section>
      </div>
    </>
  );
}
