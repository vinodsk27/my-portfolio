"use client";

import { useState, useEffect } from "react";
import { Terminal, Copy, Check } from "lucide-react";

const CODE_LINES = [
  { type: "cmd", text: "const dev = new Developer('Vinod SK');" },
  { type: "output", text: "✓ Status: Available for Roles & Freelance" },
  { type: "cmd", text: "dev.getPrimarySkills();" },
  { type: "output", text: "=> ['WordPress', 'Shopify', 'WooCommerce', 'Elementor', 'Figma']" },
  { type: "cmd", text: "dev.getMetrics();" },
  { type: "output", text: "=> { exp: '2 years', focus: 'responsive websites', role: 'frontend developer' }" },
];

export default function TerminalCodeTyping() {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLineIdx, setCurrentLineIdx] = useState(0);
  const [currentCharIdx, setCurrentCharIdx] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (currentLineIdx >= CODE_LINES.length) {
      const resetTimeout = setTimeout(() => {
        setDisplayedLines([]);
        setCurrentLineIdx(0);
        setCurrentCharIdx(0);
      }, 5000);
      return () => clearTimeout(resetTimeout);
    }

    const currentLine = CODE_LINES[currentLineIdx];

    if (currentLine.type === "output") {
      const timer = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, currentLine]);
        setCurrentLineIdx((prev) => prev + 1);
        setCurrentCharIdx(0);
      }, 400);
      return () => clearTimeout(timer);
    } else {
      if (currentCharIdx < currentLine.text.length) {
        const timer = setTimeout(() => {
          setDisplayedLines((prev) => {
            const updated = [...prev];
            const last = updated[updated.length - 1];
            if (last && last.type === "cmd" && last.isTyping) {
              updated[updated.length - 1] = {
                type: "cmd",
                text: currentLine.text.substring(0, currentCharIdx + 1),
                isTyping: true,
              };
            } else {
              updated.push({
                type: "cmd",
                text: currentLine.text.substring(0, currentCharIdx + 1),
                isTyping: true,
              });
            }
            return updated;
          });
          setCurrentCharIdx((prev) => prev + 1);
        }, 50);
        return () => clearTimeout(timer);
      } else {
        const finishTimer = setTimeout(() => {
          setDisplayedLines((prev) => {
            const updated = [...prev];
            if (updated.length > 0) {
              updated[updated.length - 1].isTyping = false;
            }
            return updated;
          });
          setCurrentLineIdx((prev) => prev + 1);
          setCurrentCharIdx(0);
        }, 300);
        return () => clearTimeout(finishTimer);
      }
    }
  }, [currentLineIdx, currentCharIdx]);

  const handleCopyCode = () => {
    const textToCopy = CODE_LINES.map((l) => (l.type === "cmd" ? `$ ${l.text}` : l.text)).join("\n");
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-50 font-mono text-xs text-slate-700">
      {/* Terminal Header Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-white border-b border-slate-200">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="text-[11px] text-slate-400 ml-2 font-sans flex items-center gap-1.5 font-medium">
            <Terminal className="w-3.5 h-3.5 text-purple-700" />
            vinod-sk ~ bash
          </span>
        </div>

        <button
          onClick={handleCopyCode}
          className="p-1 rounded text-slate-400 hover:text-white transition-colors cursor-pointer"
          title="Copy code snippet"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Terminal Content Body */}
      <div className="p-4 space-y-2 min-h-[165px] flex flex-col justify-start">
        {displayedLines.map((line, idx) => (
          <div key={idx} className="leading-relaxed">
            {line.type === "cmd" ? (
              <p className="text-emerald-700 font-medium">
                <span className="text-purple-700">$ </span>
                {line.text}
                {line.isTyping && <span className="inline-block w-2 h-4 bg-emerald-400 ml-0.5 animate-pulse align-middle" />}
              </p>
            ) : (
              <p className="text-slate-600 pl-4 border-l border-slate-200 font-normal">{line.text}</p>
            )}
          </div>
        ))}
        {currentLineIdx < CODE_LINES.length && (
          <div className="flex items-center text-slate-500">
            <span className="animate-pulse">_</span>
          </div>
        )}
      </div>
    </div>
  );
}
