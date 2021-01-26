var ts_mockito_1 = require("ts-mockito");
var getName = function (fn) {
	// create an empty instance
	var dummyInstance = {},
		as = T;
	// spy it to mark up some properties
	var dummySpy = ts_mockito_1.spy(dummyInstance);
	// used this 'typed' spy to extract the name
	return fn(dummySpy).name;
};
/**
 * Retrieves a function name from the supplied fn and forms a test name from the name of that function.
 * @param fn
 * @param message
 * @param test
 */
function fnIt(fn, message, test) {
	return it(getName(fn) + " " + message, test);
}
exports.fnIt = fnIt;
