import { Module } from '@nestjs/common';
import { CreateShipmentUseCase } from './application/use-cases/create-shipment.usecase';

@Module({
  imports: [],
  providers: [CreateShipmentUseCase],
  exports: [],
})
export class ShippingModule {}
