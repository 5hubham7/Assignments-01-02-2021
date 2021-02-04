const getFrequency = (text) => {
    text = text.replace(/[^a-zA-Z ]/g, ""); //removing symbols if there is any
    let allWords = text.split(" ");
    let frequency = new Map();
    frequency = allWords.reduce((acc, curr) => {
        curr = curr.toLowerCase();
        if (typeof acc[curr] == "undefined") {
            acc[curr] = 1;
        } else {
            acc[curr] += 1;
        }
        return acc;
    }, {});
    return frequency;
};

const wordFrequency = (text, word) => {
    if (!text) {
        return "Text cannot be empty!";
    } else if (!word) {
        return "Word cannot be empty!";
    } else if (word.split(" ").length > 1) {
        return "Please enter just one word";
    } else {
        let frequency = getFrequency(text);
        for (let i in frequency) {
            if (i == word.toLowerCase()) {
                return frequency[i];
            }
        }
        return "Not Found!";
    }
};

module.exports = wordFrequency;
