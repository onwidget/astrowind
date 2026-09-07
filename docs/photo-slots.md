# Photo slots

The site ships without waiting on photography. Every place a real photo belongs
already has a designed, brand-native stand-in, and each one swaps to the real
image without touching markup. This file is the map: what goes where, at what
size, and what to do with the file once you have it.

## Status

| Slot                       | Pages                    | Right now                                 |
| -------------------------- | ------------------------ | ----------------------------------------- |
| Orlando — portrait         | `/`, `/team`, `/orlando` | ✅ Real photo (`orlando.webp`)            |
| Diana — portrait           | `/`, `/team`, `/diana`   | Mycelium glyph (`MemberGlyph.astro`)      |
| Founders — candid together | `/about`, story section  | Network diagram (`PartnersDiagram.astro`) |

## 1. Member portraits

**Where:** the home page core cards, the `/team` core rows, and the profile hero
on `/<slug>`. All three read the same field, so one change updates every page.

**How to add one:**

1. Drop the file in `src/assets/images/` (WebP, exported at ~1200×1500).
2. In `src/data/team.ts`, import it and set it on that member's `photo`:

   ```ts
   import dianaPhoto from '~/assets/images/diana.webp';
   // …
   photo: {
     brief: '…keep the brief, it documents the art direction…',
     image: dianaPhoto,
   },
   ```

That's it — `MemberPhoto.astro` takes over from `MemberGlyph.astro` on all three
pages automatically.

**Art direction** (kept per member in the `photo.brief` field of `team.ts`):

- Diana: half-body portrait, confident and approachable — dark or neutral
  background, soft natural side light, looking at camera. Plain professional
  top, no corporate stiffness. Minimum 1200×1500px, vertical.
- Orlando: half-body portrait, candid and relaxed — dark or neutral background,
  soft natural side light, slight smile. No suit; plain dark shirt. Minimum
  1200×1500px, vertical.

Portraits are rendered through `MemberPhoto.astro`, which applies a dark-green
wash so any photo lands in the palette. Crops used: `16/10` (home), `4/3` →
auto (team), `4/5` (profile hero) — keep the subject centred with headroom so
all three crops survive.

## 2. Founders candid — `/about`

**Where:** `src/pages/about.astro`, right column of the story section.

**Currently:** `PartnersDiagram.astro` — Orlando and Diana as two connected hubs
in the mycelium network, plus a short legend. It carries its own meaning, so
replacing it is optional, not owed.

**If you replace it:** horizontal, minimum 1600×1200px. Orlando and Diana
working together — laptops open, mid-conversation, natural light, informal
setting (studio or café). Should feel real, not staged. Swap the
`<PartnersDiagram />` line for an `<Image>` in the same grid cell.

## How the stand-ins work

`src/utils/glyph.ts` generates a deterministic node network from a seed string
(the member slug), so each person gets their own mycelium pattern and it stays
identical across builds. `MemberGlyph.astro` frames it with the member's
monogram; `PartnersDiagram.astro` uses the same generator behind two
hand-placed, labelled hubs.

Nothing here says "placeholder" on the page — if photos never arrive, the site
still reads as finished.
