const isPalindrome = (str) => {
    return str == str.split("").reverse().join("");
};

const check = () => {
    let str = document.getElementById("str").value;
    if (isPalindrome(str)) {
        document.getElementById("result").innerHTML = "String is palindrome!";
    } else {
        document.getElementById("result").innerHTML =
            "String is not palindrome!";
    }
};
