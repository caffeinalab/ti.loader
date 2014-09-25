var args = arguments[0] || {};

/*
Private functions
*/

function show() {
	$.caffeinaLoaderMask.opacity = 0;
	$.caffeinaLoaderMask.addEventListener('open', function() { $.caffeinaLoaderMask.animate({ opacity: 1 }); });
	$.caffeinaLoaderMask.open();

	if (args.useImages) $.caffeinaLoaderImages.start();
	else $.caffeinaLoaderIndicator.show();

	update();
}

function hide() {
	$.caffeinaLoaderMask.animate({ opacity: 0 }, function(){
		if (args.useImages) $.caffeinaLoaderImages.stop();
		else $.caffeinaLoaderIndicator.hide();

		$.caffeinaLoaderMask.close();
		$.destroy();
		$.off();
	});
}

function update(opt) {
	if (opt != null && opt.messageRelevance < args.messageRelevance) {
		opt.message = args.message;
	}

	_.extend(args, opt || {});
	$.caffeinaLoaderLabel.text = args.message;
}

function cancel() {
	if (args.cancelable === false) {
		console.warn("com.caffeinalab.titanium.loader: This activity can't be canceled");
		return;
	}

	if (_.isFunction(args.cancelable)) args.cancelable();
	hide();
}


/*
Listeners
*/

$.caffeinaLoaderMask.addEventListener('click', cancel);


/*
Exports
*/

exports.show  = show;
exports.hide = hide;
exports.update = update;
