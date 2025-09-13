import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.footer
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
      style={{
        background: "white",
        padding: "16px",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          // 👉 Header/PageLayout과 동일하게 좌우 간격 조정
          maxWidth: isMobile ? `calc(100vw - 40px)` : `calc(100vw - 60px)`,
          margin: "0 auto",
          boxSizing: "border-box",
        }}
      >
        {/* 왼쪽: 저작권 */}
        <div style={{ fontSize: "clamp(12px, 2.5vw, 14px)" }}>
          © {new Date().getFullYear()} Jin-Her. All Rights Reserved.
        </div>

        {/* 오른쪽: Email / Linkedin */}
        <div style={{ display: "flex", gap: "12px" }}>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=heoyeejin2@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "black" }}
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/yejin-her/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "black" }}
          >
            Linkedin
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
