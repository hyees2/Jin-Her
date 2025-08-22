// src/components/PageLayout.jsx
import React, { useState, useEffect } from "react";

const PageLayout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
      paddingTop: "clamp(60px, 15vh, 120px)", // 상단 여백
        width: "100%",
        // 👉 여기 수정: leftPadding prop 없애고, 모바일/데스크탑 동일하게 20px 여백
        maxWidth: isMobile
          ? `calc(100vw - 30px)` // 모바일 → 좌우 20px씩
          : `calc(100vw - 60px)`, // 데스크탑 → 좌우 20px씩
        margin: "0 auto",
        boxSizing: "border-box",
      }}
    >
      {children}
    </div>
  );
};

export default PageLayout;
