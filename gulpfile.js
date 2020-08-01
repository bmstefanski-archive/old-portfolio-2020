// todo Really shitty config:
/* 
  - remove this weird thing project-config.json
  - remove redundant dependencies
  - name tasks in more legible way
  - remove this comment
*/

const { src, dest, task, watch, series, parallel } = require("gulp");
const sass = require("gulp-sass");
const uglify = require("gulp-uglify");
const browserSync = require("browser-sync").create();
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("gulp-autoprefixer");
const concat = require("gulp-concat");
const cleanCSS = require("gulp-clean-css");
const imagemin = require("gulp-imagemin");
const changed = require("gulp-changed");
const htmlReplace = require("gulp-html-replace");
const htmlMin = require("gulp-htmlmin");
const del = require("del");
const runSequence = require("gulp4-run-sequence");
const replace = require("gulp-replace");

const config = require("./project-config.json");

function serve() {
  browserSync.init({ server: { baseDir: config.src } });

  watch(config.sassSrc, series(_sass));
  watch([config.htmlSrc, config.jsSrc]).on("change", reload);
}

function reload() {
  browserSync.reload();
}

function _sass(done) {
  src(config.sassSrc)
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(dest(config.sassDist))
    .pipe(browserSync.stream());

  done();
}

function css(done) {
  src(config.cssSrc)
    .pipe(concat(config.cssDistName))
    .pipe(cleanCSS())
    .pipe(replace("/assets/", "../assets/"))
    .pipe(dest(config.cssDist));

  done();
}

function js(done) {
  src(config.jsSrc)
    .pipe(concat(config.jsDistName))
    .pipe(uglify())
    .pipe(dest(config.jsDist));
  done();
}

function img(done) {
  src(config.imgSrc)
    .pipe(changed(config.imgDist))
    .pipe(imagemin())
    .pipe(dest(config.imgDist));
  done();
}

function html(done) {
  src(config.htmlSrc)
    .pipe(htmlReplace({ css: config.cssReplaceOut, js: config.jsReplaceOut }))
    .pipe(
      htmlMin({
        sortAttributes: true,
        sortClassName: true,
        collapseWhitespace: true
      })
    )
    .pipe(dest(config.htmlDist));
  done();
}

function clean() {
  return del([config.dist]);
}

function assets(done) {
  src("src/assets/**/*.*").pipe(dest("dist/assets/"));
  done();
}

function copyCname(done) {
  src("CNAME").pipe(dest("dist/"));
  done();
}

function build(done) {
  runSequence("clean", ["html", "css", "js", "img", "assets", copyCname]);
  done();
}

const parallelServe = parallel(serve);

task("clean", clean);
task("html", html);
task("sass", _sass);
task("css", css);
task("js", js);
task("img", img);
task("assets", assets);
task("copyCname", copyCname);

task("default", parallelServe);
task("reload", reload);
task("build", build);
