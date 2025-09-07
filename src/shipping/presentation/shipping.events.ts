import { OnEvent } from '@nestjs/event-emitter';
import {
  CreateShipmentUseCase,
  IAddress,
} from '../application/use-cases/create-shipment.usecase';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ShippingEvents {
  constructor(private readonly createShipmentUseCase: CreateShipmentUseCase) {}

  @OnEvent('order.paid')
  async handleOrderPaid(
    address: IAddress,
    associatedOrderState: string,
  ): Promise<void> {
    console.log('2. Create Shipment', address, associatedOrderState);
    this.createShipmentUseCase.execute({ address, associatedOrderState });
  }

  @OnEvent('shipment.created')
  async handleShipmentCreated(trackingId: string): Promise<void> {
    console.log('3. Notify Shipment was created');
    console.log(`On order was created with the tracking id: ${trackingId}`);
  }
}
