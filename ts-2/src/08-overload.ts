// Abraham => [A, b, r, a, h, a, m] => string => string[]
// [A, b, r, a, h, a, m] => Abraham => string[] => string

function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join('');
  } else {
    return input.split('');
  }
}

const rtaArray = parseStr('Abraham');

console.log(rtaArray);

const rtaStr = parseStr(['A', 'b', 'r', 'a', 'h', 'a', 'm']);

console.log(rtaStr);
