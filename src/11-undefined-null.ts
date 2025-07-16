(() => {
  // let myNumber: number = undefined;
  // let myString: string = undefined;

  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber: number | null = null;
  myNumber = 654;

  let myString: string | undefined = undefined;
  myString = 'Hello';

  function hi(name: string | null) {
    let hello = 'Hola ';

    if (name) {
      hello += name.toLowerCase();
    } else {
      hello += 'nobody';
    }

    console.log(hello);
  }

  function hiV2(name: string | null) {
    let hello = 'Hola ';
    hello += name?.toLowerCase() ?? 'nobody';

    console.log(hello);
  }

  hi('Abraham');
  hi(null);

  hiV2('Abraham');
  hiV2(null);
})();
