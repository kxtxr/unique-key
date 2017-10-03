module.exports = function(size, prefix, trans, charType) {
    var _len;
    var _charType = 'alphanum';
    if(size && typeof size === 'object' && size.size) {
        _len = size.size;
    } else _len = typeof size === 'number' ? size : 16;
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
    if(size && typeof size === 'object' && size.charType
        && (size.charType === 'alphanum' || size.charType === 'numeric' || size.charType === 'num' || size.charType === 'alpha')
    ) {
        _charType = size.charType;
    } else if(charType && typeof charType == 'string' && (charType === 'numeric' || charType === 'num' || charType === 'alpha' || charType === 'alphanum')) {
        _charType = charType;
    }
    if(_len) {
        var bucket = [];
        if(_charType === 'numeric' || _charType === 'num' || _charType === 'alphanum')
            bucket = bucket.concat(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'])
        if(_charType === 'alpha' || _charType === 'alphanum') {
    	    bucket = bucket.concat(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    	        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    	    ]);
        }
    	var randomString = prefix, index, bucketSize = bucket.length;
        while (_len--) {
            index = Math.floor(Math.random()*bucketSize);
            randomString += bucket[index];
        }
        return transform ? transform(randomString) : randomString;
    } else {
        throw new Error("Invalid parameters passed to function");
    }
};