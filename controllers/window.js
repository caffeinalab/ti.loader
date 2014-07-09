var args = arguments[0] || {};

/*
Private functions
*/

function update(msg) {
    $.caffeinaLoaderLabel.text = msg || '';
}

function cancel(e) {
    if (!args.cancelable) {
        console.warn("com.caffeinalab.titanium.loader: This activity can't be canceled");
        return;
    }

    if (_.isFunction(args.cancelable)) {
        args.cancelable();
    }

    close();
}

function show() {
    $.caffeinaLoaderMask.open();
    if (!args.useImages) $.caffeinaLoaderIndicator.show();
    else $.caffeinaLoaderImages.start();
    update(args.message);
}

function hide() {
    if (!args.useImages) $.caffeinaLoaderIndicator.hide();
    else $.caffeinaLoaderImages.stop();
    $.caffeinaLoaderMask.close();
    $.destroy();
}

/*
Listeners
*/

$.caffeinaLoaderMask.addEventListener('click', cancel);


/*
Exports
*/

exports.show  = show;
exports.update = update;
exports.hide = hide;

