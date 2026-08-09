const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  let total = 0;

  for (let seed = 9; seed <= 18; seed++) {
    await page.goto(
      `https://sanand0.github.io/tdsdata/js_table/?seed=${seed}`,
      { waitUntil: "networkidle" }
    );

    const numbers = await page.locator("table td").allTextContents();

    const sum = numbers.reduce((a, x) => a + Number(x.trim()), 0);

    console.log(`Seed ${seed} sum = ${sum}`);
    total += sum;
  }

console.log(`SUM: ${total}`);
  
  await browser.close();
})();
