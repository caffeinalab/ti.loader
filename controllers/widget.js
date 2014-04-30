var args = arguments[0] || {};
var $$;

function show(msg, cancelable) {
    var __$$;

    if (OS_IOS) {

        if ($$) {
            $$.update(msg, cancelable);
            return;
        }
        __$$ = Widget.createController('window', {
            message: msg,
            cancelable: cancelable
        });

    } else if (OS_ANDROID) {

        if ($$) {
            $$.message = msg;
            $$.cancelable = cancelable;
            return;
        }
        __$$ = Ti.UI.Android.createProgressIndicator({
            type: Ti.UI.Android.PROGRESS_INDICATOR_INDETERMINANT,
            message: msg,
            cancelable: !!cancelable
        });
    }

    $$.hide();
    __$$.show();

    $$ = __$$;
}

function hide() {
    if (!$$) {
        return;
    }

    $$.hide();
    $$ = null;
}

exports.show = show;
exports.hide = hide;