"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var CliUniversalDemoPage = (function () {
    function CliUniversalDemoPage() {
    }
    CliUniversalDemoPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    CliUniversalDemoPage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    };
    return CliUniversalDemoPage;
}());
exports.CliUniversalDemoPage = CliUniversalDemoPage;
//# sourceMappingURL=app.po.js.map