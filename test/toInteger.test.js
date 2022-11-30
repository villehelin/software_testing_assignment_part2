import chai from "chai";
import toInteger from "../src/toInteger.js";

const expect = chai.expect

describe("toInteger", () => {
    it("passing integer to toInteger", () =>{
        expect(toInteger(10)).to.equal(10)
    });
   })