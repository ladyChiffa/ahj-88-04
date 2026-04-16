import puppeteer from "puppeteer";

// describe - для группировки тестов
describe('Page start', () => {
    let browser;
    let page;

    beforeEach( async () => {
        browser = await puppeteer.launch({ // конфигурация браузера
            headless: false,
            slowMo: 100,
            devtools: true
        });

        page = await browser.newPage();
    });

    test('test', async () => {
        page.goto('http://localhost:9000');
    });
});

