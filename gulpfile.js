var gulp = require('gulp');
var launcher = require('simple-autoreload-server');
var server = launcher({
    port: 8000,
    root: './root',
    listDirectory: true,
    watch: /\.(png|js|html|json|swf|css)$/i,
    forceReload: [/\.json$/i, "static.swf"]
});

gulp.task('default', ['autoprefixer', 'watch']);
gulp.task('watch', function() {
    gulp.watch(['**/main.css'], ['autoprefixer']);
});

gulp.task('autoprefixer', function() {
    var postcss = require('gulp-postcss');
    var sourcemaps = require('gulp-sourcemaps');
    var autoprefixer = require('autoprefixer-core');
    var rename = require("gulp-rename");
    return gulp.src(['./root/webzoohemsida/main.css','./root/greatagency/main.css'])
              .pipe(sourcemaps.init())
              .pipe(postcss(
                          [autoprefixer({ browsers: ['last 2 versions']})]))
              .pipe(sourcemaps.write('.'))
              .pipe(rename("final.css"))
              .pipe(gulp.dest(function(file) {
                  return file.base;
              }));
});