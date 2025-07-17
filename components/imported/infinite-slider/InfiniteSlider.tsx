"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

interface Slide {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  altText?: string;
}

interface InfiniteSliderProps {
  slides: Slide[];
  autoPlay?: boolean;
  interval?: number;
  showDots?: boolean;
  pauseOnHover?: boolean;
}

const InfiniteSlider: React.FC<InfiniteSliderProps> = ({
  slides,
  autoPlay = true,
  interval = 5000,
  showDots = true,
  pauseOnHover = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [cardWidth, setCardWidth] = useState("calc((100% - 1.5rem) / 2.5)");

  const sliderRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const markerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const isScrollingRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollRef = useRef(0);
  const lastUpdateTime = useRef(0);

  // Handle hydration
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Enhanced infinite loop with proper cloning
  const extendedSlides = React.useMemo(() => {
    if (slides.length === 0) return [];
    return [...slides, ...slides, ...slides];
  }, [slides]);

  const totalSlides = slides.length;
  const middleSetStart = totalSlides;

  // Responsive card sizing with SSR-safe defaults
  const updateCardWidth = useCallback(() => {
    if (!isClient) return;

    const width = window.innerWidth;
    let newWidth;

    if (width >= 1200) {
      newWidth = "calc((100% - 2rem) / 3)";
    } else if (width >= 768) {
      newWidth = "calc((100% - 1.5rem) / 2.5)";
    } else {
      newWidth = "calc((100% - 1rem) / 1.5)";
    }

    setCardWidth(newWidth);
  }, [isClient]);

  // Handle window resize
  useEffect(() => {
    if (!isClient) return;

    updateCardWidth();

    const handleResize = () => {
      updateCardWidth();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isClient, updateCardWidth]);

  // Get slide position
  const getSlidePosition = useCallback((index: number) => {
    if (!sliderRef.current) return 0;
    const firstCard = sliderRef.current.children[0] as HTMLElement;
    if (!firstCard) return 0;

    const cardWidthPx = firstCard.offsetWidth;
    const gap = 16;
    return index * (cardWidthPx + gap);
  }, []);

  // Update marker position smoothly
  const updateMarkerPosition = useCallback(() => {
    if (
      !markerRef.current ||
      !trackRef.current ||
      !sliderRef.current ||
      !isClient
    )
      return;

    const scrollPosition = sliderRef.current.scrollLeft;
    const cardPosition = getSlidePosition(1);

    if (cardPosition === 0) return;

    const currentSlideIndex = scrollPosition / cardPosition;
    const adjustedIndex =
      (((currentSlideIndex - middleSetStart) % totalSlides) + totalSlides) %
      totalSlides;

    const trackWidth = trackRef.current.offsetWidth;
    const markerWidth = trackWidth / totalSlides;
    const markerPosition = (adjustedIndex / totalSlides) * trackWidth;

    markerRef.current.style.transform = `translateX(${markerPosition}px)`;
    markerRef.current.style.width = `${markerWidth}px`;

    const discreteIndex = Math.round(adjustedIndex) % totalSlides;
    setCurrentIndex(discreteIndex);
  }, [getSlidePosition, totalSlides, middleSetStart, isClient]);

  // Smooth scroll animation
  const smoothScrollTo = useCallback(
    (targetPosition: number, duration = 600) => {
      if (!sliderRef.current || isScrollingRef.current) return;

      isScrollingRef.current = true;
      const startPosition = sliderRef.current.scrollLeft;
      const distance = targetPosition - startPosition;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Smooth easing
        const easeProgress = 1 - Math.pow(1 - progress, 3);

        if (sliderRef.current) {
          sliderRef.current.scrollLeft =
            startPosition + distance * easeProgress;
          updateMarkerPosition();
        }

        if (progress < 1) {
          animationFrameRef.current = requestAnimationFrame(animate);
        } else {
          isScrollingRef.current = false;
          // Handle infinite loop repositioning
          requestAnimationFrame(() => {
            handleInfiniteLoop();
          });
        }
      };

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    },
    [updateMarkerPosition]
  );

  // Handle infinite loop repositioning
  const handleInfiniteLoop = useCallback(() => {
    if (!sliderRef.current || isDragging || isScrollingRef.current) return;

    const scrollPosition = sliderRef.current.scrollLeft;
    const cardPosition = getSlidePosition(1);

    if (cardPosition === 0) return;

    const currentSlideIndex = Math.round(scrollPosition / cardPosition);

    // Reposition if needed
    if (currentSlideIndex >= middleSetStart + totalSlides) {
      const newPosition = getSlidePosition(
        middleSetStart + (currentSlideIndex - middleSetStart - totalSlides)
      );
      sliderRef.current.scrollLeft = newPosition;
      updateMarkerPosition();
    } else if (currentSlideIndex < middleSetStart) {
      const newPosition = getSlidePosition(
        middleSetStart + totalSlides + currentSlideIndex
      );
      sliderRef.current.scrollLeft = newPosition;
      updateMarkerPosition();
    }
  }, [
    isDragging,
    getSlidePosition,
    middleSetStart,
    totalSlides,
    updateMarkerPosition,
  ]);

  // Auto-play functionality
  const startAutoPlay = useCallback(() => {
    if (!autoPlay || !isClient || (isHovered && pauseOnHover) || isDragging)
      return;

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      if (!isDragging && !isScrollingRef.current && sliderRef.current) {
        const currentScroll = sliderRef.current.scrollLeft;
        const cardPosition = getSlidePosition(1);

        if (cardPosition > 0) {
          const nextPosition = currentScroll + cardPosition;
          smoothScrollTo(nextPosition, 800);
        }
      }
    }, interval);
  }, [
    autoPlay,
    isClient,
    isHovered,
    pauseOnHover,
    isDragging,
    interval,
    getSlidePosition,
    smoothScrollTo,
  ]);

  // Stop auto-play
  const stopAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  // Initialize slider position
  useEffect(() => {
    if (!isClient || !sliderRef.current || extendedSlides.length === 0) return;

    const timer = setTimeout(() => {
      const initialPosition = getSlidePosition(middleSetStart);
      if (sliderRef.current) {
        sliderRef.current.scrollLeft = initialPosition;
        updateMarkerPosition();
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [
    isClient,
    extendedSlides,
    middleSetStart,
    getSlidePosition,
    updateMarkerPosition,
  ]);

  // Handle auto-play state changes
  useEffect(() => {
    if (!isClient) return;

    stopAutoPlay();

    if (autoPlay && !isHovered && !isDragging) {
      const timer = setTimeout(() => {
        startAutoPlay();
      }, 100);

      return () => clearTimeout(timer);
    }

    return () => stopAutoPlay();
  }, [isClient, autoPlay, isHovered, isDragging, startAutoPlay, stopAutoPlay]);

  // Drag handlers
  const handleDragStart = useCallback(
    (clientX: number) => {
      if (!sliderRef.current || isScrollingRef.current) return;

      setIsDragging(true);
      startXRef.current = clientX;
      startScrollRef.current = sliderRef.current.scrollLeft;

      // Cancel any ongoing animations
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }

      isScrollingRef.current = false;
      stopAutoPlay();
    },
    [stopAutoPlay]
  );

  const handleDragMove = useCallback(
    (clientX: number) => {
      if (!isDragging || !sliderRef.current) return;

      const deltaX = clientX - startXRef.current;
      const newScrollLeft = startScrollRef.current - deltaX;

      sliderRef.current.scrollLeft = newScrollLeft;

      // Throttle marker updates during drag
      const now = performance.now();
      if (now - lastUpdateTime.current > 16) {
        updateMarkerPosition();
        lastUpdateTime.current = now;
      }
    },
    [isDragging, updateMarkerPosition]
  );

  const handleDragEnd = useCallback(() => {
    if (!isDragging || !sliderRef.current) return;

    setIsDragging(false);

    // Snap to nearest slide
    const currentScroll = sliderRef.current.scrollLeft;
    const cardPosition = getSlidePosition(1);

    if (cardPosition > 0) {
      const targetIndex = Math.round(currentScroll / cardPosition);
      const targetPosition = getSlidePosition(targetIndex);
      smoothScrollTo(targetPosition, 300);
    }

    // Restart auto-play after a delay
    setTimeout(() => {
      if (autoPlay && !isHovered) {
        startAutoPlay();
      }
    }, 500);
  }, [
    isDragging,
    getSlidePosition,
    smoothScrollTo,
    autoPlay,
    isHovered,
    startAutoPlay,
  ]);

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleDragStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      e.preventDefault();
      handleDragMove(e.clientX);
    }
  };

  const handleMouseUp = () => {
    handleDragEnd();
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) {
      e.preventDefault();
      handleDragMove(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    handleDragEnd();
  };

  // Dot navigation
  const handleDotClick = (index: number) => {
    if (isScrollingRef.current || !sliderRef.current) return;

    const currentScroll = sliderRef.current.scrollLeft;
    const cardPosition = getSlidePosition(1);

    if (cardPosition > 0) {
      const currentIndex = Math.round(currentScroll / cardPosition);
      const targetIndex = middleSetStart + index;
      const targetPosition = getSlidePosition(targetIndex);

      smoothScrollTo(targetPosition, 600);
    }
  };

  // Cleanup
  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  if (!isClient || slides.length === 0) {
    return (
      <div className="w-full h-64 flex items-center justify-center text-gray-500">
        {!isClient ? "Loading..." : "No slides available"}
      </div>
    );
  }

  return (
    <div
      className="relative w-full select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        handleMouseUp();
      }}
    >
      {/* Slider Container */}
      <div className="overflow-hidden">
        <div
          ref={sliderRef}
          className="flex overflow-x-hidden py-6 will-change-scroll"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{
            cursor: isDragging ? "grabbing" : "grab",
            scrollBehavior: "auto",
            WebkitUserSelect: "none",
            userSelect: "none",
            touchAction: "pan-y pinch-zoom",
          }}
        >
          {extendedSlides.map((slide, index) => (
            <div
              key={`${slide.id}-${Math.floor(index / totalSlides)}-${
                index % totalSlides
              }`}
              className="flex-shrink-0 transition-transform duration-300 ease-out"
              style={{
                width: cardWidth,
                marginRight: index < extendedSlides.length - 1 ? "1rem" : "0",
              }}
            >
              <div className="h-full overflow-hidden transition-all duration-300">
                <div className="relative w-full aspect-[4/3] overflow-hidden group">
                  <Image
                    src={slide.imageUrl}
                    alt={slide.altText || slide.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 70vw, (max-width: 1200px) 40vw, 33vw"
                    draggable={false}
                    priority={index < 3}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 line-clamp-2 leading-tight">
                    {slide.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Progress Track */}
      <div className="mt-6 px-4">
        <div
          ref={trackRef}
          className="relative h-1 bg-gray-200 rounded-full overflow-hidden"
        >
          <div
            ref={markerRef}
            className="absolute top-0 left-0 h-full bg-[#1a1a1a] rounded-full"
            style={{
              width: `${100 / totalSlides}%`,
              transition: isDragging ? "none" : "transform 0.3s ease-out",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default InfiniteSlider;
