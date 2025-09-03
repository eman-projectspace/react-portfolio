import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 border-2 border-cyan-400 rounded-full pointer-events-none z-50 flex items-center justify-center"
      animate={{ x: pos.x - 12, y: pos.y - 12 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {/* Small dot inside */}
      <div className="w-2 h-2 bg-cyan-400 rounded-full" />
    </motion.div>
  );
}
