const { src, dest, watch, series } = require('gulp');
const gulp = require('gulp')
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const minify = require('gulp-minify');
const htmlmin = require('gulp-htmlmin');
const tinypng = require('gulp-tinypng-compress');

// Static server
gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("./*.html").on('change', browserSync.reload);
});


var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

gulp.task('default', function () {
  gulp.src('style.css')
    .pipe(cssmin())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist'));
});

function buildCSS(done) {
  src('css/**/**.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('dist/css/'));
  done();
}

function buildJS(done) {
  src(['js/**.js', '!js/**.min.js'])
    .pipe(minify({
      ext: {
        min: '.js'
      }
    }))
    .pipe(gulp.dest('dist/js/'));
  src('js/**.min.js').pipe(gulp.dest('dist/js/'));
  done();
}

function html(done) {
  src('**.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('dist/'));
  done();
}

function php(done) {
  src(['**.php'])
    .pipe(dest('dist/'));
  src('phpmailer/**/**')
    .pipe(dest('dist/phpmailer/'));
  done();
}

function fonts(done) {
  src('fonts/**/**')
    .pipe(dest('dist/fonts'));
  done();
}

// function imagemin(done) {
//   src('img/**/**')
//     .pipe(tinypng({ key: 'ptZ7mpQbFJ63ZLTT9vLmd5xjLBD8Z3l8', }))
//     .pipe(dest('dist/img/'));
//   src('img/**/*.svg')
//     .pipe(dest('dist/img/'));
//   done();
// }

exports.build = series(buildCSS, buildJS, html, php, fonts, imagemin);