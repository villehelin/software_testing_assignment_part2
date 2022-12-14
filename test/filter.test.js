import chai, { Assertion, AssertionError } from "chai";
import filter from "../src/filter.js";

const expect = chai.expect

describe("filter", () => {
    it("object from array", () =>{
        expect(filter([{ 'user': 'barney', 'active': true }, { 'user': 'fred',   'active': false }], ({ active }) => active)).to.deep.equal([{ 'user': 'barney', 'active': true }])
    });
    it("pass object without it being in array to filter", () =>{
        expect(filter({'a': 1, 'b': 1})).to.deep.equal([    []  ])
    });
    it("pass object and ask for value that is not found in object to filter", () =>{
        expect(filter([{'a': 1, 'b': 1}, {'a': 3, 'b': 1}], ({ b }) => 1)).to.deep.equal([{'a': 1, 'b': 1}, {'a': 3, 'b': 1}])
    });
   })