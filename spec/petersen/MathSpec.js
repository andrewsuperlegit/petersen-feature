const HELPERS = {
  typeCheck: (actual, expected)=>{
    if(typeof actual !== expected){
      console.trace(`actual ${actual} is not type of ${expected}`);
      return false;
    }
    return true;
  }
, assureValid: (input, fn)=>{
    if(isNaN(input)){ HELPERS.typeCheck(input, 'string'); }
    if(HELPERS.typeCheck(input, 'number') === true){
      return fn(input);
    }
    return NaN;
  }
};
/*
1. calculate square footage
  given a length and a width, find square footage in feet
2. assign output
*/

const CONSTANTS = {
  small: (input) => HELPERS.assureValid(input, (input)=> input * 1.75)
, medium: (input)=> HELPERS.assureValid(input, (input)=> input * 1.5)
, large: (input)=> HELPERS.assureValid(input, (input)=> input * 1.25)
, xl: (input)=> HELPERS.assureValid(input, (input)=> input * 1.1)
, xxl: (input)=> HELPERS.assureValid(input, (input)=> input / 32)
};

const SQUAREFOOTAGE = {
  inchesToFeet: (length, width)=> {
    let result = length * width;
    return HELPERS.assureValid(result, input => input/144);
  }
}



fdescribe('petersen', ()=>{
  beforeEach(()=>{
    spyOn(console, 'trace');
  });
  describe("CONSTANTS",()=>{
    it("small multiplies a number by 1.75", ()=>{
      expect(CONSTANTS.small(1)).toBe(1.75);
    });
    it("will log error if invalid type is used", ()=>{
      CONSTANTS.small("a");
      expect(console.trace).toHaveBeenCalled();
    });
  });

  describe("SQUAREFOOTAGE", ()=>{
    it("returns the square feet given length and width", ()=>{
      expect(SQUAREFOOTAGE.inchesToFeet(12, 12)).toBe(1);
      expect(SQUAREFOOTAGE.inchesToFeet(12, 24)).toBe(2);
      expect(SQUAREFOOTAGE.inchesToFeet(12, 36)).toBe(3);
    });

    it("will log error if invalid type", ()=>{
      SQUAREFOOTAGE.inchesToFeet('a', 'b');
      expect(console.trace).toHaveBeenCalled();
    });
  });

});
