import { expect, test } from '@playwright/test';

test.describe('Growth Stats site health', () => {
  test('core routes respond successfully', async ({ request, baseURL }) => {
    const routes = ['/', '/about', '/contact', '/blog', '/services'];

    for (const route of routes) {
      const response = await request.get(`${baseURL}${route}`);
      expect(response.ok(), `Expected ${route} to respond with 2xx`).toBeTruthy();
    }
  });
});
