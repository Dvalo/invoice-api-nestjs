import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InvoicesModule } from './invoices/invoices.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/invoices'),
    InvoicesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
