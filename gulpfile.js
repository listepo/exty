"use strict";

var gulp   = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var beautify = require('gulp-jsbeautify');

gulp.task('lint', function() {
  return gulp.src('./**.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('test', function () {
    return gulp.src('./test/**.js', {read: false})
        .pipe(mocha());
});

gulp.task('beautify', function() {
  gulp.src('./**.js')
    .pipe(beautify());
});
