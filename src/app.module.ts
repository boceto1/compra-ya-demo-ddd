import { Module } from '@nestjs/common';
import { ShippingModule } from './shipping/shipping.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [ShippingModule, OrdersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
