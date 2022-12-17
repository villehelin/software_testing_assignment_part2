import chai, { Assertion, AssertionError } from "chai";
import filter from "../src/filter.js";

const expect = chai.expect

describe("filter", () => {

    it("pass object without it being in array to filter", () =>{
        expect(filter({'a': 1, 'b': 1})).to.deep.equal([    []  ])
    });
    it("pass object and ask for one value that is found in object to filter", () =>{
        expect(filter([{'a': 1, 'b': 1}, {'a': 3, 'b': 2}], ({ b }) => b == 2)).to.deep.equal([{'a': 3, 'b': 2}])
    });
    it("pass object and ask for all value that is found in object to filter", () =>{
        expect(filter([{'a': 1, 'b': 1}, {'a': 3, 'b': 1}], ({ b }) => b == 1)).to.deep.equal([{'a': 1, 'b': 1}, {'a': 3, 'b': 1}])
    });
    it("pass object and ask for value that is not found in object to filter", () =>{
        expect(filter([{'a': 1, 'b': 1}], ({ b }) => b == 2)).to.deep.equal([    []  ])
    });
   })