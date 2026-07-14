# Feature: Booking (Phase 3)

**Statut :** stub — non implémenté

## Objectif

Prise de rendez-vous en ligne par service et par localisation.

## Dépendances prévues

- `@fitnessloft/schemas` → `bookingRequestSchema`
- `@fitnessloft/content` → `SERVICE_CATALOG`, `BOOKABLE_SERVICE_IDS`
- Cal.com ou API interne
- PostgreSQL (Supabase/Neon) + Drizzle ORM

## Routes prévues

- `/[locale]/rendez-vous`
- `/[locale]/rendez-vous/[serviceId]`
- `POST /api/v1/bookings`
- `POST /api/v1/webhooks/calcom`

## Fichiers à créer en Phase 3

```
features/booking/
├── components/BookingWidget.tsx
├── api/create-booking.ts
└── hooks/useAvailableSlots.ts
```
