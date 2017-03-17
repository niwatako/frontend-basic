"use strict";

const gulp = require("gulp");
const $ = require("gulp-load-plugins")();

const {src,dest,jade_option} = global;

gulp.task("pug",()=> {

    let srcPattern = [
        `${src}assets/tmpl/**/*.jade`,
        `${src}assets/tmpl/**/*.pug`,
        `!${src}assets/tmpl/**/_*`,
    ];
    return gulp.src(srcPattern)
        .pipe($.plumber({
            errorHandler: $.notify.onError('<%= error.message %>')
        }))
        .pipe($.pug({
            locals:{
                sponsor_lists: require("../../deprecated/frontend/data/sponsor_lists.js"),
                sponsorBy_lists: require("../../deprecated/frontend/data/sponsorBy_lists.js"),
                speaker_lists: require("../../deprecated/frontend/data/speaker_lists.js"),
                handson_lists: require("../data/handson_lists.js"),
            },
            pretty:true
        }))
        .pipe(gulp.dest(`${dest}/`));
});

gulp.task("pug:watch",()=>{
    let target = [
        `${src}assets/tmpl/**/*`,
    ];
    return gulp.watch(target,["pug"])
});

global.watch.push("pug:watch")
global.build.push("pug")
