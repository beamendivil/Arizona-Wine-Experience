const { test, expect } = require('@playwright/test');

test.describe('Arizona Wine Experience critical flows', () => {
    test('loads the homepage and navigates to experiences', async ({ page }) => {
        await page.goto('/');

        await expect(page).toHaveTitle(/Arizona Wine Experience/);
        await expect(
            page.locator('h1').filter({ hasText: "Discover Arizona's Hidden Wine Country" })
        ).toBeVisible();

        await page.getByRole('link', { name: 'Experiences' }).first().click();
        await expect(page).toHaveURL(/experiences\.html$/);
        await expect(page.getByRole('heading', { name: 'Wine Tasting Experiences' })).toBeVisible();
    });

    test('filters food pairings by selected wine', async ({ page }) => {
        await page.goto('/pairing.html');

        await page.locator('[data-wine="tempranillo"]').click();

        await expect(page.getByText('Mesquite-Grilled Steak')).toBeVisible();
        await expect(page.getByText('Aged Cheddar')).toBeVisible();
        await expect(page.getByText('Grilled Seafood')).toBeHidden();
    });

    test('opens available booking times from the generated calendar', async ({ page }) => {
        await page.goto('/experiences.html');

        await page.locator('#booking-calendar [data-date]').first().click();

        await expect(page.getByText(/Available Times/)).toBeVisible();
        await expect(page.getByRole('button', { name: /Private Tasting/ })).toBeVisible();
    });

    test('runs a Wine 101 module quiz and persists completion', async ({ page }) => {
        await page.goto('/wine-101.html');

        await page.locator('[data-module="wine-basics"]').click();
        await expect(page.locator('#course-player')).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Welcome to Wine 101' })).toBeVisible();

        await page.getByRole('button', { name: 'Next', exact: true }).click();
        await expect(
            page.getByRole('heading', { name: 'The 5 Structural Components' })
        ).toBeVisible();

        await page.getByRole('button', { name: 'Next', exact: true }).click();
        await page.getByRole('button', { name: 'Tannin' }).click();
        await expect(page.locator('#quiz-result')).toContainText('Correct!');

        await page.getByRole('button', { name: 'Complete Module' }).click();
        await expect(page.getByRole('heading', { name: 'Module Complete!' })).toBeVisible();

        const progress = await page.evaluate(() => localStorage.getItem('wine101_progress'));
        expect(progress).toContain('"wine-basics":true');
    });
});
