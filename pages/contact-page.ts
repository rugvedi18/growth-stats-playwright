import { type Locator, type Page } from '@playwright/test';

export class ContactPage {
  readonly page: Page;
  readonly heading: Locator;
  readonly subheading: Locator;
  readonly nameField: Locator;
  readonly phoneField: Locator;
  readonly emailField: Locator;
  readonly messageField: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.getByRole('heading', { level: 1, name: 'Contact Us' });
    this.subheading = page.getByRole('heading', { level: 2, name: 'Get in Touch' });
    this.nameField = page.getByLabel('Name');
    this.phoneField = page.getByLabel('Phone Number');
    this.emailField = page.getByLabel('Email');
    this.messageField = page.getByLabel('Message');
    this.submitButton = page.getByRole('button', { name: 'Submit' });
  }

  async goto(): Promise<void> {
    await this.page.goto('/contact');
  }
}
