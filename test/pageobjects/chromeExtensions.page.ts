import Page from './page.js';

class ChromeExtensionsPage extends Page {

    public url = `chrome://extensions/`;

    public get extensionsManagerShadow () { // good
        return $('extensions-manager');
    }

    public get extensionsToolbarShadow () { // good
        return this.extensionsManagerShadow.shadow$('extensions-toolbar');
    }

    public get crToolbarShadow () { // good
        return this.extensionsToolbarShadow.shadow$('cr-toolbar');
    }

    public get hamburgerMenu () { //good
        return this.crToolbarShadow.shadow$('#menuButton');
    }

    public get crViewManagerShadow () { // good
        return this.extensionsManagerShadow.shadow$('#viewManager');
    }

    public get extensionListContainerShadow () { //good
        return this.extensionsManagerShadow.shadow$('#items-list');
    }

    public get grammarlyCardShadow () {
        //turns out grammarly has a unique extension id for chromium browsers
        //Don't prefer to use this, but for now, it is one less shadow-root to navigate
        return this.extensionListContainerShadow.shadow$('#kbfnbcaeplbcioakkpcpgfkobkghlhen');
    }

    public get noItemsText() {
        return this.extensionListContainerShadow.shadow$('#no-items');
    }

    public get grammarlyCardTitle () {
        //selectors for extension cards are not unique at all. 
        //Fuzzy selector for "grammarly" would be more stable, but not as fast
        return this.grammarlyCardShadow.$('=Grammarly: Grammar Checker and Writing App');
    }

    public navigateTo () {
        browser.url(this.url);
    }

    public hasLoaded () {
        expect(browser).toHaveUrl(this.url);
        expect(this.hamburgerMenu).toBeDisplayed();
        expect(this.extensionListContainerShadow).toBeDisplayed();
    }
}

export default new ChromeExtensionsPage();
