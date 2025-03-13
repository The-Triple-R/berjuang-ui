import langData from '@/lib/lang';
import useLanguageStore from '@/lib/zustand/useLanguageStore';
import { motion } from 'framer-motion';
import { MdAttachMoney, MdAccessTime, MdQuestionMark } from 'react-icons/md';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const Benefit = () => {
  const { lang } = useLanguageStore(state => state);

  const benefits = [
    { icon: <MdAttachMoney size={50} />, title: langData[lang].benefitSection.benefitsTitle[0], desc: langData[lang].benefitSection.benefitsDesc[0] },
    { icon: <MdAccessTime size={50} />, title:  langData[lang].benefitSection.benefitsTitle[1], desc: langData[lang].benefitSection.benefitsDesc[1] },
    { icon: <MdQuestionMark size={50} />, title:  langData[lang].benefitSection.benefitsTitle[2], desc: langData[lang].benefitSection.benefitsDesc[2] },
  ];

  return (
    <section id='benefits' className='border-t-4 py-16 px-8 border-border dark:border-darkBorder'>
      <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
        <h3 className='text-center text-4xl font-bold'>
        {lang === "id" ? (
          <>
            <span className='text-main'>Manfaat</span> Produk
          </>
        ) : (
          <>
            Product <span className='text-main'>Benefits</span>
          </>
        )}
        </h3>
        <p className='text-center text-mtext text-lg mt-2'>{ langData[lang].benefitSection.subTitle }</p>
      </motion.div>
      <div className="grid grid-cols-1 mt-8 md:grid-cols-3 gap-6">
        {benefits.map((item, index) => (
          <motion.div key={index} initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }} className='mt-10 text-center flex flex-col border-2 border-black p-4 relative pt-[3.5rem]'>
            <div className='absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 bg-white border-2 border-black rounded-full w-20 h-20 flex items-center justify-center'>
              {item.icon}
            </div>
            <h6 className='flex mx-auto mt-auto font-semibold'>{item.title}</h6>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Benefit;
