import { type Locator, type Page } from '@playwright/test';

export class BlogPage {
  readonly page: Page;
  readonly heading: Locator;
  readonly featuredArticleHeading: Locator;
  readonly contactHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.getByRole('heading', { level: 1, name: 'Blog' });
    this.featuredArticleHeading = page.getByRole('heading', {
      level: 2,
      name: /Predictive Analytics in Marketing/i,
    });
    this.contactHeading = page.getByRole('heading', { level: 2, name: "Let's Talk" });
  }

  async goto(): Promise<void> {
    await this.page.goto('/blog');
  }
}
