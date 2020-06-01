// Initialize modules
var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

// Sass task: compiles the style.scss file into style.css
gulp.task('sass', function(){
  return gulp.src('app/scss/**/*.scss')
  .pipe(sass()) // compile SCSS to CSS
    .pipe(cleanCSS()) // minify CSS
    .pipe(gulp.dest('docs/css')) // put final CSS in dist folder
    .pipe(browserSync.stream());
});

// Watch task: watch SCSS and JS files for changes
gulp.task('watch', function(){
  browserSync.init({
    server: "./docs"
  });

  gulp.watch('app/scss/**/*.scss', gulp.series('sass'));
});

// Default task
gulp.task('default', gulp.series( 'sass', 'watch'));
