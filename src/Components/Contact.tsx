import { FC } from "react";
import { motion } from "framer-motion";
import { Badge } from "./Badge";
import { Mail, Send, Sparkles } from "lucide-react";

const Contact: FC = () => {
  return (
    <div className="lg:container mx-auto lg:px-4">
      {/* About Section */}
      <main className="lg:container mx-auto px-4 py-10 pb-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <Badge variant="secondary" className="mb-2">
            Get In Touch
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-2 dark:text-transparent bg-clip-text bg-gradient-to-b dark:from-white dark:via-white text-black tracking-tighter">
            Contact
          </h1>
          <p className="text-xs lg:text-lg dark:text-gray-300 text-gray-600 max-w-2xl mx-auto">
            Let's create something amazing together
          </p>
        </motion.div>
        <div className="max-w-5xl mx-auto">
          {/* About Section - Left Aligned */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative pl-8 md:pl-12 mb-24 border-l-2 border-slate-200 dark:border-white/10"
          >
            {/* Accent Line Gradient */}
            <div className="absolute left-[-2px] top-0 h-24 w-[2px] bg-gradient-to-b from-blue-500 to-transparent" />

            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                About Me
              </h3>
              <Sparkles className="w-5 h-5 text-blue-500 animate-pulse" />
            </div>

            <div className="space-y-4 text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
              <p>
                I'm <span className="font-semibold text-slate-900 dark:text-white">Faisal</span>, a Full Stack Developer passionate about building scalable, user-friendly web and mobile applications. I specialize in creating high-performance interfaces and end-to-end systems, and I’ve deployed production-ready applications using Docker, Cloud Run, and other cloud services.
              </p>
              <p>
                With expertise in <span className="text-blue-600 dark:text-blue-400">ReactJS, Next.js, TypeScript, and Three.js</span>, I’ve worked on projects ranging from full-featured web platforms to advanced 3D model configurators. My experience includes UI/UX design, full-stack development, real-time interactive features, scalable architecture, and DevOps practices that ensure smooth deployment and performance.
              </p>
            </div>
          </motion.div>

          {/* Contact Section - Right Aligned */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative pr-8 md:pr-12 border-r-2 border-slate-200 dark:border-white/10 text-right flex flex-col items-end"
          >
            {/* Accent Line Gradient */}
            <div className="absolute right-[-2px] top-0 h-24 w-[2px] bg-gradient-to-b from-blue-500 to-transparent" />

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Let's Connect
            </h3>

            <div className="space-y-4 text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed max-w-xl mb-8">
              <p>
                My inbox is always open! Whether you have a question, a project proposal,
                or just want to say hello, I'll try my best to get back to you.
              </p>
              <p>
                Feel free to reach out about any job opportunities or collaborations.
              </p>
            </div>

            <a
              href="mailto:biddafaisal@gmail.com"
              className="group relative inline-flex items-center gap-3 px-8 py-3.5 bg-slate-900 dark:bg-white text-white dark:text-black rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 active:scale-95 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_1.5s_infinite]" />
              <Mail className="w-5 h-5" />
              <span>Get In Touch</span>
              <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
