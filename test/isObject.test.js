import chai from "chai";
import isObject from "../src/isObject.js";

const expect = chai.expect

describe("isObject", () => {
    it("passing empty object in isObject", () =>{
        expect(isObject({})).true
    });
    it("passing int type number in isObject", () =>{
        expect(isObject(66)).false
    });
    it("passing string in isObject", () =>{
        expect(isObject("Test string")).false
    });
    it("passing array in isObject", () =>{
        expect(isObject([2, 6, 8])).true
    });
   })