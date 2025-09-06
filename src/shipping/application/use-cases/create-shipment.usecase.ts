import { Injectable } from '@nestjs/common';
import invariant from 'tiny-invariant';

interface ICreateShipmentUseCase {
  associatedOrderState: string;
  address: string;
}

@Injectable()
export class CreateShipmentUseCase {
  execute({
    address,
    associatedOrderState,
  }: ICreateShipmentUseCase): Promise<void> {
    invariant(
      associatedOrderState === 'confirmed' || associatedOrderState === 'paid',
      'The state of associated orden is not valid',
    );
    // create shipment
    //notify creation of shipment
    return;
  }
}
