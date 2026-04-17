import puppeteer from 'puppeteer';

// describe - для группировки тестов
describe('Page start', () => {
    let browser;
    let page;

    beforeEach( async () => {
        jest.setTimeout(10000);
        browser = await puppeteer.launch({ // конфигурация браузера
            headless: false,
            slowMo: 100,
            devtools: true
        });

        page = await browser.newPage();
    });

    test('page open', async () => {
        await page.goto('http://localhost:8080');

        await page.waitFor('body');
    });

    afterEach( async () => {
        await browser.close();
    });
});

