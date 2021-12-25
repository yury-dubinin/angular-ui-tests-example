require('dotenv').config()
module.exports = class Page {

    get waitTimeout() {
        return `${process.env.WAIT || 2000}` * 1;
    }

    async open() {
        await browser.url(process.env.BASEURL)
    }
}
