(() => {
  let productTitle = 'My product';
  productTitle = 'My Product 2';

  const productDescription = "I'm bla bla hello";
  console.log('productDescription', productDescription);

  const summary = `
    title: ${productTitle}
    description: ${productDescription}
    price: ${100}
    isNew: ${false}
  `;
  console.log(summary);

  const myString: string = '';
})();
