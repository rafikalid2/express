var gulp 	= require('gulp'),
	wait	= require('gulp-wait'),
	sass 	= require('gulp-sass'),
	concat 	= require('gulp-concat'),
	json_concat = require('gulp-merge-json');


gulp.task('sass-compile', () => {
	return gulp.src('assets/scss/style.scss')
		.pipe(wait(50))
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./public/css/'));
});

gulp.task('js-concat', () => {
	return gulp.src('assets/js/**/*.js')
		.pipe(concat('script.js'))
		.pipe(gulp.dest('./public/js/'));
});

// concat locales
gulp.task('en-concat', () => {
	return gulp.src('assets_locales/en/**/*.json')
		.pipe(json_concat({fileName: 'en.json'}))
		.pipe(gulp.dest('locales'));
});
gulp.task('fr-concat', () => {
	return gulp.src('assets_locales/fr/**/*.json')
		.pipe(json_concat({fileName: 'fr.json'}))
		.pipe(gulp.dest('locales'));
});

gulp.task('default', ['sass-compile', 'js-concat'], () => {
	gulp.watch('assets/scss/**/*.scss', ['sass-compile']);
	gulp.watch('assets/js/**/*.js', ['js-concat']);
});

gulp.task('locales', ['en-concat', 'fr-concat']);