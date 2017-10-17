function Debounce(callback, delay){
	var timer;
	return function(){
		window.clearTimeout(timer);
		timer = window.setTimeout(callback, delay);
		return timer;
	}
}

var debouncer = new Debounce(function(){
	console.log("hello")
}, 3000);

debouncer();
debouncer();
debouncer();
debouncer();
debouncer();
debouncer();
