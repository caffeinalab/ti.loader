var args = arguments[0] || {};

var $PI = Ti.UI.Android.createProgressIndicator({
	type: Ti.UI.Android.PROGRESS_INDICATOR_INDETERMINANT
});

/*
Private functions
*/

function show() {
	$PI.show();
	update();
}

function hide() {
	$PI.hide();
	$.destroy();
}

function update(opt) {
	if (opt && opt.messageRelevance<args.messageRelevance) {
		opt.message = args.message;
	}

	args = _.extend(args, opt || {});

	$PI.setMessage(args.message || '');
	$PI.setCancelable(!!args.cancelable);
}

/*
Listeners
*/

$PI.addEventListener('cancel', function(e){
	if (_.isFunction(args.cancelable)) args.cancelable();
});

/*
Exports
*/

exports.show  = show;
exports.hide = hide;
exports.update = update;
