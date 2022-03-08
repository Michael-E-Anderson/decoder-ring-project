const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar", () => {
    it("should return false if the shift is 0", () => {
        const message = "Michael";
        const shift = 0;
        const actual = caesar(message, shift);
  
        expect(actual).to.be.false;
      });
    it("should return false if shift is undefined", () => {
      const message = "Michael";
      const actual = caesar(message)

      expect(actual).to.be.false
    });
    it("Should return false if shift is less than -25", () => {
      const message = "Michael";
        const shift = -26;
        const actual = caesar(message, shift);
  
        expect(actual).to.be.false;
    });
    it("Should return false if shift is more than 25", () => {
      const message = "Michael";
        const shift = 26;
        const actual = caesar(message, shift);
  
        expect(actual).to.be.false;
    });
    it("Should encode a message with the correct shift", () => {
      const message = "Michael";
      const shift = 1
      const expected = "njdibfm"
      const actual = (caesar(message, shift))

      expect(actual).to.equal(expected)
    });
    it("Should encode a message with the correct shift and properly deal with letters at the end of the alphabet", () => {
      const message = "Michaelz";
      const shift = 1
      const expected = "njdibfma"
      const actual = (caesar(message, shift))

      expect(actual).to.equal(expected)
    });
    it("Should encode a message while maintaining symbols and spaces", () => {
      const message = "Michael z.";
      const shift = 1
      const expected = "njdibfm a."
      const actual = (caesar(message, shift))

      expect(actual).to.equal(expected)
    });
    it("Should encode a message with a negative shift", () => {
      const message = "Michael";
      const shift = -1
      const expected = "lhbgzdk"
      const actual = (caesar(message, shift))

      expect(actual).to.equal(expected)
    });
    it("Should decode a message", () => {
      const message = "lhbgzdk";
      const shift = 1
      const expected = "michael"
      const actual = (caesar(message, shift))

      expect(actual).to.equal(expected)
    });
    it("Should decode a message leaving spaces and symbols", () => {
      const message = "lhbgzd. k";
      const shift = 1
      const expected = "michae. l"
      const actual = (caesar(message, shift))

      expect(actual).to.equal(expected)
    });
    it("Should decode a message ignoring capital letters", () => {
      const message = "Lhbgzdk";
      const shift = 1
      const expected = "michael"
      const actual = (caesar(message, shift))

      expect(actual).to.equal(expected)
    });
    it("Should decode a message properly shifting letters at the end of the alphabet", () => {
      const message = "lhbgzdk";
      const shift = 1
      const expected = "michael"
      const actual = (caesar(message, shift))

      expect(actual).to.equal(expected)
    });
    it("Should decode a message with a negative shift", () => {
      const message = "njdibfm";
      const shift = -1
      const expected = "michael"
      const actual = (caesar(message, shift))

      expect(actual).to.equal(expected)
    });
});