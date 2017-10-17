function PubSub() {
	var hashData = {};

	function publish (event, payload) {
		hashData[event].forEach(callback => {
			callback(payload)
		});
	}

	function subscribe (event, callback) {
		if (!hashData[event]){
			hashData[event] = [];
		}
		hashData[event].push(callback);
	}

	return {
		publish: publish,
		subscribe: subscribe
	}
}


var publishSubcriber = new PubSub();

publishSubcriber.subscribe('event', (data) => console.log(data));
publishSubcriber.subscribe('event', (data) => console.log(data + 1));

window.setTimeout(() => {
	publishSubcriber.publish('event', 2);
}, 2000);
