import { z } from "zod";
import { SERVICE_IDS } from "@fitnessloft/content";

const serviceIdSchema = z.enum(
  SERVICE_IDS as [typeof SERVICE_IDS[number], ...typeof SERVICE_IDS[number][]],
);

/** Phase 3 — stub pour rendez-vous */
export const bookingRequestSchema = z.object({
  serviceId: serviceIdSchema,
  locationId: z.string().min(1),
  slotId: z.string().min(1),
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email(),
  phone: z.string().trim().min(7).max(20),
});

export type BookingRequestInput = z.infer<typeof bookingRequestSchema>;
