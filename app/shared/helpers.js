// Generated by CoffeeScript 1.6.3
(function() {
  (function(exports) {
    exports.noop = function() {};
    exports.log = function(message, prefix) {
      return console.log("[" + ((new Date()).toUTCString()) + "] " + (this.logPrefix || prefix || '[app]:') + " " + message);
    };
    exports.numOrdinalSuffix = function(i) {
      var j;
      j = i % 10;
      if (j === 1 && i !== 11) {
        return i + 'st';
      }
      if (j === 2 && i !== 12) {
        return i + 'nd';
      }
      if (j === 3 && i !== 13) {
        return i + 'rd';
      }
      return i + 'th';
    };
    exports.choosePlural = function(number, endings) {
      return number + ' ' + (number === 1 ? endings[0] : endings[1]);
    };
    exports.makeURL = function(url, params) {
      var i, l, matches;
      matches = url.match(/[:|*]\w+/g);
      if (matches && (typeof params === 'string' || typeof params === 'number')) {
        url = url.replace(matches[0], params);
      } else if (params && matches) {
        i = 0;
        l = matches.length;
        while (i < l) {
          url = url.replace(matches[i], params[matches[i].slice(1)] || '');
          i++;
        }
      }
      return url;
    };
    exports.shorten = function(str, len, pos) {
      var lim, res;
      str = str || '';
      lim = ((len - 3) / 2) | 0;
      res = str;
      if (str.length > len) {
        switch (pos) {
          case 'left':
            res = '...' + str.slice(3 - len);
            break;
          case 'center':
            res = str.slice(0, lim) + '...' + str.slice(-lim);
            break;
          default:
            res = str.slice(0, len - 3) + '...';
        }
      }
      return res;
    };
    exports.capFirst = function(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };
    exports.stripTags = function(str) {
      if (typeof str === 'string') {
        return str.replace(/(<([^>]+)>)/g, '');
      } else {
        return '';
      }
    };
    return exports.sanitizeString = function(string) {
      string = string.replace(/\r\n/g, '\n');
      string = string.replace(/<\/script>/g, '<\\/script>');
      return unescape(encodeURIComponent(string));
    };
  })(typeof exports === 'undefined' ? this['helpers'] = {} : exports);

}).call(this);
