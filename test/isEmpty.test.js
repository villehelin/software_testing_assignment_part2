import chai from "chai";
import isEmpty from "../src/isEmpty.js";

const expect = chai.expect

describe("isEmpty", () => {

    
    it("passing empty array in isEmpty", () =>{
        const testArray = []
        expect(isEmpty(testArray)).true
    });

    it("passing non-empty array returns false", () =>{
        const testArray = [1, 2, 3, 5, 8, 13]
        expect(isEmpty(testArray)).false
    });
    
    it("passing null object", () =>{
        expect(isEmpty(null)).true
    });
    
    it("passing empty map", () =>{
        const testMap = new Map();
        expect(isEmpty(testMap)).true
    });
    
    it("passing non-empty map", () =>{
        const testMap = new Map();
        testMap.set('a',1)
        expect(isEmpty(testMap)).false
    });
    
    it("passing object returns false", () =>{
        expect(isEmpty({a: 1, b: 2})).false
    });
    
    it("passing empty object", () =>{
        expect(isEmpty({})).true
    });
    
    it("passing object prototype returns false", () =>{
        function myObject(a,b) {
            this.firstAttr = a;
            this.secondAttr = b;
        }
        myObject.prototype.thirdAttr = "test"
        const testObject = new myObject("A", "B")

        expect(isEmpty(testObject.thirdAttr)).false
    });

    it("passing number to isEmpty", () =>{
        expect(isEmpty(0)).true
    });
    
   })