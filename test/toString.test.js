import chai from "chai";
import toString from "../src/toString.js";

const expect = chai.expect

describe("toString", () => {
    it("passing string in toString", () =>{
        expect(toString("test")).equal("test")
    });
   })