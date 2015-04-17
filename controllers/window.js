var args = arguments[0] || {};

$.visible = false;

$.show = function(callback) {
	$.visible = true;

	$.cfn_LoaderMask.opacity = 0;
	$.cfn_LoaderMask.open();
	$.cfn_LoaderMask.animate({ opacity: 1 });

	if (args.useImages) {
		$.cfn_LoaderImages.start();
	} else {
		$.cfn_LoaderIndicator.show();
	}

	$.update();
	if (_.isFunction(callback)) callback();
};

$.hide = function() {
	$.visible = false;

	$.cfn_LoaderMask.animate({ opacity: 0 }, function() {
		if (args.useImages) {
			$.cfn_LoaderImages.stop();
		} else {
			$.cfn_LoaderIndicator.hide();
		}

		$.cfn_LoaderMask.close();
		$.destroy();
		$.off();
	});
};

$.update = function(opt) {
	if (opt != null && opt.messageRelevance < args.messageRelevance) {
		opt.message = args.message;
	}

	_.extend(args, opt || {});
	$.cfn_LoaderLabel.text = args.message;
};

$.cancel = function() {
	if (args.cancelable === false) {
		Ti.API.warn("com.caffeinalab.titanium.loader: This activity can't be cancelled!");
		return;
	}

	if (_.isFunction(args.cancelable)) args.cancelable();
	$.hide();
};

$.cfn_LoaderMask.addEventListener('touchstart', $.cancel);
