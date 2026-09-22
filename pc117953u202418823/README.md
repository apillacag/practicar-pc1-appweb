# Wikipedia President Registry (pc117953u202418823)

A web application that helps users promote Wikipedia's encyclopedia of United States presidents by browsing a full, illustrated registry of every president, built with a focus on Domain-Driven Design (DDD), layered/component-based architecture and Clean Architecture principles.

## Features

- **President Registry**: Browse every U.S. president in a responsive, two-columns-per-row card grid.
- **Rich President Cards**: Each card shows the president's photo, name, years in office, presidential order, and vice presidents (rendered as a PrimeVue list).
- **More Information**: Open the president's English Wikipedia article in a new tab.
- **Share Information**: Share a president via the native Web Share API, or copy the link to the clipboard when sharing isn't supported, with toast confirmation.
- **Multi-language Support**: Seamlessly switch between English (default) and Spanish for every label in the interface.
- **Responsive Design**: Optimized for different screen sizes using PrimeFlex.
- **Accessible UI**: ARIA attributes on interactive and informational elements.

## Technology Stack

- **Framework**: Vue 3.5 (Composition API)
- **Build Tool**: Vite
- **UI Components**: PrimeVue (Material theme) + PrimeIcons
- **CSS Utility**: PrimeFlex
- **HTTP Client**: Axios
- **Internationalization**: vue-i18n
- **State Management**: Reactive Stores (Composition API)

## Dependencies

- `vue`, `vue-i18n`
- `primevue`, `@primeuix/themes`, `primeicons`, `primeflex`
- `axios`
- Dev: `vite`, `@vitejs/plugin-vue`

## Prerequisites

- Node.js (LTS recommended)
- npm

## Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```
2. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open the local URL printed by Vite (usually `http://localhost:5173`).
3. **Build for production**:
   ```bash
   npm run build
   ```
4. **Preview the production build**:
   ```bash
   npm run preview
   ```

## Environment Variables

Vite reads configuration from `.env.development` (used by `npm run dev`) and `.env.production` (used by `npm run build`), both included in this project:

```bash
VITE_PRESIDENTS_API_URL=https://api.sampleapis.com/presidents
VITE_PRESIDENTS_ENDPOINT_PATH=/presidents
VITE_LOGO_API_URL=https://img.logo.dev
VITE_LOGO_PUBLISHABLE_API_KEY=your_logo_dev_publishable_key
VITE_WIKIPEDIA_DOMAIN=wikipedia.org
VITE_PRIME_UI_LICENSE_KEY=your_prime_ui_license_key
```

## Project Structure

```text
src/
  presidents/
    application/        # reactive store and use-case orchestration
    domain/model/        # President entity
    infrastructure/      # API client, resources typedefs, and assembler
    presentation/         # president-related UI components
  shared/
    domain/model/         # shared Value Objects (Url, StringValidator)
    infrastructure/      # shared API helpers (Logo.dev) and error interceptor
    presentation/          # shared layout/footer/language components
  locales/                # i18n dictionaries (en, es)
```

## Architecture

The codebase follows **Domain-Driven Design (DDD)** with a **layered and component-based architecture**, organized around two sub-domains: `presidents` (core business capability) and `shared` (cross-cutting UI and infrastructure concerns).

- **Domain Layer**: The `President` Entity and shared Value Objects (`Url`, `StringValidator`).
- **Application Layer**: `presidentsStore`, an Application Service that orchestrates the President Registry use case.
- **Infrastructure Layer**: `PresidentsApi` (Resource adapter), `PresidentAssembler` (Assembler/Data Mapper pattern), `LogoDevApi`, and a centralized Axios error interceptor.
- **Presentation Layer**: Vue.js Single File Components (`Layout`, `PresidentList`, `PresidentItem`, `LanguageSwitcher`, `FooterContent`, `UnavailableContent`).

### Design Patterns

- **Resource**: `PresidentResource` / `PresidentsResponse` JSDoc typedefs describe the raw external API shape.
- **Assembler**: `PresidentAssembler` maps `PresidentResource` objects into `President` domain entities, keeping any external naming/shape mismatches out of the domain.
- **Request/Response**: `PresidentsApi` isolates the Axios request/response cycle from the rest of the application.

## Internationalization

- **i18n setup**: `src/i18n.js`
- **Dictionaries**: `src/locales/en.json` (default), `src/locales/es.json`

## Out of Scope

- Sidebar navigation
- Client-side routing

## Attribution

This app uses data from [Sample APIs — Presidents](https://sampleapis.com/api-list/presidents) and branding services from [Logo.dev](https://logo.dev).

## Author

Andy Pillaca Gonzales (u202418823)

## License

MIT
