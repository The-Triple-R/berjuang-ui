'use client';
import FeatureCard from '@/components/FeatureCard';
import Header from '@/components/Header';
import { Badge } from '@/components/ui/badge';
import { MdAttachMoney, MdAutoAwesome, MdQuestionMark, MdRecommend, MdAccessTime } from 'react-icons/md';
import { AiFillSafetyCertificate } from 'react-icons/ai';
import { TbReport } from 'react-icons/tb';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import langData from '@/lib/lang';
import useLanguageStore from '@/lib/zustand/useLanguageStore';

export default function Home() {
  const { lang } = useLanguageStore((state) => state);

  return (
    <>
      <Header />
      <main className='relative flex flex-col gap-44 items-center justify-center bg-bg dark:bg-darkBg min-h-screen'>
        <section
          id='home'
          className='min-h-screen flex flex-col items-center justify-center px-4 md:px-8 gap-5'
        >
          <h3>
            <Badge className='font-bold text-xl'>BerjUANG</Badge>
          </h3>
          <p className='font-bold text-6xl text-center'>{langData[lang].heroSection.title}</p>
          <p className='text-lg text-center'>{langData[lang].heroSection.subTitle}</p>
        </section>
      </main>
      <div>
        <section
          id='features'
          className='border-t-4 border-border dark:border-darkBorder font-semibold p-10'
        >
          <div className='w-[1300px] max-w-full mx-auto'>
            <h3 className='text-center text-2xl mb-16'>{langData[lang].featureSection.title}</h3>
            <div className='grid grid-cols-2 gap-5'>
              <FeatureCard description={langData[lang].featureSection.featureDesc[0]}>
                <MdAutoAwesome />
              </FeatureCard>
              <FeatureCard description={langData[lang].featureSection.featureDesc[1]}>
                <MdRecommend />
              </FeatureCard>
              <FeatureCard description={langData[lang].featureSection.featureDesc[2]}>
                <TbReport />
              </FeatureCard>
              <FeatureCard description={langData[lang].featureSection.featureDesc[3]}>
                <AiFillSafetyCertificate />
              </FeatureCard>
            </div>
          </div>
        </section>
        <section className='border-t-4 border-border dark:border-darkBorder p-10'>
          <div className='w-[1100px] max-w-full mx-auto'>
            <h3 className='text-center text-2xl mb-1 font-semibold'>{langData[lang].benefitSection.title}</h3>
            <p className='text-center mb-9'>{langData[lang].benefitSection.subTitle}</p>
            <div className='grid grid-cols-3 gap-5 justify-items-center'>
              <div className='text-center flex flex-col gap-4 w-[250px] items-center'>
                <div className='flex justify-center'>
                  <MdAttachMoney size={64} />
                </div>
                <h6 className='w-[200px] flex justify-center font-semibold'>{langData[lang].benefitSection.firstBenefitTitle}</h6>
                <p className='text-center'>{langData[lang].benefitSection.firstBenefitDesc}</p>
              </div>
              <div className='text-center flex flex-col gap-4 w-[250px] items-center'>
                <div className='flex justify-center'>
                  <MdAccessTime size={64} />
                </div>
                <h6 className='w-[200px] flex justify-center font-semibold'>{langData[lang].benefitSection.secondBenefitTitle}</h6>
                <p>{langData[lang].benefitSection.secondBenefitDesc}</p>
              </div>
              <div className='text-center flex flex-col gap-4 w-[250px] items-center'>
                <div className='flex justify-center'>
                  <MdQuestionMark size={64} />
                </div>
                <h6 className='w-[200px] flex justify-center font-semibold'>{langData[lang].benefitSection.thirdBenefitTitle}</h6>
                <p>{langData[lang].benefitSection.thirdBenefitDesc}</p>
              </div>
            </div>
            <div className='flex justify-center mt-10'>
              <Button className='text-xl'>{langData[lang].tryNowButton}</Button>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
