import { Platform } from 'react-native'

export const COLORS = {
  primary: '#e05e5e',
  secondary: '#bd4b4b',
  text: '#263238',
  inactive: '#A0A0A0',
  grey: '#f6f6f6',
  'light-gray': '#86858c',
  'grashy-grey': '#E8E2E2',
  black: '#030303',
  white: '#fff',
  orange: '#ed7363'
}

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 40,
  xxl: 48,
  xxxl: 64
}

export const FONT_SIZE = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 40,
  xxl: 48,
  xxxl: 64
}

export const FONTS = {
  main: Platform.select({
    ios: 'Arial',
    android: 'Roboto',
    default: 'System'
  })
}
