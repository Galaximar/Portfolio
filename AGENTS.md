# AGENTS.md

## Project rules

- This project uses **pnpm**.
- Do not run `pnpm install`.
- Do not run `pnpm build`.

## Architecture

- Follow **Atomic Design** structure.
- Place components according to their responsibility:
  - `atoms`
  - `molecules`
  - `organisms`
  - `templates`
  - `pages`

## Styles

- Use **SCSS Modules**.
- Style files must use the format `ComponentName.module.scss`.
- Do not use generic global classes such as `container`, `card`, `wrapper`, `section`, or `button`.
- Import styles from the module and use `styles.className`.

## i18n

- All visible user-facing text must use **i18n**.
- Do not hardcode texts inside components.
- Every new or modified text must be added in both languages:
  - Spanish `es`
  - English `en`
- Before adding translations, check the existing i18n structure and follow the current key naming convention.
