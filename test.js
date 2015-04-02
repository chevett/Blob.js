require('./Blob.js');
var test = require('tape');

test('ctor works a bit', function (t) {
	t.plan(1);

	var b = new Blob();
	t.ok(b);
});
