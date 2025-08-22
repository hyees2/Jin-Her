import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
      // 768px 미만일 때 패딩 값 변경
      if (window.innerWidth < 768) setLeftPadding(7);
      else setLeftPadding(40); // 데스크탑 크기일 때 다시 40으로 변경
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // 컴포넌트 마운트 시 초기 값 설정
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
<BrowserRouter>
  <div
    style={{
      background: "#ffffff", //메인영역 색상
      minHeight: "100vh",
      display: "flex",          // 여기에 추가
      flexDirection: "column",  // 여기에 추가
    }}
  >
    <Header leftPadding={leftPadding} />

    <main style={{ flex: 1 }}>   {/* 이 부분으로 Routes 감싸기 */}
      <Routes>
        <Route path="/" element={<Work leftPadding={leftPadding} />} />
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
