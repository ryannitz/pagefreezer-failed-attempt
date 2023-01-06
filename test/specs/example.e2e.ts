import ChromeExtensionsPage from '../pageobjects/chromeExtensions.page.js';
import GrammarlyExtensionPage from '../pageobjects/grammarlyExtension.page.js';
import GoogleAcountLoginPage from '../pageobjects/googleAcountLogin.page.js';

import { ChainablePromiseElement } from 'webdriverio';
import { constants } from '../../constants.js';

describe('Grammarly chrome extension', () => {
    it('should not be installed', async () => {
        // await ChromeExtensionsPage.navigateTo();
        // await ChromeExtensionsPage.hasLoaded();
        // await expect(ChromeExtensionsPage.extensionListContainerShadow).toBeDisplayed();
        // await expect(ChromeExtensionsPage.noItemsText).toBeDisplayed();
        // await browser.pause(60000);
    });

    it('should be installed and enabled', async () => {
        //await browser.pause(30000);
       // await GoogleAcountLoginPage.login(constants.username, constants.password);
        // await GrammarlyExtensionPage.navigateTo();
        // await GrammarlyExtensionPage.hasLoaded();
        // await GrammarlyExtensionPage.addToChromeButton.click();
        // await browser.pause(1000)
        // await browser.keys("Tab");
        // await browser.keys("Enter");
        // await browser.pause(30000);
        // await browser.acceptAlert();
        // await GrammarlyExtensionPage.removeFromChromeButton.waitForDisplayed({timeout: 2000});
    });
});



