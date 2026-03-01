/**
 * Bjorn App Design System
 * 
 * Calming blue tones with a dark theme feel.
 */

export const colors = {
  // Backgrounds (deep to light)
  background: '#0B1929',      // Deep cool navy - main app background
  surface: '#122338',         // Dark blue slate - cards, inputs
  surfaceElevated: '#1A3148', // Blue slate - elevated elements
  surfaceHover: '#213D58',    // Hover state
  
  // Primary accent - calming blue
  primary: '#5B9BD5',         // Calming blue - buttons, active states
  primaryMuted: '#6BA4D9',    // Soft blue - secondary accents
  primaryGlow: 'rgba(91, 155, 213, 0.3)', // For glow effects
  primarySubtle: 'rgba(91, 155, 213, 0.1)', // Very subtle backgrounds
  
  // Secondary
  secondary: '#7EB8E0',       // Soft blue accent
  secondaryMuted: '#3A7CB8',  // Deeper blue
  
  // Text
  textPrimary: '#F0F4F8',     // Primary text - soft white
  textSecondary: '#94A3B8',   // Muted text - slate
  textTertiary: '#64748B',    // Very muted
  textInverse: '#0B1929',     // Text on light backgrounds
  
  // Semantic
  success: '#10B981',         // Green
  successSubtle: '#064E3B',   // Dark green subtle
  warning: '#F59E0B',         // Amber
  warningSubtle: '#451A03',   // Dark amber subtle
  error: '#EF4444',           // Red
  errorSubtle: '#3D1A1A',     // Dark red subtle
  info: '#5B9BD5',            // Blue
  infoSubtle: '#1A3350',      // Dark blue subtle
  
  // Avatar states
  avatarIdle: '#6BA4D9',
  avatarListening: '#7EB8E0',
  avatarThinking: '#FACC15',   // Warm neon yellow for thinking
  avatarThinkingGlow: 'rgba(250, 204, 21, 0.4)', // Yellow glow
  avatarSpeaking: '#7EB8E0',
  avatarAlert: '#F59E0B',
  
  // Message bubbles
  bubbleUser: '#1A3A5C',       // User messages - deeper blue
  bubbleBjorn: '#122338',      // Bjorn messages - surface color
  
  // Borders
  border: 'rgba(148, 163, 184, 0.1)',
  borderFocused: 'rgba(91, 155, 213, 0.5)',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const borderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 9999,
};

export const typography = {
  // Font sizes
  xs: 11,
  sm: 13,
  base: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 30,
  '4xl': 36,
  
  // Font weights (as strings for React Native)
  regular: '400' as const,
  medium: '500' as const,
  semibold: '600' as const,
  bold: '700' as const,
};

export const shadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 8,
  },
  glow: {
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 0,
  },
};

// Animation durations
export const animation = {
  fast: 150,
  normal: 300,
  slow: 500,
  pulse: 2000,
};

// Haptic patterns
export const haptics = {
  light: 'light' as const,
  medium: 'medium' as const,
  heavy: 'heavy' as const,
  success: 'success' as const,
  warning: 'warning' as const,
  error: 'error' as const,
};

export default {
  colors,
  spacing,
  borderRadius,
  typography,
  shadows,
  animation,
  haptics,
};
