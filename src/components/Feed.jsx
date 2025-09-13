// src/pages/Feed.jsx
import React, { useState } from 'react';
import { motion } from "framer-motion";
import PageLayout from "./PageLayout";
import './Feed.css'; // 스타일 커스터마이징용

// 이미지 & 영상 임포트
import work1 from '../assets/feed/riso1.jpg';

  import work2 from "../assets/feed/riso2.jpg";
import happyVideo from '../assets/feed/happy.mp4';
import catalogue from '../assets/feed/catalogue.gif';
import moveVideo from '../assets/feed/move.mp4';
import spainVideo from '../assets/feed/spain.mp4';
import greenlieVideo from '../assets/feed/greenlie.mp4';
import threedposter from '../assets/feed/3dposter.mp4';
import poster1 from '../assets/feed/poster1.jpg';
import poster2 from '../assets/feed/poster2.jpg';
import poster3 from '../assets/feed/poster3.jpg';
import poster4 from '../assets/feed/poster4.jpg';
import poster5 from '../assets/feed/poster5.jpg';
import wrmVideo from '../assets/feed/wrm.mp4';
import fourVideo from '../assets/feed/444.mp4';
import hometohomeVideo from '../assets/feed/hometohome.mp4';
import visualvortexVideo from '../assets/feed/visualvortex.mp4';
import web1 from '../assets/feed/plantresidue.jpg';
import bookcover1 from '../assets/feed/fromob.jpg';
import noiseVideo from '../assets/feed/noise.mp4';
import celebrationVideo from '../assets/feed/celebration.mp4';
import brochure1 from '../assets/feed/celebration.jpg';
import greenlie2Video from '../assets/feed/greenlie2.mp4';



const feedData = [
  { id: 1, type: 'image', src: work1 },
  { id: 2, type: 'image', src: work2 },
  { id: 3, type: 'video', src: happyVideo },
  { id: 4, type: 'image', src: catalogue },
  { id: 5, type: 'video', src: moveVideo },
  { id: 6, type: 'video', src: spainVideo },
  { id: 7, type: 'video', src: greenlieVideo },
  { id: 8, type: 'video', src: threedposter },
  { id: 9, type: 'image', src: poster1 },
  { id: 10, type: 'image', src: poster2 },
  { id: 11, type: 'image', src: poster3 },
  { id: 13, type: 'image', src: poster5 },
  { id: 14, type: 'video', src: wrmVideo },
  { id: 15, type: 'video', src: fourVideo },
  { id: 16, type: 'video', src: hometohomeVideo },
  { id: 17, type: 'video', src: visualvortexVideo },
  { id: 18, type: 'image', src: web1 },
  { id: 19, type: 'image', src: bookcover1 },
  { id: 20, type: 'video', src: noiseVideo },
  { id: 21, type: 'video', src: celebrationVideo },
  { id: 22, type: 'image', src: brochure1 },
  { id: 23, type: 'video', src: greenlie2Video },

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
