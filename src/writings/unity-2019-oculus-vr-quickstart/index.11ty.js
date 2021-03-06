module.exports = `
<!doctype html>
<html>
${require('../../header.11ty')('Unity VR Guide')}
<body>

<section class="contents">
    <h1>Starting Guide for Unity 2019 Oculus VR development</h1>

    <h3><time datetime="2020-02-26">2020-02-26</time></h3>

    <p>This is a rough quick start guide for setting up a Unity project for development of VR software for Oculus 
        hardware. I wrote it mainly for my students, but I thought others might be able to benefit from it as well.</p>

    <h2>Step 1</h2>
    <p>Make sure your Unity installation has all the OpenJDK and Android modules installed. Use the hub to verify.
        <img src="./img/image001.png"/>
    </p>

    <h2>Step 2</h2>
    <p>Start a new project with the 3D template. Pick a name. </p>

    <p>Or resuse and existing project. Just be aware that there are technical limitations to what you can run on VR 
        hardware when it comes to the graphics (shaders, complexity of geometry, etc).
    </p>

    <h2>Step 3</h2>
    <p>Switch build target to Android. Do this before anything else, since it will be faster and safer to do it now. 
        You can still try the game in play mode on your desktop.
        <img src="./img/image003.png"/>
    </p>

    <h2> Step 4</h2>
    <p>Add the Oculus VR SDK to the Player Settings, even though it is deprecated. It works for now, and I don't trust 
        the new stuff yet.
        <img src="./img/image005.png"/>
    </p>

    <h2>Step 5</h2>
    <p>Change the Minimum API Level to “API level 25”. You will be asked to do it later if you skip it now. And while 
        you are at it, you might as well change the package name as well.
        <img src="./img/image007.png"/>
    </p>

    <h2>Step 6</h2>
    <p>Remove the Vulkan graphics API. It doesn't work on Oculus Quest (yet).
        <img src="./img/image009.png"/>
    </p>

    <h2>Step 7</h2>
    <p>Open the Asset Store. Find the “Oculus Integration”. Download and import.</p>
    <p>Wait for it to finish. It's normal for it to take a while.</p>
    <p>When asked, answer “yes” to upgrade the plugins and restart Unity.</p>

    <h2>Step 8</h2>
    <p>You are now ready to experiment with VR app development.
    For hardware deployment, you need an Oculus headset and a USB cable to connect it to your laptop.
    To see if the headset is successfully connected, open your terminal and execute the command “adb devices”.
        It should appear with serial number in the list.</p>

    <p><img src="./img/image011.png"/></p>

    <p>You device might be "unauthorized". In that case, put on your headset and authorize it while it is connected to 
        your PC.</p>

    <p>If the “adb” command is missing, you are either missing the Android SDK or the command is not part of your 
        environment. In the last case, try to locate the command directory manually and use it from there as seen 
        below:</p>

    <p><img src="./img/image012.png"/></p>

    <h2>Step 9</h2>
    <p>Let’s say you are ready to try out your VR app on real hardware. You can also try one of the demo scenes in the
        Oculus Integration package instead.
    Configure the build like in the picture below. Make sure your scene is added to the list.
    Hit “Build And Run”. It will ask you to create an “apk” file. Pick any name for the file and save it. I recommend 
        putting it in a subdirectory named “Builds”.</p>

    <p><img src="./img/image014.png"/></p>

    <p>The first time it builds, it will take longer than in subsequent builds.</p>
    <p>When it is done, the app should start up automatically on the Oculus hardware. You can remove the USB cable while
        testing the app.</p>


    <h2>Step 10</h2>
    <p>Keep developing and make some cool VR stuff!</p>
    <p>To see log output from your apps while testing them on the hardware, keep the USB cable connected and use the 
        following command: adb logcat -s Unity ActivityManager PackageManager DEBUG</p>

    <p><img src="./img/image016.png"/></p>

</section>

</body>
</html>
`;