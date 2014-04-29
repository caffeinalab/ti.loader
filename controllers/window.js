var args = arguments[0] || {};

/*
Private functions
*/


function update(msg, cancelable) {
    $.caffeinaLoaderLabel.text = msg || 'Loading...';
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

function open() {
    $.caffeinaLoaderMask.open();
    $.caffeinaLoaderIndicator.show();
    update(args.message, args.cancelable);
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

exports.open  = open;
exports.update = update;
exports.hide = hide;

