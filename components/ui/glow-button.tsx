"use client";

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from './button';

interface GlowButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export function GlowButton({ 
  children, 
  className, 
  variant = 'default',
  size = 'default',
  onClick,
  type = 'button'
}: GlowButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative"
    >
      <Button
        type={type}
        onClick={onClick}
        size={size}
        variant={variant}
        className={cn(
          "glow-button relative overflow-hidden",
          "bg-black text-white hover:bg-gray-900",
          "border border-black/20 hover:border-black/40",
          "transition-all duration-300",
          "shadow-lg hover:shadow-xl",
          className
        )}
      >
        {children}
      </Button>
    </motion.div>
  );
}