import chai from "chai";
import isEmpty from "../src/isEmpty.js";

const expect = chai.expect

describe("isEmpty", () => {
    it("passing empty array in isEmpty", () =>{
        expect(isEmpty(null).istrue)
    });
   })