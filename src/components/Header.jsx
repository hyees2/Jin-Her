import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import './Header.css';

export default function Header({ leftPadding }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = [
    { path: "/about", label: "About" },
    { path: "/work", label: "Work" },
    { path: "/feed", label: "Feed" },
  ];

  const desktopNavTextVariants = {
    initial: { y: 0 },
    hover: { y: -20, transition: { duration: 0.3, ease: "easeInOut" } }
  };

  const desktopNavOverlayVariants = {
    initial: { y: 20 },
    hover: { y: 0, transition: { duration: 0.3, ease: "easeInOut" } }
  };

  const isLinkActive = (path) => {
    return location.pathname === path;
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: "white",
        padding: "16px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          maxWidth: isMobile
            ? `calc(100vw - 40px)`
            : `calc(100vw - 60px)`,
          margin: "0 auto",
          boxSizing: "border-box",
        }}
      >
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{
              fontSize: "clamp(16px, 4vw, 20px)",
              fontWeight: 600,
              fontFamily: 'Switzer'
            }}
          >
            Jin-Her
          </motion.div>
        </Link>

        {!isMobile && (
          <nav
            style={{
              display: "flex",
              gap: "clamp(12px, 2vw, 24px)",
              fontSize: "clamp(12px, 2.5vw, 16px)",
              fontWeight: 600,
              fontFamily: 'Switzer'
            }}
          >
            {navItems.map((item) => (
              <motion.div
                key={item.path}
                initial="initial"
                whileHover="hover"
                className={`desktop-nav-item-container ${isLinkActive(item.path) ? 'active' : ''}`}
                style={{
                  height: '20px',
                  overflow: 'hidden',
                  position: 'relative',
                  cursor: 'pointer',
                }}
              >
                <Link
                  to={item.path}
                  style={{ textDecoration: "none", color: "black" }}
                  className="nav-item-link"
                >
                  <motion.div variants={desktopNavTextVariants}>
                    {item.label}
                  </motion.div>
                  <motion.div
                    variants={desktopNavOverlayVariants}
                    style={{ position: 'absolute', top: 0, left: 0 }}
                  >
                    {item.label}
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </nav>
        )}

        {isMobile && (
          <motion.div
            onClick={toggleMenu}
            style={{
              fontSize: "clamp(24px, 5vw, 28px)",
              cursor: "pointer",
              userSelect: "none",
              position: "fixed",
              top: "16px",
              right: "16px",
              zIndex: 1100,
            }}
            animate={{ rotate: menuOpen ? 45 : 0 }}
          >
            +
          </motion.div>
        )}

        <AnimatePresence>
          {menuOpen && isMobile && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                background: "rgba(255,255,255,0.95)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "32px",
                fontSize: "24px",
                zIndex: 1050,
                fontWeight: 600,
                fontFamily: 'Switzer'
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.1 }}
              >
                <Link
                  to="/about"
                  onClick={() => setMenuOpen(false)}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  About
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.2 }}
              >
                <Link
                  to="/work"
                  onClick={() => setMenuOpen(false)}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Work
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  to="/feed"
                  onClick={() => setMenuOpen(false)}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Contact
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}