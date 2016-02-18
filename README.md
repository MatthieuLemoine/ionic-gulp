# Ionic gulp

Gulp tasks for Ionic Development.

## Description

Those gulp tasks automate your development/build/release process.
They act as a wrapper around ionic commands such as serve, run and build.

You can define environment related variables in a ./conf/config.environment.js file.

You can easily switch between environments using the -e option or targets using the -t option.

In this exemple, 4 environments are available :
* **dev** to test dev environment in browser
* **devbuild** to test dev environment on devices
* **preprod** to test a preprod environment on devices
* **prod** to test a prod environment on devices

And 2 targets :
* **android**
* **ios**


## How to use

Copy ``gulpfile.js`` and the ``gulp-tasks`` folder into the ROOT directory of your Ionic app.

Install gulp

    npm i -g gulp

Install dependencies

    npm i

Serve

    gulp serve

Build for device

    gulp build -t <target> -e <environment>

Run on device

    gulp run -t <target> -e <environment>

Create release for distribution

    gulp release -t <target> -e <environment>

To create an Android release of your app you need to copy your keystore in ./platforms/android/ and customize the android.release.sh accordingly.

To create an IOS release, after running the previous command you have to create an archive with xcode.
