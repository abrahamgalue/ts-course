(() => {
  // Alias types
  type UserId = number | string;
  let userId: UserId;

  // Literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Sizes;
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';

  function greeting(myText: UserId, size: Sizes) {
    if (typeof myText === 'string') {
      console.log(`string ${myText.toLowerCase()}`);
    }
  }

  greeting('Abraham', 'S');
  greeting(777, 'XL');
})();
