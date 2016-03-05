var gulp = require('gulp');
var babel = require('gulp-babel');
var gutil = require('gulp-util');
var plumber = require('gulp-plumber');
var gmjml = require('gulp-mjml');
var mjml = require('mjml');
var handlebars = require('gulp-handlebars');
var defineModule = require('gulp-define-module');

var path ={
	DEST: 'build',
	BUILTJS: 'build/**/*.js',
	JS: 'src/**/*.js',
	MJML: 'src/**/*.mjml'
};

gulp.task('build', function(){
	return gulp.src(path.JS)
		.pipe(plumber())
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest(path.DEST));
});

gulp.task('watch', ['build', 'compile-mjml'], function(){
	gulp.watch(path.JS, ['build']);
	gulp.watch(path.MJML, ['compile-mjml']);
});

gulp.task('compile-mjml', function(){
	return gulp.src(path.MJML)
		.pipe(plumber())
		.pipe(gmjml(mjml))
		.pipe(handlebars())
		.pipe(defineModule('node'))
		.pipe(gulp.dest(path.DEST));
});

gulp.task('default', ['watch']);