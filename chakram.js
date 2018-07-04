var chakram = require('C:/slimerTest/node_modules/chakram'),
    expect = chakram.expect;
describe("HTTP assertions", function () {
  it("should make HTTP assertions easy", function () {
    var response = chakram.get("http://restapi.demoqa.com/utilities/weather/city/Pune");
    expect(response).to.have.status(200);
    return chakram.wait();
  });
}); 