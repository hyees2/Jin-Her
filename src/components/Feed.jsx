// src/pages/Feed.jsx
import React, { useState } from 'react';
import { motion } from "framer-motion";
import PageLayout from "./PageLayout";
import './Feed.css'; // 스타일 커스터마이징용

// 이미지 & 영상 임포트
import work1 from '../assets/feed/riso1.jpg';


const feedData = [
  { id: 1, type: 'image', src: work1 },

];

// 애니메이션 variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 1.5,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function Feed() {
  const leftPadding = 40;
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <PageLayout leftPadding={leftPadding}>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        style={{
            fontFamily: "'Switzer', sans-serif", // ← 여기 추가
          fontSize: "clamp(24px, 5vw, 40px)",
          fontWeight: 600,
          lineHeight: "1.2",
          marginBottom: '2rem',
        }}
      >
        Collection of experimental design work across graphic design, motion, web, and various other creative fields.
      </motion.h1>

      {/* 그리드 */}
      <motion.div
        className="feed-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {feedData.map(item => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            style={{ cursor: 'pointer' }}
            onClick={() => setSelectedItem(item)}
          >
            <div className="feed-item">
              {item.type === 'video' ? (
                <video
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              ) : (
                <img
                  src={item.src}
                  alt={`feed ${item.id}`}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* 모달 */}
      {selectedItem && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedItem(null)}
        >
          {selectedItem.type === 'video' ? (
            <video
              src={selectedItem.src}
              autoPlay
              loop
              muted
              playsInline
              className="modal-image"
              style={{ maxWidth: '90%', maxHeight: '90%', borderRadius: '12px' }}
            />
          ) : (
            <motion.img
              src={selectedItem.src}
              alt="selected"
              className="modal-image"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </motion.div>
      )}
    </PageLayout>
  );
}
