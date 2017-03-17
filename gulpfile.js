//gulpの宣言
var gulp = require("gulp");


//pugのコンパイル用コマンド
var pug = require("gulp-pug");
gulp.task("pug", function () {
    gulp.src(["./frontend/assets/tmpl/*.pug", "!./frontend/assets/tmpl/_*.pug"])
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest("public"))
});


//Scssのコンパイル用コマンド
var sass = require("gulp-sass");
gulp.task("scss", function(){
    gulp.src(["./frontend/assets/scss/*.scss"]) //srcで対象フォルダを指定して、（*.scssはフォルダ直下のファイルを指す）
        .pipe(sass()) //Sassのコンパイル機能をとってきて、
        .pipe(gulp.dest("public/assets/css")); //場所を指定して保存
});


//２つのタスクをいっぺんに
gulp.task("build", ["scss", "pug"]);


//変更を監視する
gulp.task("watch", function(){
    //第一引数：監視するファイル、第二引数：実行するタスク
    gulp.watch(["./frontend/assets/scss/**/*.scss"], ["scss"]);
    gulp.watch(["./frontend/assets/tmpl/**/*.pug"], ["pug"]);
});