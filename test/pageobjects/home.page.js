class HomePage {
    get loginButton(){
        return $('(//*[@href="/account/login"])[2]')
    }

    clickLoginButton() {
        this.loginButton.waitForDisplayed({timeout:3000});
        this.loginButton.click();
    }
}

export default new HomePage();