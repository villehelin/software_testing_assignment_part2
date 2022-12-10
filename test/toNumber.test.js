import chai from "chai";
import toNumber from "../src/toNumber.js";

const expect = chai.expect

describe("toNumber", () => {
    it("passing integer in toNumber", () =>{
        expect(toNumber(66)).to.equal(66)
    });

    it("passing float in toNumber", () =>{
        expect(toNumber("6.9")).to.equal(6.9)
    });

    it("passing string in toNumber", () =>{
        expect(toNumber("123")).to.equal(123)
    });

    it("passing object in toNumber", () =>{
        expect(toNumber({a:1, b:2})).to.eql(NaN)
    });

   })