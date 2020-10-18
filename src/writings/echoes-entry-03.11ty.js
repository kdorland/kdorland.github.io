const fs = require('fs');
const MarkdownIt = require('markdown-it');

const hljs = require('highlight.js');
const md = require('markdown-it')({
    html: true,
    linkify: true,
    typographer: true,
    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(lang, str).value;
            } catch (__) { }
        }

        return ''; // use external default escaping
    }
})
.use(require('markdown-it-github-headings'), {
    className: "header-anchor"
});

const data = fs.readFileSync('./src/writings/echoes-entry-03.md', 'utf8');
const result = md.render(data);

module.exports = `
<!doctype html>
<html>
${require('../header.11ty')('Eve Echoes - Journal Entry #3')}
<body>

<section class="contents">
${result}
</section>

</body>
</html>
`;