function sort (array) {
    return sorter(array, []);
}



function sorter(array, sorted) {
    if (array.length <= 0) {
        return sorted
    }
    

    let stillUnsorted = [];
    let currentSmallest = array.pop();
    
    for (let x=0; x < array.length; x++) {
        if (array[x] < currentSmallest) {
            stillUnsorted.push(currentSmallest);
            currentSmallest = array[x]
        } else {
            stillUnsorted.push(array[x])
        }
    }

    sorted.push(currentSmallest);
    array = stillUnsorted;
    return sorter(array, sorted);
}



array = [9, 2, 3, 8, 5, 4, 1, 7, 6, 10]
console.log(sort(array)); //Output: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
