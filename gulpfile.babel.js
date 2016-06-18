import gulp from 'gulp';
import eslint from 'gulp-eslint';
import browserify from 'browserify';
import babel from 'babelify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import sourcemaps from 'gulp-sourcemaps';
import uglify from 'gulp-uglify';
import gutil from'gulp-util';

gulp.task('browserify', ['lint', 'env:production'], () => {
    let b = browserify('./src/js/index.js').transform(babel);
    return b.bundle()
        .pipe(source('index.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(uglify())
        .on('error', gutil.log)
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./build/js'));
});

gulp.task('copy', () => {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('build/'));
});

/* Set node env */
gulp.task('env:production', () => {
    return process.env.NODE_ENV = 'production';
});

gulp.task('lint', () => {
    return gulp.src(['./gulpfile.babel.js', './src/js/**/*'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('default', ['browserify', 'copy']);
