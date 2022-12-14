import chai from "chai";
import capitalize from "../src/capitalize.js";

const expect = chai.expect

describe("capitalize", () => {

    it("all uppercase string", () =>{
        expect(capitalize("FRED")).to.be.equal("Fred")
    });
    it("passing int type number to capitalize", () =>{
        expect(capitalize(Number(123))).to.equal('123')
    });
    it("passing all small string to capitalize", () =>{
        expect(capitalize("testi")).to.deep.equal('Testi')
    });
    it("passing capitalized string to capitalize", () =>{
        expect(capitalize("Testi")).to.deep.equal('Testi')
    });
    it("passing all capital string to capitalize", () =>{
        expect(capitalize("TESTI")).to.deep.equal('Testi')
    });
   })