import chai, { Assertion } from "chai";
import add from "../src/add.js";

const expect = chai.expect

describe("add", () => {
    it("add positive number to positive number", () =>{
        expect(add(6,11)).to.equal(17)
    });

    // Ei heitäkään TypeErroria, add ei tarvitsekaan numeroita
    it("add string to integer number AND fail", () => {
        expect(function() {add("k", 7)}).to.throw(TypeError)
    });

    it("add string to integer number", () => {
        expect(add("k", 7)).to.equal("k7")
    });

    it("add positive int with negative int", () => {
        expect(add(-6, 20)).to.equal(14)
    });

    
    it("add negative int with negative int", () => {
        expect(add(-3, -3)).to.equal(-6)
    });
    
    it("add int to null", () => {
        expect(add(4, null)).to.equal(4)
    });

    it("add int to null", () => {
        expect(add(null, "k")).to.equal("k")
    });

    it("add null with null", () => {
        expect(add(null, null)).to.equal(0)
    });

   })