const fs = require('fs');
const http = require('http');
const path = require('path');

const content = require('./router/content');
const homePage = require('./router/home-page');
const aboutPage = require('./router/about-page');
const pricesPage = require('./router/prices-page');
const hiwPage = require('./router/hiw-page');
const discountPage = require('./router/discount-page');
const orderPage = require('./router/order-page');
const faqPage = require('./router/faq-page');
const testimonialsPage = require('./router/testimonials-page');
const blogPage = require('./router/blog-page');
const samplesPage = require('./router/samples-page');
const loginPage = require('./router/login-page');
const page404 = require('./router/page-404');

function parseBody(body) {
    const result = {};
    const keyValuePairs = body.split('&');

    keyValuePairs.forEach(keyValue => {
        const [key, value] = keyValue.split('=');
        result[key] = value;
    });
    return result;
}

http.createServer((req, res) => {
    if (req.method === 'GET') {
        if (req.url.match(/\.(html|css|js|png|jpeg|jpg|gif|svg|woff|woff2|otf|ttf|eot)$/)) {
            content(req, res);
        } else if (req.url === '/') {
            homePage(req, res);
        } else if (req.url === '/about') {
            aboutPage(req, res);
        } else if (req.url === '/prices') {
            pricesPage(req, res);
        } else if (req.url === '/how-it-works') {
            hiwPage(req, res);
        } else if (req.url === '/discount') {
            discountPage(req, res);
        } else if (req.url === '/order-form') {
            orderPage(req, res);
        } else if (req.url === '/faq') {
            faqPage(req, res);
        } else if (req.url === '/testimonials') {
            testimonialsPage(req, res);
        } else if (req.url === '/blog') {
            blogPage(req, res);
        } else if (req.url === '/samples') {
            samplesPage(req, res);
        } else if (req.url === '/login') {
            loginPage(req, res);
        } else {
            page404(req, res);
        }
    } else if (req.method === 'POST') {
        let body = '';
        req.setEncoding('utf8');

        req.on('data', data => {
            console.log(data);
            body += data;
        });

        req.on('end', () => {
            const data = parseBody(body);

            res.writeHead(200, {
                'Content-Type': 'application/json'
            });

            let json = JSON.stringify(data);

            fs.writeFile('file.json', json, error => {
                if (error) {
                    console.log(error.message);
                    return;
                }
                console.log('Json is added');
            });
            res.end(json);
        });
    }
}).listen(9000, 'localhost', () => {
    console.log('Server is alive!');
});