import { expect, test } from '@fixtures/base-fixture';
import contactFormData from '@test-data/contact-form.json';

test.describe('Growth Stats contact page', () => {
  test('renders the contact form fields', async ({ contactPage }) => {
    await contactPage.goto();

    await expect(contactPage.heading).toBeVisible();
    await expect(contactPage.subheading).toBeVisible();
    await expect(contactPage.nameField).toBeVisible();
    await expect(contactPage.phoneField).toBeVisible();
    await expect(contactPage.emailField).toBeVisible();
    await expect(contactPage.messageField).toBeVisible();
    await expect(contactPage.submitButton).toBeVisible();
  });

  test('accepts input in the contact form without submitting', async ({ contactPage }) => {
    await contactPage.goto();

    await contactPage.nameField.fill(contactFormData.name);
    await contactPage.phoneField.fill(contactFormData.phoneNumber);
    await contactPage.emailField.fill(contactFormData.email);
    await contactPage.messageField.fill(contactFormData.message);

    await expect(contactPage.nameField).toHaveValue(contactFormData.name);
    await expect(contactPage.phoneField).toHaveValue(contactFormData.phoneNumber);
    await expect(contactPage.emailField).toHaveValue(contactFormData.email);
    await expect(contactPage.messageField).toHaveValue(contactFormData.message);
  });
});
