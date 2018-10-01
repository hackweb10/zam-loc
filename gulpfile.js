var gulp = require('gulp');
var httpProxy = require('http-proxy');
var browserSync = require('browser-sync').create();
var mainBowerFiles = require('main-bower-files');
var uglify = require('gulp-uglify');
var flatten = require('gulp-flatten');
let cleanCSS = require('gulp-clean-css');
var gulpSequence = require('gulp-sequence');
var concat = require('gulp-concat');
var textTransformation = require('gulp-text-simple');
var sass = require('gulp-sass');

var npmSources = [ 
    'node_modules/jquery/dist/jquery.min.js', 
    'node_modules/bootstrap/dist/*/*.bundle.min.js',
    'node_modules/bootstrap/dist/*/bootstrap.min.css',
    'node_modules/holderjs/*.min.js'
];

var version = function (s) {
    // do whatever you want with the text content of a file
    var d = parseFloat(s) + parseFloat(0.0001);        
    s = d.toFixed(4);
    console.log('new version: ' + s)
    return s;
};
var updateVersion = textTransformation(version);

gulp.task('update_ver', () => {
    return gulp.src('www/version.txt')
    .pipe(updateVersion())
    .pipe(gulp.dest('www/'));
})

gulp.task('bower', function() {
    return gulp.src(mainBowerFiles({
        paths: {
            bowerDirectory: 'bower_components',
            bowerrc: '.bowerrc',
            bowerJson: 'bower.json'
        },
        overrides: {
            bootstrap: {
                main: [
                    './dist/js/bootstrap.js',
                    './dist/css/bootstrap.min.css'                    
                ]
            }
        }
    }), { base: 'bower_components' })
    .pipe(flatten())    
    .pipe(gulp.dest('src/bw'))
});

gulp.task('bower_js_ugly', function(){
    return gulp.src(['src/bw/*.js'])    
    .pipe(uglify({}))
    .on('error', function (err) { console.log(err)})
    .pipe(gulp.dest('www/js/bw'))
})

gulp.task('bower_css_cleancss', function(){
    return gulp.src(['src/bw/*.css'])    
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('www/css/bw'))
})

gulp.task('node', function() {
    return gulp.src(npmSources)
    .pipe(flatten())    
    .pipe(gulp.dest('src/nd'));
});

gulp.task('node_pack_js', ()=>{
    return gulp.src(['src/nd/jquery.min.js','src/nd/*.min.js'])
    .pipe(flatten())    
    // .pipe(uglify({mangle:{}}))
    .pipe(concat('nd.js'))
    .pipe(gulp.dest('www/js/nd'))
})

gulp.task('node_pack_css', ()=>{
    return gulp.src(['src/nd/*.css'])
    .pipe(flatten())    
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(concat('nd.css'))
    .pipe(gulp.dest('www/css/nd'))
})

gulp.task('js', function() {
    return gulp.src(['src/js/*.js'])   
    .pipe(flatten())    
    // .pipe(uglify({mangle:{}}))
    .pipe(concat('cs.js'))
    .pipe(gulp.dest('www/js'))
});

gulp.task('css', ['sass'], function() {
    return gulp.src(['src/css/css/*.css', 'src/css/sass/css/*.css'])  
    .pipe(flatten())     
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(concat('cs.css'))
    .pipe(gulp.dest('www/css'))
});

gulp.task('sass', function() {
    return gulp.src(['src/css/sass/*.scss'])  
    .pipe(flatten())     
    .pipe(sass())
    .on('error', function (err) {
        console.log(err.toString());
        this.emit('end');
    })
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(concat('scs.css'))
    .pipe(gulp.dest('src/css/sass/css'))
});


gulp.task('serve-php', () => {
    const proxy = httpProxy.createProxyServer({});
    browserSync.init({
        notify: false,
        open: true,
        port: 9000,
        server: {
            https: false,
            baseDir: ['www'],
            middleware: function (req, res, next) {
                var url = req.url;
                if (!url.match(/^\/(css|bower_components)\//)) {
                proxy.web(req, res, { target: 'http://localhost/' });
            }
            else {
                next();
            }
        }
    }
});

gulp.watch([
    'src/**/*.js',
    'src/**/*.css',
    'src/**/*.scss',
], ['js', 'css', 'update_ver'])

gulp.watch([
    'www/**/*.html',
    'www/**/*.txt',
    'www/**/*.php',
    'www/**/*.js',
    'www/**/*.css',        
]).on('change', browserSync.reload);

// gulp.watch('hw_app/styles/**/*.scss', ['styles']);
// gulp.watch('hw_app/fonts/**/*', ['fonts']);
// gulp.watch('bower.json', ['wiredep', 'fonts']);

});

gulp.task('default', gulpSequence(['node', 'js', 'css'], ['node_pack_js', 'node_pack_css'], 'update_ver'));
gulp.task('start', gulpSequence('default', 'serve-php' ));