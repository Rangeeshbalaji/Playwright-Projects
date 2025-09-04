const {test,expect} = require('@playwright/test')


test ('First Playwright Test', async ({page}) =>
{
 const productName = "Nexus 6";
  const product = await page.locator(".card-title")
  const value = page.locator(".card-title");
  await page.goto("https://www.demoblaze.com/")
 await page.locator("#login2").click();
  await page.locator("#loginusername").fill("rolex27@gmail.com");
  await page.locator("#loginpassword").fill("Rolex@27");
  await page.locator("(//button[@class='btn btn-primary'])[3]").click();
  //await page.waitForLoadState('networkidle');
  await page.locator(".card-title a").nth(0).waitFor();
   const titles = await page.locator(".card-title a").allTextContents();
   console.log(titles);
   const count = await product.count();
   for( let i=0; i<count; ++i){
   if(await product.nth(i).locator("a").textContent() == productName) {

    await product.nth(i).locator("a").click();
    await page.locator("text = Add to cart").click();
    break;
   }
}
await page.once('dialog', async dialog => {
console.log("Popup message:", dialog.message());
  await dialog.accept();  // clicks OK
});
await page.locator("#cartur").click();
await page.locator("#tbodyid").waitFor();

await expect(page.getByRole('cell', { name: 'Nexus 6' }).first()).toBeVisible();

await page.getByRole('button', { name: 'Place Order' }).click();
await page.locator("#name").fill("Test User");
await page.locator("#country").fill("UK");
await page.locator("#city").fill("London");
await page.locator("#card").fill("1234567812345678");
await page.locator("#month").fill("12");
await page.locator("#year").fill("2030");
await page.getByRole('button', { name: 'Purchase' }).click();

});
