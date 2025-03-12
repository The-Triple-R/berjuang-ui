import { motion } from 'framer-motion';
import TeamCard from './TeamCard';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const teamMembers = [
  { 
    icon: "/icons/project-manager.svg",
    title: "Project Manager", 
    desc: "Mengelola perencanaan, timeline, dan koordinasi tim agar proyek berjalan sesuai target.",
    name: "Jill Scott",
    role: "Project Manager",
    image: "/images/project-manager.jpg",
    linkedin: "https://linkedin.com/in/jillscott",
    instagram: "https://instagram.com/jillscott",
    github: "https://github.com/jillscott"
  },
  { 
    icon: "/icons/frontend-developer.svg",
    title: "Frontend Developer", 
    desc: "Membangun tampilan website agar interaktif, responsif, dan mudah digunakan.",
    name: "Alex Johnson",
    role: "Frontend Developer",
    image: "/images/frontend-developer.jpg",
    linkedin: "https://linkedin.com/in/alexjohnson",
    instagram: "https://instagram.com/alexjohnson",
    github: "https://github.com/alexjohnson"
  },
  { 
    icon: "/icons/backend-developer.svg",
    title: "Backend Developer", 
    desc: "Mengembangkan sistem dan database agar website berjalan dengan optimal.",
    name: "Michael Smith",
    role: "Backend Developer",
    image: "/images/backend-developer.jpg",
    linkedin: "https://linkedin.com/in/michaelsmith",
    instagram: "https://instagram.com/michaelsmith",
    github: "https://github.com/michaelsmith"
  }
];

const Team = () => {
  return (
    <section id='team' className='border-t-4 py-16 px-8 border-border dark:border-darkBorder'>
      <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
        <h3 className='text-center text-4xl font-bold'>Tim <span className='text-main'>Pengembang</span></h3>
        <p className='text-center text-mtext text-lg mt-2'>Siapa saja yang berkontribusi dalam pembuatan website ini?</p>
      </motion.div>
      <div className="grid mt-2 grid-cols-1 md:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <TeamCard 
            key={index} 
            icon={member.icon} 
            title={member.title} 
            desc={member.desc} 
            name={member.name} 
            role={member.role} 
            linkedin={member.linkedin} 
            instagram={member.instagram} 
            github={member.github} 
          />
        ))}
      </div>
    </section>
  );
};

export default Team;
