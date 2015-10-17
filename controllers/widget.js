var args = arguments[0] || {};

_.defaults(args, {
	cancelable: true,
	message: '',
	messageRelevance: 0,
	fullscreen: false,
	onInit: null,
	useImages: false,
	customView: null
});

var $instance = null;

/**
 * @method show
 * @param  {Object}   opt
 * @param  {Function} callback
 */
exports.show = function(opt, callback) {
	opt = opt || {};
	if (_.isString(opt)) {
		opt = {
			message: opt,
			messageRelevance: 1
		};
	}

	if ($instance != null && $instance.visible == true) {
		$instance.update(opt);
	} else {
		$instance = Widget.createController(OS_ANDROID ? 'android' : 'window', _.extend({}, args, opt));
		$instance.show(callback);
	}
};

/**
 * @method  hide
 * Hide the loader
 */
exports.hide = function() {
	if ($instance === null) return;

	$instance.hide();
	$instance = null;
};