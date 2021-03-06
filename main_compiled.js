/* Copyright 2014 Google */
(function () {
  /*

   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
  var k = this || self
    , aa = /^[\w+/_-]+[=]{0,2}$/
    , m = null
    , n = function () {}
    , p = function (a) {
      var b = typeof a;
      if("object" == b)
        if(a) {
          if(a instanceof Array) return "array";
          if(a instanceof Object) return b;
          var c = Object.prototype.toString.call(a);
          if("[object Window]" == c) return "object";
          if("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
          if("[object Function]" == c || "undefined" != typeof a.call && "undefined" !=
            typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
        } else return "null";
      else if("function" == b && "undefined" == typeof a.call) return "object";
      return b
    }
    , q = function (a) {
      return "function" == p(a)
    }
    , ba = function (a) {
      var b = typeof a;
      return "object" == b && null != a || "function" == b
    }
    , ca = function (a, b, c) {
      return a.call.apply(a.bind, arguments)
    }
    , da = function (a, b, c) {
      if(!a) throw Error();
      if(2 < arguments.length) {
        var e = Array.prototype.slice.call(arguments, 2);
        return function () {
          var d = Array.prototype.slice.call(arguments);
          Array.prototype.unshift.apply(d, e);
          return a.apply(b, d)
        }
      }
      return function () {
        return a.apply(b, arguments)
      }
    }
    , r = function (a, b, c) {
      Function.prototype.bind && -1 != Function.prototype.bind.toString()
        .indexOf("native code") ? r = ca : r = da;
      return r.apply(null, arguments)
    }
    , ea = Date.now || function () {
      return +new Date
    }
    , t = function (a, b) {
      function c() {}
      c.prototype = b.prototype;
      a.prototype = new c;
      a.prototype.constructor = a
    };
  var u = function (a, b) {
      return a.replace(/\{\{\$.*?\}\}/g, function (c) {
        c = c.substr(3, c.length - 5);
        return String(b[c]) || ""
      })
    }
    , v = function (a) {
      a = String(a)
        .toLowerCase()
        .replace("_", "-");
      if("zh-cn" == a) return "zh-CN";
      if("zh-tw" == a) return "zh-TW";
      var b = a.indexOf("-");
      a = 0 <= b ? a.substring(0, b) : a;
      return "zh" == a ? "zh-CN" : a
    }
    , fa = function () {
      var a = chrome.i18n.getMessage("MSG_FOOTER_TRANSLATE");
      return chrome.i18n.getMessage(a)
    }
    , ha = function (a, b) {
      return "https://translate.google.com/?source=gtx_c#auto/" + a + "/" + encodeURIComponent(b)
    };
  var w = function (a) {
    if(Error.captureStackTrace) Error.captureStackTrace(this, w);
    else {
      var b = Error()
        .stack;
      b && (this.stack = b)
    }
    a && (this.message = String(a))
  };
  t(w, Error);
  w.prototype.name = "CustomError";
  var x = function (a, b) {
    a = a.split("%s");
    for(var c = "", e = a.length - 1, d = 0; d < e; d++) c += a[d] + (d < b.length ? b[d] : "%s");
    w.call(this, c + a[e])
  };
  t(x, w);
  x.prototype.name = "AssertionError";
  var ia = function (a, b, c, e) {
      var d = "Assertion failed";
      if(c) {
        d += ": " + c;
        var f = e
      } else a && (d += ": " + a, f = b);
      throw new x("" + d, f || []);
    }
    , y = function (a, b, c) {
      a || ia("", null, b, Array.prototype.slice.call(arguments, 2));
      return a
    }
    , z = function (a, b) {
      throw new x("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
    }
    , A = function (a, b, c) {
      q(a) || ia("Expected function but got %s: %s.", [p(a), a], b, Array.prototype.slice.call(arguments, 2))
    };
  var ka = Array.prototype.some ? function (a, b) {
    y(null != a.length);
    return Array.prototype.some.call(a, b, void 0)
  } : function (a, b) {
    for(var c = a.length, e = "string" === typeof a ? a.split("") : a, d = 0; d < c; d++)
      if(d in e && b.call(void 0, e[d], d, a)) return !0;
    return !1
  };
  var B;
  a: {
    var la = k.navigator;
    if(la) {
      var ma = la.userAgent;
      if(ma) {
        B = ma;
        break a
      }
    }
    B = ""
  };
  var na = function (a, b) {
      for(var c in a) b.call(void 0, a[c], c, a)
    }
    , oa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ")
    , pa = function (a, b) {
      for(var c, e, d = 1; d < arguments.length; d++) {
        e = arguments[d];
        for(c in e) a[c] = e[c];
        for(var f = 0; f < oa.length; f++) c = oa[f], Object.prototype.hasOwnProperty.call(e, c) && (a[c] = e[c])
      }
    };
  var C = function (a, b) {
    a: {
      try {
        var c = a && a.ownerDocument
          , e = c && (c.defaultView || c.parentWindow);
        e = e || k;
        if(e.Element && e.Location) {
          var d = e;
          break a
        }
      } catch (g) {}
      d = null
    }
    if(d && "undefined" != typeof d[b] && (!a || !(a instanceof d[b]) && (a instanceof d.Location || a instanceof d.Element))) {
      if(ba(a)) try {
        var f = a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a)
      } catch (g) {
        f = "<object could not be stringified>"
      } else f = void 0 === a ? "undefined" : null === a ? "null" : typeof a;
      z("Argument is not a %s (or a non-Element, non-Location mock); got: %s"
        , b, f)
    }
  };
  var E = function (a, b) {
    this.a = a === D && b || "";
    this.b = qa
  };
  E.prototype.o = !0;
  E.prototype.m = function () {
    return this.a
  };
  E.prototype.toString = function () {
    return "Const{" + this.a + "}"
  };
  var ra = function (a) {
      if(a instanceof E && a.constructor === E && a.b === qa) return a.a;
      z("expected object of type Const, got '" + a + "'");
      return "type_error:Const"
    }
    , qa = {}
    , D = {}
    , sa = new E(D, "");
  var G = function (a, b) {
    this.a = a === F && b || "";
    this.b = ta
  };
  G.prototype.o = !0;
  G.prototype.m = function () {
    return this.a.toString()
  };
  G.prototype.toString = function () {
    return "TrustedResourceUrl{" + this.a + "}"
  };
  var H = function (a) {
      if(a instanceof G && a.constructor === G && a.b === ta) return a.a;
      z("expected object of type TrustedResourceUrl, got '" + a + "' of type " + p(a));
      return "type_error:TrustedResourceUrl"
    }
    , ua = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/
    , ta = {}
    , va = function (a, b, c) {
      if(null == c) return b;
      if("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
      for(var e in c) {
        var d = c[e];
        d = Array.isArray(d) ? d : [d];
        for(var f = 0; f < d.length; f++) {
          var g = d[f];
          null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(e) + "=" + encodeURIComponent(String(g)))
        }
      }
      return b
    }
    , F = {};
  var J = function (a, b) {
    this.a = a === I && b || "";
    this.b = wa
  };
  J.prototype.o = !0;
  J.prototype.m = function () {
    return this.a.toString()
  };
  J.prototype.toString = function () {
    return "SafeUrl{" + this.a + "}"
  };
  var xa = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-wav|wav|webm)|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime))(?:;\w+=(?:\w+|"[\w;=]+"))*$/i
    , ya = /^data:([^,]*);base64,[a-z0-9+\/]+=*$/i
    , za = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i
    , wa = {}
    , I = {};
  var K = function () {
    this.a = "";
    this.b = Aa
  };
  K.prototype.o = !0;
  K.prototype.m = function () {
    return this.a.toString()
  };
  K.prototype.toString = function () {
    return "SafeHtml{" + this.a + "}"
  };
  var Ca = function () {
      var a = Ba;
      if(a instanceof K && a.constructor === K && a.b === Aa) return a.a;
      z("expected object of type SafeHtml, got '" + a + "' of type " + p(a));
      return "type_error:SafeHtml"
    }
    , Aa = {}
    , Da = function (a) {
      var b = new K;
      b.a = a;
      return b
    };
  Da("<!DOCTYPE html>");
  var Ba = Da("");
  Da("<br>");
  var Ea = function (a) {
      var b = L;
      C(b, "HTMLAudioElement");
      if(a instanceof J) var c = a;
      else a: if(c = a, a = /^data:audio\//i.test(a), !(c instanceof J)) {
        c = "object" == typeof c && c.o ? c.m() : String(c);
        if(a && /^data:/i.test(c)) {
          a = c.replace(/(%0A|%0D)/g, "");
          var e = a.match(ya);
          e = e && xa.test(e[1]);
          a = new J(I, e ? a : "about:invalid#zClosurez");
          if(a.m() == c) {
            c = a;
            break a
          }
        }
        y(za.test(c), "%s does not match the safe URL pattern", c) || (c = "about:invalid#zClosurez");
        c = new J(I, c)
      }
      c instanceof J && c.constructor === J && c.b === wa ? c = c.a : (z("expected object of type SafeUrl, got '" +
        c + "' of type " + p(c)), c = "type_error:SafeUrl");
      b.src = c
    }
    , Fa = function (a) {
      var b = new G(F, ra(sa));
      C(a, "HTMLIFrameElement");
      a.src = H(b)
        .toString()
    }
    , Ga = function (a, b) {
      C(a, "HTMLScriptElement");
      a.src = H(b);
      if(null === m) b: {
        b = k.document;
        if((b = b.querySelector && b.querySelector("script[nonce]")) && (b = b.nonce || b.getAttribute("nonce")) && aa.test(b)) {
          m = b;
          break b
        }
        m = ""
      }
      b = m;
      b && a.setAttribute("nonce", b)
    };
  var Ia = function (a, b) {
      na(b, function (c, e) {
        c && "object" == typeof c && c.o && (c = c.m());
        "style" == e ? a.style.cssText = c : "class" == e ? a.className = c : "for" == e ? a.htmlFor = c : Ha.hasOwnProperty(e) ? a.setAttribute(Ha[e], c) : 0 == e.lastIndexOf("aria-", 0) || 0 == e.lastIndexOf("data-", 0) ? a.setAttribute(e, c) : a[e] = c
      })
    }
    , Ha = {
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
    , Ja = function (a) {
      var b = document;
      a = String(a);
      "application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
      return b.createElement(a)
    };
  var Ka = function (a, b) {
    this.c = a;
    this.f = b;
    this.b = 0;
    this.a = null
  };
  Ka.prototype.get = function () {
    if(0 < this.b) {
      this.b--;
      var a = this.a;
      this.a = a.next;
      a.next = null
    } else a = this.c();
    return a
  };
  var La = function (a, b) {
    a.f(b);
    100 > a.b && (a.b++, b.next = a.a, a.a = b)
  };
  var Ma = function (a) {
      k.setTimeout(function () {
        throw a;
      }, 0)
    }
    , Na, Oa = function () {
      var a = k.MessageChannel;
      "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && -1 == B.indexOf("Presto") && (a = function () {
        var d = Ja("IFRAME");
        d.style.display = "none";
        Fa(d);
        document.documentElement.appendChild(d);
        var f = d.contentWindow;
        d = f.document;
        d.open();
        d.write(Ca());
        d.close();
        var g = "callImmediate" + Math.random()
          , h = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
        d = r(function (l) {
          if(("*" == h || l.origin == h) && l.data == g) this.port1.onmessage()
        }, this);
        f.addEventListener("message", d, !1);
        this.port1 = {};
        this.port2 = {
          postMessage: function () {
            f.postMessage(g, h)
          }
        }
      });
      if("undefined" !== typeof a && -1 == B.indexOf("Trident") && -1 == B.indexOf("MSIE")) {
        var b = new a
          , c = {}
          , e = c;
        b.port1.onmessage = function () {
          if(void 0 !== c.next) {
            c = c.next;
            var d = c.A;
            c.A = null;
            d()
          }
        };
        return function (d) {
          e.next = {
            A: d
          };
          e = e.next;
          b.port2.postMessage(0)
        }
      }
      return function (d) {
        k.setTimeout(d, 0)
      }
    };
  var Pa = function () {
      this.b = this.a = null
    }
    , Ra = new Ka(function () {
      return new Qa
    }, function (a) {
      a.reset()
    });
  Pa.prototype.add = function (a, b) {
    var c = Ra.get();
    c.set(a, b);
    this.b ? this.b.next = c : (y(!this.a), this.a = c);
    this.b = c
  };
  Pa.prototype.remove = function () {
    var a = null;
    this.a && (a = this.a, this.a = this.a.next, this.a || (this.b = null), a.next = null);
    return a
  };
  var Qa = function () {
    this.next = this.b = this.a = null
  };
  Qa.prototype.set = function (a, b) {
    this.a = a;
    this.b = b;
    this.next = null
  };
  Qa.prototype.reset = function () {
    this.next = this.b = this.a = null
  };
  var Va = function (a, b) {
      M || Sa();
      Ta || (M(), Ta = !0);
      Ua.add(a, b)
    }
    , M, Sa = function () {
      if(k.Promise && k.Promise.resolve) {
        var a = k.Promise.resolve(void 0);
        M = function () {
          a.then(Wa)
        }
      } else M = function () {
        var b = Wa
          , c;
        !(c = !q(k.setImmediate)) && (c = k.Window && k.Window.prototype) && (c = -1 == B.indexOf("Edge") && k.Window.prototype.setImmediate == k.setImmediate);
        c ? (Na || (Na = Oa()), Na(b)) : k.setImmediate(b)
      }
    }
    , Ta = !1
    , Ua = new Pa
    , Wa = function () {
      for(var a; a = Ua.remove();) {
        try {
          a.a.call(a.b)
        } catch (b) {
          Ma(b)
        }
        La(Ra, a)
      }
      Ta = !1
    };
  var Xa = function (a) {
    if(!a) return !1;
    try {
      return !!a.$goog_Thenable
    } catch (b) {
      return !1
    }
  };
  var P = function (a) {
      this.a = 0;
      this.i = void 0;
      this.f = this.b = this.c = null;
      this.g = this.h = !1;
      if(a != n) try {
        var b = this;
        a.call(void 0, function (c) {
          N(b, 2, c)
        }, function (c) {
          if(!(c instanceof O)) try {
            if(c instanceof Error) throw c;
            throw Error("Promise rejected.");
          } catch (e) {}
          N(b, 3, c)
        })
      } catch (c) {
        N(this, 3, c)
      }
    }
    , Ya = function () {
      this.next = this.f = this.c = this.b = this.a = null;
      this.g = !1
    };
  Ya.prototype.reset = function () {
    this.f = this.c = this.b = this.a = null;
    this.g = !1
  };
  var Za = new Ka(function () {
      return new Ya
    }, function (a) {
      a.reset()
    })
    , $a = function (a, b, c) {
      var e = Za.get();
      e.b = a;
      e.c = b;
      e.f = c;
      return e
    };
  P.prototype.then = function (a, b, c) {
    null != a && A(a, "opt_onFulfilled should be a function.");
    null != b && A(b, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");
    return ab(this, q(a) ? a : null, q(b) ? b : null, c)
  };
  P.prototype.$goog_Thenable = !0;
  P.prototype.cancel = function (a) {
    if(0 == this.a) {
      var b = new O(a);
      Va(function () {
        bb(this, b)
      }, this)
    }
  };
  var bb = function (a, b) {
      if(0 == a.a)
        if(a.c) {
          var c = a.c;
          if(c.b) {
            for(var e = 0, d = null, f = null, g = c.b; g && (g.g || (e++, g.a == a && (d = g), !(d && 1 < e))); g = g.next) d || (f = g);
            d && (0 == c.a && 1 == e ? bb(c, b) : (f ? (e = f, y(c.b), y(null != e), e.next == c.f && (c.f = e), e.next = e.next.next) : cb(c), db(c, d, 3, b)))
          }
          a.c = null
        } else N(a, 3, b)
    }
    , fb = function (a, b) {
      a.b || 2 != a.a && 3 != a.a || eb(a);
      y(null != b.b);
      a.f ? a.f.next = b : a.b = b;
      a.f = b
    }
    , ab = function (a, b, c, e) {
      var d = $a(null, null, null);
      d.a = new P(function (f, g) {
        d.b = b ? function (h) {
            try {
              var l = b.call(e, h);
              f(l)
            } catch (ja) {
              g(ja)
            }
          } :
          f;
        d.c = c ? function (h) {
          try {
            var l = c.call(e, h);
            void 0 === l && h instanceof O ? g(h) : f(l)
          } catch (ja) {
            g(ja)
          }
        } : g
      });
      d.a.c = a;
      fb(a, d);
      return d.a
    };
  P.prototype.s = function (a) {
    y(1 == this.a);
    this.a = 0;
    N(this, 2, a)
  };
  P.prototype.u = function (a) {
    y(1 == this.a);
    this.a = 0;
    N(this, 3, a)
  };
  var N = function (a, b, c) {
      if(0 == a.a) {
        a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
        a.a = 1;
        a: {
          var e = c
            , d = a.s
            , f = a.u;
          if(e instanceof P) {
            null != d && A(d, "opt_onFulfilled should be a function.");
            null != f && A(f, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");
            fb(e, $a(d || n, f || null, a));
            var g = !0
          } else if(Xa(e)) e.then(d, f, a)
          , g = !0;
          else {
            if(ba(e)) try {
              var h = e.then;
              if(q(h)) {
                gb(e, h, d, f, a);
                g = !0;
                break a
              }
            } catch (l) {
              f.call(a, l);
              g = !0;
              break a
            }
            g = !1
          }
        }
        g ||
          (a.i = c, a.a = b, a.c = null, eb(a), 3 != b || c instanceof O || hb(a, c))
      }
    }
    , gb = function (a, b, c, e, d) {
      var f = !1
        , g = function (l) {
          f || (f = !0, c.call(d, l))
        }
        , h = function (l) {
          f || (f = !0, e.call(d, l))
        };
      try {
        b.call(a, g, h)
      } catch (l) {
        h(l)
      }
    }
    , eb = function (a) {
      a.h || (a.h = !0, Va(a.l, a))
    }
    , cb = function (a) {
      var b = null;
      a.b && (b = a.b, a.b = b.next, b.next = null);
      a.b || (a.f = null);
      null != b && y(null != b.b);
      return b
    };
  P.prototype.l = function () {
    for(var a; a = cb(this);) db(this, a, this.a, this.i);
    this.h = !1
  };
  var db = function (a, b, c, e) {
      if(3 == c && b.c && !b.g)
        for(; a && a.g; a = a.c) a.g = !1;
      if(b.a) b.a.c = null, ib(b, c, e);
      else try {
        b.g ? b.b.call(b.f) : ib(b, c, e)
      } catch (d) {
        jb.call(null, d)
      }
      La(Za, b)
    }
    , ib = function (a, b, c) {
      2 == b ? a.b.call(a.f, c) : a.c && a.c.call(a.f, c)
    }
    , hb = function (a, b) {
      a.g = !0;
      Va(function () {
        a.g && jb.call(null, b)
      })
    }
    , jb = Ma
    , O = function (a) {
      w.call(this, a)
    };
  t(O, w);
  O.prototype.name = "cancel";
  /*
   Portions of this code are from MochiKit, received by
   The Closure Authors under the MIT license. All other code is Copyright
   2005-2009 The Closure Authors. All Rights Reserved.
  */
  var Q = function (a) {
    var b = kb;
    this.g = [];
    this.G = b;
    this.D = a || null;
    this.f = this.a = !1;
    this.c = void 0;
    this.s = this.u = this.i = !1;
    this.h = 0;
    this.b = null;
    this.l = 0
  };
  Q.prototype.cancel = function (a) {
    if(this.a) this.c instanceof Q && this.c.cancel();
    else {
      if(this.b) {
        var b = this.b;
        delete this.b;
        a ? b.cancel(a) : (b.l--, 0 >= b.l && b.cancel())
      }
      this.G ? this.G.call(this.D, this) : this.s = !0;
      this.a || lb(this, new R(this))
    }
  };
  Q.prototype.C = function (a, b) {
    this.i = !1;
    mb(this, a, b)
  };
  var mb = function (a, b, c) {
      a.a = !0;
      a.c = c;
      a.f = !b;
      nb(a)
    }
    , ob = function (a) {
      if(a.a) {
        if(!a.s) throw new S(a);
        a.s = !1
      }
    }
    , lb = function (a, b) {
      ob(a);
      pb(b);
      mb(a, !1, b)
    }
    , pb = function (a) {
      y(!(a instanceof Q), "An execution sequence may not be initiated with a blocking Deferred.")
    }
    , qb = function (a, b, c, e) {
      y(!a.u, "Blocking Deferreds can not be re-used");
      a.g.push([b, c, e]);
      a.a && nb(a)
    };
  Q.prototype.then = function (a, b, c) {
    var e, d, f = new P(function (g, h) {
      e = g;
      d = h
    });
    qb(this, e, function (g) {
      g instanceof R ? f.cancel() : d(g)
    });
    return f.then(a, b, c)
  };
  Q.prototype.$goog_Thenable = !0;
  Q.prototype.isError = function (a) {
    return a instanceof Error
  };
  var rb = function (a) {
      return ka(a.g, function (b) {
        return q(b[1])
      })
    }
    , nb = function (a) {
      if(a.h && a.a && rb(a)) {
        var b = a.h
          , c = T[b];
        c && (k.clearTimeout(c.j), delete T[b]);
        a.h = 0
      }
      a.b && (a.b.l--, delete a.b);
      b = a.c;
      for(var e = c = !1; a.g.length && !a.i;) {
        var d = a.g.shift()
          , f = d[0]
          , g = d[1];
        d = d[2];
        if(f = a.f ? g : f) try {
          var h = f.call(d || a.D, b);
          void 0 !== h && (a.f = a.f && (h == b || a.isError(h)), a.c = b = h);
          if(Xa(b) || "function" === typeof k.Promise && b instanceof k.Promise) e = !0, a.i = !0
        } catch (l) {
          b = l, a.f = !0, rb(a) || (c = !0)
        }
      }
      a.c = b;
      e && (h = r(a.C, a, !0), e = r(a.C, a, !1)
        , b instanceof Q ? (qb(b, h, e), b.u = !0) : b.then(h, e));
      c && (b = new sb(b), T[b.j] = b, a.h = b.j)
    }
    , S = function () {
      w.call(this)
    };
  t(S, w);
  S.prototype.message = "Deferred has already fired";
  S.prototype.name = "AlreadyCalledError";
  var R = function () {
    w.call(this)
  };
  t(R, w);
  R.prototype.message = "Deferred was canceled";
  R.prototype.name = "CanceledError";
  var sb = function (a) {
    this.j = k.setTimeout(r(this.b, this), 0);
    this.a = a
  };
  sb.prototype.b = function () {
    y(T[this.j], "Cannot throw an error that is not scheduled.");
    delete T[this.j];
    throw this.a;
  };
  var T = {};
  var vb = function (a, b) {
      var c = b || {};
      b = c.document || document;
      var e = H(a)
        .toString()
        , d = Ja("SCRIPT")
        , f = {
          F: d
          , v: void 0
        }
        , g = new Q(f)
        , h = null
        , l = null != c.timeout ? c.timeout : 5E3;
      0 < l && (h = window.setTimeout(function () {
        U(d, !0);
        lb(g, new tb(1, "Timeout reached for loading script " + e))
      }, l), f.v = h);
      d.onload = d.onreadystatechange = function () {
        d.readyState && "loaded" != d.readyState && "complete" != d.readyState || (U(d, c.H || !1, h), ob(g), pb(null), mb(g, !0, null))
      };
      d.onerror = function () {
        U(d, !0, h);
        lb(g, new tb(0, "Error while loading script " + e))
      };
      f = c.attributes || {};
      pa(f, {
        type: "text/javascript"
        , charset: "UTF-8"
      });
      Ia(d, f);
      Ga(d, a);
      ub(b)
        .appendChild(d);
      return g
    }
    , ub = function (a) {
      var b;
      return (b = (a || document)
        .getElementsByTagName("HEAD")) && 0 != b.length ? b[0] : a.documentElement
    }
    , kb = function () {
      if(this && this.F) {
        var a = this.F;
        a && "SCRIPT" == a.tagName && U(a, !0, this.v)
      }
    }
    , U = function (a, b, c) {
      null != c && k.clearTimeout(c);
      a.onload = n;
      a.onerror = n;
      a.onreadystatechange = n;
      b && window.setTimeout(function () {
        a && a.parentNode && a.parentNode.removeChild(a)
      }, 0)
    }
    , tb = function (a, b) {
      var c =
        "Jsloader error (code #" + a + ")";
      b && (c += ": " + b);
      w.call(this, c);
      this.code = a
    };
  t(tb, w);
  var wb = function (a) {
      this.a = a;
      this.v = 5E3
    }
    , xb = 0;
  wb.prototype.send = function (a, b, c, e) {
    if(a) {
      var d = {};
      for(f in a) d[f] = a[f];
      a = d
    } else a = {};
    e = e || "_" + (xb++)
      .toString(36) + ea()
      .toString(36);
    d = "_callbacks___" + e;
    b && (k[d] = yb(e, b), a.cb = d);
    b = {
      timeout: this.v
      , H: !0
    };
    d = H(this.a)
      .toString();
    d = ua.exec(d);
    var f = d[3] || "";
    d = new G(F, d[1] + va("?", d[2] || "", a) + va("#", f, void 0));
    b = vb(d, b);
    qb(b, null, zb(e, a, c), void 0);
    return {
      j: e
      , B: b
    }
  };
  wb.prototype.cancel = function (a) {
    a && (a.B && a.B.cancel(), a.j && Ab(a.j, !1))
  };
  var zb = function (a, b, c) {
      return function () {
        Ab(a, !1);
        c && c(b)
      }
    }
    , yb = function (a, b) {
      return function (c) {
        Ab(a, !0);
        b.apply(void 0, arguments)
      }
    }
    , Ab = function (a, b) {
      a = "_callbacks___" + a;
      if(k[a])
        if(b) try {
          delete k[a]
        } catch (c) {
          k[a] = void 0
        } else k[a] = n
    };
  var V = function () {
      this.b = [];
      chrome.i18n.getAcceptLanguages(r(this.h, this));
      this.a = "";
      this.f = "1";
      this.c = {};
      chrome.storage.local.get(null, r(this.l, this));
      Bb(this)
    }
    , Db = function () {
      var a = Cb;
      if("" != a.a) a = a.a;
      else a: {
        for(var b = 0; b < a.b.length; b++) {
          var c = v(a.b[b]);
          if(a.c[c]) {
            a = c;
            break a
          }
        }
        a = "en"
      }
      return a
    };
  V.prototype.l = function (a) {
    "gtxTargetLang" in a && (this.a = a.gtxTargetLang);
    "gtxShowBubble" in a && (this.f = a.gtxShowBubble);
    "gtxSourceLangList" in a && Eb(this, a.gtxSourceLangList);
    "gtxTargetLangList" in a && (this.c = Eb(this, a.gtxTargetLangList));
    this.loaded = !0;
    var b = (new Date)
      .getTime()
      , c = "gtxTimeStamp" in a ? a.gtxTimeStamp : 0
      , e = chrome.i18n.getUILanguage ? chrome.i18n.getUILanguage() : "en";
    a = "gtxDisplayLanguage" in a ? a.gtxDisplayLanguage : "";
    if(864E5 < Math.abs(b - c) || e != a) b = new G(F, ra(new E(D, "https://translate.googleapis.com/translate_a/l")))
      , (new wb(b))
      .send({
        client: "gtx"
        , hl: e
      }, r(this.i, this, e))
  };
  var Eb = function (a, b) {
    var c = []
      , e;
    for(e in b) c.push({
      code: e
      , name: b[e]
    });
    c.sort(a.g);
    a = {};
    for(b = 0; b < c.length; b++) a[c[b].code] = c[b].name;
    return a
  };
  V.prototype.g = function (a, b) {
    return a.name.localeCompare(b.name)
  };
  var Bb = function (a) {
    chrome.storage.onChanged.addListener(function (b) {
      b.gtxTargetLang && (a.a = b.gtxTargetLang.newValue);
      b.gtxShowBubble && (a.f = b.gtxShowBubble.newValue)
    })
  };
  V.prototype.h = function (a) {
    this.b = a
  };
  V.prototype.i = function (a, b) {
    var c = (new Date)
      .getTime()
      , e = {};
    e.gtxSourceLangList = b.sl;
    e.gtxTargetLangList = b.tl;
    e.gtxDisplayLanguage = a;
    e.gtxTimeStamp = c;
    chrome.storage.local.set(e);
    this.c = b.tl
  };
  var Fb = u("(function(){({{$code}})();})();", {
      code: window.injection.toString()
    })
    , Gb = u("(function(){({{$code}})();})();", {
      code: window.injector.toString()
    });
  delete window.injector;
  delete window.injection;

  function Hb(a, b, c) {
    b = {
      pageLang: b
      , userLang: c
    };
    b.content = u(Fb, b)
      .replace(/\\/g, "\\\\")
      .replace(/'/g, "\\'")
      .replace(/"/g, '\\"')
      .replace(/\n/g, "\\n");
    chrome.tabs.executeScript(a, {
      code: u(Gb, b)
    }, function () {
      chrome.runtime.lastError && console.error(chrome.runtime.lastError.message)
    })
  }
  var Ib = function (a) {
    this.c = a;
    this.w = this.a = !1
  };
  Ib.prototype.popup = function () {
    this.a || this.w || (this.a = !0, this.b = "", chrome.tabs.detectLanguage(this.c, r(this.f, this)))
  };
  Ib.prototype.f = function (a) {
    if(!this.w) {
      if(!a || "und" == a || a.match("invalid")) a = "auto";
      this.b = a;
      a = v(Db());
      var b = v(this.b);
      Hb(this.c, b, a);
      this.a = !1
    }
  };
  var W = function () {
    this.a = {}
  };
  W.prototype.attach = function (a) {
    this.a[a] || (this.a[a] = new Ib(a));
    this.a[a].popup()
  };
  W.prototype.detach = function (a) {
    this.a[a] && (this.a[a].w = !0, delete this.a[a])
  };
  var Jb = new W
    , Cb = new V
    , L = Ja("AUDIO");
  chrome.runtime.onMessage.addListener(function (a, b) {
    a.audioSrc ? L.paused || a.audioSrc != L.src ? (Ea(a.audioSrc), L.load(), L.play()) : (L.pause(), L.currentTime = 0) : a.bubbleClosed || a.popupClosed ? L.pause() : a.detectLanguage && chrome.tabs.detectLanguage(function (c) {
      chrome.tabs.sendMessage(b.tab.id, {
        "gtx.detected": c
      })
    })
  });
  chrome.runtime.onConnect.addListener(function (a) {
    a.onDisconnect.addListener(function () {
      chrome.runtime.sendMessage({
        popupClosed: !0
      })
    })
  });
  chrome.runtime.onInstalled.addListener(function () {
    chrome.contextMenus.create({
      id: "translate"
      , title: fa()
      , contexts: ["selection"]
    })
  });
  chrome.contextMenus.onClicked.addListener(function (a) {
    chrome.tabs.create({
      url: ha(Db(), a.selectionText)
    })
  });
  var Kb = function () {
      return Jb
    }
    , X = ["translate", "getTranslateManager"]
    , Y = k;
  X[0] in Y || "undefined" == typeof Y.execScript || Y.execScript("var " + X[0]);
  for(var Z; X.length && (Z = X.shift());) X.length || void 0 === Kb ? Y[Z] && Y[Z] !== Object.prototype[Z] ? Y = Y[Z] : Y = Y[Z] = {} : Y[Z] = Kb;
  W.prototype.attach = W.prototype.attach;
  W.prototype.detach = W.prototype.detach;
})();
