const {config} = require('./wdio.shared.conf');

config.port = 4723;

config.specs = [
    '../test/specs/android/webview*.js'
];

config.capabilities = [
    {
    'appium:platformName': 'Android',
    'appium:deviceName': 'Pixel 7 Pro',
    'appium:platformVersion': '13.0',
    'appium:automationName': 'UIAutomator2',
    'appium:app': 'C://Users//cyrus//webdriverio-appiumv8//app//android//ColorNoteNotepad.apk',
    'appium:autoGrantPermissions': true
    }
];

config.services = [['appium', {
    args:{
        // address: 'localhost',
        // port: 4723,
        relaxedSecurity: true
    },
    logPath: './'
}]];

exports.config = config;