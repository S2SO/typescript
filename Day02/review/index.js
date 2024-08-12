var quiz1 = function (arr) { return arr.map(function (v) { return v.toUpperCase(); }); };
var quiz2 = function (name, price) {
    return {
        name: name.charAt(0).toUpperCase() + name.slice(1).toLowerCase(),
        price: price * 0.9,
        shot: 2,
    };
};
var quiz3 = function (char) { return !!char; };
