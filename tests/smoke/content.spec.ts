import { expect, test } from '@fixtures/base-fixture';

test.describe('Growth Stats content pages', () => {
  test('loads the blog page with a featured article', async ({ blogPage }) => {
    await blogPage.goto();

    await expect(blogPage.heading).toBeVisible();
    await expect(blogPage.featuredArticleHeading).toBeVisible();
    await expect(blogPage.contactHeading).toBeVisible();
  });

  test('loads the services overview page', async ({ servicesPage }) => {
    await servicesPage.goto();

    await expect(servicesPage.heading).toBeVisible();
    await expect(servicesPage.seoHeading).toBeVisible();
    await expect(servicesPage.paidAdvertisingLink).toHaveAttribute('href', '/paid-advertising');
  });
});
