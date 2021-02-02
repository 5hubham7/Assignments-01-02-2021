const totalFrequency = (text) => {
    let allWords = text.split(" ");
    let count = 0;
    let frequency = new Map();
    frequency = allWords.reduce(function (acc, curr) {
        if (typeof acc[curr] == "undefined") {
            acc[curr.toLowerCase()] = 1;
        } else {
            acc[curr] += 1;
        }
        return acc;
    }, {});
    // console.log(frequency);
    return frequency;
};

// let text = document.getElementById("str").value;

const check = async () => {
    let text = document.getElementById("text").value;
    let word = document.getElementById("word").value;
    let frequency = await totalFrequency(text);
    for (let i in frequency) {
        if (i == word.toLowerCase()) {
            alert("Frequency: " + frequency[i]);
            return 0;
        }
    }
    alert("Not Found!");
};
