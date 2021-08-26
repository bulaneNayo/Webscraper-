//required modules    
import cheerio from "cheerio";
import got from "got";
import PromptSync from "prompt-sync";
import puppeteer from "puppeteer";

async function scrapeData() {
  
  try {

      //prompts the user to enter the url of the website on the terminal
      const prompt =  PromptSync();
      let WebSite = prompt("State the website to scrape: ");  
  
      const browser = await puppeteer.launch();
      const page = await browser.newPage();    //Promise which resolves to a new Page object

      const url = WebSite; 
      await page.goto(url);  //Navigates to a URL 
  
      //Scrape the title of the page
      const h1 = await page.evaluate(
      () => document.querySelector("h1").textContent
      );

      //Displays the title of the page on the terminal
      console.log(h1);

      //Scrape image links from the page
        const images = await page.evaluate(() =>
        Array.from(document.querySelectorAll("img"))
        .map(logo =>logo.src)

        )

      //Desplay images links on the terminal 
      console.log(images);
      
      //Scrape all website links
      await got(url).then(response => {
      const $ = cheerio.load(response.body);
    
      $('a').each((i, link) => {
        const href = link.attribs.href; 
        
        //Display links on the terminal
        console.log(href); 
  
  })
      //Closes browser with all the pages opened.  
      browser.close();
})
}     catch (error) {
      console.error(error);
}
}     
// Invoke the above function
scrapeData();
