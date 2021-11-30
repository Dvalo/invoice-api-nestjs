import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { InvoicesModule } from './invoices/invoices.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb://mongodb:27017', {
      dbName: 'invoices',
    }),
    InvoicesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
