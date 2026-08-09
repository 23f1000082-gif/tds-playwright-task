const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  let total = 0;

  for (let seed = 9; seed <= 18; seed++) {
    const url = `https://sanand0.github.io/tdsdata/js_table/?seed=${seed}`;

    await page.goto(url, { waitUntil: "networkidle" });

    const values = await page.locator("table td").allTextContents();

    const sum = values.reduce((acc, value) => {
      return acc + Number(value.trim());
    }, 0);

    console.log(`Seed ${seed}: ${sum}`);
    total += sum;
  }

  console.log(`TOTAL SUM: ${total}`);

  await browser.close();
})();
