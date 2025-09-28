// Component props types
export interface FloatingElementProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
  priority?: boolean;
  loading?: "lazy" | "eager";
}

// Image dimension type
export interface ImageDimensions {
  width: number;
  height: number;
}

// Animation configuration type
export interface AnimationConfig {
  duration: string;
  easing: string;
}

// Layout configuration type
export interface LayoutConfig {
  width: string;
  breakpoint: string;
}

// Character information type
export interface CharacterInfo {
  name: string;
  title: string;
  position?: string;
  age?: string;
  description?: string;
}
