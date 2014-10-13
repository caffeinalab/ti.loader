var args = arguments[0] || {};

/*
Private functions
*/

function show() {
	$.cfn_LoaderMask.opacity = 0;
	$.cfn_LoaderMask.addEventListener('open', function() { $.cfn_LoaderMask.animate({ opacity: 1 }); });
	$.cfn_LoaderMask.open();

	if (args.useImages) $.cfn_LoaderImages.start();
	else $.cfn_LoaderIndicator.show();

	update();
}

function hide() {
	$.cfn_LoaderMask.animate({ opacity: 0 }, function(){
		if (args.useImages) $.cfn_LoaderImages.stop();
		else $.cfn_LoaderIndicator.hide();

		$.cfn_LoaderMask.close();
		$.destroy();
		$.off();
	});
}

function update(opt) {
	if (opt != null && opt.messageRelevance < args.messageRelevance) {
		opt.message = args.message;
	}

	_.extend(args, opt || {});
	$.cfn_LoaderLabel.text = args.message;
}

function cancel() {
	if (args.cancelable === false) {
		console.warn("com.cfn_lab.titanium.loader: This activity can't be canceled");
		return;
	}

	if (_.isFunction(args.cancelable)) args.cancelable();
	hide();
}


/*
Listeners
*/

$.cfn_LoaderMask.addEventListener('click', cancel);


/*
Exports
*/

exports.show  = show;
exports.hide = hide;
exports.update = update;
