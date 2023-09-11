import puppeteer from 'puppeteer-extra'
import stealth from 'puppeteer-extra-plugin-stealth'

puppeteer.use(stealth())

const main = async () => {
    const browser = await puppeteer.launch({
        headless: false
    })

    const page = await browser.newPage()
    await page.goto('https://www.netshoes.com.br/tenis-adidas-runfalcon-30-masculino-preto+branco-FB8-4501-026')
    const content = await page.content()
    console.log(content);
}

main()