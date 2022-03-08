const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius", () => {
    it("Should encode a message by translating letters into pairs of numbers", () => {
        const input = "michael"
        const expected = "23423132115113"
        const actual = polybius(input)
        
        expect(actual).to.equal(expected)
    });
    it("Should translating i and j to 42", () => {
        const input = "ij"
        const expected = "4242"
        const actual = polybius(input)
        
        expect(actual).to.equal(expected)
    });
    it("Should leave spaces when translating", () => {
        const input = "michael a"
        const expected = "23423132115113 11"
        const actual = polybius(input)
        
        expect(actual).to.equal(expected)
    });
    it("Should decode a collection of numbers into letters", () => {
        const input = "23423132115113"
        const expected = "mi/jchael"
        const actual = polybius(input, encode = false)
        
        expect(actual).to.equal(expected)
    });
    it("Should translate 42 to i/j", () => {
        const input = "42"
        const expected = "i/j"
        const actual = polybius(input, encode = false)
        
        expect(actual).to.equal(expected)
    });
    it("Should leave spaces as is", () => {
        const input = "23423132115113 11"
        const expected = "mi/jchael a"
        const actual = polybius(input, encode = false)
        
        expect(actual).to.equal(expected)
    });
    it("Should return false if amount of numbers is uneven", () => {
        const input = "23423132115113 112"
        const actual = polybius(input, encode = false)
        
        expect(actual).to.be.false
    });
});
