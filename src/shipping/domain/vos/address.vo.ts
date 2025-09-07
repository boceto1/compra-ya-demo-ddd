import invariant from 'tiny-invariant';

export class AddressVo {
  constructor(
    public readonly addressLine1: string,
    public readonly addressLine2: string,
    public readonly city: string,
    public readonly country: string,
    public readonly instructions: string,
  ) {
    invariant(!!addressLine1, 'addressLine1 is required');
    invariant(!!addressLine2, 'addressLine2 is required');
    invariant(!!city, 'city is required');
    invariant(!!country, 'country is required');
    invariant(!!instructions, 'instructions are required');

    invariant(
      ['quito', 'guayaquil'].includes(this.city.toLowerCase()),
      'city must be either "quito" or "guayaquil"',
    );

    invariant(
      this.country.toLowerCase() === 'ecuador',
      'country must be "ecuador"',
    );

    invariant(
      instructions.length <= 500,
      'instruccions must be less than 500 characters',
    );
  }

  toString(): string {
    return `${this.addressLine1}, ${this.addressLine2}, ${this.city}, ${this.country}`;
  }
}
