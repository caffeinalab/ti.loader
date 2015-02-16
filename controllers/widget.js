var args = arguments[0] || {};
var $$ = null;

exports.show = function(opt, callback) {
	if (_.isString(opt)) {
		opt = { message: opt, messageRelevance: 1 };
	}

	if ($$ && $$.visible) {
		$$.update(opt);
	} else {
		$$ = Widget.createController( OS_ANDROID ? 'android' : 'window', _.extend(args, opt));
		$$.show(callback);
	}
};

exports.hide = function() {
	if (null === $$) return;

	$$.hide();
	$$ = null;
};