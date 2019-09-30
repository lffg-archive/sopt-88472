const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch();

    // Abrimos uma nova página:
    const page = await browser.newPage();
    await page.goto('https://pt.stackoverflow.com/q/88472/69296');

    // Recuperamos o elemento que possui o autor da página, em seguida, o texto.
    const element = await page.$('div.user-details > a');
    const text = await page.evaluate((el) => el.textContent, element);

    console.log(`Autor da pergunta: ${text}.`);

    await browser.close();
  } catch (error) {
    console.error(error.message);
  }
})();
