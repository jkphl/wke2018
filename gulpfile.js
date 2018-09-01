const gulp = require('gulp');
const Slideshow = require('slideshow');

gulp.task('default', function () {
    return gulp.src(['./src/slides/**/*.md', './src/scss/**/*.scss', './src/js/**/*.js'])
    .pipe(Slideshow.stream())
    .pipe(gulp.dest('./public'));
});

gulp.task('watch', function () {
    gulp.watch([
        './src/slides/**/*.md',
        './src/scss/**/*.scss',
        './src/js/**/*.js',
    ], ['default']);
});
