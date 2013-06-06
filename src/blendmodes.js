// Blendmodes.js
// Version - 0.1
//
// by MAD - @madsgraphics - ecrire[at]madsgraphics.com
//
// https://github.com/madsgraphics/blendmodes/
//
// Tri-license - WTFPL | MIT | BSD
//
// Please minify before use.
//
(function(undefined) {
  'use strict';

  function getColorRGB(color) {
    var result;
    /**
     * WARNING : The regex is NOT a good part of this lib, and is still very
     *           ugly. Please consider to update it quickly to get a more
     *           readable way to parse the color strings ;)
     */
    // Hexa
    if (result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color)) {
      return {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      };
    }
    // RGB(a)
    if (result = /^rgba?\(\s?([0-9]{1,3})\s?,\s?([0-9]{1,3})\s?,\s?([0-9]{1,3})\s?\)$/i.exec(color)) {
      return {
        r: parseInt(result[1], 10),
        g: parseInt(result[2], 10),
        b: parseInt(result[3], 10)
      };
    }

    return null;
  }

  function octal(ratio) {
    return Math.round( ratio * 255 );
  }

  function blend(method, hex, mix) {
    var base  = getColorRGB(hex),
        bl    = getColorRGB(mix),
        rgb   = {},
        c;

    for (c in base) {
      rgb[c] = method(base[c] / 255, bl[c] / 255);
    }

    return rgb;
  }

  function multiply(hex, mix) {
    return octal(hex * mix);
  }

  function screen(hex, mix) {
    return octal(1 - (1 - hex) * (1 - mix));
  }

  window.Blendmodes = {
    multiply: function(hex, mix) {
      return blend(multiply, hex, mix);
    },
    screen: function(hex, mix) {
      return blend(screen, hex, mix);
    }
  };
})();
