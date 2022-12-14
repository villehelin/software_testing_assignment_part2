import chai from "chai";
import toFinite from "../src/toFinite.js";

const expect = chai.expect

describe("toFinite", () => {
    it("passing float in toFinite", () =>{
        expect(toFinite(1/3)).to.approximately(0.333, 0.001)
    });
    it("passing 0 in toFinite", () =>{
        expect(toFinite(1/0)).equal(Number.MAX_VALUE)
    });
    it("passing string in toFinite", () =>{
        expect(toFinite("tiivitaavi")).equal(+0)
    });
    it("passing array in toFinite", () =>{
        expect(toFinite([2, 4 ,6])).to.deep.equal(+0)
    });
   })