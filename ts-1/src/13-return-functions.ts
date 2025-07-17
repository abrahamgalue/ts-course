(() => {
  const calcTotal = (prices: number[]): number => {
    return prices.reduce((prev, current) => prev + current, 0);
  };

  const printTotal = (prices: number[]): void => {
    const rta = calcTotal(prices);
    console.log(`El total es ${rta}`);
  };

  printTotal([5, 5]);
})();
