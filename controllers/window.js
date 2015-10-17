var args = arguments[0] || {};

///////////////
// Interface //
///////////////

$.visible = false;

if (args.useImages == true) {
	$.cfn_Method.remove( $.cfn_LoaderIndicator );
} else if (args.customView != null) {
	$.cfn_LoaderViewInset.replaceAt({
		view: args.customView,
		position: 0
	});
} else {
	$.cfn_Method.remove( $.cfn_LoaderImages );
}

/**
 * @method show
 * Show the loader
 * @param  {Function} callback
 */
$.show = function(callback) {
	$.visible = true;

	$.cfn_LoaderMask.opacity = 0;
	$.cfn_LoaderMask.open();
	$.cfn_LoaderMask.animate({ opacity: 1 });

	if (args.useImages == true) {
		$.cfn_LoaderImages.start();
	} else if (args.customView != null) {
	} else {
		$.cfn_LoaderIndicator.show();
	}

	if (_.isFunction(callback)) callback();
};

/**
 * @method hide
 * Hide the loader
 */
$.hide = function() {
	$.visible = false;

	$.cfn_LoaderMask.animate({ opacity: 0 }, function() {
		if (args.useImages == true) {
			$.cfn_LoaderImages.stop();
		} else if (args.customView) {
		} else {
			$.cfn_LoaderIndicator.hide();
		}

		$.cfn_LoaderMask.close();
		$.destroy();
		$.off();
	});
};

/**
 * @method update
 * Extend current options with new ones, so update UI
 * @param  {Object} 		opt
 * @param  {Function} 	[callback]
 */
$.update = function(opt, callback) {
	if (opt != null && opt.messageRelevance < args.messageRelevance) opt.message = args.message;
	_.extend(args, opt || {});

	// Init UI
	$.cfn_LoaderLabel.text = args.message;
	$.cfn_LoaderMask.fullscreen = !!args.fullscreen;

	if (_.isFunction(callback)) callback({ ui: $ });
};


//////////
// Init //
//////////

$.cfn_LoaderMask.addEventListener('click', function() {
	if (args.cancelable == false) {
		Ti.API.warn("com.cfn_lab.titanium.loader: This activity can't be canceled");
		return;
	}

	if (_.isFunction(args.cancelable)) args.cancelable();
	$.hide();
});

$.update(null, args.onInit);
