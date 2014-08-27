var args = arguments[0] || {};

/*
Private functions
*/

function show() {
	$.caffeinaLoaderMask.open();

	if (args.useImages) $.caffeinaLoaderImages.start();
	else $.caffeinaLoaderIndicator.show();

	update();
}

function hide() {
	$.caffeinaLoaderMask.close();

	if (args.useImages) $.caffeinaLoaderImages.stop();
	else $.caffeinaLoaderIndicator.hide();

	$.destroy();
}

function update(opt) {
	if (opt && opt.messageRelevance<args.messageRelevance) {
		opt.message = args.message;
	}

	args = _.extend(args, opt || {});
	$.caffeinaLoaderLabel.text = args.message;
}

function cancel() {
	if (args.cancelable) {
		if (_.isFunction(args.cancelable)) args.cancelable();
		hide();
	} else {
		console.warn("com.caffeinalab.titanium.loader: This activity can't be canceled");
	}
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
