var gulp = require('gulp'),
	fileinclude = require('gulp-file-include'),
	markdown = require('gulp-markdown');

gulp.task('copy', function() {
	gulp.src('./assets/**/*.*')
		.pipe(gulp.dest('./_gh_pages/assets/'));
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

gulp.task('build', ['copy', 'parse'], function () {

});