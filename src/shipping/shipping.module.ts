import { Module } from '@nestjs/common';
import { CreateShipmentUseCase } from './application/use-cases/create-shipment.usecase';
import { ShippingEvents } from './presentation/shipping.events';

@Module({
  imports: [],
  providers: [CreateShipmentUseCase, ShippingEvents],
  exports: [],
})
export class ShippingModule {}
