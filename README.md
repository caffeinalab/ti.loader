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

```json
"dependencies": {
    "com.caffeinalab.titanium.loader": "*"
}
```

## Fully stylable via TSS

#### `#cfn_LoaderMask`

The outer mask (Window)

#### `#cfn_LoaderView`

The mask containing the loader

#### `#cfn_LoaderLabel`

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

// ... or Pass an object
LO.show({
	message: 'Wait..',
	messageRelevance: 3,
	cancelable: true
});

// ... and optionally a complete callback
LO.show(null, function() {
	alert('Ya Man!');
});

// hide the loader
LO.hide();

```

## Constructor and `.show` options

#### `message` (String)

The message to display

#### `messageRelevance` (Number, default: `0`)

Continuous updates to the message will respect the `messageRelevance` property.

#### `cancelable` (Boolean, default: `true`)

If is a `Function`, this will be called on cancel.

Set to explicit `false` to prohibit user cancelation of the mask.

#### `onInit` (Function, default: `null`)

Function to call before the window appear, so you can edit UI.

`e.ui` will be current UI element, so *be careful* to switch between OSes.

#### `customView` (Ti.UI.View, default: `null`)

Use a custom view instead of default loader / image

## API

#### `.show([opt:Object], [callback:Function]) `

Show the mask extending the `constructor options` with the arguments.

#### `.show([message:String], [callback:Function])`

This is equivalent to `show({ message: [message] })`

#### `.update([opt:Object])`

Update the previous passed options and the UI.

#### `.hide()`

Closes the mask.
