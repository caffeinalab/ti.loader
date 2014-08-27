# Alloy Loader

Widget for Titanium Alloy Framework to display a loader mask.

Proudly inspired to https://github.com/FokkeZB/nl.fokkezb.loading, with some edits for Android (using **ProgressIndicator** instead Ti.UI.Window)

### iOS

![image](http://cl.ly/image/1i0H3K153z3e/loaderios.jpg)

### Android

![image](http://cl.ly/image/2R0H393g393z/loaderand.jpg)


## Installation

#### Via Gittio

```
gittio install com.caffeinalab.titanium.loader
```

#### Via Github

```
git clone git@github.com:CaffeinaLab/com.caffeinalab.titanium.loader.git app/widgets/com.caffeinalab.titanium.loader
```

And add in your *config.json*, under `dependencies`:

```
"dependencies": {
    "com.caffeinalab.titanium.loader": "*"
}
```

## Usage

The widget is fully stylable via TSS.

Watch the `window.tss` file.

```javascript
// Create a global reference to the widget
var LO = Alloy.createWidget('com.caffeinalab.titanium.loader', {
	message: "Test",
	cancelable: true,
	useImages: false
});

// show the loader

// Equivalent to { message: 'Loading...', messageRelevance: 1 }
LO.show('Loading...');

LO.show({
	message: 'Wait..',
	messageRelevance: 3,
	cancelable: true
});

// hide the loader
LO.hide();

```

## API

### `show([opt]) `

Show or update the mask with selected message.

* `message`: The message to display
* `messageRelevance`: Continuous updates to the message without closing the loader will respect the `messageRelevance` property
* `cancelable`: If is a function, this will be called on cancel. Set to `false` to prohibit user cancelation.

### `hide()`

Close the mask.
