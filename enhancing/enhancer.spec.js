const { success, fail, repair } = require("./enhancer.js");
// test away!

describe("enhancer functionality", () => {
    describe("repair()", () => {
      test("returns a new item with durability restored to 100", () => {
        expect(repair({ name: "item", durability: 50, enhancement: 10 })).toEqual({
          name: "item",
          durability: 100,
          enhancement: 10
        });
      });
    });
  
    describe("success()", () => {
      test("adds enhancement by 1 if below 20", () => {
        const item = { name: "item1", durability: 75, enhancement: 18 };
        expect(success(item)).toEqual({
          name: "item1",
          durability: 75,
          enhancement: 19
        });
      });
  
      test("does not change enhancement if already maxed out at 20", () => {
        const item = { name: "item2", durability: 75, enhancement: 20 };
        expect(success(item)).toEqual({
          name: "item2",
          durability: 75,
          enhancement: 20
        });
      });
    });
  
    describe("fail()", () => {
      test("reduces durability by 5 if enhancement less than 15", () => {
        const item = { name: "item3", durability: 50, enhancement: 12 };
        expect(fail(item)).toEqual({
          name: "item3",
          durability: 45,
          enhancement: 12
        });
      });
  
      test("reduces durability by 10 if enhancement is 15 or more", () => {
        const item = { name: "item3", durability: 50, enhancement: 15 };
        expect(fail(item)).toEqual({
          name: "item3",
          durability: 40,
          enhancement: 15
        });
      });
  
      test("reduces enhancement by 1 if enhancement is greater than 16", () => {
        const item = { name: "item4", durability: 50, enhancement: 18 };
        expect(fail(item)).toEqual({
          name: "item4",
          durability: 40,
          enhancement: 17
        });
      });
    });
  });