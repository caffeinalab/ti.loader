var args = arguments[0] || {};

var $PI = Ti.UI.Android.createProgressIndicator({
	type: Ti.UI.Android.PROGRESS_INDICATOR_INDETERMINANT
});

///////////////
// Interface //
///////////////

$.visible = false;

/**
 * @method show
 * Show the loader
 * @param  {Function} callback
 */
$.show = function(callback) {
	$.visible = true;

	$PI.show();
	if (_.isFunction(callback)) callback();
};

/**
 * @method hide
 * Hide the loader
 */
$.hide = function() {
	$.visible = false;

	$PI.hide();

	$.destroy();
	$.off();
};

/**
 * @method update
 * Extend current options with new ones, so update UI
 * @param  {Object} 		[opt]
 * @param  {Function} 	[callback]
 */
$.update = function(opt, callback) {
	if (opt != null && opt.messageRelevance < args.messageRelevance) opt.message = args.message;
	_.extend(args, opt || {});

	// Init UI
	$PI.message = args.message || '';
	$PI.cancelable = !!args.cancelable;

	if (_.isFunction(callback)) callback({ ui: $PI });
};


//////////
// Init //
//////////

$PI.addEventListener('cancel', function(e) {
	if (_.isFunction(args.cancelable)) args.cancelable();
});

$.update(null, args.onInit);
