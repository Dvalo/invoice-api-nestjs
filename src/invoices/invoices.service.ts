import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Invoice } from './entities/invoice.entity';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';

@Injectable()
export class InvoicesService {
  constructor(
    @InjectModel(Invoice.name) private invoiceModel: Model<Invoice>,
  ) {}

  async create(createInvoiceDto: CreateInvoiceDto): Promise<Invoice> {
    return new this.invoiceModel(createInvoiceDto).save();
  }

  async findAll(): Promise<Invoice[]> {
    const invoice: Invoice[] = await this.invoiceModel.find();
    return invoice;
  }

  async findOne(id: string): Promise<Invoice> {
    const invoice: Invoice = await this.invoiceModel.findById(id);
    if (!invoice) {
      throw new NotFoundException(`Invoice with id of ${id} does not exist`);
    }
    return invoice;
  }

  async update(
    id: string,
    updateInvoiceDto: UpdateInvoiceDto,
  ): Promise<Invoice> {
    const invoice: Invoice = await this.invoiceModel.findByIdAndUpdate(id, {
      $set: { ...updateInvoiceDto },
    });
    if (!invoice) {
      throw new NotFoundException(`Invoice with id of ${id} does not exist`);
    }
    return invoice;
  }

  async remove(id: string) {
    const invoice: Invoice = await this.invoiceModel.findByIdAndDelete(id);
    if (!invoice) {
      throw new NotFoundException(`Invoice with id of ${id} does not exist`);
    }
    return invoice;
  }
}
