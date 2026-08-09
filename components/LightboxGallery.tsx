'use client';

import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

interface GalleryImage {
  src: string;
  alt: string;
}

export default function LightboxGallery({ images }: { images: GalleryImage[] }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <ScrollReveal key={index} delay={index * 150}>
            <div 
              style={{ overflow: 'hidden', cursor: 'pointer' }} 
              className="image-hover"
              onClick={() => openLightbox(index)}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                style={{ width: '100%', height: '300px', objectFit: 'cover', transform: 'scale(1.05)', display: 'block', transition: 'transform 0.3s ease' }} 
              />
            </div>
          </ScrollReveal>
        ))}
      </div>

      {lightboxOpen && (
        <div 
          onClick={closeLightbox}
          style={{
            position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.95)', zIndex: 9999,
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            opacity: 1, transition: 'opacity 0.3s ease'
          }}
        >
          <button 
            onClick={closeLightbox}
            style={{ position: 'absolute', top: '20px', right: '30px', background: 'none', border: 'none', color: '#fff', fontSize: '3rem', cursor: 'pointer', zIndex: 10000 }}
          >
            &times;
          </button>
          
          <button 
            onClick={prevImage}
            style={{ position: 'absolute', left: '20px', background: 'none', border: 'none', color: '#fff', fontSize: '4rem', cursor: 'pointer', zIndex: 10000, padding: '20px' }}
          >
            &#10094;
          </button>

          <img 
            src={images[currentIndex].src} 
            alt={images[currentIndex].alt} 
            style={{ maxHeight: '90vh', maxWidth: '90vw', objectFit: 'contain', boxShadow: '0 0 40px rgba(0,0,0,0.5)' }}
            onClick={(e) => e.stopPropagation()}
          />

          <button 
            onClick={nextImage}
            style={{ position: 'absolute', right: '20px', background: 'none', border: 'none', color: '#fff', fontSize: '4rem', cursor: 'pointer', zIndex: 10000, padding: '20px' }}
          >
            &#10095;
          </button>
        </div>
      )}
    </>
  );
}
