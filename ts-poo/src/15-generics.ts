import { Dog } from './09-protected';

// function getValue(value: unknown) {
//   return value;
// }

// function getValue(value: number | string) {
//   return value;
// }

function getValue<T>(value: T) {
  return value;
}

getValue<number>(12).toFixed();
getValue<string>('12').toLowerCase();
getValue<number[]>([45, 798, 4]).forEach((item) => item);

const brown = new Dog('Brow', 'Abraham');
getValue<Dog>(brown);

// Promise<boolean>;
