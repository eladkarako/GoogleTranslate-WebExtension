/* Copyright 2014 Google */
(function () {
  /*

   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  var h, ba = ba || {}
    , l = this || self
    , m = function () {}
    , n = function (a) {
      a.Sa = void 0;
      a.G = function () {
        return a.Sa ? a.Sa : a.Sa = new a
      }
    }
    , ca = function (a) {
      var b = typeof a;
      if("object" == b)
        if(a) {
          if(a instanceof Array) return "array";
          if(a instanceof Object) return b;
          var c = Object.prototype.toString.call(a);
          if("[object Window]" == c) return "object";
          if("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
          if("[object Function]" ==
            c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
        } else return "null";
      else if("function" == b && "undefined" == typeof a.call) return "object";
      return b
    }
    , da = function (a) {
      var b = ca(a);
      return "array" == b || "object" == b && "number" == typeof a.length
    }
    , ea = function (a) {
      return "function" == ca(a)
    }
    , p = function (a) {
      var b = typeof a;
      return "object" == b && null != a || "function" == b
    }
    , ia = function (a) {
      return Object.prototype.hasOwnProperty.call(a, fa) && a[fa] || (a[fa] = ++ha)
    }
    , fa = "closure_uid_" + (1E9 * Math.random() >>> 0)
    , ha = 0
    , ja = function (a, b, c) {
      return a.call.apply(a.bind, arguments)
    }
    , ka = function (a, b, c) {
      if(!a) throw Error();
      if(2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function () {
          var e = Array.prototype.slice.call(arguments);
          Array.prototype.unshift.apply(e, d);
          return a.apply(b, e)
        }
      }
      return function () {
        return a.apply(b, arguments)
      }
    }
    , r = function (a, b, c) {
      Function.prototype.bind && -1 != Function.prototype.bind.toString()
        .indexOf("native code") ? r = ja : r = ka;
      return r.apply(null
        , arguments)
    }
    , t = function (a, b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return function () {
        var d = c.slice();
        d.push.apply(d, arguments);
        return a.apply(this, d)
      }
    }
    , la = Date.now || function () {
      return +new Date
    }
    , u = function (a, b) {
      function c() {}
      c.prototype = b.prototype;
      a.s = b.prototype;
      a.prototype = new c;
      a.prototype.constructor = a
    };
  var ma = function (a) {
    if(Error.captureStackTrace) Error.captureStackTrace(this, ma);
    else {
      var b = Error()
        .stack;
      b && (this.stack = b)
    }
    a && (this.message = String(a))
  };
  u(ma, Error);
  ma.prototype.name = "CustomError";
  var na;
  var oa = function (a, b) {
    a = a.split("%s");
    for(var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
    ma.call(this, c + a[d])
  };
  u(oa, ma);
  oa.prototype.name = "AssertionError";
  var pa = function (a, b, c, d) {
      var e = "Assertion failed";
      if(c) {
        e += ": " + c;
        var f = d
      } else a && (e += ": " + a, f = b);
      throw new oa("" + e, f || []);
    }
    , v = function (a, b, c) {
      a || pa("", null, b, Array.prototype.slice.call(arguments, 2));
      return a
    }
    , qa = function (a, b) {
      throw new oa("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
    }
    , ra = function (a, b, c) {
      "number" !== typeof a && pa("Expected number but got %s: %s.", [ca(a), a], b, Array.prototype.slice.call(arguments, 2));
      return a
    }
    , sa = function (a, b, c) {
      "string" !== typeof a && pa("Expected string but got %s: %s.", [ca(a), a], b, Array.prototype.slice.call(arguments, 2));
      return a
    }
    , ta = function (a, b, c) {
      p(a) && 1 == a.nodeType || pa("Expected Element but got %s: %s.", [ca(a), a], b, Array.prototype.slice.call(arguments, 2))
    }
    , va = function (a, b, c, d) {
      a instanceof b || pa("Expected instanceof %s but got %s.", [ua(b), ua(a)], c, Array.prototype.slice.call(arguments, 3));
      return a
    }
    , ua = function (a) {
      return a instanceof Function ? a.displayName || a.name || "unknown type name" : a instanceof Object ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) :
        null === a ? "null" : typeof a
    };
  var wa = Array.prototype.indexOf ? function (a, b) {
      v(null != a.length);
      return Array.prototype.indexOf.call(a, b, void 0)
    } : function (a, b) {
      if("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
      for(var c = 0; c < a.length; c++)
        if(c in a && a[c] === b) return c;
      return -1
    }
    , w = Array.prototype.forEach ? function (a, b, c) {
      v(null != a.length);
      Array.prototype.forEach.call(a, b, c)
    } : function (a, b, c) {
      for(var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
    }
    , xa = Array.prototype.filter ?
    function (a, b) {
      v(null != a.length);
      return Array.prototype.filter.call(a, b, void 0)
    } : function (a, b) {
      for(var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
        if(g in f) {
          var k = f[g];
          b.call(void 0, k, g, a) && (d[e++] = k)
        }
      return d
    }
    , ya = Array.prototype.map ? function (a, b) {
      v(null != a.length);
      return Array.prototype.map.call(a, b, void 0)
    } : function (a, b) {
      for(var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
      return d
    }
    , za = Array.prototype.every ?
    function (a, b) {
      v(null != a.length);
      return Array.prototype.every.call(a, b, void 0)
    } : function (a, b) {
      for(var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
        if(e in d && !b.call(void 0, d[e], e, a)) return !1;
      return !0
    }
    , Ba = function (a) {
      a: {
        var b = Aa;
        for(var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
          if(e in d && b.call(void 0, d[e], e, a)) {
            b = e;
            break a
          }
        b = -1
      }
      return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }
    , y = function (a, b) {
      return 0 <= wa(a, b)
    }
    , Ca = function (a, b) {
      b = wa(a, b);
      var c;
      if(c = 0 <= b) v(null !=
        a.length), Array.prototype.splice.call(a, b, 1);
      return c
    }
    , Da = function (a) {
      return Array.prototype.concat.apply([], arguments)
    }
    , Ea = function (a) {
      var b = a.length;
      if(0 < b) {
        for(var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
        return c
      }
      return []
    };
  var Fa = function (a, b, c) {
      for(var d in a) b.call(c, a[d], d, a)
    }
    , Ga = function (a, b) {
      for(var c in a)
        if(a[c] == b) return !0;
      return !1
    }
    , Ha = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ")
    , Ia = function (a, b) {
      for(var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for(c in d) a[c] = d[c];
        for(var f = 0; f < Ha.length; f++) c = Ha[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
      }
    }
    , Ja = function (a) {
      var b = arguments.length;
      if(1 == b && Array.isArray(arguments[0])) return Ja.apply(null
        , arguments[0]);
      if(b % 2) throw Error("Uneven number of arguments");
      for(var c = {}, d = 0; d < b; d += 2) c[arguments[d]] = arguments[d + 1];
      return c
    };
  var Ma = function (a, b) {
    this.a = a === Ka && b || "";
    this.f = La
  };
  Ma.prototype.Ra = !0;
  Ma.prototype.za = function () {
    return this.a
  };
  Ma.prototype.toString = function () {
    return "Const{" + this.a + "}"
  };
  var Na = function (a) {
      if(a instanceof Ma && a.constructor === Ma && a.f === La) return a.a;
      qa("expected object of type Const, got '" + a + "'");
      return "type_error:Const"
    }
    , La = {}
    , Ka = {};
  var Oa = String.prototype.trim ? function (a) {
      return a.trim()
    } : function (a) {
      return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }
    , Wa = function (a, b) {
      if(b) a = a.replace(Pa, "&amp;")
        .replace(Qa, "&lt;")
        .replace(Ra, "&gt;")
        .replace(Sa, "&quot;")
        .replace(Ta, "&#39;")
        .replace(Ua, "&#0;");
      else {
        if(!Va.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Pa, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Qa, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Ra, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Sa, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Ta
          , "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Ua, "&#0;"))
      }
      return a
    }
    , Pa = /&/g
    , Qa = /</g
    , Ra = />/g
    , Sa = /"/g
    , Ta = /'/g
    , Ua = /\x00/g
    , Va = /[\x00&<>"']/
    , Xa = function (a, b) {
      return a < b ? -1 : a > b ? 1 : 0
    };
  var z;
  a: {
    var Ya = l.navigator;
    if(Ya) {
      var Za = Ya.userAgent;
      if(Za) {
        z = Za;
        break a
      }
    }
    z = ""
  }
  var A = function (a) {
    return -1 != z.indexOf(a)
  };
  var $a = function () {
      return A("Firefox") || A("FxiOS")
    }
    , ab = function () {
      return (A("Chrome") || A("CriOS")) && !A("Edge")
    };
  var cb = function () {
    this.a = "";
    this.g = bb;
    this.f = null
  };
  cb.prototype.tb = !0;
  cb.prototype.Ra = !0;
  cb.prototype.za = function () {
    return this.a.toString()
  };
  cb.prototype.toString = function () {
    return "SafeHtml{" + this.a + "}"
  };
  var db = function (a) {
      if(a instanceof cb && a.constructor === cb && a.g === bb) return a.a;
      qa("expected object of type SafeHtml, got '" + a + "' of type " + ca(a));
      return "type_error:SafeHtml"
    }
    , fb = function (a) {
      if(a instanceof cb) return a;
      var b = "object" == typeof a
        , c = null;
      b && a.tb && (c = a.f);
      a = Wa(b && a.Ra ? a.za() : String(a));
      return eb(a, c)
    }
    , bb = {}
    , eb = function (a, b) {
      var c = new cb;
      c.a = a;
      c.f = b;
      return c
    };
  eb("<!DOCTYPE html>", 0);
  var gb = eb("", 0);
  eb("<br>", 0);
  var hb = function (a) {
      var b = !1
        , c;
      return function () {
        b || (c = a(), b = !0);
        return c
      }
    }(function () {
      if("undefined" === typeof document) return !1;
      var a = document.createElement("div")
        , b = document.createElement("div");
      b.appendChild(document.createElement("div"));
      a.appendChild(b);
      if(!a.firstChild) return !1;
      b = a.firstChild.firstChild;
      a.innerHTML = db(gb);
      return !b.parentElement
    })
    , jb = function (a, b) {
      if(hb())
        for(; a.lastChild;) a.removeChild(a.lastChild);
      a.innerHTML = db(b)
    };
  var kb = function (a) {
    return a = Wa(a, void 0)
  };
  var lb = function () {
    return A("iPhone") && !A("iPod") && !A("iPad")
  };
  var mb = function (a) {
    mb[" "](a);
    return a
  };
  mb[" "] = m;
  var ob = function (a, b) {
    var c = nb;
    return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
  };
  var pb = A("Opera")
    , C = A("Trident") || A("MSIE")
    , qb = A("Edge")
    , D = A("Gecko") && !(-1 != z.toLowerCase()
      .indexOf("webkit") && !A("Edge")) && !(A("Trident") || A("MSIE")) && !A("Edge")
    , E = -1 != z.toLowerCase()
    .indexOf("webkit") && !A("Edge")
    , F = A("Macintosh")
    , rb = A("Windows")
    , sb = A("Android")
    , tb = lb()
    , ub = A("iPad")
    , vb = A("iPod")
    , wb = function () {
      var a = l.document;
      return a ? a.documentMode : void 0
    }
    , xb;
  a: {
    var yb = ""
      , zb = function () {
        var a = z;
        if(D) return /rv:([^\);]+)(\)|;)/.exec(a);
        if(qb) return /Edge\/([\d\.]+)/.exec(a);
        if(C) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if(E) return /WebKit\/(\S+)/.exec(a);
        if(pb) return /(?:Version)[ \/]?(\S+)/.exec(a)
      }();zb && (yb = zb ? zb[1] : "");
    if(C) {
      var Ab = wb();
      if(null != Ab && Ab > parseFloat(yb)) {
        xb = String(Ab);
        break a
      }
    }
    xb = yb
  }
  var Bb = xb
    , nb = {}
    , G = function (a) {
      return ob(a, function () {
        for(var b = 0, c = Oa(String(Bb))
            .split("."), d = Oa(String(a))
            .split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
          var g = c[f] || ""
            , k = d[f] || "";
          do {
            g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
            k = /(\d*)(\D*)(.*)/.exec(k) || ["", "", "", ""];
            if(0 == g[0].length && 0 == k[0].length) break;
            b = Xa(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == k[1].length ? 0 : parseInt(k[1], 10)) || Xa(0 == g[2].length, 0 == k[2].length) || Xa(g[2], k[2]);
            g = g[3];
            k = k[3]
          } while(0 == b)
        }
        return 0 <= b
      })
    }
    , Cb;
  if(l.document && C) {
    var Db = wb();
    Cb = Db ? Db : parseInt(Bb, 10) || void 0
  } else Cb = void 0;
  var Eb = Cb;
  var Fb = $a()
    , Gb = lb() || A("iPod")
    , Hb = A("iPad")
    , Ib = A("Android") && !(ab() || $a() || A("Opera") || A("Silk"))
    , Jb = ab()
    , Kb = A("Safari") && !(ab() || A("Coast") || A("Opera") || A("Edge") || A("Edg/") || A("OPR") || $a() || A("Silk") || A("Android")) && !(lb() || A("iPad") || A("iPod"));
  var Lb = function () {}
    , Mb = "function" == typeof Uint8Array
    , Pb = function (a, b, c) {
      a.f = null;
      b || (b = []);
      a.u = void 0;
      a.g = -1;
      a.a = b;
      a: {
        if(b = a.a.length) {
          --b;
          var d = a.a[b];
          if(!(null === d || "object" != typeof d || Array.isArray(d) || Mb && d instanceof Uint8Array)) {
            a.h = b - a.g;
            a.j = d;
            break a
          }
        }
        a.h = Number.MAX_VALUE
      }
      a.m = {};
      if(c)
        for(b = 0; b < c.length; b++) d = c[b], d < a.h ? (d += a.g, a.a[d] = a.a[d] || Nb) : (Ob(a), a.j[d] = a.j[d] || Nb)
    }
    , Nb = Object.freeze ? Object.freeze([]) : []
    , Ob = function (a) {
      var b = a.h + a.g;
      a.a[b] || (a.j = a.a[b] = {})
    }
    , H = function (a, b, c) {
      va(a, Lb);
      b < a.h ? a.a[b + a.g] = c : (Ob(a), a.j[b] = c);
      return a
    }
    , Qb = function (a) {
      if(a.f)
        for(var b in a.f) {
          var c = a.f[b];
          if("array" == ca(c))
            for(var d = 0; d < c.length; d++) c[d] && c[d].ka();
          else c && c.ka()
        }
    };
  Lb.prototype.ka = function () {
    Qb(this);
    return this.a
  };
  Lb.prototype.toString = function () {
    Qb(this);
    return this.a.toString()
  };
  var Rb = function (a) {
      return function () {
        return a
      }
    }
    , Sb = function (a, b) {
      for(var c = 0; c < b.length - 2; c += 3) {
        var d = b.charAt(c + 2);
        d = "a" <= d ? d.charCodeAt(0) - 87 : Number(d);
        d = "+" == b.charAt(c + 1) ? a >>> d : a << d;
        a = "+" == b.charAt(c) ? a + d & 4294967295 : a ^ d
      }
      return a
    }
    , Tb = null
    , Ub = function (a) {
      if(null !== Tb) var b = Tb;
      else {
        b = Rb(String.fromCharCode(84));
        var c = Rb(String.fromCharCode(75));
        b = [b(), b()];
        b[1] = c();
        b = (Tb = window[b.join(c())] || "") || ""
      }
      var d = Rb(String.fromCharCode(116));
      c = Rb(String.fromCharCode(107));
      d = [d(), d()];
      d[1] = c();
      c = "&" + d.join("") +
        "=";
      d = b.split(".");
      b = Number(d[0]) || 0;
      for(var e = [], f = 0, g = 0; g < a.length; g++) {
        var k = a.charCodeAt(g);
        128 > k ? e[f++] = k : (2048 > k ? e[f++] = k >> 6 | 192 : (55296 == (k & 64512) && g + 1 < a.length && 56320 == (a.charCodeAt(g + 1) & 64512) ? (k = 65536 + ((k & 1023) << 10) + (a.charCodeAt(++g) & 1023), e[f++] = k >> 18 | 240, e[f++] = k >> 12 & 63 | 128) : e[f++] = k >> 12 | 224, e[f++] = k >> 6 & 63 | 128), e[f++] = k & 63 | 128)
      }
      a = b;
      for(f = 0; f < e.length; f++) a += e[f], a = Sb(a, "+-a^+6");
      a = Sb(a, "+-3^+b+-f");
      a ^= Number(d[1]) || 0;
      0 > a && (a = (a & 2147483647) + 2147483648);
      a %= 1E6;
      return c + (a.toString() + "." +
        (a ^ b))
    };
  var Vb, Wb = {
    Ab: "activedescendant"
    , Fb: "atomic"
    , Gb: "autocomplete"
    , Ib: "busy"
    , jb: "checked"
    , Lb: "colindex"
    , Qb: "controls"
    , Sb: "describedby"
    , DISABLED: "disabled"
    , Wb: "dropeffect"
    , Xb: "expanded"
    , Yb: "flowto"
    , $b: "grabbed"
    , dc: "haspopup"
    , fc: "hidden"
    , ic: "invalid"
    , jc: "label"
    , kc: "labelledby"
    , lc: "level"
    , qc: "live"
    , Fc: "multiline"
    , Gc: "multiselectable"
    , Kc: "orientation"
    , Lc: "owns"
    , Mc: "posinset"
    , Oc: "pressed"
    , Sc: "readonly"
    , Uc: "relevant"
    , Vc: "required"
    , Zc: "rowindex"
    , ad: "selected"
    , cd: "setsize"
    , ed: "sort"
    , ud: "valuemax"
    , vd: "valuemin"
    , wd: "valuenow"
    , xd: "valuetext"
  };
  var Xb = {
    Bb: "alert"
    , Cb: "alertdialog"
    , Db: "application"
    , Eb: "article"
    , Hb: "banner"
    , Jb: "button"
    , Kb: "checkbox"
    , Mb: "columnheader"
    , Nb: "combobox"
    , Ob: "complementary"
    , Pb: "contentinfo"
    , Rb: "definition"
    , Tb: "dialog"
    , Ub: "directory"
    , Vb: "document"
    , Zb: "form"
    , ac: "grid"
    , bc: "gridcell"
    , cc: "group"
    , ec: "heading"
    , hc: "img"
    , mc: "link"
    , nc: "list"
    , oc: "listbox"
    , pc: "listitem"
    , rc: "log"
    , sc: "main"
    , tc: "marquee"
    , uc: "math"
    , vc: "menu"
    , wc: "menubar"
    , xc: "menuitem"
    , yc: "menuitemcheckbox"
    , zc: "menuitemradio"
    , Hc: "navigation"
    , Ic: "note"
    , Jc: "option"
    , Nc: "presentation"
    , Pc: "progressbar"
    , Qc: "radio"
    , Rc: "radiogroup"
    , Tc: "region"
    , Wc: "row"
    , Xc: "rowgroup"
    , Yc: "rowheader"
    , $c: "scrollbar"
    , SEARCH: "search"
    , bd: "separator"
    , dd: "slider"
    , fd: "spinbutton"
    , gd: "status"
    , TAB: "tab"
    , hd: "tablist"
    , jd: "tabpanel"
    , kd: "textbox"
    , ld: "textinfo"
    , md: "timer"
    , nd: "toolbar"
    , od: "tooltip"
    , pd: "tree"
    , qd: "treegrid"
    , rd: "treeitem"
  };
  var Yb = !C || 9 <= Number(Eb)
    , Zb = !D && !C || C && 9 <= Number(Eb) || D && G("1.9.1")
    , $b = C && !G("9");
  var cc = function (a) {
      return a ? new ac(bc(a)) : na || (na = new ac)
    }
    , I = function (a) {
      return "string" === typeof a ? document.getElementById(a) : a
    }
    , dc = function (a, b) {
      var c = b || document;
      if(c.getElementsByClassName) a = c.getElementsByClassName(a)[0];
      else {
        c = document;
        var d = b || c;
        if(d.querySelectorAll && d.querySelector && a) a = d.querySelector(a ? "." + a : "");
        else {
          b = b || c;
          if(b.querySelectorAll && b.querySelector && a) a = b.querySelectorAll(a ? "." + a : "");
          else if(a && b.getElementsByClassName) {
            var e = b.getElementsByClassName(a);
            a = e
          } else if(e = b.getElementsByTagName("*")
            , a) {
            var f = {};
            for(c = d = 0; b = e[c]; c++) {
              var g = b.className;
              "function" == typeof g.split && y(g.split(/\s+/), a) && (f[d++] = b)
            }
            f.length = d;
            a = f
          } else a = e;
          a = a[0] || null
        }
      }
      return a || null
    }
    , fc = function (a, b) {
      Fa(b, function (c, d) {
        c && "object" == typeof c && c.Ra && (c = c.za());
        "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : ec.hasOwnProperty(d) ? a.setAttribute(ec[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
      })
    }
    , ec = {
      cellpadding: "cellPadding"
      , cellspacing: "cellSpacing"
      , colspan: "colSpan"
      , frameborder: "frameBorder"
      , height: "height"
      , maxlength: "maxLength"
      , nonce: "nonce"
      , role: "role"
      , rowspan: "rowSpan"
      , type: "type"
      , usemap: "useMap"
      , valign: "vAlign"
      , width: "width"
    }
    , hc = function (a, b, c, d) {
      function e(g) {
        g && b.appendChild("string" === typeof g ? a.createTextNode(g) : g)
      }
      for(; d < c.length; d++) {
        var f = c[d];
        !da(f) || p(f) && 0 < f.nodeType ? e(f) : w(gc(f) ? Ea(f) : f, e)
      }
    }
    , ic = function (a, b) {
      b = String(b);
      "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
      return a.createElement(b)
    }
    , jc = function (a, b) {
      v(null !=
        a && null != b, "goog.dom.appendChild expects non-null arguments");
      a.appendChild(b)
    }
    , kc = function (a) {
      a && a.parentNode && a.parentNode.removeChild(a)
    }
    , lc = function (a, b) {
      if(!a || !b) return !1;
      if(a.contains && 1 == b.nodeType) return a == b || a.contains(b);
      if("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
      for(; b && a != b;) b = b.parentNode;
      return b == a
    }
    , bc = function (a) {
      v(a, "Node cannot be null or undefined.");
      return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }
    , mc = function (a, b) {
      v(null !=
        a, "goog.dom.setTextContent expects a non-null value for node");
      if("textContent" in a) a.textContent = b;
      else if(3 == a.nodeType) a.data = String(b);
      else if(a.firstChild && 3 == a.firstChild.nodeType) {
        for(; a.lastChild != a.firstChild;) a.removeChild(v(a.lastChild));
        a.firstChild.data = String(b)
      } else {
        for(var c; c = a.firstChild;) a.removeChild(c);
        c = bc(a);
        a.appendChild(c.createTextNode(String(b)))
      }
    }
    , nc = {
      SCRIPT: 1
      , STYLE: 1
      , HEAD: 1
      , IFRAME: 1
      , OBJECT: 1
    }
    , oc = {
      IMG: " "
      , BR: "\n"
    }
    , pc = function (a, b) {
      b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute("tabIndex"))
    }
    , qc = function (a) {
      return C && !G("9") ? (a = a.getAttributeNode("tabindex"), null != a && a.specified) : a.hasAttribute("tabindex")
    }
    , rc = function (a) {
      a = a.tabIndex;
      return "number" === typeof a && 0 <= a && 32768 > a
    }
    , tc = function (a) {
      var b = [];
      sc(a, b, !1);
      return b.join("")
    }
    , sc = function (a, b, c) {
      if(!(a.nodeName in nc))
        if(3 == a.nodeType) c ? b.push(String(a.nodeValue)
          .replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
        else if(a.nodeName in oc) b.push(oc[a.nodeName]);
      else
        for(a = a.firstChild; a;) sc(a, b, c), a = a.nextSibling
    }
    , gc = function (a) {
      if(a &&
        "number" == typeof a.length) {
        if(p(a)) return "function" == typeof a.item || "string" == typeof a.item;
        if(ea(a)) return "function" == typeof a.item
      }
      return !1
    }
    , ac = function (a) {
      this.a = a || l.document || document
    };
  h = ac.prototype;
  h.o = function (a) {
    return "string" === typeof a ? this.a.getElementById(a) : a
  };
  h.Ma = function (a, b, c) {
    var d = this.a
      , e = arguments
      , f = String(e[0])
      , g = e[1];
    if(!Yb && g && (g.name || g.type)) {
      f = ["<", f];
      g.name && f.push(' name="', kb(g.name), '"');
      if(g.type) {
        f.push(' type="', kb(g.type), '"');
        var k = {};
        Ia(k, g);
        delete k.type;
        g = k
      }
      f.push(">");
      f = f.join("")
    }
    f = ic(d, f);
    g && ("string" === typeof g ? f.className = g : Array.isArray(g) ? f.className = g.join(" ") : fc(f, g));
    2 < e.length && hc(d, f, e, 2);
    return f
  };
  h.ob = function (a, b) {
    hc(bc(a), a, arguments, 1)
  };
  h.getChildren = function (a) {
    return Zb && void 0 != a.children ? a.children : xa(a.childNodes, function (b) {
      return 1 == b.nodeType
    })
  };
  h.contains = lc;
  var uc = function (a, b, c) {
    Array.isArray(c) && (c = c.join(" "));
    v(b, "ARIA attribute cannot be empty.");
    v(Ga(Wb, b), "No such ARIA attribute " + b);
    var d = "aria-" + b;
    "" === c || void 0 == c ? (Vb || (Vb = {
      atomic: !1
      , autocomplete: "none"
      , dropeffect: "none"
      , haspopup: !1
      , live: "off"
      , multiline: !1
      , multiselectable: !1
      , orientation: "vertical"
      , readonly: !1
      , relevant: "additions text"
      , required: !1
      , sort: "none"
      , busy: !1
      , disabled: !1
      , hidden: !1
      , invalid: "false"
    }), c = Vb, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c)
  };
  var vc = function () {};
  n(vc);
  var J = function () {
    this.M = this.M;
    this.N = this.N
  };
  J.prototype.M = !1;
  J.prototype.ea = function () {
    this.M || (this.M = !0, this.A())
  };
  var wc = function (a, b) {
    a.M ? b() : (a.N || (a.N = []), a.N.push(b))
  };
  J.prototype.A = function () {
    if(this.N)
      for(; this.N.length;) this.N.shift()()
  };
  var xc = function (a) {
    a && "function" == typeof a.ea && a.ea()
  };
  var yc = Object.freeze || function (a) {
    return a
  };
  var zc = !C || 9 <= Number(Eb)
    , Ac = !C || 9 <= Number(Eb)
    , Bc = C && !G("9")
    , Cc = function () {
      if(!l.addEventListener || !Object.defineProperty) return !1;
      var a = !1
        , b = Object.defineProperty({}, "passive", {
          get: function () {
            a = !0
          }
        });
      try {
        l.addEventListener("test", m, b), l.removeEventListener("test", m, b)
      } catch (c) {}
      return a
    }();
  var Dc = function (a, b) {
    this.type = a;
    this.a = this.target = b;
    this.defaultPrevented = this.g = !1
  };
  Dc.prototype.h = function () {
    this.g = !0
  };
  Dc.prototype.j = function () {
    this.defaultPrevented = !0
  };
  var Ec = {
    Ja: "mousedown"
    , Ka: "mouseup"
    , Wa: "mousecancel"
    , Cc: "mousemove"
    , Ec: "mouseover"
    , Dc: "mouseout"
    , Ac: "mouseenter"
    , Bc: "mouseleave"
  };
  var K = function (a, b) {
    Dc.call(this, a ? a.type : "");
    this.relatedTarget = this.a = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.key = "";
    this.keyCode = 0;
    this.m = this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.pointerId = 0;
    this.pointerType = "";
    this.f = null;
    if(a) {
      var c = this.type = a.type
        , d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
      this.target = a.target || a.srcElement;
      this.a = b;
      if(b = a.relatedTarget) {
        if(D) {
          a: {
            try {
              mb(b.nodeName);
              var e = !0;
              break a
            } catch (f) {}
            e = !1
          }
          e || (b = null)
        }
      } else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
      this.relatedTarget = b;
      d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
      this.button = a.button;
      this.keyCode = a.keyCode || 0;
      this.key = a.key || "";
      this.ctrlKey = a.ctrlKey;
      this.altKey = a.altKey;
      this.shiftKey = a.shiftKey;
      this.metaKey = a.metaKey;
      this.m = F ? a.metaKey : a.ctrlKey;
      this.pointerId = a.pointerId || 0;
      this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Fc[a.pointerType] || "";
      this.f = a;
      a.defaultPrevented && this.j()
    }
  };
  u(K, Dc);
  var Gc = yc([1, 4, 2])
    , Fc = yc({
      2: "touch"
      , 3: "pen"
      , 4: "mouse"
    })
    , Hc = function (a) {
      return zc ? 0 == a.f.button : "click" == a.type ? !0 : !!(a.f.button & Gc[0])
    };
  K.prototype.h = function () {
    K.s.h.call(this);
    this.f.stopPropagation ? this.f.stopPropagation() : this.f.cancelBubble = !0
  };
  K.prototype.j = function () {
    K.s.j.call(this);
    var a = this.f;
    if(a.preventDefault) a.preventDefault();
    else if(a.returnValue = !1, Bc) try {
      if(a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
    } catch (b) {}
  };
  var Ic = "closure_listenable_" + (1E6 * Math.random() | 0)
    , Jc = function (a) {
      return !(!a || !a[Ic])
    }
    , Kc = 0;
  var Lc = function (a, b, c, d, e) {
      this.listener = a;
      this.proxy = null;
      this.src = b;
      this.type = c;
      this.capture = !!d;
      this.Ea = e;
      this.key = ++Kc;
      this.removed = this.wa = !1
    }
    , Mc = function (a) {
      a.removed = !0;
      a.listener = null;
      a.proxy = null;
      a.src = null;
      a.Ea = null
    };
  var Nc = function (a) {
    this.src = a;
    this.a = {};
    this.f = 0
  };
  Nc.prototype.add = function (a, b, c, d, e) {
    var f = a.toString();
    a = this.a[f];
    a || (a = this.a[f] = [], this.f++);
    var g = Oc(a, b, d, e); - 1 < g ? (b = a[g], c || (b.wa = !1)) : (b = new Lc(b, this.src, f, !!d, e), b.wa = c, a.push(b));
    return b
  };
  Nc.prototype.remove = function (a, b, c, d) {
    a = a.toString();
    if(!(a in this.a)) return !1;
    var e = this.a[a];
    b = Oc(e, b, c, d);
    return -1 < b ? (Mc(e[b]), v(null != e.length), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.a[a], this.f--), !0) : !1
  };
  var Pc = function (a, b) {
    var c = b.type;
    c in a.a && Ca(a.a[c], b) && (Mc(b), 0 == a.a[c].length && (delete a.a[c], a.f--))
  };
  Nc.prototype.removeAll = function (a) {
    a = a && a.toString();
    var b = 0
      , c;
    for(c in this.a)
      if(!a || c == a) {
        for(var d = this.a[c], e = 0; e < d.length; e++) ++b, Mc(d[e]);
        delete this.a[c];
        this.f--
      }
    return b
  };
  var Qc = function (a, b, c, d, e) {
      a = a.a[b.toString()];
      b = -1;
      a && (b = Oc(a, c, d, e));
      return -1 < b ? a[b] : null
    }
    , Oc = function (a, b, c, d) {
      for(var e = 0; e < a.length; ++e) {
        var f = a[e];
        if(!f.removed && f.listener == b && f.capture == !!c && f.Ea == d) return e
      }
      return -1
    };
  var Rc = "closure_lm_" + (1E6 * Math.random() | 0)
    , Sc = {}
    , Tc = 0
    , L = function (a, b, c, d, e) {
      if(d && d.once) return Uc(a, b, c, d, e);
      if(Array.isArray(b)) {
        for(var f = 0; f < b.length; f++) L(a, b[f], c, d, e);
        return null
      }
      c = Vc(c);
      return Jc(a) ? a.listen(b, c, p(d) ? !!d.capture : !!d, e) : Wc(a, b, c, !1, d, e)
    }
    , Wc = function (a, b, c, d, e, f) {
      if(!b) throw Error("Invalid event type");
      var g = p(e) ? !!e.capture : !!e
        , k = Xc(a);
      k || (a[Rc] = k = new Nc(a));
      c = k.add(b, c, d, g, f);
      if(c.proxy) return c;
      d = Yc();
      c.proxy = d;
      d.src = a;
      d.listener = c;
      if(a.addEventListener) Cc || (e = g), void 0 ===
        e && (e = !1), a.addEventListener(b.toString(), d, e);
      else if(a.attachEvent) a.attachEvent(Zc(b.toString()), d);
      else if(a.addListener && a.removeListener) v("change" === b, "MediaQueryList only has a change event"), a.addListener(d);
      else throw Error("addEventListener and attachEvent are unavailable.");
      Tc++;
      return c
    }
    , Yc = function () {
      var a = $c
        , b = Ac ? function (c) {
          return a.call(b.src, b.listener, c)
        } : function (c) {
          c = a.call(b.src, b.listener, c);
          if(!c) return c
        };
      return b
    }
    , Uc = function (a, b, c, d, e) {
      if(Array.isArray(b)) {
        for(var f = 0; f <
          b.length; f++) Uc(a, b[f], c, d, e);
        return null
      }
      c = Vc(c);
      return Jc(a) ? a.j.add(String(b), c, !0, p(d) ? !!d.capture : !!d, e) : Wc(a, b, c, !0, d, e)
    }
    , ad = function (a, b, c, d, e) {
      if(Array.isArray(b))
        for(var f = 0; f < b.length; f++) ad(a, b[f], c, d, e);
      else d = p(d) ? !!d.capture : !!d, c = Vc(c), Jc(a) ? a.j.remove(String(b), c, d, e) : a && (a = Xc(a)) && (b = Qc(a, b, c, d, e)) && bd(b)
    }
    , bd = function (a) {
      if("number" !== typeof a && a && !a.removed) {
        var b = a.src;
        if(Jc(b)) Pc(b.j, a);
        else {
          var c = a.type
            , d = a.proxy;
          b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ?
            b.detachEvent(Zc(c), d) : b.addListener && b.removeListener && b.removeListener(d);
          Tc--;
          (c = Xc(b)) ? (Pc(c, a), 0 == c.f && (c.src = null, b[Rc] = null)) : Mc(a)
        }
      }
    }
    , Zc = function (a) {
      return a in Sc ? Sc[a] : Sc[a] = "on" + a
    }
    , dd = function (a, b, c, d) {
      var e = !0;
      if(a = Xc(a))
        if(b = a.a[b.toString()])
          for(b = b.concat(), a = 0; a < b.length; a++) {
            var f = b[a];
            f && f.capture == c && !f.removed && (f = cd(f, d), e = e && !1 !== f)
          }
      return e
    }
    , cd = function (a, b) {
      var c = a.listener
        , d = a.Ea || a.src;
      a.wa && bd(a);
      return c.call(d, b)
    }
    , $c = function (a, b) {
      if(a.removed) return !0;
      if(!Ac) {
        if(!b) a: {
          b = ["window", "event"];
          for(var c = l, d = 0; d < b.length; d++)
            if(c = c[b[d]], null == c) {
              b = null;
              break a
            }
          b = c
        }
        d = b;
        b = new K(d, this);
        c = !0;
        if(!(0 > d.keyCode || void 0 != d.returnValue)) {
          a: {
            var e = !1;
            if(0 == d.keyCode) try {
              d.keyCode = -1;
              break a
            } catch (g) {
              e = !0
            }
            if(e || void 0 == d.returnValue) d.returnValue = !0
          }
          d = [];
          for(e = b.a; e; e = e.parentNode) d.push(e);a = a.type;
          for(e = d.length - 1; !b.g && 0 <= e; e--) {
            b.a = d[e];
            var f = dd(d[e], a, !0, b);
            c = c && f
          }
          for(e = 0; !b.g && e < d.length; e++) b.a = d[e]
          , f = dd(d[e], a, !1, b)
          , c = c && f
        }
        return c
      }
      return cd(a, new K(b, this))
    }
    , Xc = function (a) {
      a =
        a[Rc];
      return a instanceof Nc ? a : null
    }
    , ed = "__closure_events_fn_" + (1E9 * Math.random() >>> 0)
    , Vc = function (a) {
      v(a, "Listener can not be null.");
      if(ea(a)) return a;
      v(a.handleEvent, "An object listener must have handleEvent method.");
      a[ed] || (a[ed] = function (b) {
        return a.handleEvent(b)
      });
      return a[ed]
    };
  var fd = function (a) {
    J.call(this);
    this.f = a;
    this.a = {}
  };
  u(fd, J);
  var gd = [];
  fd.prototype.listen = function (a, b, c, d) {
    Array.isArray(b) || (b && (gd[0] = b.toString()), b = gd);
    for(var e = 0; e < b.length; e++) {
      var f = L(a, b[e], c || this.handleEvent, d || !1, this.f || this);
      if(!f) break;
      this.a[f.key] = f
    }
    return this
  };
  var hd = function (a, b, c, d, e, f) {
    if(Array.isArray(c))
      for(var g = 0; g < c.length; g++) hd(a, b, c[g], d, e, f);
    else d = d || a.handleEvent, e = p(e) ? !!e.capture : !!e, f = f || a.f || a, d = Vc(d), e = !!e, c = Jc(b) ? Qc(b.j, String(c), d, e, f) : b ? (b = Xc(b)) ? Qc(b, c, d, e, f) : null : null, c && (bd(c), delete a.a[c.key]);
    return a
  };
  fd.prototype.removeAll = function () {
    Fa(this.a, function (a, b) {
      this.a.hasOwnProperty(b) && bd(a)
    }, this);
    this.a = {}
  };
  fd.prototype.A = function () {
    fd.s.A.call(this);
    this.removeAll()
  };
  fd.prototype.handleEvent = function () {
    throw Error("EventHandler.handleEvent not implemented");
  };
  var M = function () {
    J.call(this);
    this.j = new Nc(this);
    this.kb = this;
    this.Ia = null
  };
  u(M, J);
  M.prototype[Ic] = !0;
  M.prototype.addEventListener = function (a, b, c, d) {
    L(this, a, b, c, d)
  };
  M.prototype.removeEventListener = function (a, b, c, d) {
    ad(this, a, b, c, d)
  };
  var N = function (a, b) {
    id(a);
    var c = a.Ia;
    if(c) {
      var d = [];
      for(var e = 1; c; c = c.Ia) d.push(c), v(1E3 > ++e, "infinite loop")
    }
    a = a.kb;
    c = b.type || b;
    "string" === typeof b ? b = new Dc(b, a) : b instanceof Dc ? b.target = b.target || a : (e = b, b = new Dc(c, a), Ia(b, e));
    e = !0;
    if(d)
      for(var f = d.length - 1; !b.g && 0 <= f; f--) {
        var g = b.a = d[f];
        e = jd(g, c, !0, b) && e
      }
    b.g || (g = b.a = a, e = jd(g, c, !0, b) && e, b.g || (e = jd(g, c, !1, b) && e));
    if(d)
      for(f = 0; !b.g && f < d.length; f++) g = b.a = d[f], e = jd(g, c, !1, b) && e;
    return e
  };
  M.prototype.A = function () {
    M.s.A.call(this);
    this.j && this.j.removeAll(void 0);
    this.Ia = null
  };
  M.prototype.listen = function (a, b, c, d) {
    id(this);
    return this.j.add(String(a), b, !1, c, d)
  };
  var jd = function (a, b, c, d) {
      b = a.j.a[String(b)];
      if(!b) return !0;
      b = b.concat();
      for(var e = !0, f = 0; f < b.length; ++f) {
        var g = b[f];
        if(g && !g.removed && g.capture == c) {
          var k = g.listener
            , q = g.Ea || g.src;
          g.wa && Pc(a.j, g);
          e = !1 !== k.call(q, d) && e
        }
      }
      return e && !d.defaultPrevented
    }
    , id = function (a) {
      v(a.j, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")
    };
  var kd = function (a, b) {
      a.style.display = b ? "" : "none"
    }
    , ld = D ? "MozUserSelect" : E || qb ? "WebkitUserSelect" : null;
  var nd = function (a) {
    M.call(this);
    this.h = a || cc();
    this.ba = md;
    this.na = null;
    this.J = !1;
    this.g = null;
    this.u = void 0;
    this.V = this.aa = this.w = null;
    this.Va = !1
  };
  u(nd, M);
  vc.G();
  var md = null
    , od = function (a, b) {
      switch (a) {
      case 1:
        return b ? "disable" : "enable";
      case 2:
        return b ? "highlight" : "unhighlight";
      case 4:
        return b ? "activate" : "deactivate";
      case 8:
        return b ? "select" : "unselect";
      case 16:
        return b ? "check" : "uncheck";
      case 32:
        return b ? "focus" : "blur";
      case 64:
        return b ? "open" : "close"
      }
      throw Error("Invalid component state");
    }
    , pd = function (a, b) {
      if(a.w && a.w.V) {
        var c = a.w.V
          , d = a.na;
        d in c && delete c[d];
        c = a.w.V;
        if(null !== c && b in c) throw Error('The object already contains the key "' + b + '"');
        c[b] = a
      }
      a.na =
        b
    };
  nd.prototype.o = function () {
    return this.g
  };
  var qd = function (a) {
      a = a.g;
      v(a, "Can not call getElementStrict before rendering/decorating.");
      return a
    }
    , rd = function (a) {
      a.u || (a.u = new fd(a));
      return v(a.u)
    };
  nd.prototype.ma = function () {
    this.g = ic(this.h.a, "DIV")
  };
  var sd = function (a, b) {
      if(a.J) throw Error("Component already rendered");
      a.g || a.ma();
      b ? b.insertBefore(a.g, null) : a.h.a.body.appendChild(a.g);
      a.w && !a.w.J || a.T()
    }
    , td = function (a, b) {
      if(a.J) throw Error("Component already rendered");
      if(b && a.Ya(b)) {
        a.Va = !0;
        var c = bc(b);
        a.h && a.h.a == c || (a.h = cc(b));
        a.Xa(b);
        a.T()
      } else throw Error("Invalid element to decorate");
    };
  h = nd.prototype;
  h.Ya = function () {
    return !0
  };
  h.Xa = function (a) {
    this.g = a
  };
  h.T = function () {
    this.J = !0;
    ud(this, function (a) {
      !a.J && a.o() && a.T()
    })
  };
  h.ya = function () {
    ud(this, function (a) {
      a.J && a.ya()
    });
    this.u && this.u.removeAll();
    this.J = !1
  };
  h.A = function () {
    this.J && this.ya();
    this.u && (this.u.ea(), delete this.u);
    ud(this, function (a) {
      a.ea()
    });
    !this.Va && this.g && kc(this.g);
    this.w = this.g = this.V = this.aa = null;
    nd.s.A.call(this)
  };
  var ud = function (a, b) {
    a.aa && w(a.aa, b, void 0)
  };
  var vd = function (a) {
      return "string" == typeof a.className ? a.className : a.getAttribute && a.getAttribute("class") || ""
    }
    , wd = function (a) {
      return a.classList ? a.classList : vd(a)
        .match(/\S+/g) || []
    }
    , xd = function (a, b) {
      "string" == typeof a.className ? a.className = b : a.setAttribute && a.setAttribute("class", b)
    }
    , yd = function (a, b) {
      return a.classList ? a.classList.contains(b) : y(wd(a), b)
    }
    , zd = function (a, b) {
      if(a.classList) a.classList.add(b);
      else if(!yd(a, b)) {
        var c = vd(a);
        xd(a, c + (0 < c.length ? " " + b : b))
      }
    }
    , Ad = function (a, b) {
      if(a.classList) w(b
        , function (e) {
          zd(a, e)
        });
      else {
        var c = {};
        w(wd(a), function (e) {
          c[e] = !0
        });
        w(b, function (e) {
          c[e] = !0
        });
        b = "";
        for(var d in c) b += 0 < b.length ? " " + d : d;
        xd(a, b)
      }
    }
    , Bd = function (a, b) {
      a.classList ? a.classList.remove(b) : yd(a, b) && xd(a, xa(wd(a), function (c) {
          return c != b
        })
        .join(" "))
    }
    , Cd = function (a, b) {
      a.classList ? w(b, function (c) {
        Bd(a, c)
      }) : xd(a, xa(wd(a), function (c) {
          return !y(b, c)
        })
        .join(" "))
    };
  var O = function () {}
    , Dd;
  n(O);
  var Ed = {
    button: "pressed"
    , checkbox: "checked"
    , menuitem: "selected"
    , menuitemcheckbox: "checked"
    , menuitemradio: "checked"
    , radio: "checked"
    , tab: "selected"
    , treeitem: "selected"
  };
  O.prototype.Aa = function () {};
  O.prototype.ga = function (a) {
    return a.h.Ma("DIV", Fd(this, a)
      .join(" "), a.getContent())
  };
  var Hd = function (a, b, c) {
    if(a = a.o ? a.o() : a) {
      var d = [b];
      C && !G("7") && (d = Gd(wd(a), b), d.push(b));
      (c ? Ad : Cd)(a, d)
    }
  };
  O.prototype.Za = function () {
    return !0
  };
  O.prototype.K = function (a, b) {
    b.id && pd(a, b.id);
    b && b.firstChild ? Id(a, b.firstChild.nextSibling ? Ea(b.childNodes) : b.firstChild) : a.qa = null;
    var c = 0
      , d = this.v()
      , e = this.v()
      , f = !1
      , g = !1
      , k = !1
      , q = Ea(wd(b));
    w(q, function (x) {
      f || x != d ? g || x != e ? c |= Jd(this, x) : g = !0 : (f = !0, e == d && (g = !0));
      1 == Jd(this, x) && (ta(b), qc(b) && rc(b) && pc(b, !1))
    }, this);
    a.B = c;
    f || (q.push(d), e == d && (g = !0));
    g || q.push(e);
    (a = a.H) && q.push.apply(q, a);
    if(C && !G("7")) {
      var B = Gd(q);
      0 < B.length && (q.push.apply(q, B), k = !0)
    }
    f && g && !a && !k || xd(b, q.join(" "));
    return b
  };
  O.prototype.hb = function (a) {
    if(null == a.ba) {
      var b = a.J ? a.g : a.h.a.body;
      a: {
        var c = bc(b);
        if(c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(b, null))) {
          c = c.direction || c.getPropertyValue("direction") || "";
          break a
        }
        c = ""
      }
      a.ba = "rtl" == (c || (b.currentStyle ? b.currentStyle.direction : null) || b.style && b.style.direction)
    }
    a.ba && this.ab(a.o(), !0);
    a.a() && this.Ha(a, a.isVisible())
  };
  var Kd = function (a, b) {
    if(a = a.Aa()) {
      v(b, "The element passed as a first parameter cannot be null.");
      var c = b.getAttribute("role") || null;
      a != c && (a ? (v(Ga(Xb, a), "No such ARIA role " + a), b.setAttribute("role", a)) : b.removeAttribute("role"))
    }
  };
  h = O.prototype;
  h.Pa = function (a, b) {
    var c = !b;
    b = C || pb ? a.getElementsByTagName("*") : null;
    if(ld) {
      if(c = c ? "none" : "", a.style && (a.style[ld] = c), b) {
        a = 0;
        for(var d; d = b[a]; a++) d.style && (d.style[ld] = c)
      }
    } else if(C || pb)
      if(c = c ? "on" : "", a.setAttribute("unselectable", c), b)
        for(a = 0; d = b[a]; a++) d.setAttribute("unselectable", c)
  };
  h.ab = function (a, b) {
    Hd(a, this.v() + "-rtl", b)
  };
  h.$a = function (a) {
    var b;
    return a.D & 32 && (b = a.o()) ? qc(b) && rc(b) : !1
  };
  h.Ha = function (a, b) {
    var c;
    if(a.D & 32 && (c = a.o())) {
      if(!b && a.B & 32) {
        try {
          c.blur()
        } catch (d) {}
        a.B & 32 && a.bb(null)
      }(qc(c) && rc(c)) != b && pc(c, b)
    }
  };
  h.Qa = function (a, b, c) {
    var d = a.o();
    if(d) {
      var e = Ld(this, b);
      e && Hd(a, e, c);
      this.R(d, b, c)
    }
  };
  h.R = function (a, b, c) {
    Dd || (Dd = {
      1: "disabled"
      , 8: "selected"
      , 16: "checked"
      , 64: "expanded"
    });
    v(a, "The element passed as a first parameter cannot be null.");
    b = Dd[b];
    var d = a.getAttribute("role") || null;
    d && (d = Ed[d] || b, b = "checked" == b || "selected" == b ? d : b);
    b && uc(a, b, c)
  };
  h.v = function () {
    return "goog-control"
  };
  var Fd = function (a, b) {
      var c = a.v()
        , d = [c]
        , e = a.v();
      e != c && d.push(e);
      c = b.B;
      for(e = []; c;) {
        var f = c & -c;
        e.push(Ld(a, f));
        c &= ~f
      }
      d.push.apply(d, e);
      (a = b.H) && d.push.apply(d, a);
      C && !G("7") && d.push.apply(d, Gd(d));
      return d
    }
    , Gd = function (a, b) {
      var c = [];
      b && (a = Da(a, [b]));
      w([], function (d) {
        !za(d, t(y, a)) || b && !y(d, b) || c.push(d.join("_"))
      });
      return c
    }
    , Ld = function (a, b) {
      a.a || Md(a);
      return a.a[b]
    }
    , Jd = function (a, b) {
      if(!a.C) {
        a.a || Md(a);
        var c = a.a
          , d = {}
          , e;
        for(e in c) d[c[e]] = e;
        a.C = d
      }
      a = parseInt(a.C[b], 10);
      return isNaN(a) ? 0 : a
    }
    , Md = function (a) {
      var b =
        a.v();
      var c = -1 != b.replace(/\xa0|\s/g, " ")
        .indexOf(" ");
      v(!c, "ControlRenderer has an invalid css class: '" + b + "'");
      a.a = {
        1: b + "-disabled"
        , 2: b + "-hover"
        , 4: b + "-active"
        , 8: b + "-selected"
        , 16: b + "-checked"
        , 32: b + "-focused"
        , 64: b + "-open"
      }
    };
  var Nd = function () {};
  u(Nd, O);
  n(Nd);
  h = Nd.prototype;
  h.Aa = function () {
    return "button"
  };
  h.R = function (a, b, c) {
    switch (b) {
    case 8:
    case 16:
      v(a, "The button DOM element cannot be null.");
      uc(a, "pressed", c);
      break;
    default:
    case 64:
    case 1:
      Nd.s.R.call(this, a, b, c)
    }
  };
  h.ga = function (a) {
    var b = Nd.s.ga.call(this, a)
      , c = a.O;
    b && (c ? b.title = c : b.removeAttribute("title"));
    (c = a.X) && this.Oa(b, c);
    a.D & 16 && this.R(b, 16, a.ha());
    return b
  };
  h.K = function (a, b) {
    b = Nd.s.K.call(this, a, b);
    var c = this.Na(b);
    a.X = c;
    a.O = b.title;
    a.D & 16 && this.R(b, 16, a.ha());
    return b
  };
  h.Na = m;
  h.Oa = m;
  h.v = function () {
    return "goog-button"
  };
  var Od = function (a, b) {
      if(!a) throw Error("Invalid class name " + a);
      if(!ea(b)) throw Error("Invalid decorator function " + b);
    }
    , Pd = {};
  var Sd = function (a, b, c, d, e, f) {
      if(E && !G("525")) return !0;
      if(F && e) return Qd(a);
      if(e && !d) return !1;
      if(!D) {
        "number" === typeof b && (b = Rd(b));
        var g = 17 == b || 18 == b || F && 91 == b;
        if((!c || F) && g || F && 16 == b && (d || f)) return !1
      }
      if((E || qb) && d && c) switch (a) {
      case 220:
      case 219:
      case 221:
      case 192:
      case 186:
      case 189:
      case 187:
      case 188:
      case 190:
      case 191:
      case 192:
      case 222:
        return !1
      }
      if(C && d && b == a) return !1;
      switch (a) {
      case 13:
        return D ? f || e ? !1 : !(c && d) : !0;
      case 27:
        return !(E || qb || D)
      }
      return D && (d || e || f) ? !1 : Qd(a)
    }
    , Qd = function (a) {
      if(48 <= a && 57 >= a ||
        96 <= a && 106 >= a || 65 <= a && 90 >= a || (E || qb) && 0 == a) return !0;
      switch (a) {
      case 32:
      case 43:
      case 63:
      case 64:
      case 107:
      case 109:
      case 110:
      case 111:
      case 186:
      case 59:
      case 189:
      case 187:
      case 61:
      case 188:
      case 190:
      case 191:
      case 192:
      case 222:
      case 219:
      case 220:
      case 221:
      case 163:
      case 58:
        return !0;
      case 173:
        return D;
      default:
        return !1
      }
    }
    , Rd = function (a) {
      if(D) a = Td(a);
      else if(F && E) switch (a) {
      case 93:
        a = 91
      }
      return a
    }
    , Td = function (a) {
      switch (a) {
      case 61:
        return 187;
      case 59:
        return 186;
      case 173:
        return 189;
      case 224:
        return 91;
      case 0:
        return 224;
      default:
        return a
      }
    };
  var Ud = function (a, b) {
    M.call(this);
    a && this.attach(a, b)
  };
  u(Ud, M);
  h = Ud.prototype;
  h.fa = null;
  h.Fa = null;
  h.Ta = null;
  h.Ga = null;
  h.F = -1;
  h.L = -1;
  h.La = !1;
  var Vd = {
      3: 13
      , 12: 144
      , 63232: 38
      , 63233: 40
      , 63234: 37
      , 63235: 39
      , 63236: 112
      , 63237: 113
      , 63238: 114
      , 63239: 115
      , 63240: 116
      , 63241: 117
      , 63242: 118
      , 63243: 119
      , 63244: 120
      , 63245: 121
      , 63246: 122
      , 63247: 123
      , 63248: 44
      , 63272: 46
      , 63273: 36
      , 63275: 35
      , 63276: 33
      , 63277: 34
      , 63289: 144
      , 63302: 45
    }
    , Wd = {
      Up: 38
      , Down: 40
      , Left: 37
      , Right: 39
      , Enter: 13
      , F1: 112
      , F2: 113
      , F3: 114
      , F4: 115
      , F5: 116
      , F6: 117
      , F7: 118
      , F8: 119
      , F9: 120
      , F10: 121
      , F11: 122
      , F12: 123
      , "U+007F": 46
      , Home: 36
      , End: 35
      , PageUp: 33
      , PageDown: 34
      , Insert: 45
    }
    , Xd = !E || G("525")
    , Yd = F && D;
  h = Ud.prototype;
  h.qb = function (a) {
    if(E || qb)
      if(17 == this.F && !a.ctrlKey || 18 == this.F && !a.altKey || F && 91 == this.F && !a.metaKey) this.L = this.F = -1; - 1 == this.F && (a.ctrlKey && 17 != a.keyCode ? this.F = 17 : a.altKey && 18 != a.keyCode ? this.F = 18 : a.metaKey && 91 != a.keyCode && (this.F = 91));
    Xd && !Sd(a.keyCode, this.F, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey) ? this.handleEvent(a) : (this.L = Rd(a.keyCode), Yd && (this.La = a.altKey))
  };
  h.sb = function (a) {
    this.L = this.F = -1;
    this.La = a.altKey
  };
  h.handleEvent = function (a) {
    var b = a.f
      , c = b.altKey;
    if(C && "keypress" == a.type) {
      var d = this.L;
      var e = 13 != d && 27 != d ? b.keyCode : 0
    } else(E || qb) && "keypress" == a.type ? (d = this.L, e = 0 <= b.charCode && 63232 > b.charCode && Qd(d) ? b.charCode : 0) : pb && !E ? (d = this.L, e = Qd(d) ? b.keyCode : 0) : ("keypress" == a.type ? (Yd && (c = this.La), b.keyCode == b.charCode ? 32 > b.keyCode ? (d = b.keyCode, e = 0) : (d = this.L, e = b.charCode) : (d = b.keyCode || this.L, e = b.charCode || 0)) : (d = b.keyCode || this.L, e = b.charCode || 0), F && 63 == e && 224 == d && (d = 191));
    var f = d = Rd(d);
    d ? 63232 <= d && d in Vd ?
      f = Vd[d] : 25 == d && a.shiftKey && (f = 9) : b.keyIdentifier && b.keyIdentifier in Wd && (f = Wd[b.keyIdentifier]);
    D && Xd && "keypress" == a.type && !Sd(f, this.F, a.shiftKey, a.ctrlKey, c, a.metaKey) || (a = f == this.F, this.F = f, b = new Zd(f, e, a, b), b.altKey = c, N(this, b))
  };
  h.o = function () {
    return this.fa
  };
  h.attach = function (a, b) {
    this.Ga && this.detach();
    this.fa = a;
    this.Fa = L(this.fa, "keypress", this, b);
    this.Ta = L(this.fa, "keydown", this.qb, b, this);
    this.Ga = L(this.fa, "keyup", this.sb, b, this)
  };
  h.detach = function () {
    this.Fa && (bd(this.Fa), bd(this.Ta), bd(this.Ga), this.Ga = this.Ta = this.Fa = null);
    this.fa = null;
    this.L = this.F = -1
  };
  h.A = function () {
    Ud.s.A.call(this);
    this.detach()
  };
  var Zd = function (a, b, c, d) {
    K.call(this, d);
    this.type = "key";
    this.keyCode = a;
    this.repeat = c
  };
  u(Zd, K);
  var P = function (a, b, c) {
    nd.call(this, c);
    if(!b) {
      for(b = this.constructor; b;) {
        var d = ia(b);
        if(d = Pd[d]) break;
        b = (b = Object.getPrototypeOf(b.prototype)) && b.constructor
      }
      b = d ? ea(d.G) ? d.G() : new d : null
    }
    this.f = b;
    this.qa = void 0 !== a ? a : null
  };
  u(P, nd);
  h = P.prototype;
  h.qa = null;
  h.B = 0;
  h.D = 39;
  h.pa = 255;
  h.ib = !0;
  h.H = null;
  h.Da = !0;
  var ae = function (a) {
      a.J && 0 != a.Da && $d(a, !1);
      a.Da = !1
    }
    , be = function (a, b) {
      b && (a.H ? y(a.H, b) || a.H.push(b) : a.H = [b], Hd(a, b, !0))
    };
  P.prototype.ma = function () {
    var a = this.f.ga(this);
    this.g = a;
    Kd(this.f, a);
    this.f.Pa(a, !1);
    this.isVisible() || (kd(a, !1), a && uc(a, "hidden", !0))
  };
  P.prototype.Ya = function (a) {
    return this.f.Za(a)
  };
  P.prototype.Xa = function (a) {
    this.g = a = this.f.K(this, a);
    Kd(this.f, a);
    this.f.Pa(a, !1);
    this.ib = "none" != a.style.display
  };
  P.prototype.T = function () {
    P.s.T.call(this);
    var a = this.f
      , b = qd(this);
    v(this);
    v(b);
    this.isVisible() || uc(b, "hidden", !this.isVisible());
    this.a() || a.R(b, 1, !this.a());
    this.D & 8 && a.R(b, 8, this.isSelected());
    this.D & 16 && a.R(b, 16, this.ha());
    this.D & 64 && a.R(b, 64, !!(this.B & 64));
    this.f.hb(this);
    this.D & -2 && (this.Da && $d(this, !0), this.D & 32 && (a = this.o())) && (b = this.C || (this.C = new Ud), b.attach(a), rd(this)
      .listen(b, "key", this.rb)
      .listen(a, "focus", this.pb)
      .listen(a, "blur", this.bb))
  };
  var $d = function (a, b) {
    var c = rd(a)
      , d = a.o();
    b ? (c.listen(d, Ec.Ja, a.ra)
      .listen(d, [Ec.Ka, Ec.Wa], a.sa)
      .listen(d, "mouseover", a.gb)
      .listen(d, "mouseout", a.fb), a.Ba != m && c.listen(d, "contextmenu", a.Ba), C && (G(9) || c.listen(d, "dblclick", a.eb), a.P || (a.P = new ce(a), wc(a, t(xc, a.P))))) : (hd(hd(hd(hd(c, d, Ec.Ja, a.ra), d, [Ec.Ka, Ec.Wa], a.sa), d, "mouseover", a.gb), d, "mouseout", a.fb), a.Ba != m && hd(c, d, "contextmenu", a.Ba), C && (G(9) || hd(c, d, "dblclick", a.eb), xc(a.P), a.P = null))
  };
  P.prototype.ya = function () {
    P.s.ya.call(this);
    this.C && this.C.detach();
    this.isVisible() && this.a() && this.f.Ha(this, !1)
  };
  P.prototype.A = function () {
    P.s.A.call(this);
    this.C && (this.C.ea(), delete this.C);
    delete this.f;
    this.P = this.H = this.qa = null
  };
  P.prototype.getContent = function () {
    return this.qa
  };
  var Id = function (a, b) {
      a.qa = b
    }
    , de = function (a) {
      a = a.getContent();
      if(!a) return "";
      if("string" !== typeof a)
        if(Array.isArray(a)) a = ya(a, tc)
          .join("");
        else {
          if($b && null !== a && "innerText" in a) a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
          else {
            var b = [];
            sc(a, b, !0);
            a = b.join("")
          }
          a = a.replace(/ \xAD /g, " ")
            .replace(/\xAD/g, "");
          a = a.replace(/\u200B/g, "");
          $b || (a = a.replace(/ +/g, " "));
          " " != a && (a = a.replace(/^\s*/, ""))
        }
      return a.replace(/[\t\r\n ]+/g, " ")
        .replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
    };
  P.prototype.isVisible = function () {
    return this.ib
  };
  P.prototype.a = function () {
    return !(this.B & 1)
  };
  P.prototype.setEnabled = function (a) {
    var b = this.w;
    b && "function" == typeof b.a && !b.a() || !ee(this, 1, !a) || (a || (fe(this, !1), ge(this, !1)), this.isVisible() && this.f.Ha(this, a), he(this, 1, !a, !0))
  };
  var ge = function (a, b) {
      ee(a, 2, b) && he(a, 2, b)
    }
    , fe = function (a, b) {
      ee(a, 4, b) && he(a, 4, b)
    };
  P.prototype.isSelected = function () {
    return !!(this.B & 8)
  };
  P.prototype.ha = function () {
    return !!(this.B & 16)
  };
  P.prototype.Ua = function (a) {
    ee(this, 16, a) && he(this, 16, a)
  };
  P.prototype.W = function (a) {
    ee(this, 32, a) && he(this, 32, a)
  };
  var he = function (a, b, c, d) {
      d || 1 != b ? a.D & b && c != !!(a.B & b) && (a.f.Qa(a, b, c), a.B = c ? a.B | b : a.B & ~b) : a.setEnabled(!c)
    }
    , ie = function (a) {
      if(a.J && a.B & 32) throw Error("Component already rendered");
      a.B & 32 && he(a, 32, !1);
      a.D &= -33
    }
    , Q = function (a, b) {
      return !!(a.pa & b) && !!(a.D & b)
    }
    , ee = function (a, b, c) {
      return !!(a.D & b) && !!(a.B & b) != c && (!(0 & b) || N(a, od(b, c))) && !a.M
    };
  h = P.prototype;
  h.gb = function (a) {
    (!a.relatedTarget || !lc(this.o(), a.relatedTarget)) && N(this, "enter") && this.a() && Q(this, 2) && ge(this, !0)
  };
  h.fb = function (a) {
    a.relatedTarget && lc(this.o(), a.relatedTarget) || !N(this, "leave") || (Q(this, 4) && fe(this, !1), Q(this, 2) && ge(this, !1))
  };
  h.Ba = m;
  h.ra = function (a) {
    this.a() && (Q(this, 2) && ge(this, !0), !Hc(a) || E && F && a.ctrlKey || (Q(this, 4) && fe(this, !0), this.f && this.f.$a(this) && this.o()
      .focus()));
    !Hc(a) || E && F && a.ctrlKey || a.j()
  };
  h.sa = function (a) {
    this.a() && (Q(this, 2) && ge(this, !0), this.B & 4 && this.ia(a) && Q(this, 4) && fe(this, !1))
  };
  h.eb = function (a) {
    this.a() && this.ia(a)
  };
  h.ia = function (a) {
    Q(this, 16) && this.Ua(!this.ha());
    Q(this, 8) && ee(this, 8, !0) && he(this, 8, !0);
    if(Q(this, 64)) {
      var b = !(this.B & 64);
      ee(this, 64, b) && he(this, 64, b)
    }
    b = new Dc("action", this);
    a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.m = a.m);
    return N(this, b)
  };
  h.pb = function () {
    Q(this, 32) && this.W(!0)
  };
  h.bb = function () {
    Q(this, 4) && fe(this, !1);
    Q(this, 32) && this.W(!1)
  };
  h.rb = function (a) {
    return this.isVisible() && this.a() && this.Ca(a) ? (a.j(), a.h(), !0) : !1
  };
  h.Ca = function (a) {
    return 13 == a.keyCode && this.ia(a)
  };
  if(!ea(P)) throw Error("Invalid component class " + P);
  if(!ea(O)) throw Error("Invalid renderer class " + O);
  var je = ia(P);
  Pd[je] = O;
  Od("goog-control", function () {
    return new P(null)
  });
  var ce = function (a) {
    J.call(this);
    this.f = a;
    this.a = !1;
    this.g = new fd(this);
    wc(this, t(xc, this.g));
    a = qd(this.f);
    this.g.listen(a, Ec.Ja, this.h)
      .listen(a, Ec.Ka, this.m)
      .listen(a, "click", this.j)
  };
  u(ce, J);
  var ke = !C || 9 <= Number(Eb);
  ce.prototype.h = function () {
    this.a = !1
  };
  ce.prototype.m = function () {
    this.a = !0
  };
  var le = function (a, b) {
    if(!ke) return a.button = 0, a.type = b, a;
    var c = document.createEvent("MouseEvents");
    c.initMouseEvent(b, a.bubbles, a.cancelable, a.view || null, a.detail, a.screenX, a.screenY, a.clientX, a.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, a.relatedTarget || null);
    return c
  };
  ce.prototype.j = function (a) {
    if(this.a) this.a = !1;
    else {
      var b = a.f
        , c = b.button
        , d = b.type
        , e = le(b, "mousedown");
      this.f.ra(new K(e, a.a));
      e = le(b, "mouseup");
      this.f.sa(new K(e, a.a));
      ke || (b.button = c, b.type = d)
    }
  };
  ce.prototype.A = function () {
    this.f = null;
    ce.s.A.call(this)
  };
  var me = function () {};
  u(me, Nd);
  n(me);
  h = me.prototype;
  h.Aa = function () {};
  h.ga = function (a) {
    ae(a);
    a.pa &= -256;
    ie(a);
    return a.h.Ma("BUTTON", {
      "class": Fd(this, a)
        .join(" ")
      , disabled: !a.a()
      , title: a.O || ""
      , value: a.X || ""
    }, de(a) || "")
  };
  h.Za = function (a) {
    return "BUTTON" == a.tagName || "INPUT" == a.tagName && ("button" == a.type || "submit" == a.type || "reset" == a.type)
  };
  h.K = function (a, b) {
    ae(a);
    a.pa &= -256;
    ie(a);
    if(b.disabled) {
      var c = sa(Ld(this, 1));
      zd(b, c)
    }
    return me.s.K.call(this, a, b)
  };
  h.hb = function (a) {
    rd(a)
      .listen(a.o(), "click", a.ia)
  };
  h.Pa = m;
  h.ab = m;
  h.$a = function (a) {
    return a.a()
  };
  h.Ha = m;
  h.Qa = function (a, b, c) {
    me.s.Qa.call(this, a, b, c);
    (a = a.o()) && 1 == b && (a.disabled = c)
  };
  h.Na = function (a) {
    return a.value
  };
  h.Oa = function (a, b) {
    a && (a.value = b)
  };
  h.R = m;
  var ne = function (a, b, c) {
    P.call(this, a, b || me.G(), c)
  };
  u(ne, P);
  ne.prototype.A = function () {
    ne.s.A.call(this);
    delete this.X;
    delete this.O
  };
  ne.prototype.T = function () {
    ne.s.T.call(this);
    if(this.D & 32) {
      var a = this.o();
      a && rd(this)
        .listen(a, "keyup", this.Ca)
    }
  };
  ne.prototype.Ca = function (a) {
    return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.ia(a) : 32 == a.keyCode
  };
  Od("goog-button", function () {
    return new ne(null)
  });
  var R = function (a, b) {
    this.f = {};
    this.a = [];
    this.g = 0;
    var c = arguments.length;
    if(1 < c) {
      if(c % 2) throw Error("Uneven number of arguments");
      for(var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
    } else if(a)
      if(a instanceof R)
        for(c = a.U(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
      else
        for(d in a) this.set(d, a[d])
  };
  R.prototype.I = function () {
    oe(this);
    for(var a = [], b = 0; b < this.a.length; b++) a.push(this.f[this.a[b]]);
    return a
  };
  R.prototype.U = function () {
    oe(this);
    return this.a.concat()
  };
  R.prototype.clear = function () {
    this.f = {};
    this.g = this.a.length = 0
  };
  R.prototype.remove = function (a) {
    return pe(this.f, a) ? (delete this.f[a], this.g--, this.a.length > 2 * this.g && oe(this), !0) : !1
  };
  var oe = function (a) {
    if(a.g != a.a.length) {
      for(var b = 0, c = 0; b < a.a.length;) {
        var d = a.a[b];
        pe(a.f, d) && (a.a[c++] = d);
        b++
      }
      a.a.length = c
    }
    if(a.g != a.a.length) {
      var e = {};
      for(c = b = 0; b < a.a.length;) d = a.a[b], pe(e, d) || (a.a[c++] = d, e[d] = 1), b++;
      a.a.length = c
    }
  };
  R.prototype.get = function (a, b) {
    return pe(this.f, a) ? this.f[a] : b
  };
  R.prototype.set = function (a, b) {
    pe(this.f, a) || (this.g++, this.a.push(a));
    this.f[a] = b
  };
  R.prototype.forEach = function (a, b) {
    for(var c = this.U(), d = 0; d < c.length; d++) {
      var e = c[d]
        , f = this.get(e);
      a.call(b, f, e, this)
    }
  };
  var pe = function (a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
  };
  var qe = function (a) {
      if(a.I && "function" == typeof a.I) return a.I();
      if("string" === typeof a) return a.split("");
      if(da(a)) {
        for(var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b
      }
      b = [];
      c = 0;
      for(d in a) b[c++] = a[d];
      return b
    }
    , re = function (a, b, c) {
      if(a.forEach && "function" == typeof a.forEach) a.forEach(b, c);
      else if(da(a) || "string" === typeof a) w(a, b, c);
      else {
        if(a.U && "function" == typeof a.U) var d = a.U();
        else if(a.I && "function" == typeof a.I) d = void 0;
        else if(da(a) || "string" === typeof a) {
          d = [];
          for(var e = a.length, f = 0; f < e; f++) d.push(f)
        } else
          for(f in d = [], e = 0, a) d[e++] = f;
        e = qe(a);
        f = e.length;
        for(var g = 0; g < f; g++) b.call(c, e[g], d && d[g], a)
      }
    };
  var se = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/
    , te = function (a, b) {
      if(a) {
        a = a.split("&");
        for(var c = 0; c < a.length; c++) {
          var d = a[c].indexOf("=")
            , e = null;
          if(0 <= d) {
            var f = a[c].substring(0, d);
            e = a[c].substring(d + 1)
          } else f = a[c];
          b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "")
        }
      }
    };
  var ue = function (a) {
      this.f = this.a = null;
      this.g = a || null
    }
    , ve = function (a) {
      a.a || (a.a = new R, a.f = 0, a.g && te(a.g, function (b, c) {
        a.add(decodeURIComponent(b.replace(/\+/g, " ")), c)
      }))
    };
  ue.prototype.add = function (a, b) {
    ve(this);
    this.g = null;
    a = String(a);
    var c = this.a.get(a);
    c || this.a.set(a, c = []);
    c.push(b);
    this.f = ra(this.f) + 1;
    return this
  };
  ue.prototype.remove = function (a) {
    ve(this);
    a = String(a);
    return pe(this.a.f, a) ? (this.g = null, this.f = ra(this.f) - this.a.get(a)
      .length, this.a.remove(a)) : !1
  };
  ue.prototype.clear = function () {
    this.a = this.g = null;
    this.f = 0
  };
  var we = function (a, b) {
    ve(a);
    b = String(b);
    return pe(a.a.f, b)
  };
  h = ue.prototype;
  h.forEach = function (a, b) {
    ve(this);
    this.a.forEach(function (c, d) {
      w(c, function (e) {
        a.call(b, e, d, this)
      }, this)
    }, this)
  };
  h.U = function () {
    ve(this);
    for(var a = this.a.I(), b = this.a.U(), c = [], d = 0; d < b.length; d++)
      for(var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
    return c
  };
  h.I = function (a) {
    ve(this);
    var b = [];
    if("string" === typeof a) we(this, a) && (b = Da(b, this.a.get(String(a))));
    else {
      a = this.a.I();
      for(var c = 0; c < a.length; c++) b = Da(b, a[c])
    }
    return b
  };
  h.set = function (a, b) {
    ve(this);
    this.g = null;
    a = String(a);
    we(this, a) && (this.f = ra(this.f) - this.a.get(a)
      .length);
    this.a.set(a, [b]);
    this.f = ra(this.f) + 1;
    return this
  };
  h.get = function (a, b) {
    if(!a) return b;
    a = this.I(a);
    return 0 < a.length ? String(a[0]) : b
  };
  h.toString = function () {
    if(this.g) return this.g;
    if(!this.a) return "";
    for(var a = [], b = this.a.U(), c = 0; c < b.length; c++) {
      var d = b[c]
        , e = encodeURIComponent(String(d));
      d = this.I(d);
      for(var f = 0; f < d.length; f++) {
        var g = e;
        "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
        a.push(g)
      }
    }
    return this.g = a.join("&")
  };
  h.nb = function (a) {
    for(var b = 0; b < arguments.length; b++) re(arguments[b], function (c, d) {
      this.add(d, c)
    }, this)
  };
  var xe = {
      Ad: !0
    }
    , ye = {
      zd: !0
    }
    , S = function () {
      throw Error("Do not instantiate directly");
    };
  S.prototype.xa = null;
  S.prototype.getContent = function () {
    return this.content
  };
  S.prototype.toString = function () {
    return this.content
  };
  var ze = function () {
    S.call(this)
  };
  u(ze, S);
  ze.prototype.$ = xe;
  var Ae = function () {
    S.call(this)
  };
  u(Ae, S);
  Ae.prototype.$ = ye;
  Ae.prototype.xa = 1;
  var Be = function (a, b, c) {
    (b = null != a && a.$ === b) && v(a.constructor === c);
    return b
  };
  var Ce = function (a) {
      if(null != a) switch (a.xa) {
      case 1:
        return 1;
      case -1:
        return -1;
      case 0:
        return 0
      }
      return null
    }
    , Ee = function (a) {
      return Be(a, xe, ze) ? a : a instanceof cb ? De(db(a)
        .toString(), a.f) : De(kb(String(String(a))), Ce(a))
    }
    , De = function (a) {
      function b(c) {
        this.content = c
      }
      b.prototype = a.prototype;
      return function (c, d) {
        c = new b(String(c));
        void 0 !== d && (c.xa = d);
        return c
      }
    }(ze)
    , Fe = function (a, b) {
      return a && b && a.ub && b.ub ? a.$ !== b.$ ? !1 : a.toString() === b.toString() : a instanceof S && b instanceof S ? a.$ != b.$ ? !1 : a.toString() == b.toString() :
        a == b
    }
    , Ke = function (a) {
      return Be(a, xe, ze) ? String(String(a.getContent())
          .replace(Ge, "")
          .replace(He, "&lt;"))
        .replace(Ie, Je) : kb(String(a))
    }
    , Le = {
      "\x00": "&#0;"
      , "\t": "&#9;"
      , "\n": "&#10;"
      , "\x0B": "&#11;"
      , "\f": "&#12;"
      , "\r": "&#13;"
      , " ": "&#32;"
      , '"': "&quot;"
      , "&": "&amp;"
      , "'": "&#39;"
      , "-": "&#45;"
      , "/": "&#47;"
      , "<": "&lt;"
      , "=": "&#61;"
      , ">": "&gt;"
      , "`": "&#96;"
      , "??": "&#133;"
      , "??": "&#160;"
      , "???": "&#8232;"
      , "???": "&#8233;"
    }
    , Je = function (a) {
      return Le[a]
    }
    , Ie = /[\x00\x22\x27\x3c\x3e]/g
    , Me = /^(?!on|src|(?:action|archive|background|cite|classid|codebase|content|data|dsync|href|http-equiv|longdesc|style|usemap)\s*$)(?:[a-z0-9_$:-]*)$/i
    , Ge = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g
    , He = /</g;
  var Ne = function (a) {
    a = a || {};
    var b = a.attributes
      , c = a.content
      , d = a.disabled
      , e = a.id
      , f = a.Bd
      , g = a.title
      , k = a.zb
      , q = a.value
      , B = De;
    e = '<div role="button"' + (e ? ' id="' + Ke(e) + '"' : "") + ' class="';
    var x = a || {};
    a = x.yd;
    var ib = x.disabled
      , Gg = x.checked
      , Hg = x.width
      , aa = "goog-inline-block jfk-button ";
    x = x.style;
    switch (p(x) ? x.toString() : x) {
    case 0:
      aa += "jfk-button-standard";
      break;
    case 2:
      aa += "jfk-button-action";
      break;
    case 3:
      aa += "jfk-button-primary";
      break;
    case 1:
      aa += "jfk-button-default";
      break;
    case 4:
      aa += "jfk-button-flat";
      break;
    case 5:
      aa +=
        "jfk-button-mini";
      break;
    case 6:
      aa += "jfk-button-contrast";
      break;
    default:
      aa += "jfk-button-standard"
    }
    aa += (Fe(Hg, 1) ? " jfk-button-narrow" : "") + (Gg ? " jfk-button-checked" : "") + (a ? " " + a : "") + (ib ? " jfk-button-disabled" : "");
    d = e + Ke(aa) + '"' + (d ? ' aria-disabled="true"' : ' tabindex="' + (f ? Ke(f) : "0") + '"') + (g ? k ? ' data-tooltip="' + Ke(g) + '"' : ' title="' + Ke(g) + '"' : "") + (q ? ' value="' + Ke(q) + '"' : "");
    b ? (Be(b, ye, Ae) ? b = b.getContent()
      .replace(/([^"'\s])$/, "$1 ") : (b = String(b), Me.test(b) || (qa("Bad value `%s` for |filterHtmlAttributes", [b]), b = "zSoyz")), b = " " + b) : b = "";
    return B(d + b + ">" + Ee(null != c ? c : "") + "</div>")
  };
  Ne.a = "jfk.templates.button.strict";
  (function () {
    if(rb) {
      var a = /Windows NT ([0-9.]+)/;
      return (a = a.exec(z)) ? a[1] : "0"
    }
    return F ? (a = /10[_.][0-9_.]+/, (a = a.exec(z)) ? a[0].replace(/_/g, ".") : "10") : sb ? (a = /Android\s+([^\);]+)(\)|;)/, (a = a.exec(z)) ? a[1] : "") : tb || ub || vb ? (a = /(?:iPhone|CPU)\s+OS\s+(\S+)/, (a = a.exec(z)) ? a[1].replace(/_/g, ".") : "") : ""
  })();
  var Oe = function (a) {
    return (a = a.exec(z)) ? a[1] : ""
  };
  (function () {
    if(Fb) return Oe(/Firefox\/([0-9.]+)/);
    if(C || qb || pb) return Bb;
    if(Jb) return lb() || A("iPad") || A("iPod") ? Oe(/CriOS\/([0-9.]+)/) : Oe(/Chrome\/([0-9.]+)/);
    if(Kb && !(lb() || A("iPad") || A("iPod"))) return Oe(/Version\/([0-9.]+)/);
    if(Gb || Hb) {
      var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(z);
      if(a) return a[1] + "." + a[2]
    } else if(Ib) return (a = Oe(/Android\s+([0-9.]+)/)) ? a : Oe(/Version\/([0-9.]+)/);
    return ""
  })();
  var Pe = function (a, b, c) {
    if(ea(a)) c && (a = r(a, c));
    else if(a && "function" == typeof a.handleEvent) a = r(a.handleEvent, a);
    else throw Error("Invalid listener argument");
    return 2147483647 < Number(b) ? -1 : l.setTimeout(a, b || 0)
  };
  var Te = function (a, b) {
      var c = Qe;
      v(c, "Soy template may not be null.");
      b = Re(c(b || Se, void 0, void 0));
      jb(v(a), b)
    }
    , Re = function (a) {
      if(!p(a)) return fb(String(a));
      if(a instanceof S) {
        if(a.$ !== xe) throw Error("Sanitized content was not of kind HTML.");
        var b = a.toString();
        a = a.xa;
        var c = new Ma(Ka, "Soy SanitizedContent of kind HTML produces SafeHtml-contract-compliant value.");
        sa(Na(c), "must provide justification");
        v(!/^[\s\xa0]*$/.test(Na(c)), "must provide non-empty justification");
        return eb(b, a || null)
      }
      qa("Soy template output is unsafe for use as HTML: " +
        a);
      return fb("zSoyz")
    }
    , Ue = /^<(body|caption|col|colgroup|head|html|tr|td|th|tbody|thead|tfoot)>/i
    , Se = {};
  var T = function (a, b, c, d) {
    ne.call(this, a, Ve.G(), b);
    this.S = c || 0;
    this.Y = d || 0;
    this.va = !1
  };
  u(T, ne);
  T.prototype.setEnabled = function (a) {
    this.a() != a && (T.s.setEnabled.call(this, a), We(this))
  };
  T.prototype.W = function (a) {
    T.s.W.call(this, a);
    Xe(this, !1)
  };
  T.prototype.ra = function (a) {
    T.s.ra.call(this, a);
    this.a() && Xe(this, !0)
  };
  T.prototype.sa = function (a) {
    T.s.sa.call(this, a);
    this.a() && Xe(this, !0)
  };
  var Xe = function (a, b) {
      a.o() && (a = a.o(), b ? zd(a, "jfk-button-clear-outline") : Bd(a, "jfk-button-clear-outline"))
    }
    , We = function (a) {
      a.o() && Ye(a.f, a)
    }
    , $e = function () {
      var a = Ze("MSG_TRANSLATE");
      return new T(a, void 0, 2)
    }
    , Ve = function () {
      this.N = this.v() + "-standard";
      this.f = this.v() + "-action";
      this.M = this.v() + "-primary";
      this.h = this.v() + "-default";
      this.m = this.v() + "-flat";
      this.w = this.v() + "-narrow";
      this.u = this.v() + "-mini";
      this.j = this.v() + "-contrast"
    };
  u(Ve, Nd);
  n(Ve);
  h = Ve.prototype;
  h.Z = function (a, b, c) {
    a && c.S != a && (c.S = a, We(c));
    b && c.Y != b && (c.Y = b, We(c))
  };
  h.v = function () {
    return "jfk-button"
  };
  h.ga = function (a) {
    va(a, T, "Button is expected to be instance of jfk.Button");
    var b = a.h;
    var c = {
      disabled: !a.a()
      , checked: a.ha()
      , style: a.S
      , title: a.O
      , zb: a.va
      , value: a.X
      , width: a.Y
    };
    v(Ne, "Soy template may not be null.");
    var d = Ne(c || Se, void 0, void 0);
    c = ic((b || cc())
      .a, "DIV");
    d = Re(d);
    var e = d.za()
      , f = e.match(Ue);
    v(!f, "This template starts with a %s, which cannot be a child of a <div>, as required by soy internals. Consider using goog.soy.renderElement instead.\nTemplate output: %s", f && f[0], e);
    jb(c, d);
    1 == c.childNodes.length &&
      (d = c.firstChild, 1 == d.nodeType && (c = d));
    b.ob(c, a.getContent());
    this.K(a, c);
    return c
  };
  h.K = function (a, b) {
    Ve.s.K.call(this, a, b);
    this.g || (this.g = Ja(this.N, t(this.Z, 0, null), this.f, t(this.Z, 2, null), this.M, t(this.Z, 3, null), this.h, t(this.Z, 1, null), this.m, t(this.Z, 4, null), this.u, t(this.Z, 5, null), this.j, t(this.Z, 6, null), this.w, t(this.Z, null, 1)));
    for(var c = wd(b), d = 0; d < c.length; ++d) {
      var e = this.g[c[d]];
      e && e(a)
    }
    if(c = b.getAttribute("data-tooltip")) a.O = c, a.va = !0;
    return b
  };
  h.Na = function (a) {
    return a.getAttribute("value") || ""
  };
  h.Oa = function (a, b) {
    a && a.setAttribute("value", b)
  };
  var Ye = function (a, b) {
    function c(g, k) {
      (g ? d : e)
      .push(k)
    }
    v(b.o(), "Button element must already exist when updating style.");
    var d = []
      , e = []
      , f = b.S;
    c(0 == f, a.N);
    c(2 == f, a.f);
    c(3 == f, a.M);
    c(4 == f, a.m);
    c(5 == f, a.u);
    c(1 == f, a.h);
    c(6 == f, a.j);
    c(1 == b.Y, a.w);
    c(!b.a(), a.v() + "-disabled");
    Cd(b.o(), e);
    Ad(b.o(), d)
  };
  var af = function () {
    T.call(this, "", void 0, 4);
    be(this, "jfk-button-flat");
    be(this, "gtx-audio-button");
    be(this, "no-audio");
    this.oa = this.ua = "";
    rd(this)
      .listen(this, "action", this.lb)
  };
  u(af, T);
  af.prototype.lb = function () {
    chrome.runtime.sendMessage({
      audioSrc: bf(this.ua, this.oa)
    })
  };
  var ef = function (a, b, c) {
      var d = c.toLowerCase();
      d in cf && df[cf[d.toLowerCase()]] >= b.length ? (a.H && Ca(a.H, "no-audio") && (0 == a.H.length && (a.H = null), Hd(a, "no-audio", !1)), a.ua = b, a.oa = c) : be(a, "no-audio")
    }
    , bf = function (a, b) {
      return "https://translate.googleapis.com/translate_tts?client=gtx&ie=UTF-8&tl=" + b + Ub(a) + "&q=" + encodeURIComponent(String(a))
    };
  var ff = function (a) {
      a = String(a)
        .toLowerCase()
        .replace("_", "-");
      if("zh-cn" == a) return "zh-CN";
      if("zh-tw" == a) return "zh-TW";
      var b = a.indexOf("-");
      a = 0 <= b ? a.substring(0, b) : a;
      return "zh" == a ? "zh-CN" : a
    }
    , Ze = function (a) {
      a = chrome.i18n.getMessage(a);
      return chrome.i18n.getMessage(a)
    };
  /*
   Portions of this code are from MochiKit, received by
   The Closure Authors under the MIT license. All other code is Copyright
   2005-2009 The Closure Authors. All Rights Reserved.
  */
  var hf = function () {
      this.f = [];
      chrome.i18n.getAcceptLanguages(r(this.u, this));
      this.a = "";
      this.j = "1";
      this.g = {};
      this.h = {};
      chrome.storage.local.get(null, r(this.w, this));
      gf(this)
    }
    , kf = function () {
      var a = jf;
      if("" != a.a) a = a.a;
      else a: {
        for(var b = 0; b < a.f.length; b++) {
          var c = ff(a.f[b]);
          if(a.g[c]) {
            a = c;
            break a
          }
        }
        a = "en"
      }
      return a
    };
  hf.prototype.w = function (a) {
    "gtxTargetLang" in a && (this.a = a.gtxTargetLang);
    "gtxShowBubble" in a && (this.j = a.gtxShowBubble);
    "gtxSourceLangList" in a && (this.h = lf(this, a.gtxSourceLangList));
    "gtxTargetLangList" in a && (this.g = lf(this, a.gtxTargetLangList));
    this.loaded = !0
  };
  var lf = function (a, b) {
    var c = []
      , d;
    for(d in b) c.push({
      code: d
      , name: b[d]
    });
    c.sort(a.m);
    a = {};
    for(b = 0; b < c.length; b++) a[c[b].code] = c[b].name;
    return a
  };
  hf.prototype.m = function (a, b) {
    return a.name.localeCompare(b.name)
  };
  var gf = function (a) {
    chrome.storage.onChanged.addListener(function (b) {
      b.gtxTargetLang && (a.a = b.gtxTargetLang.newValue);
      b.gtxShowBubble && (a.j = b.gtxShowBubble.newValue)
    })
  };
  hf.prototype.u = function (a) {
    this.f = a
  };
  var mf = function (a) {
    var b = jf;
    if("sl" == a) return b.h;
    if("tl" == a) return b.g;
    throw Error("Invalid input for getLangList()");
  };
  var Qe = function (a) {
    var b = a.query
      , c = a.yb
      , d = a.vb
      , e = a.xb
      , f = a.wb
      , g = a.mb;
    a = a.popup;
    var k = "";
    if(b)
      if(c) {
        k += '<div class="gtx-language"><select class="gtx-lang-selector">';
        for(var q = f.length, B = 0; B < q; B++) {
          var x = f[B];
          k += Fe(x, "auto") ? "" : '<option value="' + Ke(x[0]) + '"' + (Fe(x[0], d) ? " selected" : "") + ">" + Ee(x[1]) + "</option>"
        }
        k += '</select></div><div class="gtx-source-audio"><div class="jfk-button-img"></div></div><div class="gtx-body">' + Ee(b) + '</div><br><div class="gtx-language">' + Ee(e) + '</div><div class="gtx-target-audio"><div class="jfk-button-img"></div></div><div class="gtx-body">' +
          Ee(c) + "</div>";
        if(g) {
          k += '<table style="width: 95%">';
          b = g.length;
          for(c = 0; c < b; c++) {
            d = g[c];
            k += '<tr><td class="gtx-td"><div class="gtx-pos">' + Ee(d.pos) + '</div></td><td class="gtx-td">';
            if(a)
              for(d = d.terms, e = d.length, f = 0; f < e; f++) k += (0 != f ? ", " : "") + Ee(d[f]);
            else
              for(d = d.terms, e = d.length, f = 0; f < e; f++) q = d[f], k += 3 > f ? (0 != f ? ", " : "") + Ee(q) : "";
            k += "</td></tr>"
          }
          k += "</table>"
        }
        k += "<br>"
      } else k += "No translation results for <b>" + Ee(b) + "</b>.";
    return De(k)
  };
  Qe.a = "extension.translation";
  var df = [0, 200]
    , cf = {
      af: 1
      , ar: 1
      , bn: 1
      , bs: 1
      , ca: 1
      , cs: 1
      , cy: 1
      , da: 1
      , de: 1
      , el: 1
      , en: 1
      , eo: 1
      , es: 1
      , et: 1
      , fi: 1
      , fr: 1
      , gu: 1
      , hi: 1
      , hr: 1
      , hu: 1
      , hy: 1
      , id: 1
      , is: 1
      , it: 1
      , ja: 1
      , jw: 1
      , km: 1
      , kn: 1
      , ko: 1
      , la: 1
      , lv: 1
      , mk: 1
      , ml: 1
      , mr: 1
      , my: 1
      , ne: 1
      , nl: 1
      , no: 1
      , pl: 1
      , pt: 1
      , ro: 1
      , ru: 1
      , si: 1
      , sk: 1
      , sq: 1
      , sr: 1
      , su: 1
      , sv: 1
      , sw: 1
      , ta: 1
      , te: 1
      , th: 1
      , tl: 1
      , tr: 1
      , vi: 1
      , uk: 1
      , ur: 1
      , zh: 1
      , "zh-cn": 1
      , "zh-tw": 1
    };
  var nf = function () {
    this.f = [];
    this.a = {};
    this.g = !1;
    this.u = 1;
    this.j = {};
    L(window, "beforeunload", this.m, !1, this)
  };
  n(nf);
  var of = function (a, b, c) {
    if(null == b) return "1";
    switch (ca(b)) {
    case "string":
      return a = b, 64 < a.length && (null == c || !c) && (a = a.substr(0, 64)), encodeURIComponent(String(a));
    case "number":
      return "" + b;
    case "boolean":
      return b ? "1" : "0";
    case "array":
      var d = []
        , e;
      for(e in b) d.push( of (a, b[e], c));
      return d.join(",");
    case "object":
      d = [];
      for(e in b) d.push(pf(a, e, b[e], c));
      return d.join(",");
    default:
      return ""
    }
  }, pf = function (a, b, c, d) {
    return [encodeURIComponent(String(b)), of (a, c, d || "smtalt" == b)].join("=")
  };
  nf.prototype.log = function (a, b) {
    this.f.push([a, b]);
    this.g || (this.g = !0, Pe(this.h, 0, this))
  };
  nf.prototype.h = function () {
    for(var a = 0; a < this.f.length; a++) {
      var b = this.f[a];
      qf(this, "/gen204?" + pf(this, b[0], b[1]))
    }
    this.f = [];
    this.g = !1
  };
  var qf = function (a, b) {
    var c = new Image
      , d = a.u++;
    a.j[d] = c;
    c.onload = c.onerror = function () {
      delete nf.G()
        .j[d]
    };
    c.src = b;
    c = null
  };
  nf.prototype.m = function () {
    this.h();
    for(var a in this.a)
      if(0 != this.a[a]) {
        var b = a;
        qf(this, "/gen204?" + pf(this, b, this.a[b][1]));
        b in this.a && (l.clearTimeout(this.a[b][0]), delete this.a[b])
      }
  };
  var rf = function () {};
  rf.prototype.a = null;
  var tf = function (a) {
    var b;
    (b = a.a) || (b = {}, sf(a) && (b[0] = !0, b[1] = !0), b = a.a = b);
    return b
  };
  var uf, vf = function () {};
  u(vf, rf);
  var wf = function (a) {
      return (a = sf(a)) ? new ActiveXObject(a) : new XMLHttpRequest
    }
    , sf = function (a) {
      if(!a.f && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
        for(var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
          var d = b[c];
          try {
            return new ActiveXObject(d), a.f = d
          } catch (e) {}
        }
        throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
      }
      return a.f
    };
  uf = new vf;
  var xf = function (a, b, c) {
    this.reset(a, b, c, void 0, void 0)
  };
  xf.prototype.a = null;
  var yf = 0;
  xf.prototype.reset = function (a, b, c, d, e) {
    "number" == typeof e || yf++;
    d || la();
    this.f = b;
    delete this.a
  };
  xf.prototype.getMessage = function () {
    return this.f
  };
  var zf = function (a) {
      this.j = a;
      this.f = this.g = this.a = null
    }
    , Af = function (a, b) {
      this.name = a;
      this.value = b
    };
  Af.prototype.toString = function () {
    return this.name
  };
  var Bf = new Af("SEVERE", 1E3)
    , Cf = new Af("CONFIG", 700)
    , Df = new Af("FINE", 500);
  zf.prototype.getChildren = function () {
    this.f || (this.f = {});
    return this.f
  };
  var Ef = function (a) {
    if(a.g) return a.g;
    if(a.a) return Ef(a.a);
    qa("Root logger has no level set.");
    return null
  };
  zf.prototype.log = function (a, b, c) {
    if(a.value >= Ef(this)
      .value)
      for(ea(b) && (b = b()), a = new xf(a, String(b), this.j), c && (a.a = c), c = this; c;) c = c.a
  };
  var Ff = {}
    , Gf = null
    , Hf = function (a) {
      Gf || (Gf = new zf(""), Ff[""] = Gf, Gf.g = Cf);
      var b;
      if(!(b = Ff[a])) {
        b = new zf(a);
        var c = a.lastIndexOf(".")
          , d = a.substr(c + 1);
        c = Hf(a.substr(0, c));
        c.getChildren()[d] = b;
        b.a = c;
        Ff[a] = b
      }
      return b
    };
  var U = function (a, b) {
    a && a.log(Df, b, void 0)
  };
  var V = function (a) {
    M.call(this);
    this.headers = new R;
    this.S = a || null;
    this.g = !1;
    this.W = this.a = null;
    this.aa = this.u = "";
    this.m = 0;
    this.w = "";
    this.h = this.Y = this.O = this.X = !1;
    this.C = 0;
    this.P = null;
    this.ma = "";
    this.V = this.oa = !1
  };
  u(V, M);
  var If = V.prototype
    , Jf = Hf("goog.net.XhrIo");
  If.f = Jf;
  var Kf = /^https?$/i
    , Lf = ["POST", "PUT"]
    , Mf = []
    , Nf = function (a, b, c, d) {
      var e = new V;
      Mf.push(e);
      b && e.listen("complete", b);
      e.j.add("ready", e.ua, !0, void 0, void 0);
      e.send(a, c, d, void 0)
    };
  V.prototype.ua = function () {
    this.ea();
    Ca(Mf, this)
  };
  V.prototype.send = function (a, b, c, d) {
    if(this.a) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.u + "; newUri=" + a);
    b = b ? b.toUpperCase() : "GET";
    this.u = a;
    this.w = "";
    this.m = 0;
    this.aa = b;
    this.X = !1;
    this.g = !0;
    this.a = this.S ? wf(this.S) : wf(uf);
    this.W = this.S ? tf(this.S) : tf(uf);
    this.a.onreadystatechange = r(this.ba, this);
    try {
      U(this.f, Of(this, "Opening Xhr")), this.Y = !0, this.a.open(b, String(a), !0), this.Y = !1
    } catch (f) {
      U(this.f, Of(this, "Error opening Xhr: " + f.message));
      Pf(this, f);
      return
    }
    a = c || "";
    var e =
      new R(this.headers);
    d && re(d, function (f, g) {
      e.set(g, f)
    });
    d = Ba(e.U());
    c = l.FormData && a instanceof l.FormData;
    !y(Lf, b) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    e.forEach(function (f, g) {
      this.a.setRequestHeader(g, f)
    }, this);
    this.ma && (this.a.responseType = this.ma);
    "withCredentials" in this.a && this.a.withCredentials !== this.oa && (this.a.withCredentials = this.oa);
    try {
      Qf(this), 0 < this.C && (this.V = Rf(this.a), U(this.f, Of(this, "Will abort after " + this.C + "ms if incomplete, xhr2 " + this.V))
        , this.V ? (this.a.timeout = this.C, this.a.ontimeout = r(this.na, this)) : this.P = Pe(this.na, this.C, this)), U(this.f, Of(this, "Sending request")), this.O = !0, this.a.send(a), this.O = !1
    } catch (f) {
      U(this.f, Of(this, "Send error: " + f.message)), Pf(this, f)
    }
  };
  var Rf = function (a) {
      return C && G(9) && "number" === typeof a.timeout && void 0 !== a.ontimeout
    }
    , Aa = function (a) {
      return "content-type" == a.toLowerCase()
    };
  V.prototype.na = function () {
    "undefined" != typeof ba && this.a && (this.w = "Timed out after " + this.C + "ms, aborting", this.m = 8, U(this.f, Of(this, this.w)), N(this, "timeout"), this.abort(8))
  };
  var Pf = function (a, b) {
      a.g = !1;
      a.a && (a.h = !0, a.a.abort(), a.h = !1);
      a.w = b;
      a.m = 5;
      Sf(a);
      Tf(a)
    }
    , Sf = function (a) {
      a.X || (a.X = !0, N(a, "complete"), N(a, "error"))
    };
  V.prototype.abort = function (a) {
    this.a && this.g && (U(this.f, Of(this, "Aborting")), this.g = !1, this.h = !0, this.a.abort(), this.h = !1, this.m = a || 7, N(this, "complete"), N(this, "abort"), Tf(this))
  };
  V.prototype.A = function () {
    this.a && (this.g && (this.g = !1, this.h = !0, this.a.abort(), this.h = !1), Tf(this, !0));
    V.s.A.call(this)
  };
  V.prototype.ba = function () {
    this.M || (this.Y || this.O || this.h ? Uf(this) : this.va())
  };
  V.prototype.va = function () {
    Uf(this)
  };
  var Uf = function (a) {
      if(a.g && "undefined" != typeof ba)
        if(a.W[1] && 4 == Vf(a) && 2 == Wf(a)) U(a.f, Of(a, "Local request error detected and ignored"));
        else if(a.O && 4 == Vf(a)) Pe(a.ba, 0, a);
      else if(N(a, "readystatechange"), 4 == Vf(a)) {
        U(a.f, Of(a, "Request complete"));
        a.g = !1;
        try {
          if(Xf(a)) N(a, "complete"), N(a, "success");
          else {
            a.m = 6;
            try {
              var b = 2 < Vf(a) ? a.a.statusText : ""
            } catch (c) {
              U(a.f, "Can not get status: " + c.message), b = ""
            }
            a.w = b + " [" + Wf(a) + "]";
            Sf(a)
          }
        } finally {
          Tf(a)
        }
      }
    }
    , Tf = function (a, b) {
      if(a.a) {
        Qf(a);
        var c = a.a
          , d = a.W[0] ? m : null;
        a.a =
          null;
        a.W = null;
        b || N(a, "ready");
        try {
          c.onreadystatechange = d
        } catch (e) {
          (a = a.f) && a.log(Bf, "Problem encountered resetting onreadystatechange: " + e.message, void 0)
        }
      }
    }
    , Qf = function (a) {
      a.a && a.V && (a.a.ontimeout = null);
      a.P && (l.clearTimeout(a.P), a.P = null)
    }
    , Xf = function (a) {
      var b = Wf(a);
      a: switch (b) {
      case 200:
      case 201:
      case 202:
      case 204:
      case 206:
      case 304:
      case 1223:
        var c = !0;
        break a;
      default:
        c = !1
      }
      if(!c) {
        if(b = 0 === b) a = String(a.u)
          .match(se)[1] || null, !a && l.self && l.self.location && (a = l.self.location.protocol, a = a.substr(0, a.length -
            1)), b = !Kf.test(a ? a.toLowerCase() : "");
        c = b
      }
      return c
    }
    , Vf = function (a) {
      return a.a ? a.a.readyState : 0
    }
    , Wf = function (a) {
      try {
        return 2 < Vf(a) ? a.a.status : -1
      } catch (b) {
        return -1
      }
    }
    , Yf = function (a) {
      try {
        return a.a ? a.a.responseText : ""
      } catch (b) {
        return U(a.f, "Can not get responseText: " + b.message), ""
      }
    }
    , Of = function (a, b) {
      return b + " [" + a.aa + " " + a.u + " " + Wf(a) + "]"
    };
  var Zf = function () {};
  n(Zf);
  var $f = function (a) {
    Pb(this, a, null)
  };
  u($f, Lb);
  var bg = function (a) {
    Pb(this, a, ag)
  };
  u(bg, Lb);
  var ag = [26, 80];
  var cg = function () {
    Zf.G()
  };
  n(cg);
  cg.prototype.store = function (a) {
    H(a, 65, 0);
    H(a, 16, "");
    H(a, 14, "");
    H(a, 1, "");
    H(a, 50, "");
    H(a, 52, "");
    H(a, 32, 0)
  };
  var W = function () {}
    , X = function (a, b, c) {
      a = a.f = b = b || [];
      if(a.length) {
        var d = a.length - 1;
        b = a[d];
        if(p(b) && !da(b) && (delete a[d], d < c)) {
          d = 0;
          for(var e in b) {
            var f = +e;
            f <= c ? (a[f - 1] = b[e], delete b[e]) : d++
          }
          d && (a[c] = b)
        }
      }
    };
  W.prototype.clear = function () {
    this.f.length = 0
  };
  var dg = function (a, b) {
    a = a.f[b];
    return null != a ? a : ""
  };
  W.prototype.ka = function () {
    return this.f
  };
  var Y = function (a) {
    var b = a.a();
    a = a.f;
    for(var c = {}, d = 0; d < a.length; d++)
      if(void 0 !== a[d] && null !== a[d]) {
        var e = !1
          , f = void 0
          , g = void 0
          , k;
        for(k in b)
          if(g = b[k], f = k, g.b == d) {
            e = !0;
            break
          }
        if(e)
          if(g = v(g), g.i)
            if(e = a[d], g.c) {
              c[f] = [];
              for(var q = 0; q < e.length; q++) c[f].push(g.i(e[q]))
            } else c[f] = g.i(e);
        else c[f] = a[d]
      }
    return c
  };
  W.prototype.toString = function () {
    return JSON.stringify(Y(this))
  };
  var Z = function (a, b) {
    var c = [];
    a = new a(c);
    var d = va(a, W)
      .a()
      , e;
    for(e in b) {
      var f = v(d[e])
        , g = b[e];
      if(f.l)
        if(g instanceof Array) {
          var k = [];
          for(var q = 0; q < g.length; q++) k.push(f.l(g[q])
            .ka())
        } else k = f.l(g)
          .ka();
      else k = g;
      c[f.b] = k
    }
    return a
  };
  var eg = function (a) {
    X(this, a, 1)
  };
  u(eg, W);
  var fg = {
    romanization: {
      b: 0
      , c: !1
    }
  };
  eg.prototype.a = function () {
    return fg
  };
  var gg = function (a) {
    X(this, a, 3)
  };
  u(gg, W);
  var hg = {
    source_span_index: {
      b: 0
      , c: !1
    }
    , target_span_index: {
      b: 1
      , c: !1
    }
    , direction: {
      b: 2
      , c: !1
    }
  };
  gg.prototype.a = function () {
    return hg
  };
  var ig = function (a) {
    X(this, a, 2)
  };
  u(ig, W);
  var jg = {
    begin: {
      b: 0
      , c: !1
    }
    , end: {
      b: 1
      , c: !1
    }
  };
  ig.prototype.a = function () {
    return jg
  };
  var kg = function (a) {
    X(this, a, 3)
  };
  u(kg, W);
  var lg = {
    source_span: {
      b: 0
      , l: function (a) {
        return Z(ig, a)
      }
      , i: function (a) {
        return Y(new ig(a))
      }
      , c: !0
    }
    , target_span: {
      b: 1
      , l: function (a) {
        return Z(ig, a)
      }
      , i: function (a) {
        return Y(new ig(a))
      }
      , c: !0
    }
    , link: {
      b: 2
      , l: function (a) {
        return Z(gg, a)
      }
      , i: function (a) {
        return Y(new gg(a))
      }
      , c: !0
    }
  };
  kg.prototype.a = function () {
    return lg
  };
  var mg = function (a) {
    X(this, a, 2)
  };
  u(mg, W);
  var ng = {
    model_path: {
      b: 0
      , c: !1
    }
    , label: {
      b: 1
      , c: !1
    }
  };
  mg.prototype.a = function () {
    return ng
  };
  var og = function (a) {
    X(this, a, 2)
  };
  u(og, W);
  var pg = {
    checkpoint_md5: {
      b: 0
      , c: !1
    }
    , launch_doc: {
      b: 1
      , c: !1
    }
  };
  og.prototype.a = function () {
    return pg
  };
  var qg = function (a) {
    X(this, a, 1)
  };
  u(qg, W);
  var rg = {
    model_tracking: {
      b: 0
      , l: function (a) {
        return Z(og, a)
      }
      , i: function (a) {
        return Y(new og(a))
      }
      , c: !1
    }
  };
  qg.prototype.a = function () {
    return rg
  };
  var sg = function (a) {
    X(this, a, 9)
  };
  u(sg, W);
  var tg = {
    trans: {
      b: 0
      , c: !1
    }
    , orig: {
      b: 1
      , c: !1
    }
    , translit: {
      b: 2
      , c: !1
    }
    , src_translit: {
      b: 3
      , c: !1
    }
    , backend: {
      b: 4
      , c: !1
    }
    , model: {
      b: 5
      , c: !0
    }
    , word_alignment: {
      b: 6
      , l: function (a) {
        return Z(kg, a)
      }
      , i: function (a) {
        return Y(new kg(a))
      }
      , c: !1
    }
    , model_specification: {
      b: 7
      , l: function (a) {
        return Z(mg, a)
      }
      , i: function (a) {
        return Y(new mg(a))
      }
      , c: !0
    }
    , translation_engine_debug_info: {
      b: 8
      , l: function (a) {
        return Z(qg, a)
      }
      , i: function (a) {
        return Y(new qg(a))
      }
      , c: !0
    }
  };
  sg.prototype.a = function () {
    return tg
  };
  var ug = function (a) {
    X(this, a, 4)
  };
  u(ug, W);
  var vg = {
    gender: {
      b: 0
      , c: !1
    }
    , translation: {
      b: 1
      , c: !1
    }
    , sentences: {
      b: 2
      , l: function (a) {
        return Z(sg, a)
      }
      , i: function (a) {
        return Y(new sg(a))
      }
      , c: !0
    }
    , romanization: {
      b: 3
      , l: function (a) {
        return Z(eg, a)
      }
      , i: function (a) {
        return Y(new eg(a))
      }
      , c: !1
    }
  };
  ug.prototype.a = function () {
    return vg
  };
  var wg = function (a) {
    X(this, a, 2)
  };
  u(wg, W);
  var xg = {
    gendered_translations: {
      b: 0
      , l: function (a) {
        return Z(ug, a)
      }
      , i: function (a) {
        return Y(new ug(a))
      }
      , c: !0
    }
    , status: {
      b: 1
      , c: !1
    }
  };
  wg.prototype.a = function () {
    return xg
  };
  var yg = function () {
    this.a = cg.G()
  };
  u(yg, J);
  n(yg);
  var zg = function (a) {
    X(this, a, 3)
  };
  u(zg, W);
  var Ag = {
    type: {
      b: 0
      , c: !1
    }
    , display_text: {
      b: 1
      , c: !1
    }
    , contact_text: {
      b: 2
      , c: !1
    }
  };
  zg.prototype.a = function () {
    return Ag
  };
  var Bg = function (a) {
    X(this, a, 5)
  };
  u(Bg, W);
  var Cg = {
    location: {
      b: 0
      , c: !1
    }
    , language: {
      b: 1
      , c: !1
    }
    , title: {
      b: 2
      , c: !1
    }
    , description: {
      b: 3
      , c: !1
    }
    , contact_details: {
      b: 4
      , l: function (a) {
        return Z(zg, a)
      }
      , i: function (a) {
        return Y(new zg(a))
      }
      , c: !0
    }
  };
  Bg.prototype.a = function () {
    return Cg
  };
  Bg.prototype.getTitle = function () {
    return dg(this, 2)
  };
  Bg.prototype.setTitle = function (a) {
    this.f[2] = a
  };
  var Dg = function (a) {
    X(this, a, 3)
  };
  u(Dg, W);
  var Eg = {
    title: {
      b: 0
      , c: !1
    }
    , alert_mid: {
      b: 1
      , c: !1
    }
    , help_and_info: {
      b: 2
      , l: function (a) {
        return Z(Bg, a)
      }
      , i: function (a) {
        return Y(new Bg(a))
      }
      , c: !1
    }
  };
  Dg.prototype.a = function () {
    return Eg
  };
  Dg.prototype.getTitle = function () {
    return dg(this, 0)
  };
  Dg.prototype.setTitle = function (a) {
    this.f[0] = a
  };
  var Fg = function (a) {
    X(this, a, 4)
  };
  u(Fg, W);
  var Ig = {
    word_postproc: {
      b: 0
      , c: !1
    }
    , score: {
      b: 1
      , c: !1
    }
    , has_preceding_space: {
      b: 2
      , c: !1
    }
    , attach_to_next_token: {
      b: 3
      , c: !1
    }
  };
  Fg.prototype.a = function () {
    return Ig
  };
  var Jg = function (a) {
    X(this, a, 2)
  };
  u(Jg, W);
  var Kg = {
    begin: {
      b: 0
      , c: !1
    }
    , end: {
      b: 1
      , c: !1
    }
  };
  Jg.prototype.a = function () {
    return Kg
  };
  var Lg = function (a) {
    X(this, a, 7)
  };
  u(Lg, W);
  var Mg = {
    src_phrase: {
      b: 0
      , c: !1
    }
    , alternative: {
      b: 2
      , l: function (a) {
        return Z(Fg, a)
      }
      , i: function (a) {
        return Y(new Fg(a))
      }
      , c: !0
    }
    , srcunicodeoffsets: {
      b: 3
      , l: function (a) {
        return Z(Jg, a)
      }
      , i: function (a) {
        return Y(new Jg(a))
      }
      , c: !0
    }
    , raw_src_segment: {
      b: 4
      , c: !1
    }
    , start_pos: {
      b: 5
      , c: !1
    }
    , end_pos: {
      b: 6
      , c: !1
    }
  };
  Lg.prototype.a = function () {
    return Mg
  };
  var Ng = function (a) {
    X(this, a, 8)
  };
  u(Ng, W);
  var Og = {
    word: {
      b: 0
      , c: !1
    }
    , styles: {
      b: 1
      , c: !0
    }
    , has_preceding_space: {
      b: 2
      , c: !1
    }
    , attach_to_next_token: {
      b: 3
      , c: !1
    }
    , confidence: {
      b: 4
      , c: !1
    }
    , start_pos: {
      b: 5
      , c: !1
    }
    , end_pos: {
      b: 6
      , c: !1
    }
    , not_from_first_segment: {
      b: 7
      , c: !1
    }
  };
  Ng.prototype.a = function () {
    return Og
  };
  var Pg = function (a) {
    X(this, a, 3)
  };
  u(Pg, W);
  var Qg = {
    gloss: {
      b: 0
      , c: !1
    }
    , definition_id: {
      b: 1
      , c: !1
    }
    , example: {
      b: 2
      , c: !1
    }
  };
  Pg.prototype.a = function () {
    return Qg
  };
  var Rg = function (a) {
    X(this, a, 3)
  };
  u(Rg, W);
  var Sg = {
    pos: {
      b: 0
      , c: !1
    }
    , entry: {
      b: 1
      , l: function (a) {
        return Z(Pg, a)
      }
      , i: function (a) {
        return Y(new Pg(a))
      }
      , c: !0
    }
    , base_form: {
      b: 2
      , c: !1
    }
  };
  Rg.prototype.a = function () {
    return Sg
  };
  var Tg = function (a) {
    X(this, a, 6)
  };
  u(Tg, W);
  var Ug = {
    word: {
      b: 0
      , c: !1
    }
    , reverse_translation: {
      b: 1
      , c: !0
    }
    , synset_id: {
      b: 2
      , c: !0
    }
    , score: {
      b: 3
      , c: !1
    }
    , previous_word: {
      b: 4
      , c: !1
    }
    , gender: {
      b: 5
      , c: !1
    }
  };
  Tg.prototype.a = function () {
    return Ug
  };
  var Vg = function (a) {
    X(this, a, 5)
  };
  u(Vg, W);
  var Wg = {
    pos: {
      b: 0
      , c: !1
    }
    , terms: {
      b: 1
      , c: !0
    }
    , entry: {
      b: 2
      , l: function (a) {
        return Z(Tg, a)
      }
      , i: function (a) {
        return Y(new Tg(a))
      }
      , c: !0
    }
    , base_form: {
      b: 3
      , c: !1
    }
    , pos_enum: {
      b: 4
      , c: !1
    }
  };
  Vg.prototype.a = function () {
    return Wg
  };
  var Xg = function (a) {
    X(this, a, 17)
  };
  u(Xg, W);
  var Yg = {
    animacy: {
      b: 0
      , c: !1
    }
    , inflection_aspect: {
      b: 1
      , c: !1
    }
    , grammatical_case: {
      b: 2
      , c: !1
    }
    , degree: {
      b: 3
      , c: !1
    }
    , gender: {
      b: 4
      , c: !1
    }
    , mood: {
      b: 5
      , c: !1
    }
    , nonfinite_form: {
      b: 6
      , c: !1
    }
    , number: {
      b: 7
      , c: !1
    }
    , person: {
      b: 8
      , c: !1
    }
    , polarity: {
      b: 9
      , c: !1
    }
    , referent: {
      b: 10
      , c: !1
    }
    , strength: {
      b: 11
      , c: !1
    }
    , tense: {
      b: 12
      , c: !1
    }
    , imperfect_suffix: {
      b: 13
      , c: !1
    }
    , voice: {
      b: 14
      , c: !1
    }
    , infinitive_number: {
      b: 15
      , c: !1
    }
    , precedes: {
      b: 16
      , c: !1
    }
  };
  Xg.prototype.a = function () {
    return Yg
  };
  var Zg = function (a) {
    X(this, a, 2)
  };
  u(Zg, W);
  var $g = {
    written_form: {
      b: 0
      , c: !1
    }
    , features: {
      b: 1
      , l: function (a) {
        return Z(Xg, a)
      }
      , i: function (a) {
        return Y(new Xg(a))
      }
      , c: !1
    }
  };
  Zg.prototype.a = function () {
    return $g
  };
  var ah = function (a) {
    X(this, a, 4)
  };
  u(ah, W);
  var bh = {
    title: {
      b: 0
      , c: !1
    }
    , description: {
      b: 1
      , c: !1
    }
    , image_url: {
      b: 2
      , c: !1
    }
    , image_ref_url: {
      b: 3
      , c: !1
    }
  };
  ah.prototype.a = function () {
    return bh
  };
  ah.prototype.getTitle = function () {
    return dg(this, 0)
  };
  ah.prototype.setTitle = function (a) {
    this.f[0] = a
  };
  var ch = function (a) {
    X(this, a, 4)
  };
  u(ch, W);
  var dh = {
    srclangs: {
      b: 0
      , c: !0
    }
    , extended_srclangs: {
      b: 3
      , c: !0
    }
    , detected_target: {
      b: 1
      , c: !1
    }
    , srclangs_confidences: {
      b: 2
      , c: !0
    }
  };
  ch.prototype.a = function () {
    return dh
  };
  var eh = function (a) {
    X(this, a, 1)
  };
  u(eh, W);
  var fh = {
    word: {
      b: 0
      , c: !0
    }
  };
  eh.prototype.a = function () {
    return fh
  };
  var gh = function (a) {
    X(this, a, 6)
  };
  u(gh, W);
  var hh = {
    spell_html_res: {
      b: 0
      , c: !1
    }
    , spell_res: {
      b: 1
      , c: !1
    }
    , correction_type: {
      b: 2
      , c: !0
    }
    , correction_translation: {
      b: 3
      , c: !1
    }
    , related: {
      b: 4
      , c: !1
    }
    , confident: {
      b: 5
      , c: !1
    }
  };
  gh.prototype.a = function () {
    return hh
  };
  var ih = function (a) {
    X(this, a, 2)
  };
  u(ih, W);
  var jh = {
    synonym: {
      b: 0
      , c: !0
    }
    , definition_id: {
      b: 1
      , c: !1
    }
  };
  ih.prototype.a = function () {
    return jh
  };
  var kh = function (a) {
    X(this, a, 3)
  };
  u(kh, W);
  var lh = {
    pos: {
      b: 0
      , c: !1
    }
    , entry: {
      b: 1
      , l: function (a) {
        return Z(ih, a)
      }
      , i: function (a) {
        return Y(new ih(a))
      }
      , c: !0
    }
    , base_form: {
      b: 2
      , c: !1
    }
  };
  kh.prototype.a = function () {
    return lh
  };
  var mh = function (a) {
    X(this, a, 6)
  };
  u(mh, W);
  var nh = {
    text: {
      b: 0
      , c: !1
    }
    , source: {
      b: 1
      , c: !1
    }
    , link: {
      b: 2
      , c: !1
    }
    , translation: {
      b: 3
      , c: !1
    }
    , source_type: {
      b: 4
      , c: !1
    }
    , definition_id: {
      b: 5
      , c: !1
    }
  };
  mh.prototype.a = function () {
    return nh
  };
  var oh = function (a) {
    X(this, a, 1)
  };
  u(oh, W);
  var ph = {
    example: {
      b: 0
      , l: function (a) {
        return Z(mh, a)
      }
      , i: function (a) {
        return Y(new mh(a))
      }
      , c: !0
    }
  };
  oh.prototype.a = function () {
    return ph
  };
  var qh = function (a) {
    X(this, a, 20)
  };
  u(qh, W);
  var rh = {
    sentences: {
      b: 0
      , l: function (a) {
        return Z(sg, a)
      }
      , i: function (a) {
        return Y(new sg(a))
      }
      , c: !0
    }
    , dict: {
      b: 1
      , l: function (a) {
        return Z(Vg, a)
      }
      , i: function (a) {
        return Y(new Vg(a))
      }
      , c: !0
    }
    , src: {
      b: 2
      , c: !1
    }
    , err: {
      b: 3
      , c: !1
    }
    , styled_words: {
      b: 4
      , l: function (a) {
        return Z(Ng, a)
      }
      , i: function (a) {
        return Y(new Ng(a))
      }
      , c: !0
    }
    , alternative_translations: {
      b: 5
      , l: function (a) {
        return Z(Lg, a)
      }
      , i: function (a) {
        return Y(new Lg(a))
      }
      , c: !0
    }
    , confidence: {
      b: 6
      , c: !1
    }
    , spell: {
      b: 7
      , l: function (a) {
        return Z(gh, a)
      }
      , i: function (a) {
        return Y(new gh(a))
      }
      , c: !1
    }
    , autocorrection: {
      b: 10
      , c: !1
    }
    , ld_result: {
      b: 8
      , l: function (a) {
        return Z(ch, a)
      }
      , i: function (a) {
        return Y(new ch(a))
      }
      , c: !1
    }
    , server_time: {
      b: 9
      , c: !1
    }
    , synsets: {
      b: 11
      , l: function (a) {
        return Z(kh, a)
      }
      , i: function (a) {
        return Y(new kh(a))
      }
      , c: !0
    }
    , definitions: {
      b: 12
      , l: function (a) {
        return Z(Rg, a)
      }
      , i: function (a) {
        return Y(new Rg(a))
      }
      , c: !0
    }
    , examples: {
      b: 13
      , l: function (a) {
        return Z(oh, a)
      }
      , i: function (a) {
        return Y(new oh(a))
      }
      , c: !1
    }
    , related_words: {
      b: 14
      , l: function (a) {
        return Z(eh, a)
      }
      , i: function (a) {
        return Y(new eh(a))
      }
      , c: !1
    }
    , knowledge_results: {
      b: 15
      , l: function (a) {
        return Z(ah
          , a)
      }
      , i: function (a) {
        return Y(new ah(a))
      }
      , c: !0
    }
    , query_inflections: {
      b: 16
      , l: function (a) {
        return Z(Zg, a)
      }
      , i: function (a) {
        return Y(new Zg(a))
      }
      , c: !0
    }
    , target_inflections: {
      b: 17
      , l: function (a) {
        return Z(Zg, a)
      }
      , i: function (a) {
        return Y(new Zg(a))
      }
      , c: !0
    }
    , gendered_translation_result: {
      b: 18
      , l: function (a) {
        return Z(wg, a)
      }
      , i: function (a) {
        return Y(new wg(a))
      }
      , c: !1
    }
    , sos_alert: {
      b: 19
      , l: function (a) {
        return Z(Dg, a)
      }
      , i: function (a) {
        return Y(new Dg(a))
      }
      , c: !1
    }
  };
  qh.prototype.a = function () {
    return rh
  };
  var sh = function () {
      this.a = 0;
      this.g = yg.G()
    }
    , th = function (a) {
      a = a.I("q")
        .join("");
      return Ub(a)
    }
    , uh = function (a, b, c, d, e) {
      c = c.toString();
      c += th(d);
      d = d.toString();
      var f = "POST";
      b += "?" + c;
      2E3 > b.length + d.length && (f = "GET", b += "&" + d, d = "");
      ++a.a;
      Nf(b, function (g) {
        --a.a;
        e(g)
      }, f, d)
    };
  sh.prototype.f = function (a, b, c) {
    c = c.target;
    if(!Xf(c) || "[" != Yf(c)[0] && "{" != Yf(c)[0]) {
      a = c.m;
      var d = a in vh ? vh[a] : 0;
      var e = this.g;
      a = new bg;
      e.a.store(a);
      H(a, 31, 148);
      e = new $f;
      e = H(e, 1, 156);
      d && H(e, 5, d);
      va(a, Lb);
      a.f || (a.f = {});
      d = e ? e.ka() : e;
      a.f[63] = e;
      H(a, 63, d);
      a = nf.G();
      d = String(c.u);
      e = Yf(c);
      a.log("invalidResponse", {
        q: d.substring(0, 500)
        , ql: d.length
        , r: e.substring(0, 500)
        , rl: e.length
      });
      b && b(Wf(c))
    } else {
      b = Yf(c);
      c = {
        "class": "trans.common.TranslationAPI"
        , func: "handleSingleResult_"
        , url: String(c.u)
      };
      try {
        d = JSON.parse(b)
      } catch (f) {
        throw a =
          nf.G(), c.js = b, c.error = f.message, a.log("jsonParseErr", c), f;
      }
      "array" == ca(d) && (d = new qh(d));
      a(d)
    }
  };
  var wh = {}
    , vh = (wh[1] = 15, wh[2] = 16, wh[3] = 17, wh[4] = 18, wh[5] = 19, wh[6] = 20, wh[7] = 21, wh[8] = 22, wh[9] = 23, wh);
  var jf = new hf
    , xh = function () {};
  n(xh);
  var yh = function (a, b, c, d) {
    if("" != a) {
      window.selection = a;
      a = new sh;
      var e = chrome.i18n.getUILanguage ? chrome.i18n.getUILanguage() : "en";
      d = d ? d : "auto";
      var f = kf();
      c = new ue("source=" + c);
      var g = window.selection
        , k = new ue
        , q = new ue;
      k.set("client", "gtx");
      k.set("sl", d);
      k.set("tl", f);
      k.set("hl", e);
      e = ["t", "bd"];
      k.remove("dt");
      0 < e.length && (k.g = null, k.a.set("dt", Ea(e)), k.f = ra(k.f) + e.length);
      k.set("dj", "1");
      c && k.nb(c);
      q.set("q", g);
      uh(a, "https://translate.googleapis.com/translate_a/single", k, q, r(a.f, a, b, void 0))
    }
  };
  xh.prototype.a = function (a, b, c, d) {
    if(null != d) {
      for(var e = d.src, f = kf(), g = [], k = [], q = d.sentences, B = 0; B < q.length; B++) g.push(q[B].orig), k.push(q[B].trans);
      g = g.join("");
      k = k.join("");
      q = mf("tl")[f].toUpperCase();
      B = mf("sl");
      var x = []
        , ib;
      for(ib in B) x.push([ib, B[ib]]);
      Te(c, {
        query: b
        , yb: k
        , xb: q
        , vb: e
        , wb: x
        , mb: d.dict
        , popup: a
      });
      d = dc("gtx-lang-selector", c);
      L(d, "change", r(this.f, this, a, b, c), !1, this);
      b = new af;
      d = dc("gtx-source-audio", c);
      td(b, d);
      ef(b, g, e);
      b = new af;
      d = dc("gtx-target-audio", c);
      td(b, d);
      ef(b, k, f);
      e = "https://translate.google.com/?source=gtx_m#" +
        e + "/" + f + "/" + encodeURIComponent(window.selection);
      a ? (a = I("more"), a.setAttribute("href", e), c = new T("", void 0, 4), sd(c, I("new-translation")), kd(I("new-translation"), !0), c = I("translate-page"), mc(a, Ze("MSG_OPEN_IN_TRANSLATE")), c.className = "gtx-a", c.setAttribute("style", "margin-left: 0px;"), kd(a, !0)) : (a = ic(document, "a"), a.id = "off", a.className = "gtx-a", a.setAttribute("target", "_blank"), mc(a, Ze("MSG_FOOTER_OPTIONS")
        .toUpperCase()), a.setAttribute("href", chrome.runtime.getURL("options.html")), jc(c, a), a = ic(document
        , "a"), a.id = "more", a.setAttribute("class", "gtx-a"), a.setAttribute("target", "_blank"), mc(a, Ze("MSG_MORE")), a.setAttribute("href", e), a.setAttribute("style", "color: #A2A2A2; float: right; padding-top: 16px;"), jc(c, a))
    } else mc(I("translation"), Ze("MSG_TRANSLATION_ERROR"))
  };
  xh.prototype.f = function (a, b, c, d) {
    yh(b, r(this.a, this, a, b, c), "ls", d.target.value)
  };
  var zh = function () {};
  u(zh, O);
  n(zh);
  zh.prototype.ga = function (a) {
    var b = a.h.Ma("SPAN", Fd(this, a)
      .join(" "));
    Ah(this, b, a.m);
    return b
  };
  zh.prototype.K = function (a, b) {
    b = zh.s.K.call(this, a, b);
    v(b);
    var c = wd(b)
      , d = !1;
    y(c, Bh(this, null)) ? d = null : y(c, Bh(this, !0)) ? d = !0 : y(c, Bh(this, !1)) && (d = !1);
    a.m = d;
    v(b, "The element cannot be null.");
    uc(b, "checked", null == d ? "mixed" : 1 == d ? "true" : "false");
    return b
  };
  zh.prototype.Aa = function () {
    return "checkbox"
  };
  var Ah = function (a, b, c) {
    if(b) {
      v(b);
      var d = Bh(a, c);
      v(d);
      v(b);
      yd(b, d) || (Fa(Ch, function (e) {
        e = Bh(this, e);
        v(b);
        e == d ? zd(b, e) : Bd(b, e)
      }, a), uc(b, "checked", null == c ? "mixed" : 1 == c ? "true" : "false"))
    }
  };
  zh.prototype.v = function () {
    return "goog-checkbox"
  };
  var Bh = function (a, b) {
    a = a.v();
    if(1 == b) return a + "-checked";
    if(0 == b) return a + "-unchecked";
    if(null == b) return a + "-undetermined";
    throw Error("Invalid checkbox state: " + b);
  };
  var Dh = function (a, b, c) {
    c = c || zh.G();
    P.call(this, null, c, b);
    this.m = void 0 !== a ? a : !1
  };
  u(Dh, P);
  var Ch = {
    jb: !0
    , sd: !1
    , td: null
  };
  h = Dh.prototype;
  h.ha = function () {
    return 1 == this.m
  };
  h.Ua = function (a) {
    a != this.m && (this.m = a, Ah(this.f, this.o(), this.m))
  };
  h.T = function () {
    Dh.s.T.call(this);
    this.Da && rd(this)
      .listen(this.o(), "click", this.cb);
    qd(this)
  };
  h.cb = function (a) {
    a.h();
    var b = this.m ? "uncheck" : "check";
    this.a() && !a.target.href && N(this, b) && (a.j(), this.Ua(this.m ? !1 : !0), N(this, "change"))
  };
  h.Ca = function (a) {
    32 == a.keyCode && (this.ia(a), this.cb(a));
    return !1
  };
  Od("goog-checkbox", function () {
    return new Dh
  });
  var Eh = xh.G()
    , Fh = chrome.extension.getBackgroundPage();
  document.addEventListener("DOMContentLoaded", function () {
    chrome.tabs.executeScript({
      code: "disposeWindowBubble();"
    });
    Gh();
    Hh();
    L(I("new-translation"), "click", Ih);
    mc(I("options-link"), Ze("MSG_FOOTER_OPTIONS"));
    mc(I("translate-link"), Ze("MSG_FOOTER_TRANSLATE"));
    Jh();
    chrome.runtime.connect()
  });
  var Gh = function () {
      var a = I("search-bar")
        , b = $e()
        , c = I("text-input");
      sd(b, a);
      L(b, "action", Kh);
      L(c, "keypress", function (d) {
        13 == d.keyCode && Kh()
      });
      Lh()
    }
    , Hh = function () {
      var a = I("translate-page");
      mc(a, Ze("MSG_TRANSLATE_PAGE"));
      var b;
      chrome.tabs.query({
        active: !0
        , currentWindow: !0
      }, function (c) {
        b = c[0]
      });
      L(a, "click", function () {
        Fh.translate.getTranslateManager()
          .attach(b.id);
        window.close()
      })
    }
    , Jh = function () {
      chrome.tabs.executeScript({
        code: "window.getSelection().toString();"
        , allFrames: !0
      }, function (a) {
        for(var b = 0; b <
          a.length; b++)
          if("" != a[b]) {
            Mh(a[b], "popup");
            break
          }
      })
    }
    , Ih = function () {
      Lh();
      kd(I("more"), !1);
      I("text-input")
        .focus()
    }
    , Lh = function () {
      I("text-input")
        .value = "";
      kd(I("search-bar"), !0);
      kd(I("new-translation"), !1);
      kd(I("more"), !1);
      Te(I("translation"))
    }
    , Kh = function () {
      Mh(I("text-input")
        .value, "input")
    }
    , Mh = function (a, b) {
      "" != a.trim() && (kd(I("search-bar"), !1), yh(a, r(Eh.a, Eh, !0, a, I("translation")), b))
    };
})();
