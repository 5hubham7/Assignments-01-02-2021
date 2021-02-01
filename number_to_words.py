def convert(num):
    _1to19 = ["", "One ", "Two ", "Three ", "Four ", "Five ", "Six ", "Seven ", "Eight ", "Nine ", "Ten ", "Eleven ",
              "Twelve ", "Thirteen ", "Fourteen ", "Fifteen ", "Sixteen ", "Seventeen ", "Eighteen ", "Nineteen "]

    _20to90 = ["", "", "Twenty ", "Thirty ", "Forty ",
               "Fifty ", "Sixty ", "Seventy ", "Eighty ", "Ninety "]

    converted = ""

    if (num > 19):
        converted += _20to90[num // 10] + _1to19[num % 10]
    else:
        converted += _1to19[num]
    return converted


def numberToWords(num):

    finalString = ""
    negative = False

    if num[0] == "-":
        negative = True
        num = num[1:]
        # print(num)

    if not num.isnumeric():
        return "Please enter the valid number"

    else:
        # removing the leading zeros from the string is there is any
        if num == "0":
            return "Zero"
        num = num.lstrip('0')
        length = len(num)
        print("length:", length)
        # finally converting string to integer for further logic
        num = int(num)

        if length > 21:
            return "We don't do that here! Maximum 20 digits are allowed (Maha Shankh)."

        if length > 19:
            converted = convert((num // 10**19))
            finalString += converted + "Maha Shankh "
            print(finalString)

        if length > 17:
            converted = convert((num // 10**17) % 100)
            finalString += converted + "Shankh "

        if length > 15:
            converted = convert((num // 10**15) % 100)
            finalString += converted + "Padma "

        if length > 13:
            converted = convert((num // 10**13) % 100)
            finalString += converted + "Neel "

        if length > 11:
            converted = convert((num // 10**11) % 100)
            finalString += converted + "Kharab "

        if length > 9:
            converted = convert((num // 10**9) % 100)
            finalString += converted + "Arab "

        if length > 7:
            converted = convert((num // 10**7) % 100)
            finalString += converted + "Crore "

        if length > 5:
            converted = convert((num // 10**5) % 100)
            finalString += converted + "Lakh "

        if length > 3:
            converted = convert((num // 10**3) % 100)
            finalString += converted + "Thousand "

        if length > 2:
            converted = convert((num // 100) % 10)
            finalString += converted + "Hundred "

        finalString += convert((num % 100))

        if negative:
            finalString = "Minus " + finalString

        return finalString


num = input("Enter the number: ")
print("Answer:\n" + numberToWords(num))
