var args = arguments[0] || {};

var $PI = Ti.UI.Android.createProgressIndicator({
	type: Ti.UI.Android.PROGRESS_INDICATOR_INDETERMINANT
});

$.visible = false;

$.show = function(callback) {
	$.visible = true;

	$PI.show();
	$.update();
	if (_.isFunction(callback)) callback();
};

$.hide = function() {
	$.visible = false;

	$PI.hide();

	$.destroy();
	$.off();
};

$.update = function(opt) {
	if (opt && opt.messageRelevance < args.messageRelevance) {
		opt.message = args.message;
	}

	args = _.extend(args, opt || {});

	$PI.setMessage(args.message || '');
	$PI.setCancelable(!!args.cancelable);
};

$PI.addEventListener('cancel', function(e){
	if (_.isFunction(args.cancelable)) args.cancelable();
});