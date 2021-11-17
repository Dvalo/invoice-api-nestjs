import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Address } from './address.entity';
import { Item } from './item.entity';

@Schema()
export class Invoice extends Document {
  @Prop()
  createdAt: string;

  @Prop()
  paymentDue: string;

  @Prop()
  description: string;

  @Prop()
  paymentTerms: number;

  @Prop()
  clientName: string;

  @Prop()
  clientEmail: string;

  @Prop()
  status: string;

  @Prop()
  senderAddress: Address;

  @Prop()
  clientAddress: Address;

  @Prop()
  items: Item[];

  @Prop()
  total: number;
}

export const InvoiceSchema = SchemaFactory.createForClass(Invoice);
