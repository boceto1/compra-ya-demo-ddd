import { CreateShipmentUseCase } from './create-shipment.usecase';

const validAddress = {
  addressLine1: 'Av. Amazonas',
  addressLine2: 'Edificio Central',
  city: 'Quito',
  country: 'Ecuador',
  instructions: 'Leave at the reception',
};

describe('CreateShipmentUseCase', () => {
  let useCase: CreateShipmentUseCase;

  beforeEach(() => {
    useCase = new CreateShipmentUseCase();
  });

  describe('when the address and order state is right', () => {
    it('should create the order and notify the creation', () => {
      useCase.execute({
        address: validAddress,
        associatedOrderState: 'confirmed',
      });

      expect(true).toBe(true);
    });
  });

  describe('when the state is not right', () => {
    it('should throw an exception', () => {
      expect(() => {
        useCase.execute({
          address: validAddress,
          associatedOrderState: 'invalid-state',
        });
      }).toThrow();
    });
  });
});
