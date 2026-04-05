import { expect, test } from '@fixtures/base-fixture';

test.describe('Growth Stats home page', () => {
  test('shows the hero content and primary CTA', async ({ homePage }) => {
    await homePage.goto();

    await expect(homePage.heroHeading).toBeVisible();
    await expect(homePage.heroSubheading).toBeVisible();
    await expect(homePage.letsWorkTogetherLink).toHaveAttribute('href', '/contact');
    await expect(homePage.servicesSectionHeading).toBeVisible();
  });

  test('opens the about and blog pages from the main navigation', async ({ homePage }) => {
    await homePage.goto();

    await homePage.aboutLink.click();
    await expect(homePage.page).toHaveURL(/\/about$/);
    await expect(homePage.page.getByRole('heading', { level: 1, name: /Learn About Growth Stats/i })).toBeVisible();

    await homePage.goto();
    await homePage.blogLink.click();
    await expect(homePage.page).toHaveURL(/\/blog$/);
    await expect(homePage.page.getByRole('heading', { level: 1, name: 'Blog' })).toBeVisible();
  });

  test('reaches the SEO service page from the homepage', async ({ homePage }) => {
    await homePage.goto();

    await homePage.seoServiceLink.click();

    await expect(homePage.page).toHaveURL(/\/search-engine-optimization$/);
    await expect(
      homePage.page.getByRole('heading', { level: 1, name: 'Search Engine Optimization' }),
    ).toBeVisible();
  });
});
