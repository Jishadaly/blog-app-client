'use client'

import React, { useState, useCallback, useRef, useEffect } from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface ResizablePanelProps {
  leftContent: React.ReactNode
  rightContent: React.ReactNode
  initialLeftWidth?: number
}

export default function ResizablePanel({ leftContent, rightContent, initialLeftWidth = 70 }: ResizablePanelProps) {
  const [leftWidth, setLeftWidth] = useState(initialLeftWidth)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const handleMouseDown = useCallback(() => {
    isDragging.current = true
  }, [])

  const handleMouseUp = useCallback(() => {
    isDragging.current = false
  }, [])

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging.current || !containerRef.current) return

      const containerRect = containerRef.current.getBoundingClientRect()
      const newLeftWidth = ((e.clientX - containerRect.left) / containerRect.width) * 100

      setLeftWidth(Math.max(30, Math.min(70, newLeftWidth)))
    },
    []
  )

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [handleMouseMove, handleMouseUp])

  return (
    <div ref={containerRef} className="flex h-full">
      <div style={{ width: `${leftWidth}%` }} className="overflow-y-auto pr-2">
        {leftContent}
      </div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div
              className="w-px bg-gray-200 cursor-col-resize relative flex items-center justify-center hover:bg-gray-300 transition-colors"
              onMouseDown={handleMouseDown}
            >
              <div className="absolute w-1 h-8 bg-gray-400 rounded-full"></div>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Drag to resize</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <div style={{ width: `${100 - leftWidth}%` }} className="overflow-y-auto pl-2">
        {rightContent}
      </div>
    </div>
  )
}

