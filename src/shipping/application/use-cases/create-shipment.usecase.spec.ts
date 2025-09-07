import { CreateShipmentUseCase } from './create-shipment.usecase';
import { EventEmitter2 } from 'eventemitter2';
const mockEmit = jest.fn();

jest.mock('eventemitter2', () => {
  return {
    EventEmitter2: jest.fn().mockImplementation(() => ({
      emit: mockEmit,
    })),
  };
});

const validAddress = {
  addressLine1: 'Av. Amazonas',
  addressLine2: 'Edificio Central',
  city: 'Quito',
  country: 'Ecuador',
  instructions: 'Leave at the reception',
};

describe('CreateShipmentUseCase', () => {
  let useCase: CreateShipmentUseCase;
  let eventEmitter: EventEmitter2;

  beforeEach(() => {
    jest.clearAllMocks();
    eventEmitter = new EventEmitter2();
    useCase = new CreateShipmentUseCase(eventEmitter);
  });

  describe('when the address and order state is right', () => {
    it('should create the order and notify the creation', () => {
      useCase.execute({
        address: validAddress,
        associatedOrderState: 'confirmed',
      });

      expect(mockEmit).toHaveBeenCalledWith(
        'shipment.created',
        expect.any(String),
      );
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
