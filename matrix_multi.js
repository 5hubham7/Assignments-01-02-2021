const matrixMulti = (arr1, arr2) => {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return "Object is not an array";
    }
    var arr3 = [...Array(arr1.length)].map(() => Array(arr2[0].length).fill(0));
    for (let i in arr1) {
        for (let j in arr2[0]) {
            for (let k in arr2) {
                arr3[i][j] = parseFloat(
                    (arr3[i][j] + arr1[i][k] * arr2[k][j]).toFixed(2)
                );
            }
        }
    }
    return arr3;
};

module.exports = matrixMulti;
