import { type Locator, type Page } from '@playwright/test';

export class ServicesPage {
  readonly page: Page;
  readonly heading: Locator;
  readonly seoHeading: Locator;
  readonly paidAdvertisingLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.getByRole('heading', { level: 1, name: 'Our Services' });
    this.seoHeading = page.getByRole('heading', { level: 2, name: 'SEO' });
    this.paidAdvertisingLink = page.getByRole('link', { name: 'Paid Advertising' }).first();
  }

  async goto(): Promise<void> {
    await this.page.goto('/services');
  }
}
