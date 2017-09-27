var h = new Object(); // or just {}
h['one'] = 1;
h['two'] = 2;
h['three'] = 3;

for (var k in h) {
    if (h.hasOwnProperty(k)) {
        console.log('key is: ' + k + ', value is: ' + h[k]);
    }
}



function HashTable(obj){
    this.length = 0;
    this.items = {};
    for (var p in obj) {
        if (obj.hasOwnProperty(p)) {
            this.items[p] = obj[p];
            this.length++;
        }
    }
}
 