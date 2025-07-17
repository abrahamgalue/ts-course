import _ from 'lodash';

const data = [
  {
    username: 'abra',
    role: 'admin',
  },
  {
    username: 'zulema',
    role: 'seller',
  },
  {
    username: 'valentina',
    role: 'seller',
  },
  {
    username: 'santiago',
    role: 'customer',
  },
];

const rta = _.groupBy(data, (item) => item.role);
console.log(rta);
