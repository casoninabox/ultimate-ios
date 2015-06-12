mkdir splash
convert splash.png -resize 640x1136^  -gravity center -crop 640x1136^+0+0 splash/Default-568@2x~iphone.png
convert splash.png -resize 320x568^  -gravity center -crop 320x568^+0+0 splash/Default-568~iphone.png

convert splash.png -resize 2048x1536^  -gravity center -crop 2048x1536^+0+0 splash/Landscape@2x~ipad.png
convert splash.png -resize 1536x2048^  -gravity center -crop 1536x2048^+0+0 splash/Portrait@2x~ipad.png

convert splash.png -resize 1024x768^  -gravity center -crop 1024x768^+0+0 splash/Landscape~ipad.png
convert splash.png -resize 768x1024^  -gravity center -crop 768x1024^+0+0 splash/Portrait~ipad.png

convert splash.png -resize 640x960^  -gravity center -crop 640x960^+0+0 splash/Default@2x~iphone.png
convert splash.png -resize 320x480^  -gravity center -crop 320x480^+0+0 splash/Default~iphone.png