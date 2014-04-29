var args = arguments[0] || {};
var $$;

function show(msg, cancelable) {
    var _$$;

    if (OS_IOS) {

        if ($$) {
            $$.update(msg, cancelable);
            return;
        }
        _$$ = Widget.createController('window', {
            message: msg,
            cancelable: cancelable
        });

    } else if (OS_ANDROID) {

        if ($$) {
            $$.message = msg;
            return;
        }
        _$$ = Ti.UI.Android.createProgressIndicator({
            message: msg,
            type: Ti.UI.Android.PROGRESS_INDICATOR_INDETERMINANT,
            cancelable: !!cancelable
        });

    }

    hide();
    _$$.open();
    $$ = _$$;
}

function hide() {
    if (!$$) return;
    $$.hide();
    $$ = null;
}

Object.defineProperty($, 'visible', {
    get: function () {
       return !!$$;
   },
   set: function (visible) {
    if (visible) {
        show();
    } else {
        hide();
    }
}
});

exports.show = show;
exports.hide = hide;