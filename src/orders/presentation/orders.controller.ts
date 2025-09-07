import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

export interface IAddress {
  addressLine1: string;
  addressLine2: string;
  city: string;
  country: string;
  instructions: string;
}

@Controller('orders')
export class OrdersController {
  constructor(private readonly eventEmitter: EventEmitter2) {}

  @Post('testOrderPaid')
  @HttpCode(200)
  testOrderPaid(
    @Body('address') address: IAddress,
    @Body('associationOrderState') associationOrderState: string,
  ): { status: string } {
    console.log('1. Emit Order Paid Event');
    this.eventEmitter.emit('order.paid', address, associationOrderState);
    return { status: 'ok' };
  }
}
