module.exports =`
<!doctype html>
<html>
${require('./header.11ty')('Writings')}
<body>

${require('./sidebar.11ty')}

<section class="contents">
    <h1>Writings</h1>

    <table class="writings-table">
        <tr>
            <td><a href="/writings/acer-chromebook-314-review/">Acer Chromebook 314 Review</a></td>
            <td><time datetime="2020-02-26">2020-03-11</time></td>
        </tr>
        <tr>
            <td><a href="/writings/unity-2019-oculus-vr-quickstart/">Quick start Guide for Unity 2019 Oculus VR development</a></td>
            <td class="writings-time"><time datetime="2020-02-26">2020-02-26</time></td>
        </tr>
    </table>
</section>

</body>
</html>
`;