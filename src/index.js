module.exports = function(size, prefix, trans) {
    var len;
    if(size && typeof size === 'object' && size.size) {
        len = size.size;
    } else len = typeof size === 'number' ? size : 16;
    if(size && typeof size === 'object' && size.prefix) {
        prefix = size.prefix;
    } else prefix = typeof size === 'string' ? size : prefix ? prefix : '';
    if((size && typeof size === 'object' && size.transform && 
    (size.transform === 'upper' || size.transform === 'lower')
    ) || trans && typeof trans == 'string' && (trans === 'upper' || trans === 'lower')) {
        var transform = function(string) {
            return size.transform === 'upper' || trans === 'upper' ? string.toUpperCase() : string.toLowerCase();
        };
    }
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
        return transform ? transform(randomString) : randomString;
    } else {
        throw new Error("Invalid parameters passed to function");
    }
};