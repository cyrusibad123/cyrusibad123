const LoginScreen = require("../../screenobjects/android/login.screen")

describe('Login user',()=>{
    before(async()=>{
        await expect(LoginScreen.welcomeText).toBeDisplayed();
    })
    it('Invalid email format',async()=>{
        await LoginScreen.loginBtn.click();
        await LoginScreen.email.addValue("testuser");
        await LoginScreen.password.addValue("Test1234");
        await LoginScreen.modalLoginBtn.click();
        await expect(LoginScreen.errorMessage).toBeDisplayed();
    })
})