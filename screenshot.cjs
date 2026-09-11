const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    try {
        const browser = await puppeteer.launch({
            executablePath: 'C:\\Users\\remom\\.cache\\puppeteer\\chrome\\win64-152.0.7977.75\\chrome-win64\\chrome.exe'
        });
        const page = await browser.newPage();

        await page.setViewport({ width: 1440, height: 900 });

        if (!fs.existsSync('./public/screenshots')) {
            fs.mkdirSync('./public/screenshots');
        }

        console.log('Taking Home page screenshot...');
        await page.goto('http://localhost:5174/', { waitUntil: 'networkidle2' });
        await page.screenshot({ path: './public/screenshots/home.png', fullPage: true });

        console.log('Taking Courses page screenshot...');
        await page.goto('http://localhost:5174/courses', { waitUntil: 'networkidle2' });
        await page.screenshot({ path: './public/screenshots/courses.png', fullPage: true });

        console.log('Taking Dashboard page screenshot...');
        await page.goto('http://localhost:5174/student-dashboard', { waitUntil: 'networkidle2' });
        await page.screenshot({ path: './public/screenshots/dashboard.png', fullPage: true });

        await browser.close();
        console.log('Screenshots taken successfully.');
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
})();
