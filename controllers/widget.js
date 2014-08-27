var args = arguments[0] || {};
var $$ = null;

exports.show = function show(opt) {
	if (_.isString(opt)) {
		opt = { message: opt, messageRelevance: 1 };
	}

	if ($$) {
		$$.update(opt);
	} else {
		$$ = Widget.createController( OS_ANDROID ? 'android' : 'window', _.extend(args, opt));
		$$.show();
	}
};

exports.hide = function hide() {
	if (null===$$) return;

	$$.hide();
	$$ = null;
};