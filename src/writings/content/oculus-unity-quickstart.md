---
title: Starting Guide for Unity 2019 Oculus VR development
author: Kristian Dorland
category: Writings
---

# Starting Guide for Unity 2019 Oculus VR development

### 2020-02-26

This is a rough quick start guide for setting up a Unity project for development of VR software for Oculus  hardware. I wrote it mainly for my students, but I thought others might be able to benefit from it as well.

## Step 1
Make sure your Unity installation has all the OpenJDK and Android modules installed. Use the hub to verify.

<img src="./assets/images/oculus-vr-guide/image001.png"/>

## Step 2
Start a new project with the 3D template. Pick a name.

Or resuse and existing project. Just be aware that there are technical limitations to what you can run on VR hardware when it comes to the graphics (shaders, complexity of geometry, etc).

## Step 3
Switch build target to Android. Do this before anything else, since it will be faster and safer to do it now. You can still try the game in play mode on your desktop.
    
<img src="./assets/images/oculus-vr-guide/image003.png"/>

## Step 4
Add the Oculus VR SDK to the Player Settings, even though it is deprecated. It works for now, and I don't trust the new stuff yet.
<img src="./assets/images/oculus-vr-guide/image005.png"/>


## Step 5
Change the Minimum API Level to “API level 25”. You will be asked to do it later if you skip it now. And while you are at it, you might as well change the package name as well.
<img src="./assets/images/oculus-vr-guide/image007.png"/>


## Step 6
Remove the Vulkan graphics API. It doesn't work on Oculus Quest (yet).
<img src="./assets/images/oculus-vr-guide/image009.png"/>

## Step 7
Open the Asset Store. Find the “Oculus Integration”. Download and import.

Wait for it to finish. It's normal for it to take a while.

When asked, answer “yes” to upgrade the plugins and restart Unity.

## Step 8
You are now ready to experiment with VR app development.

For hardware deployment, you need an Oculus headset and a USB cable to connect it to your laptop.

To see if the headset is successfully connected, open your terminal and execute the command “adb devices”.

It should appear with serial number in the list.

<img src="./assets/images/oculus-vr-guide/image011.png"/>

You device might be "unauthorized". In that case, put on your headset and authorize it while it is connected to your PC.

If the “adb” command is missing, you are either missing the Android SDK or the command is not part of your environment. In the last case, try to locate the command directory manually and use it from there as seen below:

<img src="./assets/images/oculus-vr-guide/image012.png"/>

## Step 9
Let’s say you are ready to try out your VR app on real hardware. You can also try one of the demo scenes in the
    Oculus Integration package instead.
Configure the build like in the picture below. Make sure your scene is added to the list.
Hit “Build And Run”. It will ask you to create an “apk” file. Pick any name for the file and save it. I recommend 
    putting it in a subdirectory named “Builds”.

<img src="./assets/images/oculus-vr-guide/image014.png"/>

The first time it builds, it will take longer than in subsequent builds.
When it is done, the app should start up automatically on the Oculus hardware. You can remove the USB cable while
    testing the app.

## Step 10
Keep developing and make some cool VR stuff!

To see log output from your apps while testing them on the hardware, keep the USB cable connected and use the 
    following command: adb logcat -s Unity ActivityManager PackageManager DEBUG

<img src="./assets/images/oculus-vr-guide/image016.png"/>
