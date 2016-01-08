var gulp = require('gulp');
var gulpTypescript = require('gulp-typescript');

var tsProject = gulpTypescript.createProject({
	target: 'es5',
	module: 'commonjs',
	emitDecoratorMetadata: true,
	experimentalDecorators: true,
	removeComments: false,
	noImplicitAny: false
});

gulp.task('ts', function () {
	var tsResult = gulp.src([
		'./app/**/*.ts',
		'./tools/typings/**/*.ts'
	])
		.pipe(gulpTypescript(tsProject));

	tsResult.dts.pipe(gulp.dest('./dist'));
	return tsResult.js.pipe(gulp.dest('./dist'));
});

gulp.task('default', ['ts']);

gulp.task('watch', function () {
	gulp.watch('./app/**/*.*', ['ts']);
});
