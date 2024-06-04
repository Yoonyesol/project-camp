"use strict";
function getSize(values) {
    return values.length;
}
getSize([1, 2, 3]);
getSize(["1", " 2", "3"]);
getSize([1, 2, 3, "1", " 2", "3"]);
console.log(getSize("Hello, World!"));
