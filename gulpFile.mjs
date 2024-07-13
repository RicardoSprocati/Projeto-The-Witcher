import gulp, { watch } from 'gulp';
import gulpSass from 'gulp-sass';
import * as dartSass from 'sass';
import imagemin from 'gulp-imagemin';
import uglify from 'gulp-uglify';

const sass = gulpSass(dartSass);

function scripts(){
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/scripts'))
}

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/css'));
}

function images() {
    return gulp.src('./src/images/**/*',{encoding:false})
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

export const watchFiles = () => {
    gulp.watch('./src/styles/*.scss', styles);
    gulp.watch('./src/scripts/*.js', scripts);
}

gulp.task('default', gulp.parallel(styles, scripts, images, watchFiles));

gulp.task('build', gulp.parallel(styles, scripts, images));

export {styles,scripts,images};