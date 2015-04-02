module.exports = function(dataURI, type){
	var u = dataURI.split(',')[1],
    	binary = atob(u),
    	array = [];

    for (var i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i));
    }

	var b =  new Blob([new Uint8Array(array)], {type: type});
	return b;
};
