function findFirstDup(array) {
    var obj = {};
    for(var i=0;i<array.length;i++){
        if(!obj[array[i]]){
            obj[array[i]]=1;
        }
        else {
            return array[i];
        }
    }
}


function findAllDup(array) {
    var dup = [];
    var obj = {};
    for(var i=0;i<array.length;i++){
        if(!obj[array[i]]){
            obj[array[i]]=1;
        }
        else {
            dup.push(array[i]);
        }
    }
    return dup;
}

console.log(findFirstDup([1,2,3,3,4,5,4]));
console.log(findAllDup([1,2,3,3,4,5,4]));