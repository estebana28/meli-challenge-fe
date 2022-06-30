export const fontSize = {
  46: '46px',
  28: '28px',
  24: '24px',
  18: '18px',
  16: '16px',
  14: '14px',
  12: '12px',
} as const;

export type FontSizeType = typeof fontSize;
export type KeyFontSize = keyof FontSizeType;

export const fontFamily = {
  roboto: "'Roboto', sans-serif",
} as const;

export type FontFamilyType = typeof fontFamily;
export type KeyFontFamily = keyof FontFamilyType;