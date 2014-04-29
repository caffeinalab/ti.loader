# Alloy Loader

Widget for Titanium Alloy Framework to display a loader X-Platform.

Proudly inspired to https://github.com/FokkeZB/nl.fokkezb.loading, with some edits for Android (using `ProgressIndicator`)

## Installation

`gittio install com.caffeinalab.titanium.loader`

## Usage

```javascript
var LO = Alloy.createWidget('com.caffeinalab.titanium.loader');

// show the loader
LO.show('Loading...', false);

// hide the loader
LO.hide();

// update the loader
LO.update('Wait...', false)

```

## API

* `show( [message], [cancelable]) `: show or update the mask with selected message.

* `update( [message], [cancelable] )`: update the message or cancelable property

* `hide()`: close the mask.
