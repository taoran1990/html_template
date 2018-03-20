var gulp = require('gulp');
var gls  = require('gulp-live-server');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require("gulp-concat");
var server = require('gulp-server-livereload');

gulp.task('serve', ['html', 'js', 'sass', 'watch'], function(){
	var server = gls.static('docs', 3000); 
	server.start();

	gulp.watch(['docs/*.html', 'docs/js/*.js', 'docs/css/*.css'], 
		function(file){
			server.notify.apply(server, [file]);
	});
});

function js(){
	return gulp.src('src/js/**/*.js')
//				.pipe(uglify())
				.pipe(concat("main.js"))
				.pipe(gulp.dest('docs/js'))
}

function html(){
	gulp.src('src/*.html').pipe(gulp.dest('docs/'));
	return gulp.src('src/*.html').pipe(gulp.dest('docs/html'));
}

function css(){
	return gulp.src('src/sass/**/*.scss')
							.pipe(sass().on('error', sass.logError))
							.pipe(gulp.dest('docs/css'));
}

gulp.task('js', function(){
	js();
});

gulp.task('html', function(){
	html();
});

gulp.task('sass', function(){
	sass();
})

gulp.task('watch', function(){

	gulp.watch('src/js/**/*.js', function(){
		js();
	});

	gulp.watch('src/*.html', function(){
		html();
	});

	gulp.watch('src/sass/**/*.scss', function(){
		css();
	});

})


