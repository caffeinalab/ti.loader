# Ti.Loader

### com.caffeinalab.titanium.loader

Titanium Widget to display a loader mask.

Proudly inspired to https://github.com/FokkeZB/nl.fokkezb.loading, with some edits for Android (using **ProgressIndicator** instead Ti.UI.Window)

![image](http://cl.ly/image/2p052S2J472G/10.jpg)


## Installation

#### Via Gittio

```
gittio install com.caffeinalab.titanium.loader
```

#### Via Github

Download the latest release, and add in your *config.json*, under `dependencies`:

```
"dependencies": {
    "com.caffeinalab.titanium.loader": "*"
}
```

## Fully stylable via TSS

#### `#caffeinaLoaderMask`

The outer mask (Window)

#### `#caffeinaLoaderView`

The mask containing the loader

#### `#caffeinaLoaderLabel`

The label containing the text

Watch the `window.tss/window.xml` file for all options and override the rules with ID instead of class.

## Usage

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

## Constructor options

#### `message` (String)
The message to display

#### `messageRelevance` (Number, default: `0`)
Continuous updates to the message will respect the `messageRelevance` property.

#### `cancelable` (Boolean, default: `true`)
If is a `Function`, this will be called on cancel. 
Set to `false` to prohibit user cancelation of the mask.

## API

#### `show([opt]) `
Show the mask extending the `constructor options` with the arguments.

#### `show([message])`
This is equivalent to `show({ message: [message] })`

#### `hide()`

Closes the mask.
