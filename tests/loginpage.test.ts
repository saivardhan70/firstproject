import test, { expect } from "@playwright/test";
import { LoginPage } from "../PageRepository/LoginPage";
import { LoginPageObjects } from "../PageobjectRepository/LoginPageObjects";
import { Data } from "../Data/LoginData";


test.describe('Login Page Tests', () => {               //Login Test cases
    test.beforeEach(async ({ page, baseURL }) => {
        await page.goto(`${baseURL}`);
    });

    test('Login with invalid Credentials', async ({ page }) => {    //Invalid Login case
        const loginpage = new LoginPage(page);
        await loginpage.login(Data.InvalidData);
        await loginpage.loginButton();
        await expect(page.locator(`//span[@id ='error-element-password']`)).toBeVisible();
    });

    test('Login with Correct Credentials', async ({ page }) => {    // Valid Login case
        const loginpage = new LoginPage(page);
        await loginpage.login(Data.validData);
        await loginpage.loginButton();
        await expect(page.locator(`//h1[@class = 'text-heading mb-2']`)).toBeVisible();

    });
});