/*
 * colorScroll - jQuery plugin
 * A jQuery plugin that transitions the background color, when the user scrolls.
 * Version 0.2.0
 *
 * Copyright (c) 2013 Hendrik Lammers
 * http://www.hendriklammers.com
 *
 * Licensed under the MIT license.
 * http://opensource.org/licenses/MIT
 */

// TODO: Optimize everything, currently using too much resources
// TODO: Add optional use of percentage for the positions, make 0 & 100% the default
// TODO: Add option to the scrolling on an element other than the standard $(document)
;(function ($, window, undefined) {
    'use strict';

    // Create the defaults once
    var pluginName = 'colorScroll',
        document = window.document,
        defaults = {
            colors: [{
                color: '#ffffff',
                position: 500
            }, {
                color: '#e1edff',
                position: 1500
            }, {
                color: '#f1ffc7',
                position: 2250
            }, {
                color: '#ffe9bd',
                position: 4000
            }, {
                color: '#e8ab9c',
                position: 4500
            }]
        },

        // rgba support check
        rgbaSupport = (function() {
            var elem = document.createElement('div');
            var style = elem.style;
            style.cssText = 'color:rgba(150,255,150,.5)';

            return ('' + style.backgroundColor).indexOf('rgba') > -1;
        }()),

        // Sort by property
        dynamicSort = function (property) {
            return function (a, b) {
                return (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            };
        },

        // Calculate an in-between color. Returns "rgba(250,250,250,1)"-like string.
        calculateColor = function(begin, end, pos) {
            var color = 'rgb' + (rgbaSupport ? 'a' : '') + '(' + parseInt((begin[0] + pos * (end[0] - begin[0])), 10) + ',' + parseInt((begin[1] + pos * (end[1] - begin[1])), 10) + ',' + parseInt((begin[2] + pos * (end[2] - begin[2])), 10);

            if (rgbaSupport) {
                color += ',' + (begin && end ? parseFloat(begin[3] + pos * (end[3] - begin[3])) : 1);
            }

            color += ')';

            return color;
        },

        // Parse an CSS-syntax color. Outputs an array [r, g, b]
        parseColor = function(color) {
            var match, parsed;

            if ((match = /#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})/.exec(color))) {
                // Match #aabbcc
                parsed = [parseInt(match[1], 16), parseInt(match[2], 16), parseInt(match[3], 16), 1];
            } else if ((match = /#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])/.exec(color))) {
                // Match #abc
                parsed = [parseInt(match[1], 16) * 17, parseInt(match[2], 16) * 17, parseInt(match[3], 16) * 17, 1];
            } else if ((match = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(color))) {
                // Match rgb(n, n, n)
                parsed = [parseInt(match[1], 10), parseInt(match[2], 10), parseInt(match[3], 10), 1];
            } else if ((match = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9\.]*)\s*\)/.exec(color))) {
                // Match rgba(n, n, n, n)
                parsed = [parseInt(match[1], 10), parseInt(match[2], 10), parseInt(match[3], 10), parseFloat(match[4])];
            }

            return parsed;
        };

    function Plugin(element, options) {
        this.element = element;
        this.$element = $(element);

        // extend defaults with options given through the arguments
        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    Plugin.prototype = {
        init: function () {
            // Sort array by position values
            this.options.colors.sort(dynamicSort('position'));

            // Set current color
            this.currentColor = this.$element.css('color');

            // Init color to match the current scroll position for the first time
            this.updateColor();

            // Listen for scroll event on document
            $(document).on('scroll', $.proxy(this.updateColor, this));
        },

        updateColor: function() {
            var scrollAmount = $(document).scrollTop(),
                pos1,
                pos2,
                color1,
                color2;

            if (scrollAmount <= this.options.colors[0].position) {
                // Use the first color the the colors array
                this.setColor(this.options.colors[0].color);
            } else if (scrollAmount >= this.options.colors[this.options.colors.length - 1].position) {
                // Use the last color the the colors array
                this.setColor(this.options.colors[this.options.colors.length - 1].color);
            } else {
                // Get the position
                for (var i = 0; i < this.options.colors.length; i++) {
                    // Find out between which 2 colors we currently are
                    if (scrollAmount >= this.options.colors[i].position) {
                        pos1 = this.options.colors[i].position;
                        color1 = this.options.colors[i].color;
                    } else {
                        pos2 = this.options.colors[i].position;
                        color2 = this.options.colors[i].color;
                        break;
                    }
                }
                // Calculate the relative amount scrolled
                var relativePos = ((scrollAmount - pos1) / (pos2 - pos1));

                // Calculate new color value and set it using setColor
                var color = calculateColor(parseColor(color1), parseColor(color2), relativePos);
                this.setColor(color);
            }
        },

        setColor: function (newColor) {
            if (newColor !== this.currentColor) {
                this.$element.css('color', newColor);
                this.currentColor = newColor;
            }
        }
    };

    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
            }
        });
    };

}(jQuery, window));