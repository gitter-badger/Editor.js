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
