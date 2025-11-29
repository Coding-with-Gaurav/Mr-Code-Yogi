// components/CertificateModal.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface CertificateModalProps {
  cert: { name: string; issuer: string; link: string };
  onClose: () => void;
}

export default function CertificateModal({ cert, onClose }: CertificateModalProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 backdrop-blur-xl z-50 flex items-center justify-center p-6"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.95 }}
          className="bg-slate-900/95 backdrop-blur-xl border border-amber-400/30 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>

          <h3 className="text-2xl font-display font-bold text-white mb-4">
            {cert.name}
          </h3>
          <p className="text-amber-400 mb-6">{cert.issuer}</p>

          {/* The certificate itself – most platforms give a PDF or image */}
          <div className="bg-white rounded-lg overflow-hidden">
            <iframe
              src={cert.link}
              className="w-full h-[70vh]"
              title={cert.name}
            />
          </div>

          <div className="mt-6 text-center">
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300"
            >
              Open in new tab
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}