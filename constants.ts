// NOTE: string enums are not reversable,
// https://www.typescriptlang.org/docs/handbook/enums.html#reverse-mappings
export enum DirectionEnum {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}

// NOTE: an object as const might be better than a string enum,
// https://www.typescriptlang.org/docs/handbook/enums.html#objects-vs-enums
export const DirectionObject = {
  Up: 'UP',
  Down: 'DOWN',
  Left: 'LEFT',
  Right: 'RIGHT',
} as const
