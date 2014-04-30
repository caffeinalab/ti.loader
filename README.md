# Alloy Loader

Widget for Titanium Alloy Framework to display a loader mask.

Proudly inspired to https://github.com/FokkeZB/nl.fokkezb.loading, with some edits for Android (using **ProgressIndicator** instead Ti.UI.Window)

## Installation

```
gittio install com.caffeinalab.titanium.loader
```

## Usage

```javascript
// Create a global reference to the widget
var LO = Alloy.createWidget('com.caffeinalab.titanium.loader');

// show the loader
LO.show('Loading...', false);

// hide the loader
LO.hide();

// update the loader
LO.update('Wait...', false)

```

## API

* `show( [message], [cancelable] ) `: show or update the mask with selected message.

* `hide()`: close the mask.
