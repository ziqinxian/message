var gulp=require("gulp"),
    scss=require('gulp-scss'),
    server=require('gulp-webserver');

    gulp.task("scss",function(){
        gulp.src("./public/scss/style.scss")
            .pipe(scss())
            .pipe(gulp.dest('./public/css'))
    });

    gulp.task("server",['start'],function(){
        gulp.src("./")
            .pipe(server({
                open: true,
                livereload: true,
                port:8989,
                directoryListing: true

            }))
    });
    gulp.task("start",function(){
        gulp.watch("./scss/*.scss",['scss']);
        gulp.watch("index.html")
    });