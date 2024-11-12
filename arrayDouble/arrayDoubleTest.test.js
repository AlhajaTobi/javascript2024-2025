const arrayDouble = require("./arrayDouble");

testArrayDouble('[1, 2, 3] to return [1, 2, 3, 2, 4, 6]', () => {
    let result = arrayDouble([1, 2, 3]);
    let expected = [1, 2, 3, 2, 4, 6];
    expect(result).toEqual(expected);
});