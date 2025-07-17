let anyVar: any;
anyVar = true;
anyVar = undefined;
anyVar = null;
anyVar = 1;
anyVar = [];
anyVar = {};

let isNew: boolean = anyVar;

// anyVar.doSomething();
// anyVar.toUpperCase();

let unknownVar: unknown;
anyVar = true;
anyVar = undefined;
anyVar = null;
anyVar = 1;
anyVar = [];
anyVar = {};

// unknownVar.doSomething();

if (typeof unknownVar === 'string') {
  unknownVar.toUpperCase();
}

if (typeof unknownVar === 'boolean') {
  let isNew2: boolean = unknownVar;
}

const parse = (str: string): unknown => {
  return JSON.parse(str);
};

const user = parse('{ "name": "Abraham", "lastname": "Galue", "age": 24 }');

console.log(user);
