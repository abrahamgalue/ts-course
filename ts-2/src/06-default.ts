export const createProduct = (
  id: string | number,
  isNew: boolean = true,
  stock: number = 10
) => {
  return {
    id,
    isNew,
    stock,
  };
};

console.log(createProduct('454', false, 798));
console.log(createProduct('132'));
console.log(createProduct('9787', false, 0));
console.log(createProduct('777', false));
