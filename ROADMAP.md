# Roadmap

This roadmap converts the current static portfolio site into a more product-like front-end project over time.

## Next

- Add screenshots to the README after deployment is confirmed.
- Add Lighthouse and axe accessibility audit artifacts.
- Replace placeholder remote images with optimized local assets and documented image sizes.
- Add browser-level smoke tests for navigation, pairing selection, booking modal, and Wine 101 progress.

## Planned Product Work

- Move repeated nav/footer markup into a build-time template or lightweight component system.
- Extract interaction modules from `main.js` into smaller files with clearer ownership.
- Replace mock calendar availability with a JSON data source.
- Persist pairing favorites and Wine 101 progress in a structured local data model.
- Add form validation for booking fields and clear success/error states.

## Stretch Goals

- Add a simple API layer for wineries, experiences, and availability.
- Add account-backed wine journal entries.
- Add map integration for winery discovery.
- Add offline support for saved training progress and journal notes.
