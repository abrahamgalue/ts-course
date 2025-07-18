const withoutEnd = () => {
  while (true) {
    console.log('Never stop to learn');
  }
};

const fail = (message: string) => {
  throw new Error(message);
};

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'Is a String';
  } else if (Array.isArray(input)) {
    return 'Is an Array';
  }

  return fail('not match');
};

console.log(example('Hello'));
console.log(example([5, 5, 5]));
console.log(example(5));
console.log(example('Hello again'));
