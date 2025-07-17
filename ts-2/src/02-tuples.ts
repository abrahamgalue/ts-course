const prices: (number | string)[] = [1, 2, 3];
prices.push('1');
prices.push(6);

const user: [string, number] = ['abraham', 77];

user.unshift(66);
user.push('nico');

console.log(user);

const [username, age] = user;

console.log(username);
console.log(age);
