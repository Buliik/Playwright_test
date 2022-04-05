import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

    // Go to https://www.seznam.cz/
    await page.goto('https://www.seznam.cz/');

    // Click text=Přihlásit >> nth=3
    const [page2] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator('text=Přihlásit').nth(3).click()
    ]);

    // Go to https://accounts.google.com/ServiceLogin?service=mail&passive=1209600&osid=1&continue=https://mail.google.com/mail/u/0/&followup=https://mail.google.com/mail/u/0/&emr=1
    await page.goto('https://accounts.google.com/ServiceLogin?service=mail&passive=1209600&osid=1&continue=https://mail.google.com/mail/u/0/&followup=https://mail.google.com/mail/u/0/&emr=1');

    // Go to https://accounts.google.com/signin/v2/identifier?service=mail&passive=1209600&osid=1&continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin
    await page.goto('https://accounts.google.com/signin/v2/identifier?service=mail&passive=1209600&osid=1&continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin');

    // Click [aria-label="E-mail nebo telefon"]
    await page.locator('[aria-label="E-mail nebo telefon"]').click();

});