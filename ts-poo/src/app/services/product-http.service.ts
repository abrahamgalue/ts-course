import type { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';
import type { Product } from '../models/product.model';
import type { ProductService } from '../models/product.service.model';

export class ProductHttpService implements ProductService {
  private url = 'https://api.escuelajs.co/api/v1/products';

  async getAll(): Promise<Product[]> {
    const res = await fetch(this.url);
    const data = (await res.json()) as Product[];

    return data;
  }

  async update(id: Product['id'], changes: UpdateProductDto) {
    const res = await fetch(`${this.url}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(changes),
    });
    const data = await res.json();

    return data;
  }

  async create(dto: CreateProductDto) {
    const res = await fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dto),
    });
    const data = await res.json();

    return data;
  }

  async findOne(id: Product['id']) {
    const res = await fetch(`${this.url}/${id}`);
    const data = await res.json();

    return data;
  }
}
