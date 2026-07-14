import type { ServiceId } from "../catalog/services";

/** Stub — Phase 3: rendez-vous et créneaux */
export interface BookingSlot {
  id: string;
  serviceId: ServiceId;
  locationId: string;
  startsAt: string;
  endsAt: string;
  available: boolean;
}

export interface BookingRequest {
  serviceId: ServiceId;
  locationId: string;
  slotId: string;
  name: string;
  email: string;
  phone: string;
}
