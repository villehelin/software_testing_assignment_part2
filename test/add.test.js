import chai, { Assertion } from "chai";
import add from "../src/add.js";

const expect = chai.expect

describe("add", () => {
    it("adds positive number to positive number", () =>{
        expect(add(6,4)).to.equal(10)
    });

    it("adds string to integer number", () => {
        expect(add("k", 7)).to.equal("k7")
    });

   })