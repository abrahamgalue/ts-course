// Abraham => [A, b, r, a, h, a, m] => string => string[]
// [A, b, r, a, h, a, m] => Abraham => string[] => string

function parseStr(input: string): string[];
function parseStr(input: string[]): string;
function parseStr(input: number): boolean;

// function parseStr(input: string | string[]): string | string[] {
//   if (Array.isArray(input)) {
//     return input.join('');
//   } else {
//     return input.split('');
//   }
// }

function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join('');
  } else if (typeof input === 'string') {
    return input.split('');
  } else if (typeof input === 'number') {
    return true;
  }
}

const rtaArray = parseStr('Abraham');
rtaArray.reverse();

console.log(rtaArray);

const rtaStr = parseStr(['A', 'b', 'r', 'a', 'h', 'a', 'm']);
rtaStr.toLowerCase();

console.log(rtaStr);

const rtaBoolean = parseStr(7);

console.log(rtaBoolean);
