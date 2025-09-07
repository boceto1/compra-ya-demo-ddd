import { Shipment, SHIPMENT_STATUS } from './shipment.entity';
import { AddressVo } from '../vos/address.vo';

describe('Shipment Entity', () => {
  let address: AddressVo;

  beforeEach(() => {
    address = new AddressVo(
      'Japón',
      'Pereira',
      'quito',
      'ecuador',
      'let package front of the door',
    );
  });

  it('should create a shipment with correct initial values', () => {
    const shipment = new Shipment(address);

    expect(shipment.trackingIdValue).toBeDefined();
    expect(typeof shipment.trackingIdValue).toBe('string');
    expect(shipment.statusValue).toBe(SHIPMENT_STATUS.CREATED);
    expect(shipment.addressValue).toBe(address);
    expect(shipment.createdAtValue).toBeInstanceOf(Date);
  });

  it('should return correct values from getters', () => {
    const shipment = new Shipment(address);

    expect(shipment.trackingIdValue).toBe(shipment.trackingIdValue);
    expect(shipment.createdAtValue).toBe(shipment.createdAtValue);
    expect(shipment.addressValue).toBe(shipment.addressValue);
    expect(shipment.statusValue).toBe(shipment.statusValue);
  });

  it('should have a unique trackingId for each shipment', () => {
    const shipment1 = new Shipment(address);
    const shipment2 = new Shipment(address);

    expect(shipment1.trackingIdValue).not.toBe(shipment2.trackingIdValue);
  });

  it('should have status as one of SHIPMENT_STATUS values', () => {
    const shipment = new Shipment(address);
    expect(Object.values(SHIPMENT_STATUS)).toContain(shipment.statusValue);
  });
});
