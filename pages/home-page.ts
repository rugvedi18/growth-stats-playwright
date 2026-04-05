import { type Locator, type Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly heroHeading: Locator;
  readonly heroSubheading: Locator;
  readonly aboutLink: Locator;
  readonly blogLink: Locator;
  readonly contactLink: Locator;
  readonly letsWorkTogetherLink: Locator;
  readonly servicesSectionHeading: Locator;
  readonly seoServiceLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heroHeading = page.getByRole('heading', { level: 1, name: 'Online Marketing' });
    this.heroSubheading = page.getByRole('heading', { level: 2, name: 'For Rapid Growth' });
    this.aboutLink = page.getByRole('link', { name: 'About' }).first();
    this.blogLink = page.getByRole('link', { name: 'Blog' }).first();
    this.contactLink = page.getByRole('link', { name: "Let's Talk" }).first();
    this.letsWorkTogetherLink = page.getByRole('link', { name: "Let's Work Together" });
    this.servicesSectionHeading = page.getByRole('heading', {
      level: 2,
      name: 'Leading Platform for Business‑Driven Marketing Services.',
    });
    this.seoServiceLink = page.getByRole('link', { name: 'Search Engine Optimization' }).first();
  }

  async goto(): Promise<void> {
    await this.page.goto('/');
  }
}
