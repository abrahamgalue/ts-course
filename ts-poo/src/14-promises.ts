function delay(time: number) {
  const promise = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('hello');
    }, time);
  });
  return promise;
}

async function getProducts() {
  const res = await fetch('https://api.escuelajs.co/api/v1/products');
  const data = res.json();
  return data;
}

const rta = await delay(3000);
console.log(rta);

const products = await getProducts();
console.log(products);