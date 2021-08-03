// TODO: write this file!
var cheerio = require('cheerio');
var request = require('request');
var fs = require('fs');
var jsonData =[];

request('https://www.pluralsight.com/blog/software-development/10-ways-to-write-cleaner-code',
    function(error,resonse,html){
        if(!errorr && resonse.statusCode == 200 ){
            var $ = cheerio.load(html);
            var allData = $('p.row');

            allData.each(function(index,element){
                var tittle = $(element).find('a.hdrlnk').text();
                var image = $(element).find('a.hdrlnk').image();
                var link = 'https://www.pluralsight.com'

                var data ={
                    tittle:tittle,
                    image:image,
                    link:link

                }
                jsonData.push(data);
            });
        }
    }
    
    );