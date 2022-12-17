import chai from "chai";
import toFinite from "../src/toFinite.js";
import toNumber from "../src/toNumber.js";

const expect = chai.expect

describe("toNumber", () => {
    it("integer to number", () =>{
        expect(toNumber(123)).to.equal(123)
    });

    it("float to number", () =>{
        expect(toNumber(6.9)).to.equal(6.9)
    });

    it("string (NaN) to number", () =>{
        expect(toNumber("testi")).to.eql(NaN)
    });

    it("object (NaN) to number", () =>{
        expect(toNumber({a:1, b:2})).to.eql(NaN)
    });


    it("number as string to number", () =>{
        expect(toNumber("42")).to.equal(42)
    });

    it("symbol to number", () =>{
        const sym = Symbol()
        expect(toNumber(sym)).to.eql(NaN)
    });


    it("boolean to number", () =>{
        expect(toNumber(false)).to.equal(+0)
    });

    it("Binary to number", () =>{
        expect(toNumber(0b11111111)).to.equal(255)
    });

    it("Octal to number", () =>{
        expect(toNumber(0o373)).to.equal(251)
    });

    it("Hex to number", () =>{
        expect(toNumber(0x000002EB)).to.eql(747)
    });
    it("Bad hex to number", () =>{
        expect(toNumber("0x000002QB")).to.eql(NaN)
    });

    it("unparsed number to number", () =>{
        expect(toNumber(1_000_000)).to.equal(1000000)
    });

    // Failed test: Expected to return false, returns some number instead
    /*
    it("Date to number returns 0", () =>{
        expect(toNumber(new Date('2022-12-14T22:10:00'))).to.equal(0)
    });
    */

    it("object (function) to number", () =>{
        expect(toNumber(typeof NaN)).to.eql(NaN)
    });

   })