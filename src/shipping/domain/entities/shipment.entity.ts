import { AddressVo } from '../vos/address.vo';
import crypto from 'crypto';

export const SHIPMENT_STATUS = {
  CREATED: 'created',
  PENDING: 'pending',
  SHIPPED: 'shipped',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled',
} as const;
export type ShipmentStatus =
  (typeof SHIPMENT_STATUS)[keyof typeof SHIPMENT_STATUS];

export class Shipment {
  private trackingId: string;
  private createdAt: Date;
  private address: AddressVo;
  private status: ShipmentStatus;

  constructor(address: AddressVo) {
    this.trackingId = crypto.randomUUID();
    this.status = 'created';
    this.address = address;
    this.createdAt = new Date();
  }

  get trackingIdValue(): string {
    return this.trackingId;
  }

  get createdAtValue(): Date {
    return this.createdAt;
  }

  get addressValue(): AddressVo {
    return this.address;
  }

  get statusValue(): ShipmentStatus {
    return this.status;
  }
}
