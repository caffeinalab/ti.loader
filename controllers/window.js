var args = arguments[0] || {};

/*
Private functions
*/

function update(msg) {
    $.caffeinaLoaderLabel.text = msg || '';
}

function cancel(e) {
    if (!args.cancelable) {
        console.warn("This activity can't be canceled");
        return;
    }

    if (_.isFunction(args.cancelable)) {
        args.cancelable();
    }

    close();
}

function show() {
    $.caffeinaLoaderMask.open();
    $.caffeinaLoaderIndicator.show();
    update(args.message);
}

function hide() {
    $.caffeinaLoaderIndicator.hide();
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

