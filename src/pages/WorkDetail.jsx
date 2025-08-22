// src/pages/WorkDetail.jsx
import React, { useRef, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import PageLayout from '../components/PageLayout';
import './WorkDetail.css';

//
import coverMain1 from '../assets/images/cover.jpg';

// Global color and font constants
const LABEL_COLOR = "#999999ff";
const TITLE_COLOR = "#222222";
const OVERUSEDGRO_FONT_FAMILY = "OverusedGrotesk";
const MAIN_FONT_FAMILY = "Switzer";

// MetaItem component
function MetaItem({ label, value }) {
  if (!value) return null;
  return (
    <div style={{ marginBottom: "clamp(0.5rem, 1vw, 1rem)" }}>
      <p
        style={{ fontWeight: "bold", color: LABEL_COLOR, fontFamily: MAIN_FONT_FAMILY }}
        className="meta-label-margin"
      >
        {label}
      </p>
      {Array.isArray(value)
        ? value.map((item, idx) => (
            <p key={idx} style={{ margin: 0, fontFamily: OVERUSEDGRO_FONT_FAMILY }}>
              {item}
            </p>
          ))
        : <p style={{ margin: 0, fontFamily: OVERUSEDGRO_FONT_FAMILY }}>{value}</p>
      }
    </div>
  );
}

// MoreWorks component
function MoreWorks({ workItems, currentWorkId }) {
  const otherWorks = workItems.filter(work => work.id !== currentWorkId).slice(0, 3); // ✅ 3개까지만
  if (!otherWorks.length) return null;

  return (
    <div style={{ marginTop: 'clamp(3rem, 10vw, 6rem)' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 'clamp(1.5rem, 5vw, 2.5rem)',
      }}>
        <h2 style={{
          fontSize: "clamp(24px, 5vw, 36px)",
          fontWeight: "bold",
          color: TITLE_COLOR,
          fontFamily: MAIN_FONT_FAMILY,
        }}>More works</h2>
        <a href="/work" style={{ fontSize: '0.875rem', fontFamily: OVERUSEDGRO_FONT_FAMILY }}>View All</a>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 'clamp(1rem, 2vw, 1.5rem)',
      }} className="more-works-grid">
        {otherWorks.map((work, index) => (
          <a key={index} href={`/work/${work.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{
              position: 'relative',
              borderRadius: 'clamp(8px, 2vw, 24px)',
              overflow: 'hidden',
              aspectRatio: '1 / 1',
            }}>
              <img
                src={work.images[0]?.src || 'https://placehold.co/600x400'}
                alt={work.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                padding: '0.625rem',
                background: 'rgba(0,0,0,0.5)',
                width: '100%',
                color: 'white',
              }}>
                <p style={{ margin: 0, fontWeight: 'bold' }}>{work.title}</p>
                <p style={{ margin: 0, fontSize: '0.75rem' }}>
                  {Array.isArray(work.medium) ? work.medium.join(' l ') : work.medium}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}


// Temporary work data
const workData = [
  {
    id: '1',
    title: 'I’m Looking for the Sunset but Can’t See the Horizon',
    medium: ['Visual Identity', 'Motion Graphic', 'Socials'],
    year: '2024',
    fullDescription: 'We developed accompanying visuals for Laure Boer’s exhibition I’m Looking for Sunset but Can’t See the Horizon...',
    credits: { type: null, workWith: 'Bank Berlin', client: 'Laure Boer, Galerie 21 im Vorwerk-Stift', design: null },
    images: [
      { src: coverMain1, isLarge: true },
      { src: 'https://placehold.co/600x400/333333/FFFFFF?text=Thumb+1', isLarge: false },
      { src: 'https://placehold.co/600x400/444444/FFFFFF?text=Thumb+2', isLarge: false },
    ]
  },
  { id: '2', title: 'Work Item 2', medium: ['Branding', 'Packaging'], year: '2023', fullDescription: 'Detailed page for Work Item 2.', credits: { type: 'Personal Project', workWith: null, client: null, design: null }, images: [{ src: 'https://placehold.co/1200x800/000000/FFFFFF?text=Project+Image', isLarge: true }] },
  { id: '3', title: 'Work Item 3', medium: ['Web Design', 'UX/UI'], year: '2022', fullDescription: 'Detailed page for Work Item 3.', images: [{ src: 'https://placehold.co/800x600/222222/FFFFFF?text=Work+3+Image', isLarge: true }] },
  { id: '4', title: 'Work Item 4', medium: ['Branding', 'Packaging'], year: '2023', fullDescription: 'Detailed page for Work Item 4.', credits: { type: 'Personal Project', workWith: null, client: null, design: null }, images: [{ src: 'https://placehold.co/1200x800/000000/FFFFFF?text=Project+Image', isLarge: true }] },
  { id: '5', title: 'Work Item 5', medium: ['Web Design', 'UX/UI'], year: '2022', fullDescription: 'Detailed page for Work Item 5.', images: [{ src: 'https://placehold.co/800x600/222222/FFFFFF?text=Work+3+Image', isLarge: true }] },
  { id: '6', title: 'Work Item 6', medium: ['Web Design', 'UX/UI'], year: '2022', fullDescription: 'Detailed page for Work Item 6.', images: [{ src: 'https://placehold.co/800x600/222222/FFFFFF?text=Work+3+Image', isLarge: true }] },
  // 다른 작업도 추가 가능
];

export default function WorkDetail({ leftPadding }) {
  const { id } = useParams();
  const workItem = workData.find(item => item.id === id);
  const imageRef = useRef(null);
  const imageInView = useInView(imageRef, { once: true, margin: "-100px" });
  const location = useLocation();

  useEffect(() => { window.scrollTo(0, 0); }, [location.pathname]);

  if (!workItem) {
    return (
      <PageLayout leftPadding={leftPadding}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} style={{ textAlign: 'center', marginTop: '6.25rem' }}>
          <p>Work not found.</p>
        </motion.div>
      </PageLayout>
    );
  }

  return (
    <PageLayout leftPadding={leftPadding}>
      <motion.div initial={{ opacity: 0, y: '1.875rem' }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        {/* Title */}
        <h1 style={{ fontSize: "clamp(24px, 5vw, 36px)", fontWeight: "bold", lineHeight: '1.3', color: TITLE_COLOR, fontFamily: MAIN_FONT_FAMILY }} className="title-margin">
          {workItem.title}
        </h1>

        {/* Desktop Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(9.375rem, 1.5fr) 1.5fr 3fr', gap: 'clamp(1.25rem, 4vw, 2.5rem)', fontSize: 'clamp(0.875rem, 3vw, 1rem)', lineHeight: '1.5', marginBottom: 'clamp(1.875rem, 5vw, 3.75rem)' }} className="grid-wrapper">
          {/* Credits */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 'clamp(9.375rem, 30vh, 12.5rem)', order: 2 }} className="desktop-only">
            <div><p style={{ fontWeight: "bold", color: LABEL_COLOR }} className="meta-label-margin">Credits</p></div>
            <div>
              <MetaItem label="Type" value={workItem.credits?.type} />
              <MetaItem label="Design" value={workItem.credits?.design} />
              <MetaItem label="Client" value={workItem.credits?.client} />
              <MetaItem label="Work With" value={workItem.credits?.workWith} />
            </div>
          </div>

          {/* Medium & Year */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', order: 1 }}>
            <MetaItem label="Medium" value={workItem.medium} />
            <MetaItem label="Year" value={workItem.year} />
          </div>

          {/* Project Description */}
          <div style={{ order: 3 }} className="desktop-only">
            <div>
              <p style={{ fontWeight: 'bold', color: LABEL_COLOR }} className="meta-label-margin">Project Description</p>
              <p style={{ margin: 0, fontFamily: OVERUSEDGRO_FONT_FAMILY }} dangerouslySetInnerHTML={{ __html: workItem.fullDescription }}></p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div ref={imageRef} className="images-grid">
          {workItem.images?.map((img, index) => (
            <motion.img key={index} src={img.src} alt={`${workItem.title} - ${index + 1}`}
              initial={{ opacity: 0, y: '3.125rem' }}
              animate={imageInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut", delay: index * 0.2 }}
              style={{ width: '100%', height: 'auto', borderRadius: 'clamp(8px, 2vw, 24px)', gridColumn: img.isLarge ? 'span 2' : 'span 1' }}
            />
          ))}
        </div>

        {/* More Works */}
        <MoreWorks workItems={workData} currentWorkId={id} />

        {/* Mobile Credits & Description */}
        <div className="mobile-only" style={{ marginTop: '2.5rem' }}>
          <div>
            <p style={{ fontWeight: "bold", color: LABEL_COLOR }} className="meta-label-margin">Credits</p>
            <MetaItem label="Type" value={workItem.credits?.type} />
            <MetaItem label="Design" value={workItem.credits?.design} />
            <MetaItem label="Client" value={workItem.credits?.client} />
            <MetaItem label="Work With" value={workItem.credits?.workWith} />
          </div>
          <div>
            <p style={{ fontWeight: 'bold', color: LABEL_COLOR }} className="meta-label-margin">Project Description</p>
            <p style={{ margin: 0, fontFamily: OVERUSEDGRO_FONT_FAMILY }} dangerouslySetInnerHTML={{ __html: workItem.fullDescription }}></p>
          </div>
        </div>

      </motion.div>
    </PageLayout>
  );
}
