/**
 * Build script for the "krdo.dev" website.
 * It's a static website.
 */
const path = require("path");
const fs = require("fs-extra");
const moment = require("moment");
const yamlFront = require("yaml-front-matter");

// Configuration
const OUTPUT_DIR = path.join(__dirname, "_site/");
const TEMPLATE_EXT = "template.js";

function init() {
  ensurePathExists(OUTPUT_DIR);
}

function ensurePathExists(file) {
  if (!fs.existsSync(file)) {
    fs.mkdirSync(file);
  }
}

function getFilesWithExt(dir, ext) {
  // TODO: Recursive?
  const directoryPath = path.join(__dirname, dir);
  const result = [];
  const files = fs.readdirSync(directoryPath);
  files.forEach(file => {
    if (file.endsWith(ext)) {
      result.push(path.join(__dirname, dir, file));
    }
  });
  return result;
}

function writeOutput(file, contents) {
  const outputFile = path.join(OUTPUT_DIR, file);
  ensurePathExists(path.dirname(outputFile));
  fs.writeFile(outputFile, contents, (err) => {
    if (err) console.log(err);
    else console.log("File written.", outputFile);
  });
}

function copyAssets(assetDir) {
  fs.copy(assetDir, OUTPUT_DIR, { filter: _ => true }, err => {
    if (err) return console.error(err);
  })
}

function renderWithTemplate(contentPath, outputPath) {
  const template = path.join(contentPath, "templates", "default.template.js");
  const contents = path.join(contentPath, "content");
  const files = getFilesWithExt(contents, "md");

  // Render files
  for (let file of files) {
    console.log(`*** Rendering ${file} ***`);

    let content = fs.readFileSync(file, {encoding: 'utf8'});
    const {title, category, __content} = yamlFront.loadFront(content);
    const output = require(path.join(__dirname, template))(title, __content);
    
    const outputFilename = path.join(outputPath, path.basename(file).replace("md", "html")); 
    writeOutput(outputFilename, output);
  }
  
  // Copy assets
  fs.copy(
    path.join(contentPath, "assets"), 
    path.join(OUTPUT_DIR, outputPath, "assets"), 
    err => {
      if (err) return console.error(err);
    }
  )
}

function renderMainContents() {
  const templateFiles = getFilesWithExt("src", TEMPLATE_EXT);
  templateFiles.forEach(file => {
    const output = require(file);

    const stats = fs.statSync(file);
    const mtime = stats.mtime;

    console.log(`***** ${file} *****`)
    const outputFilename = path.basename(file).replace(TEMPLATE_EXT, "html");
    console.log(outputFilename)
    if (output instanceof Function) {
      writeOutput(outputFilename, output({
        buildTime: moment(mtime).format('D MMM, YYYY')
      }));
    } else {
      writeOutput(outputFilename, output);
    }
  })
}

/******************************************************************************
 * Wire it all together
 ******************************************************************************/
init();
renderMainContents();
renderWithTemplate(path.join("src", "writings"), "writings");
copyAssets(path.join("src", "assets"));
copyAssets(path.join("stuff"));

