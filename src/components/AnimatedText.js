import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const AnimatedText = ({ text }) => {
  const lettersRef = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      lettersRef.current.forEach((letter, index) => {
        if (letter) {
          const rect = letter.getBoundingClientRect();
          const dx = e.clientX - (rect.left + rect.width / 2);
          const dy = e.clientY - (rect.top + rect.height / 2);
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 120;
          const proximity = Math.max(0, maxDistance - distance) / maxDistance;

          letter.style.fontWeight = `${300 + proximity * 700}`;
          letter.style.fontVariationSettings = `"wdth" ${75 + proximity * 25}`;
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.h1
      className="text-[50px] md:text-[50px] lg:text-[60px] xl:text-[80px] font-bold leading-tight"
    >
    {text.split("").map((letter, index) => (
    <span
        key={index}
        className="inline-block transition-all duration-100"
        ref={(el) => (lettersRef.current[index] = el)}
        style={{
        display: letter === " " ? "inline-block" : "inline",
        letterSpacing: "-0.12em", // **调整这个数值让字母更紧凑**
        }}
    >
        {letter === " " ? "\u00A0" : letter} {/* 保留空格 */}
    </span>
    ))}
    </motion.h1>
  );
};

export default AnimatedText;