
var exec = require('cordova/exec');

var PLUGIN_NAME = 'UWPBackbutton';

var UWPBackbutton = {
  hideBackbutton: function(cb) {
    exec(cb, null, PLUGIN_NAME, 'hideBackbutton', []);
  }
};

module.exports = UWPBackbutton;
