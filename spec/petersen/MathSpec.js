/*
1. calculate square footage
  given a length and a width, find square footage in feet
  if square footage is _ assign size
2. display output
3. allow input
*/

const CONSTANTS = {
  // 1 - 6 feet
  small: (input)=> input * 1.75
  // 7-15 feet
, medium: (input)=> input * 1.5
  // 16-23
, large: (input)=> input * 1.25
  // 24 -31
, xl: (input)=> input * 1.1
  // 32 +
, xxl: (input)=> input / 32
};

const SQUAREFOOTAGE = {
  inchesToFeet: (length, width)=> (length * width) / 144,
};

const CALCULATION = {
  getPrice: (pricePerSheet, ...dimensions)=>{
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
  describe("CALCULATION getPrice", ()=>{
    describe("returns price per sheet", ()=>{
      // small
      it(" * 1.75 if smaller than 7", ()=>{
        expect(CALCULATION.getPrice(10, 0)).toBe(17.5);
        expect(CALCULATION.getPrice(10, 1)).toBe(17.5);
        expect(CALCULATION.getPrice(10, 6.999)).toBe(17.5);
      });
      it(" * 1.5 if gte 7 and lt 16", ()=>{
        expect(CALCULATION.getPrice(10, 7)).toBe(15);
        expect(CALCULATION.getPrice(10, 10)).toBe(15);
        expect(CALCULATION.getPrice(10, 15.999)).toBe(15);
      });
      it(" * 1.25 if gte 16 and lt 24", ()=>{
        expect(CALCULATION.getPrice(10, 16)).toBe(12.5);
        expect(CALCULATION.getPrice(10, 20)).toBe(12.5);
        expect(CALCULATION.getPrice(10, 23.9)).toBe(12.5);
      });
      it(" * 1.25 if gte 24 and lt 32", ()=>{
        expect(CALCULATION.getPrice(10, 24)).toBe(11);
        expect(CALCULATION.getPrice(10, 29)).toBe(11);
        expect(CALCULATION.getPrice(10, 31.999)).toBe(11);
      });

      it(" /32 if gte 32", ()=>{
        expect(CALCULATION.getPrice(10, 32)).toBe(15);
        expect(CALCULATION.getPrice(10, 50)).toBe(15);
        expect(CALCULATION.getPrice(10, 10000000000000)).toBe(15);
      });

    });
  });
});
