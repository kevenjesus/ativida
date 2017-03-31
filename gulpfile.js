
var gulp = require('gulp');
var sass = require('gulp-sass');
var htmlmin = require('gulp-html-minifier2');

gulp.task('compilar-css', function(){

	return gulp.src('./source/scss/*scss')
	.pipe(sass())
	.pipe(gulp.dest('./dist/css/'));

});


gulp.task('minificar-html', function(){

	 gulp.src('./source/*html')
	.pipe(htmlmin({collapseWhitespace:true}))
	.pipe(gulp.dest('./dist/'));
});



gulp.task('background', function(){
	gulp.watch('./source/scss/*.scss',['compilar-css']);
	gulp.watch('./source/index.html',['minificar-html']);
});