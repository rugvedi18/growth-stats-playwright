# Growth Stats Playwright Tests

Playwright-based smoke coverage for the public [Growth Stats](https://www.growthstats.io/) website.

## Overview

This project is built from the reusable Playwright template and adapted for live checks against the Growth Stats marketing site. It focuses on stable smoke coverage for the main customer-facing routes, content sections, and contact form presence.

## What This Project Covers

- Homepage hero content and top-level navigation
- Contact page form visibility and field interaction
- Blog page rendering and featured content presence
- Services overview and key service routing
- Basic API-level route health checks

## Project Structure

```text
growth-stats-playwright/
├── .github/
│   └── workflows/
│       └── playwright.yml
├── config/
│   └── env.ts
├── fixtures/
│   └── base-fixture.ts
├── pages/
│   ├── blog-page.ts
│   ├── contact-page.ts
│   ├── home-page.ts
│   └── services-page.ts
├── test-data/
│   └── contact-form.json
├── tests/
│   ├── api/
│   │   └── site-health.spec.ts
│   └── smoke/
│       ├── contact.spec.ts
│       ├── content.spec.ts
│       └── home.spec.ts
├── .gitignore
├── package.json
├── playwright.config.ts
├── README.md
└── tsconfig.json
```

## Setup

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

## Run Tests

Run the full suite:

```bash
npm test
```

Run headed:

```bash
npm run test:headed
```

Run a specific file:

```bash
npx playwright test tests/smoke/home.spec.ts
```

Open the HTML report:

```bash
npm run report
```

## Environment

By default, the project runs against production:

```bash
https://www.growthstats.io
```

The base URL is managed in `config/env.ts`. You can override the environment with:

```bash
$env:TEST_ENV="production"
npm test
```

## Notes

- The contact form test fills fields but does not submit the form.
- The assertions are centered on visible content and route checks to keep the smoke suite stable.
- If the live site copy changes significantly, some text-based assertions may need to be updated.
