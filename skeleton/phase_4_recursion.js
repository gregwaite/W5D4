function range(start, end) {
    if (start === end) {
        return [start];
    }
    a = range(start, end - 1);
    a.push(end);
    return a;
    
}


function sumRec(arr) {
    if (arr.length === 1) {
        return arr[0];
    }
    return sumRec(arr.slice(0, arr.length-1)) + arr[arr.length-1];    
}


function exponent (base, exp) {
    if (exp === 0) {
        return 1;
    }
    return base * exponent(base, exp-1);

}

function exponent2(base, exp) {
    if (exp === 0) {
        return 1;
    }
    if (exp % 2 === 0) {
        result = exponent2(base, exp / 2)
        return result * result
    } else {
        result = exponent2(base, (exp - 1) / 2)
        return base * result * result
    }
}


function fibonacci (n) {
    if (n === 1) {
        return [0];
    }
    if (n === 2) {
        return [0,1];
    }
    prevFibs = fibonacci(n-1);
    prevFibs.push(prevFibs[prevFibs.length - 1] + prevFibs[prevFibs.length - 2]);
    return prevFibs;
}


function deepDup (arr) {
    // if (!(arr instanceof Array)) {
    //     return arr;
    // }

    // return arr.map(element => {
    //    return deepDup(element); 
    // });
    const deeeeeeeep = [];
    arr.forEach(el => {
        if (el instanceof Array) {
            deeeeeeeep.push(deepDup(el));
        }
        else {
            deeeeeeeep.push(el);
        }

    });

    return deeeeeeeep;
}

Array.prototype.bsearch = function (target) {

};

Array.prototype.mergesort = function () {

};

Array.prototype.subsets = function () {

};