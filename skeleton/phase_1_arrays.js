Array.prototype.uniq = function() {
    const array = [];
    this.forEach(element => {        
        if (!array.includes(element)) {
            array.push(element);
        }
    });
    return array;
};

Array.prototype.twoSum = function () {
    const array = [];    
    for (let i = 0; i < this.length-1; i++) {        
        for (let j = i+1; j < this.length; j++) {            
            if (this[i] + this[j] === 0) {
                array.push([i, j]);
            }            
        }
    }
    return array;
};

Array.prototype.transpose = function () {
    const array = []; // Do not need to dimension ahead of time
    for (let col = 0; col < this[0].length; col++) {
        const trans_row = [];
        for (let row = 0; row < this.length; row++) {
            trans_row.push(this[row][col]);
        }
        array.push(trans_row);
    }
    return array;
};

// [[1,2,3], [4,5,6]]