class Animal {
  constructor(public name: string) {}

  move() {
    console.log('Moving along!');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }
}

class Dog extends Animal {
  constructor(name: string, public owner: string) {
    super(name);
  }

  woof(times: number) {
    for (let index = 0; index < times; index++) {
      console.log('woof!');
    }
  }
}

const pepe = new Animal('Pepe');

pepe.move();
console.log(pepe.greeting());

const brown = new Dog('Brown', 'Abraham');
brown.move();
console.log(brown.greeting());
brown.woof(5);
console.log(brown.owner);
