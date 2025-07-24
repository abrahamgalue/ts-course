import { Animal, Dog } from './09-protected';

const animal = new Animal('Brown');
animal.greeting();

const chase = new Dog('Chase', 'Abraham');
chase.greeting();
chase.woof(2);
