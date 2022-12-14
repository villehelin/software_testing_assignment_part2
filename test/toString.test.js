import chai from "chai";
import toString from "../src/toString.js";

const expect = chai.expect

describe("toString", () => {
    it("passing string in toString", () =>{
        expect(toString("test")).equal("test")
    });
    it("passing object in toString", () =>{
        expect(toString({'a': 1, 'b': 1})).to.deep.equal('[object Object]')
    });
    it("passing array in toString", () =>{
        expect(toString([2, 6, 8])).to.deep.equal('2,6,8')
    });
    it("passing float in toString", () =>{
        expect(toString(3.20)).to.deep.equal('3.2')
    });
    it("passing string in toString", () =>{
        expect(toString("Tiivitaavi")).to.deep.equal('Tiivitaavi')
    });
   })