import { expect, test } from '@fixtures/base-fixture';

test.describe('Growth Stats blog page', () => {
  test.beforeEach(async ({ blogPage }) => {
    await blogPage.goto();
  });

  test('renders the blog page with a featured article and contact section', async ({ blogPage }) => {
    await expect(blogPage.heading).toBeVisible();
    await expect(blogPage.featuredArticleHeading).toBeVisible();
    await expect(blogPage.contactHeading).toBeVisible();
  });

  test('filters articles by category', async ({ blogPage }) => {
    await blogPage.clickAllFilter();

    await blogPage.clickSeoFilter();
    await expect(blogPage.seoBlogLabel.first()).toBeVisible();
  });
});