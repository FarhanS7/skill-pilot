"use client";
import { useEffect, useState } from "react";

const Logo = ({ size = "default", className = "", animated = true }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => setIsVisible(true), 100);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(true);
    }
  }, [animated]);

  const sizeClasses = {
    small: "text-xl",
    default: "text-2xl",
    large: "text-3xl",
    xl: "text-4xl",
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {/* Main Logo Text */}
      <div
        className={`font-bold ${
          sizeClasses[size]
        } tracking-wide transition-all duration-1000 transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
        style={{
          fontFamily: '"Orbitron", "Rajdhani", "Exo 2", monospace',
          fontWeight: "700",
          letterSpacing: "0.05em",
          textTransform: "uppercase",
        }}
      >
        {/* "Skill" text */}
        <span
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{
            transitionDelay: animated ? "200ms" : "0ms",
            fontWeight: "800",
            background:
              "linear-gradient(135deg, #3b82f6 0%, #60a5fa 25%, #93c5fd 50%, #3b82f6 75%, #1e40af 100%)",
            backgroundSize: "200% 100%",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 10px rgba(59, 130, 246, 0.3)",
            filter: "drop-shadow(0 2px 4px rgba(59, 130, 246, 0.2))",
            animation: isVisible ? "shimmer 3s ease-in-out infinite" : "none",
          }}
        >
          Skill
        </span>

        {/* "Pilot" text */}
        <span
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{
            transitionDelay: animated ? "400ms" : "0ms",
            fontWeight: "700",
            background:
              "linear-gradient(135deg, #e5e7eb 0%, #f9fafb 25%, #ffffff 50%, #e5e7eb 75%, #d1d5db 100%)",
            backgroundSize: "200% 100%",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 8px rgba(255, 255, 255, 0.2)",
            filter: "drop-shadow(0 2px 4px rgba(255, 255, 255, 0.1))",
            animation: isVisible
              ? "shimmer 3s ease-in-out infinite 0.5s"
              : "none",
          }}
        >
          Pilot
        </span>
      </div>

      {/* Accent Orb */}
      <div className="flex flex-col items-center justify-center relative">
        <div
          className={`w-2 h-2 rounded-full transition-all duration-500 transform ${
            isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
          style={{
            transitionDelay: animated ? "600ms" : "0ms",
            background: "radial-gradient(circle, #3b82f6 0%, #1e40af 70%)",
            boxShadow:
              "0 0 8px rgba(59, 130, 246, 0.6), inset 0 1px 2px rgba(255, 255, 255, 0.3)",
          }}
        />
        <div
          className={`w-0.5 mt-1 transition-all duration-700 ${
            isVisible ? "h-4 opacity-80" : "h-0 opacity-0"
          }`}
          style={{
            transitionDelay: animated ? "800ms" : "0ms",
            background:
              "linear-gradient(to bottom, #3b82f6 0%, #60a5fa 30%, #93c5fd 60%, transparent 100%)",
            boxShadow: "0 0 4px rgba(59, 130, 246, 0.4)",
          }}
        />
        <div
          className={`absolute top-0 w-4 h-4 rounded-full blur-sm transition-all duration-500 ${
            isVisible ? "opacity-30 scale-100" : "opacity-0 scale-0"
          }`}
          style={{
            transitionDelay: animated ? "600ms" : "0ms",
            background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Keyframes for shimmer effect */}
      <style jsx>{`
        @keyframes shimmer {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default Logo;
