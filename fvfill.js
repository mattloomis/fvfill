var params = window.location.hash.split('#')[1].split(';');
var inchDistance = params[0].split('=')[1];
var inchDiagonal = params[1].split('=')[1];

var radians2degree = 180.0 / Math.PI;

var devicePixelRatio = window.devicePixelRatio || 1;
var pixelWidth = window.screen.width;
var pixelHeight = window.screen.height;
var pixelDiagonal = Math.sqrt(pixelWidth*pixelWidth + pixelHeight*pixelHeight);
var inchWidth = pixelWidth * inchDiagonal / pixelDiagonal;
var inchHeight = pixelHeight * inchDiagonal / pixelDiagonal;
var radianWidth = 2.0 * Math.atan( inchWidth / (2.0 * inchDistance) );
var milliRadianWidth = 1000.0 * radianWidth;
var degreeWidth = radians2degree * radianWidth;
var pixelsPerDegree = pixelWidth / degreeWidth;
var pixelsPerMilliRadian = pixelWidth / milliRadianWidth;

	(function() {
	 
		if(!window.StyleFix) {
			return;
		}
		 
		// Feature test
		var dummy = document.createElement('_').style,
		units = ['dg', 'mr'].filter(function(unit) {
			dummy.width = '';
			dummy.width = '10' + unit;
			return !dummy.width;
		});
		 
		if(!units.length) {
			return;
		}
		 
		StyleFix.register(function(css) {

			css = css.replace(RegExp('\\b(\\d+[\.]?\\d*)(' + units.join('|') + ')\\b', 'gi'), function($0, num, unit) {
				switch (unit) {
					case 'dg':
						return Math.floor(num * pixelsPerDegree) + 'px';
					case 'mr':
						return Math.floor(num * pixelsPerMilliRadian) + 'px';
				}
			});
			
			return css;
		});
	 
	})();
