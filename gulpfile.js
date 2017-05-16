/**
 * Created by Madman on 17-5-16.
 */
var gulp = require('gulp');

var sass = require('gulp-sass');

gulp.task('all',function () {
    gulp.src('src/sass/*.scss') //对sass编译
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
    gulp.src('bower_components/jquery/dist/jquery.min.js')
        .pipe(gulp.dest('dist/js'));
    gulp.src('src/js/*.js')
        .pipe(gulp.dest('dist/js'));
});