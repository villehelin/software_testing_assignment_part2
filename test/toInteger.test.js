import chai from "chai";
import toInteger from "../src/toInteger.js";

const expect = chai.expect

describe("toInteger", () => {
    it("positive integer to integer", () =>{
        expect(toInteger(10)).to.equal(10)
    });

    it("float to integer", () => {
        expect(toInteger(8.70)).to.equal(8)
    });

    it("string to integer returns 0", () => {
        expect(toInteger("testi")).to.equal(0)
    });

    it("empty array to integer returns 0", () => {
        expect(toInteger([])).to.equal(0)
    });
    
    it("array to integer returns 0", () => {
        expect(toInteger([2,4,6])).to.equal(0)
    });

    it("object to integer returns 0", () => {
        expect(toInteger({a: 1, b: 1})).to.equal(0)
    });



   })