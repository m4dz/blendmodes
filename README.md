Blendmodes
==========

Blendmodes.js provides a convenient way to apply blend modes with JS/CSS.

By: MAD - ecrire [at] madsgraphics [dot] com

Follow [@madsgraphics](http://twitter.com/madsgraphics) on Twitter for more updates.


Status
------

Currently, this library only support _Screen_ and _Multiply_ blend modes, and only with flat colors in input.

However, our goal is to provide robust implementation of blendmodes as known in Adobe Photoshop directly in the browser with Javascript. It will take as input as well as flat colors, gradients or images, directly taken from the CSS or HTML.

Actually in very early stage development. More coming soon ;)…

Use
---

Just use the blend mode you want from the `window` exposed `Blendmodes` object:

    var originalLayer = '#5f42e6'
      , mixLayer      = '#5467cd'
      , screenColor   = Blendmodes.screen(originalLayer, mixLayer)
      , multiplyColor = Blendmodes.multiply(originalLayer, mixLayer);


Changelog
---------

**0.1**

* First implementation. Only support _Screen_ and _Multiply_ blend modes for flat colors.


Know issues
-----------

No issues known for the moment… Let's take a beer \o/ !


Licence
-------

All of the **Blendmodes** specific code is under the WTFPL license. Which means it's also MIT and BSD (or anything you want). However, the inspired works are subject to their own licenses.
