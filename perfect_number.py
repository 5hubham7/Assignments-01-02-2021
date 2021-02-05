def perfect_number(n):
    print("Perfect Numbers:")
    for i in range(1, n):
        sum = 0
        for j in range(1, i):
            if i % j == 0:
                sum += j
        if sum == i:
            print(i)


perfect_number(int(input("Enter the number: ")))
