import chai from "chai";
import capitalize from "../src/capitalize.js";

const expect = chai.expect

describe("capitalize", () => {
    it("all uppercase string", () =>{
        expect(capitalize("FRED")).to.be.equal("Fred")
    });
   })