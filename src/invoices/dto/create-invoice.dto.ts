import {
  IsInt,
  IsEmail,
  IsString,
  IsNotEmpty,
  MinLength,
  IsArray,
} from 'class-validator';
import { Address } from '../entities/address.entity';
import { Item } from '../entities/item.entity';

export class CreateInvoiceDto {
  @IsString()
  @IsNotEmpty()
  createdAt: string;

  @IsString()
  @IsNotEmpty()
  paymentDue: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  description: string;

  @IsInt()
  @IsNotEmpty()
  paymentTerms: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  clientName: string;

  @IsEmail()
  clientEmail: string;

  @IsString()
  @IsNotEmpty()
  status: string;

  @IsNotEmpty()
  @MinLength(10)
  SenderAddress: Address;

  @IsNotEmpty()
  @MinLength(10)
  clientAddress: Address;

  @IsArray()
  @IsNotEmpty()
  items: Item[];

  @IsInt()
  @IsNotEmpty()
  total: number;
}
