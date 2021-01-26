/**
 * Returns a Promise that resolves after waiting `milliseconds`.
 * @param milliseconds
 */
exports.wait = function (milliseconds) {
	return new Promise(function (resolve) {
		return setTimeout(resolve, milliseconds);
	});
};
