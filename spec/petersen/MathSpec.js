/*
1. calculate square footage
  given a length and a width, find square footage in feet
  if square footage is _ assign size
2. display output
3. allow input
*/

const CONSTANTS = {
  base: (input) => input / 32
  // 1 - 6 feet
, small: (input)=> CONSTANTS.base(input) * 1.75
  // 7-15 feet
, medium: (input)=> CONSTANTS.base(input) * 1.5
  // 16-23
, large: (input)=> CONSTANTS.base(input) * 1.25
  // 24 -31
, xl: (input)=> CONSTANTS.base(input) * 1.1
  // 32 +
, xxl: (input)=> CONSTANTS.base(input)
};

const SQUAREFOOTAGE = {
  inchesToFeet: (length, width)=> (length * width) / 144,
};

const CALCULATION = {
  getPriceBreak: (pricePerSheet, ...dimensions)=>{
    let feet = (dimensions.length > 1) ? SQUAREFOOTAGE.inchesToFeet(dimensions[0], dimensions[1]) : dimensions;
    if(feet < 7){
      return CONSTANTS.small(pricePerSheet);
    }
    if(feet >= 7 && feet < 16){
      return CONSTANTS.medium(pricePerSheet);
    }
    if(feet >= 16 && feet < 24){
      return CONSTANTS.large(pricePerSheet);
    }
    if(feet >= 24 && feet < 32){
      return CONSTANTS.xl(pricePerSheet);
    }
    if(feet >= 32){
      return CONSTANTS.xxl(pricePerSheet);
    }
  }
}



fdescribe('petersen', ()=>{
  describe("CONSTANTS",()=>{
    it("small multiplies a number by 1.75", ()=>{
      expect(CONSTANTS.small(1)).toBe(1.75);
    });
    it("medium multiplies number by 1.5", ()=>{
      expect(CONSTANTS.medium(1)).toBe(1.5);
    });
    it("large multiplies number by 1.25", ()=>{
      expect(CONSTANTS.large(1)).toBe(1.25);
    });
    it("xl multiplies number by 1.25", ()=>{
      expect(CONSTANTS.xl(1)).toBe(1.1);
    });
    it("xxl multiplies number by 1.25", ()=>{
      expect(CONSTANTS.xxl(1)).toBe(0.03125);
    });
  });
  describe("SQUAREFOOTAGE", ()=>{
    it("returns the square feet given length and width", ()=>{
      expect(SQUAREFOOTAGE.inchesToFeet(12, 12)).toBe(1);
      expect(SQUAREFOOTAGE.inchesToFeet(12, 24)).toBe(2);
      expect(SQUAREFOOTAGE.inchesToFeet(12, 36)).toBe(3);
    });
  });
  describe("CALCULATION getPriceBreak", ()=>{
    describe("returns price per sheet", ()=>{
      // small
      it(" * 1.75 if smaller than 7", ()=>{
        expect(CALCULATION.getPriceBreak(70, 0)).toBe();
      });
    });
  });
});
