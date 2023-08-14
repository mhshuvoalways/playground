import puppeteer from "puppeteer";
import { setTimeout } from "timers/promises";
import PQueue from "p-queue";

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    // defaultViewport: { width: 1005, height: 1080 }, // by default 800*600
    userDataDir: "temporary",
  });

  // step 1
  const page = await browser.newPage();
  //   await page.goto("https://devconfbd.com");

  //   const guestElement = await page.waitForSelector("img[alt='guest']"); // wait for loading everything
  //   await guestElement.scrollIntoView()
  //   await setTimeout(1000);

  //   await guestElement.click("img[alt='guest']");
  //   await setTimeout(1000);

  //   await page.screenshot({ path: "devconfbdguest.png" });
  //   await setTimeout(1000);

  // step 2
  // await page.goto("https://duckduckgo.com", {
  //   waitUntil: "networkidle2",
  // });

  // await page.waitForSelector("#searchbox_input");
  // await page.type("#searchbox_input", "devconfbd");

  // await page.click(".searchbox_iconWrapper__suWUe");
  // await page.waitForSelector('[data-testid="result-title-a"]');
  // await page.screenshot({ path: "devconfbdguest.png" });

  // await browser.close();

  // step 3
  await page.goto("https://duckduckgo.com", {
    waitUntil: "networkidle2",
  });

  await page.waitForSelector("#searchbox_input");
  await page.type("#searchbox_input", "devconfbd");

  await page.click(".searchbox_iconWrapper__suWUe");
  await page.waitForSelector('[data-testid="result-title-a"]');
  await page.click('[data-testid="result-title-a"]');

  const sponsors = await page.evaluate(() => {
    return [...document.querySelectorAll(".supporter a")].map((el) => el.href);
  });
  console.log(sponsors);

  async function getLink(link) {
    const page = await browser.newPage();
    await page.goto(link, { waitUntil: "networkidle2" });
    const title = await page.title();
    const hostname = await page.evaluate(() => window.location.hostname);
    await page.screenshot({ path: `${hostname}.png` });
    const facebook = await page.evaluate(
      () => document.querySelector("a[href*=facebook]")?.href
    );
    console.log({ link, title, hostname, facebook });
    page.close();
  }

  const queue = new PQueue({ concurrency: 2 });

  for (let link of sponsors) {
    // await getLink(link);
    queue.add(() => getLink(link)).catch(console.log);
  }

  await queue.onEmpty();
  await browser.close();
})();
