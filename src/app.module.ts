import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ShippingModule } from './shipping/shipping.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [EventEmitterModule.forRoot(), ShippingModule, OrdersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
