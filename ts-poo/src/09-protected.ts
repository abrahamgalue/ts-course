class Animal {
  constructor(protected name: string) {}

  move() {
    console.log('Moving along!');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }

  protected doSomething() {
    console.log('doo');
  }
}

class Dog extends Animal {
  constructor(name: string, public owner: string) {
    super(name);
  }

  woof(times: number) {
    for (let index = 0; index < times; index++) {
      console.log(`woof! ${this.name}`);
    }
    this.doSomething();
  }

  move() {
    // code
    console.log('moving as a dog');
    super.move();
  }
}

const brown = new Dog('Brown', 'Abraham');
// brown.name = 'other name';
brown.woof(1);
// brown.doSomething();
brown.move();
