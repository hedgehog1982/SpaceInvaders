var gulp = require('gulp'),
    sass = require('gulp-sass'),
    useref = require('gulp-useref'),
    uglify = require('gulp-uglify'),
    gulpIf = require('gulp-if'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create(),
    cssnano = require('gulp-cssnano'),
    concat = require("gulp-concat");

/*gulp.task('nano', function() {
    return gulp.src('app/css/style.css')s
        .pipe(cssnano())
        .pipe(gulp.dest('dist'));
});*/

// gulp.task('sass', function(){
//     return gulp.src('game/*.scss')
//     .pipe(sass())
//     .pipe(concat('one.css'))
//     .pipe(gulp.dest('game/css'))
  
// });
gulp.task('browserSync', function() {
    browserSync.init({
      server: {
        baseDir: 'game'
      },
    })
  })

gulp.task('concat', function() {
    return gulp.src('css/**/*.css')
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./'));
})

gulp.task('watch', ['browserSync','concat', 'useref'], function() {

    //gulp.watch('game/index.html', browserSync.reload);
    gulp.watch('game/**/*.*', browserSync.reload);
    //gulp.watch('game/js/script.js', browserSync.reload);
});

gulp.task('useref', function() {
    return gulp.src('game/*.html')
    .pipe(useref())
    .pipe(gulpIf('**/*.js', uglify()))
    .pipe(gulpIf('**/*.css', cssnano()))
    .pipe(gulp.dest('game/js'))
});


