export const colors = {
  primary: '#FFE600',
  secondary: '#3483FA',

  bggray: '#EEEEEE',
  white: '#FFFFFF',
  black: '#000000',


  typo20: '#333333',
  typo40: '#666666',
  typo60: '#999999'
} as const;

export type ColorsType = typeof colors;
export type KeyColors = keyof ColorsType;