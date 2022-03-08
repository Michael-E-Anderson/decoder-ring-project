const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution", () => {
    it("Should return false if the substitution alphabet is missing", () => {
        const input = "michael"
        const actual = substitution(input)

        expect(actual).to.be.false
    });
    it("Should return false if the alphabet is missing not 26 characters", () => {
        const input = "michael"
        const alphabet = "plmoknijbuhvygctfxr"
        const actual = substitution(input, alphabet)

        expect(actual).to.be.false
    });
    it("Should return false if the alphabet has a repeated character", () => {
        const input = "michael"
        const alphabet = "plmoknijbuhvygctfxrdzeswap"
        const actual = substitution(input, alphabet)

        expect(actual).to.be.false
    });
    it("Should encode a message using the given alphabet", () => {
        const input = "message"
        const alphabet = "plmoknijbuhvygctfxrdzeswaq"
        const expected = "ykrrpik"
        const actual = substitution(input, alphabet)

        expect(actual).to.equal(expected)
    });
    it("Should encode a message even using unique characters", () => {
        const input = "message"
        const alphabet = "!lmoknijbuhvygctfxrdzeswaq"
        const expected = "ykrr!ik"
        const actual = substitution(input, alphabet)

        expect(actual).to.equal(expected)
    });
    it("Should encode a message while keeping spaces", () => {
        const input = "message a"
        const alphabet = "plmoknijbuhvygctfxrdzeswaq"
        const expected = "ykrrpik p"
        const actual = substitution(input, alphabet)

        expect(actual).to.equal(expected)
    });
    it("Should decode a message using the given alphabet", () => {
        const input = "ykrrpik"
        const alphabet = "plmoknijbuhvygctfxrdzeswaq"
        const expected = "message"
        const actual = substitution(input, alphabet, encode = false)

        expect(actual).to.equal(expected)
    });
    it("Should decode a message using unique characters", () => {
        const input = "ykrr!ik"
        const alphabet = "!lmoknijbuhvygctfxrdzeswaq"
        const expected = "message"
        const actual = substitution(input, alphabet, encode = false)

        expect(actual).to.equal(expected)
    });
    it("Should decode a message keeping the given spaces", () => {
        const input = "ykrrpik p"
        const alphabet = "plmoknijbuhvygctfxrdzeswaq"
        const expected = "message a"
        const actual = substitution(input, alphabet, encode = false)

        expect(actual).to.equal(expected)
    });
});

