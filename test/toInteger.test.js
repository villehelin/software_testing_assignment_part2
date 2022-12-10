import chai from "chai";
import toInteger from "../src/toInteger.js";

const expect = chai.expect

describe("toInteger", () => {
    it("passing integer to toInteger", () =>{
        expect(toInteger(10)).to.equal(10)
    });

    it("passing float to toInteger", () => {
        expect(toInteger(8,70)).to.equal(8)
    });

    it("passing string to toInteger", () => {
        expect(toInteger("testi")).to.equal(0)
    });

    it("passing empty array to toInteger", () => {
        expect(toInteger({})).to.equal(0)
    });

    it("passing object to toInteger", () => {
        expect(toInteger({a: 1, b: 1})).to.equal(0)
    });

   })