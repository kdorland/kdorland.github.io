module.exports = /*html*/`
<!doctype html>
<html>
${require('./header.11ty')('Games')}
<body>

<section class="contents">
    <h1>Kristian's Games</h1>

    <p>A handful of small games I made over the years. Most games a just prototypes and the picks below are in a much more finished state than anything else I have in my archive. Which is why I've decided to share them.</p>

    <ul>
        <li><a href="/stuff/dude/" target="_blank">Platformer (2018)</a>. Simple platformer prototype made in Unity.
            Graphics found <a href="https://opengameart.org/content/arcade-platformer-assets" target="_blank">here</a>. I actually developed this as a project template for a Unity Game Programming course I was teaching until 2019.
        </li>
        <li><a href="/mini_circle_wars">Mini Circle Wars (2013)</a>
            My entry to the <a href="http://ludumdare.com/compo/ludum-dare-26/" target="_blank">Ludum Dare 26</a>.
            It's a tower defense game made with LibGDX with the twist that enemies come from all sides.
        </li>
        <li><a href="/stuff/atoms.zip">Atoms (2000)</a>
            A board game made back in high school. Inspired by an old public domain board game of the same name for the
            Atari ST. Programmed in C using <a href="https://www.libsdl.org/" target="_blank">libsdl</a>. Graphics was made in Paint
            Shop Pro 4. Still runs on Windows 10 which is quite amazing. Thank you libsdl.
        </li>
    </ul>
</section>

</body>
</html>
`;