var args = arguments[0] || {};

/*
Private functions
*/

function show() {
	$.pi.show();
	update();
}

function hide() {
	$.pi.hide();
	$.destroy();
}

function update(opt) {
	if (opt.messageRelevance<args.messageRelevance) {
		opt.message = args.message;
	}

	args = _.extend(args, opt || {});

	$.pi.message = args.message;
	$.pi.cancelable = args.cancelable;
}

/*
Listeners
*/

$.pi.addEventListener('cancel', function(e){
	if (_.isFunction(args.cancelable)) args.cancelable();
});

/*
Exports
*/

exports.show  = show;
exports.hide = hide;
exports.update = update;
