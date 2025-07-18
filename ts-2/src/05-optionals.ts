export const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number
) => {
  return {
    id,
    isNew: isNew ?? true,
    stock: stock ?? 10,
  };
};

console.log(createProduct('454', false, 798));
console.log(createProduct('132'));
console.log(createProduct('9787', false, 0));
