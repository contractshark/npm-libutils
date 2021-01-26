var chai_1 = require("chai");
/**
 * Used in place of expect to asynchronously test for a Promise's outcome with chai-as-promised, while awaiting for it.
 * Example usage:
 *      `(await expectAsync(somePromise)).to.throw(SomeError)`
 * @param target The promise to be tested.
 */
exports.expectAsync = async(target, Promise());
{
    try {
        return chai_1.expect(await, target);
    }
    catch (err) {
        return chai_1.expect(function () {
            throw err;
        });
    }
}
;
