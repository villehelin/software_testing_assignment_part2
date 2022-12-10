import chai from "chai";
import isEmpty from "../src/isEmpty.js";

const expect = chai.expect

describe("isEmpty", () => {
    it("passing empty array in isEmpty", () =>{
        expect(isEmpty(null).istrue)
    });

    it("passing object to isEmpty", () =>{
        expect(isEmpty({a: 1, b:1}).istrue)
    });


   })