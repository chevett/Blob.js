require('./Blob.js');

var dataUriToBlob = require('./data-uri-to-blob.js'),
	test = require('tape'),
	request = require('superagent');

test('ctor works a bit', function (t) {
	t.plan(1);

	var b = new Blob();
	t.ok(b);
});

test('should be able to convert a dataurl to a blob', function(t){
	t.plan(7);

	var dataUrl = 'data:image/png;base64,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';

	var blob = dataUriToBlob(dataUrl, 'image/png');
	console.dir(blob);
	t.equal(blob.size, 3585, 'the cat pic is 3585 bytes, so the blob should be 3585 bytes');
	t.equal(blob.type, 'image/png', 'the cat pic is a png, the blob should be a png');



	var name = Date.now() +'.png';
	var imageUrl = 'https://s3.amazonaws.com/no-rules-666/'+name;

		var reader = new FileReader();
		reader.addEventListener("loadend", function(e) {
			request.put(imageUrl)
				.set('Content-type', 'image/png')
				.send(new Int8Array(e.target.result))
				.end(function(err, res){
					t.notOk(err, 'no upload error');
					t.equal(res.status, 200, 'upload all good.');
					

					request.get(imageUrl)
						.end(function(err, res){
							t.notOk(err, 'no download error');
							t.equal(res.status, 200, 'download all good');
							t.equal(res.text.length, 3472, 'the download is not empty');

						});

				});
		});
		reader.readAsArrayBuffer(blob);


});
