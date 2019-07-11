const gulp = require('gulp');
const watch = require('gulp-watch');
const html = require('gulp-minify-html');
const css = require('gulp-minify-css');
const jss=require('gulp-uglify');
const img=require('gulp-imagemin');
const babel=require('gulp-babel');
const es2015=require('babel-preset-es2015');

gulp.task('minihtml',()=>{
    return gulp.src('src/*.html')
    .pipe(html())
    .pipe(gulp.dest('dist/'))
})
gulp.task('minihtml2',()=>{
    return gulp.src('src/log/*.html')
    .pipe(html())
    .pipe(gulp.dest('dist/log/'))
})
gulp.task('minicss',()=>{
    return gulp.src('src/css/*.css')
    .pipe(css())
    .pipe(gulp.dest('dist/css/'))
})
gulp.task('minijs', () => {
    return gulp.src('src/script/js/*')//引入文件
        .pipe(babel({
            presets: ['es2015']
        }))//执行压缩插件
        .pipe(jss())
        .pipe(gulp.dest('dist/script/js/'));//输出
});

gulp.task('miniimg', () => {
    return gulp.src('src/img/layout/*.{png,jpg,gif,ico}')
    .pipe(img({
        optimizationLevel: 5, 
        progressive: true, 
        interlaced: true, 
        multipass: true 
    }))
    .pipe(gulp.dest('dist/img/layout/'));
})
gulp.task('font',()=>{
    return gulp.src('src/fonts/*')
    .pipe(gulp.dest('dist/fonts/'))
})
gulp.task('default', function () {//default:默认名称，编译时可以省略
    watch(['src/*.html','src/log/*.html','src/script/js/*.js','src/img/layout/*.png',], gulp.parallel('minihtml','minijs','miniimg'));
});