function getTempPromise (location) {
	return new Promise(function (resolve, reject) {
		resolve(79);
		reject('City not found');
	});
}

getTempPromise('Philidelphia').then(function(temp) {
	console.log('promise success', temp);
}, function(err) {
	console.log('promise error', err);
})