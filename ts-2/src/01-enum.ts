export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer',
}

export type User = {
  username: string;
  role: ROLES;
};

const abrahamUser: User = {
  username: 'Abraham',
  role: ROLES.CUSTOMER,
};
