import { capitanum2Romanlize, roman2Num } from "./roman_num";

describe("num2Roman", () => {
  test("tests negative cases", () => {
    expect(num2Roman()).toThrow();
    expect(num2Roman("abc")).toThrow();
    expect(num2Roman("12.3")).toThrow();
    expect(num2Roman("0")).toThrow();
    expect(num2Roman("3001")).toThrow();
  });

  test("returns a Roman numeral", () => {
    expect(num2Roman(1)).toBe("I");
    expect(num2Roman(10)).toBe("X");
    expect(num2Roman(43)).toBe("XLIII");
    expect(num2Roman(100)).toBe("C");
    expect(num2Roman(560)).toBe("DLX");
    expect(num2Roman(567)).toBe("DLXVII");
    expect(num2Roman(1000)).toBe("M");
    expect(num2Roman(2300)).toBe("MMCCC");
    expect(num2Roman(2470)).toBe("MMCDLXX");
    expect(num2Roman(1479)).toBe("MCDLXXIX");
  });
});

describe("roman2Num", () => {
  test("tests negative cases", () => {
    expect(roman2Num()).toThrow();
    expect(roman2Num("A")).toThrow();
    expect(roman2Num("IIII")).toThrow();
    expect(roman2Num("VVVV")).toThrow();
    expect(roman2Num("CCCC")).toThrow();
    expect(roman2Num("MMMM")).toThrow();
    expect(roman2Num("VV")).toThrow();
    expect(roman2Num("VXV")).toThrow();
    expect(roman2Num("LL")).toThrow();
    expect(roman2Num("LCL")).toThrow();
    expect(roman2Num("DD")).toThrow();
    expect(roman2Num("DMD")).toThrow();
    expect(roman2Num("IM")).toThrow();
    expect(roman2Num("VCD")).toThrow();
    expect(roman2Num("XLX")).toThrow();
    expect(roman2Num("CMCD")).toThrow();
  });

  test("returns a Roman numeral", () => {
    expect(roman2Num("I")).toBe(1);
    expect(roman2Num("LIV")).toBe(54);
    expect(roman2Num("DXCIX")).toBe(599);
    expect(roman2Num("MMDCCXCV")).toBe(2795);
  });
});
