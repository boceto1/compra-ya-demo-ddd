import { Injectable } from '@nestjs/common';

interface ICreateShipmentUseCase {
  associatedOrderState: 'confirmed' | 'paid';
  address: string;
}

@Injectable()
export class CreateShipmentUseCase {
  async execute(input: ICreateShipmentUseCase): Promise<void> {
    // validate order state
    // create shipment
    //notify creation of shipment
  }
}
