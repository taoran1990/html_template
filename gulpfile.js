var gulp = require('gulp');
var gls  = require('gulp-live-server');
var sass = require('gulp-sass');

gulp.task('serve', ['html','sass'], function(){
	var server = gls.static('dist', 4000); 
	server.start();


	gulp.watch(['docs/*.html', 'docs/js/*.js', 'docs/css/*.css'], 
		function(file){
			server.notify.apply(server, [file]);
	});

});

gulp.task('html', function(){
	gulp.src('src/*.html').pipe(gulp.dest('docs/'));
	gulp.src('src/html/*.html').pipe(gulp.dest('docs/html'));
});

gulp.task('sass', function(){
	return gulp.src('src/sass/**/*.scss')
							.pipe(sass().on('error', sass.logError))
							.pipe(gulp.dest('docs/css'));
})


