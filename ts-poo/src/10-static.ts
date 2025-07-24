console.log('Math.PI', Math.PI);
console.log('Math.max', Math.max(5, 89, 7.9, 54, 6.54));

class MyMath {
  static readonly PI = 3.14;

  static max(...numbers: number[]) {
    console.log(numbers);
    return numbers.reduce((prev, current) =>
      prev >= current ? prev : current
    );
  }
}

// const math = new MyMath();
console.log('MyMath.PI', MyMath.PI);
// MyMath.PI = 121;
console.log('MyMath.max', MyMath.max(5, 89, 7.9, 54, 6.54));
const numbers = [5, 89, 7.9, 54, 6.54, 789, 8];
console.log('MyMath.max', MyMath.max(...numbers));
console.log('MyMath.max', MyMath.max(-1, -9, -8));
