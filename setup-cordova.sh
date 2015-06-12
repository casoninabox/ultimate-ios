#!/bin/bash
cordova create cordova com.casonclagg.ultimate "Ultimate"
cd cordova
cordova platform add ios
cordova plugin add org.apache.cordova.console
cordova plugin add org.apache.cordova.statusbar

# Save Image from Canvas
#cordova plugin add https://github.com/devgeeks/Canvas2ImagePlugin.git

# IAPs
#cordova plugin add http://github.com/j3k0/PhoneGap-InAppPurchase-iOS.git

# Social Sharing Plugin
# cordova plugin add https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin

# Camera Access
# cordova plugin add org.apache.cordova.camera

# Device Info
# cordova plugin add org.apache.cordova.device

# Accelerometer
# cordova plugin add org.apache.cordova.device-motion

# Compass
# cordova plugin add org.apache.cordova.device-orientation

# Native Alerts etc...
# cordova plugin add org.apache.cordova.dialogs

# File Upload and Download
# cordova plugin add org.apache.cordova.file-transfer

# Record and Play Audio
# cordova plugin add org.apache.cordova.media

# Audio, image and video cap
# cordova plugin add org.apache.cordova.media-capture

# Vibration
# cordova plugin add org.apache.cordova.vibration