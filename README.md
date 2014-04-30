# Alloy Loader

Widget for Titanium Alloy Framework to display a loader X-Platform.

Proudly inspired to https://github.com/FokkeZB/nl.fokkezb.loading, with some edits for Android (using `ProgressIndicator`)

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

* `show( [message], [cancelable]) `: show or update the mask with selected message.

* `update( [message], [cancelable] )`: update the message or cancelable property

* `hide()`: close the mask.
