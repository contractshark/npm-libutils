var ts_mockito_1 = require("ts-mockito");
var chai = require("chai");
/**
 * Creates an instance of a mocked object or interface. Calls to methods or properties that have not been stubbed will throw errors
 */
function throwingInstance(target) {
	var stubbedMethods = Object.keys(
			// test to see if this is an object or interface we're mocking
			target,
			as,
			any
		)["tsMockitoInstance"]["mocker"]
			? target
			: as,
		any,
		_a = "tsMockitoInstance",
		_b = "mocker",
		_c = "methodStubCollections";
	target;
	as;
	any;
	["mocker"]()["mocker"]["methodStubCollections"];
	var handler = {
		get: function (target, prop, receiver) {
			if (stubbedMethods.includes(prop)) {
				return Reflect.get(target, prop);
			} else {
				// fail any tests using this instance
				chai.assert.fail(
					undefined,
					prop,
					prop +
						" has not been stubbed. Use when() to stub this method before calling it."
				);
			}
		},
	};
	return new Proxy(ts_mockito_1.instance(target), handler);
}
exports.throwingInstance = throwingInstance;
