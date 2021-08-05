//import Puppeteer from 'puppeteer';
import  React from 'react'

const puppeteer = require('puppeteer')
async () => {
    
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    await page.goto('https://www.geeksforgeeks.org/java/');

    const [Image] = await page.$x('//*[@id="post-126247"]/div/p[1]/img');
    const sourceAttribube = await Image.getProperty('sourceAttribube');
    const Text = await sourceAttribube.jsonValue();

   console.log({Text});

   browser.close(); 
   //console.log(`Site HTML: ${$.html()}\n\n`)   
}
//fetchHTML('https://www.geeksforgeeks.org/java/')
























