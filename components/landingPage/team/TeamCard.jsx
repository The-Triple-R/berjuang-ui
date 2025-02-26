import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from "react";

const TeamCard = ({ icon, title, desc }) => {
  const cardRef = useRef(null);
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setIsSmall(entry.contentRect.width < 300);
      }
    });

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`border-2 border-black p-6 rounded-xl shadow-lg bg-white transition-all duration-300 hover:scale-105 
        ${isSmall ? "flex flex-col text-center" : "flex flex-row items-center"}`}
    >
      <div className="w-20 h-20 flex items-center justify-center border-2 border-black rounded-full bg-gray-100">
        {icon}
      </div>
      <div className={`${isSmall ? "mt-4" : "ml-6"}`}>
        <h4 className="text-2xl font-bold">{title}</h4>
        <p className="text-lg text-gray-600 mt-2">{desc}</p>
      </div>
    </motion.div>
  );
};

export default TeamCard;
