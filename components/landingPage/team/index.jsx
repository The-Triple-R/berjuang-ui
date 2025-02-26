import { motion } from 'framer-motion';
import { MdQuestionMark, MdCode, MdStorage } from 'react-icons/md';
import TeamCard from './TeamCard';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const teamMembers = [
  { icon: <MdQuestionMark size={40} />, title: 'Project Manager', desc: 'Mengelola perencanaan, timeline, dan koordinasi tim agar proyek berjalan sesuai target.' },
  { icon: <MdCode size={40} />, title: 'Frontend Developer', desc: 'Membangun tampilan website agar interaktif, responsif, dan mudah digunakan.' },
  { icon: <MdStorage size={40} />, title: 'Backend Developer', desc: 'Mengembangkan sistem dan database agar website berjalan dengan optimal.' },
];

const Team = () => {
  return (
    <section id='team' className='border-t-4 py-16 px-8 border-border dark:border-darkBorder'>
      <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
        <h3 className='text-center text-4xl font-bold'>Tim <span className='text-main'>Pengembang</span></h3>
        <p className='text-center text-mtext text-lg mt-2'>Siapa saja yang berkontribusi dalam pembuatan website ini?</p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} icon={member.icon} title={member.title} desc={member.desc} />
        ))}
      </div>
    </section>
  );
};

export default Team;
