import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Address extends Document {
  @Prop()
  street: string;

  @Prop()
  city: string;

  @Prop()
  postCode: string;

  @Prop()
  country: number;
}

export const AddressSchema = SchemaFactory.createForClass(Address);
