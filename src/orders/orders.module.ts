import { Module } from '@nestjs/common';
import { OrdersController } from './presentation/orders.controller';

@Module({
  controllers: [OrdersController],
  providers: [],
  exports: [],
})
export class OrdersModule {}
