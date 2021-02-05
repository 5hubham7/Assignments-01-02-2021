const convert = (num) => {
    _1to19 = [
        "",
        "One",
        "Two",
        "Three",
        "Four",
        "Five",
        "Six",
        "Seven",
        "Eight",
        "Nine",
        "Ten",
        "Eleven",
        "Twelve",
        "Thirteen",
        "Fourteen",
        "Fifteen",
        "Sixteen",
        "Seventeen",
        "Eighteen",
        "Nineteen",
    ];

    _20to90 = [
        "",
        "",
        "Twenty ",
        "Thirty ",
        "Forty ",
        "Fifty ",
        "Sixty ",
        "Seventy ",
        "Eighty ",
        "Ninety ",
    ];

    converted = "";
    num > 19
        ? (converted += _20to90[parseInt(num / 10)] + _1to19[num % 10])
        : (converted += _1to19[num]);

    return converted;
};

const numberToWords = (num) => {
    let finalString = "";
    let negative = false;

    if (num == 0) {
        return "Zero";
    }

    if (!num || typeof num == "string") {
        return "Please enter a number";
    }

    if (num < 0) {
        negative = true;
        num = Math.abs(num);
        console.log(num);
    }
    let len = num.toString().length;

    if (len >= 22) {
        return "We don't do that here! Maximum 20 digits are allowed (Maha Shankh).";
    }
    if (len > 19) {
        converted = convert(parseInt(num / 10 ** 19));
        finalString += converted + " Maha Shankh ";
    }

    if (len > 17) {
        converted = convert(parseInt(num / 10 ** 17) % 100);
        finalString += converted + " Shankh ";
    }

    if (len > 15) {
        converted = convert(parseInt(num / 10 ** 15) % 100);
        finalString += converted + " Padma ";
    }

    if (len > 13) {
        converted = convert(parseInt(num / 10 ** 13) % 100);
        finalString += converted + " Neel ";
    }
    if (len > 11) {
        converted = convert(parseInt(num / 10 ** 11) % 100);
        finalString += converted + " Kharab ";
    }

    if (len > 9) {
        converted = convert(parseInt(num / 10 ** 9) % 100);
        finalString += converted + " Arab ";
    }
    if (len > 7) {
        converted = convert(parseInt(num / 10 ** 7) % 100);
        finalString += converted + " Crore ";
    }

    if (len > 5) {
        converted = convert(parseInt(num / 10 ** 5) % 100);
        finalString += converted + " Lakh ";
    }

    if (len > 3) {
        converted = convert(parseInt(num / 10 ** 3) % 100);
        finalString += converted + " Thousand ";
    }
    if (len > 2) {
        converted = convert(parseInt(num / 100) % 10);
        finalString += converted + " Hundred ";
    }

    finalString += convert(num % 100);

    if (negative) finalString = "Minus " + finalString;

    return finalString;
};

module.exports = numberToWords;
