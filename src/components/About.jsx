// src/pages/About.jsx
import React from 'react';
import { motion } from "framer-motion";
import PageLayout from "./PageLayout";
import './Work.css'; // Switzer 폰트 정의 포함

export default function About() {
  const leftPadding = 40;

  // Variants for main text container
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { delay: 1, duration: 1 } },
  };

  // Variants for experience section
  const experienceVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 2, duration: 1, staggerChildren: 0.3, delayChildren: 0.5 } },
  };

  // Variants for each experience item
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const switzerStyle = {
    fontFamily: 'Switzer, sans-serif'
  };

  return (
    <PageLayout leftPadding={leftPadding}>
      <div style={switzerStyle}>
        {/* Main Text */}
<motion.div variants={textVariants} initial="hidden" animate="visible">
  <h1
    style={{
      fontSize: "clamp(24px, 5vw, 40px)",
      fontWeight: 700,
      lineHeight: "1.2",
      marginBottom: '1rem',
      fontFamily: 'Switzer, sans-serif', // h1에도 명시
      paddingRight: "10rem", // 👉 오른쪽 패딩 추가
    }}
  >
    Hello! I'm Jin! <br /> Graphic Designer based in the Netherlands,<br /> shaping engaging brand and digital experiences through design.<br />
    <br />I believe that everyday stories are a rich source of inspiration for creating persuasive brand identities.  

  </h1>
  <p
    style={{
      fontSize: "clamp(16px, 3vw, 20px)",
      lineHeight: "1.5",
      marginTop: '1rem',
      marginBottom: '1rem',
      fontFamily: 'Switzer, sans-serif', // p에도 명시
      fontWeight: 600
    }}
  >

  </p>
</motion.div>

{/* Experience Section */}
<motion.div
  className="experience-section"
  variants={experienceVariants}
  initial="hidden"
  animate="visible"
  style={{ marginTop: '4rem' }}
>
  <motion.h2
    variants={itemVariants}
    style={{
      fontSize: "clamp(16px, 3vw, 20px)",
    }}
  >
    <motion.a
      href="/Jin-Her/Yejin_Her_CV.pdf"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-block',
        padding: '0.6rem 1.2rem',
        color: '#fff',
        backgroundColor: '#0400ffff',
        borderRadius: '200px',
        textDecoration: 'none',
        cursor: 'pointer',
      }}
      whileHover={{
        backgroundColor: '#ff00d4ff',
        scale: 1.05,
      }}
      whileTap={{ scale: 0.95 }}
    >
      CV
    </motion.a>
  </motion.h2>
</motion.div>


      </div>
    </PageLayout>
  );
}
