import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test('login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('validUsername', 'validPassword');
  await expect(page).toHaveURL('/home');
});

test('login with invalid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('invalidUsername', 'invalidPassword');
  const errorMessage = await loginPage.getErrorMessage();
  await expect(errorMessage).toBe('Invalid username or password.');
});