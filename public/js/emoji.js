/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 */
! function() {
    "use strict";

    function r(e) { if (null === e) return "null"; if (void 0 === e) return "undefined"; var t = typeof e; return "object" == t && (Array.prototype.isPrototypeOf(e) || e.constructor && "Array" === e.constructor.name) ? "array" : "object" == t && (String.prototype.isPrototypeOf(e) || e.constructor && "String" === e.constructor.name) ? "string" : t }

    function f(o) {
        return m(function(e, t) {
            if (e.length !== t.length) return !1;
            for (var n = e.length, r = 0; r < n; r++)
                if (!o.eq(e[r], t[r])) return !1;
            return !0
        })
    }

    function d(l) {
        return m(function(e, t) {
            var n, r, o, i = Object.keys(e),
                a = Object.keys(t);
            if (r = f(g), o = function(e) { return t = n, Array.prototype.slice.call(e).sort(t); var t }, !m(function(e, t) { return r.eq(o(e), o(t)) }).eq(i, a)) return !1;
            for (var u = i.length, s = 0; s < u; s++) { var c = i[s]; if (!l.eq(e[c], t[c])) return !1 }
            return !0
        })
    }

    function e(r) { return function(e) { return n = typeof(t = e), (null === t ? "null" : "object" == n && (Array.prototype.isPrototypeOf(t) || t.constructor && "Array" === t.constructor.name) ? "array" : "object" == n && (String.prototype.isPrototypeOf(t) || t.constructor && "String" === t.constructor.name) ? "string" : n) === r; var t, n } }

    function t(t) { return function(e) { return typeof e === t } }

    function n(t) { return function(e) { return t === e } }

    function re(e) { return null == e }

    function V(e) { return !re(e) }

    function oe() {}

    function i(n, r) { return function() { for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]; return n(r.apply(null, e)) } }

    function a(t, n) { return function(e) { return t(n(e)) } }

    function J(e) { return function() { return e } }

    function u(e) { return e }

    function o(e, t) { return e === t }
    var m = function(e) { return { eq: e } },
        g = m(function(e, t) { return e === t }),
        p = m(function(e, t) { if (e === t) return !0; var n = r(e); return n === r(t) && (-1 !== ["undefined", "boolean", "number", "string", "function", "xml", "null"].indexOf(n) ? e === t : "array" === n ? f(p).eq(e, t) : "object" === n && d(p).eq(e, t)) }),
        K = e("string"),
        h = e("object"),
        S = e("array"),
        l = n(null),
        v = t("boolean"),
        b = n(void 0),
        y = t("function"),
        E = t("number");

    function A(r) { for (var o = [], e = 1; e < arguments.length; e++) o[e - 1] = arguments[e]; return function() { for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]; var n = o.concat(e); return r.apply(null, n) } }

    function s(t) { return function(e) { return !t(e) } }

    function C(e) { return e() }

    function w(e) { e() }

    function c() { return N }
    var T = J(!1),
        x = J(!0),
        N = { fold: function(e, t) { return e() }, isSome: T, isNone: x, getOr: u, getOrThunk: k, getOrDie: function(e) { throw new Error(e || "error: getOrDie called on none.") }, getOrNull: J(null), getOrUndefined: J(void 0), or: u, orThunk: k, map: c, each: oe, bind: c, exists: T, forall: x, filter: function() { return N }, toArray: function() { return [] }, toString: J("none()") };

    function k(e) { return e() }

    function _(e, t) { return be.call(e, t) }

    function ie(e, t) { return -1 < _(e, t) }

    function F(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            if (t(e[n], n)) return !0;
        return !1
    }

    function R(e, t) {
        for (var n = e.length, r = new Array(n), o = 0; o < n; o++) {
            var i = e[o];
            r[o] = t(i, o)
        }
        return r
    }

    function X(e, t) { for (var n = 0, r = e.length; n < r; n++) t(e[n], n) }

    function D(e, t) { for (var n = e.length - 1; 0 <= n; n--) t(e[n], n) }

    function O(e, t) {
        for (var n = [], r = [], o = 0, i = e.length; o < i; o++) {
            var a = e[o];
            (t(a, o) ? n : r).push(a)
        }
        return { pass: n, fail: r }
    }

    function U(e, t) {
        for (var n = [], r = 0, o = e.length; r < o; r++) {
            var i = e[r];
            t(i, r) && n.push(i)
        }
        return n
    }

    function B(e, n, r) { return D(e, function(e, t) { r = n(r, e, t) }), r }

    function P(e, n, r) { return X(e, function(e, t) { r = n(r, e, t) }), r }

    function L(e, t, n) { for (var r = 0, o = e.length; r < o; r++) { var i = e[r]; if (t(i, r)) return he.some(i); if (n(i, r)) break } return he.none() }

    function I(e, t) { return L(e, t, T) }

    function M(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            if (t(e[n], n)) return he.some(n);
        return he.none()
    }

    function z(e, t) {
        return function(e) {
            for (var t = [], n = 0, r = e.length; n < r; ++n) {
                if (!S(e[n])) throw new Error("Arr.flatten item " + n + " was not an array, input: " + e);
                ye.apply(t, e[n])
            }
            return t
        }(R(e, t))
    }

    function j(e, t) {
        for (var n = 0, r = e.length; n < r; ++n)
            if (!0 !== t(e[n], n)) return !1;
        return !0
    }

    function H(e) { var t = ve.call(e, 0); return t.reverse(), t }

    function q(e, t) { return U(e, function(e) { return !ie(t, e) }) }

    function $(e, t) { return 0 <= t && t < e.length ? he.some(e[t]) : he.none() }

    function W(e) { return $(e, 0) }

    function Y(e) { return $(e, e.length - 1) }

    function G(e, t) { for (var n = 0; n < e.length; n++) { var r = t(e[n], n); if (r.isSome()) return r } return he.none() }

    function Q(e, t) {
        for (var n = we(e), r = 0, o = n.length; r < o; r++) {
            var i = n[r];
            t(e[i], i)
        }
    }

    function Z(e, n) { return Se(e, function(e, t) { return { k: t, v: n(e, t) } }) }

    function ee(n) { return function(e, t) { n[t] = e } }

    function te(e, n, r, o) {
        return Q(e, function(e, t) {
            (n(e, t) ? r : o)(e, t)
        }), 1
    }

    function ne(e, t) { var n = {}; return te(e, t, ee(n), oe), n }

    function ae(e, t) { return Ee(e, t) ? he.from(e[t]) : he.none() }

    function ue(e, t) { return Ee(e, t) && void 0 !== e[t] && null !== e[t] }

    function se(e, t, n) {
        var r, o;
        if (!e) return !1;
        if (n = n || e, void 0 !== e.length) {
            for (r = 0, o = e.length; r < o; r++)
                if (!1 === t.call(n, e[r], r, e)) return !1
        } else
            for (r in e)
                if (Ee(e, r) && !1 === t.call(n, e[r], r, e)) return !1; return !0
    }

    function ce(n, r) { var o = []; return se(n, function(e, t) { o.push(r(e, t, n)) }), o }

    function le(n, r) { var o = []; return se(n, function(e, t) { r && !r(e, t, n) || o.push(e) }), o }

    function fe(e, t) {
        if (e)
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t) return n;
        return -1
    }

    function de(e, t, n, r) { for (var o = b(n) ? e[0] : n, i = 0; i < e.length; i++) o = t.call(r, o, e[i], i); return o }

    function me(e, t, n) {
        for (var r = 0, o = e.length; r < o; r++)
            if (t.call(n, e[r], r, e)) return r;
        return -1
    }

    function ge(e) { return e[e.length - 1] }
    var pe = function(n) {
            function e() { return o }

            function t(e) { return e(n) }
            var r = J(n),
                o = { fold: function(e, t) { return t(n) }, isSome: x, isNone: T, getOr: r, getOrThunk: r, getOrDie: r, getOrNull: r, getOrUndefined: r, or: e, orThunk: e, map: function(e) { return pe(e(n)) }, each: function(e) { e(n) }, bind: t, exists: t, forall: t, filter: function(e) { return e(n) ? o : N }, toArray: function() { return [n] }, toString: function() { return "some(" + n + ")" } };
            return o
        },
        he = { some: pe, none: c, from: function(e) { return null == e ? N : pe(e) } },
        ve = Array.prototype.slice,
        be = Array.prototype.indexOf,
        ye = Array.prototype.push,
        Ce = y(Array.from) ? Array.from : function(e) { return ve.call(e) },
        we = Object.keys,
        xe = Object.hasOwnProperty,
        Se = function(e, r) {
            var o = {};
            return Q(e, function(e, t) {
                var n = r(e, t);
                o[n.k] = n.v
            }), o
        },
        Ee = function(e, t) { return xe.call(e, t) },
        Ne = Array.isArray,
        ke = function() {
            return (ke = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }).apply(this, arguments)
        };

    function _e(e, t, n) {
        if (n || 2 === arguments.length)
            for (var r, o = 0, i = t.length; o < i; o++) !r && o in t || ((r = r || Array.prototype.slice.call(t, 0, o))[o] = t[o]);
        return e.concat(r || Array.prototype.slice.call(t))
    }

    function Ae(n) { var r, o = !1; return function() { for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]; return o || (o = !0, r = n.apply(null, e)), r } }

    function Te(e, t) { var n = String(t).toLowerCase(); return I(e, function(e) { return e.search(n) }) }

    function Re(e, t) { return -1 !== e.indexOf(t) }

    function De(t) { return function(e) { return e.replace(t, "") } }

    function Oe(e) { return 0 < e.length }

    function Be(e) { return !Oe(e) }

    function Pe(t) { return function(e) { return Re(e, t) } }

    function Le(e) { return window.matchMedia(e).matches }

    function Ie(e) { return null == e ? "" : ("" + e).replace(wt, "") }

    function Me(e, t) { return t ? !("array" !== t || !Ne(e)) || typeof e === t : void 0 !== e }

    function Fe(e, t) {
        for (var n = [], r = function(e) { return n.push(e), t(e) }, o = t(e);
            (o = o.bind(r)).isSome(););
        return n
    }

    function Ue(e, t) { var n = e.dom; if (1 !== n.nodeType) return !1; var r = n; if (void 0 !== r.matches) return r.matches(t); if (void 0 !== r.msMatchesSelector) return r.msMatchesSelector(t); if (void 0 !== r.webkitMatchesSelector) return r.webkitMatchesSelector(t); if (void 0 !== r.mozMatchesSelector) return r.mozMatchesSelector(t); throw new Error("Browser lacks native selectors") }

    function ze(e) { return 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType || 0 === e.childElementCount }

    function je(e, t) { return e.dom === t.dom }

    function He(e, t) { return ft().browser.isIE() ? (n = e.dom, r = t.dom, o = Node.DOCUMENT_POSITION_CONTAINED_BY, 0 != (n.compareDocumentPosition(r) & o)) : (i = e.dom) !== (a = t.dom) && i.contains(a); var n, r, o, i, a }

    function Ve() { return Ke(0, 0) }

    function qe(e) {
        function t(e) { return function() { return n === e } }
        var n = e.current,
            r = e.version;
        return { current: n, version: r, isEdge: t("Edge"), isChrome: t("Chrome"), isIE: t("IE"), isOpera: t("Opera"), isFirefox: t(tt), isSafari: t("Safari") }
    }

    function $e(e) {
        function t(e) { return function() { return n === e } }
        var n = e.current,
            r = e.version;
        return { current: n, version: r, isWindows: t(ot), isiOS: t("iOS"), isAndroid: t(it), isOSX: t("OSX"), isLinux: t("Linux"), isSolaris: t(at), isFreeBSD: t(ut), isChromeOS: t(st) }
    }

    function We(e) { if (null == e) throw new Error("Node cannot be null or undefined"); return { dom: e } }
    var Ke = function(e, t) { return { major: e, minor: t } },
        Xe = {
            nu: Ke,
            detect: function(e, t) {
                var n, r, o = String(t).toLowerCase();
                return 0 === e.length ? Ve() : (r = function(e, t) { for (var n = 0; n < e.length; n++) { var r = e[n]; if (r.test(t)) return r } }(e, n = o)) ? Ke(i(1), i(2)) : { major: 0, minor: 0 };

                function i(e) { return Number(n.replace(r, "$" + e)) }
            },
            unknown: Ve
        },
        Ye = function(e, t) { return "" === (n = t) || e.length >= n.length && e.substr(0, 0 + n.length) === n; var n },
        Ge = De(/^\s+|\s+$/g),
        Je = De(/^\s+/g),
        Qe = De(/\s+$/g),
        Ze = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
        et = { browsers: J([{ name: "Edge", versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/], search: function(e) { return Re(e, "edge/") && Re(e, "chrome") && Re(e, "safari") && Re(e, "applewebkit") } }, { name: "Chrome", brand: "Chromium", versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/, Ze], search: function(e) { return Re(e, "chrome") && !Re(e, "chromeframe") } }, { name: "IE", versionRegexes: [/.*?msie\ ?([0-9]+)\.([0-9]+).*/, /.*?rv:([0-9]+)\.([0-9]+).*/], search: function(e) { return Re(e, "msie") || Re(e, "trident") } }, { name: "Opera", versionRegexes: [Ze, /.*?opera\/([0-9]+)\.([0-9]+).*/], search: Pe("opera") }, { name: "Firefox", versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/], search: Pe("firefox") }, { name: "Safari", versionRegexes: [Ze, /.*?cpu os ([0-9]+)_([0-9]+).*/], search: function(e) { return (Re(e, "safari") || Re(e, "mobile/")) && Re(e, "applewebkit") } }]), oses: J([{ name: "Windows", search: Pe("win"), versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/] }, { name: "iOS", search: function(e) { return Re(e, "iphone") || Re(e, "ipad") }, versionRegexes: [/.*?version\/\ ?([0-9]+)\.([0-9]+).*/, /.*cpu os ([0-9]+)_([0-9]+).*/, /.*cpu iphone os ([0-9]+)_([0-9]+).*/] }, { name: "Android", search: Pe("android"), versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/] }, { name: "OSX", search: Pe("mac os x"), versionRegexes: [/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/] }, { name: "Linux", search: Pe("linux"), versionRegexes: [] }, { name: "Solaris", search: Pe("sunos"), versionRegexes: [] }, { name: "FreeBSD", search: Pe("freebsd"), versionRegexes: [] }, { name: "ChromeOS", search: Pe("cros"), versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/] }]) },
        tt = "Firefox",
        nt = function() { return qe({ current: void 0, version: Xe.unknown() }) },
        rt = qe,
        ot = (J("Edge"), J("Chrome"), J("IE"), J("Opera"), J(tt), J("Safari"), "Windows"),
        it = "Android",
        at = "Solaris",
        ut = "FreeBSD",
        st = "ChromeOS",
        ct = function() { return $e({ current: void 0, version: Xe.unknown() }) },
        lt = $e,
        ft = (J(ot), J("iOS"), J(it), J("Linux"), J("OSX"), J(at), J(ut), J(st), Ae(function() { return e = navigator.userAgent, t = he.from(navigator.userAgentData), n = Le, p = et.browsers(), h = et.oses(), v = t.bind(function(e) { return r = p, G(e.brands, function(t) { var n = t.brand.toLowerCase(); return I(r, function(e) { var t; return n === (null === (t = e.brand) || void 0 === t ? void 0 : t.toLowerCase()) }).map(function(e) { return { current: e.name, version: Xe.nu(parseInt(t.version, 10), 0) } }) }); var r }).orThunk(function() { return Te(p, n = e).map(function(e) { var t = Xe.detect(e.versionRegexes, n); return { current: e.name, version: t } }); var n }).fold(nt, rt), b = Te(h, r = e).map(function(e) { var t = Xe.detect(e.versionRegexes, r); return { current: e.name, version: t } }).fold(ct, lt), { browser: v, os: b, deviceType: (i = v, a = e, u = n, s = (o = b).isiOS() && !0 === /ipad/i.test(a), c = o.isiOS() && !s, f = (l = o.isiOS() || o.isAndroid()) || u("(pointer:coarse)"), d = s || !c && l && u("(min-device-width:768px)"), m = c || l && !d, g = i.isSafari() && o.isiOS() && !1 === /safari/i.test(a), { isiPad: J(s), isiPhone: J(c), isTablet: J(d), isPhone: J(m), isTouch: J(f), isAndroid: o.isAndroid, isiOS: o.isiOS, isWebView: J(g), isDesktop: J(!m && !d && !g) }) }; var e, t, n, r, o, i, a, u, s, c, l, f, d, m, g, p, h, v, b })),
        dt = navigator.userAgent,
        mt = ft(),
        gt = mt.browser,
        pt = mt.os,
        ht = mt.deviceType,
        vt = /WebKit/.test(dt) && !gt.isEdge(),
        bt = "FormData" in window && "FileReader" in window && "URL" in window && !!URL.createObjectURL,
        yt = -1 !== dt.indexOf("Windows Phone"),
        Ct = { opera: gt.isOpera(), webkit: vt, ie: !(!gt.isIE() && !gt.isEdge()) && gt.version.major, gecko: gt.isFirefox(), mac: pt.isOSX() || pt.isiOS(), iOS: ht.isiPad() || ht.isiPhone(), android: pt.isAndroid(), contentEditable: !0, transparentSrc: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", caretAfter: !0, range: window.getSelection && "Range" in window, documentMode: gt.isIE() ? document.documentMode || 7 : 10, fileApi: bt, ceFalse: !0, cacheSuffix: null, container: null, experimentalShadowDom: !1, canHaveCSP: !gt.isIE(), desktop: ht.isDesktop(), windowsPhone: yt, browser: { current: gt.current, version: gt.version, isChrome: gt.isChrome, isEdge: gt.isEdge, isFirefox: gt.isFirefox, isIE: gt.isIE, isOpera: gt.isOpera, isSafari: gt.isSafari }, os: { current: pt.current, version: pt.version, isAndroid: pt.isAndroid, isChromeOS: pt.isChromeOS, isFreeBSD: pt.isFreeBSD, isiOS: pt.isiOS, isLinux: pt.isLinux, isOSX: pt.isOSX, isSolaris: pt.isSolaris, isWindows: pt.isWindows }, deviceType: { isDesktop: ht.isDesktop, isiPad: ht.isiPad, isiPhone: ht.isiPhone, isPhone: ht.isPhone, isTablet: ht.isTablet, isTouch: ht.isTouch, isWebView: ht.isWebView } },
        wt = /^\s*|\s*$/g,
        xt = function(e, n, r, o) { o = o || this, e && se(e = r ? e[r] : e, function(e, t) { return !1 !== n.call(o, e, t, r) && void xt(e, n, r, o) }) },
        St = {
            trim: Ie,
            isArray: Ne,
            is: Me,
            toArray: function(e) { if (Ne(e)) return e; for (var t = [], n = 0, r = e.length; n < r; n++) t[n] = e[n]; return t },
            makeMap: function(e, t, n) { var r; for (t = t || ",", n = n || {}, r = (e = "string" == typeof(e = e || []) ? e.split(t) : e).length; r--;) n[e[r]] = {}; return n },
            each: se,
            map: ce,
            grep: le,
            inArray: fe,
            hasOwn: Ee,
            extend: function(e) { for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]; for (var r = 0; r < t.length; r++) { var o, i, a = t[r]; for (o in a) !Ee(a, o) || void 0 !== (i = a[o]) && (e[o] = i) } return e },
            create: function(e, t, n) {
                var r, o, i, a = this,
                    u = 0,
                    s = (e = /^((static) )?([\w.]+)(:([\w.]+))?/.exec(e))[3].match(/(^|\.)(\w+)$/i)[2],
                    c = a.createNS(e[3].replace(/\.\w+$/, ""), n);
                if (!c[s]) {
                    if ("static" === e[2]) return c[s] = t, void(this.onCreate && this.onCreate(e[2], e[3], c[s]));
                    t[s] || (t[s] = function() {}, u = 1), c[s] = t[s], a.extend(c[s].prototype, t), e[5] && (r = a.resolve(e[5]).prototype, o = e[5].match(/\.(\w+)$/i)[1], i = c[s], c[s] = u ? function() { return r[o].apply(this, arguments) } : function() { return this.parent = r[o], i.apply(this, arguments) }, c[s].prototype[s] = c[s], a.each(r, function(e, t) { c[s].prototype[t] = r[t] }), a.each(t, function(e, t) { r[t] ? c[s].prototype[t] = function() { return this.parent = r[t], e.apply(this, arguments) } : t !== s && (c[s].prototype[t] = e) })), a.each(t.static, function(e, t) { c[s][t] = e })
                }
            },
            walk: xt,
            createNS: function(e, t) { var n, r; for (t = t || window, e = e.split("."), n = 0; n < e.length; n++) t[r = e[n]] || (t[r] = {}), t = t[r]; return t },
            resolve: function(e, t) { var n, r; for (t = t || window, n = 0, r = (e = e.split(".")).length; n < r && (t = t[e[n]]); n++); return t },
            explode: function(e, t) { return !e || Me(e, "array") ? e : ce(e.split(t || ","), Ie) },
            _addCacheSuffix: function(e) { var t = Ct.cacheSuffix; return t && (e += (-1 === e.indexOf("?") ? "?" : "&") + t), e }
        },
        Et = { fromHtml: function(e, t) { var n = (t || document).createElement("div"); if (n.innerHTML = e, !n.hasChildNodes() || 1 < n.childNodes.length) throw console.error("HTML does not have a single root node", e), new Error("HTML must have a single root node"); return We(n.childNodes[0]) }, fromTag: function(e, t) { var n = (t || document).createElement(e); return We(n) }, fromText: function(e, t) { var n = (t || document).createTextNode(e); return We(n) }, fromDom: We, fromPoint: function(e, t, n) { return he.from(e.dom.elementFromPoint(t, n)).map(We) } };

    function Nt(e) { return e.dom.nodeName.toLowerCase() }

    function kt(e) { return e.dom.nodeType }

    function _t(t) { return function(e) { return kt(e) === t } }

    function At(e) { return Et.fromDom(e.dom.ownerDocument) }

    function Tt(e) { return Rn(e) ? e : At(e) }

    function Rt(e) { return Et.fromDom(Tt(e).dom.defaultView) }

    function Dt(e) { return he.from(e.dom.parentNode).map(Et.fromDom) }

    function Ot(e) { return he.from(e.dom.previousSibling).map(Et.fromDom) }

    function Bt(e) { return he.from(e.dom.nextSibling).map(Et.fromDom) }

    function Pt(e) { return H(Fe(e, Ot)) }

    function Lt(e) { return Fe(e, Bt) }

    function It(e, t) { var n = e.dom.childNodes; return he.from(n[t]).map(Et.fromDom) }

    function Mt(e) { return It(e, 0) }

    function Ft(e) { return It(e, e.dom.childNodes.length - 1) }

    function Ut(e) { return e.dom.childNodes.length }

    function zt(e) { return Dn(e) && V(e.dom.host) }

    function jt(t) { return zt(t) ? t : function() { var e = Tt(t).dom.head; if (null == e) throw new Error("Head is not available yet"); return Et.fromDom(e) }() }

    function Ht(e) { return Et.fromDom(e.dom.host) }

    function Vt(t, n) { Dt(t).each(function(e) { e.dom.insertBefore(n.dom, t.dom) }) }

    function qt(e, t) { Bt(e).fold(function() { Dt(e).each(function(e) { In(e, t) }) }, function(e) { Vt(e, t) }) }

    function $t(t, n) { Mt(t).fold(function() { In(t, n) }, function(e) { t.dom.insertBefore(n.dom, e.dom) }) }

    function Wt(t, e) { X(e, function(e) { In(t, e) }) }

    function Kt(e) { e.dom.textContent = "", X(On(e), function(e) { Mn(e) }) }

    function Xt(e) {
        var t, n = On(e);
        0 < n.length && (t = e, X(n, function(e) { Vt(t, e) })), Mn(e)
    }

    function Yt(e, t) { return void 0 !== e ? e : void 0 !== t ? t : 0 }

    function Gt(e) {
        var t = void 0 !== e ? e.dom : document,
            n = t.body.scrollLeft || t.documentElement.scrollLeft,
            r = t.body.scrollTop || t.documentElement.scrollTop;
        return zn(n, r)
    }

    function Jt(e, t, n) {
        var r = (void 0 !== n ? n.dom : document).defaultView;
        r && r.scrollTo(e, t)
    }

    function Qt(e, t) { ft().browser.isSafari() && y(e.dom.scrollIntoViewIfNeeded) ? e.dom.scrollIntoViewIfNeeded(!1) : e.dom.scrollIntoView(t) }

    function Zt(e, t, n, r) { return { x: e, y: t, width: n, height: r, right: e + n, bottom: t + r } }

    function en(e) {
        var r = void 0 === e ? window : e,
            t = r.document,
            o = Gt(Et.fromDom(t)),
            n = void 0 === r ? window : r;
        return he.from(n.visualViewport).fold(function() {
            var e = r.document.documentElement,
                t = e.clientWidth,
                n = e.clientHeight;
            return Zt(o.left, o.top, t, n)
        }, function(e) { return Zt(Math.max(e.pageLeft, o.left), Math.max(e.pageTop, o.top), e.width, e.height) })
    }

    function tn(t) { return function(e) { return !!e && e.nodeType === t } }

    function nn(e) { return e && !Object.getPrototypeOf(e) }

    function rn(e) { var n = e.map(function(e) { return e.toLowerCase() }); return function(e) { if (e && e.nodeName) { var t = e.nodeName.toLowerCase(); return ie(n, t) } return !1 } }

    function on(r, e) {
        var o = e.toLowerCase().split(" ");
        return function(e) {
            if (Hn(e))
                for (var t = 0; t < o.length; t++) { var n = e.ownerDocument.defaultView.getComputedStyle(e, null); if ((n ? n.getPropertyValue(r) : null) === o[t]) return !0 }
            return !1
        }
    }

    function an(t) { return function(e) { return Hn(e) && e.hasAttribute(t) } }

    function un(e) { return Hn(e) && e.hasAttribute("data-mce-bogus") }

    function sn(e) { return Hn(e) && "TABLE" === e.tagName }

    function cn(t) { return function(e) { if (Hn(e)) { if (e.contentEditable === t) return !0; if (e.getAttribute("data-mce-contenteditable") === t) return !0 } return !1 } }

    function ln(e, t, n) { return void 0 === n && (n = o), e.exists(function(e) { return n(e, t) }) }

    function fn(e, t, n) { return e.isSome() && t.isSome() ? he.some(n(e.getOrDie(), t.getOrDie())) : he.none() }

    function dn(e) { return void 0 !== e.style && y(e.style.getPropertyValue) }

    function mn(e, t, n) {
        if (!(K(n) || v(n) || E(n))) throw console.error("Invalid call to Attribute.set. Key ", t, ":: Value ", n, ":: Element ", e), new Error("Attribute value was not simple");
        e.setAttribute(t, n + "")
    }

    function gn(e, t, n) { mn(e.dom, t, n) }

    function pn(e, t) {
        var n = e.dom;
        Q(t, function(e, t) { mn(n, t, e) })
    }

    function hn(e, t) { var n = e.dom.getAttribute(t); return null === n ? void 0 : n }

    function vn(e, t) { return he.from(hn(e, t)) }

    function bn(e, t) { e.dom.removeAttribute(t) }

    function yn(e, t) {
        var n = e.dom;
        Q(t, function(e, t) {
            ! function(e, t, n) {
                if (!K(n)) throw console.error("Invalid call to CSS.set. Property ", t, ":: Value ", n, ":: Element ", e), new Error("CSS value must be a string: " + n);
                dn(e) && e.style.setProperty(t, n)
            }(n, t, e)
        })
    }

    function Cn(e, t) {
        var n = e.dom,
            r = window.getComputedStyle(n).getPropertyValue(t);
        return "" !== r || Fn(e) ? r : er(n, t)
    }

    function wn(e, t) {
        var n = e.dom,
            r = er(n, t);
        return he.from(r).filter(function(e) { return 0 < e.length })
    }

    function xn(e) {
        var t = {},
            n = e.dom;
        if (dn(n))
            for (var r = 0; r < n.style.length; r++) {
                var o = n.style.item(r);
                t[o] = n.style[o]
            }
        return t
    }

    function Sn(e) { return I(e, An) }

    function En(e, t) { return e.children && ie(e.children, t) }
    "undefined" != typeof window || Function("return this;")();
    var Nn, kn, _n, An = _t(1),
        Tn = _t(3),
        Rn = _t(9),
        Dn = _t(11),
        On = function(e) { return R(e.dom.childNodes, Et.fromDom) },
        Bn = y(Element.prototype.attachShadow) && y(Node.prototype.getRootNode),
        Pn = J(Bn),
        Ln = Bn ? function(e) { return Et.fromDom(e.dom.getRootNode()) } : Tt,
        In = function(e, t) { e.dom.appendChild(t.dom) },
        Mn = function(e) {
            var t = e.dom;
            null !== t.parentNode && t.parentNode.removeChild(t)
        },
        Fn = function(e) {
            var t = Tn(e) ? e.dom.parentNode : e.dom;
            if (null == t || null === t.ownerDocument) return !1;
            var n = t.ownerDocument,
                r = Et.fromDom(t),
                o = Ln(r);
            return (zt(o) ? he.some(o) : he.none()).fold(function() { return n.body.contains(t) }, a(Fn, Ht))
        },
        Un = function(n, r) { return { left: n, top: r, translate: function(e, t) { return Un(n + e, r + t) } } },
        zn = Un,
        jn = function(e) {
            var t, n = e.dom,
                r = n.ownerDocument.body;
            return r === n ? zn(r.offsetLeft, r.offsetTop) : Fn(e) ? (t = n.getBoundingClientRect(), zn(t.left, t.top)) : zn(0, 0)
        },
        Hn = tn(1),
        Vn = rn(["textarea", "input"]),
        qn = tn(3),
        $n = tn(8),
        Wn = tn(9),
        Kn = tn(11),
        Xn = rn(["br"]),
        Yn = rn(["img"]),
        Gn = cn("true"),
        Jn = cn("false"),
        Qn = rn(["td", "th"]),
        Zn = rn(["video", "audio", "object", "embed"]),
        er = function(e, t) { return dn(e) ? e.style.getPropertyValue(t) : "" },
        tr = ft().browser,
        nr = {},
        rr = { exports: nr };

    function or(e) { setTimeout(function() { throw e }, 0) }
    Nn = nr, kn = rr, _n = void 0,
        function(e) { "object" == typeof Nn && void 0 !== kn ? kn.exports = e() : ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).EphoxContactWrapper = e() }(function() {
            return function i(a, u, s) {
                function c(t, e) {
                    if (!u[t]) {
                        if (!a[t]) { var n = "function" == typeof _n; if (!e && n) return n(t, !0); if (l) return l(t, !0); var r = new Error("Cannot find module '" + t + "'"); throw r.code = "MODULE_NOT_FOUND", r }
                        var o = u[t] = { exports: {} };
                        a[t][0].call(o.exports, function(e) { return c(a[t][1][e] || e) }, o, o.exports, i, a, u, s)
                    }
                    return u[t].exports
                }
                for (var l = "function" == typeof _n, e = 0; e < s.length; e++) c(s[e]);
                return c
            }({
                1: [function(e, t, n) {
                    var r, o, i = t.exports = {};

                    function a() { throw new Error("setTimeout has not been defined") }

                    function u() { throw new Error("clearTimeout has not been defined") }

                    function s(t) { if (r === setTimeout) return setTimeout(t, 0); if ((r === a || !r) && setTimeout) return r = setTimeout, setTimeout(t, 0); try { return r(t, 0) } catch (e) { try { return r.call(null, t, 0) } catch (e) { return r.call(this, t, 0) } } }! function() { try { r = "function" == typeof setTimeout ? setTimeout : a } catch (e) { r = a } try { o = "function" == typeof clearTimeout ? clearTimeout : u } catch (e) { o = u } }();
                    var c, l = [],
                        f = !1,
                        d = -1;

                    function m() { f && c && (f = !1, c.length ? l = c.concat(l) : d = -1, l.length && g()) }

                    function g() {
                        if (!f) {
                            var e = s(m);
                            f = !0;
                            for (var t = l.length; t;) {
                                for (c = l, l = []; ++d < t;) c && c[d].run();
                                d = -1, t = l.length
                            }
                            c = null, f = !1,
                                function(t) { if (o === clearTimeout) return clearTimeout(t); if ((o === u || !o) && clearTimeout) return o = clearTimeout, clearTimeout(t); try { o(t) } catch (e) { try { return o.call(null, t) } catch (e) { return o.call(this, t) } } }(e)
                        }
                    }

                    function p(e, t) { this.fun = e, this.array = t }

                    function h() {}
                    i.nextTick = function(e) {
                        var t = new Array(arguments.length - 1);
                        if (1 < arguments.length)
                            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                        l.push(new p(e, t)), 1 !== l.length || f || s(g)
                    }, p.prototype.run = function() { this.fun.apply(null, this.array) }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = h, i.addListener = h, i.once = h, i.off = h, i.removeListener = h, i.removeAllListeners = h, i.emit = h, i.prependListener = h, i.prependOnceListener = h, i.listeners = function(e) { return [] }, i.binding = function(e) { throw new Error("process.binding is not supported") }, i.cwd = function() { return "/" }, i.chdir = function(e) { throw new Error("process.chdir is not supported") }, i.umask = function() { return 0 }
                }, {}],
                2: [function(e, f, t) {
                    ! function(t) {
                        function r() {}

                        function i(e) {
                            if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
                            if ("function" != typeof e) throw new TypeError("not a function");
                            this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], l(e, this)
                        }

                        function o(n, r) {
                            for (; 3 === n._state;) n = n._value;
                            0 !== n._state ? (n._handled = !0, i._immediateFn(function() {
                                var e, t = 1 === n._state ? r.onFulfilled : r.onRejected;
                                if (null !== t) {
                                    try { e = t(n._value) } catch (e) { return void u(r.promise, e) }
                                    a(r.promise, e)
                                } else(1 === n._state ? a : u)(r.promise, n._value)
                            })) : n._deferreds.push(r)
                        }

                        function a(t, e) {
                            try {
                                if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
                                if (e && ("object" == typeof e || "function" == typeof e)) { var n = e.then; if (e instanceof i) return t._state = 3, t._value = e, void s(t); if ("function" == typeof n) return void l((r = n, o = e, function() { r.apply(o, arguments) }), t) }
                                t._state = 1, t._value = e, s(t)
                            } catch (e) { u(t, e) }
                            var r, o
                        }

                        function u(e, t) { e._state = 2, e._value = t, s(e) }

                        function s(e) {
                            2 === e._state && 0 === e._deferreds.length && i._immediateFn(function() { e._handled || i._unhandledRejectionFn(e._value) });
                            for (var t = 0, n = e._deferreds.length; t < n; t++) o(e, e._deferreds[t]);
                            e._deferreds = null
                        }

                        function c(e, t, n) { this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n }

                        function l(e, t) {
                            var n = !1;
                            try { e(function(e) { n || (n = !0, a(t, e)) }, function(e) { n || (n = !0, u(t, e)) }) } catch (e) {
                                if (n) return;
                                n = !0, u(t, e)
                            }
                        }
                        var n = setTimeout;
                        i.prototype.catch = function(e) { return this.then(null, e) }, i.prototype.then = function(e, t) { var n = new this.constructor(r); return o(this, new c(e, t, n)), n }, i.all = function(e) {
                            var u = Array.prototype.slice.call(e);
                            return new i(function(o, i) {
                                if (0 === u.length) return o([]);
                                for (var a = u.length, e = 0; e < u.length; e++) ! function t(n, e) {
                                    try {
                                        if (e && ("object" == typeof e || "function" == typeof e)) { var r = e.then; if ("function" == typeof r) return r.call(e, function(e) { t(n, e) }, i), 0 }
                                        u[n] = e, 0 == --a && o(u)
                                    } catch (e) { i(e) }
                                }(e, u[e])
                            })
                        }, i.resolve = function(t) { return t && "object" == typeof t && t.constructor === i ? t : new i(function(e) { e(t) }) }, i.reject = function(n) { return new i(function(e, t) { t(n) }) }, i.race = function(o) { return new i(function(e, t) { for (var n = 0, r = o.length; n < r; n++) o[n].then(e, t) }) }, i._immediateFn = "function" == typeof t ? function(e) { t(e) } : function(e) { n(e, 0) }, i._unhandledRejectionFn = function(e) { "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e) }, i._setImmediateFn = function(e) { i._immediateFn = e }, i._setUnhandledRejectionFn = function(e) { i._unhandledRejectionFn = e }, void 0 !== f && f.exports ? f.exports = i : this.Promise || (this.Promise = i)
                    }.call(this, e("timers").setImmediate)
                }, { timers: 3 }],
                3: [function(s, e, c) {
                    ! function(e, t) {
                        var r = s("process/browser.js").nextTick,
                            n = Function.prototype.apply,
                            o = Array.prototype.slice,
                            i = {},
                            a = 0;

                        function u(e, t) { this._id = e, this._clearFn = t }
                        c.setTimeout = function() { return new u(n.call(setTimeout, window, arguments), clearTimeout) }, c.setInterval = function() { return new u(n.call(setInterval, window, arguments), clearInterval) }, c.clearTimeout = c.clearInterval = function(e) { e.close() }, u.prototype.unref = u.prototype.ref = function() {}, u.prototype.close = function() { this._clearFn.call(window, this._id) }, c.enroll = function(e, t) { clearTimeout(e._idleTimeoutId), e._idleTimeout = t }, c.unenroll = function(e) { clearTimeout(e._idleTimeoutId), e._idleTimeout = -1 }, c._unrefActive = c.active = function(e) {
                            clearTimeout(e._idleTimeoutId);
                            var t = e._idleTimeout;
                            0 <= t && (e._idleTimeoutId = setTimeout(function() { e._onTimeout && e._onTimeout() }, t))
                        }, c.setImmediate = "function" == typeof e ? e : function(e) {
                            var t = a++,
                                n = !(arguments.length < 2) && o.call(arguments, 1);
                            return i[t] = !0, r(function() { i[t] && (n ? e.apply(null, n) : e.call(null), c.clearImmediate(t)) }), t
                        }, c.clearImmediate = "function" == typeof t ? t : function(e) { delete i[e] }
                    }.call(this, s("timers").setImmediate, s("timers").clearImmediate)
                }, { "process/browser.js": 1, timers: 3 }],
                4: [function(e, t, n) {
                    var r = e("promise-polyfill"),
                        o = "undefined" != typeof window ? window : Function("return this;")();
                    t.exports = { boltExport: o.Promise || r }
                }, { "promise-polyfill": 2 }]
            }, {}, [4])(4)
        });

    function ir(e) { return lr(function() { return new ur(e) }) }

    function ar(a) {
        if (!S(a)) throw new Error("cases must be an array");
        if (0 === a.length) throw new Error("there must be at least one case");
        var u = [],
            n = {};
        return X(a, function(e, r) {
            var t = we(e);
            if (1 !== t.length) throw new Error("one and only one name per case");
            var o = t[0],
                i = e[o];
            if (void 0 !== n[o]) throw new Error("duplicate key detected:" + o);
            if ("cata" === o) throw new Error("cannot have a case named cata (sorry)");
            if (!S(i)) throw new Error("case arguments must be an array");
            u.push(o), n[o] = function() { for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e]; var t = n.length; if (t !== i.length) throw new Error("Wrong number of arguments to case " + o + ". Expected " + i.length + " (" + i + "), got " + t); return { fold: function() { for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]; if (e.length !== a.length) throw new Error("Wrong number of arguments to fold. Expected " + a.length + ", got " + e.length); return e[r].apply(null, n) }, match: function(e) { var t = we(e); if (u.length !== t.length) throw new Error("Wrong number of arguments to match. Expected: " + u.join(",") + "\nActual: " + t.join(",")); if (!j(u, function(e) { return ie(t, e) })) throw new Error("Not all branches were specified when using match. Specified: " + t.join(", ") + "\nRequired: " + u.join(", ")); return e[o].apply(null, n) }, log: function(e) { console.log(e, { constructors: u, constructor: o, params: n }) } } }
        }), n
    }
    var ur = rr.exports.boltExport,
        sr = function(e) {
            function r(e) { o() ? i(e) : t.push(e) }
            var n = he.none(),
                t = [],
                o = function() { return n.isSome() },
                i = function(t) { n.each(function(e) { setTimeout(function() { t(e) }, 0) }) };
            return e(function(e) { o() || (n = he.some(e), X(t, i), t = []) }), { get: r, map: function(n) { return sr(function(t) { r(function(e) { t(n(e)) }) }) }, isReady: o }
        },
        cr = { nu: sr, pure: function(t) { return sr(function(e) { e(t) }) } },
        lr = function(n) {
            function e(e) { n().then(e, or) }
            return { map: function(e) { return lr(function() { return n().then(e) }) }, bind: function(t) { return lr(function() { return n().then(function(e) { return t(e).toPromise() }) }) }, anonBind: function(e) { return lr(function() { return n().then(function() { return e.toPromise() }) }) }, toLazy: function() { return cr.nu(e) }, toCached: function() { var e = null; return lr(function() { return e = null === e ? n() : e }) }, toPromise: n, get: e }
        },
        fr = function(n) { return { isValue: x, isError: T, getOr: J(n), getOrThunk: J(n), getOrDie: J(n), or: function(e) { return fr(n) }, orThunk: function(e) { return fr(n) }, fold: function(e, t) { return t(n) }, map: function(e) { return fr(e(n)) }, mapError: function(e) { return fr(n) }, each: function(e) { e(n) }, bind: function(e) { return e(n) }, exists: function(e) { return e(n) }, forall: function(e) { return e(n) }, toOptional: function() { return he.some(n) } } },
        dr = function(n) {
            return {
                isValue: T,
                isError: x,
                getOr: u,
                getOrThunk: function(e) { return e() },
                getOrDie: function() {
                    return e = String(n),
                        function() { throw new Error(e) }();
                    var e
                },
                or: u,
                orThunk: function(e) { return e() },
                fold: function(e, t) { return e(n) },
                map: function(e) { return dr(n) },
                mapError: function(e) { return dr(e(n)) },
                each: oe,
                bind: function(e) { return dr(n) },
                exists: T,
                forall: x,
                toOptional: he.none
            }
        },
        mr = { value: fr, error: dr, fromOption: function(e, t) { return e.fold(function() { return dr(t) }, fr) } };

    function gr(e) { return e.fold(u, u) }

    function pr(e, t, n, r, o) { return e(n, r) ? he.some(n) : y(o) && o(n) ? he.none() : t(n, r, o) }

    function hr(e, t, n) {
        for (var r = e.dom, o = y(n) ? n : T; r.parentNode;) {
            var r = r.parentNode,
                i = Et.fromDom(r);
            if (t(i)) return he.some(i);
            if (o(i)) break
        }
        return he.none()
    }

    function vr(e, t, n) { return pr(function(e, t) { return t(e) }, hr, e, t, n) }

    function br(e, t, n) { return hr(e, function(e) { return Ue(e, t) }, n) }

    function yr(e, t) { return n = t, ze(r = void 0 === e ? document : e.dom) ? he.none() : he.from(r.querySelector(n)).map(Et.fromDom); var n, r }

    function Cr(e, t, n) { return pr(Ue, br, e, t, n) }
    ar([{ bothErrors: ["error1", "error2"] }, { firstError: ["error1", "value2"] }, { secondError: ["value1", "error2"] }, { bothValues: ["value1", "value2"] }]);
    var wr, xr, Sr, Er, Nr, kr = function(e, t) { return I(e.dom.childNodes, function(e) { return t(Et.fromDom(e)) }).map(Et.fromDom) },
        _r = window.Promise || (wr = function(n, r) {
            return function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                n.apply(r, e)
            }
        }, xr = Array.isArray || function(e) { return "[object Array]" === Object.prototype.toString.call(e) }, Sr = Ar.immediateFn || "function" == typeof setImmediate && setImmediate || function(e) { return setTimeout(e, 1) }, Er = function(e, t, n) {
            var r = !1;
            try { e(function(e) { r || (r = !0, t(e)) }, function(e) { r || (r = !0, n(e)) }) } catch (e) {
                if (r) return;
                r = !0, n(e)
            }
        }, Ar.prototype.catch = function(e) { return this.then(null, e) }, Ar.prototype.then = function(n, r) { var o = this; return new Ar(function(e, t) { Tr.call(o, new Br(n, r, e, t)) }) }, Ar.all = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            var u = Array.prototype.slice.call(1 === e.length && xr(e[0]) ? e[0] : e);
            return new Ar(function(r, o) {
                if (0 === u.length) return r([]);
                for (var i = u.length, a = function(t, e) {
                        try {
                            if (e && ("object" == typeof e || "function" == typeof e)) { var n = e.then; if ("function" == typeof n) return void n.call(e, function(e) { a(t, e) }, o) }
                            u[t] = e, 0 == --i && r(u)
                        } catch (e) { o(e) }
                    }, e = 0; e < u.length; e++) a(e, u[e])
            })
        }, Ar.resolve = function(t) { return t && "object" == typeof t && t.constructor === Ar ? t : new Ar(function(e) { e(t) }) }, Ar.reject = function(n) { return new Ar(function(e, t) { t(n) }) }, Ar.race = function(o) { return new Ar(function(e, t) { for (var n = 0, r = o.length; n < r; n++) o[n].then(e, t) }) }, Ar);

    function Ar(e) {
        if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof e) throw new TypeError("not a function");
        this._state = null, this._value = null, this._deferreds = [], Er(e, wr(Rr, this), wr(Dr, this))
    }

    function Tr(n) {
        var r = this;
        null !== this._state ? Sr(function() {
            var e, t = r._state ? n.onFulfilled : n.onRejected;
            if (null !== t) {
                try { e = t(r._value) } catch (e) { return void n.reject(e) }
                n.resolve(e)
            } else(r._state ? n.resolve : n.reject)(r._value)
        }) : this._deferreds.push(n)
    }

    function Rr(e) {
        try {
            if (e === this) throw new TypeError("A promise cannot be resolved with itself.");
            if (e && ("object" == typeof e || "function" == typeof e)) { var t = e.then; if ("function" == typeof t) return void Er(wr(t, e), wr(Rr, this), wr(Dr, this)) }
            this._state = !0, this._value = e, Or.call(this)
        } catch (e) { Dr.call(this, e) }
    }

    function Dr(e) { this._state = !1, this._value = e, Or.call(this) }

    function Or() {
        for (var e = 0, t = this._deferreds.length; e < t; e++) Tr.call(this, this._deferreds[e]);
        this._deferreds = null
    }

    function Br(e, t, n, r) { this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.resolve = n, this.reject = r }

    function Pr(e, t) { return "number" != typeof t && (t = 0), setTimeout(e, t) }

    function Lr(e, t) { return "number" != typeof t && (t = 1), setInterval(e, t) }

    function Ir(n, r) {
        function e() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            clearTimeout(o), o = Pr(function() { n.apply(this, e) }, r)
        }
        var o;
        return e.stop = function() { clearTimeout(o) }, e
    }

    function Mr(m, g) {
        function n(e, t, n) {
            var r, o = St._addCacheSuffix(e),
                i = ae(h, o).getOrThunk(function() { return { id: "mce-u" + p++, passed: [], failed: [], count: 0 } });

            function a(e, t) {
                for (var n = e.length; n--;) e[n]();
                i.status = t, i.passed = [], i.failed = [], r && (r.onload = null, r.onerror = null, r = null)
            }

            function u() { return a(i.passed, 2), 0 }

            function s() { return a(i.failed, 3) }(h[o] = i).count++;
            var c, l, f, d = function() { var e = d;! function() { for (var e = m.styleSheets, t = e.length; t--;) { var n = e[t].ownerNode; if (n && n.id === r.id) return u(), 1 } }() && (Date.now() - l < y ? Ur.setTimeout(e) : s()) };
            t && i.passed.push(t), n && i.failed.push(n), 1 !== i.status && (2 !== i.status ? 3 !== i.status ? (i.status = 1, pn(c = Et.fromTag("link", b.dom), { rel: "stylesheet", type: "text/css", id: i.id }), l = Date.now(), g.contentCssCors && gn(c, "crossOrigin", "anonymous"), g.referrerPolicy && gn(c, "referrerpolicy", g.referrerPolicy), (r = c.dom).onload = d, r.onerror = s, f = c, In(jt(v), f), gn(c, "href", o)) : s() : u())
        }

        function o(t) { return ir(function(e) { n(t, i(e, J(mr.value(t))), i(e, J(mr.error(t)))) }) }

        function t(e) {
            var n = St._addCacheSuffix(e);
            ae(h, n).each(function(e) {
                var t;
                0 == --e.count && (delete h[n], t = e.id, yr(jt(v), "#" + t).each(Mn))
            })
        }
        void 0 === g && (g = {});
        var p = 0,
            h = {},
            v = Et.fromDom(m),
            b = Tt(v),
            y = g.maxLoadTime || 5e3;
        return {
            load: n,
            loadAll: function(e, n, r) {
                var a, t = R(e, o);
                a = t, ir(function(r) {
                    var o = [],
                        i = 0;
                    0 === a.length ? r([]) : X(a, function(e, t) {
                        var n;
                        e.get((n = t, function(e) { o[n] = e, ++i >= a.length && r(o) }))
                    })
                }).get(function(e) {
                    var t = O(e, function(e) { return e.isValue() });
                    0 < t.fail.length ? r(t.fail.map(gr)) : n(t.pass.map(gr))
                })
            },
            unload: t,
            unloadAll: function(e) { X(e, function(e) { t(e) }) },
            _setReferrerPolicy: function(e) { g.referrerPolicy = e }
        }
    }
    var Fr, Ur = {
            requestAnimationFrame: function(e, t) {
                Nr ? Nr.then(e) : Nr = new _r(function(e) {
                    (function(e, t) {
                        for (var n = window.requestAnimationFrame, r = ["ms", "moz", "webkit"], o = 0; o < r.length && !n; o++) n = window[r[o] + "RequestAnimationFrame"];
                        (n = n || function(e) { window.setTimeout(e, 0) })(e, t)
                    })(e, t = t || document.body)
                }).then(e)
            },
            setTimeout: Pr,
            setInterval: Lr,
            setEditorTimeout: function(e, t, n) { return Pr(function() { e.removed || t() }, n) },
            setEditorInterval: function(e, t, n) { var r = Lr(function() { e.removed ? clearInterval(r) : t() }, n); return r },
            debounce: Ir,
            throttle: Ir,
            clearInterval: function(e) { return clearInterval(e) },
            clearTimeout: function(e) { return clearTimeout(e) }
        },
        zr = (Fr = new WeakMap, { forElement: function(e, t) { var n = Ln(e).dom; return he.from(Fr.get(n)).getOrThunk(function() { var e = Mr(n, t); return Fr.set(n, e), e }) } }),
        jr = (Hr.prototype.current = function() { return this.node }, Hr.prototype.next = function(e) { return this.node = this.findSibling(this.node, "firstChild", "nextSibling", e), this.node }, Hr.prototype.prev = function(e) { return this.node = this.findSibling(this.node, "lastChild", "previousSibling", e), this.node }, Hr.prototype.prev2 = function(e) { return this.node = this.findPreviousNode(this.node, "lastChild", "previousSibling", e), this.node }, Hr.prototype.findSibling = function(e, t, n, r) {
            var o, i;
            if (e) {
                if (!r && e[t]) return e[t];
                if (e !== this.rootNode) {
                    if (o = e[n]) return o;
                    for (i = e.parentNode; i && i !== this.rootNode; i = i.parentNode)
                        if (o = i[n]) return o
                }
            }
        }, Hr.prototype.findPreviousNode = function(e, t, n, r) {
            var o, i, a;
            if (e && (o = e[n], !this.rootNode || o !== this.rootNode)) {
                if (o) {
                    if (!r)
                        for (a = o[t]; a; a = a[t])
                            if (!a[t]) return a;
                    return o
                }
                return (i = e.parentNode) && i !== this.rootNode ? i : void 0
            }
        }, Hr);

    function Hr(e, t) { this.node = e, this.rootNode = t, this.current = this.current.bind(this), this.next = this.next.bind(this), this.prev = this.prev.bind(this), this.prev2 = this.prev2.bind(this) }

    function Vr(t) {
        var n;
        return function(e) {
            return n = n || function(e, t) {
                for (var n = {}, r = 0, o = e.length; r < o; r++) {
                    var i = e[r];
                    n[String(i)] = t(i, r)
                }
                return n
            }(t, x), Ee(n, Nt(e))
        }
    }

    function qr(e) { return An(e) && !So(e) }

    function $r(e) { return An(e) && "br" === Nt(e) }

    function Wr(e) { return Io(e) && (e = e.parentNode), Lo(e) && e.hasAttribute("data-mce-caret") }

    function Kr(e) { return Io(e) && Bo(e.data) }

    function Xr(e) { return Wr(e) || Kr(e) }

    function Yr(e) { return e.firstChild !== e.lastChild || !Xn(e.firstChild) }

    function Gr(e) { var t = e.container(); return !!qn(t) && (t.data.charAt(e.offset()) === Oo || e.isAtStart() && Kr(t.previousSibling)) }

    function Jr(e) { var t = e.container(); return !!qn(t) && (t.data.charAt(e.offset() - 1) === Oo || e.isAtEnd() && Kr(t.nextSibling)) }

    function Qr(e) { return e && e.hasAttribute("data-mce-caret") ? (un(n = (t = e.getElementsByTagName("br"))[t.length - 1]) && n.parentNode.removeChild(n), e.removeAttribute("data-mce-caret"), e.removeAttribute("data-mce-bogus"), e.removeAttribute("style"), e.removeAttribute("_moz_abspos"), e) : null; var t, n }

    function Zr(e) { return Wr(e.startContainer) }

    function eo(e) { return !Wo(e) && (Ho(e) ? !Vo(e.parentNode) : qo(e) || jo(e) || $o(e) || Ko(e)) }

    function to(e, t) { return eo(e) && function(e, t) { for (e = e.parentNode; e && e !== t; e = e.parentNode) { if (Ko(e)) return !1; if (Uo(e)) return !0 } return !0 }(e, t) }

    function no(e) { return Xo.test(e) }

    function ro(e, t) { return eo(e) && !1 === (a = t, qn(i = e) && no(i.data) && !1 === (n = i, r = Et.fromDom(a), br(Et.fromDom(n), "pre,code", A(je, r)).isSome())) || Hn(o = e) && "A" === o.nodeName && !o.hasAttribute("href") && (o.hasAttribute("name") || o.hasAttribute("id")) || Yo(e); var n, r, o, i, a }

    function oo(e, t) {
        return function(e, t) {
            var n = 0;
            if (ro(e, e)) return !1;
            var r = e.firstChild;
            if (!r) return !0;
            var o = new jr(r, e);
            do {
                if (t) { if (Jo(r)) { r = o.next(!0); continue } if (Go(r)) { r = o.next(); continue } }
                if (Xn(r)) n++, r = o.next();
                else {
                    if (ro(r, e)) return !1;
                    r = o.next()
                }
            } while (r);
            return n <= 1
        }(e.dom, t = void 0 === t || t)
    }

    function io(e, t) { return V(e) && (ro(e, t) || qr(Et.fromDom(e))) }

    function ao(e) { return "span" === e.nodeName.toLowerCase() && "bookmark" === e.getAttribute("data-mce-type") }

    function uo(e, t) { var n, r, o, i = {}; if (e) { for (e = e.split(","), t = t || 10, n = 0; n < e.length; n += 2) r = String.fromCharCode(parseInt(e[n], t)), ii[r] || (o = "&" + e[n + 1] + ";", i[r] = o, i[o] = r); return i } }

    function so(e, t) { return e.replace(t ? ei : ti, function(e) { return ii[e] || e }) }

    function co(e, t) { return e.replace(t ? ei : ti, function(e) { return 1 < e.length ? "&#" + (1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536) + ";" : ii[e] || "&#" + e.charCodeAt(0) + ";" }) }

    function lo(e, t, n) { return n = n || ui, e.replace(t ? ei : ti, function(e) { return ii[e] || n[e] || e }) }

    function fo(e, t) { return (e = St.trim(e)) ? e.split(t || " ") : [] }

    function mo(e, n) { var r; return e && (r = {}, di(e = "string" == typeof e ? { "*": e } : e, function(e, t) { r[t] = r[t.toUpperCase()] = ("map" === n ? fi : gi)(e, /[, ]/) })), r }

    function go(i) {
        function e(e, t, n) { var r = i[e]; return r ? r = fi(r, /[, ]/, fi(r.toUpperCase(), /[, ]/)) : (r = ci[e]) || (r = fi(t, " ", fi(t.toUpperCase(), " ")), r = mi(r, n), ci[e] = r), r }
        var t, s, n, r, o, a, u, c, S = {},
            l = {},
            E = [],
            f = {},
            d = {},
            m = (t = (i = i || {}).schema, c = {}, ci[t] || (s = "id accesskey class dir lang style tabindex title role", n = "address blockquote div dl fieldset form h1 h2 h3 h4 h5 h6 hr menu ol p pre table ul", r = "a abbr b bdo br button cite code del dfn em embed i iframe img input ins kbd label map noscript object q s samp script select small span strong sub sup textarea u var #text #comment", "html4" !== t && (s += " contenteditable contextmenu draggable dropzone hidden spellcheck translate", n += " article aside details dialog figure main header footer hgroup section nav", r += " audio canvas command datalist mark meter output picture progress time wbr video ruby bdi keygen"), "html5-strict" !== t && (s += " xml:lang", r = [r, u = "acronym applet basefont big font strike tt"].join(" "), di(fo(u), function(e) { g(e, "", r) }), n = [n, a = "center dir isindex noframes"].join(" "), o = [n, r].join(" "), di(fo(a), function(e) { g(e, "", o) })), o = o || [n, r].join(" "), g("html", "manifest", "head body"), g("head", "", "base command link meta noscript script style title"), g("title hr noscript br"), g("base", "href target"), g("link", "href rel media hreflang type sizes hreflang"), g("meta", "name http-equiv content charset"), g("style", "media type scoped"), g("script", "src async defer type charset"), g("body", "onafterprint onbeforeprint onbeforeunload onblur onerror onfocus onhashchange onload onmessage onoffline ononline onpagehide onpageshow onpopstate onresize onscroll onstorage onunload", o), g("address dt dd div caption", "", o), g("h1 h2 h3 h4 h5 h6 pre p abbr code var samp kbd sub sup i b u bdo span legend em strong small s cite dfn", "", r), g("blockquote", "cite", o), g("ol", "reversed start type", "li"), g("ul", "", "li"), g("li", "value", o), g("dl", "", "dt dd"), g("a", "href target rel media hreflang type", r), g("q", "cite", r), g("ins del", "cite datetime", o), g("img", "src sizes srcset alt usemap ismap width height"), g("iframe", "src name width height", o), g("embed", "src type width height"), g("object", "data type typemustmatch name usemap form width height", [o, "param"].join(" ")), g("param", "name value"), g("map", "name", [o, "area"].join(" ")), g("area", "alt coords shape href target rel media hreflang type"), g("table", "border", "caption colgroup thead tfoot tbody tr" + ("html4" === t ? " col" : "")), g("colgroup", "span", "col"), g("col", "span"), g("tbody thead tfoot", "", "tr"), g("tr", "", "td th"), g("td", "colspan rowspan headers", o), g("th", "colspan rowspan headers scope abbr", o), g("form", "accept-charset action autocomplete enctype method name novalidate target", o), g("fieldset", "disabled form name", [o, "legend"].join(" ")), g("label", "form for", r), g("input", "accept alt autocomplete checked dirname disabled form formaction formenctype formmethod formnovalidate formtarget height list max maxlength min multiple name pattern readonly required size src step type value width"), g("button", "disabled form formaction formenctype formmethod formnovalidate formtarget name type value", "html4" === t ? o : r), g("select", "disabled form multiple name required size", "option optgroup"), g("optgroup", "disabled label", "option"), g("option", "disabled label selected value"), g("textarea", "cols dirname disabled form maxlength name readonly required rows wrap"), g("menu", "type label", [o, "li"].join(" ")), g("noscript", "", o), "html4" !== t && (g("wbr"), g("ruby", "", [r, "rt rp"].join(" ")), g("figcaption", "", o), g("mark rt rp summary bdi", "", r), g("canvas", "width height", o), g("video", "src crossorigin poster preload autoplay mediagroup loop muted controls width height buffered", [o, "track source"].join(" ")), g("audio", "src crossorigin preload autoplay mediagroup loop muted controls buffered volume", [o, "track source"].join(" ")), g("picture", "", "img source"), g("source", "src srcset type media sizes"), g("track", "kind src srclang label default"), g("datalist", "", [r, "option"].join(" ")), g("article section nav aside main header footer", "", o), g("hgroup", "", "h1 h2 h3 h4 h5 h6"), g("figure", "", [o, "figcaption"].join(" ")), g("time", "datetime", r), g("dialog", "open", o), g("command", "type label icon disabled checked radiogroup command"), g("output", "for form name", r), g("progress", "value max", r), g("meter", "value min max low high optimum", r), g("details", "open", [o, "summary"].join(" ")), g("keygen", "autofocus challenge disabled form keytype name")), "html5-strict" !== t && (p("script", "language xml:space"), p("style", "xml:space"), p("object", "declare classid code codebase codetype archive standby align border hspace vspace"), p("embed", "align name hspace vspace"), p("param", "valuetype type"), p("a", "charset name rev shape coords"), p("br", "clear"), p("applet", "codebase archive code object alt name width height align hspace vspace"), p("img", "name longdesc align border hspace vspace"), p("iframe", "longdesc frameborder marginwidth marginheight scrolling align"), p("font basefont", "size color face"), p("input", "usemap align"), p("select"), p("textarea"), p("h1 h2 h3 h4 h5 h6 div p legend caption", "align"), p("ul", "type compact"), p("li", "type"), p("ol dl menu dir", "compact"), p("pre", "width xml:space"), p("hr", "align noshade size width"), p("isindex", "prompt"), p("table", "summary width frame rules cellspacing cellpadding align bgcolor"), p("col", "width align char charoff valign"), p("colgroup", "width align char charoff valign"), p("thead", "align char charoff valign"), p("tr", "align char charoff valign bgcolor"), p("th", "axis align char charoff valign nowrap bgcolor width height"), p("form", "accept"), p("td", "abbr axis scope align char charoff valign nowrap bgcolor width height"), p("tfoot", "align char charoff valign"), p("tbody", "align char charoff valign"), p("area", "nohref"), p("body", "background bgcolor text link vlink alink")), "html4" !== t && (p("input button select textarea", "autofocus"), p("input textarea", "placeholder"), p("a", "download"), p("link script img", "crossorigin"), p("img", "loading"), p("iframe", "sandbox seamless allowfullscreen loading")), di(fo("a form meter progress dfn"), function(e) { c[e] && delete c[e].children[e] }), delete c.caption.children.table, delete c.script, ci[t] = c));

        function g(e, t, n) {
            function r(e, t) { for (var n = {}, r = 0, o = e.length; r < o; r++) n[e[r]] = t || {}; return n }
            var o, i;
            t = t || "", "string" == typeof(n = n || []) && (n = fo(n));
            for (var a = fo(e), u = a.length; u--;) i = { attributes: r(o = fo([s, t].join(" "))), attributesOrder: o, children: r(n, li) }, c[a[u]] = i
        }

        function p(e, t) {
            for (var n, r, o, i = fo(e), a = i.length, u = fo(t); a--;)
                for (n = c[i[a]], r = 0, o = u.length; r < o; r++) n.attributes[u[r]] = {}, n.attributesOrder.push(u[r])
        }!1 === i.verify_html && (i.valid_elements = "*[*]");
        var h = mo(i.valid_styles),
            v = mo(i.invalid_styles, "map"),
            b = mo(i.valid_classes, "map"),
            y = e("whitespace_elements", "pre script noscript style textarea video audio iframe object code"),
            C = e("self_closing_elements", "colgroup dd dt li option p td tfoot th thead tr"),
            w = e("short_ended_elements", "area base basefont br col frame hr img input isindex link meta param embed source wbr track"),
            x = e("boolean_attributes", "checked compact declare defer disabled ismap multiple nohref noresize noshade nowrap readonly selected autoplay loop controls"),
            N = "td th iframe video audio object script code",
            k = e("non_empty_elements", N + " pre", w),
            _ = e("move_caret_before_on_enter_elements", N + " table", w),
            A = e("text_block_elements", "h1 h2 h3 h4 h5 h6 p div address pre form blockquote center dir fieldset header footer article section hgroup aside main nav figure"),
            T = e("block_elements", "hr table tbody thead tfoot th tr td li ol ul caption dl dt dd noscript menu isindex option datalist select optgroup figcaption details summary", A),
            R = e("text_inline_elements", "span strong b em i font strike u var cite dfn code mark q sup sub samp");

        function D(e) { return new RegExp("^" + e.replace(/([?+*])/g, ".$1") + "$") }

        function O(e) {
            var t, n, r, o, i, a, u, s, c, l, f, d, m, g, p, h, v, b, y = /^([#+\-])?([^\[!\/]+)(?:\/([^\[!]+))?(?:(!?)\[([^\]]+)])?$/,
                C = /^([!\-])?(\w+[\\:]:\w+|[^=:<]+)?(?:([=:<])(.*))?$/,
                w = /[*?+]/;
            if (e) {
                var x = fo(e, ",");
                for (S["@"] && (h = S["@"].attributes, v = S["@"].attributesOrder), t = 0, n = x.length; t < n; t++)
                    if (i = y.exec(x[t])) {
                        if (g = i[1], c = i[2], p = i[3], s = i[5], a = { attributes: d = {}, attributesOrder: m = [] }, "#" === g && (a.paddEmpty = !0), "-" === g && (a.removeEmpty = !0), "!" === i[4] && (a.removeEmptyAttrs = !0), h && (Q(h, function(e, t) { d[t] = e }), m.push.apply(m, v)), s)
                            for (r = 0, o = (s = fo(s, "|")).length; r < o; r++)(i = C.exec(s[r])) && (u = {}, f = i[1], l = i[2].replace(/[\\:]:/g, ":"), g = i[3], b = i[4], "!" === f && (a.attributesRequired = a.attributesRequired || [], a.attributesRequired.push(l), u.required = !0), "-" !== f ? (g && ("=" === g && (a.attributesDefault = a.attributesDefault || [], a.attributesDefault.push({ name: l, value: b }), u.defaultValue = b), ":" === g && (a.attributesForced = a.attributesForced || [], a.attributesForced.push({ name: l, value: b }), u.forcedValue = b), "<" === g && (u.validValues = fi(b, "?"))), w.test(l) ? (a.attributePatterns = a.attributePatterns || [], u.pattern = D(l), a.attributePatterns.push(u)) : (d[l] || m.push(l), d[l] = u)) : (delete d[l], m.splice(pi(m, l), 1)));
                        h || "@" !== c || (h = d, v = m), p && (a.outputName = c, S[p] = a), w.test(c) ? (a.pattern = D(c), E.push(a)) : S[c] = a
                    }
            }
        }

        function B(e) { S = {}, E = [], O(e), di(m, function(e, t) { l[t] = e.children }) }

        function P(e) {
            var a = /^(~)?(.+)$/;
            e && (ci.text_block_elements = ci.block_elements = null, di(fo(e, ","), function(e) {
                var t, n = a.exec(e),
                    r = "~" === n[1],
                    o = r ? "span" : "div",
                    i = n[2];
                l[i] = l[o], f[i] = o, r || (T[i.toUpperCase()] = {}, T[i] = {}), S[i] || (t = S[o], delete(t = mi({}, t)).removeEmptyAttrs, delete t.removeEmpty, S[i] = t), di(l, function(e, t) { e[o] && (l[t] = e = mi({}, l[t]), e[i] = e[o]) })
            }))
        }

        function L(e) {
            var o = /^([+\-]?)([A-Za-z0-9_\-.\u00b7\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u037d\u037f-\u1fff\u200c-\u200d\u203f-\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]+)\[([^\]]+)]$/;
            ci[i.schema] = null, e && di(fo(e, ","), function(e) {
                var t, n, r = o.exec(e);
                r && (n = r[1], t = n ? l[r[2]] : l[r[2]] = { "#comment": {} }, t = l[r[2]], di(fo(r[3], "|"), function(e) { "-" === n ? delete t[e] : t[e] = {} }))
            })
        }

        function I(e) {
            var t, n = S[e];
            if (n) return n;
            for (t = E.length; t--;)
                if ((n = E[t]).pattern.test(e)) return n
        }
        di((i.special || "script noscript iframe noframes noembed title style textarea xmp").split(" "), function(e) { d[e] = new RegExp("</" + e + "[^>]*>", "gi") }), i.valid_elements ? B(i.valid_elements) : (di(m, function(e, t) { S[t] = { attributes: e.attributes, attributesOrder: e.attributesOrder }, l[t] = e.children }), "html5" !== i.schema && di(fo("strong/b em/i"), function(e) {
            var t = fo(e, "/");
            S[t[1]].outputName = t[0]
        }), di(fo("ol ul sub sup blockquote span font a table tbody strong em b i"), function(e) { S[e] && (S[e].removeEmpty = !0) }), di(fo("p h1 h2 h3 h4 h5 h6 th td pre div address caption li"), function(e) { S[e].paddEmpty = !0 }), di(fo("span"), function(e) { S[e].removeEmptyAttrs = !0 })), P(i.custom_elements), L(i.valid_children), O(i.extended_valid_elements), L("+ol[ul|ol],+ul[ul|ol]"), di({ dd: "dl", dt: "dl", li: "ul ol", td: "tr", th: "tr", tr: "tbody thead tfoot", tbody: "table", thead: "table", tfoot: "table", legend: "fieldset", area: "map", param: "video audio object" }, function(e, t) { S[t] && (S[t].parentsRequired = fo(e)) }), i.invalid_elements && di(gi(i.invalid_elements), function(e) { S[e] && delete S[e] }), I("span") || O("span[!data-mce-type|*]");
        var M = J(h),
            F = J(v),
            U = J(b),
            z = J(x),
            j = J(T),
            H = J(A),
            V = J(R),
            q = J(w),
            $ = J(C),
            W = J(k),
            K = J(_),
            X = J(y),
            Y = J(d),
            G = J(f);
        return {
            children: l,
            elements: S,
            getValidStyles: M,
            getValidClasses: U,
            getBlockElements: j,
            getInvalidStyles: F,
            getShortEndedElements: q,
            getTextBlockElements: H,
            getTextInlineElements: V,
            getBoolAttrs: z,
            getElementRule: I,
            getSelfClosingElements: $,
            getNonEmptyElements: W,
            getMoveCaretBeforeOnEnterElements: K,
            getWhiteSpaceElements: X,
            getSpecialElements: Y,
            isValidChild: function(e, t) { var n = l[e.toLowerCase()]; return !(!n || !n[t.toLowerCase()]) },
            isValid: function(e, t) {
                var n, r, o = I(e);
                if (o) {
                    if (!t) return !0;
                    if (o.attributes[t]) return !0;
                    if (n = o.attributePatterns)
                        for (r = n.length; r--;)
                            if (n[r].pattern.test(e)) return !0
                }
                return !1
            },
            getCustomElements: G,
            addValidElements: O,
            setValidElements: B,
            addCustomElements: P,
            addValidChildren: L
        }
    }

    function po(e, t, n, r) {
        function o(e) { return 1 < (e = parseInt(e, 10).toString(16)).length ? e : "0" + e }
        return "#" + o(t) + o(n) + o(r)
    }

    function ho(b, e) {
        var u, o, y = this,
            C = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/gi,
            w = /(?:url(?:(?:\(\s*\"([^\"]+)\"\s*\))|(?:\(\s*\'([^\']+)\'\s*\))|(?:\(\s*([^)\s]+)\s*\))))|(?:\'([^\']+)\')|(?:\"([^\"]+)\")/gi,
            x = /\s*([^:]+):\s*([^;]+);?/g,
            S = /\s+$/,
            E = {},
            N = Ro;
        b = b || {}, e && (u = e.getValidStyles(), o = e.getInvalidStyles());
        for (var t = ("\\\" \\' \\; \\: ; : " + N).split(" "), k = 0; k < t.length; k++) E[t[k]] = N + k, E[N + k] = t[k];
        return {
            toHex: function(e) { return e.replace(C, po) },
            parse: function(e) {
                function t(e, t, n) { var r = p[e + "-top" + t]; if (r) { var o = p[e + "-right" + t]; if (o) { var i = p[e + "-bottom" + t]; if (i) { var a = p[e + "-left" + t]; if (a) { var u = [r, o, i, a]; for (k = u.length - 1; k-- && u[k] === u[k + 1];); - 1 < k && n || (p[e + t] = -1 === k ? u[0] : u.join(" "), delete p[e + "-top" + t], delete p[e + "-right" + t], delete p[e + "-bottom" + t], delete p[e + "-left" + t]) } } } } }

                function n(e) {
                    var t, n = p[e];
                    if (n) {
                        for (t = (n = n.split(" ")).length; t--;)
                            if (n[t] !== n[0]) return;
                        return p[e] = n[0], 1
                    }
                }

                function r(e) { return f = !0, E[e] }

                function u(e, t) { return f && (e = e.replace(/\uFEFF[0-9]/g, function(e) { return E[e] })), t ? e : e.replace(/\\([\'\";:])/g, "$1") }

                function o(e) { return String.fromCharCode(parseInt(e.slice(1), 16)) }

                function i(e) { return e.replace(/\\[0-9a-f]+/gi, o) }

                function a(e, t, n, r, o, i) { if (o = o || i) return "'" + (o = u(o)).replace(/\'/g, "\\'") + "'"; if (t = u(t || n || r), !b.allow_script_urls) { var a = t.replace(/[\s\r\n]+/g, ""); if (/(java|vb)script:/i.test(a)) return ""; if (!b.allow_svg_data_urls && /^data:image\/svg/i.test(a)) return "" } return "url('" + (t = h ? h.call(v, t, "style") : t).replace(/\'/g, "\\'") + "')" }
                var s, c, l, f, d, m, g, p = {},
                    h = b.url_converter,
                    v = b.url_converter_scope || y;
                if (e) {
                    for (e = (e = e.replace(/[\u0000-\u001F]/g, "")).replace(/\\[\"\';:\uFEFF]/g, r).replace(/\"[^\"]+\"|\'[^\']+\'/g, function(e) { return e.replace(/[;:]/g, r) }); s = x.exec(e);) x.lastIndex = s.index + s[0].length, c = s[1].replace(S, "").toLowerCase(), l = s[2].replace(S, ""), c && l && (c = i(c), l = i(l), -1 === c.indexOf(N) && -1 === c.indexOf('"') && (b.allow_script_urls || "behavior" !== c && !/expression\s*\(|\/\*|\*\//.test(l)) && ("font-weight" === c && "700" === l ? l = "bold" : "color" !== c && "background-color" !== c || (l = l.toLowerCase()), l = (l = l.replace(C, po)).replace(w, a), p[c] = f ? u(l, !0) : l));
                    t("border", "", !0), t("border", "-width"), t("border", "-color"), t("border", "-style"), t("padding", ""), t("margin", ""), m = "border-style", g = "border-color", n(d = "border-width") && n(m) && n(g) && (p.border = p[d] + " " + p[m] + " " + p[g], delete p[d], delete p[m], delete p[g]), "medium none" === p.border && delete p.border, "none" === p["border-image"] && delete p["border-image"]
                }
                return p
            },
            serialize: function(i, r) {
                function e(e) {
                    var t, n = u[e];
                    if (n)
                        for (var r = 0, o = n.length; r < o; r++) e = n[r], (t = i[e]) && (a += (0 < a.length ? " " : "") + e + ": " + t + ";")
                }
                var a = "";
                return r && u ? (e("*"), e(r)) : Q(i, function(e, t) { var n;!e || o && ((n = o["*"]) && n[t] || (n = o[r]) && n[t]) || (a += (0 < a.length ? " " : "") + t + ": " + e + ";") }), a
            }
        }
    }

    function vo(e) { return e instanceof Event || y(e.initEvent) }

    function bo(e, t, n, r) { var o, i, a = function(e) { var t, n = null != r ? r : {}; for (t in e) Ee(hi, t) || (n[t] = e[t]); return V(n.composedPath) && (n.composedPath = function() { return e.composedPath() }), n }(t); return a.type = e, re(a.target) && (a.target = null !== (o = a.srcElement) && void 0 !== o ? o : n), (re((i = t).preventDefault) || vo(i)) && (a.preventDefault = function() { a.defaultPrevented = !0, a.isDefaultPrevented = x, y(t.preventDefault) ? t.preventDefault() : vo(t) && (t.returnValue = !1) }, a.stopPropagation = function() { a.cancelBubble = !0, a.isPropagationStopped = x, y(t.stopPropagation) ? t.stopPropagation() : vo(t) && (t.cancelBubble = !0) }, a.stopImmediatePropagation = function() { a.isImmediatePropagationStopped = x, a.stopPropagation() }, a.isDefaultPrevented !== x && a.isDefaultPrevented !== T && (a.isDefaultPrevented = !0 === a.defaultPrevented ? x : T, a.isPropagationStopped = !0 === a.cancelBubble ? x : T, a.isImmediatePropagationStopped = T)), a }

    function yo(e, t, n, r) { e.addEventListener ? e.addEventListener(t, n, r || !1) : e.attachEvent && e.attachEvent("on" + t, n) }

    function Co(e, t, n, r) { e.removeEventListener ? e.removeEventListener(t, n, r || !1) : e.detachEvent && e.detachEvent("on" + t, n) }

    function wo(e, t) { var n, r, o, i, a = bo(e.type, e, document, t); return V(i = e) && vi.test(i.type) && b(e.pageX) && !b(e.clientX) && (r = (n = a.target.ownerDocument || document).documentElement, o = n.body, a.pageX = e.clientX + (r && r.scrollLeft || o && o.scrollLeft || 0) - (r && r.clientLeft || o && o.clientLeft || 0), a.pageY = e.clientY + (r && r.scrollTop || o && o.scrollTop || 0) - (r && r.clientTop || o && o.clientTop || 0)), b(a.metaKey) && (a.metaKey = !1), a }
    var xo = Vr(["h1", "h2", "h3", "h4", "h5", "h6"]),
        So = Vr(["article", "aside", "details", "div", "dt", "figcaption", "footer", "form", "fieldset", "header", "hgroup", "html", "main", "nav", "section", "summary", "body", "p", "dl", "multicol", "dd", "figure", "address", "center", "blockquote", "h1", "h2", "h3", "h4", "h5", "h6", "listing", "xmp", "pre", "plaintext", "menu", "dir", "ul", "ol", "li", "hr", "table", "tbody", "thead", "tfoot", "th", "tr", "td", "caption"]),
        Eo = Vr(["h1", "h2", "h3", "h4", "h5", "h6", "p", "div", "address", "pre", "form", "blockquote", "center", "dir", "fieldset", "header", "footer", "article", "section", "hgroup", "aside", "nav", "figure"]),
        No = Vr(["ul", "ol", "dl"]),
        ko = Vr(["li", "dd", "dt"]),
        _o = Vr(["thead", "tbody", "tfoot"]),
        Ao = Vr(["td", "th"]),
        To = Vr(["pre", "script", "textarea", "style"]),
        Ro = "\ufeff",
        Do = "\xa0",
        Oo = Ro,
        Bo = function(e) { return e === Ro },
        Po = function(e) { return e.replace(/\uFEFF/g, "") },
        Lo = Hn,
        Io = qn,
        Mo = function(e) { return Io(e) && e.data[0] === Oo },
        Fo = function(e) { return Io(e) && e.data[e.data.length - 1] === Oo },
        Uo = Gn,
        zo = Jn,
        jo = Xn,
        Ho = qn,
        Vo = rn(["script", "style", "textarea"]),
        qo = rn(["img", "input", "textarea", "hr", "iframe", "video", "audio", "object", "embed"]),
        $o = rn(["table"]),
        Wo = Xr,
        Ko = function(e) { return !1 === (Hn(t = e) && "true" === t.getAttribute("unselectable")) && zo(e); var t },
        Xo = /^[ \t\r\n]*$/,
        Yo = an("data-mce-bookmark"),
        Go = an("data-mce-bogus"),
        Jo = function(e) { return Hn(e) && "all" === e.getAttribute("data-mce-bogus") },
        Qo = function(e, t, n) { var r = n || t; if (Hn(t) && ao(t)) return t; for (var o, i, a, u, s, c, l, f, d, m, g, p = t.childNodes, h = p.length - 1; 0 <= h; h--) Qo(e, p[h], r); return !Hn(t) || 1 === (o = t.childNodes).length && ao(o[0]) && t.parentNode.insertBefore(o[0], t), Kn(a = t) || Wn(a) || ro(t, r) || Hn(i = t) && 0 < i.childNodes.length || (s = r, qn(u = t) && 0 < u.data.length && (f = new jr(c = u, l = s).prev(!1), d = new jr(c, l).next(!1), m = b(f) || io(f, l), g = b(d) || io(d, l), m && g)) || e.remove(t), t },
        Zo = St.makeMap,
        ei = /[&<>\"\u0060\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        ti = /[<>&\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        ni = /[<>&\"\']/g,
        ri = /&#([a-z0-9]+);?|&([a-z0-9]+);/gi,
        oi = { 128: "\u20ac", 130: "\u201a", 131: "\u0192", 132: "\u201e", 133: "\u2026", 134: "\u2020", 135: "\u2021", 136: "\u02c6", 137: "\u2030", 138: "\u0160", 139: "\u2039", 140: "\u0152", 142: "\u017d", 145: "\u2018", 146: "\u2019", 147: "\u201c", 148: "\u201d", 149: "\u2022", 150: "\u2013", 151: "\u2014", 152: "\u02dc", 153: "\u2122", 154: "\u0161", 155: "\u203a", 156: "\u0153", 158: "\u017e", 159: "\u0178" },
        ii = { '"': "&quot;", "'": "&#39;", "<": "&lt;", ">": "&gt;", "&": "&amp;", "`": "&#96;" },
        ai = { "&lt;": "<", "&gt;": ">", "&amp;": "&", "&quot;": '"', "&apos;": "'" },
        ui = uo("50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro", 32),
        si = {
            encodeRaw: so,
            encodeAllRaw: function(e) { return ("" + e).replace(ni, function(e) { return ii[e] || e }) },
            encodeNumeric: co,
            encodeNamed: lo,
            getEncodeFunc: function(e, t) {
                var n = uo(t) || ui,
                    r = Zo(e.replace(/\+/g, ","));
                return r.named && r.numeric ? function(e, t) { return e.replace(t ? ei : ti, function(e) { return void 0 !== ii[e] ? ii[e] : void 0 !== n[e] ? n[e] : 1 < e.length ? "&#" + (1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536) + ";" : "&#" + e.charCodeAt(0) + ";" }) } : r.named ? t ? function(e, t) { return lo(e, t, n) } : lo : r.numeric ? co : so
            },
            decode: function(e) { return e.replace(ri, function(e, t) { return t ? 65535 < (t = "x" === t.charAt(0).toLowerCase() ? parseInt(t.substr(1), 16) : parseInt(t, 10)) ? (t -= 65536, String.fromCharCode(55296 + (t >> 10), 56320 + (1023 & t))) : oi[t] || String.fromCharCode(t) : ai[e] || ui[e] || (n = e, (r = Et.fromTag("div").dom).innerHTML = n, r.textContent || r.innerText || n); var n, r }) }
        },
        ci = {},
        li = {},
        fi = St.makeMap,
        di = St.each,
        mi = St.extend,
        gi = St.explode,
        pi = St.inArray,
        hi = { keyLocation: !0, layerX: !0, layerY: !0, returnValue: !0, webkitMovementX: !0, webkitMovementY: !0, keyIdentifier: !0, mozPressure: !0 },
        vi = /^(?:mouse|contextmenu)|click/,
        bi = (yi.prototype.bind = function(e, t, n, r) {
            function o(e) { f.executeHandlers(wo(e || d.event), i) }
            var i, a, u, s, c, l, f = this,
                d = window;
            if (e && 3 !== e.nodeType && 8 !== e.nodeType) {
                e[f.expando] ? i = e[f.expando] : (i = f.count++, e[f.expando] = i, f.events[i] = {}), r = r || e;
                for (var m = t.split(" "), g = m.length; g--;) c = o, s = l = !1, "DOMContentLoaded" === (u = m[g]) && (u = "ready"), f.domLoaded && "ready" === u && "complete" === e.readyState ? n.call(r, wo({ type: u })) : (f.hasMouseEnterLeave || (s = f.mouseEnterLeave[u]) && (c = function(e) {
                    var t = e.currentTarget,
                        n = e.relatedTarget;
                    if (n && t.contains) n = t.contains(n);
                    else
                        for (; n && n !== t;) n = n.parentNode;
                    n || ((e = wo(e || d.event)).type = "mouseout" === e.type ? "mouseleave" : "mouseenter", e.target = t, f.executeHandlers(e, i))
                }), f.hasFocusIn || "focusin" !== u && "focusout" !== u || (l = !0, s = "focusin" === u ? "focus" : "blur", c = function(e) {
                    (e = wo(e || d.event)).type = "focus" === e.type ? "focusin" : "focusout", f.executeHandlers(e, i)
                }), (a = f.events[i][u]) ? "ready" === u && f.domLoaded ? n(wo({ type: u })) : a.push({ func: n, scope: r }) : (f.events[i][u] = a = [{ func: n, scope: r }], a.fakeName = s, a.capture = l, a.nativeHandler = c, "ready" === u ? function(e, t, n) {
                    var r, o = e.document,
                        i = { type: "ready" };
                    n.domLoaded ? t(i) : (r = function() { Co(e, "DOMContentLoaded", r), Co(e, "load", r), n.domLoaded || (n.domLoaded = !0, t(i)), e = null }, "complete" === o.readyState || "interactive" === o.readyState && o.body ? r() : yo(e, "DOMContentLoaded", r), n.domLoaded || yo(e, "load", r))
                }(e, c, f) : yo(e, s || u, c, l)));
                return e = a = null, n
            }
        }, yi.prototype.unbind = function(n, e, t) {
            var r, o, i;
            if (!n || 3 === n.nodeType || 8 === n.nodeType) return this;
            var a = n[this.expando];
            if (a) {
                if (i = this.events[a], e) {
                    for (var u, s, c, l, f = e.split(" "), d = f.length; d--;)
                        if (l = i[o = f[d]]) {
                            if (t)
                                for (r = l.length; r--;) l[r].func === t && (u = l.nativeHandler, s = l.fakeName, c = l.capture, (l = l.slice(0, r).concat(l.slice(r + 1))).nativeHandler = u, l.fakeName = s, l.capture = c, i[o] = l);
                            t && 0 !== l.length || (delete i[o], Co(n, l.fakeName || o, l.nativeHandler, l.capture))
                        }
                } else Q(i, function(e, t) { Co(n, e.fakeName || t, e.nativeHandler, e.capture) }), i = {};
                for (o in i)
                    if (Ee(i, o)) return this;
                delete this.events[a];
                try { delete n[this.expando] } catch (e) { n[this.expando] = null }
            }
            return this
        }, yi.prototype.fire = function(e, t, n) {
            var r;
            if (!e || 3 === e.nodeType || 8 === e.nodeType) return this;
            for (var o = wo({ type: t, target: e }, n);
                (r = e[this.expando]) && this.executeHandlers(o, r), (e = e.parentNode || e.ownerDocument || e.defaultView || e.parentWindow) && !o.isPropagationStopped(););
            return this
        }, yi.prototype.clean = function(e) {
            var t, n;
            if (!e || 3 === e.nodeType || 8 === e.nodeType) return this;
            if (e[this.expando] && this.unbind(e), (e = e.getElementsByTagName ? e : e.document) && e.getElementsByTagName)
                for (this.unbind(e), t = (n = e.getElementsByTagName("*")).length; t--;)(e = n[t])[this.expando] && this.unbind(e);
            return this
        }, yi.prototype.destroy = function() { this.events = {} }, yi.prototype.cancel = function(e) { return e && (e.preventDefault(), e.stopImmediatePropagation()), !1 }, yi.prototype.executeHandlers = function(e, t) {
            var n = this.events[t],
                r = n && n[e.type];
            if (r)
                for (var o = 0, i = r.length; o < i; o++) { var a = r[o]; if (a && !1 === a.func.call(a.scope, e) && e.preventDefault(), e.isImmediatePropagationStopped()) return }
        }, yi.Event = new yi, yi);

    function yi() { this.domLoaded = !1, this.events = {}, this.count = 1, this.expando = "mce-data-" + (+new Date).toString(32), this.hasMouseEnterLeave = "onmouseenter" in document.documentElement, this.hasFocusIn = "onfocusin" in document.documentElement, this.count = 1 }

    function Ci(e, t, n) { var r = "0x" + t - 65536; return r != r || n ? t : r < 0 ? String.fromCharCode(65536 + r) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320) }
    var wi, xi, Si, Ei, Ni, ki, _i, Ai, Ti, Ri, Di, Oi, Bi, Pi, Li, Ii, Mi, Fi = "sizzle" + -new Date,
        Ui = window.document,
        zi = 0,
        ji = 0,
        Hi = ya(),
        Vi = ya(),
        qi = ya(),
        $i = function(e, t) { return e === t && (Ri = !0), 0 },
        Wi = "undefined",
        Ki = {}.hasOwnProperty,
        Xi = [],
        Yi = Xi.pop,
        Gi = Xi.push,
        Ji = Xi.push,
        Qi = Xi.slice,
        Zi = Xi.indexOf || function(e) {
            for (var t = 0, n = this.length; t < n; t++)
                if (this[t] === e) return t;
            return -1
        },
        ea = "[\\x20\\t\\r\\n\\f]",
        ta = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        na = "\\[" + ea + "*(" + ta + ")(?:" + ea + "*([*^$|!~]?=)" + ea + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ta + "))|)" + ea + "*\\]",
        ra = ":(" + ta + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + na + ")*)|.*)\\)|)",
        oa = new RegExp("^" + ea + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ea + "+$", "g"),
        ia = new RegExp("^" + ea + "*," + ea + "*"),
        aa = new RegExp("^" + ea + "*([>+~]|" + ea + ")" + ea + "*"),
        ua = new RegExp("=" + ea + "*([^\\]'\"]*?)" + ea + "*\\]", "g"),
        sa = new RegExp(ra),
        ca = new RegExp("^" + ta + "$"),
        la = { ID: new RegExp("^#(" + ta + ")"), CLASS: new RegExp("^\\.(" + ta + ")"), TAG: new RegExp("^(" + ta + "|[*])"), ATTR: new RegExp("^" + na), PSEUDO: new RegExp("^" + ra), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ea + "*(even|odd|(([+-]|)(\\d*)n|)" + ea + "*(?:([+-]|)" + ea + "*(\\d+)|))" + ea + "*\\)|)", "i"), bool: new RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$", "i"), needsContext: new RegExp("^" + ea + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ea + "*((?:-\\d)?\\d*)" + ea + "*\\)|)(?=[^-]|$)", "i") },
        fa = /^(?:input|select|textarea|button)$/i,
        da = /^h\d$/i,
        ma = /^[^{]+\{\s*\[native \w/,
        ga = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        pa = /[+~]/,
        ha = /'|\\/g,
        va = new RegExp("\\\\([\\da-f]{1,6}" + ea + "?|(" + ea + ")|.)", "ig");
    try { Ji.apply(Xi = Qi.call(Ui.childNodes), Ui.childNodes), Xi[Ui.childNodes.length].nodeType } catch (e) {
        Ji = {
            apply: Xi.length ? function(e, t) { Gi.apply(e, Qi.call(t)) } : function(e, t) {
                for (var n = e.length, r = 0; e[n++] = t[r++];);
                e.length = n - 1
            }
        }
    }
    var ba = function(e, t, n, r) {
        var o, i, a, u, s, c, l, f, d, m;
        if ((t ? t.ownerDocument || t : Ui) !== Oi && Di(t), n = n || [], !e || "string" != typeof e) return n;
        if (1 !== (u = (t = t || Oi).nodeType) && 9 !== u) return [];
        if (Pi && !r) {
            if (o = ga.exec(e))
                if (a = o[1]) { if (9 === u) { if (!(i = t.getElementById(a)) || !i.parentNode) return n; if (i.id === a) return n.push(i), n } else if (t.ownerDocument && (i = t.ownerDocument.getElementById(a)) && Mi(t, i) && i.id === a) return n.push(i), n } else { if (o[2]) return Ji.apply(n, t.getElementsByTagName(e)), n; if ((a = o[3]) && wi.getElementsByClassName) return Ji.apply(n, t.getElementsByClassName(a)), n }
            if (wi.qsa && (!Li || !Li.test(e))) {
                if (f = l = Fi, d = t, m = 9 === u && e, 1 === u && "object" !== t.nodeName.toLowerCase()) {
                    for (c = Ni(e), (l = t.getAttribute("id")) ? f = l.replace(ha, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", s = c.length; s--;) c[s] = f + Na(c[s]);
                    d = pa.test(e) && Sa(t.parentNode) || t, m = c.join(",")
                }
                if (m) try { return Ji.apply(n, d.querySelectorAll(m)), n } catch (e) {} finally { l || t.removeAttribute("id") }
            }
        }
        return _i(e.replace(oa, "$1"), t, n, r)
    };

    function ya() {
        var n = [];

        function r(e, t) { return n.push(e + " ") > xi.cacheLength && delete r[n.shift()], r[e + " "] = t }
        return r
    }

    function Ca(e) { return e[Fi] = !0, e }

    function wa(e, t) {
        var n = t && e,
            r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
        if (r) return r;
        if (n)
            for (; n = n.nextSibling;)
                if (n === t) return -1;
        return e ? 1 : -1
    }

    function xa(a) { return Ca(function(i) { return i = +i, Ca(function(e, t) { for (var n, r = a([], e.length, i), o = r.length; o--;) e[n = r[o]] && (e[n] = !(t[n] = e[n])) }) }) }

    function Sa(e) { return e && typeof e.getElementsByTagName != Wi && e }

    function Ea() {}

    function Na(e) { for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value; return r }

    function ka(a, e, t) {
        var u = e.dir,
            s = t && "parentNode" === u,
            c = ji++;
        return e.first ? function(e, t, n) {
            for (; e = e[u];)
                if (1 === e.nodeType || s) return a(e, t, n)
        } : function(e, t, n) {
            var r, o, i = [zi, c];
            if (n) {
                for (; e = e[u];)
                    if ((1 === e.nodeType || s) && a(e, t, n)) return !0
            } else
                for (; e = e[u];)
                    if (1 === e.nodeType || s) { if ((r = (o = e[Fi] || (e[Fi] = {}))[u]) && r[0] === zi && r[1] === c) return i[2] = r[2]; if ((o[u] = i)[2] = a(e, t, n)) return !0 }
        }
    }

    function _a(o) {
        return 1 < o.length ? function(e, t, n) {
            for (var r = o.length; r--;)
                if (!o[r](e, t, n)) return !1;
            return !0
        } : o[0]
    }

    function Aa(e, t, n, r, o) { for (var i, a = [], u = 0, s = e.length, c = null != t; u < s; u++)(i = e[u]) && (n && !n(i, r, o) || (a.push(i), c && t.push(u))); return a }

    function Ta(e) { return void 0 !== e }

    function Ra(e) { return "string" == typeof e }

    function Da(e, t) {
        var n, r = (t = t || Fa).createElement("div"),
            o = t.createDocumentFragment();
        for (r.innerHTML = e; n = r.firstChild;) o.appendChild(n);
        return o
    }

    function Oa(e, t) { return e && t && -1 !== (" " + e.className + " ").indexOf(" " + t + " ") }

    function Ba(e, t, n) { var r, o; return t = ou(t)[0], e.each(function() { n && r === this.parentNode || (r = this.parentNode, o = t.cloneNode(!1), this.parentNode.insertBefore(o, this)), o.appendChild(this) }), e }

    function Pa(e, t) { return new ou.fn.init(e, t) }

    function La(e) { return null == e ? "" : ("" + e).replace(Ja, "") }

    function Ia(e, t) {
        var n, r, o, i;
        if (e)
            if (void 0 === (n = e.length)) {
                for (r in e)
                    if (e.hasOwnProperty(r) && (i = e[r], !1 === t.call(i, r, i))) break
            } else
                for (o = 0; o < n && (i = e[o], !1 !== t.call(i, o, i)); o++);
        return e
    }

    function Ma(e, n) { var r = []; return Ia(e, function(e, t) { n(t, e) && r.push(t) }), r }
    wi = ba.support = {}, Ei = ba.isXML = function(e) { var t = e && (e.ownerDocument || e).documentElement; return !!t && "HTML" !== t.nodeName }, Di = ba.setDocument = function(e) {
        var t, s = e ? e.ownerDocument || e : Ui,
            n = s.defaultView;
        return s !== Oi && 9 === s.nodeType && s.documentElement ? (Bi = (Oi = s).documentElement, Pi = !Ei(s), n && n !== function(e) { try { return e.top } catch (e) {} return null }(n) && (n.addEventListener ? n.addEventListener("unload", function() { Di() }, !1) : n.attachEvent && n.attachEvent("onunload", function() { Di() })), wi.attributes = !0, wi.getElementsByTagName = !0, wi.getElementsByClassName = ma.test(s.getElementsByClassName), wi.getById = !0, xi.find.ID = function(e, t) { if (typeof t.getElementById != Wi && Pi) { var n = t.getElementById(e); return n && n.parentNode ? [n] : [] } }, xi.filter.ID = function(e) { var t = e.replace(va, Ci); return function(e) { return e.getAttribute("id") === t } }, xi.find.TAG = wi.getElementsByTagName ? function(e, t) { if (typeof t.getElementsByTagName != Wi) return t.getElementsByTagName(e) } : function(e, t) {
            var n, r = [],
                o = 0,
                i = t.getElementsByTagName(e);
            if ("*" !== e) return i;
            for (; n = i[o++];) 1 === n.nodeType && r.push(n);
            return r
        }, xi.find.CLASS = wi.getElementsByClassName && function(e, t) { if (Pi) return t.getElementsByClassName(e) }, Ii = [], Li = [], wi.disconnectedMatch = !0, Li = Li.length && new RegExp(Li.join("|")), Ii = Ii.length && new RegExp(Ii.join("|")), t = ma.test(Bi.compareDocumentPosition), Mi = t || ma.test(Bi.contains) ? function(e, t) {
            var n = 9 === e.nodeType ? e.documentElement : e,
                r = t && t.parentNode;
            return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
        } : function(e, t) {
            if (t)
                for (; t = t.parentNode;)
                    if (t === e) return !0;
            return !1
        }, $i = t ? function(e, t) { return e === t ? (Ri = !0, 0) : (n = !e.compareDocumentPosition - !t.compareDocumentPosition) || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !wi.sortDetached && t.compareDocumentPosition(e) === n ? e === s || e.ownerDocument === Ui && Mi(Ui, e) ? -1 : t === s || t.ownerDocument === Ui && Mi(Ui, t) ? 1 : Ti ? Zi.call(Ti, e) - Zi.call(Ti, t) : 0 : 4 & n ? -1 : 1); var n } : function(e, t) {
            if (e === t) return Ri = !0, 0;
            var n, r = 0,
                o = e.parentNode,
                i = t.parentNode,
                a = [e],
                u = [t];
            if (!o || !i) return e === s ? -1 : t === s ? 1 : o ? -1 : i ? 1 : Ti ? Zi.call(Ti, e) - Zi.call(Ti, t) : 0;
            if (o === i) return wa(e, t);
            for (n = e; n = n.parentNode;) a.unshift(n);
            for (n = t; n = n.parentNode;) u.unshift(n);
            for (; a[r] === u[r];) r++;
            return r ? wa(a[r], u[r]) : a[r] === Ui ? -1 : u[r] === Ui ? 1 : 0
        }, s) : Oi
    }, ba.matches = function(e, t) { return ba(e, null, null, t) }, ba.matchesSelector = function(e, t) {
        if ((e.ownerDocument || e) !== Oi && Di(e), t = t.replace(ua, "='$1']"), wi.matchesSelector && Pi && (!Ii || !Ii.test(t)) && (!Li || !Li.test(t))) try { var n = (void 0).call(e, t); if (n || wi.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n } catch (e) {}
        return 0 < ba(t, Oi, null, [e]).length
    }, ba.contains = function(e, t) { return (e.ownerDocument || e) !== Oi && Di(e), Mi(e, t) }, ba.attr = function(e, t) {
        (e.ownerDocument || e) !== Oi && Di(e);
        var n = xi.attrHandle[t.toLowerCase()],
            r = n && Ki.call(xi.attrHandle, t.toLowerCase()) ? n(e, t, !Pi) : void 0;
        return void 0 !== r ? r : wi.attributes || !Pi ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
    }, ba.error = function(e) { throw new Error("Syntax error, unrecognized expression: " + e) }, ba.uniqueSort = function(e) {
        var t, n = [],
            r = 0,
            o = 0;
        if (Ri = !wi.detectDuplicates, Ti = !wi.sortStable && e.slice(0), e.sort($i), Ri) { for (; t = e[o++];) t === e[o] && (r = n.push(o)); for (; r--;) e.splice(n[r], 1) }
        return Ti = null, e
    }, Si = ba.getText = function(e) {
        var t, n = "",
            r = 0,
            o = e.nodeType;
        if (o) { if (1 === o || 9 === o || 11 === o) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling) n += Si(e) } else if (3 === o || 4 === o) return e.nodeValue } else
            for (; t = e[r++];) n += Si(t);
        return n
    }, (xi = ba.selectors = {
        cacheLength: 50,
        createPseudo: Ca,
        match: la,
        attrHandle: {},
        find: {},
        relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
        preFilter: { ATTR: function(e) { return e[1] = e[1].replace(va, Ci), e[3] = (e[3] || e[4] || e[5] || "").replace(va, Ci), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ba.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ba.error(e[0]), e }, PSEUDO: function(e) { var t, n = !e[6] && e[2]; return la.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && sa.test(n) && (t = Ni(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } },
        filter: {
            TAG: function(e) { var t = e.replace(va, Ci).toLowerCase(); return "*" === e ? function() { return !0 } : function(e) { return e.nodeName && e.nodeName.toLowerCase() === t } },
            CLASS: function(e) { var t = Hi[e + " "]; return t || (t = new RegExp("(^|" + ea + ")" + e + "(" + ea + "|$)")) && Hi(e, function(e) { return t.test("string" == typeof e.className && e.className || typeof e.getAttribute != Wi && e.getAttribute("class") || "") }) },
            ATTR: function(n, r, o) { return function(e) { var t = ba.attr(e, n); return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === o : "!=" === r ? t !== o : "^=" === r ? o && 0 === t.indexOf(o) : "*=" === r ? o && -1 < t.indexOf(o) : "$=" === r ? o && t.slice(-o.length) === o : "~=" === r ? -1 < (" " + t + " ").indexOf(o) : "|=" === r && (t === o || t.slice(0, o.length + 1) === o + "-")) } },
            CHILD: function(m, e, t, g, p) {
                var h = "nth" !== m.slice(0, 3),
                    v = "last" !== m.slice(-4),
                    b = "of-type" === e;
                return 1 === g && 0 === p ? function(e) { return !!e.parentNode } : function(e, t, n) {
                    var r, o, i, a, u, s, c = h != v ? "nextSibling" : "previousSibling",
                        l = e.parentNode,
                        f = b && e.nodeName.toLowerCase(),
                        d = !n && !b;
                    if (l) {
                        if (h) {
                            for (; c;) {
                                for (i = e; i = i[c];)
                                    if (b ? i.nodeName.toLowerCase() === f : 1 === i.nodeType) return !1;
                                s = c = "only" === m && !s && "nextSibling"
                            }
                            return !0
                        }
                        if (s = [v ? l.firstChild : l.lastChild], v && d) {
                            for (u = (r = (o = l[Fi] || (l[Fi] = {}))[m] || [])[0] === zi && r[1], a = r[0] === zi && r[2], i = u && l.childNodes[u]; i = ++u && i && i[c] || (a = u = 0) || s.pop();)
                                if (1 === i.nodeType && ++a && i === e) { o[m] = [zi, u, a]; break }
                        } else if (d && (r = (e[Fi] || (e[Fi] = {}))[m]) && r[0] === zi) a = r[1];
                        else
                            for (;
                                (i = ++u && i && i[c] || (a = u = 0) || s.pop()) && ((b ? i.nodeName.toLowerCase() !== f : 1 !== i.nodeType) || !++a || (d && ((i[Fi] || (i[Fi] = {}))[m] = [zi, a]), i !== e)););
                        return (a -= p) === g || a % g == 0 && 0 <= a / g
                    }
                }
            },
            PSEUDO: function(e, i) { var t, a = xi.pseudos[e] || xi.setFilters[e.toLowerCase()] || ba.error("unsupported pseudo: " + e); return a[Fi] ? a(i) : 1 < a.length ? (t = [e, e, "", i], xi.setFilters.hasOwnProperty(e.toLowerCase()) ? Ca(function(e, t) { for (var n, r = a(e, i), o = r.length; o--;) e[n = Zi.call(e, r[o])] = !(t[n] = r[o]) }) : function(e) { return a(e, 0, t) }) : a }
        },
        pseudos: {
            not: Ca(function(e) {
                var r = [],
                    o = [],
                    u = ki(e.replace(oa, "$1"));
                return u[Fi] ? Ca(function(e, t, n, r) { for (var o, i = u(e, null, r, []), a = e.length; a--;)(o = i[a]) && (e[a] = !(t[a] = o)) }) : function(e, t, n) { return r[0] = e, u(r, null, n, o), r[0] = null, !o.pop() }
            }),
            has: Ca(function(t) { return function(e) { return 0 < ba(t, e).length } }),
            contains: Ca(function(t) {
                return t = t.replace(va, Ci),
                    function(e) { return -1 < (e.textContent || e.innerText || Si(e)).indexOf(t) }
            }),
            lang: Ca(function(n) {
                return ca.test(n || "") || ba.error("unsupported lang: " + n), n = n.replace(va, Ci).toLowerCase(),
                    function(e) {
                        var t;
                        do { if (t = Pi ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-") } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
            }),
            target: function(e) { var t = window.location && window.location.hash; return t && t.slice(1) === e.id },
            root: function(e) { return e === Bi },
            focus: function(e) { return e === Oi.activeElement && (!Oi.hasFocus || Oi.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) },
            enabled: function(e) { return !1 === e.disabled },
            disabled: function(e) { return !0 === e.disabled },
            checked: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected },
            selected: function(e) { return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected },
            empty: function(e) {
                for (e = e.firstChild; e; e = e.nextSibling)
                    if (e.nodeType < 6) return !1;
                return !0
            },
            parent: function(e) { return !xi.pseudos.empty(e) },
            header: function(e) { return da.test(e.nodeName) },
            input: function(e) { return fa.test(e.nodeName) },
            button: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t },
            text: function(e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) },
            first: xa(function() { return [0] }),
            last: xa(function(e, t) { return [t - 1] }),
            eq: xa(function(e, t, n) { return [n < 0 ? n + t : n] }),
            even: xa(function(e, t) { for (var n = 0; n < t; n += 2) e.push(n); return e }),
            odd: xa(function(e, t) { for (var n = 1; n < t; n += 2) e.push(n); return e }),
            lt: xa(function(e, t, n) { for (var r = n < 0 ? n + t : n; 0 <= --r;) e.push(r); return e }),
            gt: xa(function(e, t, n) { for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r); return e })
        }
    }).pseudos.nth = xi.pseudos.eq, X(["radio", "checkbox", "file", "password", "image"], function(e) {
        var t;
        xi.pseudos[e] = (t = e, function(e) { return "input" === e.nodeName.toLowerCase() && e.type === t })
    }), X(["submit", "reset"], function(e) {
        var n;
        xi.pseudos[e] = (n = e, function(e) { var t = e.nodeName.toLowerCase(); return ("input" === t || "button" === t) && e.type === n })
    }), Ea.prototype = xi.filters = xi.pseudos, xi.setFilters = new Ea, Ni = ba.tokenize = function(e, t) { var n, r, o, i, a, u, s, c = Vi[e + " "]; if (c) return t ? 0 : c.slice(0); for (a = e, u = [], s = xi.preFilter; a;) { for (i in n && !(r = ia.exec(a)) || (r && (a = a.slice(r[0].length) || a), u.push(o = [])), n = !1, (r = aa.exec(a)) && (n = r.shift(), o.push({ value: n, type: r[0].replace(oa, " ") }), a = a.slice(n.length)), xi.filter) xi.filter.hasOwnProperty(i) && (!(r = la[i].exec(a)) || s[i] && !(r = s[i](r)) || (n = r.shift(), o.push({ value: n, type: i, matches: r }), a = a.slice(n.length))); if (!n) break } return t ? a.length : a ? ba.error(e) : Vi(e, u).slice(0) }, ki = ba.compile = function(e, t) {
        var n, h, v, b, y, r = [],
            o = [],
            i = qi[e + " "];
        if (!i) {
            for (n = (t = t || Ni(e)).length; n--;)((i = function e(t) {
                for (var o, n, r, i = t.length, a = xi.relative[t[0].type], u = a || xi.relative[" "], s = a ? 1 : 0, c = ka(function(e) { return e === o }, u, !0), l = ka(function(e) { return -1 < Zi.call(o, e) }, u, !0), f = [function(e, t, n) { var r = !a && (n || t !== Ai) || ((o = t).nodeType ? c : l)(e, t, n); return o = null, r }]; s < i; s++)
                    if (n = xi.relative[t[s].type]) f = [ka(_a(f), n)];
                    else {
                        if ((n = xi.filter[t[s].type].apply(null, t[s].matches))[Fi]) {
                            for (r = ++s; r < i && !xi.relative[t[r].type]; r++);
                            return function e(m, g, p, h, v, t) {
                                return h && !h[Fi] && (h = e(h)), v && !v[Fi] && (v = e(v, t)), Ca(function(e, t, n, r) {
                                    var o, i, a, u = [],
                                        s = [],
                                        c = t.length,
                                        l = e || function(e, t, n) { for (var r = 0, o = t.length; r < o; r++) ba(e, t[r], n); return n }(g || "*", n.nodeType ? [n] : n, []),
                                        f = !m || !e && g ? l : Aa(l, u, m, n, r),
                                        d = p ? v || (e ? m : c || h) ? [] : t : f;
                                    if (p && p(f, d, n, r), h)
                                        for (o = Aa(d, s), h(o, [], n, r), i = o.length; i--;)(a = o[i]) && (d[s[i]] = !(f[s[i]] = a));
                                    if (e) {
                                        if (v || m) {
                                            if (v) {
                                                for (o = [], i = d.length; i--;)(a = d[i]) && o.push(f[i] = a);
                                                v(null, d = [], o, r)
                                            }
                                            for (i = d.length; i--;)(a = d[i]) && -1 < (o = v ? Zi.call(e, a) : u[i]) && (e[o] = !(t[o] = a))
                                        }
                                    } else d = Aa(d === t ? d.splice(c, d.length) : d), v ? v(null, t, d, r) : Ji.apply(t, d)
                                })
                            }(1 < s && _a(f), 1 < s && Na(t.slice(0, s - 1).concat({ value: " " === t[s - 2].type ? "*" : "" })).replace(oa, "$1"), n, s < r && e(t.slice(s, r)), r < i && e(t = t.slice(r)), r < i && Na(t))
                        }
                        f.push(n)
                    }
                return _a(f)
            }(t[n]))[Fi] ? r : o).push(i);
            (i = qi(e, (h = o, b = 0 < (v = r).length, y = 0 < h.length, b ? Ca(a) : a))).selector = e
        }

        function a(e, t, n, r, o) {
            var i, a, u, s = 0,
                c = "0",
                l = e && [],
                f = [],
                d = Ai,
                m = e || y && xi.find.TAG("*", o),
                g = zi += null == d ? 1 : Math.random() || .1,
                p = m.length;
            for (o && (Ai = t !== Oi && t); c !== p && null != (i = m[c]); c++) {
                if (y && i) {
                    for (a = 0; u = h[a++];)
                        if (u(i, t, n)) { r.push(i); break }
                    o && (zi = g)
                }
                b && ((i = !u && i) && s--, e && l.push(i))
            }
            if (s += c, b && c !== s) {
                for (a = 0; u = v[a++];) u(l, f, t, n);
                if (e) {
                    if (0 < s)
                        for (; c--;) l[c] || f[c] || (f[c] = Yi.call(r));
                    f = Aa(f)
                }
                Ji.apply(r, f), o && !e && 0 < f.length && 1 < s + v.length && ba.uniqueSort(r)
            }
            return o && (zi = g, Ai = d), l
        }
        return i
    }, _i = ba.select = function(e, t, n, r) {
        var o, i, a, u, s, c = "function" == typeof e && e,
            l = !r && Ni(e = c.selector || e);
        if (n = n || [], 1 === l.length) {
            if (2 < (i = l[0] = l[0].slice(0)).length && "ID" === (a = i[0]).type && wi.getById && 9 === t.nodeType && Pi && xi.relative[i[1].type]) {
                if (!(t = (xi.find.ID(a.matches[0].replace(va, Ci), t) || [])[0])) return n;
                c && (t = t.parentNode), e = e.slice(i.shift().value.length)
            }
            for (o = la.needsContext.test(e) ? 0 : i.length; o-- && (a = i[o], !xi.relative[u = a.type]);)
                if ((s = xi.find[u]) && (r = s(a.matches[0].replace(va, Ci), pa.test(i[0].type) && Sa(t.parentNode) || t))) { if (i.splice(o, 1), !(e = r.length && Na(i))) return Ji.apply(n, r), n; break }
        }
        return (c || ki(e, l))(r, t, !Pi, n, pa.test(e) && Sa(t.parentNode) || t), n
    }, wi.sortStable = Fi.split("").sort($i).join("") === Fi, wi.detectDuplicates = !!Ri, Di(), wi.sortDetached = !0;
    var Fa = document,
        Ua = Array.prototype.push,
        za = Array.prototype.slice,
        ja = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        Ha = bi.Event,
        Va = St.makeMap("children,contents,next,prev"),
        qa = function(e, t, n, r) {
            var o;
            if (Ra(t)) t = Da(t, Qa(e[0]));
            else if (t.length && !t.nodeType) {
                if (t = ou.makeArray(t), r)
                    for (o = t.length - 1; 0 <= o; o--) qa(e, t[o], n, r);
                else
                    for (o = 0; o < t.length; o++) qa(e, t[o], n, r);
                return e
            }
            if (t.nodeType)
                for (o = e.length; o--;) n.call(e[o], t);
            return e
        },
        $a = St.makeMap("fillOpacity fontWeight lineHeight opacity orphans widows zIndex zoom", " "),
        Wa = St.makeMap("checked compact declare defer disabled ismap multiple nohref noshade nowrap readonly selected", " "),
        Ka = { for: "htmlFor", class: "className", readonly: "readOnly" },
        Xa = { float: "cssFloat" },
        Ya = {},
        Ga = {},
        Ja = /^\s*|\s*$/g,
        Qa = function(e) { return e ? 9 === e.nodeType ? e : e.ownerDocument : Fa };

    function Za(e, t, n) {
        var r = [],
            o = e[t];
        for ("string" != typeof n && n instanceof ou && (n = n[0]); o && 9 !== o.nodeType;) {
            if (void 0 !== n) { if (o === n) break; if ("string" == typeof n && ou(o).is(n)) break }
            1 === o.nodeType && r.push(o), o = o[t]
        }
        return r
    }

    function eu(e, t, n, r) {
        var o = [];
        for (r instanceof ou && (r = r[0]); e; e = e[t])
            if (!n || e.nodeType === n) {
                if (void 0 !== r) { if (e === r) break; if ("string" == typeof r && ou(e).is(r)) break }
                o.push(e)
            }
        return o
    }

    function tu(e, t, n) {
        for (e = e[t]; e; e = e[t])
            if (e.nodeType === n) return e;
        return null
    }

    function nu(e, t) {
        var n = t.attr("style"),
            r = e.serialize(e.parse(n), t[0].nodeName) || null;
        t.attr("data-mce-style", r)
    }

    function ru(e, t) {
        var n, r, o = 0;
        if (e)
            for (n = e.nodeType, e = e.previousSibling; e; e = e.previousSibling) r = e.nodeType, (!t || 3 !== r || r !== n && e.nodeValue.length) && (o++, n = r);
        return o
    }
    Pa.fn = Pa.prototype = {
        constructor: Pa,
        selector: "",
        context: null,
        length: 0,
        init: function(e, t) {
            var n, r, o = this;
            if (!e) return o;
            if (e.nodeType) return o.context = o[0] = e, o.length = 1, o;
            if (t && t.nodeType) o.context = t;
            else {
                if (t) return ou(e).attr(t);
                o.context = t = document
            }
            if (Ra(e)) {
                if (!(n = "<" === (o.selector = e).charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [null, e, null] : ja.exec(e))) return ou(t).find(e);
                if (n[1])
                    for (r = Da(e, Qa(t)).firstChild; r;) Ua.call(o, r), r = r.nextSibling;
                else {
                    if (!(r = Qa(t).getElementById(n[2]))) return o;
                    if (r.id !== n[2]) return o.find(e);
                    o.length = 1, o[0] = r
                }
            } else this.add(e, !1);
            return o
        },
        toArray: function() { return St.toArray(this) },
        add: function(e, t) {
            var n, r;
            if (Ra(e)) return this.add(ou(e));
            if (!1 !== t)
                for (n = ou.unique(this.toArray().concat(ou.makeArray(e))), this.length = n.length, r = 0; r < n.length; r++) this[r] = n[r];
            else Ua.apply(this, ou.makeArray(e));
            return this
        },
        attr: function(t, n) {
            var e, r = this;
            if ("object" == typeof t) Ia(t, function(e, t) { r.attr(e, t) });
            else {
                if (!Ta(n)) {
                    if (r[0] && 1 === r[0].nodeType) {
                        if ((e = Ya[t]) && e.get) return e.get(r[0], t);
                        if (Wa[t]) return r.prop(t) ? t : void 0;
                        null === (n = r[0].getAttribute(t, 2)) && (n = void 0)
                    }
                    return n
                }
                this.each(function() {
                    var e;
                    1 === this.nodeType && ((e = Ya[t]) && e.set ? e.set(this, n) : null === n ? this.removeAttribute(t, 2) : this.setAttribute(t, n, 2))
                })
            }
            return r
        },
        removeAttr: function(e) { return this.attr(e, null) },
        prop: function(e, t) {
            var n = this;
            if ("object" == typeof(e = Ka[e] || e)) Ia(e, function(e, t) { n.prop(e, t) });
            else {
                if (!Ta(t)) return n[0] && n[0].nodeType && e in n[0] ? n[0][e] : t;
                this.each(function() { 1 === this.nodeType && (this[e] = t) })
            }
            return n
        },
        css: function(t, n) {
            function e(e) { return e.replace(/-(\D)/g, function(e, t) { return t.toUpperCase() }) }

            function r(e) { return e.replace(/[A-Z]/g, function(e) { return "-" + e }) }
            var o, i, a = this;
            if ("object" == typeof t) Ia(t, function(e, t) { a.css(e, t) });
            else if (Ta(n)) t = e(t), "number" != typeof n || $a[t] || (n = n.toString() + "px"), a.each(function() {
                var e = this.style;
                if ((i = Ga[t]) && i.set) i.set(this, n);
                else {
                    try { this.style[Xa[t] || t] = n } catch (e) {}
                    null !== n && "" !== n || (e.removeProperty ? e.removeProperty(r(t)) : e.removeAttribute(t))
                }
            });
            else { if (o = a[0], (i = Ga[t]) && i.get) return i.get(o); if (!o.ownerDocument.defaultView) return o.currentStyle ? o.currentStyle[e(t)] : ""; try { return o.ownerDocument.defaultView.getComputedStyle(o, null).getPropertyValue(r(t)) } catch (e) { return } }
            return a
        },
        remove: function() { for (var e, t = this.length; t--;) e = this[t], Ha.clean(e), e.parentNode && e.parentNode.removeChild(e); return this },
        empty: function() {
            for (var e, t = this.length; t--;)
                for (e = this[t]; e.firstChild;) e.removeChild(e.firstChild);
            return this
        },
        html: function(t) { var n; if (Ta(t)) { n = this.length; try { for (; n--;) this[n].innerHTML = t } catch (e) { ou(this[n]).empty().append(t) } return this } return this[0] ? this[0].innerHTML : "" },
        text: function(e) { var t; if (Ta(e)) { for (t = this.length; t--;) "innerText" in this[t] ? this[t].innerText = e : this[0].textContent = e; return this } return this[0] ? this[0].innerText || this[0].textContent : "" },
        append: function() {
            return qa(this, arguments, function(e) {
                (1 === this.nodeType || this.host && 1 === this.host.nodeType) && this.appendChild(e)
            })
        },
        prepend: function() {
            return qa(this, arguments, function(e) {
                (1 === this.nodeType || this.host && 1 === this.host.nodeType) && this.insertBefore(e, this.firstChild)
            }, !0)
        },
        before: function() { return this[0] && this[0].parentNode ? qa(this, arguments, function(e) { this.parentNode.insertBefore(e, this) }) : this },
        after: function() { return this[0] && this[0].parentNode ? qa(this, arguments, function(e) { this.parentNode.insertBefore(e, this.nextSibling) }, !0) : this },
        appendTo: function(e) { return ou(e).append(this), this },
        prependTo: function(e) { return ou(e).prepend(this), this },
        replaceWith: function(e) { return this.before(e).remove() },
        wrap: function(e) { return Ba(this, e) },
        wrapAll: function(e) { return Ba(this, e, !0) },
        wrapInner: function(e) { return this.each(function() { ou(this).contents().wrapAll(e) }), this },
        unwrap: function() { return this.parent().each(function() { ou(this).replaceWith(this.childNodes) }) },
        clone: function() { var e = []; return this.each(function() { e.push(this.cloneNode(!0)) }), ou(e) },
        addClass: function(e) { return this.toggleClass(e, !0) },
        removeClass: function(e) { return this.toggleClass(e, !1) },
        toggleClass: function(o, i) {
            var e = this;
            return "string" != typeof o || (-1 !== o.indexOf(" ") ? Ia(o.split(" "), function() { e.toggleClass(this, i) }) : e.each(function(e, t) {
                var n, r = Oa(t, o);
                r !== i && (n = t.className, r ? t.className = La((" " + n + " ").replace(" " + o + " ", " ")) : t.className += n ? " " + o : o)
            })), e
        },
        hasClass: function(e) { return Oa(this[0], e) },
        each: function(e) { return Ia(this, e) },
        on: function(e, t) { return this.each(function() { Ha.bind(this, e, t) }) },
        off: function(e, t) { return this.each(function() { Ha.unbind(this, e, t) }) },
        trigger: function(e) { return this.each(function() { "object" == typeof e ? Ha.fire(this, e.type, e) : Ha.fire(this, e) }) },
        show: function() { return this.css("display", "") },
        hide: function() { return this.css("display", "none") },
        slice: function() { return ou(za.apply(this, arguments)) },
        eq: function(e) { return -1 === e ? this.slice(e) : this.slice(e, +e + 1) },
        first: function() { return this.eq(0) },
        last: function() { return this.eq(-1) },
        find: function(e) { for (var t = [], n = 0, r = this.length; n < r; n++) ou.find(e, this[n], t); return ou(t) },
        filter: function(n) { return ou("function" == typeof n ? Ma(this.toArray(), function(e, t) { return n(t, e) }) : ou.filter(n, this.toArray())) },
        closest: function(n) {
            var r = [];
            return n instanceof ou && (n = n[0]), this.each(function(e, t) {
                for (; t;) {
                    if ("string" == typeof n && ou(t).is(n)) { r.push(t); break }
                    if (t === n) { r.push(t); break }
                    t = t.parentNode
                }
            }), ou(r)
        },
        offset: function(e) {
            var t, n, r, o, i = 0,
                a = 0;
            return e ? this.css(e) : ((t = this[0]) && (r = (n = t.ownerDocument).documentElement, t.getBoundingClientRect && (i = (o = t.getBoundingClientRect()).left + (r.scrollLeft || n.body.scrollLeft) - r.clientLeft, a = o.top + (r.scrollTop || n.body.scrollTop) - r.clientTop)), { left: i, top: a })
        },
        push: Ua,
        sort: Array.prototype.sort,
        splice: Array.prototype.splice
    }, St.extend(Pa, {
        extend: St.extend,
        makeArray: function(e) { return e && e === e.window || e.nodeType ? [e] : St.toArray(e) },
        inArray: function(e, t) {
            var n;
            if (t.indexOf) return t.indexOf(e);
            for (n = t.length; n--;)
                if (t[n] === e) return n;
            return -1
        },
        isArray: St.isArray,
        each: Ia,
        trim: La,
        grep: Ma,
        find: ba,
        expr: ba.selectors,
        unique: ba.uniqueSort,
        text: ba.getText,
        contains: ba.contains,
        filter: function(e, t, n) { var r = t.length; for (n && (e = ":not(" + e + ")"); r--;) 1 !== t[r].nodeType && t.splice(r, 1); return 1 === t.length ? ou.find.matchesSelector(t[0], e) ? [t[0]] : [] : ou.find.matches(e, t) }
    }), Ia({ parent: function(e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function(e) { return Za(e, "parentNode") }, next: function(e) { return tu(e, "nextSibling", 1) }, prev: function(e) { return tu(e, "previousSibling", 1) }, children: function(e) { return eu(e.firstChild, "nextSibling", 1) }, contents: function(e) { return St.toArray(("iframe" === e.nodeName ? e.contentDocument || e.contentWindow.document : e).childNodes) } }, function(r, o) {
        Pa.fn[r] = function(t) {
            var n = [];
            this.each(function() {
                var e = o.call(n, this, t, n);
                e && (ou.isArray(e) ? n.push.apply(n, e) : n.push(e))
            }), 1 < this.length && (Va[r] || (n = ou.unique(n)), 0 === r.indexOf("parents") && (n = n.reverse()));
            var e = ou(n);
            return t ? e.filter(t) : e
        }
    }), Ia({ parentsUntil: function(e, t) { return Za(e, "parentNode", t) }, nextUntil: function(e, t) { return eu(e, "nextSibling", 1, t).slice(1) }, prevUntil: function(e, t) { return eu(e, "previousSibling", 1, t).slice(1) } }, function(o, i) {
        Pa.fn[o] = function(t, e) {
            var n = [];
            this.each(function() {
                var e = i.call(n, this, t, n);
                e && (ou.isArray(e) ? n.push.apply(n, e) : n.push(e))
            }), 1 < this.length && (n = ou.unique(n), 0 !== o.indexOf("parents") && "prevUntil" !== o || (n = n.reverse()));
            var r = ou(n);
            return e ? r.filter(e) : r
        }
    }), Pa.fn.is = function(e) { return !!e && 0 < this.filter(e).length }, Pa.fn.init.prototype = Pa.fn, Pa.overrideDefaults = function(n) { var r, o = function(e, t) { return r = r || n(), 0 === arguments.length && (e = r.element), t = t || r.context, new o.fn.init(e, t) }; return ou.extend(o, this), o }, Pa.attrHooks = Ya, Pa.cssHooks = Ga;
    var ou = Pa,
        iu = St.each,
        au = St.grep,
        uu = Ct.ie,
        su = /^([a-z0-9],?)+$/i,
        cu = function(a, u) {
            function s(e) { return e && a && K(e) ? a.getElementById(e) : e }

            function c(e) { return j("string" == typeof e ? s(e) : e) }

            function r(e, t, n) { var r, o, i = c(e); return void 0 === (o = i.length ? (r = W[t]) && r.get ? r.get(i, t) : i.attr(t) : o) ? n || "" : o }

            function o(e) { var t = s(e); return t ? t.attributes : [] }

            function i(e, t, n) {
                "" === n && (n = null);
                var r, o = c(e),
                    i = o.attr(t);
                o.length && ((r = W[t]) && r.set ? r.set(o, n, t) : o.attr(t, n), i !== n && u.onSetAttrib && u.onSetAttrib({ attrElm: o, attrName: t, attrValue: n }))
            }

            function l() { return u.root_element || a.body }

            function f(e, t) {
                return function(e, t, n) {
                    var r, o = 0,
                        i = 0,
                        a = e.ownerDocument;
                    if (n = n || e, t) {
                        if (n === e && t.getBoundingClientRect && "static" === Cn(Et.fromDom(e), "position")) { var u = t.getBoundingClientRect(); return { x: o = u.left + (a.documentElement.scrollLeft || e.scrollLeft) - a.documentElement.clientLeft, y: i = u.top + (a.documentElement.scrollTop || e.scrollTop) - a.documentElement.clientTop } }
                        for (var s = t; s && s !== n && s.nodeType && !En(s, n);) {
                            var c = s;
                            o += c.offsetLeft || 0, i += c.offsetTop || 0, s = c.offsetParent
                        }
                        for (s = t.parentNode; s && s !== n && s.nodeType && !En(s, n);) o -= s.scrollLeft || 0, i -= s.scrollTop || 0, s = s.parentNode;
                        i += (r = Et.fromDom(t), tr.isFirefox() && "table" === Nt(r) ? Sn(On(r)).filter(function(e) { return "caption" === Nt(e) }).bind(function(o) {
                            return Sn(Lt(o)).map(function(e) {
                                var t = e.dom.offsetTop,
                                    n = o.dom.offsetTop,
                                    r = o.dom.offsetHeight;
                                return t <= n ? -r : 0
                            })
                        }).getOr(0) : 0)
                    }
                    return { x: o, y: i }
                }(a.body, s(e), t)
            }

            function d(e, t, n) { var r = c(e); return n ? r.css(t) : ("float" === (t = t.replace(/-(\D)/g, function(e, t) { return t.toUpperCase() })) && (t = Ct.browser.isIE() ? "styleFloat" : "cssFloat"), r[0] && r[0].style ? r[0].style[t] : void 0) }

            function m(e) {
                var t = d(e = s(e), "width"),
                    n = d(e, "height");
                return -1 === t.indexOf("px") && (t = 0), -1 === n.indexOf("px") && (n = 0), { w: parseInt(t, 10) || e.offsetWidth || e.clientWidth, h: parseInt(n, 10) || e.offsetHeight || e.clientHeight }
            }

            function g(e, t) {
                if (!e) return !1;
                if (!Array.isArray(e)) {
                    if ("*" === t) return 1 === e.nodeType;
                    if (su.test(t)) {
                        for (var n = t.toLowerCase().split(/,/), r = e.nodeName.toLowerCase(), o = n.length - 1; 0 <= o; o--)
                            if (n[o] === r) return !0;
                        return !1
                    }
                    if (e.nodeType && 1 !== e.nodeType) return !1
                }
                var i = Array.isArray(e) ? e : [e];
                return 0 < ba(t, i[0].ownerDocument || i[0], null, i).length
            }

            function p(e, t, n, r) {
                var o, i = [],
                    a = s(e);
                for (r = void 0 === r, n = n || ("BODY" !== l().nodeName ? l().parentNode : null), St.is(t, "string") && (t = "*" === (o = t) ? function(e) { return 1 === e.nodeType } : function(e) { return g(e, o) }); a && !(a === n || re(a.nodeType) || Wn(a) || Kn(a));) {
                    if (!t || "function" == typeof t && t(a)) {
                        if (!r) return [a];
                        i.push(a)
                    }
                    a = a.parentNode
                }
                return r ? i : null
            }

            function n(e, t, n) {
                var r = t;
                if (e)
                    for ("string" == typeof t && (r = function(e) { return g(e, t) }), e = e[n]; e; e = e[n])
                        if ("function" == typeof r && r(e)) return e;
                return null
            }

            function h(e, n, r) { var o, t = "string" == typeof e ? s(e) : e; return !!t && (St.isArray(t) && (t.length || 0 === t.length) ? (o = [], iu(t, function(e, t) { e && o.push(n.call(r, "string" == typeof e ? s(e) : e, t)) }), o) : n.call(r || this, t)) }

            function v(e, t) { c(e).each(function(e, n) { iu(t, function(e, t) { i(n, t, e) }) }) }

            function b(e, n) {
                var t = c(e);
                uu ? t.each(function(e, t) { if (!1 !== t.canHaveHTML) { for (; t.firstChild;) t.removeChild(t.firstChild); try { t.innerHTML = "<br>" + n, t.removeChild(t.firstChild) } catch (e) { ou("<div></div>").html("<br>" + n).contents().slice(1).appendTo(t) } return n } }) : t.html(n)
            }

            function y(e, n, r, o, i) { return h(e, function(e) { var t = "string" == typeof n ? a.createElement(n) : n; return v(t, r), o && ("string" != typeof o && o.nodeType ? t.appendChild(o) : "string" == typeof o && b(t, o)), i ? t : e.appendChild(t) }) }

            function C(e, t, n) { return y(a.createElement(e), e, t, n, !0) }

            function w(e, t) { var n = c(e); return (t ? n.each(function() { for (var e; e = this.firstChild;) 3 === e.nodeType && 0 === e.data.length ? this.removeChild(e) : this.parentNode.insertBefore(e, this) }) : n).remove(), 1 < n.length ? n.toArray() : n[0] }

            function x(e, t, n) { c(e).toggleClass(t, n).each(function() { "" === this.className && ou(this).attr("class", null) }) }

            function S(t, e, n) { return h(e, function(e) { return St.is(e, "array") && (t = t.cloneNode(!0)), n && iu(au(e.childNodes), function(e) { t.appendChild(e) }), e.parentNode.replaceChild(t, e) }) }

            function E(e) { if (Hn(e)) { var t = "a" === e.nodeName.toLowerCase() && !r(e, "href") && r(e, "id"); return r(e, "name") || r(e, "data-mce-bookmark") || t ? 1 : void 0 } }

            function N() { return a.createRange() }

            function k(e) { if (e && Hn(e)) { var t = e.getAttribute("data-mce-contenteditable"); return t && "inherit" !== t ? t : "inherit" !== e.contentEditable ? e.contentEditable : null } return null }
            void 0 === u && (u = {});
            var _, A, T, R, e, t, D = {},
                O = window,
                B = {},
                P = 0,
                L = zr.forElement(Et.fromDom(a), { contentCssCors: u.contentCssCors, referrerPolicy: u.referrerPolicy }),
                I = [],
                M = u.schema || go({}),
                F = ho({ url_converter: u.url_converter, url_converter_scope: u.url_converter_scope }, u.schema),
                U = u.ownEvents ? new bi : bi.Event,
                z = M.getBlockElements(),
                j = ou.overrideDefaults(function() { return { context: a, element: $.getRoot() } }),
                H = si.encodeAllRaw,
                V = function(e, t, n, r) { if (St.isArray(e)) { for (var o = e.length, i = []; o--;) i[o] = V(e[o], t, n, r); return i } return !u.collect || e !== a && e !== O || I.push([e, t, n, r]), U.bind(e, t, n, r || $) },
                q = function(e, t, n) {
                    if (St.isArray(e)) { for (var r = e.length, o = []; r--;) o[r] = q(e[r], t, n); return o }
                    if (0 < I.length && (e === a || e === O))
                        for (r = I.length; r--;) {
                            var i = I[r];
                            e !== i[0] || t && t !== i[1] || n && n !== i[2] || U.unbind(i[0], i[1], i[2])
                        }
                    return U.unbind(e, t, n)
                },
                $ = {
                    doc: a,
                    settings: u,
                    win: O,
                    files: B,
                    stdMode: !0,
                    boxModel: !0,
                    styleSheetLoader: L,
                    boundEvents: I,
                    styles: F,
                    schema: M,
                    events: U,
                    isBlock: function(e) { if ("string" == typeof e) return !!z[e]; if (e) { var t = e.nodeType; if (t) return !(1 !== t || !z[e.nodeName]) } return !1 },
                    $: j,
                    $$: c,
                    root: null,
                    clone: function(t, e) { if (!uu || 1 !== t.nodeType || e) return t.cloneNode(e); var n = a.createElement(t.nodeName); return iu(o(t), function(e) { i(n, e.nodeName, r(t, e.nodeName)) }), n },
                    getRoot: l,
                    getViewPort: function(e) { var t = en(e); return { x: t.x, y: t.y, w: t.width, h: t.height } },
                    getRect: function(e) {
                        var t = f(e = s(e)),
                            n = m(e);
                        return { x: t.x, y: t.y, w: n.w, h: n.h }
                    },
                    getSize: m,
                    getParent: function(e, t, n) { var r = p(e, t, n, !1); return r && 0 < r.length ? r[0] : null },
                    getParents: p,
                    get: s,
                    getNext: function(e, t) { return n(e, t, "nextSibling") },
                    getPrev: function(e, t) { return n(e, t, "previousSibling") },
                    select: function(e, t) { return ba(e, s(t) || u.root_element || a, []) },
                    is: g,
                    add: y,
                    create: C,
                    createHTML: function(e, t, n) { var r, o = ""; for (r in o += "<" + e, t) ue(t, r) && (o += " " + r + '="' + H(t[r]) + '"'); return void 0 !== n ? o + ">" + n + "</" + e + ">" : o + " />" },
                    createFragment: function(e) {
                        var t, n = a.createElement("div"),
                            r = a.createDocumentFragment();
                        for (r.appendChild(n), e && (n.innerHTML = e); t = n.firstChild;) r.appendChild(t);
                        return r.removeChild(n), r
                    },
                    remove: w,
                    setStyle: function(e, t, n) {
                        var r = K(t) ? c(e).css(t, n) : c(e).css(t);
                        u.update_styles && nu(F, r)
                    },
                    getStyle: d,
                    setStyles: function(e, t) {
                        var n = c(e).css(t);
                        u.update_styles && nu(F, n)
                    },
                    removeAllAttribs: function(e) { return h(e, function(e) { for (var t = e.attributes, n = t.length - 1; 0 <= n; n--) e.removeAttributeNode(t.item(n)) }) },
                    setAttrib: i,
                    setAttribs: v,
                    getAttrib: r,
                    getPos: f,
                    parseStyle: function(e) { return F.parse(e) },
                    serializeStyle: function(e, t) { return F.serialize(e, t) },
                    addStyle: function(e) {
                        var t, n;
                        if ($ !== cu.DOM && a === document) {
                            if (D[e]) return;
                            D[e] = !0
                        }(n = a.getElementById("mceDefaultStyles")) || ((n = a.createElement("style")).id = "mceDefaultStyles", n.type = "text/css", (t = a.getElementsByTagName("head")[0]).firstChild ? t.insertBefore(n, t.firstChild) : t.appendChild(n)), n.styleSheet ? n.styleSheet.cssText += e : n.appendChild(a.createTextNode(e))
                    },
                    loadCSS: function(e) { X((e = e || "").split(","), function(e) { B[e] = !0, L.load(e, oe) }) },
                    addClass: function(e, t) { c(e).addClass(t) },
                    removeClass: function(e, t) { x(e, t, !1) },
                    hasClass: function(e, t) { return c(e).hasClass(t) },
                    toggleClass: x,
                    show: function(e) { c(e).show() },
                    hide: function(e) { c(e).hide() },
                    isHidden: function(e) { return "none" === c(e).css("display") },
                    uniqueId: function(e) { return (e || "mce_") + P++ },
                    setHTML: b,
                    getOuterHTML: function(e) { var t = "string" == typeof e ? s(e) : e; return Hn(t) ? t.outerHTML : ou("<div></div>").append(ou(t).clone()).html() },
                    setOuterHTML: function(e, t) {
                        c(e).each(function() {
                            try { if ("outerHTML" in this) return void(this.outerHTML = t) } catch (e) {}
                            w(ou(this).html(t), !0)
                        })
                    },
                    decode: si.decode,
                    encode: H,
                    insertAfter: function(e, t) {
                        var r = s(t);
                        return h(e, function(e) {
                            var t = r.parentNode,
                                n = r.nextSibling;
                            return n ? t.insertBefore(e, n) : t.appendChild(e), e
                        })
                    },
                    replace: S,
                    rename: function(t, e) { var n; return t.nodeName !== e.toUpperCase() && (n = C(e), iu(o(t), function(e) { i(n, e.nodeName, r(t, e.nodeName)) }), S(n, t, !0)), n || t },
                    findCommonAncestor: function(e, t) {
                        for (var n, r = e; r;) {
                            for (n = t; n && r !== n;) n = n.parentNode;
                            if (r === n) break;
                            r = r.parentNode
                        }
                        return !r && e.ownerDocument ? e.ownerDocument.documentElement : r
                    },
                    toHex: function(e) { return F.toHex(St.trim(e)) },
                    run: h,
                    getAttribs: o,
                    isEmpty: function(e, t) {
                        var n, r, o = 0;
                        if (E(e)) return !1;
                        if (e = e.firstChild) {
                            var i = new jr(e, e.parentNode),
                                a = M ? M.getWhiteSpaceElements() : {};
                            t = t || (M ? M.getNonEmptyElements() : null);
                            do {
                                if (n = e.nodeType, Hn(e)) {
                                    var u = e.getAttribute("data-mce-bogus");
                                    if (u) { e = i.next("all" === u); continue }
                                    if (r = e.nodeName.toLowerCase(), t && t[r]) {
                                        if ("br" !== r) return !1;
                                        o++, e = i.next();
                                        continue
                                    }
                                    if (E(e)) return !1
                                }
                                if (8 === n) return !1;
                                if (3 === n && !no(e.nodeValue)) return !1;
                                if (3 === n && e.parentNode && a[e.parentNode.nodeName] && no(e.nodeValue)) return !1;
                                e = i.next()
                            } while (e)
                        }
                        return o <= 1
                    },
                    createRng: N,
                    nodeIndex: ru,
                    split: function(e, t, n) { var r, o, i, a = N(); if (e && t) return a.setStart(e.parentNode, ru(e)), a.setEnd(t.parentNode, ru(t)), r = a.extractContents(), (a = N()).setStart(t.parentNode, ru(t) + 1), a.setEnd(e.parentNode, ru(e) + 1), o = a.extractContents(), (i = e.parentNode).insertBefore(Qo($, r), e), n ? i.insertBefore(n, e) : i.insertBefore(t, e), i.insertBefore(Qo($, o), e), w(e), n || t },
                    bind: V,
                    unbind: q,
                    fire: function(e, t, n) { return U.fire(e, t, n) },
                    getContentEditable: k,
                    getContentEditableParent: function(e) { for (var t = l(), n = null; e && e !== t && null === (n = k(e)); e = e.parentNode); return n },
                    destroy: function() {
                        if (0 < I.length)
                            for (var e = I.length; e--;) {
                                var t = I[e];
                                U.unbind(t[0], t[1], t[2])
                            }
                        Q(B, function(e, t) { L.unload(t), delete B[t] }), ba.setDocument && ba.setDocument()
                    },
                    isChildOf: function(e, t) {
                        if (uu) {
                            for (; e;) {
                                if (t === e) return !0;
                                e = e.parentNode
                            }
                            return !1
                        }
                        return e === t || t.contains(e)
                    },
                    dumpRng: function(e) { return "startContainer: " + e.startContainer.nodeName + ", startOffset: " + e.startOffset + ", endContainer: " + e.endContainer.nodeName + ", endOffset: " + e.endOffset }
                },
                W = (_ = F, T = J($), e = { set: function(e, t, n) { A.url_converter && (t = A.url_converter.call(A.url_converter_scope || T(), t, n, e[0])), e.attr("data-mce-" + n, t).attr(n, t) }, get: function(e, t) { return e.attr("data-mce-" + t) || e.attr(t) } }, t = { style: { set: function(e, t) { null === t || "object" != typeof t ? (R && e.attr("data-mce-style", t), null !== t && "string" == typeof t ? (e.removeAttr("style"), e.css(_.parse(t))) : e.attr("style", t)) : e.css(t) }, get: function(e) { var t = e.attr("data-mce-style") || e.attr("style"); return _.serialize(_.parse(t), e[0].nodeName) } } }, (R = (A = u).keep_values) && (t.href = t.src = e), t);
            return $
        };
    cu.DOM = cu(document), cu.nodeIndex = ru;
    var lu = cu.DOM,
        fu = St.each,
        du = St.grep,
        mu = (gu.prototype._setReferrerPolicy = function(e) { this.settings.referrerPolicy = e }, gu.prototype.loadScript = function(e, t, n) {
            function r() { o.remove(i), a && (a.onerror = a.onload = a = null) }
            var o = lu,
                i = o.uniqueId(),
                a = document.createElement("script");
            a.id = i, a.type = "text/javascript", a.src = St._addCacheSuffix(e), this.settings.referrerPolicy && o.setAttrib(a, "referrerpolicy", this.settings.referrerPolicy), a.onload = function() { r(), t() }, a.onerror = function() { r(), y(n) ? n() : "undefined" != typeof console && console.log && console.log("Failed to load script: " + e) }, (document.getElementsByTagName("head")[0] || document.body).appendChild(a)
        }, gu.prototype.isDone = function(e) { return 2 === this.states[e] }, gu.prototype.markDone = function(e) { this.states[e] = 2 }, gu.prototype.add = function(e, t, n, r) {
            var o = this.states[e];
            this.queue.push(e), void 0 === o && (this.states[e] = 0), t && (this.scriptLoadedCallbacks[e] || (this.scriptLoadedCallbacks[e] = []), this.scriptLoadedCallbacks[e].push({ success: t, failure: r, scope: n || this }))
        }, gu.prototype.load = function(e, t, n, r) { return this.add(e, t, n, r) }, gu.prototype.remove = function(e) { delete this.states[e], delete this.scriptLoadedCallbacks[e] }, gu.prototype.loadQueue = function(e, t, n) { this.loadScripts(this.queue, e, t, n) }, gu.prototype.loadScripts = function(n, e, t, r) {
            function o(t, e) { fu(i.scriptLoadedCallbacks[e], function(e) { y(e[t]) && e[t].call(e.scope) }), i.scriptLoadedCallbacks[e] = void 0 }
            var i = this,
                a = [];
            i.queueLoadedCallbacks.push({ success: e, failure: r, scope: t || this });
            var u = function() {
                var e, t = du(n);
                n.length = 0, fu(t, function(e) { 2 !== i.states[e] ? 3 !== i.states[e] ? 1 !== i.states[e] && (i.states[e] = 1, i.loading++, i.loadScript(e, function() { i.states[e] = 2, i.loading--, o("success", e), u() }, function() { i.states[e] = 3, i.loading--, a.push(e), o("failure", e), u() })) : o("failure", e) : o("success", e) }), i.loading || (e = i.queueLoadedCallbacks.slice(0), i.queueLoadedCallbacks.length = 0, fu(e, function(e) { 0 === a.length ? y(e.success) && e.success.call(e.scope) : y(e.failure) && e.failure.call(e.scope, a) }))
            };
            u()
        }, gu.ScriptLoader = new gu, gu);

    function gu(e) { void 0 === e && (e = {}), this.states = {}, this.queue = [], this.scriptLoadedCallbacks = {}, this.queueLoadedCallbacks = [], this.loading = 0, this.settings = e }

    function pu(e) { var t = e; return { get: function() { return t }, set: function(e) { t = e } } }

    function hu() { return ae(vu, bu.get()) }
    var vu = {},
        bu = pu("en"),
        yu = {
            getData: function() { return Z(vu, function(e) { return ke({}, e) }) },
            setCode: function(e) { e && bu.set(e) },
            getCode: function() { return bu.get() },
            add: function(e, t) {
                var n = vu[e];
                n || (vu[e] = n = {}), Q(t, function(e, t) { n[t.toLowerCase()] = e })
            },
            translate: function(e) {
                function n(e) { return y(e) ? Object.prototype.toString.call(e) : u(e) ? "" : "" + e }

                function t(e) { var t = n(e); return ae(a, t.toLowerCase()).map(n).getOr(t) }

                function r(e) { return e.replace(/{context:\w+}$/, "") }
                var o, i, a = hu().getOr({}),
                    u = function(e) { return "" === e || null == e };
                if (u(e)) return "";
                if (h(o = e) && Ee(o, "raw")) return n(e.raw);
                if (S(i = e) && 1 < i.length) { var s = e.slice(1); return r(t(e[0]).replace(/\{([0-9]+)\}/g, function(e, t) { return Ee(s, t) ? n(s[t]) : e })) }
                return r(t(e))
            },
            isRtl: function() { return hu().bind(function(e) { return ae(e, "_dir") }).exists(function(e) { return "rtl" === e }) },
            hasCode: function(e) { return Ee(vu, e) }
        },
        Cu = function() {
            function u(t, n) { X(U(r, function(e) { return e.name === t && e.state === n }), function(e) { return e.callback() }) }

            function s(e) { var t; return (f[e] ? f[e].dependencies : t) || [] }

            function c(e, t) { return "object" == typeof t ? t : "string" == typeof e ? { prefix: "", resource: t, suffix: "" } : { prefix: e.prefix, resource: t, suffix: e.suffix } }

            function e(e, t, n) { void 0 === n && (n = "added"), Ee(f, e) && "added" === n || Ee(l, e) && "loaded" === n ? t() : r.push({ name: e, state: n, callback: t }) }
            var o = [],
                l = {},
                f = {},
                r = [],
                d = function(r, o, i, a, e) {
                    var t, n;
                    l[r] || (0 !== (t = "string" == typeof o ? o : o.prefix + o.resource + o.suffix).indexOf("/") && -1 === t.indexOf("://") && (t = Cu.baseURL + "/" + t), l[r] = t.substring(0, t.lastIndexOf("/")), n = function() {
                        var n, e, t;
                        u(r, "loaded"), n = o, e = i, t = a, X(s(r), function(e) {
                            var t = c(n, e);
                            d(t.resource, t, void 0, void 0)
                        }), e && (t ? e.call(t) : e.call(mu))
                    }, f[r] ? n() : mu.ScriptLoader.add(t, n, a, e))
                };
            return {
                items: o,
                urls: l,
                lookup: f,
                _listeners: r,
                get: function(e) { if (f[e]) return f[e].instance },
                dependencies: s,
                requireLangPack: function(t, n) {!1 !== Cu.languageLoad && e(t, function() { var e = yu.getCode();!e || n && -1 === ("," + (n || "") + ",").indexOf("," + e + ",") || mu.ScriptLoader.add(l[t] + "/langs/" + e + ".js") }, "loaded") },
                add: function(e, t, n) { var r = t; return o.push(r), f[e] = { instance: r, dependencies: n }, u(e, "added"), r },
                remove: function(e) { delete l[e], delete f[e] },
                createUrl: c,
                addComponents: function(e, t) {
                    var n = l[e];
                    X(t, function(e) { mu.ScriptLoader.add(n + "/" + e) })
                },
                load: d,
                waitFor: e
            }
        };

    function wu() {
        var e, t, n = (e = oe, t = pu(he.none()), { clear: function() { r(), t.set(he.none()) }, isSet: function() { return t.get().isSome() }, get: function() { return t.get() }, set: function(e) { r(), t.set(he.some(e)) } });

        function r() { return t.get().each(e) }
        return ke(ke({}, n), { on: function(e) { return n.get().each(e) } })
    }

    function xu(n, r) {
        var o = null;
        return {
            cancel: function() { l(o) || (clearTimeout(o), o = null) },
            throttle: function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                l(o) && (o = setTimeout(function() { o = null, n.apply(null, e) }, r))
            }
        }
    }

    function Su(n, r) {
        function o() { l(i) || (clearTimeout(i), i = null) }
        var i = null;
        return {
            cancel: o,
            throttle: function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                o(), i = setTimeout(function() { i = null, n.apply(null, e) }, r)
            }
        }
    }

    function Eu(e, t) { var n = hn(e, t); return void 0 === n || "" === n ? [] : n.split(" ") }

    function Nu(e) { return void 0 !== e.dom.classList }

    function ku(e, t) {
        var n, r, o;
        Nu(e) ? e.dom.classList.add(t) : (r = t, o = Eu(n = e, "class").concat([r]), gn(n, "class", o.join(" ")))
    }

    function _u(e, t) { return Nu(e) && e.dom.classList.contains(t) }

    function Au(e, t) { return ze(n = void 0 === e ? document : e.dom) ? [] : R(n.querySelectorAll(t), Et.fromDom); var n }

    function Tu(r, e) {
        function t(e, t) { return (n = e.dom) && n.hasAttribute && n.hasAttribute(t) ? he.some(hn(e, t)) : he.none(); var n }
        var n = r.selection.getRng(),
            o = Et.fromDom(n.startContainer),
            i = Et.fromDom(r.getBody()),
            a = e.fold(function() { return "." + es() }, function(e) { return "[" + ts() + '="' + e + '"]' });
        return Cr(It(o, n.startOffset).getOr(o), a, function(e) { return je(e, i) }).bind(function(e) { return t(e, "" + ns()).bind(function(n) { return t(e, "" + ts()).map(function(e) { var t = rs(r, n); return { uid: n, name: e, elements: t } }) }) })
    }

    function Ru(r) {
        function o() { return { listeners: [], previous: wu() } }

        function c(e, t) { i(e, function(e) { return t(e), e }) }

        function i(e, t) {
            var n = a.get(),
                r = t(ae(n, e).getOrThunk(o));
            n[e] = r, a.set(n)
        }
        var a = pu({}),
            e = Su(function() {
                var e, t, n = a.get();
                X((e = we(n), (t = ve.call(e, 0)).sort(void 0), t), function(e) {
                    i(e, function(u) {
                        var s = u.previous.get();
                        return Tu(r, he.some(e)).fold(function() {
                            var t;
                            s.isSome() && (c(t = e, function(e) { X(e.listeners, function(e) { return e(!1, t) }) }), u.previous.clear())
                        }, function(e) {
                            var t, n, r, o = e.uid,
                                i = e.name,
                                a = e.elements;
                            ln(s, o) || (n = o, r = a, c(t = i, function(e) { X(e.listeners, function(e) { return e(!0, t, { uid: n, nodes: R(r, function(e) { return e.dom }) }) }) }), u.previous.set(o))
                        }), { previous: u.previous, listeners: u.listeners }
                    })
                })
            }, 30);
        return r.on("remove", function() { e.cancel() }), r.on("NodeChange", function() { e.throttle() }), { addListener: function(e, t) { i(e, function(e) { return { previous: e.previous, listeners: e.listeners.concat([t]) } }) } }
    }

    function Du(e) { var t = (new Date).getTime(); return e + "_" + Math.floor(1e9 * Math.random()) + ++os + String(t) }

    function Ou(e, t) {
        var n, r, o = At(e).dom,
            i = Et.fromDom(o.createDocumentFragment());
        Wt(i, (n = t, (r = (o || document).createElement("div")).innerHTML = n, On(Et.fromDom(r)))), Kt(e), In(e, i)
    }

    function Bu(e, t) { return Et.fromDom(e.dom.cloneNode(t)) }

    function Pu(e) { return Bu(e, !1) }

    function Lu(e) { return Bu(e, !0) }

    function Iu(e, t, n) {
        function r(e) {
            for (var t;
                (t = o[e]()) && !qn(t) && !n(t););
            return he.from(t).filter(qn)
        }
        void 0 === n && (n = T);
        var o = new jr(e, t);
        return { current: function() { return he.from(o.current()).filter(qn) }, next: function() { return r("next") }, prev: function() { return r("prev") }, prev2: function() { return r("prev2") } }
    }

    function Mu(t, e) {
        var i = e || function(e) { return t.isBlock(e) || Xn(e) || Jn(e) },
            a = function(e, t, n, r) { if (qn(e)) { var o = r(e, t, e.data); if (-1 !== o) return he.some({ container: e, offset: o }) } return n().bind(function(e) { return a(e.container, e.offset, n, r) }) };
        return { backwards: function(e, t, n, r) { var o = Iu(e, r, i); return a(e, t, function() { return o.prev().map(function(e) { return { container: e, offset: e.length } }) }, n).getOrNull() }, forwards: function(e, t, n, r) { var o = Iu(e, r, i); return a(e, t, function() { return o.next().map(function(e) { return { container: e, offset: 0 } }) }, n).getOrNull() } }
    }

    function Fu(e) { return e ? { left: is(e.left), top: is(e.top), bottom: is(e.bottom), right: is(e.right), width: is(e.width), height: is(e.height) } : { left: 0, top: 0, bottom: 0, right: 0, width: 0, height: 0 } }

    function Uu(e, t) { return e = Fu(e), t || (e.left = e.left + e.width), e.right = e.left, e.width = 0, e }

    function zu(e, t, n) { return 0 <= e && e <= Math.min(t.height, n.height) / 2 }

    function ju(e, t) { var n = Math.min(t.height / 2, e.height / 2); return e.bottom - n < t.top || !(e.top > t.bottom) && zu(t.top - e.bottom, e, t) }

    function Hu(e, t) { return e.top > t.bottom || !(e.bottom < t.top) && zu(t.bottom - e.top, e, t) }

    function Vu(e, t, n) { return t >= e.left && t <= e.right && n >= e.top && n <= e.bottom }

    function qu(e) {
        var t = e.startContainer,
            n = e.startOffset;
        return t.hasChildNodes() && e.endOffset === n + 1 ? t.childNodes[n] : null
    }

    function $u(e, t) { if (Hn(e) && e.hasChildNodes()) { var n = e.childNodes; return n[r = n.length - 1, Math.min(Math.max(t, 0), r)] } return e; var r }

    function Wu(e) { return "string" == typeof e && 768 <= e.charCodeAt(0) && as.test(e) }

    function Ku(e) { return "createRange" in e ? e.createRange() : cu.DOM.createRng() }

    function Xu(e) { return e && /[\r\n\t ]/.test(e) }

    function Yu(e) { return e.setStart && e.setEnd }

    function Gu(e) {
        var t = e.startContainer,
            n = e.startOffset;
        if (Xu(e.toString()) && ds(t.parentNode) && qn(t)) { var r = t.data; return Xu(r[n - 1]) || Xu(r[n + 1]) ? 1 : void 0 }
    }

    function Ju(e) { return 0 === e.left && 0 === e.right && 0 === e.top && 0 === e.bottom }

    function Qu(e, t) { var n = Uu(e, t); return n.width = 1, n.right = n.left + 1, n }
    Cu.languageLoad = !0, Cu.baseURL = "", Cu.PluginManager = Cu(), Cu.ThemeManager = Cu();
    var Zu = function(e, t) { var n = []; return X(On(e), function(e) { n = (n = t(e) ? n.concat([e]) : n).concat(Zu(e, t)) }), n },
        es = J("mce-annotation"),
        ts = J("data-mce-annotation"),
        ns = J("data-mce-annotation-uid"),
        rs = function(e, t) { return Au(Et.fromDom(e.getBody()), "[" + ns() + '="' + t + '"]') },
        os = 0,
        is = Math.round,
        as = new RegExp("[\u0300-\u036f\u0483-\u0487\u0488-\u0489\u0591-\u05bd\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05c7\u0610-\u061a\u064b-\u065f\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7-\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08e3-\u0902\u093a\u093c\u0941-\u0948\u094d\u0951-\u0957\u0962-\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2-\u09e3\u0a01-\u0a02\u0a3c\u0a41-\u0a42\u0a47-\u0a48\u0a4b-\u0a4d\u0a51\u0a70-\u0a71\u0a75\u0a81-\u0a82\u0abc\u0ac1-\u0ac5\u0ac7-\u0ac8\u0acd\u0ae2-\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62-\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c00\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55-\u0c56\u0c62-\u0c63\u0c81\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc-\u0ccd\u0cd5-\u0cd6\u0ce2-\u0ce3\u0d01\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62-\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb-\u0ebc\u0ec8-\u0ecd\u0f18-\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86-\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039-\u103a\u103d-\u103e\u1058-\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085-\u1086\u108d\u109d\u135d-\u135f\u1712-\u1714\u1732-\u1734\u1752-\u1753\u1772-\u1773\u17b4-\u17b5\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927-\u1928\u1932\u1939-\u193b\u1a17-\u1a18\u1a1b\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1ab0-\u1abd\u1abe\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80-\u1b81\u1ba2-\u1ba5\u1ba8-\u1ba9\u1bab-\u1bad\u1be6\u1be8-\u1be9\u1bed\u1bef-\u1bf1\u1c2c-\u1c33\u1c36-\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1cf4\u1cf8-\u1cf9\u1dc0-\u1df5\u1dfc-\u1dff\u200c-\u200d\u20d0-\u20dc\u20dd-\u20e0\u20e1\u20e2-\u20e4\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302d\u302e-\u302f\u3099-\u309a\ua66f\ua670-\ua672\ua674-\ua67d\ua69e-\ua69f\ua6f0-\ua6f1\ua802\ua806\ua80b\ua825-\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\ua9e5\uaa29-\uaa2e\uaa31-\uaa32\uaa35-\uaa36\uaa43\uaa4c\uaa7c\uaab0\uaab2-\uaab4\uaab7-\uaab8\uaabe-\uaabf\uaac1\uaaec-\uaaed\uaaf6\uabe5\uabe8\uabed\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\uff9e-\uff9f]"),
        us = Hn,
        ss = eo,
        cs = on("display", "block table"),
        ls = on("float", "left right"),
        fs = function() {
            for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
            return function(e) {
                for (var t = 0; t < n.length; t++)
                    if (!n[t](e)) return !1;
                return !0
            }
        }(us, ss, s(ls)),
        ds = s(on("white-space", "pre pre-line pre-wrap")),
        ms = qn,
        gs = Xn,
        ps = cu.nodeIndex,
        hs = function(e, t) { if (!(t < 0 && Hn(e) && e.hasChildNodes())) return $u(e, t) },
        vs = function(e) {
            var t = e.getClientRects(),
                n = 0 < t.length ? Fu(t[0]) : Fu(e.getBoundingClientRect());
            return !Yu(e) && gs(e) && Ju(n) ? function(e) {
                var t = e.ownerDocument,
                    n = Ku(t),
                    r = t.createTextNode(Do),
                    o = e.parentNode;
                o.insertBefore(r, e), n.setStart(r, 0), n.setEnd(r, 1);
                var i = Fu(n.getBoundingClientRect());
                return o.removeChild(r), i
            }(e) : Ju(n) && Yu(e) ? function(e) {
                var t = e.startContainer,
                    n = e.endContainer,
                    r = e.startOffset,
                    o = e.endOffset;
                if (t === n && qn(n) && 0 === r && 1 === o) { var i = e.cloneRange(); return i.setEndAfter(n), vs(i) }
                return null
            }(e) : n
        },
        bs = function(t, n, e) {
            function r() {
                return e = e || function(e) {
                    function r(e) {
                        var t;
                        0 !== e.height && (0 < o.length && (t = o[o.length - 1], e.left === t.left && e.top === t.top && e.bottom === t.bottom && e.right === t.right) || o.push(e))
                    }

                    function t(e, t) {
                        var n = Ku(e.ownerDocument);
                        if (t < e.data.length) { if (Wu(e.data[t])) return o; if (Wu(e.data[t - 1]) && (n.setStart(e, t), n.setEnd(e, t + 1), !Gu(n))) return r(Qu(vs(n), !1)), o }
                        0 < t && (n.setStart(e, t - 1), n.setEnd(e, t), Gu(n) || r(Qu(vs(n), !1))), t < e.data.length && (n.setStart(e, t), n.setEnd(e, t + 1), Gu(n) || r(Qu(vs(n), !0)))
                    }
                    var o = [],
                        n = e.container(),
                        i = e.offset();
                    if (ms(n)) return t(n, i), o;
                    if (us(n))
                        if (e.isAtEnd()) {
                            var a = hs(n, i);
                            ms(a) && t(a, a.data.length), fs(a) && !gs(a) && r(Qu(vs(a), !1))
                        } else {
                            if (a = hs(n, i), ms(a) && t(a, 0), fs(a) && e.isAtEnd()) return r(Qu(vs(a), !1)), o;
                            var u = hs(e.container(), e.offset() - 1);
                            fs(u) && !gs(u) && (!cs(u) && !cs(a) && fs(a) || r(Qu(vs(u), !1))), fs(a) && r(Qu(vs(a), !0))
                        }
                    return o
                }(bs(t, n))
            }
            return { container: J(t), offset: J(n), toRange: function() { var e = Ku(t.ownerDocument); return e.setStart(t, n), e.setEnd(t, n), e }, getClientRects: r, isVisible: function() { return 0 < r().length }, isAtStart: function() { return ms(t), 0 === n }, isAtEnd: function() { return ms(t) ? n >= t.data.length : n >= t.childNodes.length }, isEqual: function(e) { return e && t === e.container() && n === e.offset() }, getNode: function(e) { return hs(t, e ? n - 1 : n) } }
        };

    function ys(e, t) { qn(t) && 0 === t.data.length && e.remove(t) }

    function Cs(e, t, n) {
        var r, o, i, a, u, s, c;
        Kn(n) ? (i = e, a = t, s = he.from((u = n).firstChild), c = he.from(u.lastChild), a.insertNode(u), s.each(function(e) { return ys(i, e.previousSibling) }), c.each(function(e) { return ys(i, e.nextSibling) })) : (r = e, t.insertNode(o = n), ys(r, o.previousSibling), ys(r, o.nextSibling))
    }

    function ws(t) { return function(e) { return t === e } }

    function xs(e) { var t, r, n, o; return (yc(e) ? "text()" : e.nodeName.toLowerCase()) + "[" + (r = Sc(xc(t = e)), n = me(r, ws(t), t), o = de(r = r.slice(0, n + 1), function(e, t, n) { return yc(t) && yc(r[n - 1]) && e++, e }, 0), me(r = le(r, rn([t.nodeName])), ws(t), t) - o) + "]" }

    function Ss(e, t) {
        var n, r, o, i = [],
            a = t.container(),
            u = t.offset();
        return yc(a) ? n = function(e, t) {
            for (;
                (e = e.previousSibling) && yc(e);) t += e.data.length;
            return t
        }(a, u) : (u >= (r = a.childNodes).length ? (n = "after", u = r.length - 1) : n = "before", a = r[u]), i.push(xs(a)), o = le(function(e, t) { var n = []; for (t = t.parentNode; t !== e; t = t.parentNode) n.push(t); return n }(e, a), s(un)), (i = i.concat(ce(o, xs))).reverse().join("/") + "," + n
    }

    function Es(e, t) {
        if (!t) return null;
        var n = t.split(","),
            r = n[0].split("/"),
            o = 1 < n.length ? n[1] : "before",
            i = de(r, function(e, t) { var n, r, o, i, a = /([\w\-\(\)]+)\[([0-9]+)\]/.exec(t); return a ? ("text()" === a[1] && (a[1] = "#text"), n = e, r = a[1], o = parseInt(a[2], 10), i = le(i = Sc(n), function(e, t) { return !yc(e) || !yc(i[t - 1]) }), (i = le(i, rn([r])))[o]) : null }, e);
        return i ? yc(i) ? function(e, t) {
            for (var n, r = e, o = 0; yc(r);) {
                if (n = r.data.length, o <= t && t <= o + n) { e = r, t -= o; break }
                if (!yc(r.nextSibling)) { e = r, t = n; break }
                o += n, r = r.nextSibling
            }
            return yc(e) && t > e.data.length && (t = e.data.length), bs(e, t)
        }(i, parseInt(o, 10)) : (o = "after" === o ? wc(i) + 1 : wc(i), bs(i.parentNode, o)) : null
    }

    function Ns(e, t, n, r, o) {
        var i, a = r[o ? "startContainer" : "endContainer"],
            u = r[o ? "startOffset" : "endOffset"],
            s = [],
            c = 0,
            l = e.getRoot();
        for (qn(a) ? s.push(n ? function(e, t, n) { for (var r = e(t.data.slice(0, n)).length, o = t.previousSibling; o && qn(o); o = o.previousSibling) r += e(o.data).length; return r }(t, a, u) : u) : (u >= (i = a.childNodes).length && i.length && (c = 1, u = Math.max(0, i.length - 1)), s.push(e.nodeIndex(i[u], n) + c)); a && a !== l; a = a.parentNode) s.push(e.nodeIndex(a, n));
        return s
    }

    function ks(e, t, n) { var r = 0; return St.each(e.select(t), function(e) { if ("all" !== e.getAttribute("data-mce-bogus")) return e !== n && void r++ }), r }

    function _s(e, t) {
        var n, r = t ? "start" : "end",
            o = e[r + "Container"],
            i = e[r + "Offset"];
        Hn(o) && "TR" === o.nodeName && (o = (n = o.childNodes)[Math.min(t ? i : i - 1, n.length - 1)]) && (i = t ? 0 : o.childNodes.length, e["set" + (t ? "Start" : "End")](o, i))
    }

    function As(e) { return _s(e, !0), _s(e, !1), e }

    function Ts(e, t) { var n; return Hn(e) && (e = $u(e, t), Ec(e)) ? e : Xr(e) ? (n = (e = qn(e) && Wr(e) ? e.parentNode : e).previousSibling, Ec(n) ? n : (n = e.nextSibling, Ec(n) ? n : void 0)) : void 0 }

    function Rs(e, t, n) {
        var r = n.getNode(),
            o = r ? r.nodeName : null,
            i = n.getRng();
        if (Ec(r) || "IMG" === o) return { name: o, index: ks(n.dom, o, r) };
        var a, u, s, c, l, f, d, m = Ts((a = i).startContainer, a.startOffset) || Ts(a.endContainer, a.endOffset);
        return m ? { name: o = m.tagName, index: ks(n.dom, o, m) } : (f = (s = n).dom, (d = {}).start = Ns(f, u = e, c = t, l = i, !0), s.isCollapsed() || (d.end = Ns(f, u, c, l, !1)), Zr(l) && (d.isFakeCaret = !0), d)
    }

    function Ds(e, t, n) { var r = { "data-mce-type": "bookmark", id: t, style: "overflow:hidden;line-height:0px" }; return n ? e.create("span", r, "&#xFEFF;") : e.create("span", r) }

    function Os(e, t) {
        var n = e.dom,
            r = e.getRng(),
            o = n.uniqueId(),
            i = e.isCollapsed(),
            a = e.getNode(),
            u = a.nodeName;
        if ("IMG" === u) return { name: u, index: ks(n, u, a) };
        var s = As(r.cloneRange());
        return i || (s.collapse(!1), Cs(n, s, Ds(n, o + "_end", t))), (r = As(r)).collapse(!0), Cs(n, r, Ds(n, o + "_start", t)), e.moveToBookmark({ id: o, keep: !0 }), { id: o }
    }

    function Bs(e, t, n) { var r = e.getParam(t, n); return -1 === r.indexOf("=") ? r : ae(e.getParam(t, "", "hash"), e.id).getOr(n) }

    function Ps(e) { return e.getParam("content_security_policy", "") }

    function Ls(e) { if (e.getParam("force_p_newlines", !1)) return "p"; var t = e.getParam("forced_root_block", "p"); return !1 === t ? "" : !0 === t ? "p" : t }

    function Is(e) { return e.getParam("forced_root_block_attrs", {}) }

    function Ms(e) { return e.getParam("automatic_uploads", !0, "boolean") }

    function Fs(e) { return e.getParam("icons", "", "string") }

    function Us(e) { return e.getParam("referrer_policy", "", "string") }

    function zs(e) { return e.getParam("language", "en", "string") }

    function js(e) { return e.getParam("indent_use_margin", !1) }

    function Hs(e) { var t = e.getParam("font_css", []); return S(t) ? t : R(t.split(","), Ge) }

    function Vs(e) { var t = e.getParam("object_resizing"); return !1 !== t && !Ct.iOS && (K(t) ? t : "table,img,figure.image,div,video,iframe") }

    function qs(e) { return e.getParam("event_root") }

    function $s(e) { return e.getParam("theme") }

    function Ws(e) { return !1 !== e.getParam("inline_boundaries") }

    function Ks(e) { return e.getParam("plugins", "", "string") }

    function Xs(e) {
        var t = e.parentNode;
        t && t.removeChild(e)
    }

    function Ys(e) { var t = Po(e); return { count: e.length - t.length, text: t } }

    function Gs(e) { for (var t; - 1 !== (t = e.data.lastIndexOf(Oo));) e.deleteData(t, 1) }

    function Js(e, t) { return Tc(e), t }

    function Qs(e, t) {
        var n, r = t.container(),
            o = (-1 === (n = _(Ce(r.childNodes), e)) ? he.none() : he.some(n)).map(function(e) { return e < t.offset() ? bs(r, t.offset() - 1) : t }).getOr(t);
        return Tc(e), o
    }

    function Zs(e, t) { return bs.isTextPosition(t) ? (r = t, Ac(n = e) && r.container() === n ? (a = Ys((o = n).data.substr(0, (i = r).offset())), u = Ys(o.data.substr(i.offset())), 0 < (a.text + u.text).length ? (Gs(o), bs(o, i.offset() - a.count)) : i) : Js(n, r)) : (s = e, ((c = t).container() === s.parentNode ? Qs : Js)(s, c)); var n, r, o, i, a, u, s, c }

    function ec(e, t, n) {
        var r, o, i, a = Uu(t.getBoundingClientRect(), n),
            u = "BODY" === e.tagName ? (r = e.ownerDocument.documentElement, o = e.scrollLeft || r.scrollLeft, e.scrollTop || r.scrollTop) : (i = e.getBoundingClientRect(), o = e.scrollLeft - i.left, e.scrollTop - i.top);
        a.left += o, a.right += o, a.top += u, a.bottom += u, a.width = 1;
        var s = t.offsetWidth - t.clientWidth;
        return 0 < s && (n && (s *= -1), a.left += s, a.right += s), a
    }

    function tc(e, i, a, u) {
        function s() {
            ! function() {
                for (var e = Au(Et.fromDom(i), "*[contentEditable=false],video,audio,embed,object"), t = 0; t < e.length; t++) {
                    var n, r = e[t].dom,
                        o = r.previousSibling;
                    Fo(o) && (1 === (n = o.data).length ? o.parentNode.removeChild(o) : o.deleteData(n.length - 1, 1)), o = r.nextSibling, Mo(o) && (1 === (n = o.data).length ? o.parentNode.removeChild(o) : o.deleteData(0, 1))
                }
            }(), l && (Tc(l), l = null), f.on(function(e) { ou(e.caret).remove(), f.clear() }), c && (Ur.clearInterval(c), c = void 0)
        }
        var c, l, f = wu(),
            t = Ls(e),
            d = 0 < t.length ? t : "p";
        return {
            show: function(e, t) {
                var n;
                if (s(), Bc(t)) return null;
                if (!a(t)) return l = function(e, t) {
                    var n = e.ownerDocument.createTextNode(Oo),
                        r = e.parentNode;
                    if (t) {
                        if (o = e.previousSibling, Io(o)) { if (Xr(o)) return o; if (Fo(o)) return o.splitText(o.data.length - 1) }
                        r.insertBefore(n, e)
                    } else {
                        var o = e.nextSibling;
                        if (Io(o)) { if (Xr(o)) return o; if (Mo(o)) return o.splitText(1), o }
                        e.nextSibling ? r.insertBefore(n, e.nextSibling) : r.appendChild(n)
                    }
                    return n
                }(t, e), n = t.ownerDocument.createRange(), Pc(l.nextSibling) ? (n.setStart(l, 0), n.setEnd(l, 0)) : (n.setStart(l, 1), n.setEnd(l, 1)), n;
                l = function(e, t, n) {
                    var r, o = t.ownerDocument.createElement(e);
                    o.setAttribute("data-mce-caret", n ? "before" : "after"), o.setAttribute("data-mce-bogus", "all"), o.appendChild(((r = document.createElement("br")).setAttribute("data-mce-bogus", "1"), r));
                    var i = t.parentNode;
                    return n ? i.insertBefore(o, t) : t.nextSibling ? i.insertBefore(o, t.nextSibling) : i.appendChild(o), o
                }(d, t, e);
                var r = ec(i, t, e);
                ou(l).css("top", r.top);
                var o = ou('<div class="mce-visual-caret" data-mce-bogus="all"></div>').css(ke({}, r)).appendTo(i)[0];
                return f.set({ caret: o, element: t, before: e }), e && ou(o).addClass("mce-visual-caret-before"), c = Ur.setInterval(function() { u() ? ou("div.mce-visual-caret", i).toggleClass("mce-visual-caret-hidden") : ou("div.mce-visual-caret", i).addClass("mce-visual-caret-hidden") }, 500), (n = t.ownerDocument.createRange()).setStart(l, 0), n.setEnd(l, 0), n
            },
            hide: s,
            getCss: function() { return ".mce-visual-caret {position: absolute;background-color: black;background-color: currentcolor;}.mce-visual-caret-hidden {display: none;}*[data-mce-caret] {position: absolute;left: -1000px;right: auto;top: 0;margin: 0;padding: 0;}" },
            reposition: function() {
                f.on(function(e) {
                    var t = ec(i, e.element, e.before);
                    ou(e.caret).css(ke({}, t))
                })
            },
            destroy: function() { return Ur.clearInterval(c) }
        }
    }

    function nc() { return Rc.isIE() || Rc.isEdge() || Rc.isFirefox() }

    function rc(e) { return Pc(e) || sn(e) && nc() }

    function oc(e, t) {
        for (var n; n = e(t);)
            if (!Uc(n)) return n;
        return null
    }

    function ic(e, t, n, r, o) {
        var i = new jr(e, r),
            a = Lc(e) || Uc(e);
        if (t < 0) {
            if (a && n(e = oc(i.prev.bind(i), !0))) return e;
            for (; e = oc(i.prev.bind(i), o);)
                if (n(e)) return e
        }
        if (0 < t) {
            if (a && n(e = oc(i.next.bind(i), !0))) return e;
            for (; e = oc(i.next.bind(i), o);)
                if (n(e)) return e
        }
        return null
    }

    function ac(e, t) {
        for (; e && e !== t;) {
            if (Mc(e)) return e;
            e = e.parentNode
        }
        return null
    }

    function uc(e, t, n) { return ac(e.container(), n) === ac(t.container(), n) }

    function sc(e, t) {
        if (!t) return null;
        var n = t.container(),
            r = t.offset();
        return zc(n) ? n.childNodes[r + e] : null
    }

    function cc(e, t) { var n = t.ownerDocument.createRange(); return e ? (n.setStartBefore(t), n.setEndBefore(t)) : (n.setStartAfter(t), n.setEndAfter(t)), n }

    function lc(e, t, n) {
        for (var r, o, i = e ? "previousSibling" : "nextSibling"; n && n !== t;) {
            var a = n[i];
            if (Fc(a) && (a = a[i]), Lc(a) || Ic(a)) { if (o = n, ac(a, r = t) === ac(o, r)) return a; break }
            if (jc(a)) break;
            n = n.parentNode
        }
        return null
    }

    function fc(e, t, n) {
        var r, o = A(lc, !0, t),
            i = A(lc, !1, t),
            a = n.startContainer,
            u = n.startOffset;
        if (Wr(a)) { var s = (a = zc(a) ? a : a.parentNode).getAttribute("data-mce-caret"); if ("before" === s && rc(r = a.nextSibling)) return Hc(r); if ("after" === s && rc(r = a.previousSibling)) return Vc(r) }
        if (!n.collapsed) return n;
        if (qn(a)) { if (Fc(a)) { if (1 === e) { if (r = i(a)) return Hc(r); if (r = o(a)) return Vc(r) } if (-1 === e) { if (r = o(a)) return Vc(r); if (r = i(a)) return Hc(r) } return n } if (Fo(a) && u >= a.data.length - 1) return 1 === e && (r = i(a)) ? Hc(r) : n; if (Mo(a) && u <= 1) return -1 === e && (r = o(a)) ? Vc(r) : n; if (u === a.data.length) return (r = i(a)) ? Hc(r) : n; if (0 === u) return (r = o(a)) ? Vc(r) : n }
        return n
    }

    function dc(e, t) { return he.from(sc(e ? 0 : -1, t)).filter(Lc) }

    function mc(e, t, n) { var r = fc(e, t, n); return -1 === e ? bs.fromRangeStart(r) : bs.fromRangeEnd(r) }

    function gc(e) { return he.from(e.getNode()).map(Et.fromDom) }

    function pc(e, t) {
        for (; t = e(t);)
            if (t.isVisible()) return t;
        return t
    }

    function hc(e, t) { var n = uc(e, t); return !(n || !Xn(e.getNode())) || n }
    bs.fromRangeStart = function(e) { return bs(e.startContainer, e.startOffset) }, bs.fromRangeEnd = function(e) { return bs(e.endContainer, e.endOffset) }, bs.after = function(e) { return bs(e.parentNode, ps(e) + 1) }, bs.before = function(e) { return bs(e.parentNode, ps(e)) }, bs.isAbove = function(e, t) { return fn(W(t.getClientRects()), Y(e.getClientRects()), ju).getOr(!1) }, bs.isBelow = function(e, t) { return fn(Y(t.getClientRects()), W(e.getClientRects()), Hu).getOr(!1) }, bs.isAtStart = function(e) { return !!e && e.isAtStart() }, bs.isAtEnd = function(e) { return !!e && e.isAtEnd() }, bs.isTextPosition = function(e) { return !!e && qn(e.container()) }, bs.isElementPosition = function(e) { return !1 === bs.isTextPosition(e) };
    var vc, bc, yc = qn,
        Cc = un,
        wc = cu.nodeIndex,
        xc = function(e) { var t = e.parentNode; return Cc(t) ? xc(t) : t },
        Sc = function(e) { return e ? de(e.childNodes, function(e, t) { return Cc(t) && "BR" !== t.nodeName ? e = e.concat(Sc(t)) : e.push(t), e }, []) : [] },
        Ec = Jn,
        Nc = A(Rs, u, !0),
        kc = cu.DOM,
        _c = Hn,
        Ac = qn,
        Tc = function(e) { _c(e) && Xr(e) && (Yr(e) ? e.removeAttribute("data-mce-caret") : Xs(e)), Ac(e) && (Gs(e), 0 === e.data.length && Xs(e)) },
        Rc = ft().browser,
        Dc = Jn,
        Oc = Zn,
        Bc = Qn,
        Pc = function(e) { return Dc(e) || Oc(e) },
        Lc = Jn,
        Ic = Zn,
        Mc = on("display", "block table table-cell table-caption list-item"),
        Fc = Xr,
        Uc = Wr,
        zc = Hn,
        jc = eo,
        Hc = A(cc, !0),
        Vc = A(cc, !1);

    function qc(e, t) { return e.hasChildNodes() && t < e.childNodes.length ? e.childNodes[t] : null }

    function $c(e, t) { if (0 < e) { if (af(t.previousSibling) && !nf(t.previousSibling)) return bs.before(t); if (nf(t)) return bs(t, 0) } if (e < 0) { if (af(t.nextSibling) && !nf(t.nextSibling)) return bs.after(t); if (nf(t)) return bs(t, t.data.length) } return e < 0 && !of(t) ? bs.after(t) : bs.before(t) }

    function Wc(t) { return { next: function(e) { return sf(vc.Forwards, e, t) }, prev: function(e) { return sf(vc.Backwards, e, t) } } }

    function Kc(e) { return bs.isTextPosition(e) ? 0 === e.offset() : eo(e.getNode()) }

    function Xc(e) { if (bs.isTextPosition(e)) { var t = e.container(); return e.offset() === t.data.length } return eo(e.getNode(!0)) }

    function Yc(e, t) { return !bs.isTextPosition(e) && !bs.isTextPosition(t) && e.getNode() === t.getNode(!0) }

    function Gc(o, i, a) { return cf(o, i, a).bind(function(e) { return uc(a, e, i) && (t = a, n = e, o ? !Yc(t, n) && (bs.isTextPosition(r = t) || !Xn(r.getNode())) && Xc(t) && Kc(n) : !Yc(n, t) && Kc(t) && Xc(n)) ? cf(o, i, e) : he.some(e); var t, n, r }) }

    function Jc(e, t) { var n, r, o, i, a, u = e ? t.firstChild : t.lastChild; return qn(u) ? he.some(bs(u, e ? 0 : u.data.length)) : u ? eo(u) ? he.some(e ? bs.before(u) : Xn(a = u) ? bs.before(a) : bs.after(a)) : (r = t, o = u, i = (n = e) ? bs.before(o) : bs.after(o), cf(n, r, i)) : he.none() }

    function Qc(e) { return Hn(e) && e.id === pf }

    function Zc(e, t) {
        for (; t && t !== e;) {
            if (t.id === pf) return t;
            t = t.parentNode
        }
        return null
    }

    function el(e) { return St.isArray(e.start) }

    function tl(e, t) { return Hn(t) && e.isBlock(t) && !t.innerHTML && !Ct.ie && (t.innerHTML = '<br data-mce-bogus="1" />'), t }

    function nl(e, t, n) { return !1 === t.hasChildNodes() && Zc(e, t) && (o = n, i = (r = t).ownerDocument.createTextNode(Oo), r.appendChild(i), o.setStart(i, 0), o.setEnd(i, 0), 1); var r, o, i }

    function rl(e, t, n, r) {
        var o, i, a, u, s = n[t ? "start" : "end"],
            c = e.getRoot();
        if (s) {
            for (a = s[0], i = c, o = s.length - 1; 1 <= o; o--) {
                if (u = i.childNodes, nl(c, i, r)) return 1;
                if (s[o] > u.length - 1) return nl(c, i, r) || function(t) { return gf(i).fold(T, function(e) { return t.setStart(e.container(), e.offset()), t.setEnd(e.container(), e.offset()), !0 }) }(r);
                i = u[s[o]]
            }
            3 === i.nodeType && (a = Math.min(s[0], i.nodeValue.length)), 1 === i.nodeType && (a = Math.min(s[0], i.childNodes.length)), t ? r.setStart(i, a) : r.setEnd(i, a)
        }
        return 1
    }

    function ol(e) { return qn(e) && 0 < e.data.length }

    function il(e, t, n) {
        var r, o, i, a, u, s, c = e.get(n.id + "_" + t),
            l = n.keep;
        if (c) {
            if (r = c.parentNode, o = "start" === t ? l ? c.hasChildNodes() ? (r = c.firstChild, 1) : ol(c.nextSibling) ? (r = c.nextSibling, 0) : ol(c.previousSibling) ? (r = c.previousSibling, c.previousSibling.data.length) : (r = c.parentNode, e.nodeIndex(c) + 1) : e.nodeIndex(c) : l ? c.hasChildNodes() ? (r = c.firstChild, 1) : ol(c.previousSibling) ? (r = c.previousSibling, c.previousSibling.data.length) : (r = c.parentNode, e.nodeIndex(c)) : e.nodeIndex(c), u = r, s = o, !l) {
                for (a = c.previousSibling, i = c.nextSibling, St.each(St.grep(c.childNodes), function(e) { qn(e) && (e.nodeValue = e.nodeValue.replace(/\uFEFF/g, "")) }); c = e.get(n.id + "_" + t);) e.remove(c, !0);
                a && i && a.nodeType === i.nodeType && qn(a) && !Ct.opera && (o = a.nodeValue.length, a.appendData(i.nodeValue), e.remove(i), u = a, s = o)
            }
            return he.some(bs(u, s))
        }
        return he.none()
    }

    function al(t, e) {! function(e, t) { var n, r, o, i, a, u, s, c, l, f, d, m, g = e.dom; if (t) { if (el(t)) return d = t, m = (f = g).createRng(), rl(f, !0, d, m) && rl(f, !1, d, m) ? he.some(m) : he.none(); if (K(t.start)) return he.some((s = t, c = (u = g).createRng(), l = Es(u.getRoot(), s.start), c.setStart(l.container(), l.offset()), l = Es(u.getRoot(), s.end), c.setEnd(l.container(), l.offset()), c)); if (Ee(t, "id")) return fn(a = il(o = g, "start", i = t), il(o, "end", i).or(a), function(e, t) { var n = o.createRng(); return n.setStart(tl(o, e.container()), e.offset()), n.setEnd(tl(o, t.container()), t.offset()), n }); if (Ee(t, "name")) return n = g, he.from(n.select((r = t).name)[r.index]).map(function(e) { var t = n.createRng(); return t.selectNode(e), t }); if (Ee(t, "rng")) return he.some(t.rng) } return he.none() }(t, e).each(function(e) { t.setRng(e) }) }

    function ul(e) { return Hn(e) && "SPAN" === e.tagName && "bookmark" === e.getAttribute("data-mce-type") }

    function sl(e) { return "" !== e && -1 !== " \f\n\r\t\v".indexOf(e) }

    function cl(e) { return !sl(e) && !vf(e) }

    function ll(e) { return e.nodeType }

    function fl(e, t, n) {
        var r, o = n.startOffset,
            i = n.startContainer;
        if ((i !== n.endContainer || !(r = i.childNodes[o]) || !/^(IMG)$/.test(r.nodeName)) && Hn(i)) {
            var a = i.childNodes,
                u = void 0;
            o < a.length ? (i = a[o], u = new jr(i, e.getParent(i, e.isBlock))) : (i = a[a.length - 1], (u = new jr(i, e.getParent(i, e.isBlock))).next(!0));
            for (var s = u.current(); s; s = u.next())
                if (qn(s) && !bf(s)) return n.setStart(s, 0), t.setRng(n), 0
        }
    }

    function dl(e, t, n) {
        if (e) {
            var r = t ? "nextSibling" : "previousSibling";
            for (e = n ? e : e[r]; e; e = e[r])
                if (Hn(e) || !bf(e)) return e
        }
    }

    function ml(e, t) { return ll(t) && (t = t.nodeName), !!e.schema.getTextBlockElements()[t.toLowerCase()] }

    function gl(e, t, n) { return e.schema.isValidChild(t, n) }

    function pl(e, n) { return y(e) ? e = e(n) : V(n) && (e = e.replace(/%(\w+)/g, function(e, t) { return n[t] || e })), e }

    function hl(e, t) { return e = "" + ((e = e || "").nodeName || e), t = "" + ((t = t || "").nodeName || t), e.toLowerCase() === t.toLowerCase() }

    function vl(e, t, n) { return "color" !== n && "backgroundColor" !== n || (t = e.toHex(t)), "fontWeight" === n && 700 === t && (t = "bold"), "" + ("fontFamily" === n ? t.replace(/[\'\"]/g, "").replace(/,\s+/g, ",") : t) }

    function bl(e, t, n) { return vl(e, e.getStyle(t, n), n) }

    function yl(t, e) { var n; return t.getParent(e, function(e) { return (n = t.getStyle(e, "text-decoration")) && "none" !== n }), n }

    function Cl(e, t, n) { return e.getParents(t, n, e.getRoot()) }

    function wl(e, t) {
        return F(e.formatter.get(t), function(t) {
            function o(e) { return 1 < e.length && "%" === e.charAt(0) }
            return F(["styles", "attributes"], function(e) { return ae(t, e).exists(function(e) { var n, r; return F(S(e) ? e : (n = u, r = [], Q(e, function(e, t) { r.push(n(e, t)) }), r), o) }) })
        })
    }

    function xl(e) { return ue(e, "block") }

    function Sl(e) { return ue(e, "selector") }

    function El(e) { return ue(e, "inline") }

    function Nl(e) { return Sl(e) && !1 !== e.expand && !El(e) }

    function kl(e, t) {
        for (var n = t; n;) {
            if (Hn(n) && e.getContentEditable(n)) return "false" === e.getContentEditable(n) ? n : t;
            n = n.parentNode
        }
        return t
    }

    function _l(e, t, n, r) {
        for (var o = t.data, i = n; e ? 0 <= i : i < o.length; e ? i-- : i++)
            if (r(o.charAt(i))) return e ? i + 1 : i;
        return -1
    }

    function Al(e, t, n) { return _l(e, t, n, function(e) { return vf(e) || sl(e) }) }

    function Tl(e, t, n) { return _l(e, t, n, cl) }

    function Rl(i, e, t, n, a, r) {
        function o(e, t, n) {
            var r = Mu(i),
                o = a ? r.backwards : r.forwards;
            return he.from(o(e, t, function(e, t) { return yf(e.parentNode) ? -1 : n(a, u = e, t) }, s))
        }
        var u, s = i.getParent(t, i.isBlock) || e;
        return o(t, n, Al).bind(function(e) { return r ? o(e.container, e.offset + (a ? -1 : 0), Tl) : he.some(e) }).orThunk(function() { return u ? he.some({ container: u, offset: a ? 0 : u.length }) : he.none() })
    }

    function Dl(e, t, n, r, o) {
        qn(r) && Be(r.data) && r[o] && (r = r[o]);
        for (var i = Cf(e, r), a = 0; a < i.length; a++)
            for (var u = 0; u < t.length; u++) { var s = t[u]; if ((!V(s.collapsed) || s.collapsed === n.collapsed) && Sl(s) && e.is(i[a], s.selector)) return i[a] }
        return r
    }

    function Ol(t, e, n, r) {
        var o, i = n,
            a = t.dom,
            u = a.getRoot(),
            s = e[0];
        if ((i = xl(s) && !s.wrapper ? a.getParent(n, s.block, u) : i) || (o = a.getParent(n, "LI,TD,TH"), i = a.getParent(qn(n) ? n.parentNode : n, function(e) { return e !== u && xf(t, e) }, o)), !(i = i && xl(s) && s.wrapper && Cf(a, i, "ul,ol").reverse()[0] || i))
            for (i = n; i[r] && !a.isBlock(i[r]) && !hl(i = i[r], "br"););
        return i || n
    }

    function Bl(e, t, n, r, o) {
        var i, a = n,
            u = o ? "previousSibling" : "nextSibling",
            s = e.getRoot();
        if (qn(n) && !wf(n) && (o ? 0 < r : r < n.data.length)) return n;
        for (;;) {
            if (!t[0].block_expand && e.isBlock(a)) return a;
            for (var c = a[u]; c; c = c[u]) { var l = qn(c) && !Sf(e, s, c, u); if (!yf(c) && (!Xn(i = c) || !i.getAttribute("data-mce-bogus") || i.nextSibling) && !wf(c, l)) return a }
            if (a === s || a.parentNode === s) { n = a; break }
            a = a.parentNode
        }
        return n
    }

    function Pl(e) { return yf(e.parentNode) || yf(e) }

    function Ll(e, t, n, r) {
        void 0 === r && (r = !1);
        var o = t.startContainer,
            i = t.startOffset,
            a = t.endContainer,
            u = t.endOffset,
            s = e.dom,
            c = n[0];
        return Hn(o) && o.hasChildNodes() && (o = $u(o, i), qn(o) && (i = 0)), Hn(a) && a.hasChildNodes() && (a = $u(a, t.collapsed ? u : u - 1), qn(a) && (u = a.nodeValue.length)), o = kl(s, o), a = kl(s, a), Pl(o) && (o = yf(o) ? o : o.parentNode, o = t.collapsed ? o.previousSibling || o : o.nextSibling || o, qn(o) && (i = t.collapsed ? o.length : 0)), Pl(a) && (a = yf(a) ? a : a.parentNode, a = t.collapsed ? a.nextSibling || a : a.previousSibling || a, qn(a) && (u = t.collapsed ? 0 : a.length)), t.collapsed && (Rl(s, e.getBody(), o, i, !0, r).each(function(e) {
            var t = e.container,
                n = e.offset;
            o = t, i = n
        }), Rl(s, e.getBody(), a, u, !1, r).each(function(e) {
            var t = e.container,
                n = e.offset;
            a = t, u = n
        })), (El(c) || c.block_expand) && (El(c) && qn(o) && 0 !== i || (o = Bl(s, n, o, i, !0)), El(c) && qn(a) && u !== a.nodeValue.length || (a = Bl(s, n, a, u, !1))), Nl(c) && (o = Dl(s, n, t, o, "previousSibling"), a = Dl(s, n, t, a, "nextSibling")), (xl(c) || Sl(c)) && (o = Ol(e, n, o, "previousSibling"), a = Ol(e, n, a, "nextSibling"), xl(c) && (s.isBlock(o) || (o = Bl(s, n, o, i, !0)), s.isBlock(a) || (a = Bl(s, n, a, u, !1)))), Hn(o) && (i = s.nodeIndex(o), o = o.parentNode), Hn(a) && (u = s.nodeIndex(a) + 1, a = a.parentNode), { startContainer: o, startOffset: i, endContainer: a, endOffset: u }
    }

    function Il(n, e, u) {
        function s(e) {
            var t = e[0];
            qn(t) && t === i && o >= t.data.length && e.splice(0, 1);
            var n = e[e.length - 1];
            return 0 === a && 0 < e.length && n === l && qn(n) && e.splice(e.length - 1, 1), e
        }

        function c(e, t, n) { for (var r = []; e && e !== n; e = e[t]) r.push(e); return r }

        function t(e, t) { return n.getParent(e, function(e) { return e.parentNode === t }, t) }

        function r(e, t, n) {
            var r = n ? "nextSibling" : "previousSibling",
                o = e;
            for (o.parentNode; o && o !== t; o = i) {
                var i = o.parentNode,
                    a = c(o === e ? o : o[r], r);
                a.length && (n || a.reverse(), u(s(a)))
            }
        }
        var o = e.startOffset,
            i = $u(e.startContainer, o),
            a = e.endOffset,
            l = $u(e.endContainer, a - 1);
        if (i === l) return u(s([i]));
        var f = n.findCommonAncestor(i, l);
        if (n.isChildOf(i, l)) return r(i, f, !0);
        if (n.isChildOf(l, i)) return r(l, f);
        var d = t(i, f) || i,
            m = t(l, f) || l;
        r(i, d, !0);
        var g = c(d === i ? d : d.nextSibling, "nextSibling", m === l ? m.nextSibling : m);
        g.length && u(s(g)), r(l, m)
    }

    function Ml(e) {
        var t = [];
        if (e)
            for (var n = 0; n < e.rangeCount; n++) t.push(e.getRangeAt(n));
        return t
    }

    function Fl(e, t) { var n = Au(t, "td[data-mce-selected],th[data-mce-selected]"); return 0 < n.length ? n : U(z(e, function(e) { var t = qu(e); return t ? [Et.fromDom(t)] : [] }), Ao) }

    function Ul(e) { return Fl(Ml(e.selection.getSel()), Et.fromDom(e.getBody())) }

    function zl(e, t) { return br(e, "table", t) }

    function jl(o, e) {
        return fn((r = e.startContainer, i = e.startOffset, qn(r) ? 0 === i ? he.some(Et.fromDom(r)) : he.none() : he.from(r.childNodes[i]).map(Et.fromDom)), (t = e.endContainer, n = e.endOffset, qn(t) ? n === t.data.length ? he.some(Et.fromDom(t)) : he.none() : he.from(t.childNodes[n - 1]).map(Et.fromDom)), function(e, t) {
            var n = I(Ef(o), A(je, e)),
                r = I(Nf(o), A(je, t));
            return n.isSome() && r.isSome()
        }).getOr(!1);
        var t, n, r, i
    }

    function Hl(e, t, n, r) {
        var o = n,
            i = new jr(n, o),
            a = ne(e.schema.getMoveCaretBeforeOnEnterElements(), function(e, t) { return !ie(["td", "th", "table"], t.toLowerCase()) });
        do { if (qn(n) && 0 !== St.trim(n.nodeValue).length) return r ? t.setStart(n, 0) : t.setEnd(n, n.nodeValue.length), 0; if (a[n.nodeName]) return r ? t.setStartBefore(n) : "BR" === n.nodeName ? t.setEndBefore(n) : t.setEndAfter(n), 0 } while (n = r ? i.next() : i.prev());
        "BODY" === o.nodeName && (r ? t.setStart(o, 0) : t.setEnd(o, o.childNodes.length))
    }

    function Vl(e) { var t = e.selection.getSel(); return t && 0 < t.rangeCount }

    function ql(r, o) {
        var e = Ul(r);
        0 < e.length ? X(e, function(e) {
            var t = e.dom,
                n = r.dom.createRng();
            n.setStartBefore(t), n.setEndAfter(t), o(n, !0)
        }) : o(r.selection.getRng(), !1)
    }

    function $l(e, t, n) {
        var r = Os(e, t);
        n(r), e.moveToBookmark(r)
    }

    function Wl(e) { return kf.get(e) }

    function Kl(e, t, n, r) {
        var o = t.uid,
            i = void 0 === o ? Du("mce-annotation") : o,
            a = function(e, t) {
                var n = {};
                for (o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
                return n
            }(t, ["uid"]),
            u = Et.fromTag("span", e);
        ku(u, es()), gn(u, "" + ns(), i), gn(u, "" + ts(), n);
        var s, c = r(i, a),
            l = c.attributes,
            f = c.classes,
            d = void 0 === f ? [] : f;
        return pn(u, void 0 === l ? {} : l), s = u, X(d, function(e) { ku(s, e) }), u
    }

    function Xl(u, e, t, n, r) {
        function s() { d.clear() }

        function c(e) { X(e, o) }
        var l = [],
            f = Kl(u.getDoc(), r, t, n),
            d = wu(),
            o = function(e) {
                var t, n, r, o, i, a;
                switch (r = u, i = "span", a = Nt(o = e), Dt(o).fold(function() { return "skipping" }, function(e) { return "br" === a || Tn(n = o) && Wl(n) === Oo ? "valid" : An(t = o) && _u(t, es()) ? "existing" : Qc(o.dom) ? "caret" : gl(r, i, a) && gl(r, Nt(e), i) ? "valid" : "invalid-child"; var t, n })) {
                    case "invalid-child":
                        s(), c(On(e)), s();
                        break;
                    case "valid":
                        Vt(t = e, n = d.get().getOrThunk(function() { var e = Pu(f); return l.push(e), d.set(e), e })), In(n, t)
                }
            };
        return Il(u.dom, e, function(e) { s(), c(R(e, Et.fromDom)) }), l
    }

    function Yl(o) {
        var n, e, r, i = (n = {}, { register: function(e, t) { n[e] = { name: e, settings: t } }, lookup: function(e) { return ae(n, e).map(function(e) { return e.settings }) } });
        r = i, (e = o).on("init", function() { e.serializer.addNodeFilter("span", function(e) { X(e, function(t) { he.from(t.attr(ts())).bind(r.lookup).each(function(e) {!1 === e.persistent && t.unwrap() }) }) }) });
        var a = Ru(o);
        return {
            register: function(e, t) { i.register(e, t) },
            annotate: function(t, n) {
                i.lookup(t).each(function(e) {
                    var u, s, c, l;
                    s = t, c = e, l = n, (u = o).undoManager.transact(function() {
                        var e, t, n, r, o = u.selection,
                            i = o.getRng(),
                            a = 0 < Ul(u).length;
                        i.collapsed && !a && (n = Ll(e = u, t = i, [{ inline: "span" }]), t.setStart(n.startContainer, n.startOffset), t.setEnd(n.endContainer, n.endOffset), e.selection.setRng(t)), o.getRng().collapsed && !a ? (Ou(r = Kl(u.getDoc(), l, s, c.decorate), Do), o.getRng().insertNode(r.dom), o.select(r.dom)) : $l(o, !1, function() { ql(u, function(e) { Xl(u, e, s, c.decorate, l) }) })
                    })
                })
            },
            annotationChanged: function(e, t) { a.addListener(e, t) },
            remove: function(e) { Tu(o, he.some(e)).each(function(e) { X(e.elements, Xt) }) },
            getAll: function(e) {
                var t, n, r;
                return Z((t = e, n = Au(Et.fromDom(o.getBody()), "[" + ts() + '="' + t + '"]'), r = {}, X(n, function(e) {
                    var t = hn(e, ns()),
                        n = ae(r, t).getOr([]);
                    r[t] = n.concat([e])
                }), r), function(e) { return R(e, function(e) { return e.dom }) })
            }
        }
    }

    function Gl(e) { return { getBookmark: A(hf, e), moveToBookmark: A(al, e) } }(bc = vc = vc || {})[bc.Backwards = -1] = "Backwards", bc[bc.Forwards = 1] = "Forwards";

    function Jl(e) { return qo(e) || !!Ko(t = e) && !0 !== P(Ce(t.getElementsByTagName("*")), function(e, t) { return e || Uo(t) }, !1); var t }
    var Ql, Zl, ef, tf = Jn,
        nf = qn,
        rf = Hn,
        of = Xn,
        af = eo,
        uf = to,
        sf = function(e, t, n) {
            var r, o, i;
            if (!rf(n) || !t) return null;
            if (t.isEqual(bs.after(n)) && n.lastChild) { if (i = bs.after(n.lastChild), e < 0 && af(n.lastChild) && rf(n.lastChild)) return of(n.lastChild) ? bs.before(n.lastChild) : i } else i = t;
            var a, u, s, c = i.container(),
                l = i.offset();
            if (nf(c)) {
                if (e < 0 && 0 < l) return bs(c, --l);
                if (0 < e && l < c.length) return bs(c, ++l);
                r = c
            } else {
                if (e < 0 && 0 < l && (f = qc(c, l - 1), af(f))) return !Jl(f) && (o = ic(f, e, uf, f)) ? nf(o) ? bs(o, o.data.length) : bs.after(o) : nf(f) ? bs(f, f.data.length) : bs.before(f);
                if (0 < e && l < c.childNodes.length && (f = qc(c, l), af(f))) return of(f) ? (a = n, (s = (u = f).nextSibling) && af(s) ? nf(s) ? bs(s, 0) : bs.before(s) : sf(vc.Forwards, bs.after(u), a)) : !Jl(f) && (o = ic(f, e, uf, f)) ? nf(o) ? bs(o, 0) : bs.before(o) : nf(f) ? bs(f, 0) : bs.after(f);
                r = f || i.getNode()
            }
            if ((0 < e && i.isAtEnd() || e < 0 && i.isAtStart()) && (r = ic(r, e, x, n, !0), uf(r, n))) return $c(e, r);
            var f = ic(r, e, uf, n),
                d = ge(U(function(e, t) { for (var n = []; e && e !== t;) n.push(e), e = e.parentNode; return n }(c, n), tf));
            return !d || f && d.contains(f) ? f ? $c(e, f) : null : 0 < e ? bs.after(d) : bs.before(d)
        },
        cf = function(e, t, n) { var r = Wc(t); return he.from(e ? r.next(n) : r.prev(n)) },
        lf = function(t, n, e, r) { return Gc(t, n, e).bind(function(e) { return r(e) ? lf(t, n, e, r) : he.some(e) }) },
        ff = A(cf, !0),
        df = A(cf, !1),
        mf = A(Jc, !0),
        gf = A(Jc, !1),
        pf = "_mce_caret",
        hf = function(e, t, n) { return 2 === t ? Rs(Po, n, e) : 3 === t ? (o = (r = e).getRng(), { start: Ss(r.dom.getRoot(), bs.fromRangeStart(o)), end: Ss(r.dom.getRoot(), bs.fromRangeEnd(o)) }) : t ? { rng: e.getRng() } : Os(e, !1); var r, o },
        vf = (Ql = Do, function(e) { return Ql === e }),
        bf = function(e, t) { return void 0 === t && (t = !1), !(!V(e) || !qn(e)) && no(t ? e.data.replace(/ /g, "\xa0") : e.data) },
        yf = ul,
        Cf = Cl,
        wf = bf,
        xf = ml,
        Sf = function(e, t, n, r) { var o = n.parentNode; return !V(n[r]) && (!(o !== t && !re(o) && !e.isBlock(o)) || Sf(e, t, o, r)) },
        Ef = function(t) { return Mt(t).fold(J([t]), function(e) { return [t].concat(Ef(e)) }) },
        Nf = function(t) { return Ft(t).fold(J([t]), function(e) { return "br" === Nt(e) ? Ot(e).map(function(e) { return [t].concat(Nf(e)) }).getOr([]) : [t].concat(Nf(e)) }) },
        kf = (Zl = Tn, {
            get: function(e) { if (!Zl(e)) throw new Error("Can only get text value of a text node"); return ef(e).getOr("") },
            getOption: ef = function(e) { return Zl(e) ? he.from(e.dom.nodeValue) : he.none() },
            set: function(e, t) {
                if (!Zl(e)) throw new Error("Can only set raw text value of a text node");
                e.dom.nodeValue = t
            }
        });

    function _f(e, t) {
        for (; t && t !== e;) {
            if (Gn(t) || Jn(t)) return t;
            t = t.parentNode
        }
        return null
    }

    function Af(t, n, e) { if (!e.collapsed) { if (Ct.browser.isIE() && e.startOffset === e.endOffset - 1 && e.startContainer === e.endContainer) { var r = e.startContainer.childNodes[e.startOffset]; if (Hn(r)) return F(r.getClientRects(), function(e) { return Vu(e, t, n) }) } return F(e.getClientRects(), function(e) { return Vu(e, t, n) }) } }

    function Tf(e, t, n) { return e.fire(t, n) }

    function Rf(e, t, n, r) { return e.fire("FormatApply", { format: t, node: n, vars: r }) }

    function Df(e, t, n, r) { return e.fire("FormatRemove", { format: t, node: n, vars: r }) }

    function Of(r, l) {
        function c(e) { return e && ("IMG" === e.nodeName || l.dom.is(e, "figure.image")) }

        function f(e) { return Zn(e) || D.hasClass(e, "mce-preview-object") }

        function n(e) { var t = e.target;! function(e, t) { if ("longpress" !== e.type && 0 !== e.type.indexOf("touch")) return c(e.target) && !Af(e.clientX, e.clientY, t); var n = e.touches[0]; return c(e.target) && !Af(n.clientX, n.clientY, t) }(e, l.selection.getRng()) || e.isDefaultPrevented() || l.selection.select(t) }

        function d(e) { return D.is(e, "figure.image") ? [e.querySelector("img")] : D.hasClass(e, "mce-preview-object") && V(e.firstElementChild) ? [e, e.firstElementChild] : [e] }

        function i(e) { var t = Vs(l); return !!t && "false" !== e.getAttribute("data-mce-resize") && e !== l.getBody() && (D.hasClass(e, "mce-preview-object") ? Ue(Et.fromDom(e.firstElementChild), t) : Ue(Et.fromDom(e), t)) }

        function a(e, t, n) { V(n) && X(d(e), function(e) { e.style[t] || !l.schema.isValid(e.nodeName.toLowerCase(), t) ? D.setStyle(e, t, n) : D.setAttrib(e, t, "" + n) }) }

        function m(e, t, n) { a(e, "width", t), a(e, "height", n) }

        function g(e) {
            var t, n, r, o, i, a, u = e.screenX - C,
                s = e.screenY - w;
            k = u * b[2] + x, _ = s * b[3] + S, k = k < 5 ? 5 : k, _ = _ < 5 ? 5 : _, ((c(p) || f(p)) && !1 !== l.getParam("resize_img_proportional", !0, "boolean") ? !$f.modifierPressed(e) : $f.modifierPressed(e)) && (L(u) > L(s) ? (_ = I(k * E), k = I(_ / E)) : (k = I(_ / E), _ = I(k * E))), m(h, k, _), t = b.startPos.x + u, n = b.startPos.y + s, D.setStyles(v, { left: t = 0 < t ? t : 0, top: n = 0 < n ? n : 0, display: "block" }), v.innerHTML = k + " &times; " + _, b[2] < 0 && h.clientWidth <= k && D.setStyle(h, "left", void 0 + (x - k)), b[3] < 0 && h.clientHeight <= _ && D.setStyle(h, "top", void 0 + (S - _)), (u = M.scrollWidth - A) + (s = M.scrollHeight - T) != 0 && D.setStyles(v, { left: t - u, top: n - s }), N || (r = p, o = x, i = S, a = "corner-" + b.name, l.fire("ObjectResizeStart", { target: r, width: o, height: i, origin: a }), N = !0)
        }

        function o(e) {
            function t(e, t) {
                if (e)
                    do { if (e === t) return 1 } while (e = e.parentNode)
            }
            var n;
            N || l.removed || (O(D.select("img[data-mce-selected],hr[data-mce-selected]"), function(e) { e.removeAttribute(R) }), n = "mousedown" === e.type ? e.target : r.getNode(), t(n = D.$(n).closest("table,img,figure.image,hr,video,span.mce-preview-object")[0], M) && (s(), t(r.getStart(!0), n) && t(r.getEnd(!0), n)) ? z(n) : j())
        }

        function u(e) { return Wf(_f(l.getBody(), e)) }

        function s() { try { l.getDoc().execCommand("enableObjectResizing", !1, "false") } catch (e) {} }
        var p, h, v, b, y, C, w, x, S, E, N, k, _, A, T, R = "data-mce-selected",
            D = l.dom,
            O = St.each,
            B = l.getDoc(),
            P = document,
            L = Math.abs,
            I = Math.round,
            M = l.getBody(),
            F = { nw: [0, 0, -1, -1], ne: [1, 0, 1, -1], se: [1, 1, 1, 1], sw: [0, 1, -1, 1] },
            U = function() {
                var e, t, n, r, o = N;
                N = !1, o && (a(p, "width", k), a(p, "height", _)), D.unbind(B, "mousemove", g), D.unbind(B, "mouseup", U), P !== B && (D.unbind(P, "mousemove", g), D.unbind(P, "mouseup", U)), D.remove(h), D.remove(v), D.remove(y), z(p), o && (e = p, t = k, n = _, r = "corner-" + b.name, l.fire("ObjectResized", { target: e, width: t, height: n, origin: r }), D.setAttrib(p, "style", D.getAttrib(p, "style"))), l.nodeChanged()
            },
            z = function(e) {
                H();
                var t = D.getPos(e, M),
                    a = t.x,
                    u = t.y,
                    n = e.getBoundingClientRect(),
                    s = n.width || n.right - n.left,
                    c = n.height || n.bottom - n.top;
                p !== e && (j(), p = e, k = _ = 0);
                var r = l.fire("ObjectSelected", { target: e }),
                    o = D.getAttrib(p, R, "1");
                i(e) && !r.isDefaultPrevented() ? O(F, function(o, i) {
                    var e = D.get("mceResizeHandle" + i);
                    e && D.remove(e), e = D.add(M, "div", { id: "mceResizeHandle" + i, "data-mce-bogus": "all", class: "mce-resizehandle", unselectable: !0, style: "cursor:" + i + "-resize; margin:0; padding:0" }), 11 === Ct.ie && (e.contentEditable = !1), D.bind(e, "mousedown", function(e) {
                        var t, n, r;
                        e.stopImmediatePropagation(), e.preventDefault(), t = e, r = d(p)[0], C = t.screenX, w = t.screenY, x = r.clientWidth, S = r.clientHeight, E = S / x, (b = o).name = i, b.startPos = { x: s * o[0] + a, y: c * o[1] + u }, A = M.scrollWidth, T = M.scrollHeight, y = D.add(M, "div", { class: "mce-resize-backdrop" }), D.setStyles(y, { position: "fixed", left: "0", top: "0", width: "100%", height: "100%" }), h = f(n = p) ? D.create("img", { src: Ct.transparentSrc }) : n.cloneNode(!0), D.addClass(h, "mce-clonedresizable"), D.setAttrib(h, "data-mce-bogus", "all"), h.contentEditable = "false", D.setStyles(h, { left: a, top: u, margin: 0 }), m(h, s, c), h.removeAttribute(R), M.appendChild(h), D.bind(B, "mousemove", g), D.bind(B, "mouseup", U), P !== B && (D.bind(P, "mousemove", g), D.bind(P, "mouseup", U)), v = D.add(M, "div", { class: "mce-resize-helper", "data-mce-bogus": "all" }, x + " &times; " + S)
                    }), o.elm = e, D.setStyles(e, { left: s * o[0] + a - e.offsetWidth / 2, top: c * o[1] + u - e.offsetHeight / 2 })
                }) : j(), D.getAttrib(p, R) || p.setAttribute(R, o)
            },
            j = function() {
                H(), p && p.removeAttribute(R), Q(F, function(e, t) {
                    var n = D.get("mceResizeHandle" + t);
                    n && (D.unbind(n), D.remove(n))
                })
            },
            H = function() { Q(F, function(e) { e.elm && (D.unbind(e.elm), delete e.elm) }) };
        return l.on("init", function() {
            var e;
            s(), (Ct.browser.isIE() || Ct.browser.isEdge()) && (l.on("mousedown click", function(e) {
                var t = e.target,
                    n = t.nodeName;
                N || !/^(TABLE|IMG|HR)$/.test(n) || u(t) || (2 !== e.button && l.selection.select(t, "TABLE" === n), "mousedown" === e.type && l.nodeChanged())
            }), D.bind(M, "mscontrolselect", e = function(e) {
                function t(e) { Ur.setEditorTimeout(l, function() { return l.selection.select(e) }) }
                if (u(e.target) || Zn(e.target)) return e.preventDefault(), void t(e.target);
                /^(TABLE|IMG|HR)$/.test(e.target.nodeName) && (e.preventDefault(), "IMG" === e.target.tagName && t(e.target))
            }), l.on("remove", function() { return D.unbind(M, "mscontrolselect", e) }));
            var t = Ur.throttle(function(e) { l.composing || o(e) });
            l.on("nodechange ResizeEditor ResizeWindow ResizeContent drop FullscreenStateChanged", t), l.on("keyup compositionend", function(e) { p && "TABLE" === p.nodeName && t(e) }), l.on("hide blur", j), l.on("contextmenu longpress", n, !0)
        }), l.on("remove", H), { isResizable: i, showResizeRect: z, hideResizeRect: j, updateResizeRect: o, destroy: function() { p = h = y = null } }
    }

    function Bf(e) { return Gn(e) || Jn(e) }

    function Pf(t, n, r) {
        var o, e, i, a, u, s = r;
        if (s.caretPositionFromPoint)(e = s.caretPositionFromPoint(t, n)) && ((o = r.createRange()).setStart(e.offsetNode, e.offset), o.collapse(!0));
        else if (s.caretRangeFromPoint) o = s.caretRangeFromPoint(t, n);
        else if (s.body.createTextRange) {
            o = s.body.createTextRange();
            try { o.moveToPoint(t, n), o.collapse(!0) } catch (e) {
                o = function(e, n, t) {
                    var r, o = t.elementFromPoint(e, n),
                        i = t.body.createTextRange();
                    if (o && "HTML" !== o.tagName || (o = t.body), i.moveToElementText(o), 0 < (r = (r = St.toArray(i.getClientRects())).sort(function(e, t) { return (e = Math.abs(Math.max(e.top - n, e.bottom - n))) - Math.abs(Math.max(t.top - n, t.bottom - n)) })).length) { n = (r[0].bottom + r[0].top) / 2; try { return i.moveToPoint(e, n), i.collapse(!0), i } catch (e) {} }
                    return null
                }(t, n, r)
            }
            return i = o, a = r.body, u = i && i.parentElement ? i.parentElement() : null, Jn(function(e, t, n) {
                for (; e && e !== t;) {
                    if (n(e)) return e;
                    e = e.parentNode
                }
                return null
            }(u, a, Bf)) ? null : i
        }
        return o
    }

    function Lf(e, t) { return e && t && e.startContainer === t.startContainer && e.startOffset === t.startOffset && e.endContainer === t.endContainer && e.endOffset === t.endOffset }

    function If(e, t, n) {
        return null !== function(e, t, n) {
            for (; e && e !== t;) {
                if (n(e)) return e;
                e = e.parentNode
            }
            return null
        }(e, t, n)
    }

    function Mf(e) { return e && "TABLE" === e.nodeName }

    function Ff(e, t, n) {
        for (var r = new jr(t, e.getParent(t.parentNode, e.isBlock) || e.getRoot()); t = r[n ? "prev" : "next"]();)
            if (Xn(t)) return 1
    }

    function Uf(e, t, n, r, o) {
        var i, a, u = e.getRoot(),
            s = e.schema.getNonEmptyElements(),
            c = e.getParent(o.parentNode, e.isBlock) || u;
        if (r && Xn(o) && t && e.isEmpty(c)) return he.some(bs(o.parentNode, e.nodeIndex(o)));
        for (var l, f, d = new jr(o, c); a = d[r ? "prev" : "next"]();) {
            if ("false" === e.getContentEditableParent(a) || (f = u, Xr(l = a) && !1 === If(l, f, Qc))) return he.none();
            if (qn(a) && 0 < a.nodeValue.length) return !1 === If(a, u, function(e) { return "A" === e.nodeName }) ? he.some(bs(a, r ? a.nodeValue.length : 0)) : he.none();
            if (e.isBlock(a) || s[a.nodeName.toLowerCase()]) return he.none();
            i = a
        }
        return n && i ? he.some(bs(i, 0)) : he.none()
    }

    function zf(e, t, n, r) {
        var o, i = e.getRoot(),
            a = !1,
            u = r[(n ? "start" : "end") + "Container"],
            s = r[(n ? "start" : "end") + "Offset"],
            c = Hn(u) && s === u.childNodes.length,
            l = e.schema.getNonEmptyElements(),
            f = n;
        if (Xr(u)) return he.none();
        if (Hn(u) && s > u.childNodes.length - 1 && (f = !1), Wn(u) && (u = i, s = 0), u === i) {
            if (f && (d = u.childNodes[0 < s ? s - 1 : 0])) { if (Xr(d)) return he.none(); if (l[d.nodeName] || Mf(d)) return he.none() }
            if (u.hasChildNodes()) {
                if (s = Math.min(!f && 0 < s ? s - 1 : s, u.childNodes.length - 1), u = u.childNodes[s], s = qn(u) && c ? u.data.length : 0, !t && u === i.lastChild && Mf(u)) return he.none();
                if (function(e, t) {
                        for (; t && t !== e;) {
                            if (Jn(t)) return 1;
                            t = t.parentNode
                        }
                    }(i, u) || Xr(u)) return he.none();
                if (u.hasChildNodes() && !1 === Mf(u)) {
                    var d = u,
                        m = new jr(u, i);
                    do { if (Jn(d) || Xr(d)) { a = !1; break } if (qn(d) && 0 < d.nodeValue.length) { s = f ? 0 : d.nodeValue.length, u = d, a = !0; break } if (l[d.nodeName.toLowerCase()] && (!(o = d) || !/^(TD|TH|CAPTION)$/.test(o.nodeName))) { s = e.nodeIndex(d), u = d.parentNode, f || s++, a = !0; break } } while (d = f ? m.next() : m.prev())
                }
            }
        }
        return t && (qn(u) && 0 === s && Uf(e, c, t, !0, u).each(function(e) { u = e.container(), s = e.offset(), a = !0 }), Hn(u) && (!(d = (d = u.childNodes[s]) || u.childNodes[s - 1]) || !Xn(d) || d.previousSibling && "A" === d.previousSibling.nodeName || Ff(e, d, !1) || Ff(e, d, !0) || Uf(e, c, t, !0, d).each(function(e) { u = e.container(), s = e.offset(), a = !0 }))), f && !t && qn(u) && s === u.nodeValue.length && Uf(e, c, t, !1, u).each(function(e) { u = e.container(), s = e.offset(), a = !0 }), a ? he.some(bs(u, s)) : he.none()
    }

    function jf(e, t) {
        var n = t.collapsed,
            r = t.cloneRange(),
            o = bs.fromRangeStart(t);
        return zf(e, n, !0, r).each(function(e) { n && bs.isAbove(o, e) || r.setStart(e.container(), e.offset()) }), n || zf(e, n, !1, r).each(function(e) { r.setEnd(e.container(), e.offset()) }), n && r.collapse(!0), Lf(t, r) ? he.none() : he.some(r)
    }

    function Hf(e, t) { return e.splitText(t) }

    function Vf(e) {
        var t = e.startContainer,
            n = e.startOffset,
            r = e.endContainer,
            o = e.endOffset;
        return t === r && qn(t) ? 0 < n && n < t.nodeValue.length && (t = (r = Hf(t, n)).previousSibling, n < o ? (t = r = Hf(r, o -= n).previousSibling, o = r.nodeValue.length, n = 0) : o = 0) : (qn(t) && 0 < n && n < t.nodeValue.length && (t = Hf(t, n), n = 0), qn(r) && 0 < o && o < r.nodeValue.length && (o = (r = Hf(r, o).previousSibling).nodeValue.length)), { startContainer: t, startOffset: n, endContainer: r, endOffset: o }
    }

    function qf(n) { return { walk: function(e, t) { return Il(n, e, t) }, split: Vf, normalize: function(t) { return jf(n, t).fold(T, function(e) { return t.setStart(e.startContainer, e.startOffset), t.setEnd(e.endContainer, e.endOffset), !0 }) } } }
    Gl.isBookmarkNode = ul;
    var $f = { BACKSPACE: 8, DELETE: 46, DOWN: 40, ENTER: 13, LEFT: 37, RIGHT: 39, SPACEBAR: 32, TAB: 9, UP: 38, PAGE_UP: 33, PAGE_DOWN: 34, END: 35, HOME: 36, modifierPressed: function(e) { return e.shiftKey || e.ctrlKey || e.altKey || $f.metaKeyPressed(e) }, metaKeyPressed: function(e) { return Ct.mac ? e.metaKey : e.ctrlKey && !e.altKey } },
        Wf = Jn;
    qf.compareRanges = Lf, qf.getCaretRangeFromPoint = Pf, qf.getSelectedNode = qu, qf.getNode = $u;
    var Kf, Xf, Yf = (Kf = "height", Xf = function(e) { var t = e.dom; return Fn(e) ? t.getBoundingClientRect().height : t.offsetHeight }, {
        set: function(e, t) {
            if (!E(t) && !t.match(/^[0-9]+$/)) throw new Error(Kf + ".set accepts only positive integer values. Value was " + t);
            var n = e.dom;
            dn(n) && (n.style[Kf] = t + "px")
        },
        get: Gf,
        getOuter: Gf,
        aggregate: Jf,
        max: function(e, t, n) { var r = Jf(e, n); return r < t ? t - r : 0 }
    });

    function Gf(e) { var t = Xf(e); if (t <= 0 || null === t) { var n = Cn(e, Kf); return parseFloat(n) || 0 } return t }

    function Jf(o, e) {
        return P(e, function(e, t) {
            var n = Cn(o, t),
                r = void 0 === n ? 0 : parseInt(n, 10);
            return isNaN(r) ? e : e + r
        }, 0)
    }

    function Qf(e) { return "textarea" === Nt(e) }

    function Zf(e, t) {
        var n = function(e) {
                var t = e.dom.ownerDocument,
                    n = t.body,
                    r = t.defaultView,
                    o = t.documentElement;
                if (n === e.dom) return zn(n.offsetLeft, n.offsetTop);
                var i = Yt(null == r ? void 0 : r.pageYOffset, o.scrollTop),
                    a = Yt(null == r ? void 0 : r.pageXOffset, o.scrollLeft),
                    u = Yt(o.clientTop, n.clientTop),
                    s = Yt(o.clientLeft, n.clientLeft);
                return jn(e).translate(a - s, i - u)
            }(e),
            r = Yf.get(e);
        return { element: e, bottom: n.top + r, height: r, pos: n, cleanup: t }
    }

    function ed(n, r, o, i) { jd(n, function(e, t) { return zd(n, r, o, i) }, o) }

    function td(e, t, n, r, o) {
        var i = { elm: r.element.dom, alignToTop: o };
        e.fire("ScrollIntoView", i).isDefaultPrevented() || (n(t, Gt(t).top, r, o), e.fire("AfterScrollIntoView", i))
    }

    function nd(e, t, n, r) {
        var o = Et.fromDom(e.getDoc());
        td(e, o, n, Zf(Et.fromDom(t), oe), r)
    }

    function rd(e, t, n, r) {
        var o, i = e.pos;
        n ? Jt(i.left, i.top, r) : (o = i.top - t + e.height, Jt(i.left, o, r))
    }

    function od(e, t, n, r, o) {
        var i = n + t,
            a = r.pos.top,
            u = r.bottom,
            s = n <= u - a;
        a < t ? rd(r, n, !1 !== o, e) : i < a ? rd(r, n, s ? !1 !== o : !0 === o, e) : i < u && !s && rd(r, n, !0 === o, e)
    }

    function id(e, t, n, r) { od(e, t, e.dom.defaultView.innerHeight, n, r) }

    function ad(e, t, n, r) {
        od(e, t, e.dom.defaultView.innerHeight, n, r);
        var o, i, a, u, s, c, l, f = (o = n.element, u = Gt(Et.fromDom(document)), a = (i = Ud).owner(o), s = Fd(i, a), c = jn(o), l = B(s, function(e, t) { var n = jn(t); return { left: e.left + n.left, top: e.top + n.top } }, { left: 0, top: 0 }), zn(l.left + c.left + u.left, l.top + c.top + u.top)),
            d = en(window);
        f.top < d.y ? Qt(n.element, !1 !== r) : f.top > d.bottom && Qt(n.element, !0 === r)
    }

    function ud(e, t, n) { return ed(e, id, t, n) }

    function sd(e, t, n) { return nd(e, t, id, n) }

    function cd(e, t, n) { return ed(e, ad, t, n) }

    function ld(e, t, n) { return nd(e, t, ad, n) }

    function fd(e, t, n) {
        (e.inline ? ud : cd)(e, t, n)
    }

    function dd(e) { var t = Ln(e).dom; return e.dom === t.activeElement }

    function md(e) { return void 0 === e && (e = Et.fromDom(document)), he.from(e.dom.activeElement).map(Et.fromDom) }

    function gd(e, t) { var n = Tn(t) ? Wl(t).length : On(t).length + 1; return n < e ? n : e < 0 ? 0 : e }

    function pd(e) { return $d.range(e.start, gd(e.soffset, e.start), e.finish, gd(e.foffset, e.finish)) }

    function hd(e, t) { return !nn(t.dom) && (He(e, t) || je(e, t)) }

    function vd(t) { return function(e) { return hd(t, e.start) && hd(t, e.finish) } }

    function bd(e) { return !0 === e.inline || Wd.isIE() }

    function yd(e) { return $d.range(Et.fromDom(e.startContainer), e.startOffset, Et.fromDom(e.endContainer), e.endOffset) }

    function Cd(e) { var t = document.createRange(); try { return t.setStart(e.start.dom, e.soffset), t.setEnd(e.finish.dom, e.foffset), he.some(t) } catch (e) { return he.none() } }

    function wd(e) {
        var t, n, r = bd(e) ? (t = Et.fromDom(e.getBody()), ((n = Rt(t).dom.getSelection()) && 0 !== n.rangeCount ? he.from(n.getRangeAt(0)) : he.none()).map(yd).filter(vd(t))) : he.none();
        e.bookmark = r.isSome() ? r : e.bookmark
    }

    function xd(n) { return (n.bookmark || he.none()).bind(function(e) { return t = Et.fromDom(n.getBody()), he.from(e).filter(vd(t)).map(pd); var t }).bind(Cd) }

    function Sd(u) {
        var s = xu(function() { wd(u) }, 0);
        u.on("init", function() {
            function e() { n.throttle() }
            var t, n, r, o, i, a;
            u.inline && (t = u, n = s, cu.DOM.bind(document, "mouseup", e), t.on("remove", function() { cu.DOM.unbind(document, "mouseup", e) })), r = u, o = s, ft().browser.isIE() ? (a = r).on("focusout", function() { wd(a) }) : (i = o, r.on("mouseup touchend", function(e) { i.throttle() })), r.on("keyup NodeChange", function(e) { "nodechange" === e.type && e.selectionChange || wd(r) })
        }), u.on("remove", function() { s.cancel() })
    }

    function Ed(t, e) { var n = t.getParam("custom_ui_selector", "", "string"); return null !== Xd.getParent(e, function(e) { return Kd.isEditorUIElement(e) || !!n && t.dom.is(e, n) }) }

    function Nd(n, e) {
        var t = e.editor;
        Sd(t), t.on("focusin", function() {
            var e = n.focusedEditor;
            e !== t && (e && e.fire("blur", { focusedEditor: t }), n.setActive(t), (n.focusedEditor = t).fire("focus", { blurredEditor: e }), t.focus(!0))
        }), t.on("focusout", function() {
            Ur.setEditorTimeout(t, function() {
                var e = n.focusedEditor;
                Ed(t, function(e) { try { return md(Ln(Et.fromDom(e.getElement()))).fold(function() { return document.body }, function(e) { return e.dom }) } catch (e) { return document.body } }(t)) || e !== t || (t.fire("blur", { focusedEditor: null }), n.focusedEditor = null)
            })
        }), Md || (Md = function(e) {
            var t = n.activeEditor;
            t && ! function(e) { if (Pn() && V(e.target)) { var t = Et.fromDom(e.target); if (An(t) && V(t.dom.shadowRoot) && e.composed && e.composedPath) { var n = e.composedPath(); if (n) return W(n) } } return he.from(e.target) }(e).each(function(e) { e.ownerDocument === document && (e === document.body || Ed(t, e) || n.focusedEditor !== t || (t.fire("blur", { focusedEditor: null }), n.focusedEditor = null)) })
        }, Xd.bind(document, "focusin", Md))
    }

    function kd(e, t) { e.focusedEditor === t.editor && (e.focusedEditor = null), e.activeEditor || (Xd.unbind(document, "focusin", Md), Md = null) }

    function _d(t, e) {
        var n, r;
        n = Et.fromDom(t.getBody()), ((r = e).collapsed ? he.from($u(r.startContainer, r.startOffset)).map(Et.fromDom) : he.none()).bind(function(e) { return _o(e) ? he.some(e) : !1 === He(n, e) ? he.some(n) : he.none() }).bind(function(e) { return mf(e.dom) }).fold(function() { t.selection.normalize() }, function(e) { return t.selection.setRng(e.toRange()) })
    }

    function Ad(t) { if (t.setActive) try { t.setActive() } catch (e) { t.focus() } else t.focus() }

    function Td(e) { return e.inline ? (r = e.getBody()) && (dd(t = Et.fromDom(r)) || md(Ln(n = t)).filter(function(e) { return n.dom.contains(e.dom) }).isSome()) : e.iframeElement && dd(Et.fromDom(e.iframeElement)); var t, n, r }

    function Rd(e, t, n, r, o) {
        var i = n ? t.startContainer : t.endContainer,
            a = n ? t.startOffset : t.endOffset;
        return he.from(i).map(Et.fromDom).map(function(e) { return r && t.collapsed ? e : It(e, o(e, a)).getOr(e) }).bind(function(e) { return An(e) ? he.some(e) : Dt(e).filter(An) }).map(function(e) { return e.dom }).getOr(e)
    }

    function Dd(e, t, n) { return Rd(e, t, !0, n, function(e, t) { return Math.min(Ut(e), t) }) }

    function Od(e, t, n) { return Rd(e, t, !1, n, function(e, t) { return 0 < t ? t - 1 : t }) }

    function Bd(e, t) { for (var n = e; e && qn(e) && 0 === e.length;) e = t ? e.nextSibling : e.previousSibling; return e || n }

    function Pd(n, e) { return R(e, function(e) { var t = n.fire("GetSelectionRange", { range: e }); return t.range !== e ? t.range : e }) }

    function Ld(e, t, n) {
        var r = n ? "lastChild" : "firstChild",
            o = n ? "prev" : "next";
        if (e[r]) return e[r];
        if (e !== t) {
            var i = e[o];
            if (i) return i;
            for (var a = e.parent; a && a !== t; a = a.parent)
                if (i = a[o]) return i
        }
    }

    function Id(e) { var t = "a" === e.name && !e.attr("href") && e.attr("id"); return e.attr("name") || e.attr("id") && !e.firstChild || e.attr("data-mce-bookmark") || t }
    var Md, Fd = function(r, e) {
            return r.view(e).fold(J([]), function(e) {
                var t = r.owner(e),
                    n = Fd(r, t);
                return [e].concat(n)
            })
        },
        Ud = Object.freeze({ __proto__: null, view: function(e) { var t; return (e.dom === document ? he.none() : he.from(null === (t = e.dom.defaultView) || void 0 === t ? void 0 : t.frameElement)).map(Et.fromDom) }, owner: Tt }),
        zd = function(e, t, n, r) {
            var o = Et.fromDom(e.getBody()),
                i = Et.fromDom(e.getDoc());
            o.dom.offsetWidth;
            var a, u, s, c, l = (a = Et.fromDom(n.startContainer), u = n.startOffset, s = function(e, t) { var n = On(e); if (0 === n.length || Qf(e)) return { element: e, offset: t }; if (t < n.length && !Qf(n[t])) return { element: n[t], offset: 0 }; var r = n[n.length - 1]; return Qf(r) ? { element: e, offset: t } : "img" === Nt(r) ? { element: r, offset: 1 } : Tn(r) ? { element: r, offset: Wl(r).length } : { element: r, offset: On(r).length } }(a, u), c = Et.fromHtml('<span data-mce-bogus="all">\ufeff</span>'), Vt(s.element, c), Zf(c, function() { return Mn(c) }));
            td(e, i, t, l, r), l.cleanup()
        },
        jd = function(e, t, n) {
            var r = n.startContainer,
                o = n.startOffset,
                i = n.endContainer,
                a = n.endOffset;
            t(Et.fromDom(r), Et.fromDom(i));
            var u = e.dom.createRng();
            u.setStart(r, o), u.setEnd(i, a), e.selection.setRng(n)
        },
        Hd = ar([{ before: ["element"] }, { on: ["element", "offset"] }, { after: ["element"] }]),
        Vd = (Hd.before, Hd.on, Hd.after, function(e) { return e.fold(u, u, u) }),
        qd = ar([{ domRange: ["rng"] }, { relative: ["startSitu", "finishSitu"] }, { exact: ["start", "soffset", "finish", "foffset"] }]),
        $d = { domRange: qd.domRange, relative: qd.relative, exact: qd.exact, exactFromRange: function(e) { return qd.exact(e.start, e.soffset, e.finish, e.foffset) }, getWin: function(e) { return Rt(e.match({ domRange: function(e) { return Et.fromDom(e.startContainer) }, relative: function(e, t) { return Vd(e) }, exact: function(e, t, n, r) { return e } })) }, range: function(e, t, n, r) { return { start: e, soffset: t, finish: n, foffset: r } } },
        Wd = ft().browser,
        Kd = { isEditorUIElement: function(e) { var t = e.className.toString(); return -1 !== t.indexOf("tox-") || -1 !== t.indexOf("mce-") } },
        Xd = cu.DOM,
        Yd = function(e) { return e.editorManager.setActive(e) },
        Gd = { "#text": 3, "#comment": 8, "#cdata": 4, "#pi": 7, "#doctype": 10, "#document-fragment": 11 },
        Jd = (Qd.create = function(e, t) { var n = new Qd(e, Gd[e] || 1); return t && Q(t, function(e, t) { n.attr(t, e) }), n }, Qd.prototype.replace = function(e) { return e.parent && e.remove(), this.insert(e, this), this.remove(), this }, Qd.prototype.attr = function(e, t) {
            var n, r = this;
            if ("string" != typeof e) return null != e && Q(e, function(e, t) { r.attr(t, e) }), r;
            if (n = r.attributes) {
                if (void 0 === t) return n.map[e];
                if (null === t) {
                    if (e in n.map) {
                        delete n.map[e];
                        for (var o = n.length; o--;)
                            if (n[o].name === e) return n.splice(o, 1), r
                    }
                    return r
                }
                if (e in n.map) {
                    for (o = n.length; o--;)
                        if (n[o].name === e) { n[o].value = t; break }
                } else n.push({ name: e, value: t });
                return n.map[e] = t, r
            }
        }, Qd.prototype.clone = function() {
            var e, t = new Qd(this.name, this.type);
            if (e = this.attributes) {
                var n = [];
                n.map = {};
                for (var r = 0, o = e.length; r < o; r++) { var i = e[r]; "id" !== i.name && (n[n.length] = { name: i.name, value: i.value }, n.map[i.name] = i.value) }
                t.attributes = n
            }
            return t.value = this.value, t.shortEnded = this.shortEnded, t
        }, Qd.prototype.wrap = function(e) { return this.parent.insert(e, this), e.append(this), this }, Qd.prototype.unwrap = function() {
            for (var e = this.firstChild; e;) {
                var t = e.next;
                this.insert(e, this, !0), e = t
            }
            this.remove()
        }, Qd.prototype.remove = function() {
            var e = this.parent,
                t = this.next,
                n = this.prev;
            return e && (e.firstChild === this ? (e.firstChild = t) && (t.prev = null) : n.next = t, e.lastChild === this ? (e.lastChild = n) && (n.next = null) : t.prev = n, this.parent = this.next = this.prev = null), this
        }, Qd.prototype.append = function(e) { e.parent && e.remove(); var t = this.lastChild; return t ? ((t.next = e).prev = t, this.lastChild = e) : this.lastChild = this.firstChild = e, e.parent = this, e }, Qd.prototype.insert = function(e, t, n) { e.parent && e.remove(); var r = t.parent || this; return n ? (t === r.firstChild ? r.firstChild = e : t.prev.next = e, e.prev = t.prev, (e.next = t).prev = e) : (t === r.lastChild ? r.lastChild = e : t.next.prev = e, e.next = t.next, (e.prev = t).next = e), e.parent = r, e }, Qd.prototype.getAll = function(e) { for (var t = [], n = this.firstChild; n; n = Ld(n, this)) n.name === e && t.push(n); return t }, Qd.prototype.children = function() { for (var e = [], t = this.firstChild; t; t = t.next) e.push(t); return e }, Qd.prototype.empty = function() { if (this.firstChild) { for (var e = [], t = this.firstChild; t; t = Ld(t, this)) e.push(t); for (var n = e.length; n--;)(t = e[n]).parent = t.firstChild = t.lastChild = t.next = t.prev = null } return this.firstChild = this.lastChild = null, this }, Qd.prototype.isEmpty = function(e, t, n) {
            void 0 === t && (t = {});
            var r = this.firstChild;
            if (Id(this)) return !1;
            if (r)
                do { if (1 === r.type) { if (r.attr("data-mce-bogus")) continue; if (e[r.name]) return !1; if (Id(r)) return !1 } if (8 === r.type) return !1; if (3 === r.type && ! function(e) { if (no(e.value)) { var t = e.parent; return !t || "span" === t.name && !t.attr("style") || !/^[ ]+$/.test(e.value) } }(r)) return !1; if (3 === r.type && r.parent && t[r.parent.name] && no(r.value)) return !1; if (n && n(r)) return !1 } while (r = Ld(r, this));
            return !0
        }, Qd.prototype.walk = function(e) { return Ld(this, null, e) }, Qd);

    function Qd(e, t) { this.name = e, 1 === (this.type = t) && (this.attributes = [], this.attributes.map = {}) }

    function Zd(e, t) { return e.replace(t.re, function(e) { return ae(t.uris, e).getOr(e) }) }

    function em(e, t, n) {
        for (var r = /<([!?\/])?([A-Za-z0-9\-_:.]+)/g, o = /(?:\s(?:[^'">]+(?:"[^"]*"|'[^']*'))*[^"'>]*(?:"[^">]*|'[^'>]*)?|\s*|\/)>/g, i = e.getShortEndedElements(), a = 1, u = n; 0 !== a;)
            for (r.lastIndex = u;;) {
                var s = r.exec(t);
                if (null === s) return u;
                if ("!" === s[1]) { u = Ye(s[2], "--") ? om(t, !1, s.index + "!--".length) : om(t, !0, s.index + 1); break }
                o.lastIndex = r.lastIndex;
                var c = o.exec(t);
                if (!l(c) && c.index === r.lastIndex) { "/" === s[1] ? --a : Ee(i, s[2]) || (a += 1), u = r.lastIndex + c[0].length; break }
            }
        return u
    }

    function tm(W, K) {
        var e;
        void 0 === K && (K = go());
        var X = null !== (e = (W = W || {}).document) && void 0 !== e ? e : document,
            Y = X.createElement("form");

        function n(m, e) {
            void 0 === e && (e = "html");
            for (var t, i, n, g, r, o, a, p, u, s, c, l, f, h, v, d, b, y, C, w = m.html, x = 0, S = [], E = 0, N = si.decode, k = St.makeMap("src,href,data,background,action,formaction,poster,xlink:href"), _ = /((java|vb)script|mhtml):/i, A = "html" === e ? 0 : 1, T = function(e) {
                    for (var t, n = S.length; n-- && S[n].name !== e;);
                    if (0 <= n) {
                        for (t = S.length - 1; n <= t; t--)(e = S[t]).valid && ee(e.name);
                        S.length = n
                    }
                }, R = function(e, t) { return Q(Zd(e, m), t) }, D = function(e) { "" !== e && (">" === e.charAt(0) && (e = " " + e), W.allow_conditional_comments || "[if" !== e.substr(0, 3).toLowerCase() || (e = " " + e), G(Zd(e, m))) }, O = function(e, t) {
                    var n = e || "",
                        r = !Ye(n, "--"),
                        o = om(w, r, t);
                    return e = w.substr(t, o - t), D(r ? n + e : e), o + 1
                }, B = function(e, t, n, r, o) {
                    var i, a, u, s, c, l, f;
                    if (n = Zd((t = t.toLowerCase()) in F ? t : N(n || r || o || ""), m), U && !p && 0 == (0 === (u = t).indexOf("data-") || 0 === u.indexOf("aria-"))) { if (!(i = h[t]) && v) { for (a = v.length; a-- && !(i = v[a]).pattern.test(t);); - 1 === a && (i = null) } if (!i) return; if (i.validValues && !(n in i.validValues)) return }
                    if ("name" !== t && "id" !== t || !(e in rm) || !(n in X || n in Y)) {
                        if (k[t] && !W.allow_script_urls) { var d = n.replace(/[\s\u0000-\u001F]+/g, ""); try { d = decodeURIComponent(d) } catch (e) { d = unescape(d) } if (_.test(d)) return; if (c = d, l = e, !(s = W).allow_html_data_urls && (/^data:image\//i.test(c) ? !(re(f = s.allow_svg_data_urls) ? ie(nm, l) : f) && /^data:image\/svg\+xml/i.test(c) : /^data:/i.test(c))) return }
                        p && (t in k || 0 === t.indexOf("on")) || (g.map[t] = n, g.push({ name: t, value: n }))
                    }
                }, P = new RegExp("<(?:(?:!--([\\w\\W]*?)--!?>)|(?:!\\[CDATA\\[([\\w\\W]*?)\\]\\]>)|(?:![Dd][Oo][Cc][Tt][Yy][Pp][Ee]([\\w\\W]*?)>)|(?:!(--)?)|(?:\\?([^\\s\\/<>]+) ?([\\w\\W]*?)[?/]>)|(?:\\/([A-Za-z][A-Za-z0-9\\-_\\:\\.]*)>)|(?:([A-Za-z][A-Za-z0-9\\-_:.]*)(\\s(?:[^'\">]+(?:\"[^\"]*\"|'[^']*'))*[^\"'>]*(?:\"[^\">]*|'[^'>]*)?|\\s*|\\/)>))", "g"), L = /([\w:\-]+)(?:\s*=\s*(?:(?:\"((?:[^\"])*)\")|(?:\'((?:[^\'])*)\')|([^>\s]+)))?/g, I = K.getShortEndedElements(), M = W.self_closing_elements || K.getSelfClosingElements(), F = K.getBoolAttrs(), U = W.validate, z = W.remove_internals, j = W.fix_self_closing, H = K.getSpecialElements(), V = w + ">"; t = P.exec(V);) {
                var q = t[0];
                if (x < t.index && R(N(w.substr(x, t.index - x))), i = t[7]) T(i = ":" === (i = i.toLowerCase()).charAt(0) ? i.substr(1) : i);
                else if (i = t[8]) {
                    if (t.index + q.length > w.length) { R(N(w.substr(t.index))), x = t.index + q.length; continue }
                    u = (i = ":" === (i = i.toLowerCase()).charAt(0) ? i.substr(1) : i) in I, j && M[i] && 0 < S.length && S[S.length - 1].name === i && T(i);
                    var $ = function(e, t) {
                        var n = e.exec(t);
                        if (n) {
                            var r = n[1],
                                o = n[2];
                            return "string" == typeof r && "data-mce-bogus" === r.toLowerCase() ? o : null
                        }
                        return null
                    }(L, t[9]);
                    if (null !== $) {
                        if ("all" === $) { x = em(K, w, P.lastIndex), P.lastIndex = x; continue }
                        c = !1
                    }
                    if (!U || (s = K.getElementRule(i))) {
                        if (c = !0, U && (h = s.attributes, v = s.attributePatterns), (f = t[9]) ? ((p = -1 !== f.indexOf("data-mce-type")) && z && (c = !1), (g = []).map = {}, f.replace(L, function(e, t, n, r, o) { return B(i, t, n, r, o), "" })) : (g = []).map = {}, U && !p) {
                            if (d = s.attributesRequired, b = s.attributesDefault, y = s.attributesForced, s.removeEmptyAttrs && !g.length && (c = !1), y)
                                for (r = y.length; r--;) a = (l = y[r]).name, "{$uid}" === (C = l.value) && (C = "mce_" + E++), g.map[a] = C, g.push({ name: a, value: C });
                            if (b)
                                for (r = b.length; r--;)(a = (l = b[r]).name) in g.map || ("{$uid}" === (C = l.value) && (C = "mce_" + E++), g.map[a] = C, g.push({ name: a, value: C }));
                            if (d) { for (r = d.length; r-- && !(d[r] in g.map);); - 1 === r && (c = !1) }
                            if (l = g.map["data-mce-bogus"]) {
                                if ("all" === l) { x = em(K, w, P.lastIndex), P.lastIndex = x; continue }
                                c = !1
                            }
                        }
                        c && Z(i, g, u)
                    } else c = !1;
                    if (n = H[i]) { n.lastIndex = x = t.index + q.length, x = (t = n.exec(w)) ? (c && (o = w.substr(x, t.index - x)), t.index + t[0].length) : (o = w.substr(x), w.length), c && (0 < o.length && R(o, !0), ee(i)), P.lastIndex = x; continue }
                    u || (f && f.indexOf("/") === f.length - 1 ? c && ee(i) : S.push({ name: i, valid: c }))
                } else if (i = t[1]) D(i);
                else if (i = t[2]) {
                    if (!(1 == A || W.preserve_cdata || 0 < S.length && K.isValidChild(S[S.length - 1].name, "#cdata"))) { x = O("", t.index + 2), P.lastIndex = x; continue }
                    J(i)
                } else if (i = t[3]) ne(i);
                else {
                    if ((i = t[4]) || "<!" === q) { x = O(i, t.index + q.length), P.lastIndex = x; continue }
                    if (i = t[5]) {
                        if (1 != A) { x = O("?", t.index + 2), P.lastIndex = x; continue }
                        te(i, t[6])
                    }
                }
                x = t.index + q.length
            }
            for (x < w.length && R(N(w.substr(x))), r = S.length - 1; 0 <= r; r--)(i = S[r]).valid && ee(i.name)
        }!1 !== W.fix_self_closing && (W.fix_self_closing = !0);
        var G = W.comment || oe,
            J = W.cdata || oe,
            Q = W.text || oe,
            Z = W.start || oe,
            ee = W.end || oe,
            te = W.pi || oe,
            ne = W.doctype || oe;
        return {
            parse: function(e, t) {
                void 0 === t && (t = "html"), n(function(e) {
                    for (var t, n = /data:[^;]+;base64,([a-z0-9\+\/=\s]+)/gi, r = [], o = {}, i = Du("img"), a = 0, u = 0; t = n.exec(e);) {
                        var s = t[0],
                            c = i + "_" + u++;
                        o[c] = s, a < t.index && r.push(e.substr(a, t.index - a)), r.push(c), a = t.index + s.length
                    }
                    var l = new RegExp(i + "_[0-9]+", "g");
                    return 0 === a ? { prefix: i, uris: o, html: e, re: l } : (a < e.length && r.push(e.substr(a)), { prefix: i, uris: o, html: r.join(""), re: l })
                }(e), t)
            }
        }
    }
    var nm = ["img", "video"],
        rm = St.makeMap("button,fieldset,form,iframe,img,image,input,object,output,select,textarea"),
        om = function(e, t, n) {
            void 0 === n && (n = 0);
            var r = e.toLowerCase();
            if (-1 !== r.indexOf("[if ", n) && (u = n, /^\s*\[if [\w\W]+\]>.*<!\[endif\](--!?)?>/.test(r.substr(u)))) { var o = r.indexOf("[endif]", n); return r.indexOf(">", o) }
            if (t) { var i = r.indexOf(">", n); return -1 !== i ? i : r.length }
            var a = /--!?>/g;
            a.lastIndex = n;
            var u, s = a.exec(e);
            return s ? s.index + s[0].length : r.length
        };

    function im(e, t) {
        for (var n, r, o, i, a = /<(\w+) [^>]*data-mce-bogus="all"[^>]*>/g, u = e.schema, s = (n = e.getTempAttrs(), r = t, o = new RegExp(["\\s?(" + n.join("|") + ')="[^"]+"'].join("|"), "gi"), r.replace(o, "")), c = u.getShortEndedElements(); i = a.exec(s);) {
            var l = a.lastIndex,
                f = i[0].length,
                d = c[i[1]] ? l : tm.findEndTag(u, s, l),
                s = s.substring(0, l - f) + s.substring(d);
            a.lastIndex = l - f
        }
        return Po(s)
    }

    function am(o) {
        return {
            compare: function(e, t) {
                return e.nodeName === t.nodeName && !(!r(n(e), n(t)) || !r(o.parseStyle(o.getAttrib(e, "style")), o.parseStyle(o.getAttrib(t, "style"))) || ul(e) || ul(t));

                function n(n) {
                    var r = {};
                    return lm(o.getAttribs(n), function(e) {
                        var t = e.nodeName.toLowerCase();
                        0 !== t.indexOf("_") && "style" !== t && 0 !== t.indexOf("data-") && (r[t] = o.getAttrib(n, t))
                    }), r
                }

                function r(e, t) {
                    var n, r;
                    for (r in e)
                        if (Ee(e, r)) {
                            if (void 0 === (n = t[r])) return;
                            if (e[r] !== n) return;
                            delete t[r]
                        }
                    for (r in t)
                        if (Ee(t, r)) return;
                    return 1
                }
            }
        }
    }

    function um(e) {
        var u = [],
            s = (e = e || {}).indent,
            c = fm(e.indent_before || ""),
            l = fm(e.indent_after || ""),
            f = si.getEncodeFunc(e.entity_encoding || "raw", e.entities),
            d = "html" === e.element_format;
        return {
            start: function(e, t, n) {
                var r, o, i, a;
                if (s && c[e] && 0 < u.length && 0 < (a = u[u.length - 1]).length && "\n" !== a && u.push("\n"), u.push("<", e), t)
                    for (r = 0, o = t.length; r < o; r++) i = t[r], u.push(" ", i.name, '="', f(i.value, !0), '"');
                u[u.length] = !n || d ? ">" : " />", n && s && l[e] && 0 < u.length && 0 < (a = u[u.length - 1]).length && "\n" !== a && u.push("\n")
            },
            end: function(e) {
                var t;
                u.push("</", e, ">"), s && l[e] && 0 < u.length && 0 < (t = u[u.length - 1]).length && "\n" !== t && u.push("\n")
            },
            text: function(e, t) { 0 < e.length && (u[u.length] = t ? e : f(e)) },
            cdata: function(e) { u.push("<![CDATA[", e, "]]>") },
            comment: function(e) { u.push("\x3c!--", e, "--\x3e") },
            pi: function(e, t) { t ? u.push("<?", e, " ", f(t), "?>") : u.push("<?", e, "?>"), s && u.push("\n") },
            doctype: function(e) { u.push("<!DOCTYPE", e, ">", s ? "\n" : "") },
            reset: function() { u.length = 0 },
            getContent: function() { return u.join("").replace(/\n$/, "") }
        }
    }

    function sm(t, g) {
        void 0 === g && (g = go());
        var p = um(t);
        return (t = t || {}).validate = !("validate" in t) || t.validate, {
            serialize: function(e) {
                var f = t.validate,
                    d = {
                        3: function(e) { p.text(e.value, e.raw) },
                        8: function(e) { p.comment(e.value) },
                        7: function(e) { p.pi(e.name, e.value) },
                        10: function(e) { p.doctype(e.value) },
                        4: function(e) { p.cdata(e.value) },
                        11: function(e) {
                            if (e = e.firstChild)
                                for (; m(e), e = e.next;);
                        }
                    };
                p.reset();
                var m = function(e) {
                    var t = d[e.type];
                    if (t) t(e);
                    else {
                        var n = e.name,
                            r = e.shortEnded,
                            o = e.attributes;
                        if (f && o && 1 < o.length) {
                            var i = [];
                            i.map = {};
                            var a = g.getElementRule(e.name);
                            if (a) {
                                for (var u = 0, s = a.attributesOrder.length; u < s; u++)(c = a.attributesOrder[u]) in o.map && (l = o.map[c], i.map[c] = l, i.push({ name: c, value: l }));
                                for (var c, l, u = 0, s = o.length; u < s; u++)(c = o[u].name) in i.map || (l = o.map[c], i.map[c] = l, i.push({ name: c, value: l }));
                                o = i
                            }
                        }
                        if (p.start(e.name, o, r), !r) {
                            if (e = e.firstChild)
                                for (; m(e), e = e.next;);
                            p.end(n)
                        }
                    }
                };
                return 1 !== e.type || t.inner ? d[11](e) : m(e), p.getContent()
            }
        }
    }
    tm.findEndTag = em;
    var cm = im,
        lm = St.each,
        fm = St.makeMap,
        dm = new Set;

    function mm(e, t) { return we(e.parseStyle(e.getAttrib(t, "style"))) }

    function gm(n, r, o) { return he.from(o.container()).filter(qn).exists(function(e) { var t = n ? 0 : -1; return r(e.data.charAt(o.offset() + t)) }) }

    function pm(e) { var t = e.container(); return qn(t) && (0 === t.data.length || Bo(t.data) && Gl.isBookmarkNode(t.parentNode)) }

    function hm(t, n) { return function(e) { return he.from(sc(t ? 0 : -1, e)).filter(n).isSome() } }

    function vm(e) { return Yn(e) && "block" === Cn(Et.fromDom(e), "display") }

    function bm(e) { return Jn(e) && !(Hn(t = e) && "all" === t.getAttribute("data-mce-bogus")); var t }

    function ym(e) { Kt(e), In(e, Et.fromHtml('<br data-mce-bogus="1">')) }

    function Cm(n) { Ft(n).each(function(t) { Ot(t).each(function(e) { So(n) && $r(t) && So(e) && Mn(t) }) }) }

    function wm(e, t) {
        return o = T, He(r = t, n = e) ? function(e, t) {
            for (var n = y(t) ? t : T, r = e.dom, o = []; null !== r.parentNode && void 0 !== r.parentNode;) {
                var i = r.parentNode,
                    a = Et.fromDom(i);
                if (o.push(a), !0 === n(a)) break;
                r = i
            }
            return o
        }(n, function(e) { return o(e) || je(e, r) }).slice(0, -1) : [];
        var n, r, o
    }

    function xm(e, t) { return [e].concat(wm(e, t)) }

    function Sm(e, t, n) { return lf(e, t, n, pm) }

    function Em(e, t) { return I(xm(Et.fromDom(t.container()), e), So) }

    function Nm(e, n, r) { return Sm(e, n.dom, r).forall(function(t) { return Em(n, r).fold(function() { return !1 === uc(t, r, n.dom) }, function(e) { return !1 === uc(t, r, n.dom) && He(e, Et.fromDom(t.container())) }) }) }

    function km(t, n, r) { return Em(n, r).fold(function() { return Sm(t, n.dom, r).forall(function(e) { return !1 === uc(e, r, n.dom) }) }, function(e) { return Sm(t, e.dom, r).isNone() }) }

    function _m(e) { return gc(e).exists($r) }

    function Am(e, t, n) { var r = W(U(xm(Et.fromDom(n.container()), t), So)).getOr(t); return cf(e, r.dom, n).filter(_m) }

    function Tm(e, t) { return gc(t).exists($r) || Am(!0, e, t).isSome() }

    function Rm(e, t) { return he.from(t.getNode(!0)).map(Et.fromDom).exists($r) || Am(!1, e, t).isSome() }

    function Dm(e) { return bs.isTextPosition(e) && !e.isAtStart() && !e.isAtEnd() }

    function Om(e, t) { return W(U(xm(Et.fromDom(t.container()), e), So)).getOr(e) }

    function Bm(e, t) { return Dm(t) ? Zg(t) : Zg(t) || df(Om(e, t).dom, t).exists(Zg) }

    function Pm(e, t) { return Dm(t) ? Qg(t) : Qg(t) || ff(Om(e, t).dom, t).exists(Qg) }

    function Lm(e) { return gc(e).bind(function(e) { return vr(e, An) }).exists(function(e) { return ie(["pre", "pre-wrap"], Cn(e, "white-space")) }) }

    function Im(e, t) { return !Lm(t) && (sp(e, t) || lp(e, t) || Rm(e, t) || Bm(e, t)) }

    function Mm(e, t) { return !Lm(t) && (cp(e, t) || fp(e, t) || Tm(e, t) || Pm(e, t)) }

    function Fm(e, t) { return Im(e, t) || Mm(e, (r = (n = t).container(), o = n.offset(), qn(r) && o < r.data.length ? bs(r, o + 1) : n)); var n, r, o }

    function Um(e, t) { return vf(e.charAt(t)) }

    function zm(e) { var t = e.container(); return qn(t) && Re(t.data, Do) }

    function jm(g, e) {
        return he.some(e).filter(zm).bind(function(e) {
            var t, n, r, o, i, a, u, s, c, l = e.container(),
                f = g,
                d = (i = l).data,
                m = bs(i, 0);
            return (!Um(d, 0) || Fm(f, m) ? (s = (a = l).data, (c = R(u = s.split(""), function(e, t) { return vf(e) && 0 < t && t < u.length - 1 && cl(u[t - 1]) && cl(u[t + 1]) ? " " : e }).join("")) !== s && (a.data = c, 1)) : (i.data = " " + d.slice(1), 1)) || (t = g, r = (n = l).data, o = bs(n, r.length - 1), Um(r, r.length - 1) && !Fm(t, o) && (n.data = r.slice(0, -1) + " ", 1)) ? he.some(e) : he.none()
        })
    }

    function Hm(t) {
        var e = Et.fromDom(t.getBody());
        t.selection.isCollapsed() && jm(e, bs.fromRangeStart(t.selection.getRng())).each(function(e) { t.selection.setRng(e.toRange()) })
    }

    function Vm(e, t, n) {
        var r, o, i, a, u, s, c, l;
        0 !== n && (o = hr(r = Et.fromDom(e), So).getOr(r), i = e.data.slice(t, t + n), a = t + n >= e.data.length && Mm(o, bs(e, e.data.length)), u = 0 === t && Im(o, bs(e, 0)), e.replaceData(t, n, (c = u, l = a, P(s = i, function(e, t) { return sl(t) || vf(t) ? e.previousCharIsSpace || "" === e.str && c || e.str.length === s.length - 1 && l ? { previousCharIsSpace: !1, str: e.str + Do } : { previousCharIsSpace: !0, str: e.str + " " } : { previousCharIsSpace: !1, str: e.str + t } }, { previousCharIsSpace: !1, str: "" }).str)))
    }

    function qm(e, t) {
        var n = e.data.slice(t);
        Vm(e, t, n.length - Je(n).length)
    }

    function $m(e, t) {
        var n = e.data.slice(0, t),
            r = n.length - Qe(n).length;
        Vm(e, t - r, r)
    }

    function Wm(e, t, n, r) {
        void 0 === r && (r = !0);
        var o = Qe(e.data).length,
            i = r ? e : t,
            a = r ? t : e;
        return r ? i.appendData(a.data) : i.insertData(0, a.data), Mn(Et.fromDom(a)), n && qm(i, o), i
    }

    function Km(e, t) { return r = e, o = (n = t).container(), i = n.offset(), !1 === bs.isTextPosition(n) && o === r.parentNode && i > bs.before(r).offset() ? bs(t.container(), t.offset() - 1) : t; var n, r, o, i }

    function Xm(e) { return eo(e.previousSibling) ? he.some((t = e.previousSibling, qn(t) ? bs(t, t.data.length) : bs.after(t))) : e.previousSibling ? gf(e.previousSibling) : he.none(); var t }

    function Ym(e) { return eo(e.nextSibling) ? he.some((t = e.nextSibling, qn(t) ? bs(t, 0) : bs.before(t))) : e.nextSibling ? mf(e.nextSibling) : he.none(); var t }

    function Gm(r, o) { return Xm(o).orThunk(function() { return Ym(o) }).orThunk(function() { return e = r, n = bs.before((t = o).previousSibling || t.parentNode), df(e, n).fold(function() { return ff(e, bs.after(t)) }, he.some); var e, t, n }) }

    function Jm(n, r) { return Ym(r).orThunk(function() { return Xm(r) }).orThunk(function() { return ff(e = n, bs.after(t = r)).fold(function() { return df(e, bs.before(t)) }, he.some); var e, t }) }

    function Qm(t, n, e) { e.fold(function() { t.focus() }, function(e) { t.selection.setRng(e.toRange(), n) }) }

    function Zm(e, t) { return t && Ee(e.schema.getBlockElements(), Nt(t)) }

    function eg(e) { if (oo(e)) { var t = Et.fromHtml('<br data-mce-bogus="1">'); return Kt(e), In(e, t), he.some(bs.before(t.dom)) } return he.none() }

    function tg(t, n, e, r) {
        void 0 === r && (r = !0);
        var o, i, a, u, s, c, l, f, d, m, g, p, h, v, b = (p = n, h = t.getBody(), v = e.dom, (p ? Jm : Gm)(h, v).map(A(Km, v))),
            y = hr(e, A(Zm, t), (o = t.getBody(), function(e) { return e.dom === o })),
            C = (u = b, i = a = e, s = Ee(t.schema.getTextInlineElements(), Nt(i)), m = Ot(a).filter(Tn), g = Bt(a).filter(Tn), Mn(a), l = g, f = u, d = function(e, t, n) {
                var r = e.dom,
                    o = t.dom,
                    i = r.data.length;
                return Wm(r, o, s), n.container() === o ? bs(r, i) : n
            }, ((c = m).isSome() && l.isSome() && f.isSome() ? he.some(d(c.getOrDie(), l.getOrDie(), f.getOrDie())) : he.none()).orThunk(function() { return s && (m.each(function(e) { return $m(e.dom, e.dom.length) }), g.each(function(e) { return qm(e.dom, 0) })), u }));
        t.dom.isEmpty(t.getBody()) ? (t.setContent(""), t.selection.setCursorLocation()) : y.bind(eg).fold(function() { r && Qm(t, n, C) }, function(e) { r && Qm(t, n, he.some(e)) })
    }

    function ng(e) { return Au(e, "td,th") }

    function rg(e, t) { return { start: e, end: t } }

    function og(e, t) { return Cr(Et.fromDom(e), "td,th", t) }

    function ig(e) { return !je(e.start, e.end) }

    function ag(e, n) { return zl(e.start, n).bind(function(t) { return zl(e.end, n).bind(function(e) { return je(t, e) ? he.some(t) : he.none() }) }) }

    function ug(e) { return function(t) { return ag(t, e).map(function(e) { return { rng: t, table: e, cells: ng(e) } }) } }

    function sg(e, t, n, r) {
        if (n.collapsed || !e.forall(ig)) return he.none();
        if (t.isSameTable) { var o = e.bind(ug(r)); return he.some({ start: o, end: o }) }
        var i, a, u = og(n.startContainer, r),
            s = og(n.endContainer, r),
            c = u.bind((a = r, function(t) { return zl(t, a).bind(function(e) { return Y(ng(e)).map(function(e) { return rg(t, e) }) }) })).bind(ug(r)),
            l = s.bind((i = r, function(t) { return zl(t, i).bind(function(e) { return W(ng(e)).map(function(e) { return rg(e, t) }) }) })).bind(ug(r));
        return he.some({ start: c, end: l })
    }

    function cg(e, t) { return M(e, function(e) { return je(e, t) }) }

    function lg(n) { return fn(cg(n.cells, n.rng.start), cg(n.cells, n.rng.end), function(e, t) { return n.cells.slice(e, t + 1) }) }

    function fg(e, t) {
        var n = t.startTable,
            r = t.endTable,
            o = e.cloneRange();
        return n.each(function(e) { return o.setStartAfter(e.dom) }), r.each(function(e) { return o.setEndBefore(e.dom) }), o
    }

    function dg(e, t) {
        var n, r, o, i, a, u, s, c, l, f, d, m, g, p, h, v, b = (n = e, function(e) { return je(n, e) }),
            y = fn(og((r = t).startContainer, o = b), og(r.endContainer, o), rg),
            C = (l = b, f = w((c = t).startContainer), d = w(c.endContainer), m = f.isSome(), g = d.isSome(), p = fn(f, d, je).getOr(!1), { startTable: f, endTable: d, isStartInTable: m, isEndInTable: g, isSameTable: p, isMultiTable: !p && m && g });

        function w(e) { return zl(Et.fromDom(e), l) }
        return h = t, v = b, y.exists(function(e) { return !ig(t = e) && ag(t, v).exists(function(e) { var t = e.dom.rows; return 1 === t.length && 1 === t[0].cells.length }) && jl(e.start, h); var t }) ? y.map(function(e) { return gp.singleCellTable(t, e.start) }) : C.isMultiTable ? sg(y, u = C, s = t, b).bind(function(e) {
            var t = e.start,
                n = e.end,
                r = t.bind(lg).getOr([]),
                o = n.bind(lg).getOr([]);
            if (0 < r.length && 0 < o.length) { var i = fg(s, u); return he.some(gp.multiTable(r, o, i)) }
            return he.none()
        }) : sg(y, i = C, a = t, b).bind(function(e) {
            var t = e.start,
                n = e.end;
            return t.or(n)
        }).bind(function(e) {
            var t = i.isSameTable,
                n = lg(e).getOr([]);
            if (t && e.cells.length === n.length) return he.some(gp.fullTable(e.table));
            if (0 < n.length) { if (t) return he.some(gp.partialTable(n, he.none())); var r = fg(a, i); return he.some(gp.partialTable(n, he.some(ke(ke({}, i), { rng: r })))) }
            return he.none()
        })
    }

    function mg(e) { return X(e, function(e) { bn(e, "contenteditable"), ym(e) }), 0 }

    function gg(e, t) {
        var n = Ul(e);
        e.selection.setCursorLocation(t.dom, 0), 1 < n.length && gn(t, "data-mce-selected", "1")
    }

    function pg(u, e, t) {
        return mg(e), t.map(function(e) {
            var t, n, r, o = e.rng,
                i = e.isStartInTable,
                a = (t = i ? o.endContainer : o.startContainer, he.from(u.dom.getParent(t, u.dom.isBlock)).map(Et.fromDom));
            o.deleteContents(), n = u, r = i, a.filter(oo).each(function(e) { r ? Mn(e) : (ym(e), n.selection.setCursorLocation(e.dom, 0)) })
        }), t.forall(function(e) { return e.isStartInTable }) ? gg(u, e[0]) : u.selection.collapse(!0), !0
    }

    function hg(e, t, n, r) { return mg(t.concat(n)), r.deleteContents(), gg(e, t[0]), !0 }

    function vg(e, t, n) {
        t.deleteContents();
        var r, o = pp(n).getOr(n),
            i = Et.fromDom(e.dom.getParent(o.dom, e.dom.isBlock));
        return oo(i) && (ym(i), e.selection.setCursorLocation(i.dom, 0)), je(n, i) || X((ln(Dt(i), n) ? [] : Dt(r = i).map(On).map(function(e) { return U(e, function(e) { return !je(r, e) }) }).getOr([])).concat(On(n)), function(e) { je(e, i) || He(e, i) || Mn(e) }), !0
    }

    function bg(e, t) { return tg(e, !1, t), !0 }

    function yg(e, t) { return I(xm(t, e), Ao) }

    function Cg(e, t) { return (e ? op : ip)(t) }

    function wg(f, d, s) { var m = Et.fromDom(f.getBody()); return hp(m, s).fold(function() { return o = f, i = d, a = m, e = s, u = bs.fromRangeStart(o.selection.getRng()), yg(a, e).bind(function(e) { return oo(e) ? vp(o, e) : (t = a, n = e, r = u, Gc(i, o.getBody(), r).bind(function(e) { return yg(t, Et.fromDom(e.getNode())).map(function(e) { return !1 === je(e, n) }) })); var t, n, r }).getOr(!1) || (n = d, r = bs.fromRangeStart((t = f).selection.getRng()), Cg(n, r) || cf(n, t.getBody(), r).exists(function(e) { return Cg(n, e) })); var o, i, a, e, u, t, n, r }, function(e) { return n = d, r = m, o = e, i = bs.fromRangeStart((t = f).selection.getRng()), (oo(o) ? vp(t, o) : (u = r, c = o, l = i, Gc(s = n, (a = t).getBody(), l).bind(function(e) { return r = s, o = l, i = e, mf((n = c).dom).bind(function(t) { return gf(n.dom).map(function(e) { return r ? o.isEqual(t) && i.isEqual(e) : o.isEqual(e) && i.isEqual(t) }) }).getOr(!0) ? vp(a, c) : (t = c, hp(u, Et.fromDom(e.getNode())).map(function(e) { return !1 === je(e, t) })); var t, n, r, o, i }).or(he.some(!0)))).getOr(!1); var a, u, s, c, l, t, n, r, o, i }) }

    function xg(e, t) {
        var n, r, o, i, a, u, s, c, l = Et.fromDom(e.selection.getStart(!0)),
            f = Ul(e);
        return e.selection.isCollapsed() && 0 === f.length ? wg(e, t, l) : (r = l, o = f, i = Et.fromDom((n = e).getBody()), a = n.selection.getRng(), 0 !== o.length ? pg(n, o, he.none()) : (u = n, c = a, hp(s = i, r).fold(function() { return t = u, dg(s, c).map(function(e) { return e.fold(A(vg, t), A(bg, t), A(pg, t), A(hg, t)) }); var t }, function(e) { return vp(u, e) }).getOr(!1)))
    }

    function Sg(e) { return e.collapsed ? e : (a = e, u = bs.fromRangeStart(a), s = bs.fromRangeEnd(a), c = a.commonAncestorContainer, cf(!1, c, s).map(function(e) { return !uc(u, s, c) && uc(u, e, c) ? (t = u.container(), n = u.offset(), r = e.container(), o = e.offset(), (i = document.createRange()).setStart(t, n), i.setEnd(r, o), i) : a; var t, n, r, o, i }).getOr(a)); var a, u, s, c }

    function Eg(e, t) {
        var n, r, o, i, a, u = t.firstChild,
            s = t.lastChild;
        return u && "meta" === u.name && (u = u.next), r = s = s && "mce_marker" === s.attr("id") ? s.prev : s, o = (n = e).getNonEmptyElements(), r && (r.isEmpty(o) || (i = r, n.getBlockElements()[i.name] && i.firstChild && i.firstChild === i.lastChild && ("br" === (a = i.firstChild).name || a.value === Do))) && (s = s.prev), u && u === s && ("ul" === u.name || "ol" === u.name)
    }

    function Ng(e) { return 0 < e.length && (!(r = e[e.length - 1]).firstChild || (t = r) && t.firstChild && t.firstChild === t.lastChild && ((n = t.firstChild).data === Do || Xn(n))) ? e.slice(0, -1) : e; var t, n, r }

    function kg(e, t) { var n = e.getParent(t, e.isBlock); return n && "LI" === n.nodeName ? n : null }

    function _g(e, t) {
        var n = bs.after(e),
            r = Wc(t).prev(n);
        return r ? r.toRange() : null
    }

    function Ag(e, o, i, t) {
        function n(e) {
            var t = bs.fromRangeStart(i),
                n = Wc(o.getRoot()),
                r = 1 === e ? n.prev(t) : n.next(t);
            return !r || kg(o, r.getNode()) !== T
        }
        var r, a, u, s, c, l, f, d, m, g, p, h, v, b, y, C, w, x, S, E, N, k, _, A = (r = o, c = e.serialize(t), u = (a = r.createFragment(c)).firstChild, s = a.lastChild, u && "META" === u.nodeName && u.parentNode.removeChild(u), s && "mce_marker" === s.id && s.parentNode.removeChild(s), a),
            T = kg(o, i.startContainer),
            R = Ng(U(A.firstChild.childNodes, function(e) { return "LI" === e.nodeName })),
            D = o.getRoot();
        return n(1) ? (S = D, _ = (x = T).parentNode, St.each(R, function(e) { _.insertBefore(e, x) }), E = S, N = bs.before(x), (k = Wc(E).next(N)) ? k.toRange() : null) : n(2) ? (l = T, d = D, o.insertAfter((f = R).reverse(), l), _g(f[0], d)) : (g = R, p = D, h = m = T, b = (v = i).cloneRange(), y = v.cloneRange(), b.setStartBefore(h), y.setEndAfter(h), C = [b.cloneContents(), y.cloneContents()], (w = m.parentNode).insertBefore(C[0], m), St.each(g, function(e) { w.insertBefore(e, m) }), w.insertBefore(C[1], m), w.removeChild(m), _g(g[g.length - 1], p))
    }

    function Tg(e, t, n) {
        var r, o, i, a, u = e.selection,
            s = e.dom;
        /^ | $/.test(t) && (r = s, o = u.getRng(), i = t, i = Im(a = Et.fromDom(r.getRoot()), bs.fromRangeStart(o)) ? i.replace(/^ /, "&nbsp;") : i.replace(/^&nbsp;/, " "), t = i = Mm(a, bs.fromRangeEnd(o)) ? i.replace(/(&nbsp;| )(<br( \/)>)?$/, "&nbsp;") : i.replace(/&nbsp;(<br( \/)?>)?$/, " "));
        var c = e.parser,
            l = n.merge,
            f = sm({ validate: e.getParam("validate") }, e.schema),
            d = '<span id="mce_marker" data-mce-type="bookmark">&#xFEFF;</span>',
            m = e.fire("BeforeSetContent", { content: t, format: "html", selection: !0, paste: n.paste });
        if (m.isDefaultPrevented()) e.fire("SetContent", { content: m.content, format: "html", selection: !0, paste: n.paste });
        else {
            -1 === (t = m.content).indexOf("{$caret}") && (t += "{$caret}"), t = t.replace(/\{\$caret\}/, d);
            var g, p, h = (g = u.getRng()).startContainer || (g.parentElement ? g.parentElement() : null),
                v = e.getBody();
            h === v && u.isCollapsed() && s.isBlock(v.firstChild) && ((p = v.firstChild) && !e.schema.getShortEndedElements()[p.nodeName]) && s.isEmpty(v.firstChild) && ((g = s.createRng()).setStart(v.firstChild, 0), g.setEnd(v.firstChild, 0), u.setRng(g)), u.isCollapsed() || function(e) {
                var t = e.dom,
                    n = Sg(e.selection.getRng());
                e.selection.setRng(n);
                var r, o = t.getParent(n.startContainer, bp),
                    i = n;
                null !== (r = o) && r === t.getParent(i.endContainer, bp) && jl(Et.fromDom(r), i) ? vg(e, n, Et.fromDom(o)) : e.getDoc().execCommand("Delete", !1, null)
            }(e);
            var b, y, C, w, x, S, E, N, k, _, A, T, R, D, O = { context: (I = u.getNode()).nodeName.toLowerCase(), data: n.data, insert: !0 },
                B = c.parse(t, O);
            if (!0 === n.paste && Eg(e.schema, B) && kg(s, I)) return g = Ag(f, s, u.getRng(), B), u.setRng(g), void e.fire("SetContent", m);
            if (function() { for (var e = B; e = e.walk();) 1 === e.type && e.attr("data-mce-fragment", "1") }(), "mce_marker" === (L = B.lastChild).attr("id"))
                for (var P = L, L = L.prev; L; L = L.walk(!0))
                    if (3 === L.type || !s.isBlock(L.name)) { e.schema.isValidChild(L.parent.name, "span") && L.parent.insert(P, L, "br" === L.name); break }
            if (e._selectionOverrides.showBlockCaretContainer(I), O.invalid) {
                e.selection.setContent(d);
                var I = u.getNode(),
                    M = e.getBody();
                for (9 === I.nodeType ? I = L = M : L = I; L !== M;) L = (I = L).parentNode;
                t = I === M ? M.innerHTML : s.getOuterHTML(I), t = f.serialize(c.parse(t.replace(/<span (id="mce_marker"|id=mce_marker).+?<\/span>/i, function() { return f.serialize(B) }))), I === M ? s.setHTML(M, t) : s.setOuterHTML(I, t)
            } else b = e, y = t = f.serialize(B), "all" === (C = I).getAttribute("data-mce-bogus") ? C.parentNode.insertBefore(b.dom.createFragment(y), C) : (w = C.firstChild, x = C.lastChild, !w || w === x && "BR" === w.nodeName ? b.dom.setHTML(C, y) : b.selection.setContent(y));
            E = l, _ = (S = e).schema.getTextInlineElements(), A = S.dom, E && (N = S.getBody(), k = am(A), St.each(A.select("*[data-mce-fragment]"), function(e) {
                    if (V(_[e.nodeName.toLowerCase()]) && j(mm(A, e), function(e) { return !dm.has(e) }))
                        for (var t = e.parentNode; V(t) && t !== N && ! function(r, o, i) {
                                function a(e) {
                                    var t = r.getStyle(o, e),
                                        n = r.getStyle(i, e);
                                    return Oe(t) && Oe(n) && t !== n
                                }
                                var e = mm(r, o),
                                    u = mm(r, i);
                                return F(e, function(t) {
                                    function e(e) { return F(e, function(e) { return e === t }) }
                                    if (e(u) || !e(Jg)) return a(t);
                                    var n = U(u, function(t) { return F(Jg, function(e) { return Ye(t, e) }) });
                                    return F(n, a)
                                })
                            }(A, e, t); t = t.parentNode)
                            if (k.compare(t, e)) { A.remove(e, !0); break }
                })),
                function(n, e) {
                    var t, r = n.dom,
                        o = n.selection;
                    if (e) {
                        o.scrollIntoView(e);
                        var i = function(e) {
                            for (var t = n.getBody(); e && e !== t; e = e.parentNode)
                                if ("false" === r.getContentEditable(e)) return e;
                            return null
                        }(e);
                        if (i) return r.remove(e), o.select(i);
                        var a, u = r.createRng(),
                            s = e.previousSibling;
                        qn(s) ? (u.setStart(s, s.nodeValue.length), Ct.ie || (a = e.nextSibling, qn(a) && (s.appendData(a.data), a.parentNode.removeChild(a)))) : (u.setStartBefore(e), u.setEndBefore(e));
                        var c = r.getParent(e, r.isBlock);
                        r.remove(e), c && r.isEmpty(c) && (n.$(c).empty(), u.setStart(c, 0), u.setEnd(c, 0), bp(c) || c.getAttribute("data-mce-fragment") || !(t = function(e) { var t = bs.fromRangeStart(e); if (t = Wc(n.getBody()).next(t)) return t.toRange() }(u)) ? r.add(c, r.create("br", { "data-mce-bogus": "1" })) : (u = t, r.remove(c))), o.setRng(u)
                    }
                }(e, s.get("mce_marker")), T = e.getBody(), St.each(T.getElementsByTagName("*"), function(e) { e.removeAttribute("data-mce-fragment") }), R = s, D = u.getStart(), he.from(R.getParent(D, "td,th")).map(Et.fromDom).each(Cm), e.fire("SetContent", m), e.addVisual()
        }
    }

    function Rg(e) { return e instanceof Jd }

    function Dg(e, t, n) {
        var r;
        e.dom.setHTML(e.getBody(), t), !0 !== n && Td(r = e) && mf(r.getBody()).each(function(e) {
            var t = e.getNode(),
                n = sn(t) ? mf(t).getOr(e) : e;
            r.selection.setRng(n.toRange())
        })
    }

    function Og(u, s, e) {
        var t, n = (t = s, ke(ke({ format: "html" }, e), { set: !0, content: Rg(t) ? "" : t })),
            c = e.no_events ? n : u.fire("BeforeSetContent", n);
        return Rg(s) || (s = c.content), he.from(u.getBody()).fold(J(s), function(e) {
            return Rg(s) ? function(e, t, n, r) {
                var o, i, u, a;
                o = e.parser.getNodeFilters(), i = e.parser.getAttributeFilters(), u = n, a = function(e, n) {
                    var t, r, o = {},
                        i = {},
                        a = [];
                    for (t in u.firstChild && yp(u.firstChild, function(t) { X(e, function(e) { e.name === t.name && (o[e.name] ? o[e.name].nodes.push(t) : o[e.name] = { filter: e, nodes: [t] }) }), X(n, function(e) { "string" == typeof t.attr(e.name) && (i[e.name] ? i[e.name].nodes.push(t) : i[e.name] = { filter: e, nodes: [t] }) }) }), o) Ee(o, t) && a.push(o[t]);
                    for (r in i) Ee(i, r) && a.push(i[r]);
                    return a
                }(o, i), X(a, function(t) { X(t.filter.callbacks, function(e) { e(t.nodes, t.filter.name, {}) }) });
                var s = sm({ validate: e.validate }, e.schema).serialize(n);
                return r.content = To(Et.fromDom(t)) ? s : St.trim(s), Dg(e, r.content, r.no_selection), r.no_events || e.fire("SetContent", r), n
            }(u, e, s, c) : (t = u, n = e, o = c, 0 === (r = s).length || /^\s+$/.test(r) ? (i = '<br data-mce-bogus="1">', "TABLE" === n.nodeName ? r = "<tr><td>" + i + "</td></tr>" : /^(UL|OL)$/.test(n.nodeName) && (r = "<li>" + i + "</li>"), r = (a = Ls(t)) && t.schema.isValidChild(n.nodeName.toLowerCase(), a.toLowerCase()) ? (r = i, t.dom.createHTML(a, Is(t), r)) : r || '<br data-mce-bogus="1">', Dg(t, r, o.no_selection), t.fire("SetContent", o)) : ("raw" !== o.format && (r = sm({ validate: t.validate }, t.schema).serialize(t.parser.parse(r, { isRootContent: !0, insert: !0 }))), o.content = To(Et.fromDom(n)) ? r : St.trim(r), Dg(t, o.content, o.no_selection), o.no_events || t.fire("SetContent", o)), o.content);
            var t, n, r, o, i, a
        })
    }

    function Bg(e) { return y(e) ? e : T }

    function Pg(i, e, t) {
        var n = e(i),
            a = Bg(t);
        return n.orThunk(function() {
            return a(i) ? he.none() : function(e) {
                for (var t = i.dom, n = Bg(a); t.parentNode;) {
                    var t = t.parentNode,
                        r = Et.fromDom(t),
                        o = e(r);
                    if (o.isSome()) return o;
                    if (n(r)) break
                }
                return he.none()
            }(e)
        })
    }

    function Lg(e, t, n) {
        var r = e.formatter.get(n);
        if (r)
            for (var o = 0; o < r.length; o++) { var i = r[o]; if (Sl(i) && !1 === i.inherit && e.dom.is(t, i.selector)) return 1 }
    }

    function Ig(t, e, n, r, o) { var i = t.dom.getRoot(); return e !== i && (e = t.dom.getParent(e, function(e) { return !!Lg(t, e, n) || e.parentNode === i || !!wp(t, e, n, r, !0) }), !!wp(t, e, n, r, o)) }

    function Mg(e, t, n) { return !!Cp(t, n.inline) || !!Cp(t, n.block) || (n.selector ? 1 === t.nodeType && e.is(t, n.selector) : void 0) }

    function Fg(e, t, n, r, o, i) {
        var a = n[r];
        if (y(n.onmatch)) return n.onmatch(t, n, r);
        if (a)
            if (b(a.length)) {
                for (var u in a)
                    if (Ee(a, u)) {
                        var s = "attributes" === r ? e.getAttrib(t, u) : bl(e, t, u),
                            c = pl(a[u], i),
                            l = re(s) || Be(s);
                        if (!l || !re(c)) { if (o && l && !n.exact) return; if ((!o || n.exact) && !Cp(s, vl(e, c, u))) return }
                    }
            } else
                for (var f = 0; f < a.length; f++)
                    if ("attributes" === r ? e.getAttrib(t, a[f]) : bl(e, t, a[f])) return 1;
        return 1
    }

    function Ug(e, t, n, r, o) { if (r) return Ig(e, r, t, n, o); if (r = e.selection.getNode(), Ig(e, r, t, n, o)) return !0; var i = e.selection.getStart(); return !(i === r || !Ig(e, i, t, n, o)) }

    function zg(e) {
        return 0 < function(e) {
            for (var t = []; e;) {
                if (3 === e.nodeType && e.nodeValue !== xp || 1 < e.childNodes.length) return [];
                1 === e.nodeType && t.push(e), e = e.firstChild
            }
            return t
        }(e).length
    }

    function jg(e) {
        if (e) {
            var t = new jr(e, e);
            for (e = t.current(); e; e = t.next())
                if (qn(e)) return e
        }
        return null
    }

    function Hg(e) { var t = Et.fromTag("span"); return pn(t, { id: Sp, "data-mce-bogus": "1", "data-mce-type": "format-caret" }), e && In(t, Et.fromText(xp)), t }

    function Vg(e, t, n) {
        void 0 === n && (n = !0);
        var r, o, i, a, u, s, c, l, f = e.dom,
            d = e.selection;
        zg(t) ? tg(e, !1, Et.fromDom(t), n) : (r = d.getRng(), o = f.getParent(t, f.isBlock), i = r.startContainer, a = r.startOffset, u = r.endContainer, s = r.endOffset, (l = jg(t)) && l.nodeValue.charAt(0) === xp && l.deleteData(0, 1), c = l, f.remove(t, !0), i === c && 0 < a && r.setStart(c, a - 1), u === c && 0 < s && r.setEnd(c, s - 1), o && f.isEmpty(o) && ym(Et.fromDom(o)), d.setRng(r))
    }

    function qg(e, t, n) {
        void 0 === n && (n = !0);
        var r = e.dom,
            o = e.selection;
        if (t) Vg(e, t, n);
        else if (!(t = Zc(e.getBody(), o.getStart())))
            for (; t = r.get(Sp);) Vg(e, t, !1)
    }

    function $g(e, t) { return e.appendChild(t), t }

    function Wg(e, t) { var n = B(e, function(e, t) { return $g(e, t.cloneNode(!1)) }, t); return $g(n, n.ownerDocument.createTextNode(xp)) }

    function Kg(o, e, t, i, n, r) {
        var a, u, s = o.formatter,
            c = o.dom,
            l = U(we(s.get()), function(e) { return e !== i && !Re(e, "removeformat") });
        if (0 < U((a = o, u = t, P(l, function(e, t) { var n = wl(a, t); return a.formatter.matchNode(u, t, {}, n) ? e.concat([t]) : e }, [])), function(e) {
                return n = i, r = ["inline", "block", "selector", "attributes", "styles", "classes"], !F((t = o).formatter.get(e), function(e) {
                    var i = a(e);
                    return F(t.formatter.get(n), function(e) {
                        var t, n = a(e),
                            r = i,
                            o = n;
                        return d(t = void 0 === t ? p : t).eq(r, o)
                    })
                });

                function a(e) { return ne(e, function(e, t) { return F(r, function(e) { return e === t }) }) }
                var t, n, r
            }).length) { var f = t.cloneNode(!1); return c.add(e, f), s.remove(i, n, f, r), c.remove(f), he.some(f) }
        return he.none()
    }

    function Xg(e, t, n, r) {
        var o, i, a, u, s, c, l, f, d, m, g, p, h, v, b, y = e.dom,
            C = e.selection,
            w = [],
            x = C.getRng(),
            S = x.startContainer,
            E = x.startOffset,
            N = S;
        for (3 === S.nodeType && (E !== S.nodeValue.length && (o = !0), N = N.parentNode); N;) {
            if (wp(e, N, t, n, r)) { i = N; break }
            N.nextSibling && (o = !0), w.push(N), N = N.parentNode
        }
        i && (o ? (a = C.getBookmark(), x.collapse(!0), u = Vf(Ll(e, x, e.formatter.get(t), !0)), e.formatter.remove(t, n, u, r), C.moveToBookmark(a)) : (s = Zc(e.getBody(), i), d = c = Hg(!1).dom, (p = (g = e.dom).getParent(m = null !== s ? s : i, A(ml, e))) && g.isEmpty(p) ? m.parentNode.replaceChild(d, m) : (h = Et.fromDom(m), v = Au(h, "br"), b = U(function() { for (var e = [], t = h.dom; t;) e.push(Et.fromDom(t)), t = t.lastChild; return e }().slice(-1), $r), v.length === b.length && X(b, Mn), g.isEmpty(m) ? m.parentNode.replaceChild(d, m) : g.insertAfter(d, m)), l = Kg(e, c, i, t, n, r), f = Wg(w.concat(l.toArray()), c), Vg(e, s, !1), C.setCursorLocation(f, 1), y.isEmpty(i) && y.remove(i)))
    }

    function Yg(e, t) { var n = e.schema.getTextInlineElements(); return Ee(n, Nt(t)) && !Qc(t.dom) && !un(t.dom) }
    X(["margin", "margin-left", "margin-right", "margin-top", "margin-bottom", "padding", "padding-left", "padding-right", "padding-top", "padding-bottom", "border", "border-width", "border-style", "border-color", "background", "background-attachment", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "float", "position", "left", "right", "top", "bottom", "z-index", "display", "transform", "width", "max-width", "min-width", "height", "max-height", "min-height", "overflow", "overflow-x", "overflow-y", "text-overflow", "vertical-align", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function"], function(e) { dm.add(e) });
    var Gg, Jg = ["font", "text-decoration", "text-emphasis"],
        Qg = A(gm, !0, sl),
        Zg = A(gm, !1, sl),
        ep = hm(!0, vm),
        tp = hm(!1, vm),
        np = hm(!0, Zn),
        rp = hm(!1, Zn),
        op = hm(!0, sn),
        ip = hm(!1, sn),
        ap = hm(!0, bm),
        up = hm(!1, bm),
        sp = A(km, !1),
        cp = A(km, !0),
        lp = A(Nm, !1),
        fp = A(Nm, !0),
        dp = A(Am, !1),
        mp = A(Am, !0),
        gp = ar([{ singleCellTable: ["rng", "cell"] }, { fullTable: ["table"] }, { partialTable: ["cells", "outsideDetails"] }, { multiTable: ["startTableCells", "endTableCells", "betweenRng"] }]),
        pp = function(e) { var t; return (8 === kt(t = e) || "#comment" === Nt(t) ? Ot : Ft)(e).bind(pp).orThunk(function() { return he.some(e) }) },
        hp = function(e, t) { return I(xm(t, e), function(e) { return An(e) && "caption" === Nt(e) }) },
        vp = function(e, t) { return ym(t), e.selection.setCursorLocation(t.dom, 0), he.some(!0) },
        bp = Qn,
        yp = function(e, t) { t(e), e.firstChild && yp(e.firstChild, t), e.next && yp(e.next, t) },
        Cp = hl,
        wp = function(e, t, n, r, o) {
            var i = e.formatter.get(n),
                a = e.dom;
            if (i && t)
                for (var u = 0; u < i.length; u++) {
                    var s = i[u];
                    if (Mg(e.dom, t, s) && Fg(a, t, s, "attributes", o, r) && Fg(a, t, s, "styles", o, r)) {
                        var c = s.classes;
                        if (c)
                            for (var l = 0; l < c.length; l++)
                                if (!e.dom.hasClass(t, pl(c[l], r))) return;
                        return s
                    }
                }
        },
        xp = Oo,
        Sp = "_mce_caret",
        Ep = {},
        Np = le,
        kp = se;

    function _p(e) { return Hn(e) && !ul(e) && !Qc(e) && !un(e) }

    function Ap(e, t) { for (var n = e; n; n = n[t]) { if (qn(n) && Oe(n.data)) return e; if (Hn(n) && !ul(n)) return n } return e }

    function Tp(e, t, n) {
        var r = am(e);
        if (t && n && (t = Ap(t, "previousSibling"), n = Ap(n, "nextSibling"), r.compare(t, n))) {
            for (var o = t.nextSibling; o && o !== n;) {
                var i = o,
                    o = o.nextSibling;
                t.appendChild(i)
            }
            return e.remove(n), St.each(St.grep(n.childNodes), function(e) { t.appendChild(e) }), t
        }
        return n
    }

    function Rp(e, t, n, r) {
        var o;
        r && !1 !== t.merge_siblings && (o = Tp(e, dl(r), r), Tp(e, o, dl(o, !0)))
    }

    function Dp(t, n) { return function(e) { return !(!e || !bl(t, e, n)) } }

    function Op(r, o, i) {
        return function(e) {
            var t, n;
            r.setStyle(e, o, i), "" === e.getAttribute("style") && e.removeAttribute("style"), t = r, "SPAN" === (n = e).nodeName && 0 === t.getAttribs(n).length && t.remove(n, !0)
        }
    }

    function Bp(e, t, n) { return e.isChildOf(t, n) && t !== n && !e.isBlock(n) }

    function Pp(e, t, n) {
        var r, o = t[n ? "startContainer" : "endContainer"],
            i = t[n ? "startOffset" : "endOffset"];
        return Hn(o) && (r = o.childNodes.length - 1, !n && i && i--, o = o.childNodes[r < i ? r : i]), qn(o) && n && i >= o.nodeValue.length && (o = new jr(o, e.getBody()).next() || o), qn(o) && !n && 0 === i && new jr(o, e.getBody()).prev() || o
    }

    function Lp(e, t) { var n = t ? "firstChild" : "lastChild"; if (/^(TR|TH|TD)$/.test(e.nodeName) && e[n]) { var r = e[n]; return "TR" === e.nodeName && r[n] || r } return e }

    function Ip(e, t, n, r) { var o = e.create(n, r); return t.parentNode.insertBefore(o, t), o.appendChild(t), o }

    function Mp(e, t, n, r, o) {
        var i = Et.fromDom(t),
            a = Et.fromDom(e.create(r, o));
        return Wt(a, (n ? Lt : Pt)(i)), n ? (Vt(i, a), $t(a, i)) : (qt(i, a), In(a, i)), a.dom
    }

    function Fp(e, t, n, r) { var o = dl(t, n, r); return re(o) || "BR" === o.nodeName || e.isBlock(o) }

    function Up(e, r, o, t, i) {
        var n, a, u = e.dom,
            s = u,
            c = t;
        if (!(El(a = r) && Dh(c, a.inline) || xl(a) && Dh(c, a.block) || Sl(a) && (Hn(c) && s.is(c, a.selector)) || r.links && "A" === t.nodeName)) return Ah.keep();
        var l, f, d, m, g, p, h, v, b = t;
        if (El(r) && "all" === r.remove && S(r.preserve_attributes)) { var y = U(u.getAttribs(b), function(e) { return ie(r.preserve_attributes, e.name.toLowerCase()) }); if (u.removeAllAttribs(b), X(y, function(e) { return u.setAttrib(b, e.name, e.value) }), 0 < y.length) return Ah.rename("span") }
        if ("all" !== r.remove) {
            Rh(r.styles, function(e, t) { e = vl(u, pl(e, o), t + ""), E(t) && (t = e, i = null), !r.remove_similar && i && !Dh(bl(u, i, t), e) || u.setStyle(b, t, ""), n = !0 }), n && "" === u.getAttrib(b, "style") && (b.removeAttribute("style"), b.removeAttribute("data-mce-style")), Rh(r.attributes, function(e, t) {
                var n;
                if (e = pl(e, o), E(t) && (t = e, i = null), r.remove_similar || !i || Dh(u.getAttrib(i, t), e))
                    if ("class" === t && (e = u.getAttrib(b, t)) && (n = "", X(e.split(/\s+/), function(e) { /mce\-\w+/.test(e) && (n += (n ? " " : "") + e) }), n)) u.setAttrib(b, t, n);
                    else { if (Th.test(t) && b.removeAttribute("data-mce-" + t), "style" === t && rn(["li"])(b) && "none" === u.getStyle(b, "list-style-type")) return b.removeAttribute(t), void u.setStyle(b, "list-style-type", "none"); "class" === t && b.removeAttribute("className"), b.removeAttribute(t) }
            }), Rh(r.classes, function(e) { e = pl(e, o), i && !u.hasClass(i, e) || u.removeClass(b, e) });
            for (var C = u.getAttribs(b), w = 0; w < C.length; w++) { var x = C[w].nodeName; if (0 !== x.indexOf("_") && 0 !== x.indexOf("data-")) return Ah.keep() }
        }
        return "none" !== r.remove ? (l = e, d = r, p = (f = b).parentNode, h = l.dom, v = Ls(l), xl(d) && (v ? p === h.getRoot() && (d.list_block && Dh(f, d.list_block) || X(Ce(f.childNodes), function(e) { gl(l, v, e.nodeName.toLowerCase()) ? m ? m.appendChild(e) : (m = Ip(h, e, v), h.setAttribs(m, l.settings.forced_root_block_attrs)) : m = null })) : h.isBlock(f) && !h.isBlock(p) && (Fp(h, f, !1) || Fp(h, f.firstChild, !0, !0) || f.insertBefore(h.create("br"), f.firstChild), Fp(h, f, !0) || Fp(h, f.lastChild, !1, !0) || f.appendChild(h.create("br")))), Sl(g = d) && El(g) && ln(ae(g, "mixed"), !0) && !Dh(d.inline, f) || h.remove(f, !0), Ah.removed()) : Ah.keep()
    }

    function zp(t, e, n, r, o) { return Up(t, e, n, r, o).fold(T, function(e) { return t.dom.rename(r, e), !0 }, x) }

    function jp(u, s, c, e, l) {
        function a(e) {
            var n, r, o, i, a, t = (r = s, o = c, i = l, X(Cl((n = u).dom, e.parentNode).reverse(), function(e) {
                var t;
                a || "_start" === e.id || "_end" === e.id || (t = wp(n, e, r, o, i)) && !1 !== t.split && (a = e)
            }), a);
            return function(e, t, n, r, o, i, a, u) {
                var s, c, l = e.dom;
                if (n) {
                    for (var f = n.parentNode, d = r.parentNode; d && d !== f; d = d.parentNode) {
                        for (var m = l.clone(d, !1), g = 0; g < t.length && null !== (m = function(t, e, n) { return Up(t, e, u, n, n).fold(J(n), function(e) { return t.dom.createFragment().appendChild(n), t.dom.rename(n, e) }, J(null)) }(e, t[g], m)); g++);
                        m && (s && m.appendChild(s), c = c || m, s = m)
                    }!i || a.mixed && l.isBlock(n) || (r = l.split(n, r)), s && (o.parentNode.insertBefore(s, o), c.appendChild(o), El(a) && Rp(l, a, 0, s))
                }
                return r
            }(u, m, t, e, e, !0, g, c)
        }

        function f(t) { return F(m, function(e) { return zp(u, e, c, t, t) }) }

        function d(e) {
            var t, n = h.get(e ? "_start" : "_end"),
                r = n[e ? "firstChild" : "lastChild"];
            return ul(t = r) && Hn(t) && ("_start" === t.id || "_end" === t.id) && (r = r[e ? "firstChild" : "lastChild"]), qn(r) && 0 === r.data.length && (r = e ? n.previousSibling || n.nextSibling : n.nextSibling || n.previousSibling), h.remove(n, !0), r
        }

        function t(e) {
            var t = Ll(u, e, m, e.collapsed);
            if (g.split) {
                if (t = Vf(t), (r = Pp(u, t, !0)) !== (o = Pp(u, t))) {
                    if (r = Lp(r, !0), o = Lp(o, !1), Bp(h, r, o)) { var n = he.from(r.firstChild).getOr(r); return a(Mp(h, n, !0, "span", { id: "_start", "data-mce-type": "bookmark" })), void d(!0) }
                    if (Bp(h, o, r)) return n = he.from(o.lastChild).getOr(o), a(Mp(h, n, !1, "span", { id: "_end", "data-mce-type": "bookmark" })), void d(!1);
                    var r = Ip(h, r, "span", { id: "_start", "data-mce-type": "bookmark" }),
                        o = Ip(h, o, "span", { id: "_end", "data-mce-type": "bookmark" }),
                        i = h.createRng();
                    i.setStartAfter(r), i.setEndBefore(o), Il(h, i, function(e) { X(e, function(e) { ul(e) || ul(e.parentNode) || a(e) }) }), a(r), a(o), r = d(!0), o = d()
                } else r = o = a(r);
                t.startContainer = r.parentNode || r, t.startOffset = h.nodeIndex(r), t.endContainer = o.parentNode || o, t.endOffset = h.nodeIndex(o) + 1
            }
            Il(h, t, function(e) { X(e, v) })
        }
        var n, m = u.formatter.get(s),
            g = m[0],
            p = !0,
            h = u.dom,
            r = u.selection,
            v = function(t) {
                var e = !0,
                    n = !1;
                Hn(t) && h.getContentEditable(t) && (e = p, p = "true" === h.getContentEditable(t), n = !0);
                var r, o, i = Ce(t.childNodes);
                if (p && !n && (r = f(t), o = t.parentNode, !r && V(o) && Nl(g) && f(o)), g.deep && i.length) {
                    for (var a = 0; a < i.length; a++) v(i[a]);
                    n && (p = e)
                }
                X(["underline", "line-through", "overline"], function(e) { Hn(t) && u.dom.getStyle(t, "text-decoration") === e && t.parentNode && yl(h, t.parentNode) === e && zp(u, { deep: !1, exact: !0, inline: "span", styles: { textDecoration: e } }, null, t) })
            };
        if (e) return ll(e) ? ((n = h.createRng()).setStartBefore(e), n.setEndAfter(e), t(n)) : t(e), void Df(u, s, e, c);
        if ("false" !== h.getContentEditable(r.getNode())) r.isCollapsed() && El(g) && !Ul(u).length ? Xg(u, s, c, l) : ($l(r, !0, function() { ql(u, t) }), El(g) && Ug(u, s, c, r.getStart()) && fl(h, r, r.getRng()), u.nodeChanged()), Df(u, s, e, c);
        else {
            e = r.getNode();
            for (var o = 0; o < m.length && (!m[o].ceFalseOverride || !zp(u, m[o], c, e, e)); o++);
            Df(u, s, e, c)
        }
    }

    function Hp(e) { return Hn(e) && !ul(e) && !Qc(e) && !un(e) }

    function Vp(e) { return Ee(e, "vars") }

    function qp(n, e, r, o, i) { return L(e, function(e) { var t = n.formatter.matchNode(e, r, null != i ? i : {}, o); return !b(t) }, function(e) { return Lg(n, e, r) || !o && V(n.formatter.matchNode(e, r, i, !0)) }) }

    function $p(e, t) { var n = null != t ? t : Lh(e); return U(Cl(e.dom, n), function(e) { return Hn(e) && !un(e) }) }

    function Wp(e, o, i, a, t, n) {
        var r, u, s, c, l, f, d, m, g;
        return null === o.get() && (u = e, (r = o).set({}), u.on("NodeChange", function(e) { Ih(u, e.element, r.get()) }), u.on("FormatApply FormatRemove", function(e) {
            var t = he.from(e.node).map(function(e) { return ll(e) ? e : e.startContainer }).bind(function(e) { return Hn(e) ? he.some(e) : he.from(e.parentElement) }).getOrThunk(function() { return Lh(u) });
            Ih(u, t, r.get())
        })), s = e, l = i, f = a, d = t, m = n, g = (c = o).get(), X(l.split(","), function(t) {
            function e() { var e = $p(s); return qp(s, e, t, d, m).isSome() }
            var n, r = ae(g, t).getOrThunk(function() { var e = { withSimilar: { state: pu(!1), similar: !0, callbacks: [] }, withoutSimilar: { state: pu(!1), similar: !1, callbacks: [] }, withVars: [] }; return g[t] = e });
            b(m) ? ((n = d ? r.withSimilar : r.withoutSimilar).callbacks.push(f), 1 === n.callbacks.length && n.state.set(e())) : r.withVars.push({ state: pu(e()), similar: d, vars: m, callback: f })
        }), c.set(g), {
            unbind: function() {
                var e, t = i,
                    n = a,
                    r = (e = o).get();
                X(t.split(","), function(t) { return ae(r, t).each(function(e) { r[t] = { withSimilar: ke(ke({}, e.withSimilar), { callbacks: U(e.withSimilar.callbacks, function(e) { return e !== n }) }), withoutSimilar: ke(ke({}, e.withoutSimilar), { callbacks: U(e.withoutSimilar.callbacks, function(e) { return e !== n }) }), withVars: U(e.withVars, function(e) { return e.callback !== n }) } }) }), e.set(r)
            }
        }
    }

    function Kp(e, t) { var n = (t || document).createDocumentFragment(); return X(e, function(e) { n.appendChild(e.dom) }), Et.fromDom(n) }

    function Xp(e, t, n) { return { element: e, width: t, rows: n } }

    function Yp(e, t) { return { element: e, cells: t } }

    function Gp(e, t) { var n = parseInt(hn(e, t), 10); return isNaN(n) ? 1 : n }

    function Jp(e) { return P(e, function(e, t) { return t.cells.length > e ? t.cells.length : e }, 0) }

    function Qp(e, t) {
        for (var n = e.rows, r = 0; r < n.length; r++)
            for (var o = n[r].cells, i = 0; i < o.length; i++)
                if (je(o[i], t)) return he.some({ x: i, y: r });
        return he.none()
    }

    function Zp(e, t, n, r, o) {
        for (var i = [], a = e.rows, u = n; u <= o; u++) {
            var s = a[u].cells,
                c = t < r ? s.slice(t, r + 1) : s.slice(r, t + 1);
            i.push(Yp(a[u].element, c))
        }
        return i
    }

    function eh(e) { var o = Xp(Pu(e), 0, []); return X(Au(e, "tr"), function(n, r) { X(Au(n, "td,th"), function(e, t) {! function(e, t, n, r, o) { for (var i = Gp(o, "rowspan"), a = Gp(o, "colspan"), u = e.rows, s = n; s < n + i; s++) { u[s] || (u[s] = Yp(Lu(r), [])); for (var c = t; c < t + a; c++) u[s].cells[c] = s === n && c === t ? o : Pu(o) } }(o, function(e, t, n) { for (; r = t, ((o = e.rows)[n] ? o[n].cells : [])[r];) t++; var r, o; return t }(o, t, r), r, n, e) }) }), Xp(o.element, Jp(o.rows), o.rows) }

    function th(e, t) {
        var n, r, o, i = Et.fromDom(t.commonAncestorContainer),
            a = xm(i, e),
            u = U(a, function(e) { return qr(e) || xo(e) }),
            s = (o = t, I(r = a, function(e) { return "li" === Nt(e) && jl(e, o) }).fold(J([]), function(e) { return I(r, function(e) { return "ul" === Nt(e) || "ol" === Nt(e) }).map(function(e) { var t = Et.fromTag(Nt(e)); return yn(t, ne(xn(e), function(e, t) { return Ye(t, "list-style") })), [Et.fromTag("li"), t] }).getOr([]) }));
        return R(u.concat(s.length ? s : ko(n = i) ? Dt(n).filter(No).fold(J([]), function(e) { return [n, e] }) : No(n) ? [n] : []), Pu)
    }

    function nh() { return Kp([]) }

    function rh(e, i) {
        return br(i[0], "table", A(je, e)).bind(function(e) {
            var s, t, n = i[0],
                r = i[i.length - 1],
                o = eh(e);
            return t = r, Qp(s = o, n).bind(function(u) { return Qp(s, t).map(function(e) { return t = s, n = u.x, r = u.y, o = e.x, a = r < (i = e.y) ? Zp(t, n, r, o, i) : Zp(t, n, i, o, r), Xp(t.element, Jp(a), a); var t, n, r, o, i, a }) }).map(function(e) {
                return Kp([(n = R((t = e).rows, function(e) {
                    var t = R(e.cells, function(e) { var t = Lu(e); return bn(t, "colspan"), bn(t, "rowspan"), t }),
                        n = Pu(e.element);
                    return Wt(n, t), n
                }), r = Pu(t.element), Wt(o = Et.fromTag("tbody"), n), In(r, o), r)]);
                var t, n, r, o
            })
        }).getOrThunk(nh)
    }

    function oh(e, t) { var n, r, o, i, a, u, s, c = Fl(t, e); return 0 < c.length ? rh(e, c) : (n = e, 0 < (r = t).length && r[0].collapsed ? nh() : (o = n, i = r[0], a = Et.fromDom(i.cloneContents()), s = P(u = th(o, i), function(e, t) { return In(t, e), t }, a), 0 < u.length ? Kp([s]) : s)) }

    function ih(e, t) { return 0 <= t && t < e.length && sl(e.charAt(t)) }

    function ah(e, t) { var n = Po(e.innerText); return t ? n.replace(/^[ \f\n\r\t\v]+/, "") : n }

    function uh(e) { return Hn(e) ? e.outerHTML : qn(e) ? si.encodeRaw(e.data, !1) : $n(e) ? "\x3c!--" + e.data + "--\x3e" : "" }

    function sh(e, c) {
        var l = 0;
        X(e, function(e) {
            var t, n, r, o, i, a, u, s;
            0 === e[0] ? l++ : 1 === e[0] ? (o = c, i = e[1], a = l, s = function(e) {
                var t, n = document.createElement("div"),
                    r = document.createDocumentFragment();
                for (e && (n.innerHTML = e); t = n.firstChild;) r.appendChild(t);
                return r
            }(i), o.hasChildNodes() && a < o.childNodes.length ? (u = o.childNodes[a]).parentNode.insertBefore(s, u) : o.appendChild(s), l++) : 2 === e[0] && (n = l, (t = c).hasChildNodes() && n < t.childNodes.length && (r = t.childNodes[n]).parentNode.removeChild(r))
        })
    }

    function ch(n) {
        var e, t = z((e = n.getBody(), U(R(Ce(e.childNodes), uh), function(e) { return 0 < e.length })), function(e) { var t = im(n.serializer, e); return 0 < t.length ? [t] : [] }),
            r = t.join("");
        return -1 !== r.indexOf("</iframe>") ? { type: "fragmented", fragments: t, content: "", bookmark: null, beforeBookmark: null } : { type: "complete", fragments: null, content: r, bookmark: null, beforeBookmark: null }
    }

    function lh(e, t, n) {
        var r, o, i, g, p, a, h, v, c, l, u, s = n ? t.beforeBookmark : t.bookmark;

        function b(e, t, n, r) { for (var o = e; o - t < r && o < n && g[o] === p[o - t];) ++o; return { start: e, end: o, diag: t } }
        "fragmented" === t.type ? (r = t.fragments, o = e.getBody(), i = R(Ce(o.childNodes), uh), sh((p = r, a = (g = i).length + p.length + 2, h = new Array(a), v = new Array(a), c = function(e, t, n, r, o) {
            var i = l(e, t, n, r);
            if (null === i || i.start === t && i.diag === t - r || i.end === e && i.diag === e - n)
                for (var a = e, u = n; a < t || u < r;) a < t && u < r && g[a] === p[u] ? (o.push([0, g[a]]), ++a, ++u) : r - n < t - e ? (o.push([2, g[a]]), ++a) : (o.push([1, p[u]]), ++u);
            else {
                c(e, i.start, n, i.start - i.diag, o);
                for (var s = i.start; s < i.end; ++s) o.push([0, g[s]]);
                c(i.end, t, i.end - i.diag, r, o)
            }
        }, l = function(e, t, n, r) {
            var o = t - e,
                i = r - n;
            if (0 == o || 0 == i) return null;
            var a, u, s, c, l, f = o - i,
                d = i + o,
                m = (d % 2 == 0 ? d : 1 + d) / 2;
            for (h[1 + m] = e, v[1 + m] = t + 1, a = 0; a <= m; ++a) { for (u = -a; u <= a; u += 2) { for (s = u + m, u === -a || u !== a && h[s - 1] < h[s + 1] ? h[s] = h[s + 1] : h[s] = h[s - 1] + 1, l = (c = h[s]) - e + n - u; c < t && l < r && g[c] === p[l];) h[s] = ++c, ++l; if (f % 2 != 0 && f - a <= u && u <= f + a && v[s - f] <= h[s]) return b(v[s - f], u + e - n, t, r) } for (u = f - a; u <= f + a; u += 2) { for (s = u + m - f, u === f - a || u !== f + a && v[s + 1] <= v[s - 1] ? v[s] = v[s + 1] - 1 : v[s] = v[s - 1], l = (c = v[s] - 1) - e + n - u; e <= c && n <= l && g[c] === p[l];) v[s] = c--, l--; if (f % 2 == 0 && -a <= u && u <= a && v[s] <= h[s + f]) return b(v[s], u + e - n, t, r) } }
        }, u = [], c(0, g.length, 0, p.length, u), u), o)) : e.setContent(t.content, { format: "raw", no_selection: !V(s) || !el(s) || !s.isFakeCaret }), e.selection.moveToBookmark(s)
    }

    function fh(e) { return "fragmented" === e.type ? e.fragments.join("") : e.content }

    function dh(e) { var t = Et.fromTag("body", Mh()); return Ou(t, fh(e)), X(Au(t, "*[data-mce-bogus]"), Xt), t.dom.innerHTML }

    function mh(e, t) { return !(!e || !t) && (r = t, fh(e) === fh(r) || (n = t, dh(e) === dh(n))); var n, r }

    function gh(e) { return 0 === e.get() }

    function ph(e, t, n) { gh(n) && (e.typing = t) }

    function hh(e, t) { e.typing && (ph(e, !1, t), e.add()) }

    function vh(c) {
        return {
            undoManager: {
                beforeChange: function(e, t) {
                    var n = c,
                        r = t;
                    gh(e) && r.set(Nc(n.selection))
                },
                add: function(e, t, n, r, o, i) {
                    return function(e, t, n, r, o, i, a) {
                        var u = ch(e);
                        if (i = St.extend(i = i || {}, u), !1 === gh(r) || e.removed) return null;
                        var s = t.data[n.get()];
                        if (e.fire("BeforeAddUndo", { level: i, lastLevel: s, originalEvent: a }).isDefaultPrevented()) return null;
                        if (s && mh(s, i)) return null;
                        t.data[n.get()] && o.get().each(function(e) { t.data[n.get()].beforeBookmark = e });
                        var c = e.getParam("custom_undo_redo_levels", 0, "number");
                        if (c && t.data.length > c) {
                            for (var l = 0; l < t.data.length - 1; l++) t.data[l] = t.data[l + 1];
                            t.data.length--, n.set(t.data.length)
                        }
                        i.bookmark = Nc(e.selection), n.get() < t.data.length - 1 && (t.data.length = n.get() + 1), t.data.push(i), n.set(t.data.length - 1);
                        var f = { level: i, lastLevel: s, originalEvent: a };
                        return 0 < n.get() ? (e.setDirty(!0), e.fire("AddUndo", f), e.fire("change", f)) : e.fire("AddUndo", f), i
                    }(c, e, t, n, r, o, i)
                },
                undo: function(e, t, n) { return r = c, i = t, a = n, (o = e).typing && (o.add(), o.typing = !1, ph(o, !1, i)), 0 < a.get() && (a.set(a.get() - 1), lh(r, u = o.data[a.get()], !0), r.setDirty(!0), r.fire("Undo", { level: u })), u; var r, o, i, a, u },
                redo: function(e, t) { return n = c, o = t, (r = e).get() < o.length - 1 && (r.set(r.get() + 1), lh(n, i = o[r.get()], !1), n.setDirty(!0), n.fire("Redo", { level: i })), i; var n, r, o, i },
                clear: function(e, t) {
                    var n, r = c,
                        o = t;
                    (n = e).data = [], o.set(0), n.typing = !1, r.fire("ClearUndos")
                },
                reset: function(e) {
                    var t;
                    (t = e).clear(), t.add()
                },
                hasUndo: function(e, t) { return n = c, r = e, 0 < t.get() || r.typing && r.data[0] && !mh(ch(n), r.data[0]); var n, r },
                hasRedo: function(e, t) { return n = e, t.get() < n.data.length - 1 && !n.typing; var n },
                transact: function(e, t, n) { return o = n, hh(r = e, t), r.beforeChange(), r.ignore(o), r.add(); var r, o },
                ignore: function(e, t) { try { e.set(e.get() + 1), t() } finally { e.set(e.get() - 1) } },
                extra: function(e, t, n, r) {
                    var o, i, a = c,
                        u = t,
                        s = r;
                    (o = e).transact(n) && (i = o.data[u.get()].bookmark, lh(a, o.data[u.get() - 1], !0), o.transact(s) && (o.data[u.get() - 1].beforeBookmark = i))
                }
            },
            formatter: {
                match: function(e, t, n, r) { return Ug(c, e, t, n, r) },
                matchAll: function(e, t) { return o = e, i = t, a = [], u = {}, n = (r = c).selection.getStart(), r.dom.getParent(n, function(e) { for (var t = 0; t < o.length; t++) { var n = o[t];!u[n] && wp(r, e, n, i) && (u[n] = !0, a.push(n)) } }, r.dom.getRoot()), a; var r, o, i, a, u, n },
                matchNode: function(e, t, n, r) { return wp(c, e, t, n, r) },
                canApply: function(u) {
                    return function(e) {
                        var t = e.formatter.get(u),
                            n = e.dom;
                        if (t)
                            for (var r = Cl(n, e.selection.getStart()), o = t.length - 1; 0 <= o; o--) {
                                var i = t[o];
                                if (!Sl(i) || V(i.defaultBlock)) return !0;
                                for (var a = r.length - 1; 0 <= a; a--)
                                    if (n.is(r[a], i.selector)) return !0
                            }
                        return !1
                    }(c)
                },
                closest: function(e) {
                    return r = c, o = e, he.from(r.selection.getStart(!0)).bind(function(e) { return Pg(Et.fromDom(e), function(n) { return G(o, function(e) { return wp(r, n.dom, t = e) ? he.some(t) : he.none(); var t }) }, t) }).getOrNull();

                    function t(e) { return je(e, Et.fromDom(r.getBody())) }
                    var r, o
                },
                apply: function(e, t, n) { return Ph(c, e, t, n) },
                remove: function(e, t, n, r) { return jp(c, e, t, n, r) },
                toggle: function(e, t, n) {
                    var r, o = e,
                        i = t,
                        a = n,
                        u = (r = c).formatter.get(o);
                    (!Ug(r, o, i, a) || "toggle" in u[0] && !u[0].toggle ? Ph : jp)(r, o, i, a)
                },
                formatChanged: function(e, t, n, r, o) { return Wp(c, e, t, n, r, o) }
            },
            editor: {
                getContent: function(e, t) { return d = c, m = e, g = t, he.from(d.getBody()).fold(J("tree" === m.format ? new Jd("body", 11) : ""), function(e) { return t = d, r = e, o = g, c = ke(ke({}, n = m), { format: o, get: !0, getInner: !0 }), l = n.no_events ? c : t.fire("BeforeGetContent", c), f = "raw" === l.format ? St.trim(cm(t.serializer, r.innerHTML)) : "text" === l.format ? t.dom.isEmpty(r) ? "" : Po(r.innerText || r.textContent) : "tree" === l.format ? t.serializer.serialize(r, l) : (a = (i = t).serializer.serialize(r, l), u = Ls(i), s = new RegExp("^(<" + u + "[^>]*>(&nbsp;|&#160;|\\s|\xa0|<br \\/>|)<\\/" + u + ">[\r\n]*|<br \\/>[\r\n]*)$"), a.replace(s, "")), ie(["text", "tree"], l.format) || To(Et.fromDom(r)) ? l.content = f : l.content = St.trim(f), (l.no_events ? l : t.fire("GetContent", l)).content; var t, n, r, o, i, a, u, s, c, l, f }); var d, m, g },
                setContent: function(e, t) { return Og(c, e, t) },
                insertContent: function(e, t) { return Tg(c, e, t) },
                addVisual: function(e) {
                    var i, t = e,
                        a = (i = c).dom,
                        n = V(t) ? t : i.getBody();
                    b(i.hasVisual) && (i.hasVisual = i.getParam("visual", !0, "boolean")), X(a.select("table,a", n), function(e) {
                        switch (e.nodeName) {
                            case "TABLE":
                                var t = i.getParam("visual_table_class", "mce-item-table", "string"),
                                    n = a.getAttrib(e, "border");
                                n && "0" !== n || !i.hasVisual ? a.removeClass(e, t) : a.addClass(e, t);
                                break;
                            case "A":
                                var r, o;
                                a.getAttrib(e, "href") || (r = a.getAttrib(e, "name") || e.id, o = i.getParam("visual_anchor_class", "mce-item-anchor", "string"), r && i.hasVisual ? a.addClass(e, o) : a.removeClass(e, o))
                        }
                    }), i.fire("VisualAid", { element: t, hasVisual: i.hasVisual })
                }
            },
            selection: {
                getContent: function(e, t) {
                    return function(e, t, n) {
                        var r, o = (r = t, ke(ke({}, n = void 0 === n ? {} : n), { format: r, get: !0, selection: !0 })),
                            i = e.fire("BeforeGetContent", o);
                        if (i.isDefaultPrevented()) return e.fire("GetContent", i), i.content;
                        if ("text" === i.format) return m = e, he.from(m.selection.getRng()).map(function(e) {
                            var t = he.from(m.dom.getParent(e.commonAncestorContainer, m.dom.isBlock)),
                                n = m.getBody(),
                                r = t.map(function(e) { return e.nodeName }).getOr("div").toLowerCase(),
                                o = Ct.browser.isIE() && "pre" !== r,
                                i = m.dom.add(n, r, { "data-mce-bogus": "all", style: "overflow: hidden; opacity: 0;" }, e.cloneContents()),
                                a = ah(i, o),
                                u = Po(i.textContent);
                            if (m.dom.remove(i), ih(u, 0) || ih(u, u.length - 1)) {
                                var s = ah(t.getOr(n), o),
                                    c = s.indexOf(a);
                                return -1 === c ? a : (ih(s, c - 1) ? " " : "") + a + (ih(s, c + a.length) ? " " : "")
                            }
                            return a
                        }).getOr("");
                        i.getInner = !0;
                        var a, u, s, c, l, f, d, m, g = (u = i, s = (a = e).selection.getRng(), c = a.dom.create("body"), l = a.selection.getSel(), f = Pd(a, Ml(l)), (d = u.contextual ? oh(Et.fromDom(a.getBody()), f).dom : s.cloneContents()) && c.appendChild(d), a.selection.serializer.serialize(c, u));
                        return "tree" === i.format ? g : (i.content = e.selection.isCollapsed() ? "" : g, e.fire("GetContent", i), i.content)
                    }(c, e, t)
                }
            },
            raw: { getModel: function() { return he.none() } }
        }
    }

    function bh(e) { return Ee(e.plugins, "rtc") }

    function yh(e) {
        var u = e;
        return ae(e.plugins, "rtc").bind(function(e) { return he.from(e.setup) }).fold(function() { return u.rtcInstance = vh(e), he.none() }, function(e) {
            var t, n;
            return u.rtcInstance = (t = J(null), n = J(""), { undoManager: { beforeChange: oe, add: t, undo: t, redo: t, clear: oe, reset: oe, hasUndo: T, hasRedo: T, transact: t, ignore: oe, extra: oe }, formatter: { match: T, matchAll: J([]), matchNode: J(void 0), canApply: T, closest: n, apply: oe, remove: oe, toggle: oe, formatChanged: J({ unbind: oe }) }, editor: { getContent: n, setContent: n, insertContent: oe, addVisual: oe }, selection: { getContent: n }, raw: { getModel: J(he.none()) } }), he.some(function() {
                return e().then(function(e) {
                    return u.rtcInstance = (i = e.undoManager, a = e.formatter, n = e.editor, r = e.selection, t = e.raw, { undoManager: { beforeChange: i.beforeChange, add: i.add, undo: i.undo, redo: i.redo, clear: i.clear, reset: i.reset, hasUndo: i.hasUndo, hasRedo: i.hasRedo, transact: function(e, t, n) { return i.transact(n) }, ignore: function(e, t) { return i.ignore(t) }, extra: function(e, t, n, r) { return i.extra(n, r) } }, formatter: { match: function(e, t, n, r) { return a.match(e, o(t), r) }, matchAll: a.matchAll, matchNode: a.matchNode, canApply: function(e) { return a.canApply(e) }, closest: function(e) { return a.closest(e) }, apply: function(e, t, n) { return a.apply(e, o(t)) }, remove: function(e, t, n, r) { return a.remove(e, o(t)) }, toggle: function(e, t, n) { return a.toggle(e, o(t)) }, formatChanged: function(e, t, n, r, o) { return a.formatChanged(t, n, r, o) } }, editor: { getContent: function(e, t) { return n.getContent(e) }, setContent: function(e, t) { return n.setContent(e, t) }, insertContent: function(e, t) { return n.insertContent(e) }, addVisual: n.addVisual }, selection: { getContent: function(e, t) { return r.getContent(t) } }, raw: { getModel: function() { return he.some(t.getRawModel()) } } }), e.rtc.isRemote;

                    function o(e) { return h(e) ? e : {} }
                    var i, a, n, r, t
                })
            })
        })
    }

    function Ch(e) { return e.rtcInstance || vh(e) }

    function wh(e) { var t = e.rtcInstance; if (t) return t; throw new Error("Failed to get RTC instance not yet initialized.") }

    function xh(e) { return 0 === e.dom.length ? (Mn(e), he.none()) : he.some(e) }

    function Sh(e, t, u, s) {
        e.bind(function(a) {
            return (s ? $m : qm)(a.dom, s ? a.dom.length : 0), t.filter(Tn).map(function(e) {
                var t = u,
                    n = s,
                    r = a.dom,
                    o = e.dom,
                    i = (n ? r : o).length;
                n ? (Wm(r, o, !1, !n), t.setStart(o, i)) : (Wm(o, r, !1, !n), t.setEnd(o, i))
            })
        }).orThunk(function() {
            var e = s;
            return t.filter(function(e) { return Gl.isBookmarkNode(e.dom) }).bind(e ? Bt : Ot).or(t).filter(Tn).map(function(e) {
                var n, r = s;
                Dt(n = e).each(function(e) {
                    var t = n.dom;
                    r && Im(e, bs(t, 0)) ? qm(t, 0) : !r && Mm(e, bs(t, t.length)) && $m(t, t.length)
                })
            })
        })
    }

    function Eh(e, t, n) {
        var r, o = (r = t, ke(ke({ format: "html" }, n = void 0 === n ? {} : n), { set: !0, selection: !0, content: r })),
            i = o;
        if (!o.no_events) {
            var a = e.fire("BeforeSetContent", o);
            if (a.isDefaultPrevented()) return void e.fire("SetContent", a);
            i = a
        }
        i.content = function(e, t) {
            if ("raw" === t.format) return t.content;
            var n = e.selection.getRng(),
                r = e.dom.getParent(n.commonAncestorContainer, e.dom.isBlock),
                o = r ? { context: r.nodeName.toLowerCase() } : {},
                i = e.parser.parse(t.content, ke(ke({ isRootContent: !0, forced_root_block: !1 }, o), t));
            return sm({ validate: e.validate }, e.schema).serialize(i)
        }(e, i);
        var u = e.selection.getRng();
        ! function(e, t) {
            var n = he.from(t.firstChild).map(Et.fromDom),
                r = he.from(t.lastChild).map(Et.fromDom);
            e.deleteContents(), e.insertNode(t);
            var o = n.bind(Ot).filter(Tn).bind(xh),
                i = r.bind(Bt).filter(Tn).bind(xh);
            Sh(o, n, e, !0), Sh(i, r, e, !1), e.collapse(!1)
        }(u, u.createContextualFragment(i.content)), e.selection.setRng(u), fd(e, u), i.no_events || e.fire("SetContent", i)
    }

    function Nh(e, t, n) {
        var r;
        e && Ee(e, t) && (0 === (r = U(e[t], function(e) { return e !== n })).length ? delete e[t] : e[t] = r)
    }
    Gg = function(e) {
        var t, n = e.selection.getRng(),
            r = rn(["pre"]);
        n.collapsed || (t = e.selection.getSelectedBlocks(), kp(Np(Np(t, r), function(e) { return r(e.previousSibling) && -1 !== fe(t, e.previousSibling) }), function(e) {
            var t, n = e.previousSibling;
            ou(t = e).remove(), ou(n).append("<br><br>").append(t.childNodes)
        }))
    }, Ep["pre"] || (Ep.pre = []), Ep.pre.push(Gg);
    var kh = St.each,
        _h = function(e, t, n) { kh(e.childNodes, function(e) { _p(e) && (t(e) && n(e), e.hasChildNodes() && _h(e, t, n)) }) },
        Ah = ar([{ keep: [] }, { rename: ["name"] }, { removed: [] }]),
        Th = /^(src|href|style)$/,
        Rh = St.each,
        Dh = hl,
        Oh = St.each,
        Bh = St.each,
        Ph = function(S, E, N, r) {
            function k(n, e) {
                var t;
                y((e = void 0 === e ? A : e).onformat) && e.onformat(n, e, N, r), Bh(e.styles, function(e, t) { u.setStyle(n, t, pl(e, N)) }), !e.styles || (t = u.getAttrib(n, "style")) && u.setAttrib(n, "data-mce-style", t), Bh(e.attributes, function(e, t) { u.setAttrib(n, t, pl(e, N)) }), Bh(e.classes, function(e) { e = pl(e, N), u.hasClass(n, e) || u.addClass(n, e) })
            }

            function g(e, t) { var n = !1; return Bh(e, function(e) { return !!Sl(e) && (V(e.collapsed) && e.collapsed !== a || !u.is(t, e.selector) || Qc(t) ? void 0 : (k(t, e), !(n = !0))) }), n }

            function o(w, e, l) {
                var x = [],
                    f = !0,
                    d = A.inline || A.block,
                    m = function(e) { if (K(e)) { var t = u.create(e); return k(t), t } return null }(d);
                Il(w, e, function(e) {
                    var s, c = function(e) {
                        var t = !1,
                            n = f,
                            r = e.nodeName.toLowerCase(),
                            o = e.parentNode,
                            i = o.nodeName.toLowerCase();
                        if (Hn(e) && w.getContentEditable(e) && (n = f, f = "true" === w.getContentEditable(e), t = !0), Xn(e) && ! function(e, t, n, r) {
                                if (e.getParam("format_empty_lines", !1, "boolean") && El(t)) {
                                    var o = ke(ke({}, e.schema.getTextBlockElements()), { td: {}, th: {}, li: {}, dt: {}, dd: {}, figcaption: {}, caption: {}, details: {}, summary: {} }),
                                        i = (a = Et.fromDom(n), s = function(e) { return Qc(e.dom) }, ((c = (u = a).dom).parentNode ? kr(Et.fromDom(c.parentNode), function(e) { return !je(u, e) && s(e) }) : he.none()).isSome());
                                    return ue(o, r) && oo(Et.fromDom(n.parentNode), !1) && !i
                                }
                                var a, u, s, c
                            }(S, A, e, i)) return s = null, void(xl(A) && w.remove(e));
                        if (xl(A) && A.wrapper && wp(S, e, E, N)) s = null;
                        else { if (f && !t && xl(A) && !A.wrapper && ml(S, r) && gl(S, i, d)) { var a = w.rename(e, d); return k(a), x.push(a), void(s = null) } if (Sl(A)) { var u = g(_, e); if (!u && V(o) && Nl(A) && (u = g(_, o)), !El(A) || u) return void(s = null) }!f || t || !gl(S, d, r) || !gl(S, i, d) || !l && qn(e) && Bo(e.data) || Qc(e) || El(A) && w.isBlock(e) ? (s = null, X(Ce(e.childNodes), c), t && (f = n), s = null) : (s || (s = w.clone(m, !1), e.parentNode.insertBefore(s, e), x.push(s)), s.appendChild(e)) }
                    };
                    X(e, c)
                }), !0 === A.links && X(x, function(e) {
                    var t = function(e) { "A" === e.nodeName && k(e, A), X(Ce(e.childNodes), t) };
                    t(e)
                }), X(x, function(e) {
                    var n, t, r, o, i, a, u, s, c, l, f, d, m, g, p, h, v, b, y = (n = 0, X(e.childNodes, function(e) {
                        var t;
                        V(t = e) && qn(t) && 0 === t.length || ul(e) || n++
                    }), n);

                    function C(e) {
                        var t;
                        1 === e.nodeType && e.parentNode && 1 === e.parentNode.nodeType && (t = yl(m, e.parentNode), m.getStyle(e, "color") && t ? m.setStyle(e, "text-decoration", t) : m.getStyle(e, "text-decoration") === t && m.setStyle(e, "text-decoration", null))
                    }!(1 < x.length) && w.isBlock(e) || 0 !== y ? (El(A) || xl(A) && A.wrapper) && (A.exact || 1 !== y || (e = I((d = e).childNodes, Hp).filter(function(e) { return Mg(w, e, A) }).map(function(e) { var t = w.clone(e, !1); return k(t), w.replace(t, d, !0), w.remove(e, !0), t }).getOr(d)), h = S, v = N, b = e, Oh(_, function(t) {
                        var r, e, n;
                        El(t) && Oh(h.dom.select(t.inline, b), function(e) { _p(e) && zp(h, t, v, e, t.exact ? e : null) }), r = h.dom, (e = t).clear_child_styles && (n = e.links ? "*:not(a)" : "*", kh(r.select(n, b), function(n) { _p(n) && kh(e.styles, function(e, t) { r.setStyle(n, t, "") }) }))
                    }), s = A, wp(u = S, (f = e).parentNode, c = E, l = N) && zp(u, s, l, f) || s.merge_with_parents && u.dom.getParent(f.parentNode, function(e) { if (wp(u, e, c, l)) return zp(u, s, l, f), !0 }), a = e, (i = A).styles && i.styles.backgroundColor && _h(a, Dp(w, "fontSize"), Op(w, "backgroundColor", pl(i.styles.backgroundColor, N))), m = w, p = e, (g = A).styles && (g.styles.color || g.styles.textDecoration) && (St.walk(p, C, "childNodes"), C(p)), t = w, o = e, !El(r = A) || "sub" !== r.inline && "sup" !== r.inline || (_h(o, Dp(t, "fontSize"), Op(t, "fontSize", "")), t.remove(t.select("sup" === r.inline ? "sub" : "sup", o), !0)), Rp(w, A, 0, e)) : w.remove(e, !0)
                })
            }
            var e, t, n, i, _ = S.formatter.get(E),
                A = _[0],
                a = !r && S.selection.isCollapsed(),
                u = S.dom,
                s = S.selection;
            if ("false" !== u.getContentEditable(s.getNode())) A && (r ? ll(r) ? g(_, r) || ((e = u.createRng()).setStartBefore(r), e.setEndAfter(r), o(u, Ll(S, e, _), !0)) : o(u, r, !0) : a && El(A) && !Ul(S).length ? function(e, t, n) {
                var r, o = e.selection,
                    i = o.getRng(),
                    a = i.startOffset,
                    u = i.startContainer.nodeValue,
                    s = Zc(e.getBody(), o.getStart());
                s && (r = jg(s));
                var c, l, f, d, m = /[^\s\u00a0\u00ad\u200b\ufeff]/;
                u && 0 < a && a < u.length && m.test(u.charAt(a)) && m.test(u.charAt(a - 1)) ? (c = o.getBookmark(), i.collapse(!0), l = Vf(Ll(e, i, e.formatter.get(t))), e.formatter.apply(t, n, l), o.moveToBookmark(c)) : (s && r.nodeValue === xp || (f = e.getDoc(), d = Hg(!0).dom, r = (s = f.importNode(d, !0)).firstChild, i.insertNode(s), a = 1), e.formatter.apply(t, n, s), o.setCursorLocation(r, a))
            }(S, E, N) : (t = s.getNode(), n = _[0], S.settings.forced_root_block || !n.defaultBlock || u.getParent(t, u.isBlock) || Ph(S, n.defaultBlock), s.setRng(Sg(s.getRng())), $l(s, !0, function() {
                ql(S, function(e, t) {
                    var n = t ? e : Ll(S, e, _);
                    o(u, n, !1)
                })
            }), fl(u, s, s.getRng()), S.nodeChanged()), i = S, kp(Ep[E], function(e) { e(i) })), Rf(S, E, r, N);
            else {
                r = s.getNode();
                for (var c = 0, l = _.length; c < l; c++) { var f = _[c]; if (f.ceFalseOverride && Sl(f) && u.is(r, f.selector)) { k(r, f); break } }
                Rf(S, E, r, N)
            }
        },
        Lh = function(e) { return e.selection.getStart() },
        Ih = function(i, a, e) {
            var u = $p(i, a);
            Q(e, function(e, o) {
                function t(e) {
                    var t, n = qp(i, u, o, e.similar, Vp(e) ? e.vars : void 0),
                        r = n.isSome();
                    e.state.get() !== r && (e.state.set(r), t = n.getOr(a), Vp(e) ? e.callback(r, { node: t, format: o, parents: u }) : X(e.callbacks, function(e) { return e(r, { node: t, format: o, parents: u }) }))
                }
                X([e.withSimilar, e.withoutSimilar], t), X(e.withVars, t)
            })
        },
        Mh = Ae(function() { return document.implementation.createHTMLDocument("undo") });

    function Fh(e) { return e.select }

    function Uh(e) { return e && e.ownerDocument && He(Et.fromDom(e.ownerDocument), Et.fromDom(e)) }

    function zh(a, u, e, s) {
        function t(e, t) { return Eh(s, e, t) }

        function n() {
            var e = c(),
                t = null == e ? void 0 : e.anchorNode,
                n = null == e ? void 0 : e.focusNode;
            if (!e || !t || !n || nn(t) || nn(n)) return !0;
            var r = a.createRng();
            r.setStart(t, e.anchorOffset), r.collapse(!0);
            var o = a.createRng();
            return o.setStart(n, e.focusOffset), o.collapse(!0), r.compareBoundaryPoints(r.START_TO_START, o) <= 0
        }

        function r(e, t) {
            return m || (m = {}, g = {}, d.on("NodeChange", function(e) {
                var n = e.element,
                    r = i.getParents(n, null, i.getRoot()),
                    o = {};
                St.each(m, function(e, n) { St.each(r, function(t) { if (i.is(t, n)) return g[n] || (St.each(e, function(e) { e(!0, { node: t, selector: n, parents: r }) }), g[n] = e), o[n] = e, !1 }) }), St.each(g, function(e, t) { o[t] || (delete g[t], St.each(e, function(e) { e(!1, { node: n, selector: t, parents: r }) })) })
            })), m[e] || (m[e] = []), m[e].push(t), { unbind: function() { Nh(m, e, t), Nh(g, e, t) } }
        }

        function o(e) {
            var t = p();
            t.collapse(!!e), h(t)
        }

        function c() { return u.getSelection ? u.getSelection() : u.document.selection }
        var l, f, i, d, m, g, p = function() {
                function e(e, t, n) { try { return t.compareBoundaryPoints(e, n) } catch (e) { return -1 } }
                var t, n, r, o = u.document;
                if (void 0 !== s.bookmark && !1 === Td(s)) { var i = xd(s); if (i.isSome()) return i.map(function(e) { return Pd(s, [e])[0] }).getOr(o.createRange()) }
                try {
                    (t = c()) && !nn(t.anchorNode) && (n = 0 < t.rangeCount ? t.getRangeAt(0) : (t.createRange ? t : o).createRange(), n = Pd(s, [n])[0])
                } catch (e) {}
                return (n = n || (o.createRange ? o.createRange() : o.body.createTextRange())).setStart && 9 === n.startContainer.nodeType && n.collapsed && (r = a.getRoot(), n.setStart(r, 0), n.setEnd(r, 0)), l && f && (0 === e(n.START_TO_START, n, l) && 0 === e(n.END_TO_END, n, l) ? n = f : f = l = null), n
            },
            h = function(e, t) {
                var n;
                if ((r = e) && (Fh(r) || Uh(r.startContainer) && Uh(r.endContainer))) {
                    var r, o = Fh(e) ? e : null;
                    if (o) { f = null; try { o.select() } catch (e) {} } else {
                        var i = c();
                        if (e = s.fire("SetSelectionRange", { range: e, forward: t }).range, i) { f = e; try { i.removeAllRanges(), i.addRange(e) } catch (e) {}!1 === t && i.extend && (i.collapse(e.endContainer, e.endOffset), i.extend(e.startContainer, e.startOffset)), l = 0 < i.rangeCount ? i.getRangeAt(0) : null }
                        e.collapsed || e.startContainer !== e.endContainer || !i.setBaseAndExtent || Ct.ie || e.endOffset - e.startOffset < 2 && e.startContainer.hasChildNodes() && (n = e.startContainer.childNodes[e.startOffset]) && "IMG" === n.tagName && (i.setBaseAndExtent(e.startContainer, e.startOffset, e.endContainer, e.endOffset), i.anchorNode === e.startContainer && i.focusNode === e.endContainer || i.setBaseAndExtent(n, 0, n, 1)), s.fire("AfterSetSelectionRange", { range: e, forward: t })
                    }
                }
            },
            v = {
                bookmarkManager: null,
                controlSelection: null,
                dom: i = a,
                win: u,
                serializer: e,
                editor: d = s,
                collapse: o,
                setCursorLocation: function(e, t) {
                    var n = a.createRng();
                    V(e) && V(t) ? (n.setStart(e, t), n.setEnd(e, t), h(n), o(!1)) : (Hl(a, n, s.getBody(), !0), h(n))
                },
                getContent: function(e) { return n = (t = void 0 === (t = e) ? {} : t).format || "html", r = t, wh(s).selection.getContent(n, r); var t, n, r },
                setContent: t,
                getBookmark: function(e, t) { return b.getBookmark(e, t) },
                moveToBookmark: function(e) { return b.moveToBookmark(e) },
                select: function(e, t) {
                    var r = a,
                        o = t;
                    return he.from(e).map(function(e) {
                        var t = r.nodeIndex(e),
                            n = r.createRng();
                        return n.setStart(e.parentNode, t), n.setEnd(e.parentNode, t + 1), o && (Hl(r, n, e, !0), Hl(r, n, e, !1)), n
                    }).each(h), e
                },
                isCollapsed: function() {
                    var e = p(),
                        t = c();
                    return !(!e || e.item) && (e.compareEndPoints ? 0 === e.compareEndPoints("StartToEnd", e) : !t || e.collapsed)
                },
                isForward: n,
                setNode: function(e) { return t(a.getOuterHTML(e)), e },
                getNode: function() {
                    return function(e, t) {
                        if (!t) return e;
                        var n = t.startContainer,
                            r = t.endContainer,
                            o = t.startOffset,
                            i = t.endOffset,
                            a = t.commonAncestorContainer;
                        return !t.collapsed && (n === r && i - o < 2 && n.hasChildNodes() && (a = n.childNodes[o]), 3 === n.nodeType && 3 === r.nodeType && (n = n.length === o ? Bd(n.nextSibling, !0) : n.parentNode, r = 0 === i ? Bd(r.previousSibling, !1) : r.parentNode, n && n === r)) ? n : a && 3 === a.nodeType ? a.parentNode : a
                    }(s.getBody(), p())
                },
                getSel: c,
                setRng: h,
                getRng: p,
                getStart: function(e) { return Dd(s.getBody(), p(), e) },
                getEnd: function(e) { return Od(s.getBody(), p(), e) },
                getSelectedBlocks: function(e, t) {
                    return function(e, t, n, r) {
                        var o = [],
                            i = e.getRoot();
                        if (n = e.getParent(n || Dd(i, t, t.collapsed), e.isBlock), r = e.getParent(r || Od(i, t, t.collapsed), e.isBlock), n && n !== i && o.push(n), n && r && n !== r)
                            for (var a, u = new jr(n, i);
                                (a = u.next()) && a !== r;) e.isBlock(a) && o.push(a);
                        return r && n !== r && r !== i && o.push(r), o
                    }(a, p(), e, t)
                },
                normalize: function() { var e = p(); if (1 < Ml(c()).length || !Vl(s)) return e; var t = jf(a, e); return t.each(function(e) { h(e, n()) }), t.getOr(e) },
                selectorChanged: function(e, t) { return r(e, t), v },
                selectorChangedWithUnbind: r,
                getScrollContainer: function() {
                    for (var e, t = a.getRoot(); t && "BODY" !== t.nodeName;) {
                        if (t.scrollHeight > t.clientHeight) { e = t; break }
                        t = t.parentNode
                    }
                    return e
                },
                scrollIntoView: function(e, t) {
                    (s.inline ? sd : ld)(s, e, t)
                },
                placeCaretAt: function(e, t) { return h(Pf(e, t, s.getDoc())) },
                getBoundingClientRect: function() { var e = p(); return e.collapsed ? bs.fromRangeStart(e).getClientRects()[0] : e.getBoundingClientRect() },
                destroy: function() { u = l = f = null, y.destroy() }
            },
            b = Gl(v),
            y = Of(v, s);
        return v.bookmarkManager = b, v.controlSelection = y, v
    }

    function jh(e, t) {
        var n, r, a, u, o = ho();
        t.convert_fonts_to_spans && (r = e, a = o, u = St.explode(t.font_size_legacy_values), r.addNodeFilter("font", function(e) {
            X(e, function(e) {
                var t, n = a.parse(e.attr("style")),
                    r = e.attr("color"),
                    o = e.attr("face"),
                    i = e.attr("size");
                r && (n.color = r), o && (n["font-family"] = o), i && (n["font-size"] = u[parseInt(e.attr("size"), 10) - 1]), e.name = "span", e.attr("style", a.serialize(n)), t = e, X(["color", "face", "size"], function(e) { t.attr(e, null) })
            })
        })), n = o, e.addNodeFilter("strike", function(e) {
            X(e, function(e) {
                var t = n.parse(e.attr("style"));
                t["text-decoration"] = "line-through", e.name = "span", e.attr("style", n.serialize(t))
            })
        })
    }

    function Hh(e) {
        var t, n = decodeURIComponent(e).split(","),
            r = /data:([^;]+)/.exec(n[0]);
        return { type: t = r ? r[1] : t, data: n[1] }
    }

    function Vh(e, t) { var n; try { n = atob(t) } catch (e) { return he.none() } for (var r = new Uint8Array(n.length), o = 0; o < r.length; o++) r[o] = n.charCodeAt(o); return he.some(new Blob([r], { type: e })) }

    function qh(e) {
        return 0 === e.indexOf("blob:") ? (o = e, new _r(function(e, t) {
            function n() { t("Cannot convert " + o + " to Blob. Resource might not exist or is inaccessible.") }
            try {
                var r = new XMLHttpRequest;
                r.open("GET", o, !0), r.responseType = "blob", r.onload = function() { 200 === r.status ? e(r.response) : n() }, r.onerror = n, r.send()
            } catch (e) { n() }
        })) : 0 === e.indexOf("data:") ? (n = e, new _r(function(e) {
            var t = Hh(n);
            Vh(t.type, t.data).fold(function() { return e(new Blob([])) }, e)
        })) : null;
        var o, n
    }

    function $h(e) { return (e || "blobid") + gv++ }

    function Wh(r, d) {
        var o = {};
        return {
            findAll: function(e, n) {
                n = n || x;
                var t = R(U(e ? Ce(e.getElementsByTagName("img")) : [], function(e) { var t = e.src; return Ct.fileApi && !e.hasAttribute("data-mce-bogus") && !e.hasAttribute("data-mce-placeholder") && t && t !== Ct.transparentSrc && (0 === t.indexOf("blob:") ? !r.isUploaded(t) && n(e) : 0 === t.indexOf("data:") && n(e)) }), function(f) {
                    if (void 0 !== o[f.src]) return new _r(function(t) { o[f.src].then(function(e) { return "string" == typeof e ? e : void t({ image: f, blobInfo: e.blobInfo }) }) });
                    var e = new _r(function(e, t) {
                        var r, o, i, n, a, u, s, c, l;
                        r = d, i = e, n = t, 0 !== (o = f).src.indexOf("blob:") ? (u = (a = Hh(o.src)).data, s = a.type, c = u, (l = r.getByData(c, s)) ? i({ image: o, blobInfo: l }) : qh(o.src).then(function(e) { l = r.create($h(), e, c), r.add(l), i({ image: o, blobInfo: l }) }, function(e) { n(e) })) : (l = r.getByUri(o.src)) ? i({ image: o, blobInfo: l }) : qh(o.src).then(function(t) {
                            var n = t;
                            new _r(function(e) {
                                var t = new FileReader;
                                t.onloadend = function() { e(t.result) }, t.readAsDataURL(n)
                            }).then(function(e) { c = Hh(e).data, l = r.create($h(), t, c), r.add(l), i({ image: o, blobInfo: l }) })
                        }, function(e) { n(e) })
                    }).then(function(e) { return delete o[e.image.src], e }).catch(function(e) { return delete o[f.src], e });
                    return o[f.src] = e
                });
                return _r.all(t)
            }
        }
    }

    function Kh(e, t, n, r) {
        (e.padd_empty_with_br || t.insert) && n[r.name] ? r.empty().append(new Jd("br", 1)).shortEnded = !0 : r.empty().append(new Jd("#text", 3)).value = Do
    }

    function Xh(n, e, t, r) { return r.isEmpty(e, t, function(e) { return (t = n.getElementRule(e.name)) && t.paddEmpty; var t }) }

    function Yh(e, p) {
        var t, o, i, h = e.schema;

        function n(t) {
            var e, n, r = t.attr("src");
            (e = t).attr("src") === Ct.transparentSrc || V(e.attr("data-mce-placeholder")) || V(t.attr("data-mce-bogus")) || ((n = /data:([^;]+);base64,([a-z0-9\+\/=\s]+)/i.exec(r)) ? he.some({ type: n[1], data: decodeURIComponent(n[2]) }) : he.none()).filter(function() { return function(e, t) { if (t.images_dataimg_filter) { var n = new Image; return n.src = e.attr("src"), Q(e.attributes.map, function(e, t) { n.setAttribute(t, e) }), t.images_dataimg_filter(n) } return !0 }(t, o) }).bind(function(e) {
                var t = e.type,
                    n = e.data;
                return he.from(i.getByData(n, t)).orThunk(function() { return Vh(t, n).map(function(e) { var t = i.create($h(), e, n); return i.add(t), t }) })
            }).each(function(e) { t.attr("src", e.blobUri()) })
        }
        p.remove_trailing_brs && e.addNodeFilter("br", function(e, t, n) {
            var r, o, i, a, u, s, c, l, f = e.length,
                d = St.extend({}, h.getBlockElements()),
                m = h.getNonEmptyElements(),
                g = h.getWhiteSpaceElements();
            for (d.body = 1, r = 0; r < f; r++)
                if (i = (o = e[r]).parent, d[o.parent.name] && o === i.lastChild) {
                    for (u = o.prev; u;) {
                        if ("span" !== (s = u.name) || "bookmark" !== u.attr("data-mce-type")) { "br" === s && (o = null); break }
                        u = u.prev
                    }
                    o && (o.remove(), Xh(h, m, g, i) && (c = h.getElementRule(i.name)) && (c.removeEmpty ? i.remove() : c.paddEmpty && Kh(p, n, d, i)))
                } else {
                    for (a = o; i && i.firstChild === a && i.lastChild === a && !d[(a = i).name];) i = i.parent;
                    a === i && !0 !== p.padd_empty_with_br && ((l = new Jd("#text", 3)).value = Do, o.replace(l))
                }
        }), e.addAttributeFilter("href", function(e) {
            var t, n, r = e.length;
            if (!p.allow_unsafe_link_target)
                for (; r--;) { var o = e[r]; "a" === o.name && "_blank" === o.attr("target") && o.attr("rel", (n = void 0, n = (t = o.attr("rel")) ? St.trim(t) : "", /\b(noopener)\b/g.test(n) ? n : n.split(" ").filter(function(e) { return 0 < e.length }).concat(["noopener"]).sort().join(" "))) }
        }), p.allow_html_in_named_anchor || e.addAttributeFilter("id,name", function(e) {
            for (var t, n, r, o, i = e.length; i--;)
                if ("a" === (o = e[i]).name && o.firstChild && !o.attr("href"))
                    for (r = o.parent, t = o.lastChild; n = t.prev, r.insert(t, o), t = n;);
        }), p.fix_list_elements && e.addNodeFilter("ul,ol", function(e) { for (var t, n, r, o = e.length; o--;) "ul" !== (r = (n = e[o]).parent).name && "ol" !== r.name || (n.prev && "li" === n.prev.name ? n.prev.append(n) : ((t = new Jd("li", 1)).attr("style", "list-style-type: none"), n.wrap(t))) }), p.validate && h.getValidClasses() && e.addAttributeFilter("class", function(e) {
            for (var t = h.getValidClasses(), n = e.length; n--;) {
                for (var r = e[n], o = r.attr("class").split(" "), i = "", a = 0; a < o.length; a++) {
                    var u = o[a],
                        s = !1,
                        c = t["*"];
                    c && c[u] && (s = !0), c = t[r.name], (s = !(s || !c || !c[u]) || s) && (i && (i += " "), i += u)
                }
                i.length || (i = null), r.attr("class", i)
            }
        }), t = e, (i = (o = p).blob_cache) && t.addAttributeFilter("src", function(e) { return X(e, n) })
    }

    function Gh(_, A) {
        void 0 === A && (A = go());
        var T = {},
            R = [],
            D = {},
            O = {};
        (_ = _ || {}).validate = !("validate" in _) || _.validate, _.root_name = _.root_name || "body";

        function B(e) {
            var t = e.name;
            t in T && ((r = D[t]) ? r.push(e) : D[t] = [e]);
            for (var n = R.length; n--;) {
                var r, o = R[n].name;
                o in e.attributes.map && ((r = O[o]) ? r.push(e) : O[o] = [e])
            }
            return e
        }
        var e = {
            schema: A,
            addAttributeFilter: function(e, n) {
                vv(bv(e), function(e) {
                    for (var t = 0; t < R.length; t++)
                        if (R[t].name === e) return void R[t].callbacks.push(n);
                    R.push({ name: e, callbacks: [n] })
                })
            },
            getAttributeFilters: function() { return [].concat(R) },
            addNodeFilter: function(e, n) {
                vv(bv(e), function(e) {
                    var t = T[e];
                    t || (T[e] = t = []), t.push(n)
                })
            },
            getNodeFilters: function() { var e, t = []; for (e in T) Ee(T, e) && t.push({ name: e, callbacks: T[e] }); return t },
            filterNode: B,
            parse: function(e, u) {
                var t, n, r, o, i, s, a, c, l = [];

                function f(e) {
                    for (var t = A.getBlockElements(), n = e.prev; n && 3 === n.type;) {
                        var r = n.value.replace(w, "");
                        if (0 < r.length) return n.value = r, 0;
                        var o = n.next;
                        if (o) { if (3 === o.type && o.value.length) { n = n.prev; continue } if (!t[o.name] && "script" !== o.name && "style" !== o.name) { n = n.prev; continue } }
                        var i = n.prev;
                        n.remove(), n = i
                    }
                }
                u = u || {}, D = {}, O = {};

                function d(e, t) { var n, r = new Jd(e, t); return e in T && ((n = D[e]) ? n.push(r) : D[e] = [r]), r }
                var m = yv(hv("script,style,head,html,body,title,meta,param"), A.getBlockElements()),
                    g = A.getNonEmptyElements(),
                    p = A.children,
                    h = _.validate,
                    v = ("forced_root_block" in u ? u : _).forced_root_block,
                    b = !1 === v ? "" : !0 === v ? "p" : v,
                    y = A.getWhiteSpaceElements(),
                    C = /^[ \t\r\n]+/,
                    w = /[ \t\r\n]+$/,
                    x = /[ \t\r\n]+/g,
                    S = /^[ \t\r\n]+$/,
                    E = Ee(y, u.context) || Ee(y, _.root_name),
                    N = tm({
                        validate: h,
                        document: _.document,
                        allow_html_data_urls: _.allow_html_data_urls,
                        allow_svg_data_urls: _.allow_svg_data_urls,
                        allow_script_urls: _.allow_script_urls,
                        allow_conditional_comments: _.allow_conditional_comments,
                        preserve_cdata: _.preserve_cdata,
                        self_closing_elements: function(e) { var t, n = {}; for (t in e) "li" !== t && "p" !== t && (n[t] = e[t]); return n }(A.getSelfClosingElements()),
                        cdata: function(e) { c.append(d("#cdata", 4)).value = e },
                        text: function(e, t) {
                            var n, r;
                            E || (e = e.replace(x, " "), (r = c.lastChild) && (Ee(m, r.name) || "br" === r.name) && (e = e.replace(C, ""))), 0 !== e.length && ((n = d("#text", 3)).raw = !!t, c.append(n).value = e)
                        },
                        comment: function(e) { c.append(d("#comment", 8)).value = e },
                        pi: function(e, t) { c.append(d(e, 7)).value = t, f(c) },
                        doctype: function(e) { c.append(d("#doctype", 10)).value = e, f(c) },
                        start: function(e, t, n) {
                            var r = h ? A.getElementRule(e) : {};
                            if (r) {
                                var o = d(r.outputName || e, 1);
                                o.attributes = t, o.shortEnded = n, c.append(o);
                                var i = p[c.name];
                                i && p[o.name] && !i[o.name] && l.push(o);
                                for (var a = R.length; a--;) {
                                    var u = R[a].name;
                                    u in t.map && ((s = O[u]) ? s.push(o) : O[u] = [o])
                                }
                                m[e] && f(o), n || (c = o), !E && y[e] && (E = !0)
                            }
                        },
                        end: function(e) {
                            var t, n, r, o, i, a = h ? A.getElementRule(e) : {};
                            if (a) {
                                if (m[e] && !E) {
                                    if ((t = c.firstChild) && 3 === t.type)
                                        if (0 < (n = t.value.replace(C, "")).length) t.value = n, t = t.next;
                                        else
                                            for (r = t.next, t.remove(), t = r; t && 3 === t.type;) n = t.value, r = t.next, 0 !== n.length && !S.test(n) || (t.remove(), t = r), t = r;
                                    if ((t = c.lastChild) && 3 === t.type)
                                        if (0 < (n = t.value.replace(w, "")).length) t.value = n, t = t.prev;
                                        else
                                            for (r = t.prev, t.remove(), t = r; t && 3 === t.type;) n = t.value, r = t.prev, 0 !== n.length && !S.test(n) || (t.remove(), t = r), t = r
                                }
                                if (E && y[e] && (E = !1), a.removeEmpty && Xh(A, g, y, c)) return o = c.parent, m[c.name] ? c.empty().remove() : c.unwrap(), void(c = o);
                                a.paddEmpty && (pv(i = c, "#text") && i.firstChild.value === Do || Xh(A, g, y, c)) && Kh(_, u, m, c), c = c.parent
                            }
                        }
                    }, A),
                    k = c = new Jd(u.context || _.root_name, 11);
                if (N.parse(e, u.format), h && l.length && (u.context ? u.invalid = !0 : function(e) {
                        for (var t = hv("tr,td,th,tbody,thead,tfoot,table"), n = A.getNonEmptyElements(), r = A.getWhiteSpaceElements(), o = A.getTextBlockElements(), i = A.getSpecialElements(), a = function(e, t) {
                                if (void 0 === t && (t = e.parent), i[e.name]) e.empty().remove();
                                else {
                                    for (var n = 0, r = e.children(); n < r.length; n++) {
                                        var o = r[n];
                                        A.isValidChild(t.name, o.name) || a(o, t)
                                    }
                                    e.unwrap()
                                }
                            }, u = 0; u < e.length; u++) {
                            var s, c = e[u],
                                l = void 0,
                                f = void 0;
                            if (c.parent && !c.fixed)
                                if (o[c.name] && "li" === c.parent.name) {
                                    for (var d = c.next; d && o[d.name];) d.name = "li", d.fixed = !0, c.parent.insert(d, c.parent), d = d.next;
                                    c.unwrap()
                                } else {
                                    for (var m = [c], l = c.parent; l && !A.isValidChild(l.name, c.name) && !t[l.name]; l = l.parent) m.push(l);
                                    if (l && 1 < m.length)
                                        if (A.isValidChild(l.name, c.name)) {
                                            m.reverse();
                                            for (var g = s = B(m[0].clone()), p = 0; p < m.length - 1; p++) {
                                                A.isValidChild(g.name, m[p].name) ? (f = B(m[p].clone()), g.append(f)) : f = g;
                                                for (var h = m[p].firstChild; h && h !== m[p + 1];) {
                                                    var v = h.next;
                                                    f.append(h), h = v
                                                }
                                                g = f
                                            }
                                            Xh(A, n, r, s) ? l.insert(c, m[0], !0) : (l.insert(s, m[0], !0), l.insert(c, s)), l = m[0], (Xh(A, n, r, l) || pv(l, "br")) && l.empty().remove()
                                        } else a(c);
                                    else c.parent && ("li" !== c.name ? A.isValidChild(c.parent.name, "div") && A.isValidChild("div", c.name) ? c.wrap(B(new Jd("div", 1))) : a(c) : !(d = c.prev) || "ul" !== d.name && "ol" !== d.name ? !(d = c.next) || "ul" !== d.name && "ol" !== d.name ? c.wrap(B(new Jd("ul", 1))) : d.insert(c, d.firstChild, !0) : d.append(c))
                                }
                        }
                    }(l)), b && ("body" === k.name || u.isRootContent) && function() {
                        function e(e) { e && ((t = e.firstChild) && 3 === t.type && (t.value = t.value.replace(C, "")), (t = e.lastChild) && 3 === t.type && (t.value = t.value.replace(w, ""))) }
                        var t = k.firstChild,
                            n = null;
                        if (A.isValidChild(k.name, b.toLowerCase())) {
                            for (; t;) {
                                var r = t.next;
                                3 === t.type || 1 === t.type && "p" !== t.name && !m[t.name] && !t.attr("data-mce-type") ? (n || ((n = d(b, 1)).attr(_.forced_root_block_attrs), k.insert(n, t)), n.append(t)) : (e(n), n = null), t = r
                            }
                            e(n)
                        }
                    }(), !u.invalid) {
                    for (a in D)
                        if (Ee(D, a)) { for (s = T[a], o = (t = D[a]).length; o--;) t[o].parent || t.splice(o, 1); for (n = 0, r = s.length; n < r; n++) s[n](t, a, u) }
                    for (n = 0, r = R.length; n < r; n++)
                        if ((s = R[n]).name in O) { for (o = (t = O[s.name]).length; o--;) t[o].parent || t.splice(o, 1); for (o = 0, i = s.callbacks.length; o < i; o++) s.callbacks[o](t, s.name, u) }
                }
                return k
            }
        };
        return Yh(e, _), _.inline_styles && jh(e, _), e
    }

    function Jh(e, t, n) {-1 === St.inArray(t, n) && (e.addAttributeFilter(n, function(e, t) { for (var n = e.length; n--;) e[n].attr(t, null) }), t.push(n)) }

    function Qh(L, I) {
        var e = ["data-mce-selected"],
            M = I && I.dom ? I.dom : cu.DOM,
            F = I && I.schema ? I.schema : go(L);
        L.entity_encoding = L.entity_encoding || "named", L.remove_trailing_brs = !("remove_trailing_brs" in L) || L.remove_trailing_brs;
        var t, U = Gh(L, F),
            s = L,
            c = M;
        return (t = U).addAttributeFilter("data-mce-tabindex", function(e, t) {
            for (var n = e.length; n--;) {
                var r = e[n];
                r.attr("tabindex", r.attr("data-mce-tabindex")), r.attr(t, null)
            }
        }), t.addAttributeFilter("src,href,style", function(e, t) {
            for (var n = "data-mce-" + t, r = s.url_converter, o = s.url_converter_scope, i = e.length; i--;) {
                var a = e[i],
                    u = a.attr(n);
                void 0 !== u ? (a.attr(t, 0 < u.length ? u : null), a.attr(n, null)) : (u = a.attr(t), "style" === t ? u = c.serializeStyle(c.parseStyle(u), a.name) : r && (u = r.call(o, u, t, a.name)), a.attr(t, 0 < u.length ? u : null))
            }
        }), t.addAttributeFilter("class", function(e) {
            for (var t = e.length; t--;) {
                var n, r = e[t];
                r.attr("class") && (n = r.attr("class").replace(/(?:^|\s)mce-item-\w+(?!\S)/g, ""), r.attr("class", 0 < n.length ? n : null))
            }
        }), t.addAttributeFilter("data-mce-type", function(e, t, n) { for (var r = e.length; r--;) { var o = e[r]; "bookmark" !== o.attr("data-mce-type") || n.cleanup || (he.from(o.firstChild).exists(function(e) { return !Bo(e.value) }) ? o.unwrap() : o.remove()) } }), t.addNodeFilter("noscript", function(e) {
            for (var t = e.length; t--;) {
                var n = e[t].firstChild;
                n && (n.value = si.decode(n.value))
            }
        }), t.addNodeFilter("script,style", function(e, t) {
            for (var n = function(e) { return e.replace(/(<!--\[CDATA\[|\]\]-->)/g, "\n").replace(/^[\r\n]*|[\r\n]*$/g, "").replace(/^\s*((<!--)?(\s*\/\/)?\s*<!\[CDATA\[|(<!--\s*)?\/\*\s*<!\[CDATA\[\s*\*\/|(\/\/)?\s*<!--|\/\*\s*<!--\s*\*\/)\s*[\r\n]*/gi, "").replace(/\s*(\/\*\s*\]\]>\s*\*\/(-->)?|\s*\/\/\s*\]\]>(-->)?|\/\/\s*(-->)?|\]\]>|\/\*\s*-->\s*\*\/|\s*-->\s*)\s*$/g, "") }, r = e.length; r--;) {
                var o, i = e[r],
                    a = i.firstChild ? i.firstChild.value : "";
                "script" === t ? ((o = i.attr("type")) && i.attr("type", "mce-no/type" === o ? null : o.replace(/^mce\-/, "")), "xhtml" === s.element_format && 0 < a.length && (i.firstChild.value = "// <![CDATA[\n" + n(a) + "\n// ]]>")) : "xhtml" === s.element_format && 0 < a.length && (i.firstChild.value = "\x3c!--\n" + n(a) + "\n--\x3e")
            }
        }), t.addNodeFilter("#comment", function(e) {
            for (var t = e.length; t--;) {
                var n = e[t];
                s.preserve_cdata && 0 === n.value.indexOf("[CDATA[") ? (n.name = "#cdata", n.type = 4, n.value = c.decode(n.value.replace(/^\[CDATA\[|\]\]$/g, ""))) : 0 === n.value.indexOf("mce:protected ") && (n.name = "#text", n.type = 3, n.raw = !0, n.value = unescape(n.value).substr(14))
            }
        }), t.addNodeFilter("xml:namespace,input", function(e, t) {
            for (var n = e.length; n--;) {
                var r = e[n];
                7 === r.type ? r.remove() : 1 === r.type && ("input" !== t || r.attr("type") || r.attr("type", "text"))
            }
        }), t.addAttributeFilter("data-mce-type", function(e) { X(e, function(e) { "format-caret" === e.attr("data-mce-type") && (e.isEmpty(t.schema.getNonEmptyElements()) ? e.remove() : e.unwrap()) }) }), t.addAttributeFilter("data-mce-src,data-mce-href,data-mce-style,data-mce-selected,data-mce-expando,data-mce-type,data-mce-resize,data-mce-placeholder", function(e, t) { for (var n = e.length; n--;) e[n].attr(t, null) }), {
            schema: F,
            addNodeFilter: U.addNodeFilter,
            addAttributeFilter: U.addAttributeFilter,
            serialize: function(e, t) {
                var n, r, o, i, a, u, s, c, l, f, d, m, g, p, h, v, b, y, C, w, x, S, E, N, k, _, A, T, R, D = ke({ format: "html" }, t = void 0 === t ? {} : t),
                    O = (n = (m = e, E = g = D, (d = I) && d.hasEventListeners("PreProcess") && !E.no_events ? (h = g, w = (p = d).dom, x = m.cloneNode(!0), (S = document.implementation).createHTMLDocument && (b = S.createHTMLDocument(""), St.each("BODY" === x.nodeName ? x.childNodes : [x], function(e) { b.body.appendChild(b.importNode(e, !0)) }), x = "BODY" !== x.nodeName ? b.body.firstChild : b.body, v = w.doc, w.doc = b), y = p, C = ke(ke({}, h), { node: x }), y.fire("PreProcess", C), v && (w.doc = v), x) : m), o = Po((r = D).getInner ? n.innerHTML : M.getOuterHTML(n)), r.selection || To(Et.fromDom(n)) ? o : St.trim(o)),
                    B = (i = U, a = O, s = (u = D).selection ? ke({ forced_root_block: !1 }, u) : u, c = i.parse(a, s), !P(f = c.lastChild) || P(l = f.prev) && (f.remove(), l.remove()), c);

                function P(e) { return e && "br" === e.name }
                return "tree" === D.format ? B : (N = I, k = D, _ = B, R = sm(L, F).serialize(_), k.no_events || !N ? R : (A = N, T = ke(ke({}, k), { content: R }), A.fire("PostProcess", T).content))
            },
            addRules: F.addValidElements,
            setRules: F.setValidElements,
            addTempAttr: A(Jh, U, e),
            getTempAttrs: J(e),
            getNodeFilters: U.getNodeFilters,
            getAttributeFilters: U.getAttributeFilters
        }
    }

    function Zh(e, t) { var n = Qh(e, t); return { schema: n.schema, addNodeFilter: n.addNodeFilter, addAttributeFilter: n.addAttributeFilter, serialize: n.serialize, addRules: n.addRules, setRules: n.setRules, addTempAttr: n.addTempAttr, getTempAttrs: n.getTempAttrs, getNodeFilters: n.getNodeFilters, getAttributeFilters: n.getAttributeFilters } }

    function ev(e, t, n) { return r = n = void 0 === n ? {} : n, Ch(e).editor.setContent(t, r); var r }

    function tv(e) { return he.from(e).each(function(e) { return e.destroy() }) }

    function nv(e) { var t = S(e) ? e.join(" ") : e; return U(R(K(t) ? t.split(" ") : [], Ge), function(e) { return 0 < e.length }) }

    function rv(e, t) { return Ee(e.sections(), t) }

    function ov(e, t) { return ae(e, "toolbar_mode").orThunk(function() { return ae(e, "toolbar_drawer").map(function(e) { return !1 === e ? "wrap" : e }) }).getOr(t) }

    function iv(e, t, n, r) {
        var o, i, a, u, s, c, l, f, d = nv(n.forced_plugins),
            m = nv(r.plugins),
            g = rv(o = t, "mobile") ? o.sections().mobile : {},
            p = g.plugins ? nv(g.plugins) : m,
            h = (i = (u = t, s = m, c = p, (a = e) && (0, f = (l = u).sections(), rv(l, "mobile") && "mobile" === f.mobile.theme) ? U(c, A(ie, kv)) : a && rv(u, "mobile") ? c : s), [].concat(nv(d)).concat(nv(i)));
        if (Ct.browser.isIE() && ie(h, "rtc")) throw new Error("RTC plugin is not supported on IE 11.");
        return St.extend(r, { plugins: h.join(" ") })
    }

    function av(e, t, n, r, o) {
        var i, a, u, s, c, l, f, d, m = e ? { mobile: (i = t, a = { resize: !1, toolbar_mode: ov(o.mobile || {}, "scrolling"), toolbar_sticky: !1 }, ke(ke(ke({}, _v), a), i ? { menubar: !1 } : {})) } : {},
            g = (c = ["mobile"], te(wv(m, o), function(e, t) { return ie(c, t) }, ee(l = {}), ee(f = {})), { sections: J((d = { t: l, f: f }).t), settings: J(d.f) }),
            p = St.extend(n, r, g.settings(), e && rv(g, "mobile") ? function(e) { void 0 === e && (e = {}); var t = ae(g.sections(), "mobile").getOr({}); return St.extend({}, e, t) }() : {}, { validate: !0, external_plugins: (u = r, s = g.settings().external_plugins || {}, u && u.external_plugins ? St.extend({}, u.external_plugins, s) : s) });
        return iv(e, g, r, p)
    }

    function uv(e, t, n) { return he.from(t.settings[n]).filter(e) }

    function sv(e, t) { return t.dom[e] }

    function cv(e, t) { return parseInt(Cn(t, e), 10) }

    function lv(e, t, n) {
        var r, o, i, a, u, s, c = Et.fromDom(e.getBody()),
            l = e.inline ? c : Et.fromDom(Tt(c).dom.documentElement),
            f = (r = e.inline, i = t, a = n, u = (o = l).dom.getBoundingClientRect(), { x: i - (r ? u.left + o.dom.clientLeft + Ov(o) : 0), y: a - (r ? u.top + o.dom.clientTop + Dv(o) : 0) }),
            d = f.x,
            m = f.y,
            g = Tv(s = l),
            p = Rv(s);
        return 0 <= d && 0 <= m && d <= g && m <= p
    }

    function fv(o) {
        function i() {
            var e = o.theme;
            return e && e.getNotificationManagerImpl ? e.getNotificationManagerImpl() : { open: t, close: t, reposition: t, getArgs: t };

            function t() { throw new Error("Theme did not provide a NotificationManager implementation.") }
        }

        function a() { return he.from(c[0]) }

        function u() { 0 < c.length && i().reposition(c) }

        function s(t) { M(c, function(e) { return e === t }).each(function(e) { c.splice(e, 1) }) }

        function t(n, e) { if (void 0 === e && (e = !0), !o.removed && (r = (t = o).inline ? t.getBody() : t.getContentAreaContainer(), he.from(r).map(Et.fromDom).map(Fn).getOr(!1))) return e && o.fire("BeforeOpenNotification", { notification: n }), I(c, function(e) { return !((t = i().getArgs(e)).type !== n.type || t.text !== n.text || t.progressBar || t.timeout || n.progressBar || n.timeout); var t }).getOrThunk(function() { o.editorManager.setActive(o); var e = i().open(n, function() { s(e), u(), a().fold(function() { return o.focus() }, function(e) { return Et.fromDom(e.getEl()).dom.focus() }) }); return c.push(e), u(), o.fire("OpenNotification", { notification: ke({}, e) }), e }); var t, r }
        var n, c = [],
            e = J(c);
        return (n = o).on("SkinLoaded", function() {
            var e = n.getParam("service_message");
            e && t({ text: e, type: "warning", timeout: 0 }, !1)
        }), n.on("ResizeEditor ResizeWindow NodeChange", function() { Ur.requestAnimationFrame(u) }), n.on("remove", function() { X(c.slice(), function(e) { i().close(e) }) }), { open: t, close: function() { a().each(function(e) { i().close(e), s(e), u() }) }, getNotifications: e }
    }
    var dv, mv, gv = 0,
        pv = function(e, t) { return e && e.firstChild && e.firstChild === e.lastChild && e.firstChild.name === t },
        hv = St.makeMap,
        vv = St.each,
        bv = St.explode,
        yv = St.extend,
        Cv = cu.DOM,
        wv = (dv = function(e, t) { return h(e) && h(t) ? wv(e, t) : t }, function() { for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]; if (0 === e.length) throw new Error("Can't merge zero objects"); for (var n = {}, r = 0; r < e.length; r++) { var o, i = e[r]; for (o in i) Ee(i, o) && (n[o] = dv(n[o], i[o])) } return n }),
        xv = ft().deviceType,
        Sv = xv.isTouch(),
        Ev = xv.isPhone(),
        Nv = xv.isTablet(),
        kv = ["lists", "autolink", "autosave"],
        _v = { table_grid: !1, object_resizing: !1, resize: !1 },
        Av = (mv = {}, { add: function(e, t) { mv[e] = t }, get: function(e) { return mv[e] || { icons: {} } }, has: function(e) { return Ee(mv, e) } }),
        Tv = A(sv, "clientWidth"),
        Rv = A(sv, "clientHeight"),
        Dv = A(cv, "margin-top"),
        Ov = A(cv, "margin-left"),
        Bv = Cu.PluginManager,
        Pv = Cu.ThemeManager;

    function Lv(r) {
        function o() {
            var e = r.theme;
            return e && e.getWindowManagerImpl ? e.getWindowManagerImpl() : { open: t, openUrl: t, alert: t, confirm: t, close: t, getParams: t, setParams: t };

            function t() { throw new Error("Theme did not provide a WindowManager implementation.") }
        }

        function i(n, r) { return function() { for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]; return r ? r.apply(n, e) : void 0 } }

        function n(t) { r.fire("CloseWindow", { dialog: t }), 0 === (u = U(u, function(e) { return e !== t })).length && r.focus() }

        function a(e) { r.editorManager.setActive(r), wd(r); var t, n = e(); return t = n, u.push(t), r.fire("OpenWindow", { dialog: t }), n }
        var u = [];
        return r.on("remove", function() { X(u, function(e) { o().close(e) }) }), {
            open: function(e, t) { return a(function() { return o().open(e, t, n) }) },
            openUrl: function(e) { return a(function() { return o().openUrl(e, n) }) },
            alert: function(e, t, n) {
                var r = o();
                r.alert(e, i(n || r, t))
            },
            confirm: function(e, t, n) {
                var r = o();
                r.confirm(e, i(n || r, t))
            },
            close: function() { he.from(u[u.length - 1]).each(function(e) { o().close(e), n(e) }) }
        }
    }

    function Iv(e, t) { e.notificationManager.open({ type: "error", text: t }) }

    function Mv(e, t) { e._skinLoaded ? Iv(e, t) : e.on("SkinLoaded", function() { Iv(e, t) }) }

    function Fv(e, t, n) { Tf(e, t, { message: n }), console.error(n) }

    function Uv(e, t, n) { return n ? "Failed to load " + e + ": " + n + " from url " + t : "Failed to load " + e + " url: " + t }

    function zv(e, t, n) { Fv(e, "PluginLoadError", Uv("plugin", t, n)) }

    function jv(e) {
        var t, n;
        e.contentCSS = e.contentCSS.concat(ly(e, (n = (t = e).getParam("content_css"), K(n) ? R(n.split(","), Ge) : S(n) ? n : !1 === n || t.inline ? [] : ["default"])), ly(e, Hs(e)))
    }

    function Hv() {
        function n(e, t) { return { status: e, resultUri: t } }

        function t(e) { return e in r }
        var r = {};
        return { hasBlobUri: t, getResultUri: function(e) { var t = r[e]; return t ? t.resultUri : null }, isPending: function(e) { return !!t(e) && 1 === r[e].status }, isUploaded: function(e) { return !!t(e) && 2 === r[e].status }, markPending: function(e) { r[e] = n(1, null) }, markUploaded: function(e, t) { r[e] = n(2, t) }, removeFailed: function(e) { delete r[e] }, destroy: function() { r = {} } }
    }

    function Vv(e) {
        return e + fy++ + ("s" + (new Date).getTime().toString(36) + t() + t() + t());

        function t() { return Math.round(4294967295 * Math.random()).toString(36) }
    }

    function qv() {
        function e(e) { return I(n, e).getOrUndefined() }

        function i(e) {
            if (!e.blob || !e.base64) throw new Error("blob and base64 representations of the image are required for BlobInfo to be created");
            var t = e.id || Vv("blobid"),
                n = e.name || t,
                r = e.blob;
            return { id: J(t), name: J(n), filename: J(e.filename || n + "." + ({ "image/jpeg": "jpg", "image/jpg": "jpg", "image/gif": "gif", "image/png": "png", "image/apng": "apng", "image/avif": "avif", "image/svg+xml": "svg", "image/webp": "webp", "image/bmp": "bmp", "image/tiff": "tiff" }[r.type.toLowerCase()] || "dat")), blob: J(r), base64: J(e.base64), blobUri: J(e.blobUri || URL.createObjectURL(r)), uri: J(e.uri) }
        }

        function t(t) { return e(function(e) { return e.id() === t }) }
        var n = [];
        return { create: function(e, t, n, r, o) { if (K(e)) return i({ id: e, name: r, filename: o, blob: t, base64: n }); if (h(e)) return i(e); throw new Error("Unknown input type") }, add: function(e) { t(e.id()) || n.push(e) }, get: t, getByUri: function(t) { return e(function(e) { return e.blobUri() === t }) }, getByData: function(t, n) { return e(function(e) { return e.base64() === t && e.blob().type === n }) }, findFirst: e, removeByUri: function(t) { n = U(n, function(e) { return e.blobUri() !== t || void URL.revokeObjectURL(e.blobUri()) }) }, destroy: function() { X(n, function(e) { URL.revokeObjectURL(e.blobUri()) }), n = [] } }
    }

    function $v(u, s) {
        function o(e, r, o, t) {
            var i = new XMLHttpRequest;
            i.open("POST", s.url), i.withCredentials = s.credentials, i.upload.onprogress = function(e) { t(e.loaded / e.total * 100) }, i.onerror = function() { o("Image upload failed due to a XHR Transport error. Code: " + i.status) }, i.onload = function() {
                var e, t, n;
                i.status < 200 || 300 <= i.status ? o("HTTP Error: " + i.status) : (e = JSON.parse(i.responseText)) && "string" == typeof e.location ? r((t = s.basePath, n = e.location, t ? t.replace(/\/$/, "") + "/" + n.replace(/^\//, "") : n)) : o("Invalid JSON: " + i.responseText)
            };
            var n = new FormData;
            n.append("file", e.blob(), e.filename()), i.send(n)
        }

        function c(e, t) { return { url: t, blobInfo: e, status: !0 } }

        function l(e, t, n) { return { url: "", blobInfo: e, status: !1, error: { message: t, options: n } } }

        function f(e, t) { St.each(d[e], function(e) { e(t) }), delete d[e] }
        var d = {};
        return !1 === y(s.handler) && (s.handler = o), {
            upload: function(e, t) {
                return s.url || s.handler !== o ? (n = e, r = t, n = St.grep(e, function(e) { return !u.isUploaded(e.blobUri()) }), _r.all(St.map(n, function(e) {
                    return u.isPending(e.blobUri()) ? (n = e.blobUri(), new _r(function(e) { d[n] = d[n] || [], d[n].push(e) })) : (i = e, t = s.handler, a = r, u.markPending(i.blobUri()), new _r(function(r) {
                        var n;
                        try {
                            var o = function() { n && n.close() };
                            t(i, function(e) { o(), u.markUploaded(i.blobUri(), e), f(i.blobUri(), c(i, e)), r(c(i, e)) }, function(e, t) {
                                var n = t || {};
                                o(), u.removeFailed(i.blobUri()), f(i.blobUri(), l(i, e, n)), r(l(i, e, n))
                            }, function(t) {
                                t < 0 || 100 < t || he.from(n).orThunk(function() { return he.from(a).map(C) }).each(function(e) {
                                    (n = e).progressBar.value(t)
                                })
                            })
                        } catch (e) { r(l(i, e.message, {})) }
                    }));
                    var i, t, a, n
                }))) : new _r(function(e) { e([]) });
                var n, r
            }
        }
    }

    function Wv(e) { return function() { return e.notificationManager.open({ text: e.translate("Image uploading..."), type: "info", timeout: -1, progressBar: !0 }) } }

    function Kv(e, t) { return $v(t, { url: e.getParam("images_upload_url", "", "string"), basePath: e.getParam("images_upload_base_path", "", "string"), credentials: e.getParam("images_upload_credentials", !1, "boolean"), handler: e.getParam("images_upload_handler", null, "function") }) }

    function Xv(l) {
        function t(t) { return function(e) { return l.selection ? t(e) : [] } }

        function r(e, t, n) { for (var r = 0; - 1 !== (r = e.indexOf(t, r)) && (e = e.substring(0, r) + n + e.substr(r + t.length), r += n.length - t.length + 1), -1 !== r;); return e }

        function o(e, t, n) { return e = r(e, 'src="' + t + '"', 'src="' + n + '"' + (n === Ct.transparentSrc ? ' data-mce-placeholder="1"' : "")), r(e, 'data-mce-src="' + t + '"', 'data-mce-src="' + n + '"') }

        function f(t, n) { X(l.undoManager.data, function(e) { "fragmented" === e.type ? e.fragments = R(e.fragments, function(e) { return o(e, t, n) }) : e.content = o(e.content, t, n) }) }

        function n(n) {
            return u = u || Kv(l, g), v().then(t(function(c) {
                var e = R(c, function(e) { return e.blobInfo });
                return u.upload(e, Wv(l)).then(t(function(e) {
                    var s = [],
                        t = R(e, function(e, t) {
                            var n, r, o, i, a = c[t].blobInfo,
                                u = c[t].image;
                            return e.status && l.getParam("images_replace_blob_uris", !0, "boolean") ? (m.removeByUri(u.src), bh(l) || (r = u, o = e.url, i = l.convertURL(o, "src"), f(r.src, o), l.$(r).attr({ src: l.getParam("images_reuse_filename", !1, "boolean") ? o + (-1 === o.indexOf("?") ? "?" : "&") + (new Date).getTime() : o, "data-mce-src": i }))) : e.error && (e.error.options.remove && (f(u.getAttribute("src"), Ct.transparentSrc), s.push(u)), n = e.error.message, Mv(l, yu.translate(["Failed to upload image: {0}", n]))), { element: u, status: e.status, uploadUri: e.url, blobInfo: a }
                        });
                    return 0 < t.length && h.fireIfChanged(), 0 < s.length && (bh(l) ? console.error("Removing images on failed uploads is currently unsupported for RTC") : l.undoManager.transact(function() { X(s, function(e) { l.dom.remove(e), m.removeByUri(e.src) }) })), n && n(t), t
                }))
            }))
        }

        function e(e) { if (Ms(l)) return n(e) }

        function i(t) { return !1 !== j(p, function(e) { return e(t) }) && (0 !== t.getAttribute("src").indexOf("data:") || l.getParam("images_dataimg_filter", x, "function")(t)) }

        function a(e) { return e.replace(/src="(blob:[^"]+)"/g, function(e, n) { var t = g.getResultUri(n); if (t) return 'src="' + t + '"'; var r = (r = m.getByUri(n)) || P(l.editorManager.get(), function(e, t) { return e || t.editorUpload && t.editorUpload.blobCache.getByUri(n) }, null); return r ? 'src="data:' + r.blob().type + ";base64," + r.base64() + '"' : e }) }
        var u, s, c, d, m = qv(),
            g = Hv(),
            p = [],
            h = (d = pu(null), (c = l).on("change AddUndo", function(e) { d.set(ke({}, e.level)) }), {
                fireIfChanged: function() {
                    var t = c.undoManager.data;
                    Y(t).filter(function(e) { return !mh(d.get(), e) }).each(function(e) { c.setDirty(!0), c.fire("change", { level: e, lastLevel: $(t, t.length - 2).getOrNull() }) })
                }
            }),
            v = function() { return (s = s || Wh(g, m)).findAll(l.getBody(), i).then(t(function(e) { return e = U(e, function(e) { return "string" != typeof e || void Mv(l, e) }), bh(l) || X(e, function(e) { f(e.image.src, e.blobInfo.blobUri()), e.image.src = e.blobInfo.blobUri(), e.image.removeAttribute("data-mce-src") }), e })) };
        return l.on("SetContent", function() {
            (Ms(l) ? e : v)()
        }), l.on("RawSaveContent", function(e) { e.content = a(e.content) }), l.on("GetContent", function(e) { e.source_view || "raw" === e.format || "tree" === e.format || (e.content = a(e.content)) }), l.on("PostRender", function() {
            l.parser.addNodeFilter("img", function(e) {
                X(e, function(e) {
                    var t, n = e.attr("src");
                    m.getByUri(n) || (t = g.getResultUri(n)) && e.attr("src", t)
                })
            })
        }), { blobCache: m, addFilter: function(e) { p.push(e) }, uploadImages: n, uploadImagesAuto: e, scanForImages: v, destroy: function() { m.destroy(), g.destroy(), s = u = null } }
    }

    function Yv(e, t) {
        function m(e) {
            o = "string" == typeof e ? { name: e, classes: [], attrs: {} } : e;
            var t, n = my.create(o.name),
                r = n;
            return (t = o).classes.length && my.addClass(r, t.classes.join(" ")), my.setAttribs(r, t.attrs), n
        }
        var n, o, r, g = t && t.schema || go({}),
            p = function(n, e, t) {
                var r, o, i, a, u, s, c, l = 0 < e.length && e[0],
                    f = l && l.name,
                    d = (a = f, u = "string" != typeof(i = n) ? i.nodeName.toLowerCase() : i, !(!(c = (s = g.getElementRule(u)) && s.parentsRequired) || !c.length) && (a && -1 !== St.inArray(c, a) ? a : c[0]));
                if (d) f === d ? (o = e[0], e = e.slice(1)) : o = d;
                else if (l) o = e[0], e = e.slice(1);
                else if (!t) return n;
                return o && (r = m(o)).appendChild(n), t && (r || (r = my.create("div")).appendChild(n), St.each(t, function(e) {
                    var t = m(e);
                    r.insertBefore(t, n)
                })), p(r, e, o && o.siblings)
            };
        return e && e.length ? (n = m(o = e[0]), (r = my.create("div")).appendChild(p(n, e.slice(1), o.siblings)), r) : ""
    }

    function Gv(e) {
        var t, a = { classes: [], attrs: {} };
        return "*" !== (e = a.selector = St.trim(e)) && (t = e.replace(/(?:([#\.]|::?)([\w\-]+)|(\[)([^\]]+)\]?)/g, function(e, t, n, r, o) {
            switch (t) {
                case "#":
                    a.attrs.id = n;
                    break;
                case ".":
                    a.classes.push(n);
                    break;
                case ":":
                    -1 !== St.inArray("checked disabled enabled read-only required".split(" "), n) && (a.attrs[n] = n)
            }
            var i;
            return "[" !== r || (i = o.match(/([\w\-]+)(?:\=\"([^\"]+))?/)) && (a.attrs[i[1]] = i[2]), ""
        })), a.name = t || "div", a
    }

    function Jv(n, e) {
        var r, t, o = "",
            i = (t = n.getParam("preview_styles", "font-family font-size font-weight font-style text-decoration text-transform color background-color border border-radius outline text-shadow"), K(t) ? t : "");
        if ("" === i) return "";

        function a(e) { return e.replace(/%(\w+)/g, "") }
        if ("string" == typeof e) {
            if (!(e = n.formatter.get(e))) return;
            e = e[0]
        }
        if ("preview" in e) {
            var u = ae(e, "preview");
            if (ln(u, !1)) return "";
            i = u.getOr(i)
        }
        var s, c = e.block || e.inline || "span",
            l = (s = e.selector) && "string" == typeof s ? (s = (s = s.split(/\s*,\s*/)[0]).replace(/\s*(~\+|~|\+|>)\s*/g, "$1"), St.map(s.split(/(?:>|\s+(?![^\[\]]+\]))/), function(e) {
                var t = St.map(e.split(/(?:~\+|~|\+)/), Gv),
                    n = t.pop();
                return t.length && (n.siblings = t), n
            }).reverse()) : [],
            f = l.length ? (l[0].name || (l[0].name = c), c = e.selector, Yv(l, n)) : Yv([c], n),
            d = my.select(c, f)[0] || f.firstChild;
        return dy(e.styles, function(e, t) {
            var n = a(e);
            n && my.setStyle(d, t, n)
        }), dy(e.attributes, function(e, t) {
            var n = a(e);
            n && my.setAttrib(d, t, n)
        }), dy(e.classes, function(e) {
            var t = a(e);
            my.hasClass(d, t) || my.addClass(d, t)
        }), n.fire("PreviewFormats"), my.setStyles(f, { position: "absolute", left: -65535 }), n.getBody().appendChild(f), r = my.getStyle(n.getBody(), "fontSize", !0), r = /px$/.test(r) ? parseInt(r, 10) : 0, dy(i.split(" "), function(e) {
            var t = my.getStyle(d, e, !0);
            if (!("background-color" === e && /transparent|rgba\s*\([^)]+,\s*0\)/.test(t) && (t = my.getStyle(n.getBody(), e, !0), "#ffffff" === my.toHex(t).toLowerCase()) || "color" === e && "#000000" === my.toHex(t).toLowerCase())) {
                if ("font-size" === e && /em|%$/.test(t)) {
                    if (0 === r) return;
                    t = parseFloat(t) / (/%$/.test(t) ? 100 : 1) * r + "px"
                }
                "border" === e && t && (o += "padding:0 2px;"), o += e + ":" + t + ";"
            }
        }), n.fire("AfterPreviewFormats"), my.remove(f), o
    }

    function Qv(c) {
        var e, r, t, n, o, i, a = (n = {}, (o = function(e, t) { e && (K(e) ? (X(t = !S(t) ? [t] : t, function(e) { b(e.deep) && (e.deep = !Sl(e)), b(e.split) && (e.split = !Sl(e) || El(e)), b(e.remove) && Sl(e) && !El(e) && (e.remove = "none"), Sl(e) && El(e) && (e.mixed = !0, e.block_expand = !0), K(e.classes) && (e.classes = e.classes.split(/\s+/)) }), n[e] = t) : Q(e, function(e, t) { o(t, e) })) })((r = (e = c).dom, t = { valigntop: [{ selector: "td,th", styles: { verticalAlign: "top" } }], valignmiddle: [{ selector: "td,th", styles: { verticalAlign: "middle" } }], valignbottom: [{ selector: "td,th", styles: { verticalAlign: "bottom" } }], alignleft: [{ selector: "figure.image", collapsed: !1, classes: "align-left", ceFalseOverride: !0, preview: "font-family font-size" }, { selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li", styles: { textAlign: "left" }, inherit: !1, preview: !1, defaultBlock: "div" }, { selector: "img,table,audio,video", collapsed: !1, styles: { float: "left" }, preview: "font-family font-size" }], aligncenter: [{ selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li", styles: { textAlign: "center" }, inherit: !1, preview: "font-family font-size", defaultBlock: "div" }, { selector: "figure.image", collapsed: !1, classes: "align-center", ceFalseOverride: !0, preview: "font-family font-size" }, { selector: "img,audio,video", collapsed: !1, styles: { display: "block", marginLeft: "auto", marginRight: "auto" }, preview: !1 }, { selector: "table", collapsed: !1, styles: { marginLeft: "auto", marginRight: "auto" }, preview: "font-family font-size" }], alignright: [{ selector: "figure.image", collapsed: !1, classes: "align-right", ceFalseOverride: !0, preview: "font-family font-size" }, { selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li", styles: { textAlign: "right" }, inherit: !1, preview: "font-family font-size", defaultBlock: "div" }, { selector: "img,table,audio,video", collapsed: !1, styles: { float: "right" }, preview: "font-family font-size" }], alignjustify: [{ selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li", styles: { textAlign: "justify" }, inherit: !1, defaultBlock: "div", preview: "font-family font-size" }], bold: [{ inline: "strong", remove: "all", preserve_attributes: ["class", "style"] }, { inline: "span", styles: { fontWeight: "bold" } }, { inline: "b", remove: "all", preserve_attributes: ["class", "style"] }], italic: [{ inline: "em", remove: "all", preserve_attributes: ["class", "style"] }, { inline: "span", styles: { fontStyle: "italic" } }, { inline: "i", remove: "all", preserve_attributes: ["class", "style"] }], underline: [{ inline: "span", styles: { textDecoration: "underline" }, exact: !0 }, { inline: "u", remove: "all", preserve_attributes: ["class", "style"] }], strikethrough: [{ inline: "span", styles: { textDecoration: "line-through" }, exact: !0 }, { inline: "strike", remove: "all", preserve_attributes: ["class", "style"] }, { inline: "s", remove: "all", preserve_attributes: ["class", "style"] }], forecolor: { inline: "span", styles: { color: "%value" }, links: !0, remove_similar: !0, clear_child_styles: !0 }, hilitecolor: { inline: "span", styles: { backgroundColor: "%value" }, links: !0, remove_similar: !0, clear_child_styles: !0 }, fontname: { inline: "span", toggle: !1, styles: { fontFamily: "%value" }, clear_child_styles: !0 }, fontsize: { inline: "span", toggle: !1, styles: { fontSize: "%value" }, clear_child_styles: !0 }, lineheight: { selector: "h1,h2,h3,h4,h5,h6,p,li,td,th,div", defaultBlock: "p", styles: { lineHeight: "%value" } }, fontsize_class: { inline: "span", attributes: { class: "%value" } }, blockquote: { block: "blockquote", wrapper: !0, remove: "all" }, subscript: { inline: "sub" }, superscript: { inline: "sup" }, code: { inline: "code" }, link: { inline: "a", selector: "a", remove: "all", split: !0, deep: !0, onmatch: function(e, t, n) { return Hn(e) && e.hasAttribute("href") }, onformat: function(n, e, t) { St.each(t, function(e, t) { r.setAttrib(n, t, e) }) } }, lang: { inline: "span", clear_child_styles: !0, remove_similar: !0, attributes: { lang: "%value", "data-mce-lang": function(e) { var t; return null !== (t = null == e ? void 0 : e.customValue) && void 0 !== t ? t : null } } }, removeformat: [{ selector: "b,strong,em,i,font,u,strike,s,sub,sup,dfn,code,samp,kbd,var,cite,mark,q,del,ins,small", remove: "all", split: !0, expand: !1, block_expand: !0, deep: !0 }, { selector: "span", attributes: ["style", "class"], remove: "empty", split: !0, expand: !1, deep: !0 }, { selector: "*", attributes: ["style", "class"], split: !1, expand: !1, deep: !0 }] }, St.each("p h1 h2 h3 h4 h5 h6 div address pre dt dd samp".split(/\s/), function(e) { t[e] = { block: e, remove: "all" } }), t)), o(e.getParam("formats")), { get: function(e) { return V(e) ? n[e] : n }, has: function(e) { return Ee(n, e) }, register: o, unregister: function(e) { return e && n[e] && delete n[e], n } }),
            l = pu(null);
        return function(e) {
            e.addShortcut("meta+b", "", "Bold"), e.addShortcut("meta+i", "", "Italic"), e.addShortcut("meta+u", "", "Underline");
            for (var t = 1; t <= 6; t++) e.addShortcut("access+" + t, "", ["FormatBlock", !1, "h" + t]);
            e.addShortcut("access+7", "", ["FormatBlock", !1, "p"]), e.addShortcut("access+8", "", ["FormatBlock", !1, "div"]), e.addShortcut("access+9", "", ["FormatBlock", !1, "address"])
        }(c), (i = c).on("mouseup keydown", function(e) {
            var t = i,
                n = e.keyCode,
                r = t.selection,
                o = t.getBody();
            qg(t, null, !1), 8 !== n && 46 !== n || !r.isCollapsed() || r.getStart().innerHTML !== xp || qg(t, Zc(o, r.getStart())), 37 !== n && 39 !== n || qg(t, Zc(o, r.getStart()))
        }), {
            get: a.get,
            has: a.has,
            register: a.register,
            unregister: a.unregister,
            apply: function(e, t, n) {
                var r = e,
                    o = t,
                    i = n;
                wh(c).formatter.apply(r, o, i)
            },
            remove: function(e, t, n, r) {
                var o = e,
                    i = t,
                    a = n,
                    u = r;
                wh(c).formatter.remove(o, i, a, u)
            },
            toggle: function(e, t, n) {
                var r = e,
                    o = t,
                    i = n;
                wh(c).formatter.toggle(r, o, i)
            },
            match: function(e, t, n, r) { return o = e, i = t, a = n, u = r, wh(c).formatter.match(o, i, a, u); var o, i, a, u },
            closest: function(e) { return t = e, wh(c).formatter.closest(t); var t },
            matchAll: function(e, t) { return n = e, r = t, wh(c).formatter.matchAll(n, r); var n, r },
            matchNode: function(e, t, n, r) { return o = e, i = t, a = n, u = r, wh(c).formatter.matchNode(o, i, a, u); var o, i, a, u },
            canApply: function(e) { return t = e, wh(c).formatter.canApply(t); var t },
            formatChanged: function(e, t, n, r) { return o = l, i = e, a = t, u = n, s = r, wh(c).formatter.formatChanged(o, i, a, u, s); var o, i, a, u, s },
            getCssText: A(Jv, c)
        }
    }

    function Zv(e) {
        switch (e.toLowerCase()) {
            case "undo":
            case "redo":
            case "mcerepaint":
            case "mcefocus":
                return 1;
            default:
                return
        }
    }

    function eb(s) {
        var e, n, r, o, i, c = wu(),
            l = pu(0),
            f = pu(0),
            d = {
                data: [],
                typing: !1,
                beforeChange: function() {
                    var e = l,
                        t = c;
                    wh(s).undoManager.beforeChange(e, t)
                },
                add: function(e, t) { return n = d, r = f, o = l, i = c, a = e, u = t, wh(s).undoManager.add(n, r, o, i, a, u); var n, r, o, i, a, u },
                undo: function() { return e = d, t = l, n = f, wh(s).undoManager.undo(e, t, n); var e, t, n },
                redo: function() { return e = f, t = d.data, wh(s).undoManager.redo(e, t); var e, t },
                clear: function() {
                    var e = d,
                        t = f;
                    wh(s).undoManager.clear(e, t)
                },
                reset: function() {
                    var e = d;
                    wh(s).undoManager.reset(e)
                },
                hasUndo: function() { return e = d, t = f, wh(s).undoManager.hasUndo(e, t); var e, t },
                hasRedo: function() { return e = d, t = f, wh(s).undoManager.hasRedo(e, t); var e, t },
                transact: function(e) { return t = d, n = l, r = e, wh(s).undoManager.transact(t, n, r); var t, n, r },
                ignore: function(e) {
                    var t = l,
                        n = e;
                    wh(s).undoManager.ignore(t, n)
                },
                extra: function(e, t) {
                    var n = d,
                        r = f,
                        o = e,
                        i = t;
                    wh(s).undoManager.extra(n, r, o, i)
                }
            };
        return bh(s) || (r = d, o = l, i = pu(!1), (n = s).on("init", function() { r.add() }), n.on("BeforeExecCommand", function(e) { Zv(e.command) || (hh(r, o), r.beforeChange()) }), n.on("ExecCommand", function(e) { Zv(e.command) || a(e) }), n.on("ObjectResizeStart cut", function() { r.beforeChange() }), n.on("SaveContent ObjectResized blur", a), n.on("dragend", a), n.on("keyup", function(e) {
            var t = e.keyCode;
            e.isDefaultPrevented() || ((33 <= t && t <= 36 || 37 <= t && t <= 40 || 45 === t || e.ctrlKey) && (a(), n.nodeChanged()), 46 !== t && 8 !== t || n.nodeChanged(), i.get() && r.typing && !1 === mh(ch(n), r.data[0]) && (!1 === n.isDirty() && (n.setDirty(!0), n.fire("change", { level: r.data[0], lastLevel: null })), n.fire("TypingUndo"), i.set(!1), n.nodeChanged()))
        }), n.on("keydown", function(e) {
            var t, n = e.keyCode;
            e.isDefaultPrevented() || (33 <= n && n <= 36 || 37 <= n && n <= 40 || 45 === n ? r.typing && a(e) : (t = e.ctrlKey && !e.altKey || e.metaKey, !(n < 16 || 20 < n) || 224 === n || 91 === n || r.typing || t || (r.beforeChange(), ph(r, !0, o), r.add({}, e), i.set(!0))))
        }), n.on("mousedown", function(e) { r.typing && a(e) }), n.on("input", function(e) { e.inputType && ("insertReplacementText" === e.inputType || "insertText" === e.inputType && null === e.data || "insertFromPaste" === e.inputType || "insertFromDrop" === e.inputType) && a(e) }), n.on("AddUndo Undo Redo ClearUndos", function(e) { e.isDefaultPrevented() || n.nodeChanged() })), (e = s).addShortcut("meta+z", "", "Undo"), e.addShortcut("meta+y,meta+shift+z", "", "Redo"), d;

        function a(e) { ph(r, !1, o), r.add({}, e) }
    }

    function tb(e) { return "keydown" === e.type || "keyup" === e.type }

    function nb(e) { var t = e.keyCode; return t === $f.BACKSPACE || t === $f.DELETE }

    function rb(e, t) { return Ue(Et.fromDom(t), e.getParam("inline_boundaries_selector", "a[href],code,.mce-annotation", "string")) }

    function ob(e, t, n) { var r, o, i = (r = e, o = t, U(cu.DOM.getParents(n.container(), "*", o), r)); return he.from(i[i.length - 1]) }

    function ib(e, t) {
        if (!t) return t;
        var n = t.container(),
            r = t.offset();
        return e ? Kr(n) ? qn(n.nextSibling) ? bs(n.nextSibling, 0) : bs.after(n) : Gr(t) ? bs(n, r + 1) : t : Kr(n) ? qn(n.previousSibling) ? bs(n.previousSibling, n.previousSibling.data.length) : bs.before(n) : Jr(t) ? bs(n, r - 1) : t
    }

    function ab(e) { return Eo(e) || ko(e) }

    function ub(e, t) { return He(e, t) ? vr(t, ab, (n = e, function(e) { return je(n, Et.fromDom(e.dom.parentNode)) })) : he.none(); var n }

    function sb(e) {
        var t, n, r;
        e.dom.isEmpty(e.getBody()) && (e.setContent(""), r = (n = (t = e).getBody()).firstChild && t.dom.isBlock(n.firstChild) ? n.firstChild : n, t.selection.setCursorLocation(r, 0))
    }

    function cb(e, t) { return { from: e, to: t } }

    function lb(e, t) { return ub(Et.fromDom(e), Et.fromDom(t.container())).map(function(e) { return { block: e, position: t } }) }

    function fb(e) { var t, n = M(t = On(e), So).fold(J(t), function(e) { return t.slice(0, e) }); return X(n, Mn), n }

    function db(e, t) { return I(xm(t, e).reverse(), function(e) { return oo(e) }).each(Mn) }

    function mb(e, t, n, r) {
        if (oo(n)) return ym(n), mf(n.dom);
        0 === U(Pt(r), function(e) { return !oo(e) }).length && oo(t) && Vt(r, Et.fromTag("br"));
        var o = df(n.dom, bs.before(r.dom));
        return X(fb(t), function(e) { Vt(r, e) }), db(e, t), o
    }

    function gb(e, t, n) { if (oo(n)) return Mn(n), oo(t) && ym(t), mf(t.dom); var r = gf(n.dom); return X(fb(t), function(e) { In(n, e) }), db(e, t), r }

    function pb(e, t) { Jc(e, t.dom).map(function(e) { return e.getNode() }).map(Et.fromDom).filter($r).each(Mn) }

    function hb(e, t, n) { return pb(!0, t), pb(!1, n), (He(o = n, r = t) ? (i = xm(r, o), he.from(i[i.length - 1])) : he.none()).fold(A(gb, e, t, n), A(mb, e, t, n)); var r, o, i }

    function vb(e, t, n, r) { return t ? hb(e, r, n) : hb(e, n, r) }

    function bb(t, n) {
        var e, r, o, i, a, u, s, c = Et.fromDom(t.getBody()),
            l = (e = c.dom, r = n, ((o = t.selection.getRng()).collapsed ? (a = r, u = lb(i = e, bs.fromRangeStart(o)), s = u.bind(function(e) { return cf(a, i, e.position).bind(function(e) { return lb(i, e).map(function(e) { return t = i, n = a, Xn((r = e).position.getNode()) && !1 === oo(r.block) ? Jc(!1, r.block.dom).bind(function(e) { return e.isEqual(r.position) ? cf(n, t, e).bind(function(e) { return lb(t, e) }) : he.some(r) }).getOr(r) : r; var t, n, r }) }) }), fn(u, s, cb).filter(function(e) { return !1 === je(e.from.block, e.to.block) && Dt((n = e).from.block).bind(function(t) { return Dt(n.to.block).filter(function(e) { return je(t, e) }) }).isSome() && !1 === Jn((t = e).from.block.dom) && !1 === Jn(t.to.block.dom); var t, n })) : he.none()).bind(function(e) { return vb(c, n, e.from.block, e.to.block) }));
        return l.each(function(e) { t.selection.setRng(e.toRange()) }), l.isSome()
    }

    function yb(e, t) {
        var n = Et.fromDom(t),
            r = A(je, e);
        return hr(n, Ao, r).isSome()
    }

    function Cb(e) {
        var n, r, o, t, i, a, u, s, c, l, f = Et.fromDom(e.getBody()),
            d = e.selection.getRng();
        return a = d, c = df((i = f).dom, bs.fromRangeStart(a)).isNone(), l = ff(i.dom, bs.fromRangeEnd(a)).isNone(), !yb(u = i, (s = a).startContainer) && !yb(u, s.endContainer) && c && l ? ((t = e).setContent(""), t.selection.setCursorLocation(), !0) : (n = f, r = e.selection, o = r.getRng(), fn(ub(n, Et.fromDom(o.startContainer)), ub(n, Et.fromDom(o.endContainer)), function(e, t) { return !1 === je(e, t) && (o.deleteContents(), vb(n, !0, e, t).each(function(e) { r.setRng(e.toRange()) }), !0) }).getOr(!1))
    }

    function wb(e, t) { return !e.selection.isCollapsed() && Cb(e) }

    function xb(e, t, n, r, o) { return he.from(t._selectionOverrides.showCaret(e, n, r, o)) }

    function Sb(e, t) { var n, r; return e.fire("BeforeObjectSelected", { target: t }).isDefaultPrevented() ? he.none() : he.some(((r = (n = t).ownerDocument.createRange()).selectNode(n), r)) }

    function Eb(e, t, n) {
        var r = fc(1, e.getBody(), t),
            o = bs.fromRangeStart(r),
            i = o.getNode();
        if (Pc(i)) return xb(1, e, i, !o.isAtEnd(), !1);
        var a = o.getNode(!0);
        if (Pc(a)) return xb(1, e, a, !1, !1);
        var u = e.dom.getParent(o.getNode(), function(e) { return Cy(e) || yy(e) });
        return Pc(u) ? xb(1, e, u, !1, n) : he.none()
    }

    function Nb(e, t, n) { return t.collapsed ? Eb(e, t, n).getOr(t) : t }

    function kb(e) { return ap(e) || np(e) }

    function _b(e) { return up(e) || rp(e) }

    function Ab(n, r, e, t, o, i) {
        var a, u;
        return xb(t, n, i.getNode(!o), o, !0).each(function(e) {
            var t;
            r.collapsed ? (t = r.cloneRange(), o ? t.setEnd(e.startContainer, e.startOffset) : t.setStart(e.endContainer, e.endOffset), t.deleteContents()) : r.deleteContents(), n.selection.setRng(e)
        }), a = n.dom, qn(u = e) && 0 === u.data.length && a.remove(u), !0
    }

    function Tb(e, t) {
        var n = e.selection.getRng();
        if (!qn(n.commonAncestorContainer)) return !1;
        var r = t ? vc.Forwards : vc.Backwards,
            o = Wc(e.getBody()),
            i = A(pc, t ? o.next : o.prev),
            a = t ? kb : _b,
            u = mc(r, e.getBody(), n),
            s = ib(t, i(u));
        if (!s || !hc(u, s)) return !1;
        if (a(s)) return Ab(e, n, u.getNode(), r, t, s);
        var c = i(s);
        return !!(c && a(c) && hc(s, c)) && Ab(e, n, u.getNode(), r, t, c)
    }

    function Rb(l, f, d) {
        return cf(f, l, d).bind(function(e) {
            return s = e.getNode(), Ao(Et.fromDom(s)) || ko(Et.fromDom(s)) || (o = l, u = e, dc(!(i = f), a = d).fold(function() { return dc(i, u).fold(T, c) }, c)) ? he.none() : f && Jn(e.getNode()) || !1 === f && Jn(e.getNode(!0)) ? (t = l, n = d, r = e.getNode(!1 === f), ub(Et.fromDom(t), Et.fromDom(n.getNode())).map(function(e) { return oo(e) ? wy.remove(e.dom) : wy.moveToElement(r) }).orThunk(function() { return he.some(wy.moveToElement(r)) })) : f && up(d) || !1 === f && ap(d) ? he.some(wy.moveToPosition(e)) : he.none();
            var t, n, r, o, i, a, u, s;

            function c(e) { return qr(Et.fromDom(e)) && !uc(a, u, o) }
        })
    }

    function Db(e, t) { return he.from(_f(e.getBody(), t)) }

    function Ob(m, g) { var e = m.selection.getNode(); return Db(m, e).filter(Jn).fold(function() { return s = m.getBody(), l = fc((c = g) ? 1 : -1, s, m.selection.getRng()), f = bs.fromRangeStart(l), d = Et.fromDom(s), (!1 === c && up(f) ? he.some(wy.remove(f.getNode(!0))) : c && ap(f) ? he.some(wy.remove(f.getNode())) : !1 === c && ap(f) && Rm(d, f) ? dp(d, f).map(function(e) { return wy.remove(e.getNode()) }) : c && up(f) && Tm(d, f) ? mp(d, f).map(function(e) { return wy.remove(e.getNode()) }) : (r = s, e = c, a = (o = f).getNode(!1 === (i = e)), u = i ? "after" : "before", Hn(a) && a.getAttribute("data-mce-caret") === u ? (n = o.getNode(!1 === (t = e)), (t && Jn(n.nextSibling) ? he.some(wy.moveToElement(n.nextSibling)) : !1 === t && Jn(n.previousSibling) ? he.some(wy.moveToElement(n.previousSibling)) : he.none()).fold(function() { return Rb(r, e, o) }, he.some)) : Rb(r, e, o).bind(function(e) { return t = r, n = o, e.fold(function(e) { return he.some(wy.remove(e)) }, function(e) { return he.some(wy.moveToElement(e)) }, function(e) { return uc(n, e, t) ? he.none() : he.some(wy.moveToPosition(e)) }); var t, n }))).exists(function(e) { return e.fold(function(e) { return o._selectionOverrides.hideFakeCaret(), tg(o, i, Et.fromDom(e)), !0 }, (r = i = g, function(e) { var t = r ? bs.before(e) : bs.after(e); return n.selection.setRng(t.toRange()), !0 }), (t = n = o = m, function(e) { return t.selection.setRng(e.toRange()), !0 })); var t, n, r, o, i }); var r, e, o, t, n, i, a, u, s, c, l, f, d }, x) }

    function Bb(e, t) { var n = e.selection.getNode(); return !(!Jn(n) || Qn(n)) && Db(e, n.parentNode).filter(Jn).fold(function() { return X(Au(Et.fromDom(e.getBody()), ".mce-offscreen-selection"), Mn), tg(e, t, Et.fromDom(e.selection.getNode())), sb(e), !0 }, x) }

    function Pb(e) {
        var t, n = e.dom,
            r = e.selection,
            o = _f(e.getBody(), r.getNode());
        return Gn(o) && n.isBlock(o) && n.isEmpty(o) && (t = n.create("br", { "data-mce-bogus": "1" }), n.setHTML(o, ""), o.appendChild(t), r.setRng(bs.before(t).toRange())), !0
    }

    function Lb(e, t) { return (e.selection.isCollapsed() ? Ob : Bb)(e, t) }

    function Ib(e, t) { return !!e.selection.isCollapsed() && (n = e, r = t, o = bs.fromRangeStart(n.selection.getRng()), cf(r, n.getBody(), o).filter(function(e) { return (r ? ep : tp)(e) }).bind(function(e) { return he.from(sc(r ? 0 : -1, e)) }).exists(function(e) { return n.selection.select(e), !0 })); var n, r, o }

    function Mb(e) { return xy(e) && e.data[0] === Oo }

    function Fb(e) { return xy(e) && e.data[e.data.length - 1] === Oo }

    function Ub(e) { return e.ownerDocument.createTextNode(Oo) }

    function zb(e, t) { return (e ? function(e) { if (xy(e.previousSibling)) return Fb(e.previousSibling) || e.previousSibling.appendData(Oo), e.previousSibling; if (xy(e)) return Mb(e) || e.insertData(0, Oo), e; var t = Ub(e); return e.parentNode.insertBefore(t, e), t } : function(e) { if (xy(e.nextSibling)) return Mb(e.nextSibling) || e.nextSibling.insertData(0, Oo), e.nextSibling; if (xy(e)) return Fb(e) || e.appendData(Oo), e; var t = Ub(e); return e.nextSibling ? e.parentNode.insertBefore(t, e.nextSibling) : e.parentNode.appendChild(t), t })(t) }

    function jb(e, t) { return qn(e.container()) ? zb(t, e.container()) : zb(t, e.getNode()) }

    function Hb(e, t) { var n = t.get(); return n && e.container() === n && Kr(n) }

    function Vb(n, e) {
        return e.fold(function(e) { Tc(n.get()); var t = Sy(e); return n.set(t), he.some(bs(t, t.length - 1)) }, function(e) {
            return mf(e).map(function(e) {
                if (Hb(e, n)) return bs(n.get(), 1);
                Tc(n.get());
                var t = jb(e, !0);
                return n.set(t), bs(t, 1)
            })
        }, function(e) {
            return gf(e).map(function(e) {
                if (Hb(e, n)) return bs(n.get(), n.get().length - 1);
                Tc(n.get());
                var t = jb(e, !1);
                return n.set(t), bs(t, t.length - 1)
            })
        }, function(e) { Tc(n.get()); var t = Ey(e); return n.set(t), he.some(bs(t, 1)) })
    }

    function qb(e, t) { for (var n = 0; n < e.length; n++) { var r = e[n].apply(null, t); if (r.isSome()) return r } return he.none() }

    function $b(e, t) { return ac(t, e) || e }

    function Wb(e, t, n) {
        var r = vy(n),
            o = $b(t, r.container());
        return ob(e, o, r).fold(function() { return ff(o, r).bind(A(ob, e, o)).map(function(e) { return Ny.before(e) }) }, he.none)
    }

    function Kb(e, t) { return null === Zc(e, t) }

    function Xb(e, t, n) { return ob(e, t, n).filter(A(Kb, t)) }

    function Yb(e, t, n) { var r = by(n); return Xb(e, t, r).bind(function(e) { return df(e, r).isNone() ? he.some(Ny.start(e)) : he.none() }) }

    function Gb(e, t, n) { var r = vy(n); return Xb(e, t, r).bind(function(e) { return ff(e, r).isNone() ? he.some(Ny.end(e)) : he.none() }) }

    function Jb(e, t, n) {
        var r = by(n),
            o = $b(t, r.container());
        return ob(e, o, r).fold(function() { return df(o, r).bind(A(ob, e, o)).map(function(e) { return Ny.after(e) }) }, he.none)
    }

    function Qb(e) { return !1 === (t = ky(e), "rtl" === cu.DOM.getStyle(t, "direction", !0) || (n = t.textContent, hy.test(n))); var t, n }

    function Zb(e, t, n) { return qb([Wb, Yb, Gb, Jb], [e, t, n]).filter(Qb) }

    function ey(e) { return e.fold(J("before"), J("start"), J("end"), J("after")) }

    function ty(e) { return e.fold(Ny.before, Ny.before, Ny.after, Ny.after) }

    function ny(e) { return e.fold(Ny.start, Ny.start, Ny.end, Ny.end) }

    function ry(a, e, u, t, n, s) { return fn(ob(e, u, t), ob(e, u, n), function(e, t) { return e !== t && (r = t, o = ac(e, n = u), i = ac(r, n), o && o === i) ? Ny.after(a ? e : t) : s; var n, r, o, i }).getOr(s) }

    function oy(e, r) { return e.fold(x, function(e) { return n = r, !(ey(t = e) === ey(n) && ky(t) === ky(n)); var t, n }) }

    function iy(e, t) { return e ? t.fold(i(he.some, Ny.start), he.none, i(he.some, Ny.after), he.none) : t.fold(he.none, i(he.some, Ny.before), he.none, i(he.some, Ny.end)) }

    function ay(e, a, u, s) {
        var t = ib(e, s),
            c = Zb(a, u, t);
        return Zb(a, u, t).bind(A(iy, e)).orThunk(function() { return n = a, r = u, o = c, i = ib(t = e, s), cf(t, r, i).map(A(ib, t)).fold(function() { return o.map(ty) }, function(e) { return Zb(n, r, e).map(A(ry, t, n, r, i, e)).filter(A(oy, o)) }).filter(Qb); var t, n, r, o, i })
    }

    function uy(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        var r = window.console;
        r && (r.error || r.log).apply(r, _e([e], t))
    }
    var sy, cy, ly = function(t, e) {
            var n = t.editorManager.baseURL + "/skins/content",
                r = "content" + t.editorManager.suffix + ".css",
                o = !0 === t.inline;
            return R(e, function(e) { return /^[a-z0-9\-]+$/i.test(e) && !o ? n + "/" + e + "/" + r : t.documentBaseURI.toAbsolute(e) })
        },
        fy = 0,
        dy = St.each,
        my = cu.DOM,
        gy = [9, 27, $f.HOME, $f.END, 19, 20, 44, 144, 145, 33, 34, 45, 16, 17, 18, 91, 92, 93, $f.DOWN, $f.UP, $f.LEFT, $f.RIGHT].concat(Ct.browser.isFirefox() ? [224] : []),
        py = "data-mce-placeholder",
        hy = /[\u0591-\u07FF\uFB1D-\uFDFF\uFE70-\uFEFC]/,
        vy = A(ib, !0),
        by = A(ib, !1),
        yy = Gn,
        Cy = Jn,
        wy = ar([{ remove: ["element"] }, { moveToElement: ["element"] }, { moveToPosition: ["position"] }]),
        xy = qn,
        Sy = A(zb, !0),
        Ey = A(zb, !1),
        Ny = ar([{ before: ["element"] }, { start: ["element"] }, { end: ["element"] }, { after: ["element"] }]),
        ky = function(e) { return e.fold(u, u, u, u) };

    function _y(e, t, n) { var r = e ? 1 : -1; return t.setRng(bs(n.container(), n.offset() + r).toRange()), t.getSel().modify("move", e ? "forward" : "backward", "word"), !0 }

    function Ay(e, t) { return e === vc.Backwards ? H(t) : t }

    function Ty(e, t, n, r) {
        for (var o, i, a, u, s = Wc(n), c = r, l = []; c;) {
            var f = (a = s, u = c, t === vc.Forwards ? a.next(u) : a.prev(u));
            if (!f) break;
            if (Xn(f.getNode(!1))) return t === vc.Forwards ? { positions: Ay(t, l).concat([f]), breakType: sy.Br, breakAt: he.some(f) } : { positions: Ay(t, l), breakType: sy.Br, breakAt: he.some(f) };
            if (f.isVisible()) {
                if (e(c, f)) { var d = (o = c, Xn((i = f).getNode(t === vc.Forwards)) ? sy.Br : !1 === uc(o, i) ? sy.Block : sy.Wrap); return { positions: Ay(t, l), breakType: d, breakAt: he.some(f) } }
                l.push(f), c = f
            } else c = f
        }
        return { positions: Ay(t, l), breakType: sy.Eol, breakAt: he.none() }
    }

    function Ry(n, r, o, e) { return r(o, e).breakAt.map(function(e) { var t = r(o, e).positions; return n === vc.Backwards ? t.concat(e) : [e].concat(t) }).getOr([]) }

    function Dy(e, i) { return P(e, function(e, o) { return e.fold(function() { return he.some(o) }, function(r) { return fn(W(r.getClientRects()), W(o.getClientRects()), function(e, t) { var n = Math.abs(i - e.left); return Math.abs(i - t.left) <= n ? o : r }).or(e) }) }, he.none()) }

    function Oy(t, e) { return W(e.getClientRects()).bind(function(e) { return Dy(t, e.left) }) }

    function By(n) {
        function e(e) { return R(e, function(e) { var t = Fu(e); return t.node = n, t }) }
        if (Hn(n)) return e(n.getClientRects());
        if (qn(n)) { var t = n.ownerDocument.createRange(); return t.setStart(n, 0), t.setEnd(n, n.data.length), e(t.getClientRects()) }
    }

    function Py(e) { return z(e, By) }
    A(ay, !1), A(ay, !0), (cy = sy = {})[cy.Br = 0] = "Br", cy[cy.Block = 1] = "Block", cy[cy.Wrap = 2] = "Wrap", cy[cy.Eol = 3] = "Eol";
    var Ly, Iy, My = A(Ty, bs.isAbove, -1),
        Fy = A(Ty, bs.isBelow, 1),
        Uy = A(Ry, -1, My),
        zy = A(Ry, 1, Fy);

    function jy(o, i, a, e, u, t) {
        function n(e) {
            var t = Py([e]); - 1 === o && (t = t.reverse());
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                if (!a(r, l)) {
                    if (0 < c.length && i(r, ge(c)) && s++, r.line = s, u(r)) return !0;
                    c.push(r)
                }
            }
        }
        var s = 0,
            c = [],
            l = ge(t.getClientRects());
        if (!l) return c;
        var r = t.getNode();
        return n(r),
            function(e, t, n, r) {
                for (; r = ic(r, e, to, t);)
                    if (n(r)) return
            }(o, e, n, r), c
    }

    function Hy(t) { return function(e) { return e.line > t } }

    function Vy(t) { return function(e) { return e.line === t } }

    function qy(e, t) { return Math.abs(e.left - t) }

    function $y(e, t) { return Math.abs(e.right - t) }

    function Wy(e, t) { return e >= t.left && e <= t.right }

    function Ky(e, t) { return e >= t.top && e <= t.bottom }

    function Xy(e, o) {
        return de(e, function(e, t) {
            var n = Math.min(qy(e, o), $y(e, o)),
                r = Math.min(qy(t, o), $y(t, o));
            return Wy(o, t) || !Wy(o, e) && (r === n && FC(t.node) || r < n) ? t : e
        })
    }

    function Yy(e, t, n, r, o) {
        var i = UC(r, e, to, t, !o);
        do { if (!i || n(i)) return } while (i = UC(i, e, to, t))
    }

    function Gy(e, t, n) {
        var r, o, i, a = Py(U(Ce(e.getElementsByTagName("*")), rc)),
            u = U(a, A(Ky, n));
        if ((i = Xy(u, t)) && ((i = Xy(function(e, r, t) {
                function n(t, e) { var n = U(Py([e]), function(e) { return !t(e, r) }); return o = o.concat(n), 0 === n.length }
                void 0 === t && (t = !0);
                var o = [];
                return o.push(r), Yy(Ly.Up, e, A(n, ju), r.node, t), Yy(Ly.Down, e, A(n, Hu), r.node, t), o
            }(e, i, !sn(i.node) && !Zn(i.node)), t)) && rc(i.node))) return { node: (r = i).node, before: qy(r, o = t) < $y(r, o) };
        return null
    }

    function Jy(e, t) { e.selection.setRng(t), fd(e, e.selection.getRng()) }

    function Qy(e, t, n) { return he.some(Nb(e, t, n)) }

    function Zy(e, t, n, r, o, i) {
        var a = t === vc.Forwards,
            u = Wc(e.getBody()),
            s = A(pc, a ? u.next : u.prev),
            c = a ? r : o;
        if (!n.collapsed) { var l = qu(n); if (i(l)) return xb(t, e, l, t === vc.Backwards, !1) }
        var f = mc(t, e.getBody(), n);
        if (c(f)) return Sb(e, f.getNode(!a));
        var d = ib(a, s(f)),
            m = Zr(n);
        if (!d) return m ? he.some(n) : he.none();
        if (c(d)) return xb(t, e, d.getNode(!a), a, !1);
        var g = s(d);
        return g && c(g) && hc(d, g) ? xb(t, e, g.getNode(!a), a, !1) : m ? Qy(e, d.toRange(), !1) : he.none()
    }

    function e0(t, e, n, r, o, i) {
        var a = mc(e, t.getBody(), n),
            u = ge(a.getClientRects()),
            s = e === Ly.Down;
        if (!u) return he.none();
        var c, l = U((s ? MC : IC)(t.getBody(), Hy(1), a), Vy(1)),
            f = u.left,
            d = Xy(l, f);
        if (d && i(d.node)) {
            var m = Math.abs(f - d.left),
                g = Math.abs(f - d.right);
            return xb(e, t, d.node, m < g, !1)
        }
        if (c = r(a) ? a.getNode() : o(a) ? a.getNode(!0) : qu(n)) {
            var p = function(e, t, n, r) {
                    function o(e) { return ge(e.getClientRects()) }
                    var i, a, u, s = Wc(t),
                        c = [],
                        l = 0,
                        f = 1 === e ? (i = s.next, a = Hu, u = ju, bs.after(r)) : (i = s.prev, a = ju, u = Hu, bs.before(r)),
                        d = o(f);
                    do {
                        if (f.isVisible()) {
                            var m = o(f);
                            if (!u(m, d)) {
                                0 < c.length && a(m, ge(c)) && l++;
                                var g = Fu(m);
                                if (g.position = f, g.line = l, n(g)) return c;
                                c.push(g)
                            }
                        }
                    } while (f = i(f));
                    return c
                }(e, t.getBody(), Hy(1), c),
                h = Xy(U(p, Vy(1)), f);
            if (h) return Qy(t, h.position.toRange(), !1);
            if (h = ge(U(p, Vy(0)))) return Qy(t, h.position.toRange(), !1)
        }
        return 0 === l.length ? zC(t, s).filter(s ? o : r).map(function(e) { return Nb(t, e.toRange(), !1) }) : he.none()
    }

    function t0(t, e, n) { return zC(t, e).filter(n).exists(function(e) { return t.selection.setRng(e.toRange()), !0 }) }

    function n0(e, t) {
        var n = e.dom.createRng();
        n.setStart(t.container(), t.offset()), n.setEnd(t.container(), t.offset()), e.selection.setRng(n)
    }

    function r0(e, t) { e ? t.setAttribute("data-mce-selected", "inline-boundary") : t.removeAttribute("data-mce-selected") }

    function o0(t, e, n) { return Vb(e, n).map(function(e) { return n0(t, e), n }) }

    function i0(e, t, n) { return !!Ws(e) && (o = t, i = n, a = (r = e).getBody(), u = bs.fromRangeStart(r.selection.getRng()), ay(i, A(rb, r), a, u).bind(function(e) { return o0(r, o, e) }).isSome()); var r, o, i, a, u }

    function a0(e, t, n) { return !!Ws(t) && (r = e, i = (o = t).selection.getRng(), a = r ? bs.fromRangeEnd(i) : bs.fromRangeStart(i), !!y(o.selection.getSel().modify) && (r && Gr(a) ? _y(!0, o.selection, a) : !(r || !Jr(a)) && _y(!1, o.selection, a))); var r, o, i, a }

    function u0(g) {
        var p = pu(null),
            h = A(rb, g);
        return g.on("NodeChange", function(e) {
            var n, r, o, t, i, a, u, s, c, l, f, d, m;
            !Ws(g) || Ct.browser.isIE() && e.initial || (i = h, a = g.dom, u = e.parents, X(q(s = U(R(Au(Et.fromDom(a.getRoot()), '*[data-mce-selected="inline-boundary"]'), function(e) { return e.dom }), i), c = U(u, i)), A(r0, !1)), X(q(c, s), A(r0, !0)), f = p, (l = g).selection.isCollapsed() && !0 !== l.composing && f.get() && (d = bs.fromRangeStart(l.selection.getRng()), bs.isTextPosition(d) && !1 === (Gr(m = d) || Jr(m)) && (n0(l, Zs(f.get(), d)), f.set(null))), n = h, r = g, o = p, t = e.parents, r.selection.isCollapsed() && X(U(t, n), function(e) {
                var t = bs.fromRangeStart(r.selection.getRng());
                Zb(n, r.getBody(), t).bind(function(e) { return o0(r, o, e) })
            }))
        }), p
    }

    function s0(n, t, r) { if (Ws(n)) { var e = zC(n, t).getOrThunk(function() { var e = n.selection.getRng(); return t ? bs.fromRangeEnd(e) : bs.fromRangeStart(e) }); return Zb(A(rb, n), n.getBody(), e).exists(function(e) { var t = ty(e); return Vb(r, t).exists(function(e) { return n0(n, e), !0 }) }) } return !1 }

    function c0(t, n) { return function(e) { return Vb(n, e).exists(function(e) { return n0(t, e), !0 }) } }

    function l0(r, o, i, a) {
        var u = r.getBody(),
            s = A(rb, r);
        r.undoManager.ignore(function() {
            var e, t, n;
            r.selection.setRng((e = i, t = a, (n = document.createRange()).setStart(e.container(), e.offset()), n.setEnd(t.container(), t.offset()), n)), r.execCommand("Delete"), Zb(s, u, bs.fromRangeStart(r.selection.getRng())).map(ny).map(c0(r, o))
        }), r.nodeChanged()
    }

    function f0(e, t, n) {
        if (e.selection.isCollapsed() && Ws(e)) {
            var r = bs.fromRangeStart(e.selection.getRng());
            return o = t, a = n, u = r, s = (i = e).getBody(), c = ac(u.container(), s) || s, l = A(rb, i), (f = Zb(l, c, u)).bind(function(e) { return a ? e.fold(J(he.some(ny(e))), he.none, J(he.some(ty(e))), he.none) : e.fold(he.none, J(he.some(ty(e))), he.none, J(he.some(ny(e)))) }).map(c0(i, o)).getOrThunk(function() {
                var t = Gc(a, c, u),
                    e = t.bind(function(e) { return Zb(l, c, e) });
                return fn(f, e, function() {
                    return ob(l, c, u).exists(function(e) {
                        return !!fn(mf(o = e), gf(o), function(e, t) {
                            var n = ib(!0, e),
                                r = ib(!1, t);
                            return ff(o, n).forall(function(e) { return e.isEqual(r) })
                        }).getOr(!0) && (tg(i, a, Et.fromDom(e)), !0);
                        var o
                    })
                }).orThunk(function() { return e.bind(function(e) { return t.map(function(e) { return a ? l0(i, o, u, e) : l0(i, o, e, u), !0 }) }) }).getOr(!1)
            })
        }
        var i, o, a, u, s, c, l, f;
        return !1
    }

    function d0(e) { return 1 === Ut(e) }

    function m0(g, p) {
        var t, e = Et.fromDom(g.getBody()),
            n = Et.fromDom(g.selection.getStart()),
            h = U(M(t = xm(n, e), So).fold(J(t), function(e) { return t.slice(0, e) }), d0);
        return Y(h).exists(function(e) {
            var t, n, r, o, i, a, u, s, c, l = bs.fromRangeStart(g.selection.getRng()),
                f = p,
                d = l,
                m = e.dom;
            return !(!fn(mf(m), gf(m), function(e, t) {
                var n = ib(!0, e),
                    r = ib(!1, t),
                    o = ib(!1, d);
                return f ? ff(m, o).exists(function(e) { return e.isEqual(r) && d.isEqual(n) }) : df(m, o).exists(function(e) { return e.isEqual(n) && d.isEqual(r) })
            }).getOr(!0) || Qc((t = e).dom) && zg(t.dom) || (n = p, o = e, 0 === (c = R(U(h, A(Yg, r = g)), function(e) { return e.dom })).length ? tg(r, n, o) : (a = o.dom, s = Wg(c, (u = Hg(!1)).dom), Vt(Et.fromDom(a), u), Mn(Et.fromDom(a)), i = bs(s, 0), r.selection.setRng(i.toRange())), 0))
        })
    }

    function g0(e, t) { return !!e.selection.isCollapsed() && m0(e, t) }

    function p0(e, t, n) { return e._selectionOverrides.hideFakeCaret(), tg(e, t, Et.fromDom(n)), !0 }

    function h0(e, t) { return e.selection.isCollapsed() ? (i = e, u = (a = t) ? np : rp, s = a ? vc.Forwards : vc.Backwards, c = mc(s, i.getBody(), i.selection.getRng()), u(c) ? p0(i, a, c.getNode(!a)) : he.from(ib(a, c)).filter(function(e) { return u(e) && hc(c, e) }).exists(function(e) { return p0(i, a, e.getNode(!a)) })) : (r = t, o = (n = e).selection.getNode(), !!Zn(o) && p0(n, r, o)); var n, r, o, i, a, u, s, c }

    function v0(e) { var t = parseInt(e, 10); return isNaN(t) ? 0 : t }

    function b0(e, t) { return (e || "table" === Nt(t) ? "margin" : "padding") + ("rtl" === Cn(t, "direction") ? "-right" : "-left") }

    function y0(e) { var n, t = VC(e); return !e.mode.isReadOnly() && (1 < t.length || (n = e, j(t, function(e) { var t = wn(e, b0(js(n), e)).map(v0).getOr(0); return "false" !== n.dom.getContentEditable(e.dom) && 0 < t }))) }

    function C0(e) { return No(e) || ko(e) }

    function w0(e, s) {
        var c = e.dom,
            t = e.selection,
            n = e.formatter,
            r = e.getParam("indentation", "40px", "string"),
            l = /[a-z%]+$/i.exec(r)[0],
            f = parseInt(r, 10),
            d = js(e),
            o = Ls(e);
        e.queryCommandState("InsertUnorderedList") || e.queryCommandState("InsertOrderedList") || "" !== o || c.getParent(t.getNode(), c.isBlock) || n.apply("div"), X(VC(e), function(e) {
            var t, n = c,
                r = s,
                o = f,
                i = l,
                a = e.dom,
                u = b0(d, Et.fromDom(a));
            "outdent" === r ? (t = Math.max(0, v0(a.style[u]) - o), n.setStyle(a, u, t ? t + i : "")) : (t = v0(a.style[u]) + o + i, n.setStyle(a, u, t))
        })
    }

    function x0(e, t) {
        if (e.selection.isCollapsed() && y0(e)) {
            var n = e.dom,
                r = e.selection.getRng(),
                o = bs.fromRangeStart(r),
                i = n.getParent(r.startContainer, n.isBlock);
            if (null !== i && sp(Et.fromDom(i), o)) return w0(e, "outdent"), !0
        }
        return !1
    }

    function S0(e, t) { e.getDoc().execCommand(t, !1, null) }

    function E0(e) { return void 0 === e.touches || 1 !== e.touches.length ? he.none() : he.some(e.touches[0]) }

    function N0(e, t) { return Ee(e, t.nodeName) }

    function k0(e) {
        var t, n, r, o = e.dom,
            i = e.selection,
            a = e.schema,
            u = a.getBlockElements(),
            s = i.getStart(),
            c = e.getBody(),
            l = Ls(e);
        if (s && Hn(s) && l) {
            var f = c.nodeName.toLowerCase();
            if (a.isValidChild(f, l.toLowerCase()) && (d = u, m = c, g = s, !F(wm(Et.fromDom(g), Et.fromDom(m)), function(e) { return N0(d, e.dom) }))) {
                for (var d, m, g, p, h, v = i.getRng(), b = v.startContainer, y = v.startOffset, C = v.endContainer, w = v.endOffset, x = Td(e), s = c.firstChild; s;) p = u, qn(h = s) || Hn(h) && !N0(p, h) && !ul(h) ? function(e, t) { if (qn(t)) { if (0 === t.nodeValue.length) return 1; if (/^\s+$/.test(t.nodeValue) && (!t.nextSibling || N0(e, t.nextSibling))) return 1 } }(u, s) ? (s = (n = s).nextSibling, o.remove(n)) : (t || (t = o.create(l, Is(e)), s.parentNode.insertBefore(t, s), r = !0), s = (n = s).nextSibling, t.appendChild(n)) : (t = null, s = s.nextSibling);
                r && x && (v.setStart(b, y), v.setEnd(C, w), i.setRng(v), e.nodeChanged())
            }
        }
    }

    function _0(e, t) { t.hasAttribute("data-mce-caret") && (Qr(t), e.selection.setRng(e.selection.getRng()), e.selection.scrollIntoView(t)) }

    function A0(e, t) { var n = yr(Et.fromDom(e.getBody()), "*[data-mce-caret]").map(function(e) { return e.dom }).getOrNull(); if (n) return "compositionstart" === t.type ? (t.preventDefault(), t.stopPropagation(), void _0(e, n)) : void(Yr(n) && (_0(e, n), e.undoManager.add())) }

    function T0(e, t, n) {
        var r, o, i, a = Wc(e.getBody()),
            u = A(pc, 1 === t ? a.next : a.prev);
        !n.collapsed || "" === Ls(e) || (r = e.dom.getParent(n.startContainer, "PRE")) && (u(bs.fromRangeStart(n)) || (i = e.dom.create(Ls(e)), (!Ct.ie || 11 <= Ct.ie) && (i.innerHTML = '<br data-mce-bogus="1">'), o = i, 1 === t ? e.$(r).after(o) : e.$(r).before(o), e.selection.select(o, !0), e.selection.collapse()))
    }

    function R0(t, e) { return n = t, r = e ? vc.Forwards : vc.Backwards, o = n.selection.getRng(), Zy(n, r, o, ap, up, qC).orThunk(function() { return T0(n, r, o), he.none() }).exists(function(e) { return Jy(t, e), !0 }); var n, r, o }

    function D0(t, e) { return r = e ? 1 : -1, o = (n = t).selection.getRng(), e0(n, r, o, function(e) { return ap(e) || op(e) }, function(e) { return up(e) || ip(e) }, qC).orThunk(function() { return T0(n, r, o), he.none() }).exists(function(e) { return Jy(t, e), !0 }); var n, r, o }

    function O0(e, t) { return t0(e, t, t ? up : ap) }

    function B0(e) { return ie(["figcaption"], Nt(e)) }

    function P0(e) { var t = document.createRange(); return t.setStartBefore(e.dom), t.setEndBefore(e.dom), t }

    function L0(e, t, n) {
        (n ? In : $t)(e, t)
    }

    function I0(h, v) {
        var b = Et.fromDom(h.getBody()),
            y = bs.fromRangeStart(h.selection.getRng()),
            C = Ls(h),
            w = Is(h),
            e = y,
            t = A(je, b);
        return vr(Et.fromDom(e.container()), So, t).filter(B0).exists(function() { if (d = b, m = y, v ? (p = d.dom, Fy(p, m).breakAt.isNone()) : (g = d.dom, My(g, m).breakAt.isNone())) { var e = (t = b, r = w, o = v, "" === (n = C) ? (l = o, L0(t, f = Et.fromTag("br"), l), P0(f)) : (i = t, a = o, u = r, s = Et.fromTag(n), c = Et.fromTag("br"), pn(s, u), In(s, c), L0(i, s, a), P0(c))); return h.selection.setRng(e), !0 } var t, n, r, o, i, a, u, s, c, l, f, d, m, g, p; return !1 })
    }

    function M0(e, t) { return !!e.selection.isCollapsed() && I0(e, t) }

    function F0(e) { for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]; return function() { return e.apply(null, t) } }

    function U0(e, t) { return I((n = t, z(R(e, function(e) { return ke({ shiftKey: !1, altKey: !1, ctrlKey: !1, metaKey: !1, keyCode: 0, action: oe }, e) }), function(e) { return n.keyCode === e.keyCode && n.shiftKey === e.shiftKey && n.altKey === e.altKey && n.ctrlKey === e.ctrlKey && n.metaKey === e.metaKey ? [e] : [] })), function(e) { return e.action() }); var n }

    function z0(t, e) {
        var n = e ? vc.Forwards : vc.Backwards,
            r = t.selection.getRng();
        return Zy(t, n, r, np, rp, Zn).exists(function(e) { return Jy(t, e), !0 })
    }

    function j0(t, e) {
        var n = e ? 1 : -1,
            r = t.selection.getRng();
        return e0(t, n, r, np, rp, Zn).exists(function(e) { return Jy(t, e), !0 })
    }

    function H0(e, t) { return t0(e, t, t ? rp : np) }

    function V0(e, t, n, r, o) {
        var i, a = Au(Et.fromDom(n), "td,th,caption").map(function(e) { return e.dom }),
            u = U((i = e, z(a, function(e) { var t, n = { left: (t = Fu(e.getBoundingClientRect())).left - -1, top: t.top - -1, right: t.right + -2, bottom: t.bottom + -2, width: t.width + -1, height: t.height + -1 }; return [{ x: n.left, y: i(n), cell: e }, { x: n.right, y: i(n), cell: e }] })), function(e) { return t(e, o) }),
            s = r,
            c = o;
        return P(u, function(e, r) {
            return e.fold(function() { return he.some(r) }, function(e) {
                var t = Math.sqrt(Math.abs(e.x - s) + Math.abs(e.y - c)),
                    n = Math.sqrt(Math.abs(r.x - s) + Math.abs(r.y - c));
                return he.some(n < t ? r : e)
            })
        }, he.none()).map(function(e) { return e.cell })
    }

    function q0(e, t, n) { var r, o, i = e(t, n); return i.breakType === sy.Wrap && 0 === i.positions.length || !Xn(n.getNode()) && i.breakType === sy.Br && 1 === i.positions.length ? (r = e, o = t, !i.breakAt.exists(function(e) { return r(o, e).breakAt.isSome() })) : i.breakAt.isNone() }

    function $0(t, e, n, r) {
        var o, i, a, u = t.selection.getRng(),
            s = e ? 1 : -1;
        return !(!nc() || (o = e, i = n, a = bs.fromRangeStart(u), !Jc(!o, i).exists(function(e) { return e.isEqual(a) })) || (xb(s, t, n, !e, !1).each(function(e) { Jy(t, e) }), 0))
    }

    function W0(u, s, c) {
        var e, t, n = (e = !!s, t = c.getNode(e), Hn(t) && "TABLE" === t.nodeName ? he.some(t) : he.none()),
            r = !1 === s;
        n.fold(function() { return Jy(u, c.toRange()) }, function(a) {
            return Jc(r, u.getBody()).filter(function(e) { return e.isEqual(c) }).fold(function() { return Jy(u, c.toRange()) }, function(e) {
                var n, r, o = s,
                    i = a,
                    t = c;
                (r = Ls(n = u)) ? n.undoManager.transact(function() {
                    var e = Et.fromTag(r);
                    pn(e, Is(n)), In(e, Et.fromTag("br")), (o ? qt : Vt)(Et.fromDom(i), e);
                    var t = n.dom.createRng();
                    t.setStart(e.dom, 0), t.setEnd(e.dom, 0), Jy(n, t)
                }): Jy(n, t.toRange())
            })
        })
    }

    function K0(e, t, n, r) {
        var o, i, a, u, s, c, l, f, d, m, g = e.selection.getRng(),
            p = bs.fromRangeStart(g),
            h = e.getBody();
        if (t || !KC(r, p)) return !(!t || !XC(r, p)) && (o = h, d = i = n, W0(e, t, v = Y((m = a = p).getClientRects()).bind(function(e) { return WC(d, e.left, e.top) }).bind(function(e) { return Oy(mf(t = e).map(function(e) { return [e].concat(Fy(t, e).positions) }).getOr([]), m); var t }).orThunk(function() { return W(a.getClientRects()).bind(function(e) { return Dy(zy(o, bs.after(i)), e.left) }) }).getOr(bs.after(i))), !0);
        var v = (u = h, l = s = n, W((f = c = p).getClientRects()).bind(function(e) { return $C(l, e.left, e.top) }).bind(function(e) { return Oy(gf(t = e).map(function(e) { return My(t, e).positions.concat(e) }).getOr([]), f); var t }).orThunk(function() { return W(c.getClientRects()).bind(function(e) { return Dy(Uy(u, bs.before(s)), e.left) }) }).getOr(bs.before(s)));
        return W0(e, t, v), !0
    }

    function X0(n, r, o) { return he.from(n.dom.getParent(n.selection.getNode(), "td,th")).bind(function(t) { return he.from(n.dom.getParent(t, "table")).map(function(e) { return o(n, r, e, t) }) }).getOr(!1) }

    function Y0(e, t) { return X0(e, t, $0) }

    function G0(e, t) { return X0(e, t, K0) }

    function J0(e, t) {
        var n, r, o = t,
            i = e.dom,
            a = e.schema.getMoveCaretBeforeOnEnterElements();
        if (t) {
            !/^(LI|DT|DD)$/.test(t.nodeName) || (r = function(e) {
                for (; e;) {
                    if (1 === e.nodeType || 3 === e.nodeType && e.data && /[\r\n\s]/.test(e.data)) return e;
                    e = e.nextSibling
                }
            }(t.firstChild)) && /^(UL|OL|DL)$/.test(r.nodeName) && t.insertBefore(i.doc.createTextNode(Do), t.firstChild);
            var u = i.createRng();
            if (t.normalize(), t.hasChildNodes()) {
                for (var s = new jr(t, t); n = s.current();) {
                    if (qn(n)) { u.setStart(n, 0), u.setEnd(n, 0); break }
                    if (a[n.nodeName.toLowerCase()]) { u.setStartBefore(n), u.setEndBefore(n); break }
                    o = n, n = s.next()
                }
                n || (u.setStart(o, 0), u.setEnd(o, 0))
            } else Xn(t) ? t.nextSibling && i.isBlock(t.nextSibling) ? (u.setStartBefore(t), u.setEndBefore(t)) : (u.setStartAfter(t), u.setEndAfter(t)) : (u.setStart(t, 0), u.setEnd(t, 0));
            e.selection.setRng(u), fd(e, u)
        }
    }

    function Q0(e) { return he.from(e.dom.getParent(e.selection.getStart(!0), e.dom.isBlock)) }

    function Z0(e, t) { return e && e.parentNode && e.parentNode.nodeName === t }

    function eC(e) { return e && /^(OL|UL|LI)$/.test(e.nodeName) }

    function tC(e) { var t = e.parentNode; return /^(LI|DT|DD)$/.test(t.nodeName) ? t : e }

    function nC(e, t, n) { for (var r = e[n ? "firstChild" : "lastChild"]; r && !Hn(r);) r = r[n ? "nextSibling" : "previousSibling"]; return r === t }

    function rC(e) { e.innerHTML = '<br data-mce-bogus="1">' }

    function oC(e, t) { return e.nodeName === t || e.previousSibling && e.previousSibling.nodeName === t }

    function iC(e, t) { return t && e.isBlock(t) && !/^(TD|TH|CAPTION|FORM)$/.test(t.nodeName) && !/^(fixed|absolute)/i.test(t.style.position) && "true" !== e.getContentEditable(t) }

    function aC(e, t, n) { return !1 === qn(t) ? n : e ? 1 === n && t.data.charAt(n - 1) === Oo ? 0 : n : n === t.data.length - 1 && t.data.charAt(n) === Oo ? t.data.length : n }

    function uC(e, t) { for (var n, r = e.getRoot(), o = t; o !== r && "false" !== e.getContentEditable(o);) "true" === e.getContentEditable(o) && (n = o), o = o.parentNode; return o !== r ? n : r }

    function sC(e, t) {
        var n = Ls(e);
        n && n.toLowerCase() === t.tagName.toLowerCase() && function(e, o, t) {
            var i = e.dom;
            he.from(t.style).map(i.parseStyle).each(function(e) {
                var t = xn(Et.fromDom(o)),
                    n = ke(ke({}, t), e);
                i.setStyles(o, n)
            }), fn(he.from(t.class).map(function(e) { return e.split(/\s+/) }), he.from(o.className).map(function(e) { return U(e.split(/\s+/), function(e) { return "" !== e }) }), function(t, e) {
                var n = U(e, function(e) { return !ie(t, e) }),
                    r = _e(_e([], t), n);
                i.setAttrib(o, "class", r.join(" "))
            });
            var n = ["style", "class"],
                r = ne(t, function(e, t) { return !ie(n, t) });
            i.setAttribs(o, r)
        }(e, t, Is(e))
    }

    function cC(a, e) {
        function t(e) {
            var t, n = m,
                r = l.getTextInlineElements(),
                o = e || "TABLE" === C || "HR" === C ? c.create(e || p) : b.cloneNode(!1),
                i = o;
            if (!1 === a.getParam("keep_styles", !0)) c.setAttrib(o, "style", null), c.setAttrib(o, "class", null);
            else
                for (; r[n.nodeName] && (Qc(n) || ul(n) || (t = n.cloneNode(!1), c.setAttrib(t, "id", ""), o.hasChildNodes() ? t.appendChild(o.firstChild) : i = t, o.appendChild(t))), (n = n.parentNode) && n !== F;);
            return sC(a, o), rC(i), o
        }

        function n(e) {
            var t, n, r = aC(e, m, g);
            if (!qn(m) || !(e ? 0 < r : r < m.nodeValue.length)) {
                if (m.parentNode === b && s && !e) return 1;
                if (e && Hn(m) && m === b.firstChild) return 1;
                if (oC(m, "TABLE") || oC(m, "HR")) return s && !e || !s && e;
                var o = new jr(m, b);
                for (qn(m) && (e && 0 === r ? o.prev() : e || r !== m.nodeValue.length || o.next()); t = o.current();) {
                    if (Hn(t)) { if (!t.getAttribute("data-mce-bogus") && (n = t.nodeName.toLowerCase(), f[n] && "br" !== n)) return } else if (qn(t) && !no(t.nodeValue)) return;
                    e ? o.prev() : o.next()
                }
                return 1
            }
        }

        function r() { u = /^(H[1-6]|PRE|FIGURE)$/.test(C) && "HGROUP" !== w ? t(p) : t(), a.getParam("end_container_on_empty_block", !1) && iC(c, y) && c.isEmpty(b) ? u = c.split(y, b) : c.insertAfter(u, b), J0(a, u) }
        var o, u, i, s, c = a.dom,
            l = a.schema,
            f = l.getNonEmptyElements(),
            d = a.selection.getRng();
        jf(c, d).each(function(e) { d.setStart(e.startContainer, e.startOffset), d.setEnd(e.endContainer, e.endOffset) });
        var m = d.startContainer,
            g = d.startOffset,
            p = Ls(a),
            h = !(!e || !e.shiftKey),
            v = !(!e || !e.ctrlKey);
        Hn(m) && m.hasChildNodes() && (s = g > m.childNodes.length - 1, m = m.childNodes[Math.min(g, m.childNodes.length - 1)] || m, g = s && qn(m) ? m.nodeValue.length : 0);
        var b, y, C, w, x, S, p, E, N, k, _, A, T, R, D, O, B, P, L, I, M, F = uC(c, m);
        F && ((p && !h || !p && h) && (m = function(e, t, n, r) {
            var o, i, a, u, s, c, l = p || "P",
                f = e.dom,
                d = uC(f, n),
                m = f.getParent(n, f.isBlock);
            if (!m || !iC(f, m)) {
                if (s = ((m = m || d) === e.getBody() || (c = m) && /^(TD|TH|CAPTION)$/.test(c.nodeName) ? m : m.parentNode).nodeName.toLowerCase(), !m.hasChildNodes()) return sC(e, o = f.create(l)), m.appendChild(o), t.setStart(o, 0), t.setEnd(o, 0), o;
                for (a = n; a.parentNode !== m;) a = a.parentNode;
                for (; a && !f.isBlock(a);) a = (i = a).previousSibling;
                if (i && e.schema.isValidChild(s, l.toLowerCase())) {
                    for (sC(e, o = f.create(l)), i.parentNode.insertBefore(o, i), a = i; a && !f.isBlock(a);) u = a.nextSibling, o.appendChild(a), a = u;
                    t.setStart(n, r), t.setEnd(n, r)
                }
            }
            return n
        }(a, d, m, g)), y = (b = c.getParent(m, c.isBlock)) ? c.getParent(b.parentNode, c.isBlock) : null, C = b ? b.nodeName.toUpperCase() : "", "LI" !== (w = y ? y.nodeName.toUpperCase() : "") || v || (y = (b = y).parentNode, C = w), /^(LI|DT|DD)$/.test(C) && c.isEmpty(b) ? (N = t, k = y, _ = b, A = p, I = (E = a).dom, M = E.selection.getRng(), k !== E.getBody() && (R = (A = eC(T = k) && eC(T.parentNode) ? "LI" : A) ? N(A) : I.create("BR"), nC(k, _, !0) && nC(k, _, !1) ? Z0(k, "LI") ? (D = tC(k), I.insertAfter(R, D), (null === (L = (P = k).parentNode) || void 0 === L ? void 0 : L.firstChild) === P ? I.remove(D) : I.remove(k)) : I.replace(R, k) : (nC(k, _, !0) ? Z0(k, "LI") ? (I.insertAfter(R, tC(k)), R.appendChild(I.doc.createTextNode(" ")), R.appendChild(k)) : k.parentNode.insertBefore(R, k) : nC(k, _, !1) ? I.insertAfter(R, tC(k)) : (k = tC(k), (O = M.cloneRange()).setStartAfter(_), O.setEndAfter(k), B = O.extractContents(), "LI" === A && (B.firstChild && "LI" === B.firstChild.nodeName) ? (R = B.firstChild, I.insertAfter(B, k)) : (I.insertAfter(B, k), I.insertAfter(R, k))), I.remove(_)), J0(E, R))) : p && b === a.getBody() || (p = p || "P", Wr(b) ? (u = Qr(b), c.isEmpty(b) && rC(b), sC(a, u), J0(a, u)) : n() ? r() : n(!0) ? (u = b.parentNode.insertBefore(t(), b), J0(a, oC(b, "HR") ? u : b)) : ((S = (x = d).cloneRange()).setStart(x.startContainer, aC(!0, x.startContainer, x.startOffset)), S.setEnd(x.endContainer, aC(!1, x.endContainer, x.endOffset)), (o = S.cloneRange()).setEndAfter(b), i = o.extractContents(), X(Zu(Et.fromDom(i), Tn), function(e) {
            var t = e.dom;
            t.nodeValue = Po(t.nodeValue)
        }), function(e) { for (; qn(e) && (e.nodeValue = e.nodeValue.replace(/^[\r\n]+/, "")), e = e.firstChild;); }(i), u = i.firstChild, c.insertAfter(i, b), function(e, t) {
            var n, r, o = u,
                i = [];
            if (o) {
                for (; o = o.firstChild;) {
                    if (e.isBlock(o)) return;
                    Hn(o) && !t[o.nodeName.toLowerCase()] && i.push(o)
                }
                for (n = i.length; n--;) !(o = i[n]).hasChildNodes() || o.firstChild === o.lastChild && "" === o.firstChild.nodeValue ? e.remove(o) : (r = o) && "A" === r.nodeName && e.isEmpty(r) && e.remove(o)
            }
        }(c, f), function(e, t) {
            t.normalize();
            var n = t.lastChild;
            n && !/^(left|right)$/gi.test(e.getStyle(n, "float", !0)) || e.add(t, "br")
        }(c, b), c.isEmpty(b) && rC(b), u.normalize(), c.isEmpty(u) ? (c.remove(u), r()) : (sC(a, u), J0(a, u))), c.setAttrib(u, "id", ""), a.fire("NewBlock", { newBlock: u })))
    }

    function lC(e, t, n) {
        var r = e.dom.createRng();
        n ? (r.setStartBefore(t), r.setEndBefore(t)) : (r.setStartAfter(t), r.setEndAfter(t)), e.selection.setRng(r), fd(e, r)
    }

    function fC(e, t) {
        var n = Et.fromTag("br");
        Vt(Et.fromDom(t), n), e.undoManager.add()
    }

    function dC(e, t) {
        YC(e.getBody(), t) || qt(Et.fromDom(t), Et.fromTag("br"));
        var n = Et.fromTag("br");
        qt(Et.fromDom(t), n), lC(e, n.dom, !1), e.undoManager.add()
    }

    function mC(e) { return e && "A" === e.nodeName && "href" in e }

    function gC(e) { return e.fold(T, mC, mC, T) }

    function pC(e, t) { t.fold(oe, A(fC, e), A(dC, e), oe) }

    function hC(e, t) {
        var n, r, o, i = (r = A(rb, n = e), o = bs.fromRangeStart(n.selection.getRng()), Zb(r, n.getBody(), o).filter(gC));
        i.isSome() ? i.each(A(pC, e)) : function(e, t) {
            var n, r, o = e.selection,
                i = e.dom,
                a = o.getRng();
            jf(i, a).each(function(e) { a.setStart(e.startContainer, e.startOffset), a.setEnd(e.endContainer, e.endOffset) });
            var u, s = a.startOffset,
                c = a.startContainer;
            1 === c.nodeType && c.hasChildNodes() && (u = s > c.childNodes.length - 1, c = c.childNodes[Math.min(s, c.childNodes.length - 1)] || c, s = u && 3 === c.nodeType ? c.nodeValue.length : 0);
            var l = i.getParent(c, i.isBlock),
                f = l ? i.getParent(l.parentNode, i.isBlock) : null,
                d = f ? f.nodeName.toUpperCase() : "",
                m = !(!t || !t.ctrlKey);
            "LI" !== d || m || (l = f), c && 3 === c.nodeType && s >= c.nodeValue.length && ! function(e) {
                for (var t, n = new jr(c, l), r = e.getNonEmptyElements(); t = n.next();)
                    if (r[t.nodeName.toLowerCase()] || 0 < t.length) return 1
            }(e.schema) && (n = i.create("br"), a.insertNode(n), a.setStartAfter(n), a.setEndAfter(n), r = !0), n = i.create("br"), Cs(i, a, n), lC(e, n, r), e.undoManager.add()
        }(e, t)
    }

    function vC(e, t) { return Q0(e).filter(function(e) { return 0 < t.length && Ue(Et.fromDom(e), t) }).isSome() }

    function bC(e, t) { return vC(e, e.getParam("no_newline_selector", "")) }

    function yC(n) { return function(e, t) { return "" === Ls(e) === n } }

    function CC(n) { return function(e, t) { return Q0(e).filter(function(e) { return ko(Et.fromDom(e)) }).isSome() === n } }

    function wC(n, r) { return function(e, t) { return Q0(e).fold(J(""), function(e) { return e.nodeName.toUpperCase() }) === n.toUpperCase() === r } }

    function xC(e) { return wC("pre", e) }

    function SC(n) { return function(e, t) { return e.getParam("br_in_pre", !0) === n } }

    function EC(e, t) { return vC(e, e.getParam("br_newline_selector", ".mce-toc h2,figcaption,caption")) }

    function NC(e, t) { return t }

    function kC(e) {
        var t = Ls(e),
            n = function(e, t) { for (var n, r = e.getRoot(), o = t; o !== r && "false" !== e.getContentEditable(o);) "true" === e.getContentEditable(o) && (n = o), o = o.parentNode; return o !== r ? n : r }(e.dom, e.selection.getStart());
        return n && e.schema.isValidChild(n.nodeName, t || "P")
    }

    function _C(e, t) { return function(n, r) { return P(e, function(e, t) { return e && t(n, r) }, !0) ? he.some(t) : he.none() } }

    function AC(e, t) {
        var n, r;
        n = e, r = t, qb([_C([bC], GC.none()), _C([wC("summary", !0)], GC.br()), _C([xC(!0), SC(!1), NC], GC.br()), _C([xC(!0), SC(!1)], GC.block()), _C([xC(!0), SC(!0), NC], GC.block()), _C([xC(!0), SC(!0)], GC.br()), _C([CC(!0), NC], GC.br()), _C([CC(!0)], GC.block()), _C([yC(!0), NC, kC], GC.block()), _C([yC(!0)], GC.br()), _C([EC], GC.br()), _C([yC(!1), NC], GC.br()), _C([kC], GC.block())], [n, !(!r || !r.shiftKey)]).getOr(GC.none()).fold(function() { hC(e, t) }, function() { cC(e, t) }, oe)
    }

    function TC(e) { return e.stopImmediatePropagation() }

    function RC(e) { return e.keyCode === $f.PAGE_UP || e.keyCode === $f.PAGE_DOWN }

    function DC(e, t, n) { n && !e.get() ? t.on("NodeChange", TC, !0) : !n && e.get() && t.off("NodeChange", TC), e.set(n) }

    function OC(n, r) {
        var e = r.container(),
            t = r.offset();
        return qn(e) ? (e.insertData(t, n), he.some(bs(e, t + n.length))) : gc(r).map(function(e) { var t = Et.fromText(n); return (r.isAtEnd() ? qt : Vt)(e, t), bs(t.dom, n.length) })
    }

    function BC(i, a) { return function(e) { return r = i, (!Lm(o = e) && (n = o, df((t = r).dom, n).isNone() || ff(t.dom, n).isNone() || sp(t, n) || cp(t, n) || Rm(t, n) || Tm(t, n) || Bm(r, o) || Pm(r, o)) ? ZC : e1)(a); var t, n, r, o } }

    function PC(e) {
        var t, n, r = bs.fromRangeStart(e.selection.getRng()),
            o = Et.fromDom(e.getBody());
        if (e.selection.isCollapsed()) {
            var i = A(rb, e),
                a = bs.fromRangeStart(e.selection.getRng());
            return Zb(i, e.getBody(), a).bind((n = o, function(e) { return e.fold(function(e) { return df(n.dom, bs.before(e)) }, function(e) { return mf(e) }, function(e) { return gf(e) }, function(e) { return ff(n.dom, bs.after(e)) }) })).bind(BC(o, r)).exists((t = e, function(e) { return t.selection.setRng(e.toRange()), t.nodeChanged(), !0 }))
        }
        return !1
    }

    function LC(e) {
        var o, i, a, u, s, t, n, r, c, l, f, d, m, g, p = u0(e);
        return e.on("keyup compositionstart", A(A0, e)), g = p, (m = e).on("keydown", function(e) { var t, n, r, o;!1 === e.isDefaultPrevented() && (t = m, n = g, r = e, o = ft().os, U0([{ keyCode: $f.RIGHT, action: F0(R0, t, !0) }, { keyCode: $f.LEFT, action: F0(R0, t, !1) }, { keyCode: $f.UP, action: F0(D0, t, !1) }, { keyCode: $f.DOWN, action: F0(D0, t, !0) }, { keyCode: $f.RIGHT, action: F0(Y0, t, !0) }, { keyCode: $f.LEFT, action: F0(Y0, t, !1) }, { keyCode: $f.UP, action: F0(G0, t, !1) }, { keyCode: $f.DOWN, action: F0(G0, t, !0) }, { keyCode: $f.RIGHT, action: F0(z0, t, !0) }, { keyCode: $f.LEFT, action: F0(z0, t, !1) }, { keyCode: $f.UP, action: F0(j0, t, !1) }, { keyCode: $f.DOWN, action: F0(j0, t, !0) }, { keyCode: $f.RIGHT, action: F0(i0, t, n, !0) }, { keyCode: $f.LEFT, action: F0(i0, t, n, !1) }, { keyCode: $f.RIGHT, ctrlKey: !o.isOSX(), altKey: o.isOSX(), action: F0(jC, t, n) }, { keyCode: $f.LEFT, ctrlKey: !o.isOSX(), altKey: o.isOSX(), action: F0(HC, t, n) }, { keyCode: $f.UP, action: F0(M0, t, !1) }, { keyCode: $f.DOWN, action: F0(M0, t, !0) }], r).each(function(e) { r.preventDefault() })) }), d = p, (f = e).on("keydown", function(e) { var t, n, r;!1 === e.isDefaultPrevented() && (n = d, r = e, U0([{ keyCode: $f.BACKSPACE, action: F0(x0, t = f, !1) }, { keyCode: $f.BACKSPACE, action: F0(Lb, t, !1) }, { keyCode: $f.DELETE, action: F0(Lb, t, !0) }, { keyCode: $f.BACKSPACE, action: F0(Tb, t, !1) }, { keyCode: $f.DELETE, action: F0(Tb, t, !0) }, { keyCode: $f.BACKSPACE, action: F0(f0, t, n, !1) }, { keyCode: $f.DELETE, action: F0(f0, t, n, !0) }, { keyCode: $f.BACKSPACE, action: F0(xg, t, !1) }, { keyCode: $f.DELETE, action: F0(xg, t, !0) }, { keyCode: $f.BACKSPACE, action: F0(Ib, t, !1) }, { keyCode: $f.DELETE, action: F0(Ib, t, !0) }, { keyCode: $f.BACKSPACE, action: F0(h0, t, !1) }, { keyCode: $f.DELETE, action: F0(h0, t, !0) }, { keyCode: $f.BACKSPACE, action: F0(wb, t, !1) }, { keyCode: $f.DELETE, action: F0(wb, t, !0) }, { keyCode: $f.BACKSPACE, action: F0(bb, t, !1) }, { keyCode: $f.DELETE, action: F0(bb, t, !0) }, { keyCode: $f.BACKSPACE, action: F0(g0, t, !1) }, { keyCode: $f.DELETE, action: F0(g0, t, !0) }], r).each(function(e) { r.preventDefault() })) }), f.on("keyup", function(e) { var t, n;!1 === e.isDefaultPrevented() && (n = e, U0([{ keyCode: $f.BACKSPACE, action: F0(Pb, t = f) }, { keyCode: $f.DELETE, action: F0(Pb, t) }], n)) }), (l = e).on("keydown", function(e) {
            var t, n, r;
            e.keyCode === $f.ENTER && (t = l, (n = e).isDefaultPrevented() || (n.preventDefault(), (r = t.undoManager).typing && (r.typing = !1, r.add()), t.undoManager.transact(function() {!1 === t.selection.isCollapsed() && t.execCommand("Delete"), AC(t, n) })))
        }), (c = e).on("keydown", function(e) { var t;!1 === e.isDefaultPrevented() && (t = e, U0([{ keyCode: $f.SPACEBAR, action: F0(PC, c) }], t).each(function(e) { t.preventDefault() })) }), n = t = e, r = xu(function() { n.composing || Hm(n) }, 0), JC.isIE() && (n.on("keypress", function(e) { r.throttle() }), n.on("remove", function(e) { r.cancel() })), t.on("input", function(e) {!1 === e.isComposing && Hm(t) }), s = p, (u = e).on("keydown", function(e) { var t, n, r;!1 === e.isDefaultPrevented() && (n = s, r = e, U0([{ keyCode: $f.END, action: F0(O0, t = u, !0) }, { keyCode: $f.HOME, action: F0(O0, t, !1) }, { keyCode: $f.END, action: F0(H0, t, !0) }, { keyCode: $f.HOME, action: F0(H0, t, !1) }, { keyCode: $f.END, action: F0(s0, t, !0, n) }, { keyCode: $f.HOME, action: F0(s0, t, !1, n) }], r).each(function(e) { r.preventDefault() })) }), o = e, i = p, QC.os.isOSX() || (a = pu(!1), o.on("keydown", function(e) { RC(e) && DC(a, o, !0) }), o.on("keyup", function(e) { var t, n, r;!1 === e.isDefaultPrevented() && (r = e, U0([{ keyCode: $f.PAGE_UP, action: F0(s0, t = o, !1, n = i) }, { keyCode: $f.PAGE_DOWN, action: F0(s0, t, !0, n) }], r)), RC(e) && a.get() && (DC(a, o, !1), o.nodeChanged()) })), p
    }(Iy = Ly = Ly || {})[Iy.Up = -1] = "Up", Iy[Iy.Down = 1] = "Down";
    var IC = A(jy, Ly.Up, ju, Hu),
        MC = A(jy, Ly.Down, Hu, ju),
        FC = Jn,
        UC = ic,
        zC = function(e, t) {
            var n = e.selection.getRng(),
                r = e.getBody();
            if (t) {
                var o = bs.fromRangeEnd(n),
                    i = Fy(r, o);
                return Y(i.positions)
            }
            return o = bs.fromRangeStart(n), W((i = My(r, o)).positions)
        },
        jC = A(a0, !0),
        HC = A(a0, !1),
        VC = function(e) { return U(R(e.selection.getSelectedBlocks(), Et.fromDom), function(e) { return !C0(e) && !Dt(e).exists(C0) && vr(e, function(e) { return Gn(e.dom) || Jn(e.dom) }).exists(function(e) { return Gn(e.dom) }) }) },
        qC = Jn,
        $C = A(V0, function(e) { return e.bottom }, function(e, t) { return e.y < t }),
        WC = A(V0, function(e) { return e.top }, function(e, t) { return e.y > t }),
        KC = A(q0, My),
        XC = A(q0, Fy),
        YC = function(e, t) { return n = bs.after(t), !!Xn(n.getNode()) || ff(e, bs.after(t)).map(function(e) { return Xn(e.getNode()) }).getOr(!1); var n },
        GC = ar([{ br: [] }, { block: [] }, { none: [] }]),
        JC = ft().browser,
        QC = ft(),
        ZC = A(OC, Do),
        e1 = A(OC, " "),
        t1 = (n1.prototype.nodeChanged = function(e) {
            var t, n, r, o = this.editor.selection;
            this.editor.initialized && o && !this.editor.getParam("disable_nodechange") && !this.editor.mode.isReadOnly() && (r = this.editor.getBody(), (t = o.getStart(!0) || r).ownerDocument === this.editor.getDoc() && this.editor.dom.isChildOf(t, r) || (t = r), n = [], this.editor.dom.getParent(t, function(e) { return e === r || void n.push(e) }), (e = e || {}).element = t, e.parents = n, this.editor.fire("NodeChange", e))
        }, n1.prototype.isSameElementPath = function(e) { var t, n = this.editor.$(e).parentsUntil(this.editor.getBody()).add(e); if (n.length === this.lastPath.length) { for (t = n.length; 0 <= t && n[t] === this.lastPath[t]; t--); if (-1 === t) return this.lastPath = n, !0 } return this.lastPath = n, !1 }, n1);

    function n1(r) {
        var o;
        this.lastPath = [], this.editor = r;
        var t = this;
        "onselectionchange" in r.getDoc() || r.on("NodeChange click mouseup keyup focus", function(e) {
            var t = r.selection.getRng(),
                n = { startContainer: t.startContainer, startOffset: t.startOffset, endContainer: t.endContainer, endOffset: t.endOffset };
            "nodechange" !== e.type && Lf(n, o) || r.fire("SelectionChange"), o = n
        }), r.on("contextmenu", function() { r.fire("SelectionChange") }), r.on("SelectionChange", function() { var e = r.selection.getStart(!0);!e || !Ct.range && r.selection.isCollapsed() || Vl(r) && !t.isSameElementPath(e) && r.dom.isChildOf(e, r.getBody()) && r.nodeChanged({ selectionChange: !0 }) }), r.on("mouseup", function(e) {!e.isDefaultPrevented() && Vl(r) && ("IMG" === r.selection.getNode().nodeName ? Ur.setEditorTimeout(r, function() { r.nodeChanged() }) : r.nodeChanged()) })
    }

    function r1(e) { return Hn(e) && Eo(Et.fromDom(e)) }

    function o1(e) {
        var t = e.getBoundingClientRect(),
            n = e.ownerDocument,
            r = n.documentElement,
            o = n.defaultView;
        return { top: t.top + o.pageYOffset - r.clientTop, left: t.left + o.pageXOffset - r.clientLeft }
    }

    function i1(e) { e && e.parentNode && e.parentNode.removeChild(e) }

    function a1(e, S) {
        var E = Ur.throttle(function(e, t) { S._selectionOverrides.hideFakeCaret(), S.selection.placeCaretAt(e, t) }, 0);
        return S.on("remove", E.stop),
            function(x) {
                return e.on(function(e) {
                    var t, n, r, o, i, a, u, s, c, l, f, d, m, g, p, h, v, b, y, C, w = Math.max(Math.abs(x.screenX - e.screenX), Math.abs(x.screenY - e.screenY));
                    if (!e.dragging && 10 < w) {
                        if (S.fire("dragstart", { target: e.element }).isDefaultPrevented()) return;
                        e.dragging = !0, S.focus()
                    }
                    e.dragging && (d = e, t = {
                        pageX: (p = x, h = (g = S).inline ? o1(g.getBody()) : { left: 0, top: 0 }, C = (y = g).getBody(), v = y.inline ? { left: C.scrollLeft, top: C.scrollTop } : { left: 0, top: 0 }, (m = {
                            pageX: (b = function(e, t) {
                                if (t.target.ownerDocument === e.getDoc()) return { left: t.pageX, top: t.pageY };
                                var n, r, o, i, a, u = o1(e.getContentAreaContainer()),
                                    s = (r = (n = e).getBody(), o = n.getDoc().documentElement, i = { left: r.scrollLeft, top: r.scrollTop }, a = { left: r.scrollLeft || o.scrollLeft, top: r.scrollTop || o.scrollTop }, n.inline ? i : a);
                                return { left: t.pageX - u.left + s.left, top: t.pageY - u.top + s.top }
                            }(g, p)).left - h.left + v.left,
                            pageY: b.top - h.top + v.top
                        }).pageX - d.relX),
                        pageY: m.pageY + 5
                    }, l = e.ghost, f = S.getBody(), l.parentNode !== f && f.appendChild(l), n = e.ghost, o = e.width, i = e.height, a = e.maxX, u = e.maxY, c = s = 0, n.style.left = (r = t).pageX + "px", n.style.top = r.pageY + "px", u < r.pageY + i && (c = r.pageY + i - u), n.style.width = o - (s = a < r.pageX + o ? r.pageX + o - a : s) + "px", n.style.height = i - c + "px", E(x.clientX, x.clientY))
                })
            }
    }

    function u1(e) {
        function t(e) {
            var t, n, r, o, i, a;
            0 === e.button && (t = I(c.dom.getParents(e.target), function() {
                for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
                return function(e) {
                    for (var t = 0; t < n.length; t++)
                        if (n[t](e)) return !0;
                    return !1
                }
            }(D1, O1)).getOr(null), i = c.getBody(), D1(a = t) && a !== i && (n = c.dom.getPos(t), r = c.getBody(), o = c.getDoc().documentElement, u.set({
                element: t,
                dragging: !1,
                screenX: e.screenX,
                screenY: e.screenY,
                maxX: (c.inline ? r.scrollWidth : o.offsetWidth) - 2,
                maxY: (c.inline ? r.scrollHeight : o.offsetHeight) - 2,
                relX: e.pageX - n.x,
                relY: e.pageY - n.y,
                width: t.offsetWidth,
                height: t.offsetHeight,
                ghost: function(e, t, n) {
                    var r = c.dom,
                        o = e.cloneNode(!0);
                    r.setStyles(o, { width: t, height: n }), r.setAttrib(o, "data-mce-selected", null);
                    var i = r.create("div", { class: "mce-drag-container", "data-mce-bogus": "all", unselectable: "on", contenteditable: "false" });
                    return r.setStyles(i, { position: "absolute", opacity: .5, overflow: "hidden", border: 0, padding: 0, margin: 0, width: t, height: n }), r.setStyles(o, { margin: 0, boxSizing: "border-box" }), i.appendChild(o), i
                }(t, t.offsetWidth, t.offsetHeight)
            })))
        }

        function n(u) {
            i.on(function(e) {
                var t, n, r, o, i, a;
                e.dragging && ((o = 3 === (a = (r = s).selection.getSel().getRangeAt(0).startContainer).nodeType ? a.parentNode : a) === (i = e.element) || r.dom.isChildOf(o, i) || D1(o) || ((n = e.element.cloneNode(!0)).removeAttribute("data-mce-selected"), t = n, s.fire("drop", { clientX: u.clientX, clientY: u.clientY }).isDefaultPrevented() || s.undoManager.transact(function() { i1(e.element), s.insertContent(s.dom.getOuterHTML(t)), s._selectionOverrides.hideFakeCaret() })))
            }), B1(i)
        }
        var r, o, i, s, u, c, a = wu(),
            l = cu.DOM,
            f = document,
            d = a1(u = a, c = e),
            m = (r = i = a, function() { r.on(function(e) { e.dragging && o.fire("dragend") }), B1(r) });
        (o = s = e).on("mousedown", t), e.on("mousemove", d), e.on("mouseup", n), l.bind(f, "mousemove", d), l.bind(f, "mouseup", m), e.on("remove", function() { l.unbind(f, "mousemove", d), l.unbind(f, "mouseup", m) })
    }

    function s1(e) {
        var n, i;

        function a(e) {
            var t;
            e.isDefaultPrevented() || (t = e.dataTransfer) && (ie(t.types, "Files") || 0 < t.files.length) && (e.preventDefault(), "drop" === e.type && Mv(i, "Dropped file type is not supported"))
        }

        function u(e) { Ed(i, e.target) && a(e) }

        function t() {
            var t = cu.DOM,
                n = i.dom,
                r = document,
                o = i.inline ? i.getBody() : i.getDoc(),
                e = ["drop", "dragover"];
            X(e, function(e) { t.bind(r, e, u), n.bind(o, e, a) }), i.on("remove", function() { X(e, function(e) { t.unbind(r, e, u), n.unbind(o, e, a) }) })
        }
        u1(e), (n = e).on("drop", function(e) { var t = void 0 !== e.clientX ? n.getDoc().elementFromPoint(e.clientX, e.clientY) : null;!D1(t) && "false" !== n.dom.getContentEditableParent(t) || e.preventDefault() }), e.getParam("block_unsupported_drop", !0, "boolean") && (i = e).on("init", function() { Ur.setEditorTimeout(i, t, 0) })
    }

    function c1(e, t) { return _f(e.getBody(), t) }

    function l1(l) {
        function f(e) { return e !== v && (L1(e) || Zn(e)) && h.isChildOf(e, v) }

        function i(e) { e && p.setRng(e) }

        function d(e, t, n, r) { return void 0 === r && (r = !0), l.fire("ShowCaret", { target: t, direction: e, before: n }).isDefaultPrevented() ? null : (r && p.scrollIntoView(t, -1 === e), s.show(n, t)) }

        function t(e) { return Xr(e) || Mo(e) || Fo(e) }

        function m(e) { return t(e.startContainer) || t(e.endContainer) }

        function c(e, t) {
            if (!e) return null;
            if (e.collapsed) {
                if (!m(e)) {
                    var n = t ? 1 : -1,
                        r = mc(n, v, e),
                        o = r.getNode(!t);
                    if (rc(o)) return d(n, o, !!t && !r.isAtEnd(), !1);
                    var i = r.getNode(t);
                    if (rc(i)) return d(n, i, !t && !r.isAtEnd(), !1)
                }
                return null
            }
            var a = e.startContainer,
                u = e.startOffset,
                s = e.endOffset;
            if (3 === a.nodeType && 0 === u && L1(a.parentNode) && (a = a.parentNode, u = h.nodeIndex(a), a = a.parentNode), 1 !== a.nodeType) return null;
            if (s === u + 1 && a === e.endContainer) {
                var c = a.childNodes[u];
                if (f(c)) return function(e) {
                    var t = e.cloneNode(!0),
                        n = l.fire("ObjectSelected", { target: e, targetClone: t });
                    if (n.isDefaultPrevented()) return null;
                    var r = function(e, t, n) {
                            var r = l.$,
                                o = yr(Et.fromDom(l.getBody()), "#" + b).fold(function() { return r([]) }, function(e) { return r([e.dom]) });
                            0 === o.length && (o = r('<div data-mce-bogus="all" class="mce-offscreen-selection"></div>').attr("id", b)).appendTo(l.getBody());
                            var i = h.createRng();
                            t === n && Ct.ie ? (o.empty().append('<p style="font-size: 0" data-mce-bogus="all">\xa0</p>').append(t), i.setStartAfter(o[0].firstChild.firstChild), i.setEndAfter(t)) : (o.empty().append(Do).append(t).append(Do), i.setStart(o[0].firstChild, 1), i.setEnd(o[0].lastChild, 0)), o.css({ top: h.getPos(e, l.getBody()).y }), o[0].focus();
                            var a = p.getSel();
                            return a.removeAllRanges(), a.addRange(i), i
                        }(e, n.targetClone, t),
                        o = Et.fromDom(e);
                    return X(Au(Et.fromDom(l.getBody()), "*[data-mce-selected]"), function(e) { je(o, e) || bn(e, y) }), h.getAttrib(e, y) || e.setAttribute(y, "1"), g = e, C(), r
                }(c)
            }
            return null
        }

        function a() { g && g.removeAttribute(y), yr(Et.fromDom(l.getBody()), "#" + b).each(Mn), g = null }
        var g, n, e, o, p = l.selection,
            h = l.dom,
            u = h.isBlock,
            v = l.getBody(),
            s = tc(l, v, u, function() { return Td(l) }),
            b = "sel-" + h.uniqueId(),
            y = "data-mce-selected",
            r = p.getRng,
            C = function() { s.hide() };
        return Ct.ceFalse && !bh(l) && (l.on("mouseup", function(e) {
            var t = r();
            t.collapsed && lv(l, e.clientX, e.clientY) && Eb(l, t, !1).each(i)
        }), l.on("click", function(e) {
            var t = c1(l, e.target);
            t && (L1(t) && (e.preventDefault(), l.focus()), P1(t) && h.isChildOf(t, p.getNode()) && a())
        }), l.on("blur NewBlock", a), l.on("ResizeWindow FullscreenStateChanged", s.reposition), l.on("tap", function(e) {
            var t = e.target,
                n = c1(l, t);
            L1(n) ? (e.preventDefault(), Sb(l, n).each(c)) : f(t) && Sb(l, t).each(c)
        }, !0), l.on("mousedown", function(e) {
            var t, n, r, o = e.target;
            o !== v && "HTML" !== o.nodeName && !h.isChildOf(o, v) || !1 === lv(l, e.clientX, e.clientY) || ((t = c1(l, o)) ? L1(t) ? (e.preventDefault(), Sb(l, t).each(c)) : (a(), P1(t) && e.shiftKey || Af(e.clientX, e.clientY, p.getRng()) || (C(), p.placeCaretAt(e.clientX, e.clientY))) : f(o) ? Sb(l, o).each(c) : !1 === rc(o) && (a(), C(), (n = Gy(v, e.clientX, e.clientY)) && (w(o, n.node) || (e.preventDefault(), r = d(1, n.node, n.before, !1), l.getBody().focus(), i(r)))))
        }), l.on("keypress", function(e) { $f.modifierPressed(e) || L1(p.getNode()) && e.preventDefault() }), l.on("GetSelectionRange", function(e) {
            var t = e.range;
            g && (g.parentNode ? ((t = t.cloneRange()).selectNode(g), e.range = t) : g = null)
        }), l.on("SetSelectionRange", function(e) {
            var t, n, r, o, i, a, u;
            e.range = (t = e.range, n = l.schema.getShortEndedElements(), r = h.createRng(), o = t.startContainer, i = t.startOffset, a = t.endContainer, u = t.endOffset, Ee(n, o.nodeName.toLowerCase()) ? 0 === i ? r.setStartBefore(o) : r.setStartAfter(o) : r.setStart(o, i), Ee(n, a.nodeName.toLowerCase()) ? 0 === u ? r.setEndBefore(a) : r.setEndAfter(a) : r.setEnd(a, u), r);
            var s = c(e.range, e.forward);
            s && (e.range = s)
        }), l.on("AfterSetSelectionRange", function(e) {
            var t = e.range,
                n = t.startContainer.parentNode;
            m(t) || "mcepastebin" === n.id || C(), h.hasClass(n, "mce-offscreen-selection") || a()
        }), l.on("copy", function(e) {
            var t, n, r = e.clipboardData;
            e.isDefaultPrevented() || !e.clipboardData || Ct.ie || (t = (n = h.get(b)) && n.getElementsByTagName("*")[0]) && (e.preventDefault(), r.clearData(), r.setData("text/html", t.outerHTML), r.setData("text/plain", t.outerText || t.innerText))
        }), s1(l), e = xu(function() {
            var e, t;
            n.removed || !n.getBody().contains(document.activeElement) || (e = n.selection.getRng()).collapsed && (t = Nb(n, e, !1), n.selection.setRng(t))
        }, 0), (n = l).on("focus", function() { e.throttle() }), n.on("blur", function() { e.cancel() }), (o = l).on("init", function() {
            o.on("focusin", function(e) {
                var t, n, r = e.target;
                Zn(r) && (t = _f(o.getBody(), r), n = Jn(t) ? t : r, o.selection.getNode() !== n && Sb(o, n).each(function(e) { return o.selection.setRng(e) }))
            })
        })), { showCaret: d, showBlockCaretContainer: function(e) { e.hasAttribute("data-mce-caret") && (Qr(e), i(r()), p.scrollIntoView(e)) }, hideFakeCaret: C, destroy: function() { s.destroy(), g = null } };

        function w(e, t) {
            var n, r = h.getParent(e, u),
                o = h.getParent(t, u);
            return r && e !== o && h.isChildOf(r, o) && !1 === L1(c1(l, r)) || r && (n = o, h.getParent(r, u) !== h.getParent(n, u)) && function(e) {
                var t = Wc(e);
                if (e.firstChild) {
                    var n, r = bs.before(e.firstChild),
                        o = t.next(r);
                    return o && !(ap(n = o) || up(n) || np(n) || rp(n))
                }
            }(r)
        }
    }

    function f1(a) {
        function e(e, t) { try { a.getDoc().execCommand(e, !1, t) } catch (e) {} }

        function u(e) { return e.isDefaultPrevented() }

        function t() { a.shortcuts.add("meta+a", null, "SelectAll") }

        function n() {
            a.inline || b.bind(a.getDoc(), "mousedown mouseup", function(e) {
                var t;
                e.target === a.getDoc().documentElement && (t = y.getRng(), a.getBody().focus(), "mousedown" === e.type ? Xr(t.startContainer) || y.placeCaretAt(e.clientX, e.clientY) : y.setRng(t))
            })
        }

        function r() {
            Range.prototype.getClientRects || a.on("mousedown", function(e) {
                var t;
                u(e) || "HTML" !== e.target.nodeName || ((t = a.getBody()).blur(), Ur.setEditorTimeout(a, function() { t.focus() }))
            })
        }

        function o() { a.on("click", function(e) { var t = e.target; /^(IMG|HR)$/.test(t.nodeName) && "false" !== b.getContentEditableParent(t) && (e.preventDefault(), a.selection.select(t), a.nodeChanged()), "A" === t.nodeName && b.hasClass(t, "mce-item-anchor") && (e.preventDefault(), y.select(t)) }) }

        function i() { a.on("keydown", function(e) { if (!u(e) && e.keyCode === h && y.isCollapsed() && 0 === y.getRng().startOffset) { var t = y.getNode().previousSibling; if (t && t.nodeName && "table" === t.nodeName.toLowerCase()) return e.preventDefault(), !1 } }) }

        function s() { a.getParam("readonly") || a.on("BeforeExecCommand mousedown", function() { e("StyleWithCSS", !1), e("enableInlineTableEditing", !1), Vs(a) || e("enableObjectResizing", !1) }) }

        function c() { a.contentStyles.push("img:-moz-broken {-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}") }

        function l() { a.inline || a.on("keydown", function() { document.activeElement === document.body && a.getWin().focus() }) }

        function f() { a.inline || (a.contentStyles.push("body {min-height: 150px}"), a.on("click", function(e) { var t; "HTML" === e.target.nodeName && (11 < Ct.ie ? a.getBody().focus() : (t = a.selection.getRng(), a.getBody().focus(), a.selection.setRng(t), a.selection.normalize(), a.nodeChanged())) })) }

        function d() { Ct.mac && a.on("keydown", function(e) {!$f.metaKeyPressed(e) || e.shiftKey || 37 !== e.keyCode && 39 !== e.keyCode || (e.preventDefault(), a.selection.getSel().modify("move", 37 === e.keyCode ? "backward" : "forward", "lineboundary")) }) }

        function m() {
            a.on("click", function(e) {
                var t = e.target;
                do { if ("A" === t.tagName) return void e.preventDefault() } while (t = t.parentNode)
            }), a.contentStyles.push(".mce-content-body {-webkit-touch-callout: none}")
        }

        function g() { a.on("init", function() { a.dom.bind(a.getBody(), "submit", function(e) { e.preventDefault() }) }) }
        var p = St.each,
            h = $f.BACKSPACE,
            v = $f.DELETE,
            b = a.dom,
            y = a.selection,
            C = a.parser,
            w = Ct.gecko,
            x = Ct.ie,
            S = Ct.webkit,
            E = "data:text/mce-internal,",
            N = x ? "Text" : "URL",
            k = oe;
        return bh(a) ? (S && (n(), o(), g(), t(), Ct.iOS && (l(), f(), m())), w && (r(), s(), c(), d())) : (a.on("keydown", function(e) {
            if (!u(e) && e.keyCode === $f.BACKSPACE) {
                var t, n = (t = y.getRng()).startContainer,
                    r = t.startOffset,
                    o = b.getRoot(),
                    i = n;
                if (t.collapsed && 0 === r) { for (; i && i.parentNode && i.parentNode.firstChild === i && i.parentNode !== o;) i = i.parentNode; "BLOCKQUOTE" === i.tagName && (a.formatter.toggle("blockquote", null, i), (t = b.createRng()).setStart(n, 0), t.setEnd(n, 0), y.setRng(t)) }
            }
        }), a.on("keydown", function(e) {
            var t, n, r, o, i = e.keyCode;
            u(e) || i !== v && i !== h || (t = a.selection.isCollapsed(), n = a.getBody(), t && !b.isEmpty(n) || !t && (r = T(a.selection.getRng()), (o = b.createRng()).selectNode(a.getBody()), r !== T(o)) || (e.preventDefault(), a.setContent(""), n.firstChild && b.isBlock(n.firstChild) ? a.selection.setCursorLocation(n.firstChild, 0) : a.selection.setCursorLocation(n, 0), a.nodeChanged()))
        }), Ct.windowsPhone || a.on("keyup focusin mouseup", function(e) { $f.modifierPressed(e) || y.normalize() }, !0), S && (n(), o(), Ls(a) && a.on("init", function() { e("DefaultParagraphSeparator", Ls(a)) }), g(), i(), C.addNodeFilter("br", function(e) { for (var t = e.length; t--;) "Apple-interchange-newline" === e[t].attr("class") && e[t].remove() }), Ct.iOS ? (l(), f(), m()) : t()), 11 <= Ct.ie && (f(), i()), Ct.ie && (t(), e("AutoUrlDetect", !1), a.on("dragstart", function(e) {
            var t, n, r;
            (t = e).dataTransfer && (a.selection.isCollapsed() && "IMG" === t.target.tagName && y.select(t.target), 0 < (n = a.selection.getContent()).length && (r = E + escape(a.id) + "," + escape(n), t.dataTransfer.setData(N, r)))
        }), a.on("drop", function(e) {
            var t, n, r, o;
            u(e) || (t = e.dataTransfer && (o = e.dataTransfer.getData(N)) && 0 <= o.indexOf(E) ? (o = o.substr(E.length).split(","), { id: unescape(o[0]), html: unescape(o[1]) }) : null) && t.id !== a.id && (e.preventDefault(), n = Pf(e.x, e.y, a.getDoc()), y.setRng(n), r = t.html, a.queryCommandSupported("mceInsertClipboardContent") ? a.execCommand("mceInsertClipboardContent", !1, { content: r, internal: !0 }) : a.execCommand("mceInsertContent", !1, r))
        })), w && (a.on("keydown", function(e) {
            if (!u(e) && e.keyCode === h && a.getBody().getElementsByTagName("hr").length && y.isCollapsed() && 0 === y.getRng().startOffset) {
                var t = y.getNode(),
                    n = t.previousSibling;
                if ("HR" === t.nodeName) return b.remove(t), void e.preventDefault();
                n && n.nodeName && "hr" === n.nodeName.toLowerCase() && (b.remove(n), e.preventDefault())
            }
        }), r(), a.on("keypress", function(e) { var t; if (!u(e) && (8 === e.keyCode || 46 === e.keyCode) && A()) return t = _(), a.getDoc().execCommand("delete", !1, null), t(), e.preventDefault(), !1 }), b.bind(a.getDoc(), "cut", function(e) { var t;!u(e) && A() && (t = _(), Ur.setEditorTimeout(a, function() { t() })) }), s(), a.on("SetContent ExecCommand", function(e) {
            "setcontent" !== e.type && "mceInsertLink" !== e.command || p(b.select("a"), function(e) {
                var t = e.parentNode,
                    n = b.getRoot();
                if (t.lastChild === e) {
                    for (; t && !b.isBlock(t);) {
                        if (t.parentNode.lastChild !== t || t === n) return;
                        t = t.parentNode
                    }
                    b.add(t, "br", { "data-mce-bogus": 1 })
                }
            })
        }), c(), d(), i())), { refreshContentEditable: k, isHidden: function() { if (!w || a.removed) return !1; var e = a.selection.getSel(); return !e || !e.rangeCount || 0 === e.rangeCount } };

        function _() {
            var e = b.getAttribs(y.getStart().cloneNode(!1));
            return function() {
                var t = y.getStart();
                t !== a.getBody() && (b.setAttrib(t, "style", null), p(e, function(e) { t.setAttributeNode(e.cloneNode(!0)) }))
            }
        }

        function A() { return !y.isCollapsed() && b.getParent(y.getStart(), b.isBlock) !== b.getParent(y.getEnd(), b.isBlock) }

        function T(e) {
            var t = b.create("body"),
                n = e.cloneContents();
            return t.appendChild(n), y.serializer.serialize(t, { format: "html" })
        }
    }

    function d1(e) { return ne(e, function(e) { return !1 === b(e) }) }

    function m1(e) {
        var t = e.settings,
            n = e.editorUpload.blobCache;
        return d1({ allow_conditional_comments: t.allow_conditional_comments, allow_html_data_urls: t.allow_html_data_urls, allow_svg_data_urls: t.allow_svg_data_urls, allow_html_in_named_anchor: t.allow_html_in_named_anchor, allow_script_urls: t.allow_script_urls, allow_unsafe_link_target: t.allow_unsafe_link_target, convert_fonts_to_spans: t.convert_fonts_to_spans, fix_list_elements: t.fix_list_elements, font_size_legacy_values: t.font_size_legacy_values, forced_root_block: t.forced_root_block, forced_root_block_attrs: t.forced_root_block_attrs, padd_empty_with_br: t.padd_empty_with_br, preserve_cdata: t.preserve_cdata, remove_trailing_brs: t.remove_trailing_brs, inline_styles: t.inline_styles, root_name: e.inline ? e.getElement().nodeName.toLowerCase() : void 0, validate: !0, blob_cache: n, document: e.getDoc(), images_dataimg_filter: t.images_dataimg_filter })
    }

    function g1(e) {
        var t, u, n;
        e.bindPendingEventDelegates(), e.initialized = !0, e.fire("Init"), e.focus(!0), n = (u = e).dom.getRoot(), u.inline || Vl(u) && u.selection.getStart(!0) !== n || mf(n).each(function(e) {
            var t, n, r, o, i = e.getNode(),
                a = sn(i) ? mf(i).getOr(e) : e;
            Ct.browser.isIE() ? (t = u, n = a.toRange(), r = Et.fromDom(t.getBody()), o = (bd(t) ? he.from(n) : he.none()).map(yd).filter(vd(r)), t.bookmark = o.isSome() ? o : t.bookmark) : u.selection.setRng(a.toRange())
        }), e.nodeChanged({ initial: !0 }), e.execCallback("init_instance_callback", e), (t = e).settings.auto_focus && Ur.setEditorTimeout(t, function() {
            var e = !0 === t.settings.auto_focus ? t : t.editorManager.get(t.settings.auto_focus);
            e.destroyed || e.focus()
        }, 100)
    }

    function p1(e) { return (e.inline ? e.ui : e.dom).styleSheetLoader }

    function h1(e) {
        function t() { o.unloadAll(a), e.inline || e.ui.styleSheetLoader.unloadAll(i) }

        function n() { e.removed ? t() : e.on("remove", t) }
        var r, o = p1(e),
            i = Hs(e),
            a = e.contentCSS;
        0 < e.contentStyles.length && (r = "", St.each(e.contentStyles, function(e) { r += e + "\r\n" }), e.dom.addStyle(r));
        var u, s, c, l, f, d, m, g, p, h = _r.all((u = e, s = a, c = i, l = [new _r(function(e, t) { return p1(u).loadAll(s, e, t) })], u.inline ? l : l.concat([new _r(function(e, t) { return u.ui.styleSheetLoader.loadAll(c, e, t) })]))).then(n).catch(n);
        return e.settings.content_style && (d = (f = e).settings.content_style, m = Et.fromDom(f.getBody()), g = jt(Ln(m)), gn(p = Et.fromTag("style"), "type", "text/css"), In(p, Et.fromText(d)), In(g, p), f.on("remove", function() { Mn(p) })), h
    }

    function v1(e) { var t;!0 !== e.removed && (bh(t = e) || t.load({ initial: !0, format: "html" }), t.startContent = t.getContent({ format: "raw" }), g1(e)) }

    function b1(t, e) {
        var n = t.settings,
            r = t.getElement(),
            o = t.getDoc();
        n.inline || (t.getElement().style.visibility = t.orgVisibility), e || t.inline || (o.open(), o.write(t.iframeHTML), o.close()), t.inline && (I1.addClass(r, "mce-content-body"), t.contentDocument = o = document, t.contentWindow = window, t.bodyElement = r, t.contentAreaContainer = r);
        var u, i, a, s, c, l, f, d, m, g, p, h = t.getBody();
        h.disabled = !0, t.readonly = !!n.readonly, t.readonly || (t.inline && "static" === I1.getStyle(h, "position", !0) && (h.style.position = "relative"), h.contentEditable = t.getParam("content_editable_state", !0)), h.disabled = !1, t.editorUpload = Xv(t), t.schema = go(n), t.dom = cu(o, { keep_values: !0, url_converter: t.convertURL, url_converter_scope: t, hex_colors: n.force_hex_style_colors, update_styles: !0, root_element: t.inline ? t.getBody() : null, collect: function() { return t.inline }, schema: t.schema, contentCssCors: t.getParam("content_css_cors", !1, "boolean"), referrerPolicy: Us(t), onSetAttrib: function(e) { t.fire("SetAttrib", e) } }), t.parser = ((i = Gh(m1(u = t), u.schema)).addAttributeFilter("src,href,style,tabindex", function(e, t) { for (var n, r, o = e.length, i = u.dom, a = "data-mce-" + t; o--;)(r = (n = e[o]).attr(t)) && !n.attr(a) && 0 !== r.indexOf("data:") && 0 !== r.indexOf("blob:") && ("style" === t ? ((r = i.serializeStyle(i.parseStyle(r), n.name)).length || (r = null), n.attr(a, r), n.attr(t, r)) : "tabindex" === t ? (n.attr(a, r), n.attr(t, null)) : n.attr(a, u.convertURL(r, t, n.name))) }), i.addNodeFilter("script", function(e) {
            for (var t = e.length; t--;) {
                var n = e[t],
                    r = n.attr("type") || "no/type";
                0 !== r.indexOf("mce-") && n.attr("type", "mce-" + r)
            }
        }), u.settings.preserve_cdata && i.addNodeFilter("#cdata", function(e) {
            for (var t = e.length; t--;) {
                var n = e[t];
                n.type = 8, n.name = "#comment", n.value = "[CDATA[" + u.dom.encode(n.value) + "]]"
            }
        }), i.addNodeFilter("p,h1,h2,h3,h4,h5,h6,div", function(e) {
            for (var t = e.length, n = u.schema.getNonEmptyElements(); t--;) {
                var r = e[t];
                r.isEmpty(n) && 0 === r.getAll("br").length && (r.append(new Jd("br", 1)).shortEnded = !0)
            }
        }), i), t.serializer = Zh((a = t.settings, ke(ke({}, m1(t)), d1({ url_converter: a.url_converter, url_converter_scope: a.url_converter_scope, element_format: a.element_format, entities: a.entities, entity_encoding: a.entity_encoding, indent: a.indent, indent_after: a.indent_after, indent_before: a.indent_before, block_elements: a.block_elements, boolean_attributes: a.boolean_attributes, custom_elements: a.custom_elements, extended_valid_elements: a.extended_valid_elements, invalid_elements: a.invalid_elements, invalid_styles: a.invalid_styles, move_caret_before_on_enter_elements: a.move_caret_before_on_enter_elements, non_empty_elements: a.non_empty_elements, schema: a.schema, self_closing_elements: a.self_closing_elements, short_ended_elements: a.short_ended_elements, special: a.special, text_block_elements: a.text_block_elements, text_inline_elements: a.text_inline_elements, valid_children: a.valid_children, valid_classes: a.valid_classes, valid_elements: a.valid_elements, valid_styles: a.valid_styles, verify_html: a.verify_html, whitespace_elements: a.whitespace_elements }))), t), t.selection = zh(t.dom, t.getWin(), t.serializer, t), t.annotator = Yl(t), t.formatter = Qv(t), t.undoManager = eb(t), t._nodeChangeDispatcher = new t1(t), t._selectionOverrides = l1(t), d = t, m = wu(), g = pu(!1), p = Su(function(e) { d.fire("longpress", ke(ke({}, e), { type: "longpress" })), g.set(!0) }, 400), d.on("touchstart", function(n) {
            E0(n).each(function(e) {
                p.cancel();
                var t = { x: e.clientX, y: e.clientY, target: n.target };
                p.throttle(n), g.set(!1), m.set(t)
            })
        }, !0), d.on("touchmove", function(e) {
            p.cancel(), E0(e).each(function(i) {
                m.on(function(e) {
                    var t = i,
                        n = e,
                        r = Math.abs(t.clientX - n.x),
                        o = Math.abs(t.clientY - n.y);
                    (5 < r || 5 < o) && (m.clear(), g.set(!1), d.fire("longpresscancel"))
                })
            })
        }, !0), d.on("touchend touchcancel", function(t) { p.cancel(), "touchcancel" !== t.type && m.get().filter(function(e) { return e.target.isEqualNode(t.target) }).each(function() { g.get() ? t.preventDefault() : d.fire("tap", ke(ke({}, t), { type: "tap" })) }) }, !0), (l = c = t).on("click", function(e) { l.dom.getParent(e.target, "details") && e.preventDefault() }), (f = c).parser.addNodeFilter("details", function(e) { X(e, function(e) { e.attr("data-mce-open", e.attr("open")), e.attr("open", "open") }) }), f.serializer.addNodeFilter("details", function(e) {
            X(e, function(e) {
                var t = e.attr("data-mce-open");
                e.attr("open", K(t) ? t : null), e.attr("data-mce-open", null)
            })
        }), bh(t) || (s = t).on("click", function(e) {
            var t, n, r, o, i;
            3 <= e.detail && (r = (t = s).selection.getRng(), o = bs.fromRangeStart(r), i = bs.fromRangeEnd(r), !bs.isElementPosition(o) || r1(n = o.container()) && mf(n).each(function(e) { return r.setStart(e.container(), e.offset()) }), !bs.isElementPosition(i) || r1(n = o.container()) && gf(n).each(function(e) { return r.setEnd(e.container(), e.offset()) }), t.selection.setRng(Sg(r)))
        });
        var v, b, y, C, w, x, S, E, N, k = bh(v = t) ? pu(null) : LC(v);
        N = k, (E = t).addCommand("delete", function() {
            var e, t = N;
            x0(e = E) || Lb(e, !1) || Tb(e, !1) || f0(e, t, !1) || bb(e, !1) || xg(e) || Ib(e, !1) || h0(e, !1) || wb(e) || g0(e, !1) || (S0(e, "Delete"), sb(e))
        }), E.addCommand("forwardDelete", function() {
            var e, t = N;
            Lb(e = E, !0) || Tb(e, !0) || f0(e, t, !0) || bb(e, !0) || xg(e) || Ib(e, !0) || h0(e, !0) || wb(e) || g0(e, !0) || S0(e, "ForwardDelete")
        }), Ls(b = t) && b.on("NodeChange", A(k0, b)), C = (y = t).dom, w = Ls(y), x = y.getParam("placeholder", kc.getAttrib(y.getElement(), "placeholder"), "string"), S = function(e, t) {
            var n, r, o;
            ! function(e) { if (tb(e)) { var t = e.keyCode; return !nb(e) && ($f.metaKeyPressed(e) || e.altKey || 112 <= t && t <= 123 || ie(gy, t)) } }(e) && (n = y.getBody(), r = !(tb(o = e) && !(nb(o) || "keyup" === o.type && 229 === o.keyCode)) && function(e, t, n) {
                if (oo(Et.fromDom(t), !1)) {
                    var r = "" === n,
                        o = t.firstElementChild;
                    return !o || !e.getStyle(t.firstElementChild, "padding-left") && !e.getStyle(t.firstElementChild, "padding-right") && (r ? !e.isBlock(o) : n === o.nodeName.toLowerCase())
                }
                return !1
            }(C, n, w), "" !== C.getAttrib(n, py) === r && !t || (C.setAttrib(n, py, r ? x : null), C.setAttrib(n, "aria-placeholder", r ? x : null), y.fire("PlaceholderToggle", { state: r }), y.on(r ? "keydown" : "keyup", S), y.off(r ? "keyup" : "keydown", S)))
        }, x && y.on("init", function(e) { S(e, !0), y.on("change SetContent ExecCommand", S), y.on("paste", function(e) { return Ur.setEditorTimeout(y, function() { return S(e) }) }) });
        var _ = yh(t);
        (function(t) {
            var e = t.settings,
                n = t.getDoc(),
                r = t.getBody();
            t.fire("PreInit"), e.browser_spellcheck || e.gecko_spellcheck || (n.body.spellcheck = !1, I1.setAttrib(r, "spellcheck", "false")), t.quirks = f1(t), t.fire("PostRender");
            var o = t.getParam("directionality", yu.isRtl() ? "rtl" : void 0);
            void 0 !== o && (r.dir = o), e.protect && t.on("BeforeSetContent", function(t) { St.each(e.protect, function(e) { t.content = t.content.replace(e, function(e) { return "\x3c!--mce:protected " + escape(e) + "--\x3e" }) }) }), t.on("SetContent", function() { t.addVisual(t.getBody()) }), t.on("compositionstart compositionend", function(e) { t.composing = "compositionstart" === e.type })
        })(t), _.fold(function() { h1(t).then(function() { return v1(t) }) }, function(e) { t.setProgressState(!0), h1(t).then(function() { e().then(function(e) { t.setProgressState(!1), v1(t) }, function(e) { t.notificationManager.open({ type: "error", text: String(e) }), v1(t) }) }) })
    }

    function y1(e, t) {
        var n, r, o, i, a = e.translate(e.getParam("iframe_aria_text", "Rich Text Area. Press ALT-0 for help.", "string")),
            u = (n = e.id, r = a, t.height, o = e.getParam("iframe_attrs", {}), pn(i = Et.fromTag("iframe"), o), pn(i, { id: n + "_ifr", frameBorder: "0", allowTransparency: "true", title: r }), ku(i, "tox-edit-area__iframe"), i.dom);
        u.onload = function() { u.onload = null, e.fire("load") };
        var s = function(e, t) {
            if (document.domain !== window.location.hostname && Ct.browser.isIE()) {
                var n = Vv("mce");
                e[n] = function() { b1(e) };
                var r = 'javascript:(function(){document.open();document.domain="' + document.domain + '";var ed = window.parent.tinymce.get("' + e.id + '");document.write(ed.iframeHTML);document.close();ed.' + n + "(true);})()";
                return M1.setAttrib(t, "src", r), !0
            }
            return !1
        }(e, u);
        return e.contentAreaContainer = t.iframeContainer, e.iframeElement = u, e.iframeHTML = function(e) {
            var t = e.getParam("doctype", "<!DOCTYPE html>") + "<html><head>";
            e.getParam("document_base_url", "") !== e.documentBaseUrl && (t += '<base href="' + e.documentBaseURI.getURI() + '" />'), t += '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />';
            var n = Bs(e, "body_id", "tinymce"),
                r = Bs(e, "body_class", "");
            return Ps(e) && (t += '<meta http-equiv="Content-Security-Policy" content="' + Ps(e) + '" />'), t + ('</head><body id="' + n + '" class="mce-content-body ' + r + '" data-id="' + e.id) + '"><br></body></html>'
        }(e), M1.add(t.iframeContainer, u), s
    }

    function C1(e) { return e.replace(/^\-/, "") }

    function w1(e) { return { editorContainer: e, iframeContainer: e, api: {} } }

    function x1(e) { var t, n, r, o, i, a, u, s = e.getElement(); return e.orgDisplay = s.style.display, K($s(e)) ? e.theme.renderUI() : y($s(e)) ? (n = (t = e).getElement(), (r = $s(t)(t, n)).editorContainer.nodeType && (r.editorContainer.id = r.editorContainer.id || t.id + "_parent"), r.iframeContainer && r.iframeContainer.nodeType && (r.iframeContainer.id = r.iframeContainer.id || t.id + "_iframecontainer"), r.height = r.iframeHeight || n.offsetHeight, r) : (u = (o = e).getElement(), o.inline ? w1(null) : (i = u, a = F1.create("div"), F1.insertAfter(a, i), w1(a))) }

    function S1(e) {
        var n, t, r, o, i, a, u, s;
        e.fire("ScriptsLoaded"), n = e, t = St.trim(Fs(n)), r = n.ui.registry.getAll().icons, Q(ke(ke({}, Av.get("default").icons), Av.get(t).icons), function(e, t) { Ee(r, t) || n.ui.registry.addIcon(t, e) }), a = $s(o = e), K(a) ? (o.settings.theme = C1(a), i = Pv.get(a), o.theme = new i(o, Pv.urls[a]), o.theme.init && o.theme.init(o, Pv.urls[a] || o.documentBaseUrl.replace(/\/$/, ""), o.$)) : o.theme = {}, s = [], St.each(Ks(u = e).split(/[ ,]/), function(e) { U1(u, s, C1(e)) });
        var c = x1(e),
            l = e,
            f = he.from(c.api).getOr({}),
            d = { show: he.from(f.show).getOr(oe), hide: he.from(f.hide).getOr(oe), disable: he.from(f.disable).getOr(oe), isDisabled: he.from(f.isDisabled).getOr(T), enable: function() { l.mode.isReadOnly() || he.from(f.enable).map(w) } };
        l.ui = ke(ke({}, l.ui), d);
        var m, g, p, h = { editorContainer: c.editorContainer, iframeContainer: c.iframeContainer };
        return e.editorContainer = h.editorContainer || null, jv(e), e.inline ? b1(e) : (p = y1(m = e, g = h), g.editorContainer && (M1.get(g.editorContainer).style.display = m.orgDisplay, m.hidden = M1.isHidden(g.editorContainer)), m.getElement().style.display = "none", M1.setAttrib(m.id, "aria-hidden", "true"), void(p || b1(m)))
    }

    function E1(e) { return "-" === e.charAt(0) }

    function N1(t, e, n) { return he.from(e).filter(function(e) { return 0 < e.length && !Av.has(e) }).map(function(e) { return { url: t.editorManager.baseURL + "/icons/" + e + "/icons" + n + ".js", name: he.some(e) } }) }

    function k1(c, l) {
        var e, t, f = mu.ScriptLoader,
            n = f,
            r = l,
            o = function() {
                var r, o, t, n, e, i, a, u, s;
                e = f, u = zs(i = c), s = i.getParam("language_url", "", "string"), !1 === yu.hasCode(u) && "en" !== u && (a = "" !== s ? s : i.editorManager.baseURL + "/langs/" + u + ".js", e.add(a, oe, void 0, function() { Fv(i, "LanguageLoadError", Uv("language", a, u)) })), t = f, X(function(e) { for (var t = [], n = function(e) { t.push(e) }, r = 0; r < e.length; r++) e[r].each(n); return t }([N1(n = c, "default", l), he.from(n.getParam("icons_url", "", "string")).filter(function(e) { return 0 < e.length }).map(function(e) { return { url: e, name: he.none() } }).orThunk(function() { return N1(n, Fs(n), "") })]), function(e) { t.add(e.url, oe, void 0, function() { Fv(n, "IconsLoadError", Uv("icons", e.url, e.name.getOrUndefined())) }) }), r = c, o = l, St.each(r.getParam("external_plugins"), function(e, t) { Bv.load(t, e, oe, void 0, function() { zv(r, e, t) }), r.settings.plugins += " " + t }), St.each(Ks(r).split(/[ ,]/), function(e) {
                    var t, n;
                    (e = St.trim(e)) && !Bv.urls[e] && (E1(e) ? (e = e.substr(1, e.length), t = Bv.dependencies(e), St.each(t, function(e) {
                        var t = Bv.createUrl({ prefix: "plugins/", resource: e, suffix: "/plugin" + o + ".js" }, e);
                        Bv.load(t.resource, t, oe, void 0, function() { zv(r, t.prefix + t.resource + t.suffix, t.resource) })
                    })) : (n = { prefix: "plugins/", resource: e, suffix: "/plugin" + o + ".js" }, Bv.load(e, n, oe, void 0, function() { zv(r, n.prefix + n.resource + n.suffix, e) })))
                }), f.loadQueue(function() { c.removed || S1(c) }, c, function() { c.removed || S1(c) })
            },
            i = $s(e = c);
        K(i) ? (E1(i) || Ee(Pv.urls, i) || ((t = e.getParam("theme_url")) ? Pv.load(i, e.documentBaseURI.toAbsolute(t)) : Pv.load(i, "themes/" + i + "/theme" + r + ".js")), n.loadQueue(function() { Pv.waitFor(i, o) })) : o()
    }

    function _1(a) { return function(i, e) { return he.from(e).map(Et.fromDom).filter(An).bind(function(e) { return n = a, t = i, r = e.dom, Pg(Et.fromDom(r), function(e) { return wn(t = e, n).orThunk(function() { return "font" === Nt(t) ? ae(j1, n).bind(function(e) { return vn(t, e) }) : he.none() }); var t }, function(e) { return je(Et.fromDom(t), e) }).or((o = e.dom, he.from(cu.DOM.getStyle(o, a, !0)))); var n, t, r, o }).getOr("") } }

    function A1(e) { return mf(e.getBody()).map(function(e) { var t = e.container(); return qn(t) ? t.parentNode : t }) }

    function T1(e, t) { return n = e, r = a(he.some, t), o = n, he.from(o.selection.getRng()).bind(function(e) { var t = o.getBody(); return e.startContainer === t && 0 === e.startOffset ? he.none() : he.from(o.selection.getStart(!0)) }).orThunk(A(A1, n)).map(Et.fromDom).filter(An).bind(r); var n, r, o }

    function R1(e, t) {
        if (/^[0-9.]+$/.test(t)) {
            var n = parseInt(t, 10);
            if (1 <= n && n <= 7) {
                var r = St.explode(e.getParam("font_size_style_values", "xx-small,x-small,small,medium,large,x-large,xx-large")),
                    o = St.explode(e.getParam("font_size_classes", ""));
                return o ? o[n - 1] || t : r[n - 1] || t
            }
            return t
        }
        return t
    }
    var D1 = Jn,
        O1 = Gn,
        B1 = function(e) { e.on(function(e) { i1(e.ghost) }), e.clear() },
        P1 = Gn,
        L1 = Jn,
        I1 = cu.DOM,
        M1 = cu.DOM,
        F1 = cu.DOM,
        U1 = function(t, n, r) {
            var o, i, a, u, e = Bv.get(r),
                s = Bv.urls[r] || t.documentBaseUrl.replace(/\/$/, "");
            if (r = St.trim(r), e && -1 === St.inArray(n, r) && (St.each(Bv.dependencies(r), function(e) { U1(t, n, e) }), !t.plugins[r])) try {
                var c = new e(t, s, t.$);
                (t.plugins[r] = c).init && (c.init(t, s), n.push(r))
            } catch (e) { i = r, a = e, Tf(o = t, "PluginLoadError", { message: u = yu.translate(["Failed to initialize plugin: {0}", i]) }), uy(u, a), Mv(o, u) }
        },
        z1 = cu.DOM,
        j1 = { "font-size": "size", "font-family": "face" },
        H1 = _1("font-size"),
        V1 = i(function(e) { return e.replace(/[\'\"\\]/g, "").replace(/,\s+/g, ",") }, _1("font-family")),
        q1 = St.each,
        $1 = St.map,
        W1 = St.inArray,
        K1 = (X1.prototype.execCommand = function(t, n, r, e) {
            var o, i, a = !1,
                u = this;
            if (!u.editor.removed) { if ("mcefocus" !== t.toLowerCase() && (/^(mceAddUndoLevel|mceEndUndoLevel|mceBeginUndoLevel|mceRepaint)$/.test(t) || e && e.skip_focus ? xd(i = u.editor).each(function(e) { return i.selection.setRng(e) }) : u.editor.focus()), (e = u.editor.fire("BeforeExecCommand", { command: t, ui: n, value: r })).isDefaultPrevented()) return !1; var s = t.toLowerCase(); if (o = u.commands.exec[s]) return o(s, n, r), u.editor.fire("ExecCommand", { command: t, ui: n, value: r }), !0; if (q1(this.editor.plugins, function(e) { if (e.execCommand && e.execCommand(t, n, r)) return u.editor.fire("ExecCommand", { command: t, ui: n, value: r }), !(a = !0) }), a) return a; if (u.editor.theme && u.editor.theme.execCommand && u.editor.theme.execCommand(t, n, r)) return u.editor.fire("ExecCommand", { command: t, ui: n, value: r }), !0; try { a = u.editor.getDoc().execCommand(t, n, r) } catch (e) {} return !!a && (u.editor.fire("ExecCommand", { command: t, ui: n, value: r }), !0) }
        }, X1.prototype.queryCommandState = function(e) { var t; if (!this.editor.quirks.isHidden() && !this.editor.removed) { if (e = e.toLowerCase(), t = this.commands.state[e]) return t(e); try { return this.editor.getDoc().queryCommandState(e) } catch (e) {} return !1 } }, X1.prototype.queryCommandValue = function(e) { var t; if (!this.editor.quirks.isHidden() && !this.editor.removed) { if (e = e.toLowerCase(), t = this.commands.value[e]) return t(e); try { return this.editor.getDoc().queryCommandValue(e) } catch (e) {} } }, X1.prototype.addCommands = function(e, n) {
            void 0 === n && (n = "exec");
            var r = this;
            q1(e, function(t, e) { q1(e.toLowerCase().split(","), function(e) { r.commands[n][e] = t }) })
        }, X1.prototype.addCommand = function(e, o, i) {
            var a = this;
            e = e.toLowerCase(), this.commands.exec[e] = function(e, t, n, r) { return o.call(i || a.editor, t, n, r) }
        }, X1.prototype.queryCommandSupported = function(e) { if (e = e.toLowerCase(), this.commands.exec[e]) return !0; try { return this.editor.getDoc().queryCommandSupported(e) } catch (e) {} return !1 }, X1.prototype.addQueryStateHandler = function(e, t, n) {
            var r = this;
            e = e.toLowerCase(), this.commands.state[e] = function() { return t.call(n || r.editor) }
        }, X1.prototype.addQueryValueHandler = function(e, t, n) {
            var r = this;
            e = e.toLowerCase(), this.commands.value[e] = function() { return t.call(n || r.editor) }
        }, X1.prototype.hasCustomCommand = function(e) { return e = e.toLowerCase(), !!this.commands.exec[e] }, X1.prototype.execNativeCommand = function(e, t, n) { return void 0 === t && (t = !1), void 0 === n && (n = null), this.editor.getDoc().execCommand(e, t, n) }, X1.prototype.isFormatMatch = function(e) { return this.editor.formatter.match(e) }, X1.prototype.toggleFormat = function(e, t) { this.editor.formatter.toggle(e, t), this.editor.nodeChanged() }, X1.prototype.storeSelection = function(e) { this.selectionBookmark = this.editor.selection.getBookmark(e) }, X1.prototype.restoreSelection = function() { this.editor.selection.moveToBookmark(this.selectionBookmark) }, X1.prototype.setupCommands = function(u) {
            var o = this;

            function e(r) {
                return function() {
                    var e = u.selection,
                        t = e.isCollapsed() ? [u.dom.getParent(e.getNode(), u.dom.isBlock)] : e.getSelectedBlocks(),
                        n = $1(t, function(e) { return !!u.formatter.matchNode(e, r) });
                    return -1 !== W1(n, !0)
                }
            }
            this.addCommands({
                "mceResetDesignMode,mceBeginUndoLevel": oe,
                "mceEndUndoLevel,mceAddUndoLevel": function() { u.undoManager.add() },
                mceFocus: function(e, t, n) {
                    var r, o;
                    o = n, (r = u).removed || (o ? Yd : function(t) {
                        var e = t.selection,
                            n = t.getBody(),
                            r = e.getRng();
                        t.quirks.refreshContentEditable(), void 0 !== t.bookmark && !1 === Td(t) && xd(t).each(function(e) { t.selection.setRng(e), r = e });
                        var o, i, a = (o = t, i = e.getNode(), o.dom.getParent(i, function(e) { return "true" === o.dom.getContentEditable(e) }));
                        if (t.$.contains(n, a)) return Ad(a), _d(t, r), Yd(t);
                        t.inline || (Ct.opera || Ad(n), t.getWin().focus()), (Ct.gecko || t.inline) && (Ad(n), _d(t, r)), Yd(t)
                    })(r)
                },
                "Cut,Copy,Paste": function(e) { var t, n, r = u.getDoc(); try { o.execNativeCommand(e) } catch (e) { t = !0 }!(t = "paste" === e && !r.queryCommandEnabled(e) || t) && r.queryCommandSupported(e) || (n = u.translate("Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead."), Ct.mac && (n = n.replace(/Ctrl\+/g, "\u2318+")), u.notificationManager.open({ text: n, type: "error" })) },
                unlink: function() {
                    var e;
                    u.selection.isCollapsed() ? (e = u.dom.getParent(u.selection.getStart(), "a")) && u.dom.remove(e, !0) : u.formatter.remove("link")
                },
                "JustifyLeft,JustifyCenter,JustifyRight,JustifyFull,JustifyNone": function(e) { var t = e.substring(7); "full" === t && (t = "justify"), q1("left,center,right,justify".split(","), function(e) { t !== e && u.formatter.remove("align" + e) }), "none" !== t && o.toggleFormat("align" + t) },
                "InsertUnorderedList,InsertOrderedList": function(e) {
                    var t;
                    o.execNativeCommand(e);
                    var n = u.dom.getParent(u.selection.getNode(), "ol,ul");
                    n && (t = n.parentNode, /^(H[1-6]|P|ADDRESS|PRE)$/.test(t.nodeName) && (o.storeSelection(), u.dom.split(t, n), o.restoreSelection()))
                },
                "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": function(e) { o.toggleFormat(e) },
                "ForeColor,HiliteColor": function(e, t, n) { o.toggleFormat(e, { value: n }) },
                FontName: function(e, t, n) {
                    var r, o;
                    o = R1(r = u, n), r.formatter.toggle("fontname", { value: R(o.split(/\s*,\s*/), function(e) { return -1 === e.indexOf(" ") || Ye(e, '"') || Ye(e, "'") ? e : "'" + e + "'" }).join(",") }), r.nodeChanged()
                },
                FontSize: function(e, t, n) {
                    var r;
                    (r = u).formatter.toggle("fontsize", { value: R1(r, n) }), r.nodeChanged()
                },
                LineHeight: function(e, t, n) {
                    var r;
                    (r = u).formatter.toggle("lineheight", { value: String(n) }), r.nodeChanged()
                },
                Lang: function(e, t, n) { o.toggleFormat(e, { value: n.code, customValue: n.customCode }) },
                RemoveFormat: function(e) { u.formatter.remove(e) },
                mceBlockQuote: function() { o.toggleFormat("blockquote") },
                FormatBlock: function(e, t, n) { return o.toggleFormat(n || "p") },
                mceCleanup: function() {
                    var e = u.selection.getBookmark();
                    u.setContent(u.getContent()), u.selection.moveToBookmark(e)
                },
                mceRemoveNode: function(e, t, n) {
                    var r = n || u.selection.getNode();
                    r !== u.getBody() && (o.storeSelection(), u.dom.remove(r, !0), o.restoreSelection())
                },
                mceSelectNodeDepth: function(e, t, n) {
                    var r = 0;
                    u.dom.getParent(u.selection.getNode(), function(e) { if (1 === e.nodeType && r++ === n) return u.selection.select(e), !1 }, u.getBody())
                },
                mceSelectNode: function(e, t, n) { u.selection.select(n) },
                mceInsertContent: function(e, t, n) {
                    var r, o, i, a;
                    r = u, o = function(e) { if ("string" == typeof e) return { content: e, details: {} }; var t = St.extend({ paste: e.paste, data: { paste: e.paste } }, e); return { content: e.content, details: t } }(n), i = o.content, a = o.details, Ch(r).editor.insertContent(i, a)
                },
                mceInsertRawHTML: function(e, t, n) {
                    u.selection.setContent("tiny_mce_marker");
                    var r = u.getContent();
                    u.setContent(r.replace(/tiny_mce_marker/g, function() { return n }))
                },
                mceInsertNewLine: function(e, t, n) { AC(u, n) },
                mceToggleFormat: function(e, t, n) { o.toggleFormat(n) },
                mceSetContent: function(e, t, n) { u.setContent(n) },
                "Indent,Outdent": function(e) { w0(u, e) },
                mceRepaint: oe,
                InsertHorizontalRule: function() { u.execCommand("mceInsertContent", !1, "<hr />") },
                mceToggleVisualAid: function() { u.hasVisual = !u.hasVisual, u.addVisual() },
                mceReplaceContent: function(e, t, n) { u.execCommand("mceInsertContent", !1, n.replace(/\{\$selection\}/g, u.selection.getContent({ format: "text" }))) },
                mceInsertLink: function(e, t, n) {
                    "string" == typeof n && (n = { href: n });
                    var r = u.dom.getParent(u.selection.getNode(), "a");
                    n.href = n.href.replace(/ /g, "%20"), r && n.href || u.formatter.remove("link"), n.href && u.formatter.apply("link", n, r)
                },
                selectAll: function() {
                    var e, t = u.dom.getParent(u.selection.getStart(), Gn);
                    t && ((e = u.dom.createRng()).selectNodeContents(t), u.selection.setRng(e))
                },
                mceNewDocument: function() { u.setContent("") },
                InsertLineBreak: function(e, t, n) { return hC(u, n), !0 }
            }), o.addCommands({ JustifyLeft: e("alignleft"), JustifyCenter: e("aligncenter"), JustifyRight: e("alignright"), JustifyFull: e("alignjustify"), "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": function(e) { return o.isFormatMatch(e) }, mceBlockQuote: function() { return o.isFormatMatch("blockquote") }, Outdent: function() { return y0(u) }, "InsertUnorderedList,InsertOrderedList": function(e) { var t = u.dom.getParent(u.selection.getNode(), "ul,ol"); return t && ("insertunorderedlist" === e && "UL" === t.tagName || "insertorderedlist" === e && "OL" === t.tagName) } }, "state"), o.addCommands({ Undo: function() { u.undoManager.undo() }, Redo: function() { u.undoManager.redo() } }), o.addQueryValueHandler("FontName", function() { return T1(t = u, function(e) { return V1(t.getBody(), e.dom) }).getOr(""); var t }, this), o.addQueryValueHandler("FontSize", function() { return T1(t = u, function(e) { return H1(t.getBody(), e.dom) }).getOr(""); var t }, this), o.addQueryValueHandler("LineHeight", function() {
                return T1(t = u, function(n) {
                    var e = Et.fromDom(t.getBody());
                    return Pg(n, function(e) { return wn(e, "line-height") }, A(je, e)).getOrThunk(function() {
                        var e = parseFloat(Cn(n, "line-height")),
                            t = parseFloat(Cn(n, "font-size"));
                        return String(e / t)
                    })
                }).getOr("");
                var t
            }, this)
        }, X1);

    function X1(e) { this.commands = { state: {}, exec: {}, value: {} }, this.editor = e, this.setupCommands(e) }

    function Y1(e, t, n) {
        var r, o, i, a, u, s;
        _u(e, t) && !1 === n ? (o = t, Nu(r = e) ? r.dom.classList.remove(o) : (u = o, 0 < (s = U(Eu(a = r, "class"), function(e) { return e !== u })).length ? gn(a, "class", s.join(" ")) : bn(a, "class")), 0 === (Nu(i = r) ? i.dom.classList : Eu(i, "class")).length && bn(i, "class")) : n && ku(e, t)
    }

    function G1(e, t, n) { try { e.getDoc().execCommand(t, !1, String(n)) } catch (e) {} }

    function J1(e, t) { e.dom.contentEditable = t ? "true" : "false" }

    function Q1(e, t) {
        var n, r, o = Et.fromDom(e.getBody());
        Y1(o, "mce-content-readonly", t), t ? (e.selection.controlSelection.hideResizeRect(), e._selectionOverrides.hideFakeCaret(), he.from(e.selection.getNode()).each(function(e) { e.removeAttribute("data-mce-selected") }), J1(o, !(e.readonly = !0)), X(Au(o, '*[contenteditable="true"]'), function(e) { gn(e, tw, "true"), J1(e, !1) })) : (J1(o, !(e.readonly = !1)), X(Au(o, "*[" + tw + '="true"]'), function(e) { bn(e, tw), J1(e, !0) }), G1(e, "StyleWithCSS", !1), G1(e, "enableInlineTableEditing", !1), G1(e, "enableObjectResizing", !1), (Td(n = e) || (r = n, md(Ln(Et.fromDom(r.getElement()))).filter(function(e) { return !(void 0 !== (t = e.dom.classList) && (t.contains("tox-edit-area") || t.contains("tox-edit-area__iframe") || t.contains("mce-content-body"))) && Ed(r, e.dom); var t }).isSome())) && e.focus(), e.selection.setRng(e.selection.getRng()), e.nodeChanged())
    }

    function Z1(e) { return e.readonly }

    function ew(t) { t.parser.addAttributeFilter("contenteditable", function(e) { Z1(t) && X(e, function(e) { e.attr(tw, e.attr("contenteditable")), e.attr("contenteditable", "false") }) }), t.serializer.addAttributeFilter(tw, function(e) { Z1(t) && X(e, function(e) { e.attr("contenteditable", e.attr(tw)) }) }), t.serializer.addTempAttr(tw) }
    var tw = "data-mce-contenteditable",
        nw = St.makeMap("focus blur focusin focusout click dblclick mousedown mouseup mousemove mouseover beforepaste paste cut copy selectionchange mouseout mouseenter mouseleave wheel keydown keypress keyup input beforeinput contextmenu dragstart dragend dragover draggesture dragdrop drop drag submit compositionstart compositionend compositionupdate touchstart touchmove touchend touchcancel", " "),
        rw = (ow.isNative = function(e) { return !!nw[e.toLowerCase()] }, ow.prototype.fire = function(e, t) {
            var n = e.toLowerCase(),
                r = bo(n, t || {}, this.scope);
            this.settings.beforeFire && this.settings.beforeFire(r);
            var o = this.bindings[n];
            if (o)
                for (var i = 0, a = o.length; i < a; i++) { var u = o[i]; if (!u.removed) { if (u.once && this.off(n, u.func), r.isImmediatePropagationStopped()) return r; if (!1 === u.func.call(this.scope, r)) return r.preventDefault(), r } }
            return r
        }, ow.prototype.on = function(e, t, n, r) {
            if (t = !1 === t ? T : t) {
                var o = { func: t, removed: !1 };
                r && St.extend(o, r);
                for (var i = e.toLowerCase().split(" "), a = i.length; a--;) {
                    var u = i[a],
                        s = this.bindings[u];
                    s || (s = [], this.toggleEvent(u, !0)), s = n ? _e([o], s) : _e(_e([], s), [o]), this.bindings[u] = s
                }
            }
            return this
        }, ow.prototype.off = function(e, t) {
            var n = this;
            if (e)
                for (var r = e.toLowerCase().split(" "), o = r.length; o--;) {
                    var i, a = r[o],
                        u = this.bindings[a];
                    if (!a) return Q(this.bindings, function(e, t) { n.toggleEvent(t, !1), delete n.bindings[t] }), this;
                    u && (t ? (u = (i = O(u, function(e) { return e.func === t })).fail, this.bindings[a] = u, X(i.pass, function(e) { e.removed = !0 })) : u.length = 0, u.length || (this.toggleEvent(e, !1), delete this.bindings[a]))
                } else Q(this.bindings, function(e, t) { n.toggleEvent(t, !1) }), this.bindings = {};
            return this
        }, ow.prototype.once = function(e, t, n) { return this.on(e, t, n, { once: !0 }) }, ow.prototype.has = function(e) { return e = e.toLowerCase(), !(!this.bindings[e] || 0 === this.bindings[e].length) }, ow);

    function ow(e) { this.bindings = {}, this.settings = e || {}, this.scope = this.settings.scope || this, this.toggleEvent = this.settings.toggleEvent || T }

    function iw(n) { return n._eventDispatcher || (n._eventDispatcher = new rw({ scope: n, toggleEvent: function(e, t) { rw.isNative(e) && n.toggleNativeEvent && n.toggleNativeEvent(e, t) } })), n._eventDispatcher }

    function aw(e, t) { if ("selectionchange" === t) return e.getDoc(); if (!e.inline && /^mouse|touch|click|contextmenu|drop|dragover|dragend/.test(t)) return e.getDoc().documentElement; var n = qs(e); return n ? (e.eventRoot || (e.eventRoot = mw.select(n)[0]), e.eventRoot) : e.getBody() }

    function uw(e, t, n) {
        var r, o, i, a;
        e.hidden || Z1(e) ? Z1(e) && (r = e, "click" !== (o = n).type || $f.metaKeyPressed(o) || (i = Et.fromDom(o.target), a = r, Cr(i, "a", function(e) { return je(e, Et.fromDom(a.getBody())) }).bind(function(e) { return vn(e, "href") }).each(function(e) {
            var t, n;
            o.preventDefault(), /^#/.test(e) ? (t = r.dom.select(e + ',[name="' + (Ye(n = e, "#") ? n.substring("#".length) : n) + '"]')).length && r.selection.scrollIntoView(t[0], !0) : window.open(e, "_blank", "rel=noopener noreferrer,menubar=yes,toolbar=yes,location=yes,status=yes,resizable=yes,scrollbars=yes")
        }))) : e.fire(t, n)
    }

    function sw(i, a) {
        var e, t;
        i.delegates || (i.delegates = {}), i.delegates[a] || i.removed || (t = aw(i, a), qs(i) ? (fw || (fw = {}, i.editorManager.on("removeEditor", function() { i.editorManager.activeEditor || fw && (Q(fw, function(e, t) { i.dom.unbind(aw(i, t)) }), fw = null) })), fw[a] || (fw[a] = e = function(e) {
            for (var t = e.target, n = i.editorManager.get(), r = n.length; r--;) {
                var o = n[r].getBody();
                o !== t && !mw.isChildOf(t, o) || uw(n[r], a, e)
            }
        }, mw.bind(t, a, e))) : (mw.bind(t, a, e = function(e) { uw(i, a, e) }), i.delegates[a] = e))
    }

    function cw(e, t, n, r) {
        var o = n[t.get()],
            i = n[r];
        try { i.activate() } catch (e) { return void console.error("problem while activating editor mode " + r + ":", e) }
        o.deactivate(), o.editorReadOnly !== i.editorReadOnly && Q1(e, i.editorReadOnly), t.set(r), e.fire("SwitchMode", { mode: r })
    }

    function lw(e) {
        var t, n = {};
        hw(vw(e.toLowerCase(), "+"), function(e) { e in yw ? n[e] = !0 : /^[0-9]{2,}$/.test(e) ? n.keyCode = parseInt(e, 10) : (n.charCode = e.charCodeAt(0), n.keyCode = bw[e] || e.toUpperCase().charCodeAt(0)) });
        var r = [n.keyCode];
        for (t in yw) n[t] ? r.push(t) : n[t] = !1;
        return n.id = r.join(","), n.access && (n.alt = !0, Ct.mac ? n.ctrl = !0 : n.shift = !0), n.meta && (Ct.mac ? n.meta = !0 : (n.ctrl = !0, n.meta = !1)), n
    }
    var fw, dw = {
            fire: function(e, t, n) {
                if (this.removed && "remove" !== e && "detach" !== e) return t;
                var r = iw(this).fire(e, t);
                if (!1 !== n && this.parent)
                    for (var o = this.parent(); o && !r.isPropagationStopped();) o.fire(e, r, !1), o = o.parent();
                return r
            },
            on: function(e, t, n) { return iw(this).on(e, t, n) },
            off: function(e, t) { return iw(this).off(e, t) },
            once: function(e, t) { return iw(this).once(e, t) },
            hasEventListeners: function(e) { return iw(this).has(e) }
        },
        mw = cu.DOM,
        gw = ke(ke({}, dw), {
            bindPendingEventDelegates: function() {
                var t = this;
                St.each(t._pendingNativeEvents, function(e) { sw(t, e) })
            },
            toggleNativeEvent: function(e, t) { var n = this; "focus" !== e && "blur" !== e && (n.removed || (t ? n.initialized ? sw(n, e) : n._pendingNativeEvents ? n._pendingNativeEvents.push(e) : n._pendingNativeEvents = [e] : n.initialized && (n.dom.unbind(aw(n, e), e, n.delegates[e]), delete n.delegates[e]))) },
            unbindAllNativeEvents: function() {
                var n = this,
                    e = n.getBody(),
                    t = n.dom;
                n.delegates && (Q(n.delegates, function(e, t) { n.dom.unbind(aw(n, t), t, e) }), delete n.delegates), !n.inline && e && t && (e.onload = null, t.unbind(n.getWin()), t.unbind(n.getDoc())), t && (t.unbind(e), t.unbind(n.getContainer()))
            }
        }),
        pw = ["design", "readonly"],
        hw = St.each,
        vw = St.explode,
        bw = { f1: 112, f2: 113, f3: 114, f4: 115, f5: 116, f6: 117, f7: 118, f8: 119, f9: 120, f10: 121, f11: 122, f12: 123 },
        yw = St.makeMap("alt,ctrl,shift,meta,access"),
        Cw = (ww.prototype.add = function(e, n, t, r) {
            var o = this,
                i = o.normalizeCommandFunc(t);
            return hw(vw(St.trim(e)), function(e) {
                var t = o.createShortcut(e, n, i, r);
                o.shortcuts[t.id] = t
            }), !0
        }, ww.prototype.remove = function(e) { var t = this.createShortcut(e); return !!this.shortcuts[t.id] && (delete this.shortcuts[t.id], !0) }, ww.prototype.normalizeCommandFunc = function(e) {
            var t = this,
                n = e;
            return "string" == typeof n ? function() { t.editor.execCommand(n, !1, null) } : St.isArray(n) ? function() { t.editor.execCommand(n[0], n[1], n[2]) } : n
        }, ww.prototype.createShortcut = function(e, t, n, r) { var o = St.map(vw(e, ">"), lw); return o[o.length - 1] = St.extend(o[o.length - 1], { func: n, scope: r || this.editor }), St.extend(o[0], { desc: this.editor.translate(t), subpatterns: o.slice(1) }) }, ww.prototype.hasModifier = function(e) { return e.altKey || e.ctrlKey || e.metaKey }, ww.prototype.isFunctionKey = function(e) { return "keydown" === e.type && 112 <= e.keyCode && e.keyCode <= 123 }, ww.prototype.matchShortcut = function(e, t) { return !!t && t.ctrl === e.ctrlKey && t.meta === e.metaKey && t.alt === e.altKey && t.shift === e.shiftKey && !!(e.keyCode === t.keyCode || e.charCode && e.charCode === t.charCode) && (e.preventDefault(), !0) }, ww.prototype.executeShortcutAction = function(e) { return e.func ? e.func.call(e.scope) : null }, ww);

    function ww(e) {
        this.shortcuts = {}, this.pendingPatterns = [], this.editor = e;
        var n = this;
        e.on("keyup keypress keydown", function(t) {!n.hasModifier(t) && !n.isFunctionKey(t) || t.isDefaultPrevented() || (hw(n.shortcuts, function(e) { if (n.matchShortcut(t, e)) return n.pendingPatterns = e.subpatterns.slice(0), "keydown" === t.type && n.executeShortcutAction(e), !0 }), n.matchShortcut(t, n.pendingPatterns[0]) && (1 === n.pendingPatterns.length && "keydown" === t.type && n.executeShortcutAction(n.pendingPatterns[0]), n.pendingPatterns.shift())) })
    }
    var xw = St.each,
        Sw = St.trim,
        Ew = "source protocol authority userInfo user password host port relative path directory file query anchor".split(" "),
        Nw = { ftp: 21, http: 80, https: 443, mailto: 25 },
        kw = (_w.parseDataUri = function(e) {
            var t, n = decodeURIComponent(e).split(","),
                r = /data:([^;]+)/.exec(n[0]);
            return { type: t = r ? r[1] : t, data: n[1] }
        }, _w.getDocumentBaseUrl = function(e) { var t = 0 !== e.protocol.indexOf("http") && "file:" !== e.protocol ? e.href : e.protocol + "//" + e.host + e.pathname; return /^[^:]+:\/\/\/?[^\/]+\//.test(t) && (t = t.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, ""), /[\/\\]$/.test(t) || (t += "/")), t }, _w.prototype.setPath = function(e) {
            var t = /^(.*?)\/?(\w+)?$/.exec(e);
            this.path = t[0], this.directory = t[1], this.file = t[2], this.source = "", this.getURI()
        }, _w.prototype.toRelative = function(e) {
            var t;
            if ("./" === e) return e;
            var n = new _w(e, { base_uri: this });
            if ("mce_host" !== n.host && this.host !== n.host && n.host || this.port !== n.port || this.protocol !== n.protocol && "" !== n.protocol) return n.getURI();
            var r = this.getURI(),
                o = n.getURI();
            return r === o || "/" === r.charAt(r.length - 1) && r.substr(0, r.length - 1) === o ? r : (t = this.toRelPath(this.path, n.path), n.query && (t += "?" + n.query), n.anchor && (t += "#" + n.anchor), t)
        }, _w.prototype.toAbsolute = function(e, t) { var n = new _w(e, { base_uri: this }); return n.getURI(t && this.isSameOrigin(n)) }, _w.prototype.isSameOrigin = function(e) { if (this.host == e.host && this.protocol == e.protocol) { if (this.port == e.port) return !0; var t = Nw[this.protocol]; if (t && (this.port || t) == (e.port || t)) return !0 } return !1 }, _w.prototype.toRelPath = function(e, t) {
            var n, r, o = 0,
                i = "",
                a = e.substring(0, e.lastIndexOf("/")).split("/"),
                u = t.split("/");
            if (a.length >= u.length)
                for (n = 0, r = a.length; n < r; n++)
                    if (n >= u.length || a[n] !== u[n]) { o = n + 1; break }
            if (a.length < u.length)
                for (n = 0, r = u.length; n < r; n++)
                    if (n >= a.length || a[n] !== u[n]) { o = n + 1; break }
            if (1 === o) return t;
            for (n = 0, r = a.length - (o - 1); n < r; n++) i += "../";
            for (n = o - 1, r = u.length; n < r; n++) i += n !== o - 1 ? "/" + u[n] : u[n];
            return i
        }, _w.prototype.toAbsPath = function(e, t) {
            var n, r, o = 0,
                i = [],
                a = /\/$/.test(t) ? "/" : "",
                u = e.split("/"),
                s = t.split("/");
            for (xw(u, function(e) { e && i.push(e) }), u = i, n = s.length - 1, i = []; 0 <= n; n--) 0 !== s[n].length && "." !== s[n] && (".." !== s[n] ? 0 < o ? o-- : i.push(s[n]) : o++);
            return 0 !== (r = (n = u.length - o) <= 0 ? H(i).join("/") : u.slice(0, n).join("/") + "/" + H(i).join("/")).indexOf("/") && (r = "/" + r), a && r.lastIndexOf("/") !== r.length - 1 && (r += a), r
        }, _w.prototype.getURI = function(e) { var t; return void 0 === e && (e = !1), this.source && !e || (t = "", e || (this.protocol ? t += this.protocol + "://" : t += "//", this.userInfo && (t += this.userInfo + "@"), this.host && (t += this.host), this.port && (t += ":" + this.port)), this.path && (t += this.path), this.query && (t += "?" + this.query), this.anchor && (t += "#" + this.anchor), this.source = t), this.source }, _w);

    function _w(e, t) {
        e = Sw(e), this.settings = t || {};
        var n, r, o, i, a = this.settings.base_uri,
            u = this;
        /^([\w\-]+):([^\/]{2})/i.test(e) || /^\s*#/.test(e) ? u.source = e : (n = 0 === e.indexOf("//"), 0 !== e.indexOf("/") || n || (e = (a && a.protocol || "http") + "://mce_host" + e), /^[\w\-]*:?\/\//.test(e) || (r = this.settings.base_uri ? this.settings.base_uri.path : new _w(document.location.href).directory, e = this.settings.base_uri && "" == this.settings.base_uri.protocol ? "//mce_host" + u.toAbsPath(r, e) : (o = /([^#?]*)([#?]?.*)/.exec(e), (a && a.protocol || "http") + "://mce_host" + u.toAbsPath(r, o[1]) + o[2])), e = e.replace(/@@/g, "(mce_at)"), i = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*):?([^:@\/]*))?@)?(\[[a-zA-Z0-9:.%]+\]|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(e), xw(Ew, function(e, t) {
            var n = (n = i[t]) && n.replace(/\(mce_at\)/g, "@@");
            u[e] = n
        }), a && (u.protocol || (u.protocol = a.protocol), u.userInfo || (u.userInfo = a.userInfo), u.port || "mce_host" !== u.host || (u.port = a.port), u.host && "mce_host" !== u.host || (u.host = a.host), u.source = ""), n && (u.protocol = ""))
    }
    var Aw = cu.DOM,
        Tw = St.extend,
        Rw = St.each,
        Dw = St.resolve,
        Ow = Ct.ie,
        Bw = (Pw.prototype.render = function() {
            ! function(t) {
                var e = t.id;
                yu.setCode(zs(t));
                var n, r, o, i, a = function() { z1.unbind(window, "ready", a), t.render() };
                bi.Event.domLoaded ? t.getElement() && Ct.contentEditable && (n = Et.fromDom(t.getElement()), r = P(n.dom.attributes, function(e, t) { return e[t.name] = t.value, e }, {}), t.on("remove", function() { D(n.dom.attributes, function(e) { return bn(n, e.name), 0 }), pn(n, r) }), t.ui.styleSheetLoader = zr.forElement(n, { contentCssCors: (o = t).getParam("content_css_cors"), referrerPolicy: Us(o) }), t.getParam("inline") ? t.inline = !0 : (t.orgVisibility = t.getElement().style.visibility, t.getElement().style.visibility = "hidden"), (i = t.getElement().form || z1.getParent(e, "form")) && (t.formElement = i, t.getParam("hidden_input") && !Vn(t.getElement()) && (z1.insertAfter(z1.create("input", { type: "hidden", name: e }), e), t.hasHiddenInput = !0), t.formEventDelegate = function(e) { t.fire(e.type, e) }, z1.bind(i, "submit reset", t.formEventDelegate), t.on("reset", function() { t.resetContent() }), !t.getParam("submit_patch") || i.submit.nodeType || i.submit.length || i._mceOldSubmit || (i._mceOldSubmit = i.submit, i.submit = function() { return t.editorManager.triggerSave(), t.setDirty(!1), i._mceOldSubmit(i) })), t.windowManager = Lv(t), t.notificationManager = fv(t), "xml" === t.getParam("encoding") && t.on("GetContent", function(e) { e.save && (e.content = z1.encode(e.content)) }), t.getParam("add_form_submit_trigger") && t.on("submit", function() { t.initialized && t.save() }), t.getParam("add_unload_trigger") && (t._beforeUnload = function() {!t.initialized || t.destroyed || t.isHidden() || t.save({ format: "raw", no_events: !0, set_dirty: !1 }) }, t.editorManager.on("BeforeUnload", t._beforeUnload)), t.editorManager.add(t), k1(t, t.suffix)) : z1.bind(window, "ready", a)
            }(this)
        }, Pw.prototype.focus = function(e) { this.execCommand("mceFocus", !1, e) }, Pw.prototype.hasFocus = function() { return Td(this) }, Pw.prototype.execCallback = function(e) { for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]; var r, o = this.settings[e]; if (o) return this.callbackLookup && (r = this.callbackLookup[e]) && (o = r.func, r = r.scope), "string" == typeof o && (r = (r = o.replace(/\.\w+$/, "")) ? Dw(r) : 0, o = Dw(o), this.callbackLookup = this.callbackLookup || {}, this.callbackLookup[e] = { func: o, scope: r }), o.apply(r || this, t) }, Pw.prototype.translate = function(e) { return yu.translate(e) }, Pw.prototype.getParam = function(e, t, n) {
            return i = t, a = n, l = (o = e) in (r = this).settings ? r.settings[o] : i, "hash" === a ? (c = {}, "string" == typeof(s = l) ? X(0 < s.indexOf("=") ? s.split(/[;,](?![^=;,]*(?:[;,]|$))/) : s.split(","), function(e) {
                var t = e.split("=");
                1 < t.length ? c[St.trim(t[0])] = St.trim(t[1]) : c[St.trim(t[0])] = St.trim(t[0])
            }) : c = s, c) : "string" === a ? uv(K, r, o).getOr(i) : "number" === a ? uv(E, r, o).getOr(i) : "boolean" === a ? uv(v, r, o).getOr(i) : "object" === a ? uv(h, r, o).getOr(i) : "array" === a ? uv(S, r, o).getOr(i) : "string[]" === a ? uv((u = K, function(e) { return S(e) && j(e, u) }), r, o).getOr(i) : "function" === a ? uv(y, r, o).getOr(i) : l;
            var r, o, i, a, u, s, c, l
        }, Pw.prototype.hasPlugin = function(e, t) { return !(!ie(Ks(this).split(/[ ,]/), e) || t && void 0 === Bv.get(e)) }, Pw.prototype.nodeChanged = function(e) { this._nodeChangeDispatcher.nodeChanged(e) }, Pw.prototype.addCommand = function(e, t, n) { this.editorCommands.addCommand(e, t, n) }, Pw.prototype.addQueryStateHandler = function(e, t, n) { this.editorCommands.addQueryStateHandler(e, t, n) }, Pw.prototype.addQueryValueHandler = function(e, t, n) { this.editorCommands.addQueryValueHandler(e, t, n) }, Pw.prototype.addShortcut = function(e, t, n, r) { this.shortcuts.add(e, t, n, r) }, Pw.prototype.execCommand = function(e, t, n, r) { return this.editorCommands.execCommand(e, t, n, r) }, Pw.prototype.queryCommandState = function(e) { return this.editorCommands.queryCommandState(e) }, Pw.prototype.queryCommandValue = function(e) { return this.editorCommands.queryCommandValue(e) }, Pw.prototype.queryCommandSupported = function(e) { return this.editorCommands.queryCommandSupported(e) }, Pw.prototype.show = function() { this.hidden && (this.hidden = !1, this.inline ? this.getBody().contentEditable = "true" : (Aw.show(this.getContainer()), Aw.hide(this.id)), this.load(), this.fire("show")) }, Pw.prototype.hide = function() {
            var e = this,
                t = e.getDoc();
            e.hidden || (Ow && t && !e.inline && t.execCommand("SelectAll"), e.save(), e.inline ? (e.getBody().contentEditable = "false", e === e.editorManager.focusedEditor && (e.editorManager.focusedEditor = null)) : (Aw.hide(e.getContainer()), Aw.setStyle(e.id, "display", e.orgDisplay)), e.hidden = !0, e.fire("hide"))
        }, Pw.prototype.isHidden = function() { return !!this.hidden }, Pw.prototype.setProgressState = function(e, t) { this.fire("ProgressState", { state: e, time: t }) }, Pw.prototype.load = function(e) {
            var t = this.getElement();
            if (this.removed) return "";
            if (t) {
                (e = e || {}).load = !0;
                var n = Vn(t) ? t.value : t.innerHTML,
                    r = this.setContent(n, e);
                return e.element = t, e.no_events || this.fire("LoadContent", e), e.element = t = null, r
            }
        }, Pw.prototype.save = function(e) {
            var t, n, r = this,
                o = r.getElement();
            if (o && r.initialized && !r.removed) return (e = e || {}).save = !0, e.element = o, e.content = r.getContent(e), e.no_events || r.fire("SaveContent", e), "raw" === e.format && r.fire("RawSaveContent", e), t = e.content, Vn(o) ? o.value = t : (!e.is_removing && r.inline || (o.innerHTML = t), (n = Aw.getParent(r.id, "form")) && Rw(n.elements, function(e) { if (e.name === r.id) return e.value = t, !1 })), e.element = o = null, !1 !== e.set_dirty && r.setDirty(!1), t
        }, Pw.prototype.setContent = function(e, t) { return ev(this, e, t) }, Pw.prototype.getContent = function(e) { return t = this, r = (n = void 0 === (n = e) ? {} : n).format || "html", o = n, Ch(t).editor.getContent(o, r); var t, n, r, o }, Pw.prototype.insertContent = function(e, t) { t && (e = Tw({ content: e }, t)), this.execCommand("mceInsertContent", !1, e) }, Pw.prototype.resetContent = function(e) { void 0 === e ? ev(this, this.startContent, { format: "raw" }) : ev(this, e), this.undoManager.reset(), this.setDirty(!1), this.nodeChanged() }, Pw.prototype.isDirty = function() { return !this.isNotDirty }, Pw.prototype.setDirty = function(e) {
            var t = !this.isNotDirty;
            this.isNotDirty = !e, e && e !== t && this.fire("dirty")
        }, Pw.prototype.getContainer = function() { return this.container || (this.container = Aw.get(this.editorContainer || this.id + "_parent")), this.container }, Pw.prototype.getContentAreaContainer = function() { return this.contentAreaContainer }, Pw.prototype.getElement = function() { return this.targetElm || (this.targetElm = Aw.get(this.id)), this.targetElm }, Pw.prototype.getWin = function() { var e; return this.contentWindow || (e = this.iframeElement) && (this.contentWindow = e.contentWindow), this.contentWindow }, Pw.prototype.getDoc = function() { var e; return this.contentDocument || (e = this.getWin()) && (this.contentDocument = e.document), this.contentDocument }, Pw.prototype.getBody = function() { var e = this.getDoc(); return this.bodyElement || (e ? e.body : null) }, Pw.prototype.convertURL = function(e, t, n) { var r = this.settings; return r.urlconverter_callback ? this.execCallback("urlconverter_callback", e, n, !0, t) : !r.convert_urls || n && "LINK" === n.nodeName || 0 === e.indexOf("file:") || 0 === e.length ? e : r.relative_urls ? this.documentBaseURI.toRelative(e) : this.documentBaseURI.toAbsolute(e, r.remove_script_host) }, Pw.prototype.addVisual = function(e) {
            var t;
            t = e, wh(this).editor.addVisual(t)
        }, Pw.prototype.remove = function() {
            var e, t, n, r, o;
            (e = this).removed || (t = e._selectionOverrides, n = e.editorUpload, r = e.getBody(), o = e.getElement(), r && e.save({ is_removing: !0 }), e.removed = !0, e.unbindAllNativeEvents(), e.hasHiddenInput && o && Cv.remove(o.nextSibling), e.fire("remove"), e.editorManager.remove(e), !e.inline && r && Cv.setStyle(e.id, "display", e.orgDisplay), e.fire("detach"), Cv.remove(e.getContainer()), tv(t), tv(n), e.destroy())
        }, Pw.prototype.destroy = function(e) {
            var t, n, r, o, i, a, u;
            n = e, a = (t = this).selection, u = t.dom, t.destroyed || (n || t.removed ? (n || (t.editorManager.off("beforeunload", t._beforeUnload), t.theme && t.theme.destroy && t.theme.destroy(), tv(a), tv(u)), (o = (r = t).formElement) && (o._mceOldSubmit && (o.submit = o._mceOldSubmit, o._mceOldSubmit = null), Cv.unbind(o, "submit reset", r.formEventDelegate)), (i = t).contentAreaContainer = i.formElement = i.container = i.editorContainer = null, i.bodyElement = i.contentDocument = i.contentWindow = null, i.iframeElement = i.targetElm = null, i.selection && (i.selection = i.selection.win = i.selection.dom = i.selection.dom.doc = null), t.destroyed = !0) : t.remove())
        }, Pw.prototype.uploadImages = function(e) { return this.editorUpload.uploadImages(e) }, Pw.prototype._scanForImages = function() { return this.editorUpload.scanForImages() }, Pw.prototype.addButton = function() { throw new Error("editor.addButton has been removed in tinymce 5x, use editor.ui.registry.addButton or editor.ui.registry.addToggleButton or editor.ui.registry.addSplitButton instead") }, Pw.prototype.addSidebar = function() { throw new Error("editor.addSidebar has been removed in tinymce 5x, use editor.ui.registry.addSidebar instead") }, Pw.prototype.addMenuItem = function() { throw new Error("editor.addMenuItem has been removed in tinymce 5x, use editor.ui.registry.addMenuItem instead") }, Pw.prototype.addContextToolbar = function() { throw new Error("editor.addContextToolbar has been removed in tinymce 5x, use editor.ui.registry.addContextToolbar instead") }, Pw);

    function Pw(e, t, n) {
        var r, o, i, a, u, s, c, l, f, d, m, g, p, h, v, b, y, C = this;

        function w(n, r) { return function(e, t) { return n[e.toLowerCase()] = ke(ke({}, t), { type: r }) } }
        this.plugins = {}, this.contentCSS = [], this.contentStyles = [], this.loadedCSS = {}, this.isNotDirty = !1, this.editorManager = n, this.documentBaseUrl = n.documentBaseURL, Tw(this, gw), this.settings = (d = (f = this).documentBaseUrl, m = n.defaultSettings, p = d, h = Sv, v = f, b = { id: e, theme: "silver", toolbar_mode: ov(g = t, "floating"), plugins: "", document_base_url: p, add_form_submit_trigger: !0, submit_patch: !0, add_unload_trigger: !0, convert_urls: !0, relative_urls: !0, remove_script_host: !0, object_resizing: !0, doctype: "<!DOCTYPE html>", visual: !0, font_size_legacy_values: "xx-small,small,medium,large,x-large,xx-large,300%", forced_root_block: "p", hidden_input: !0, inline_styles: !0, convert_fonts_to_spans: !0, indent: !0, indent_before: "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist", indent_after: "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist", entity_encoding: "named", url_converter: v.convertURL, url_converter_scope: v }, y = ke(ke({}, b), h ? _v : {}), av(Ev || Nv, Ev, y, m, g)), this.settings.suffix && (n.suffix = this.settings.suffix), this.suffix = n.suffix, this.settings.base_url && n._setBaseUrl(this.settings.base_url), this.baseUri = n.baseURI, this.settings.referrer_policy && (mu.ScriptLoader._setReferrerPolicy(this.settings.referrer_policy), cu.DOM.styleSheetLoader._setReferrerPolicy(this.settings.referrer_policy)), Cu.languageLoad = this.settings.language_load, Cu.baseURL = n.baseURL, this.id = e, this.setDirty(!1), this.documentBaseURI = new kw(this.settings.document_base_url, { base_uri: this.baseUri }), this.baseURI = this.baseUri, this.inline = !!this.settings.inline, this.shortcuts = new Cw(this), this.editorCommands = new K1(this), this.settings.cache_suffix && (Ct.cacheSuffix = this.settings.cache_suffix.replace(/^[\?\&]+/, "")), this.ui = { registry: { addAutocompleter: (u = {}, (r = { addButton: w(o = {}, "button"), addGroupToolbarButton: w(o, "grouptoolbarbutton"), addToggleButton: w(o, "togglebutton"), addMenuButton: w(o, "menubutton"), addSplitButton: w(o, "splitbutton"), addMenuItem: w(i = {}, "menuitem"), addNestedMenuItem: w(i, "nestedmenuitem"), addToggleMenuItem: w(i, "togglemenuitem"), addAutocompleter: w(a = {}, "autocompleter"), addContextMenu: w(s = {}, "contextmenu"), addContextToolbar: w(c = {}, "contexttoolbar"), addContextForm: w(c, "contextform"), addSidebar: w(l = {}, "sidebar"), addIcon: function(e, t) { return u[e.toLowerCase()] = t }, getAll: function() { return { buttons: o, menuItems: i, icons: u, popups: a, contextMenus: s, contextToolbars: c, sidebars: l } } }).addAutocompleter), addButton: r.addButton, addContextForm: r.addContextForm, addContextMenu: r.addContextMenu, addContextToolbar: r.addContextToolbar, addIcon: r.addIcon, addMenuButton: r.addMenuButton, addMenuItem: r.addMenuItem, addNestedMenuItem: r.addNestedMenuItem, addSidebar: r.addSidebar, addSplitButton: r.addSplitButton, addToggleButton: r.addToggleButton, addGroupToolbarButton: r.addGroupToolbarButton, addToggleMenuItem: r.addToggleMenuItem, getAll: r.getAll }, styleSheetLoader: void 0, show: oe, hide: oe, enable: oe, disable: oe, isDisabled: T };
        var x, S, E, N, k, _ = (N = pu("design"), k = pu({ design: { activate: oe, deactivate: oe, editorReadOnly: !1 }, readonly: { activate: oe, deactivate: oe, editorReadOnly: !0 } }), (S = x = this).serializer ? ew(S) : S.on("PreInit", function() { ew(S) }), (E = x).on("ShowCaret", function(e) { Z1(E) && e.preventDefault() }), E.on("ObjectSelected", function(e) { Z1(E) && e.preventDefault() }), {
            isReadOnly: function() { return Z1(x) },
            set: function(e) {
                return function(e, t, n, r) {
                    if (r !== n.get()) {
                        if (!Ee(t, r)) throw new Error("Editor mode '" + r + "' is invalid");
                        e.initialized ? cw(e, n, t, r) : e.on("init", function() { return cw(e, n, t, r) })
                    }
                }(x, k.get(), N, e)
            },
            get: function() { return N.get() },
            register: function(e, t) { k.set(function(e, t, n) { var r; if (ie(pw, t)) throw new Error("Cannot override default mode " + t); return ke(ke({}, e), ((r = {})[t] = ke(ke({}, n), { deactivate: function() { try { n.deactivate() } catch (e) { console.error("problem while deactivating editor mode " + t + ":", e) } } }), r)) }(k.get(), e, t)) }
        });
        this.mode = _, this.setMode = _.set, n.fire("SetupEditor", { editor: this }), this.execCallback("setup", this), this.$ = ou.overrideDefaults(function() { return { context: C.inline ? C.getBody() : C.getDoc(), element: C.getBody() } })
    }

    function Lw(t) {
        var n = t.type;
        jw(Xw.get(), function(e) {
            switch (n) {
                case "scroll":
                    e.fire("ScrollWindow", t);
                    break;
                case "resize":
                    e.fire("ResizeWindow", t)
            }
        })
    }

    function Iw(e) { e !== qw && (e ? ou(window).on("resize scroll", Lw) : ou(window).off("resize scroll", Lw), qw = e) }

    function Mw(t) {
        var e = Ww;
        delete $w[t.id];
        for (var n = 0; n < $w.length; n++)
            if ($w[n] === t) { $w.splice(n, 1); break }
        return Ww = U(Ww, function(e) { return t !== e }), Xw.activeEditor === t && (Xw.activeEditor = 0 < Ww.length ? Ww[0] : null), Xw.focusedEditor === t && (Xw.focusedEditor = null), e.length !== Ww.length
    }
    var Fw, Uw = cu.DOM,
        zw = St.explode,
        jw = St.each,
        Hw = St.extend,
        Vw = 0,
        qw = !1,
        $w = [],
        Ww = [],
        Kw = "CSS1Compat" !== document.compatMode,
        Xw = ke(ke({}, dw), {
            baseURI: null,
            baseURL: null,
            defaultSettings: {},
            documentBaseURL: null,
            suffix: null,
            $: ou,
            majorVersion: "5",
            minorVersion: "9.2",
            releaseDate: "2021-09-08",
            editors: $w,
            i18n: yu,
            activeEditor: null,
            focusedEditor: null,
            settings: {},
            setup: function() {
                var e, t = "",
                    n = kw.getDocumentBaseUrl(document.location);
                /^[^:]+:\/\/\/?[^\/]+\//.test(n) && (n = n.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, ""), /[\/\\]$/.test(n) || (n += "/"));
                var r = window.tinymce || window.tinyMCEPreInit;
                if (r) e = r.base || r.baseURL, t = r.suffix;
                else {
                    for (var o, i = document.getElementsByTagName("script"), a = 0; a < i.length; a++)
                        if ("" !== (o = i[a].src || "")) { var u = o.substring(o.lastIndexOf("/")); if (/tinymce(\.full|\.jquery|)(\.min|\.dev|)\.js/.test(o)) {-1 !== u.indexOf(".min") && (t = ".min"), e = o.substring(0, o.lastIndexOf("/")); break } }!e && document.currentScript && (-1 !== (o = document.currentScript.src).indexOf(".min") && (t = ".min"), e = o.substring(0, o.lastIndexOf("/")))
                }
                this.baseURL = new kw(n).toAbsolute(e), this.documentBaseURL = n, this.baseURI = new kw(this.baseURL), this.suffix = t, this.on("AddEditor", A(Nd, this)), this.on("RemoveEditor", A(kd, this))
            },
            overrideDefaults: function(e) {
                var t = e.base_url;
                t && this._setBaseUrl(t);
                var n = e.suffix;
                e.suffix && (this.suffix = n);
                var r = (this.defaultSettings = e).plugin_base_urls;
                void 0 !== r && Q(r, function(e, t) { Cu.PluginManager.urls[t] = e })
            },
            init: function(r) {
                function u(e) { var t = e.id; return t || (t = ae(e, "name").filter(function(e) { return !Uw.get(e) }).getOrThunk(Uw.uniqueId), e.setAttribute("id", t)), t }

                function s(e, t) { return t.constructor === RegExp ? t.test(e.className) : Uw.hasClass(e, t) }
                var n, c = this,
                    l = St.makeMap("area base basefont br col frame hr img input isindex link meta param embed source wbr track colgroup option table tbody tfoot thead tr th td script noscript style textarea video audio iframe object menu", " "),
                    f = function(e) { n = e },
                    t = function() {
                        function n(e, t, n) {
                            var r = new Bw(e, t, c);
                            a.push(r), r.on("init", function() {++i === o.length && f(a) }), r.targetElm = r.targetElm || n, r.render()
                        }
                        var o, e, i = 0,
                            a = [];
                        Uw.unbind(window, "ready", t), (e = r.onpageload) && e.apply(c, []), o = ou.unique(function(t) {
                            var n = [];
                            if (Ct.browser.isIE() && Ct.browser.version.major < 11) return uy("TinyMCE does not support the browser you are using. For a list of supported browsers please see: https://www.tinymce.com/docs/get-started/system-requirements/"), [];
                            if (Kw) return uy("Failed to initialize the editor as the document is not in standards mode. TinyMCE requires standards mode."), [];
                            if (t.types) return jw(t.types, function(e) { n = n.concat(Uw.select(e.selector)) }), n;
                            if (t.selector) return Uw.select(t.selector);
                            if (t.target) return [t.target];
                            switch (t.mode) {
                                case "exact":
                                    var e = t.elements || "";
                                    0 < e.length && jw(zw(e), function(t) {
                                        var e = Uw.get(t);
                                        e ? n.push(e) : jw(document.forms, function(e) { jw(e.elements, function(e) { e.name === t && (t = "mce_editor_" + Vw++, Uw.setAttrib(e, "id", t), n.push(e)) }) })
                                    });
                                    break;
                                case "textareas":
                                case "specific_textareas":
                                    jw(Uw.select("textarea"), function(e) { t.editor_deselector && s(e, t.editor_deselector) || t.editor_selector && !s(e, t.editor_selector) || n.push(e) })
                            }
                            return n
                        }(r)), r.types ? jw(r.types, function(t) { St.each(o, function(e) { return !Uw.is(e, t.selector) || (n(u(e), Hw({}, r, t), e), !1) }) }) : (St.each(o, function(e) {
                            var t;
                            (t = c.get(e.id)) && t.initialized && !(t.getContainer() || t.getBody()).parentNode && (Mw(t), t.unbindAllNativeEvents(), t.destroy(!0), t.removed = !0)
                        }), 0 === (o = St.grep(o, function(e) { return !c.get(e.id) })).length ? f([]) : jw(o, function(e) {
                            var t = e;
                            r.inline && t.tagName.toLowerCase() in l ? uy("Could not initialize inline editor on invalid inline target element", e) : n(u(e), r, e)
                        }))
                    };
                return c.settings = r, Uw.bind(window, "ready", t), new _r(function(t) { n ? t(n) : f = function(e) { t(e) } })
            },
            get: function(t) { return 0 === arguments.length ? Ww.slice(0) : K(t) ? I(Ww, function(e) { return e.id === t }).getOr(null) : E(t) && Ww[t] || null },
            add: function(e) { var n = this; return $w[e.id] === e || (null === n.get(e.id) && ("length" !== e.id && ($w[e.id] = e), $w.push(e), Ww.push(e)), Iw(!0), n.activeEditor = e, n.fire("AddEditor", { editor: e }), Fw || (Fw = function(e) { var t = n.fire("BeforeUnload"); if (t.returnValue) return e.preventDefault(), e.returnValue = t.returnValue, t.returnValue }, window.addEventListener("beforeunload", Fw))), e },
            createEditor: function(e, t) { return this.add(new Bw(e, t, this)) },
            remove: function(e) {
                var t, n, r = this;
                if (e) {
                    if (!K(e)) return n = e, l(r.get(n.id)) ? null : (Mw(n) && r.fire("RemoveEditor", { editor: n }), 0 === Ww.length && window.removeEventListener("beforeunload", Fw), n.remove(), Iw(0 < Ww.length), n);
                    jw(Uw.select(e), function(e) {
                        (n = r.get(e.id)) && r.remove(n)
                    })
                } else
                    for (t = Ww.length - 1; 0 <= t; t--) r.remove(Ww[t])
            },
            execCommand: function(e, t, n) {
                var r = this.get(n);
                switch (e) {
                    case "mceAddEditor":
                        return this.get(n) || new Bw(n, this.settings, this).render(), !0;
                    case "mceRemoveEditor":
                        return r && r.remove(), !0;
                    case "mceToggleEditor":
                        return r ? r.isHidden() ? r.show() : r.hide() : this.execCommand("mceAddEditor", !1, n), !0
                }
                return !!this.activeEditor && this.activeEditor.execCommand(e, t, n)
            },
            triggerSave: function() { jw(Ww, function(e) { e.save() }) },
            addI18n: function(e, t) { yu.add(e, t) },
            translate: function(e) { return yu.translate(e) },
            setActive: function(e) {
                var t = this.activeEditor;
                this.activeEditor !== e && (t && t.fire("deactivate", { relatedTarget: e }), e.fire("activate", { relatedTarget: t })), this.activeEditor = e
            },
            _setBaseUrl: function(e) { this.baseURL = new kw(this.documentBaseURL).toAbsolute(e.replace(/\/+$/, "")), this.baseURI = new kw(this.baseURL) }
        });

    function Yw(e, t, n) {
        var r = t.x,
            o = t.y,
            i = e.w,
            a = e.h,
            u = t.w,
            s = t.h,
            c = (n || "").split("");
        return "b" === c[0] && (o += s), "r" === c[1] && (r += u), "c" === c[0] && (o += ox(s / 2)), "c" === c[1] && (r += ox(u / 2)), "b" === c[3] && (o -= a), "r" === c[4] && (r -= i), "c" === c[3] && (o -= ox(a / 2)), "c" === c[4] && (r -= ox(i / 2)), Jw(r, o, i, a)
    }

    function Gw() {}
    Xw.setup();

    function Jw(e, t, n, r) { return { x: e, y: t, w: n, h: r } }
    var Qw, Zw, ex, tx, nx = Math.min,
        rx = Math.max,
        ox = Math.round,
        ix = {
            inflate: function(e, t, n) { return Jw(e.x - t, e.y - n, e.w + 2 * t, e.h + 2 * n) },
            relativePosition: Yw,
            findBestRelativePosition: function(e, t, n, r) {
                for (var o, i = 0; i < r.length; i++)
                    if ((o = Yw(e, t, r[i])).x >= n.x && o.x + o.w <= n.w + n.x && o.y >= n.y && o.y + o.h <= n.h + n.y) return r[i];
                return null
            },
            intersect: function(e, t) {
                var n = rx(e.x, t.x),
                    r = rx(e.y, t.y),
                    o = nx(e.x + e.w, t.x + t.w),
                    i = nx(e.y + e.h, t.y + t.h);
                return o - n < 0 || i - r < 0 ? null : Jw(n, r, o - n, i - r)
            },
            clamp: function(e, t, n) {
                var r = e.x,
                    o = e.y,
                    i = e.x + e.w,
                    a = e.y + e.h,
                    u = t.x + t.w,
                    s = t.y + t.h,
                    c = rx(0, t.x - r),
                    l = rx(0, t.y - o),
                    f = rx(0, i - u),
                    d = rx(0, a - s);
                return r += c, o += l, n && (i += c, a += l, r -= f, o -= d), Jw(r, o, (i -= f) - r, (a -= d) - o)
            },
            create: Jw,
            fromClientRect: function(e) { return Jw(e.left, e.top, e.width, e.height) }
        },
        ax = (Qw = {}, Zw = {}, {
            load: function(r, o) {
                var i = 'Script at URL "' + o + '" failed to load',
                    a = 'Script at URL "' + o + "\" did not call `tinymce.Resource.add('" + r + "', data)` within 1 second";
                if (void 0 !== Qw[r]) return Qw[r];
                var e = new _r(function(e, t) {
                    var n = function(e, t, n) {
                        function r(n) {
                            return function() {
                                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                o || (o = !0, null !== i && (clearTimeout(i), i = null), n.apply(null, e))
                            }
                        }
                        void 0 === n && (n = 1e3);
                        var o = !1,
                            i = null,
                            a = r(e),
                            u = r(t);
                        return {
                            start: function() {
                                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                o || null !== i || (i = setTimeout(function() { return u.apply(null, e) }, n))
                            },
                            resolve: a,
                            reject: u
                        }
                    }(e, t);
                    Zw[r] = n.resolve, mu.ScriptLoader.loadScript(o, function() { return n.start(a) }, function() { return n.reject(i) })
                });
                return Qw[r] = e
            },
            add: function(e, t) { void 0 !== Zw[e] && (Zw[e](t), delete Zw[e]), Qw[e] = _r.resolve(t) }
        }),
        ux = St.each,
        sx = St.extend;
    Gw.extend = ex = function(n) {
        function r() {
            var e, t, n;
            if (!tx && (this.init && this.init.apply(this, arguments), t = this.Mixins))
                for (e = t.length; e--;)(n = t[e]).init && n.init.apply(this, arguments)
        }

        function t() { return this }
        var o = this.prototype;
        tx = !0;
        var i = new this;
        return tx = !1, n.Mixins && (ux(n.Mixins, function(e) { for (var t in e) "init" !== t && (n[t] = e[t]) }), o.Mixins && (n.Mixins = o.Mixins.concat(n.Mixins))), n.Methods && ux(n.Methods.split(","), function(e) { n[e] = t }), n.Properties && ux(n.Properties.split(","), function(e) {
            var t = "_" + e;
            n[e] = function(e) { return void 0 !== e ? (this[t] = e, this) : this[t] }
        }), n.Statics && ux(n.Statics, function(e, t) { r[t] = e }), n.Defaults && o.Defaults && (n.Defaults = sx({}, o.Defaults, n.Defaults)), Q(n, function(e, t) {
            var n, r;
            "function" == typeof e && o[t] ? i[t] = (n = t, r = e, function() {
                var e = this._super;
                this._super = o[n];
                var t = r.apply(this, arguments);
                return this._super = e, t
            }) : i[t] = e
        }), r.prototype = i, (r.constructor = r).extend = ex, r
    };
    var cx, lx, fx, dx = Math.min,
        mx = Math.max,
        gx = Math.round,
        px = { serialize: function(e) { var t = JSON.stringify(e); return K(t) ? t.replace(/[\u0080-\uFFFF]/g, function(e) { var t = e.charCodeAt(0).toString(16); return "\\u" + "0000".substring(t.length) + t }) : t }, parse: function(e) { try { return JSON.parse(e) } catch (e) {} } },
        hx = {
            callbacks: {},
            count: 0,
            send: function(t) {
                var n = this,
                    r = cu.DOM,
                    o = (void 0 !== t.count ? t : n).count,
                    i = "tinymce_jsonp_" + o;
                n.callbacks[o] = function(e) { r.remove(i), delete n.callbacks[o], t.callback(e) }, r.add(r.doc.body, "script", { id: i, src: t.url, type: "text/javascript" }), n.count++
            }
        },
        vx = ke(ke({}, dw), {
            send: function(e) {
                var t, n = 0,
                    r = function() {!e.async || 4 === t.readyState || 1e4 < n++ ? (e.success && n < 1e4 && 200 === t.status ? e.success.call(e.success_scope, "" + t.responseText, t, e) : e.error && e.error.call(e.error_scope, 1e4 < n ? "TIMED_OUT" : "GENERAL", t, e), t = null) : Ur.setTimeout(r, 10) };
                if (e.scope = e.scope || this, e.success_scope = e.success_scope || e.scope, e.error_scope = e.error_scope || e.scope, e.async = !1 !== e.async, e.data = e.data || "", vx.fire("beforeInitialize", { settings: e }), (t = new XMLHttpRequest).overrideMimeType && t.overrideMimeType(e.content_type), t.open(e.type || (e.data ? "POST" : "GET"), e.url, e.async), e.crossDomain && (t.withCredentials = !0), e.content_type && t.setRequestHeader("Content-Type", e.content_type), e.requestheaders && St.each(e.requestheaders, function(e) { t.setRequestHeader(e.key, e.value) }), t.setRequestHeader("X-Requested-With", "XMLHttpRequest"), (t = vx.fire("beforeSend", { xhr: t, settings: e }).xhr).send(e.data), !e.async) return r();
                Ur.setTimeout(r, 10)
            }
        }),
        bx = St.extend,
        yx = (Cx.sendRPC = function(e) { return (new Cx).send(e) }, Cx.prototype.send = function(e) {
            var n = e.error,
                r = e.success,
                o = bx(this.settings, e);
            o.success = function(e, t) {
                (e = void 0 === (e = px.parse(e)) ? { error: "JSON Parse error." } : e).error ? n.call(o.error_scope || o.scope, e.error, t) : r.call(o.success_scope || o.scope, e.result)
            }, o.error = function(e, t) { n && n.call(o.error_scope || o.scope, e, t) }, o.data = px.serialize({ id: e.id || "c" + this.count++, method: e.method, params: e.params }), o.content_type = "application/json", vx.send(o)
        }, Cx);

    function Cx(e) { this.settings = bx({}, e), this.count = 0 }
    try {
        var wx, xx = "__storage_test__";
        (wx = window.localStorage).setItem(xx, xx), wx.removeItem(xx)
    } catch (e) { cx = {}, lx = [], fx = { getItem: function(e) { return cx[e] || null }, setItem: function(e, t) { lx.push(e), cx[e] = String(t) }, key: function(e) { return lx[e] }, removeItem: function(t) { lx = lx.filter(function(e) { return e === t }), delete cx[t] }, clear: function() { lx = [], cx = {} }, length: 0 }, Object.defineProperty(fx, "length", { get: function() { return lx.length }, configurable: !1, enumerable: !1 }), wx = fx }
    var Sx = {
            geom: { Rect: ix },
            util: {
                Promise: _r,
                Delay: Ur,
                Tools: St,
                VK: $f,
                URI: kw,
                Class: Gw,
                EventDispatcher: rw,
                Observable: dw,
                I18n: yu,
                XHR: vx,
                JSON: px,
                JSONRequest: yx,
                JSONP: hx,
                LocalStorage: wx,
                Color: function(e) {
                    function t(e) {
                        var t;
                        return "object" == typeof e ? "r" in e ? (u = e.r, s = e.g, c = e.b) : "v" in e && function(e, t, n) {
                            if (e = (parseInt(e, 10) || 0) % 360, t = parseInt(t, 10) / 100, n = parseInt(n, 10) / 100, t = mx(0, dx(t, 1)), n = mx(0, dx(n, 1)), 0 !== t) {
                                var r = e / 60,
                                    o = n * t,
                                    i = o * (1 - Math.abs(r % 2 - 1)),
                                    a = n - o;
                                switch (Math.floor(r)) {
                                    case 0:
                                        u = o, s = i, c = 0;
                                        break;
                                    case 1:
                                        u = i, s = o, c = 0;
                                        break;
                                    case 2:
                                        u = 0, s = o, c = i;
                                        break;
                                    case 3:
                                        u = 0, s = i, c = o;
                                        break;
                                    case 4:
                                        u = i, s = 0, c = o;
                                        break;
                                    case 5:
                                        u = o, s = 0, c = i;
                                        break;
                                    default:
                                        u = s = c = 0
                                }
                                u = gx(255 * (u + a)), s = gx(255 * (s + a)), c = gx(255 * (c + a))
                            } else u = s = c = gx(255 * n)
                        }(e.h, e.s, e.v) : (t = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)[^\)]*\)/gi.exec(e)) ? (u = parseInt(t[1], 10), s = parseInt(t[2], 10), c = parseInt(t[3], 10)) : (t = /#([0-F]{2})([0-F]{2})([0-F]{2})/gi.exec(e)) ? (u = parseInt(t[1], 16), s = parseInt(t[2], 16), c = parseInt(t[3], 16)) : (t = /#([0-F])([0-F])([0-F])/gi.exec(e)) && (u = parseInt(t[1] + t[1], 16), s = parseInt(t[2] + t[2], 16), c = parseInt(t[3] + t[3], 16)), u = u < 0 ? 0 : 255 < u ? 255 : u, s = s < 0 ? 0 : 255 < s ? 255 : s, c = c < 0 ? 0 : 255 < c ? 255 : c, n
                    }
                    var n = {},
                        u = 0,
                        s = 0,
                        c = 0;
                    return e && t(e), n.toRgb = function() { return { r: u, g: s, b: c } }, n.toHsv = function() { return e = u, t = s, n = c, o = 0, (i = dx(e /= 255, dx(t /= 255, n /= 255))) === (a = mx(e, mx(t, n))) ? { h: 0, s: 0, v: 100 * (o = i) } : (r = (a - i) / a, { h: gx(60 * ((e === i ? 3 : n === i ? 1 : 5) - (e === i ? t - n : n === i ? e - t : n - e) / ((o = a) - i))), s: gx(100 * r), v: gx(100 * o) }); var e, t, n, r, o, i, a }, n.toHex = function() {
                        function e(e) { return 1 < (e = parseInt(e, 10).toString(16)).length ? e : "0" + e }
                        return "#" + e(u) + e(s) + e(c)
                    }, n.parse = t, n
                },
                ImageUploader: function(n) {
                    var e = Hv(),
                        r = Kv(n, e);
                    return { upload: function(e, t) { return r.upload(e, (t = void 0 === t || t) ? Wv(n) : void 0) } }
                }
            },
            dom: { EventUtils: bi, Sizzle: ba, DomQuery: ou, TreeWalker: jr, TextSeeker: Mu, DOMUtils: cu, ScriptLoader: mu, RangeUtils: qf, Serializer: Zh, StyleSheetLoader: Mr, ControlSelection: Of, BookmarkManager: Gl, Selection: zh, Event: bi.Event },
            html: { Styles: ho, Entities: si, Node: Jd, Schema: go, SaxParser: tm, DomParser: Gh, Writer: um, Serializer: sm },
            Env: Ct,
            AddOnManager: Cu,
            Annotator: Yl,
            Formatter: Qv,
            UndoManager: eb,
            EditorCommands: K1,
            WindowManager: Lv,
            NotificationManager: fv,
            EditorObservable: gw,
            Shortcuts: Cw,
            Editor: Bw,
            FocusManager: Kd,
            EditorManager: Xw,
            DOM: cu.DOM,
            ScriptLoader: mu.ScriptLoader,
            PluginManager: Bv,
            ThemeManager: Pv,
            IconManager: Av,
            Resource: ax,
            trim: St.trim,
            isArray: St.isArray,
            is: St.is,
            toArray: St.toArray,
            makeMap: St.makeMap,
            each: St.each,
            map: St.map,
            grep: St.grep,
            inArray: St.inArray,
            extend: St.extend,
            create: St.create,
            walk: St.walk,
            createNS: St.createNS,
            resolve: St.resolve,
            explode: St.explode,
            _addCacheSuffix: St._addCacheSuffix,
            isOpera: Ct.opera,
            isWebKit: Ct.webkit,
            isIE: Ct.ie,
            isGecko: Ct.gecko,
            isMac: Ct.mac
        },
        Ex = St.extend(Xw, Sx),
        Nx = Ex;
    window.tinymce = Nx, window.tinyMCE = Nx,
        function(e) { if ("object" == typeof module) try { module.exports = e } catch (e) {} }(Ex)
}();

/* Ephox Fluffy plugin
 *
 * Copyright 2010-2016 Ephox Corporation.  All rights reserved.
 *
 * Version: 2.5.0-13
 */

! function() {
    "use strict";

    function o(n) { return function() { return n } }

    function n() { return f }
    var u = "undefined" != typeof window ? window : Function("return this;")(),
        t = function(n, t) { return { isRequired: n, applyPatch: t } },
        i = function(i, o) {
            return function() {
                for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
                var r = o.apply(this, n),
                    e = void 0 === r ? n : r;
                return i.apply(this, e)
            }
        },
        r = function(n, t) {
            if (n)
                for (var r = 0; r < t.length; r++) t[r].isRequired(n) && t[r].applyPatch(n);
            return n
        },
        a = o(!1),
        c = o(!0),
        f = { fold: function(n, t) { return n() }, is: a, isSome: a, isNone: c, getOr: s, getOrThunk: l, getOrDie: function(n) { throw new Error(n || "error: getOrDie called on none.") }, getOrNull: o(null), getOrUndefined: o(void 0), or: s, orThunk: l, map: n, each: function() {}, bind: n, exists: a, forall: c, filter: n, equals: e, equals_: e, toArray: function() { return [] }, toString: o("none()") };

    function e(n) { return n.isNone() }

    function l(n) { return n() }

    function s(n) { return n }

    function g(e) { return function(n) { return r = typeof(t = n), (null === t ? "null" : "object" == r && (Array.prototype.isPrototypeOf(t) || t.constructor && "Array" === t.constructor.name) ? "array" : "object" == r && (String.prototype.isPrototypeOf(t) || t.constructor && "String" === t.constructor.name) ? "string" : r) === e; var t, r } }

    function d(n, t) { return r = n, e = t, -1 < D.call(r, e); var r, e }

    function p(n, t) {
        return function(n) {
            for (var t = [], r = 0, e = n.length; r < e; ++r) {
                if (!A(n[r])) throw new Error("Arr.flatten item " + r + " was not an array, input: " + n);
                P.apply(t, n[r])
            }
            return t
        }(function(n, t) {
            for (var r = n.length, e = new Array(r), i = 0; i < r; i++) {
                var o = n[i];
                e[i] = t(o, i)
            }
            return e
        }(n, t))
    }

    function v(u) { return function() { for (var n = new Array(arguments.length), t = 0; t < n.length; t++) n[t] = arguments[t]; if (0 === n.length) throw new Error("Can't merge zero objects"); for (var r = {}, e = 0; e < n.length; e++) { var i = n[e]; for (var o in i) U.call(i, o) && (r[o] = u(r[o], i[o])) } return r } }

    function h(n, t) {
        for (var r = T(n), e = 0, i = r.length; e < i; e++) {
            var o = r[e];
            t(n[o], o)
        }
    }

    function y(r) { return function(n, t) { r[t] = n } }

    function m(n, t) {
        var r, e, i, o = {},
            u = {};
        return r = t, e = y(o), i = y(u), h(n, function(n, t) {
            (r(n, t) ? e : i)(n, t)
        }), { t: o, f: u }
    }

    function E(n, t) { return C(n, t) ? j(n[t]) : S() }

    function w(n) { if (_(n) || "" === n) return []; var t = A(n) ? p(n, function(n) { return n.split(/[\s+,]/) }) : n.split(/[\s+,]/); return p(t, function(n) { return 0 < n.length ? [n.trim()] : [] }) }

    function O(n, t) {
        var r = N(n, t),
            e = w(t.plugins),
            i = E(r, "custom_plugin_urls").getOr({}),
            o = m(i, function(n, t) { return d(e, t) }),
            u = E(r, "external_plugins").getOr({}),
            a = {};
        h(o.t, function(n, t) { a[t] = n });
        var c = R(a, u);
        return R(t, 0 === T(c).length ? {} : { external_plugins: c })
    }
    var M, b = function(r) {
            function n() { return i }

            function t(n) { return n(r) }
            var e = o(r),
                i = { fold: function(n, t) { return t(r) }, is: function(n) { return r === n }, isSome: c, isNone: a, getOr: e, getOrThunk: e, getOrDie: e, getOrNull: e, getOrUndefined: e, or: n, orThunk: n, map: function(n) { return b(n(r)) }, each: function(n) { n(r) }, bind: t, exists: t, forall: t, filter: function(n) { return n(r) ? i : f }, toArray: function() { return [r] }, toString: function() { return "some(" + r + ")" }, equals: function(n) { return n.is(r) }, equals_: function(n, t) { return n.fold(a, function(n) { return t(r, n) }) } };
            return i
        },
        S = n,
        j = function(n) { return null == n ? f : b(n) },
        x = g("object"),
        A = g("array"),
        _ = (M = void 0, function(n) { return M === n }),
        D = Array.prototype.indexOf,
        P = Array.prototype.push,
        U = Object.prototype.hasOwnProperty,
        N = v(function(n, t) { return x(n) && x(t) ? N(n, t) : t }),
        R = v(function(n, t) { return t }),
        T = Object.keys,
        q = Object.hasOwnProperty,
        C = function(n, t) { return q.call(n, t) },
        I = { getCustomPluginUrls: O, patch: t(function() { return !0 }, function(r) { r.EditorManager.init = i(r.EditorManager.init, function(n) { return [O(r.defaultSettings, n)] }), r.EditorManager.createEditor = i(r.EditorManager.createEditor, function(n, t) { return [n, O(r.defaultSettings, t)] }) }) };

    function k() {
        for (var n = 0, t = 0, r = arguments.length; t < r; t++) n += arguments[t].length;
        var e = Array(n),
            i = 0;
        for (t = 0; t < r; t++)
            for (var o = arguments[t], u = 0, a = o.length; u < a; u++, i++) e[i] = o[u];
        return e
    }

    function L(n, t) { return function(n, t) { for (var r = null != t ? t : u, e = 0; e < n.length && null != r; ++e) r = r[n[e]]; return r }(n.split("."), t) }

    function V(n) { return parseInt(n, 10) }

    function z(n, t) { var r = n - t; return 0 == r ? 0 : 0 < r ? 1 : -1 }

    function B(n, t, r) { return { major: n, minor: t, patch: r } }

    function F(n) { var t = /([0-9]+)\.([0-9]+)\.([0-9]+)(?:(\-.+)?)/.exec(n); return t ? B(V(t[1]), V(t[2]), V(t[3])) : B(0, 0, 0) }

    function $(n, t) { return !!n && -1 === function(n, t) { var r = z(n.major, t.major); if (0 !== r) return r; var e = z(n.minor, t.minor); if (0 !== e) return e; var i = z(n.patch, t.patch); return 0 !== i ? i : 0 }(F([(r = n).majorVersion, r.minorVersion].join(".").split(".").slice(0, 3).join(".")), F(t)); var r }

    function G(o) {
        return function(n) {
            var t = L("tinymce.util.Tools", u),
                r = w(n.plugins),
                e = o.defaultSettings.forced_plugins || [],
                i = 0 < e.length ? r.concat(e) : r;
            return [t.extend({}, n, { plugins: i })]
        }
    }

    function H() { return (new Date).getTime() }

    function J(e) { return function() { var n, t, r = (t = "position", (((n = e).currentStyle ? n.currentStyle[t] : window.getComputedStyle(n, null)[t]) || "").toLowerCase()); return "absolute" === r || "fixed" === r } }

    function K(n) { n.parentNode.removeChild(n) }

    function Q(n, t) { n.notificationManager ? n.notificationManager.open({ text: t, type: "warning", timeout: 0, icon: "" }) : n.windowManager.alert(t) }

    function W(n) {
        var t, r, e = L("tinymce.util.URI", u);
        (t = n.base_url) && (this.baseURL = new e(this.documentBaseURL).toAbsolute(t.replace(/\/+$/, "")), this.baseURI = new e(this.baseURL)), r = n.suffix, n.suffix && (this.suffix = r), this.defaultSettings = n
    }

    function X(n) { return [L("tinymce.util.Tools", u).extend({}, this.defaultSettings, n)] }

    function Y(n) { r(n, [en.patch, on.patch, Z.patch, I.patch]) }
    var Z = { patch: t(function(n) { return $(n, "4.7.0") }, function(r) { r.EditorManager.init = i(r.EditorManager.init, G(r.EditorManager)), r.EditorManager.createEditor = i(r.EditorManager.createEditor, function(n, t) { return k([n], G(r.EditorManager)(t)) }) }) },
        nn = function(n, t, r, e, i) {
            var o, u = H();
            o = setInterval(function() { n() && (clearInterval(o), t()), H() - u > i && (clearInterval(o), r()) }, e)
        },
        tn = function(n, t) {
            var r, e = ((r = document.createElement("div")).style.display = "none", r.className = "mce-floatpanel", r);
            document.body.appendChild(e), nn(J(e), function() { K(e), n() }, function() { K(e), t() }, 10, 5e3)
        },
        rn = function(n) {
            n.EditorManager.on("AddEditor", function(n) {
                var t = n.editor,
                    r = t.settings.service_message;
                r && tn(function() { Q(t, r) }, function() { alert(r) })
            })
        },
        en = { patch: t(function(n) { return "function" != typeof n.overrideDefaults }, function(r) { rn(r), r.overrideDefaults = W, r.EditorManager.init = i(r.EditorManager.init, X), r.EditorManager.createEditor = i(r.EditorManager.createEditor, function(n, t) { return k([n], X.call(r, t)) }) }) },
        on = {
            patch: t(function(n) { return $(n, "4.5.0") }, function(n) {
                var e;
                n.overrideDefaults = i(n.overrideDefaults, (e = n, function(n) { var t = n.plugin_base_urls; for (var r in t) e.PluginManager.urls[r] = t[r] }))
            })
        };
    Y(u.tinymce)
}();

(function(cloudSettings) {
    tinymce.overrideDefaults(cloudSettings);
})({ "rtc_tenant_id": "no-api-key", "imagetools_proxy": "https://imageproxy.tiny.cloud/2/image", "suffix": ".min", "linkchecker_service_url": "https://hyperlinking.tiny.cloud", "spellchecker_rpc_url": "https://spelling.tiny.cloud", "spellchecker_api_key": "no-api-key", "tinydrive_service_url": "https://catalog.tiny.cloud", "api_key": "no-api-key", "imagetools_api_key": "no-api-key", "tinydrive_api_key": "no-api-key", "forced_plugins": ["chiffer"], "referrer_policy": "origin", "content_css_cors": true, "custom_plugin_urls": {}, "chiffer_snowplow_service_url": "https://sp.tinymce.com/i", "mediaembed_api_key": "no-api-key", "rtc_service_url": "https://rtc.tiny.cloud", "linkchecker_api_key": "no-api-key", "mediaembed_service_url": "https://hyperlinking.tiny.cloud", "service_message": "This domain is not registered with Tiny Cloud.  Please see the \u003ca target=\"_blank\" href=\"https://www.tiny.cloud/docs/quick-start/\"\u003equick start guide\u003c/a\u003e or \u003ca target=\"_blank\" href=\"https://www.tiny.cloud/auth/signup/\"\u003ecreate an account\u003c/a\u003e." });
tinymce.baseURL = "https://cdn.tiny.cloud/1/no-api-key/tinymce/5.9.2-118"

/* Ephox chiffer plugin
 *
 * Copyright 2010-2019 Tiny Technologies Inc. All rights reserved.
 *
 * Version: 1.10.0-15
 */

! function() {
    "use strict";

    function o() {}

    function n(t, e) { return m.call(t, e) }

    function e(t) { var e = t.command; return n(_, e) ? function(t) { if (!f(t.value)) { t = t.value["list-style-type"]; return "advlist_" + ("" === t ? "default" : t) } }(t) : n(g, e) ? g[e] : n(p, e) ? p[e] : n(S, e) ? S[e] : void 0 }

    function c() { return (new Date).getTime() }

    function t(t, e) {
        var r, a, n, e = (r = t, a = e, {
            send: function(t, e, n) {
                var t = "?aid=" + a + "&tna=tinymce_cloud&p=web&dtm=" + e + "&stm=" + c() + "&tz=" + ("undefined" != typeof Intl ? encodeURIComponent(Intl.DateTimeFormat().resolvedOptions().timeZone) : "N%2FA") + "&e=se&se_ca=" + t,
                    o = document.createElement("img");
                o.src = r.chiffer_snowplow_service_url + t;
                t = function(t) { return function() { o.onload = null, o.onerror = null, n(t) } };
                o.onload = t(!0), o.onerror = t(!1)
            }
        });
        return n = e, { sendStat: function(t) { n.send(t, c(), o) } }
    }
    var r, a, i, s, u, d, l = (r = "string", function(t) { return t = typeof(e = t), (null === e ? "null" : "object" == t && (Array.prototype.isPrototypeOf(e) || e.constructor && "Array" === e.constructor.name) ? "array" : "object" == t && (String.prototype.isPrototypeOf(e) || e.constructor && "String" === e.constructor.name) ? "string" : t) === r; var e }),
        f = (a = void 0, function(t) { return a === t }),
        m = Object.hasOwnProperty,
        p = { mceInsertToc: "toc_insert", mceUpdateToc: "toc_update" },
        g = { mceEditImage: "imagetools_open_dialog", mceImageRotateLeft: "imagetools_rotate", mceImageRotateRight: "imagetools_rotate", mceImageFlipVertical: "imagetools_flip", mceImageFlipHorizontal: "imagetools_flip" },
        _ = { InsertUnorderedList: !0, InsertOrderedList: !0 },
        S = { mceInsertTemplate: "template_insert" };
    s = tinymce.defaultSettings, u = { load: o }, d = function(t) { t = t.api_key; return l(t) ? t : void 0 }(s), u = void 0 === d ? u : ((i = t(s, d)).sendStat("script_load"), {
        load: function(t) {
            t.once("init", function() { return i.sendStat("init") }), t.once("focus", function() { return i.sendStat("focus") }), t.on("ExportPdf", function() { return i.sendStat("export_pdf") }), t.on("PastePreProcess PowerPasteTempStats", function(t) {
                t = t.source;
                null == t || i.sendStat("powerpaste_" + t)
            }), t.on("VisualChars", function(t) {!0 === t.state && i.sendStat("visualchars_true") }), t.on("RtcSessionConnected", function(t) {
                var e = t.time;
                switch (e) {
                    case 0:
                        i.sendStat("rtc_started");
                        break;
                    case 5:
                    case 10:
                    case 20:
                        i.sendStat("rtc_connected_" + e + "min")
                }
            }), t.on("RtcSessionError", function() { return i.sendStat("rtc_error") }), t.on("RtcSessionDirty", function() { return i.sendStat("rtc_edited") }), t.on("SpellcheckerLanguageChanged", function(t) {
                t = t.language;
                i.sendStat("spellcheckerpro_language_changed_" + t)
            }), t.on("ExecCommand", function(t) {
                t = e(t);
                f(t) || i.sendStat(t)
            })
        }
    }), tinymce.PluginManager.add("chiffer", u.load)
}();
