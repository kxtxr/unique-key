module.exports = function(size, prefix, ty) {
    var len;
    if(typeof size === 'object' && size.size) {
        len = size.size;
    } else len = typeof size === 'number' ? size : 16;
    if(typeof size === 'object' && size.prefix) {
        prefix = size.prefix;
    } else prefix = typeof size === 'string' ? size : prefix ? prefix : '';
    
    if(len) {
        var bucket = [
    	    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 
    	    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    	    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    	], randomString = prefix, index;
        while (len--) {
            index = Math.floor(Math.random()*62);
            randomString += bucket[index];
        }
        return randomString;
    } else {
        throw new Error("Invalid parameters passed to function");
    }
};