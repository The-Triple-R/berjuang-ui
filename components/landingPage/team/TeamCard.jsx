import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const TeamCard = ({ desc, name, role, image, linkedin, instagram, github }) => {
  const cardRef = useRef(null);
  const [isSmall, setIsSmall] = useState(false);
  const [isMedium, setIsMedium] = useState(false);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const width = entry.contentRect.width;
        setIsSmall(width < 300);
        setIsMedium(width >= 300 && width <= 450);
      }
    });

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={cardRef}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`relative ml-4 border-2 border-black p-4 rounded-md bg-white ${
        isSmall
          ? "mt-14"
          : isMedium
          ? "mt-16"
          : "py-6 mt-4"
      }`}
    >
      <div
        className={`absolute bg-white border-black flex flex-col items-center ${
          isSmall
            ? "left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 w-[7rem] h-[7rem] border-4 rounded-full"
            : isMedium
            ? "left-1/2 -translate-x-1/2 top-[-20%] w-[12rem] h-[12rem] border-2 rounded-md"
            : "left-[-5%] top-1/2 -translate-y-1/2 border-2 rounded-md w-[10rem]"
        }`}
      >
        <Image
          src={image}
          alt="Profile Image"
          width={400}
          height={400}
          className={`object-cover ${
            isSmall ? "w-[100%] h-auto rounded-full" : isMedium ? "h-[100%] w-auto" : "w-[100%] h-auto"
          }`}
          priority
        />
      </div>
      <div className={`flex flex-col gap-2 ${isSmall ? "pt-12 items-center text-center" : isMedium ? "pt-[8rem] text-center items-center" : "ml-[9rem]"}`}>
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-gray-500">{role}</p>
        </div>
        <p className="text-gray-700">{desc}</p>
        <div className="flex gap-3 mt-2 text-lg">
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-blue-600 text-3xl hover:text-blue-800" />
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-black text-3xl hover:text-gray-700" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamCard;
