import { motion } from "framer-motion";

export default function ScrollIndicator() {
    return (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
            <div className="flex flex-col items-center gap-2 opacity-70">
                <div className="w-6 h-10 rounded-full border border-blue-400 flex justify-center pt-2">
                    <motion.div
                        className="w-1 h-1 rounded-full bg-white/70"
                        animate={{ y: [0, 12, 0] }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
