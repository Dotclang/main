const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js("resources/js/app.js", "public/js")
    .postCss("resources/css/app.css", "public/css", [
        //
    ])
    .copy("node_modules/admin-lte/plugins/jquery/jquery.min.js", "public/js")
    .copy(
        "node_modules/admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js",
        "public/js"
    )
    .copy(
        "node_modules/admin-lte/plugins/jquery-ui/jquery-ui.min.js",
        "public/js"
    )
    .copy(
        "node_modules/admin-lte/plugins/fullcalendar/main.min.js",
        "public/js/fullcalendar.min.js"
    )
    .copy("node_modules/admin-lte/plugins/moment/moment.min.js", "public/js")
    .copy(
        "node_modules/admin-lte/plugins/fullcalendar-daygrid/main.min.js",
        "public/js/daygrid.min.js"
    )
    .copy(
        "node_modules/admin-lte/plugins/fullcalendar-timegrid/main.min.js",
        "public/js/timegrid.min.js"
    )
    .copy(
        "node_modules/admin-lte/plugins/fullcalendar-interaction/main.min.js",
        "public/js/interaction.min.js"
    )
    .copy(
        "node_modules/admin-lte/plugins/fullcalendar-bootstrap/main.min.js",
        "public/js/bootstrap.min.js"
    );

if (mix.inProduction()) {
    mix.version();
}
