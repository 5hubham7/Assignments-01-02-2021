def numberToWords(num):
    _0to9 = ["Zero", "One", "Two", "Three", "Four",
             "Five", "Six", "Seven", "Eight", "Nine"]

    _10to19 = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen",
               "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"]

    _20to90 = ["Twenty", "Thirty", "Fourty", "Fifty",
               "Sixty", "Seventy", "Eighty", "Ninety"]

    if num == 0:
        return _0to9[num]

    elif num > 10**21:
        return "We don't do that here! Maximum 20 digits are allowed (Maha Shankh)."

    elif num >= 10**19 and num < 10**21:
        return numberToWords(num//10**19) + " Maha Shankh " + (numberToWords(num % 10**19) if num % 10**19 != 0 else "")

    elif num >= 10**17 and num < 10**19:
        return numberToWords(num//10**17) + " Shankh " + (numberToWords(num % 10**17) if num % 10**17 != 0 else "")

    elif num >= 10**15 and num < 10**17:
        return numberToWords(num//10**15) + " Padma " + (numberToWords(num % 10**15) if num % 10**15 != 0 else "")

    elif num >= 10**13 and num < 10**15:
        return numberToWords(num//10**13) + " Neel " + (numberToWords(num % 10**13) if num % 10**13 != 0 else "")

    elif num >= 10**11 and num < 10**13:
        return numberToWords(num//10**11) + " Kharab " + (numberToWords(num % 10**11) if num % 10**11 != 0 else "")

    elif num >= 10**9 and num < 10**11:
        return numberToWords(num//10**9) + " Arab " + (numberToWords(num % 10**9) if num % 10**9 != 0 else "")

    elif num >= 10**7 and num < 10**9:
        return numberToWords(num//10**7) + " Crore " + (numberToWords(num % 10**7) if num % 10**7 != 0 else "")

    elif num >= 10**5 and num < 10**7:
        return numberToWords(num//100000) + " Lakh " + (numberToWords(num % 10**5) if num % 10**5 != 0 else "")

    elif num >= 1000 and num < 10**5:
        return numberToWords(num//1000) + " Thousand " + (numberToWords(num % 1000) if num % 1000 != 0 else "")

    elif num >= 100 and num < 1000:
        return numberToWords(num//100) + " Hundred " + (numberToWords(num % 100) if num % 100 != 0 else "")

    elif num >= 20 and num < 100:
        return _20to90[(num//10)-2] + " " + (_0to9[num % 10] if num % 10 != 0 else "")

    elif num >= 10 and num <= 19:
        return _10to19[num-10]

    elif num <= 9:
        return _0to9[num]


num = int(input("Enter the number: "))
print("Answer:\n" + numberToWords(num))
