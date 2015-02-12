/*
 * Provides all API connection functions
 */

var Editor = require('../index');
var config = require('./config');

Editor._jsonp = jsonp;
Editor._request = request;

// Makes request to API
function request(route, options, callback) {
    var url = config.api + config.version + '/';

    options.jsonp = "{callback}";
    url = buildURL(url + route, options);

    return jsonp(url, callback);
}

exports.getLevels = function(callback) {
    return request("levels.json", {}, callback);
};

exports.getGeoJSON = function(options, callback) {
    options = {
        format: options.format || "geojson",
        pid: options.pid || options.period_id,
        type: options.tid || options.type_id || options.type,
        z: options.zoom,
        bbox: options.bbox
    };
    return request("periods/{pid}/{type}.{format}", options, callback);
};

exports.getTopoJSON = function(options, callback) {
    options.format = "topojson";
    return exports.getGeoJSON(options, callback);
};

exports.getShape = function(id, format, callback) {
    if (typeof format === 'function') {
        callback = format;
        format = null;
    }
    return request("shapes/{id}.{format}", {
        id: id,
        format: format || "json"
    }, callback)
};

exports.getWay = function(id, format, callback) {
    if (typeof format === 'function') {
        callback = format;
        format = null;
    }
    return request("ways/{id}.{format}", {
        id: id,
        format: format || "json"
    }, callback)
};

//================================================================

// Utility to build API request URL
// Replaces any {variable} with matching value in options
// Adds remaining options to end of querystring
function buildURL(path, ops) {
    path = path.replace(/\{(\w+)\}/g, function (txt, key) {
        if (ops.hasOwnProperty(key)) {
            var value = ops[key];
            delete ops[key];
            return value;
        }
        return txt;
    });

    var keys = [];
    for (var key in ops) {
        if (key == 'jsonp') keys.push('callback=' + ops[key]);
        else if (ops[key] !== undefined) keys.push(key + "=" + ops[key]);
    }

    return path + '?' + keys.join('&');
}

// Utility to request JSONP from server
function jsonp(url, callback) {
    function rand() {
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
            c = '', i = -1;
        while (++i < 15) c += chars.charAt(Math.floor(Math.random() * 52));
        return c;
    }

    function create(url) {
        var e = url.match(/callback=Editor._jsonp.(\w+)/),
            c = e ? e[1] : rand();
        Editor._jsonp[c] = function(data) {
            Editor.show.loading(false);
            callback(data);
            delete jsonp[c];
            script.remove();
        };
        return 'Editor._jsonp.' + c;
    }

    Editor.show.loading(true);
    var cb = create(url);
    var script = document.createElement('script');

    script.setAttribute('type', 'text/javascript')
    script.setAttribute('src', url.replace(/(\{|%7B)callback(\}|%7D)/, cb));
    document.getElementsByTagName('head')[0].appendChild(script);
}
