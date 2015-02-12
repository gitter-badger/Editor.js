(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Editor = {};

window.Editor = module.exports = Editor;

Editor.VERSION = require('./package.json').version;

// COMMON ACTIONS
// Replace with custom libraries to your hearts content
Editor.show = {
    log: console.log.bind(console),
    alert: alert.bind(window),
    loading: require('./src/loading')
};

// Connects to the REST API
// Used to send/receive raw data
Editor.connection = require('./src/connection');

/*
Editor.Node
Editor.Way
Editor.Shape
Editor.Period
*/

// Contains a complete history of changes for all objects
//Editor.history = require('./src/history')

// Creates and maintains a vectorized map
// Requires Leaflet & d3
//Editor.map = require('./map');

// Provides editing/drawing functions
//Editor.draw = require('./draw');

// Geometry functions
// Editor.geometry = { union, intersection, ... };

},{"./package.json":4,"./src/connection":6,"./src/loading":7}],2:[function(require,module,exports){
module.exports=require(1)
},{"./package.json":4,"./src/connection":6,"./src/loading":7}],3:[function(require,module,exports){
(function(t,e){if(typeof exports=="object")module.exports=e();else if(typeof define=="function"&&define.amd)define(e);else t.Spinner=e()})(this,function(){"use strict";var t=["webkit","Moz","ms","O"],e={},i;function o(t,e){var i=document.createElement(t||"div"),o;for(o in e)i[o]=e[o];return i}function n(t){for(var e=1,i=arguments.length;e<i;e++)t.appendChild(arguments[e]);return t}var r=function(){var t=o("style",{type:"text/css"});n(document.getElementsByTagName("head")[0],t);return t.sheet||t.styleSheet}();function s(t,o,n,s){var a=["opacity",o,~~(t*100),n,s].join("-"),f=.01+n/s*100,l=Math.max(1-(1-t)/o*(100-f),t),u=i.substring(0,i.indexOf("Animation")).toLowerCase(),d=u&&"-"+u+"-"||"";if(!e[a]){r.insertRule("@"+d+"keyframes "+a+"{"+"0%{opacity:"+l+"}"+f+"%{opacity:"+t+"}"+(f+.01)+"%{opacity:1}"+(f+o)%100+"%{opacity:"+t+"}"+"100%{opacity:"+l+"}"+"}",r.cssRules.length);e[a]=1}return a}function a(e,i){var o=e.style,n,r;i=i.charAt(0).toUpperCase()+i.slice(1);for(r=0;r<t.length;r++){n=t[r]+i;if(o[n]!==undefined)return n}if(o[i]!==undefined)return i}function f(t,e){for(var i in e)t.style[a(t,i)||i]=e[i];return t}function l(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)if(t[o]===undefined)t[o]=i[o]}return t}function u(t){var e={x:t.offsetLeft,y:t.offsetTop};while(t=t.offsetParent)e.x+=t.offsetLeft,e.y+=t.offsetTop;return e}function d(t,e){return typeof t=="string"?t:t[e%t.length]}var p={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:1/4,fps:20,zIndex:2e9,className:"spinner",top:"auto",left:"auto",position:"relative"};function c(t){if(typeof this=="undefined")return new c(t);this.opts=l(t||{},c.defaults,p)}c.defaults={};l(c.prototype,{spin:function(t){this.stop();var e=this,n=e.opts,r=e.el=f(o(0,{className:n.className}),{position:n.position,width:0,zIndex:n.zIndex}),s=n.radius+n.length+n.width,a,l;if(t){t.insertBefore(r,t.firstChild||null);l=u(t);a=u(r);f(r,{left:(n.left=="auto"?l.x-a.x+(t.offsetWidth>>1):parseInt(n.left,10)+s)+"px",top:(n.top=="auto"?l.y-a.y+(t.offsetHeight>>1):parseInt(n.top,10)+s)+"px"})}r.setAttribute("role","progressbar");e.lines(r,e.opts);if(!i){var d=0,p=(n.lines-1)*(1-n.direction)/2,c,h=n.fps,m=h/n.speed,y=(1-n.opacity)/(m*n.trail/100),g=m/n.lines;(function v(){d++;for(var t=0;t<n.lines;t++){c=Math.max(1-(d+(n.lines-t)*g)%m*y,n.opacity);e.opacity(r,t*n.direction+p,c,n)}e.timeout=e.el&&setTimeout(v,~~(1e3/h))})()}return e},stop:function(){var t=this.el;if(t){clearTimeout(this.timeout);if(t.parentNode)t.parentNode.removeChild(t);this.el=undefined}return this},lines:function(t,e){var r=0,a=(e.lines-1)*(1-e.direction)/2,l;function u(t,i){return f(o(),{position:"absolute",width:e.length+e.width+"px",height:e.width+"px",background:t,boxShadow:i,transformOrigin:"left",transform:"rotate("+~~(360/e.lines*r+e.rotate)+"deg) translate("+e.radius+"px"+",0)",borderRadius:(e.corners*e.width>>1)+"px"})}for(;r<e.lines;r++){l=f(o(),{position:"absolute",top:1+~(e.width/2)+"px",transform:e.hwaccel?"translate3d(0,0,0)":"",opacity:e.opacity,animation:i&&s(e.opacity,e.trail,a+r*e.direction,e.lines)+" "+1/e.speed+"s linear infinite"});if(e.shadow)n(l,f(u("#000","0 0 4px "+"#000"),{top:2+"px"}));n(t,n(l,u(d(e.color,r),"0 0 1px rgba(0,0,0,.1)")))}return t},opacity:function(t,e,i){if(e<t.childNodes.length)t.childNodes[e].style.opacity=i}});function h(){function t(t,e){return o("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',e)}r.addRule(".spin-vml","behavior:url(#default#VML)");c.prototype.lines=function(e,i){var o=i.length+i.width,r=2*o;function s(){return f(t("group",{coordsize:r+" "+r,coordorigin:-o+" "+-o}),{width:r,height:r})}var a=-(i.width+i.length)*2+"px",l=f(s(),{position:"absolute",top:a,left:a}),u;function p(e,r,a){n(l,n(f(s(),{rotation:360/i.lines*e+"deg",left:~~r}),n(f(t("roundrect",{arcsize:i.corners}),{width:o,height:i.width,left:i.radius,top:-i.width>>1,filter:a}),t("fill",{color:d(i.color,e),opacity:i.opacity}),t("stroke",{opacity:0}))))}if(i.shadow)for(u=1;u<=i.lines;u++)p(u,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(u=1;u<=i.lines;u++)p(u);return n(e,l)};c.prototype.opacity=function(t,e,i,o){var n=t.firstChild;o=o.shadow&&o.lines||0;if(n&&e+o<n.childNodes.length){n=n.childNodes[e+o];n=n&&n.firstChild;n=n&&n.firstChild;if(n)n.opacity=i}}}var m=f(o("group"),{behavior:"url(#default#VML)"});if(!a(m,"transform")&&m.adj)h();else i=a(m,"animation");return c});
},{}],4:[function(require,module,exports){
module.exports={
  "name": "atlastory-editor",
  "version": "0.0.1",
  "description": "Front-end library for connecting with the Atlastory API and editing maps.",
  "main": "index.js",
  "directories": {
    "test": "test"
  },
  "scripts": {
    "test": "testem"
  },
  "repository": {
    "type": "git",
    "url": "git://github.com/atlastory/Editor.js.git"
  },
  "author": "Atlastory, Inc.",
  "license": "BSD",
  "bugs": {
    "url": "https://github.com/atlastory/Editor.js/issues"
  },
  "homepage": "https://github.com/atlastory/Editor.js",
  "dependendies": {
    "lodash": "~3.1.0",
    "d3": "3.5.5"
  },
  "devDependencies": {
    "testem": "^0.6.39",
    "gulp-rename": "^1.2.0",
    "gulp": "^3.8.11",
    "gulp-uglify": "^1.1.0",
    "gulp-browserify": "^0.5.1",
    "gulp-less": "^2.0.1"
  }
}

},{}],5:[function(require,module,exports){
module.exports = {
    api: "http://api.atlastory.com/",
    version: "v1"
};

},{}],6:[function(require,module,exports){
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

},{"../index":2,"./config":5}],7:[function(require,module,exports){
var Spin = require('../lib/spin');

var spinner, spinning;

// Loading spinner (via https://github.com/makinacorpus/Leaflet.Spin)
// Settings: http://fgnass.github.io/spin.js/
module.exports = function(state) {
    if (!!state) {
        if (!spinner) {
            var body = document.getElementsByTagName('body')[0];
            spinner = new Spin({
                shadow: true,
                hwaccel: true
            }).spin(body);
            spinning = 0;
        }
        spinning++;
    } else {
        spinning--;
        if (spinning <= 0 && spinner) {
            spinner.stop();
            spinner = null;
        }
    }
};

},{"../lib/spin":3}]},{},[1])