import { test, expect } from '@playwright/test';

test('starter page loads with its main heading', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await expect(page).toHaveTitle(/Gil/);
});

test('main action navigates to its destination', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'איך מתחילים' }).click();
  await expect(page.locator('#start')).toBeInViewport();
});

test('no horizontal overflow or uncaught page errors', async ({ page }) => {
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  await page.goto('/');
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1
  );
  expect(overflow).toBe(false);
  expect(errors).toEqual([]);
});
