module.exports = `
<!doctype html>
<html>
${require('../header.11ty')('Acer Chromebook 314 Review')}
<body>

${require('../sidebar.11ty')}

<section class="contents">
    <h1>Acer Chromebook 314 Review</h1>

    <h3><time datetime="2020-03-11">2020-03-11</time></h3>

    <p>When my old Lenovo IdeaPad laptop died in January of 2020, I didn't really need another laptop to replace it. 
    I already own several devices, including a desktop PC and an iPad. But I still wanted something portable that would 
    be easy to write on, and I was curious about the state of the cheap Chromebooks as replacements for more expensive 
    laptops. In this review, I'll try to see how much you can actually do with a Chromebook other than just surfing and
    playing simple games. I'm especially interested in the Linux support and the overall performance and build quality.
    </p>

    <h2>Hardware</h2>

    <p>Let's start by looking at the hardware. It has a nice 14” full-HD touch-capable screen with nice colors and
    everything. A definite improvement compared to my old Lenovo, which, by the way, also had a 14” full-HD touchscreen. 
    It's easy to tell how screen technology has progressed in those six years.</p>

    <p>The keyboard is nice and works well – no complaints here. You just have to get used to the slightly different 
    layout on Chromebooks. Windows-key and Function-keys are missing, but the latter can be emulated using alt+numbers.
    And there are some new keys to get used to as well like the “search key”.</p>

    <p>Touchpad is also nice and works well despite the cheap material it’s made from. While the build quality of the
    machine is fine, it’s mostly built from cheap plastic. The “metal look” is deceiving, but I personally don’t mind 
    at all. On the plus side, it’s a very lightweight machine.</p>

    <p>It has four USB ports in total, two type-c and two type-a. You also get a headphone jack and a card reader. You 
    charge if from one of the USB ports which I think is kinda cool. I have only charged it once so far, thanks to the 
    (up to) 12-hour battery life, which is more like 10 hours in practice (the way I use it at least). You can charge it 
    with the same kind of charger most modern phones use. Just be aware that it needs to be a powerful charger 
    (something with “Quick Charge” will likely do).</p>

    <p>A very nice thing is that the machine is completely fan-less. Coupled with a (small 64 GB) SSD means that there 
    are no moving parts and no sound produced from the machine itself. The noise was one of the things I hated the most 
    about the Lenovo.</p>

    <h2>Chrome OS</h2>

    <p>Central to the machine is the operating system. Luckily, Chrome OS has been a breeze to use. It just works.
    Updates come in automatically and seem to install quickly when you decide to reboot. Not hour-long updates with 
    several reboots like with some other OS. It’s quick to boot, but you never really shut it down anyway. It doesn’t 
    use much power when the lid is closed, and it instantly turns on when you open it.</p>

    <p>Chrome OS is very easy to use, mostly because you can’t really do much with it. You have your app toolbar at the
    bottom of the screen, an app drawer, some settings, and that’s basically it. And of course, the Chrome browser,
    which lets you install Chrome apps (until that feature <a href="https://developers.chrome.com/apps/migration">
    disappears later this year</a>).</p>

    <p>But obviously I didn’t stop there. One of the main reasons for giving Chromebooks a try is to try the integrated 
    Linux support. You enable it in the settings (it’s still in beta), and then you get a Linux terminal which seems to 
    be backed by a full Debian installation. All my usual packages are easily installed with “apt-get” much to my 
    surprise.</p>

    <p>I should probably also mention that you get the Google Play Store with full Android support. In fact, I’m writing 
    this on my Chromebook in the Android version of Microsoft Word.</p>

    <p>Even though I like Chrome, I’m using Firefox as my primary browser for various ideological and technical reasons. 
    On a Chromebook, that basically means running the Android version or the Linux version. I opted for the latter since 
    I don’t really enjoy using the mobile Firefox app in full screen.</p>

    <h2>Software for development</h2>

    <p>For development, I tried to install Visual Studio Code using 'snap', but quickly gave up since it didn't work. 
    There are .deb packages available but I didn’t try them. I don’t think they enable auto-updating. I ended up 
    installing the full WebStorm IDE from JetBrains, which I already love and use at work, and to my surprise, it 
    actually runs fairly well on this machine. Installation was also a breeze: just unpack and create a symlink for the
    executable. The performance obviously takes a dive compared to what I’m used to from my other machines, but I find 
    it quite usable even on this limited hardware. For a bit of hobby programming, it works very well. I could also see
    myself occasionally using it for more serious work.</p>

    <p>Since you have the full Debian distribution available, nothing prevents you from simply installing emacs, vim, 
    and all the other classic development tools and use them from the terminal. Or simply use the terminal to “ssh” into
    more powerful computers. For that, this machine would be perfect.</p>

    <h2>Software for entertainment</h2>

    <p>I did test a bit of gaming with the Android version of Asphalt 9, and it runs smoothly and looks great. Not PC 
    level graphics (or even iPad level), but still smooth and good looking. I also ran some old DOS games using a web
    based version of DOSBox, and they also worked perfectly well.</p>

    <p>I have also been streaming some YouTube and Amazon Prime, and while YouTube works well as expected, I’m having 
    some performance issues with Prime where it occasionally lags in the audio. Not enough to bother me, but not perfect 
    either. I tried streaming Prime both in Chrome and using the native Android app – same issue. I have yet to try 
    Netflix (not currently subscribing).</p>

    <h2>Conclusion</h2>

    <p>This is a nice little machine with all the right trade-offs. For the price, I couldn’t be happier. And even
    though it is limited in various ways, it also has long battery life, is lightweight, looks and feels nice (even if
    a bit cheap) and very usable software. I really don’t see it as a downgrade from a Windows laptop, but as a
    cheaper alternative with its own strengths and weaknesses. I also see it as more of a “real computer” than an 
    iPad, though I still prefer the iPad when it comes to consuming media and playing games.</p>
</section>

</body>
</html>
`;