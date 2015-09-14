var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var util = require('gulp-util');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var Server = require('karma').Server;


gulp.task('jscs', function(){
	return gulp.src('./src/js/app.js')
	.pipe(jscs())
	.pipe(jshint())
	.pipe(jshint.reporter('jshint-stylish', {verbose:true}))
	.pipe(jshint.reporter('fail'))
});

gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

gulp.task('dev',['test','jscs'], function(){
   return browserify('./src/js/app.js')
   .bundle()
   .pipe(source('bundle.js'))
   .pipe(buffer())
   .pipe(gulp.dest('./public/javascripts'));
});