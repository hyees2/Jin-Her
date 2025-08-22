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
      fontSize: "clamp(24px, 5vw, 36px)",
      fontWeight: 700,
      lineHeight: "1.3",
      marginBottom: '1rem',
      fontFamily: 'Switzer, sans-serif', // h1에도 명시
    }}
  >
    A Graphic Designer specializing in brand identity, UI/UX, and editorial design, passionate about creating meaningful and visually stunning work.
  </h1>
  <p
    style={{
      fontSize: "clamp(16px, 3vw, 20px)",
      lineHeight: "1.5",
      marginTop: '1rem',
      marginBottom: '1rem',
      fontFamily: 'Switzer, sans-serif', // p에도 명시
    }}
  >
    I'm a designer based in the Netherlands, blending creative vision with technical skills to deliver impactful digital and print experiences.
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
            style={{ fontSize: "clamp(18px, 4vw, 24px)", fontWeight: 700, marginBottom: '1.5rem' }}
          >
            Experience
          </motion.h2>

          <motion.ul style={{ paddingLeft: 0, listStyle: 'none' }}>
            {['Branding Studio', 'UI/UX Agency', 'Editorial Project'].map((exp, idx) => (
              <motion.li
                key={idx}
                variants={itemVariants}
                style={{ marginBottom: '1rem' }}
              >
                {exp}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </PageLayout>
  );
}
