"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary"
}

export default function NeonButton({ className, variant = "primary", children, ...props }: NeonButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      className={cn(
        "relative px-6 py-2 rounded-full text-sm font-medium",
        "overflow-hidden",
        variant === "primary" ? "bg-white text-black" : "bg-transparent text-white border border-white/20",
        className,
      )}
      {...props}
    >
      {/* Neon efekti */}
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            variant === "primary"
              ? "conic-gradient(from 0deg, transparent, rgba(255,255,255,0.4), transparent)"
              : "conic-gradient(from 0deg, transparent, rgba(255,255,255,0.2), transparent)",
        }}
      />

      {/* İçerik */}
      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}

