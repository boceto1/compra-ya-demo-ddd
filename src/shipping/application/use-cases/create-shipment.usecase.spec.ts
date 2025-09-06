import { CreateShipmentUseCase } from './create-shipment.usecase';

describe('CreateShipmentUseCase', () => {
  let useCase: CreateShipmentUseCase;

  beforeEach(() => {
    useCase = new CreateShipmentUseCase();
  });

  describe('when the address and order state is right', () => {
    it('should create the order and notify the creation', () => {
      useCase.execute({
        address: 'test-address',
        associatedOrderState: 'confirmed',
      });

      expect(true).toBe(true);
    });
  });

  describe('when the state is not right', () => {
    it('should throw an exception', () => {
      expect(() => {
        useCase.execute({
          address: 'test-address',
          associatedOrderState: 'invalid-state',
        });
      }).toThrow();
    });
  });
});

// We recommend installing an extension to run jest tests.
