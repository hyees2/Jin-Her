// src/pages/Feed.jsx
import React, { useState } from 'react';
import { motion } from "framer-motion";
import PageLayout from "./PageLayout";
import './Feed.css'; // 나중에 스타일 커스터마이징용

const feedData = [
  { id: 1, src: 'https://placehold.co/600x600/000000/FFFFFF?text=1' },
  { id: 2, src: 'https://placehold.co/600x600/111111/FFFFFF?text=2' },
  { id: 3, src: 'https://placehold.co/600x600/222222/FFFFFF?text=3' },
  { id: 4, src: 'https://placehold.co/600x600/333333/FFFFFF?text=4' },
  { id: 5, src: 'https://placehold.co/600x600/444444/FFFFFF?text=5' },
  { id: 6, src: 'https://placehold.co/600x600/555555/FFFFFF?text=6' },
  // 필요하면 더 추가
];

// Define variants for the parent container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger children animations by 0.1 seconds
      delayChildren: 1.5, // Delay the start of children animations
    },
  },
};

// Define variants for the child items
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function Feed() {
  const leftPadding = 40;
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <PageLayout leftPadding={leftPadding}>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        style={{
          fontSize: "clamp(24px, 5vw, 36px)",
          fontWeight: "bold",
          lineHeight: "1.3",
          marginBottom: '2rem',
        }}
      >
        Collection of experimental design work across graphic design, motion, web, and various other creative fields.
      </motion.h1>

      {/* Grid container with variants */}
      <motion.div
        className="feed-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {feedData.map(item => (
          <motion.div
            key={item.id}
            variants={itemVariants} // Apply child variants
            whileHover={{ scale: 1.05 }}
            style={{ cursor: 'pointer', overflow: 'hidden', borderRadius: '12px' }}
            onClick={() => setSelectedImage(item.src)}
          >
            <img src={item.src} alt={`feed ${item.id}`} style={{ width: '100%', display: 'block' }} />
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      {selectedImage && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            src={selectedImage}
            alt="selected"
            className="modal-image"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      )}
    </PageLayout>
  );
}