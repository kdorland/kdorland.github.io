module.exports = /*html*/`
<!doctype html>
<html>
<body>
${require("./header.js")("Kristian Dorland's Homepage")}

<section class="contents">
    <h1>Kristian's Web Experiments</h1>

    <p>A small set of tools and web experiments made by yours truly.</p>

    <ul>
        <li><a href="/stuff/noise/" target="_blank">Value Noise Generator (2013)</a>. A tool I made to generate cloud like patterns from
            value noise. Can be used to create maps for games.
        </li>
        <li><a href="/stuff/noise_unity/" target="_blank">Unity Noise (2018)</a>. Similar to the above tool, but using Unity and the built
            in noise function (<a href="https://en.wikipedia.org/wiki/Perlin_noise" target="_blank">perlin</a>).
        </li>
        <li><a href="https://rawgit.com/kdorland/group_generator/master/index.html" target="_blank">Group Generator (2015)</a>.
            Generate random groups from a list of entries. 
        </li>
        <li><a href="https://rawgit.com/kdorland/JavaSourcePrinter/master/index.html" target="_blank">Java Source Printer (2015)</a>.
            A web based Java code formatter with syntax highlighting using "highlight.js".
        </li>
    </ul>
</section>

</body>
</html>
`;