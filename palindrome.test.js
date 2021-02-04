const palindrome = require("./palindrome");

test("Checking empty string or null for NOT palindrome", () => {
    expect(palindrome("")).toBe(false);
});

test("Checking symbols '@#$$#@' for palindrome", () => {
    expect(palindrome("@#$$#@")).toBe(true);
});

test("Checking string 'madam' for palindrome", () => {
    expect(palindrome("madam")).toBe(true);
});

test("Checking number 1 for palindrome", () => {
    expect(palindrome(1)).toBe(true);
});

test("Checking number 121 for palindrome", () => {
    expect(palindrome(121)).toBe(true);
});

test("Checking number 121121121121 for palindrome", () => {
    expect(palindrome(121121121121)).toBe(true);
});

test("Checking string 'mad' for NOT palindrome", () => {
    expect(palindrome("mad")).toBe(false);
});

test("Checking string 'madama' for NOT palindrome", () => {
    expect(palindrome("madama")).toBe(false);
});

test("Checking number 123 for NOT palindrome", () => {
    expect(palindrome(123)).toBe(true);
});
