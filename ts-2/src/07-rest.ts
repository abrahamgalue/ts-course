import { ROLES, type User } from './01-enum';

const currentUser: User = {
  username: 'abraham',
  role: ROLES.CUSTOMER,
};

export const checkAdminRole = () => {
  if (currentUser.role === ROLES.ADMIN) {
    return true;
  }

  return false;
};

console.log('checkAdminRole', checkAdminRole());

export const checkRole = (role1: string, role2: string) => {
  if (currentUser.role === role1) {
    return true;
  }

  if (currentUser.role === role2) {
    return true;
  }

  return false;
};

console.log('checkRole', checkRole(ROLES.ADMIN, ROLES.SELLER));

export const checkRoleV2 = (roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }

  return false;
};

console.log('checkRoleV2', checkRoleV2([ROLES.ADMIN, ROLES.SELLER]));

export const checkRoleV3 = (...roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }

  return false;
};

console.log(
  'checkRoleV3',
  checkRoleV3(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER)
);
