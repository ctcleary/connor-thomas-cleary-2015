/**
 * Public Methods Supported:
 * QueryO.get(opt_paramName, options)  // With no parameters: Returns full object as { 'string-key': 'string-value' }
 *                                     // With opt_paramName: Returns 'string-value' of the matching parameter key, or `undefined`
 *                                     // Supported `options`:
 *                                     //     'as': 'array'||'number'||'boolean' // Instead of the string-value, process the parameter's value as a type.
 *                                     //     'of': 'array'||'number'||'boolean' // If getting param as an 'array', 'of' determines the types contained in the array.
 *                                                                    //   * Note: 'of':array' only works if sub-arrays are split by commas ','
 *                                     //     'splitter': String      // Provide the character for splitting the top-level array. (Default: ',')
 *
 *
 * Example Usage:
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

    function getQueryString() {
        var raw = window.location.href;
        if (raw.indexOf('?') === -1) {
            return '';
        }
        return raw.substr(raw.indexOf('?')+1);
    }

    _queryString = getQueryString();
    if (!_queryString.length) {
        _obj = {}; // No querystring, set to empty object.
    }

    return {
        obj: function() {
            if (_obj) {
                return _obj;
            }

            var pairs;
            var result = {};

            pairs = this._getCleanString().split('&');
            for (var i = 0; i < pairs.length; i++) {
                var pair = pairs[i].split('=');
                result[pair[0]] = this._toStr(pair[1]);
            }

            _obj = result;
            return _obj;
        },
        /**
         * Get the full raw object, or get a specific parameter.
         * @param {String=} opt_paramName The name of a specific parameter.
         * @param {Object<String,String>=} options Options object: { as: 'array'||'number', of: 'array'||'number', splitter: 'string' }
         */
        get: function(opt_paramName, options /* as, of, splitter */) {
            if (!opt_paramName) {
                return this.obj(); // Return the whole object.
            }
            var val = this.obj()[opt_paramName];

            if (!val) {
                return; // This param doesn't exist.
            }
            if (!options || !options.as) { // i.e. "get('arrayParam', { as: 'array', of: 'number' }"
                return this._toStr(val); // Return the string value.
            }

            return this._getAsType(val, options);
        },

        _getAsType: function(val, options) {
            var type = options.as.toLowerCase();
            var result;
            switch (type) {
                case 'array':
                    return this._toArray(val, options);
                case 'number':
                    return this._toNum(val);
                case 'boolean':
                    return (val === 'true' || val === '1');
                default:
                    return this._toStr(val); // type doesn't match any supported implementation.
            }
        },
        _toArray: function(val, options) {
            var result;
            var splitter = options.splitter || ',';
            result = val.split(splitter);

            if (options.of) { // i.e. { as: 'array', of: 'string' }
                var subType = options.of.toLowerCase();
                if (subType !== 'array' && subType !== 'number') {
                    return result; // small optimization, return array of string
                }

                for (var i = 0; i < result.length; i++) {
                    switch (subType) {
                        case 'array':
                            result[i] = this._toArray(result[i]); // subArray always has to be , delimited
                            break;
                        case 'number':
                            result[i] = this._toNum(result[i]);
                            break;
                        default:
                    }
                }
            }

            return result;
        },
        _toNum: function(val) {
            if (val.indexOf('.') !== -1) {
                return parseFloat(val);
            }
            return parseInt(val, 10);
        },
        _toStr: function(val) {
            return decodeURIComponent(val);
        },
        _getCleanString: function() {
            var cleanStr = _queryString;
            if (cleanStr.indexOf('#') !== -1) { // In case we have a hashpath at the end, slice it off.
                cleanStr.substr(0, cleanStr.indexOf('#'));
            }
            return cleanStr;
        }
    };
})();
