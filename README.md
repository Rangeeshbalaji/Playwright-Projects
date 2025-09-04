# End to End Testing Of E-Commerce website Using Playwright

This repository contains an **end-to-end automation test** for the [Demoblaze](https://www.demoblaze.com/) e-commerce website using **Playwright**.


## 📝 Test Overview

The test script performs the following actions:

1. Navigate to the Demoblaze homepage.
2. Log in with valid user credentials.
3. Search for a product (`Nexus 6`) in the product list.
4. Add the product to the cart.
5. Handle the confirmation popup.
6. Navigate to the cart and verify the product is present.
7. Place an order by filling in the purchase form.
8. Complete the purchase.

## 💻 Technologies & Tools

- **Programming Language:** JavaScript/Node.js  
- **Automation Framework:** Playwright  
- **Test Runner:** @playwright/test  
- **Browser Support:** Chromium, Firefox, WebKit  

## ⚙️ Setup & Installation

Follow these steps to set up Playwright for this project:

1. **Clone the repository**  

```bash
git clone https://github.com/Rangeeshbalaji/Playwright-Projects MY_REPO
cd MY_REPO
```

2. **Install Node.js dependencies**  

Make sure you have Node.js installed (v14+ recommended), then run:

```bash
npm install
```

This installs all required packages listed in `package.json`.

3. **Install Playwright browsers**  

```bash
npx playwright install
```

This downloads the necessary browsers (Chromium, Firefox, WebKit) for running tests.

4. **Run the tests**  

```bash
npx playwright test
```

5. **(Optional) Open Playwright Test Runner GUI**  

```bash
npx playwright test --ui
```

This lets you visually debug and run tests interactively.

## 🧪 Test Script Example

```javascript
const { test, expect } = require('@playwright/test');

test('First Playwright Test', async ({ page }) => {
  const productName = "Nexus 6";
  await page.goto("https://www.demoblaze.com/");

  // Login
  await page.locator("#login2").click();
  await page.locator("#loginusername").fill("rolex27@gmail.com");
  await page.locator("#loginpassword").fill("Rolex@27");
  await page.locator("(//button[@class='btn btn-primary'])[3]").click();

  // Add product to cart
  const product = page.locator(".card-title");
  const count = await product.count();
  for (let i = 0; i < count; ++i) {
    if (await product.nth(i).locator("a").textContent() == productName) {
      await product.nth(i).locator("a").click();
      await page.locator("text=Add to cart").click();
      break;
    }
  }

  // Handle popup
  await page.once('dialog', async dialog => {
    console.log("Popup message:", dialog.message());
    await dialog.accept();
  });

  // Verify product in cart and complete purchase
  await page.locator("#cartur").click();
  await page.locator("#tbodyid").waitFor();
  await expect(page.getByRole('cell', { name: 'Nexus 6' }).first()).toBeVisible();
});
```

---

## 📌 Notes

- Ensure your login credentials are valid.  
- Update the product name in the script if testing with a different product.  
- Compatible with **headless** or **headed** browser execution.  

---

## 🌐 References

[Playwright Documentation](https://playwright.dev/)

[Demoblaze E-Commerce Site](https://www.demoblaze.com/index.html)




