import chai from "chai";
import isObject from "../src/isObject.js";

const expect = chai.expect

describe("isobject", () => {
    it("passing empty object in isObject", () =>{
        expect(isObject({}).istrue)
    });
   })