let expect = require('expect');

var {generateMessage} = require("./message");

describe("Generate Message", () => {
    it("should generate correct message object", () => {
        let from = "Shravani",
        text = "Some random text"
        message = generateMessage(from, text);

        expect(typeof message.createdAt).tobe("number");
        expect(message).toMAtchObject({from, text});
    })
})