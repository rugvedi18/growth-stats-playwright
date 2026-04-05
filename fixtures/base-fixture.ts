import { test as base } from '@playwright/test';
import { BlogPage } from '@pages/blog-page';
import { ContactPage } from '@pages/contact-page';
import { HomePage } from '@pages/home-page';
import { ServicesPage } from '@pages/services-page';

type AppFixtures = {
  blogPage: BlogPage;
  contactPage: ContactPage;
  homePage: HomePage;
  servicesPage: ServicesPage;
};

export const test = base.extend<AppFixtures>({
  blogPage: async ({ page }, use) => {
    await use(new BlogPage(page));
  },
  contactPage: async ({ page }, use) => {
    await use(new ContactPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  servicesPage: async ({ page }, use) => {
    await use(new ServicesPage(page));
  },
});

export { expect } from '@playwright/test';
