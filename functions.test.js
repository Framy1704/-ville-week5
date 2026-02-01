const {
  multiply,
  format_name,
  is_adult,
  get_even_numbers,
  divide
} = require("./functions");

describe("multiply", () => {
  test("multiplies two positive numbers", () => {
    expect(multiply(2, 3)).toBe(6);
  });

  test("returns 0 if one number is 0", () => {
    expect(multiply(0, 5)).toBe(0);
  });

  test("works with negative numbers", () => {
    expect(multiply(-2, 3)).toBe(-6);
  });
});

describe("format_name", () => {
  test("formats name as Last, First", () => {
    expect(format_name("John", "Smith")).toBe("Smith, John");
  });

  test("handles whitespace and casing", () => {
    expect(format_name(" john ", " sMiTh ")).toBe("Smith, John");
  });
});

describe("is_adult", () => {
  test("returns false if under 18", () => {
    expect(is_adult(17)).toBe(false);
  });

  test("returns true if 18 or older", () => {
    expect(is_adult(18)).toBe(true);
  });
});

describe("get_even_numbers", () => {
  test("returns only even numbers", () => {
    expect(get_even_numbers([1, 2, 3, 4])).toEqual([2, 4]);
  });
});

describe("divide", () => {
  test("divides two numbers", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("throws error when dividing by zero", () => {
    expect(() => divide(5, 0)).toThrow();
  });
});
