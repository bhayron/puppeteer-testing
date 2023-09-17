import puppeteer from 'puppeteer-extra'
import stealth from 'puppeteer-extra-plugin-stealth'

puppeteer.use(stealth())

const main = async () => {
    const browser = await puppeteer.launch({
        headless: false
    })
    
    const page = await browser.newPage()
    await page.goto('https://www.netshoes.com.br/lst/mi-mais-vendidos?mi=hm_sc_f1_mais_vendidos_070923-mas-00&psn=Banner_Full_1')
    const clickElement = await page.waitForXPath('/html/body/div[1]/div/div[2]/div[2]/div[4]')

    await clickElement.click()
    await new Promise(r => setTimeout(r, 2000))
}

main()