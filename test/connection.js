describe('connection', function() {
this.timeout(2000);

describe('#getGeoJSON', function() {
    it('should get GeoJSON', function(done) {
        Editor.connection.getGeoJSON({
            period_id: 1,
            type: 'land'
        }, function(data) {
            assert.equal(data.type, 'FeatureCollection');
            assert.equal(typeof data.features, 'object');
            done();
        });
    });
});

describe('#getShape', function() {
    it('should get shape data', function(done) {
        Editor.connection.getShape(1, function(data) {
            assert(data.hasOwnProperty('properties'));
            assert(data.hasOwnProperty('objects'));
            done();
        });
    });
});


});
