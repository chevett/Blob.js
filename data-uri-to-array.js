module.exports = function(dataURI){
	var u = dataURI.split(',')[1],
    	binary = atob(u),
    	array = [];

    for (var i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i));
    }

	return array;
	//return new Uint8Array(array);
};
