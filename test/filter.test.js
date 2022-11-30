import chai from "chai";
import filter from "../src/filter.js";

const expect = chai.expect

describe("filter", () => {
    it("object from array", () =>{
        expect(filter([{ 'user': 'barney', 'active': true }, { 'user': 'fred',   'active': false }], ({ active }) => active)).to.deep.equal([{ 'user': 'barney', 'active': true }])
    });
   })