var cordova = require('cordova'),
    UWPBackbutton = require('./UWPBackbutton');

module.exports = {

    hideBackbutton: function () {
        console.log('Proxy removebackbutton');
        if (cordova.platformId = "windows")
        {
            var currentView = Windows.UI.Core.SystemNavigationManager.getForCurrentView();
            currentView.appViewBackButtonVisibility = Windows.UI.Core.AppViewBackButtonVisibility.collapsed;
        }
        // if(currentView.appViewBackButtonVisibility == Windows.UI.Core.AppViewBackButtonVisibility.collapsed) {
        //     successCallback();
        // }
        // else {
        //     errorCallback();
        // }
    }
};
require("cordova/exec/proxy").add("UWPBackbutton", module.exports);