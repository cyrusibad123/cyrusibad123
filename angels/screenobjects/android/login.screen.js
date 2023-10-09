class LoginScreen{
    get logo(){
        return('//*[@elementid="00000000-0000-0ae7-ffff-ffff00000019"]');
    }

    get loginBtn(){
        return('~SplashLoginButton');
    }

    get registerBtn(){
        return('~RegisterButton');
    }

    get skipForNow(){
        return('//*[@text="Skip for now"]');
    }

}