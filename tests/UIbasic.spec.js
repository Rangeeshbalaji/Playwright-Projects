const {test,expect} = require('@playwright/test')


test ('First Playwright Test', async ({page}) =>
{
  //const context = await browser.newContext();
  //const page = await context.newPage();
  const value = page.locator(".card-body b");
  await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
  await page.locator("input[type='email']").fill("Rolex27@gmail.com");
  await page.locator("#userPassword").fill("Rolex@28");
  await page.locator("input[name='login']").click();
  await page.waitForLoadState('networkidle');
  const title = await value.allTextContents();
  const alltitles = await value.nth(1).textContent();
  console.log(title)
  console.log(alltitles);

});

