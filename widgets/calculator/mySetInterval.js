//mySetInterval
//myClearInterval


// var a = mySetInterval(fn, delay);


// myClearInterval(a);


var testId = mySetInterval(function() {
    console.log("looping 1");
}, 2000);

setTimeout(function() {
    myClearInterval(testId);
}, 5000);


//looping1 2x in console


var setIntervalRunning =  false;
var setIntervalInstance = {};


function mySetInterval(cb, interval) {

    var randomId = Math.random(10);
    setIntervalRunning = true;

    while (setIntervalRunning) {
        setIntervalInstance[randomId] = setTimeout(function(){
            return cb();

        }, interval);
    }

    return randomId;
}


 function myClearInterval(id) {
     window.clearTimeout(setIntervalInstance[id]);
     setIntervalRunning = false;

 };
