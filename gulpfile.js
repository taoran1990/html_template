var gulp = require('gulp');
var gls  = require('gulp-live-server');
var sass = require('gulp-sass');

gulp.task('serve', ['sass'], function(){
	var server = gls.static('dist', 4000); 
	server.start();


	gulp.watch(['dist/*.html', 'dist/js/*.js', 'dist/css/*.css'], 
		function(file){
			server.notify.apply(server, [file]);
	});

});

gulp.task('html', function(){

});

gulp.task('sass', function(){
	return gulp.src('src/sass/**/*.scss')
							.pipe(sass().on('error', sass.logError))
							.pipe(gulp.dest('dist/css'));
})



