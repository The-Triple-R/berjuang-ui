'use client';
import { motion } from 'framer-motion';
import TeamCard from './TeamCard';
import useLanguageStore from '@/lib/zustand/useLanguageStore';
import langData from '@/lib/lang';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const Team = () => {
  const { lang } = useLanguageStore(state => state);

  const teamMembers = [
    { 
      desc: langData[lang].developerSection.backendJobDesk,
      name: "Sava Reyhano",
      role: "Backend Developer",
      image: "/images/Sava.jpg",
      linkedin: "https://www.linkedin.com/in/savareyhano/",
      github: "https://github.com/savareyhano"
    },
    {
      desc: langData[lang].developerSection.frontendJobDesk1,
      name: "Fariz Rifky Berliano",
      role: "Frontend Developer",
      image: "/images/Fariz.jpg",
      linkedin: "https://www.linkedin.com/in/farizrifkyberliano/",
      github: "https://github.com/ifarbie"
    },
    { 
      desc: langData[lang].developerSection.frontendJobDesk2,
      name: "Ryan Bagus Bimantoro",
      role: "Frontend Developer",
      image: "/images/Ryan.png",
      linkedin: "https://www.linkedin.com/in/ryanbagusb/",
      github: "https://github.com/RyanBagusB"
    }
  ];

  return (
    <section id='team' className='border-t-4 py-16 px-8 border-border dark:border-darkBorder'>
      <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
        <h3 className='text-center text-4xl font-bold'>
        
          {lang === "id" ? (
            <>
              Tim <span className='text-main'>Pengembang</span>
            </>
          ) : (
            <>
              <span className='text-main'>Developer</span> Teams
            </>
          )}
        </h3>
        <p className='text-center text-mtext text-lg mt-2'>{langData[lang].developerSection.description}</p>
      </motion.div>
      <div className="grid mt-2 grid-cols-1 md:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <TeamCard 
            key={index}
            desc={member.desc} 
            name={member.name} 
            image={member.image} 
            role={member.role} 
            linkedin={member.linkedin} 
            github={member.github} 
          />
        ))}
      </div>
    </section>
  );
};

export default Team;
