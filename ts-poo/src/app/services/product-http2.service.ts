import { BaseHttpService } from './base-http.service';
import type { Product } from '../models/product.model';

export class ProductHttpService extends BaseHttpService<Product> {
  otherReq() {
    // code
    this.url;
    // code
  }
}
