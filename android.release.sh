#!/bin/bash

echo "************ CORDOVA BUILD RELEASE ****************";
cordova build --release android;
mv platforms/android/build/outputs/apk/android-release-unsigned.apk ./app.temp.apk;
echo "************ SIGN APP ****************";
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore platforms/android/keystore.keystore -storepass password app.temp.apk app_keys;
rm -f app.apk;
echo "************ ZIP ALIGN ****************";
zipalign -v 4 app.temp.apk app.apk;
rm app.temp.apk;
echo "************ DONE ****************";
