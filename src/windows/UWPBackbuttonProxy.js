var cordova = require('cordova');

module.exports = {

    hideBackbutton: function () {
        if (cordova.platformId = "windows")
        {
            var currentView = Windows.UI.Core.SystemNavigationManager.getForCurrentView();
            currentView.appViewBackButtonVisibility = Windows.UI.Core.AppViewBackButtonVisibility.collapsed;
        }

    }
};
require("cordova/exec/proxy").add("UWPBackbutton", module.exports);