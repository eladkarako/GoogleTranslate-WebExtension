/* Copyright 2014 Google */
(function () {
  /*

   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  var h, aa = aa || {}
    , n = this || self
    , p = function () {}
    , ba = function (a) {
      a.ab = void 0;
      a.K = function () {
        return a.ab ? a.ab : a.ab = new a
      }
    }
    , r = function (a) {
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
      var b = r(a);
      return "array" == b || "object" == b && "number" == typeof a.length
    }
    , ea = function (a) {
      return "function" == r(a)
    }
    , t = function (a) {
      var b = typeof a;
      return "object" == b && null != a || "function" == b
    }
    , ia = function (a) {
      return Object.prototype.hasOwnProperty.call(a, fa) && a[fa] || (a[fa] = ++ha)
    }
    , fa =
    "closure_uid_" + (1E9 * Math.random() >>> 0)
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
    , u = function (a, b, c) {
      Function.prototype.bind && -1 != Function.prototype.bind.toString()
        .indexOf("native code") ? u = ja : u = ka;
      return u.apply(null
        , arguments)
    }
    , v = function (a, b) {
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
    , w = function (a, b) {
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
  w(ma, Error);
  ma.prototype.name = "CustomError";
  var na;
  var oa = function (a, b) {
    a = a.split("%s");
    for(var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
    ma.call(this, c + a[d])
  };
  w(oa, ma);
  oa.prototype.name = "AssertionError";
  var pa = function (a, b, c, d) {
      var e = "Assertion failed";
      if(c) {
        e += ": " + c;
        var f = d
      } else a && (e += ": " + a, f = b);
      throw new oa("" + e, f || []);
    }
    , x = function (a, b, c) {
      a || pa("", null, b, Array.prototype.slice.call(arguments, 2));
      return a
    }
    , y = function (a, b) {
      throw new oa("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
    }
    , qa = function (a, b, c) {
      "number" !== typeof a && pa("Expected number but got %s: %s.", [r(a), a], b, Array.prototype.slice.call(arguments, 2));
      return a
    }
    , ra = function (a, b, c) {
      "string" !== typeof a && pa("Expected string but got %s: %s.", [r(a), a], b, Array.prototype.slice.call(arguments, 2));
      return a
    }
    , sa = function (a, b, c) {
      t(a) || pa("Expected object but got %s: %s.", [r(a), a], b, Array.prototype.slice.call(arguments, 2))
    }
    , ta = function (a, b, c) {
      t(a) && 1 == a.nodeType || pa("Expected Element but got %s: %s.", [r(a), a], b, Array.prototype.slice.call(arguments, 2))
    }
    , va = function (a, b, c, d) {
      a instanceof b || pa("Expected instanceof %s but got %s.", [ua(b), ua(a)], c, Array.prototype.slice.call(arguments, 3));
      return a
    }
    , ua = function (a) {
      return a instanceof Function ? a.displayName ||
        a.name || "unknown type name" : a instanceof Object ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : null === a ? "null" : typeof a
    };
  var wa = Array.prototype.indexOf ? function (a, b) {
      x(null != a.length);
      return Array.prototype.indexOf.call(a, b, void 0)
    } : function (a, b) {
      if("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
      for(var c = 0; c < a.length; c++)
        if(c in a && a[c] === b) return c;
      return -1
    }
    , A = Array.prototype.forEach ? function (a, b, c) {
      x(null != a.length);
      Array.prototype.forEach.call(a, b, c)
    } : function (a, b, c) {
      for(var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
    }
    , xa = Array.prototype.filter ?
    function (a, b) {
      x(null != a.length);
      return Array.prototype.filter.call(a, b, void 0)
    } : function (a, b) {
      for(var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
        if(g in f) {
          var l = f[g];
          b.call(void 0, l, g, a) && (d[e++] = l)
        }
      return d
    }
    , ya = Array.prototype.map ? function (a, b) {
      x(null != a.length);
      return Array.prototype.map.call(a, b, void 0)
    } : function (a, b) {
      for(var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
      return d
    }
    , za = Array.prototype.some ? function (a
      , b) {
      x(null != a.length);
      return Array.prototype.some.call(a, b, void 0)
    } : function (a, b) {
      for(var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
        if(e in d && b.call(void 0, d[e], e, a)) return !0;
      return !1
    }
    , Aa = Array.prototype.every ? function (a, b) {
      x(null != a.length);
      return Array.prototype.every.call(a, b, void 0)
    } : function (a, b) {
      for(var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
        if(e in d && !b.call(void 0, d[e], e, a)) return !1;
      return !0
    }
    , Ca = function (a) {
      a: {
        var b = Ba;
        for(var c = a.length, d = "string" ===
            typeof a ? a.split("") : a, e = 0; e < c; e++)
          if(e in d && b.call(void 0, d[e], e, a)) {
            b = e;
            break a
          }
        b = -1
      }
      return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }
    , Da = function (a, b) {
      return 0 <= wa(a, b)
    }
    , Ea = function (a, b) {
      b = wa(a, b);
      var c;
      if(c = 0 <= b) x(null != a.length), Array.prototype.splice.call(a, b, 1);
      return c
    }
    , Fa = function (a) {
      return Array.prototype.concat.apply([], arguments)
    }
    , Ga = function (a) {
      var b = a.length;
      if(0 < b) {
        for(var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
        return c
      }
      return []
    };
  var Ha = function (a) {
    var b = !1
      , c;
    return function () {
      b || (c = a(), b = !0);
      return c
    }
  };
  var Ia = function (a, b, c) {
      for(var d in a) b.call(c, a[d], d, a)
    }
    , Ja = function (a, b) {
      for(var c in a)
        if(b.call(void 0, a[c], c, a)) return !0;
      return !1
    }
    , Ka = function (a, b) {
      for(var c in a)
        if(a[c] == b) return !0;
      return !1
    }
    , La = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ")
    , Ma = function (a, b) {
      for(var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for(c in d) a[c] = d[c];
        for(var f = 0; f < La.length; f++) c = La[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
      }
    }
    , Na = function (a) {
      var b =
        arguments.length;
      if(1 == b && Array.isArray(arguments[0])) return Na.apply(null, arguments[0]);
      if(b % 2) throw Error("Uneven number of arguments");
      for(var c = {}, d = 0; d < b; d += 2) c[arguments[d]] = arguments[d + 1];
      return c
    };
  var Oa = {
    area: !0
    , base: !0
    , br: !0
    , col: !0
    , command: !0
    , embed: !0
    , hr: !0
    , img: !0
    , input: !0
    , keygen: !0
    , link: !0
    , meta: !0
    , param: !0
    , source: !0
    , track: !0
    , wbr: !0
  };
  var Ra = function (a, b) {
    this.a = a === Pa && b || "";
    this.b = Qa
  };
  Ra.prototype.ba = !0;
  Ra.prototype.R = function () {
    return this.a
  };
  Ra.prototype.toString = function () {
    return "Const{" + this.a + "}"
  };
  var Sa = function (a) {
      if(a instanceof Ra && a.constructor === Ra && a.b === Qa) return a.a;
      y("expected object of type Const, got '" + a + "'");
      return "type_error:Const"
    }
    , Qa = {}
    , Pa = {};
  var Va = function (a, b) {
    this.a = a === Ta && b || "";
    this.b = Ua
  };
  h = Va.prototype;
  h.ba = !0;
  h.R = function () {
    return this.a.toString()
  };
  h.$a = !0;
  h.ha = function () {
    return 1
  };
  h.toString = function () {
    return "TrustedResourceUrl{" + this.a + "}"
  };
  var Ua = {}
    , Ta = {};
  var Wa = String.prototype.trim ? function (a) {
      return a.trim()
    } : function (a) {
      return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }
    , db = function (a, b) {
      if(b) a = a.replace(Xa, "&amp;")
        .replace(Ya, "&lt;")
        .replace(Za, "&gt;")
        .replace($a, "&quot;")
        .replace(ab, "&#39;")
        .replace(bb, "&#0;");
      else {
        if(!cb.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Xa, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Ya, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Za, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace($a, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(ab
          , "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(bb, "&#0;"))
      }
      return a
    }
    , Xa = /&/g
    , Ya = /</g
    , Za = />/g
    , $a = /"/g
    , ab = /'/g
    , bb = /\x00/g
    , cb = /[\x00&<>"']/
    , fb = function (a, b) {
      var c = 0;
      a = Wa(String(a))
        .split(".");
      b = Wa(String(b))
        .split(".");
      for(var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
        var f = a[e] || ""
          , g = b[e] || "";
        do {
          f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
          g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
          if(0 == f[0].length && 0 == g[0].length) break;
          c = eb(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) ||
            eb(0 == f[2].length, 0 == g[2].length) || eb(f[2], g[2]);
          f = f[3];
          g = g[3]
        } while(0 == c)
      }
      return c
    }
    , eb = function (a, b) {
      return a < b ? -1 : a > b ? 1 : 0
    };
  var ib = function (a, b) {
    this.a = a === gb && b || "";
    this.b = hb
  };
  h = ib.prototype;
  h.ba = !0;
  h.R = function () {
    return this.a.toString()
  };
  h.$a = !0;
  h.ha = function () {
    return 1
  };
  h.toString = function () {
    return "SafeUrl{" + this.a + "}"
  };
  var jb = function (a) {
      if(a instanceof ib && a.constructor === ib && a.b === hb) return a.a;
      y("expected object of type SafeUrl, got '" + a + "' of type " + r(a));
      return "type_error:SafeUrl"
    }
    , kb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i
    , lb = function (a) {
      if(a instanceof ib) return a;
      a = "object" == typeof a && a.ba ? a.R() : String(a);
      kb.test(a) || (a = "about:invalid#zClosurez");
      return new ib(gb, a)
    }
    , hb = {}
    , gb = {};
  var nb = function () {
    this.a = "";
    this.b = mb
  };
  nb.prototype.ba = !0;
  var mb = {};
  nb.prototype.R = function () {
    return this.a
  };
  nb.prototype.toString = function () {
    return "SafeStyle{" + this.a + "}"
  };
  var ob = function (a) {
      var b = new nb;
      b.a = a;
      return b
    }
    , pb = ob("")
    , rb = function (a) {
      if(a instanceof ib) return 'url("' + jb(a)
        .replace(/</g, "%3c")
        .replace(/[\\"]/g, "\\$&") + '")';
      a = a instanceof Ra ? Sa(a) : qb(String(a));
      if(/[{;}]/.test(a)) throw new oa("Value does not allow [{;}], got: %s.", [a]);
      return a
    }
    , qb = function (a) {
      var b = a.replace(sb, "$1")
        .replace(sb, "$1")
        .replace(tb, "url");
      if(ub.test(b)) {
        if(vb.test(a)) return y("String value disallows comments, got: " + a), "zClosurez";
        for(var c = b = !0, d = 0; d < a.length; d++) {
          var e = a.charAt(d);
          "'" == e && c ? b = !b : '"' == e && b && (c = !c)
        }
        if(!b || !c) return y("String value requires balanced quotes, got: " + a), "zClosurez";
        if(!wb(a)) return y("String value requires balanced square brackets and one identifier per pair of brackets, got: " + a), "zClosurez"
      } else return y("String value allows only [-,.\"'%_!# a-zA-Z0-9\\[\\]] and simple functions, got: " + a), "zClosurez";
      return xb(a)
    }
    , wb = function (a) {
      for(var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
        var e = a.charAt(d);
        if("]" == e) {
          if(b) return !1;
          b = !0
        } else if("[" == e) {
          if(!b) return !1;
          b = !1
        } else if(!b && !c.test(e)) return !1
      }
      return b
    }
    , ub = /^[-,."'%_!# a-zA-Z0-9\[\]]+$/
    , tb = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g
    , sb = /\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\], ]+\)/g
    , vb = /\/\*/
    , xb = function (a) {
      return a.replace(tb, function (b, c, d, e) {
        var f = "";
        d = d.replace(/^(['"])(.*)\1$/, function (g, l, k) {
          f = l;
          return k
        });
        b = lb(d)
          .R();
        return c + f + b + f + e
      })
    };
  var C;
  a: {
    var yb = n.navigator;
    if(yb) {
      var zb = yb.userAgent;
      if(zb) {
        C = zb;
        break a
      }
    }
    C = ""
  }
  var E = function (a) {
    return -1 != C.indexOf(a)
  };
  var Ab = function () {
      return E("Firefox") || E("FxiOS")
    }
    , Bb = function () {
      return (E("Chrome") || E("CriOS")) && !E("Edge")
    };
  var Db = function () {
    this.a = "";
    this.g = Cb;
    this.b = null
  };
  h = Db.prototype;
  h.$a = !0;
  h.ha = function () {
    return this.b
  };
  h.ba = !0;
  h.R = function () {
    return this.a.toString()
  };
  h.toString = function () {
    return "SafeHtml{" + this.a + "}"
  };
  var Eb = function (a) {
      if(a instanceof Db && a.constructor === Db && a.g === Cb) return a.a;
      y("expected object of type SafeHtml, got '" + a + "' of type " + r(a));
      return "type_error:SafeHtml"
    }
    , Gb = function (a) {
      if(a instanceof Db) return a;
      var b = "object" == typeof a
        , c = null;
      b && a.$a && (c = a.ha());
      return Fb(db(b && a.ba ? a.R() : String(a)), c)
    }
    , Hb = /^[a-zA-Z0-9-]+$/
    , Ib = {
      action: !0
      , cite: !0
      , data: !0
      , formaction: !0
      , href: !0
      , manifest: !0
      , poster: !0
      , src: !0
    }
    , Jb = {
      APPLET: !0
      , BASE: !0
      , EMBED: !0
      , IFRAME: !0
      , LINK: !0
      , MATH: !0
      , META: !0
      , OBJECT: !0
      , SCRIPT: !0
      , STYLE: !0
      , SVG: !0
      , TEMPLATE: !0
    }
    , Lb = function (a) {
      var b = Gb(Kb)
        , c = b.ha()
        , d = []
        , e = function (f) {
          Array.isArray(f) ? A(f, e) : (f = Gb(f), d.push(Eb(f)
            .toString()), f = f.ha(), 0 == c ? c = f : 0 != f && c != f && (c = null))
        };
      A(a, e);
      return Fb(d.join(Eb(b)
        .toString()), c)
    }
    , Mb = function (a) {
      return Lb(Array.prototype.slice.call(arguments))
    }
    , Cb = {}
    , Fb = function (a, b) {
      return Nb(a, b)
    }
    , Nb = function (a, b) {
      var c = new Db;
      c.a = a;
      c.b = b;
      return c
    };
  Nb("<!DOCTYPE html>", 0);
  var Kb = Nb("", 0);
  Nb("<br>", 0);
  var Ob = {
      MATH: !0
      , SCRIPT: !0
      , STYLE: !0
      , SVG: !0
      , TEMPLATE: !0
    }
    , Pb = Ha(function () {
      if("undefined" === typeof document) return !1;
      var a = document.createElement("div")
        , b = document.createElement("div");
      b.appendChild(document.createElement("div"));
      a.appendChild(b);
      if(!a.firstChild) return !1;
      b = a.firstChild.firstChild;
      a.innerHTML = Eb(Kb);
      return !b.parentElement
    })
    , Qb = function (a, b) {
      if(Pb())
        for(; a.lastChild;) a.removeChild(a.lastChild);
      a.innerHTML = Eb(b)
    }
    , Rb = function (a, b) {
      if(Ob[a.tagName.toUpperCase()]) throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of " +
        a.tagName + ".");
      Qb(a, b)
    };
  var Sb = function (a) {
      return a = db(a, void 0)
    }
    , Tb = function (a) {
      return String(a)
        .replace(/\-([a-z])/g, function (b, c) {
          return c.toUpperCase()
        })
    }
    , Ub = function (a) {
      return a.replace(/(^|[\s]+)([a-z])/g, function (b, c, d) {
        return c + d.toUpperCase()
      })
    };
  var Vb = function () {
      return E("iPhone") && !E("iPod") && !E("iPad")
    }
    , Wb = function () {
      return Vb() || E("iPad") || E("iPod")
    };
  var Xb = function (a) {
    Xb[" "](a);
    return a
  };
  Xb[" "] = p;
  var Yb = function (a, b) {
      try {
        return Xb(a[b]), !0
      } catch (c) {}
      return !1
    }
    , $b = function (a, b) {
      var c = Zb;
      return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    };
  var ac = E("Opera")
    , F = E("Trident") || E("MSIE")
    , bc = E("Edge")
    , cc = bc || F
    , G = E("Gecko") && !(-1 != C.toLowerCase()
      .indexOf("webkit") && !E("Edge")) && !(E("Trident") || E("MSIE")) && !E("Edge")
    , H = -1 != C.toLowerCase()
    .indexOf("webkit") && !E("Edge")
    , dc = H && E("Mobile")
    , I = E("Macintosh")
    , ec = E("Windows")
    , fc = E("Android")
    , gc = Vb()
    , hc = E("iPad")
    , ic = E("iPod")
    , jc = Wb()
    , kc = function () {
      var a = n.document;
      return a ? a.documentMode : void 0
    }
    , lc;
  a: {
    var mc = ""
      , nc = function () {
        var a = C;
        if(G) return /rv:([^\);]+)(\)|;)/.exec(a);
        if(bc) return /Edge\/([\d\.]+)/.exec(a);
        if(F) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if(H) return /WebKit\/(\S+)/.exec(a);
        if(ac) return /(?:Version)[ \/]?(\S+)/.exec(a)
      }();nc && (mc = nc ? nc[1] : "");
    if(F) {
      var oc = kc();
      if(null != oc && oc > parseFloat(mc)) {
        lc = String(oc);
        break a
      }
    }
    lc = mc
  }
  var pc = lc
    , Zb = {}
    , J = function (a) {
      return $b(a, function () {
        return 0 <= fb(pc, a)
      })
    }
    , rc = function (a) {
      return Number(qc) >= a
    }
    , sc;
  if(n.document && F) {
    var tc = kc();
    sc = tc ? tc : parseInt(pc, 10) || void 0
  } else sc = void 0;
  var qc = sc;
  var uc = Ab()
    , vc = Vb() || E("iPod")
    , wc = E("iPad")
    , xc = E("Android") && !(Bb() || Ab() || E("Opera") || E("Silk"))
    , yc = Bb()
    , zc = E("Safari") && !(Bb() || E("Coast") || E("Opera") || E("Edge") || E("Edg/") || E("OPR") || Ab() || E("Silk") || E("Android")) && !Wb();
  var Ac = function () {}
    , Bc = "function" == typeof Uint8Array
    , Ec = function (a, b, c) {
      a.b = null;
      b || (b = []);
      a.D = void 0;
      a.g = -1;
      a.a = b;
      a: {
        if(b = a.a.length) {
          --b;
          var d = a.a[b];
          if(!(null === d || "object" != typeof d || Array.isArray(d) || Bc && d instanceof Uint8Array)) {
            a.i = b - a.g;
            a.h = d;
            break a
          }
        }
        a.i = Number.MAX_VALUE
      }
      a.o = {};
      if(c)
        for(b = 0; b < c.length; b++) d = c[b], d < a.i ? (d += a.g, a.a[d] = a.a[d] || Cc) : (Dc(a), a.h[d] = a.h[d] || Cc)
    }
    , Cc = Object.freeze ? Object.freeze([]) : []
    , Dc = function (a) {
      var b = a.i + a.g;
      a.a[b] || (a.h = a.a[b] = {})
    }
    , L = function (a, b, c) {
      va(a, Ac);
      b < a.i ? a.a[b + a.g] = c : (Dc(a), a.h[b] = c);
      return a
    }
    , Fc = function (a) {
      if(a.b)
        for(var b in a.b) {
          var c = a.b[b];
          if("array" == r(c))
            for(var d = 0; d < c.length; d++) c[d] && c[d].na();
          else c && c.na()
        }
    };
  Ac.prototype.na = function () {
    Fc(this);
    return this.a
  };
  Ac.prototype.toString = function () {
    Fc(this);
    return this.a.toString()
  };
  var Gc = function (a) {
      return function () {
        return a
      }
    }
    , Hc = function (a, b) {
      for(var c = 0; c < b.length - 2; c += 3) {
        var d = b.charAt(c + 2);
        d = "a" <= d ? d.charCodeAt(0) - 87 : Number(d);
        d = "+" == b.charAt(c + 1) ? a >>> d : a << d;
        a = "+" == b.charAt(c) ? a + d & 4294967295 : a ^ d
      }
      return a
    }
    , Ic = null
    , Jc = function (a) {
      if(null !== Ic) var b = Ic;
      else {
        b = Gc(String.fromCharCode(84));
        var c = Gc(String.fromCharCode(75));
        b = [b(), b()];
        b[1] = c();
        b = (Ic = window[b.join(c())] || "") || ""
      }
      var d = Gc(String.fromCharCode(116));
      c = Gc(String.fromCharCode(107));
      d = [d(), d()];
      d[1] = c();
      c = "&" + d.join("") +
        "=";
      d = b.split(".");
      b = Number(d[0]) || 0;
      for(var e = [], f = 0, g = 0; g < a.length; g++) {
        var l = a.charCodeAt(g);
        128 > l ? e[f++] = l : (2048 > l ? e[f++] = l >> 6 | 192 : (55296 == (l & 64512) && g + 1 < a.length && 56320 == (a.charCodeAt(g + 1) & 64512) ? (l = 65536 + ((l & 1023) << 10) + (a.charCodeAt(++g) & 1023), e[f++] = l >> 18 | 240, e[f++] = l >> 12 & 63 | 128) : e[f++] = l >> 12 | 224, e[f++] = l >> 6 & 63 | 128), e[f++] = l & 63 | 128)
      }
      a = b;
      for(f = 0; f < e.length; f++) a += e[f], a = Hc(a, "+-a^+6");
      a = Hc(a, "+-3^+b+-f");
      a ^= Number(d[1]) || 0;
      0 > a && (a = (a & 2147483647) + 2147483648);
      a %= 1E6;
      return c + (a.toString() + "." +
        (a ^ b))
    };
  var Kc, Lc = {
    $b: "activedescendant"
    , ec: "atomic"
    , fc: "autocomplete"
    , ic: "busy"
    , lc: "checked"
    , mc: "colindex"
    , rc: "controls"
    , tc: "describedby"
    , DISABLED: "disabled"
    , xc: "dropeffect"
    , yc: "expanded"
    , zc: "flowto"
    , Bc: "grabbed"
    , Fc: "haspopup"
    , Hc: "hidden"
    , Jc: "invalid"
    , Kc: "label"
    , Lc: "labelledby"
    , Mc: "level"
    , Rc: "live"
    , fd: "multiline"
    , gd: "multiselectable"
    , ld: "orientation"
    , md: "owns"
    , nd: "posinset"
    , pd: "pressed"
    , td: "readonly"
    , vd: "relevant"
    , wd: "required"
    , Ad: "rowindex"
    , Cd: "selected"
    , Ed: "setsize"
    , Gd: "sort"
    , Td: "valuemax"
    , Ud: "valuemin"
    , Vd: "valuenow"
    , Wd: "valuetext"
  };
  var Mc = {
    ac: "alert"
    , bc: "alertdialog"
    , cc: "application"
    , dc: "article"
    , hc: "banner"
    , jc: "button"
    , kc: "checkbox"
    , nc: "columnheader"
    , oc: "combobox"
    , pc: "complementary"
    , qc: "contentinfo"
    , sc: "definition"
    , uc: "dialog"
    , vc: "directory"
    , wc: "document"
    , Ac: "form"
    , Cc: "grid"
    , Dc: "gridcell"
    , Ec: "group"
    , Gc: "heading"
    , Ic: "img"
    , Nc: "link"
    , Oc: "list"
    , Pc: "listbox"
    , Qc: "listitem"
    , Sc: "log"
    , Tc: "main"
    , Uc: "marquee"
    , Vc: "math"
    , Wc: "menu"
    , Xc: "menubar"
    , Yc: "menuitem"
    , Zc: "menuitemcheckbox"
    , $c: "menuitemradio"
    , hd: "navigation"
    , jd: "note"
    , kd: "option"
    , od: "presentation"
    , qd: "progressbar"
    , rd: "radio"
    , sd: "radiogroup"
    , ud: "region"
    , xd: "row"
    , yd: "rowgroup"
    , zd: "rowheader"
    , Bd: "scrollbar"
    , SEARCH: "search"
    , Dd: "separator"
    , Fd: "slider"
    , Hd: "spinbutton"
    , Id: "status"
    , TAB: "tab"
    , Jd: "tablist"
    , Kd: "tabpanel"
    , Ld: "textbox"
    , Md: "textinfo"
    , Nd: "timer"
    , Od: "toolbar"
    , Pd: "tooltip"
    , Qd: "tree"
    , Rd: "treegrid"
    , Sd: "treeitem"
  };
  var Nc = !F || rc(9)
    , Oc = !G && !F || F && rc(9) || G && J("1.9.1")
    , Pc = F && !J("9");
  var M = function (a, b) {
    this.a = void 0 !== a ? a : 0;
    this.b = void 0 !== b ? b : 0
  };
  M.prototype.toString = function () {
    return "(" + this.a + ", " + this.b + ")"
  };
  var Qc = function (a, b) {
    return new M(a.a - b.a, a.b - b.b)
  };
  M.prototype.ceil = function () {
    this.a = Math.ceil(this.a);
    this.b = Math.ceil(this.b);
    return this
  };
  M.prototype.floor = function () {
    this.a = Math.floor(this.a);
    this.b = Math.floor(this.b);
    return this
  };
  M.prototype.round = function () {
    this.a = Math.round(this.a);
    this.b = Math.round(this.b);
    return this
  };
  M.prototype.translate = function (a, b) {
    a instanceof M ? (this.a += a.a, this.b += a.b) : (this.a += Number(a), "number" === typeof b && (this.b += b));
    return this
  };
  var Rc = function (a, b) {
    this.width = a;
    this.height = b
  };
  h = Rc.prototype;
  h.toString = function () {
    return "(" + this.width + " x " + this.height + ")"
  };
  h.aspectRatio = function () {
    return this.width / this.height
  };
  h.ceil = function () {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
  };
  h.floor = function () {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
  };
  h.round = function () {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
  };
  var Tc = function (a) {
      return a ? new Sc(N(a)) : na || (na = new Sc)
    }
    , Uc = function (a, b) {
      return "string" === typeof b ? a.getElementById(b) : b
    }
    , Vc = function (a, b) {
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
              "function" == typeof g.split && Da(g.split(/\s+/), a) && (f[d++] = b)
            }
            f.length = d;
            a = f
          } else a = e;
          a = a[0] || null
        }
      }
      return a || null
    }
    , Xc = function (a, b) {
      Ia(b, function (c, d) {
        c && "object" == typeof c && c.ba && (c = c.R());
        "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : Wc.hasOwnProperty(d) ? a.setAttribute(Wc[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
      })
    }
    , Wc = {
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
    , $c = function (a) {
      var b = Yc(a);
      a = Zc(a);
      return F && J("10") && a.pageYOffset != b.scrollTop ? new M(b.scrollLeft, b.scrollTop) : new M(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    }
    , Yc = function (a) {
      return a.scrollingElement ? a.scrollingElement : !H && ad(a) ? a.documentElement : a.body || a.documentElement
    }
    , Zc = function (a) {
      return a.parentWindow ||
        a.defaultView
    }
    , cd = function (a, b, c, d) {
      function e(g) {
        g && b.appendChild("string" === typeof g ? a.createTextNode(g) : g)
      }
      for(; d < c.length; d++) {
        var f = c[d];
        !da(f) || t(f) && 0 < f.nodeType ? e(f) : A(bd(f) ? Ga(f) : f, e)
      }
    }
    , dd = function (a, b) {
      b = String(b);
      "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
      return a.createElement(b)
    }
    , ad = function (a) {
      return "CSS1Compat" == a.compatMode
    }
    , ed = function (a, b) {
      x(null != a && null != b, "goog.dom.appendChild expects non-null arguments");
      a.appendChild(b)
    }
    , fd = function (a) {
      a && a.parentNode && a.parentNode.removeChild(a)
    }
    , gd = function (a, b) {
      if(!a || !b) return !1;
      if(a.contains && 1 == b.nodeType) return a == b || a.contains(b);
      if("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
      for(; b && a != b;) b = b.parentNode;
      return b == a
    }
    , N = function (a) {
      x(a, "Node cannot be null or undefined.");
      return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }
    , hd = function (a, b) {
      x(null != a, "goog.dom.setTextContent expects a non-null value for node");
      if("textContent" in a) a.textContent = b;
      else if(3 == a.nodeType) a.data = String(b);
      else if(a.firstChild && 3 == a.firstChild.nodeType) {
        for(; a.lastChild != a.firstChild;) a.removeChild(x(a.lastChild));
        a.firstChild.data = String(b)
      } else {
        for(var c; c = a.firstChild;) a.removeChild(c);
        c = N(a);
        a.appendChild(c.createTextNode(String(b)))
      }
    }
    , id = {
      SCRIPT: 1
      , STYLE: 1
      , HEAD: 1
      , IFRAME: 1
      , OBJECT: 1
    }
    , jd = {
      IMG: " "
      , BR: "\n"
    }
    , kd = function (a, b) {
      b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute("tabIndex"))
    }
    , ld = function (a) {
      return F && !J("9") ? (a = a.getAttributeNode("tabindex"), null != a && a.specified) : a.hasAttribute("tabindex")
    }
    , md = function (a) {
      a = a.tabIndex;
      return "number" === typeof a && 0 <= a && 32768 > a
    }
    , od = function (a) {
      var b = [];
      nd(a, b, !1);
      return b.join("")
    }
    , nd = function (a, b, c) {
      if(!(a.nodeName in id))
        if(3 == a.nodeType) c ? b.push(String(a.nodeValue)
          .replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
        else if(a.nodeName in jd) b.push(jd[a.nodeName]);
      else
        for(a = a.firstChild; a;) nd(a, b, c), a = a.nextSibling
    }
    , bd = function (a) {
      if(a && "number" == typeof a.length) {
        if(t(a)) return "function" == typeof a.item || "string" == typeof a.item;
        if(ea(a)) return "function" ==
          typeof a.item
      }
      return !1
    }
    , Sc = function (a) {
      this.a = a || n.document || document
    };
  h = Sc.prototype;
  h.m = function (a) {
    return Uc(this.a, a)
  };
  h.nb = function (a, b, c) {
    var d = this.a
      , e = arguments
      , f = String(e[0])
      , g = e[1];
    if(!Nc && g && (g.name || g.type)) {
      f = ["<", f];
      g.name && f.push(' name="', Sb(g.name), '"');
      if(g.type) {
        f.push(' type="', Sb(g.type), '"');
        var l = {};
        Ma(l, g);
        delete l.type;
        g = l
      }
      f.push(">");
      f = f.join("")
    }
    f = dd(d, f);
    g && ("string" === typeof g ? f.className = g : Array.isArray(g) ? f.className = g.join(" ") : Xc(f, g));
    2 < e.length && cd(d, f, e, 2);
    return f
  };
  h.Jb = function (a, b) {
    cd(N(a), a, arguments, 1)
  };
  h.getChildren = function (a) {
    return Oc && void 0 != a.children ? a.children : xa(a.childNodes, function (b) {
      return 1 == b.nodeType
    })
  };
  h.contains = gd;
  var pd = function (a, b, c) {
    Array.isArray(c) && (c = c.join(" "));
    x(b, "ARIA attribute cannot be empty.");
    x(Ka(Lc, b), "No such ARIA attribute " + b);
    var d = "aria-" + b;
    "" === c || void 0 == c ? (Kc || (Kc = {
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
    }), c = Kc, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c)
  };
  var qd = function () {};
  ba(qd);
  var rd = function () {
    this.D = this.D;
    this.L = this.L
  };
  rd.prototype.D = !1;
  rd.prototype.V = function () {
    this.D || (this.D = !0, this.v())
  };
  var sd = function (a, b) {
    a.D ? b() : (a.L || (a.L = []), a.L.push(b))
  };
  rd.prototype.v = function () {
    if(this.L)
      for(; this.L.length;) this.L.shift()()
  };
  var td = function (a) {
    a && "function" == typeof a.V && a.V()
  };
  var ud = Object.freeze || function (a) {
    return a
  };
  var vd = !F || rc(9)
    , wd = !F || rc(9)
    , xd = F && !J("9")
    , yd = function () {
      if(!n.addEventListener || !Object.defineProperty) return !1;
      var a = !1
        , b = Object.defineProperty({}, "passive", {
          get: function () {
            a = !0
          }
        });
      try {
        n.addEventListener("test", p, b), n.removeEventListener("test", p, b)
      } catch (c) {}
      return a
    }();
  var zd = function (a, b) {
    this.type = a;
    this.a = this.target = b;
    this.defaultPrevented = this.g = !1
  };
  zd.prototype.h = function () {
    this.g = !0
  };
  zd.prototype.preventDefault = function () {
    this.defaultPrevented = !0
  };
  var Ad = {
    Ma: "mousedown"
    , Na: "mouseup"
    , ib: "mousecancel"
    , cd: "mousemove"
    , ed: "mouseover"
    , dd: "mouseout"
    , ad: "mouseenter"
    , bd: "mouseleave"
  };
  var O = function (a, b) {
    zd.call(this, a ? a.type : "");
    this.relatedTarget = this.a = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.key = "";
    this.keyCode = 0;
    this.i = this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.pointerId = 0;
    this.pointerType = "";
    this.b = null;
    if(a) {
      var c = this.type = a.type
        , d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
      this.target = a.target || a.srcElement;
      this.a = b;
      (b = a.relatedTarget) ? G && (Yb(b, "nodeName") || (b = null)): "mouseover" == c ?
        b = a.fromElement : "mouseout" == c && (b = a.toElement);
      this.relatedTarget = b;
      d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
      this.button = a.button;
      this.keyCode = a.keyCode || 0;
      this.key = a.key || "";
      this.ctrlKey = a.ctrlKey;
      this.altKey = a.altKey;
      this.shiftKey =
        a.shiftKey;
      this.metaKey = a.metaKey;
      this.i = I ? a.metaKey : a.ctrlKey;
      this.pointerId = a.pointerId || 0;
      this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Bd[a.pointerType] || "";
      this.b = a;
      a.defaultPrevented && this.preventDefault()
    }
  };
  w(O, zd);
  var Cd = ud([1, 4, 2])
    , Bd = ud({
      2: "touch"
      , 3: "pen"
      , 4: "mouse"
    })
    , Dd = function (a) {
      return (vd ? 0 == a.b.button : "click" == a.type ? !0 : !!(a.b.button & Cd[0])) && !(H && I && a.ctrlKey)
    };
  O.prototype.h = function () {
    O.s.h.call(this);
    this.b.stopPropagation ? this.b.stopPropagation() : this.b.cancelBubble = !0
  };
  O.prototype.preventDefault = function () {
    O.s.preventDefault.call(this);
    var a = this.b;
    if(a.preventDefault) a.preventDefault();
    else if(a.returnValue = !1, xd) try {
      if(a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
    } catch (b) {}
  };
  var Ed = "closure_listenable_" + (1E6 * Math.random() | 0)
    , Fd = function (a) {
      return !(!a || !a[Ed])
    }
    , Gd = 0;
  var Hd = function (a, b, c, d, e) {
      this.listener = a;
      this.proxy = null;
      this.src = b;
      this.type = c;
      this.capture = !!d;
      this.Ha = e;
      this.key = ++Gd;
      this.removed = this.Ca = !1
    }
    , Id = function (a) {
      a.removed = !0;
      a.listener = null;
      a.proxy = null;
      a.src = null;
      a.Ha = null
    };
  var Jd = function (a) {
    this.src = a;
    this.a = {};
    this.b = 0
  };
  Jd.prototype.add = function (a, b, c, d, e) {
    var f = a.toString();
    a = this.a[f];
    a || (a = this.a[f] = [], this.b++);
    var g = Kd(a, b, d, e); - 1 < g ? (b = a[g], c || (b.Ca = !1)) : (b = new Hd(b, this.src, f, !!d, e), b.Ca = c, a.push(b));
    return b
  };
  Jd.prototype.remove = function (a, b, c, d) {
    a = a.toString();
    if(!(a in this.a)) return !1;
    var e = this.a[a];
    b = Kd(e, b, c, d);
    return -1 < b ? (Id(e[b]), x(null != e.length), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.a[a], this.b--), !0) : !1
  };
  var Ld = function (a, b) {
    var c = b.type;
    if(!(c in a.a)) return !1;
    var d = Ea(a.a[c], b);
    d && (Id(b), 0 == a.a[c].length && (delete a.a[c], a.b--));
    return d
  };
  Jd.prototype.removeAll = function (a) {
    a = a && a.toString();
    var b = 0
      , c;
    for(c in this.a)
      if(!a || c == a) {
        for(var d = this.a[c], e = 0; e < d.length; e++) ++b, Id(d[e]);
        delete this.a[c];
        this.b--
      }
    return b
  };
  Jd.prototype.Fa = function (a, b) {
    a = this.a[a.toString()];
    var c = [];
    if(a)
      for(var d = 0; d < a.length; ++d) {
        var e = a[d];
        e.capture == b && c.push(e)
      }
    return c
  };
  Jd.prototype.va = function (a, b, c, d) {
    a = this.a[a.toString()];
    var e = -1;
    a && (e = Kd(a, b, c, d));
    return -1 < e ? a[e] : null
  };
  Jd.prototype.hasListener = function (a, b) {
    var c = void 0 !== a
      , d = c ? a.toString() : ""
      , e = void 0 !== b;
    return Ja(this.a, function (f) {
      for(var g = 0; g < f.length; ++g)
        if(!(c && f[g].type != d || e && f[g].capture != b)) return !0;
      return !1
    })
  };
  var Kd = function (a, b, c, d) {
    for(var e = 0; e < a.length; ++e) {
      var f = a[e];
      if(!f.removed && f.listener == b && f.capture == !!c && f.Ha == d) return e
    }
    return -1
  };
  var Md = "closure_lm_" + (1E6 * Math.random() | 0)
    , Nd = {}
    , Od = 0
    , P = function (a, b, c, d, e) {
      if(d && d.once) return Pd(a, b, c, d, e);
      if(Array.isArray(b)) {
        for(var f = 0; f < b.length; f++) P(a, b[f], c, d, e);
        return null
      }
      c = Qd(c);
      return Fd(a) ? a.listen(b, c, t(d) ? !!d.capture : !!d, e) : Rd(a, b, c, !1, d, e)
    }
    , Rd = function (a, b, c, d, e, f) {
      if(!b) throw Error("Invalid event type");
      var g = t(e) ? !!e.capture : !!e
        , l = Sd(a);
      l || (a[Md] = l = new Jd(a));
      c = l.add(b, c, d, g, f);
      if(c.proxy) return c;
      d = Td();
      c.proxy = d;
      d.src = a;
      d.listener = c;
      if(a.addEventListener) yd || (e = g), void 0 ===
        e && (e = !1), a.addEventListener(b.toString(), d, e);
      else if(a.attachEvent) a.attachEvent(Ud(b.toString()), d);
      else if(a.addListener && a.removeListener) x("change" === b, "MediaQueryList only has a change event"), a.addListener(d);
      else throw Error("addEventListener and attachEvent are unavailable.");
      Od++;
      return c
    }
    , Td = function () {
      var a = Vd
        , b = wd ? function (c) {
          return a.call(b.src, b.listener, c)
        } : function (c) {
          c = a.call(b.src, b.listener, c);
          if(!c) return c
        };
      return b
    }
    , Pd = function (a, b, c, d, e) {
      if(Array.isArray(b)) {
        for(var f = 0; f <
          b.length; f++) Pd(a, b[f], c, d, e);
        return null
      }
      c = Qd(c);
      return Fd(a) ? a.eb(b, c, t(d) ? !!d.capture : !!d, e) : Rd(a, b, c, !0, d, e)
    }
    , Wd = function (a, b, c, d, e) {
      if(Array.isArray(b))
        for(var f = 0; f < b.length; f++) Wd(a, b[f], c, d, e);
      else d = t(d) ? !!d.capture : !!d, c = Qd(c), Fd(a) ? a.N(b, c, d, e) : a && (a = Sd(a)) && (b = a.va(b, c, d, e)) && Xd(b)
    }
    , Xd = function (a) {
      if("number" === typeof a || !a || a.removed) return !1;
      var b = a.src;
      if(Fd(b)) return Ld(b.G, a);
      var c = a.type
        , d = a.proxy;
      b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(Ud(c)
        , d) : b.addListener && b.removeListener && b.removeListener(d);
      Od--;
      (c = Sd(b)) ? (Ld(c, a), 0 == c.b && (c.src = null, b[Md] = null)) : Id(a);
      return !0
    }
    , Zd = function (a) {
      if(a)
        if(Fd(a)) a.G && a.G.removeAll(void 0);
        else if(a = Sd(a)) {
        var b = 0
          , c;
        for(c in a.a)
          for(var d = a.a[c].concat(), e = 0; e < d.length; ++e) Xd(d[e]) && ++b
      }
    }
    , Ud = function (a) {
      return a in Nd ? Nd[a] : Nd[a] = "on" + a
    }
    , ae = function (a, b, c, d) {
      var e = !0;
      if(a = Sd(a))
        if(b = a.a[b.toString()])
          for(b = b.concat(), a = 0; a < b.length; a++) {
            var f = b[a];
            f && f.capture == c && !f.removed && (f = $d(f, d), e = e && !1 !== f)
          }
      return e
    }
    , $d = function (a, b) {
      var c = a.listener
        , d = a.Ha || a.src;
      a.Ca && Xd(a);
      return c.call(d, b)
    }
    , Vd = function (a, b) {
      if(a.removed) return !0;
      if(!wd) {
        if(!b) a: {
          b = ["window", "event"];
          for(var c = n, d = 0; d < b.length; d++)
            if(c = c[b[d]], null == c) {
              b = null;
              break a
            }
          b = c
        }
        d = b;
        b = new O(d, this);
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
            var f = ae(d[e], a, !0, b);
            c = c && f
          }
          for(e = 0; !b.g && e < d.length; e++) b.a = d[e]
          , f = ae(d[e], a, !1, b)
          , c = c && f
        }
        return c
      }
      return $d(a, new O(b, this))
    }
    , Sd = function (a) {
      a = a[Md];
      return a instanceof Jd ? a : null
    }
    , be = "__closure_events_fn_" + (1E9 * Math.random() >>> 0)
    , Qd = function (a) {
      x(a, "Listener can not be null.");
      if(ea(a)) return a;
      x(a.handleEvent, "An object listener must have handleEvent method.");
      a[be] || (a[be] = function (b) {
        return a.handleEvent(b)
      });
      return a[be]
    };
  var Q = function (a) {
    rd.call(this);
    this.b = a;
    this.a = {}
  };
  w(Q, rd);
  var ce = [];
  Q.prototype.listen = function (a, b, c, d) {
    Array.isArray(b) || (b && (ce[0] = b.toString()), b = ce);
    for(var e = 0; e < b.length; e++) {
      var f = P(a, b[e], c || this.handleEvent, d || !1, this.b || this);
      if(!f) break;
      this.a[f.key] = f
    }
    return this
  };
  Q.prototype.eb = function (a, b, c, d) {
    return de(this, a, b, c, d)
  };
  var de = function (a, b, c, d, e, f) {
    if(Array.isArray(c))
      for(var g = 0; g < c.length; g++) de(a, b, c[g], d, e, f);
    else {
      b = Pd(b, c, d || a.handleEvent, e, f || a.b || a);
      if(!b) return a;
      a.a[b.key] = b
    }
    return a
  };
  Q.prototype.N = function (a, b, c, d, e) {
    if(Array.isArray(b))
      for(var f = 0; f < b.length; f++) this.N(a, b[f], c, d, e);
    else c = c || this.handleEvent, d = t(d) ? !!d.capture : !!d, e = e || this.b || this, c = Qd(c), d = !!d, b = Fd(a) ? a.va(b, c, d, e) : a ? (a = Sd(a)) ? a.va(b, c, d, e) : null : null, b && (Xd(b), delete this.a[b.key]);
    return this
  };
  Q.prototype.removeAll = function () {
    Ia(this.a, function (a, b) {
      this.a.hasOwnProperty(b) && Xd(a)
    }, this);
    this.a = {}
  };
  Q.prototype.v = function () {
    Q.s.v.call(this);
    this.removeAll()
  };
  Q.prototype.handleEvent = function () {
    throw Error("EventHandler.handleEvent not implemented");
  };
  var R = function () {
    rd.call(this);
    this.G = new Jd(this);
    this.Fb = this;
    this.gb = null
  };
  w(R, rd);
  R.prototype[Ed] = !0;
  h = R.prototype;
  h.addEventListener = function (a, b, c, d) {
    P(this, a, b, c, d)
  };
  h.removeEventListener = function (a, b, c, d) {
    Wd(this, a, b, c, d)
  };
  h.dispatchEvent = function (a) {
    ee(this);
    var b = this.gb;
    if(b) {
      var c = [];
      for(var d = 1; b; b = b.gb) c.push(b), x(1E3 > ++d, "infinite loop")
    }
    b = this.Fb;
    d = a.type || a;
    if("string" === typeof a) a = new zd(a, b);
    else if(a instanceof zd) a.target = a.target || b;
    else {
      var e = a;
      a = new zd(d, b);
      Ma(a, e)
    }
    e = !0;
    if(c)
      for(var f = c.length - 1; !a.g && 0 <= f; f--) {
        var g = a.a = c[f];
        e = fe(g, d, !0, a) && e
      }
    a.g || (g = a.a = b, e = fe(g, d, !0, a) && e, a.g || (e = fe(g, d, !1, a) && e));
    if(c)
      for(f = 0; !a.g && f < c.length; f++) g = a.a = c[f], e = fe(g, d, !1, a) && e;
    return e
  };
  h.v = function () {
    R.s.v.call(this);
    this.G && this.G.removeAll(void 0);
    this.gb = null
  };
  h.listen = function (a, b, c, d) {
    ee(this);
    return this.G.add(String(a), b, !1, c, d)
  };
  h.eb = function (a, b, c, d) {
    return this.G.add(String(a), b, !0, c, d)
  };
  h.N = function (a, b, c, d) {
    return this.G.remove(String(a), b, c, d)
  };
  var fe = function (a, b, c, d) {
    b = a.G.a[String(b)];
    if(!b) return !0;
    b = b.concat();
    for(var e = !0, f = 0; f < b.length; ++f) {
      var g = b[f];
      if(g && !g.removed && g.capture == c) {
        var l = g.listener
          , k = g.Ha || g.src;
        g.Ca && Ld(a.G, g);
        e = !1 !== l.call(k, d) && e
      }
    }
    return e && !d.defaultPrevented
  };
  R.prototype.Fa = function (a, b) {
    return this.G.Fa(String(a), b)
  };
  R.prototype.va = function (a, b, c, d) {
    return this.G.va(String(a), b, c, d)
  };
  R.prototype.hasListener = function (a, b) {
    return this.G.hasListener(void 0 !== a ? String(a) : void 0, b)
  };
  var ee = function (a) {
    x(a.G, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")
  };
  var ge = function (a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d
  };
  h = ge.prototype;
  h.toString = function () {
    return "(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)"
  };
  h.contains = function (a) {
    return this && a ? a instanceof ge ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.a >= this.left && a.a <= this.right && a.b >= this.top && a.b <= this.bottom : !1
  };
  h.ceil = function () {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this
  };
  h.floor = function () {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this
  };
  h.round = function () {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this
  };
  h.translate = function (a, b) {
    a instanceof M ? (this.left += a.a, this.right += a.a, this.top += a.b, this.bottom += a.b) : (qa(a), this.left += a, this.right += a, "number" === typeof b && (this.top += b, this.bottom += b));
    return this
  };
  var he = function (a, b, c, d) {
    this.left = a;
    this.top = b;
    this.width = c;
    this.height = d
  };
  h = he.prototype;
  h.toString = function () {
    return "(" + this.left + ", " + this.top + " - " + this.width + "w x " + this.height + "h)"
  };
  h.contains = function (a) {
    return a instanceof M ? a.a >= this.left && a.a <= this.left + this.width && a.b >= this.top && a.b <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
  };
  h.ceil = function () {
    this.left = Math.ceil(this.left);
    this.top = Math.ceil(this.top);
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
  };
  h.floor = function () {
    this.left = Math.floor(this.left);
    this.top = Math.floor(this.top);
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
  };
  h.round = function () {
    this.left = Math.round(this.left);
    this.top = Math.round(this.top);
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
  };
  h.translate = function (a, b) {
    a instanceof M ? (this.left += a.a, this.top += a.b) : (this.left += qa(a), "number" === typeof b && (this.top += b));
    return this
  };
  var je = function (a, b, c) {
      if("string" === typeof b)(b = ie(a, b)) && (a.style[b] = c);
      else
        for(var d in b) {
          c = a;
          var e = b[d]
            , f = ie(c, d);
          f && (c.style[f] = e)
        }
    }
    , ke = {}
    , ie = function (a, b) {
      var c = ke[b];
      if(!c) {
        var d = Tb(b);
        c = d;
        void 0 === a.style[d] && (d = (H ? "Webkit" : G ? "Moz" : F ? "ms" : ac ? "O" : null) + Ub(d), void 0 !== a.style[d] && (c = d));
        ke[b] = c
      }
      return c
    }
    , le = function (a, b) {
      var c = N(a);
      return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    }
    , me = function (a, b) {
      return le(a
        , b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }
    , oe = function (a, b, c) {
      if(b instanceof M) {
        var d = b.a;
        b = b.b
      } else d = b, b = c;
      a.style.left = ne(d);
      a.style.top = ne(b)
    }
    , pe = function (a) {
      try {
        var b = a.getBoundingClientRect()
      } catch (c) {
        return {
          left: 0
          , top: 0
          , right: 0
          , bottom: 0
        }
      }
      F && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
      return b
    }
    , qe = function (a) {
      if(F && !rc(8)) return x(a && "offsetParent" in a), a.offsetParent;
      var b = N(a)
        , c = me(a, "position")
        , d = "fixed" == c || "absolute" == c;
      for(a = a.parentNode; a && a != b; a = a.parentNode)
        if(11 == a.nodeType && a.host && (a = a.host), c = me(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
      return null
    }
    , se = function (a) {
      for(var b = new ge(0, Infinity, Infinity, 0), c = Tc(a), d = c.a.body, e = c.a.documentElement, f = Yc(c.a); a = qe(a);)
        if(!(F && 0 == a.clientWidth || H && 0 == a.clientHeight && a ==
            d) && a != d && a != e && "visible" != me(a, "overflow")) {
          var g = re(a)
            , l = new M(a.clientLeft, a.clientTop);
          g.a += l.a;
          g.b += l.b;
          b.top = Math.max(b.top, g.b);
          b.right = Math.min(b.right, g.a + a.clientWidth);
          b.bottom = Math.min(b.bottom, g.b + a.clientHeight);
          b.left = Math.max(b.left, g.a)
        }
      d = f.scrollLeft;
      f = f.scrollTop;
      b.left = Math.max(b.left, d);
      b.top = Math.max(b.top, f);
      c = (Zc(c.a) || window)
        .document;
      c = ad(c) ? c.documentElement : c.body;
      c = new Rc(c.clientWidth, c.clientHeight);
      b.right = Math.min(b.right, d + c.width);
      b.bottom = Math.min(b.bottom, f + c.height);
      return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null
    }
    , re = function (a) {
      var b = N(a);
      sa(a, "Parameter is required");
      var c = new M(0, 0);
      var d = b ? N(b) : document;
      d = !F || rc(9) || ad(Tc(d)
        .a) ? d.documentElement : d.body;
      if(a == d) return c;
      a = pe(a);
      b = $c(Tc(b)
        .a);
      c.a = a.left + b.a;
      c.b = a.top + b.b;
      return c
    }
    , ue = function (a, b) {
      a = te(a);
      b = te(b);
      return new M(a.a - b.a, a.b - b.b)
    }
    , ve = function (a) {
      a = pe(a);
      return new M(a.left, a.top)
    }
    , te = function (a) {
      x(a);
      if(1 == a.nodeType) return ve(a);
      a = a.changedTouches ? a.changedTouches[0] : a;
      return new M(a.clientX
        , a.clientY)
    }
    , ne = function (a) {
      "number" == typeof a && (a += "px");
      return a
    }
    , xe = function (a) {
      var b = we;
      if("none" != me(a, "display")) return b(a);
      var c = a.style
        , d = c.display
        , e = c.visibility
        , f = c.position;
      c.visibility = "hidden";
      c.position = "absolute";
      c.display = "inline";
      a = b(a);
      c.display = d;
      c.position = f;
      c.visibility = e;
      return a
    }
    , we = function (a) {
      var b = a.offsetWidth
        , c = a.offsetHeight
        , d = H && !b && !c;
      return (void 0 === b || d) && a.getBoundingClientRect ? (a = pe(a), new Rc(a.right - a.left, a.bottom - a.top)) : new Rc(b, c)
    }
    , ye = function (a) {
      var b = re(a);
      a = xe(a);
      return new he(b.a, b.b, a.width, a.height)
    }
    , ze = function (a, b) {
      a.style.display = b ? "" : "none"
    }
    , Ae = function (a) {
      return "rtl" == me(a, "direction")
    }
    , Be = G ? "MozUserSelect" : H || bc ? "WebkitUserSelect" : null
    , Ce = function (a, b) {
      if(/^\d+px?$/.test(b)) return parseInt(b, 10);
      var c = a.style.left
        , d = a.runtimeStyle.left;
      a.runtimeStyle.left = a.currentStyle.left;
      a.style.left = b;
      b = a.style.pixelLeft;
      a.style.left = c;
      a.runtimeStyle.left = d;
      return +b
    }
    , De = function (a, b) {
      return (b = a.currentStyle ? a.currentStyle[b] : null) ? Ce(a, b) : 0
    }
    , Ee = {
      thin: 2
      , medium: 4
      , thick: 6
    }
    , Fe = function (a, b) {
      if("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
      b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
      return b in Ee ? Ee[b] : Ce(a, b)
    };
  var He = function (a) {
    R.call(this);
    this.h = a || Tc();
    this.ia = Ge;
    this.pa = null;
    this.J = !1;
    this.a = null;
    this.i = void 0;
    this.$ = this.fa = this.o = null;
    this.Ba = !1
  };
  w(He, R);
  qd.K();
  var Ge = null
    , Ie = function (a, b) {
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
    , Je = function (a, b) {
      if(a.o && a.o.$) {
        var c = a.o.$
          , d = a.pa;
        d in c && delete c[d];
        c = a.o.$;
        if(null !== c && b in c) throw Error('The object already contains the key "' + b + '"');
        c[b] = a
      }
      a.pa =
        b
    };
  He.prototype.m = function () {
    return this.a
  };
  var Ke = function (a) {
      a = a.a;
      x(a, "Can not call getElementStrict before rendering/decorating.");
      return a
    }
    , Le = function (a) {
      a.i || (a.i = new Q(a));
      return x(a.i)
    };
  He.prototype.Ta = function () {
    this.a = dd(this.h.a, "DIV")
  };
  var Me = function (a, b) {
      if(a.J) throw Error("Component already rendered");
      a.a || a.Ta();
      b ? b.insertBefore(a.a, null) : a.h.a.body.appendChild(a.a);
      a.o && !a.o.J || a.Y()
    }
    , Ne = function (a, b) {
      if(a.J) throw Error("Component already rendered");
      if(b && a.pb(b)) {
        a.Ba = !0;
        var c = N(b);
        a.h && a.h.a == c || (a.h = Tc(b));
        a.mb(b);
        a.Y()
      } else throw Error("Invalid element to decorate");
    };
  h = He.prototype;
  h.pb = function () {
    return !0
  };
  h.mb = function (a) {
    this.a = a
  };
  h.Y = function () {
    this.J = !0;
    Oe(this, function (a) {
      !a.J && a.m() && a.Y()
    })
  };
  h.Ea = function () {
    Oe(this, function (a) {
      a.J && a.Ea()
    });
    this.i && this.i.removeAll();
    this.J = !1
  };
  h.v = function () {
    this.J && this.Ea();
    this.i && (this.i.V(), delete this.i);
    Oe(this, function (a) {
      a.V()
    });
    !this.Ba && this.a && fd(this.a);
    this.o = this.a = this.$ = this.fa = null;
    He.s.v.call(this)
  };
  h.Ua = function () {
    return this.a
  };
  var Oe = function (a, b) {
    a.fa && A(a.fa, b, void 0)
  };
  var Pe = function (a) {
      return "string" == typeof a.className ? a.className : a.getAttribute && a.getAttribute("class") || ""
    }
    , Qe = function (a) {
      return a.classList ? a.classList : Pe(a)
        .match(/\S+/g) || []
    }
    , Re = function (a, b) {
      "string" == typeof a.className ? a.className = b : a.setAttribute && a.setAttribute("class", b)
    }
    , Se = function (a, b) {
      return a.classList ? a.classList.contains(b) : Da(Qe(a), b)
    }
    , Te = function (a, b) {
      if(a.classList) a.classList.add(b);
      else if(!Se(a, b)) {
        var c = Pe(a);
        Re(a, c + (0 < c.length ? " " + b : b))
      }
    }
    , Ue = function (a, b) {
      if(a.classList) A(b
        , function (e) {
          Te(a, e)
        });
      else {
        var c = {};
        A(Qe(a), function (e) {
          c[e] = !0
        });
        A(b, function (e) {
          c[e] = !0
        });
        b = "";
        for(var d in c) b += 0 < b.length ? " " + d : d;
        Re(a, b)
      }
    }
    , Ve = function (a, b) {
      a.classList ? a.classList.remove(b) : Se(a, b) && Re(a, xa(Qe(a), function (c) {
          return c != b
        })
        .join(" "))
    }
    , We = function (a, b) {
      a.classList ? A(b, function (c) {
        Ve(a, c)
      }) : Re(a, xa(Qe(a), function (c) {
          return !Da(b, c)
        })
        .join(" "))
    };
  var Xe = function () {}
    , Ye;
  ba(Xe);
  var Ze = {
    button: "pressed"
    , checkbox: "checked"
    , menuitem: "selected"
    , menuitemcheckbox: "checked"
    , menuitemradio: "checked"
    , radio: "checked"
    , tab: "selected"
    , treeitem: "selected"
  };
  Xe.prototype.Va = function () {};
  Xe.prototype.wa = function (a) {
    return a.h.nb("DIV", $e(this, a)
      .join(" "), a.getContent())
  };
  var bf = function (a, b, c) {
    if(a = a.m ? a.m() : a) {
      var d = [b];
      F && !J("7") && (d = af(Qe(a), b), d.push(b));
      (c ? Ue : We)(a, d)
    }
  };
  Xe.prototype.qb = function () {
    return !0
  };
  Xe.prototype.aa = function (a, b) {
    b.id && Je(a, b.id);
    b && b.firstChild ? cf(a, b.firstChild.nextSibling ? Ga(b.childNodes) : b.firstChild) : a.xa = null;
    var c = 0
      , d = this.B()
      , e = this.B()
      , f = !1
      , g = !1
      , l = !1
      , k = Ga(Qe(b));
    A(k, function (q) {
      f || q != d ? g || q != e ? c |= df(this, q) : g = !0 : (f = !0, e == d && (g = !0));
      1 == df(this, q) && (ta(b), ld(b) && md(b) && kd(b, !1))
    }, this);
    a.w = c;
    f || (k.push(d), e == d && (g = !0));
    g || k.push(e);
    (a = a.P) && k.push.apply(k, a);
    if(F && !J("7")) {
      var m = af(k);
      0 < m.length && (k.push.apply(k, m), l = !0)
    }
    f && g && !a && !l || Re(b, k.join(" "));
    return b
  };
  Xe.prototype.yb = function (a) {
    null == a.ia && (a.ia = Ae(a.J ? a.a : a.h.a.body));
    a.ia && this.sb(a.m(), !0);
    a.b() && this.Ka(a, a.isVisible())
  };
  var ef = function (a, b) {
    if(a = a.Va()) {
      x(b, "The element passed as a first parameter cannot be null.");
      var c = b.getAttribute("role") || null;
      a != c && (a ? (x(Ka(Mc, a), "No such ARIA role " + a), b.setAttribute("role", a)) : b.removeAttribute("role"))
    }
  };
  h = Xe.prototype;
  h.Wa = function (a, b) {
    var c = !b;
    b = F || ac ? a.getElementsByTagName("*") : null;
    if(Be) {
      if(c = c ? "none" : "", a.style && (a.style[Be] = c), b) {
        a = 0;
        for(var d; d = b[a]; a++) d.style && (d.style[Be] = c)
      }
    } else if(F || ac)
      if(c = c ? "on" : "", a.setAttribute("unselectable", c), b)
        for(a = 0; d = b[a]; a++) d.setAttribute("unselectable", c)
  };
  h.sb = function (a, b) {
    bf(a, this.B() + "-rtl", b)
  };
  h.rb = function (a) {
    var b;
    return a.F & 32 && (b = a.m()) ? ld(b) && md(b) : !1
  };
  h.Ka = function (a, b) {
    var c;
    if(a.F & 32 && (c = a.m())) {
      if(!b && a.w & 32) {
        try {
          c.blur()
        } catch (d) {}
        a.w & 32 && a.tb(null)
      }(ld(c) && md(c)) != b && kd(c, b)
    }
  };
  h.Xa = function (a, b, c) {
    var d = a.m();
    if(d) {
      var e = ff(this, b);
      e && bf(a, e, c);
      this.X(d, b, c)
    }
  };
  h.X = function (a, b, c) {
    Ye || (Ye = {
      1: "disabled"
      , 8: "selected"
      , 16: "checked"
      , 64: "expanded"
    });
    x(a, "The element passed as a first parameter cannot be null.");
    b = Ye[b];
    var d = a.getAttribute("role") || null;
    d && (d = Ze[d] || b, b = "checked" == b || "selected" == b ? d : b);
    b && pd(a, b, c)
  };
  h.B = function () {
    return "goog-control"
  };
  var $e = function (a, b) {
      var c = a.B()
        , d = [c]
        , e = a.B();
      e != c && d.push(e);
      c = b.w;
      for(e = []; c;) {
        var f = c & -c;
        e.push(ff(a, f));
        c &= ~f
      }
      d.push.apply(d, e);
      (a = b.P) && d.push.apply(d, a);
      F && !J("7") && d.push.apply(d, af(d));
      return d
    }
    , af = function (a, b) {
      var c = [];
      b && (a = Fa(a, [b]));
      A([], function (d) {
        !Aa(d, v(Da, a)) || b && !Da(d, b) || c.push(d.join("_"))
      });
      return c
    }
    , ff = function (a, b) {
      a.a || gf(a);
      return a.a[b]
    }
    , df = function (a, b) {
      if(!a.C) {
        a.a || gf(a);
        var c = a.a
          , d = {}
          , e;
        for(e in c) d[c[e]] = e;
        a.C = d
      }
      a = parseInt(a.C[b], 10);
      return isNaN(a) ? 0 : a
    }
    , gf = function (a) {
      var b =
        a.B();
      var c = -1 != b.replace(/\xa0|\s/g, " ")
        .indexOf(" ");
      x(!c, "ControlRenderer has an invalid css class: '" + b + "'");
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
  var hf = function () {};
  w(hf, Xe);
  ba(hf);
  h = hf.prototype;
  h.Va = function () {
    return "button"
  };
  h.X = function (a, b, c) {
    switch (b) {
    case 8:
    case 16:
      x(a, "The button DOM element cannot be null.");
      pd(a, "pressed", c);
      break;
    default:
    case 64:
    case 1:
      hf.s.X.call(this, a, b, c)
    }
  };
  h.wa = function (a) {
    var b = hf.s.wa.call(this, a)
      , c = a.A;
    b && (c ? b.title = c : b.removeAttribute("title"));
    (c = a.T) && this.Sa(b, c);
    a.F & 16 && this.X(b, 16, !!(a.w & 16));
    return b
  };
  h.aa = function (a, b) {
    b = hf.s.aa.call(this, a, b);
    var c = this.Ra(b);
    a.T = c;
    a.A = b.title;
    a.F & 16 && this.X(b, 16, !!(a.w & 16));
    return b
  };
  h.Ra = p;
  h.Sa = p;
  h.B = function () {
    return "goog-button"
  };
  var jf = function (a, b) {
      if(!a) throw Error("Invalid class name " + a);
      if(!ea(b)) throw Error("Invalid decorator function " + b);
    }
    , kf = {};
  var nf = function (a, b, c, d, e, f) {
      if(H && !J("525")) return !0;
      if(I && e) return lf(a);
      if(e && !d) return !1;
      if(!G) {
        "number" === typeof b && (b = mf(b));
        var g = 17 == b || 18 == b || I && 91 == b;
        if((!c || I) && g || I && 16 == b && (d || f)) return !1
      }
      if((H || bc) && d && c) switch (a) {
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
      if(F && d && b == a) return !1;
      switch (a) {
      case 13:
        return G ? f || e ? !1 : !(c && d) : !0;
      case 27:
        return !(H || bc || G)
      }
      return G && (d || e || f) ? !1 : lf(a)
    }
    , lf = function (a) {
      if(48 <= a && 57 >= a ||
        96 <= a && 106 >= a || 65 <= a && 90 >= a || (H || bc) && 0 == a) return !0;
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
        return G;
      default:
        return !1
      }
    }
    , mf = function (a) {
      if(G) a = of (a);
      else if(I && H) switch (a) {
      case 93:
        a = 91
      }
      return a
    }
    , of = function (a) {
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
  var pf = function (a, b) {
    R.call(this);
    a && this.attach(a, b)
  };
  w(pf, R);
  h = pf.prototype;
  h.ka = null;
  h.Ia = null;
  h.bb = null;
  h.Ja = null;
  h.I = -1;
  h.W = -1;
  h.Oa = !1;
  var qf = {
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
    , rf = {
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
    , sf = !H || J("525")
    , tf = I && G;
  h = pf.prototype;
  h.Lb = function (a) {
    if(H || bc)
      if(17 == this.I && !a.ctrlKey || 18 == this.I && !a.altKey || I && 91 == this.I && !a.metaKey) this.W = this.I = -1; - 1 == this.I && (a.ctrlKey && 17 != a.keyCode ? this.I = 17 : a.altKey && 18 != a.keyCode ? this.I = 18 : a.metaKey && 91 != a.keyCode && (this.I = 91));
    sf && !nf(a.keyCode, this.I, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey) ? this.handleEvent(a) : (this.W = mf(a.keyCode), tf && (this.Oa = a.altKey))
  };
  h.Nb = function (a) {
    this.W = this.I = -1;
    this.Oa = a.altKey
  };
  h.handleEvent = function (a) {
    var b = a.b
      , c = b.altKey;
    if(F && "keypress" == a.type) {
      var d = this.W;
      var e = 13 != d && 27 != d ? b.keyCode : 0
    } else(H || bc) && "keypress" == a.type ? (d = this.W, e = 0 <= b.charCode && 63232 > b.charCode && lf(d) ? b.charCode : 0) : ac && !H ? (d = this.W, e = lf(d) ? b.keyCode : 0) : ("keypress" == a.type ? (tf && (c = this.Oa), b.keyCode == b.charCode ? 32 > b.keyCode ? (d = b.keyCode, e = 0) : (d = this.W, e = b.charCode) : (d = b.keyCode || this.W, e = b.charCode || 0)) : (d = b.keyCode || this.W, e = b.charCode || 0), I && 63 == e && 224 == d && (d = 191));
    var f = d = mf(d);
    d ? 63232 <= d && d in qf ?
      f = qf[d] : 25 == d && a.shiftKey && (f = 9) : b.keyIdentifier && b.keyIdentifier in rf && (f = rf[b.keyIdentifier]);
    G && sf && "keypress" == a.type && !nf(f, this.I, a.shiftKey, a.ctrlKey, c, a.metaKey) || (a = f == this.I, this.I = f, b = new uf(f, e, a, b), b.altKey = c, this.dispatchEvent(b))
  };
  h.m = function () {
    return this.ka
  };
  h.attach = function (a, b) {
    this.Ja && this.detach();
    this.ka = a;
    this.Ia = P(this.ka, "keypress", this, b);
    this.bb = P(this.ka, "keydown", this.Lb, b, this);
    this.Ja = P(this.ka, "keyup", this.Nb, b, this)
  };
  h.detach = function () {
    this.Ia && (Xd(this.Ia), Xd(this.bb), Xd(this.Ja), this.Ja = this.bb = this.Ia = null);
    this.ka = null;
    this.W = this.I = -1
  };
  h.v = function () {
    pf.s.v.call(this);
    this.detach()
  };
  var uf = function (a, b, c, d) {
    O.call(this, d);
    this.type = "key";
    this.keyCode = a;
    this.repeat = c
  };
  w(uf, O);
  var S = function (a, b, c) {
    He.call(this, c);
    if(!b) {
      for(b = this.constructor; b;) {
        var d = ia(b);
        if(d = kf[d]) break;
        b = (b = Object.getPrototypeOf(b.prototype)) && b.constructor
      }
      b = d ? ea(d.K) ? d.K() : new d : null
    }
    this.g = b;
    this.xa = void 0 !== a ? a : null
  };
  w(S, He);
  h = S.prototype;
  h.xa = null;
  h.w = 0;
  h.F = 39;
  h.ua = 255;
  h.Eb = !0;
  h.P = null;
  h.Za = !0;
  var wf = function (a) {
      a.J && 0 != a.Za && vf(a, !1);
      a.Za = !1
    }
    , xf = function (a, b) {
      b && (a.P ? Da(a.P, b) || a.P.push(b) : a.P = [b], bf(a, b, !0))
    };
  h = S.prototype;
  h.Ta = function () {
    var a = this.g.wa(this);
    this.a = a;
    ef(this.g, a);
    this.g.Wa(a, !1);
    this.isVisible() || (ze(a, !1), a && pd(a, "hidden", !0))
  };
  h.Ua = function () {
    return this.m()
  };
  h.pb = function (a) {
    return this.g.qb(a)
  };
  h.mb = function (a) {
    this.a = a = this.g.aa(this, a);
    ef(this.g, a);
    this.g.Wa(a, !1);
    this.Eb = "none" != a.style.display
  };
  h.Y = function () {
    S.s.Y.call(this);
    var a = this.g
      , b = Ke(this);
    x(this);
    x(b);
    this.isVisible() || pd(b, "hidden", !this.isVisible());
    this.b() || a.X(b, 1, !this.b());
    this.F & 8 && a.X(b, 8, this.isSelected());
    this.F & 16 && a.X(b, 16, !!(this.w & 16));
    this.F & 64 && a.X(b, 64, !!(this.w & 64));
    this.g.yb(this);
    this.F & -2 && (this.Za && vf(this, !0), this.F & 32 && (a = this.m())) && (b = this.u || (this.u = new pf), b.attach(a), Le(this)
      .listen(b, "key", this.Mb)
      .listen(a, "focus", this.Kb)
      .listen(a, "blur", this.tb))
  };
  var vf = function (a, b) {
    var c = Le(a)
      , d = a.m();
    b ? (c.listen(d, Ad.Ma, a.ya)
      .listen(d, [Ad.Na, Ad.ib], a.za)
      .listen(d, "mouseover", a.wb)
      .listen(d, "mouseout", a.vb), a.Ga != p && c.listen(d, "contextmenu", a.Ga), F && (J(9) || c.listen(d, "dblclick", a.ub), a.C || (a.C = new yf(a), sd(a, v(td, a.C))))) : (c.N(d, Ad.Ma, a.ya)
      .N(d, [Ad.Na, Ad.ib], a.za)
      .N(d, "mouseover", a.wb)
      .N(d, "mouseout", a.vb), a.Ga != p && c.N(d, "contextmenu", a.Ga), F && (J(9) || c.N(d, "dblclick", a.ub), td(a.C), a.C = null))
  };
  S.prototype.Ea = function () {
    S.s.Ea.call(this);
    this.u && this.u.detach();
    this.isVisible() && this.b() && this.g.Ka(this, !1)
  };
  S.prototype.v = function () {
    S.s.v.call(this);
    this.u && (this.u.V(), delete this.u);
    delete this.g;
    this.C = this.P = this.xa = null
  };
  S.prototype.getContent = function () {
    return this.xa
  };
  var cf = function (a, b) {
      a.xa = b
    }
    , zf = function (a) {
      a = a.getContent();
      if(!a) return "";
      if("string" !== typeof a)
        if(Array.isArray(a)) a = ya(a, od)
          .join("");
        else {
          if(Pc && null !== a && "innerText" in a) a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
          else {
            var b = [];
            nd(a, b, !0);
            a = b.join("")
          }
          a = a.replace(/ \xAD /g, " ")
            .replace(/\xAD/g, "");
          a = a.replace(/\u200B/g, "");
          Pc || (a = a.replace(/ +/g, " "));
          " " != a && (a = a.replace(/^\s*/, ""))
        }
      return a.replace(/[\t\r\n ]+/g, " ")
        .replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
    };
  S.prototype.isVisible = function () {
    return this.Eb
  };
  S.prototype.b = function () {
    return !(this.w & 1)
  };
  S.prototype.setEnabled = function (a) {
    var b = this.o;
    b && "function" == typeof b.b && !b.b() || !Af(this, 1, !a) || (a || (Bf(this, !1), Cf(this, !1)), this.isVisible() && this.g.Ka(this, a), Df(this, 1, !a, !0))
  };
  var Cf = function (a, b) {
      Af(a, 2, b) && Df(a, 2, b)
    }
    , Bf = function (a, b) {
      Af(a, 4, b) && Df(a, 4, b)
    };
  S.prototype.isSelected = function () {
    return !!(this.w & 8)
  };
  S.prototype.M = function (a) {
    Af(this, 32, a) && Df(this, 32, a)
  };
  var Df = function (a, b, c, d) {
      d || 1 != b ? a.F & b && c != !!(a.w & b) && (a.g.Xa(a, b, c), a.w = c ? a.w | b : a.w & ~b) : a.setEnabled(!c)
    }
    , Ef = function (a) {
      if(a.J && a.w & 32) throw Error("Component already rendered");
      a.w & 32 && Df(a, 32, !1);
      a.F &= -33
    }
    , T = function (a, b) {
      return !!(a.ua & b) && !!(a.F & b)
    }
    , Af = function (a, b, c) {
      return !!(a.F & b) && !!(a.w & b) != c && (!(0 & b) || a.dispatchEvent(Ie(b, c))) && !a.D
    };
  h = S.prototype;
  h.wb = function (a) {
    (!a.relatedTarget || !gd(this.m(), a.relatedTarget)) && this.dispatchEvent("enter") && this.b() && T(this, 2) && Cf(this, !0)
  };
  h.vb = function (a) {
    a.relatedTarget && gd(this.m(), a.relatedTarget) || !this.dispatchEvent("leave") || (T(this, 4) && Bf(this, !1), T(this, 2) && Cf(this, !1))
  };
  h.Ga = p;
  h.ya = function (a) {
    this.b() && (T(this, 2) && Cf(this, !0), Dd(a) && (T(this, 4) && Bf(this, !0), this.g && this.g.rb(this) && this.m()
      .focus()));
    Dd(a) && a.preventDefault()
  };
  h.za = function (a) {
    this.b() && (T(this, 2) && Cf(this, !0), this.w & 4 && this.Aa(a) && T(this, 4) && Bf(this, !1))
  };
  h.ub = function (a) {
    this.b() && this.Aa(a)
  };
  h.Aa = function (a) {
    if(T(this, 16)) {
      var b = !(this.w & 16);
      Af(this, 16, b) && Df(this, 16, b)
    }
    T(this, 8) && Af(this, 8, !0) && Df(this, 8, !0);
    T(this, 64) && (b = !(this.w & 64), Af(this, 64, b) && Df(this, 64, b));
    b = new zd("action", this);
    a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.i = a.i);
    return this.dispatchEvent(b)
  };
  h.Kb = function () {
    T(this, 32) && this.M(!0)
  };
  h.tb = function () {
    T(this, 4) && Bf(this, !1);
    T(this, 32) && this.M(!1)
  };
  h.Mb = function (a) {
    return this.isVisible() && this.b() && this.Ya(a) ? (a.preventDefault(), a.h(), !0) : !1
  };
  h.Ya = function (a) {
    return 13 == a.keyCode && this.Aa(a)
  };
  if(!ea(S)) throw Error("Invalid component class " + S);
  if(!ea(Xe)) throw Error("Invalid renderer class " + Xe);
  var Ff = ia(S);
  kf[Ff] = Xe;
  jf("goog-control", function () {
    return new S(null)
  });
  var yf = function (a) {
    rd.call(this);
    this.b = a;
    this.a = !1;
    this.g = new Q(this);
    sd(this, v(td, this.g));
    a = Ke(this.b);
    this.g.listen(a, Ad.Ma, this.i)
      .listen(a, Ad.Na, this.o)
      .listen(a, "click", this.h)
  };
  w(yf, rd);
  var Gf = !F || rc(9);
  yf.prototype.i = function () {
    this.a = !1
  };
  yf.prototype.o = function () {
    this.a = !0
  };
  var Hf = function (a, b) {
    if(!Gf) return a.button = 0, a.type = b, a;
    var c = document.createEvent("MouseEvents");
    c.initMouseEvent(b, a.bubbles, a.cancelable, a.view || null, a.detail, a.screenX, a.screenY, a.clientX, a.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, a.relatedTarget || null);
    return c
  };
  yf.prototype.h = function (a) {
    if(this.a) this.a = !1;
    else {
      var b = a.b
        , c = b.button
        , d = b.type
        , e = Hf(b, "mousedown");
      this.b.ya(new O(e, a.a));
      e = Hf(b, "mouseup");
      this.b.za(new O(e, a.a));
      Gf || (b.button = c, b.type = d)
    }
  };
  yf.prototype.v = function () {
    this.b = null;
    yf.s.v.call(this)
  };
  var If = function () {};
  w(If, hf);
  ba(If);
  h = If.prototype;
  h.Va = function () {};
  h.wa = function (a) {
    wf(a);
    a.ua &= -256;
    Ef(a);
    return a.h.nb("BUTTON", {
      "class": $e(this, a)
        .join(" ")
      , disabled: !a.b()
      , title: a.A || ""
      , value: a.T || ""
    }, zf(a) || "")
  };
  h.qb = function (a) {
    return "BUTTON" == a.tagName || "INPUT" == a.tagName && ("button" == a.type || "submit" == a.type || "reset" == a.type)
  };
  h.aa = function (a, b) {
    wf(a);
    a.ua &= -256;
    Ef(a);
    if(b.disabled) {
      var c = ra(ff(this, 1));
      Te(b, c)
    }
    return If.s.aa.call(this, a, b)
  };
  h.yb = function (a) {
    Le(a)
      .listen(a.m(), "click", a.Aa)
  };
  h.Wa = p;
  h.sb = p;
  h.rb = function (a) {
    return a.b()
  };
  h.Ka = p;
  h.Xa = function (a, b, c) {
    If.s.Xa.call(this, a, b, c);
    (a = a.m()) && 1 == b && (a.disabled = c)
  };
  h.Ra = function (a) {
    return a.value
  };
  h.Sa = function (a, b) {
    a && (a.value = b)
  };
  h.X = p;
  var Jf = function (a, b, c) {
    S.call(this, a, b || If.K(), c)
  };
  w(Jf, S);
  Jf.prototype.v = function () {
    Jf.s.v.call(this);
    delete this.T;
    delete this.A
  };
  Jf.prototype.Y = function () {
    Jf.s.Y.call(this);
    if(this.F & 32) {
      var a = this.m();
      a && Le(this)
        .listen(a, "keyup", this.Ya)
    }
  };
  Jf.prototype.Ya = function (a) {
    return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.Aa(a) : 32 == a.keyCode
  };
  jf("goog-button", function () {
    return new Jf(null)
  });
  var Kf = function (a, b) {
    this.b = {};
    this.a = [];
    this.g = 0;
    var c = arguments.length;
    if(1 < c) {
      if(c % 2) throw Error("Uneven number of arguments");
      for(var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
    } else if(a)
      if(a instanceof Kf)
        for(c = a.Z(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
      else
        for(d in a) this.set(d, a[d])
  };
  Kf.prototype.S = function () {
    Lf(this);
    for(var a = [], b = 0; b < this.a.length; b++) a.push(this.b[this.a[b]]);
    return a
  };
  Kf.prototype.Z = function () {
    Lf(this);
    return this.a.concat()
  };
  Kf.prototype.clear = function () {
    this.b = {};
    this.g = this.a.length = 0
  };
  Kf.prototype.remove = function (a) {
    return Mf(this.b, a) ? (delete this.b[a], this.g--, this.a.length > 2 * this.g && Lf(this), !0) : !1
  };
  var Lf = function (a) {
    if(a.g != a.a.length) {
      for(var b = 0, c = 0; b < a.a.length;) {
        var d = a.a[b];
        Mf(a.b, d) && (a.a[c++] = d);
        b++
      }
      a.a.length = c
    }
    if(a.g != a.a.length) {
      var e = {};
      for(c = b = 0; b < a.a.length;) d = a.a[b], Mf(e, d) || (a.a[c++] = d, e[d] = 1), b++;
      a.a.length = c
    }
  };
  Kf.prototype.get = function (a, b) {
    return Mf(this.b, a) ? this.b[a] : b
  };
  Kf.prototype.set = function (a, b) {
    Mf(this.b, a) || (this.g++, this.a.push(a));
    this.b[a] = b
  };
  Kf.prototype.forEach = function (a, b) {
    for(var c = this.Z(), d = 0; d < c.length; d++) {
      var e = c[d]
        , f = this.get(e);
      a.call(b, f, e, this)
    }
  };
  var Mf = function (a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
  };
  var Nf = function (a) {
      if(a.S && "function" == typeof a.S) return a.S();
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
    , Of = function (a, b, c) {
      if(a.forEach && "function" == typeof a.forEach) a.forEach(b, c);
      else if(da(a) || "string" === typeof a) A(a, b, c);
      else {
        if(a.Z && "function" == typeof a.Z) var d = a.Z();
        else if(a.S && "function" == typeof a.S) d = void 0;
        else if(da(a) || "string" === typeof a) {
          d = [];
          for(var e = a.length, f = 0; f < e; f++) d.push(f)
        } else
          for(f in d = [], e = 0, a) d[e++] = f;
        e = Nf(a);
        f = e.length;
        for(var g = 0; g < f; g++) b.call(c, e[g], d && d[g], a)
      }
    };
  var Pf = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/
    , Qf = function (a, b) {
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
  var Rf = function (a) {
      this.b = this.a = null;
      this.g = a || null
    }
    , Sf = function (a) {
      a.a || (a.a = new Kf, a.b = 0, a.g && Qf(a.g, function (b, c) {
        a.add(decodeURIComponent(b.replace(/\+/g, " ")), c)
      }))
    };
  Rf.prototype.add = function (a, b) {
    Sf(this);
    this.g = null;
    a = String(a);
    var c = this.a.get(a);
    c || this.a.set(a, c = []);
    c.push(b);
    this.b = qa(this.b) + 1;
    return this
  };
  Rf.prototype.remove = function (a) {
    Sf(this);
    a = String(a);
    return Mf(this.a.b, a) ? (this.g = null, this.b = qa(this.b) - this.a.get(a)
      .length, this.a.remove(a)) : !1
  };
  Rf.prototype.clear = function () {
    this.a = this.g = null;
    this.b = 0
  };
  var Tf = function (a, b) {
    Sf(a);
    b = String(b);
    return Mf(a.a.b, b)
  };
  h = Rf.prototype;
  h.forEach = function (a, b) {
    Sf(this);
    this.a.forEach(function (c, d) {
      A(c, function (e) {
        a.call(b, e, d, this)
      }, this)
    }, this)
  };
  h.Z = function () {
    Sf(this);
    for(var a = this.a.S(), b = this.a.Z(), c = [], d = 0; d < b.length; d++)
      for(var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
    return c
  };
  h.S = function (a) {
    Sf(this);
    var b = [];
    if("string" === typeof a) Tf(this, a) && (b = Fa(b, this.a.get(String(a))));
    else {
      a = this.a.S();
      for(var c = 0; c < a.length; c++) b = Fa(b, a[c])
    }
    return b
  };
  h.set = function (a, b) {
    Sf(this);
    this.g = null;
    a = String(a);
    Tf(this, a) && (this.b = qa(this.b) - this.a.get(a)
      .length);
    this.a.set(a, [b]);
    this.b = qa(this.b) + 1;
    return this
  };
  h.get = function (a, b) {
    if(!a) return b;
    a = this.S(a);
    return 0 < a.length ? String(a[0]) : b
  };
  h.toString = function () {
    if(this.g) return this.g;
    if(!this.a) return "";
    for(var a = [], b = this.a.Z(), c = 0; c < b.length; c++) {
      var d = b[c]
        , e = encodeURIComponent(String(d));
      d = this.S(d);
      for(var f = 0; f < d.length; f++) {
        var g = e;
        "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
        a.push(g)
      }
    }
    return this.g = a.join("&")
  };
  h.Ib = function (a) {
    for(var b = 0; b < arguments.length; b++) Of(arguments[b], function (c, d) {
      this.add(d, c)
    }, this)
  };
  var Uf = {
      Zd: !0
    }
    , Vf = {
      Yd: !0
    }
    , Wf = function () {
      throw Error("Do not instantiate directly");
    };
  Wf.prototype.Da = null;
  Wf.prototype.getContent = function () {
    return this.content
  };
  Wf.prototype.toString = function () {
    return this.content
  };
  var Xf = function (a) {
      if(a.ga !== Uf) throw Error("Sanitized content was not of kind HTML.");
      var b = a.toString();
      a = a.Da;
      var c = new Ra(Pa, "Soy SanitizedContent of kind HTML produces SafeHtml-contract-compliant value.");
      ra(Sa(c), "must provide justification");
      x(!/^[\s\xa0]*$/.test(Sa(c)), "must provide non-empty justification");
      return Nb(b, a || null)
    }
    , Yf = function () {
      Wf.call(this)
    };
  w(Yf, Wf);
  Yf.prototype.ga = Uf;
  var Zf = function () {
    Wf.call(this)
  };
  w(Zf, Wf);
  Zf.prototype.ga = Vf;
  Zf.prototype.Da = 1;
  var $f = function (a, b, c) {
    (b = null != a && a.ga === b) && x(a.constructor === c);
    return b
  };
  var ag = function (a) {
      if(null != a) switch (a.Da) {
      case 1:
        return 1;
      case -1:
        return -1;
      case 0:
        return 0
      }
      return null
    }
    , cg = function (a) {
      return $f(a, Uf, Yf) ? a : a instanceof Db ? bg(Eb(a)
        .toString(), a.ha()) : bg(Sb(String(String(a))), ag(a))
    }
    , bg = function (a) {
      function b(c) {
        this.content = c
      }
      b.prototype = a.prototype;
      return function (c, d) {
        c = new b(String(c));
        void 0 !== d && (c.Da = d);
        return c
      }
    }(Yf)
    , dg = function (a, b) {
      return a && b && a.Qb && b.Qb ? a.ga !== b.ga ? !1 : a.toString() === b.toString() : a instanceof Wf && b instanceof Wf ? a.ga != b.ga ? !1 : a.toString() ==
        b.toString() : a == b
    }
    , U = function (a) {
      $f(a, Uf, Yf) ? (a = a.getContent(), a = String(a)
        .replace(eg, "")
        .replace(fg, "&lt;"), a = String(a)
        .replace(gg, hg)) : a = Sb(String(a));
      return a
    }
    , ig = {
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
    , hg = function (a) {
      return ig[a]
    }
    , gg = /[\x00\x22\x27\x3c\x3e]/g
    , jg =
    /^(?!on|src|(?:action|archive|background|cite|classid|codebase|content|data|dsync|href|http-equiv|longdesc|style|usemap)\s*$)(?:[a-z0-9_$:-]*)$/i
    , eg = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g
    , fg = /</g;
  var kg = function (a) {
    a = a || {};
    var b = a.attributes
      , c = a.content
      , d = a.disabled
      , e = a.id
      , f = a.$d
      , g = a.title
      , l = a.Zb
      , k = a.value
      , m = bg;
    e = '<div role="button"' + (e ? ' id="' + U(e) + '"' : "") + ' class="';
    var q = a || {};
    a = q.Xd;
    var D = q.disabled
      , B = q.checked
      , K = q.width
      , z = "goog-inline-block jfk-button ";
    q = q.style;
    switch (t(q) ? q.toString() : q) {
    case 0:
      z += "jfk-button-standard";
      break;
    case 2:
      z += "jfk-button-action";
      break;
    case 3:
      z += "jfk-button-primary";
      break;
    case 1:
      z += "jfk-button-default";
      break;
    case 4:
      z += "jfk-button-flat";
      break;
    case 5:
      z += "jfk-button-mini";
      break;
    case 6:
      z += "jfk-button-contrast";
      break;
    default:
      z += "jfk-button-standard"
    }
    z += (dg(K, 1) ? " jfk-button-narrow" : "") + (B ? " jfk-button-checked" : "") + (a ? " " + a : "") + (D ? " jfk-button-disabled" : "");
    d = e + U(z) + '"' + (d ? ' aria-disabled="true"' : ' tabindex="' + (f ? U(f) : "0") + '"') + (g ? l ? ' data-tooltip="' + U(g) + '"' : ' title="' + U(g) + '"' : "") + (k ? ' value="' + U(k) + '"' : "");
    b ? ($f(b, Vf, Zf) ? b = b.getContent()
      .replace(/([^"'\s])$/, "$1 ") : (b = String(b), jg.test(b) || (y("Bad value `%s` for |filterHtmlAttributes", [b]), b = "zSoyz")), b = " " + b) : b = "";
    return m(d + b + ">" + cg(null != c ? c : "") + "</div>")
  };
  kg.a = "jfk.templates.button.strict";
  var lg = function () {};
  lg.prototype.ob = function () {};
  var mg = function () {
    if(ec) {
      var a = /Windows NT ([0-9.]+)/;
      return (a = a.exec(C)) ? a[1] : "0"
    }
    return I ? (a = /10[_.][0-9_.]+/, (a = a.exec(C)) ? a[0].replace(/_/g, ".") : "10") : fc ? (a = /Android\s+([^\);]+)(\)|;)/, (a = a.exec(C)) ? a[1] : "") : gc || hc || ic ? (a = /(?:iPhone|CPU)\s+OS\s+(\S+)/, (a = a.exec(C)) ? a[1].replace(/_/g, ".") : "") : ""
  }();
  var ng = function (a) {
      return (a = a.exec(C)) ? a[1] : ""
    }
    , og = function () {
      if(uc) return ng(/Firefox\/([0-9.]+)/);
      if(F || bc || ac) return pc;
      if(yc) return Wb() ? ng(/CriOS\/([0-9.]+)/) : ng(/Chrome\/([0-9.]+)/);
      if(zc && !Wb()) return ng(/Version\/([0-9.]+)/);
      if(vc || wc) {
        var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(C);
        if(a) return a[1] + "." + a[2]
      } else if(xc) return (a = ng(/Android\s+([0-9.]+)/)) ? a : ng(/Version\/([0-9.]+)/);
      return ""
    }();
  var pg = function (a, b) {
    return (b & 8 && Ae(a) ? b ^ 4 : b) & -9
  };
  var rg = function (a, b) {
    this.g = a;
    this.o = !!b;
    this.h = {
      0: this.g + "-arrowright"
      , 1: this.g + "-arrowup"
      , 2: this.g + "-arrowdown"
      , 3: this.g + "-arrowleft"
    }
  };
  w(rg, lg);
  h = rg.prototype;
  h.Pa = 2;
  h.jb = 20;
  h.Qa = 3;
  h.fb = -5;
  h.Gb = !1;
  h.ob = function (a) {
    x(this.i, "Must call setElements first.");
    var b = this.Pa;
    2 == b && (b = 0);
    var c = this.Qa
      , d = 2 == this.Pa ? sg(this.Qa) ? this.a.offsetHeight / 2 : this.a.offsetWidth / 2 : this.jb;
    if(this.b) {
      var e = tg(c, b)
        , f = this.b;
      var g = xe(f);
      g = (sg(c) ? g.height / 2 : g.width / 2) - d;
      var l = pg(f, e)
        , k;
      if(k = se(f)) f = ye(f), f = new ge(f.top, f.left + f.width, f.top + f.height, f.left), sg(c) ? f.top < k.top && !(l & 1) ? g -= k.top - f.top : f.bottom > k.bottom && l & 1 && (g -= f.bottom - k.bottom) : f.left < k.left && !(l & 4) ? g -= k.left - f.left : f.right > k.right && l & 4 && (g -= f.right -
        k.right);
      l = sg(c) ? new M(this.fb, g) : new M(g, this.fb);
      g = c ^ 3;
      sg(c) && "rtl" == this.b.dir && (g = c);
      k = this.b;
      f = tg(g, b);
      g = this.a;
      x(g);
      var m = g.offsetParent;
      if(m) {
        var q = "HTML" == m.tagName || "BODY" == m.tagName;
        if(!q || "static" != me(m, "position")) {
          var D = re(m);
          if(!q) {
            q = Ae(m);
            var B;
            if(B = q) {
              if(B = zc) B = 0 <= fb(og, 10);
              var K;
              if(K = jc) K = 0 <= fb(mg, 10);
              B = G || B || K
            }
            q = B ? -m.scrollLeft : !q || cc && J("8") || "visible" == me(m, "overflowX") ? m.scrollLeft : m.scrollWidth - m.clientWidth - m.scrollLeft;
            D = Qc(D, new M(q, m.scrollTop))
          }
        }
      }
      D = D || new M;
      m = ye(k);
      if(q =
        se(k)) {
        var z = new he(q.left, q.top, q.right - q.left, q.bottom - q.top);
        q = Math.max(m.left, z.left);
        B = Math.min(m.left + m.width, z.left + z.width);
        q <= B && (K = Math.max(m.top, z.top), z = Math.min(m.top + m.height, z.top + z.height), K <= z && (m.left = q, m.top = K, m.width = B - q, m.height = z - K))
      }
      q = Tc(k);
      K = Tc(g);
      if(q.a != K.a) {
        B = q.a.body;
        K = Zc(K.a);
        z = new M(0, 0);
        var ca = (ca = N(B)) ? Zc(ca) : window;
        if(Yb(ca, "parent")) {
          var Yd = B;
          do {
            var qg = ca == K ? re(Yd) : ve(x(Yd));
            z.a += qg.a;
            z.b += qg.b
          } while(ca && ca != K && ca != ca.parent && (Yd = ca.frameElement) && (ca = ca.parent))
        }
        B =
          Qc(z, re(B));
        !F || rc(9) || ad(q.a) || (B = Qc(B, $c(q.a)));
        m.left += B.a;
        m.top += B.b
      }
      k = pg(k, f);
      f = m.left;
      k & 4 ? f += m.width : k & 2 && (f += m.width / 2);
      f = new M(f, m.top + (k & 1 ? m.height : 0));
      f = Qc(f, D);
      l && (f.a += (k & 4 ? -1 : 1) * l.a, f.b += (k & 1 ? -1 : 1) * l.b);
      k = f;
      k = new M(k.a, k.b);
      l = pg(g, e);
      e = xe(g);
      f = new Rc(e.width, e.height);
      k = new M(k.a, k.b);
      f = new Rc(f.width, f.height);
      if(a || 0 != l) l & 4 ? k.a -= f.width + (a ? a.right : 0) : l & 2 ? k.a -= f.width / 2 : a && (k.a += a.left), l & 1 ? k.b -= f.height + (a ? a.bottom : 0) : a && (k.b += a.top);
      a = new he(0, 0, 0, 0);
      a.left = k.a;
      a.top = k.b;
      a.width = f.width;
      a.height = f.height;
      oe(g, new M(a.left, a.top));
      f = new Rc(a.width, a.height);
      e == f || e && f && e.width == f.width && e.height == f.height || (a = f, e = N(g), l = ad(Tc(e)
        .a), !F || J("10") || l && J("8") ? (g = g.style, G ? g.MozBoxSizing = "border-box" : H ? g.WebkitBoxSizing = "border-box" : g.boxSizing = "border-box", g.width = Math.max(a.width, 0) + "px", g.height = Math.max(a.height, 0) + "px") : (e = g.style, l ? (F ? (l = De(g, "paddingLeft"), k = De(g, "paddingRight"), f = De(g, "paddingTop"), D = De(g, "paddingBottom"), l = new ge(f, k, D, l)) : (l = le(g, "paddingLeft"), k = le(g, "paddingRight")
          , f = le(g, "paddingTop"), D = le(g, "paddingBottom"), l = new ge(parseFloat(f), parseFloat(k), parseFloat(D), parseFloat(l))), F && !rc(9) ? (k = Fe(g, "borderLeft"), f = Fe(g, "borderRight"), D = Fe(g, "borderTop"), g = Fe(g, "borderBottom"), g = new ge(D, f, g, k)) : (k = le(g, "borderLeftWidth"), f = le(g, "borderRightWidth"), D = le(g, "borderTopWidth"), g = le(g, "borderBottomWidth"), g = new ge(parseFloat(D), parseFloat(f), parseFloat(g), parseFloat(k))), e.pixelWidth = a.width - g.left - l.left - l.right - g.right, e.pixelHeight = a.height - g.top - l.top - l.bottom - g.bottom) :
        (e.pixelWidth = a.width, e.pixelHeight = a.height)));
      this.o && (g = parseFloat(this.a.style.left), a = parseFloat(this.a.style.top), x(!isNaN(g) && !isNaN(a), "Could not parse position."), isFinite(g) && 0 == g % 1 && isFinite(a) && 0 == a % 1 || oe(this.a, Math.round(g), Math.round(a)))
    }
    ug(this, c, b, d)
  };
  var ug = function (a, b, c, d) {
      var e = a.i;
      Ia(a.h, function (f) {
        Ve(e, f)
      }, a);
      Te(e, a.h[b]);
      e.style.top = e.style.left = e.style.right = e.style.bottom = "";
      a.b ? (c = ue(a.b, a.a), d = vg(a.b, b), sg(b) ? e.style.top = wg(c.b + d.b, a.a.offsetHeight - 15) + "px" : e.style.left = wg(c.a + d.a, a.a.offsetWidth - 15) + "px") : e.style[0 == c ? sg(b) ? "top" : "left" : sg(b) ? "bottom" : "right"] = d + "px"
    }
    , wg = function (a, b) {
      return 15 > b ? 15 : Math.min(Math.max(a, 15), b)
    }
    , tg = function (a, b) {
      switch (a) {
      case 2:
        return 0 == b ? 1 : 5;
      case 1:
        return 0 == b ? 0 : 4;
      case 0:
        return 0 == b ? 12 : 13;
      default:
        return 0 ==
          b ? 8 : 9
      }
    }
    , vg = function (a, b) {
      var c = 0
        , d = 0;
      a = xe(a);
      switch (b) {
      case 2:
        c = a.width / 2;
        break;
      case 1:
        c = a.width / 2;
        d = a.height;
        break;
      case 0:
        d = a.height / 2;
        break;
      case 3:
        c = a.width, d = a.height / 2
      }
      return new M(c, d)
    }
    , sg = function (a) {
      return 0 == a || 3 == a
    };
  var xg = function (a, b, c) {
    if(ea(a)) c && (a = u(a, c));
    else if(a && "function" == typeof a.handleEvent) a = u(a.handleEvent, a);
    else throw Error("Invalid listener argument");
    return 2147483647 < Number(b) ? -1 : n.setTimeout(a, b || 0)
  };
  var Bg = function (a, b, c) {
      x(a, "Soy template may not be null.");
      a = a(b || yg, void 0, void 0);
      c = dd((c || Tc())
        .a, "DIV");
      a = zg(a);
      b = a.R();
      var d = b.match(Ag);
      x(!d, "This template starts with a %s, which cannot be a child of a <div>, as required by soy internals. Consider using goog.soy.renderElement instead.\nTemplate output: %s", d && d[0], b);
      Qb(c, a);
      1 == c.childNodes.length && (a = c.firstChild, 1 == a.nodeType && (c = a));
      return c
    }
    , zg = function (a) {
      if(!t(a)) return Gb(String(a));
      if(a instanceof Wf) return Xf(a);
      y("Soy template output is unsafe for use as HTML: " +
        a);
      return Gb("zSoyz")
    }
    , Ag = /^<(body|caption|col|colgroup|head|html|tr|td|th|tbody|thead|tfoot)>/i
    , yg = {};
  var V = function (a, b, c, d) {
    Jf.call(this, a, Cg.K(), b);
    this.O = c || 0;
    this.U = d || 0;
    this.sa = !1
  };
  w(V, Jf);
  V.prototype.setEnabled = function (a) {
    this.b() != a && (V.s.setEnabled.call(this, a), Dg(this))
  };
  V.prototype.M = function (a) {
    V.s.M.call(this, a);
    Eg(this, !1)
  };
  V.prototype.ya = function (a) {
    V.s.ya.call(this, a);
    this.b() && Eg(this, !0)
  };
  V.prototype.za = function (a) {
    V.s.za.call(this, a);
    this.b() && Eg(this, !0)
  };
  var Eg = function (a, b) {
      a.m() && (a = a.m(), b ? Te(a, "jfk-button-clear-outline") : Ve(a, "jfk-button-clear-outline"))
    }
    , Dg = function (a) {
      a.m() && Fg(a.g, a)
    }
    , Cg = function () {
      this.A = this.B() + "-standard";
      this.b = this.B() + "-action";
      this.L = this.B() + "-primary";
      this.i = this.B() + "-default";
      this.o = this.B() + "-flat";
      this.u = this.B() + "-narrow";
      this.D = this.B() + "-mini";
      this.h = this.B() + "-contrast"
    };
  w(Cg, hf);
  ba(Cg);
  h = Cg.prototype;
  h.ea = function (a, b, c) {
    a && c.O != a && (c.O = a, Dg(c));
    b && c.U != b && (c.U = b, Dg(c))
  };
  h.B = function () {
    return "jfk-button"
  };
  h.wa = function (a) {
    va(a, V, "Button is expected to be instance of jfk.Button");
    var b = a.h
      , c = Bg(kg, {
        disabled: !a.b()
        , checked: !!(a.w & 16)
        , style: a.O
        , title: a.A
        , Zb: a.sa
        , value: a.T
        , width: a.U
      }, b);
    b.Jb(c, a.getContent());
    this.aa(a, c);
    return c
  };
  h.aa = function (a, b) {
    Cg.s.aa.call(this, a, b);
    this.g || (this.g = Na(this.A, v(this.ea, 0, null), this.b, v(this.ea, 2, null), this.L, v(this.ea, 3, null), this.i, v(this.ea, 1, null), this.o, v(this.ea, 4, null), this.D, v(this.ea, 5, null), this.h, v(this.ea, 6, null), this.u, v(this.ea, null, 1)));
    for(var c = Qe(b), d = 0; d < c.length; ++d) {
      var e = this.g[c[d]];
      e && e(a)
    }
    if(c = b.getAttribute("data-tooltip")) a.A = c, a.sa = !0;
    return b
  };
  h.Ra = function (a) {
    return a.getAttribute("value") || ""
  };
  h.Sa = function (a, b) {
    a && a.setAttribute("value", b)
  };
  var Fg = function (a, b) {
    function c(g, l) {
      (g ? d : e)
      .push(l)
    }
    x(b.m(), "Button element must already exist when updating style.");
    var d = []
      , e = []
      , f = b.O;
    c(0 == f, a.A);
    c(2 == f, a.b);
    c(3 == f, a.L);
    c(4 == f, a.o);
    c(5 == f, a.D);
    c(1 == f, a.i);
    c(6 == f, a.h);
    c(1 == b.U, a.u);
    c(!b.b(), a.B() + "-disabled");
    We(b.m(), e);
    Ue(b.m(), d)
  };
  var Gg = function () {
    V.call(this, "", void 0, 4);
    xf(this, "jfk-button-flat");
    xf(this, "gtx-audio-button");
    xf(this, "no-audio");
    this.qa = this.ra = "";
    Le(this)
      .listen(this, "action", this.La)
  };
  w(Gg, V);
  Gg.prototype.La = function () {
    chrome.runtime.sendMessage({
      audioSrc: Hg(this.ra, this.qa)
    })
  };
  var Kg = function (a, b, c) {
      var d = c.toLowerCase();
      d in Ig && Jg[Ig[d.toLowerCase()]] >= b.length ? (a.P && Ea(a.P, "no-audio") && (0 == a.P.length && (a.P = null), bf(a, "no-audio", !1)), a.ra = b, a.qa = c) : xf(a, "no-audio")
    }
    , Hg = function (a, b) {
      return "https://translate.googleapis.com/translate_tts?client=gtx&ie=UTF-8&tl=" + b + Jc(a) + "&q=" + encodeURIComponent(String(a))
    };
  var Lg = function (a) {
      a = String(a)
        .toLowerCase()
        .replace("_", "-");
      if("zh-cn" == a) return "zh-CN";
      if("zh-tw" == a) return "zh-TW";
      var b = a.indexOf("-");
      a = 0 <= b ? a.substring(0, b) : a;
      return "zh" == a ? "zh-CN" : a
    }
    , Mg = function (a) {
      a = chrome.i18n.getMessage(a);
      return chrome.i18n.getMessage(a)
    };
  /*
   Portions of this code are from MochiKit, received by
   The Closure Authors under the MIT license. All other code is Copyright
   2005-2009 The Closure Authors. All Rights Reserved.
  */
  var Og = function () {
      this.g = [];
      chrome.i18n.getAcceptLanguages(u(this.u, this));
      this.b = "";
      this.a = "1";
      this.h = !0;
      this.i = {};
      this.o = {};
      chrome.storage.local.get(null, u(this.L, this));
      Ng(this)
    }
    , Pg = !!chrome.i18n.detectLanguage
    , Qg = function (a) {
      if("" != a.b) a = a.b;
      else a: {
        for(var b = 0; b < a.g.length; b++) {
          var c = Lg(a.g[b]);
          if(a.i[c]) {
            a = c;
            break a
          }
        }
        a = "en"
      }
      return a
    };
  Og.prototype.L = function (a) {
    "gtxTargetLang" in a && (this.b = a.gtxTargetLang);
    "gtxShowBubble" in a && (this.a = a.gtxShowBubble);
    "gtxDetectLanguage" in a && (this.h = a.gtxDetectLanguage);
    "gtxSourceLangList" in a && (this.o = Rg(this, a.gtxSourceLangList));
    "gtxTargetLangList" in a && (this.i = Rg(this, a.gtxTargetLangList));
    this.loaded = !0
  };
  var Rg = function (a, b) {
    var c = []
      , d;
    for(d in b) c.push({
      code: d
      , name: b[d]
    });
    c.sort(a.D);
    a = {};
    for(b = 0; b < c.length; b++) a[c[b].code] = c[b].name;
    return a
  };
  Og.prototype.D = function (a, b) {
    return a.name.localeCompare(b.name)
  };
  var Ng = function (a) {
    chrome.storage.onChanged.addListener(function (b) {
      b.gtxTargetLang && (a.b = b.gtxTargetLang.newValue);
      b.gtxShowBubble && (a.a = b.gtxShowBubble.newValue)
    })
  };
  Og.prototype.u = function (a) {
    this.g = a
  };
  var Tg = function (a) {
      var b = Sg;
      a = Lg(a);
      return a == Qg(b) ? !0 : !1
    }
    , Vg = function (a) {
      var b = Ug;
      if("sl" == a) return b.o;
      if("tl" == a) return b.i;
      throw Error("Invalid input for getLangList()");
    };
  var Wg = function (a) {
    var b = a.query
      , c = a.Yb
      , d = a.Vb
      , e = a.Xb
      , f = a.Wb
      , g = a.Hb;
    a = a.popup;
    var l = "";
    if(b)
      if(c) {
        l += '<div class="gtx-language"><select class="gtx-lang-selector">';
        for(var k = f.length, m = 0; m < k; m++) {
          var q = f[m];
          l += dg(q, "auto") ? "" : '<option value="' + U(q[0]) + '"' + (dg(q[0], d) ? " selected" : "") + ">" + cg(q[1]) + "</option>"
        }
        l += '</select></div><div class="gtx-source-audio"><div class="jfk-button-img"></div></div><div class="gtx-body">' + cg(b) + '</div><br><div class="gtx-language">' + cg(e) + '</div><div class="gtx-target-audio"><div class="jfk-button-img"></div></div><div class="gtx-body">' +
          cg(c) + "</div>";
        if(g) {
          l += '<table style="width: 95%">';
          b = g.length;
          for(c = 0; c < b; c++) {
            d = g[c];
            l += '<tr><td class="gtx-td"><div class="gtx-pos">' + cg(d.pos) + '</div></td><td class="gtx-td">';
            if(a)
              for(d = d.terms, e = d.length, f = 0; f < e; f++) l += (0 != f ? ", " : "") + cg(d[f]);
            else
              for(d = d.terms, e = d.length, f = 0; f < e; f++) k = d[f], l += 3 > f ? (0 != f ? ", " : "") + cg(k) : "";
            l += "</td></tr>"
          }
          l += "</table>"
        }
        l += "<br>"
      } else l += "No translation results for <b>" + cg(b) + "</b>.";
    return bg(l)
  };
  Wg.a = "extension.translation";
  var Jg = [0, 200]
    , Ig = {
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
  var Xg = function () {
    this.b = [];
    this.a = {};
    this.g = !1;
    this.D = 1;
    this.h = {};
    P(window, "beforeunload", this.o, !1, this)
  };
  ba(Xg);
  var Yg = function (a, b, c) {
      if(null == b) return "1";
      switch (r(b)) {
      case "string":
        return a = b, 64 < a.length && (null == c || !c) && (a = a.substr(0, 64)), encodeURIComponent(String(a));
      case "number":
        return "" + b;
      case "boolean":
        return b ? "1" : "0";
      case "array":
        var d = []
          , e;
        for(e in b) d.push(Yg(a, b[e], c));
        return d.join(",");
      case "object":
        d = [];
        for(e in b) d.push(Zg(a, e, b[e], c));
        return d.join(",");
      default:
        return ""
      }
    }
    , Zg = function (a, b, c, d) {
      return [encodeURIComponent(String(b)), Yg(a, c, d || "smtalt" == b)].join("=")
    };
  Xg.prototype.log = function (a, b) {
    this.b.push([a, b]);
    this.g || (this.g = !0, xg(this.i, 0, this))
  };
  Xg.prototype.i = function () {
    for(var a = 0; a < this.b.length; a++) {
      var b = this.b[a];
      $g(this, "/gen204?" + Zg(this, b[0], b[1]))
    }
    this.b = [];
    this.g = !1
  };
  var $g = function (a, b) {
    var c = new Image
      , d = a.D++;
    a.h[d] = c;
    c.onload = c.onerror = function () {
      delete Xg.K()
        .h[d]
    };
    c.src = b;
    c = null
  };
  Xg.prototype.o = function () {
    this.i();
    for(var a in this.a)
      if(0 != this.a[a]) {
        var b = a;
        $g(this, "/gen204?" + Zg(this, b, this.a[b][1]));
        b in this.a && (n.clearTimeout(this.a[b][0]), delete this.a[b])
      }
  };
  var ah = function () {};
  ah.prototype.a = null;
  var ch = function (a) {
    var b;
    (b = a.a) || (b = {}, bh(a) && (b[0] = !0, b[1] = !0), b = a.a = b);
    return b
  };
  var dh, eh = function () {};
  w(eh, ah);
  var fh = function (a) {
      return (a = bh(a)) ? new ActiveXObject(a) : new XMLHttpRequest
    }
    , bh = function (a) {
      if(!a.b && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
        for(var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
          var d = b[c];
          try {
            return new ActiveXObject(d), a.b = d
          } catch (e) {}
        }
        throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
      }
      return a.b
    };
  dh = new eh;
  var gh = function (a, b, c) {
    this.reset(a, b, c, void 0, void 0)
  };
  gh.prototype.a = null;
  var hh = 0;
  gh.prototype.reset = function (a, b, c, d, e) {
    "number" == typeof e || hh++;
    d || la();
    this.b = b;
    delete this.a
  };
  gh.prototype.getMessage = function () {
    return this.b
  };
  var ih = function (a) {
      this.h = a;
      this.b = this.g = this.a = null
    }
    , jh = function (a, b) {
      this.name = a;
      this.value = b
    };
  jh.prototype.toString = function () {
    return this.name
  };
  var kh = new jh("SEVERE", 1E3)
    , lh = new jh("CONFIG", 700)
    , mh = new jh("FINE", 500);
  ih.prototype.getChildren = function () {
    this.b || (this.b = {});
    return this.b
  };
  var nh = function (a) {
    if(a.g) return a.g;
    if(a.a) return nh(a.a);
    y("Root logger has no level set.");
    return null
  };
  ih.prototype.log = function (a, b, c) {
    if(a.value >= nh(this)
      .value)
      for(ea(b) && (b = b()), a = new gh(a, String(b), this.h), c && (a.a = c), c = this; c;) c = c.a
  };
  var oh = {}
    , ph = null
    , qh = function (a) {
      ph || (ph = new ih(""), oh[""] = ph, ph.g = lh);
      var b;
      if(!(b = oh[a])) {
        b = new ih(a);
        var c = a.lastIndexOf(".")
          , d = a.substr(c + 1);
        c = qh(a.substr(0, c));
        c.getChildren()[d] = b;
        b.a = c;
        oh[a] = b
      }
      return b
    };
  var rh = function (a, b) {
    a && a.log(mh, b, void 0)
  };
  var sh = function (a) {
    R.call(this);
    this.headers = new Kf;
    this.T = a || null;
    this.g = !1;
    this.O = this.a = null;
    this.ia = this.o = "";
    this.i = 0;
    this.u = "";
    this.h = this.fa = this.C = this.U = !1;
    this.A = 0;
    this.$ = null;
    this.qa = "";
    this.M = this.sa = !1
  };
  w(sh, R);
  var th = sh.prototype
    , uh = qh("goog.net.XhrIo");
  th.b = uh;
  var vh = /^https?$/i
    , wh = ["POST", "PUT"]
    , xh = []
    , yh = function (a, b, c, d) {
      var e = new sh;
      xh.push(e);
      b && e.listen("complete", b);
      e.eb("ready", e.Ba);
      e.send(a, c, d, void 0)
    };
  sh.prototype.Ba = function () {
    this.V();
    Ea(xh, this)
  };
  sh.prototype.send = function (a, b, c, d) {
    if(this.a) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.o + "; newUri=" + a);
    b = b ? b.toUpperCase() : "GET";
    this.o = a;
    this.u = "";
    this.i = 0;
    this.ia = b;
    this.U = !1;
    this.g = !0;
    this.a = this.T ? fh(this.T) : fh(dh);
    this.O = this.T ? ch(this.T) : ch(dh);
    this.a.onreadystatechange = u(this.pa, this);
    try {
      rh(this.b, zh(this, "Opening Xhr")), this.fa = !0, this.a.open(b, String(a), !0), this.fa = !1
    } catch (f) {
      rh(this.b, zh(this, "Error opening Xhr: " + f.message));
      Ah(this, f);
      return
    }
    a = c || "";
    var e = new Kf(this.headers);
    d && Of(d, function (f, g) {
      e.set(g, f)
    });
    d = Ca(e.Z());
    c = n.FormData && a instanceof n.FormData;
    !Da(wh, b) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    e.forEach(function (f, g) {
      this.a.setRequestHeader(g, f)
    }, this);
    this.qa && (this.a.responseType = this.qa);
    "withCredentials" in this.a && this.a.withCredentials !== this.sa && (this.a.withCredentials = this.sa);
    try {
      Bh(this), 0 < this.A && (this.M = Ch(this.a), rh(this.b, zh(this, "Will abort after " + this.A + "ms if incomplete, xhr2 " +
        this.M)), this.M ? (this.a.timeout = this.A, this.a.ontimeout = u(this.ra, this)) : this.$ = xg(this.ra, this.A, this)), rh(this.b, zh(this, "Sending request")), this.C = !0, this.a.send(a), this.C = !1
    } catch (f) {
      rh(this.b, zh(this, "Send error: " + f.message)), Ah(this, f)
    }
  };
  var Ch = function (a) {
      return F && J(9) && "number" === typeof a.timeout && void 0 !== a.ontimeout
    }
    , Ba = function (a) {
      return "content-type" == a.toLowerCase()
    };
  sh.prototype.ra = function () {
    "undefined" != typeof aa && this.a && (this.u = "Timed out after " + this.A + "ms, aborting", this.i = 8, rh(this.b, zh(this, this.u)), this.dispatchEvent("timeout"), this.abort(8))
  };
  var Ah = function (a, b) {
      a.g = !1;
      a.a && (a.h = !0, a.a.abort(), a.h = !1);
      a.u = b;
      a.i = 5;
      Dh(a);
      Eh(a)
    }
    , Dh = function (a) {
      a.U || (a.U = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
    };
  sh.prototype.abort = function (a) {
    this.a && this.g && (rh(this.b, zh(this, "Aborting")), this.g = !1, this.h = !0, this.a.abort(), this.h = !1, this.i = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Eh(this))
  };
  sh.prototype.v = function () {
    this.a && (this.g && (this.g = !1, this.h = !0, this.a.abort(), this.h = !1), Eh(this, !0));
    sh.s.v.call(this)
  };
  sh.prototype.pa = function () {
    this.D || (this.fa || this.C || this.h ? Fh(this) : this.La())
  };
  sh.prototype.La = function () {
    Fh(this)
  };
  var Fh = function (a) {
      if(a.g && "undefined" != typeof aa)
        if(a.O[1] && 4 == Gh(a) && 2 == Hh(a)) rh(a.b, zh(a, "Local request error detected and ignored"));
        else if(a.C && 4 == Gh(a)) xg(a.pa, 0, a);
      else if(a.dispatchEvent("readystatechange"), 4 == Gh(a)) {
        rh(a.b, zh(a, "Request complete"));
        a.g = !1;
        try {
          if(Ih(a)) a.dispatchEvent("complete"), a.dispatchEvent("success");
          else {
            a.i = 6;
            try {
              var b = 2 < Gh(a) ? a.a.statusText : ""
            } catch (c) {
              rh(a.b, "Can not get status: " + c.message), b = ""
            }
            a.u = b + " [" + Hh(a) + "]";
            Dh(a)
          }
        } finally {
          Eh(a)
        }
      }
    }
    , Eh = function (a, b) {
      if(a.a) {
        Bh(a);
        var c = a.a
          , d = a.O[0] ? p : null;
        a.a = null;
        a.O = null;
        b || a.dispatchEvent("ready");
        try {
          c.onreadystatechange = d
        } catch (e) {
          (a = a.b) && a.log(kh, "Problem encountered resetting onreadystatechange: " + e.message, void 0)
        }
      }
    }
    , Bh = function (a) {
      a.a && a.M && (a.a.ontimeout = null);
      a.$ && (n.clearTimeout(a.$), a.$ = null)
    }
    , Ih = function (a) {
      var b = Hh(a);
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
        if(b = 0 === b) a = String(a.o)
          .match(Pf)[1] || null, !a && n.self && n.self.location && (a = n.self.location.protocol
            , a = a.substr(0, a.length - 1)), b = !vh.test(a ? a.toLowerCase() : "");
        c = b
      }
      return c
    }
    , Gh = function (a) {
      return a.a ? a.a.readyState : 0
    }
    , Hh = function (a) {
      try {
        return 2 < Gh(a) ? a.a.status : -1
      } catch (b) {
        return -1
      }
    }
    , Jh = function (a) {
      try {
        return a.a ? a.a.responseText : ""
      } catch (b) {
        return rh(a.b, "Can not get responseText: " + b.message), ""
      }
    }
    , zh = function (a, b) {
      return b + " [" + a.ia + " " + a.o + " " + Hh(a) + "]"
    };
  var Kh = function () {};
  ba(Kh);
  var Lh = function (a) {
    Ec(this, a, null)
  };
  w(Lh, Ac);
  var Nh = function (a) {
    Ec(this, a, Mh)
  };
  w(Nh, Ac);
  var Mh = [26, 80];
  var Oh = function () {
    Kh.K()
  };
  ba(Oh);
  Oh.prototype.store = function (a) {
    L(a, 65, 0);
    L(a, 16, "");
    L(a, 14, "");
    L(a, 1, "");
    L(a, 50, "");
    L(a, 52, "");
    L(a, 32, 0)
  };
  var W = function () {}
    , X = function (a, b, c) {
      a = a.b = b = b || [];
      if(a.length) {
        var d = a.length - 1;
        b = a[d];
        if(t(b) && !da(b) && (delete a[d], d < c)) {
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
    this.b.length = 0
  };
  var Ph = function (a, b) {
    a = a.b[b];
    return null != a ? a : ""
  };
  W.prototype.na = function () {
    return this.b
  };
  var Y = function (a) {
    var b = a.a();
    a = a.b;
    for(var c = {}, d = 0; d < a.length; d++)
      if(void 0 !== a[d] && null !== a[d]) {
        var e = !1
          , f = void 0
          , g = void 0
          , l;
        for(l in b)
          if(g = b[l], f = l, g.c == d) {
            e = !0;
            break
          }
        if(e)
          if(g = x(g), g.j)
            if(e = a[d], g.f) {
              c[f] = [];
              for(var k = 0; k < e.length; k++) c[f].push(g.j(e[k]))
            } else c[f] = g.j(e);
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
      var f = x(d[e])
        , g = b[e];
      if(f.l)
        if(g instanceof Array) {
          var l = [];
          for(var k = 0; k < g.length; k++) l.push(f.l(g[k])
            .na())
        } else l = f.l(g)
          .na();
      else l = g;
      c[f.c] = l
    }
    return a
  };
  var Qh = function (a) {
    X(this, a, 1)
  };
  w(Qh, W);
  var Rh = {
    romanization: {
      c: 0
      , f: !1
    }
  };
  Qh.prototype.a = function () {
    return Rh
  };
  var Sh = function (a) {
    X(this, a, 3)
  };
  w(Sh, W);
  var Th = {
    source_span_index: {
      c: 0
      , f: !1
    }
    , target_span_index: {
      c: 1
      , f: !1
    }
    , direction: {
      c: 2
      , f: !1
    }
  };
  Sh.prototype.a = function () {
    return Th
  };
  var Uh = function (a) {
    X(this, a, 2)
  };
  w(Uh, W);
  var Vh = {
    begin: {
      c: 0
      , f: !1
    }
    , end: {
      c: 1
      , f: !1
    }
  };
  Uh.prototype.a = function () {
    return Vh
  };
  var Wh = function (a) {
    X(this, a, 3)
  };
  w(Wh, W);
  var Xh = {
    source_span: {
      c: 0
      , l: function (a) {
        return Z(Uh, a)
      }
      , j: function (a) {
        return Y(new Uh(a))
      }
      , f: !0
    }
    , target_span: {
      c: 1
      , l: function (a) {
        return Z(Uh, a)
      }
      , j: function (a) {
        return Y(new Uh(a))
      }
      , f: !0
    }
    , link: {
      c: 2
      , l: function (a) {
        return Z(Sh, a)
      }
      , j: function (a) {
        return Y(new Sh(a))
      }
      , f: !0
    }
  };
  Wh.prototype.a = function () {
    return Xh
  };
  var Yh = function (a) {
    X(this, a, 2)
  };
  w(Yh, W);
  var Zh = {
    model_path: {
      c: 0
      , f: !1
    }
    , label: {
      c: 1
      , f: !1
    }
  };
  Yh.prototype.a = function () {
    return Zh
  };
  var $h = function (a) {
    X(this, a, 2)
  };
  w($h, W);
  var ai = {
    checkpoint_md5: {
      c: 0
      , f: !1
    }
    , launch_doc: {
      c: 1
      , f: !1
    }
  };
  $h.prototype.a = function () {
    return ai
  };
  var bi = function (a) {
    X(this, a, 1)
  };
  w(bi, W);
  var ci = {
    model_tracking: {
      c: 0
      , l: function (a) {
        return Z($h, a)
      }
      , j: function (a) {
        return Y(new $h(a))
      }
      , f: !1
    }
  };
  bi.prototype.a = function () {
    return ci
  };
  var di = function (a) {
    X(this, a, 9)
  };
  w(di, W);
  var ei = {
    trans: {
      c: 0
      , f: !1
    }
    , orig: {
      c: 1
      , f: !1
    }
    , translit: {
      c: 2
      , f: !1
    }
    , src_translit: {
      c: 3
      , f: !1
    }
    , backend: {
      c: 4
      , f: !1
    }
    , model: {
      c: 5
      , f: !0
    }
    , word_alignment: {
      c: 6
      , l: function (a) {
        return Z(Wh, a)
      }
      , j: function (a) {
        return Y(new Wh(a))
      }
      , f: !1
    }
    , model_specification: {
      c: 7
      , l: function (a) {
        return Z(Yh, a)
      }
      , j: function (a) {
        return Y(new Yh(a))
      }
      , f: !0
    }
    , translation_engine_debug_info: {
      c: 8
      , l: function (a) {
        return Z(bi, a)
      }
      , j: function (a) {
        return Y(new bi(a))
      }
      , f: !0
    }
  };
  di.prototype.a = function () {
    return ei
  };
  var fi = function (a) {
    X(this, a, 4)
  };
  w(fi, W);
  var gi = {
    gender: {
      c: 0
      , f: !1
    }
    , translation: {
      c: 1
      , f: !1
    }
    , sentences: {
      c: 2
      , l: function (a) {
        return Z(di, a)
      }
      , j: function (a) {
        return Y(new di(a))
      }
      , f: !0
    }
    , romanization: {
      c: 3
      , l: function (a) {
        return Z(Qh, a)
      }
      , j: function (a) {
        return Y(new Qh(a))
      }
      , f: !1
    }
  };
  fi.prototype.a = function () {
    return gi
  };
  var hi = function (a) {
    X(this, a, 2)
  };
  w(hi, W);
  var ii = {
    gendered_translations: {
      c: 0
      , l: function (a) {
        return Z(fi, a)
      }
      , j: function (a) {
        return Y(new fi(a))
      }
      , f: !0
    }
    , status: {
      c: 1
      , f: !1
    }
  };
  hi.prototype.a = function () {
    return ii
  };
  var ji = function () {
    this.a = Oh.K()
  };
  w(ji, rd);
  ba(ji);
  var ki = function (a) {
    X(this, a, 3)
  };
  w(ki, W);
  var li = {
    type: {
      c: 0
      , f: !1
    }
    , display_text: {
      c: 1
      , f: !1
    }
    , contact_text: {
      c: 2
      , f: !1
    }
  };
  ki.prototype.a = function () {
    return li
  };
  var mi = function (a) {
    X(this, a, 5)
  };
  w(mi, W);
  var ni = {
    location: {
      c: 0
      , f: !1
    }
    , language: {
      c: 1
      , f: !1
    }
    , title: {
      c: 2
      , f: !1
    }
    , description: {
      c: 3
      , f: !1
    }
    , contact_details: {
      c: 4
      , l: function (a) {
        return Z(ki, a)
      }
      , j: function (a) {
        return Y(new ki(a))
      }
      , f: !0
    }
  };
  mi.prototype.a = function () {
    return ni
  };
  mi.prototype.getTitle = function () {
    return Ph(this, 2)
  };
  mi.prototype.setTitle = function (a) {
    this.b[2] = a
  };
  var oi = function (a) {
    X(this, a, 3)
  };
  w(oi, W);
  var pi = {
    title: {
      c: 0
      , f: !1
    }
    , alert_mid: {
      c: 1
      , f: !1
    }
    , help_and_info: {
      c: 2
      , l: function (a) {
        return Z(mi, a)
      }
      , j: function (a) {
        return Y(new mi(a))
      }
      , f: !1
    }
  };
  oi.prototype.a = function () {
    return pi
  };
  oi.prototype.getTitle = function () {
    return Ph(this, 0)
  };
  oi.prototype.setTitle = function (a) {
    this.b[0] = a
  };
  var qi = function (a) {
    X(this, a, 4)
  };
  w(qi, W);
  var ri = {
    word_postproc: {
      c: 0
      , f: !1
    }
    , score: {
      c: 1
      , f: !1
    }
    , has_preceding_space: {
      c: 2
      , f: !1
    }
    , attach_to_next_token: {
      c: 3
      , f: !1
    }
  };
  qi.prototype.a = function () {
    return ri
  };
  var si = function (a) {
    X(this, a, 2)
  };
  w(si, W);
  var ti = {
    begin: {
      c: 0
      , f: !1
    }
    , end: {
      c: 1
      , f: !1
    }
  };
  si.prototype.a = function () {
    return ti
  };
  var ui = function (a) {
    X(this, a, 7)
  };
  w(ui, W);
  var vi = {
    src_phrase: {
      c: 0
      , f: !1
    }
    , alternative: {
      c: 2
      , l: function (a) {
        return Z(qi, a)
      }
      , j: function (a) {
        return Y(new qi(a))
      }
      , f: !0
    }
    , srcunicodeoffsets: {
      c: 3
      , l: function (a) {
        return Z(si, a)
      }
      , j: function (a) {
        return Y(new si(a))
      }
      , f: !0
    }
    , raw_src_segment: {
      c: 4
      , f: !1
    }
    , start_pos: {
      c: 5
      , f: !1
    }
    , end_pos: {
      c: 6
      , f: !1
    }
  };
  ui.prototype.a = function () {
    return vi
  };
  var wi = function (a) {
    X(this, a, 8)
  };
  w(wi, W);
  var xi = {
    word: {
      c: 0
      , f: !1
    }
    , styles: {
      c: 1
      , f: !0
    }
    , has_preceding_space: {
      c: 2
      , f: !1
    }
    , attach_to_next_token: {
      c: 3
      , f: !1
    }
    , confidence: {
      c: 4
      , f: !1
    }
    , start_pos: {
      c: 5
      , f: !1
    }
    , end_pos: {
      c: 6
      , f: !1
    }
    , not_from_first_segment: {
      c: 7
      , f: !1
    }
  };
  wi.prototype.a = function () {
    return xi
  };
  var yi = function (a) {
    X(this, a, 3)
  };
  w(yi, W);
  var zi = {
    gloss: {
      c: 0
      , f: !1
    }
    , definition_id: {
      c: 1
      , f: !1
    }
    , example: {
      c: 2
      , f: !1
    }
  };
  yi.prototype.a = function () {
    return zi
  };
  var Ai = function (a) {
    X(this, a, 3)
  };
  w(Ai, W);
  var Bi = {
    pos: {
      c: 0
      , f: !1
    }
    , entry: {
      c: 1
      , l: function (a) {
        return Z(yi, a)
      }
      , j: function (a) {
        return Y(new yi(a))
      }
      , f: !0
    }
    , base_form: {
      c: 2
      , f: !1
    }
  };
  Ai.prototype.a = function () {
    return Bi
  };
  var Ci = function (a) {
    X(this, a, 6)
  };
  w(Ci, W);
  var Di = {
    word: {
      c: 0
      , f: !1
    }
    , reverse_translation: {
      c: 1
      , f: !0
    }
    , synset_id: {
      c: 2
      , f: !0
    }
    , score: {
      c: 3
      , f: !1
    }
    , previous_word: {
      c: 4
      , f: !1
    }
    , gender: {
      c: 5
      , f: !1
    }
  };
  Ci.prototype.a = function () {
    return Di
  };
  var Ei = function (a) {
    X(this, a, 5)
  };
  w(Ei, W);
  var Fi = {
    pos: {
      c: 0
      , f: !1
    }
    , terms: {
      c: 1
      , f: !0
    }
    , entry: {
      c: 2
      , l: function (a) {
        return Z(Ci, a)
      }
      , j: function (a) {
        return Y(new Ci(a))
      }
      , f: !0
    }
    , base_form: {
      c: 3
      , f: !1
    }
    , pos_enum: {
      c: 4
      , f: !1
    }
  };
  Ei.prototype.a = function () {
    return Fi
  };
  var Gi = function (a) {
    X(this, a, 17)
  };
  w(Gi, W);
  var Hi = {
    animacy: {
      c: 0
      , f: !1
    }
    , inflection_aspect: {
      c: 1
      , f: !1
    }
    , grammatical_case: {
      c: 2
      , f: !1
    }
    , degree: {
      c: 3
      , f: !1
    }
    , gender: {
      c: 4
      , f: !1
    }
    , mood: {
      c: 5
      , f: !1
    }
    , nonfinite_form: {
      c: 6
      , f: !1
    }
    , number: {
      c: 7
      , f: !1
    }
    , person: {
      c: 8
      , f: !1
    }
    , polarity: {
      c: 9
      , f: !1
    }
    , referent: {
      c: 10
      , f: !1
    }
    , strength: {
      c: 11
      , f: !1
    }
    , tense: {
      c: 12
      , f: !1
    }
    , imperfect_suffix: {
      c: 13
      , f: !1
    }
    , voice: {
      c: 14
      , f: !1
    }
    , infinitive_number: {
      c: 15
      , f: !1
    }
    , precedes: {
      c: 16
      , f: !1
    }
  };
  Gi.prototype.a = function () {
    return Hi
  };
  var Ii = function (a) {
    X(this, a, 2)
  };
  w(Ii, W);
  var Ji = {
    written_form: {
      c: 0
      , f: !1
    }
    , features: {
      c: 1
      , l: function (a) {
        return Z(Gi, a)
      }
      , j: function (a) {
        return Y(new Gi(a))
      }
      , f: !1
    }
  };
  Ii.prototype.a = function () {
    return Ji
  };
  var Ki = function (a) {
    X(this, a, 4)
  };
  w(Ki, W);
  var Li = {
    title: {
      c: 0
      , f: !1
    }
    , description: {
      c: 1
      , f: !1
    }
    , image_url: {
      c: 2
      , f: !1
    }
    , image_ref_url: {
      c: 3
      , f: !1
    }
  };
  Ki.prototype.a = function () {
    return Li
  };
  Ki.prototype.getTitle = function () {
    return Ph(this, 0)
  };
  Ki.prototype.setTitle = function (a) {
    this.b[0] = a
  };
  var Mi = function (a) {
    X(this, a, 4)
  };
  w(Mi, W);
  var Ni = {
    srclangs: {
      c: 0
      , f: !0
    }
    , extended_srclangs: {
      c: 3
      , f: !0
    }
    , detected_target: {
      c: 1
      , f: !1
    }
    , srclangs_confidences: {
      c: 2
      , f: !0
    }
  };
  Mi.prototype.a = function () {
    return Ni
  };
  var Oi = function (a) {
    X(this, a, 1)
  };
  w(Oi, W);
  var Pi = {
    word: {
      c: 0
      , f: !0
    }
  };
  Oi.prototype.a = function () {
    return Pi
  };
  var Qi = function (a) {
    X(this, a, 6)
  };
  w(Qi, W);
  var Ri = {
    spell_html_res: {
      c: 0
      , f: !1
    }
    , spell_res: {
      c: 1
      , f: !1
    }
    , correction_type: {
      c: 2
      , f: !0
    }
    , correction_translation: {
      c: 3
      , f: !1
    }
    , related: {
      c: 4
      , f: !1
    }
    , confident: {
      c: 5
      , f: !1
    }
  };
  Qi.prototype.a = function () {
    return Ri
  };
  var Si = function (a) {
    X(this, a, 2)
  };
  w(Si, W);
  var Ti = {
    synonym: {
      c: 0
      , f: !0
    }
    , definition_id: {
      c: 1
      , f: !1
    }
  };
  Si.prototype.a = function () {
    return Ti
  };
  var Ui = function (a) {
    X(this, a, 3)
  };
  w(Ui, W);
  var Vi = {
    pos: {
      c: 0
      , f: !1
    }
    , entry: {
      c: 1
      , l: function (a) {
        return Z(Si, a)
      }
      , j: function (a) {
        return Y(new Si(a))
      }
      , f: !0
    }
    , base_form: {
      c: 2
      , f: !1
    }
  };
  Ui.prototype.a = function () {
    return Vi
  };
  var Wi = function (a) {
    X(this, a, 6)
  };
  w(Wi, W);
  var Xi = {
    text: {
      c: 0
      , f: !1
    }
    , source: {
      c: 1
      , f: !1
    }
    , link: {
      c: 2
      , f: !1
    }
    , translation: {
      c: 3
      , f: !1
    }
    , source_type: {
      c: 4
      , f: !1
    }
    , definition_id: {
      c: 5
      , f: !1
    }
  };
  Wi.prototype.a = function () {
    return Xi
  };
  var Yi = function (a) {
    X(this, a, 1)
  };
  w(Yi, W);
  var Zi = {
    example: {
      c: 0
      , l: function (a) {
        return Z(Wi, a)
      }
      , j: function (a) {
        return Y(new Wi(a))
      }
      , f: !0
    }
  };
  Yi.prototype.a = function () {
    return Zi
  };
  var $i = function (a) {
    X(this, a, 20)
  };
  w($i, W);
  var aj = {
    sentences: {
      c: 0
      , l: function (a) {
        return Z(di, a)
      }
      , j: function (a) {
        return Y(new di(a))
      }
      , f: !0
    }
    , dict: {
      c: 1
      , l: function (a) {
        return Z(Ei, a)
      }
      , j: function (a) {
        return Y(new Ei(a))
      }
      , f: !0
    }
    , src: {
      c: 2
      , f: !1
    }
    , err: {
      c: 3
      , f: !1
    }
    , styled_words: {
      c: 4
      , l: function (a) {
        return Z(wi, a)
      }
      , j: function (a) {
        return Y(new wi(a))
      }
      , f: !0
    }
    , alternative_translations: {
      c: 5
      , l: function (a) {
        return Z(ui, a)
      }
      , j: function (a) {
        return Y(new ui(a))
      }
      , f: !0
    }
    , confidence: {
      c: 6
      , f: !1
    }
    , spell: {
      c: 7
      , l: function (a) {
        return Z(Qi, a)
      }
      , j: function (a) {
        return Y(new Qi(a))
      }
      , f: !1
    }
    , autocorrection: {
      c: 10
      , f: !1
    }
    , ld_result: {
      c: 8
      , l: function (a) {
        return Z(Mi, a)
      }
      , j: function (a) {
        return Y(new Mi(a))
      }
      , f: !1
    }
    , server_time: {
      c: 9
      , f: !1
    }
    , synsets: {
      c: 11
      , l: function (a) {
        return Z(Ui, a)
      }
      , j: function (a) {
        return Y(new Ui(a))
      }
      , f: !0
    }
    , definitions: {
      c: 12
      , l: function (a) {
        return Z(Ai, a)
      }
      , j: function (a) {
        return Y(new Ai(a))
      }
      , f: !0
    }
    , examples: {
      c: 13
      , l: function (a) {
        return Z(Yi, a)
      }
      , j: function (a) {
        return Y(new Yi(a))
      }
      , f: !1
    }
    , related_words: {
      c: 14
      , l: function (a) {
        return Z(Oi, a)
      }
      , j: function (a) {
        return Y(new Oi(a))
      }
      , f: !1
    }
    , knowledge_results: {
      c: 15
      , l: function (a) {
        return Z(Ki
          , a)
      }
      , j: function (a) {
        return Y(new Ki(a))
      }
      , f: !0
    }
    , query_inflections: {
      c: 16
      , l: function (a) {
        return Z(Ii, a)
      }
      , j: function (a) {
        return Y(new Ii(a))
      }
      , f: !0
    }
    , target_inflections: {
      c: 17
      , l: function (a) {
        return Z(Ii, a)
      }
      , j: function (a) {
        return Y(new Ii(a))
      }
      , f: !0
    }
    , gendered_translation_result: {
      c: 18
      , l: function (a) {
        return Z(hi, a)
      }
      , j: function (a) {
        return Y(new hi(a))
      }
      , f: !1
    }
    , sos_alert: {
      c: 19
      , l: function (a) {
        return Z(oi, a)
      }
      , j: function (a) {
        return Y(new oi(a))
      }
      , f: !1
    }
  };
  $i.prototype.a = function () {
    return aj
  };
  var bj = function () {
      this.b = "https://translate.googleapis.com";
      this.a = 0;
      this.h = ji.K()
    }
    , cj = function (a) {
      a = a.S("q")
        .join("");
      return Jc(a)
    }
    , dj = function (a, b, c, d, e) {
      c = c.toString();
      c += cj(d);
      d = d.toString();
      var f = "POST";
      b += "?" + c;
      2E3 > b.length + d.length && (f = "GET", b += "&" + d, d = "");
      ++a.a;
      yh(b, function (g) {
        --a.a;
        e(g)
      }, f, d)
    };
  bj.prototype.g = function (a, b, c) {
    c = c.target;
    if(!Ih(c) || "[" != Jh(c)[0] && "{" != Jh(c)[0]) {
      a = c.i;
      var d = a in ej ? ej[a] : 0;
      var e = this.h;
      a = new Nh;
      e.a.store(a);
      L(a, 31, 148);
      e = new Lh;
      e = L(e, 1, 156);
      d && L(e, 5, d);
      va(a, Ac);
      a.b || (a.b = {});
      d = e ? e.na() : e;
      a.b[63] = e;
      L(a, 63, d);
      a = Xg.K();
      d = String(c.o);
      e = Jh(c);
      a.log("invalidResponse", {
        q: d.substring(0, 500)
        , ql: d.length
        , r: e.substring(0, 500)
        , rl: e.length
      });
      b && b(Hh(c))
    } else {
      b = Jh(c);
      c = {
        "class": "trans.common.TranslationAPI"
        , func: "handleSingleResult_"
        , url: String(c.o)
      };
      try {
        d = JSON.parse(b)
      } catch (f) {
        throw a =
          Xg.K(), c.js = b, c.error = f.message, a.log("jsonParseErr", c), f;
      }
      "array" == r(d) && (d = new $i(d));
      a(d)
    }
  };
  var fj = {}
    , ej = (fj[1] = 15, fj[2] = 16, fj[3] = 17, fj[4] = 18, fj[5] = 19, fj[6] = 20, fj[7] = 21, fj[8] = 22, fj[9] = 23, fj);
  var Ug = new Og
    , gj = function () {};
  ba(gj);
  var hj = function (a, b, c, d) {
    if("" != a) {
      window.selection = a;
      a = new bj;
      var e = chrome.i18n.getUILanguage ? chrome.i18n.getUILanguage() : "en";
      d = d ? d : "auto";
      var f = Qg(Ug);
      c = new Rf("source=" + c);
      var g = window.selection
        , l = a.b + "/translate_a/single"
        , k = new Rf
        , m = new Rf;
      k.set("client", "gtx");
      k.set("sl", d);
      k.set("tl", f);
      k.set("hl", e);
      e = ["t", "bd"];
      k.remove("dt");
      0 < e.length && (k.g = null, k.a.set("dt", Ga(e)), k.b = qa(k.b) + e.length);
      k.set("dj", "1");
      c && k.Ib(c);
      m.set("q", g);
      dj(a, l, k, m, u(a.g, a, b, void 0))
    }
  };
  gj.prototype.a = function (a, b, c, d) {
    if(null != d) {
      for(var e = d.src, f = Qg(Ug), g = [], l = [], k = d.sentences, m = 0; m < k.length; m++) g.push(k[m].orig), l.push(k[m].trans);
      g = g.join("");
      l = l.join("");
      k = Vg("tl")[f].toUpperCase();
      m = Vg("sl");
      var q = []
        , D;
      for(D in m) q.push([D, m[D]]);
      d = {
        query: b
        , Yb: l
        , Xb: k
        , Vb: e
        , Wb: q
        , Hb: d.dict
        , popup: a
      };
      x(Wg, "Soy template may not be null.");
      d = zg(Wg(d || yg, void 0, void 0));
      Qb(x(c), d);
      d = Vc("gtx-lang-selector", c);
      P(d, "change", u(this.b, this, a, b, c), !1, this);
      b = new Gg;
      d = Vc("gtx-source-audio", c);
      Ne(b, d);
      Kg(b
        , g, e);
      b = new Gg;
      g = Vc("gtx-target-audio", c);
      Ne(b, g);
      Kg(b, l, f);
      e = "https://translate.google.com/?source=gtx_m#" + e + "/" + f + "/" + encodeURIComponent(window.selection);
      a ? (a = Uc(document, "more"), a.setAttribute("href", e), c = new V("", void 0, 4), Me(c, Uc(document, "new-translation")), ze(Uc(document, "new-translation"), !0), c = Uc(document, "translate-page"), hd(a, Mg("MSG_OPEN_IN_TRANSLATE")), c.className = "gtx-a", c.setAttribute("style", "margin-left: 0px;"), ze(a, !0)) : (a = dd(document, "a"), a.id = "off", a.className = "gtx-a", a.setAttribute("target"
        , "_blank"), hd(a, Mg("MSG_FOOTER_OPTIONS")
        .toUpperCase()), a.setAttribute("href", chrome.runtime.getURL("options.html")), ed(c, a), a = dd(document, "a"), a.id = "more", a.setAttribute("class", "gtx-a"), a.setAttribute("target", "_blank"), hd(a, Mg("MSG_MORE")), a.setAttribute("href", e), a.setAttribute("style", "color: #A2A2A2; float: right; padding-top: 16px;"), ed(c, a))
    } else hd(Uc(document, "translation"), Mg("MSG_TRANSLATION_ERROR"))
  };
  gj.prototype.b = function (a, b, c, d) {
    hj(b, u(this.a, this, a, b, c), "ls", d.target.value)
  };
  var jj = function (a, b) {
    R.call(this);
    this.a = new Q(this);
    a = a || null;
    ij(this);
    this.H = a;
    b && (this.oa = b)
  };
  w(jj, R);
  h = jj.prototype;
  h.H = null;
  h.kb = null;
  h.ma = !1;
  h.cb = -1;
  h.oa = "toggle_display";
  h.m = function () {
    return this.H
  };
  var ij = function (a) {
    if(a.ma) throw Error("Can not change this state of the popup while showing.");
  };
  jj.prototype.isVisible = function () {
    return this.ma
  };
  jj.prototype.b = p;
  var kj = function (a, b) {
    a.ma && a.dispatchEvent({
      type: "beforehide"
      , target: b
    }) && (a.a && a.a.removeAll(), a.ma = !1, la(), a.g ? (Pd(a.g, "end", v(a.lb, b), !1, a), a.g.play()) : a.lb(b))
  };
  h = jj.prototype;
  h.lb = function (a) {
    "toggle_display" == this.oa ? this.Pb() : "move_offscreen" == this.oa && (this.H.style.top = "-10000px");
    this.dispatchEvent({
      type: "hide"
      , target: a
    })
  };
  h.Pb = function () {
    this.H.style.visibility = "hidden";
    ze(this.H, !1)
  };
  h.Cb = function () {
    this.dispatchEvent("show")
  };
  h.Bb = function (a) {
    a = a.target;
    gd(this.H, a) || lj(this, a) || 150 > la() - this.cb || kj(this, a)
  };
  h.Ab = function (a) {
    var b = N(this.H);
    if("undefined" != typeof document.activeElement) {
      if(a = b.activeElement, !a || gd(this.H, a) || "BODY" == a.tagName || lj(this, a)) return
    } else if(a.target != b) return;
    150 > la() - this.cb || kj(this)
  };
  var lj = function (a, b) {
    return za(a.kb || [], function (c) {
      return b === c || gd(c, b)
    })
  };
  jj.prototype.v = function () {
    jj.s.v.call(this);
    this.a.V();
    td(this.h);
    td(this.g);
    delete this.H;
    delete this.a;
    delete this.kb
  };
  var mj = function (a, b) {
    this.i = b || void 0;
    jj.call(this, a)
  };
  w(mj, jj);
  mj.prototype.b = function () {
    if(this.i) {
      var a = !this.isVisible() && "move_offscreen" != this.oa
        , b = this.m();
      a && (b.style.visibility = "hidden", ze(b, !0));
      this.i.ob(this.o);
      a && ze(b, !1)
    }
  };
  var nj = function (a) {
    var b = a.Ub;
    a = a.uid;
    a = '<div class="' + U("jfk-bubble") + '" role="alertdialog"' + (a ? ' aria-describedby="' + U(a) + '"' : "") + '><div class="' + U("jfk-bubble-content-id") + '"' + (a ? ' id="' + U(a) + '"' : "") + "></div>";
    b && (b = a += '<div class="' + U("jfk-bubble-closebtn-id") + " " + U("jfk-bubble-closebtn") + '" aria-label="', a = "Close".replace(gg, hg), a = b + a + '" role="button" tabindex=0></div>');
    a += '<div class="' + U("jfk-bubble-arrow-id") + " " + U("jfk-bubble-arrow") + '"><div class="' + U("jfk-bubble-arrowimplbefore") + '"></div><div class="' +
      U("jfk-bubble-arrowimplafter") + '"></div></div></div>';
    return bg(a)
  };
  nj.a = "jfk.templates.bubble.main";
  var oj = function () {}
    , pj = new oj
    , qj = ["click", "keydown", "keyup"];
  oj.prototype.listen = function (a, b, c, d, e) {
    var f = function (g) {
      var l = Qd(b)
        , k = g.target;
      k = t(k) && 1 == k.nodeType ? g.target.getAttribute("role") || null : null;
      "click" == g.type && Dd(g) ? l.call(d, g) : 13 != g.keyCode && 3 != g.keyCode || "keyup" == g.type ? 32 != g.keyCode || "keyup" != g.type || "button" != k && "tab" != k || (l.call(d, g), g.preventDefault()) : (g.type = "keypress", l.call(d, g))
    };
    f.Rb = b;
    f.Tb = d;
    e ? e.listen(a, qj, f, c) : P(a, qj, f, c)
  };
  oj.prototype.N = function (a, b, c, d, e) {
    for(var f, g = 0; f = qj[g]; g++) {
      var l = a;
      var k = f;
      var m = !!c;
      k = Fd(l) ? l.Fa(k, m) : l ? (l = Sd(l)) ? l.Fa(k, m) : [] : [];
      for(l = 0; m = k[l]; l++) {
        var q = m.listener;
        if(q.Rb == b && q.Tb == d) {
          e ? e.N(a, f, m.listener, c, d) : Wd(a, f, m.listener, c, d);
          break
        }
      }
    }
  };
  var rj = function () {
    R.call(this);
    this.b = 0;
    this.endTime = null
  };
  w(rj, R);
  rj.prototype.onStop = function () {
    this.dispatchEvent("stop")
  };
  var sj = function (a, b) {
      Array.isArray(b) || (b = [b]);
      x(0 < b.length, "At least one Css3Property should be specified.");
      b = ya(b, function (c) {
        if("string" === typeof c) return c;
        sa(c, "Expected css3 property to be an object.");
        var d = c.Db + " " + c.duration + "s " + c.timing + " " + c.delay + "s";
        x(c.Db && "number" === typeof c.duration && c.timing && "number" === typeof c.delay, "Unexpected css3 property value: %s", d);
        return d
      });
      je(a, "transition", b.join(","))
    }
    , tj = Ha(function () {
      if(F) return J("10.0");
      var a = dd(document, "DIV")
        , b = H ? "-webkit" : G ?
        "-moz" : F ? "-ms" : ac ? "-o" : null
        , c = {
          transition: "opacity 1s linear"
        };
      b && (c[b + "-transition"] = "opacity 1s linear");
      b = {
        style: c
      };
      if(!Hb.test("div")) throw Error("Invalid tag name <div>.");
      if("DIV" in Jb) throw Error("Tag name <div> is not allowed for SafeHtml.");
      c = null;
      var d = "";
      if(b)
        for(m in b) {
          if(!Hb.test(m)) throw Error('Invalid attribute name "' + m + '".');
          var e = b[m];
          if(null != e) {
            var f = m;
            var g = e;
            if(g instanceof Ra) g = Sa(g);
            else if("style" == f.toLowerCase()) {
              e = void 0;
              if(!t(g)) throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' +
                typeof g + " given: " + g);
              if(!(g instanceof nb)) {
                var l = "";
                for(e in g) {
                  if(!/^[-_a-zA-Z0-9]+$/.test(e)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + e);
                  var k = g[e];
                  null != k && (k = Array.isArray(k) ? ya(k, rb)
                    .join(" ") : rb(k), l += e + ":" + k + ";")
                }
                g = l ? ob(l) : pb
              }
              g instanceof nb && g.constructor === nb && g.b === mb ? e = g.a : (y("expected object of type SafeStyle, got '" + g + "' of type " + r(g)), e = "type_error:SafeStyle");
              g = e
            } else {
              if(/^on/i.test(f)) throw Error('Attribute "' + f + '" requires goog.string.Const value, "' + g + '" given.');
              if(f.toLowerCase() in Ib)
                if(g instanceof Va) g instanceof Va && g.constructor === Va && g.b === Ua ? e = g.a : (y("expected object of type TrustedResourceUrl, got '" + g + "' of type " + r(g)), e = "type_error:TrustedResourceUrl"), g = e.toString();
                else if(g instanceof ib) g = jb(g);
              else if("string" === typeof g) g = lb(g)
                .R();
              else throw Error('Attribute "' + f + '" on tag "div" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + g + '" given.');
            }
            g.ba && (g = g.R());
            x("string" === typeof g || "number" === typeof g, "String or number value expected, got " +
              typeof g + " with value: " + g);
            f = f + '="' + db(String(g)) + '"';
            d += " " + f
          }
        }
      var m = "<div" + d;
      d = void 0;
      null == d ? d = [] : Array.isArray(d) || (d = [d]);
      !0 === Oa.div ? (x(!d.length, "Void tag <div> does not allow content."), m += ">") : (c = Mb(d), m += ">" + Eb(c)
        .toString() + "</div>", c = c.ha());
      (b = b && b.dir) && (/^(ltr|rtl|auto)$/i.test(b) ? c = 0 : c = null);
      b = Nb(m, c);
      Rb(a, b);
      a = a.firstChild;
      x(a.nodeType == Node.ELEMENT_NODE);
      b = a.style[Tb("transition")];
      return "" != ("undefined" !== typeof b ? b : a.style[ie(a, "transition")] || "")
    });
  var uj = function (a, b, c, d, e) {
    rj.call(this);
    this.a = a;
    this.i = b;
    this.o = c;
    this.g = d;
    this.u = Array.isArray(e) ? e : [e]
  };
  w(uj, rj);
  h = uj.prototype;
  h.play = function () {
    if(1 == this.b) return !1;
    this.dispatchEvent("begin");
    this.dispatchEvent("play");
    la();
    this.b = 1;
    if(tj()) return je(this.a, this.o), this.h = xg(this.Sb, void 0, this), !0;
    this.hb(!1);
    return !1
  };
  h.Sb = function () {
    xe(this.a);
    sj(this.a, this.u);
    je(this.a, this.g);
    this.h = xg(u(this.hb, this, !1), 1E3 * this.i)
  };
  h.stop = function () {
    1 == this.b && this.hb(!0)
  };
  h.hb = function (a) {
    je(this.a, "transition", "");
    n.clearTimeout(this.h);
    je(this.a, this.g);
    this.endTime = la();
    this.b = 0;
    if(a) this.onStop();
    else this.dispatchEvent("finish");
    this.dispatchEvent("end")
  };
  h.v = function () {
    this.stop();
    uj.s.v.call(this)
  };
  h.pause = function () {
    x(!1, "Css3 transitions does not support pause action.")
  };
  var vj = function (a, b, c, d) {
    return new uj(a, .218, {
      opacity: c
    }, {
      opacity: d
    }, {
      Db: "opacity"
      , duration: .218
      , timing: b
      , delay: 0
    })
  };
  var wj = function (a) {
    He.call(this, a);
    this.A = new rg("jfk-bubble", !0);
    this.g = new mj;
    this.O = []
  };
  w(wj, He);
  wj.prototype.M = !1;
  var xj = function (a, b) {
    a = a.Ua();
    b && a && ("string" === typeof b ? hd(a, b) : b instanceof Yf ? Rb(a, Xf(b)) : b instanceof Db ? Rb(a, b) : (Rb(a, Kb), ed(a, b)))
  };
  h = wj.prototype;
  h.Ua = function () {
    return this.a ? Vc("jfk-bubble-content-id", this.a || this.h.a) : null
  };
  h.Ta = function () {
    this.a = Bg(nj, {
      Ub: !0
      , uid: "bubble-" + ia(this)
    }, this.h);
    xj(this, this.U);
    ze(this.m(), !1);
    var a = this.g
      , b = this.m();
    ij(a);
    a.H = b;
    if(!dc) {
      a = this.g;
      b = vj(this.m(), "ease-out", 0, 1);
      var c = vj(this.m(), "ease-in", 1, 0);
      a.h = b;
      a.g = c
    }
    Ue(this.m(), this.O)
  };
  h.Y = function () {
    wj.s.Y.call(this);
    Le(this)
      .listen(this.g, ["beforeshow", "show", "beforehide", "hide"], this.Ob);
    var a = Le(this)
      , b = this.a ? Vc("jfk-bubble-closebtn-id", this.a || this.h.a) : null;
    pj.listen(b, v(this.zb, !1), void 0, a.b || a, a);
    a = this.m();
    x(a, "getElement() returns null.");
    b = this.a ? Vc("jfk-bubble-arrow-id", this.a || this.h.a) : null;
    x(b, "No arrow element is found!");
    var c = this.A;
    c.a = a;
    c.i = b;
    a = this.g;
    a.i = this.A || void 0;
    a.isVisible() && a.b()
  };
  h.zb = function (a) {
    var b = this.g;
    b.h && b.h.stop();
    b.g && b.g.stop();
    if(a) {
      if(!b.ma && b.dispatchEvent("beforeshow")) {
        if(!b.H) throw Error("Caller must call setElement before trying to show the popup");
        b.b();
        a = N(b.H);
        b.a.listen(a, "mousedown", b.Bb, !0);
        if(F) {
          try {
            var c = a.activeElement
          } catch (e) {}
          for(; c && "IFRAME" == c.nodeName;) {
            try {
              var d = c.contentDocument || c.contentWindow.document
            } catch (e) {
              break
            }
            a = d;
            c = a.activeElement
          }
          b.a.listen(a, "mousedown", b.Bb, !0);
          b.a.listen(a, "deactivate", b.Ab)
        } else b.a.listen(a, "blur", b.Ab);
        "toggle_display" == b.oa ? (b.H.style.visibility = "visible", ze(b.H, !0)) : "move_offscreen" == b.oa && b.b();
        b.ma = !0;
        b.cb = la();
        b.h ? (Pd(b.h, "end", b.Cb, !1, b), b.h.play()) : b.Cb()
      }
    } else kj(b)
  };
  h.isVisible = function () {
    return this.g.isVisible()
  };
  h.v = function () {
    this.g.V();
    delete this.g;
    wj.s.v.call(this)
  };
  h.xb = function () {
    te(this.m());
    return !1
  };
  h.Ob = function (a) {
    if("show" == a.type || "hide" == a.type) {
      var b = Le(this)
        , c = this.h;
      c = F ? Zc(c.a) : c.a;
      "show" == a.type ? b.listen(c, "scroll", this.xb) : b.N(c, "scroll", this.xb)
    }
    b = this.dispatchEvent(a.type);
    this.M && "hide" == a.type && this.V();
    return b
  };
  var yj = function (a) {
      wj.call(this);
      this.M = !0;
      x(!this.J, "Must call addClassName() before rendering");
      this.O.push("gtx-bubble");
      this.A.b = a;
      this.isVisible() && this.g.b();
      var b = 2;
      parseInt(a.style.top, 10) - Yc(document)
        .scrollTop + parseInt(a.style.height, 10) / 2 < window.innerHeight / 2 && (b = 1);
      var c = 2;
      a = parseInt(a.style.left, 10) + parseInt(a.style.width, 10) / 2;
      217 >= a ? c = 0 : a >= window.innerWidth - 217 && (c = 1);
      x(!this.J, "Must call setPosition() before rendering");
      this.A.Gb = !1;
      a = this.A;
      null != b && (a.Qa = b);
      null != c && (a.Pa = c);
      a.jb =
        15;
      a.fb = -10
    }
    , zj, Aj;
  w(yj, wj);
  yj.prototype.v = function () {
    yj.s.v.call(this);
    chrome.runtime.sendMessage({
      bubbleClosed: !0
    });
    fd(Uc(document, "gtx-anchor"))
  };
  yj.prototype.u = null;
  yj.prototype.C = null;
  yj.prototype.T = function (a, b) {
    var c = document.createElement("style");
    c.textContent = b;
    this.C.appendChild(c);
    b = this.u;
    x("string" === typeof b || b.nodeType || b instanceof Yf || b instanceof Db, "Content must be a string or HTML.");
    this.U = b;
    xj(this, b);
    c = this.u.cloneNode(!1);
    c.id = "bubble-content";
    c.className = "gtx-content";
    this.C.appendChild(c);
    b = document.createElement("div");
    b.className = "content";
    b.setAttribute("style", "margin: 0");
    c.appendChild(b);
    c = this.u.cloneNode(!1);
    c.id = "translation";
    c.style.display = "inline";
    b.appendChild(c);
    Bj.a(!1, window.selection, c, a);
    this.isVisible() && this.g.b()
  };
  var Dj = function (a, b, c) {
      var d = Uc(document, "gtx-trans");
      Zd(d);
      fd(d);
      hj(b, v(Cj, a), "icon", c)
    }
    , Hj = function (a) {
      if("0" != Sg.a) {
        var b = window.getSelection()
          , c = b.toString()
          .trim();
        Ej(c) && (Pg ? Fj(b, function (d) {
          if(!Tg(d)) {
            if("zh" == d || "zh-Hant" == d) d = "zh-CN";
            Gj(a, b, c, d)
          }
        }) : !Pg && "1" == Sg.a && Sg.h && Tg(zj) || Gj(a, b, c))
      }
    }
    , Ij = function (a, b, c) {
      if(a) {
        var d = a.innerText || a.textContent || "";
        d = decodeURIComponent(encodeURIComponent(d.trim()));
        chrome.i18n.detectLanguage(d, function (e) {
          e.isReliable ? c(e.languages[0].language) : 0 < b ? Ij(a.parentNode
            , b - 1, c) : c("")
        })
      } else c("")
    }
    , Gj = function (a, b, c, d) {
      b = b.getRangeAt(0)
        .getBoundingClientRect();
      if(0 != b.top || 0 != b.left)
        if("1" == Sg.a) {
          var e = dd(document, "div");
          e.className = "gtx-trans-icon";
          var f = dd(document, "div");
          f.appendChild(e);
          f.id = "gtx-trans";
          f.style.position = "absolute";
          f.style.left = a.clientX + Yc(document)
            .scrollLeft - 13 + "px";
          a = a.clientY;
          a - b.top > b.height / 2 ? a = b.bottom + 1 : a = b.top - 1 - 27;
          f.style.top = a + Yc(document)
            .scrollTop + "px";
          document.body.appendChild(f);
          P(f, "click", v(Dj, b, c, d))
        } else hj(c, v(Cj, b), "bubble"
          , d)
    }
    , Fj = function (a, b) {
      var c = a.toString()
        .trim();
      c = decodeURIComponent(encodeURIComponent(c));
      chrome.i18n.detectLanguage(c, function (d) {
        var e = null;
        if(d.isReliable) return e = d.languages[0].language, b(e);
        Ij(a.anchorNode, 3, function (f) {
          b(f)
        })
      })
    }
    , Ej = function (a) {
      var b = /^[0-9!@#$\u20ac\u00a3%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
      return 0 < a.length && !Vc("gtx-bubble") && 250 > a.length && !b.test(a) && 400 < window.innerWidth
    }
    , Cj = function (a, b) {
      if("1" == Sg.a || b.src != Qg(Sg)) {
        var c = dd(document, "div");
        c.id = "gtx-anchor";
        c.style.position =
          "absolute";
        c.style.visibility = "hidden";
        c.style.left = String(a.left + Yc(document)
          .scrollLeft + "px");
        c.style.top = String(a.top + Yc(document)
          .scrollTop + "px");
        c.style.width = String(a.right - a.left + 1 + "px");
        c.style.height = String(a.height + "px");
        document.body.appendChild(c);
        window.a = new yj(c);
        Me(window.a, document.body);
        a = window.a;
        a.u = document.createElement("div");
        a.u.id = "gtx-host";
        a.u.setAttribute("style", "min-width: 200px; max-width: 400px;");
        a.C = a.u.attachShadow({
          mode: "closed"
        });
        Jj(chrome.runtime.getURL("popup_css_compiled.css")
          , u(a.T, a, b));
        window.a.zb(!0)
      }
    }
    , Jj = function (a, b) {
      var c = new XMLHttpRequest;
      c.open("GET", a, !0);
      c.onload = function () {
        var d = null;
        200 === c.status && (d = c.response);
        return b(d)
      };
      c.send()
    };
  chrome.runtime.onMessage.addListener(function (a) {
    a["gtx.detected"] && (zj = a["gtx.detected"], Hj(Aj))
  });
  var Sg = new Og
    , Bj = gj.K();
  P(window, "mouseup", function (a) {
    if(0 == a.button && !Uc(document, "gtx-trans")) {
      try {
        chrome.runtime.sendMessage({
          test: 1
        })
      } catch (b) {
        return
      }
      Pg || "1" != Sg.a || !Sg.h || zj ? window.setTimeout(v(Hj, a), 0) : (Aj = a, chrome.runtime.sendMessage({
        detectLanguage: 1
      }))
    }
  });
  P(window, "mousedown", function (a) {
    var b = Uc(document, "gtx-trans");
    b && (gd(b, a.target) ? a.preventDefault() : (Zd(b), fd(b)));
    a.target instanceof HTMLElement && -1 != a.target.className.indexOf("jfk-bubble-closebtn") && a.preventDefault()
  }, !0);
  var Kj = function () {
      window.a && window.a.V()
    }
    , Lj = ["disposeWindowBubble"]
    , Mj = n;
  Lj[0] in Mj || "undefined" == typeof Mj.execScript || Mj.execScript("var " + Lj[0]);
  for(var Nj; Lj.length && (Nj = Lj.shift());) Lj.length || void 0 === Kj ? Mj[Nj] && Mj[Nj] !== Object.prototype[Nj] ? Mj = Mj[Nj] : Mj = Mj[Nj] = {} : Mj[Nj] = Kj;
})();
