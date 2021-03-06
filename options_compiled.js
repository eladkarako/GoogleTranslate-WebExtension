/* Copyright 2014 Google */
(function () {
  /*

   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  var g, k = this || self
    , l = function () {}
    , aa = function (a) {
      a.La = void 0;
      a.W = function () {
        return a.La ? a.La : a.La = new a
      }
    }
    , ba = function (a) {
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
    , ca = function (a) {
      var b = ba(a);
      return "array" == b || "object" == b && "number" == typeof a.length
    }
    , da = function (a) {
      return "function" == ba(a)
    }
    , n = function (a) {
      var b = typeof a;
      return "object" == b && null != a || "function" == b
    }
    , ha = function (a) {
      return Object.prototype.hasOwnProperty.call(a, ea) && a[ea] || (a[ea] = ++fa)
    }
    , ea = "closure_uid_" + (1E9 * Math.random() >>> 0)
    , fa = 0
    , ia = function (a, b, c) {
      return a.call.apply(a.bind, arguments)
    }
    , ja = function (a, b, c) {
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
    , p = function (a, b, c) {
      Function.prototype.bind && -1 != Function.prototype.bind.toString()
        .indexOf("native code") ? p = ia : p = ja;
      return p.apply(null
        , arguments)
    }
    , q = function (a, b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return function () {
        var d = c.slice();
        d.push.apply(d, arguments);
        return a.apply(this, d)
      }
    }
    , r = function (a, b) {
      function c() {}
      c.prototype = b.prototype;
      a.h = b.prototype;
      a.prototype = new c;
      a.prototype.constructor = a
    };
  var ka = function (a) {
      a = String(a)
        .toLowerCase()
        .replace("_", "-");
      if("zh-cn" == a) return "zh-CN";
      if("zh-tw" == a) return "zh-TW";
      var b = a.indexOf("-");
      a = 0 <= b ? a.substring(0, b) : a;
      return "zh" == a ? "zh-CN" : a
    }
    , t = function (a) {
      a = chrome.i18n.getMessage(a);
      return chrome.i18n.getMessage(a)
    };
  var la = function (a) {
    if(Error.captureStackTrace) Error.captureStackTrace(this, la);
    else {
      var b = Error()
        .stack;
      b && (this.stack = b)
    }
    a && (this.message = String(a))
  };
  r(la, Error);
  la.prototype.name = "CustomError";
  var ma;
  var na = function (a, b) {
    a = a.split("%s");
    for(var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
    la.call(this, c + a[d])
  };
  r(na, la);
  na.prototype.name = "AssertionError";
  var oa = function (a, b, c, d) {
      var e = "Assertion failed";
      if(c) {
        e += ": " + c;
        var f = d
      } else a && (e += ": " + a, f = b);
      throw new na("" + e, f || []);
    }
    , u = function (a, b, c) {
      a || oa("", null, b, Array.prototype.slice.call(arguments, 2));
      return a
    }
    , pa = function (a, b) {
      throw new na("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
    }
    , qa = function (a, b, c) {
      "string" !== typeof a && oa("Expected string but got %s: %s.", [ba(a), a], b, Array.prototype.slice.call(arguments, 2));
      return a
    }
    , ra = function (a, b, c) {
      n(a) && 1 == a.nodeType || oa("Expected Element but got %s: %s.", [ba(a), a], b, Array.prototype.slice.call(arguments, 2))
    }
    , ta = function (a, b, c, d) {
      a instanceof b || oa("Expected instanceof %s but got %s.", [sa(b), sa(a)], c, Array.prototype.slice.call(arguments, 3))
    }
    , sa = function (a) {
      return a instanceof Function ? a.displayName || a.name || "unknown type name" : a instanceof Object ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : null === a ? "null" : typeof a
    };
  var ua = Array.prototype.indexOf ? function (a, b) {
      u(null != a.length);
      return Array.prototype.indexOf.call(a, b, void 0)
    } : function (a, b) {
      if("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
      for(var c = 0; c < a.length; c++)
        if(c in a && a[c] === b) return c;
      return -1
    }
    , v = Array.prototype.forEach ? function (a, b, c) {
      u(null != a.length);
      Array.prototype.forEach.call(a, b, c)
    } : function (a, b, c) {
      for(var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
    }
    , va = Array.prototype.filter ?
    function (a, b) {
      u(null != a.length);
      return Array.prototype.filter.call(a, b, void 0)
    } : function (a, b) {
      for(var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, h = 0; h < c; h++)
        if(h in f) {
          var m = f[h];
          b.call(void 0, m, h, a) && (d[e++] = m)
        }
      return d
    }
    , xa = Array.prototype.map ? function (a, b) {
      u(null != a.length);
      return Array.prototype.map.call(a, b, void 0)
    } : function (a, b) {
      for(var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
      return d
    }
    , ya = Array.prototype.every ?
    function (a, b) {
      u(null != a.length);
      return Array.prototype.every.call(a, b, void 0)
    } : function (a, b) {
      for(var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
        if(e in d && !b.call(void 0, d[e], e, a)) return !1;
      return !0
    }
    , x = function (a, b) {
      return 0 <= ua(a, b)
    }
    , za = function (a) {
      return Array.prototype.concat.apply([], arguments)
    }
    , Aa = function (a) {
      var b = a.length;
      if(0 < b) {
        for(var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
        return c
      }
      return []
    }
    , Ba = function (a, b) {
      for(var c = 1; c < arguments.length; c++) {
        var d = arguments[c];
        if(ca(d)) {
          var e =
            a.length || 0
            , f = d.length || 0;
          a.length = e + f;
          for(var h = 0; h < f; h++) a[e + h] = d[h]
        } else a.push(d)
      }
    }
    , Da = function (a, b, c, d) {
      u(null != a.length);
      Array.prototype.splice.apply(a, Ca(arguments, 1))
    }
    , Ca = function (a, b, c) {
      u(null != a.length);
      return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    };
  var Ea = String.prototype.trim ? function (a) {
      return a.trim()
    } : function (a) {
      return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }
    , Ma = function (a, b) {
      if(b) a = a.replace(Fa, "&amp;")
        .replace(Ga, "&lt;")
        .replace(Ha, "&gt;")
        .replace(Ia, "&quot;")
        .replace(Ja, "&#39;")
        .replace(Ka, "&#0;");
      else {
        if(!La.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Fa, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Ga, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Ha, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Ia, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Ja
          , "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Ka, "&#0;"))
      }
      return a
    }
    , Fa = /&/g
    , Ga = /</g
    , Ha = />/g
    , Ia = /"/g
    , Ja = /'/g
    , Ka = /\x00/g
    , La = /[\x00&<>"']/
    , Na = function (a, b) {
      return a < b ? -1 : a > b ? 1 : 0
    };
  var y;
  a: {
    var Oa = k.navigator;
    if(Oa) {
      var Pa = Oa.userAgent;
      if(Pa) {
        y = Pa;
        break a
      }
    }
    y = ""
  }
  var z = function (a) {
    return -1 != y.indexOf(a)
  };
  var Qa = function (a, b, c) {
      for(var d in a) b.call(c, a[d], d, a)
    }
    , Sa = function (a, b) {
      for(var c in a)
        if(a[c] == b) return !0;
      return !1
    }
    , Ta = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ")
    , Ua = function (a, b) {
      for(var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for(c in d) a[c] = d[c];
        for(var f = 0; f < Ta.length; f++) c = Ta[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
      }
    }
    , Va = function (a) {
      var b = arguments.length;
      if(1 == b && Array.isArray(arguments[0])) return Va.apply(null
        , arguments[0]);
      if(b % 2) throw Error("Uneven number of arguments");
      for(var c = {}, d = 0; d < b; d += 2) c[arguments[d]] = arguments[d + 1];
      return c
    };
  var Wa = function () {
      return z("Firefox") || z("FxiOS")
    }
    , Xa = function () {
      return (z("Chrome") || z("CriOS")) && !z("Edge")
    };
  var $a = function (a, b) {
    this.a = a === Ya && b || "";
    this.b = Za
  };
  $a.prototype.Ka = !0;
  $a.prototype.oa = function () {
    return this.a
  };
  $a.prototype.toString = function () {
    return "Const{" + this.a + "}"
  };
  var ab = function (a) {
      if(a instanceof $a && a.constructor === $a && a.b === Za) return a.a;
      pa("expected object of type Const, got '" + a + "'");
      return "type_error:Const"
    }
    , Za = {}
    , Ya = {};
  var A = function () {
    this.a = "";
    this.c = bb;
    this.b = null
  };
  A.prototype.sb = !0;
  A.prototype.Ka = !0;
  A.prototype.oa = function () {
    return this.a.toString()
  };
  A.prototype.toString = function () {
    return "SafeHtml{" + this.a + "}"
  };
  var cb = function (a) {
      if(a instanceof A && a.constructor === A && a.c === bb) return a.a;
      pa("expected object of type SafeHtml, got '" + a + "' of type " + ba(a));
      return "type_error:SafeHtml"
    }
    , eb = function (a) {
      if(a instanceof A) return a;
      var b = "object" == typeof a
        , c = null;
      b && a.sb && (c = a.b);
      a = Ma(b && a.Ka ? a.oa() : String(a));
      return db(a, c)
    }
    , bb = {}
    , db = function (a, b) {
      var c = new A;
      c.a = a;
      c.b = b;
      return c
    };
  db("<!DOCTYPE html>", 0);
  var fb = db("", 0);
  db("<br>", 0);
  var gb = function (a) {
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
    a.innerHTML = cb(fb);
    return !b.parentElement
  });
  var hb = function (a) {
    return a = Ma(a, void 0)
  };
  var ib = function () {
    return z("iPhone") && !z("iPod") && !z("iPad")
  };
  var jb = function (a) {
    jb[" "](a);
    return a
  };
  jb[" "] = l;
  var lb = function (a, b) {
    var c = kb;
    return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
  };
  var mb = z("Opera")
    , B = z("Trident") || z("MSIE")
    , nb = z("Edge")
    , C = z("Gecko") && !(-1 != y.toLowerCase()
      .indexOf("webkit") && !z("Edge")) && !(z("Trident") || z("MSIE")) && !z("Edge")
    , D = -1 != y.toLowerCase()
    .indexOf("webkit") && !z("Edge")
    , E = z("Macintosh")
    , ob = z("Windows")
    , pb = z("Android")
    , qb = ib()
    , rb = z("iPad")
    , sb = z("iPod")
    , tb = function () {
      var a = k.document;
      return a ? a.documentMode : void 0
    }
    , ub;
  a: {
    var vb = ""
      , wb = function () {
        var a = y;
        if(C) return /rv:([^\);]+)(\)|;)/.exec(a);
        if(nb) return /Edge\/([\d\.]+)/.exec(a);
        if(B) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if(D) return /WebKit\/(\S+)/.exec(a);
        if(mb) return /(?:Version)[ \/]?(\S+)/.exec(a)
      }();wb && (vb = wb ? wb[1] : "");
    if(B) {
      var xb = tb();
      if(null != xb && xb > parseFloat(vb)) {
        ub = String(xb);
        break a
      }
    }
    ub = vb
  }
  var yb = ub
    , kb = {}
    , F = function (a) {
      return lb(a, function () {
        for(var b = 0, c = Ea(String(yb))
            .split("."), d = Ea(String(a))
            .split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
          var h = c[f] || ""
            , m = d[f] || "";
          do {
            h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
            m = /(\d*)(\D*)(.*)/.exec(m) || ["", "", "", ""];
            if(0 == h[0].length && 0 == m[0].length) break;
            b = Na(0 == h[1].length ? 0 : parseInt(h[1], 10), 0 == m[1].length ? 0 : parseInt(m[1], 10)) || Na(0 == h[2].length, 0 == m[2].length) || Na(h[2], m[2]);
            h = h[3];
            m = m[3]
          } while(0 == b)
        }
        return 0 <= b
      })
    }
    , zb;
  if(k.document && B) {
    var Ab = tb();
    zb = Ab ? Ab : parseInt(yb, 10) || void 0
  } else zb = void 0;
  var Bb = zb;
  var Cb = !B || 9 <= Number(Bb)
    , Db = !C && !B || B && 9 <= Number(Bb) || C && F("1.9.1")
    , Eb = B && !F("9");
  var Hb = function (a) {
      return a ? new Fb(Gb(a)) : ma || (ma = new Fb)
    }
    , I = function (a, b) {
      return "string" === typeof b ? a.getElementById(b) : b
    }
    , Ib = function (a, b) {
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
              var h = b.className;
              "function" == typeof h.split && x(h.split(/\s+/), a) && (f[d++] = b)
            }
            f.length = d;
            a = f
          } else a = e;
          a = a[0] || null
        }
      }
      return a || null
    }
    , Kb = function (a, b) {
      Qa(b, function (c, d) {
        c && "object" == typeof c && c.Ka && (c = c.oa());
        "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : Jb.hasOwnProperty(d) ? a.setAttribute(Jb[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
      })
    }
    , Jb = {
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
    , Mb = function (a, b, c) {
      return Lb(document, arguments)
    }
    , Lb = function (a, b) {
      var c = String(b[0])
        , d = b[1];
      if(!Cb && d && (d.name || d.type)) {
        c = ["<", c];
        d.name && c.push(' name="', hb(d.name), '"');
        if(d.type) {
          c.push(' type="', hb(d.type), '"');
          var e = {};
          Ua(e, d);
          delete e.type;
          d = e
        }
        c.push(">");
        c = c.join("")
      }
      c = Nb(a, c);
      d && ("string" === typeof d ? c.className =
        d : Array.isArray(d) ? c.className = d.join(" ") : Kb(c, d));
      2 < b.length && Ob(a, c, b, 2);
      return c
    }
    , Ob = function (a, b, c, d) {
      function e(m) {
        m && b.appendChild("string" === typeof m ? a.createTextNode(m) : m)
      }
      for(; d < c.length; d++) {
        var f = c[d];
        if(!ca(f) || n(f) && 0 < f.nodeType) e(f);
        else {
          a: {
            if(f && "number" == typeof f.length) {
              if(n(f)) {
                var h = "function" == typeof f.item || "string" == typeof f.item;
                break a
              }
              if(da(f)) {
                h = "function" == typeof f.item;
                break a
              }
            }
            h = !1
          }
          v(h ? Aa(f) : f, e)
        }
      }
    }
    , Nb = function (a, b) {
      b = String(b);
      "application/xhtml+xml" === a.contentType &&
        (b = b.toLowerCase());
      return a.createElement(b)
    }
    , Pb = function (a, b) {
      Ob(Gb(a), a, arguments, 1)
    }
    , Qb = function (a) {
      for(var b; b = a.firstChild;) a.removeChild(b)
    }
    , Rb = function (a) {
      a && a.parentNode && a.parentNode.removeChild(a)
    }
    , Sb = function (a, b) {
      if(!a || !b) return !1;
      if(a.contains && 1 == b.nodeType) return a == b || a.contains(b);
      if("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
      for(; b && a != b;) b = b.parentNode;
      return b == a
    }
    , Gb = function (a) {
      u(a, "Node cannot be null or undefined.");
      return 9 ==
        a.nodeType ? a : a.ownerDocument || a.document
    }
    , J = function (a, b) {
      u(null != a, "goog.dom.setTextContent expects a non-null value for node");
      if("textContent" in a) a.textContent = b;
      else if(3 == a.nodeType) a.data = String(b);
      else if(a.firstChild && 3 == a.firstChild.nodeType) {
        for(; a.lastChild != a.firstChild;) a.removeChild(u(a.lastChild));
        a.firstChild.data = String(b)
      } else {
        Qb(a);
        var c = Gb(a);
        a.appendChild(c.createTextNode(String(b)))
      }
    }
    , Tb = {
      SCRIPT: 1
      , STYLE: 1
      , HEAD: 1
      , IFRAME: 1
      , OBJECT: 1
    }
    , Ub = {
      IMG: " "
      , BR: "\n"
    }
    , Vb = function (a, b) {
      b ? a.tabIndex =
        0 : (a.tabIndex = -1, a.removeAttribute("tabIndex"))
    }
    , Wb = function (a) {
      return B && !F("9") ? (a = a.getAttributeNode("tabindex"), null != a && a.specified) : a.hasAttribute("tabindex")
    }
    , Xb = function (a) {
      a = a.tabIndex;
      return "number" === typeof a && 0 <= a && 32768 > a
    }
    , Zb = function (a) {
      var b = [];
      Yb(a, b, !1);
      return b.join("")
    }
    , Yb = function (a, b, c) {
      if(!(a.nodeName in Tb))
        if(3 == a.nodeType) c ? b.push(String(a.nodeValue)
          .replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
        else if(a.nodeName in Ub) b.push(Ub[a.nodeName]);
      else
        for(a = a.firstChild; a;) Yb(a
          , b, c), a = a.nextSibling
    }
    , Fb = function (a) {
      this.a = a || k.document || document
    };
  g = Fb.prototype;
  g.f = function (a) {
    return I(this.a, a)
  };
  g.pa = function (a, b, c) {
    return Lb(this.a, arguments)
  };
  g.appendChild = function (a, b) {
    u(null != a && null != b, "goog.dom.appendChild expects non-null arguments");
    a.appendChild(b)
  };
  g.ib = Pb;
  g.getChildren = function (a) {
    return Db && void 0 != a.children ? a.children : va(a.childNodes, function (b) {
      return 1 == b.nodeType
    })
  };
  g.contains = Sb;
  /*
   Portions of this code are from MochiKit, received by
   The Closure Authors under the MIT license. All other code is Copyright
   2005-2009 The Closure Authors. All Rights Reserved.
  */
  var ac = function () {
      this.g = [];
      chrome.i18n.getAcceptLanguages(p(this.m, this));
      this.a = "";
      this.b = "1";
      this.c = !0;
      this.i = {};
      chrome.storage.local.get(null, p(this.u, this));
      $b(this)
    }
    , bc = !!chrome.i18n.detectLanguage;
  ac.prototype.u = function (a) {
    "gtxTargetLang" in a && (this.a = a.gtxTargetLang);
    "gtxShowBubble" in a && (this.b = a.gtxShowBubble);
    "gtxDetectLanguage" in a && (this.c = a.gtxDetectLanguage);
    "gtxSourceLangList" in a && cc(this, a.gtxSourceLangList);
    "gtxTargetLangList" in a && (this.i = cc(this, a.gtxTargetLangList));
    this.loaded = !0
  };
  var cc = function (a, b) {
    var c = []
      , d;
    for(d in b) c.push({
      code: d
      , name: b[d]
    });
    c.sort(a.j);
    a = {};
    for(b = 0; b < c.length; b++) a[c[b].code] = c[b].name;
    return a
  };
  ac.prototype.j = function (a, b) {
    return a.name.localeCompare(b.name)
  };
  var dc = function (a) {
      var b = {};
      b.gtxTargetLang = a.a;
      b.gtxShowBubble = a.b;
      b.gtxDetectLanguage = a.c;
      chrome.storage.local.set(b)
    }
    , $b = function (a) {
      chrome.storage.onChanged.addListener(function (b) {
        b.gtxTargetLang && (a.a = b.gtxTargetLang.newValue);
        b.gtxShowBubble && (a.b = b.gtxShowBubble.newValue)
      })
    };
  ac.prototype.m = function (a) {
    this.g = a
  };
  var ec, fc = {
    xb: "activedescendant"
    , Cb: "atomic"
    , Db: "autocomplete"
    , Fb: "busy"
    , fb: "checked"
    , Ib: "colindex"
    , Nb: "controls"
    , Pb: "describedby"
    , DISABLED: "disabled"
    , Tb: "dropeffect"
    , Ub: "expanded"
    , Vb: "flowto"
    , Xb: "grabbed"
    , ac: "haspopup"
    , cc: "hidden"
    , ec: "invalid"
    , fc: "label"
    , hc: "labelledby"
    , ic: "level"
    , nc: "live"
    , Cc: "multiline"
    , Dc: "multiselectable"
    , Hc: "orientation"
    , Ic: "owns"
    , Jc: "posinset"
    , Lc: "pressed"
    , Pc: "readonly"
    , Rc: "relevant"
    , Sc: "required"
    , Wc: "rowindex"
    , Yc: "selected"
    , $c: "setsize"
    , bd: "sort"
    , rd: "valuemax"
    , sd: "valuemin"
    , td: "valuenow"
    , ud: "valuetext"
  };
  var gc = {
    yb: "alert"
    , zb: "alertdialog"
    , Ab: "application"
    , Bb: "article"
    , Eb: "banner"
    , Gb: "button"
    , Hb: "checkbox"
    , Jb: "columnheader"
    , Kb: "combobox"
    , Lb: "complementary"
    , Mb: "contentinfo"
    , Ob: "definition"
    , Qb: "dialog"
    , Rb: "directory"
    , Sb: "document"
    , Wb: "form"
    , Yb: "grid"
    , Zb: "gridcell"
    , $b: "group"
    , bc: "heading"
    , dc: "img"
    , jc: "link"
    , kc: "list"
    , lc: "listbox"
    , mc: "listitem"
    , oc: "log"
    , pc: "main"
    , qc: "marquee"
    , rc: "math"
    , sc: "menu"
    , tc: "menubar"
    , uc: "menuitem"
    , vc: "menuitemcheckbox"
    , wc: "menuitemradio"
    , Ec: "navigation"
    , Fc: "note"
    , Gc: "option"
    , Kc: "presentation"
    , Mc: "progressbar"
    , Nc: "radio"
    , Oc: "radiogroup"
    , Qc: "region"
    , Tc: "row"
    , Uc: "rowgroup"
    , Vc: "rowheader"
    , Xc: "scrollbar"
    , SEARCH: "search"
    , Zc: "separator"
    , ad: "slider"
    , cd: "spinbutton"
    , dd: "status"
    , TAB: "tab"
    , ed: "tablist"
    , fd: "tabpanel"
    , gd: "textbox"
    , hd: "textinfo"
    , jd: "timer"
    , kd: "toolbar"
    , ld: "tooltip"
    , md: "tree"
    , nd: "treegrid"
    , od: "treeitem"
  };
  var hc = function (a, b) {
      b ? (u(Sa(gc, b), "No such ARIA role " + b), a.setAttribute("role", b)) : a.removeAttribute("role")
    }
    , jc = function (a, b, c) {
      Array.isArray(c) && (c = c.join(" "));
      var d = ic(b);
      "" === c || void 0 == c ? (ec || (ec = {
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
      }), c = ec, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d
        , c)
    }
    , ic = function (a) {
      u(a, "ARIA attribute cannot be empty.");
      u(Sa(fc, a), "No such ARIA attribute " + a);
      return "aria-" + a
    };
  var kc = function () {};
  aa(kc);
  kc.prototype.a = 0;
  var K = function () {
    this.G = this.G;
    this.C = this.C
  };
  K.prototype.G = !1;
  K.prototype.ga = function () {
    this.G || (this.G = !0, this.o())
  };
  var lc = function (a, b) {
    a.G ? b() : (a.C || (a.C = []), a.C.push(b))
  };
  K.prototype.o = function () {
    if(this.C)
      for(; this.C.length;) this.C.shift()()
  };
  var mc = function (a) {
    a && "function" == typeof a.ga && a.ga()
  };
  var nc = Object.freeze || function (a) {
    return a
  };
  var oc = !B || 9 <= Number(Bb)
    , pc = !B || 9 <= Number(Bb)
    , qc = B && !F("9")
    , rc = function () {
      if(!k.addEventListener || !Object.defineProperty) return !1;
      var a = !1
        , b = Object.defineProperty({}, "passive", {
          get: function () {
            a = !0
          }
        });
      try {
        k.addEventListener("test", l, b), k.removeEventListener("test", l, b)
      } catch (c) {}
      return a
    }();
  var sc = function (a, b) {
    this.type = a;
    this.b = this.target = b;
    this.defaultPrevented = this.g = !1
  };
  sc.prototype.j = function () {
    this.g = !0
  };
  sc.prototype.i = function () {
    this.defaultPrevented = !0
  };
  var tc = {
    Aa: "mousedown"
    , Ba: "mouseup"
    , Ua: "mousecancel"
    , zc: "mousemove"
    , Bc: "mouseover"
    , Ac: "mouseout"
    , xc: "mouseenter"
    , yc: "mouseleave"
  };
  var L = function (a, b) {
    sc.call(this, a ? a.type : "");
    this.relatedTarget = this.b = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.key = "";
    this.a = 0;
    this.m = this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.pointerId = 0;
    this.pointerType = "";
    this.c = null;
    if(a) {
      var c = this.type = a.type
        , d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
      this.target = a.target || a.srcElement;
      this.b = b;
      if(b = a.relatedTarget) {
        if(C) {
          a: {
            try {
              jb(b.nodeName);
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
      this.a = a.keyCode || 0;
      this.key = a.key || "";
      this.ctrlKey = a.ctrlKey;
      this.altKey =
        a.altKey;
      this.shiftKey = a.shiftKey;
      this.metaKey = a.metaKey;
      this.m = E ? a.metaKey : a.ctrlKey;
      this.pointerId = a.pointerId || 0;
      this.pointerType = "string" === typeof a.pointerType ? a.pointerType : uc[a.pointerType] || "";
      this.c = a;
      a.defaultPrevented && this.i()
    }
  };
  r(L, sc);
  var vc = nc([1, 4, 2])
    , uc = nc({
      2: "touch"
      , 3: "pen"
      , 4: "mouse"
    })
    , wc = function (a) {
      return oc ? 0 == a.c.button : "click" == a.type ? !0 : !!(a.c.button & vc[0])
    };
  L.prototype.j = function () {
    L.h.j.call(this);
    this.c.stopPropagation ? this.c.stopPropagation() : this.c.cancelBubble = !0
  };
  L.prototype.i = function () {
    L.h.i.call(this);
    var a = this.c;
    if(a.preventDefault) a.preventDefault();
    else if(a.returnValue = !1, qc) try {
      if(a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
    } catch (b) {}
  };
  var xc = "closure_listenable_" + (1E6 * Math.random() | 0)
    , yc = function (a) {
      return !(!a || !a[xc])
    }
    , zc = 0;
  var Ac = function (a, b, c, d, e) {
      this.listener = a;
      this.proxy = null;
      this.src = b;
      this.type = c;
      this.capture = !!d;
      this.ta = e;
      this.key = ++zc;
      this.removed = this.la = !1
    }
    , Bc = function (a) {
      a.removed = !0;
      a.listener = null;
      a.proxy = null;
      a.src = null;
      a.ta = null
    };
  var Cc = function (a) {
    this.src = a;
    this.a = {};
    this.b = 0
  };
  Cc.prototype.add = function (a, b, c, d, e) {
    var f = a.toString();
    a = this.a[f];
    a || (a = this.a[f] = [], this.b++);
    var h = Dc(a, b, d, e); - 1 < h ? (b = a[h], c || (b.la = !1)) : (b = new Ac(b, this.src, f, !!d, e), b.la = c, a.push(b));
    return b
  };
  Cc.prototype.remove = function (a, b, c, d) {
    a = a.toString();
    if(!(a in this.a)) return !1;
    var e = this.a[a];
    b = Dc(e, b, c, d);
    return -1 < b ? (Bc(e[b]), u(null != e.length), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.a[a], this.b--), !0) : !1
  };
  var Ec = function (a, b) {
    var c = b.type;
    if(c in a.a) {
      var d = a.a[c]
        , e = ua(d, b)
        , f;
      if(f = 0 <= e) u(null != d.length), Array.prototype.splice.call(d, e, 1);
      f && (Bc(b), 0 == a.a[c].length && (delete a.a[c], a.b--))
    }
  };
  Cc.prototype.removeAll = function (a) {
    a = a && a.toString();
    var b = 0
      , c;
    for(c in this.a)
      if(!a || c == a) {
        for(var d = this.a[c], e = 0; e < d.length; e++) ++b, Bc(d[e]);
        delete this.a[c];
        this.b--
      }
    return b
  };
  var Fc = function (a, b, c, d, e) {
      a = a.a[b.toString()];
      b = -1;
      a && (b = Dc(a, c, d, e));
      return -1 < b ? a[b] : null
    }
    , Dc = function (a, b, c, d) {
      for(var e = 0; e < a.length; ++e) {
        var f = a[e];
        if(!f.removed && f.listener == b && f.capture == !!c && f.ta == d) return e
      }
      return -1
    };
  var Gc = "closure_lm_" + (1E6 * Math.random() | 0)
    , Hc = {}
    , Ic = 0
    , M = function (a, b, c, d, e) {
      if(d && d.once) return Jc(a, b, c, d, e);
      if(Array.isArray(b)) {
        for(var f = 0; f < b.length; f++) M(a, b[f], c, d, e);
        return null
      }
      c = Kc(c);
      return yc(a) ? a.listen(b, c, n(d) ? !!d.capture : !!d, e) : Lc(a, b, c, !1, d, e)
    }
    , Lc = function (a, b, c, d, e, f) {
      if(!b) throw Error("Invalid event type");
      var h = n(e) ? !!e.capture : !!e
        , m = Mc(a);
      m || (a[Gc] = m = new Cc(a));
      c = m.add(b, c, d, h, f);
      if(c.proxy) return c;
      d = Nc();
      c.proxy = d;
      d.src = a;
      d.listener = c;
      if(a.addEventListener) rc || (e = h), void 0 ===
        e && (e = !1), a.addEventListener(b.toString(), d, e);
      else if(a.attachEvent) a.attachEvent(Oc(b.toString()), d);
      else if(a.addListener && a.removeListener) u("change" === b, "MediaQueryList only has a change event"), a.addListener(d);
      else throw Error("addEventListener and attachEvent are unavailable.");
      Ic++;
      return c
    }
    , Nc = function () {
      var a = Pc
        , b = pc ? function (c) {
          return a.call(b.src, b.listener, c)
        } : function (c) {
          c = a.call(b.src, b.listener, c);
          if(!c) return c
        };
      return b
    }
    , Jc = function (a, b, c, d, e) {
      if(Array.isArray(b)) {
        for(var f = 0; f <
          b.length; f++) Jc(a, b[f], c, d, e);
        return null
      }
      c = Kc(c);
      return yc(a) ? a.i.add(String(b), c, !0, n(d) ? !!d.capture : !!d, e) : Lc(a, b, c, !0, d, e)
    }
    , Qc = function (a, b, c, d, e) {
      if(Array.isArray(b))
        for(var f = 0; f < b.length; f++) Qc(a, b[f], c, d, e);
      else d = n(d) ? !!d.capture : !!d, c = Kc(c), yc(a) ? a.i.remove(String(b), c, d, e) : a && (a = Mc(a)) && (b = Fc(a, b, c, d, e)) && Rc(b)
    }
    , Rc = function (a) {
      if("number" !== typeof a && a && !a.removed) {
        var b = a.src;
        if(yc(b)) Ec(b.i, a);
        else {
          var c = a.type
            , d = a.proxy;
          b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ?
            b.detachEvent(Oc(c), d) : b.addListener && b.removeListener && b.removeListener(d);
          Ic--;
          (c = Mc(b)) ? (Ec(c, a), 0 == c.b && (c.src = null, b[Gc] = null)) : Bc(a)
        }
      }
    }
    , Oc = function (a) {
      return a in Hc ? Hc[a] : Hc[a] = "on" + a
    }
    , Tc = function (a, b, c, d) {
      var e = !0;
      if(a = Mc(a))
        if(b = a.a[b.toString()])
          for(b = b.concat(), a = 0; a < b.length; a++) {
            var f = b[a];
            f && f.capture == c && !f.removed && (f = Sc(f, d), e = e && !1 !== f)
          }
      return e
    }
    , Sc = function (a, b) {
      var c = a.listener
        , d = a.ta || a.src;
      a.la && Rc(a);
      return c.call(d, b)
    }
    , Pc = function (a, b) {
      if(a.removed) return !0;
      if(!pc) {
        if(!b) a: {
          b = ["window", "event"];
          for(var c = k, d = 0; d < b.length; d++)
            if(c = c[b[d]], null == c) {
              b = null;
              break a
            }
          b = c
        }
        d = b;
        b = new L(d, this);
        c = !0;
        if(!(0 > d.keyCode || void 0 != d.returnValue)) {
          a: {
            var e = !1;
            if(0 == d.keyCode) try {
              d.keyCode = -1;
              break a
            } catch (h) {
              e = !0
            }
            if(e || void 0 == d.returnValue) d.returnValue = !0
          }
          d = [];
          for(e = b.b; e; e = e.parentNode) d.push(e);a = a.type;
          for(e = d.length - 1; !b.g && 0 <= e; e--) {
            b.b = d[e];
            var f = Tc(d[e], a, !0, b);
            c = c && f
          }
          for(e = 0; !b.g && e < d.length; e++) b.b = d[e]
          , f = Tc(d[e], a, !1, b)
          , c = c && f
        }
        return c
      }
      return Sc(a, new L(b, this))
    }
    , Mc = function (a) {
      a =
        a[Gc];
      return a instanceof Cc ? a : null
    }
    , Uc = "__closure_events_fn_" + (1E9 * Math.random() >>> 0)
    , Kc = function (a) {
      u(a, "Listener can not be null.");
      if(da(a)) return a;
      u(a.handleEvent, "An object listener must have handleEvent method.");
      a[Uc] || (a[Uc] = function (b) {
        return a.handleEvent(b)
      });
      return a[Uc]
    };
  var N = function (a) {
    K.call(this);
    this.b = a;
    this.a = {}
  };
  r(N, K);
  var Vc = [];
  N.prototype.listen = function (a, b, c, d) {
    Array.isArray(b) || (b && (Vc[0] = b.toString()), b = Vc);
    for(var e = 0; e < b.length; e++) {
      var f = M(a, b[e], c || this.handleEvent, d || !1, this.b || this);
      if(!f) break;
      this.a[f.key] = f
    }
    return this
  };
  var Wc = function (a, b, c, d, e, f) {
    if(Array.isArray(c))
      for(var h = 0; h < c.length; h++) Wc(a, b, c[h], d, e, f);
    else d = d || a.handleEvent, e = n(e) ? !!e.capture : !!e, f = f || a.b || a, d = Kc(d), e = !!e, c = yc(b) ? Fc(b.i, String(c), d, e, f) : b ? (b = Mc(b)) ? Fc(b, c, d, e, f) : null : null, c && (Rc(c), delete a.a[c.key]);
    return a
  };
  N.prototype.removeAll = function () {
    Qa(this.a, function (a, b) {
      this.a.hasOwnProperty(b) && Rc(a)
    }, this);
    this.a = {}
  };
  N.prototype.o = function () {
    N.h.o.call(this);
    this.removeAll()
  };
  N.prototype.handleEvent = function () {
    throw Error("EventHandler.handleEvent not implemented");
  };
  var O = function () {
    K.call(this);
    this.i = new Cc(this);
    this.gb = this;
    this.Y = null
  };
  r(O, K);
  O.prototype[xc] = !0;
  g = O.prototype;
  g.Na = function (a) {
    this.Y = a
  };
  g.addEventListener = function (a, b, c, d) {
    M(this, a, b, c, d)
  };
  g.removeEventListener = function (a, b, c, d) {
    Qc(this, a, b, c, d)
  };
  g.A = function (a) {
    Xc(this);
    var b = this.Y;
    if(b) {
      var c = [];
      for(var d = 1; b; b = b.Y) c.push(b), u(1E3 > ++d, "infinite loop")
    }
    b = this.gb;
    d = a.type || a;
    if("string" === typeof a) a = new sc(a, b);
    else if(a instanceof sc) a.target = a.target || b;
    else {
      var e = a;
      a = new sc(d, b);
      Ua(a, e)
    }
    e = !0;
    if(c)
      for(var f = c.length - 1; !a.g && 0 <= f; f--) {
        var h = a.b = c[f];
        e = Yc(h, d, !0, a) && e
      }
    a.g || (h = a.b = b, e = Yc(h, d, !0, a) && e, a.g || (e = Yc(h, d, !1, a) && e));
    if(c)
      for(f = 0; !a.g && f < c.length; f++) h = a.b = c[f], e = Yc(h, d, !1, a) && e;
    return e
  };
  g.o = function () {
    O.h.o.call(this);
    this.i && this.i.removeAll(void 0);
    this.Y = null
  };
  g.listen = function (a, b, c, d) {
    Xc(this);
    return this.i.add(String(a), b, !1, c, d)
  };
  var Yc = function (a, b, c, d) {
      b = a.i.a[String(b)];
      if(!b) return !0;
      b = b.concat();
      for(var e = !0, f = 0; f < b.length; ++f) {
        var h = b[f];
        if(h && !h.removed && h.capture == c) {
          var m = h.listener
            , G = h.ta || h.src;
          h.la && Ec(a.i, h);
          e = !1 !== m.call(G, d) && e
        }
      }
      return e && !d.defaultPrevented
    }
    , Xc = function (a) {
      u(a.i, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")
    };
  var Zc = C ? "MozUserSelect" : D || nb ? "WebkitUserSelect" : null;
  var P = function (a) {
    O.call(this);
    this.g = a || Hb();
    this.za = $c;
    this.da = null;
    this.F = !1;
    this.c = null;
    this.u = void 0;
    this.ca = this.xa = this.j = null;
    this.Ta = !1
  };
  r(P, O);
  P.prototype.hb = kc.W();
  var $c = null
    , ad = function (a, b) {
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
    , bd = function (a, b) {
      if(a.j && a.j.ca) {
        var c = a.j.ca
          , d = a.da;
        d in c && delete c[d];
        c = a.j.ca;
        if(null !== c && b in c) throw Error('The object already contains the key "' + b + '"');
        c[b] = a
      }
      a.da =
        b
    };
  P.prototype.f = function () {
    return this.c
  };
  var cd = function (a) {
      a = a.c;
      u(a, "Can not call getElementStrict before rendering/decorating.");
      return a
    }
    , dd = function (a) {
      return a.c ? Ib("jfk-checkbox-checkmark", a.c || a.g.a) : null
    }
    , ed = function (a) {
      a.u || (a.u = new N(a));
      return u(a.u)
    };
  P.prototype.Na = function (a) {
    if(this.j && this.j != a) throw Error("Method not supported");
    P.h.Na.call(this, a)
  };
  P.prototype.ya = function () {
    this.c = Nb(this.g.a, "DIV")
  };
  var fd = function (a, b) {
      if(a.F) throw Error("Component already rendered");
      a.c || a.ya();
      b ? b.insertBefore(a.c, null) : a.g.a.body.appendChild(a.c);
      a.j && !a.j.F || a.J()
    }
    , gd = function (a, b) {
      if(a.F) throw Error("Component already rendered");
      if(b && a.Wa(b)) {
        a.Ta = !0;
        var c = Gb(b);
        a.g && a.g.a == c || (a.g = Hb(b));
        a.na(b);
        a.J()
      } else throw Error("Invalid element to decorate");
    };
  g = P.prototype;
  g.Wa = function () {
    return !0
  };
  g.na = function (a) {
    this.c = a
  };
  g.J = function () {
    this.F = !0;
    hd(this, function (a) {
      !a.F && a.f() && a.J()
    })
  };
  g.ha = function () {
    hd(this, function (a) {
      a.F && a.ha()
    });
    this.u && this.u.removeAll();
    this.F = !1
  };
  g.o = function () {
    this.F && this.ha();
    this.u && (this.u.ga(), delete this.u);
    hd(this, function (a) {
      a.ga()
    });
    !this.Ta && this.c && Rb(this.c);
    this.j = this.c = this.ca = this.xa = null;
    P.h.o.call(this)
  };
  var hd = function (a, b) {
    a.xa && v(a.xa, b, void 0)
  };
  var id = function (a) {
      return "string" == typeof a.className ? a.className : a.getAttribute && a.getAttribute("class") || ""
    }
    , jd = function (a) {
      return a.classList ? a.classList : id(a)
        .match(/\S+/g) || []
    }
    , kd = function (a, b) {
      "string" == typeof a.className ? a.className = b : a.setAttribute && a.setAttribute("class", b)
    }
    , ld = function (a, b) {
      return a.classList ? a.classList.contains(b) : x(jd(a), b)
    }
    , md = function (a, b) {
      if(a.classList) a.classList.add(b);
      else if(!ld(a, b)) {
        var c = id(a);
        kd(a, c + (0 < c.length ? " " + b : b))
      }
    }
    , nd = function (a, b) {
      if(a.classList) v(b
        , function (e) {
          md(a, e)
        });
      else {
        var c = {};
        v(jd(a), function (e) {
          c[e] = !0
        });
        v(b, function (e) {
          c[e] = !0
        });
        b = "";
        for(var d in c) b += 0 < b.length ? " " + d : d;
        kd(a, b)
      }
    }
    , od = function (a, b) {
      a.classList ? a.classList.remove(b) : ld(a, b) && kd(a, va(jd(a), function (c) {
          return c != b
        })
        .join(" "))
    }
    , pd = function (a, b) {
      a.classList ? v(b, function (c) {
        od(a, c)
      }) : kd(a, va(jd(a), function (c) {
          return !x(b, c)
        })
        .join(" "))
    };
  var Q = function () {}
    , qd;
  aa(Q);
  var rd = function () {
      var a = new S;
      a.l = function () {
        return "jfk-checkbox"
      };
      return a
    }
    , sd = {
      button: "pressed"
      , checkbox: "checked"
      , menuitem: "selected"
      , menuitemcheckbox: "checked"
      , menuitemradio: "checked"
      , radio: "checked"
      , tab: "selected"
      , treeitem: "selected"
    };
  Q.prototype.ia = function () {};
  Q.prototype.X = function (a) {
    return a.g.pa("DIV", td(this, a)
      .join(" "), a.getContent())
  };
  Q.prototype.ja = function (a) {
    return a
  };
  var vd = function (a, b, c) {
    if(a = a.f ? a.f() : a) {
      var d = [b];
      B && !F("7") && (d = ud(jd(a), b), d.push(b));
      (c ? nd : pd)(a, d)
    }
  };
  Q.prototype.Xa = function () {
    return !0
  };
  Q.prototype.D = function (a, b) {
    b.id && bd(a, b.id);
    var c = this.ja(b);
    c && c.firstChild ? wd(a, c.firstChild.nextSibling ? Aa(c.childNodes) : c.firstChild) : a.fa = null;
    var d = 0
      , e = this.l()
      , f = this.l()
      , h = !1
      , m = !1
      , G = !1
      , w = Aa(jd(b));
    v(w, function (wa) {
      h || wa != e ? m || wa != f ? d |= xd(this, wa) : m = !0 : (h = !0, f == e && (m = !0));
      1 == xd(this, wa) && (ra(c), Wb(c) && Xb(c) && Vb(c, !1))
    }, this);
    a.s = d;
    h || (w.push(e), f == e && (m = !0));
    m || w.push(f);
    (a = a.Da) && w.push.apply(w, a);
    if(B && !F("7")) {
      var H = ud(w);
      0 < H.length && (w.push.apply(w, H), G = !0)
    }
    h && m && !a && !G || kd(b, w.join(" "));
    return b
  };
  Q.prototype.cb = function (a) {
    if(null == a.za) {
      var b = a.F ? a.c : a.g.a.body;
      a: {
        var c = Gb(b);
        if(c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(b, null))) {
          c = c.direction || c.getPropertyValue("direction") || "";
          break a
        }
        c = ""
      }
      a.za = "rtl" == (c || (b.currentStyle ? b.currentStyle.direction : null) || b.style && b.style.direction)
    }
    a.za && this.Za(a.f(), !0);
    a.a() && this.wa(a, a.isVisible())
  };
  var yd = function (a, b) {
    if(a = a.ia()) {
      u(b, "The element passed as a first parameter cannot be null.");
      var c = b.getAttribute("role") || null;
      a != c && hc(b, a)
    }
  };
  g = Q.prototype;
  g.Fa = function (a, b) {
    var c = !b;
    b = B || mb ? a.getElementsByTagName("*") : null;
    if(Zc) {
      if(c = c ? "none" : "", a.style && (a.style[Zc] = c), b) {
        a = 0;
        for(var d; d = b[a]; a++) d.style && (d.style[Zc] = c)
      }
    } else if(B || mb)
      if(c = c ? "on" : "", a.setAttribute("unselectable", c), b)
        for(a = 0; d = b[a]; a++) d.setAttribute("unselectable", c)
  };
  g.Za = function (a, b) {
    vd(a, this.l() + "-rtl", b)
  };
  g.Ya = function (a) {
    var b;
    return a.v & 32 && (b = a.f()) ? Wb(b) && Xb(b) : !1
  };
  g.wa = function (a, b) {
    var c;
    if(a.v & 32 && (c = a.f())) {
      if(!b && a.s & 32) {
        try {
          c.blur()
        } catch (d) {}
        a.s & 32 && a.$a(null)
      }(Wb(c) && Xb(c)) != b && Vb(c, b)
    }
  };
  g.Ga = function (a, b, c) {
    var d = a.f();
    if(d) {
      var e = zd(this, b);
      e && vd(a, e, c);
      this.M(d, b, c)
    }
  };
  g.M = function (a, b, c) {
    qd || (qd = {
      1: "disabled"
      , 8: "selected"
      , 16: "checked"
      , 64: "expanded"
    });
    u(a, "The element passed as a first parameter cannot be null.");
    b = qd[b];
    var d = a.getAttribute("role") || null;
    d && (d = sd[d] || b, b = "checked" == b || "selected" == b ? d : b);
    b && jc(a, b, c)
  };
  g.l = function () {
    return "goog-control"
  };
  var td = function (a, b) {
      var c = a.l()
        , d = [c]
        , e = a.l();
      e != c && d.push(e);
      c = b.s;
      for(e = []; c;) {
        var f = c & -c;
        e.push(zd(a, f));
        c &= ~f
      }
      d.push.apply(d, e);
      (a = b.Da) && d.push.apply(d, a);
      B && !F("7") && d.push.apply(d, ud(d));
      return d
    }
    , ud = function (a, b) {
      var c = [];
      b && (a = za(a, [b]));
      v([], function (d) {
        !ya(d, q(x, a)) || b && !x(d, b) || c.push(d.join("_"))
      });
      return c
    }
    , zd = function (a, b) {
      a.a || Ad(a);
      return a.a[b]
    }
    , xd = function (a, b) {
      if(!a.H) {
        a.a || Ad(a);
        var c = a.a
          , d = {}
          , e;
        for(e in c) d[c[e]] = e;
        a.H = d
      }
      a = parseInt(a.H[b], 10);
      return isNaN(a) ? 0 : a
    }
    , Ad = function (a) {
      var b =
        a.l();
      var c = -1 != b.replace(/\xa0|\s/g, " ")
        .indexOf(" ");
      u(!c, "ControlRenderer has an invalid css class: '" + b + "'");
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
  var Bd = function () {};
  r(Bd, Q);
  aa(Bd);
  g = Bd.prototype;
  g.ia = function () {
    return "button"
  };
  g.M = function (a, b, c) {
    switch (b) {
    case 8:
    case 16:
      u(a, "The button DOM element cannot be null.");
      jc(a, "pressed", c);
      break;
    default:
    case 64:
    case 1:
      Bd.h.M.call(this, a, b, c)
    }
  };
  g.X = function (a) {
    var b = Bd.h.X.call(this, a)
      , c = a.R;
    b && (c ? b.title = c : b.removeAttribute("title"));
    (c = a.I()) && this.Ea(b, c);
    a.v & 16 && this.M(b, 16, a.K());
    return b
  };
  g.D = function (a, b) {
    b = Bd.h.D.call(this, a, b);
    var c = this.I(b);
    a.Pa = c;
    a.R = b.title;
    a.v & 16 && this.M(b, 16, a.K());
    return b
  };
  g.I = l;
  g.Ea = l;
  g.l = function () {
    return "goog-button"
  };
  var Cd = function (a, b) {
      if(!a) throw Error("Invalid class name " + a);
      if(!da(b)) throw Error("Invalid decorator function " + b);
    }
    , Dd = {};
  var Gd = function (a, b, c, d, e, f) {
      if(D && !F("525")) return !0;
      if(E && e) return Ed(a);
      if(e && !d) return !1;
      if(!C) {
        "number" === typeof b && (b = Fd(b));
        var h = 17 == b || 18 == b || E && 91 == b;
        if((!c || E) && h || E && 16 == b && (d || f)) return !1
      }
      if((D || nb) && d && c) switch (a) {
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
      if(B && d && b == a) return !1;
      switch (a) {
      case 13:
        return C ? f || e ? !1 : !(c && d) : !0;
      case 27:
        return !(D || nb || C)
      }
      return C && (d || e || f) ? !1 : Ed(a)
    }
    , Ed = function (a) {
      if(48 <= a && 57 >= a ||
        96 <= a && 106 >= a || 65 <= a && 90 >= a || (D || nb) && 0 == a) return !0;
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
        return C;
      default:
        return !1
      }
    }
    , Fd = function (a) {
      if(C) a = Hd(a);
      else if(E && D) switch (a) {
      case 93:
        a = 91
      }
      return a
    }
    , Hd = function (a) {
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
  var Id = function (a, b) {
    O.call(this);
    a && this.attach(a, b)
  };
  r(Id, O);
  g = Id.prototype;
  g.Z = null;
  g.ua = null;
  g.Ma = null;
  g.va = null;
  g.w = -1;
  g.L = -1;
  g.Ca = !1;
  var Jd = {
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
    , Kd = {
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
    , Ld = !D || F("525")
    , Md = E && C;
  g = Id.prototype;
  g.ob = function (a) {
    if(D || nb)
      if(17 == this.w && !a.ctrlKey || 18 == this.w && !a.altKey || E && 91 == this.w && !a.metaKey) this.L = this.w = -1; - 1 == this.w && (a.ctrlKey && 17 != a.a ? this.w = 17 : a.altKey && 18 != a.a ? this.w = 18 : a.metaKey && 91 != a.a && (this.w = 91));
    Ld && !Gd(a.a, this.w, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey) ? this.handleEvent(a) : (this.L = Fd(a.a), Md && (this.Ca = a.altKey))
  };
  g.qb = function (a) {
    this.L = this.w = -1;
    this.Ca = a.altKey
  };
  g.handleEvent = function (a) {
    var b = a.c
      , c = b.altKey;
    if(B && "keypress" == a.type) {
      var d = this.L;
      var e = 13 != d && 27 != d ? b.keyCode : 0
    } else(D || nb) && "keypress" == a.type ? (d = this.L, e = 0 <= b.charCode && 63232 > b.charCode && Ed(d) ? b.charCode : 0) : mb && !D ? (d = this.L, e = Ed(d) ? b.keyCode : 0) : ("keypress" == a.type ? (Md && (c = this.Ca), b.keyCode == b.charCode ? 32 > b.keyCode ? (d = b.keyCode, e = 0) : (d = this.L, e = b.charCode) : (d = b.keyCode || this.L, e = b.charCode || 0)) : (d = b.keyCode || this.L, e = b.charCode || 0), E && 63 == e && 224 == d && (d = 191));
    var f = d = Fd(d);
    d ? 63232 <= d && d in Jd ?
      f = Jd[d] : 25 == d && a.shiftKey && (f = 9) : b.keyIdentifier && b.keyIdentifier in Kd && (f = Kd[b.keyIdentifier]);
    C && Ld && "keypress" == a.type && !Gd(f, this.w, a.shiftKey, a.ctrlKey, c, a.metaKey) || (a = f == this.w, this.w = f, b = new Nd(f, e, a, b), b.altKey = c, this.A(b))
  };
  g.f = function () {
    return this.Z
  };
  g.attach = function (a, b) {
    this.va && this.detach();
    this.Z = a;
    this.ua = M(this.Z, "keypress", this, b);
    this.Ma = M(this.Z, "keydown", this.ob, b, this);
    this.va = M(this.Z, "keyup", this.qb, b, this)
  };
  g.detach = function () {
    this.ua && (Rc(this.ua), Rc(this.Ma), Rc(this.va), this.va = this.Ma = this.ua = null);
    this.Z = null;
    this.L = this.w = -1
  };
  g.o = function () {
    Id.h.o.call(this);
    this.detach()
  };
  var Nd = function (a, b, c, d) {
    L.call(this, d);
    this.type = "key";
    this.a = a;
    this.repeat = c
  };
  r(Nd, L);
  var T = function (a, b, c) {
    P.call(this, c);
    if(!b) {
      for(b = this.constructor; b;) {
        var d = ha(b);
        if(d = Dd[d]) break;
        b = (b = Object.getPrototypeOf(b.prototype)) && b.constructor
      }
      b = d ? da(d.W) ? d.W() : new d : null
    }
    this.b = b;
    this.fa = void 0 !== a ? a : null
  };
  r(T, P);
  g = T.prototype;
  g.fa = null;
  g.s = 0;
  g.v = 39;
  g.V = 255;
  g.eb = !0;
  g.Da = null;
  g.ra = !0;
  var Pd = function (a) {
    a.F && 0 != a.ra && Od(a, !1);
    a.ra = !1
  };
  T.prototype.ya = function () {
    var a = this.b.X(this);
    this.c = a;
    yd(this.b, a);
    this.b.Fa(a, !1);
    this.isVisible() || (a.style.display = "none", a && jc(a, "hidden", !0))
  };
  T.prototype.Wa = function (a) {
    return this.b.Xa(a)
  };
  T.prototype.na = function (a) {
    this.c = a = this.b.D(this, a);
    yd(this.b, a);
    this.b.Fa(a, !1);
    this.eb = "none" != a.style.display
  };
  T.prototype.J = function () {
    T.h.J.call(this);
    var a = this.b
      , b = cd(this);
    u(this);
    u(b);
    this.isVisible() || jc(b, "hidden", !this.isVisible());
    this.a() || a.M(b, 1, !this.a());
    this.v & 8 && a.M(b, 8, this.isSelected());
    this.v & 16 && a.M(b, 16, this.K());
    this.v & 64 && a.M(b, 64, !!(this.s & 64));
    this.b.cb(this);
    this.v & -2 && (this.ra && Od(this, !0), this.v & 32 && (a = this.f())) && (b = this.H || (this.H = new Id), b.attach(a), ed(this)
      .listen(b, "key", this.pb)
      .listen(a, "focus", this.nb)
      .listen(a, "blur", this.$a))
  };
  var Od = function (a, b) {
    var c = ed(a)
      , d = a.f();
    b ? (c.listen(d, tc.Aa, a.P)
      .listen(d, [tc.Ba, tc.Ua], a.aa)
      .listen(d, "mouseover", a.Ja)
      .listen(d, "mouseout", a.Ia), a.qa != l && c.listen(d, "contextmenu", a.qa), B && (F(9) || c.listen(d, "dblclick", a.bb), a.T || (a.T = new Qd(a), lc(a, q(mc, a.T))))) : (Wc(Wc(Wc(Wc(c, d, tc.Aa, a.P), d, [tc.Ba, tc.Ua], a.aa), d, "mouseover", a.Ja), d, "mouseout", a.Ia), a.qa != l && Wc(c, d, "contextmenu", a.qa), B && (F(9) || Wc(c, d, "dblclick", a.bb), mc(a.T), a.T = null))
  };
  T.prototype.ha = function () {
    T.h.ha.call(this);
    this.H && this.H.detach();
    this.isVisible() && this.a() && this.b.wa(this, !1)
  };
  T.prototype.o = function () {
    T.h.o.call(this);
    this.H && (this.H.ga(), delete this.H);
    delete this.b;
    this.T = this.Da = this.fa = null
  };
  T.prototype.getContent = function () {
    return this.fa
  };
  var wd = function (a, b) {
      a.fa = b
    }
    , Rd = function (a) {
      a = a.getContent();
      if(!a) return "";
      if("string" !== typeof a)
        if(Array.isArray(a)) a = xa(a, Zb)
          .join("");
        else {
          if(Eb && null !== a && "innerText" in a) a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
          else {
            var b = [];
            Yb(a, b, !0);
            a = b.join("")
          }
          a = a.replace(/ \xAD /g, " ")
            .replace(/\xAD/g, "");
          a = a.replace(/\u200B/g, "");
          Eb || (a = a.replace(/ +/g, " "));
          " " != a && (a = a.replace(/^\s*/, ""))
        }
      return a.replace(/[\t\r\n ]+/g, " ")
        .replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
    };
  T.prototype.isVisible = function () {
    return this.eb
  };
  T.prototype.a = function () {
    return !(this.s & 1)
  };
  T.prototype.setEnabled = function (a) {
    var b = this.j;
    b && "function" == typeof b.a && !b.a() || !Sd(this, 1, !a) || (a || (Td(this, !1), Ud(this, !1)), this.isVisible() && this.b.wa(this, a), Vd(this, 1, !a, !0))
  };
  var Ud = function (a, b) {
      Sd(a, 2, b) && Vd(a, 2, b)
    }
    , Td = function (a, b) {
      Sd(a, 4, b) && Vd(a, 4, b)
    };
  g = T.prototype;
  g.isSelected = function () {
    return !!(this.s & 8)
  };
  g.Oa = function (a) {
    Sd(this, 8, a) && Vd(this, 8, a)
  };
  g.K = function () {
    return !!(this.s & 16)
  };
  g.S = function (a) {
    Sd(this, 16, a) && Vd(this, 16, a)
  };
  g.ba = function (a) {
    Sd(this, 32, a) && Vd(this, 32, a)
  };
  var Vd = function (a, b, c, d) {
      d || 1 != b ? a.v & b && c != !!(a.s & b) && (a.b.Ga(a, b, c), a.s = c ? a.s | b : a.s & ~b) : a.setEnabled(!c)
    }
    , Wd = function (a, b, c) {
      if(a.F && a.s & b && !c) throw Error("Component already rendered");
      !c && a.s & b && Vd(a, b, !1);
      a.v = c ? a.v | b : a.v & ~b
    }
    , U = function (a, b) {
      return !!(a.V & b) && !!(a.v & b)
    }
    , Sd = function (a, b, c) {
      return !!(a.v & b) && !!(a.s & b) != c && (!(0 & b) || a.A(ad(b, c))) && !a.G
    };
  g = T.prototype;
  g.Ja = function (a) {
    (!a.relatedTarget || !Sb(this.f(), a.relatedTarget)) && this.A("enter") && this.a() && U(this, 2) && Ud(this, !0)
  };
  g.Ia = function (a) {
    a.relatedTarget && Sb(this.f(), a.relatedTarget) || !this.A("leave") || (U(this, 4) && Td(this, !1), U(this, 2) && Ud(this, !1))
  };
  g.qa = l;
  g.P = function (a) {
    this.a() && (U(this, 2) && Ud(this, !0), !wc(a) || D && E && a.ctrlKey || (U(this, 4) && Td(this, !0), this.b && this.b.Ya(this) && this.f()
      .focus()));
    !wc(a) || D && E && a.ctrlKey || a.i()
  };
  g.aa = function (a) {
    this.a() && (U(this, 2) && Ud(this, !0), this.s & 4 && this.O(a) && U(this, 4) && Td(this, !1))
  };
  g.bb = function (a) {
    this.a() && this.O(a)
  };
  g.O = function (a) {
    U(this, 16) && this.S(!this.K());
    U(this, 8) && this.Oa(!0);
    if(U(this, 64)) {
      var b = !(this.s & 64);
      Sd(this, 64, b) && Vd(this, 64, b)
    }
    b = new sc("action", this);
    a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.m = a.m);
    return this.A(b)
  };
  g.nb = function () {
    U(this, 32) && this.ba(!0)
  };
  g.$a = function () {
    U(this, 4) && Td(this, !1);
    U(this, 32) && this.ba(!1)
  };
  g.pb = function (a) {
    return this.isVisible() && this.a() && this.$(a) ? (a.i(), a.j(), !0) : !1
  };
  g.$ = function (a) {
    return 13 == a.a && this.O(a)
  };
  if(!da(T)) throw Error("Invalid component class " + T);
  if(!da(Q)) throw Error("Invalid renderer class " + Q);
  var Xd = ha(T);
  Dd[Xd] = Q;
  Cd("goog-control", function () {
    return new T(null)
  });
  var Qd = function (a) {
    K.call(this);
    this.b = a;
    this.a = !1;
    this.c = new N(this);
    lc(this, q(mc, this.c));
    a = cd(this.b);
    this.c.listen(a, tc.Aa, this.i)
      .listen(a, tc.Ba, this.j)
      .listen(a, "click", this.g)
  };
  r(Qd, K);
  var Yd = !B || 9 <= Number(Bb);
  Qd.prototype.i = function () {
    this.a = !1
  };
  Qd.prototype.j = function () {
    this.a = !0
  };
  var Zd = function (a, b) {
    if(!Yd) return a.button = 0, a.type = b, a;
    var c = document.createEvent("MouseEvents");
    c.initMouseEvent(b, a.bubbles, a.cancelable, a.view || null, a.detail, a.screenX, a.screenY, a.clientX, a.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, a.relatedTarget || null);
    return c
  };
  Qd.prototype.g = function (a) {
    if(this.a) this.a = !1;
    else {
      var b = a.c
        , c = b.button
        , d = b.type
        , e = Zd(b, "mousedown");
      this.b.P(new L(e, a.b));
      e = Zd(b, "mouseup");
      this.b.aa(new L(e, a.b));
      Yd || (b.button = c, b.type = d)
    }
  };
  Qd.prototype.o = function () {
    this.b = null;
    Qd.h.o.call(this)
  };
  var $d = function () {};
  r($d, Bd);
  aa($d);
  g = $d.prototype;
  g.ia = function () {};
  g.X = function (a) {
    Pd(a);
    a.V &= -256;
    Wd(a, 32, !1);
    return a.g.pa("BUTTON", {
      "class": td(this, a)
        .join(" ")
      , disabled: !a.a()
      , title: a.R || ""
      , value: a.I() || ""
    }, Rd(a) || "")
  };
  g.Xa = function (a) {
    return "BUTTON" == a.tagName || "INPUT" == a.tagName && ("button" == a.type || "submit" == a.type || "reset" == a.type)
  };
  g.D = function (a, b) {
    Pd(a);
    a.V &= -256;
    Wd(a, 32, !1);
    if(b.disabled) {
      var c = qa(zd(this, 1));
      md(b, c)
    }
    return $d.h.D.call(this, a, b)
  };
  g.cb = function (a) {
    ed(a)
      .listen(a.f(), "click", a.O)
  };
  g.Fa = l;
  g.Za = l;
  g.Ya = function (a) {
    return a.a()
  };
  g.wa = l;
  g.Ga = function (a, b, c) {
    $d.h.Ga.call(this, a, b, c);
    (a = a.f()) && 1 == b && (a.disabled = c)
  };
  g.I = function (a) {
    return a.value
  };
  g.Ea = function (a, b) {
    a && (a.value = b)
  };
  g.M = l;
  var V = function (a, b, c) {
    T.call(this, a, b || $d.W(), c)
  };
  r(V, T);
  V.prototype.I = function () {
    return this.Pa
  };
  V.prototype.o = function () {
    V.h.o.call(this);
    delete this.Pa;
    delete this.R
  };
  V.prototype.J = function () {
    V.h.J.call(this);
    if(this.v & 32) {
      var a = this.f();
      a && ed(this)
        .listen(a, "keyup", this.$)
    }
  };
  V.prototype.$ = function (a) {
    return 13 == a.a && "key" == a.type || 32 == a.a && "keyup" == a.type ? this.O(a) : 32 == a.a
  };
  Cd("goog-button", function () {
    return new V(null)
  });
  var ae = {
      yd: !0
    }
    , be = {
      xd: !0
    }
    , ce = function () {
      throw Error("Do not instantiate directly");
    };
  ce.prototype.ma = null;
  ce.prototype.getContent = function () {
    return this.content
  };
  ce.prototype.toString = function () {
    return this.content
  };
  var de = function () {
    ce.call(this)
  };
  r(de, ce);
  de.prototype.ea = ae;
  var ee = function () {
    ce.call(this)
  };
  r(ee, ce);
  ee.prototype.ea = be;
  ee.prototype.ma = 1;
  var fe = function (a, b, c) {
    (b = null != a && a.ea === b) && u(a.constructor === c);
    return b
  };
  var ge = function (a) {
      if(null != a) switch (a.ma) {
      case 1:
        return 1;
      case -1:
        return -1;
      case 0:
        return 0
      }
      return null
    }
    , ie = function (a) {
      return fe(a, ae, de) ? a : a instanceof A ? he(cb(a)
        .toString(), a.b) : he(hb(String(String(a))), ge(a))
    }
    , he = function (a) {
      function b(c) {
        this.content = c
      }
      b.prototype = a.prototype;
      return function (c, d) {
        c = new b(String(c));
        void 0 !== d && (c.ma = d);
        return c
      }
    }(de)
    , W = function (a) {
      return fe(a, ae, de) ? String(String(a.getContent())
          .replace(je, "")
          .replace(ke, "&lt;"))
        .replace(le, me) : hb(String(a))
    }
    , oe = function (a) {
      fe(a
          , be, ee) ? a = a.getContent()
        .replace(/([^"'\s])$/, "$1 ") : (a = String(a), ne.test(a) || (pa("Bad value `%s` for |filterHtmlAttributes", [a]), a = "zSoyz"));
      return a
    }
    , pe = {
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
    , me = function (a) {
      return pe[a]
    }
    , le = /[\x00\x22\x27\x3c\x3e]/g
    , ne = /^(?!on|src|(?:action|archive|background|cite|classid|codebase|content|data|dsync|href|http-equiv|longdesc|style|usemap)\s*$)(?:[a-z0-9_$:-]*)$/i
    , je = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g
    , ke = /</g;
  var qe = function (a) {
    a = a || {};
    var b = a.attributes
      , c = a.content
      , d = a.disabled
      , e = a.id
      , f = a.ub
      , h = a.title
      , m = a.wb
      , G = a.value
      , w = he;
    e = '<div role="button"' + (e ? ' id="' + W(e) + '"' : "") + ' class="';
    var H = a || {};
    a = H.Va;
    var wa = H.disabled
      , Oe = H.checked
      , Ra = H.width
      , R = "goog-inline-block jfk-button ";
    H = H.style;
    switch (n(H) ? H.toString() : H) {
    case 0:
      R += "jfk-button-standard";
      break;
    case 2:
      R += "jfk-button-action";
      break;
    case 3:
      R += "jfk-button-primary";
      break;
    case 1:
      R += "jfk-button-default";
      break;
    case 4:
      R += "jfk-button-flat";
      break;
    case 5:
      R += "jfk-button-mini";
      break;
    case 6:
      R += "jfk-button-contrast";
      break;
    default:
      R += "jfk-button-standard"
    }
    R += ((Ra && Ra.tb && (1)
      .tb ? Ra.ea !== (1)
      .ea ? 0 : Ra.toString() === (1)
      .toString() : 1 == Ra) ? " jfk-button-narrow" : "") + (Oe ? " jfk-button-checked" : "") + (a ? " " + a : "") + (wa ? " jfk-button-disabled" : "");
    return w(e + W(R) + '"' + (d ? ' aria-disabled="true"' : ' tabindex="' + (f ? W(f) : "0") + '"') + (h ? m ? ' data-tooltip="' + W(h) + '"' : ' title="' + W(h) + '"' : "") + (G ? ' value="' + W(G) + '"' : "") + (b ? " " + oe(b) : "") + ">" + ie(null != c ? c : "") + "</div>")
  };
  qe.a = "jfk.templates.button.strict";
  (function () {
    if(ob) {
      var a = /Windows NT ([0-9.]+)/;
      return (a = a.exec(y)) ? a[1] : "0"
    }
    return E ? (a = /10[_.][0-9_.]+/, (a = a.exec(y)) ? a[0].replace(/_/g, ".") : "10") : pb ? (a = /Android\s+([^\);]+)(\)|;)/, (a = a.exec(y)) ? a[1] : "") : qb || rb || sb ? (a = /(?:iPhone|CPU)\s+OS\s+(\S+)/, (a = a.exec(y)) ? a[1].replace(/_/g, ".") : "") : ""
  })();
  var re = Wa()
    , se = ib() || z("iPod")
    , te = z("iPad")
    , ue = z("Android") && !(Xa() || Wa() || z("Opera") || z("Silk"))
    , ve = Xa()
    , we = z("Safari") && !(Xa() || z("Coast") || z("Opera") || z("Edge") || z("Edg/") || z("OPR") || Wa() || z("Silk") || z("Android")) && !(ib() || z("iPad") || z("iPod"));
  var xe = function (a) {
    return (a = a.exec(y)) ? a[1] : ""
  };
  (function () {
    if(re) return xe(/Firefox\/([0-9.]+)/);
    if(B || nb || mb) return yb;
    if(ve) return ib() || z("iPad") || z("iPod") ? xe(/CriOS\/([0-9.]+)/) : xe(/Chrome\/([0-9.]+)/);
    if(we && !(ib() || z("iPad") || z("iPod"))) return xe(/Version\/([0-9.]+)/);
    if(se || te) {
      var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(y);
      if(a) return a[1] + "." + a[2]
    } else if(ue) return (a = xe(/Android\s+([0-9.]+)/)) ? a : xe(/Version\/([0-9.]+)/);
    return ""
  })();
  var ye = function (a, b) {
    if(da(a)) b && (a = p(a, b));
    else if(a && "function" == typeof a.handleEvent) a = p(a.handleEvent, a);
    else throw Error("Invalid listener argument");
    2147483647 < Number(50) || k.setTimeout(a, 50)
  };
  var Be = function (a, b, c) {
      u(a, "Soy template may not be null.");
      b = a(b || ze, void 0, void 0);
      c = Nb((c || Hb())
        .a, "DIV");
      if(n(b))
        if(b instanceof ce) {
          if(b.ea !== ae) throw Error("Sanitized content was not of kind HTML.");
          a = b.toString();
          b = b.ma;
          var d = new $a(Ya, "Soy SanitizedContent of kind HTML produces SafeHtml-contract-compliant value.");
          qa(ab(d), "must provide justification");
          u(!/^[\s\xa0]*$/.test(ab(d)), "must provide non-empty justification");
          a = db(a, b || null)
        } else pa("Soy template output is unsafe for use as HTML: " +
          b), a = eb("zSoyz");
      else a = eb(String(b));
      b = a.oa();
      d = b.match(Ae);
      u(!d, "This template starts with a %s, which cannot be a child of a <div>, as required by soy internals. Consider using goog.soy.renderElement instead.\nTemplate output: %s", d && d[0], b);
      if(gb())
        for(; c.lastChild;) c.removeChild(c.lastChild);
      c.innerHTML = cb(a);
      1 == c.childNodes.length && (a = c.firstChild, 1 == a.nodeType && (c = a));
      return c
    }
    , Ae = /^<(body|caption|col|colgroup|head|html|tr|td|th|tbody|thead|tfoot)>/i
    , ze = {};
  var X = function (a, b, c, d) {
    V.call(this, a, Ce.W(), b);
    this.N = c || 0;
    this.ka = d || 0;
    this.Sa = !1
  };
  r(X, V);
  X.prototype.setEnabled = function (a) {
    this.a() != a && (X.h.setEnabled.call(this, a), De(this))
  };
  X.prototype.ba = function (a) {
    X.h.ba.call(this, a);
    Ee(this, !1)
  };
  X.prototype.P = function (a) {
    X.h.P.call(this, a);
    this.a() && Ee(this, !0)
  };
  X.prototype.aa = function (a) {
    X.h.aa.call(this, a);
    this.a() && Ee(this, !0)
  };
  var Ee = function (a, b) {
      a.f() && (a = a.f(), b ? md(a, "jfk-button-clear-outline") : od(a, "jfk-button-clear-outline"))
    }
    , De = function (a) {
      a.f() && Fe(a.b, a)
    }
    , Ce = function () {
      this.G = this.l() + "-standard";
      this.b = this.l() + "-action";
      this.C = this.l() + "-primary";
      this.i = this.l() + "-default";
      this.j = this.l() + "-flat";
      this.u = this.l() + "-narrow";
      this.m = this.l() + "-mini";
      this.g = this.l() + "-contrast"
    };
  r(Ce, Bd);
  aa(Ce);
  g = Ce.prototype;
  g.U = function (a, b, c) {
    a && c.N != a && (c.N = a, De(c));
    b && c.ka != b && (c.ka = b, De(c))
  };
  g.l = function () {
    return "jfk-button"
  };
  g.X = function (a) {
    ta(a, X, "Button is expected to be instance of jfk.Button");
    var b = a.g
      , c = Be(qe, {
        disabled: !a.a()
        , checked: a.K()
        , style: a.N
        , title: a.R
        , wb: a.Sa
        , value: a.I()
        , width: a.ka
      }, b);
    b.ib(c, a.getContent());
    this.D(a, c);
    return c
  };
  g.D = function (a, b) {
    Ce.h.D.call(this, a, b);
    this.c || (this.c = Va(this.G, q(this.U, 0, null), this.b, q(this.U, 2, null), this.C, q(this.U, 3, null), this.i, q(this.U, 1, null), this.j, q(this.U, 4, null), this.m, q(this.U, 5, null), this.g, q(this.U, 6, null), this.u, q(this.U, null, 1)));
    for(var c = jd(b), d = 0; d < c.length; ++d) {
      var e = this.c[c[d]];
      e && e(a)
    }
    if(c = b.getAttribute("data-tooltip")) a.R = c, a.Sa = !0;
    return b
  };
  g.I = function (a) {
    return a.getAttribute("value") || ""
  };
  g.Ea = function (a, b) {
    a && a.setAttribute("value", b)
  };
  var Fe = function (a, b) {
    function c(h, m) {
      (h ? d : e)
      .push(m)
    }
    u(b.f(), "Button element must already exist when updating style.");
    var d = []
      , e = []
      , f = b.N;
    c(0 == f, a.G);
    c(2 == f, a.b);
    c(3 == f, a.C);
    c(4 == f, a.j);
    c(5 == f, a.m);
    c(1 == f, a.i);
    c(6 == f, a.g);
    c(1 == b.ka, a.u);
    c(!b.a(), a.l() + "-disabled");
    pd(b.f(), e);
    nd(b.f(), d)
  };
  var S = function () {};
  r(S, Q);
  aa(S);
  S.prototype.X = function (a) {
    var b = a.g.pa("SPAN", td(this, a)
      .join(" "));
    Ge(this, b, a.m);
    return b
  };
  S.prototype.D = function (a, b) {
    b = S.h.D.call(this, a, b);
    u(b);
    var c = jd(b)
      , d = !1;
    x(c, He(this, null)) ? d = null : x(c, He(this, !0)) ? d = !0 : x(c, He(this, !1)) && (d = !1);
    a.m = d;
    u(b, "The element cannot be null.");
    jc(b, "checked", null == d ? "mixed" : 1 == d ? "true" : "false");
    return b
  };
  S.prototype.ia = function () {
    return "checkbox"
  };
  var Ge = function (a, b, c) {
    if(b) {
      u(b);
      var d = He(a, c);
      u(d);
      u(b);
      ld(b, d) || (Qa(Ie, function (e) {
        e = He(this, e);
        u(b);
        e == d ? md(b, e) : od(b, e)
      }, a), jc(b, "checked", null == c ? "mixed" : 1 == c ? "true" : "false"))
    }
  };
  S.prototype.l = function () {
    return "goog-checkbox"
  };
  var He = function (a, b) {
    a = a.l();
    if(1 == b) return a + "-checked";
    if(0 == b) return a + "-unchecked";
    if(null == b) return a + "-undetermined";
    throw Error("Invalid checkbox state: " + b);
  };
  var Je = function (a, b, c) {
    c = c || S.W();
    T.call(this, null, c, b);
    this.m = void 0 !== a ? a : !1
  };
  r(Je, T);
  var Ie = {
    fb: !0
    , pd: !1
    , qd: null
  };
  g = Je.prototype;
  g.B = null;
  g.K = function () {
    return 1 == this.m
  };
  g.S = function (a) {
    a != this.m && (this.m = a, Ge(this.b, this.f(), this.m))
  };
  g.J = function () {
    Je.h.J.call(this);
    if(this.ra) {
      var a = ed(this);
      this.B && a.listen(this.B, "click", this.Ha)
        .listen(this.B, "mouseover", this.Ja)
        .listen(this.B, "mouseout", this.Ia)
        .listen(this.B, "mousedown", this.P)
        .listen(this.B, "mouseup", this.aa);
      a.listen(this.f(), "click", this.Ha)
    }
    a = cd(this);
    var b;
    if(b = this.B && a != this.B) b = a.getAttribute(ic("label")), b = /^[\s\xa0]*$/.test(null == b || void 0 == b ? "" : String(b));
    if(b) {
      if(!this.B.id) {
        b = this.B;
        var c = (this.da || (this.da = ":" + (this.hb.a++)
          .toString(36))) + ".lbl";
        b.id = c
      }
      jc(a
        , "labelledby", this.B.id)
    }
  };
  g.Ha = function (a) {
    a.j();
    var b = this.m ? "uncheck" : "check";
    this.a() && !a.target.href && this.A(b) && (a.i(), this.S(this.m ? !1 : !0), this.A("change"))
  };
  g.$ = function (a) {
    32 == a.a && (this.O(a), this.Ha(a));
    return !1
  };
  Cd("goog-checkbox", function () {
    return new Je
  });
  var Ke = function (a) {
    a = a || {};
    var b = a.attributes
      , c = a.Va
      , d = a.checked
      , e = a.disabled
      , f = a.id
      , h = a.ub
      , m = a.vb
      , G = a.vd
      , w = a.wd;
    a = m ? " " + W("jfk-checkbox-undetermined") : d ? " " + W("jfk-checkbox-checked") : " " + W("jfk-checkbox-unchecked");
    d = m ? "mixed" : d ? "true" : "false";
    G = w ? ' aria-labelledby="' + W(w) + '"' : G ? ' aria-label="' + W(G) + '"' : "";
    return he('<span class="' + W("jfk-checkbox") + " " + W("goog-inline-block") + a + (e ? " " + W("jfk-checkbox-disabled") : "") + (c ? " " + W(c) : "") + '" role="checkbox" aria-checked="' + d + '"' + G + (f ? ' id="' + W(f) + '"' : "") +
      (e ? ' aria-disabled="true" tabindex="-1"' : ' tabindex="' + (h ? W(h) : "0") + '"') + (b ? " " + oe(b) : "") + ' dir="ltr"><div class="' + W("jfk-checkbox-checkmark") + '" role="presentation"></div></span>')
  };
  Ke.a = "jfk.templates.checkbox.main";
  var Y = function (a, b) {
    var c = rd();
    Je.call(this, a, b, c);
    Wd(this, 4, !0)
  };
  r(Y, Je);
  Y.prototype.ya = function () {
    this.c = Be(Ke, {
      checked: this.K()
      , disabled: !this.a()
      , vb: null == this.m
    }, this.g)
  };
  Y.prototype.na = function (a) {
    Y.h.na.call(this, a);
    md(a, "goog-inline-block");
    this.f()
      .dir = "ltr";
    dd(this) || (a = this.g.pa("DIV", "jfk-checkbox-checkmark"), this.f()
      .appendChild(a));
    a = dd(this);
    u(a, "Expected element in component with class: %s", "jfk-checkbox-checkmark");
    hc(a, "presentation")
  };
  Y.prototype.ba = function (a) {
    Y.h.ba.call(this, a);
    Le(this, !1)
  };
  Y.prototype.P = function (a) {
    Y.h.P.call(this, a);
    this.a() && Le(this, !0)
  };
  var Le = function (a, b) {
    a.f() && (a = a.f(), b ? md(a, "jfk-checkbox-clearOutline") : od(a, "jfk-checkbox-clearOutline"))
  };
  var Me = function (a) {
    a = a || {};
    var b = a.attributes
      , c = a.checked
      , d = a.Va
      , e = a.disabled
      , f = a.id
      , h = a.label
      , m = a.name;
    a = a.value;
    return he('<div class="' + W("jfk-radiobutton") + (c ? " " + W("jfk-radiobutton-checked") : "") + (e ? " " + W("jfk-radiobutton-disabled") : "") + (d ? " " + W(d) : "") + '"' + (m ? ' data-name="' + W(m) + '"' : "") + (a ? ' data-value="' + W(a) + '"' : "") + (f ? ' id="' + W(f) + '"' : "") + (b ? " " + oe(b) : "") + ' role="radio"><span class="' + W("jfk-radiobutton-radio") + '"></span><span class="' + W("jfk-radiobutton-label") + '">' + (h ? ie(h) : "") + "</span></div>")
  };
  Me.a = "jfk.templates.radiobutton.strict";
  var Z = function (a, b, c, d) {
    T.call(this, null, Ne.W(), a);
    this.N = c || "";
    this.Qa = d || "";
    Wd(this, 16, !0);
    this.V &= -17;
    b && Pe(this, b)
  };
  r(Z, T);
  Z.prototype.O = function (a) {
    this.S(!0);
    return Z.h.O.call(this, a)
  };
  Z.prototype.$ = function (a) {
    switch (a.a) {
    case 38:
    case 37:
      return this.A(a.ctrlKey ? "b" : "d"), !0;
    case 40:
    case 39:
      return this.A(a.ctrlKey ? "a" : "c"), !0;
    case 32:
      return this.O(a);
    case 9:
      return this.A(a.shiftKey ? "g" : "f"), !1
    }
    return Z.h.$.call(this, a)
  };
  Z.prototype.I = function () {
    return this.N
  };
  var Qe = function (a, b) {
    a.Qa = b;
    a.f() && a.f()
      .setAttribute("data-name", b)
  };
  Z.prototype.S = function (a) {
    Z.h.S.call(this, a)
  };
  Z.prototype.setEnabled = function (a) {
    Z.h.setEnabled.call(this, a);
    this.A("e")
  };
  var Pe = function (a, b) {
      a.Ra = b;
      a.f() && (b = a.Ra, a = a.b.ja(a.f()), u(a), Qb(a), Pb(a, b))
    }
    , Ne = function () {};
  r(Ne, Q);
  aa(Ne);
  g = Ne.prototype;
  g.X = function (a) {
    var b = Be(Me, {
      checked: a.K()
      , disabled: !a.a()
      , name: a.Qa
      , value: a.I()
    }, a.g);
    if(a = a.Ra) {
      var c = this.ja(b);
      u(c);
      Qb(c);
      Pb(c, a)
    }
    return b
  };
  g.D = function (a, b) {
    Ne.h.D.call(this, a, b);
    var c = b.getAttribute("data-value");
    if(c) {
      a.N = c;
      var d = a.f();
      d && d.setAttribute("data-value", c)
    }(c = b.getAttribute("data-name")) && Qe(a, c);
    c = this.ja(b);
    u(c);
    c.firstChild ? Pe(a, c.firstChild.nextSibling ? Aa(c.childNodes) : c.firstChild) : Pe(a, null);
    return b
  };
  g.ia = function () {
    return "radio"
  };
  g.ja = function (a) {
    return Ib(this.l() + "-label", a)
  };
  g.l = function () {
    return "jfk-radiobutton"
  };
  var Se = function (a) {
    O.call(this);
    this.a = [];
    Re(this, a)
  };
  r(Se, O);
  Se.prototype.b = null;
  Se.prototype.c = null;
  var Re = function (a, b) {
    b && (v(b, function (c) {
      Te(this, c, !1)
    }, a), Ba(a.a, b))
  };
  Se.prototype.clear = function () {
    var a = this.a;
    if(!Array.isArray(a))
      for(var b = a.length - 1; 0 <= b; b--) delete a[b];
    a.length = 0;
    this.b = null
  };
  Se.prototype.o = function () {
    Se.h.o.call(this);
    delete this.a;
    this.b = null
  };
  var Te = function (a, b, c) {
    b && ("function" == typeof a.c ? a.c(b, c) : "function" == typeof b.Oa && b.Oa(c))
  };
  var Ve = function (a, b) {
    O.call(this);
    this.g = b || "";
    this.a = new Se;
    lc(this, q(mc, this.a));
    this.b = new N(this);
    lc(this, q(mc, this.b));
    this.a.c = Ue;
    this.b.listen(this.a, "select", q(this.A, "change"));
    this.b.listen(this, "a", this.kb);
    this.b.listen(this, "b", this.lb);
    this.b.listen(this, "c", this.mb);
    this.b.listen(this, "d", this.rb);
    this.b.listen(this, "e", this.sa);
    this.b.listen(this, "f", q(this.ab, !1));
    this.b.listen(this, "g", q(this.ab, !0));
    a && v(a, this.c, this)
  };
  r(Ve, O);
  Ve.prototype.c = function (a) {
    u(null != a);
    this.b.listen(a, "action", this.jb);
    a.Na(this);
    Qe(a, this.g);
    var b = a.K()
      , c = this.a
      , d = c.a.length;
    a && (Te(c, a, !1), Da(c.a, d, 0, a));
    b && We(this, a);
    a.f() && this.sa()
  };
  var We = function (a, b) {
      var c = a.a;
      b != c.b && (Te(c, c.b, !1), c.b = b, Te(c, b, !0));
      c.A("select");
      a.sa()
    }
    , Xe = function (a) {
      return (a = a.a.b) ? a.I() : null
    }
    , Ye = function (a, b, c) {
      var d = a.a.a[b] || null;
      c && We(a, d);
      v(Aa(a.a.a), function (e) {
        e.f() && Vb(e.f(), d == e)
      });
      try {
        d.f()
          .focus()
      } catch (e) {}
    }
    , $e = function (a, b, c, d) {
      c = Ze(a, b, c); - 1 != c && a.a.a[c] && (Vb(b.f(), !1), Ye(a, c, d))
    }
    , Ze = function (a, b, c) {
      var d = a.a.a.length;
      b = b ? ua(a.a.a, b) : -1;
      for(var e = 1; e <= d; e++) {
        var f = (b + c * e) % d;
        f = 0 > f * d ? f + d : f;
        if((a.a.a[f] || null)
          .a()) return f
      }
      return -1
    };
  g = Ve.prototype;
  g.rb = function (a) {
    a = a.target;
    u(a);
    $e(this, a, -1, !0)
  };
  g.mb = function (a) {
    a = a.target;
    u(a);
    $e(this, a, 1, !0)
  };
  g.lb = function (a) {
    a = a.target;
    u(a);
    $e(this, a, -1, !1)
  };
  g.kb = function (a) {
    a = a.target;
    u(a);
    $e(this, a, 1, !1)
  };
  g.ab = function (a, b) {
    b = this.sa(b);
    try {
      var c = b[a ? 0 : 1];
      c && c.f()
        .focus()
    } catch (d) {}
  };
  g.sa = function () {
    var a = this.a.b
      , b = this.a.a[0] || null
      , c = a && a.a()
      , d = c ? a : b;
    u(d, "Must have at least one button in the group");
    d.a() || (a = Ze(this, d, 1), d = -1 != a ? this.a.a[a] || null : null);
    var e = d;
    d && !c && (a = Ze(this, d, -1), e = -1 != a ? this.a.a[a] || null : null);
    v(Aa(this.a.a), function (f) {
      f.f() && Vb(f.f(), d == f || e == f)
    });
    return [d, e]
  };
  g.jb = function (a) {
    a = a.target;
    We(this, a);
    try {
      a.f()
        .focus()
    } catch (b) {}
  };
  g.o = function () {
    v(Aa(this.a.a), function (a) {
      mc(a)
    });
    Ve.h.o.call(this)
  };
  var Ue = function (a, b) {
    a.S(b);
    a.f() && Vb(a.f(), b)
  };
  var bf = function () {
    this.a = new ac;
    this.j = document.getElementById("targetLangSel");
    af();
    this.T = new X;
    gd(this.T, document.getElementById("saveBtn"));
    this.R = new X;
    gd(this.R, document.getElementById("resetBtn"));
    this.m = document.getElementById("saveStatus");
    this.G = new Z(void 0, t("MSG_OPTIONS_ICON_DESC"), "1");
    this.u = new Z(void 0, t("MSG_OPTIONS_POPUP_DESC"), "2");
    this.H = new Z(void 0, t("MSG_OPTIONS_NONE_DESC"), "0");
    fd(this.G, document.getElementById("popup-option-content"));
    if(!bc) {
      this.g = Mb("DIV", "popup-option-ai");
      document.getElementById("popup-option-content")
        .appendChild(this.g);
      this.c = new Y;
      this.i = Mb("SPAN", "popup-option-ai-lbl");
      J(this.i, t("MSG_OPTIONS_ALWAYS_SHOW_ICON"));
      var a = this.c
        , b = this.i;
      if(a.F) {
        var c = !!(a.s & 32);
        a.ha();
        a.B = b;
        a.J();
        c && cd(a)
          .focus()
      } else a.B = b;
      fd(this.c, this.g);
      this.g.appendChild(this.i)
    }
    fd(this.u, document.getElementById("popup-option-content"));
    a = Mb("DIV", "popup-option-tip", t("MSG_OPTIONS_POPUP_TIP"));
    document.getElementById("popup-option-content")
      .appendChild(a);
    fd(this.H, document.getElementById("popup-option-content"));
    a = Mb("DIV", "popup-option-tip", t("MSG_OPTIONS_NONE_TIP"));
    document.getElementById("popup-option-content")
      .appendChild(a);
    this.b = new Ve([this.G, this.u, this.H])
  };
  bf.prototype.C = function () {
    if(this.a.loaded) {
      af();
      cf(this);
      for(var a = this.b.a.a.length, b = 0; b < a; ++b) {
        var c = this.b.a.a[b] || null;
        if(c.I() == this.a.b) {
          We(this.b, c);
          break
        }
      }
      this.j.addEventListener("change", p(this.N, this));
      M(this.b, "change", this.da, !1, this);
      bc || (this.c.S(!this.a.c), bc || this.c.setEnabled("1" == Xe(this.b)), M(this.c, "change", this.ca, !1, this));
      M(this.T, "action", this.Y, !1, this);
      M(this.R, "action", function () {
        window.history.go(0)
      })
    } else ye(this.C, this)
  };
  var cf = function (a) {
    var b = 0;
    a: {
      var c = a.a.i;
      break a;
      throw Error("Invalid input for getLangList()");
    }
    var d = a.a;
    if("" != d.a) d = d.a;
    else a: {
      for(var e = 0; e < d.g.length; e++) {
        var f = ka(d.g[e]);
        if(d.i[f]) {
          d = f;
          break a
        }
      }
      d = "en"
    }
    d = d || "";
    for(var h in c) e = document.createElement("option"), e.value = h, e.text = c[h], e.a = b++, a.j.appendChild(e), h == d && (e.selected = !0)
  };
  bf.prototype.N = function () {
    this.a.a = this.j.value
  };
  bf.prototype.da = function () {
    bc || this.c.setEnabled("1" == Xe(this.b));
    if(null != Xe(this.b)) {
      var a = Xe(this.b);
      this.a.b = a
    }
  };
  bf.prototype.ca = function () {
    this.a.c = !this.c.K()
  };
  bf.prototype.Y = function () {
    dc(this.a);
    this.m.style.display = "";
    this.m.style.setProperty("-webkit-transition", "opacity 0.4s ease-out");
    this.m.style.opacity = 1;
    window.setTimeout(function () {
      document.getElementById("saveStatus")
        .style.opacity = 0
    }, 1500)
  };
  var af = function () {
    J(I(document, "options-page-title"), t("MSG_OPTIONS_PAGE_TITLE"));
    J(I(document, "options-title-heading"), t("MSG_OPTIONS_TITLE"));
    J(I(document, "lang-option"), t("MSG_OPTIONS_LANG"));
    J(I(document, "popup-option"), t("MSG_OPTIONS_POPUP"));
    J(I(document, "popup-option-title"), t("MSG_OPTIONS_POPUP_TITLE"));
    J(I(document, "saveBtn"), t("MSG_OPTIONS_SAVE"));
    J(I(document, "resetBtn"), t("MSG_OPTIONS_RESET"));
    J(I(document, "saveStatus"), t("MSG_OPTIONS_SAVED_STATUS"));
    J(I(document, "footer-homepage"), t("MSG_OPTIONS_FOOTER_HOMEPAGE"));
    J(I(document, "footer-privacy"), t("MSG_OPTIONS_FOOTER_PRIVACY"))
  };
  document.addEventListener("DOMContentLoaded", function () {
    (new bf)
    .C()
  });
})();
