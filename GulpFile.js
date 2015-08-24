var gulp = require('gulp'),
    gutil   = require('gulp-util'),
    browserSync = require('browser-sync'),
    config = require('./GulpConfig');

// Build your vendors
gulp.task('vendor', require('./tasks/vendor'));

// Concatenate your partials and append them to template.html
gulp.task('templates', require('./tasks/templates'));

// Build my css (with sass compilation
gulp.task('styles', require('./tasks/styles'));

// Check if the code is correct
gulp.task('lint', require('./tasks/lint'));

// Concat all file js in script (with bowerify // use require)
gulp.task('scripts', ['lint'], require('./tasks/scripts'));

// Move index
gulp.task('index', require('./tasks/index'));

// Move our assets
gulp.task('assets', require('./tasks/assets'));

// Build your i18n files
gulp.task('i18n', require('./tasks/i18n'));

gulp.task('upload', require('./tasks/upload'));

// Set the env config to production
gulp.task('envProd', function () {
    gutil.env.type = 'production';
});

// Set the env config to production
gulp.task('envWatch', function () {
    gutil.env.opt = 'watch';
});

/*******
 * Main TASKS
 */
//Production Build (normal build + git)
gulp.task('prod', ['envProd', 'dev']);

//Launch the e2e and unit test
gulp.task('test', require('./tasks/unitTest'));

// Dev build
gulp.task('dev', ['index', 'assets', 'vendor', 'templates', 'i18n', 'styles', 'scripts'], function() {
    gulp.start('test');
});

// Dev build + add the watch and the livereload on the sources
gulp.task('serve', ['watch', 'dev'], function () {
    browserSync({
        server : {
            baseDir: config.project
        },
        ui:{
            port: 3000,
            weinre :{
                port:3001
            }
        },
        port: (gutil.env.p ? gutil.env.p : config.defaultPort),
        open:false,
        notify: false
    })
});

// Launch your watch on file
gulp.task('watch', function () {
    gulp.watch(config.project + 'src/styles/**/*', ['envWatch', 'styles']);
    gulp.watch(config.project + 'src/scripts/**/*.js', ['envWatch', 'scripts']);
    gulp.watch(config.project + 'test/**/*.js', ['test']);
    gulp.watch(config.project + 'src/assets/**/*', ['envWatch', 'assets']);
    gulp.watch(config.project + 'src/scripts/**/*.html', ['envWatch', 'templates']);
    gulp.watch(config.project + 'src/index.html', ['envWatch', 'index']);
    gulp.watch(config.project + 'src/i18n/**', ['envWatch', 'i18n']);
});

// The default task run the prod build
gulp.task('default', ['build']);
