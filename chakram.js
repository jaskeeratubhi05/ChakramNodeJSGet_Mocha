var chakram = require('C:/slimerTest/node_modules/chakram');

describe("Chakram", function() {
    it("should offer simple HTTP request capabilities", function () {
        return chakram.get("https://reqres.in/api/users/2");
    });
});