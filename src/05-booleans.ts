(() => {
  let isEnabled = true;
  // isEnabled = 'as';
  // isEnabled = 77;
  // isEnabled = null;
  isEnabled = false;

  let isNew: boolean = false;
  console.log('isNew', isNew);
  isNew = true;
  console.log('isNew', isNew);

  const random = Math.random();
  console.log('random', random);
  isNew = random >= 0.5 ? true : false;
  console.log('isNew', isNew);

  const myBoolean: boolean = true;
})();
