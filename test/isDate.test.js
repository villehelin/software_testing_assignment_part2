import chai from "chai";
import isDate from "../src/isDate.js";

const expect = chai.expect

describe("isDate", () => {
    it("passing float to isDate", () =>{
        expect(isDate(4.7).isfalse)
    });
   })