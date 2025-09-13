// src/pages/WorkDetail.jsx
import React, { useRef, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import PageLayout from '../components/PageLayout';
import './WorkDetail.css';
import { Link } from 'react-router-dom'; // 파일 상단에 한 번만


////이미지 임포트
////_Petrichor
import coverMain1_Petrichor from '../assets/images/Petrichor/cover_Petrichor.jpg';
//_Petrichor_photo
import coverMain2_Petrichor from '../assets/images/Petrichor/photo2_Petrichor.jpg';
//_Petrichor_cassette
import coverMain3_Petrichor from '../assets/images/Petrichor/cassette_Petrichor.jpg';
import coverMain4_Petrichor from '../assets/images/Petrichor/cassette2_Petrichor.jpg';
import coverMain5_Petrichor from '../assets/images/Petrichor/cassette3_Petrichor.jpg';
//_Petrichor_book
import coverMain6_Petrichor from '../assets/images/Petrichor/bookphoto2_Petrichor.jpg';
import coverMain7_Petrichor from '../assets/images/Petrichor/bookphoto_Petrichor.jpg';
import coverMain8_Petrichor from '../assets/images/Petrichor/book3_Petrichor.jpg';

////_Unseen
import coverMain1_Unseen from '../assets/images/Unseen/cover2_Unseen.jpg';
import coverMain2_Unseen from '../assets/images/Unseen/screenshot_Unseen.jpg';

import coverMain3_Unseen from '../assets/images/Unseen/process_Unseen.jpg';
import coverMain4_Unseen from '../assets/images/Unseen/app_Unseen.jpg';

////_Sunset
import coverMain1_Sunset from '../assets/images/Sunset/cover_Sunset.jpg';

import coverMain2_Sunset from '../assets/images/Sunset/photo_Sunset.jpg';
import coverMain3_Sunset from '../assets/images/Sunset/photo2_Sunset.jpg';

import coverMain4_Sunset from '../assets/images/Sunset/insta_Sunset.jpg';
import coverMain5_Sunset from '../assets/images/Sunset/insta2_Sunset.jpg';

import coverMain6_Sunset from '../assets/images/Sunset/overall_Sunset.jpg';


////_OPBU
import coverMain1_OPBU from '../assets/images/OPBU/cover_OPBU.jpg';
import coverMain2_OPBU from '../assets/images/OPBU/logo_OPBU.jpg';
import coverMain3_OPBU from '../assets/images/OPBU/overall_OPBU.jpg';
import coverMain4_OPBU from '../assets/images/OPBU/flag_OPBU.jpg';


////_Twoscapes
import coverMain1_Twoscapes from '../assets/images/Twoscapes/cover_Twoscapes.jpg';

import coverMain2_Twoscapes from '../assets/images/Twoscapes/screenshot4_Twoscapes.jpg';
import coverMain3_Twoscapes from '../assets/images/Twoscapes/screenshot5_Twoscapes.jpg';
import coverMain4_Twoscapes from '../assets/images/Twoscapes/screenshot6_Twoscapes.jpg';
import coverMain5_Twoscapes from '../assets/images/Twoscapes/screenshot7_Twoscapes.jpg';



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
// MoreWorks component
// MoreWorks component
function MoreWorks({ workItems, currentWorkId }) {
  const otherWorks = workItems.filter(work => work.id !== currentWorkId).slice(0, 3);
  if (!otherWorks.length) return null;

  return (
    <div className="more-works-wrapper">
      <div className="more-works-header">
        <h2 className="more-works-title">More works</h2>
            <Link
            to="/work"
            className="more-works-link"
            onClick={() => window.scrollTo(0, 0)}
            >
          View All
        </Link>
      </div>

      <div className="more-works-grid">
        {otherWorks.map((work, index) => (
          <a key={index} href={`/work/${work.id}`} className="more-works-item">
            <div className="more-works-image-wrapper">
              <img
                src={work.images[0]?.src || 'https://placehold.co/600x400'}
                alt={work.title}
                className="more-works-image"
              />
              <div className="more-works-overlay">
                <p className="more-works-title-text">{work.title}</p>
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
    title: 'Petrichor',
    medium: ['App design', 'Brand Identity'],
    year: '2024',
    fullDescription: 'Petrichor is a brand that explores well-being and mental health through the rhythms of nature. It offers an experience that promotes relaxation and meditation through the sound of rain (white noise). The brand extends this experience through both digital and physical formats.',
    credits: { type: 'Personal Project', client: null, design: null },
    images: [
      { src: coverMain1_Petrichor, isLarge: true },
      { src: 'https://player.vimeo.com/video/1113647543?autoplay=1&loop=1&autopause=0', isLarge: true, type: 'video' },
      { src: coverMain3_Petrichor, isLarge: true },      
      { src: coverMain4_Petrichor, isLarge: false },
      { src: coverMain5_Petrichor, isLarge: false },

      { src: coverMain8_Petrichor, isLarge: true },
      { src: coverMain6_Petrichor, isLarge: false },
      { src: coverMain7_Petrichor, isLarge: false },

      { src: coverMain2_Petrichor, isLarge: true },
            
    ]
  },
  {
    id: '2',
    title: '(un)seen flow: (in)visible systems,(dis)abled agency',
    medium: ['Data & System Design', 'Web Development', 'Wall Graphic'],
    year: '2025',
    fullDescription: 'This project does not view the border space around us as a simple geographical border or physical barrier. In today’s world, borders are made up of complex and constantly changing fluid systems that span a variety of fields, including information, politics, and economics. To explore this, the platform classifies borders into ten types, illustrating how each is constructed and operates within multi-layered contexts of visibility and physicality. This allows us to gain a deeper understanding of the nature of borders and the complexity of the systems we are part of.',
    credits: { type: 'Personal Project', client: null, design: null },
    images: [
      { src: coverMain1_Unseen, isLarge: true },
      { src: coverMain4_Unseen, isLarge: true },
      { src: coverMain2_Unseen, isLarge: true },
      { src: coverMain3_Unseen, isLarge: true },

      { src: 'https://player.vimeo.com/video/1101876369?autoplay=1&loop=1&autopause=0', isLarge: true, type: 'video' },
    ]
  },
  {
    id: '3',
    title: 'I’m Looking for the Sunset but Can’t See the Horizon',
    medium: ['Visual Identity', 'Motion Graphic', 'Socials'],
    year: '2024',
    fullDescription: 'We developed accompanying visuals for Laure Boer’s exhibition I’m Looking for Sunset but Can’t See the Horizon to expand the symbolic meaning of the sunset. Prioritizing an emotional, artistic, and poetic approach over realism, the visuals evoke heightened emotions and a sense of longing for something just out of reach, aligning with the exhibition’s contemplative mood.',
    credits: { type: 'Internship Project', client: 'Laure Boer, Galerie 21 im Vorwerk-Stift', design: 'BANK™ Berlin' },
    images: [
      { src: coverMain1_Sunset, isLarge: true },
      { src: coverMain2_Sunset, isLarge: true },
      { src: coverMain3_Sunset, isLarge: true },
      { src: coverMain5_Sunset, isLarge: true },
      { src: coverMain4_Sunset, isLarge: true },      
       { src: coverMain6_Sunset, isLarge: true },
    ]
  }, 
  {
    id: '4',
    title: 'OPBU',
    medium: ['Visual Identity', 'Logo', 'Stationery'],
    year: '2023',
    fullDescription: 'OPBU is an imaginary organization devoted to preserving the raw beauty of public signage and challenging conventional aesthetics often ignored by trends. It prompts reflection on the fine line between beauty and ugliness, evoking curiosity rather than answers.',
    credits: { type: 'Personal Project', client: null, design: null },
    images: [
      { src: coverMain1_OPBU, isLarge: true },
      { src: coverMain2_OPBU, isLarge: true },
      { src: coverMain3_OPBU, isLarge: true },
      { src: coverMain4_OPBU, isLarge: true },
    ]
  },
  {
    id: '5',
    title: 'Two Scapes',
    medium: ['Visual Identity', 'Video Installation', '3D Graphic'],
    year: '2023',
    fullDescription: 'This convenience disconnects us from the natural world, leading us to forget our essential connection to it. Despite our integral role in the cycle of nature, we live without acknowledging our gratitude to it. It is also important to note that industrial agriculture and large-scale corporate farming practices are detrimental to both the environment and humanity. This video aims to emphasize the importance of acknowledging and appreciating our sources of sustenance, fostering a deeper connection and sense of responsibility toward the environment that supports us.',
    credits: { type: 'Personal Project', client: null, design: null },
    images: [
      { src: coverMain1_Twoscapes, isLarge: true },
      { src: coverMain2_Twoscapes, isLarge: false },
      { src: coverMain3_Twoscapes, isLarge: false },
      { src: coverMain4_Twoscapes, isLarge: false },
      { src: coverMain5_Twoscapes, isLarge: false },
      { src: 'https://player.vimeo.com/video/1004804287?autoplay=1&loop=1&autopause=0', isLarge: true, type: 'video' },

    ]
  },

  // 다른 작업도 추가 가능
];


function WorkImage({ img, workTitle, index, imageInView }) {
    if (img.type === 'video') {
        return (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: '3.125rem' }}
                animate={imageInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut", delay: index * 0.2 }}
                style={{
                    gridColumn: img.isLarge ? 'span 2' : 'span 1',
                    borderRadius: 'clamp(8px, 2vw, 24px)',
                    overflow: 'hidden',
                    position: 'relative',
                    paddingBottom: '56.25%', // 16:9 aspect ratio
                }}
            >
                <iframe
                    src={img.src}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                    }}
                    title={workTitle}
                ></iframe>
            </motion.div>
        );
    }
    return (
        <motion.img
            key={index}
            src={img.src}
            alt={`${workTitle} - ${index + 1}`}
            initial={{ opacity: 0, y: '3.125rem' }}
            animate={imageInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: index * 0.2 }}
            style={{ width: '100%', height: 'auto', borderRadius: 'clamp(8px, 2vw, 24px)', gridColumn: img.isLarge ? 'span 2' : 'span 1' }}
        />
    );
}


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
              <MetaItem label="Work with" value={workItem.credits?.design} />
              <MetaItem label="Client" value={workItem.credits?.client} />
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
            <WorkImage key={index} img={img} workTitle={workItem.title} index={index} imageInView={imageInView} />
          ))}
        </div>

        {/* More Works */}
        <MoreWorks workItems={workData} currentWorkId={id} />

        {/* Mobile Credits & Description */}
        <div className="mobile-only" style={{ marginTop: '2.5rem' }}>
          <div>
            <p style={{ fontWeight: "bold", color: LABEL_COLOR }} className="meta-label-margin">Credits</p>
            <MetaItem label="Type" value={workItem.credits?.type} />
            <MetaItem label="Work with" value={workItem.credits?.design} />
            <MetaItem label="Client" value={workItem.credits?.client} />
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