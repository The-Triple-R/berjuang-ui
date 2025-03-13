'use client';
import LandingLayout from './layouts/LandingLayout';
import Hero from '@/components/landingPage/hero';
import Feature from '@/components/landingPage/features';
import Benefit from '@/components/landingPage/benefits';
import Team from '@/components/landingPage/team';

// const fadeInUp = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0, transition: { duration: 1 } },
// };

export default function Home() {
  return (
    <LandingLayout>
      <Hero />
      <Feature />
      <Benefit />
      <Team />
    </LandingLayout>
  );
}
