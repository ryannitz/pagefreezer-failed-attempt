import Page from './page.js';

class GoogleAccountLoginPage extends Page {

    public url = `https://accounts.google.com`;

    public get signInLogo () {
        return $('#logo');
    }

    public get emailInput () { // good
        return $('#identifierId');
    }

    public get passwordInput () {
        return $('#password').$("input");
    }

    public get nextButton () {
        return $("span=Next");
    }

    public get googleAccountHeader () {
        return $("#gb");
    }

    public navigateTo () {
        browser.url(this.url);
    }

    public hasLoaded () {
        expect(this.signInLogo).toBeDisplayed();
    }

    public async login (username, password) {
        await this.navigateTo();
        await this.hasLoaded();
        await this.emailInput.setValue(username);
        await browser.pause(1000);
        await this.nextButton.click();
        await this.passwordInput.waitForDisplayed();
        await this.passwordInput.setValue(password);
        await browser.pause(1000);
        await this.nextButton.click();
        await this.signInLogo.waitForDisplayed({reverse: true})
        await expect(this.googleAccountHeader).toBeDisplayed();
        await browser.pause(60000);
    }
}

export default new GoogleAccountLoginPage();
