// Initialize modules
var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');

// Sass task: compiles the style.scss file into style.css
gulp.task('sass', function(){
  return gulp.src('resources/scss/**/*.scss')
  .pipe(sass()) // compile SCSS to CSS
    .pipe(cleanCSS()) // minify CSS
    .pipe(gulp.dest('assets/css')); // put final CSS in dist folder
});

// Watch task: watch SCSS and JS files for changes
gulp.task('watch', function(){
  gulp.watch('resources/scss/**/*.scss', gulp.series('sass'));
});

// Default task
gulp.task('default', gulp.series( 'sass', 'watch'));
