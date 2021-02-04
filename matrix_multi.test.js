const matrixMulti = require("./matrix_multi");

test("Returns 'Object is not an array' matrix for empty/null matrix * empty/null matrix", () => {
    matrix1 = "";
    matrix2 = null;
    answer = "Object is not an array";
    expect(matrixMulti(matrix1, matrix2)).toBe("Object is not an array");
});

test("Returns 2x2 matrix for 2x2 matrix * 2x2 matrix", () => {
    matrix1 = [
        [1, 1],
        [1, 1],
    ];
    matrix2 = [
        [1, 1],
        [1, 1],
    ];
    answer = [
        [2, 2],
        [2, 2],
    ];
    expect(matrixMulti(matrix1, matrix2)).toMatchObject(answer);
});

test("Returns 3x3 matrix for 3x3 matrix * 3x3 matrix", () => {
    matrix1 = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ];
    matrix2 = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ];
    answer = [
        [30, 36, 42],
        [66, 81, 96],
        [102, 126, 150],
    ];
    expect(matrixMulti(matrix1, matrix2)).toMatchObject(answer);
});

test("Returns 3x3 matrix for 3x3 matrix * 3x3 matrix [with some negative values]", () => {
    matrix1 = [
        [-1, -2, -3],
        [4, 5, 6],
        [7, 8, 9],
    ];
    matrix2 = [
        [1, 2, 3],
        [4, 5, 6],
        [-7, -8, -9],
    ];
    answer = [
        [12, 12, 12],
        [-18, -15, -12],
        [-24, -18, -12],
    ];
    expect(matrixMulti(matrix1, matrix2)).toMatchObject(answer);
});

test("Returns 3x3 matrix for 3x3 matrix * 3x3 matrix [with some fractions]", () => {
    matrix1 = [
        [1, 2, 3 / 2],
        [4, 5, 6 / 2],
        [7, 8, 9 / 2],
    ];
    matrix2 = [
        [1, 2, 3],
        [4 / 2, 5 / 2, 6 / 2],
        [7, 8, 9],
    ];
    answer = [
        [15.5, 19, 22.5],
        [35, 44.5, 54],
        [54.5, 70, 85.5],
    ];
    expect(matrixMulti(matrix1, matrix2)).toMatchObject(answer);
});

test("Returns 3x3 matrix for 3x3 matrix * 3x3 matrix [with all 0's]", () => {
    matrix1 = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];
    matrix2 = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];
    answer = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];
    expect(matrixMulti(matrix1, matrix2)).toMatchObject(answer);
});

test("Returns 3x3 matrix for 3x3 matrix * 3x3 matrix [with all 1's]", () => {
    matrix1 = [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
    ];
    matrix2 = [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
    ];
    answer = [
        [3, 3, 3],
        [3, 3, 3],
        [3, 3, 3],
    ];
    expect(matrixMulti(matrix1, matrix2)).toMatchObject(answer);
});

test("Returns 3x4 matrix for 3x3 matrix * 3x4 matrix", () => {
    matrix1 = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ];
    matrix2 = [
        [1, 2, 3, 1],
        [4, 5, 6, 1],
        [7, 8, 9, 1],
    ];
    answer = [
        [30, 36, 42, 6],
        [66, 81, 96, 15],
        [102, 126, 150, 24],
    ];
    expect(matrixMulti(matrix1, matrix2)).toMatchObject(answer);
});

test("Returns 3x3 matrix for 3x4 matrix * 4x3 matrix", () => {
    matrix1 = [
        [1, 2, 3, 1],
        [4, 5, 6, 1],
        [7, 8, 9, 1],
    ];
    matrix2 = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 2, 3],
    ];
    answer = [
        [31, 38, 45],
        [67, 83, 99],
        [103, 128, 153],
    ];
    expect(matrixMulti(matrix1, matrix2)).toMatchObject(answer);
});

test("Returns 4x4 matrix for 4x3 matrix * 3x4 matrix", () => {
    matrix1 = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 2, 3],
    ];
    matrix2 = [
        [1, 2, 3, 1],
        [4, 5, 6, 1],
        [7, 8, 9, 1],
    ];
    answer = [
        [30, 36, 42, 6],
        [66, 81, 96, 15],
        [102, 126, 150, 24],
        [30, 36, 42, 6],
    ];
    expect(matrixMulti(matrix1, matrix2)).toMatchObject(answer);
});
