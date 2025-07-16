(() => {
  type LoginProps = {
    email: string;
    password: string;
  };

  const login = ({ email, password }: LoginProps) => {
    console.log(email, password);
  };

  login({ email: 'hola@hello.com', password: '1232' });

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  type Product = {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  };

  const product: Product[] = [];

  const addProduct = (data: Product) => {
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
