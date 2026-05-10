import { type Locator, type Page, expect } from '@playwright/test';

export class BlogPage {
  readonly page: Page;
  readonly heading: Locator;
  readonly featuredArticleHeading: Locator;
  readonly contactHeading: Locator;
  readonly allFilterButton: Locator;
  readonly seoFilterButton: Locator;
  readonly seoBlogLabel: Locator;

  constructor(page: Page) {
    this.page = page;
    this.contactHeading = page.getByRole('heading', { level: 2, name: "Let's Talk" });
    this.heading = page.getByRole('heading', { level: 1, name: 'Blog' });
    this.featuredArticleHeading = page.getByRole('heading', {
      level: 2,
      name: /Predictive Analytics in Marketing/i,
    });
    this.allFilterButton = page.getByRole('button', { name: 'All', exact: true });
    this.seoFilterButton = page.getByRole('button', { name: 'SEO', exact: true });
    this.seoBlogLabel = page.locator('span[data-slot="badge"]').filter({ hasText: 'SEO' });
  }

  async goto(): Promise<void> {
    await this.page.goto('/blog');
  }

  async clickAllFilter(): Promise<void> {
    await this.allFilterButton.click();
  }

  async clickSeoFilter(): Promise<void> {
    await this.seoFilterButton.click();
  }

  async verifySeoBlogLabelVisible(): Promise<void> {
    await expect(this.seoBlogLabel).toBeVisible();
  }
}
