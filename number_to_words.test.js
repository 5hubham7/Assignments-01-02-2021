const numberToWords = require("./number_to_words");

test("Returns 'Please enter a number' for empty/null input", () => {
    expect(numberToWords()).toBe("Please enter a number");
});

test("Returns 'Zero' for 0", () => {
    expect(numberToWords(0)).toBe("Zero");
});

test("Returns 'One' for 1", () => {
    expect(numberToWords(1)).toBe("One");
});

test("Returns 'Twelve Padma Thirty Four Neel Fifty Six Kharab Seventy Eight Arab Ninety One Crore Twenty Three Lakh Forty Five Thousand Six Hundred Seventy Eight' for 123456789123456789123", () => {
    expect(numberToWords(12345678912345678)).toBe(
        "Twelve Padma Thirty Four Neel Fifty Six Kharab Seventy Eight Arab Ninety One Crore Twenty Three Lakh Forty Five Thousand Six Hundred Seventy Eight"
    );
});

test("Returns 'Ninety Nine Neel Ninety Nine Kharab Ninety Nine Arab Ninety Nine Crore Ninety Nine Lakh Ninety Nine Thousand Nine Hundred Ninety Nine' for 999999999999999", () => {
    expect(numberToWords(999999999999999)).toBe(
        "Ninety Nine Neel Ninety Nine Kharab Ninety Nine Arab Ninety Nine Crore Ninety Nine Lakh Ninety Nine Thousand Nine Hundred Ninety Nine"
    );
});

test("Returns 'Nine Padma Ninety Nine Neel Ninety Nine Kharab Ninety Nine Arab Ninety Nine Crore Ninety Nine Lakh Ninety Nine Thousand Nine Hundred Ninety Nine' for 123456789012345678901", () => {
    expect(numberToWords(9999999999999999)).toBe(
        "Nine Padma Ninety Nine Neel Ninety Nine Kharab Ninety Nine Arab Ninety Nine Crore Ninety Nine Lakh Ninety Nine Thousand Nine Hundred Ninety Nine"
    );
});
