// Image dimensions and positioning constants
export const IMAGE_DIMENSIONS = {
  FIRE: { width: 414, height: 100 },
  BUTTON: { width: 33, height: 33 },
  GOAT: { width: 166, height: 200 },
  BALL: { width: 166, height: 166 },
  STAR: { width: 166, height: 166 },
  MAIN: { width: 520, height: 580 },
  CROWN: { width: 105, height: 60 },
  MAIN_LEFT: { width: 166, height: 300 },
  MAIN_RIGHT: { width: 187, height: 200 },
  POSITION: { width: 60, height: 40 },
  AGE: { width: 60, height: 40 },
  MAIN_TEXT: { width: 200, height: 120 },
} as const;

// Animation constants
export const ANIMATION = {
  FLOATING_DURATION: '3s',
  POINTER_TRANSITION: 'duration-150',
} as const;

// Layout constants
export const LAYOUT = {
  MAIN_SCREEN_WIDTH: '414px',
  RESPONSIVE_BREAKPOINT: 'sm',
} as const;

// Alt text constants for accessibility
export const ALT_TEXTS = {
  FIRE: 'Animated fire effect',
  BUTTON: 'Decorative button element',
  GOAT: 'Main goat character',
  BALL: 'Floating ball element',
  STAR: 'Decorative star element',
  MAIN: 'Main character illustration',
  CROWN: 'Crown decoration',
  MAIN_LEFT: 'Left side character element',
  MAIN_RIGHT: 'Right side character element',
  POSITION: 'Position indicator showing character role',
  AGE: 'Age indicator showing character age',
  MAIN_TEXT: 'Main character information and description text',
} as const;
