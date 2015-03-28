(function(factory) {
    'use strict';

    if (typeof define === 'function' && define.amd && define.amd.dust === true) {
        define(factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        factory();
    }
}(function () {
    'use strict';

    var copyObject = function (sourceObject, destObject, keyList) {
        destObject = destObject || {};
        keyList = (Array.isArray(keyList)) ? keyList : Object.keys(sourceObject);

        keyList.forEach(function (key) {
            if (undefined !== sourceObject[key]) {
                destObject[key] = sourceObject[key];
            }
        });

        return destObject;
    };

    return copyObject;
}));
