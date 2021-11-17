import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Invoice extends Document {
  @Prop()
  name: string;
}

export const InvoiceSchema = SchemaFactory.createForClass(Invoice);
