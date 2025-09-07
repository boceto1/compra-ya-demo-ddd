import { AddressVo } from './address.vo';

describe('AddressVo', () => {
  const validParams = {
    addressLine1: 'Av. Amazonas',
    addressLine2: 'Edificio Central',
    city: 'Quito',
    country: 'Ecuador',
    instructions: 'Leave at the reception',
  };

  it('should create AddressVo with valid parameters', () => {
    const address = new AddressVo(
      validParams.addressLine1,
      validParams.addressLine2,
      validParams.city,
      validParams.country,
      validParams.instructions,
    );
    expect(address.addressLine1).toBe(validParams.addressLine1);
    expect(address.addressLine2).toBe(validParams.addressLine2);
    expect(address.city).toBe(validParams.city);
    expect(address.country).toBe(validParams.country);
    expect(address.instructions).toBe(validParams.instructions);
    expect(address.toString()).toBe(
      `${validParams.addressLine1}, ${validParams.addressLine2}, ${validParams.city}, ${validParams.country}`,
    );
  });

  it('should throw if addressLine1 is empty', () => {
    expect(
      () =>
        new AddressVo(
          '',
          validParams.addressLine2,
          validParams.city,
          validParams.country,
          validParams.instructions,
        ),
    ).toThrow('addressLine1 is required');
  });

  it('should throw if addressLine2 is empty', () => {
    expect(
      () =>
        new AddressVo(
          validParams.addressLine1,
          '',
          validParams.city,
          validParams.country,
          validParams.instructions,
        ),
    ).toThrow('addressLine2 is required');
  });

  it('should throw if city is empty', () => {
    expect(
      () =>
        new AddressVo(
          validParams.addressLine1,
          validParams.addressLine2,
          '',
          validParams.country,
          validParams.instructions,
        ),
    ).toThrow('city is required');
  });

  it('should throw if country is empty', () => {
    expect(
      () =>
        new AddressVo(
          validParams.addressLine1,
          validParams.addressLine2,
          validParams.city,
          '',
          validParams.instructions,
        ),
    ).toThrow('country is required');
  });

  it('should throw if instructions is empty', () => {
    expect(
      () =>
        new AddressVo(
          validParams.addressLine1,
          validParams.addressLine2,
          validParams.city,
          validParams.country,
          '',
        ),
    ).toThrow('instructions are required');
  });

  it('should throw if city is not "quito" or "guayaquil"', () => {
    expect(
      () =>
        new AddressVo(
          validParams.addressLine1,
          validParams.addressLine2,
          'Cuenca',
          validParams.country,
          validParams.instructions,
        ),
    ).toThrow('city must be either "quito" or "guayaquil"');
  });

  it('should allow city case-insensitively', () => {
    expect(
      () =>
        new AddressVo(
          validParams.addressLine1,
          validParams.addressLine2,
          'Guayaquil',
          validParams.country,
          validParams.instructions,
        ),
    ).not.toThrow();
    expect(
      () =>
        new AddressVo(
          validParams.addressLine1,
          validParams.addressLine2,
          'QUITO',
          validParams.country,
          validParams.instructions,
        ),
    ).not.toThrow();
  });

  it('should throw if country is not "ecuador"', () => {
    expect(
      () =>
        new AddressVo(
          validParams.addressLine1,
          validParams.addressLine2,
          validParams.city,
          'Peru',
          validParams.instructions,
        ),
    ).toThrow('country must be "ecuador"');
  });

  it('should allow country case-insensitively', () => {
    expect(
      () =>
        new AddressVo(
          validParams.addressLine1,
          validParams.addressLine2,
          validParams.city,
          'ECUADOR',
          validParams.instructions,
        ),
    ).not.toThrow();
  });

  it('should throw if instructions exceed 500 characters', () => {
    const longInstructions = 'a'.repeat(501);
    expect(
      () =>
        new AddressVo(
          validParams.addressLine1,
          validParams.addressLine2,
          validParams.city,
          validParams.country,
          longInstructions,
        ),
    ).toThrow('instruccions must be less than 500 characters');
  });

  it('should allow instructions with exactly 500 characters', () => {
    const maxInstructions = 'a'.repeat(500);
    expect(
      () =>
        new AddressVo(
          validParams.addressLine1,
          validParams.addressLine2,
          validParams.city,
          validParams.country,
          maxInstructions,
        ),
    ).not.toThrow();
  });
});
