var gulp = require('gulp'),
    sass = require('gulp-sass'),
    useref = require('gulp-useref'),
    uglify = require('gulp-uglify'),
    gulpIf = require('gulp-if'),
    cssnano = require('gulp-cssnano'),
    concat = require("gulp-concat");

/*gulp.task('nano', function() {
    return gulp.src('app/css/style.css')s
        .pipe(cssnano())
        .pipe(gulp.dest('dist'));
});*/

gulp.task('sass', function(){
    return gulp.src('game/*.scss')
    .pipe(sass())
    .pipe(concat('one.css'))
    .pipe(gulp.dest('game/css'))
    .pipe(browserSync.reload({
        stream: true
    }))
});

gulp.task('useref', function() {
    return gulp.src('game/*.html')
    .pipe(useref())
    .pipe(gulpIf('game/*.js', uglify()))
    .pipe(gulpIf('game/*.css', cssnano()))
    .pipe(gulp.dest('ex'))
});


