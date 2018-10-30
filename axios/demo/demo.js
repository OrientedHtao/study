function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, 
    function processHeader(value, name) {
        console.log(value, name)
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};
const utils = {
    isArray: function (val) {
        return toString.call(val) === '[object Array]'
    }
    forEach: function (obj, fn) {
        if (obj === null || typeof obj === 'undefined') {
            return;
        }

        if (typeof obj !== 'object') {
            obj = [obj]
        }

        if (isArray(obj)) {
            for (var i = 0, l= obj.length; i < l ; i++ ) {
                fn.call(null, obj[i], i, obj)
            }
        } else {
            for (var key in obj) {
                fn.call(null, obj[key], key, obj);
            }
        }
    }
}


// 实验
function request(config) {
    
}