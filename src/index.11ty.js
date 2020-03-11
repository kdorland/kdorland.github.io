module.exports =`
<!doctype html>
<html>
${require('./header.11ty')('')}
<body>

${require('./sidebar.11ty')}

<section class="contents">
    <h1>Experiments</h1>
    <ul>
        <li><a href="/stuff/noise/" target="_blank">Value Noise Generator (2013)</a>. A tool I made to generate cloud like patterns from
            value noise. Can be used to create maps for games.
        </li>
        <li><a href="/stuff/noise_unity/" target="_blank">Unity Noise (2018)</a>. Similar to the above tool, but using Unity and the built
            in noise function (<a href="https://en.wikipedia.org/wiki/Perlin_noise" target="_blank">perlin</a>).
        </li>
        <li><a href="https://rawgit.com/kdorland/group_generator/master/index.html" target="_blank">Group Generator (2015)</a>.
            Generate random groups from a list of entries. Only used briefly.
        </li>
        <li><a href="https://rawgit.com/kdorland/JavaSourcePrinter/master/index.html" target="_blank">Java Source Printer (2015)</a>.
            A web based Java code formatter with syntax highlighting using "highlight.js". I ended up never using it.
        </li>
    </ul>
</section>

</body>
</html>
`;