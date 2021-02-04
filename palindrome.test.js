const palindrome = require("./palindrome");

test("Returns false for empty string or null", () => {
    expect(palindrome("")).toBe(false);
});

test("Returns true for string '@#$$#@'", () => {
    expect(palindrome("@#$$#@")).toBe(true);
});

test("Returns true for string 'madam'", () => {
    expect(palindrome("madam")).toBe(true);
});

test("Returns true for number 1", () => {
    expect(palindrome(1)).toBe(true);
});

test("Returns true for number 121", () => {
    expect(palindrome(121)).toBe(true);
});

test("Returns true for number 121121121121", () => {
    expect(palindrome(121121121121)).toBe(true);
});

test("Returns false for string 'mad'", () => {
    expect(palindrome("mad")).toBe(false);
});

test("Returns false for string 'madama'", () => {
    expect(palindrome("madama")).toBe(false);
});

test("Returns false for number 123", () => {
    expect(palindrome(123)).toBe(true);
});
