const mix = require('laravel-mix');

var paths = {
    'jquery': './node_modules/jquery/',
    'bootstrap': "./node_modules/bootstrap/",
    'fontawesome': "./node_modules/@fortawesome/fontawesome-free/",
    'datatables_4': "./node_modules/datatables.net-bs4/",
    'datatables': './node_modules/datatables.net/',
    'chartjs': "./node_modules/chart.js/dist/",
    'jqeasing': "./node_modules/jquery.easing/",
    'popperjs': "./node_modules/popper.js/",
}

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css').sourceMaps().browserSync('stock-check.test')
    .scripts([
        paths.jquery + "dist/jquery.js",
        paths.popperjs + "dist/umd/popper.min.js",
        paths.bootstrap + "dist/js/bootstrap.min.js",
        paths.chartjs + "Chart.min.js",
        paths.datatables + "js/jquery.dataTables.min.js",
        paths.datatables_4 + "js/dataTables.bootstrap4.min.js",
        paths.jqeasing + "jquery.easing.min.js",
        'resources/js/admin/app.js',
    ], 'public/panel/js/app.js')
   .sass('resources/sass/admin/app.scss', 'public/panel/css').sourceMaps().browserSync('laravel-bootstrap-admin-blank.test');
