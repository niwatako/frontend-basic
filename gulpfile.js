//gulpコマンドをつくる練習

var gulp = require("gulp"); //gulp使うよ、宣言

gulp.task("default", function () {
    console.log("Hello World!"); //$gulp を実行すると"Hello World!"と出力される
});

//Scssのコンパイル用コマンドを作る
var sass = require("gulp-sass");

gulp.task("scss", function(){
    gulp.src(["./frontend/assets/scss/*.scss"]) //srcで対象フォルダを指定して、（*.scssはフォルダ直下のファイルを指す）
        .pipe(sass()) //Sassのコンパイル機能をとってきて、
        .pipe(gulp.dest("public/assets/css")); //場所を指定して保存
});

//pugのコンパイル用コマンド
var pug = require("gulp-pug");

gulp.task("pug", function () {
    gulp.src(["./frontend/assets/tmpl/*.pug", "!./frontend/assets/tmpl/_*.pug"])
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest("public"))
});

//２つのタスクをいっぺんにやる
gulp.task("build", ["scss", "pug"]);

//変更をリアルタイムで監視する
gulp.task("watch", function(){
    //第一引数：監視するファイル、第二引数：実行するタスク
    gulp.watch(["./frontend/assets/scss/**/*.scss"], ["scss"]);
    gulp.watch(["./frontend/assets/tmpl/**/*.pug"], ["pug"]);
});
