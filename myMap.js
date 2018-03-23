function myMap (arr, funct) {
    var newArr = [];
    for (let x = 0; x < arr.length; x++) {
        newArr.push(funct(arr[x]));
    }
    return newArr
}


var arr = [1,2,3];

function double(num) {
  return num * 2;
}

console.log(myMap(arr, double));
//OUTPUT: [2,4,6]

console.log(myMap(arr, function(num) {
  return num.toString();
}));
//OUTPUT: ['1','2','3'];








