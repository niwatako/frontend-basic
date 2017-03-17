const gulp = require("gulp");
const runSequence = require("run-sequence");

global.watch = [];
global.build = [];

global.src = "./frontend/";
global.dest = "./public/";

require("./frontend/gulp/pug.js")
require("./frontend/gulp/sass.js")
// require("./deprecated/frontend/gulp/webpack.js")
// require("./deprecated/frontend/gulp/styleguide.js")
require("./frontend/gulp/browserSync.js")


gulp.task("watch",global.watch)

gulp.task("build",(cb)=>{
    global.build.push(cb)
    runSequence.apply(this,global.build)
})

gulp.task("default",["watch"])
