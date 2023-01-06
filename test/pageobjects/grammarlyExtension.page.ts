import { ChainablePromiseElement } from 'webdriverio';

import Page from './page.js';

class GrammarlyExtensionPage extends Page {

    public url = `https://chrome.google.com/webstore/detail/grammarly-grammar-checker/kbfnbcaeplbcioakkpcpgfkobkghlhen`;

    public get pageTitle () {
        return $('h1=Chrome Web Store');
    }

    public get extensionNameText () {
        return $('h1=Grammarly: Grammar Checker and Writing App');
    }

    public get addToChromeButton () {
        return $('div.webstore-test-button-label=Add to Chrome')
    }

    public get removeFromChromeButton () {
        return $('div.webstore-test-button-label=Remove from Chrome')
    }

    public navigateTo () {
        browser.url(this.url);
    }

    public hasLoaded () {
        expect(browser).toHaveUrl(this.url);
        expect(this.pageTitle).toBeDisplayed();
        expect(this.extensionNameText).toBeDisplayed();
        expect(this.addToChromeButton).toBeDisplayed();
    }
}

export default new GrammarlyExtensionPage();

