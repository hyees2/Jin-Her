import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; // ✅ Navigate 추가
import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Work";
import Feed from "./components/Feed";
import Footer from "./components/Footer";
import WorkDetail from "./pages/WorkDetail"; // 새로운 WorkDetail 컴포넌트를 import 합니다.

export default function App() {
  const [leftPadding, setLeftPadding] = useState(40);

  // 반응형 좌측 패딩
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setLeftPadding(7);
      else setLeftPadding(40);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <BrowserRouter basename="/Jin-Her">   {/* ✅ basename 추가해서 Pages 경로 보장 */}
      <div
        style={{
          background: "#ffffff",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header leftPadding={leftPadding} />

        <main style={{ flex: 1 }}>
          <Routes>
            {/* ✅ "/" 접근하면 "/work"로 자동 이동 */}
            <Route path="/" element={<Navigate to="/work" replace />} />

            <Route path="/about" element={<About leftPadding={leftPadding} />} />
            <Route path="/work" element={<Work leftPadding={leftPadding} />} />
            <Route path="/feed" element={<Feed leftPadding={leftPadding} />} />
            <Route path="/work/:id" element={<WorkDetail leftPadding={leftPadding} />} />
          </Routes>
        </main>

        <Footer leftPadding={leftPadding} />
      </div>
    </BrowserRouter>
  );
}
