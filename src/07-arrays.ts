(() => {
  let prices = [1, 2, 3, 456, 8, 4, 'hola', true];
  prices.push(777);

  let products = ['hello', true];
  products.push(false);

  let mixed: (number | string | boolean | Object)[] = ['hello', true];
  mixed.push(77);
  mixed.push('as');
  mixed.push(true);
  mixed.push({});
  mixed.push([]);

  let numbers = [1, 2, 3, 456, 8, 4];
  numbers.map((item) => item + 2);
})();
