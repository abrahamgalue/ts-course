import type { BaseModel } from '../base.model';
import type { Product } from '../products/product.model';
import type { User } from '../users/user.model';

export interface Order extends BaseModel {
  products: Product[];
  user: User;
}
