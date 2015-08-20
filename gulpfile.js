var gulp = require('gulp');

gulp.task('default',['autoprefixer']);

gulp.task('autoprefixer', function() {
    var postcss = require('gulp-postcss');
    var sourcemaps = require('gulp-sourcemaps');
    var autoprefixer = require('autoprefixer-core');
    var rename = require("gulp-rename");
    return gulp.src('./root/webzoohemsida/main.css')
        .pipe(sourcemaps.init())
        .pipe(postcss(
            [autoprefixer({browsers: ['last 2 versions']})]
            ))
        .pipe(sourcemaps.write('.'))
        .pipe(rename("final.css"))
        .pipe(gulp.dest('./root/webzoohemsida'));
});