def maxOccurance(str1):

    dict1 = dict()

    for i in list(str1):
        dict1[i] = str1.count(i)

    maxValue = dict1[max(dict1, key=dict1.get)]

    for key, value in dict1.items():
        if value == maxValue:
            print(key, "=>", maxValue)


maxOccurance(input("Enter a string: "))
