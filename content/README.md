# Content ops guide

## Adding a virtual tour to a property

### Step 1 — Upload to Kuula

1. Go to [kuula.co](https://kuula.co) and log in to the Estate One Group account.
2. Click **Upload** → select your 360° photo (equirectangular JPG, minimum 6000 × 3000 px).
3. Set the post title to the property name (e.g. "Villa Aurora — Living Room").
4. Click **Publish**.
5. Open the published post. The URL looks like: `https://kuula.co/share/XXXXXXX`
   Copy the **7-character ID** at the end — that's everything after `/share/`.

### Step 2 — Add to the listing

Open `content/properties.ts` and find the property by `slug`. Add a `tour` field:

```ts
tour: { provider: 'kuula', id: 'XXXXXXX' },
```

Full example:

```ts
{
  id: 'villa-aurora',
  slug: 'villa-aurora',
  // ... other fields ...
  tour: { provider: 'kuula', id: 'XXXXXXX' },  // ← add this line
  features: ['oceanfront', 'pool'],
}
```

Optional fields on `tour`:

| Field | Type | Default | Notes |
|---|---|---|---|
| `id` | `string` | required | Share ID from Kuula URL |
| `provider` | `'kuula'` | required | Always `'kuula'` for now |
| `poster` | `string` | property cover | Full URL to override the poster image shown before the player loads |
| `autorotate` | `boolean` | `false` | Set to `true` to slowly spin the tour on load |

### Step 3 — Remove the placeholder

If the property had `// TODO: replace with the Kuula share id…` above it, delete that comment once you've added the real ID.

---

## Pending tours (properties without a tour)

Add a real Kuula ID to each of these once the photography is ready:

- `casa-del-mar`
- `continuum-sky`
- `banyan-house`
- `brickell-heights-24`
- `south-beach-residence`
- `wynwood-sky-loft`
- `palm-island-manor`
- `coral-gables-retreat`
- `aventura-circle`
- `grove-townhouse`
- `brickell-key-studio`
- `pinecrest-estate`
- `south-beach-mid-century`
- `key-biscayne-villa`
- `edgewater-tower`
- `the-grove-house`
- `miami-beach-terrace`
- `fort-lauderdale-canal`

If a property has no tour, the "Virtual tour" section simply does not appear on the listing page — no empty state, no error.
