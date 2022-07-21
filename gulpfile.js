// npm install --save-dev gulp @rollup/stream@1 vinyl-source-stream
const { rollup } = require("rollup");
const { terser } = require("rollup-plugin-terser");
const { glob } = require("glob");
const fs = require("fs");
const gulp = require("gulp");
const postcss = require("postcss");
const { nodeResolve } = require("@rollup/plugin-node-resolve");
const comments = require("postcss-discard-comments");
const fse = require('fs-extra');

function updateIndex() {
  const jsRegex = /\/\*__inject_js__\*\//,
    cssRegex = /\/\*__inject_css__\*\//;

  var indexFile = glob.sync("./src/index.html")[0];
  var index = fs.readFileSync(indexFile, { encoding: "utf-8" });

  glob("./build/*.{js,css}", {}, (er, files) => {
    var js = [],
      css = [];
    files.forEach(async (x) => {
      //console.log(x);
      if (x.endsWith(".js")) {
        js.push(fs.readFileSync(x, { encoding: "utf-8" }));
      } else if (x.endsWith(".css")) {
        css.push(fs.readFileSync(x, { encoding: "utf-8" }));
      }
    });
    index = index.replace(jsRegex, js.join("\n"));
    index = index.replace(cssRegex, css.join("\n"));
    console.log("Generating dist/index.html");
    fs.existsSync('./dist') || fs.mkdirSync('./dist');
    fs.writeFileSync(indexFile.replace("src", "dist"), index, {
      encoding: "utf-8",
    });
    fse.copySync('./img', './dist/img', {
        overwrite: true
    })
    fse.copySync('./assets', './dist/assets', {
        overwrite: true
    })
  });
}

const srccss = "./src/input.css";
const processors = [
  require("postcss-import"), // combine imports into one file
  //require('postcss-custom-properties'),   // replace variables by their calculated values
  //require('postcss-color-function'),      // replaces color functions with rgba values
  //require('postcss-color-rgba-fallback'), // adds a hex value before every rgba value
  //require('pixrem'),                      // adds pixel fallback before every rem value
  //require('postcss-calc'),                // pre-calculcates calc functions where possible
  require("tailwindcss"),
  require("autoprefixer"), // vendor prefix for older browsers
  require("cssnano"),
];

gulp.task("rollup", function (cb) {

    fs.existsSync('./build') || fs.mkdirSync('./build');
  var prom1 = rollup({
    input: "./src/main.js",
    external: ["window", "document"],
    plugins: [
      nodeResolve(),
      terser({
        format: {
          comments: false,
        },
      }),
    ],
  })
    .then((bundle) =>
      bundle.write({
        output: {
          file: "./build/main.js",
          globals: {
            window: "window",
            document: "document",
          },
          format: "iife",
        },
      })
    );

  var prom2 = postcss(processors)
    .process(fs.readFileSync(srccss, "utf-8"), {
      from: srccss,
    })
    .then((result) => {
      var css = result.css.replace(
        /\/\*\! tailwindcss(.*?)tailwindcss\.com\*\//,
        ""
      );

      fs.writeFileSync("./build/build.css", css, { encoding: "utf-8" });
    });

    Promise.all([prom1,prom2]).then(_ => updateIndex()).then(_ => cb());

  
});
gulp.task("watch:rollup", function () {
  fs.existsSync('./dist') || fs.mkdirSync('./dist');
  fs.existsSync('./build') || fs.mkdirSync('./build');
  glob("src/*.js", {}, (er, files) => {
    files.forEach((rootPath) => {
      console.log(rootPath);
      const watcher = gulp.watch(rootPath);
      watcher.on("change", function (pth, stats) {
        console.log("Updating: ", pth);
        rollup({
          input: pth,
          external: ["window", "document"],
          plugins: [
            nodeResolve(),
            terser({
              format: {
                comments: false,
              },
            }),
          ],
        })
          .then((bundle) =>
            bundle.write({
              output: {
                file: pth.replace("src", "build"),
                globals: {
                  window: "window",
                  document: "document",
                },
                format: "iife",
              },
            })
          )
          .then((_) => updateIndex());
      });
    });
  });

  glob("src/*.{html,css}", {}, (er, files) => {
    files.forEach((rootPath) => {
      console;
      const watcher = gulp.watch(rootPath);
      watcher.on("change", async function (pth, stats) {
        console.log("Updating: ", pth);
        postcss(processors)
          .process(fs.readFileSync(srccss, "utf-8"), {
            from: srccss,
          })
          .then((result) => {
            var css = result.css.replace(
              /\/\*\! tailwindcss(.*?)tailwindcss\.com\*\//,
              ""
            );

            fs.writeFileSync("build/build.css", css, { encoding: "utf-8" });
          })
          .then((_) => updateIndex())
          .catch((err) => handleError(err.message));
      });
    });
  });
});

function handleError(err) {
  if (err) {
    console.log(err);
    process.exit(1);
  }
}
