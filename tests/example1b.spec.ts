import {test, expect } from '@playwright/test';

test('has title', async ({page}) => {
    await page.goto('https://playwright.dev/');

    // Expect a title "to contain" a substring
    await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({page}) => {
    await page.goto('https://playwright.dev/');

    // Click to get started link.
    console.log("I know this is erroneous.");

    await page.getByRole('link', {name: 'Get started Now'}).click();
    
    // Expects page to have a heading with the name of installation
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
})


// Test Hooks
test.describe('navigation', () => {
    test.beforeEach(async ({page}) => {
        // Go to the starting url before each test
        await page.goto('https://playwright.dev/')
    });

    test('main navigation', async ({ page }) => {
        // Assertions use the expeclt API.
        await expect(page).toHaveURL('https://playwright.dev/');

    });
})