/**
 * Thin analytics wrapper.
 *
 * In development, events are logged to the console.
 * In production, swap the `send` body for your provider (GA4, Plausible, PostHog, etc.)
 * without touching any callsite.
 */

type EventName = "virtual_tour_opened";

interface EventPayload {
  virtual_tour_opened: {
    property_id: string;
    provider: string;
  };
}

function send<T extends EventName>(name: T, payload: EventPayload[T]): void {
  if (process.env.NODE_ENV !== "production") {
    console.log(`[analytics] ${name}`, payload);
    return;
  }

  // TODO: wire up your analytics provider here.
  // GA4 example:
  //   window.gtag?.("event", name, payload);
  // Plausible example:
  //   window.plausible?.(name, { props: payload });
}

export function trackVirtualTourOpened(
  propertyId: string,
  provider: string,
): void {
  send("virtual_tour_opened", { property_id: propertyId, provider });
}
