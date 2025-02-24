import FeatureCard from '@/components/FeatureCard';
import Header from '@/components/Header';
import { Badge } from '@/components/ui/badge';
import { MdAttachMoney, MdAutoAwesome, MdQuestionMark, MdRecommend, MdAccessTime } from 'react-icons/md';
import { AiFillSafetyCertificate } from 'react-icons/ai';
import { TbReport } from 'react-icons/tb';
import { FaSquareXTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa6';
import { Button } from '@/components/ui/button';


export default function Home() {
  return (
    <>
      <Header />
      <main className='relative flex flex-col gap-44 items-center justify-center bg-bg dark:bg-darkBg min-h-screen'>
        <section id='home' className='min-h-screen flex flex-col items-center justify-center px-4 md:px-8 gap-5'>
          <h3>
            <Badge className='font-bold text-xl'>BerjUANG</Badge>
          </h3>
          <p className='font-bold text-6xl text-center'>Kendalikan Keuangan Bisnis Anda dengan AI</p>
          <p className='text-lg text-center'>Kelola keuangan UMKM Anda dengan mudah dan efisien. BerjUANG memberikan insight berharga untuk membantu bisnis Anda tumbuh.</p>
        </section>
      </main>
      <div>
        <section id='features' className='border-t-4 border-border dark:border-darkBorder font-semibold p-10'>
          <div className='w-[1300px] max-w-full mx-auto'>
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
          </div>
        </section>
        <section className='border-t-4 border-border dark:border-darkBorder p-10'>
          <div className='w-[1100px] max-w-full mx-auto'>
            <h3 className='text-center text-2xl mb-1 font-semibold'>Manfaat Produk</h3>
            <p className='text-center mb-9'>Apa yang Bisa BerjUANG Lakukan untuk Bisnis Anda?</p>
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
          </div>
        </section>
        <footer className='font-semibold bg-[#262626] text-footerText pt-16 px-10'>
          <div className='w-[600px] max-w-full mx-auto'>
            <div className='grid grid-cols-3 gap-5 text-xl border-b border-[#ffffff13] pb-16'>
              <div className='col-span-2'>
                <h3>
                  <Badge className='font-bold text-xl mb-4'>BerjUANG</Badge>
                </h3>
                <div className='flex text-2xl gap-2'>
                  <FaFacebookF />
                  <FaInstagram />
                  <FaSquareXTwitter />
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <h5 className='mb-3 text-bg'>PAGES</h5>
                <a href='#test text-md'>Home</a>
                <a href='#test text-md'>Features</a>
              </div>
            </div>
            <p className='text-center py-7 font-base'>Copyright &copy; 2025 BerjUANG. | All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
