import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageLayout from "./PageLayout";
import "./Work.css";

//이미지 임포트
import thumbnail1 from '../assets/images/Petrichor/cover_Petrichor.jpg';
import thumbnail2 from '../assets/images/Unseen/cover_Unseen.jpg';
import thumbnail3 from '../assets/images/Sunset/cover_Sunset.jpg';
import thumbnail4 from '../assets/images/OPBU/cover_OPBU.jpg';
import thumbnail5 from '../assets/images/Twoscapes/cover_Twoscapes.jpg';


export default function Work() {
  const leftPadding = 40;

  const workItems = [
    { id: '1', title: ["App Design", "Brand Identity" ], image: thumbnail1 },
    { id: '2', title: ["Data & System Design", "Web Development", "Wall Graphic"], image: thumbnail2 },
    { id: '3', title: ["Visual Identity", "Motion Graphic", "Socials",], image: thumbnail3 },
    { id: '4', title: ["Visual Identity", "Logo", "Stationery"], image: thumbnail4 },
    { id: '5', title: ["Visual Identity", "Video Installation", "3D Graphic"], image: thumbnail5 },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <PageLayout leftPadding={leftPadding}>
      {/* 제목 */}
      <motion.h1
        className="switzer"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        style={{
          fontSize: "clamp(24px, 5vw, 40px)",
          fontWeight: "bold",
          lineHeight: "1.2",
          paddingRight: "clamp(1rem, 5vw, 3rem)"
        }}
      >
        Graphic Designer based in the Netherlands,<br /> shaping engaging brand and digital experiences through design.
      </motion.h1>

      {/* 알림 배너 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "40px",
          alignItems: "center"
        }}
      >
        <div style={{ flex: "1 1 300px", minWidth: "200px", overflow: "hidden" }}>
          <div
            style={{
              backgroundColor: "yellow",
              borderRadius: "9999px",
              overflow: "hidden",
              whiteSpace: "nowrap",
              padding: "0 4px",
            }}
          >
            <motion.div
              style={{ display: "inline-block" }}
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                duration: 10,
                ease: "linear",
              }}
            >
              &#9888; Currently Looking for an internship, Entry/Junior-level Position &#9888; &nbsp;&nbsp;&nbsp;
              &#9888; Currently Looking for an internship, Entry/Junior-level Position &#9888; &nbsp;&nbsp;&nbsp;
              &#9888; Currently Looking for an internship, Entry/Junior-level Position &#9888; &nbsp;&nbsp;&nbsp;
              &#9888; Currently Looking for an internship, Entry/Junior-level Position &#9888; &nbsp;&nbsp;&nbsp;
            </motion.div>
          </div>
        </div>

        <div style={{ flex: "1 1 300px", minWidth: "200px" }}>
          <p style={{ fontSize: "clamp(14px, 3vw, 16px)", margin: 0 }}>
            Selected work ⬇
          </p>
        </div>
      </motion.div>

      {/* Work Grid */}
      <motion.div
        className="gridContainer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        {workItems.map((item, index) => (
          <div
            key={index}
            className="gridItemWrapper"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* 이미지를 감싸는 링크 */}
            <Link
              to={`/work/${item.id}`}
              className="gridItemImage"
              style={{
                borderRadius: "clamp(8px, 2vw, 24px)",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <img
                src={item.image}
                alt={item.title.join(', ')}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              {/* Hover 버튼 */}
              {hoveredIndex === index && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="hoverOverlay"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgba(0,0,0,0.4)",
                    zIndex: 3,
                  }}
                >
                  <motion.button
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="hoverButton"
                  >
                    View project
                  </motion.button>
                </motion.div>
              )}
            </Link>

            {/* 제목 - 이미지 아래에 배치 */}
            <div className="gridItemTitles">
              {item.title.map((tag, tagIndex) => (
                <span key={tagIndex} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </PageLayout>
  );
}