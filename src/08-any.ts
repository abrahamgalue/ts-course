(() => {
  let myDynamicVar: any;
  myDynamicVar = 5;
  myDynamicVar = null;
  myDynamicVar = {};
  myDynamicVar = '';

  myDynamicVar = 'Hola';
  const rta = (myDynamicVar as string).toLowerCase();
  console.log(rta);

  myDynamicVar = 1234;
  const rta2 = (<number>myDynamicVar).toFixed();
  console.log(rta2);
})();
