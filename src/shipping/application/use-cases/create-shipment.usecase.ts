import { Injectable } from '@nestjs/common';
import { AddressVo } from '../../domain/vo/address.vo';
import invariant from 'tiny-invariant';

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
    return;
  }
}
