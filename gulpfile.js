var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    less = require('gulp-less'),
    rename = require('gulp-rename'),
    browserify = require('gulp-browserify');

var paths = {
    main: 'index.js',
    less: ['styles/editor.less'],
    build: 'Editor'
};

gulp.task('browserify', function() {
    return gulp.src(paths.main)
        .pipe(browserify())
        .pipe(rename(paths.build + '.js'))
        .pipe(gulp.dest('build'));
});

gulp.task('min', function() {
    return gulp.src(paths.main)
        .pipe(browserify())
        .pipe(rename(paths.build + '.min.js'))
        .pipe(uglify({ outSourceMap: true }))
        .pipe(gulp.dest('build'));
});

gulp.task('styles', function() {
    return gulp.src(paths.less)
        .pipe(less({
            compress: true,
            cleancss: true
        }))
        .pipe(rename(paths.build + '.css'))
        .pipe(gulp.dest('build'));
});

gulp.task('watch', function() {
    gulp.watch(['src/*.js', 'lib/*.js', 'index.js'], ['browserify']);
    gulp.watch('styles/*', ['styles']);
});

gulp.task('build', ['browserify', 'min', 'styles']);
gulp.task('default', ['watch']);
