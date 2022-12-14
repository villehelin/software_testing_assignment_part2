import chai from "chai";
import isDate from "../src/isDate.js";

const expect = chai.expect

describe("isDate", () => {
    it("passing float to isDate", () =>{
        expect(isDate(4.7)).false
    });
    it("passing newDate to isDate", () =>{
        expect(isDate(new Date('2022-12-14T22:10:00'))).true
    });
    it("passing date look alike string to isDate", () =>{
        expect(isDate("2022-03-05")).false
    });
    it("passing random string to isDate", () =>{
        expect(isDate("Testi")).false
    });

   })