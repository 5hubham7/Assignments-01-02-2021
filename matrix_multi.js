const matrixMul = (arr1, arr2) => {
    var arr3 = [...Array(arr1.length)].map((e) =>
        Array(arr2[0].length).fill(0)
    );
    for (let i in arr1) {
        for (let j in arr2[0]) {
            for (let k in arr2) {
                arr3[i][j] += arr1[i][k] * arr2[k][j];
            }
        }
    }
    return arr3;
};

mat1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
mat2 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 1, 2, 3],
];

result = matrixMul(mat1, mat2);
for (let row in result) {
    console.log(result[row]);
}
