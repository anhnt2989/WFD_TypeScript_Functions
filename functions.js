function square(num) {
    return num * num;
}
console.log(square(5));
var squareFE = function (num) {
    return num * num;
};
function add(a) {
    return function (b) {
        return a + b;
    };
}
var addWidth5 = add(5);
console.log(addWidth5(3));
console.log(addWidth5(15));
