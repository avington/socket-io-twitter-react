/**
 * Created by smoseley on 8/14/2015.
 */
var gulp = require('gulp');

var react = require('gulp-react');
var sourcemaps = require('gulp-sourcemaps');
var debug = require('gulp-debug');
var inject = require('gulp-inject');

var nodemon = require('gulp-nodemon');
var browserSync = require('browser-sync').create();

gulp.task('start', function () {
    nodemon({
        script: './src/server/app.js'
        , ext: 'js html'
        , env: {'NODE_ENV': 'development'}
    })
});


gulp.task('dev', ['start'], function () {

    browserSync.init({
        proxy: "http://localhost:3333/index.html"
    });


});

gulp.task('react', function () {
    return gulp.src('./src/client/**/*.jsx')
        .pipe(debug())
        .pipe(sourcemaps.init())
        .pipe(react())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./src/client'));
});

gulp.task('inject',['react'], function () {
    var target = gulp.src('./src/client/index.html');

    var sources = gulp.src([
        './src/client/app/socket/**/*.js',
        './src/client/**/*.child.js',
        './src/client/**/*.js'
        ]);

    var options = {
        read: false,
        relative: true
    };

    return target
        .pipe(inject(sources, options))
        .pipe(gulp.dest('./src/client'));
});

gulp.task('watch', function(){
    gulp.watch("src/client/**/*.jsx", ['react']);
    gulp.watch("src/client/**/*.*").on('change', browserSync.reload);
});

gulp.task('jsx-watcher',['react'], function(){
    gulp.watch("src/client/**/*.jsx", ['react']);
});

gulp.task('go', ['react', 'inject', 'dev']);