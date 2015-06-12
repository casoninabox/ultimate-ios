var page = require('webpage').create();
var system = require('system');
var args = system.args;

if(args.length == 5)
{
	page.viewportSize = { width: args[2] / 2, height: args[3] / 2};

	var url = args[1];//'http://localhost:9500/#/settings/boards';
	var factor = args[4];
	page.onConsoleMessage = function(msg, lineNum, sourceId) {
	  console.log('CONSOLE: ' + msg + ' (from line #' + lineNum + ' in "' + sourceId + '")');
	};

	page.open(url, function(){
	    setTimeout(function(){
			page.render('output/' + factor + '-' + page.viewportSize.width + 'x' + page.viewportSize.height + '.png', { format: "png" });
            phantom.exit();
	    }, 5000);
	});
}


