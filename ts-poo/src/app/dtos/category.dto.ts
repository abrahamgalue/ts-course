import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsUrl,
  Length,
  validateOrReject,
} from 'class-validator';
import { AccessType, type Category } from '../models/category.model';

export interface ICreateCategoryDto extends Omit<Category, 'id'> {}

export class CreateCategoryDto implements ICreateCategoryDto {
  @Length(4, 140)
  @IsNotEmpty()
  name!: string;

  slug!: string;

  @IsUrl()
  @IsNotEmpty()
  image!: string;

  creationAt!: Date;
  updatedAt!: Date;

  @IsOptional()
  @IsEnum(AccessType)
  access?: AccessType | undefined;
}

try {
  const dto = new CreateCategoryDto();
  dto.name = 'Product 1';
  dto.image = 'https://product-slug.png';

  await validateOrReject(dto);
} catch (err) {
  console.log(err);
}
