(() => {
  let userId: number | string;
  userId = 132;
  userId = '132';

  function greeting(myText: string | number) {
    if (typeof myText === 'string') {
      console.log(`string ${myText.toLowerCase()}`);
    } else {
      console.log(`number ${myText.toFixed(1)}`);
    }
  }

  greeting('Abraham');
  greeting(777.46);
})();
