var gulp = require('gulp'),
	fileinclude = require('gulp-file-include'),
	markdown = require('gulp-markdown'),
	concat = require('gulp-concat'),
	ghpages = require('gh-pages'),
	path = require('path');

gulp.task('copy', function () {
	gulp.src([
			'./assets/bootstrap/fonts/*.*',
			'./assets/fonts/*.*'
		])
		.pipe(gulp.dest('./_gh_pages/assets/fonts'));

	gulp.src([
			'./assets/highlightJs/highlight.pack.js',
			'./assets/jquery/jquery-1.11.2.min.js',
			'./assets/bootstrap/js/bootstrap.min.js',
			'./assets/sd/raphael-min.js',
			'./assets/sd/underscore-min.js',
			'./assets/sd/sequence-diagram-min.js'
		])
		.pipe(concat('vendors.js'))
		.pipe(gulp.dest('./_gh_pages/assets/js'));

	gulp.src('./assets/css/helppage.css')
		.pipe(gulp.dest('./_gh_pages/assets/css'));

	gulp.src([
			'./assets/bootstrap/css/bootstrap.min.css',
			'./assets/highlightJs/github.css'
		])
		.pipe(concat('vendors.css'))
		.pipe(gulp.dest('./_gh_pages/assets/css'));
});

gulp.task('parse', function () {
	gulp
		.src(['index.html'])
		.pipe(fileinclude({
			filters: {
				markdown: markdown.marked
			}
		}))
		.pipe(gulp.dest('./_gh_pages'));
});

gulp.task('deploy', function () {
	ghpages.publish(path.join(__dirname, '_gh_pages'), {
	  message: 'Updated documentation'
	})
});

gulp.task('build', ['copy', 'parse'], function () {

});