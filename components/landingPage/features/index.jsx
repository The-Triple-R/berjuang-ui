import { motion } from 'framer-motion';
import FeatureCard from '@/components/landingPage/features/FeatureCard';
import { MdAutoAwesome, MdRecommend } from 'react-icons/md';
import { AiFillSafetyCertificate } from 'react-icons/ai';
import { TbReport } from 'react-icons/tb';
import useLanguageStore from '@/lib/zustand/useLanguageStore';
import langData from '@/lib/lang';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const Feature = () => {
  const { lang } = useLanguageStore(state => state);

  const features = [
    { icon: <MdAutoAwesome />, title: langData[lang].featureSection.featuresTitle[0], desc: langData[lang].featureSection.featuresDesc[0] },
    { icon: <MdRecommend />, title: langData[lang].featureSection.featuresTitle[1], desc: langData[lang].featureSection.featuresDesc[1] },
    { icon: <TbReport />, title: langData[lang].featureSection.featuresTitle[2], desc: langData[lang].featureSection.featuresDesc[2] },
    { icon: <AiFillSafetyCertificate />, title: langData[lang].featureSection.featuresTitle[3], desc: langData[lang].featureSection.featuresDesc[3] },
  ];

  return (
    <section id='features' className='flex flex-col gap-8 border-t-4 py-16 px-8 border-border dark:border-darkBorder'>
      <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
        <h3 className='text-center text-4xl font-bold'>
        {lang === "en" ? (
          <>
            Our <span className='text-main'>Features</span>
          </>
        ) : (
          <>
            <span className='text-main'>Fitur</span> Kami
          </>
        )}
        </h3>
        <p className='text-center text-mtext text-lg mt-2'>{ langData[lang].featureSection.description }</p>
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
