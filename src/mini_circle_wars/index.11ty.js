module.exports = /*html*/`
<!doctype html>
<html>
${require('../header.11ty')('Mini Circle Wars')}
<body>

<section class="contents">
    <h1>Mini Circle Wars (2013)</h1>
    <p>Mini Circle Wars is a small game made in less than 48 hours for the <a href ="http://ludumdare.com/compo/ludum-dare-26/">Ludum Dare 26</a> competition. Is was made using Java and <a href ="https://libgdx.badlogicgames.com/">libgdx</a>. Originally released as a Java Applet (ugh) and a HTML5 browser game (made possible by compiling it with <a href ="http://www.gwtproject.org/">Google GWT</a>), you can download it right <a href="mini_circle_wars.jar">here</a> as a runnable jar file. The HTML5 version is currently missing unfortunately, but maybe I'll recreate it some day from the source code (<a href="mini_circle_wars.source.zip">available here</a>).

    <h2>What is it all about?</h2>
    <p>It's basically a minimalistic tower defense game. You build red and blue circles (circle towers) to protect yourself from attacking orange circles. Red circle towers can attack, and blue circle towers generate more energy. Building a tower costs energy. The point is simply to see how long you can survive. 

    <p>The game is very unbalanced, and I've often thought about redoing it. Basically, players much better than me reach a point where the game explodes with orange circles and becomes unplayable. I'm not very good at my own game, so I never encountered it doing testing.

    <h2>Screenshots</h2>
    <img src="mini_circle_wars.png"/>

    <h2>Instructions for running the game</h2>
    <p>Runnable jars are easy to run. You need <a href="https://java.com/en/">Java</a> installed on your PC. If you are using Windows, you should be able to run it by double clicking on the jar file. On other operating systems, you can open a terminal and write "java -jar MiniCircleWars.jar" to run the game.
</section>

</body>
</html>
`;
