var gulp = require('gulp'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat');

gulp.task('default', ['sass'], () => {
	gulp.watch('assets/sass/**/*.scss', ['sass']); // watch sass folder
});

gulp.task('sass', () => {
	return gulp.src('assets/sass/index.scss') // get all file in sass folder
		.pipe(sass()) // convert sass to css
		.pipe(concat('style.css'))	// concat all files in one (style.css)
		.pipe(gulp.dest('public/css/')); // save style.css in public/css/
});