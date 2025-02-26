import { motion } from 'framer-motion';
import FeatureCard from '@/components/FeatureCard';
import { MdAutoAwesome, MdRecommend } from 'react-icons/md';
import { AiFillSafetyCertificate } from 'react-icons/ai';
import { TbReport } from 'react-icons/tb';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const features = [
  { icon: <MdAutoAwesome />, title: 'Analisis Keuangan Otomatis', desc: 'Dapatkan analisis keuangan secara otomatis dengan AI yang mengidentifikasi tren dan pola pengeluaran bisnis Anda.' },
  { icon: <MdRecommend />, title: 'Rekomendasi Keuangan Cerdas', desc: 'Terima saran keuangan yang dipersonalisasi berdasarkan kondisi bisnis Anda untuk pengambilan keputusan yang lebih baik.' },
  { icon: <TbReport />, title: 'Laporan Keuangan Komprehensif', desc: 'Akses laporan keuangan yang lengkap dan mudah dipahami untuk membantu Anda mengelola bisnis dengan lebih efektif.' },
  { icon: <AiFillSafetyCertificate />, title: 'Keamanan Data Terjamin', desc: 'Data keuangan Anda dilindungi dengan enkripsi tingkat tinggi dan sistem keamanan canggih untuk menjaga privasi bisnis Anda.' },
];

const Feature = () => {
  return (
    <section id='features' className='border-t-4 py-16 px-8 border-border dark:border-darkBorder'>
      <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
        <h3 className='text-center text-4xl font-bold'>Our <span className='text-main'>Features</span></h3>
        <p className='text-center text-mtext text-lg mt-2'>Apa saja fitur yang diberikan oleh kami?</p>
      </motion.div>
      <div className='grid md:grid-cols-2 gap-8'>
        {features.map((item, index) => (
          <motion.div key={index} initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
            <FeatureCard title={item.title} description={item.desc}>
              {item.icon}
            </FeatureCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Feature;
