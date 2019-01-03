Array.prototype.myEach = function (cb) {  
    for (let index = 0; index < this.length; index++) {
        cb(this[index]);
    }  
};

Array.prototype.myMap = function (cb) {
    const arr = [];
    for (let index = 0; index < this.length; index++) {
        arr.push(cb(this[index]));
    }  
    return arr;
};

Array.prototype.myReduce = function (cb, acc = null) {
    
    let i = 0;

    if (!acc) {
        acc = this[i];
        i += 1;
    }

    while (i < this.length) {
        acc = cb(acc, this[i]);
        i = i + 1;        
    }
    return acc;
};

function doubler(num) {
    return num * 2;
}

function sum(x, y) {
    return x+y;
}