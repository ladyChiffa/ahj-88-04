import puppeteer from "puppeteer";

// describe - для группировки тестов
describe('Page start', () => {
    let browser;

    beforeEach( async () => {
        browser = await puppeteer.launch({ // конфигурация браузера
            headless: false,
            slowMo: 100,
            devtools: true
        });
    });

    test('test', () => {

    });
});

