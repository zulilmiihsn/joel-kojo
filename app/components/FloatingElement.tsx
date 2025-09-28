'use client';

/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import { FloatingElementProps } from "../types";

export default function FloatingElement({
  src,
  alt = '',
  width,
  height,
  className,
  priority = false,
  loading = "lazy",
}: FloatingElementProps) {
  // Only add placeholder for images larger than 40x40
  const shouldUsePlaceholder = width >= 40 && height >= 40;
  
  // Check if it's an animated image (GIF)
  const isAnimated = src.endsWith('.gif');
  
  // Click handler
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };
  
  // Don't use both priority and loading props together
  const imageProps: any = {
    src,
    alt: alt || '',
    width,
    height,
    className,
    quality: 85,
    onClick: handleClick,
    style: {
      cursor: 'pointer',
      userSelect: 'none',
      ...(className.includes('pointer') && { 
        pointerEvents: 'auto',
        zIndex: 10 
      })
    }
  };

  if (priority) {
    imageProps.priority = true;
  } else {
    imageProps.loading = loading;
  }

  // Add unoptimized for animated images
  if (isAnimated) {
    imageProps.unoptimized = true;
  }

  if (shouldUsePlaceholder && !isAnimated) {
    imageProps.placeholder = "blur";
    imageProps.blurDataURL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=";
  }
  
  return <Image {...imageProps} />;
}
