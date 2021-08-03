//var require: NodeRequire;

const puppeteer = require('puppeteer')
async function scrapeProduct(url){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [elementImage] = await page.$x('//*[@id="post-126247"]/div/p[1]/img');
    const sourceAttribube = await elementImage.getProperty('sourceAttribube');
    const sourceText = await sourceAttribube.jsonValue();

   console.log({sourceText});
   browser.close();    
}
scrapeProduct('https://www.geeksforgeeks.org/java/');
























