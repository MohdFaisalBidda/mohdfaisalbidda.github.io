// "use client";

// import { useState, useEffect } from "react";
// import { motion, useAnimation } from "framer-motion";
// // import { button } from "@/components/ui/button";
// // import { Card } from "@/components/ui/card";
// // import { Badge } from "@/components/ui/badge";
// // import { Input } from "@/components/ui/input";
// import Hero from "../assets/hero.png";
// import {
//   Home,
//   User,
//   Briefcase,
//   Mail,
//   Moon,
//   Sun,
//   Github,
//   Twitter,
//   Linkedin,
//   ExternalLink,
//   Send,
//   Code,
//   Brain,
//   Coffee,
// } from "lucide-react";

// // Floating animation variants
// const floatingAnimation = {
//   animate: {
//     y: ["0%", "5%", "0%"],
//     transition: {
//       duration: 3,
//       repeat: Infinity,
//       ease: "easeInOut",
//     },
//   },
// };

// export default function Portfolio() {
//   const [isDark, setIsDark] = useState(false);
//   const [shapes, setShapes] = useState(
//     Array.from({ length: 20 }, (_, i) => ({
//       id: i,
//       size: Math.random() * 40 + 10,
//       x: Math.random() * 100,
//       y: Math.random() * 100,
//       duration: Math.random() * 20 + 10,
//     }))
//   );

//   useEffect(() => {
//     const handleResize = () => {
//       setShapes(
//         shapes.map((shape) => ({
//           ...shape,
//           x: Math.min(
//             shape.x,
//             ((window.innerWidth - shape.size) / window.innerWidth) * 100
//           ),
//           y: Math.min(
//             shape.y,
//             ((window.innerHeight - shape.size) / window.innerHeight) * 100
//           ),
//         }))
//       );
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const toggleDark = () => {
//     setIsDark(!isDark);
//     document.documentElement.classList.toggle("dark");
//   };

//   // Background shapes animation

//   return (
//     <div
//       className={`min-h-screen w-full ${
//         isDark
//           ? "bg-[#0a192f]"
//           : "bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-50"
//       } transition-colors duration-500 overflow-hidden`}
//     >
//       {/* Animated Background Objects */}
//       <div className="fixed inset-0 overflow-hidden">
//         {shapes.map((shape) => (
//           <motion.div
//             key={shape.id}
//             className={`absolute rounded-full cursor-move ${
//               isDark ? "bg-blue-500/5" : "bg-yellow-400/10"
//             } hover:scale-110 transition-transform`}
//             style={{
//               width: shape.size,
//               height: shape.size,
//               left: `${shape.x}%`,
//               top: `${shape.y}%`,
//             }}
//             drag
//             dragConstraints={{
//               top: 0,
//               left: 0,
//               right: window.innerWidth - shape.size,
//               bottom: window.innerHeight - shape.size,
//             }}
//             dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
//             dragElastic={0.5}
//             whileDrag={{
//               scale: 1.2,
//               backgroundColor: isDark
//                 ? "rgba(59, 130, 246, 0.2)"
//                 : "rgba(250, 204, 21, 0.3)",
//             }}
//             animate={{
//               x: [0, 30, 0],
//               y: [0, 50, 0],
//               scale: [1, 1.2, 1],
//               rotate: [0, 360],
//             }}
//             transition={{
//               duration: shape.duration,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//           />
//         ))}
//       </div>

//       {/* Main Content */}
//       <main className="container mx-auto px-4 pt-20 pb-28">
       
//         {activeTab === "experience" && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//             className="max-w-4xl mx-auto"
//           >
//             <h2
//               className={`text-3xl font-bold mb-12 ${
//                 isDark ? "text-gray-100" : "text-gray-900"
//               }`}
//             >
//               Experience
//             </h2>
//             <div className="relative">
//               {/* Vertical Line */}
//               <div
//                 className={`absolute left-0 top-0 bottom-0 w-px ${
//                   isDark ? "bg-gray-700" : "bg-gray-200"
//                 }`}
//               >
//                 <motion.div
//                   className={`w-full h-1/3 ${
//                     isDark ? "bg-blue-500" : "bg-yellow-400"
//                   }`}
//                   animate={{
//                     y: ["0%", "200%"],
//                   }}
//                   transition={{
//                     duration: 2,
//                     repeat: Infinity,
//                     ease: "linear",
//                   }}
//                 />
//               </div>

//               <div className="space-y-12">
//                 {[
//                   {
//                     title: "Senior Full Stack Developer",
//                     company: "Tech Innovators Inc",
//                     period: "2021 - Present",
//                     description:
//                       "Led development of enterprise-scale applications using React and Node.js. Implemented microservices architecture and improved system performance by 40%.",
//                     achievements: [
//                       "Led a team of 5 developers",
//                       "Reduced deployment time by 60%",
//                       "Implemented CI/CD pipeline",
//                     ],
//                   },
//                   {
//                     title: "Full Stack Developer",
//                     company: "Digital Solutions Ltd",
//                     period: "2019 - 2021",
//                     description:
//                       "Developed and maintained multiple client projects. Introduced automated testing that reduced bugs by 60%.",
//                     achievements: [
//                       "Optimized database queries",
//                       "Implemented real-time features",
//                       "Reduced loading time by 45%",
//                     ],
//                   },
//                   {
//                     title: "Junior Developer",
//                     company: "StartUp Hub",
//                     period: "2018 - 2019",
//                     description:
//                       "Worked on front-end development using React and Redux. Collaborated with UX team to implement responsive designs.",
//                     achievements: [
//                       "Developed 3 major features",
//                       "Improved UI performance",
//                       "Learned Agile methodology",
//                     ],
//                   },
//                 ].map((job, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: index * 0.2 }}
//                     className={`relative pl-8`}
//                   >
//                     <motion.div
//                       className={`absolute w-4 h-4 rounded-full -left-2 top-0 ${
//                         isDark ? "bg-blue-500" : "bg-yellow-400"
//                       }`}
//                       animate={{
//                         scale: [1, 1.2, 1],
//                         opacity: [1, 0.8, 1],
//                       }}
//                       transition={{
//                         duration: 2,
//                         repeat: Infinity,
//                         ease: "easeInOut",
//                       }}
//                     />
//                     <div
//                       className={`p-6 rounded-xl ${
//                         isDark ? "bg-gray-800/30" : "bg-white/30"
//                       } backdrop-blur-sm`}
//                     >
//                       <h3
//                         className={`text-xl font-bold mb-1 ${
//                           isDark ? "text-gray-100" : "text-gray-900"
//                         }`}
//                       >
//                         {job.title}
//                       </h3>
//                       <p
//                         className={`text-sm mb-4 ${
//                           isDark ? "text-gray-400" : "text-gray-600"
//                         }`}
//                       >
//                         {job.company} • {job.period}
//                       </p>
//                       <p
//                         className={`mb-4 ${
//                           isDark ? "text-gray-300" : "text-gray-600"
//                         }`}
//                       >
//                         {job.description}
//                       </p>
//                       <ul className="space-y-2">
//                         {job.achievements.map((achievement, i) => (
//                           <motion.li
//                             key={i}
//                             initial={{ opacity: 0, x: -10 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             transition={{ delay: index * 0.2 + i * 0.1 }}
//                             className={`flex items-center ${
//                               isDark ? "text-gray-300" : "text-gray-600"
//                             }`}
//                           >
//                             <div
//                               className={`w-1.5 h-1.5 rounded-full mr-2 ${
//                                 isDark ? "bg-blue-400" : "bg-yellow-500"
//                               }`}
//                             />
//                             {achievement}
//                           </motion.li>
//                         ))}
//                       </ul>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         )}

//         {activeTab === "projects" && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//             className="max-w-6xl mx-auto"
//           >
//             <h2
//               className={`text-3xl font-bold mb-12 ${
//                 isDark ? "text-gray-100" : "text-gray-900"
//               }`}
//             >
//               Projects
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               {[
//                 {
//                   title: "E-commerce Platform",
//                   description:
//                     "A full-featured e-commerce solution with real-time inventory management.",
//                   tech: ["Next.js", "Node.js", "MongoDB"],
//                   demo: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDd6Y2E4OHF1dWR0NXJ3OWF4OWF4Y2RvYnB1aHRnOWF4OWF4OWF4OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oEjI6SIIHBdRxXI40/giphy.gif",
//                 },
//                 {
//                   title: "Task Management App",
//                   description:
//                     "Collaborative task management tool with real-time updates.",
//                   tech: ["React", "Firebase", "Tailwind"],
//                   demo: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDd6Y2E4OHF1dWR0NXJ3OWF4OWF4Y2RvYnB1aHRnOWF4OWF4OWF4OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oEjI6SIIHBdRxXI40/giphy.gif",
//                 },
//                 {
//                   title: "AI Content Generator",
//                   description:
//                     "Content generation tool powered by OpenAI's GPT-3.",
//                   tech: ["Python", "React", "OpenAI"],
//                   demo: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDd6Y2E4OHF1dWR0NXJ3OWF4OWF4Y2RvYnB1aHRnOWF4OWF4OWF4OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oEjI6SIIHBdRxXI40/giphy.gif",
//                 },
//                 {
//                   title: "Social Media Dashboard",
//                   description:
//                     "Analytics dashboard for social media management.",
//                   tech: ["Vue.js", "D3.js", "Node.js"],
//                   demo: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDd6Y2E4OHF1dWR0NXJ3OWF4OWF4Y2RvYnB1aHRnOWF4OWF4OWF4OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oEjI6SIIHBdRxXI40/giphy.gif",
//                 },
//               ].map((project, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                   className={`group relative overflow-hidden rounded-xl ${
//                     isDark ? "bg-gray-800/30" : "bg-white/30"
//                   } backdrop-blur-sm border border-gray-200 dark:border-gray-700`}
//                 >
//                   <div className="relative h-48 overflow-hidden">
//                     <img
//                       src={project.demo}
//                       alt={project.title}
//                       className="w-full h-full object-cover transition-transform group-hover:scale-110"
//                     />
//                     <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
//                       <button>
//                         View Project <ExternalLink className="ml-2 w-4 h-4" />
//                       </button>
//                     </div>
//                   </div>
//                   <div className="p-6">
//                     <h3
//                       className={`text-xl font-bold mb-2 ${
//                         isDark ? "text-gray-100" : "text-gray-900"
//                       }`}
//                     >
//                       {project.title}
//                     </h3>
//                     <p
//                       className={`mb-4 ${
//                         isDark ? "text-gray-300" : "text-gray-600"
//                       }`}
//                     >
//                       {project.description}
//                     </p>
//                     <div className="flex flex-wrap gap-2">
//                       {project.tech.map((tech) => (
//                         <div key={tech} className="text-xs">
//                           {tech}
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         )}

//         {activeTab === "contact" && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//             className="max-w-2xl mx-auto"
//           >
//             <h2
//               className={`text-3xl font-bold mb-8 ${
//                 isDark ? "text-gray-100" : "text-gray-900"
//               }`}
//             >
//               Get in Touch
//             </h2>
//             <div
//               className={`p-6 ${
//                 isDark ? "bg-gray-800/30" : "bg-white/30"
//               } backdrop-blur-sm border-gray-200 dark:border-gray-700`}
//             >
//               <form className="space-y-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div className="space-y-2">
//                     <label
//                       className={`text-sm font-medium ${
//                         isDark ? "text-gray-200" : "text-gray-900"
//                       }`}
//                     >
//                       Name
//                     </label>
//                     <input
//                       placeholder="Your name"
//                       className={
//                         isDark
//                           ? "bg-gray-700/50 border-gray-600"
//                           : "bg-white/50"
//                       }
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <label
//                       className={`text-sm font-medium ${
//                         isDark ? "text-gray-200" : "text-gray-900"
//                       }`}
//                     >
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       placeholder="your@email.com"
//                       className={
//                         isDark
//                           ? "bg-gray-700/50 border-gray-600"
//                           : "bg-white/50"
//                       }
//                     />
//                   </div>
//                 </div>
//                 <div className="space-y-2">
//                   <label
//                     className={`text-sm font-medium ${
//                       isDark ? "text-gray-200" : "text-gray-900"
//                     }`}
//                   >
//                     Message
//                   </label>
//                   <textarea
//                     placeholder="Your message"
//                     className={`min-h-[150px] ${
//                       isDark ? "bg-gray-700/50 border-gray-600" : "bg-white/50"
//                     }`}
//                   />
//                 </div>
//                 <button className="w-full">
//                   Send Message
//                   <Send className="ml-2 w-4 h-4" />
//                 </button>
//               </form>
//             </div>
//           </motion.div>
//         )}
//       </main>

     
//     </div>
//   );
// }


function NewPortfolio() {
  return (
    <div>
      
    </div>
  )
}

export default NewPortfolio
