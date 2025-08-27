"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fadeIn" | "slideUp" | "slideLeft" | "slideRight" | "scaleIn";
  delay?: number;
  duration?: number;
  threshold?: number;
}

export default function AnimatedSection({
  children,
  className = "",
  animation = "fadeIn",
  delay = 0,
  duration = 600,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleIntersection = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      if (entry.isIntersecting && !hasAnimated) {
        // Small delay to ensure smooth animation
        setTimeout(() => {
          setIsVisible(true);
          setHasAnimated(true);
        }, 50);
      }
    },
    [hasAnimated]
  );

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin: "0px 0px -30px 0px", // Reduced margin for earlier trigger
    });

    observer.observe(currentRef);

    return () => {
      observer.disconnect();
    };
  }, [handleIntersection, threshold]);

  const getAnimationClasses = () => {
    // Map duration to Tailwind classes
    const durationClass = duration <= 400 ? 'duration-400' : 
                         duration <= 500 ? 'duration-500' : 
                         duration <= 600 ? 'duration-600' : 'duration-700';
    
    const baseClasses = `transition-all ${durationClass} ease-out will-change-transform`;
    
    if (!isVisible) {
      switch (animation) {
        case "fadeIn":
          return `${baseClasses} opacity-0`;
        case "slideUp":
          return `${baseClasses} opacity-0 translate-y-6`;
        case "slideLeft":
          return `${baseClasses} opacity-0 -translate-x-6`;
        case "slideRight":
          return `${baseClasses} opacity-0 translate-x-6`;
        case "scaleIn":
          return `${baseClasses} opacity-0 scale-95`;
        default:
          return `${baseClasses} opacity-0`;
      }
    }

    // More specific transform resets
    switch (animation) {
      case "slideUp":
        return `${baseClasses} opacity-100 translate-y-0`;
      case "slideLeft":
        return `${baseClasses} opacity-100 translate-x-0`;
      case "slideRight":
        return `${baseClasses} opacity-100 translate-x-0`;
      case "scaleIn":
        return `${baseClasses} opacity-100 scale-100`;
      default:
        return `${baseClasses} opacity-100`;
    }
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClasses()} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
