#!/bin/bash

rm -rf cordova/www/*
cp -R build/. cordova/www/
cd cordova
cordova build