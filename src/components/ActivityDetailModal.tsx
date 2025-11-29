// src/components/ActivityDetailModal.tsx
import { motion } from 'framer-motion';
import { X, ExternalLink, Calendar, MapPin } from 'lucide-react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useState, useEffect } from 'react';

interface Activity {
  title: string;
  role: string;
  description: string;
  images: string[];
  link?: string;
  duration?: string;
  location?: string;
}

interface ActivityDetailModalProps {
  activity: Activity;
  onClose: () => void;
}

export default function ActivityDetailModal({ activity, onClose }: ActivityDetailModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (activity.images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((i) => (i + 1) % activity.images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [activity.images.length]);

  // Close with Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="relative max-w-7xl w-full bg-gradient-to-br from-slate-950 via-black to-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 bg-black/60 hover:bg-amber-500/40 backdrop-blur-md text-white p-4 rounded-full border border-white/20 hover:border-amber-400 transition-all"
        >
          <X className="w-7 h-7" />
        </button>

        {/* Hero Background Slideshow */}
        <div className="absolute inset-0 opacity-50">
          {activity.images.map((src, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                i === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <LazyLoadImage src={src} alt="" effect="blur" className="w-full h-full object-cover" />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 p-8 md:p-12 lg:p-16">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left: Text */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                  {activity.title}
                </h1>
                <p className="text-2xl md:text-3xl text-amber-400 font-semibold mt-3">
                  {activity.role}
                </p>
              </div>

              {/* Meta Info */}
              {(activity.duration || activity.location) && (
                <div className="flex flex-wrap gap-8 text-slate-300">
                  {activity.duration && (
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-amber-400" />
                      <span>{activity.duration}</span>
                    </div>
                  )}
                  {activity.location && (
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-amber-400" />
                      <span>{activity.location}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Description */}
              <div className="text-lg leading-relaxed text-slate-200 space-y-5 max-w-4xl">
                {activity.description.split('\n').map((p, i) => (
                  <p key={i}>{p || <br />}</p>
                ))}
              </div>

              {/* Link */}
              {activity.link && (
                <a
                  href={activity.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 px-8 py-4 rounded-full border border-amber-400/50 hover:border-amber-400 transition-all font-semibold text-lg"
                >
                  View Project <ExternalLink className="w-6 h-6" />
                </a>
              )}
            </div>

            {/* Right: Gallery */}
            {activity.images.length > 1 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">Gallery</h3>
                <div className="grid grid-cols-2 gap-4">
                  {activity.images.map((src, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentImageIndex(i)}
                      className={`relative rounded-2xl overflow-hidden border-4 transition-all ${
                        i === currentImageIndex
                          ? 'border-amber-400 shadow-2xl shadow-amber-400/40'
                          : 'border-white/20 hover:border-white/40'
                      }`}
                    >
                      <LazyLoadImage
                        src={src}
                        alt={`Image ${i + 1}`}
                        effect="blur"
                        className="w-full h-40 object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}