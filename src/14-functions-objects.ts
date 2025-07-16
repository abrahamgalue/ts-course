(() => {
  const login = ({ email, password }: { email: string; password: string }) => {
    console.log(email, password);
  };

  login({ email: 'hola@hello.com', password: '1232' });

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const product: any[] = [];

  const addProduct = (data: {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  }) => {
    product.push(data);
  };

  addProduct({
    title: 'Product 1',
    createdAt: new Date(),
    stock: 12,
  });

  addProduct({
    title: 'Product 2',
    createdAt: new Date(),
    stock: 5,
    size: 'M',
  });

  console.log(product);
})();
