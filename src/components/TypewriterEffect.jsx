"use client";

import { useState, useEffect } from "react";

export default function TypewriterEffect({
  words = ["Frontend Developer", "WordPress Specialist", "UI/UX Developer", "Next.js Engineer"],
  typingSpeed = 80,
  deletingSpeed = 40,
  delayBetween = 2000,
  prefix = "",
  suffix = "",
  className = "",
  cursorClassName = "text-purple-600 dark:text-purple-400 animate-pulse",
}) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const targetWord = words[currentWordIndex];

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing phase
          setCurrentText(targetWord.substring(0, currentText.length + 1));

          // If finished typing current word, pause then delete
          if (currentText === targetWord) {
            setTimeout(() => setIsDeleting(true), delayBetween);
          }
        } else {
          // Deleting phase
          setCurrentText(targetWord.substring(0, currentText.length - 1));

          // If finished deleting, move to next word
          if (currentText === "") {
            setIsDeleting(false);
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, delayBetween]);

  return (
    <span className={`inline-flex items-center font-mono ${className}`}>
      {prefix}
      <span>{currentText}</span>
      <span className={`ml-0.5 font-bold ${cursorClassName}`}>|</span>
      {suffix}
    </span>
  );
}
