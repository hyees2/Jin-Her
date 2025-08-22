import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageLayout from "./PageLayout";
import "./Work.css"; // CSS 모듈/외부 CSS를 import

//
import cover1 from '../assets/images/cover.jpg';

export default function Work() {
  const leftPadding = 40;

  const workItems = [
    { id: '1', title: "Work Item 1", image: cover1 },
    { id: '2', title: "Work Item 2", image: "/images/work2.jpg" },
    { id: '3', title: "Work Item 3", image: "/images/work3.jpg" },
    { id: '4', title: "Work Item 4", image: "/images/work4.jpg" },
    { id: '5', title: "Work Item 5", image: "/images/work5.jpg" },
    { id: '6', title: "Work Item 6", image: "/images/work6.jpg" },
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
          fontSize: "clamp(24px, 5vw, 36px)",
          fontWeight: "bold",
          lineHeight: "1.3",
        }}
      >
        Graphic Designer based in the Netherlands, crafting digital experiences
        at the intersection of design and technology.
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
              &#9888; Currently Looking for an internship, Traineeship, Entry/Junior-level Position &#9888; &nbsp;&nbsp;&nbsp;
              &#9888; Currently Looking for an internship, Traineeship, Entry/Junior-level Position &#9888; &nbsp;&nbsp;&nbsp;
              &#9888; Currently Looking for an internship, Traineeship, Entry/Junior-level Position &#9888; &nbsp;&nbsp;&nbsp;
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
          <Link
            key={index}
            to={`/work/${item.id}`}
            className="gridItem"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              borderRadius: "clamp(8px, 2vw, 24px)",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              alignItems: "flex-end", // 제목 아래쪽 정렬
              justifyContent: "center",
              backgroundColor: "#eee",
            }}
          >
            {/* 이미지밖/이미지 */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                overflow: "hidden",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "100%",
                   objectFit: "contain", // 여기만 변경
                  display: "block",
                }}
              />
            </div>

            {/* 제목 */}
            <p
              className="gridItemTitle"
              style={{
                position: "relative",
                zIndex: 2,
                margin: "1rem",
                color: "#fff",
                fontWeight: "bold",
                textShadow: "0px 0px 6px rgba(0,0,0,0.5)",
              }}
            >
              {item.title}
            </p>

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
        ))}
      </motion.div>
    </PageLayout>
  );
}
