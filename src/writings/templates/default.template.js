//const fs = require('fs');
const prism = require('markdown-it-prism');
const md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true
})
md.use(prism, {
  plugins: ["autolinker"]
});

module.exports = (title, markdown) => {
  //const data = fs.readFileSync(markdownFile, 'utf8');
  const result = md.render(markdown);

  return `
  <!doctype html>
  <html>
  ${require('../../header.js')(title)}
  <body>
  
  <section class="contents">
  ${result}
  </section>
  
  </body>
  </html>
  `;
}