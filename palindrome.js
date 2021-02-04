const checkPalindrome = (obj) => {
    if (obj) {
        let len = obj.length;
        for (let i = 0; i < len / 2; i++) {
            if (obj.charAt(i) !== obj.charAt(len - 1 - i)) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
};

module.exports = checkPalindrome;
