const wordFrequency = require("./word_frequency");

test("RETURNS: 'Text cannot be empty!' for TEXT: '' and WORD: 'aa bb cc'", () => {
    expect(wordFrequency("", "aa bb cc")).toBe("Text cannot be empty!");
});

test("RETURNS: 'Word cannot be empty!' for TEXT: 'aa bb cc' and WORD: ''", () => {
    expect(wordFrequency("aa bb cc", "")).toBe("Word cannot be empty!");
});

test("RETURNS: 'Please enter just one word' for TEXT: 'aa bb cc' and WORD: 'aa bb'", () => {
    expect(wordFrequency("aa bb cc", "aa bb")).toBe(
        "Please enter just one word"
    );
});

test("RETURNS: '1' for TEXT: 'aa bb cc' and WORD: 'aa'", () => {
    expect(wordFrequency("aa bb cc", "aa")).toBe(1);
});

test("RETURNS: '2' for TEXT: 'aa aa bb cc' and WORD: 'aa'", () => {
    expect(wordFrequency("aa aa bb cc", "aa")).toBe(2);
});

test("RETURNS: '2' for TEXT: 'Aa aa bb cc' and WORD: 'aa'", () => {
    expect(wordFrequency("Aa aa bb cc", "aa")).toBe(2);
});

test("RETURNS: '2' for TEXT: 'Aa aa bb cc' and WORD: 'Aa'", () => {
    expect(wordFrequency("Aa aa bb cc", "Aa")).toBe(2);
});

test("RETURNS: '4' for TEXT: 'Aa aa bb cc Aa aa bb cc' and WORD: 'aa'", () => {
    expect(wordFrequency("Aa aa bb cc Aa aa bb cc", "aa")).toBe(4);
});

test("RETURNS: '4' for TEXT: 'Aa aa, bb cc Aa! aa bb cc.' and WORD: 'aa'", () => {
    expect(wordFrequency("Aa aa, bb cc Aa! aa bb cc.", "aa")).toBe(4);
});

test("RETURNS: '2' for TEXT: 'Aa.. aa.. bb.. cc..' and WORD: 'aa'", () => {
    expect(wordFrequency("Aa.. aa.. bb.. cc..", "aa")).toBe(2);
});
