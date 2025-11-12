// import { Award, Briefcase, GraduationCap, Code, FileText, BookOpen, Sparkles } from 'lucide-react';
// import Navigation from './components/Navigation';
// import Hero from './components/Hero';
// import ProjectsGrid from './components/ProjectsGrid';
// import SkillBadges from './components/SkillBadges';
// import Timeline from './components/Timeline';
// import ContactForm from './components/ContactForm';

// function App() {
//   const projects = [
//     {
//       title: "HistoAI",
//       description: "Historical Data Extraction from PDFs",
//       longDescription: "Advanced LLM-based system for extracting structured information from complex historical documents with optical character recognition and natural language processing.",
//       technologies: ["Python", "LLMs", "NLP", "PDF Processing", "LangChain"],
//       link: "#",
//       github: "#"
//     },
//     {
//       title: "Ayur Scan",
//       description: "Tongue Analysis & Diagnosis App",
//       longDescription: "Mobile application leveraging AI computer vision for Ayurvedic tongue diagnosis, providing personalized health insights based on traditional medicine principles.",
//       technologies: ["Flutter", "TensorFlow", "Computer Vision", "Firebase", "React"],
//       link: "#",
//       github: "#"
//     },
//     {
//       title: "Sanskrit OCR",
//       description: "OCR for Ancient Manuscripts",
//       longDescription: "Specialized optical character recognition system designed for accurate digitization of ancient Sanskrit manuscripts and cultural texts with deep learning.",
//       technologies: ["Python", "OpenCV", "Deep Learning", "Tesseract", "PyTorch"],
//       link: "#",
//       github: "#"
//     },
//     {
//       title: "RAG Chatbot",
//       description: "Retrieval-Augmented Generation System",
//       longDescription: "Intelligent chatbot leveraging retrieval-augmented generation with LLMs for context-aware conversations and knowledge base integration.",
//       technologies: ["LangChain", "GPT", "Vector DB", "Flask", "React"],
//       link: "#",
//       github: "#"
//     },
//     {
//       title: "Knowledge Graph Generator",
//       description: "Semantic Knowledge Graph Construction",
//       longDescription: "Automated system for generating knowledge graphs from unstructured text using LLMs, enabling semantic understanding and relationship extraction.",
//       technologies: ["Python", "LLMs", "Neo4j", "NLP", "Graph DB"],
//       link: "#",
//       github: "#"
//     },
//     {
//       title: "Medical AI Research",
//       description: "Healthcare AI Applications",
//       longDescription: "Research and development of AI applications for healthcare including diagnosis assistance, patient data analysis, and predictive modeling.",
//       technologies: ["TensorFlow", "PyTorch", "Healthcare Data", "ML", "Research"],
//       link: "#",
//       github: "#"
//     }
//   ];

//   const skills = {
//     "Programming Languages": ["Python", "C", "JavaScript", "Java", "Dart", "SQL"],
//     "Web & Mobile Development": ["React", "Flask", "HTML", "CSS", "Bootstrap", "Flutter"],
//     "ML & NLP": ["TensorFlow", "PyTorch", "Keras", "scikit-learn", "LangChain", "spaCy", "NLTK"],
//     "Data Visualization": ["Matplotlib", "Seaborn", "Plotly", "Tableau"],
//     "Cloud & Tools": ["Google Cloud", "Firebase", "Git", "Jupyter", "Docker", "APIs"],
//     "Databases": ["MySQL", "MongoDB", "Neo4j", "Vector DB", "Supabase"]
//   };

//   const experiences = [
//     {
//       title: "Junior Research Fellow",
//       organization: "Center for Artificial Intelligence & Research (IAI)",
//       duration: "Jun 2025 - Present",
//       current: true,
//       responsibilities: [
//         "Lead development of HistoAI for structured data extraction from historical documents using LLMs",
//         "Architect and implement RAG-integrated chatbot systems with advanced NLP capabilities",
//         "Design and develop knowledge graph generation pipelines for semantic data representation",
//         "Conduct cutting-edge research in AI applications for healthcare and cultural technology"
//       ]
//     },
//     {
//       title: "Research Intern",
//       organization: "Center for Artificial Intelligence & Research (IAI)",
//       duration: "2023 - 2025",
//       current: false,
//       responsibilities: [
//         "Conducted extensive research on mobile-based tongue diagnosis using computer vision and AI",
//         "Developed NLP applications for healthcare data analysis and medical text processing",
//         "Published accepted research paper on AI-driven tongue diagnosis systems",
//         "Contributed to multiple AI research initiatives and project implementations"
//       ]
//     },
//     {
//       title: "Software Development Volunteer",
//       organization: "Various Organizations",
//       duration: "2022 - 2023",
//       current: false,
//       responsibilities: [
//         "Supported open-source software development initiatives and collaborative projects",
//         "Contributed to web and mobile application projects and architecture",
//         "Collaborated with distributed teams on technical solutions and problem-solving"
//       ]
//     }
//   ];

//   const certifications = [
//     { name: "Data Science Specialization", issuer: "Coursera" },
//     { name: "Generative AI Fundamentals", issuer: "Google Cloud" },
//     { name: "Big Data Analytics", issuer: "Udemy" },
//     { name: "Machine Learning with Python", issuer: "Coursera" },
//     { name: "Natural Language Processing", issuer: "DeepLearning.AI" }
//   ];

//   const education = [
//     {
//       degree: "Master of Computer Applications (MCA)",
//       institution: "Dev Sanskriti Vishwavidyalaya, Uttarakhand",
//       duration: "2023 - 2025",
//       focus: "Specialization: Data Science, AI & NLP"
//     },
//     {
//       degree: "Bachelor of Science in Information Technology",
//       institution: "Patliputra University, Patna",
//       duration: "2019 - 2022",
//       focus: "Foundation in computer science and software development"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-slate-900 text-slate-300">
//       <Navigation />
//       <Hero />

//       <main className="max-w-6xl mx-auto px-6 py-20 space-y-28">
//         <section id="education" className="space-y-8">
//           <div className="flex items-center gap-3">
//             <GraduationCap className="w-8 h-8 text-amber-400" />
//             <h2 className="text-3xl font-bold text-white">Education</h2>
//           </div>
//           <div className="grid md:grid-cols-2 gap-6">
//             {education.map((edu, index) => (
//               <div
//                 key={index}
//                 className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-amber-400/50 transition-colors"
//               >
//                 <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
//                 <p className="text-amber-400 mt-2">{edu.institution}</p>
//                 <p className="text-slate-400 text-sm mt-1">{edu.duration}</p>
//                 <p className="text-slate-300 text-sm mt-3">{edu.focus}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         <section id="projects" className="space-y-8">
//           <div className="flex items-center gap-3">
//             <Code className="w-8 h-8 text-amber-400" />
//             <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
//           </div>
//           <ProjectsGrid projects={projects} />
//         </section>

//         <section id="publications" className="space-y-8">
//           <div className="flex items-center gap-3">
//             <BookOpen className="w-8 h-8 text-amber-400" />
//             <h2 className="text-3xl font-bold text-white">Publications</h2>
//           </div>
//           <div className="bg-slate-800 border border-amber-400/30 rounded-xl p-8 hover:border-amber-400/70 transition-colors">
//             <div className="space-y-4">
//               <h3 className="text-xl font-semibold text-white">
//                 AI-Driven Tongue Diagnosis System for Healthcare
//               </h3>
//               <p className="text-slate-300 leading-relaxed">
//                 Research paper accepted for publication exploring the application of artificial intelligence
//                 and computer vision in traditional Ayurvedic tongue diagnosis. This work demonstrates the
//                 potential of AI in bridging ancient medical systems with modern technology.
//               </p>
//               <div className="flex gap-4 pt-4">
//                 <span className="inline-block px-4 py-2 bg-amber-400/10 text-amber-300 rounded-lg text-sm font-medium border border-amber-400/20">
//                   Status: Accepted
//                 </span>
//                 <a href="#" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors">
//                   <FileText className="w-4 h-4" />
//                   Download PDF
//                 </a>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section id="experience" className="space-y-8">
//           <div className="flex items-center gap-3">
//             <Briefcase className="w-8 h-8 text-amber-400" />
//             <h2 className="text-3xl font-bold text-white">Work Experience</h2>
//           </div>
//           <Timeline items={experiences} />
//         </section>

//         <section id="skills" className="space-y-8">
//           <div className="flex items-center gap-3">
//             <Sparkles className="w-8 h-8 text-amber-400" />
//             <h2 className="text-3xl font-bold text-white">Skills & Technologies</h2>
//           </div>
//           <div className="grid md:grid-cols-2 gap-8">
//             {Object.entries(skills).map(([category, items]) => (
//               <SkillBadges key={category} category={category} skills={items} />
//             ))}
//           </div>
//         </section>

//         <section className="space-y-8">
//           <div className="flex items-center gap-3">
//             <Award className="w-8 h-8 text-amber-400" />
//             <h2 className="text-3xl font-bold text-white">Certifications & Achievements</h2>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {certifications.map((cert, index) => (
//               <div
//                 key={index}
//                 className="bg-slate-800 border border-slate-700 rounded-lg p-4 hover:border-amber-400/50 transition-colors flex items-start gap-3"
//               >
//                 <Award className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
//                 <div>
//                   <p className="text-white font-medium">{cert.name}</p>
//                   <p className="text-slate-400 text-sm">{cert.issuer}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         <section id="contact" className="py-12">
//           <div className="space-y-8">
//             <div className="flex items-center gap-3">
//               <FileText className="w-8 h-8 text-amber-400" />
//               <h2 className="text-3xl font-bold text-white">Let's Connect</h2>
//             </div>
//             <ContactForm />
//           </div>
//         </section>
//       </main>

//       <footer className="bg-slate-800 border-t border-slate-700 text-slate-400 py-12 mt-28">
//         <div className="max-w-6xl mx-auto px-6 text-center">
//           <p className="text-sm">
//             © 2024 Gaurav Kumar. Building the future with AI, NLP, and full-stack development.
//           </p>
//           <p className="text-xs mt-2">
//             AI Research • NLP • Full-Stack Development • Healthcare AI • Cultural Technology
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;




// import { Award, Briefcase, GraduationCap, Code, FileText, BookOpen, Sparkles, Mail, Github, Linkedin } from 'lucide-react';
// import { motion } from 'framer-motion';
// import { useState } from 'react';
// import toast, { Toaster } from 'react-hot-toast';
// import Navigation from './components/Navigation';
// import Hero from './components/Hero';
// import ProjectsGrid from './components/ProjectsGrid';
// import SkillBadges from './components/SkillBadges';
// import Timeline from './components/Timeline';
// import ContactForm from './components/ContactForm';

// function App() {
//   const [selectedProject, setSelectedProject] = useState<any>(null);

//   const projects = [
//     {
//       title: "HistoAI",
//       description: "Historical Data Extraction from PDFs",
//       longDescription: "Advanced LLM-based system for extracting structured information from complex historical documents with optical character recognition and natural language processing.",
//       technologies: ["Python", "LLMs", "NLP", "PDF Processing", "LangChain"],
//       link: "https://github.com/Coding-with-Gaurav/HistoAI",
//       github: "https://github.com/Coding-with-Gaurav/HistoAI"
//     },
//     {
//       title: "Ayur Scan",
//       description: "Tongue Analysis & Diagnosis App",
//       longDescription: "Mobile application leveraging AI computer vision for Ayurvedic tongue diagnosis, providing personalized health insights based on traditional medicine principles.",
//       technologies: ["Flutter", "TensorFlow", "Computer Vision", "Firebase", "React"],
//       link: "https://github.com/Coding-with-Gaurav/AyurScan",
//       github: "https://github.com/Coding-with-Gaurav/AyurScan"
//     },
//     {
//       title: "Sanskrit OCR",
//       description: "OCR for Ancient Manuscripts",
//       longDescription: "Specialized optical character recognition system designed for accurate digitization of ancient Sanskrit manuscripts and cultural texts with deep learning.",
//       technologies: ["Python", "OpenCV", "Deep Learning", "Tesseract", "PyTorch"],
//       link: "https://github.com/Coding-with-Gaurav/SanskritOCR",
//       github: "https://github.com/Coding-with-Gaurav/SanskritOCR"
//     },
//     {
//       title: "RAG Chatbot",
//       description: "Retrieval-Augmented Generation System",
//       longDescription: "Intelligent chatbot leveraging retrieval-augmented generation with LLMs for context-aware conversations and knowledge base integration.",
//       technologies: ["LangChain", "GPT", "Vector DB", "Flask", "React"],
//       link: "https://github.com/Coding-with-Gaurav/RAG-Chatbot",
//       github: "https://github.com/Coding-with-Gaurav/RAG-Chatbot"
//     },
//     {
//       title: "Knowledge Graph Generator",
//       description: "Semantic Knowledge Graph Construction",
//       longDescription: "Automated system for generating knowledge graphs from unstructured text using LLMs, enabling semantic understanding and relationship extraction.",
//       technologies: ["Python", "LLMs", "Neo4j", "NLP", "Graph DB"],
//       link: "https://github.com/Coding-with-Gaurav/KG-Generator",
//       github: "https://github.com/Coding-with-Gaurav/KG-Generator"
//     },
//     {
//       title: "Medical AI Research",
//       description: "Healthcare AI Applications",
//       longDescription: "Research and development of AI applications for healthcare including diagnosis assistance, patient data analysis, and predictive modeling.",
//       technologies: ["TensorFlow", "PyTorch", "Healthcare Data", "ML", "Research"],
//       link: "#",
//       github: "#"
//     }
//   ];

//   const skills = {
//     "Programming Languages": ["Python", "C", "JavaScript", "Java", "Dart", "SQL"],
//     "Web & Mobile Development": ["React", "Flask", "HTML", "CSS", "Bootstrap", "Flutter"],
//     "ML & NLP": ["TensorFlow", "PyTorch", "Keras", "scikit-learn", "LangChain", "spaCy", "NLTK"],
//     "Data Visualization": ["Matplotlib", "Seaborn", "Plotly", "Tableau"],
//     "Cloud & Tools": ["Google Cloud", "Firebase", "Git", "Jupyter", "Docker", "APIs"],
//     "Databases": ["MySQL", "MongoDB", "Neo4j", "Vector DB", "Supabase"]
//   };

//   const experiences = [
//     {
//       title: "Junior Research Fellow",
//       organization: "Center for Artificial Intelligence & Research (IAI)",
//       duration: "Jun 2025 - Present",
//       current: true,
//       responsibilities: [
//         "Lead development of HistoAI for structured data extraction from historical documents using LLMs",
//         "Architect and implement RAG-integrated chatbot systems with advanced NLP capabilities",
//         "Design and develop knowledge graph generation pipelines for semantic data representation",
//         "Conduct cutting-edge research in AI applications for healthcare and cultural technology"
//       ]
//     },
//     {
//       title: "Research Intern",
//       organization: "Center for Artificial Intelligence & Research (IAI)",
//       duration: "2023 - 2025",
//       current: false,
//       responsibilities: [
//         "Conducted extensive research on mobile-based tongue diagnosis using computer vision and AI",
//         "Developed NLP applications for healthcare data analysis and medical text processing",
//         "Published accepted research paper on AI-driven tongue diagnosis systems",
//         "Contributed to multiple AI research initiatives and project implementations"
//       ]
//     },
//     {
//       title: "Software Development Volunteer",
//       organization: "Various Organizations",
//       duration: "2022 - 2023",
//       current: false,
//       responsibilities: [
//         "Supported open-source software development initiatives and collaborative projects",
//         "Contributed to web and mobile application projects and architecture",
//         "Collaborated with distributed teams on technical solutions and problem-solving"
//       ]
//     }
//   ];

//   const certifications = [
//     { name: "Data Science Specialization", issuer: "Coursera" },
//     { name: "Generative AI Fundamentals", issuer: "Google Cloud" },
//     { name: "Big Data Analytics", issuer: "Udemy" },
//     { name: "Machine Learning with Python", issuer: "Coursera" },
//     { name: "Natural Language Processing", issuer: "DeepLearning.AI" }
//   ];

//   const education = [
//     {
//       degree: "Master of Computer Applications (MCA)",
//       institution: "Dev Sanskriti Vishwavidyalaya, Uttarakhand",
//       duration: "2023 - 2025",
//       focus: "Specialization: Data Science, AI & NLP"
//     },
//     {
//       degree: "Bachelor of Science in Information Technology",
//       institution: "Patliputra University, Patna",
//       duration: "2019 - 2022",
//       focus: "Foundation in computer science and software development"
//     }
//   ];

//   return (
//     <>
//       <Toaster position="top-right" />
//       <div className="min-h-screen bg-slate-950 text-slate-300">
//         <Navigation />
//         <Hero />

//         <main className="max-w-7xl mx-auto px-6 py-24 space-y-32">
//           {/* Education */}
//           <motion.section
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             id="education"
//             className="space-y-8"
//           >
//             <div className="flex items-center gap-3">
//               <GraduationCap className="w-8 h-8 text-amber-400" />
//               <h2 className="text-3xl md:text-4xl font-bold text-white">Education</h2>
//             </div>
//             <div className="grid md:grid-cols-2 gap-6">
//               {education.map((edu, i) => (
//                 <motion.div
//                   key={i}
//                   whileHover={{ y: -4 }}
//                   className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-amber-400/30 transition-all"
//                 >
//                   <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
//                   <p className="text-amber-400 mt-1">{edu.institution}</p>
//                   <p className="text-slate-400 text-sm">{edu.duration}</p>
//                   <p className="text-slate-300 text-sm mt-3">{edu.focus}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.section>

//           {/* Projects */}
//           <motion.section
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             id="projects"
//             className="space-y-8"
//           >
//             <div className="flex items-center gap-3">
//               <Code className="w-8 h-8 text-amber-400" />
//               <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h2>
//             </div>
//             <ProjectsGrid projects={projects} onSelect={setSelectedProject} />
//           </motion.section>

//           {/* Project Modal */}
//           {selectedProject && (
//             <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
//               <motion.div
//                 initial={{ scale: 0.9, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 className="bg-slate-900 border border-slate-700 rounded-2xl p-8 max-w-2xl w-full"
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
//                 <p className="text-slate-300 mt-3">{selectedProject.longDescription}</p>
//                 <div className="flex flex-wrap gap-2 mt-4">
//                   {selectedProject.technologies.map((tech: string) => (
//                     <span key={tech} className="px-3 py-1 bg-amber-400/10 text-amber-300 rounded-full text-xs font-medium">
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//                 <div className="flex gap-4 mt-6">
//                   {selectedProject.link !== "#" && (
//                     <a href={selectedProject.link} target="_blank" className="text-amber-400 hover:text-amber-300 flex items-center gap-2">
//                       <Github className="w-5 h-5" /> Live Demo
//                     </a>
//                   )}
//                   {selectedProject.github !== "#" && (
//                     <a href={selectedProject.github} target="_blank" className="text-amber-400 hover:text-amber-300 flex items-center gap-2">
//                       <Github className="w-5 h-5" /> Source Code
//                     </a>
//                   )}
//                 </div>
//                 <button
//                   onClick={() => setSelectedProject(null)}
//                   className="mt-6 text-slate-400 hover:text-white"
//                 >
//                   Close
//                 </button>
//               </motion.div>
//             </div>
//           )}

//           {/* Publications */}
//           <motion.section
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             id="publications"
//             className="space-y-8"
//           >
//             <div className="flex items-center gap-3">
//               <BookOpen className="w-8 h-8 text-amber-400" />
//               <h2 className="text-3xl md:text-4xl font-bold text-white">Publications</h2>
//             </div>
//             <motion.div
//               whileHover={{ scale: 1.01 }}
//               className="bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-400/20 rounded-2xl p-8 hover:border-amber-400/50 transition-all"
//             >
//               <h3 className="text-xl font-bold text-white">AI-Driven Tongue Diagnosis System for Healthcare</h3>
//               <p className="text-slate-300 mt-3 leading-relaxed">
//                 Research paper accepted for publication exploring the application of artificial intelligence
//                 and computer vision in traditional Ayurvedic tongue diagnosis.
//               </p>
//               <div className="flex gap-4 mt-6">
//                 <span className="px-4 py-2 bg-amber-400/10 text-amber-300 rounded-lg text-sm font-medium border border-amber-400/20">
//                   Status: Accepted
//                 </span>
//                 <a href="/path-to-paper.pdf" className="flex items-center gap-2 text-amber-400 hover:text-amber-300">
//                   <FileText className="w-4 h-4" /> Download PDF
//                 </a>
//               </div>
//             </motion.div>
//           </motion.section>

//           {/* Experience */}
//           <motion.section
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             id="experience"
//             className="space-y-8"
//           >
//             <div className="flex items-center gap-3">
//               <Briefcase className="w-8 h-8 text-amber-400" />
//               <h2 className="text-3xl md:text-4xl font-bold text-white">Work Experience</h2>
//             </div>
//             <Timeline items={experiences} />
//           </motion.section>

//           {/* Skills */}
//           <motion.section
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             id="skills"
//             className="space-y-8"
//           >
//             <div className="flex items-center gap-3">
//               <Sparkles className="w-8 h-8 text-amber-400" />
//               <h2 className="text-3xl md:text-4xl font-bold text-white">Skills & Technologies</h2>
//             </div>
//             <div className="grid md:grid-cols-2 gap-8">
//               {Object.entries(skills).map(([category, items], i) => (
//                 <motion.div
//                   key={category}
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ delay: i * 0.1 }}
//                 >
//                   <SkillBadges category={category} skills={items} />
//                 </motion.div>
//               ))}
//             </div>
//           </motion.section>

//           {/* Certifications */}
//           <motion.section
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="space-y-8"
//           >
//             <div className="flex items-center gap-3">
//               <Award className="w-8 h-8 text-amber-400" />
//               <h2 className="text-3xl md:text-4xl font-bold text-white">Certifications</h2>
//             </div>
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//               {certifications.map((cert, i) => (
//                 <motion.div
//                   key={i}
//                   whileHover={{ scale: 1.05 }}
//                   className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-5 hover:border-amber-400/50 transition-all flex items-start gap-3"
//                 >
//                   <Award className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
//                   <div>
//                     <p className="text-white font-semibold">{cert.name}</p>
//                     <p className="text-slate-400 text-sm">{cert.issuer}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.section>

//           {/* Contact */}
//           <motion.section
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             id="contact"
//             className="py-16"
//           >
//             <div className="flex items-center gap-3 mb-8">
//               <Mail className="w-8 h-8 text-amber-400" />
//               <h2 className="text-3xl md:text-4xl font-bold text-white">Let's Connect</h2>
//             </div>
//             <ContactForm onSuccess={() => toast.success("Message sent!")} />
//           </motion.section>
//         </main>

//         {/* Footer */}
//         <footer className="bg-slate-900 border-t border-slate-800 py-12 mt-32">
//           <div className="max-w-7xl mx-auto px-6 text-center">
//             <motion.p
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               className="text-sm text-slate-400"
//             >
//               © 2025 Gaurav Kumar. Crafting AI for healthcare and culture.
//             </motion.p>
//             <div className="flex justify-center gap-6 mt-4">
//               <a href="https://github.com/Coding-with-Gaurav" target="_blank" className="text-slate-500 hover:text-amber-400 transition">
//                 <Github className="w-5 h-5" />
//               </a>
//               <a href="https://linkedin.com/in/gaurav-kumar-68453b247" target="_blank" className="text-slate-500 hover:text-amber-400 transition">
//                 <Linkedin className="w-5 h-5" />
//               </a>
//             </div>
//           </div>
//         </footer>
//       </div>
//     </>
//   );
// }

// export default App;


'use client';

import { Award, Briefcase, GraduationCap, Code, FileText, BookOpen, Sparkles, Mail, Github, Linkedin, X, } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProjectsGrid from './components/ProjectsGrid';
import SkillBadges from './components/SkillBadges';
import Timeline from './components/Timeline';
import ContactForm from './components/ContactForm';

// PREMIUM FONTS — 100% WORKING
import '@fontsource-variable/inter';
import '@fontsource-variable/manrope';
import '@fontsource-variable/plus-jakarta-sans';
import '@fontsource/geist-sans/100.css';
import '@fontsource/geist-sans/200.css';
import '@fontsource/geist-sans/300.css';
import '@fontsource/geist-sans/400.css';
import '@fontsource/geist-sans/500.css';
import '@fontsource/geist-sans/600.css';
import '@fontsource/geist-sans/700.css';
import '@fontsource/geist-sans/800.css';
import '@fontsource/geist-sans/900.css';

function App() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [activeSection, setActiveSection] = useState('hero');

  const projects = [
    { title: "HistoAI", description: "Historical Data Extraction from PDFs", longDescription: "Advanced LLM-based system for extracting structured information from complex historical documents with OCR and NLP.", technologies: ["Python", "LLMs", "NLP", "PDF Processing", "LangChain"], link: "https://github.com/Coding-with-Gaurav/HistoAI", github: "https://github.com/Coding-with-Gaurav/HistoAI" },
    { title: "Ayur Scan", description: "Tongue Analysis & Diagnosis App", longDescription: "Mobile app using AI vision for Ayurvedic tongue diagnosis with personalized health insights.", technologies: ["Flutter", "TensorFlow", "Computer Vision", "Firebase", "React"], link: "https://github.com/Coding-with-Gaurav/AyurScan", github: "https://github.com/Coding-with-Gaurav/AyurScan" },
    { title: "Sanskrit OCR", description: "OCR for Ancient Manuscripts", longDescription: "Deep learning OCR system for digitizing ancient Sanskrit texts with high accuracy.", technologies: ["Python", "OpenCV", "Deep Learning", "Tesseract", "PyTorch"], link: "https://github.com/Coding-with-Gaurav/SanskritOCR", github: "https://github.com/Coding-with-Gaurav/SanskritOCR" },
    { title: "RAG Chatbot", description: "Retrieval-Augmented Generation System", longDescription: "Intelligent chatbot with RAG, vector DBs, and context-aware responses.", technologies: ["LangChain", "GPT", "Vector DB", "Flask", "React"], link: "https://github.com/Coding-with-Gaurav/RAG-Chatbot", github: "https://github.com/Coding-with-Gaurav/RAG-Chatbot" },
    { title: "Knowledge Graph Generator", description: "Semantic Knowledge Graph Construction", longDescription: "Automated KG generation from unstructured text using LLMs and Neo4j.", technologies: ["Python", "LLMs", "Neo4j", "NLP", "Graph DB"], link: "https://github.com/Coding-with-Gaurav/KG-Generator", github: "https://github.com/Coding-with-Gaurav/KG-Generator" },
    { title: "Medical AI Research", description: "Healthcare AI Applications", longDescription: "Research in AI for diagnosis, patient analysis, and predictive healthcare modeling.", technologies: ["TensorFlow", "PyTorch", "Healthcare Data", "ML", "Research"], link: "#", github: "#" }
  ];

  const skills = {
    "Programming Languages": ["Python", "C", "JavaScript", "Java", "Dart", "SQL"],
    "Web & Mobile Development": ["React", "Flask", "HTML", "CSS", "Bootstrap", "Flutter"],
    "ML & NLP": ["TensorFlow", "PyTorch", "Keras", "scikit-learn", "LangChain", "spaCy", "NLTK"],
    "Data Visualization": ["Matplotlib", "Seaborn", "Plotly", "Tableau"],
    "Cloud & Tools": ["Google Cloud", "Firebase", "Git", "Jupyter", "Docker", "APIs"],
    "Databases": ["MySQL", "MongoDB", "Neo4j", "Vector DB", "Supabase"]
  };

  const experiences = [
    { title: "Junior Research Fellow", organization: "Center for Artificial Intelligence & Research (IAI)", duration: "Jun 2025 - Present", current: true, responsibilities: ["Lead development of HistoAI for structured data extraction from historical documents using LLMs", "Architect and implement RAG-integrated chatbot systems", "Design knowledge graph generation pipelines", "Conduct cutting-edge AI research in healthcare and culture"] },
    { title: "Research Intern", organization: "Center for Artificial Intelligence & Research (IAI)", duration: "2023 - 2025", current: false, responsibilities: ["Conducted mobile-based tongue diagnosis research using computer vision", "Developed NLP applications for healthcare", "Published accepted research paper", "Contributed to multiple AI initiatives"] },
    { title: "Software Development Volunteer", organization: "Various Organizations", duration: "2022 - 2023", current: false, responsibilities: ["Supported open-source initiatives", "Contributed to web/mobile projects", "Collaborated in distributed teams"] }
  ];

  const certifications = [
    { name: "Data Science Specialization", issuer: "Coursera" },
    { name: "Generative AI Fundamentals", issuer: "Google Cloud" },
    { name: "Big Data Analytics", issuer: "Udemy" },
    { name: "Machine Learning with Python", issuer: "Coursera" },
    { name: "Natural Language Processing", issuer: "DeepLearning.AI" }
  ];

  const education = [
    { degree: "Master of Computer Applications (MCA)", institution: "Dev Sanskriti Vishwavidyalaya, Uttarakhand", duration: "2023 - 2025", focus: "Specialization: Data Science, AI & NLP" },
    { degree: "Bachelor of Science in Information Technology", institution: "Patliputra University, Patna", duration: "2019 - 2022", focus: "Foundation in computer science and software development" }
  ];

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'education', 'projects', 'publications', 'experience', 'skills', 'contact'];
      const scrollPos = window.scrollY + 100;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Toaster position="top-right" toastOptions={{ duration: 3000, style: { background: '#1e293b', color: '#e2e8f0' } }} />

      <div className="min-h-screen bg-slate-950 text-slate-300 font-body antialiased scroll-smooth">
        <Navigation activeSection={activeSection} />

        <Hero />

        <main className="max-w-7xl mx-auto px-6 py-20 space-y-32">
          {/* Education */}
          <motion.section id="education" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-10">
              <GraduationCap className="w-8 h-8 text-amber-400" />
              <h2 className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                Education
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, i) => (
                <motion.div key={i} whileHover={{ y: -4 }} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-amber-400/40 transition-all">
                  <h3 className="text-xl font-display font-bold text-white">{edu.degree}</h3>
                  <p className="text-amber-400 font-medium mt-1">{edu.institution}</p>
                  <p className="text-slate-400 text-sm mt-1">{edu.duration}</p>
                  <p className="text-slate-300 text-sm mt-3">{edu.focus}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Projects */}
          <motion.section id="projects" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-10">
              <Code className="w-8 h-8 text-amber-400" />
              <h2 className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                Featured Projects
              </h2>
            </div>
            <ProjectsGrid projects={projects} onSelect={setSelectedProject} />
          </motion.section>

          {/* Project Modal */}
          <AnimatePresence>
            {selectedProject && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/70 backdrop-blur-xl z-50 flex items-center justify-center p-6" onClick={() => setSelectedProject(null)}>
                <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }}
                  className="bg-slate-900/95 backdrop-blur-xl border border-amber-400/30 rounded-2xl p-8 max-w-3xl w-full"
                  onClick={(e) => e.stopPropagation()}>
                  <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 text-slate-400 hover:text-white">
                    <X className="w-6 h-6" />
                  </button>
                  <h3 className="text-3xl font-display font-bold text-white">{selectedProject.title}</h3>
                  <p className="text-slate-300 mt-4 text-lg">{selectedProject.longDescription}</p>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {selectedProject.technologies.map((tech: string) => (
                      <span key={tech} className="px-4 py-2 bg-amber-400/10 text-amber-300 rounded-full text-xs font-medium border border-amber-400/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-6 mt-8">
                    {selectedProject.link !== "#" && (
                      <a href={selectedProject.link} target="_blank" className="flex items-center gap-2 text-amber-400 hover:text-amber-300">
                        <Github className="w-5 h-5" /> Live Demo
                      </a>
                    )}
                    {selectedProject.github !== "#" && (
                      <a href={selectedProject.github} target="_blank" className="flex items-center gap-2 text-amber-400 hover:text-amber-300">
                        <Github className="w-5 h-5" /> Source Code
                      </a>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Publications */}
          <motion.section id="publications" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-10">
              <BookOpen className="w-8 h-8 text-amber-400" />
              <h2 className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                Publications
              </h2>
            </div>
            <motion.div whileHover={{ y: -4 }} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md border border-amber-400/30 rounded-2xl p-8 hover:border-amber-400/60 transition-all">
              <h3 className="text-2xl font-display font-bold text-white">AI-Driven Tongue Diagnosis System for Healthcare</h3>
              <p className="text-slate-300 mt-4 leading-relaxed">
                Research paper accepted for publication exploring AI and computer vision in traditional Ayurvedic tongue diagnosis.
              </p>
              <div className="flex gap-4 mt-6">
                <span className="px-4 py-2 bg-amber-400/20 text-amber-300 rounded-lg text-sm font-medium border border-amber-400/40">
                  Accepted
                </span>
                <a href="#" className="flex items-center gap-2 text-amber-400 hover:text-amber-300 text-sm">
                  <FileText className="w-4 h-4" /> Download PDF
                </a>
              </div>
            </motion.div>
          </motion.section>

          {/* Experience */}
          <motion.section id="experience" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-10">
              <Briefcase className="w-8 h-8 text-amber-400" />
              <h2 className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                Work Experience
              </h2>
            </div>
            <Timeline items={experiences} />
          </motion.section>

          {/* Skills */}
          <motion.section id="skills" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-10">
              <Sparkles className="w-8 h-8 text-amber-400" />
              <h2 className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                Skills & Technologies
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {Object.entries(skills).map(([category, items]) => (
                <SkillBadges key={category} category={category} skills={items} />
              ))}
            </div>
          </motion.section>

          {/* Certifications */}
          <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-10">
              <Award className="w-8 h-8 text-amber-400" />
              <h2 className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                Certifications
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, i) => (
                <motion.div key={i} whileHover={{ scale: 1.05 }} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 hover:border-amber-400/40 transition-all flex items-start gap-3">
                  <Award className="w-6 h-6 text-amber-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">{cert.name}</p>
                    <p className="text-slate-400 text-sm">{cert.issuer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Contact */}
          <motion.section id="contact" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-10">
              <Mail className="w-8 h-8 text-amber-400" />
              <h2 className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                Let's Connect
              </h2>
            </div>
            <ContactForm onSuccess={() => toast.success("Message sent! I'll reply soon.")} />
          </motion.section>
        </main>

        <footer className="bg-slate-900 border-t border-slate-800 py-8">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-slate-400 text-sm font-medium">
              © 2025 Gaurav Kumar. Crafting AI for healthcare and culture.
            </p>

            <div className="flex justify-center gap-8 mt-6">
              <a
                href="https://github.com/Coding-with-Gaurav"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-amber-400 transition-all duration-300 transform hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>

              <a
                href="https://x.com/GauravK30437835"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-amber-400 transition-all duration-300 transform hover:scale-110"
                aria-label="X (Twitter)"
              >
                <X className="w-6 h-6" />
              </a>

              <a
                href="https://medium.com/@codewithgaurav.dsvv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-amber-400 transition-all duration-300 transform hover:scale-110"
                aria-label="Medium"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.54 12a6.8 6.8 0 01-6.79-6.79A6.8 6.8 0 0113.54 12zm2.63 0a4.58 4.58 0 01-4.58-4.58 4.58 4.58 0 014.58 4.58zm2.8 0a1.8 1.8 0 01-1.8-1.8 1.8 1.8 0 011.8 1.8z" />
                </svg>
              </a>

              <a
                href="https://dev.to/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-amber-400 transition-all duration-300 transform hover:scale-110"
                aria-label="Dev.to"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04.46c.1.29.38.52.72.52.87 0 1.54-.65 1.54-1.44 0-.8-.61-1.44-1.54-1.44l.24-.31zm.01 2.7c-.29.08-.58.13-.87.13-.3 0-.6-.05-.89-.13-.09-.03-.17-.06-.25-.09v-3.1c.1-.06.24-.13.4-.19.3-.12.65-.19 1.02-.19.8 0 1.43.62 1.43 1.4 0 .77-.63 1.4-1.43 1.4zM22 6.92v10.16c0 .76-.43 1.46-1.12 1.8l-7.58 4.4c-.36.2-.77.31-1.19.31-.42 0-.83-.11-1.19-.31L3.34 19.08A2.25 2.25 0 012.22 17.08V6.92c0-.76.43-1.46 1.12-1.8l7.58-4.4c.36-.2.77-.31 1.19-.31.42 0 .83.11 1.19.31l7.58 4.4c.69.34 1.12 1.04 1.12 1.8zM8.78 15.6v-7.2h-.01l-1.98.3v.74l1.1-.17v5.6l-1.1-.17v.74l1.98.3zm4.23-5.6c-.5 0-.9.4-.9.9v4.8c0 .5.4.9.9.9h.9v-6.6h-.9zm4.8 5.6c.18.16.46.23.84.23h.58l-.02-2.44-.04-.46c-.1-.29-.38-.52-.72-.52-.87 0-1.54.65-1.54 1.44 0 .8.61 1.44 1.54 1.44l-.24.31z" />
                </svg>
              </a>

              <a
                href="https://linkedin.com/in/gaurav-kumar-68453b247"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-amber-400 transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;