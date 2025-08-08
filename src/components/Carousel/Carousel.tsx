'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  children: React.ReactNode;
  className?: string;
}

export default function Carousel({ children, className = '' }: CarouselProps) {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

           const checkScrollButtons = () => {
           if (scrollContainerRef.current) {
             const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
             setCanScrollLeft(scrollLeft > 0);
             setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
           }
         };

         // Check scroll buttons on mount and when children change
         useEffect(() => {
           const timer = setTimeout(checkScrollButtons, 100);
           return () => clearTimeout(timer);
         }, [children]);

  useEffect(() => {
    checkScrollButtons();
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScrollButtons);
      return () => scrollContainer.removeEventListener('scroll', checkScrollButtons);
    }
  }, []);

           const scrollTo = (direction: 'left' | 'right') => {
           if (scrollContainerRef.current) {
             const container = scrollContainerRef.current;
             // Calculate scroll amount based on container width and number of visible items
             const containerWidth = container.clientWidth;
             const scrollAmount = containerWidth * 0.8; // Scroll 80% of container width
             
             const targetScroll = direction === 'left' 
               ? container.scrollLeft - scrollAmount
               : container.scrollLeft + scrollAmount;

             container.scrollTo({
               left: targetScroll,
               behavior: 'smooth'
             });

             // Animate the scroll button
             controls.start({
               scale: [1, 0.9, 1],
               transition: { duration: 0.2 }
             });
           }
         };

           return (
           <div className={`relative group skill-carousel ${className}`}>
      {/* Left scroll button */}
      {canScrollLeft && (
        <motion.button
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-card/80 backdrop-blur-sm border border-border rounded-full shadow-lg flex items-center justify-center text-card-foreground hover:bg-card hover:border-primary/50 transition-all duration-200 opacity-0 group-hover:opacity-100"
          onClick={() => scrollTo('left')}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={controls}
        >
          <ChevronLeft className="w-5 h-5" />
        </motion.button>
      )}

      {/* Right scroll button */}
      {canScrollRight && (
        <motion.button
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-card/80 backdrop-blur-sm border border-border rounded-full shadow-lg flex items-center justify-center text-card-foreground hover:bg-card hover:border-primary/50 transition-all duration-200 opacity-0 group-hover:opacity-100"
          onClick={() => scrollTo('right')}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={controls}
        >
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      )}

                                {/* Scroll container */}
             <div
               ref={scrollContainerRef}
               className="scroll-container flex overflow-x-auto scrollbar-hide scroll-smooth pb-4 px-2 sm:px-4"
               style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
             >
               {children}
             </div>
    </div>
  );
}
