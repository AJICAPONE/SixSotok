module.exports = function() {
    $.gulp.task('libsJS:dev', () => {
        return $.gulp.src(['node_modules/svg4everybody/dist/svg4everybody.min.js','node_modules/slick-carousel/slick/slick.js','node_modules/ion-rangeslider/js/ion.rangeSlider.min.js','node_modules/rateyo/src/jquery.rateyo.js','node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.js'])
            .pipe($.gp.concat('libs.min.js'))
            .pipe($.gulp.dest('./build/static/js/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });

    $.gulp.task('libsJS:build', () => {
        return $.gulp.src(['node_modules/svg4everybody/dist/svg4everybody.min.js','node_modules/slick-carousel/slick/slick.js','node_modules/ion-rangeslider/js/ion.rangeSlider.min.js','node_modules/rateyo/src/jquery.rateyo.js','node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.js'])
            .pipe($.gp.concat('libs.min.js'))
            .pipe($.gp.uglifyjs())
            .pipe($.gulp.dest('./build/static/js/'));
    });

    $.gulp.task('js:copy', () => {
        return $.gulp.src(['./dev/static/js/*.js',
                           '!./dev/static/js/libs.min.js'])
            .pipe($.gulp.dest('./build/static/js/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });
};
