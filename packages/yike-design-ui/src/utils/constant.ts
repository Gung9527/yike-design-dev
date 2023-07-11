export const TYPES = [
  'primary',
  'sceondary',
  'outline',
  'undefined',
] as const;
export type Type = (typeof TYPES)[number]

export const SIZES = ['s', 'm', 'l', 'xl'] as const;
export type Size = (typeof SIZES)[number]

export const ROUNDS = ['round', 'circle', 'square'] as const;
export type Round = (typeof ROUNDS)[number]

export const STATUS = ['success', 'warning', 'danger'] as const;
export type Status = typeof STATUS[number]