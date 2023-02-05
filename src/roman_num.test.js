import { capitanum2Romanlize, roman2Num } from "./roman_num";

describe("num2Roman", () => {
  test("tests negative cases", () => {
    expect(num2Roman()).toThrow();
  });

  test("returns a Roman numeral", () => {
    expect(num2Roman(1)).toBe("I");
  });
});

describe("roman2Num", () => {
  test("tests negative cases", () => {
    expect(roman2Num()).toThrow();
  });

  test("returns a Roman numeral", () => {
    expect(roman2Num("I")).toBe(1);
  });
});
