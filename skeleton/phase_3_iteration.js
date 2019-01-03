Array.prototype.bubbleSort = function() {
    let sorted = false;

    while (!sorted) {
        sorted = true;
        for (let i = 0; i < this.length-1; i++) {
            for (let j = i+1; j < this.length; j++) {
                if (this[j] < this[i]) {
                    // let temp = this[i];
                    // this[i] = this[j];
                    // this[j] = temp;
                    [this[i], this[j]] = [this[j], this[i]];
                    sorted = false;
                }                
            }            
        }
    }
    return this;
};

String.prototype.substrings = function() {
    let array = [];
    for (let start = 0; start < this.length-1; start++) {
        const element = this[start];
        for (let end = start + 1; end < this.length; end++) {
            const element = this[end];
            array.push(this.slice(start, end))
        }        
    }
    return array;
};