import type { UpdateProductDto } from '../dtos/product.dto';
import type { Product } from '../models/product.model';
import { ProductHttpService } from './product-http2.service';

export class ProductCRUDService {
  private url = 'https://api.escuelajs.co/api/v1/products';
  private http = new ProductHttpService(this.url);

  async update(id: Product['id'], dto: UpdateProductDto) {
    // logic
    // permits
    // validate(dto)
    return this.http.update(id, dto);
  }
}
