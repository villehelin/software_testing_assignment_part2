import chai from "chai";
import toNumber from "../src/toNumber.js";

const expect = chai.expect

describe("toNumber", () => {
    it("passing string in toNumber", () =>{
        expect(toNumber("123")).to.equal(123)
    });
   })