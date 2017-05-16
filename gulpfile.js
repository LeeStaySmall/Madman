/**
 * Created by Madman on 17-5-16.
 */
var gulp = require('gulp');

var sass = require('gulp-sass');

gulp.task('sass',function () {
    gulp.src('src/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
});