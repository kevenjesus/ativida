
var gulp = require('gulp');
var moreCSS = require('gulp-more-css');
var htmlmin = require('gulp-html-minifier2');

gulp.task('menos-css', function(){

	return gulp.src('./source/scss/*scss')
	.pipe(moreCSS())
	.pipe(gulp.dest('./dist/css/'));

});




gulp.task('minificar-html', function(){

	 gulp.src('./source/*html')
	.pipe(htmlmin({collapseWhitespace:true}))
	.pipe(gulp.dest('./dist/'));
});



gulp.task('background', function(){


	gulp.watch('./source/scss/*scss',['menos-css']);
	gulp.watch('./source/index.html',['minificar-html'])
});