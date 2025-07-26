import type { Product } from '../models/product.model';
import type { Category } from '../models/category.model';

export interface CreateProductDto extends Omit<Product, 'id' | 'category'> {
  categoryId: Category['id'];
}

export interface UpdateProductDto extends Partial<CreateProductDto> {}
