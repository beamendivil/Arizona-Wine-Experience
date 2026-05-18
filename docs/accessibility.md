# Accessibility Notes

## Implemented

- Semantic page structure with `nav`, `section`, and `footer` landmarks.
- Descriptive alt text for local content images.
- Visible focus styles for links, buttons, form fields, and selects.
- Keyboard-focusable interactive controls.
- Reduced-motion CSS for users who prefer less animation.
- Form labels on booking fields.

## Verified Locally

- Static tests confirm all public pages load shared CSS and JS.
- Static tests confirm local links, local anchors, and local image assets resolve.
- Lint and formatting checks run locally and in CI.

## Known Gaps

- No automated axe or Lighthouse accessibility report is committed yet.
- Some icon-only social links still need accessible labels before production use.
- The carousel and animated regions need browser-level keyboard testing.
- Color contrast should be verified with tooling after the final palette is locked.

## Planned Verification

- Add `@axe-core/playwright` checks once Playwright is introduced.
- Capture Lighthouse accessibility and performance scores for the deployed site.
- Add keyboard smoke tests for nav, pairing cards, booking modal, and course player.
