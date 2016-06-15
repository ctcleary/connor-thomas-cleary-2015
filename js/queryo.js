/**
 * QueryO.js
 * Author: Connor Thomas Cleary - github/ctcleary
 * Version: v1.1
 *
 *
 * # Summary:
 *
 * A singleton utility that automatically parses the query string parameters of the
 * current url into an Object on page load. Also supports getting parameters with 
 * type conversion, including nested arrays.
 *
 *
 * # Public Methods Supported:
 *
 * QueryO.getAs(paramName, asType);
 * QueryO.get();
 * QueryO.get(paramName);
 * QueryO.get(paramName, options);
 * QueryO.getAsArray(paramName);
 * QueryO.getAsArray(paramName, opt_ofType);
 * QueryO.getAsArray(paramName, opt_ofType, opt_splitter);
 *
 *
 * # Public Method Details:
 *
 * QueryO.getAs(paramName, asType) // @returns <asType> -- Attempts to convert the value to <asType>
 *
 * QueryO.get()                   // @returns <object> -- full object as { 'string-key': 'string-value' }
 * QueryO.get(paramName)          // @returns <string> -- 'string-value' of the matching parameter key, or `undefined`
 * QueryO.get(paramName, options) // @returns: <T> -- Advanced usage, see options schema for details:
 *     `options` schema: {
 *         as: 'array'|'number'|'boolean'|'string', // Sets the return type / attempts to convert value to this type
 *         of: 'array'|'number'|'boolean'|'string', // Array subtype. For use when (`as` === 'array') Example: { as: 'array', of: 'number' }
 *         splitter: 'string' // (Default: ',') Sets the top-level array splitter. Useful for nested arrays (e.g. "1,2,3|6,5,4")
 *     }
 *
 * QueryO.getAsArray(paramName)                 // @returns <array<string>> -- Returns the value as an array.
 * QueryO.getAsArray(paramName, opt_ofType)     // @returns <array<T>> -- Returns the value as an array of `opt_ofType`.
 * QueryO.getAsArray(paramName, opt_ofType, opt_splitter) // @returns <array<T>> -- Same as above, but using a custom array splitter. (e.g. "a|b|c")
 *
 *
 * # Example Usage:
 *
 * QueryO.get();
 *   // Given URL:   http://example.com?someParam=someValue&anotherParam=1234
 *   // returns:     { 'someParam': 'someValue', 'anotherParam': '1234' }
 *
 * QueryO.get('productIds', { as: 'array', of: 'number' });
 *   // Given URL:   http://example.com?productIds=123,654,789
 *   // returns:     [123, 654, 789]
 *
 * QueryO.get('complexParam', { as: 'array', of: 'array', splitter: '|' });
 *   // Given URL:   http://example.com?complexParam=a,b,c|valOne,valTwo,valThree|someString
 *   // returns:     [['a', 'b', 'c'], ['valOne', 'valTwo', 'valThree'], ['someString']]
 *
 */

var QueryO = (function() {
    var _queryString;
    var _obj;

    var DEFAULT_TYPE = 'string';
    var DEFAULT_SPLITTER = ',';

    // For type safety, avoiding native overwrite, and avoiding restricted names.
    var CONVERSION_KEY_MAP = {
        'string': 'toStr',
        'boolean': 'toBool',
        'number': 'toNum',
        'array': 'toArr'
    };


    function _getAsType(val, options) {
        var asType = options.as.toLowerCase();
        asType = _validateType(asType);

        var conversionKey = CONVERSION_KEY_MAP[asType];
        return _convert[conversionKey](val, options);
    }

    function _validateType(asType) {
        var result = asType;
        var supportedTypes = /^(array|number|boolean|string)$/;
        var isSupported = supportedTypes.test(result);
        result = (isSupported) ? asType : DEFAULT_TYPE;
        return result;
    }

    var _convert = {
        toStr: function(val) {
            return decodeURIComponent(val);
        },
        toBool: function(val) {
            return (val === 'true' || val === '1');
        },
        toNum: function(val) {
            if (val.indexOf('.') !== -1) {
                return parseFloat(val);
            }
            return parseInt(val, 10);
        },
        toArr: function(val, options) {
            var result;
            var subType = DEFAULT_TYPE; // default.
            var conversionKey = CONVERSION_KEY_MAP[subType];
            var splitter = options.splitter || DEFAULT_SPLITTER;
            result = val.split(splitter);

            if (options.of) { // i.e. { as: 'array', of: 'string' }
                subType = options.of.toLowerCase();
                subType = _validateType(subType);
                conversionKey = CONVERSION_KEY_MAP[subType];
            }

            for (var i = 0; i < result.length; i++) {
                result[i] = _convert[conversionKey](result[i]);
            }

            return result;
        }
    };



    function _getQueryString() {
        var raw = window.location.href;
        if (raw.indexOf('?') === -1) {
            return '';
        }
        return raw.substr(raw.indexOf('?')+1);
    }

    function _getCleanString(queryString) {
        var cleanStr = queryString;
        // In case we have a hashpath at the end, slice it off.
        if (cleanStr.indexOf('#') !== -1) {
            cleanStr.substr(0, cleanStr.indexOf('#'));
        }
        return cleanStr;
    }

    function _init() {
        _queryString = _getQueryString();
        if (!_queryString.length) {
            _obj = {}; // No querystring, set to empty object.
            return;
        }

        var pairs;
        var result = {};

        pairs = _getCleanString(_queryString).split('&');
        for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i].split('=');
            result[pair[0]] = _convert.toStr(pair[1]);
        }

        _obj = result;
    }


    _init();

    return {
        /**
         * Get the full raw object, or get a specific parameter.
         *
         * @param {String=} opt_paramName -- Query string parameter key.
         * @param {Object<String,String>=} options -- Options object, see documentation above.
         */
        get: function(opt_paramName, options /* as, of, splitter */) {
            if (!opt_paramName) {
                return this.obj(); // Return the whole object.
            }

            var val = this.obj()[opt_paramName];
            if (!val) {
                return; // This param doesn't exist.
            }

            var opts = options || {};
            if (!options || !options.as) {
                opts.as = DEFAULT_TYPE;
            }

            return _getAsType(val, options);
        },

        /**
         * @param {String} paramName -- Query string parameter key.
         * @param {String} asType -- Type 'array'|'number'|'boolean'|'string'
         */
        getAs: function(paramName, asType) {
            return this.get(paramName, { as: asType });
        },

        /**
         * @param {String} paramName -- Query string parameter key.
         * @param {String=} opt_ofType -- The data type of the array members.
         * @param {String=} opt_splitter -- Array splitter, default is ','
         */
        getAsArray: function(paramName, opt_ofType, opt_splitter) {
            var type = opt_ofType || DEFAULT_TYPE;
            var options = { as: 'array', of: type };
            options.splitter = opt_splitter || DEFAULT_SPLITTER;
            return this.get(paramName, options);
        },

        /**
         * @returns {Object} -- Full query string converted to a {'string':'string'} object.
         */
        obj: function() {
            return JSON.parse(JSON.stringify(_obj)); // Return a clone to protect the source data.
        },
    };
})();
