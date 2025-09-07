import { Injectable } from '@nestjs/common';
import { AddressVo } from '../../domain/vos/address.vo';
import invariant from 'tiny-invariant';
import { Shipment } from '../../../shipping/domain/entities/shipment.entity';
import { EventEmitter2 } from 'eventemitter2';

interface IAddress {
  addressLine1: string;
  addressLine2: string;
  city: string;
  country: string;
  instructions: string;
}
interface ICreateShipmentUseCase {
  associatedOrderState: string;
  address: IAddress;
}

@Injectable()
export class CreateShipmentUseCase {
  constructor(private readonly eventEmitter: EventEmitter2) {}
  execute({
    address,
    associatedOrderState,
  }: ICreateShipmentUseCase): Promise<void> {
    invariant(
      associatedOrderState === 'confirmed' || associatedOrderState === 'paid',
      'The state of associated orden is not valid',
    );

    const { addressLine1, addressLine2, city, country, instructions } = address;
    const shipmentAddress = new AddressVo(
      addressLine1,
      addressLine2,
      city,
      country,
      instructions,
    );

    const createdShipment = new Shipment(shipmentAddress);
    this.eventEmitter.emit('shipment.created', createdShipment.trackingIdValue);
    return;
  }
}
