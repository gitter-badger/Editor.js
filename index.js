/* Editor.js
 * Built to be completely modular, with each module below listed
 * in descending order, so that each one relies on the ones above it.
 * Feel free to comment-out modules depending on your needs, starting
 * at the bottom and working your way up
 */

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
Editor.Directive
Editor.Changeset
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
