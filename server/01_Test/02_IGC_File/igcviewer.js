//Code from https://igcviewer.bgaladder.net/

!function(t) {
    var e = {};
    function n(i) {
        if (e[i])
            return e[i].exports;
        var o = e[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(o.exports, o, o.exports, n),
        o.l = !0,
        o.exports
    }
    n.m = t,
    n.c = e,
    n.d = function(t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    }
    ,
    n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(t, e) {
        if (1 & e && (t = n(t)),
        8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var i = Object.create(null);
        if (n.r(i),
        Object.defineProperty(i, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var o in t)
                n.d(i, o, function(e) {
                    return t[e]
                }
                .bind(null, o));
        return i
    }
    ,
    n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return n.d(e, "a", e),
        e
    }
    ,
    n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    n.p = "",
    n(n.s = 10)
}([function(t, e, n) {
    var i;
    /*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
    /*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
    !function(e, n) {
        "use strict";
        "object" == typeof t.exports ? t.exports = e.document ? n(e, !0) : function(t) {
            if (!t.document)
                throw new Error("jQuery requires a window with a document");
            return n(t)
        }
        : n(e)
    }("undefined" != typeof window ? window : this, function(n, o) {
        "use strict";
        var r = []
          , s = n.document
          , a = Object.getPrototypeOf
          , l = r.slice
          , h = r.concat
          , u = r.push
          , c = r.indexOf
          , f = {}
          , d = f.toString
          , p = f.hasOwnProperty
          , m = p.toString
          , g = m.call(Object)
          , v = {}
          , _ = function(t) {
            return "function" == typeof t && "number" != typeof t.nodeType
        }
          , y = function(t) {
            return null != t && t === t.window
        }
          , x = {
            type: !0,
            src: !0,
            noModule: !0
        };
        function b(t, e, n) {
            var i, o = (e = e || s).createElement("script");
            if (o.text = t,
            n)
                for (i in x)
                    n[i] && (o[i] = n[i]);
            e.head.appendChild(o).parentNode.removeChild(o)
        }
        function w(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? f[d.call(t)] || "object" : typeof t
        }
        var T = function(t, e) {
            return new T.fn.init(t,e)
        }
          , k = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        function L(t) {
            var e = !!t && "length"in t && t.length
              , n = w(t);
            return !_(t) && !y(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }
        T.fn = T.prototype = {
            jquery: "3.3.1",
            constructor: T,
            length: 0,
            toArray: function() {
                return l.call(this)
            },
            get: function(t) {
                return null == t ? l.call(this) : t < 0 ? this[t + this.length] : this[t]
            },
            pushStack: function(t) {
                var e = T.merge(this.constructor(), t);
                return e.prevObject = this,
                e
            },
            each: function(t) {
                return T.each(this, t)
            },
            map: function(t) {
                return this.pushStack(T.map(this, function(e, n) {
                    return t.call(e, n, e)
                }))
            },
            slice: function() {
                return this.pushStack(l.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(t) {
                var e = this.length
                  , n = +t + (t < 0 ? e : 0);
                return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: u,
            sort: r.sort,
            splice: r.splice
        },
        T.extend = T.fn.extend = function() {
            var t, e, n, i, o, r, s = arguments[0] || {}, a = 1, l = arguments.length, h = !1;
            for ("boolean" == typeof s && (h = s,
            s = arguments[a] || {},
            a++),
            "object" == typeof s || _(s) || (s = {}),
            a === l && (s = this,
            a--); a < l; a++)
                if (null != (t = arguments[a]))
                    for (e in t)
                        n = s[e],
                        s !== (i = t[e]) && (h && i && (T.isPlainObject(i) || (o = Array.isArray(i))) ? (o ? (o = !1,
                        r = n && Array.isArray(n) ? n : []) : r = n && T.isPlainObject(n) ? n : {},
                        s[e] = T.extend(h, r, i)) : void 0 !== i && (s[e] = i));
            return s
        }
        ,
        T.extend({
            expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) {
                throw new Error(t)
            },
            noop: function() {},
            isPlainObject: function(t) {
                var e, n;
                return !(!t || "[object Object]" !== d.call(t)) && (!(e = a(t)) || "function" == typeof (n = p.call(e, "constructor") && e.constructor) && m.call(n) === g)
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t)
                    return !1;
                return !0
            },
            globalEval: function(t) {
                b(t)
            },
            each: function(t, e) {
                var n, i = 0;
                if (L(t))
                    for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++)
                        ;
                else
                    for (i in t)
                        if (!1 === e.call(t[i], i, t[i]))
                            break;
                return t
            },
            trim: function(t) {
                return null == t ? "" : (t + "").replace(k, "")
            },
            makeArray: function(t, e) {
                var n = e || [];
                return null != t && (L(Object(t)) ? T.merge(n, "string" == typeof t ? [t] : t) : u.call(n, t)),
                n
            },
            inArray: function(t, e, n) {
                return null == e ? -1 : c.call(e, t, n)
            },
            merge: function(t, e) {
                for (var n = +e.length, i = 0, o = t.length; i < n; i++)
                    t[o++] = e[i];
                return t.length = o,
                t
            },
            grep: function(t, e, n) {
                for (var i = [], o = 0, r = t.length, s = !n; o < r; o++)
                    !e(t[o], o) !== s && i.push(t[o]);
                return i
            },
            map: function(t, e, n) {
                var i, o, r = 0, s = [];
                if (L(t))
                    for (i = t.length; r < i; r++)
                        null != (o = e(t[r], r, n)) && s.push(o);
                else
                    for (r in t)
                        null != (o = e(t[r], r, n)) && s.push(o);
                return h.apply([], s)
            },
            guid: 1,
            support: v
        }),
        "function" == typeof Symbol && (T.fn[Symbol.iterator] = r[Symbol.iterator]),
        T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
            f["[object " + e + "]"] = e.toLowerCase()
        });
        var P = /*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
        function(t) {
            var e, n, i, o, r, s, a, l, h, u, c, f, d, p, m, g, v, _, y, x = "sizzle" + 1 * new Date, b = t.document, w = 0, T = 0, k = st(), L = st(), P = st(), S = function(t, e) {
                return t === e && (c = !0),
                0
            }, M = {}.hasOwnProperty, C = [], z = C.pop, E = C.push, A = C.push, I = C.slice, O = function(t, e) {
                for (var n = 0, i = t.length; n < i; n++)
                    if (t[n] === e)
                        return n;
                return -1
            }, B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", N = "[\\x20\\t\\r\\n\\f]", D = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", F = "\\[" + N + "*(" + D + ")(?:" + N + "*([*^$|!~]?=)" + N + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + D + "))|)" + N + "*\\]", Z = ":(" + D + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + F + ")*)|.*)\\)|)", R = new RegExp(N + "+","g"), j = new RegExp("^" + N + "+|((?:^|[^\\\\])(?:\\\\.)*)" + N + "+$","g"), W = new RegExp("^" + N + "*," + N + "*"), H = new RegExp("^" + N + "*([>+~]|" + N + ")" + N + "*"), q = new RegExp("=" + N + "*([^\\]'\"]*?)" + N + "*\\]","g"), U = new RegExp(Z), V = new RegExp("^" + D + "$"), G = {
                ID: new RegExp("^#(" + D + ")"),
                CLASS: new RegExp("^\\.(" + D + ")"),
                TAG: new RegExp("^(" + D + "|[*])"),
                ATTR: new RegExp("^" + F),
                PSEUDO: new RegExp("^" + Z),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + N + "*(even|odd|(([+-]|)(\\d*)n|)" + N + "*(?:([+-]|)" + N + "*(\\d+)|))" + N + "*\\)|)","i"),
                bool: new RegExp("^(?:" + B + ")$","i"),
                needsContext: new RegExp("^" + N + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + N + "*((?:-\\d)?\\d*)" + N + "*\\)|)(?=[^-]|$)","i")
            }, $ = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, X = /^[^{]+\{\s*\[native \w/, J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, K = /[+~]/, Q = new RegExp("\\\\([\\da-f]{1,6}" + N + "?|(" + N + ")|.)","ig"), tt = function(t, e, n) {
                var i = "0x" + e - 65536;
                return i != i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            }, et = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, nt = function(t, e) {
                return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
            }, it = function() {
                f()
            }, ot = _t(function(t) {
                return !0 === t.disabled && ("form"in t || "label"in t)
            }, {
                dir: "parentNode",
                next: "legend"
            });
            try {
                A.apply(C = I.call(b.childNodes), b.childNodes),
                C[b.childNodes.length].nodeType
            } catch (t) {
                A = {
                    apply: C.length ? function(t, e) {
                        E.apply(t, I.call(e))
                    }
                    : function(t, e) {
                        for (var n = t.length, i = 0; t[n++] = e[i++]; )
                            ;
                        t.length = n - 1
                    }
                }
            }
            function rt(t, e, i, o) {
                var r, a, h, u, c, p, v, _ = e && e.ownerDocument, w = e ? e.nodeType : 9;
                if (i = i || [],
                "string" != typeof t || !t || 1 !== w && 9 !== w && 11 !== w)
                    return i;
                if (!o && ((e ? e.ownerDocument || e : b) !== d && f(e),
                e = e || d,
                m)) {
                    if (11 !== w && (c = J.exec(t)))
                        if (r = c[1]) {
                            if (9 === w) {
                                if (!(h = e.getElementById(r)))
                                    return i;
                                if (h.id === r)
                                    return i.push(h),
                                    i
                            } else if (_ && (h = _.getElementById(r)) && y(e, h) && h.id === r)
                                return i.push(h),
                                i
                        } else {
                            if (c[2])
                                return A.apply(i, e.getElementsByTagName(t)),
                                i;
                            if ((r = c[3]) && n.getElementsByClassName && e.getElementsByClassName)
                                return A.apply(i, e.getElementsByClassName(r)),
                                i
                        }
                    if (n.qsa && !P[t + " "] && (!g || !g.test(t))) {
                        if (1 !== w)
                            _ = e,
                            v = t;
                        else if ("object" !== e.nodeName.toLowerCase()) {
                            for ((u = e.getAttribute("id")) ? u = u.replace(et, nt) : e.setAttribute("id", u = x),
                            a = (p = s(t)).length; a--; )
                                p[a] = "#" + u + " " + vt(p[a]);
                            v = p.join(","),
                            _ = K.test(t) && mt(e.parentNode) || e
                        }
                        if (v)
                            try {
                                return A.apply(i, _.querySelectorAll(v)),
                                i
                            } catch (t) {} finally {
                                u === x && e.removeAttribute("id")
                            }
                    }
                }
                return l(t.replace(j, "$1"), e, i, o)
            }
            function st() {
                var t = [];
                return function e(n, o) {
                    return t.push(n + " ") > i.cacheLength && delete e[t.shift()],
                    e[n + " "] = o
                }
            }
            function at(t) {
                return t[x] = !0,
                t
            }
            function lt(t) {
                var e = d.createElement("fieldset");
                try {
                    return !!t(e)
                } catch (t) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e),
                    e = null
                }
            }
            function ht(t, e) {
                for (var n = t.split("|"), o = n.length; o--; )
                    i.attrHandle[n[o]] = e
            }
            function ut(t, e) {
                var n = e && t
                  , i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                if (i)
                    return i;
                if (n)
                    for (; n = n.nextSibling; )
                        if (n === e)
                            return -1;
                return t ? 1 : -1
            }
            function ct(t) {
                return function(e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }
            function ft(t) {
                return function(e) {
                    var n = e.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && e.type === t
                }
            }
            function dt(t) {
                return function(e) {
                    return "form"in e ? e.parentNode && !1 === e.disabled ? "label"in e ? "label"in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ot(e) === t : e.disabled === t : "label"in e && e.disabled === t
                }
            }
            function pt(t) {
                return at(function(e) {
                    return e = +e,
                    at(function(n, i) {
                        for (var o, r = t([], n.length, e), s = r.length; s--; )
                            n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                    })
                })
            }
            function mt(t) {
                return t && void 0 !== t.getElementsByTagName && t
            }
            for (e in n = rt.support = {},
            r = rt.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName
            }
            ,
            f = rt.setDocument = function(t) {
                var e, o, s = t ? t.ownerDocument || t : b;
                return s !== d && 9 === s.nodeType && s.documentElement ? (p = (d = s).documentElement,
                m = !r(d),
                b !== d && (o = d.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", it, !1) : o.attachEvent && o.attachEvent("onunload", it)),
                n.attributes = lt(function(t) {
                    return t.className = "i",
                    !t.getAttribute("className")
                }),
                n.getElementsByTagName = lt(function(t) {
                    return t.appendChild(d.createComment("")),
                    !t.getElementsByTagName("*").length
                }),
                n.getElementsByClassName = X.test(d.getElementsByClassName),
                n.getById = lt(function(t) {
                    return p.appendChild(t).id = x,
                    !d.getElementsByName || !d.getElementsByName(x).length
                }),
                n.getById ? (i.filter.ID = function(t) {
                    var e = t.replace(Q, tt);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }
                ,
                i.find.ID = function(t, e) {
                    if (void 0 !== e.getElementById && m) {
                        var n = e.getElementById(t);
                        return n ? [n] : []
                    }
                }
                ) : (i.filter.ID = function(t) {
                    var e = t.replace(Q, tt);
                    return function(t) {
                        var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                }
                ,
                i.find.ID = function(t, e) {
                    if (void 0 !== e.getElementById && m) {
                        var n, i, o, r = e.getElementById(t);
                        if (r) {
                            if ((n = r.getAttributeNode("id")) && n.value === t)
                                return [r];
                            for (o = e.getElementsByName(t),
                            i = 0; r = o[i++]; )
                                if ((n = r.getAttributeNode("id")) && n.value === t)
                                    return [r]
                        }
                        return []
                    }
                }
                ),
                i.find.TAG = n.getElementsByTagName ? function(t, e) {
                    return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : n.qsa ? e.querySelectorAll(t) : void 0
                }
                : function(t, e) {
                    var n, i = [], o = 0, r = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; n = r[o++]; )
                            1 === n.nodeType && i.push(n);
                        return i
                    }
                    return r
                }
                ,
                i.find.CLASS = n.getElementsByClassName && function(t, e) {
                    if (void 0 !== e.getElementsByClassName && m)
                        return e.getElementsByClassName(t)
                }
                ,
                v = [],
                g = [],
                (n.qsa = X.test(d.querySelectorAll)) && (lt(function(t) {
                    p.appendChild(t).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                    t.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + N + "*(?:''|\"\")"),
                    t.querySelectorAll("[selected]").length || g.push("\\[" + N + "*(?:value|" + B + ")"),
                    t.querySelectorAll("[id~=" + x + "-]").length || g.push("~="),
                    t.querySelectorAll(":checked").length || g.push(":checked"),
                    t.querySelectorAll("a#" + x + "+*").length || g.push(".#.+[+~]")
                }),
                lt(function(t) {
                    t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var e = d.createElement("input");
                    e.setAttribute("type", "hidden"),
                    t.appendChild(e).setAttribute("name", "D"),
                    t.querySelectorAll("[name=d]").length && g.push("name" + N + "*[*^$|!~]?="),
                    2 !== t.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"),
                    p.appendChild(t).disabled = !0,
                    2 !== t.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"),
                    t.querySelectorAll("*,:x"),
                    g.push(",.*:")
                })),
                (n.matchesSelector = X.test(_ = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && lt(function(t) {
                    n.disconnectedMatch = _.call(t, "*"),
                    _.call(t, "[s!='']:x"),
                    v.push("!=", Z)
                }),
                g = g.length && new RegExp(g.join("|")),
                v = v.length && new RegExp(v.join("|")),
                e = X.test(p.compareDocumentPosition),
                y = e || X.test(p.contains) ? function(t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t
                      , i = e && e.parentNode;
                    return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                }
                : function(t, e) {
                    if (e)
                        for (; e = e.parentNode; )
                            if (e === t)
                                return !0;
                    return !1
                }
                ,
                S = e ? function(t, e) {
                    if (t === e)
                        return c = !0,
                        0;
                    var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return i || (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !n.sortDetached && e.compareDocumentPosition(t) === i ? t === d || t.ownerDocument === b && y(b, t) ? -1 : e === d || e.ownerDocument === b && y(b, e) ? 1 : u ? O(u, t) - O(u, e) : 0 : 4 & i ? -1 : 1)
                }
                : function(t, e) {
                    if (t === e)
                        return c = !0,
                        0;
                    var n, i = 0, o = t.parentNode, r = e.parentNode, s = [t], a = [e];
                    if (!o || !r)
                        return t === d ? -1 : e === d ? 1 : o ? -1 : r ? 1 : u ? O(u, t) - O(u, e) : 0;
                    if (o === r)
                        return ut(t, e);
                    for (n = t; n = n.parentNode; )
                        s.unshift(n);
                    for (n = e; n = n.parentNode; )
                        a.unshift(n);
                    for (; s[i] === a[i]; )
                        i++;
                    return i ? ut(s[i], a[i]) : s[i] === b ? -1 : a[i] === b ? 1 : 0
                }
                ,
                d) : d
            }
            ,
            rt.matches = function(t, e) {
                return rt(t, null, null, e)
            }
            ,
            rt.matchesSelector = function(t, e) {
                if ((t.ownerDocument || t) !== d && f(t),
                e = e.replace(q, "='$1']"),
                n.matchesSelector && m && !P[e + " "] && (!v || !v.test(e)) && (!g || !g.test(e)))
                    try {
                        var i = _.call(t, e);
                        if (i || n.disconnectedMatch || t.document && 11 !== t.document.nodeType)
                            return i
                    } catch (t) {}
                return rt(e, d, null, [t]).length > 0
            }
            ,
            rt.contains = function(t, e) {
                return (t.ownerDocument || t) !== d && f(t),
                y(t, e)
            }
            ,
            rt.attr = function(t, e) {
                (t.ownerDocument || t) !== d && f(t);
                var o = i.attrHandle[e.toLowerCase()]
                  , r = o && M.call(i.attrHandle, e.toLowerCase()) ? o(t, e, !m) : void 0;
                return void 0 !== r ? r : n.attributes || !m ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
            }
            ,
            rt.escape = function(t) {
                return (t + "").replace(et, nt)
            }
            ,
            rt.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }
            ,
            rt.uniqueSort = function(t) {
                var e, i = [], o = 0, r = 0;
                if (c = !n.detectDuplicates,
                u = !n.sortStable && t.slice(0),
                t.sort(S),
                c) {
                    for (; e = t[r++]; )
                        e === t[r] && (o = i.push(r));
                    for (; o--; )
                        t.splice(i[o], 1)
                }
                return u = null,
                t
            }
            ,
            o = rt.getText = function(t) {
                var e, n = "", i = 0, r = t.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof t.textContent)
                            return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling)
                            n += o(t)
                    } else if (3 === r || 4 === r)
                        return t.nodeValue
                } else
                    for (; e = t[i++]; )
                        n += o(e);
                return n
            }
            ,
            (i = rt.selectors = {
                cacheLength: 50,
                createPseudo: at,
                match: G,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(t) {
                        return t[1] = t[1].replace(Q, tt),
                        t[3] = (t[3] || t[4] || t[5] || "").replace(Q, tt),
                        "~=" === t[2] && (t[3] = " " + t[3] + " "),
                        t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(),
                        "nth" === t[1].slice(0, 3) ? (t[3] || rt.error(t[0]),
                        t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])),
                        t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && rt.error(t[0]),
                        t
                    },
                    PSEUDO: function(t) {
                        var e, n = !t[6] && t[2];
                        return G.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && U.test(n) && (e = s(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e),
                        t[2] = n.slice(0, e)),
                        t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(Q, tt).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        }
                        : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = k[t + " "];
                        return e || (e = new RegExp("(^|" + N + ")" + t + "(" + N + "|$)")) && k(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, e, n) {
                        return function(i) {
                            var o = rt.attr(i, t);
                            return null == o ? "!=" === e : !e || (o += "",
                            "=" === e ? o === n : "!=" === e ? o !== n : "^=" === e ? n && 0 === o.indexOf(n) : "*=" === e ? n && o.indexOf(n) > -1 : "$=" === e ? n && o.slice(-n.length) === n : "~=" === e ? (" " + o.replace(R, " ") + " ").indexOf(n) > -1 : "|=" === e && (o === n || o.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(t, e, n, i, o) {
                        var r = "nth" !== t.slice(0, 3)
                          , s = "last" !== t.slice(-4)
                          , a = "of-type" === e;
                        return 1 === i && 0 === o ? function(t) {
                            return !!t.parentNode
                        }
                        : function(e, n, l) {
                            var h, u, c, f, d, p, m = r !== s ? "nextSibling" : "previousSibling", g = e.parentNode, v = a && e.nodeName.toLowerCase(), _ = !l && !a, y = !1;
                            if (g) {
                                if (r) {
                                    for (; m; ) {
                                        for (f = e; f = f[m]; )
                                            if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType)
                                                return !1;
                                        p = m = "only" === t && !p && "nextSibling"
                                    }
                                    return !0
                                }
                                if (p = [s ? g.firstChild : g.lastChild],
                                s && _) {
                                    for (y = (d = (h = (u = (c = (f = g)[x] || (f[x] = {}))[f.uniqueID] || (c[f.uniqueID] = {}))[t] || [])[0] === w && h[1]) && h[2],
                                    f = d && g.childNodes[d]; f = ++d && f && f[m] || (y = d = 0) || p.pop(); )
                                        if (1 === f.nodeType && ++y && f === e) {
                                            u[t] = [w, d, y];
                                            break
                                        }
                                } else if (_ && (y = d = (h = (u = (c = (f = e)[x] || (f[x] = {}))[f.uniqueID] || (c[f.uniqueID] = {}))[t] || [])[0] === w && h[1]),
                                !1 === y)
                                    for (; (f = ++d && f && f[m] || (y = d = 0) || p.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++y || (_ && ((u = (c = f[x] || (f[x] = {}))[f.uniqueID] || (c[f.uniqueID] = {}))[t] = [w, y]),
                                    f !== e)); )
                                        ;
                                return (y -= o) === i || y % i == 0 && y / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, e) {
                        var n, o = i.pseudos[t] || i.setFilters[t.toLowerCase()] || rt.error("unsupported pseudo: " + t);
                        return o[x] ? o(e) : o.length > 1 ? (n = [t, t, "", e],
                        i.setFilters.hasOwnProperty(t.toLowerCase()) ? at(function(t, n) {
                            for (var i, r = o(t, e), s = r.length; s--; )
                                t[i = O(t, r[s])] = !(n[i] = r[s])
                        }) : function(t) {
                            return o(t, 0, n)
                        }
                        ) : o
                    }
                },
                pseudos: {
                    not: at(function(t) {
                        var e = []
                          , n = []
                          , i = a(t.replace(j, "$1"));
                        return i[x] ? at(function(t, e, n, o) {
                            for (var r, s = i(t, null, o, []), a = t.length; a--; )
                                (r = s[a]) && (t[a] = !(e[a] = r))
                        }) : function(t, o, r) {
                            return e[0] = t,
                            i(e, null, r, n),
                            e[0] = null,
                            !n.pop()
                        }
                    }),
                    has: at(function(t) {
                        return function(e) {
                            return rt(t, e).length > 0
                        }
                    }),
                    contains: at(function(t) {
                        return t = t.replace(Q, tt),
                        function(e) {
                            return (e.textContent || e.innerText || o(e)).indexOf(t) > -1
                        }
                    }),
                    lang: at(function(t) {
                        return V.test(t || "") || rt.error("unsupported lang: " + t),
                        t = t.replace(Q, tt).toLowerCase(),
                        function(e) {
                            var n;
                            do {
                                if (n = m ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                    return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                            } while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                    }),
                    target: function(e) {
                        var n = t.location && t.location.hash;
                        return n && n.slice(1) === e.id
                    },
                    root: function(t) {
                        return t === p
                    },
                    focus: function(t) {
                        return t === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: dt(!1),
                    disabled: dt(!0),
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex,
                        !0 === t.selected
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6)
                                return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !i.pseudos.empty(t)
                    },
                    header: function(t) {
                        return Y.test(t.nodeName)
                    },
                    input: function(t) {
                        return $.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: pt(function() {
                        return [0]
                    }),
                    last: pt(function(t, e) {
                        return [e - 1]
                    }),
                    eq: pt(function(t, e, n) {
                        return [n < 0 ? n + e : n]
                    }),
                    even: pt(function(t, e) {
                        for (var n = 0; n < e; n += 2)
                            t.push(n);
                        return t
                    }),
                    odd: pt(function(t, e) {
                        for (var n = 1; n < e; n += 2)
                            t.push(n);
                        return t
                    }),
                    lt: pt(function(t, e, n) {
                        for (var i = n < 0 ? n + e : n; --i >= 0; )
                            t.push(i);
                        return t
                    }),
                    gt: pt(function(t, e, n) {
                        for (var i = n < 0 ? n + e : n; ++i < e; )
                            t.push(i);
                        return t
                    })
                }
            }).pseudos.nth = i.pseudos.eq,
            {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            })
                i.pseudos[e] = ct(e);
            for (e in {
                submit: !0,
                reset: !0
            })
                i.pseudos[e] = ft(e);
            function gt() {}
            function vt(t) {
                for (var e = 0, n = t.length, i = ""; e < n; e++)
                    i += t[e].value;
                return i
            }
            function _t(t, e, n) {
                var i = e.dir
                  , o = e.next
                  , r = o || i
                  , s = n && "parentNode" === r
                  , a = T++;
                return e.first ? function(e, n, o) {
                    for (; e = e[i]; )
                        if (1 === e.nodeType || s)
                            return t(e, n, o);
                    return !1
                }
                : function(e, n, l) {
                    var h, u, c, f = [w, a];
                    if (l) {
                        for (; e = e[i]; )
                            if ((1 === e.nodeType || s) && t(e, n, l))
                                return !0
                    } else
                        for (; e = e[i]; )
                            if (1 === e.nodeType || s)
                                if (u = (c = e[x] || (e[x] = {}))[e.uniqueID] || (c[e.uniqueID] = {}),
                                o && o === e.nodeName.toLowerCase())
                                    e = e[i] || e;
                                else {
                                    if ((h = u[r]) && h[0] === w && h[1] === a)
                                        return f[2] = h[2];
                                    if (u[r] = f,
                                    f[2] = t(e, n, l))
                                        return !0
                                }
                    return !1
                }
            }
            function yt(t) {
                return t.length > 1 ? function(e, n, i) {
                    for (var o = t.length; o--; )
                        if (!t[o](e, n, i))
                            return !1;
                    return !0
                }
                : t[0]
            }
            function xt(t, e, n, i, o) {
                for (var r, s = [], a = 0, l = t.length, h = null != e; a < l; a++)
                    (r = t[a]) && (n && !n(r, i, o) || (s.push(r),
                    h && e.push(a)));
                return s
            }
            function bt(t, e, n, i, o, r) {
                return i && !i[x] && (i = bt(i)),
                o && !o[x] && (o = bt(o, r)),
                at(function(r, s, a, l) {
                    var h, u, c, f = [], d = [], p = s.length, m = r || function(t, e, n) {
                        for (var i = 0, o = e.length; i < o; i++)
                            rt(t, e[i], n);
                        return n
                    }(e || "*", a.nodeType ? [a] : a, []), g = !t || !r && e ? m : xt(m, f, t, a, l), v = n ? o || (r ? t : p || i) ? [] : s : g;
                    if (n && n(g, v, a, l),
                    i)
                        for (h = xt(v, d),
                        i(h, [], a, l),
                        u = h.length; u--; )
                            (c = h[u]) && (v[d[u]] = !(g[d[u]] = c));
                    if (r) {
                        if (o || t) {
                            if (o) {
                                for (h = [],
                                u = v.length; u--; )
                                    (c = v[u]) && h.push(g[u] = c);
                                o(null, v = [], h, l)
                            }
                            for (u = v.length; u--; )
                                (c = v[u]) && (h = o ? O(r, c) : f[u]) > -1 && (r[h] = !(s[h] = c))
                        }
                    } else
                        v = xt(v === s ? v.splice(p, v.length) : v),
                        o ? o(null, s, v, l) : A.apply(s, v)
                })
            }
            function wt(t) {
                for (var e, n, o, r = t.length, s = i.relative[t[0].type], a = s || i.relative[" "], l = s ? 1 : 0, u = _t(function(t) {
                    return t === e
                }, a, !0), c = _t(function(t) {
                    return O(e, t) > -1
                }, a, !0), f = [function(t, n, i) {
                    var o = !s && (i || n !== h) || ((e = n).nodeType ? u(t, n, i) : c(t, n, i));
                    return e = null,
                    o
                }
                ]; l < r; l++)
                    if (n = i.relative[t[l].type])
                        f = [_t(yt(f), n)];
                    else {
                        if ((n = i.filter[t[l].type].apply(null, t[l].matches))[x]) {
                            for (o = ++l; o < r && !i.relative[t[o].type]; o++)
                                ;
                            return bt(l > 1 && yt(f), l > 1 && vt(t.slice(0, l - 1).concat({
                                value: " " === t[l - 2].type ? "*" : ""
                            })).replace(j, "$1"), n, l < o && wt(t.slice(l, o)), o < r && wt(t = t.slice(o)), o < r && vt(t))
                        }
                        f.push(n)
                    }
                return yt(f)
            }
            return gt.prototype = i.filters = i.pseudos,
            i.setFilters = new gt,
            s = rt.tokenize = function(t, e) {
                var n, o, r, s, a, l, h, u = L[t + " "];
                if (u)
                    return e ? 0 : u.slice(0);
                for (a = t,
                l = [],
                h = i.preFilter; a; ) {
                    for (s in n && !(o = W.exec(a)) || (o && (a = a.slice(o[0].length) || a),
                    l.push(r = [])),
                    n = !1,
                    (o = H.exec(a)) && (n = o.shift(),
                    r.push({
                        value: n,
                        type: o[0].replace(j, " ")
                    }),
                    a = a.slice(n.length)),
                    i.filter)
                        !(o = G[s].exec(a)) || h[s] && !(o = h[s](o)) || (n = o.shift(),
                        r.push({
                            value: n,
                            type: s,
                            matches: o
                        }),
                        a = a.slice(n.length));
                    if (!n)
                        break
                }
                return e ? a.length : a ? rt.error(t) : L(t, l).slice(0)
            }
            ,
            a = rt.compile = function(t, e) {
                var n, o = [], r = [], a = P[t + " "];
                if (!a) {
                    for (e || (e = s(t)),
                    n = e.length; n--; )
                        (a = wt(e[n]))[x] ? o.push(a) : r.push(a);
                    (a = P(t, function(t, e) {
                        var n = e.length > 0
                          , o = t.length > 0
                          , r = function(r, s, a, l, u) {
                            var c, p, g, v = 0, _ = "0", y = r && [], x = [], b = h, T = r || o && i.find.TAG("*", u), k = w += null == b ? 1 : Math.random() || .1, L = T.length;
                            for (u && (h = s === d || s || u); _ !== L && null != (c = T[_]); _++) {
                                if (o && c) {
                                    for (p = 0,
                                    s || c.ownerDocument === d || (f(c),
                                    a = !m); g = t[p++]; )
                                        if (g(c, s || d, a)) {
                                            l.push(c);
                                            break
                                        }
                                    u && (w = k)
                                }
                                n && ((c = !g && c) && v--,
                                r && y.push(c))
                            }
                            if (v += _,
                            n && _ !== v) {
                                for (p = 0; g = e[p++]; )
                                    g(y, x, s, a);
                                if (r) {
                                    if (v > 0)
                                        for (; _--; )
                                            y[_] || x[_] || (x[_] = z.call(l));
                                    x = xt(x)
                                }
                                A.apply(l, x),
                                u && !r && x.length > 0 && v + e.length > 1 && rt.uniqueSort(l)
                            }
                            return u && (w = k,
                            h = b),
                            y
                        };
                        return n ? at(r) : r
                    }(r, o))).selector = t
                }
                return a
            }
            ,
            l = rt.select = function(t, e, n, o) {
                var r, l, h, u, c, f = "function" == typeof t && t, d = !o && s(t = f.selector || t);
                if (n = n || [],
                1 === d.length) {
                    if ((l = d[0] = d[0].slice(0)).length > 2 && "ID" === (h = l[0]).type && 9 === e.nodeType && m && i.relative[l[1].type]) {
                        if (!(e = (i.find.ID(h.matches[0].replace(Q, tt), e) || [])[0]))
                            return n;
                        f && (e = e.parentNode),
                        t = t.slice(l.shift().value.length)
                    }
                    for (r = G.needsContext.test(t) ? 0 : l.length; r-- && (h = l[r],
                    !i.relative[u = h.type]); )
                        if ((c = i.find[u]) && (o = c(h.matches[0].replace(Q, tt), K.test(l[0].type) && mt(e.parentNode) || e))) {
                            if (l.splice(r, 1),
                            !(t = o.length && vt(l)))
                                return A.apply(n, o),
                                n;
                            break
                        }
                }
                return (f || a(t, d))(o, e, !m, n, !e || K.test(t) && mt(e.parentNode) || e),
                n
            }
            ,
            n.sortStable = x.split("").sort(S).join("") === x,
            n.detectDuplicates = !!c,
            f(),
            n.sortDetached = lt(function(t) {
                return 1 & t.compareDocumentPosition(d.createElement("fieldset"))
            }),
            lt(function(t) {
                return t.innerHTML = "<a href='#'></a>",
                "#" === t.firstChild.getAttribute("href")
            }) || ht("type|href|height|width", function(t, e, n) {
                if (!n)
                    return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }),
            n.attributes && lt(function(t) {
                return t.innerHTML = "<input/>",
                t.firstChild.setAttribute("value", ""),
                "" === t.firstChild.getAttribute("value")
            }) || ht("value", function(t, e, n) {
                if (!n && "input" === t.nodeName.toLowerCase())
                    return t.defaultValue
            }),
            lt(function(t) {
                return null == t.getAttribute("disabled")
            }) || ht(B, function(t, e, n) {
                var i;
                if (!n)
                    return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }),
            rt
        }(n);
        T.find = P,
        T.expr = P.selectors,
        T.expr[":"] = T.expr.pseudos,
        T.uniqueSort = T.unique = P.uniqueSort,
        T.text = P.getText,
        T.isXMLDoc = P.isXML,
        T.contains = P.contains,
        T.escapeSelector = P.escape;
        var S = function(t, e, n) {
            for (var i = [], o = void 0 !== n; (t = t[e]) && 9 !== t.nodeType; )
                if (1 === t.nodeType) {
                    if (o && T(t).is(n))
                        break;
                    i.push(t)
                }
            return i
        }
          , M = function(t, e) {
            for (var n = []; t; t = t.nextSibling)
                1 === t.nodeType && t !== e && n.push(t);
            return n
        }
          , C = T.expr.match.needsContext;
        function z(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        }
        var E = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function A(t, e, n) {
            return _(e) ? T.grep(t, function(t, i) {
                return !!e.call(t, i, t) !== n
            }) : e.nodeType ? T.grep(t, function(t) {
                return t === e !== n
            }) : "string" != typeof e ? T.grep(t, function(t) {
                return c.call(e, t) > -1 !== n
            }) : T.filter(e, t, n)
        }
        T.filter = function(t, e, n) {
            var i = e[0];
            return n && (t = ":not(" + t + ")"),
            1 === e.length && 1 === i.nodeType ? T.find.matchesSelector(i, t) ? [i] : [] : T.find.matches(t, T.grep(e, function(t) {
                return 1 === t.nodeType
            }))
        }
        ,
        T.fn.extend({
            find: function(t) {
                var e, n, i = this.length, o = this;
                if ("string" != typeof t)
                    return this.pushStack(T(t).filter(function() {
                        for (e = 0; e < i; e++)
                            if (T.contains(o[e], this))
                                return !0
                    }));
                for (n = this.pushStack([]),
                e = 0; e < i; e++)
                    T.find(t, o[e], n);
                return i > 1 ? T.uniqueSort(n) : n
            },
            filter: function(t) {
                return this.pushStack(A(this, t || [], !1))
            },
            not: function(t) {
                return this.pushStack(A(this, t || [], !0))
            },
            is: function(t) {
                return !!A(this, "string" == typeof t && C.test(t) ? T(t) : t || [], !1).length
            }
        });
        var I, O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (T.fn.init = function(t, e, n) {
            var i, o;
            if (!t)
                return this;
            if (n = n || I,
            "string" == typeof t) {
                if (!(i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : O.exec(t)) || !i[1] && e)
                    return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                if (i[1]) {
                    if (e = e instanceof T ? e[0] : e,
                    T.merge(this, T.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : s, !0)),
                    E.test(i[1]) && T.isPlainObject(e))
                        for (i in e)
                            _(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                    return this
                }
                return (o = s.getElementById(i[2])) && (this[0] = o,
                this.length = 1),
                this
            }
            return t.nodeType ? (this[0] = t,
            this.length = 1,
            this) : _(t) ? void 0 !== n.ready ? n.ready(t) : t(T) : T.makeArray(t, this)
        }
        ).prototype = T.fn,
        I = T(s);
        var B = /^(?:parents|prev(?:Until|All))/
          , N = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        function D(t, e) {
            for (; (t = t[e]) && 1 !== t.nodeType; )
                ;
            return t
        }
        T.fn.extend({
            has: function(t) {
                var e = T(t, this)
                  , n = e.length;
                return this.filter(function() {
                    for (var t = 0; t < n; t++)
                        if (T.contains(this, e[t]))
                            return !0
                })
            },
            closest: function(t, e) {
                var n, i = 0, o = this.length, r = [], s = "string" != typeof t && T(t);
                if (!C.test(t))
                    for (; i < o; i++)
                        for (n = this[i]; n && n !== e; n = n.parentNode)
                            if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && T.find.matchesSelector(n, t))) {
                                r.push(n);
                                break
                            }
                return this.pushStack(r.length > 1 ? T.uniqueSort(r) : r)
            },
            index: function(t) {
                return t ? "string" == typeof t ? c.call(T(t), this[0]) : c.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                return this.pushStack(T.uniqueSort(T.merge(this.get(), T(t, e))))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }),
        T.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return S(t, "parentNode")
            },
            parentsUntil: function(t, e, n) {
                return S(t, "parentNode", n)
            },
            next: function(t) {
                return D(t, "nextSibling")
            },
            prev: function(t) {
                return D(t, "previousSibling")
            },
            nextAll: function(t) {
                return S(t, "nextSibling")
            },
            prevAll: function(t) {
                return S(t, "previousSibling")
            },
            nextUntil: function(t, e, n) {
                return S(t, "nextSibling", n)
            },
            prevUntil: function(t, e, n) {
                return S(t, "previousSibling", n)
            },
            siblings: function(t) {
                return M((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return M(t.firstChild)
            },
            contents: function(t) {
                return z(t, "iframe") ? t.contentDocument : (z(t, "template") && (t = t.content || t),
                T.merge([], t.childNodes))
            }
        }, function(t, e) {
            T.fn[t] = function(n, i) {
                var o = T.map(this, e, n);
                return "Until" !== t.slice(-5) && (i = n),
                i && "string" == typeof i && (o = T.filter(i, o)),
                this.length > 1 && (N[t] || T.uniqueSort(o),
                B.test(t) && o.reverse()),
                this.pushStack(o)
            }
        });
        var F = /[^\x20\t\r\n\f]+/g;
        function Z(t) {
            return t
        }
        function R(t) {
            throw t
        }
        function j(t, e, n, i) {
            var o;
            try {
                t && _(o = t.promise) ? o.call(t).done(e).fail(n) : t && _(o = t.then) ? o.call(t, e, n) : e.apply(void 0, [t].slice(i))
            } catch (t) {
                n.apply(void 0, [t])
            }
        }
        T.Callbacks = function(t) {
            t = "string" == typeof t ? function(t) {
                var e = {};
                return T.each(t.match(F) || [], function(t, n) {
                    e[n] = !0
                }),
                e
            }(t) : T.extend({}, t);
            var e, n, i, o, r = [], s = [], a = -1, l = function() {
                for (o = o || t.once,
                i = e = !0; s.length; a = -1)
                    for (n = s.shift(); ++a < r.length; )
                        !1 === r[a].apply(n[0], n[1]) && t.stopOnFalse && (a = r.length,
                        n = !1);
                t.memory || (n = !1),
                e = !1,
                o && (r = n ? [] : "")
            }, h = {
                add: function() {
                    return r && (n && !e && (a = r.length - 1,
                    s.push(n)),
                    function e(n) {
                        T.each(n, function(n, i) {
                            _(i) ? t.unique && h.has(i) || r.push(i) : i && i.length && "string" !== w(i) && e(i)
                        })
                    }(arguments),
                    n && !e && l()),
                    this
                },
                remove: function() {
                    return T.each(arguments, function(t, e) {
                        for (var n; (n = T.inArray(e, r, n)) > -1; )
                            r.splice(n, 1),
                            n <= a && a--
                    }),
                    this
                },
                has: function(t) {
                    return t ? T.inArray(t, r) > -1 : r.length > 0
                },
                empty: function() {
                    return r && (r = []),
                    this
                },
                disable: function() {
                    return o = s = [],
                    r = n = "",
                    this
                },
                disabled: function() {
                    return !r
                },
                lock: function() {
                    return o = s = [],
                    n || e || (r = n = ""),
                    this
                },
                locked: function() {
                    return !!o
                },
                fireWith: function(t, n) {
                    return o || (n = [t, (n = n || []).slice ? n.slice() : n],
                    s.push(n),
                    e || l()),
                    this
                },
                fire: function() {
                    return h.fireWith(this, arguments),
                    this
                },
                fired: function() {
                    return !!i
                }
            };
            return h
        }
        ,
        T.extend({
            Deferred: function(t) {
                var e = [["notify", "progress", T.Callbacks("memory"), T.Callbacks("memory"), 2], ["resolve", "done", T.Callbacks("once memory"), T.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", T.Callbacks("once memory"), T.Callbacks("once memory"), 1, "rejected"]]
                  , i = "pending"
                  , o = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments),
                        this
                    },
                    catch: function(t) {
                        return o.then(null, t)
                    },
                    pipe: function() {
                        var t = arguments;
                        return T.Deferred(function(n) {
                            T.each(e, function(e, i) {
                                var o = _(t[i[4]]) && t[i[4]];
                                r[i[1]](function() {
                                    var t = o && o.apply(this, arguments);
                                    t && _(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, o ? [t] : arguments)
                                })
                            }),
                            t = null
                        }).promise()
                    },
                    then: function(t, i, o) {
                        var r = 0;
                        function s(t, e, i, o) {
                            return function() {
                                var a = this
                                  , l = arguments
                                  , h = function() {
                                    var n, h;
                                    if (!(t < r)) {
                                        if ((n = i.apply(a, l)) === e.promise())
                                            throw new TypeError("Thenable self-resolution");
                                        h = n && ("object" == typeof n || "function" == typeof n) && n.then,
                                        _(h) ? o ? h.call(n, s(r, e, Z, o), s(r, e, R, o)) : (r++,
                                        h.call(n, s(r, e, Z, o), s(r, e, R, o), s(r, e, Z, e.notifyWith))) : (i !== Z && (a = void 0,
                                        l = [n]),
                                        (o || e.resolveWith)(a, l))
                                    }
                                }
                                  , u = o ? h : function() {
                                    try {
                                        h()
                                    } catch (n) {
                                        T.Deferred.exceptionHook && T.Deferred.exceptionHook(n, u.stackTrace),
                                        t + 1 >= r && (i !== R && (a = void 0,
                                        l = [n]),
                                        e.rejectWith(a, l))
                                    }
                                }
                                ;
                                t ? u() : (T.Deferred.getStackHook && (u.stackTrace = T.Deferred.getStackHook()),
                                n.setTimeout(u))
                            }
                        }
                        return T.Deferred(function(n) {
                            e[0][3].add(s(0, n, _(o) ? o : Z, n.notifyWith)),
                            e[1][3].add(s(0, n, _(t) ? t : Z)),
                            e[2][3].add(s(0, n, _(i) ? i : R))
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? T.extend(t, o) : o
                    }
                }
                  , r = {};
                return T.each(e, function(t, n) {
                    var s = n[2]
                      , a = n[5];
                    o[n[1]] = s.add,
                    a && s.add(function() {
                        i = a
                    }, e[3 - t][2].disable, e[3 - t][3].disable, e[0][2].lock, e[0][3].lock),
                    s.add(n[3].fire),
                    r[n[0]] = function() {
                        return r[n[0] + "With"](this === r ? void 0 : this, arguments),
                        this
                    }
                    ,
                    r[n[0] + "With"] = s.fireWith
                }),
                o.promise(r),
                t && t.call(r, r),
                r
            },
            when: function(t) {
                var e = arguments.length
                  , n = e
                  , i = Array(n)
                  , o = l.call(arguments)
                  , r = T.Deferred()
                  , s = function(t) {
                    return function(n) {
                        i[t] = this,
                        o[t] = arguments.length > 1 ? l.call(arguments) : n,
                        --e || r.resolveWith(i, o)
                    }
                };
                if (e <= 1 && (j(t, r.done(s(n)).resolve, r.reject, !e),
                "pending" === r.state() || _(o[n] && o[n].then)))
                    return r.then();
                for (; n--; )
                    j(o[n], s(n), r.reject);
                return r.promise()
            }
        });
        var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        T.Deferred.exceptionHook = function(t, e) {
            n.console && n.console.warn && t && W.test(t.name) && n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e)
        }
        ,
        T.readyException = function(t) {
            n.setTimeout(function() {
                throw t
            })
        }
        ;
        var H = T.Deferred();
        function q() {
            s.removeEventListener("DOMContentLoaded", q),
            n.removeEventListener("load", q),
            T.ready()
        }
        T.fn.ready = function(t) {
            return H.then(t).catch(function(t) {
                T.readyException(t)
            }),
            this
        }
        ,
        T.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(t) {
                (!0 === t ? --T.readyWait : T.isReady) || (T.isReady = !0,
                !0 !== t && --T.readyWait > 0 || H.resolveWith(s, [T]))
            }
        }),
        T.ready.then = H.then,
        "complete" === s.readyState || "loading" !== s.readyState && !s.documentElement.doScroll ? n.setTimeout(T.ready) : (s.addEventListener("DOMContentLoaded", q),
        n.addEventListener("load", q));
        var U = function(t, e, n, i, o, r, s) {
            var a = 0
              , l = t.length
              , h = null == n;
            if ("object" === w(n))
                for (a in o = !0,
                n)
                    U(t, e, a, n[a], !0, r, s);
            else if (void 0 !== i && (o = !0,
            _(i) || (s = !0),
            h && (s ? (e.call(t, i),
            e = null) : (h = e,
            e = function(t, e, n) {
                return h.call(T(t), n)
            }
            )),
            e))
                for (; a < l; a++)
                    e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
            return o ? t : h ? e.call(t) : l ? e(t[0], n) : r
        }
          , V = /^-ms-/
          , G = /-([a-z])/g;
        function $(t, e) {
            return e.toUpperCase()
        }
        function Y(t) {
            return t.replace(V, "ms-").replace(G, $)
        }
        var X = function(t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        };
        function J() {
            this.expando = T.expando + J.uid++
        }
        J.uid = 1,
        J.prototype = {
            cache: function(t) {
                var e = t[this.expando];
                return e || (e = {},
                X(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0
                }))),
                e
            },
            set: function(t, e, n) {
                var i, o = this.cache(t);
                if ("string" == typeof e)
                    o[Y(e)] = n;
                else
                    for (i in e)
                        o[Y(i)] = e[i];
                return o
            },
            get: function(t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][Y(e)]
            },
            access: function(t, e, n) {
                return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n),
                void 0 !== n ? n : e)
            },
            remove: function(t, e) {
                var n, i = t[this.expando];
                if (void 0 !== i) {
                    if (void 0 !== e) {
                        n = (e = Array.isArray(e) ? e.map(Y) : (e = Y(e))in i ? [e] : e.match(F) || []).length;
                        for (; n--; )
                            delete i[e[n]]
                    }
                    (void 0 === e || T.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                }
            },
            hasData: function(t) {
                var e = t[this.expando];
                return void 0 !== e && !T.isEmptyObject(e)
            }
        };
        var K = new J
          , Q = new J
          , tt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
          , et = /[A-Z]/g;
        function nt(t, e, n) {
            var i;
            if (void 0 === n && 1 === t.nodeType)
                if (i = "data-" + e.replace(et, "-$&").toLowerCase(),
                "string" == typeof (n = t.getAttribute(i))) {
                    try {
                        n = function(t) {
                            return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : tt.test(t) ? JSON.parse(t) : t)
                        }(n)
                    } catch (t) {}
                    Q.set(t, e, n)
                } else
                    n = void 0;
            return n
        }
        T.extend({
            hasData: function(t) {
                return Q.hasData(t) || K.hasData(t)
            },
            data: function(t, e, n) {
                return Q.access(t, e, n)
            },
            removeData: function(t, e) {
                Q.remove(t, e)
            },
            _data: function(t, e, n) {
                return K.access(t, e, n)
            },
            _removeData: function(t, e) {
                K.remove(t, e)
            }
        }),
        T.fn.extend({
            data: function(t, e) {
                var n, i, o, r = this[0], s = r && r.attributes;
                if (void 0 === t) {
                    if (this.length && (o = Q.get(r),
                    1 === r.nodeType && !K.get(r, "hasDataAttrs"))) {
                        for (n = s.length; n--; )
                            s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = Y(i.slice(5)),
                            nt(r, i, o[i]));
                        K.set(r, "hasDataAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof t ? this.each(function() {
                    Q.set(this, t)
                }) : U(this, function(e) {
                    var n;
                    if (r && void 0 === e)
                        return void 0 !== (n = Q.get(r, t)) ? n : void 0 !== (n = nt(r, t)) ? n : void 0;
                    this.each(function() {
                        Q.set(this, t, e)
                    })
                }, null, e, arguments.length > 1, null, !0)
            },
            removeData: function(t) {
                return this.each(function() {
                    Q.remove(this, t)
                })
            }
        }),
        T.extend({
            queue: function(t, e, n) {
                var i;
                if (t)
                    return e = (e || "fx") + "queue",
                    i = K.get(t, e),
                    n && (!i || Array.isArray(n) ? i = K.access(t, e, T.makeArray(n)) : i.push(n)),
                    i || []
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var n = T.queue(t, e)
                  , i = n.length
                  , o = n.shift()
                  , r = T._queueHooks(t, e);
                "inprogress" === o && (o = n.shift(),
                i--),
                o && ("fx" === e && n.unshift("inprogress"),
                delete r.stop,
                o.call(t, function() {
                    T.dequeue(t, e)
                }, r)),
                !i && r && r.empty.fire()
            },
            _queueHooks: function(t, e) {
                var n = e + "queueHooks";
                return K.get(t, n) || K.access(t, n, {
                    empty: T.Callbacks("once memory").add(function() {
                        K.remove(t, [e + "queue", n])
                    })
                })
            }
        }),
        T.fn.extend({
            queue: function(t, e) {
                var n = 2;
                return "string" != typeof t && (e = t,
                t = "fx",
                n--),
                arguments.length < n ? T.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var n = T.queue(this, t, e);
                    T._queueHooks(this, t),
                    "fx" === t && "inprogress" !== n[0] && T.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    T.dequeue(this, t)
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var n, i = 1, o = T.Deferred(), r = this, s = this.length, a = function() {
                    --i || o.resolveWith(r, [r])
                };
                for ("string" != typeof t && (e = t,
                t = void 0),
                t = t || "fx"; s--; )
                    (n = K.get(r[s], t + "queueHooks")) && n.empty && (i++,
                    n.empty.add(a));
                return a(),
                o.promise(e)
            }
        });
        var it = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
          , ot = new RegExp("^(?:([+-])=|)(" + it + ")([a-z%]*)$","i")
          , rt = ["Top", "Right", "Bottom", "Left"]
          , st = function(t, e) {
            return "none" === (t = e || t).style.display || "" === t.style.display && T.contains(t.ownerDocument, t) && "none" === T.css(t, "display")
        }
          , at = function(t, e, n, i) {
            var o, r, s = {};
            for (r in e)
                s[r] = t.style[r],
                t.style[r] = e[r];
            for (r in o = n.apply(t, i || []),
            e)
                t.style[r] = s[r];
            return o
        };
        function lt(t, e, n, i) {
            var o, r, s = 20, a = i ? function() {
                return i.cur()
            }
            : function() {
                return T.css(t, e, "")
            }
            , l = a(), h = n && n[3] || (T.cssNumber[e] ? "" : "px"), u = (T.cssNumber[e] || "px" !== h && +l) && ot.exec(T.css(t, e));
            if (u && u[3] !== h) {
                for (l /= 2,
                h = h || u[3],
                u = +l || 1; s--; )
                    T.style(t, e, u + h),
                    (1 - r) * (1 - (r = a() / l || .5)) <= 0 && (s = 0),
                    u /= r;
                u *= 2,
                T.style(t, e, u + h),
                n = n || []
            }
            return n && (u = +u || +l || 0,
            o = n[1] ? u + (n[1] + 1) * n[2] : +n[2],
            i && (i.unit = h,
            i.start = u,
            i.end = o)),
            o
        }
        var ht = {};
        function ut(t) {
            var e, n = t.ownerDocument, i = t.nodeName, o = ht[i];
            return o || (e = n.body.appendChild(n.createElement(i)),
            o = T.css(e, "display"),
            e.parentNode.removeChild(e),
            "none" === o && (o = "block"),
            ht[i] = o,
            o)
        }
        function ct(t, e) {
            for (var n, i, o = [], r = 0, s = t.length; r < s; r++)
                (i = t[r]).style && (n = i.style.display,
                e ? ("none" === n && (o[r] = K.get(i, "display") || null,
                o[r] || (i.style.display = "")),
                "" === i.style.display && st(i) && (o[r] = ut(i))) : "none" !== n && (o[r] = "none",
                K.set(i, "display", n)));
            for (r = 0; r < s; r++)
                null != o[r] && (t[r].style.display = o[r]);
            return t
        }
        T.fn.extend({
            show: function() {
                return ct(this, !0)
            },
            hide: function() {
                return ct(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                    st(this) ? T(this).show() : T(this).hide()
                })
            }
        });
        var ft = /^(?:checkbox|radio)$/i
          , dt = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
          , pt = /^$|^module$|\/(?:java|ecma)script/i
          , mt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        function gt(t, e) {
            var n;
            return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [],
            void 0 === e || e && z(t, e) ? T.merge([t], n) : n
        }
        function vt(t, e) {
            for (var n = 0, i = t.length; n < i; n++)
                K.set(t[n], "globalEval", !e || K.get(e[n], "globalEval"))
        }
        mt.optgroup = mt.option,
        mt.tbody = mt.tfoot = mt.colgroup = mt.caption = mt.thead,
        mt.th = mt.td;
        var _t, yt, xt = /<|&#?\w+;/;
        function bt(t, e, n, i, o) {
            for (var r, s, a, l, h, u, c = e.createDocumentFragment(), f = [], d = 0, p = t.length; d < p; d++)
                if ((r = t[d]) || 0 === r)
                    if ("object" === w(r))
                        T.merge(f, r.nodeType ? [r] : r);
                    else if (xt.test(r)) {
                        for (s = s || c.appendChild(e.createElement("div")),
                        a = (dt.exec(r) || ["", ""])[1].toLowerCase(),
                        l = mt[a] || mt._default,
                        s.innerHTML = l[1] + T.htmlPrefilter(r) + l[2],
                        u = l[0]; u--; )
                            s = s.lastChild;
                        T.merge(f, s.childNodes),
                        (s = c.firstChild).textContent = ""
                    } else
                        f.push(e.createTextNode(r));
            for (c.textContent = "",
            d = 0; r = f[d++]; )
                if (i && T.inArray(r, i) > -1)
                    o && o.push(r);
                else if (h = T.contains(r.ownerDocument, r),
                s = gt(c.appendChild(r), "script"),
                h && vt(s),
                n)
                    for (u = 0; r = s[u++]; )
                        pt.test(r.type || "") && n.push(r);
            return c
        }
        _t = s.createDocumentFragment().appendChild(s.createElement("div")),
        (yt = s.createElement("input")).setAttribute("type", "radio"),
        yt.setAttribute("checked", "checked"),
        yt.setAttribute("name", "t"),
        _t.appendChild(yt),
        v.checkClone = _t.cloneNode(!0).cloneNode(!0).lastChild.checked,
        _t.innerHTML = "<textarea>x</textarea>",
        v.noCloneChecked = !!_t.cloneNode(!0).lastChild.defaultValue;
        var wt = s.documentElement
          , Tt = /^key/
          , kt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
          , Lt = /^([^.]*)(?:\.(.+)|)/;
        function Pt() {
            return !0
        }
        function St() {
            return !1
        }
        function Mt() {
            try {
                return s.activeElement
            } catch (t) {}
        }
        function Ct(t, e, n, i, o, r) {
            var s, a;
            if ("object" == typeof e) {
                for (a in "string" != typeof n && (i = i || n,
                n = void 0),
                e)
                    Ct(t, a, n, i, e[a], r);
                return t
            }
            if (null == i && null == o ? (o = n,
            i = n = void 0) : null == o && ("string" == typeof n ? (o = i,
            i = void 0) : (o = i,
            i = n,
            n = void 0)),
            !1 === o)
                o = St;
            else if (!o)
                return t;
            return 1 === r && (s = o,
            (o = function(t) {
                return T().off(t),
                s.apply(this, arguments)
            }
            ).guid = s.guid || (s.guid = T.guid++)),
            t.each(function() {
                T.event.add(this, e, o, i, n)
            })
        }
        T.event = {
            global: {},
            add: function(t, e, n, i, o) {
                var r, s, a, l, h, u, c, f, d, p, m, g = K.get(t);
                if (g)
                    for (n.handler && (n = (r = n).handler,
                    o = r.selector),
                    o && T.find.matchesSelector(wt, o),
                    n.guid || (n.guid = T.guid++),
                    (l = g.events) || (l = g.events = {}),
                    (s = g.handle) || (s = g.handle = function(e) {
                        return void 0 !== T && T.event.triggered !== e.type ? T.event.dispatch.apply(t, arguments) : void 0
                    }
                    ),
                    h = (e = (e || "").match(F) || [""]).length; h--; )
                        d = m = (a = Lt.exec(e[h]) || [])[1],
                        p = (a[2] || "").split(".").sort(),
                        d && (c = T.event.special[d] || {},
                        d = (o ? c.delegateType : c.bindType) || d,
                        c = T.event.special[d] || {},
                        u = T.extend({
                            type: d,
                            origType: m,
                            data: i,
                            handler: n,
                            guid: n.guid,
                            selector: o,
                            needsContext: o && T.expr.match.needsContext.test(o),
                            namespace: p.join(".")
                        }, r),
                        (f = l[d]) || ((f = l[d] = []).delegateCount = 0,
                        c.setup && !1 !== c.setup.call(t, i, p, s) || t.addEventListener && t.addEventListener(d, s)),
                        c.add && (c.add.call(t, u),
                        u.handler.guid || (u.handler.guid = n.guid)),
                        o ? f.splice(f.delegateCount++, 0, u) : f.push(u),
                        T.event.global[d] = !0)
            },
            remove: function(t, e, n, i, o) {
                var r, s, a, l, h, u, c, f, d, p, m, g = K.hasData(t) && K.get(t);
                if (g && (l = g.events)) {
                    for (h = (e = (e || "").match(F) || [""]).length; h--; )
                        if (d = m = (a = Lt.exec(e[h]) || [])[1],
                        p = (a[2] || "").split(".").sort(),
                        d) {
                            for (c = T.event.special[d] || {},
                            f = l[d = (i ? c.delegateType : c.bindType) || d] || [],
                            a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                            s = r = f.length; r--; )
                                u = f[r],
                                !o && m !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (f.splice(r, 1),
                                u.selector && f.delegateCount--,
                                c.remove && c.remove.call(t, u));
                            s && !f.length && (c.teardown && !1 !== c.teardown.call(t, p, g.handle) || T.removeEvent(t, d, g.handle),
                            delete l[d])
                        } else
                            for (d in l)
                                T.event.remove(t, d + e[h], n, i, !0);
                    T.isEmptyObject(l) && K.remove(t, "handle events")
                }
            },
            dispatch: function(t) {
                var e, n, i, o, r, s, a = T.event.fix(t), l = new Array(arguments.length), h = (K.get(this, "events") || {})[a.type] || [], u = T.event.special[a.type] || {};
                for (l[0] = a,
                e = 1; e < arguments.length; e++)
                    l[e] = arguments[e];
                if (a.delegateTarget = this,
                !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
                    for (s = T.event.handlers.call(this, a, h),
                    e = 0; (o = s[e++]) && !a.isPropagationStopped(); )
                        for (a.currentTarget = o.elem,
                        n = 0; (r = o.handlers[n++]) && !a.isImmediatePropagationStopped(); )
                            a.rnamespace && !a.rnamespace.test(r.namespace) || (a.handleObj = r,
                            a.data = r.data,
                            void 0 !== (i = ((T.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) && !1 === (a.result = i) && (a.preventDefault(),
                            a.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, a),
                    a.result
                }
            },
            handlers: function(t, e) {
                var n, i, o, r, s, a = [], l = e.delegateCount, h = t.target;
                if (l && h.nodeType && !("click" === t.type && t.button >= 1))
                    for (; h !== this; h = h.parentNode || this)
                        if (1 === h.nodeType && ("click" !== t.type || !0 !== h.disabled)) {
                            for (r = [],
                            s = {},
                            n = 0; n < l; n++)
                                void 0 === s[o = (i = e[n]).selector + " "] && (s[o] = i.needsContext ? T(o, this).index(h) > -1 : T.find(o, this, null, [h]).length),
                                s[o] && r.push(i);
                            r.length && a.push({
                                elem: h,
                                handlers: r
                            })
                        }
                return h = this,
                l < e.length && a.push({
                    elem: h,
                    handlers: e.slice(l)
                }),
                a
            },
            addProp: function(t, e) {
                Object.defineProperty(T.Event.prototype, t, {
                    enumerable: !0,
                    configurable: !0,
                    get: _(e) ? function() {
                        if (this.originalEvent)
                            return e(this.originalEvent)
                    }
                    : function() {
                        if (this.originalEvent)
                            return this.originalEvent[t]
                    }
                    ,
                    set: function(e) {
                        Object.defineProperty(this, t, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: e
                        })
                    }
                })
            },
            fix: function(t) {
                return t[T.expando] ? t : new T.Event(t)
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== Mt() && this.focus)
                            return this.focus(),
                            !1
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === Mt() && this.blur)
                            return this.blur(),
                            !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if ("checkbox" === this.type && this.click && z(this, "input"))
                            return this.click(),
                            !1
                    },
                    _default: function(t) {
                        return z(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            }
        },
        T.removeEvent = function(t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n)
        }
        ,
        T.Event = function(t, e) {
            if (!(this instanceof T.Event))
                return new T.Event(t,e);
            t && t.type ? (this.originalEvent = t,
            this.type = t.type,
            this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? Pt : St,
            this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target,
            this.currentTarget = t.currentTarget,
            this.relatedTarget = t.relatedTarget) : this.type = t,
            e && T.extend(this, e),
            this.timeStamp = t && t.timeStamp || Date.now(),
            this[T.expando] = !0
        }
        ,
        T.Event.prototype = {
            constructor: T.Event,
            isDefaultPrevented: St,
            isPropagationStopped: St,
            isImmediatePropagationStopped: St,
            isSimulated: !1,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = Pt,
                t && !this.isSimulated && t.preventDefault()
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = Pt,
                t && !this.isSimulated && t.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = Pt,
                t && !this.isSimulated && t.stopImmediatePropagation(),
                this.stopPropagation()
            }
        },
        T.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(t) {
                var e = t.button;
                return null == t.which && Tt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && kt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
            }
        }, T.event.addProp),
        T.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(t, e) {
            T.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var n, i = t.relatedTarget, o = t.handleObj;
                    return i && (i === this || T.contains(this, i)) || (t.type = o.origType,
                    n = o.handler.apply(this, arguments),
                    t.type = e),
                    n
                }
            }
        }),
        T.fn.extend({
            on: function(t, e, n, i) {
                return Ct(this, t, e, n, i)
            },
            one: function(t, e, n, i) {
                return Ct(this, t, e, n, i, 1)
            },
            off: function(t, e, n) {
                var i, o;
                if (t && t.preventDefault && t.handleObj)
                    return i = t.handleObj,
                    T(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                    this;
                if ("object" == typeof t) {
                    for (o in t)
                        this.off(o, e, t[o]);
                    return this
                }
                return !1 !== e && "function" != typeof e || (n = e,
                e = void 0),
                !1 === n && (n = St),
                this.each(function() {
                    T.event.remove(this, t, n, e)
                })
            }
        });
        var zt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
          , Et = /<script|<style|<link/i
          , At = /checked\s*(?:[^=]|=\s*.checked.)/i
          , It = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        function Ot(t, e) {
            return z(t, "table") && z(11 !== e.nodeType ? e : e.firstChild, "tr") && T(t).children("tbody")[0] || t
        }
        function Bt(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type,
            t
        }
        function Nt(t) {
            return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"),
            t
        }
        function Dt(t, e) {
            var n, i, o, r, s, a, l, h;
            if (1 === e.nodeType) {
                if (K.hasData(t) && (r = K.access(t),
                s = K.set(e, r),
                h = r.events))
                    for (o in delete s.handle,
                    s.events = {},
                    h)
                        for (n = 0,
                        i = h[o].length; n < i; n++)
                            T.event.add(e, o, h[o][n]);
                Q.hasData(t) && (a = Q.access(t),
                l = T.extend({}, a),
                Q.set(e, l))
            }
        }
        function Ft(t, e, n, i) {
            e = h.apply([], e);
            var o, r, s, a, l, u, c = 0, f = t.length, d = f - 1, p = e[0], m = _(p);
            if (m || f > 1 && "string" == typeof p && !v.checkClone && At.test(p))
                return t.each(function(o) {
                    var r = t.eq(o);
                    m && (e[0] = p.call(this, o, r.html())),
                    Ft(r, e, n, i)
                });
            if (f && (r = (o = bt(e, t[0].ownerDocument, !1, t, i)).firstChild,
            1 === o.childNodes.length && (o = r),
            r || i)) {
                for (a = (s = T.map(gt(o, "script"), Bt)).length; c < f; c++)
                    l = o,
                    c !== d && (l = T.clone(l, !0, !0),
                    a && T.merge(s, gt(l, "script"))),
                    n.call(t[c], l, c);
                if (a)
                    for (u = s[s.length - 1].ownerDocument,
                    T.map(s, Nt),
                    c = 0; c < a; c++)
                        l = s[c],
                        pt.test(l.type || "") && !K.access(l, "globalEval") && T.contains(u, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? T._evalUrl && T._evalUrl(l.src) : b(l.textContent.replace(It, ""), u, l))
            }
            return t
        }
        function Zt(t, e, n) {
            for (var i, o = e ? T.filter(e, t) : t, r = 0; null != (i = o[r]); r++)
                n || 1 !== i.nodeType || T.cleanData(gt(i)),
                i.parentNode && (n && T.contains(i.ownerDocument, i) && vt(gt(i, "script")),
                i.parentNode.removeChild(i));
            return t
        }
        T.extend({
            htmlPrefilter: function(t) {
                return t.replace(zt, "<$1></$2>")
            },
            clone: function(t, e, n) {
                var i, o, r, s, a, l, h, u = t.cloneNode(!0), c = T.contains(t.ownerDocument, t);
                if (!(v.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || T.isXMLDoc(t)))
                    for (s = gt(u),
                    i = 0,
                    o = (r = gt(t)).length; i < o; i++)
                        a = r[i],
                        l = s[i],
                        h = void 0,
                        "input" === (h = l.nodeName.toLowerCase()) && ft.test(a.type) ? l.checked = a.checked : "input" !== h && "textarea" !== h || (l.defaultValue = a.defaultValue);
                if (e)
                    if (n)
                        for (r = r || gt(t),
                        s = s || gt(u),
                        i = 0,
                        o = r.length; i < o; i++)
                            Dt(r[i], s[i]);
                    else
                        Dt(t, u);
                return (s = gt(u, "script")).length > 0 && vt(s, !c && gt(t, "script")),
                u
            },
            cleanData: function(t) {
                for (var e, n, i, o = T.event.special, r = 0; void 0 !== (n = t[r]); r++)
                    if (X(n)) {
                        if (e = n[K.expando]) {
                            if (e.events)
                                for (i in e.events)
                                    o[i] ? T.event.remove(n, i) : T.removeEvent(n, i, e.handle);
                            n[K.expando] = void 0
                        }
                        n[Q.expando] && (n[Q.expando] = void 0)
                    }
            }
        }),
        T.fn.extend({
            detach: function(t) {
                return Zt(this, t, !0)
            },
            remove: function(t) {
                return Zt(this, t)
            },
            text: function(t) {
                return U(this, function(t) {
                    return void 0 === t ? T.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                    })
                }, null, t, arguments.length)
            },
            append: function() {
                return Ft(this, arguments, function(t) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ot(this, t).appendChild(t)
                })
            },
            prepend: function() {
                return Ft(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = Ot(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() {
                return Ft(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function() {
                return Ft(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++)
                    1 === t.nodeType && (T.cleanData(gt(t, !1)),
                    t.textContent = "");
                return this
            },
            clone: function(t, e) {
                return t = null != t && t,
                e = null == e ? t : e,
                this.map(function() {
                    return T.clone(this, t, e)
                })
            },
            html: function(t) {
                return U(this, function(t) {
                    var e = this[0] || {}
                      , n = 0
                      , i = this.length;
                    if (void 0 === t && 1 === e.nodeType)
                        return e.innerHTML;
                    if ("string" == typeof t && !Et.test(t) && !mt[(dt.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = T.htmlPrefilter(t);
                        try {
                            for (; n < i; n++)
                                1 === (e = this[n] || {}).nodeType && (T.cleanData(gt(e, !1)),
                                e.innerHTML = t);
                            e = 0
                        } catch (t) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = [];
                return Ft(this, arguments, function(e) {
                    var n = this.parentNode;
                    T.inArray(this, t) < 0 && (T.cleanData(gt(this)),
                    n && n.replaceChild(e, this))
                }, t)
            }
        }),
        T.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, e) {
            T.fn[t] = function(t) {
                for (var n, i = [], o = T(t), r = o.length - 1, s = 0; s <= r; s++)
                    n = s === r ? this : this.clone(!0),
                    T(o[s])[e](n),
                    u.apply(i, n.get());
                return this.pushStack(i)
            }
        });
        var Rt = new RegExp("^(" + it + ")(?!px)[a-z%]+$","i")
          , jt = function(t) {
            var e = t.ownerDocument.defaultView;
            return e && e.opener || (e = n),
            e.getComputedStyle(t)
        }
          , Wt = new RegExp(rt.join("|"),"i");
        function Ht(t, e, n) {
            var i, o, r, s, a = t.style;
            return (n = n || jt(t)) && ("" !== (s = n.getPropertyValue(e) || n[e]) || T.contains(t.ownerDocument, t) || (s = T.style(t, e)),
            !v.pixelBoxStyles() && Rt.test(s) && Wt.test(e) && (i = a.width,
            o = a.minWidth,
            r = a.maxWidth,
            a.minWidth = a.maxWidth = a.width = s,
            s = n.width,
            a.width = i,
            a.minWidth = o,
            a.maxWidth = r)),
            void 0 !== s ? s + "" : s
        }
        function qt(t, e) {
            return {
                get: function() {
                    if (!t())
                        return (this.get = e).apply(this, arguments);
                    delete this.get
                }
            }
        }
        !function() {
            function t() {
                if (u) {
                    h.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                    u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                    wt.appendChild(h).appendChild(u);
                    var t = n.getComputedStyle(u);
                    i = "1%" !== t.top,
                    l = 12 === e(t.marginLeft),
                    u.style.right = "60%",
                    a = 36 === e(t.right),
                    o = 36 === e(t.width),
                    u.style.position = "absolute",
                    r = 36 === u.offsetWidth || "absolute",
                    wt.removeChild(h),
                    u = null
                }
            }
            function e(t) {
                return Math.round(parseFloat(t))
            }
            var i, o, r, a, l, h = s.createElement("div"), u = s.createElement("div");
            u.style && (u.style.backgroundClip = "content-box",
            u.cloneNode(!0).style.backgroundClip = "",
            v.clearCloneStyle = "content-box" === u.style.backgroundClip,
            T.extend(v, {
                boxSizingReliable: function() {
                    return t(),
                    o
                },
                pixelBoxStyles: function() {
                    return t(),
                    a
                },
                pixelPosition: function() {
                    return t(),
                    i
                },
                reliableMarginLeft: function() {
                    return t(),
                    l
                },
                scrollboxSize: function() {
                    return t(),
                    r
                }
            }))
        }();
        var Ut = /^(none|table(?!-c[ea]).+)/
          , Vt = /^--/
          , Gt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }
          , $t = {
            letterSpacing: "0",
            fontWeight: "400"
        }
          , Yt = ["Webkit", "Moz", "ms"]
          , Xt = s.createElement("div").style;
        function Jt(t) {
            var e = T.cssProps[t];
            return e || (e = T.cssProps[t] = function(t) {
                if (t in Xt)
                    return t;
                for (var e = t[0].toUpperCase() + t.slice(1), n = Yt.length; n--; )
                    if ((t = Yt[n] + e)in Xt)
                        return t
            }(t) || t),
            e
        }
        function Kt(t, e, n) {
            var i = ot.exec(e);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
        }
        function Qt(t, e, n, i, o, r) {
            var s = "width" === e ? 1 : 0
              , a = 0
              , l = 0;
            if (n === (i ? "border" : "content"))
                return 0;
            for (; s < 4; s += 2)
                "margin" === n && (l += T.css(t, n + rt[s], !0, o)),
                i ? ("content" === n && (l -= T.css(t, "padding" + rt[s], !0, o)),
                "margin" !== n && (l -= T.css(t, "border" + rt[s] + "Width", !0, o))) : (l += T.css(t, "padding" + rt[s], !0, o),
                "padding" !== n ? l += T.css(t, "border" + rt[s] + "Width", !0, o) : a += T.css(t, "border" + rt[s] + "Width", !0, o));
            return !i && r >= 0 && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - r - l - a - .5))),
            l
        }
        function te(t, e, n) {
            var i = jt(t)
              , o = Ht(t, e, i)
              , r = "border-box" === T.css(t, "boxSizing", !1, i)
              , s = r;
            if (Rt.test(o)) {
                if (!n)
                    return o;
                o = "auto"
            }
            return s = s && (v.boxSizingReliable() || o === t.style[e]),
            ("auto" === o || !parseFloat(o) && "inline" === T.css(t, "display", !1, i)) && (o = t["offset" + e[0].toUpperCase() + e.slice(1)],
            s = !0),
            (o = parseFloat(o) || 0) + Qt(t, e, n || (r ? "border" : "content"), s, i, o) + "px"
        }
        function ee(t, e, n, i, o) {
            return new ee.prototype.init(t,e,n,i,o)
        }
        T.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var n = Ht(t, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function(t, e, n, i) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var o, r, s, a = Y(e), l = Vt.test(e), h = t.style;
                    if (l || (e = Jt(a)),
                    s = T.cssHooks[e] || T.cssHooks[a],
                    void 0 === n)
                        return s && "get"in s && void 0 !== (o = s.get(t, !1, i)) ? o : h[e];
                    "string" === (r = typeof n) && (o = ot.exec(n)) && o[1] && (n = lt(t, e, o),
                    r = "number"),
                    null != n && n == n && ("number" === r && (n += o && o[3] || (T.cssNumber[a] ? "" : "px")),
                    v.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (h[e] = "inherit"),
                    s && "set"in s && void 0 === (n = s.set(t, n, i)) || (l ? h.setProperty(e, n) : h[e] = n))
                }
            },
            css: function(t, e, n, i) {
                var o, r, s, a = Y(e);
                return Vt.test(e) || (e = Jt(a)),
                (s = T.cssHooks[e] || T.cssHooks[a]) && "get"in s && (o = s.get(t, !0, n)),
                void 0 === o && (o = Ht(t, e, i)),
                "normal" === o && e in $t && (o = $t[e]),
                "" === n || n ? (r = parseFloat(o),
                !0 === n || isFinite(r) ? r || 0 : o) : o
            }
        }),
        T.each(["height", "width"], function(t, e) {
            T.cssHooks[e] = {
                get: function(t, n, i) {
                    if (n)
                        return !Ut.test(T.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? te(t, e, i) : at(t, Gt, function() {
                            return te(t, e, i)
                        })
                },
                set: function(t, n, i) {
                    var o, r = jt(t), s = "border-box" === T.css(t, "boxSizing", !1, r), a = i && Qt(t, e, i, s, r);
                    return s && v.scrollboxSize() === r.position && (a -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(r[e]) - Qt(t, e, "border", !1, r) - .5)),
                    a && (o = ot.exec(n)) && "px" !== (o[3] || "px") && (t.style[e] = n,
                    n = T.css(t, e)),
                    Kt(0, n, a)
                }
            }
        }),
        T.cssHooks.marginLeft = qt(v.reliableMarginLeft, function(t, e) {
            if (e)
                return (parseFloat(Ht(t, "marginLeft")) || t.getBoundingClientRect().left - at(t, {
                    marginLeft: 0
                }, function() {
                    return t.getBoundingClientRect().left
                })) + "px"
        }),
        T.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            T.cssHooks[t + e] = {
                expand: function(n) {
                    for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++)
                        o[t + rt[i] + e] = r[i] || r[i - 2] || r[0];
                    return o
                }
            },
            "margin" !== t && (T.cssHooks[t + e].set = Kt)
        }),
        T.fn.extend({
            css: function(t, e) {
                return U(this, function(t, e, n) {
                    var i, o, r = {}, s = 0;
                    if (Array.isArray(e)) {
                        for (i = jt(t),
                        o = e.length; s < o; s++)
                            r[e[s]] = T.css(t, e[s], !1, i);
                        return r
                    }
                    return void 0 !== n ? T.style(t, e, n) : T.css(t, e)
                }, t, e, arguments.length > 1)
            }
        }),
        T.Tween = ee,
        ee.prototype = {
            constructor: ee,
            init: function(t, e, n, i, o, r) {
                this.elem = t,
                this.prop = n,
                this.easing = o || T.easing._default,
                this.options = e,
                this.start = this.now = this.cur(),
                this.end = i,
                this.unit = r || (T.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var t = ee.propHooks[this.prop];
                return t && t.get ? t.get(this) : ee.propHooks._default.get(this)
            },
            run: function(t) {
                var e, n = ee.propHooks[this.prop];
                return this.options.duration ? this.pos = e = T.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t,
                this.now = (this.end - this.start) * e + this.start,
                this.options.step && this.options.step.call(this.elem, this.now, this),
                n && n.set ? n.set(this) : ee.propHooks._default.set(this),
                this
            }
        },
        ee.prototype.init.prototype = ee.prototype,
        ee.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = T.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
                },
                set: function(t) {
                    T.fx.step[t.prop] ? T.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[T.cssProps[t.prop]] && !T.cssHooks[t.prop] ? t.elem[t.prop] = t.now : T.style(t.elem, t.prop, t.now + t.unit)
                }
            }
        },
        ee.propHooks.scrollTop = ee.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        },
        T.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            },
            _default: "swing"
        },
        T.fx = ee.prototype.init,
        T.fx.step = {};
        var ne, ie, oe = /^(?:toggle|show|hide)$/, re = /queueHooks$/;
        function se() {
            ie && (!1 === s.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(se) : n.setTimeout(se, T.fx.interval),
            T.fx.tick())
        }
        function ae() {
            return n.setTimeout(function() {
                ne = void 0
            }),
            ne = Date.now()
        }
        function le(t, e) {
            var n, i = 0, o = {
                height: t
            };
            for (e = e ? 1 : 0; i < 4; i += 2 - e)
                o["margin" + (n = rt[i])] = o["padding" + n] = t;
            return e && (o.opacity = o.width = t),
            o
        }
        function he(t, e, n) {
            for (var i, o = (ue.tweeners[e] || []).concat(ue.tweeners["*"]), r = 0, s = o.length; r < s; r++)
                if (i = o[r].call(n, e, t))
                    return i
        }
        function ue(t, e, n) {
            var i, o, r = 0, s = ue.prefilters.length, a = T.Deferred().always(function() {
                delete l.elem
            }), l = function() {
                if (o)
                    return !1;
                for (var e = ne || ae(), n = Math.max(0, h.startTime + h.duration - e), i = 1 - (n / h.duration || 0), r = 0, s = h.tweens.length; r < s; r++)
                    h.tweens[r].run(i);
                return a.notifyWith(t, [h, i, n]),
                i < 1 && s ? n : (s || a.notifyWith(t, [h, 1, 0]),
                a.resolveWith(t, [h]),
                !1)
            }, h = a.promise({
                elem: t,
                props: T.extend({}, e),
                opts: T.extend(!0, {
                    specialEasing: {},
                    easing: T.easing._default
                }, n),
                originalProperties: e,
                originalOptions: n,
                startTime: ne || ae(),
                duration: n.duration,
                tweens: [],
                createTween: function(e, n) {
                    var i = T.Tween(t, h.opts, e, n, h.opts.specialEasing[e] || h.opts.easing);
                    return h.tweens.push(i),
                    i
                },
                stop: function(e) {
                    var n = 0
                      , i = e ? h.tweens.length : 0;
                    if (o)
                        return this;
                    for (o = !0; n < i; n++)
                        h.tweens[n].run(1);
                    return e ? (a.notifyWith(t, [h, 1, 0]),
                    a.resolveWith(t, [h, e])) : a.rejectWith(t, [h, e]),
                    this
                }
            }), u = h.props;
            for (!function(t, e) {
                var n, i, o, r, s;
                for (n in t)
                    if (o = e[i = Y(n)],
                    r = t[n],
                    Array.isArray(r) && (o = r[1],
                    r = t[n] = r[0]),
                    n !== i && (t[i] = r,
                    delete t[n]),
                    (s = T.cssHooks[i]) && "expand"in s)
                        for (n in r = s.expand(r),
                        delete t[i],
                        r)
                            n in t || (t[n] = r[n],
                            e[n] = o);
                    else
                        e[i] = o
            }(u, h.opts.specialEasing); r < s; r++)
                if (i = ue.prefilters[r].call(h, t, u, h.opts))
                    return _(i.stop) && (T._queueHooks(h.elem, h.opts.queue).stop = i.stop.bind(i)),
                    i;
            return T.map(u, he, h),
            _(h.opts.start) && h.opts.start.call(t, h),
            h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always),
            T.fx.timer(T.extend(l, {
                elem: t,
                anim: h,
                queue: h.opts.queue
            })),
            h
        }
        T.Animation = T.extend(ue, {
            tweeners: {
                "*": [function(t, e) {
                    var n = this.createTween(t, e);
                    return lt(n.elem, t, ot.exec(e), n),
                    n
                }
                ]
            },
            tweener: function(t, e) {
                _(t) ? (e = t,
                t = ["*"]) : t = t.match(F);
                for (var n, i = 0, o = t.length; i < o; i++)
                    n = t[i],
                    ue.tweeners[n] = ue.tweeners[n] || [],
                    ue.tweeners[n].unshift(e)
            },
            prefilters: [function(t, e, n) {
                var i, o, r, s, a, l, h, u, c = "width"in e || "height"in e, f = this, d = {}, p = t.style, m = t.nodeType && st(t), g = K.get(t, "fxshow");
                for (i in n.queue || (null == (s = T._queueHooks(t, "fx")).unqueued && (s.unqueued = 0,
                a = s.empty.fire,
                s.empty.fire = function() {
                    s.unqueued || a()
                }
                ),
                s.unqueued++,
                f.always(function() {
                    f.always(function() {
                        s.unqueued--,
                        T.queue(t, "fx").length || s.empty.fire()
                    })
                })),
                e)
                    if (o = e[i],
                    oe.test(o)) {
                        if (delete e[i],
                        r = r || "toggle" === o,
                        o === (m ? "hide" : "show")) {
                            if ("show" !== o || !g || void 0 === g[i])
                                continue;
                            m = !0
                        }
                        d[i] = g && g[i] || T.style(t, i)
                    }
                if ((l = !T.isEmptyObject(e)) || !T.isEmptyObject(d))
                    for (i in c && 1 === t.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY],
                    null == (h = g && g.display) && (h = K.get(t, "display")),
                    "none" === (u = T.css(t, "display")) && (h ? u = h : (ct([t], !0),
                    h = t.style.display || h,
                    u = T.css(t, "display"),
                    ct([t]))),
                    ("inline" === u || "inline-block" === u && null != h) && "none" === T.css(t, "float") && (l || (f.done(function() {
                        p.display = h
                    }),
                    null == h && (u = p.display,
                    h = "none" === u ? "" : u)),
                    p.display = "inline-block")),
                    n.overflow && (p.overflow = "hidden",
                    f.always(function() {
                        p.overflow = n.overflow[0],
                        p.overflowX = n.overflow[1],
                        p.overflowY = n.overflow[2]
                    })),
                    l = !1,
                    d)
                        l || (g ? "hidden"in g && (m = g.hidden) : g = K.access(t, "fxshow", {
                            display: h
                        }),
                        r && (g.hidden = !m),
                        m && ct([t], !0),
                        f.done(function() {
                            for (i in m || ct([t]),
                            K.remove(t, "fxshow"),
                            d)
                                T.style(t, i, d[i])
                        })),
                        l = he(m ? g[i] : 0, i, f),
                        i in g || (g[i] = l.start,
                        m && (l.end = l.start,
                        l.start = 0))
            }
            ],
            prefilter: function(t, e) {
                e ? ue.prefilters.unshift(t) : ue.prefilters.push(t)
            }
        }),
        T.speed = function(t, e, n) {
            var i = t && "object" == typeof t ? T.extend({}, t) : {
                complete: n || !n && e || _(t) && t,
                duration: t,
                easing: n && e || e && !_(e) && e
            };
            return T.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in T.fx.speeds ? i.duration = T.fx.speeds[i.duration] : i.duration = T.fx.speeds._default),
            null != i.queue && !0 !== i.queue || (i.queue = "fx"),
            i.old = i.complete,
            i.complete = function() {
                _(i.old) && i.old.call(this),
                i.queue && T.dequeue(this, i.queue)
            }
            ,
            i
        }
        ,
        T.fn.extend({
            fadeTo: function(t, e, n, i) {
                return this.filter(st).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, n, i)
            },
            animate: function(t, e, n, i) {
                var o = T.isEmptyObject(t)
                  , r = T.speed(e, n, i)
                  , s = function() {
                    var e = ue(this, T.extend({}, t), r);
                    (o || K.get(this, "finish")) && e.stop(!0)
                };
                return s.finish = s,
                o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
            },
            stop: function(t, e, n) {
                var i = function(t) {
                    var e = t.stop;
                    delete t.stop,
                    e(n)
                };
                return "string" != typeof t && (n = e,
                e = t,
                t = void 0),
                e && !1 !== t && this.queue(t || "fx", []),
                this.each(function() {
                    var e = !0
                      , o = null != t && t + "queueHooks"
                      , r = T.timers
                      , s = K.get(this);
                    if (o)
                        s[o] && s[o].stop && i(s[o]);
                    else
                        for (o in s)
                            s[o] && s[o].stop && re.test(o) && i(s[o]);
                    for (o = r.length; o--; )
                        r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(n),
                        e = !1,
                        r.splice(o, 1));
                    !e && n || T.dequeue(this, t)
                })
            },
            finish: function(t) {
                return !1 !== t && (t = t || "fx"),
                this.each(function() {
                    var e, n = K.get(this), i = n[t + "queue"], o = n[t + "queueHooks"], r = T.timers, s = i ? i.length : 0;
                    for (n.finish = !0,
                    T.queue(this, t, []),
                    o && o.stop && o.stop.call(this, !0),
                    e = r.length; e--; )
                        r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0),
                        r.splice(e, 1));
                    for (e = 0; e < s; e++)
                        i[e] && i[e].finish && i[e].finish.call(this);
                    delete n.finish
                })
            }
        }),
        T.each(["toggle", "show", "hide"], function(t, e) {
            var n = T.fn[e];
            T.fn[e] = function(t, i, o) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(le(e, !0), t, i, o)
            }
        }),
        T.each({
            slideDown: le("show"),
            slideUp: le("hide"),
            slideToggle: le("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            T.fn[t] = function(t, n, i) {
                return this.animate(e, t, n, i)
            }
        }),
        T.timers = [],
        T.fx.tick = function() {
            var t, e = 0, n = T.timers;
            for (ne = Date.now(); e < n.length; e++)
                (t = n[e])() || n[e] !== t || n.splice(e--, 1);
            n.length || T.fx.stop(),
            ne = void 0
        }
        ,
        T.fx.timer = function(t) {
            T.timers.push(t),
            T.fx.start()
        }
        ,
        T.fx.interval = 13,
        T.fx.start = function() {
            ie || (ie = !0,
            se())
        }
        ,
        T.fx.stop = function() {
            ie = null
        }
        ,
        T.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        T.fn.delay = function(t, e) {
            return t = T.fx && T.fx.speeds[t] || t,
            e = e || "fx",
            this.queue(e, function(e, i) {
                var o = n.setTimeout(e, t);
                i.stop = function() {
                    n.clearTimeout(o)
                }
            })
        }
        ,
        function() {
            var t = s.createElement("input")
              , e = s.createElement("select").appendChild(s.createElement("option"));
            t.type = "checkbox",
            v.checkOn = "" !== t.value,
            v.optSelected = e.selected,
            (t = s.createElement("input")).value = "t",
            t.type = "radio",
            v.radioValue = "t" === t.value
        }();
        var ce, fe = T.expr.attrHandle;
        T.fn.extend({
            attr: function(t, e) {
                return U(this, T.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    T.removeAttr(this, t)
                })
            }
        }),
        T.extend({
            attr: function(t, e, n) {
                var i, o, r = t.nodeType;
                if (3 !== r && 8 !== r && 2 !== r)
                    return void 0 === t.getAttribute ? T.prop(t, e, n) : (1 === r && T.isXMLDoc(t) || (o = T.attrHooks[e.toLowerCase()] || (T.expr.match.bool.test(e) ? ce : void 0)),
                    void 0 !== n ? null === n ? void T.removeAttr(t, e) : o && "set"in o && void 0 !== (i = o.set(t, n, e)) ? i : (t.setAttribute(e, n + ""),
                    n) : o && "get"in o && null !== (i = o.get(t, e)) ? i : null == (i = T.find.attr(t, e)) ? void 0 : i)
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!v.radioValue && "radio" === e && z(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e),
                            n && (t.value = n),
                            e
                        }
                    }
                }
            },
            removeAttr: function(t, e) {
                var n, i = 0, o = e && e.match(F);
                if (o && 1 === t.nodeType)
                    for (; n = o[i++]; )
                        t.removeAttribute(n)
            }
        }),
        ce = {
            set: function(t, e, n) {
                return !1 === e ? T.removeAttr(t, n) : t.setAttribute(n, n),
                n
            }
        },
        T.each(T.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var n = fe[e] || T.find.attr;
            fe[e] = function(t, e, i) {
                var o, r, s = e.toLowerCase();
                return i || (r = fe[s],
                fe[s] = o,
                o = null != n(t, e, i) ? s : null,
                fe[s] = r),
                o
            }
        });
        var de = /^(?:input|select|textarea|button)$/i
          , pe = /^(?:a|area)$/i;
        function me(t) {
            return (t.match(F) || []).join(" ")
        }
        function ge(t) {
            return t.getAttribute && t.getAttribute("class") || ""
        }
        function ve(t) {
            return Array.isArray(t) ? t : "string" == typeof t && t.match(F) || []
        }
        T.fn.extend({
            prop: function(t, e) {
                return U(this, T.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return this.each(function() {
                    delete this[T.propFix[t] || t]
                })
            }
        }),
        T.extend({
            prop: function(t, e, n) {
                var i, o, r = t.nodeType;
                if (3 !== r && 8 !== r && 2 !== r)
                    return 1 === r && T.isXMLDoc(t) || (e = T.propFix[e] || e,
                    o = T.propHooks[e]),
                    void 0 !== n ? o && "set"in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get"in o && null !== (i = o.get(t, e)) ? i : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var e = T.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : de.test(t.nodeName) || pe.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }),
        v.optSelected || (T.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex,
                null
            },
            set: function(t) {
                var e = t.parentNode;
                e && (e.selectedIndex,
                e.parentNode && e.parentNode.selectedIndex)
            }
        }),
        T.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            T.propFix[this.toLowerCase()] = this
        }),
        T.fn.extend({
            addClass: function(t) {
                var e, n, i, o, r, s, a, l = 0;
                if (_(t))
                    return this.each(function(e) {
                        T(this).addClass(t.call(this, e, ge(this)))
                    });
                if ((e = ve(t)).length)
                    for (; n = this[l++]; )
                        if (o = ge(n),
                        i = 1 === n.nodeType && " " + me(o) + " ") {
                            for (s = 0; r = e[s++]; )
                                i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                            o !== (a = me(i)) && n.setAttribute("class", a)
                        }
                return this
            },
            removeClass: function(t) {
                var e, n, i, o, r, s, a, l = 0;
                if (_(t))
                    return this.each(function(e) {
                        T(this).removeClass(t.call(this, e, ge(this)))
                    });
                if (!arguments.length)
                    return this.attr("class", "");
                if ((e = ve(t)).length)
                    for (; n = this[l++]; )
                        if (o = ge(n),
                        i = 1 === n.nodeType && " " + me(o) + " ") {
                            for (s = 0; r = e[s++]; )
                                for (; i.indexOf(" " + r + " ") > -1; )
                                    i = i.replace(" " + r + " ", " ");
                            o !== (a = me(i)) && n.setAttribute("class", a)
                        }
                return this
            },
            toggleClass: function(t, e) {
                var n = typeof t
                  , i = "string" === n || Array.isArray(t);
                return "boolean" == typeof e && i ? e ? this.addClass(t) : this.removeClass(t) : _(t) ? this.each(function(n) {
                    T(this).toggleClass(t.call(this, n, ge(this), e), e)
                }) : this.each(function() {
                    var e, o, r, s;
                    if (i)
                        for (o = 0,
                        r = T(this),
                        s = ve(t); e = s[o++]; )
                            r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                    else
                        void 0 !== t && "boolean" !== n || ((e = ge(this)) && K.set(this, "__className__", e),
                        this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : K.get(this, "__className__") || ""))
                })
            },
            hasClass: function(t) {
                var e, n, i = 0;
                for (e = " " + t + " "; n = this[i++]; )
                    if (1 === n.nodeType && (" " + me(ge(n)) + " ").indexOf(e) > -1)
                        return !0;
                return !1
            }
        });
        var _e = /\r/g;
        T.fn.extend({
            val: function(t) {
                var e, n, i, o = this[0];
                return arguments.length ? (i = _(t),
                this.each(function(n) {
                    var o;
                    1 === this.nodeType && (null == (o = i ? t.call(this, n, T(this).val()) : t) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = T.map(o, function(t) {
                        return null == t ? "" : t + ""
                    })),
                    (e = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) && "set"in e && void 0 !== e.set(this, o, "value") || (this.value = o))
                })) : o ? (e = T.valHooks[o.type] || T.valHooks[o.nodeName.toLowerCase()]) && "get"in e && void 0 !== (n = e.get(o, "value")) ? n : "string" == typeof (n = o.value) ? n.replace(_e, "") : null == n ? "" : n : void 0
            }
        }),
        T.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = T.find.attr(t, "value");
                        return null != e ? e : me(T.text(t))
                    }
                },
                select: {
                    get: function(t) {
                        var e, n, i, o = t.options, r = t.selectedIndex, s = "select-one" === t.type, a = s ? null : [], l = s ? r + 1 : o.length;
                        for (i = r < 0 ? l : s ? r : 0; i < l; i++)
                            if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !z(n.parentNode, "optgroup"))) {
                                if (e = T(n).val(),
                                s)
                                    return e;
                                a.push(e)
                            }
                        return a
                    },
                    set: function(t, e) {
                        for (var n, i, o = t.options, r = T.makeArray(e), s = o.length; s--; )
                            ((i = o[s]).selected = T.inArray(T.valHooks.option.get(i), r) > -1) && (n = !0);
                        return n || (t.selectedIndex = -1),
                        r
                    }
                }
            }
        }),
        T.each(["radio", "checkbox"], function() {
            T.valHooks[this] = {
                set: function(t, e) {
                    if (Array.isArray(e))
                        return t.checked = T.inArray(T(t).val(), e) > -1
                }
            },
            v.checkOn || (T.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            }
            )
        }),
        v.focusin = "onfocusin"in n;
        var ye = /^(?:focusinfocus|focusoutblur)$/
          , xe = function(t) {
            t.stopPropagation()
        };
        T.extend(T.event, {
            trigger: function(t, e, i, o) {
                var r, a, l, h, u, c, f, d, m = [i || s], g = p.call(t, "type") ? t.type : t, v = p.call(t, "namespace") ? t.namespace.split(".") : [];
                if (a = d = l = i = i || s,
                3 !== i.nodeType && 8 !== i.nodeType && !ye.test(g + T.event.triggered) && (g.indexOf(".") > -1 && (v = g.split("."),
                g = v.shift(),
                v.sort()),
                u = g.indexOf(":") < 0 && "on" + g,
                (t = t[T.expando] ? t : new T.Event(g,"object" == typeof t && t)).isTrigger = o ? 2 : 3,
                t.namespace = v.join("."),
                t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                t.result = void 0,
                t.target || (t.target = i),
                e = null == e ? [t] : T.makeArray(e, [t]),
                f = T.event.special[g] || {},
                o || !f.trigger || !1 !== f.trigger.apply(i, e))) {
                    if (!o && !f.noBubble && !y(i)) {
                        for (h = f.delegateType || g,
                        ye.test(h + g) || (a = a.parentNode); a; a = a.parentNode)
                            m.push(a),
                            l = a;
                        l === (i.ownerDocument || s) && m.push(l.defaultView || l.parentWindow || n)
                    }
                    for (r = 0; (a = m[r++]) && !t.isPropagationStopped(); )
                        d = a,
                        t.type = r > 1 ? h : f.bindType || g,
                        (c = (K.get(a, "events") || {})[t.type] && K.get(a, "handle")) && c.apply(a, e),
                        (c = u && a[u]) && c.apply && X(a) && (t.result = c.apply(a, e),
                        !1 === t.result && t.preventDefault());
                    return t.type = g,
                    o || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(m.pop(), e) || !X(i) || u && _(i[g]) && !y(i) && ((l = i[u]) && (i[u] = null),
                    T.event.triggered = g,
                    t.isPropagationStopped() && d.addEventListener(g, xe),
                    i[g](),
                    t.isPropagationStopped() && d.removeEventListener(g, xe),
                    T.event.triggered = void 0,
                    l && (i[u] = l)),
                    t.result
                }
            },
            simulate: function(t, e, n) {
                var i = T.extend(new T.Event, n, {
                    type: t,
                    isSimulated: !0
                });
                T.event.trigger(i, null, e)
            }
        }),
        T.fn.extend({
            trigger: function(t, e) {
                return this.each(function() {
                    T.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                var n = this[0];
                if (n)
                    return T.event.trigger(t, e, n, !0)
            }
        }),
        v.focusin || T.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var n = function(t) {
                T.event.simulate(e, t.target, T.event.fix(t))
            };
            T.event.special[e] = {
                setup: function() {
                    var i = this.ownerDocument || this
                      , o = K.access(i, e);
                    o || i.addEventListener(t, n, !0),
                    K.access(i, e, (o || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this
                      , o = K.access(i, e) - 1;
                    o ? K.access(i, e, o) : (i.removeEventListener(t, n, !0),
                    K.remove(i, e))
                }
            }
        });
        var be = n.location
          , we = Date.now()
          , Te = /\?/;
        T.parseXML = function(t) {
            var e;
            if (!t || "string" != typeof t)
                return null;
            try {
                e = (new n.DOMParser).parseFromString(t, "text/xml")
            } catch (t) {
                e = void 0
            }
            return e && !e.getElementsByTagName("parsererror").length || T.error("Invalid XML: " + t),
            e
        }
        ;
        var ke = /\[\]$/
          , Le = /\r?\n/g
          , Pe = /^(?:submit|button|image|reset|file)$/i
          , Se = /^(?:input|select|textarea|keygen)/i;
        function Me(t, e, n, i) {
            var o;
            if (Array.isArray(e))
                T.each(e, function(e, o) {
                    n || ke.test(t) ? i(t, o) : Me(t + "[" + ("object" == typeof o && null != o ? e : "") + "]", o, n, i)
                });
            else if (n || "object" !== w(e))
                i(t, e);
            else
                for (o in e)
                    Me(t + "[" + o + "]", e[o], n, i)
        }
        T.param = function(t, e) {
            var n, i = [], o = function(t, e) {
                var n = _(e) ? e() : e;
                i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
            };
            if (Array.isArray(t) || t.jquery && !T.isPlainObject(t))
                T.each(t, function() {
                    o(this.name, this.value)
                });
            else
                for (n in t)
                    Me(n, t[n], e, o);
            return i.join("&")
        }
        ,
        T.fn.extend({
            serialize: function() {
                return T.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = T.prop(this, "elements");
                    return t ? T.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !T(this).is(":disabled") && Se.test(this.nodeName) && !Pe.test(t) && (this.checked || !ft.test(t))
                }).map(function(t, e) {
                    var n = T(this).val();
                    return null == n ? null : Array.isArray(n) ? T.map(n, function(t) {
                        return {
                            name: e.name,
                            value: t.replace(Le, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: n.replace(Le, "\r\n")
                    }
                }).get()
            }
        });
        var Ce = /%20/g
          , ze = /#.*$/
          , Ee = /([?&])_=[^&]*/
          , Ae = /^(.*?):[ \t]*([^\r\n]*)$/gm
          , Ie = /^(?:GET|HEAD)$/
          , Oe = /^\/\//
          , Be = {}
          , Ne = {}
          , De = "*/".concat("*")
          , Fe = s.createElement("a");
        function Ze(t) {
            return function(e, n) {
                "string" != typeof e && (n = e,
                e = "*");
                var i, o = 0, r = e.toLowerCase().match(F) || [];
                if (_(n))
                    for (; i = r[o++]; )
                        "+" === i[0] ? (i = i.slice(1) || "*",
                        (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
            }
        }
        function Re(t, e, n, i) {
            var o = {}
              , r = t === Ne;
            function s(a) {
                var l;
                return o[a] = !0,
                T.each(t[a] || [], function(t, a) {
                    var h = a(e, n, i);
                    return "string" != typeof h || r || o[h] ? r ? !(l = h) : void 0 : (e.dataTypes.unshift(h),
                    s(h),
                    !1)
                }),
                l
            }
            return s(e.dataTypes[0]) || !o["*"] && s("*")
        }
        function je(t, e) {
            var n, i, o = T.ajaxSettings.flatOptions || {};
            for (n in e)
                void 0 !== e[n] && ((o[n] ? t : i || (i = {}))[n] = e[n]);
            return i && T.extend(!0, t, i),
            t
        }
        Fe.href = be.href,
        T.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: be.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(be.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": De,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": T.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? je(je(t, T.ajaxSettings), e) : je(T.ajaxSettings, t)
            },
            ajaxPrefilter: Ze(Be),
            ajaxTransport: Ze(Ne),
            ajax: function(t, e) {
                "object" == typeof t && (e = t,
                t = void 0),
                e = e || {};
                var i, o, r, a, l, h, u, c, f, d, p = T.ajaxSetup({}, e), m = p.context || p, g = p.context && (m.nodeType || m.jquery) ? T(m) : T.event, v = T.Deferred(), _ = T.Callbacks("once memory"), y = p.statusCode || {}, x = {}, b = {}, w = "canceled", k = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (u) {
                            if (!a)
                                for (a = {}; e = Ae.exec(r); )
                                    a[e[1].toLowerCase()] = e[2];
                            e = a[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return u ? r : null
                    },
                    setRequestHeader: function(t, e) {
                        return null == u && (t = b[t.toLowerCase()] = b[t.toLowerCase()] || t,
                        x[t] = e),
                        this
                    },
                    overrideMimeType: function(t) {
                        return null == u && (p.mimeType = t),
                        this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (u)
                                k.always(t[k.status]);
                            else
                                for (e in t)
                                    y[e] = [y[e], t[e]];
                        return this
                    },
                    abort: function(t) {
                        var e = t || w;
                        return i && i.abort(e),
                        L(0, e),
                        this
                    }
                };
                if (v.promise(k),
                p.url = ((t || p.url || be.href) + "").replace(Oe, be.protocol + "//"),
                p.type = e.method || e.type || p.method || p.type,
                p.dataTypes = (p.dataType || "*").toLowerCase().match(F) || [""],
                null == p.crossDomain) {
                    h = s.createElement("a");
                    try {
                        h.href = p.url,
                        h.href = h.href,
                        p.crossDomain = Fe.protocol + "//" + Fe.host != h.protocol + "//" + h.host
                    } catch (t) {
                        p.crossDomain = !0
                    }
                }
                if (p.data && p.processData && "string" != typeof p.data && (p.data = T.param(p.data, p.traditional)),
                Re(Be, p, e, k),
                u)
                    return k;
                for (f in (c = T.event && p.global) && 0 == T.active++ && T.event.trigger("ajaxStart"),
                p.type = p.type.toUpperCase(),
                p.hasContent = !Ie.test(p.type),
                o = p.url.replace(ze, ""),
                p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Ce, "+")) : (d = p.url.slice(o.length),
                p.data && (p.processData || "string" == typeof p.data) && (o += (Te.test(o) ? "&" : "?") + p.data,
                delete p.data),
                !1 === p.cache && (o = o.replace(Ee, "$1"),
                d = (Te.test(o) ? "&" : "?") + "_=" + we++ + d),
                p.url = o + d),
                p.ifModified && (T.lastModified[o] && k.setRequestHeader("If-Modified-Since", T.lastModified[o]),
                T.etag[o] && k.setRequestHeader("If-None-Match", T.etag[o])),
                (p.data && p.hasContent && !1 !== p.contentType || e.contentType) && k.setRequestHeader("Content-Type", p.contentType),
                k.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + De + "; q=0.01" : "") : p.accepts["*"]),
                p.headers)
                    k.setRequestHeader(f, p.headers[f]);
                if (p.beforeSend && (!1 === p.beforeSend.call(m, k, p) || u))
                    return k.abort();
                if (w = "abort",
                _.add(p.complete),
                k.done(p.success),
                k.fail(p.error),
                i = Re(Ne, p, e, k)) {
                    if (k.readyState = 1,
                    c && g.trigger("ajaxSend", [k, p]),
                    u)
                        return k;
                    p.async && p.timeout > 0 && (l = n.setTimeout(function() {
                        k.abort("timeout")
                    }, p.timeout));
                    try {
                        u = !1,
                        i.send(x, L)
                    } catch (t) {
                        if (u)
                            throw t;
                        L(-1, t)
                    }
                } else
                    L(-1, "No Transport");
                function L(t, e, s, a) {
                    var h, f, d, x, b, w = e;
                    u || (u = !0,
                    l && n.clearTimeout(l),
                    i = void 0,
                    r = a || "",
                    k.readyState = t > 0 ? 4 : 0,
                    h = t >= 200 && t < 300 || 304 === t,
                    s && (x = function(t, e, n) {
                        for (var i, o, r, s, a = t.contents, l = t.dataTypes; "*" === l[0]; )
                            l.shift(),
                            void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
                        if (i)
                            for (o in a)
                                if (a[o] && a[o].test(i)) {
                                    l.unshift(o);
                                    break
                                }
                        if (l[0]in n)
                            r = l[0];
                        else {
                            for (o in n) {
                                if (!l[0] || t.converters[o + " " + l[0]]) {
                                    r = o;
                                    break
                                }
                                s || (s = o)
                            }
                            r = r || s
                        }
                        if (r)
                            return r !== l[0] && l.unshift(r),
                            n[r]
                    }(p, k, s)),
                    x = function(t, e, n, i) {
                        var o, r, s, a, l, h = {}, u = t.dataTypes.slice();
                        if (u[1])
                            for (s in t.converters)
                                h[s.toLowerCase()] = t.converters[s];
                        for (r = u.shift(); r; )
                            if (t.responseFields[r] && (n[t.responseFields[r]] = e),
                            !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
                            l = r,
                            r = u.shift())
                                if ("*" === r)
                                    r = l;
                                else if ("*" !== l && l !== r) {
                                    if (!(s = h[l + " " + r] || h["* " + r]))
                                        for (o in h)
                                            if ((a = o.split(" "))[1] === r && (s = h[l + " " + a[0]] || h["* " + a[0]])) {
                                                !0 === s ? s = h[o] : !0 !== h[o] && (r = a[0],
                                                u.unshift(a[1]));
                                                break
                                            }
                                    if (!0 !== s)
                                        if (s && t.throws)
                                            e = s(e);
                                        else
                                            try {
                                                e = s(e)
                                            } catch (t) {
                                                return {
                                                    state: "parsererror",
                                                    error: s ? t : "No conversion from " + l + " to " + r
                                                }
                                            }
                                }
                        return {
                            state: "success",
                            data: e
                        }
                    }(p, x, k, h),
                    h ? (p.ifModified && ((b = k.getResponseHeader("Last-Modified")) && (T.lastModified[o] = b),
                    (b = k.getResponseHeader("etag")) && (T.etag[o] = b)),
                    204 === t || "HEAD" === p.type ? w = "nocontent" : 304 === t ? w = "notmodified" : (w = x.state,
                    f = x.data,
                    h = !(d = x.error))) : (d = w,
                    !t && w || (w = "error",
                    t < 0 && (t = 0))),
                    k.status = t,
                    k.statusText = (e || w) + "",
                    h ? v.resolveWith(m, [f, w, k]) : v.rejectWith(m, [k, w, d]),
                    k.statusCode(y),
                    y = void 0,
                    c && g.trigger(h ? "ajaxSuccess" : "ajaxError", [k, p, h ? f : d]),
                    _.fireWith(m, [k, w]),
                    c && (g.trigger("ajaxComplete", [k, p]),
                    --T.active || T.event.trigger("ajaxStop")))
                }
                return k
            },
            getJSON: function(t, e, n) {
                return T.get(t, e, n, "json")
            },
            getScript: function(t, e) {
                return T.get(t, void 0, e, "script")
            }
        }),
        T.each(["get", "post"], function(t, e) {
            T[e] = function(t, n, i, o) {
                return _(n) && (o = o || i,
                i = n,
                n = void 0),
                T.ajax(T.extend({
                    url: t,
                    type: e,
                    dataType: o,
                    data: n,
                    success: i
                }, T.isPlainObject(t) && t))
            }
        }),
        T._evalUrl = function(t) {
            return T.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                throws: !0
            })
        }
        ,
        T.fn.extend({
            wrapAll: function(t) {
                var e;
                return this[0] && (_(t) && (t = t.call(this[0])),
                e = T(t, this[0].ownerDocument).eq(0).clone(!0),
                this[0].parentNode && e.insertBefore(this[0]),
                e.map(function() {
                    for (var t = this; t.firstElementChild; )
                        t = t.firstElementChild;
                    return t
                }).append(this)),
                this
            },
            wrapInner: function(t) {
                return _(t) ? this.each(function(e) {
                    T(this).wrapInner(t.call(this, e))
                }) : this.each(function() {
                    var e = T(this)
                      , n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) {
                var e = _(t);
                return this.each(function(n) {
                    T(this).wrapAll(e ? t.call(this, n) : t)
                })
            },
            unwrap: function(t) {
                return this.parent(t).not("body").each(function() {
                    T(this).replaceWith(this.childNodes)
                }),
                this
            }
        }),
        T.expr.pseudos.hidden = function(t) {
            return !T.expr.pseudos.visible(t)
        }
        ,
        T.expr.pseudos.visible = function(t) {
            return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
        }
        ,
        T.ajaxSettings.xhr = function() {
            try {
                return new n.XMLHttpRequest
            } catch (t) {}
        }
        ;
        var We = {
            0: 200,
            1223: 204
        }
          , He = T.ajaxSettings.xhr();
        v.cors = !!He && "withCredentials"in He,
        v.ajax = He = !!He,
        T.ajaxTransport(function(t) {
            var e, i;
            if (v.cors || He && !t.crossDomain)
                return {
                    send: function(o, r) {
                        var s, a = t.xhr();
                        if (a.open(t.type, t.url, t.async, t.username, t.password),
                        t.xhrFields)
                            for (s in t.xhrFields)
                                a[s] = t.xhrFields[s];
                        for (s in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType),
                        t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"),
                        o)
                            a.setRequestHeader(s, o[s]);
                        e = function(t) {
                            return function() {
                                e && (e = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null,
                                "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(We[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                    binary: a.response
                                } : {
                                    text: a.responseText
                                }, a.getAllResponseHeaders()))
                            }
                        }
                        ,
                        a.onload = e(),
                        i = a.onerror = a.ontimeout = e("error"),
                        void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                            4 === a.readyState && n.setTimeout(function() {
                                e && i()
                            })
                        }
                        ,
                        e = e("abort");
                        try {
                            a.send(t.hasContent && t.data || null)
                        } catch (t) {
                            if (e)
                                throw t
                        }
                    },
                    abort: function() {
                        e && e()
                    }
                }
        }),
        T.ajaxPrefilter(function(t) {
            t.crossDomain && (t.contents.script = !1)
        }),
        T.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(t) {
                    return T.globalEval(t),
                    t
                }
            }
        }),
        T.ajaxPrefilter("script", function(t) {
            void 0 === t.cache && (t.cache = !1),
            t.crossDomain && (t.type = "GET")
        }),
        T.ajaxTransport("script", function(t) {
            var e, n;
            if (t.crossDomain)
                return {
                    send: function(i, o) {
                        e = T("<script>").prop({
                            charset: t.scriptCharset,
                            src: t.url
                        }).on("load error", n = function(t) {
                            e.remove(),
                            n = null,
                            t && o("error" === t.type ? 404 : 200, t.type)
                        }
                        ),
                        s.head.appendChild(e[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
        });
        var qe, Ue = [], Ve = /(=)\?(?=&|$)|\?\?/;
        T.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = Ue.pop() || T.expando + "_" + we++;
                return this[t] = !0,
                t
            }
        }),
        T.ajaxPrefilter("json jsonp", function(t, e, i) {
            var o, r, s, a = !1 !== t.jsonp && (Ve.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ve.test(t.data) && "data");
            if (a || "jsonp" === t.dataTypes[0])
                return o = t.jsonpCallback = _(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
                a ? t[a] = t[a].replace(Ve, "$1" + o) : !1 !== t.jsonp && (t.url += (Te.test(t.url) ? "&" : "?") + t.jsonp + "=" + o),
                t.converters["script json"] = function() {
                    return s || T.error(o + " was not called"),
                    s[0]
                }
                ,
                t.dataTypes[0] = "json",
                r = n[o],
                n[o] = function() {
                    s = arguments
                }
                ,
                i.always(function() {
                    void 0 === r ? T(n).removeProp(o) : n[o] = r,
                    t[o] && (t.jsonpCallback = e.jsonpCallback,
                    Ue.push(o)),
                    s && _(r) && r(s[0]),
                    s = r = void 0
                }),
                "script"
        }),
        v.createHTMLDocument = ((qe = s.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
        2 === qe.childNodes.length),
        T.parseHTML = function(t, e, n) {
            return "string" != typeof t ? [] : ("boolean" == typeof e && (n = e,
            e = !1),
            e || (v.createHTMLDocument ? ((i = (e = s.implementation.createHTMLDocument("")).createElement("base")).href = s.location.href,
            e.head.appendChild(i)) : e = s),
            r = !n && [],
            (o = E.exec(t)) ? [e.createElement(o[1])] : (o = bt([t], e, r),
            r && r.length && T(r).remove(),
            T.merge([], o.childNodes)));
            var i, o, r
        }
        ,
        T.fn.load = function(t, e, n) {
            var i, o, r, s = this, a = t.indexOf(" ");
            return a > -1 && (i = me(t.slice(a)),
            t = t.slice(0, a)),
            _(e) ? (n = e,
            e = void 0) : e && "object" == typeof e && (o = "POST"),
            s.length > 0 && T.ajax({
                url: t,
                type: o || "GET",
                dataType: "html",
                data: e
            }).done(function(t) {
                r = arguments,
                s.html(i ? T("<div>").append(T.parseHTML(t)).find(i) : t)
            }).always(n && function(t, e) {
                s.each(function() {
                    n.apply(this, r || [t.responseText, e, t])
                })
            }
            ),
            this
        }
        ,
        T.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            T.fn[e] = function(t) {
                return this.on(e, t)
            }
        }),
        T.expr.pseudos.animated = function(t) {
            return T.grep(T.timers, function(e) {
                return t === e.elem
            }).length
        }
        ,
        T.offset = {
            setOffset: function(t, e, n) {
                var i, o, r, s, a, l, h = T.css(t, "position"), u = T(t), c = {};
                "static" === h && (t.style.position = "relative"),
                a = u.offset(),
                r = T.css(t, "top"),
                l = T.css(t, "left"),
                ("absolute" === h || "fixed" === h) && (r + l).indexOf("auto") > -1 ? (s = (i = u.position()).top,
                o = i.left) : (s = parseFloat(r) || 0,
                o = parseFloat(l) || 0),
                _(e) && (e = e.call(t, n, T.extend({}, a))),
                null != e.top && (c.top = e.top - a.top + s),
                null != e.left && (c.left = e.left - a.left + o),
                "using"in e ? e.using.call(t, c) : u.css(c)
            }
        },
        T.fn.extend({
            offset: function(t) {
                if (arguments.length)
                    return void 0 === t ? this : this.each(function(e) {
                        T.offset.setOffset(this, t, e)
                    });
                var e, n, i = this[0];
                return i ? i.getClientRects().length ? (e = i.getBoundingClientRect(),
                n = i.ownerDocument.defaultView,
                {
                    top: e.top + n.pageYOffset,
                    left: e.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function() {
                if (this[0]) {
                    var t, e, n, i = this[0], o = {
                        top: 0,
                        left: 0
                    };
                    if ("fixed" === T.css(i, "position"))
                        e = i.getBoundingClientRect();
                    else {
                        for (e = this.offset(),
                        n = i.ownerDocument,
                        t = i.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === T.css(t, "position"); )
                            t = t.parentNode;
                        t && t !== i && 1 === t.nodeType && ((o = T(t).offset()).top += T.css(t, "borderTopWidth", !0),
                        o.left += T.css(t, "borderLeftWidth", !0))
                    }
                    return {
                        top: e.top - o.top - T.css(i, "marginTop", !0),
                        left: e.left - o.left - T.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent; t && "static" === T.css(t, "position"); )
                        t = t.offsetParent;
                    return t || wt
                })
            }
        }),
        T.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, e) {
            var n = "pageYOffset" === e;
            T.fn[t] = function(i) {
                return U(this, function(t, i, o) {
                    var r;
                    if (y(t) ? r = t : 9 === t.nodeType && (r = t.defaultView),
                    void 0 === o)
                        return r ? r[e] : t[i];
                    r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : t[i] = o
                }, t, i, arguments.length)
            }
        }),
        T.each(["top", "left"], function(t, e) {
            T.cssHooks[e] = qt(v.pixelPosition, function(t, n) {
                if (n)
                    return n = Ht(t, e),
                    Rt.test(n) ? T(t).position()[e] + "px" : n
            })
        }),
        T.each({
            Height: "height",
            Width: "width"
        }, function(t, e) {
            T.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function(n, i) {
                T.fn[i] = function(o, r) {
                    var s = arguments.length && (n || "boolean" != typeof o)
                      , a = n || (!0 === o || !0 === r ? "margin" : "border");
                    return U(this, function(e, n, o) {
                        var r;
                        return y(e) ? 0 === i.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement,
                        Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === o ? T.css(e, n, a) : T.style(e, n, o, a)
                    }, e, s ? o : void 0, s)
                }
            })
        }),
        T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, e) {
            T.fn[e] = function(t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
            }
        }),
        T.fn.extend({
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }
        }),
        T.fn.extend({
            bind: function(t, e, n) {
                return this.on(t, null, e, n)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, n, i) {
                return this.on(e, t, n, i)
            },
            undelegate: function(t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            }
        }),
        T.proxy = function(t, e) {
            var n, i, o;
            if ("string" == typeof e && (n = t[e],
            e = t,
            t = n),
            _(t))
                return i = l.call(arguments, 2),
                (o = function() {
                    return t.apply(e || this, i.concat(l.call(arguments)))
                }
                ).guid = t.guid = t.guid || T.guid++,
                o
        }
        ,
        T.holdReady = function(t) {
            t ? T.readyWait++ : T.ready(!0)
        }
        ,
        T.isArray = Array.isArray,
        T.parseJSON = JSON.parse,
        T.nodeName = z,
        T.isFunction = _,
        T.isWindow = y,
        T.camelCase = Y,
        T.type = w,
        T.now = Date.now,
        T.isNumeric = function(t) {
            var e = T.type(t);
            return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
        }
        ,
        void 0 === (i = function() {
            return T
        }
        .apply(e, [])) || (t.exports = i);
        var Ge = n.jQuery
          , $e = n.$;
        return T.noConflict = function(t) {
            return n.$ === T && (n.$ = $e),
            t && n.jQuery === T && (n.jQuery = Ge),
            T
        }
        ,
        o || (n.jQuery = n.$ = T),
        T
    })
}
, function(t, e, n) {
    (function(e) {
        !function() {
            var n = {
                altitude: "mt",
                climb: "kt",
                cruise: "kt",
                task: "kph",
                distance: "km"
            }
              , i = {
                startrad: 5,
                finrad: 1,
                tprad: .5,
                sector_rad: 20,
                sector_angle: 90,
                use_sector: !0,
                use_barrel: !0,
                finishtype: "line"
            };
            function o(t, e) {
                if (window.localStorage)
                    try {
                        localStorage.setItem(t, e)
                    } catch (t) {
                        console.log("error")
                    }
            }
            t.exports = {
                airclip: 6001,
                tasksource: "igc",
                distance: "km",
                sectors: {
                    startrad: 5,
                    finrad: 1,
                    tprad: .5,
                    sector_rad: 20,
                    sector_angle: 90,
                    use_sector: !0,
                    use_barrel: !0,
                    finishtype: "line"
                },
                sectorDefaults: {
                    startrad: 5,
                    finrad: 1,
                    tprad: .5,
                    sector_rad: 20,
                    sector_angle: 90,
                    use_sector: !0,
                    use_barrel: !0,
                    finishtype: "line"
                },
                units: n,
                enlPrefs: {
                    detect: "Off",
                    threshold: 500,
                    duration: 12
                },
                enlDefaults: {
                    detect: "Off",
                    threshold: 500,
                    duration: 12
                },
                altPrefs: {
                    altsource: "P",
                    altref: "QFE"
                },
                metre2foot: 3.2808399,
                setSectorDefaults: function() {
                    i.startrad = 5,
                    i.finrad = 1,
                    i.tprad = .5,
                    i.sector_rad = 20,
                    i.sector_angle = 90,
                    i.use_sector = !0,
                    i.use_barrel = !0,
                    i.finishtype = "line"
                },
                setSectors: function(t, e) {
                    return i = "",
                    (n = t).startrad > 0 || (i = "\nStart radius needed"),
                    n.finrad > 0 || (i += "\nFinish radius needed"),
                    !1 === n.use_barrel && !1 === n.use_sector && (i += "\nSelect circle and/or sector for TPs"),
                    !0 !== n.use_barrel || n.tprad > 0 || (i += "\nTP circle radius needed"),
                    !0 !== n.use_sector || n.sector_rad > 0 || (i += "\nTP sector radius needed"),
                    !(i.length > 0 && (alert(i),
                    1)) && (this.sectors = t,
                    e && o("sectordefs", JSON.stringify(t)),
                    !0);
                    var n, i
                },
                setEnl: function(t, e) {
                    return i = "",
                    "On" === (n = t).detect && ((n.threshold < 1 || n.threshold > 999) && (i += "\nIllegal threshold value"),
                    (n.duration < 2 || n.duration > 100) && (i += "\nUnrealistic time value")),
                    !(i.length > 0 && (alert(i),
                    1)) && (this.enlPrefs = t,
                    e && o("enlprefs", JSON.stringify(t)),
                    !0);
                    var n, i
                },
                getStoredValues: function() {
                    try {
                        var t = localStorage.getItem("altitudeUnit");
                        t && (n.altitude = t,
                        e("#altitudeunits").val(t));
                        var i = localStorage.getItem("lengthUnit");
                        i && (n.distance = i);
                        var o = localStorage.getItem("climbUnit");
                        o && (n.climb = o);
                        var r = localStorage.getItem("cruiseUnit");
                        r && (n.cruise = r);
                        var s = localStorage.getItem("taskUnit");
                        s && (n.task = s);
                        var a = localStorage.getItem("airspaceClip");
                        a && (this.airclip = a);
                        var l = localStorage.getItem("sectordefs");
                        l && (this.sectors = JSON.parse(l));
                        var h = localStorage.getItem("enlprefs");
                        h && (this.enlPrefs = JSON.parse(h));
                        var u = localStorage.getItem("altPrefs");
                        u && (this.altPrefs = JSON.parse(u))
                    } catch (t) {
                        console.log("error")
                    }
                },
                showCruise: function(t) {
                    var e;
                    switch (n.cruise) {
                    case "kph":
                        e = Math.round(t) + " km/hr";
                        break;
                    case "kt":
                        e = Math.round(.53961 * t) + " kt";
                        break;
                    case "mph":
                        e = Math.round(.62137119224 * t) + " miles/hr"
                    }
                    return e
                },
                showDistance: function(t) {
                    var e;
                    "km" === n.distance ? e = t.toFixed(1) + " Km" : e = (.62137119224 * t).toFixed(1) + " miles";
                    return e
                },
                showTaskSpeed: function(t) {
                    var e;
                    return "mph" === n.task ? (t *= .62137119224,
                    e = " miles/hr") : e = " km/hr",
                    t.toFixed(2) + e
                },
                showClimb: function(t) {
                    var e;
                    switch (n.climb) {
                    case "kt":
                        e = (t *= 1.9426025694).toFixed(1) + " knots";
                        break;
                    case "mps":
                        e = t.toFixed(1) + " m/s";
                        break;
                    case "fpm":
                        t *= 196.8503937,
                        e = Math.round(t) + " ft/min"
                    }
                    return t > 0 && (e = "+" + e),
                    e
                },
                displayAlt: function(t) {
                    var e, i;
                    return "ft" == n.altitude ? (e = Math.round(3.2808399 * t),
                    i = " feet") : (e = Math.round(t),
                    i = " metres"),
                    {
                        showval: e,
                        descriptor: i
                    }
                },
                showAltitude: function(t, e, n, i, o) {
                    var r, s, a;
                    switch ("P" === this.altPrefs.altsource ? (a = t,
                    r = n,
                    s = "&nbsp;(baro)&nbsp;") : (a = e,
                    r = i,
                    s = "&nbsp;(GPS)&nbsp;"),
                    this.altPrefs.altref) {
                    case "QFE":
                        a -= r;
                        break;
                    case "QNH":
                        a = a - r + o
                    }
                    var l = this.displayAlt(a);
                    return {
                        displaySentence: this.altPrefs.altref + s + l.showval + l.descriptor,
                        altPos: l.showval,
                        descriptor: l.descriptor
                    }
                },
                setAirclip: function(t) {
                    this.airclip = t,
                    o("airspaceClip", t)
                },
                setAltUnits: function(t) {
                    n.altitude = t,
                    o("altitudeUnit", t)
                },
                setLengthUnits: function(t) {
                    n.distance = t,
                    o("lengthUnit", t)
                },
                setClimbUnits: function(t) {
                    n.climb = t,
                    o("climbUnit", t)
                },
                setCruiseUnits: function(t) {
                    n.cruise = t,
                    o("cruiseUnit", t)
                },
                setTaskUnits: function(t) {
                    n.task = t,
                    o("taskUnit", t)
                },
                setTaskSource: function(t) {
                    this.tasksource = t
                },
                setAltPrefs: function(t, e) {
                    this.altPrefs.altref = t,
                    this.altPrefs.altsource = e,
                    o("altPrefs", JSON.stringify(this.altPrefs))
                }
            }
        }()
    }
    ).call(this, n(0))
}
, function(t, e, n) {
    (function(e) {
        var i, o;
        n(7);
        function r(t) {
            t.zoneAbbr = "UTC",
            t.offset = 0,
            t.zoneName = "UTC"
        }
        t.exports = {
            pad: function(t) {
                return t < 10 ? "0" + t.toString() : t.toString()
            },
            showFormat: function(t) {
                var e = Math.abs(t.lat)
                  , n = Math.floor(e)
                  , i = 60 * (e - n)
                  , o = t.lat > 0 ? "N" : "S"
                  , r = Math.abs(t.lng)
                  , s = Math.floor(r)
                  , a = 60 * (r - s)
                  , l = t.lng > 0 ? "E" : "W";
                return n.toString() + "&deg;" + i.toFixed(3) + "&prime;" + o + " " + s.toString() + "&deg;" + a.toFixed(3) + "&prime;" + l
            },
            showDate: function(t) {
                var e = new Date(1e3 * t);
                return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][e.getUTCDay()] + " " + e.getUTCDate() + " " + ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][e.getUTCMonth()] + " " + e.getUTCFullYear()
            },
            getAirspace: function(t, n) {
                return e.ajax({
                    url: "getairspace.php",
                    data: {
                        bounds: JSON.stringify(t),
                        margin: n
                    },
                    timeout: 3e3,
                    method: "POST",
                    dataType: "json"
                })
            },
            getUnixTime: function(t) {
                return 3600 * parseInt(t.substr(0, 2)) + 60 * parseInt(t.substr(2, 2)) + parseInt(t.substr(4, 2))
            },
            parseLatLong: function(t) {
                var e = parseFloat(t.substring(0, 2)) + parseFloat(t.substring(2, 7)) / 6e4;
                "S" === t.charAt(7) && (e = -e);
                var n = parseFloat(t.substring(8, 11)) + parseFloat(t.substring(11, 16)) / 6e4;
                return "W" === t.charAt(16) && (n = -n),
                {
                    lat: e,
                    lng: n
                }
            },
            getUnixDate: function(t) {
                var e = parseInt(t.substr(0, 2), 10)
                  , n = parseInt(t.substr(2, 2), 10) - 1
                  , i = parseInt(t.substr(4, 2), 10);
                return i += i < 80 ? 2e3 : 1900,
                new Date(Date.UTC(i, n, e)).getTime() / 1e3
            },
            unixToString: function(t) {
                return this.pad(Math.floor(t / 3600)) + ":" + this.pad(Math.floor(t / 60 % 60)) + ":" + this.pad(t % 60)
            },
            unixToPaddedString: function(t) {
                return t < 3600 ? Math.floor(t / 60) + "mins " + this.pad(t % 60) + "secs" : Math.floor(t / 3600) + "hrs " + this.pad(Math.floor(t / 60 % 60)) + "mins " + this.pad(t % 60) + "secs"
            },
            getTrackData: function(t, e) {
                var n, i, o, r, s, a, l, h, u, c, f, d = t.lat * Math.PI / 180, p = e.lat * Math.PI / 180, m = (e.lng - t.lng) * Math.PI / 180, g = .0033528599338645926, v = (1 - g) * Math.tan(d), _ = 1 / Math.sqrt(1 + v * v), y = v * _, x = (1 - g) * Math.tan(p), b = 1 / Math.sqrt(1 + x * x), w = x * b, T = m, k = 0;
                do {
                    if (r = b * (i = Math.sin(T)) * (b * i) + (_ * w - y * b * (o = Math.cos(T))) * (_ * w - y * b * o),
                    0 === (l = Math.sqrt(r)))
                        return 0;
                    h = y * w + _ * b * o,
                    a = Math.atan2(l, h),
                    c = h - 2 * y * w / (s = 1 - (u = _ * b * i / l) * u),
                    isNaN(c) && (c = 0),
                    n = T,
                    T = m + (1 - (f = g / 16 * s * (4 + g * (4 - 3 * s)))) * g * u * (a + f * u * (c + f * h * (2 * c * c - 1))),
                    k++
                } while (Math.abs(n - T) > 1e-12 && k < 100);
                k > 99 && alert("Distance out of range: check coordinates");
                var L = 272335.60126499087 * s / 40408295.989504
                  , P = L / 1024 * (256 + L * (L * (74 - 47 * L) - 128))
                  , S = 6356.752 * (1 + L / 16384 * (4096 + L * (L * (320 - 175 * L) - 768))) * (a - P * l * (c + P / 4 * (h * (2 * c * c - 1) - P / 6 * c * (4 * l * l - 3) * (4 * c * c - 3))))
                  , M = Math.atan2(b * i, _ * w - y * b * o);
                return {
                    distance: S,
                    bearing: Math.round((360 + 180 * M / Math.PI) % 360)
                }
            },
            toPoint: function(t, e) {
                var n = t.lat * Math.PI / 180
                  , i = e.lat * Math.PI / 180
                  , o = t.lng * Math.PI / 180
                  , r = e.lng * Math.PI / 180
                  , s = i - n
                  , a = r - o
                  , l = Math.sin(s / 2) * Math.sin(s / 2) + Math.cos(n) * Math.cos(i) * Math.sin(a / 2) * Math.sin(a / 2)
                  , h = 6378.137 * (2 * Math.atan2(Math.sqrt(l), Math.sqrt(1 - l)))
                  , u = Math.sin(r - o) * Math.cos(i)
                  , c = Math.cos(n) * Math.sin(i) - Math.sin(n) * Math.cos(i) * Math.cos(r - o);
                return {
                    distance: h,
                    bearing: (360 + 180 * Math.atan2(u, c) / Math.PI) % 360
                }
            },
            targetPoint: function(t, e, n) {
                var i = t.lat * Math.PI / 180
                  , o = t.lng * Math.PI / 180
                  , r = n * Math.PI / 180
                  , s = Math.asin(Math.sin(i) * Math.cos(e / 6378.137) + Math.cos(i) * Math.sin(e / 6378.137) * Math.cos(r))
                  , a = o + Math.atan2(Math.sin(r) * Math.sin(e / 6378.137) * Math.cos(i), Math.cos(e / 6378.137) - Math.sin(i) * Math.sin(s))
                  , l = 180 * s / Math.PI
                  , h = 180 * a / Math.PI;
                return {
                    lat: l,
                    lng: h = (h + 540) % 360 - 180
                }
            },
            getPoint: function(t) {
                var n, i, o, r, s = "Not named", a = "Fail", l = {}, h = [/^([A-Za-z]{2}[A-Za-z0-9]{1})$/, /^([A-Za-z0-9]{6})$/, /^([\d]{2})([\d]{2})([\d]{3})([NnSs])([\d]{3})([\d]{2})([\d]{3})([EeWw])(.*)$/, /^([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2})[\s]*([NnSs])[\W]*([0-9]{1,3}):([0-9]{1,2}):([0-9]{1,2})[\s]*([EeWw])$/, /^(\d{1,2})[\s:](\d{1,2})\.(\d{1,3})\s*([NnSs])\s*(\d{1,3})[\s:](\d{1,2})\.(\d{1,3})\s*([EeWw])$/], u = function(t) {
                    "Not found" !== (s = t.tpname) && (n = t.latitude,
                    i = t.longitude,
                    a = "OK")
                };
                for (r = 0; r < h.length; r++)
                    if (o = t.match(h[r]))
                        switch (r) {
                        case 0:
                        case 1:
                            e.ajax({
                                url: "findtp.php",
                                data: {
                                    postdata: o[0]
                                },
                                timeout: 3e3,
                                method: "POST",
                                dataType: "json",
                                async: !1,
                                success: u
                            });
                            break;
                        case 2:
                            n = parseFloat(o[1]) + parseFloat(o[2]) / 60 + parseFloat(o[3]) / 6e4,
                            "S" === o[4].toUpperCase() && (n = -n),
                            i = parseFloat(o[5]) + parseFloat(o[6]) / 60 + parseFloat(o[7]) / 6e4,
                            "W" === o[8].toUpperCase() && (i = -i),
                            o[9].length > 0 && (s = o[9]),
                            0 !== n && 0 !== i && (a = "OK");
                            break;
                        case 3:
                            n = parseFloat(o[1]) + parseFloat(o[2]) / 60 + parseFloat(o[3]) / 3600,
                            "S" === o[4].toUpperCase() && (n = -n),
                            i = parseFloat(o[5]) + parseFloat(o[6]) / 60 + parseFloat(o[7]) / 3600,
                            "W" === o[8].toUpperCase() && (i = -i);
                            break;
                        case 4:
                            n = parseFloat(o[1]) + parseFloat(o[2]) / 60 + parseFloat(o[3]) / (60 * Math.pow(10, o[3].length)),
                            "S" === o[4].toUpperCase() && (n = -n),
                            i = parseFloat(o[5]) + parseFloat(o[6]) / 60 + parseFloat(o[7]) / (60 * Math.pow(10, o[7].length)),
                            "W" === o[8].toUpperCase() && (i = -i),
                            a = "OK"
                        }
                return l.lat = n,
                l.lng = i,
                {
                    message: a,
                    coords: l,
                    name: s
                }
            },
            getLocalInfo: function(t, n, s, a) {
                i = 2,
                function(t, n) {
                    e.ajax({
                        url: "/getelevation.php",
                        data: {
                            lat: t.lat,
                            lng: t.lng
                        },
                        timeout: 5e3,
                        method: "GET",
                        dataType: "json"
                    }).done(function(t) {
                        try {
                            data = "object" == typeof t ? t : JSON.parse(t),
                            o = void 0 !== data.astergdem ? data.astergdem : null
                        } catch (t) {
                            console.log("getBaseElevation: " + t.message),
                            o = null
                        }
                    }).fail(function() {
                        o = null
                    }).always(function() {
                        0 == --i && n(o)
                    })
                }(n, a),
                function(t, n, s, a) {
                    e.ajax({
                        url: "/gettimezone.php",
                        data: {
                            lat: n.lat,
                            lng: n.lng
                        },
                        timeout: 5e3,
                        method: "GET",
                        datatype: "json"
                    }).done(function(t) {
                        try {
                            data = JSON.parse(t),
                            void 0 !== data.countryCode ? (s.zoneAbbr = data.countryCode,
                            s.offset = 3600 * data.rawOffset,
                            s.zoneName = data.timezoneId) : r(s)
                        } catch (t) {
                            console.log("gettimezone: " + t.message),
                            r(s)
                        }
                    }).fail(function() {
                        r(s)
                    }).always(function() {
                        0 == --i && a(o)
                    })
                }(0, n, s, a)
            },
            kasaRegress: function(t, e, n, i) {
                var o, r, s, a, l, h, u, c, f, d, p, m, g = 0, v = 0, _ = 0, y = 0, x = 0;
                for (o = 0; o < t.length; o++)
                    g += (r = t[o] - n) * r,
                    v += (s = e[o] - i) * s,
                    _ += r * s,
                    y += r * (a = r * r + s * s),
                    x += s * a;
                return g /= t.length,
                v /= t.length,
                _ /= t.length,
                y /= t.length,
                x /= t.length,
                g11 = Math.sqrt(g),
                l = _ / g11,
                h = Math.sqrt(v - l * l),
                f = ((u = y / g11) - (c = (x - l * u) / h / h / 2) * l) / g11 / 2 + n,
                d = c + i,
                p = Math.sqrt(f * f + d * d),
                m = 180 * Math.atan(f / d) / Math.PI,
                {
                    magnitude: p,
                    direction: m = d > 0 ? (m + 180) % 360 : (m + 360) % 360
                }
            },
            getEarthSize: function() {
                return 6378.137
            },
            getElevation: function(t, n, i, o) {
                var r;
                e.ajax({
                    url: "/getelevation.php",
                    data: {
                        lat: t.lat,
                        lng: t.lng
                    },
                    timeout: 5e3,
                    method: "GET",
                    dataType: "json"
                }).done(function(t) {
                    try {
                        data = "object" == typeof t ? t : JSON.parse(t),
                        r = void 0 !== data.astergdem ? data.astergdem : null
                    } catch (t) {
                        r = null
                    }
                }).fail(function() {
                    r = null
                }).always(function() {
                    n(r, i, o)
                })
            },
            getHeading: function(t, e) {
                var n = 0;
                if (t && e) {
                    var i = t.lat * Math.PI / 180
                      , o = t.lng * Math.PI / 180
                      , r = e.lat * Math.PI / 180
                      , s = e.lng * Math.PI / 180;
                    n = Math.atan2(Math.sin(s - o) * Math.cos(r), Math.cos(i) * Math.sin(r) - Math.sin(i) * Math.cos(r) * Math.cos(s - o)) % (2 * Math.PI) * 180 / Math.PI
                }
                return n
            }
        }
    }
    ).call(this, n(0))
}
, function(t, e, n) {
    !function() {
        var e, i, o, r, s, a = [], l = [], h = [], u = [], c = [], f = [], d = [], p = [], m = [], g = [], v = {
            names: [],
            coords: []
        }, _ = {}, y = {
            zoneAbbr: "UTC",
            offset: 0,
            zoneName: "UTC"
        }, x = {
            pressure: null,
            gps: null
        }, b = [], w = {
            start: [],
            end: []
        };
        t.exports = {
            IGCException: function(t) {
                "use strict";
                this.message = t,
                this.name = "IGCException"
            },
            initialise: function(t) {
                function b(t) {
                    var e;
                    if (t.length > 4)
                        for (e = 1; e < t.length - 1; e++)
                            t[e].substring(1, 8) + t[e].substring(9, 17) !== "000000000000000" && (v.coords.push(E.parseLatLong(t[e].substring(1, 18))),
                            v.names.push(t[e].substring(18)))
                }
                function w(t, e) {
                    if (!t)
                        return null;
                    var n = E.getUnixTime(t[1]);
                    n < e && (n += 86400);
                    var i = E.parseLatLong(t[2]);
                    return 0 !== i.lat && 0 !== i.lng ? {
                        recordTime: n,
                        latLong: i,
                        quality: t[3],
                        pressureAltitude: parseInt(t[4], 10),
                        gpsAltitude: parseInt(t[5], 10)
                    } : void 0
                }
                function T(t) {
                    var e = t.search("ENL");
                    if (e > 6) {
                        var n = t.substring(e - 4, e);
                        return {
                            start: parseInt(n.substring(0, 2)) - 1,
                            end: parseInt(n.substring(2, 4))
                        }
                    }
                    return null
                }
                function k(t) {
                    var e = {
                        PLT: "Pilot",
                        CM2: "Crew member 2",
                        GTY: "Glider type",
                        GID: "Glider ID",
                        DTM: "GPS Datum",
                        RFW: "Firmware version",
                        RHW: "Hardware version",
                        FTY: "Flight recorder type",
                        GPS: "GPS",
                        PRS: "Pressure sensor",
                        FRS: "Security suspect, use validation program",
                        CID: "Competition ID",
                        CCL: "Competition class"
                    }[t.substring(2, 5)];
                    if (void 0 !== e) {
                        var n = t.indexOf(":");
                        if (-1 !== n) {
                            var i = t.substring(n + 1);
                            if (i.length > 0 && /([^\s]+)/.test(i))
                                return {
                                    name: e,
                                    value: i
                                }
                        }
                    }
                }
                var L, P, S, M, C, z, E = n(2), A = null, I = [], O = [], B = 0;
                r = !1;
                var N = /^B([\d]{6})([\d]{7}[NS][\d]{8}[EW])([AV])([-\d][\d]{4})([-\d][\d]{4})/
                  , D = /^\S*(C[\d]{7}[NS][\d]{8}[EW].*)/;
                l.length = 0,
                h.length = 0,
                u.length = 0,
                c.length = 0,
                f.length = 0,
                d.length = 0,
                p.length = 0,
                v.names.length = 0,
                v.coords.length = 0,
                a.length = 0,
                m.length = 0,
                g.length = 0,
                _.south = 90,
                _.west = 180,
                _.north = -90,
                _.east = -180,
                y.zoneAbbr = "UTC",
                y.offset = 0,
                y.zoneName = "UTC",
                x.pressure = null,
                x.gps = null,
                e = null;
                var F = t.split("\n");
                if (F.length < 2)
                    throw new this.IGCException("Invalid file- corrupt or empty");
                if (!/^A[\w]{6}/.test(F[0]))
                    throw new this.IGCException("Invalid file- missing or faulty A record");
                var Z = function(t) {
                    var e = {
                        ACT: "Aircotec",
                        CAM: "Cambridge Aero Instruments",
                        CNI: "Clearnav Instruments",
                        DSX: "Data Swan",
                        EWA: "EW Avionics",
                        FIL: "Filser",
                        FLA: "FLARM",
                        FLY: "Flytech",
                        GCS: "Garrecht",
                        IMI: "IMI Gliding Equipment",
                        LGS: "Logstream",
                        LXN: "LX Navigation",
                        LXV: "LXNAV d.o.o.",
                        NAV: "Naviter",
                        NKL: "Nielsen Kellerman",
                        NTE: "New Technologies s.r.l.",
                        PES: "Peschges",
                        PFE: "PressFinish Technologies",
                        PRT: "Print Technik",
                        SCH: "Scheffel",
                        SDI: "Streamline Data Instruments",
                        TRI: "Triadis Engineering GmbH",
                        WES: "Westerboer",
                        XCS: "XCSoar",
                        ZAN: "Zander"
                    }
                      , n = {
                        manufacturer: "Unknown",
                        serial: t.substring(4, 7)
                    }
                      , i = t.substring(1, 4);
                    return e[i] && (n.manufacturer = e[i]),
                    n
                }(F[0]);
                l.push({
                    name: "Logger manufacturer",
                    value: Z.manufacturer
                }),
                l.push({
                    name: "Logger serial number",
                    value: Z.serial
                });
                var R = t.match(/H[FPO]DTE(?:DATE:)?([\d]{6})/);
                if (!R)
                    throw new this.IGCException("Invalid file- missing date record");
                var j = R[1];
                for (L = 1; L < F.length; L++)
                    switch ((S = F[L]).charAt(0)) {
                    case "H":
                        (M = k(S)) && l.push(M);
                        break;
                    case "I":
                        A = T(S);
                        break;
                    case "C":
                        D.test(S) && I.push(S.trim());
                        break;
                    case "L":
                        (C = D.exec(S)) && O.push(C[1]);
                        break;
                    case "B":
                        (P = w(S.match(N), B)) && (f.push(P.recordTime),
                        h.push(P.latLong),
                        u.push(P.pressureAltitude),
                        c.push(P.gpsAltitude),
                        d.push(P.quality),
                        z = null !== A ? parseInt(S.substring(A.start, A.end)) : 0,
                        p.push(z),
                        P.pressureAltitude > 0 && (r = !0),
                        1 === f.length && (B = P.recordTime),
                        P.latLong.lat > _.north && (_.north = P.latLong.lat),
                        P.latLong.lat < _.south && (_.south = P.latLong.lat),
                        P.latLong.lng > _.east && (_.east = P.latLong.lng),
                        P.latLong.lng < _.west && (_.west = P.latLong.lng))
                    }
                if (f.length < 3)
                    throw new this.IGCException("File rejected- insufficient records");
                for (r && (x.pressure = u[0]),
                W = 0; W < h.length && "A" !== d[W]; )
                    W++;
                x.gps = c[W],
                s = Math.round((f[f.length - 1] - f[0]) / f.length);
                var W = 1
                  , H = f.length - 1
                  , q = 0;
                if (r) {
                    W = 1;
                    do {
                        q = q + u[W] - u[W - 1],
                        W++
                    } while (q < 4 && W < f.length);
                    q = 0;
                    do {
                        q = q + u[H - 1] - u[H],
                        H--
                    } while (q < 4 && H > 1)
                } else {
                    do {
                        W++
                    } while ("A" !== d[W] && W < f.length);
                    do {
                        q = q + c[W] - c[W - 1],
                        W++
                    } while (q < 4 && W < f.length);
                    do {
                        H--
                    } while ("A" !== d[H] && H > 2);
                    q = 0;
                    do {
                        q = q + c[H - 1] - c[H],
                        H--
                    } while (q < 4 && H > 1)
                }
                i = W - 1,
                o = H,
                a.push(E.getUnixDate(j) + f[0]),
                O.length > 0 ? b(O) : b(I),
                function() {
                    var t, e, i, o, r = n(2), a = Math.ceil(15 / s), l = [], u = 0, c = r.toPoint(h[0], h[1]).bearing;
                    for (m.push(0),
                    g.push(0),
                    t = 1; t < f.length - 1; t++)
                        e = r.toPoint(h[t], h[t + 1]).bearing,
                        i = Math.round((360 + e - c) % 360),
                        Math.abs(i) > 180 && (i -= 360),
                        c = e,
                        u += i,
                        l.push(i),
                        l.length > a ? (u -= l.shift(),
                        m.push(u / (f[t] - f[t - a])),
                        o = 3600 * r.toPoint(h[t - a], h[t]).distance / (f[t] - f[t - a]),
                        g.push(o)) : (m.push(0),
                        g.push(0))
                }()
            },
            setBaseElevation: function(t) {
                this.baseElevation = t
            },
            getEngineRuns: function(t) {
                var e = 0
                  , n = null
                  , i = []
                  , o = f.length - 1;
                if (b.length = 0,
                w.start.length = 0,
                w.end.length = 0,
                w.start.push(0),
                "On" === t.detect) {
                    do {
                        p[e] > t.threshold ? (i.push(h[e]),
                        null === n && (n = e)) : null !== n && (f[e - 1] - f[n] >= t.duration && (w.end.push(n),
                        w.start.push(e),
                        b.push(i)),
                        i = [],
                        n = null),
                        e++
                    } while (e < o);
                    w.end.push(o)
                }
            },
            showEngineRuns: function() {
                console.log("getting"),
                console.log(b)
            },
            getTakeOffIndex: function() {
                return i
            },
            getLandingIndex: function() {
                return o
            },
            getThermalInfo: function(t) {
                var e = t
                  , n = t;
                do {
                    e--
                } while (Math.abs(m[e]) > 3 && e > i);
                do {
                    n++
                } while (Math.abs(m[n]) > 5 && n < o);
                return {
                    entryTime: f[e] + y.offset,
                    entryIndex: e,
                    exitTime: f[n] + y.offset,
                    exitIndex: n
                }
            },
            getClimb: function(t) {
                var e = Math.round(30 / s);
                return t < i + e || s > 4 || t > o ? null : r ? (u[t] - u[t - e]) / (f[t] - f[t - e]) : (c[t] - c[t - e]) / (f[t] - f[t - e])
            },
            timeZone: y,
            unixStart: a,
            headers: l,
            latLong: h,
            pressureAltitude: u,
            gpsAltitude: c,
            recordTime: f,
            fixQuality: d,
            enl: p,
            taskpoints: v,
            bounds: _,
            takeOff: x,
            baseElevation: e,
            glidingRuns: w,
            engineRunList: b,
            turnRate: m,
            groundSpeed: g
        }
    }()
}
, function(t, e, n) {
    (function(e) {
        !function() {
            n(11),
            n(12),
            n(13);
            var i, o, r, s, a = {}, l = [], h = [], u = {
                polygons: [],
                circles: [],
                polygon_bases: [],
                circle_bases: []
            }, c = [];
            function f(t, e) {
                t.setLatLng(e),
                t.addTo(a)
            }
            function d() {
                var t;
                for (t = 0; t < h.length; t++)
                    a.removeLayer(h[t]);
                h = []
            }
            function p(t, e, i) {
                var o = n(2)
                  , r = (e + 270) % 360
                  , s = (e + 90) % 360
                  , a = [o.targetPoint(t, i, r), o.targetPoint(t, i, s)];
                return L.polyline(a, {
                    color: "black",
                    weight: 2,
                    opacity: 1
                })
            }
            function m(t, e) {
                return L.circle(t, 1e3 * e, {
                    color: "black",
                    opacity: .8,
                    fillColor: "green",
                    fillOpacity: .1,
                    interactive: !1
                })
            }
            function g(t, e, i, o, r) {
                var s, a = [], l = (i + 180) % 360, h = n(2), u = e + (l - e) / 2;
                Math.abs(l - e) > 180 && (u = (u + 180) % 360),
                a.push(t);
                var c = (u - o / 2 + 360) % 360;
                a.push(h.targetPoint(t, r, c));
                var f = (u + o / 2 + 360) % 360
                  , d = o / 5 - 1
                  , p = c;
                for (s = 1; s < d; s++)
                    p += 5,
                    a.push(h.targetPoint(t, r, p));
                return a.push(h.targetPoint(t, r, f)),
                a.push(t),
                L.polygon(a, {
                    color: "black",
                    opacity: .8,
                    weight: 1,
                    fillColor: "green",
                    fillOpacity: .1,
                    interactive: !1
                })
            }
            t.exports = {
                initmap: function() {
                    if ("undefined" == typeof L)
                        return null;
                    var t = L.tileLayer("https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg", {
                        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
                    })
                      , e = L.tileLayer("https://c.tile.opentopomap.org/{z}/{x}/{y}.png ", {
                        attribution: 'Map: <a href="https://opentopomap.org" target="_blank">OpenTopoMap</a>'
                    })
                      , n = L.tileLayer("https://wxs.ign.fr/pratique/wmts/?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=ORTHOIMAGERY.ORTHOPHOTOS&STYLE=normal&TILEMATRIXSET=PM&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&FORMAT=image%2Fjpeg ", {
                        attribution: 'Map: <a href="http://www.geoportail.gouv.fr/depot/api/cgu/CGU_API_libre.pdf" target="_blank">French Gov</a>'
                    });
                    const i = "640b746f7681262160656acea48dbd91";
                    var s = `https://{s}.api.tiles.openaip.net/api/data/airspaces/{z}/{x}/{y}.png?apiKey=${i}`
                      , l = `https://{s}.api.tiles.openaip.net/api/data/airports/{z}/{x}/{y}.png?apiKey=${i}`
                      , h = L.tileLayer(s, {
                        detectRetina: !0,
                        format: "image/png",
                        transparent: !0,
                        attribution: "Airspace by <a HREF=http://www.openaip.net>OpenAIP</a>t"
                    })
                      , u = L.tileLayer(l, {
                        detectRetina: !0,
                        format: "image/png",
                        transparent: !0
                    })
                      , c = L.layerGroup([h, u]);
                    a = L.map("map", {
                        center: [54.5, -3],
                        zoom: 5
                    });
                    var f = {
                        Street: t,
                        Topo: e,
                        Satellite: n
                    }
                      , d = {
                        Airspace: c
                    };
                    L.control.layers(f, d).addTo(a),
                    f.Street.addTo(a),
                    o = L.marker(L.latLng(0, 0), {
                        icon: L.icon({
                            iconUrl: "Icons/glider.png",
                            iconSize: [30, 30],
                            iconAnchor: [15, 15],
                            zIndexOffset: 500,
                            rotationOrigin: "center center"
                        })
                    });
                    var p = L.icon({
                        iconUrl: "Icons/pin.png",
                        iconAnchor: [4, 48]
                    })
                      , m = L.icon({
                        iconUrl: "Icons/finish.png",
                        iconAnchor: [0, 30]
                    })
                      , g = L.icon({
                        iconUrl: "Icons/start.png",
                        iconAnchor: [5, 30]
                    });
                    return r = L.marker(L.latLng(0, 0), {
                        icon: p,
                        interactive: !1
                    }),
                    finishFlag = L.marker(L.latLng(0, 0), {
                        icon: m,
                        interactive: !1
                    }),
                    startFlag = L.marker(L.latLng(0, 0), {
                        icon: g,
                        interactive: !1
                    }),
                    !0
                },
                setBounds: function(t) {
                    var e = L.latLngBounds(L.latLng(t.south, t.west), L.latLng(t.north, t.east));
                    a.fitBounds(e)
                },
                addTrack: function(t) {
                    i && a.removeLayer(i),
                    i = L.polyline(t, {
                        color: "blue",
                        opacity: 1,
                        interactive: !1,
                        weight: 4
                    }).addTo(a),
                    a.fitBounds(i.getBounds()),
                    o.setLatLng(t[0]),
                    o.addTo(a),
                    r.remove()
                },
                showAirspace: function() {
                    var t, e, i = n(1).airclip;
                    for (t = 0; t < u.polygons.length; t++)
                        u.polygon_bases[t] < i ? u.polygons[t].addTo(a) : u.polygons[t].remove();
                    for (e = 0; e < u.circles.length; e++)
                        u.circle_bases[e] < i ? u.circles[e].addTo(a) : u.circles[e].remove()
                },
                setAirspace: function(t) {
                    var e, n;
                    !function() {
                        var t, e;
                        for (t = 0; t < u.polygons.length; t++)
                            a.removeLayer(u.polygons[t]),
                            u.polygons[t] = null;
                        for (u.polygons.length = 0,
                        u.polygon_bases.length = 0,
                        e = 0; e < u.circles.length; e++)
                            a.removeLayer(u.circles[e]),
                            u.circles[e] = null;
                        u.circles.length = 0,
                        u.circle_bases.length = 0
                    }();
                    var i = {
                        color: "black",
                        opacity: .8,
                        weight: 1,
                        fillColor: "#FF0000",
                        fillOpacity: .2,
                        interactive: !1
                    };
                    for (e = 0; e < t.polygons.length; e++)
                        u.polygons[e] = L.polygon(t.polygons[e].coords, i),
                        u.polygon_bases[e] = t.polygons[e].base;
                    for (n = 0; n < t.circles.length; n++)
                        u.circles[n] = L.circle(t.circles[n].centre, 1e3 * t.circles[n].radius, i),
                        u.circle_bases[n] = t.circles[n].base
                },
                addSectors: function() {
                    var t, e, i, o, r;
                    d();
                    var s = n(5);
                    if (s.names.length > 0) {
                        var l = n(1).sectors;
                        for (i = p(s.coords[0], s.bearing[1], l.startrad),
                        h.push(i),
                        t = 1; t < s.names.length - 1; t++)
                            l.use_barrel && (e = m(s.coords[t], l.tprad),
                            h.push(e)),
                            l.use_sector && (o = g(s.coords[t], s.bearing[t], s.bearing[t + 1], l.sector_angle, l.sector_rad),
                            h.push(o));
                        for (r = "line" === l.finishtype ? p(s.coords[s.names.length - 1], s.bearing[s.names.length - 1], l.finrad) : m(s.coords[s.names.length - 1], l.finrad),
                        h.push(r),
                        t = 0; t < h.length; t++)
                            h[t].addTo(a)
                    }
                },
                zapTask: function() {
                    var t;
                    for (d(),
                    t = 0; t < l.length; t++)
                        l[t].remove();
                    l = []
                },
                showEngineRuns: function(t) {
                    var e, n = {
                        color: "yellow",
                        opacity: 1,
                        interactive: !1,
                        zIndex: 9999,
                        weight: 4
                    };
                    for (function() {
                        var t;
                        for (t = 0; t < c.length; t++)
                            a.removeLayer(c[t]);
                        c = []
                    }(),
                    e = 0; e < t.length; e++)
                        c[e] = L.polyline(t[e], n).addTo(a)
                },
                addTask: function(t, e) {
                    var n;
                    this.zapTask();
                    var i = L.polyline(t.coords, {
                        color: "dimgray",
                        opacity: 1,
                        weight: 3
                    });
                    if (e) {
                        var o = i.getBounds();
                        a.fitBounds(o)
                    }
                    for (i.addTo(a),
                    l.push(i),
                    n = 0; n < t.names.length - 1; n++) {
                        var r = L.marker(t.coords[n], {
                            title: t.names[n],
                            interactive: !0,
                            zIndex: 50
                        });
                        r.bindTooltip(n + " - " + t.names[n], {
                            permanent: !1
                        }).openTooltip(),
                        r.addTo(a),
                        l.push(r)
                    }
                    this.addSectors(t)
                },
                showTP: function(t) {
                    a.panTo(t),
                    a.setZoom(13)
                },
                pushPin: function(t) {
                    f(r, t)
                },
                resizeMap: function() {
                    a.invalidateSize()
                },
                clearPin: function() {
                    r.remove()
                },
                clearMeasureFlags: function() {
                    startFlag.remove(),
                    finishFlag.remove()
                },
                showFinish: function(t) {
                    f(finishFlag, t)
                },
                showStart: function(t) {
                    f(startFlag, t)
                },
                activate: function(t) {
                    a.on("click", function(e) {
                        t(e.latlng.lat, e.latlng.lng)
                    }),
                    s = e("#map").css("cursor"),
                    e("#map").css("cursor", "crosshair")
                },
                unclick: function() {
                    a.off("click"),
                    e("#map").css("cursor", s)
                },
                setTimeMarker: function(t, e) {
                    o.setLatLng(t),
                    e && o.setRotationAngle(e);
                    var n = L.latLng(t);
                    a.getBounds().contains(n) || a.panTo(n)
                }
            }
        }()
    }
    ).call(this, n(0))
}
, function(t, e, n) {
    var i, o, r, s, a, l, h, u;
    o = n(2),
    r = [],
    s = [],
    a = [],
    l = [],
    h = [],
    u = [],
    t.exports = {
        clearTask: function() {
            i = 0,
            r.length = 0,
            s.length = 0,
            a.length = 0,
            l.length = 0,
            h.length = 0,
            u.length = 0
        },
        createTask: function(t) {
            var e, l, c = n(1), f = 1;
            for (this.clearTask(),
            i = 0,
            r[0] = t.names[0],
            s[0] = "Start",
            a[0] = t.coords[0],
            h[0] = 0,
            u[0] = 0,
            e = 1; e < t.coords.length; e++)
                (l = o.getTrackData(t.coords[e - 1], t.coords[e])).distance > .03 && (r[f] = t.names[e],
                a[f] = t.coords[e],
                s[f] = "TP" + f,
                h[f] = l.distance,
                u[f] = l.bearing,
                i += l.distance,
                f++);
            "circle" === c.sectors.finishtype && (i -= c.sectors.finrad),
            s[s.length - 1] = "Finish"
        },
        getTaskLength: function() {
            return i
        },
        setLength: function() {
            var t, e = n(1), o = 0;
            for (t = 0; t < a.length; t++)
                o += h[t];
            "circle" === e.sectors.finishtype && (o -= e.sectors.finrad),
            i = o
        },
        names: r,
        labels: s,
        coords: a,
        bearing: u,
        legsize: h
    }
}
, function(t, e, n) {
    (function(e) {
        !function() {
            "use strict";
            var i, o = n(3), r = n(1), s = n(2), a = n(4), l = n(8), h = n(5), u = {
                status: "empty",
                start: null,
                end: null
            };
            function c(t, n) {
                var i, o = {
                    lat: t,
                    lng: n
                };
                switch (u.status) {
                case "empty":
                    a.showStart(o),
                    e("#measure1").html("Start: " + s.showFormat(o)),
                    e("#measure2").text("Click on finish point"),
                    u.status = "started",
                    u.start = o;
                    break;
                case "started":
                    a.showFinish(o),
                    u.end = o,
                    i = s.getTrackData(u.start, u.end),
                    e("#measure2").html("Finish: " + s.showFormat(o)),
                    e("#measure3").html("Distance: " + r.showDistance(i.distance) + "<br/>Initial bearing: " + i.bearing + "&deg;")
                }
            }
            function f() {
                e("#taskentry").hide(),
                e("#task").hide(),
                e("#taskbuttons").html(""),
                h.clearTask(),
                a.zapTask()
            }
            function d(t, n) {
                h.createTask(t);
                var i, o, l = h.getTaskLength();
                for (e("#taskbuttons").html(""),
                e("#taskinfo").html(""),
                i = 0; i < h.labels.length; i++) {
                    switch (e("#taskinfo").append("<tr><th>" + h.labels[i] + ":</th><td>" + h.names[i] + ":</td><td>" + s.showFormat(h.coords[i]) + "</td></tr>"),
                    i) {
                    case 0:
                        o = "Start";
                        break;
                    case h.labels.length - 1:
                        o = "Finish";
                        break;
                    default:
                        o = "TP" + i.toString()
                    }
                    e("#taskbuttons").append("&nbsp;<button class='zoombutton'>" + o + "</button>")
                }
                e("#tasklength").text("Task distance: " + r.showDistance(l)),
                e("#task").show(),
                e("#zoomlabel").show(),
                a.addTask(t, n),
                e("#map").css("visibility", "visible"),
                e("#taskbuttons button").on("click", function(t) {
                    var n = e(this).index();
                    a.showTP(h.coords[n]),
                    e("#zoomdiv").css("zIndex", 1)
                })
            }
            function p(t) {
                return s.unixToString((o.recordTime[t] + o.timeZone.offset + 86400) % 86400)
            }
            function m(t) {
                var e = "../xcwebplan/xcplan.php?version=" + t;
                i && !i.closed || (i = window.open(e, "_blank")),
                i.focus()
            }
            t.exports = {
                setSectors: function() {
                    var t = {
                        startrad: e("#startrad").val(),
                        finrad: e("#finishrad").val(),
                        tprad: e("#tpbarrelrad").val(),
                        sector_rad: e("#tpsectorrad").val(),
                        sector_angle: e("#subtends").val(),
                        use_sector: e("#tpsector").prop("checked"),
                        use_barrel: e("#tpbarrel").prop("checked"),
                        finishtype: e("input[name=finishtype]:checked").val()
                    }
                      , n = e("#savesectors").prop("checked");
                    r.setSectors(t, n) && (h && (h.setLength(),
                    e("#tasklength").text("Task distance: " + r.showDistance(h.getTaskLength()))),
                    a.addSectors(),
                    e("#sectordefs").hide())
                },
                setEnlPrefs: function() {
                    var t = {
                        detect: e("input[name=enldetect]:checked").val(),
                        threshold: e("#enlthreshold").val(),
                        duration: e("#enltime").val()
                    }
                      , n = e("#saveenl").prop("checked");
                    r.setEnl(t, n) && o.recordTime.length > 0 && (o.getEngineRuns(t),
                    a.showEngineRuns(o.engineRunList),
                    l.plot())
                },
                showImported: function(t) {
                    d(t, !0)
                },
                showSectorPreferences: function(t) {
                    var n;
                    n = "current" === t ? r.sectors : r.sectorDefaults,
                    e("#startrad").val(n.startrad),
                    e("#finishrad").val(n.finrad),
                    e("#tpbarrelrad").val(n.tprad),
                    e("#tpsectorrad").val(n.sector_rad),
                    e("#subtends").val(n.sector_angle),
                    n.use_sector && e("#tpsector").prop("checked", !0),
                    n.use_barrel && e("#tpbarrel").prop("checked", !0),
                    "line" === n.finishtype ? e("input[name=finishtype][value='line']").prop("checked", !0) : e("input[name=finishtype][value='circle']").prop("checked", !0)
                },
                showEnlPrefs: function(t) {
                    var n;
                    "On" === (n = "current" === t ? r.enlPrefs : r.enlDefaults).detect ? e("input[name=enldetect][value='On']").prop("checked", !0) : e("input[name=enldetect][value='Off']").prop("checked", !0),
                    e("#enlthreshold").val(n.threshold),
                    e("#enltime").val(n.duration)
                },
                showPreferences: function() {
                    e("#altitudeunits").val(r.units.altitude),
                    e("#lengthunits").val(r.units.distance),
                    e("#climbunits").val(r.units.climb),
                    e("#cruiseunits").val(r.units.cruise),
                    e("#taskunits").val(r.units.task),
                    e("#airclip").val(r.airclip),
                    this.showSectorPreferences("current"),
                    this.showEnlPrefs("current"),
                    this.showAltPreferences()
                },
                getUserTask: function() {
                    var t, n, i = !0, o = {
                        coords: [],
                        names: []
                    };
                    e("#requestdata :input[type=text]").each(function() {
                        (t = e(this).val().replace(/ /g, "")).length > 0 && ("OK" === (n = s.getPoint(t)).message ? (o.coords.push(n.coords),
                        o.names.push(n.name)) : (i = !1,
                        alert('"' + e(this).val() + '" not recognised- ignoring entry')))
                    }),
                    !0 === i && (o.names.length > 1 && d(o, !0),
                    e("#taskentry").hide())
                },
                replaceTask: function(t) {
                    switch (e("#taskentry").hide(),
                    e("#task").hide(),
                    t) {
                    case "igc":
                        o.latLong.length > 0 && (o.taskpoints.names.length > 1 ? d(o.taskpoints, !1) : alert("No task found in IGC file"));
                        break;
                    case "user":
                        e("#taskentry").show();
                        break;
                    case "world":
                        m("world");
                        break;
                    case "uk":
                        m("uk");
                        break;
                    case "nix":
                        f()
                    }
                },
                showPosition: function(t) {
                    var n = "Transition"
                      , i = o.getClimb(t)
                      , h = r.showAltitude(o.pressureAltitude[t], o.gpsAltitude[t], o.takeOff.pressure, o.takeOff.gps, o.baseElevation)
                      , u = "<b>Time:</b>&nbsp;" + p(t) + "&nbsp;" + o.timeZone.zoneAbbr + ":";
                    u += "  <b>Position:</b>&nbsp;" + s.showFormat(o.latLong[t]) + ":";
                    var c = o.getTakeOffIndex()
                      , f = o.getLandingIndex();
                    if (t < c)
                        n = "Pre&nbsp;take&nbsp;off";
                    else if (t > f)
                        n = "Landed";
                    else {
                        var d = Math.abs(o.turnRate[t]);
                        d > 5 ? n = "Circling" : e("#thermal").hide(),
                        d < 4 && (n = "Cruising")
                    }
                    "Circling" === n ? e("#thermal").show() : e("#thermal").hide(),
                    n && (u += " <b>Flight&nbsp;mode:</b>&nbsp;" + n + ":"),
                    u += " <b>Altitude:</b>&nbsp;" + h.displaySentence + ":",
                    null !== i && (u += " <b>Vario:</b>&nbsp;" + r.showClimb(i) + ":"),
                    "Cruising" === n && (u += " <b>Ground&nbsp;speed:</b>&nbsp;" + r.showCruise(o.groundSpeed[t])),
                    e("#timePositionDisplay").html(u);
                    var m = 1e3 * (o.recordTime[t] + o.timeZone.offset)
                      , g = h.altPos
                      , v = t > 0 ? s.getHeading(o.latLong[t - 1], o.latLong[t]) : 0;
                    a.setTimeMarker(o.latLong[t], v),
                    l.lockCrosshair({
                        x: m,
                        y: g
                    })
                },
                altChange: function(t) {
                    o.latLong.length > 0 && (l.plot(),
                    this.showPosition(t))
                },
                airClipChange: function() {
                    a.showAirspace()
                },
                lengthChange: function() {
                    var t = h.getTaskLength();
                    e("#tasklength").text("Task distance: " + r.showDistance(t))
                },
                getGeoInfo: function(t) {
                    if (null === t) {
                        var n = "Start elevation not available.";
                        e("#QNH").attr("disabled", !0),
                        e("#QFE").attr("disabled", !1),
                        "QNH" === r.altPrefs.altref && (n += " Using QFE",
                        r.altPrefs.altref = "QFE",
                        e("#QFE").prop("checked", !0)),
                        alert(n)
                    } else
                        e("#QNH").attr("disabled", !1),
                        o.baseElevation = t;
                    l.plot(),
                    e("#datecell").text(s.showDate(o.unixStart[0] + o.timeZone.offset)),
                    this.showPosition(0)
                },
                displayIgc: function() {
                    e("#flightInfo").show(),
                    null === o.takeOff.pressure ? (e("#P").attr("disabled", !0),
                    e("#G").attr("disabled", !1),
                    "P" === r.altPrefs.altsource && (alert("Pressure altitude not available. Using GPS"),
                    r.altPrefs.altsource = "G",
                    e("#G").prop("checked", !0))) : e("#P").attr("disabled", !1),
                    function t(e, n) {
                        window.haveMap || (++n > 10 ? alert("Map Load Failed") : setTimeout(function() {
                            t(e, n)
                        }))
                    }(10, 0),
                    e("#righthalf").css("visibility", "visible"),
                    e("#infobox").css("visibility", "visible");
                    var t = this.getGeoInfo.bind(this);
                    s.getLocalInfo(o.unixStart[0], o.latLong[0], o.timeZone, t),
                    function(t) {
                        var n, i = e("#headers");
                        for (i.html(""),
                        n = 0; n < t.length; n++)
                            i.append("<tr><th>" + t[n].name + ":  </th><td>" + t[n].value.replace(",", ",&#8203;") + "</td></tr>")
                    }(o.headers),
                    e("#timeSlider").val(0),
                    e("#timeSlider").prop("max", o.recordTime.length - 1),
                    a.setBounds(o.bounds),
                    e("#mapWrapper").css("visibility", "visible"),
                    e.when(s.getAirspace(o.bounds, 20)).done(function(t) {
                        a.setAirspace(t),
                        a.showAirspace()
                    }),
                    a.addTrack(o.latLong),
                    e("#zoomtrack").show(),
                    "On" === r.enlPrefs.detect && (o.getEngineRuns(r.enlPrefs),
                    a.showEngineRuns(o.engineRunList)),
                    "igc" === r.tasksource && (o.taskpoints.names.length > 1 ? d(o.taskpoints, !1) : f()),
                    document.getElementById("map").scrollIntoView(),
                    e("#timeSlider").val(0),
                    e("#timeSlider").prop("max", o.recordTime.length - 1)
                },
                zoomTrack: function() {
                    o && a.setBounds(o.bounds),
                    e("#zoomdiv").css("zIndex", 1)
                },
                showAltPreferences: function() {
                    var t = r.altPrefs.altsource;
                    e("#" + t).prop("checked", !0);
                    var n = r.altPrefs.altref;
                    e("#" + n).prop("checked", !0)
                },
                reportFlight: function() {
                    e("#sectordefs").hide(),
                    e("taskcalcs").text(""),
                    e("#taskdata").show();
                    var t, i, l, u = o.getTakeOffIndex(), c = o.getLandingIndex(), f = [], d = n(9);
                    if (e("#taskcalcs").html("Take off:  " + p(u) + "<br>"),
                    h.coords.length > 1) {
                        var m;
                        for (l = d.assessTask(),
                        m = 0; m < h.coords.length; m++)
                            e("#taskcalcs").append("<br/>" + h.labels[m] + ": "),
                            m < l.npoints ? (e("#taskcalcs").append(p(l.turnIndices[m]) + ": Altitude: "),
                            f[m] = r.showAltitude(o.pressureAltitude[l.turnIndices[m]], o.gpsAltitude[l.turnIndices[m]], o.takeOff.pressure, o.takeOff.gps, o.baseElevation),
                            e("#taskcalcs").append(f[m].altPos + f[m].descriptor)) : e("#taskcalcs").append("No control");
                        if (l.npoints === h.coords.length) {
                            a.clearPin(),
                            e("#taskcalcs").append("<br/><br/>" + r.showDistance(h.getTaskLength()) + "  task completed"),
                            i = l.turnIndices[l.npoints - 1];
                            var g = o.recordTime[i] - o.recordTime[l.turnIndices[0]];
                            e("#taskcalcs").append("<br/>Elapsed time: " + s.unixToPaddedString(g)),
                            e("#taskcalcs").append("<br/>Speed: " + r.showTaskSpeed(3600 * h.getTaskLength() / g)),
                            t = f[0].altPos - f[h.coords.length - 1].altPos,
                            e("#taskcalcs").append("<br/>Height loss: " + t + " " + f[0].descriptor),
                            "mt" !== r.units.altitude && (t = "P" === r.altPrefs.source ? o.pressureAltitude[l.turnIndices[0]] - o.pressureAltitude[l.turnIndices[h.coords.length - 1]] : o.gpsAltitude[l.turnIndices[0]] - o.gpsAltitude[l.turnIndices[h.coords.length - 1]],
                            e("#taskcalcs").append(" (" + t + "m)"))
                        } else
                            l.npoints > 0 && (i = l.bestPoint,
                            e("#taskcalcs").append('<br/><br/>"GPS Landing" at: ' + p(l.bestPoint)),
                            e("#taskcalcs").append("<br/>Position: " + s.showFormat(o.latLong[l.bestPoint])),
                            e("#taskcalcs").append("<br/>Scoring distance: " + r.showDistance(l.scoreDistance)),
                            a.pushPin(o.latLong[l.bestPoint]))
                    }
                    e("#taskcalcs").append("<br/><br/>Landing: " + p(c));
                    var v = o.recordTime[c] - o.recordTime[u];
                    if (e("#taskcalcs").append("<br/><br/>Flight time: " + Math.floor(v / 3600) + "hrs " + s.pad(Math.round(v / 60) % 60) + "mins"),
                    l.npoints > 0) {
                        var _ = d.getThermalCount(l.turnIndices[0], i);
                        e("#taskcalcs").append("<br/><br/><b>On Task: </b>"),
                        e("#taskcalcs").append("<br/>Time  circling: " + Math.floor(_.circleTime / 60) + " mins " + _.circleTime % 60 + " secs");
                        var y = r.displayAlt(_.heightGain);
                        e("#taskcalcs").append("<br/>Height gained: " + y.showval + " " + y.descriptor),
                        _.circleTime > 0 && e("#taskcalcs").append("<br/>Average climb: " + r.showClimb(_.heightGain / _.circleTime)),
                        e("#taskcalcs").append("<br/><br/>Task wind: " + r.showCruise(_.windSpeed) + " from " + Math.round(_.windDirection) + "&deg;")
                    }
                },
                showQfe: function(t, n, i) {
                    var s;
                    if (null !== t) {
                        s = null === o.takeOff.pressure ? o.gpsAltitude[n] - o.takeOff.gps + o.baseElevation - t : o.pressureAltitude[n] - o.takeOff.pressure + o.baseElevation - t;
                        var a = r.displayAlt(s);
                        e("#heightAGL").text("Height above ground: " + a.showval + a.descriptor);
                        var l = r.displayAlt(t);
                        e("#terrain").text(l.showval + l.descriptor),
                        e("#htAgl").text(i - l.showval + l.descriptor)
                    }
                },
                reportThermal: function(t) {
                    var i, a = o.getThermalInfo(t), l = n(9).getWindInfo(a.entryIndex, a.exitIndex), h = r.showAltitude(o.pressureAltitude[a.entryIndex], o.gpsAltitude[a.entryIndex], o.takeOff.pressure, o.takeOff.gps, o.baseElevation), u = r.showAltitude(o.pressureAltitude[a.exitIndex], o.gpsAltitude[a.exitIndex], o.takeOff.pressure, o.takeOff.gps, o.baseElevation);
                    e("#thermalEntry").text(s.unixToString(a.entryTime) + " at " + h.altPos + h.descriptor),
                    e("#thermalExit").text(s.unixToString(a.exitTime) + " at " + u.altPos + u.descriptor),
                    e("#thermalGain").text(u.altPos - h.altPos + h.descriptor + " in " + s.unixToPaddedString(a.exitTime - a.entryTime)),
                    i = null === o.takeOff.pressure ? o.gpsAltitude[a.exitIndex] - o.gpsAltitude[a.entryIndex] : o.pressureAltitude[a.exitIndex] - o.pressureAltitude[a.entryIndex],
                    e("#thermalClimb").text(r.showClimb(i / (a.exitTime - a.entryTime))),
                    e("#windInfo").text(r.showCruise(l.speed) + " from " + Math.round(l.direction))
                },
                resetMeasure: function() {
                    e("#measurer p").text(""),
                    e("#measure1").text("Click on start point"),
                    u.status = "empty",
                    u.start = null,
                    u.finish = null,
                    a.clearMeasureFlags()
                },
                measure: function() {
                    this.resetMeasure(),
                    e("#measurer").show(),
                    a.activate(c)
                },
                zapMeasure: function() {
                    a.unclick()
                },
                reportHeightInfo: function(t) {
                    var n, i;
                    if (null !== o.baseElevation) {
                        n = null === o.takeOff.pressure ? o.gpsAltitude[t] - o.takeOff.gps + o.baseElevation : o.pressureAltitude[t] - o.takeOff.pressure + o.baseElevation,
                        i = r.displayAlt(n),
                        e("#qnh").text(i.showval + i.descriptor + " asl");
                        var a = this.showQfe.bind(this);
                        s.getElevation(o.latLong[t], a, t, i.showval)
                    }
                }
            }
        }()
    }
    ).call(this, n(0))
}
, function(t, e) {
    t.exports = {
        googleMaps: "AIzaSyBXPnl66xP6voS-ugjslmLhmk5OVD0vvPM",
        mapBoxToken: "pk.eyJ1IjoidHlkZHlub25uIiwiYSI6ImNqZTVlbmdoZDI4ZW4zMm11bW1lNnp5djEifQ.ITM95rvBZY5lIW10IiqKGA",
        ipgeolocation: "874d4677d0dd45919f39bc9a41035928",
        timezonedb: "ZYLUK8O4V0AS",
        geonames: "tyddynonn"
    }
}
, function(t, e, n) {
    (function(e) {
        var i;
        n(14),
        n(15),
        n(16),
        n(17),
        t.exports = {
            plot: function() {
                var t, o, r, s, a, l, h, u, c, f = [], d = [], p = 0, m = n(3), g = n(1), v = 0, _ = 1e3 * (m.recordTime[0] + m.timeZone.offset), y = 1e3 * (m.recordTime[m.recordTime.length - 1] + m.timeZone.offset);
                if ("Off" === g.enlPrefs.detect ? (a = !1,
                l = "") : (a = !0,
                l = "ENL",
                h = g.enlPrefs.threshold),
                "ft" === g.units.altitude ? (s = g.metre2foot,
                c = "Altitude (feet)") : (c = "Altitude (metres)",
                s = 1),
                "QNH" === g.altPrefs.altref && (p = m.baseElevation),
                "P" === g.altPrefs.altsource)
                    for (o = "Pressure Altitude",
                    r = "#FF0000",
                    "std" !== g.altPrefs.altref && (p -= m.takeOff.pressure),
                    t = 0; t < m.recordTime.length; t++)
                        u = s * (m.pressureAltitude[t] + p),
                        f.push([1e3 * (m.recordTime[t] + m.timeZone.offset), u]),
                        u < v && (v = u);
                else
                    for (o = "GPS Altitude",
                    r = "#8080FF",
                    "std" !== g.altPrefs.altref && (p -= m.takeOff.gps),
                    t = 0; t < m.recordTime.length; t++)
                        "A" === m.fixQuality[t] && f.push([1e3 * (m.recordTime[t] + m.timeZone.offset), s * (m.gpsAltitude[t] + p)]);
                if (a)
                    for (t = 0; t < m.recordTime.length; t++)
                        d.push([1e3 * (m.recordTime[t] + m.timeZone.offset), m.enl[t]]);
                o = o + " (" + g.altPrefs.altref + ")",
                i = new e.plot("#barogram",[{
                    label: l,
                    data: d,
                    yaxis: 2,
                    bars: {
                        show: a
                    },
                    lines: {
                        show: !1
                    },
                    color: "#D0D0FF"
                }, {
                    label: o,
                    data: f,
                    color: r
                }, {
                    label: "",
                    data: [[_, h], [y, h]],
                    color: "#D0D0FF",
                    yaxis: 2,
                    lines: {
                        show: a
                    }
                }],{
                    axisLabels: {
                        show: !0
                    },
                    xaxes: [{
                        mode: "time",
                        timeformat: "%H:%M",
                        axisLabel: "Time (" + m.timeZone.zoneName + ")"
                    }],
                    yaxes: [{
                        axisLabel: c,
                        min: v
                    }, {
                        position: "right",
                        axisLabel: "Environmental Noise Level",
                        min: 20,
                        max: 4e3,
                        show: a,
                        ticks: [0, 500, 1e3]
                    }],
                    crosshair: {
                        mode: "xy"
                    },
                    grid: {
                        clickable: !0,
                        autoHighlight: !1
                    }
                }),
                e("#barogram").bind("plotclick", function(t, i, o) {
                    o && (n(6).showPosition(o.dataIndex),
                    e("#timeSlider").val(o.dataIndex),
                    e("#timeSlider").focus(),
                    e(".easyclose").hide())
                })
            },
            replot: function() {
                e("#barogram").text(""),
                this.plot()
            },
            lockCrosshair: function(t) {
                i.lockCrosshair(t)
            }
        }
    }
    ).call(this, n(0))
}
, function(t, e, n) {
    !function() {
        var e = n(3)
          , i = n(5)
          , o = n(1)
          , r = n(2);
        function s(t, e) {
            var n = e.min
              , i = e.max;
            return n > i && (i += 360,
            t < e.max && (t += 360)),
            t > n && t < i
        }
        function a(t, n, a) {
            var l, h, u, c, f, d, p, m, g = t, v = -1, _ = 0, y = [];
            do {
                v < 2 && (s((l = r.toPoint(i.coords[0], e.latLong[g])).bearing, a[0]) && l.distance < o.sectors.startrad ? (v = 0,
                h = g,
                u = 0) : 0 === v && (v = 1,
                h = g,
                u = i.legsize[1])),
                v > 0 && v < i.coords.length && (c = r.toPoint(e.latLong[g], i.coords[v]),
                f = !1,
                v === i.coords.length - 1 ? c.distance < o.sectors.finrad && ("circle" === o.sectors.finishtype ? f = !0 : s(c.bearing, a[v]) && (f = !0)) : (o.sectors.use_barrel && c.distance < o.sectors.tprad && (f = !0),
                o.sectors.use_sector && s(c.bearing, a[v]) && c.distance < o.sectors.sector_rad && (f = !0)),
                f ? (_ = u,
                d = g,
                y[v] = g,
                v++,
                u += i.legsize[v]) : (m = u - c.distance) > _ && (_ = m,
                y[0] = h,
                d = g,
                p = v)),
                g++
            } while (g < n);
            return 0 === _ && (v = 0),
            p === v && v < i.coords.length && (_ = u - r.getTrackData(e.latLong[d], i.coords[v]).distance),
            p > v && (v = p),
            {
                npoints: v,
                turnIndices: y,
                scoreDistance: _,
                bestPoint: d
            }
        }
        t.exports = {
            assessTask: function() {
                var t, n, r, s = 0, l = function(t, e) {
                    var n, i, o, r, s = [];
                    for (n = 1; n < t.coords.length + 1; n++) {
                        var a = {};
                        switch (n) {
                        case 1:
                            i = t.bearing[1],
                            a.max = i - 90,
                            a.min = i + 90;
                            break;
                        case t.coords.length:
                            i = t.bearing[t.coords.length - 1],
                            a.max = i - 90,
                            a.min = i + 90;
                            break;
                        default:
                            e.use_sector && (o = (t.bearing[n] + 180) % 360,
                            r = t.bearing[n - 1] + (o - t.bearing[n - 1]) / 2,
                            Math.abs(o - t.bearing[n - 1]) < 180 && (r = (r + 180) % 360),
                            a.max = r + e.sector_angle / 2,
                            a.min = r - e.sector_angle / 2)
                        }
                        a.max = (a.max + 360) % 360,
                        a.min = (a.min + 360) % 360,
                        s.push(a)
                    }
                    return s
                }(i, o.sectors);
                if ("Off" === o.enlPrefs.detect || 0 === e.engineRunList.length)
                    t = a(e.getTakeOffIndex(), e.getLandingIndex(), l);
                else
                    for (r = 0; r < e.glidingRuns.start.length; r++)
                        (n = a(e.glidingRuns.start[r], e.glidingRuns.end[r], l)).scoreDistance > s && (s = n.scoreDistance,
                        t = n);
                return t
            },
            getThermalCount: function(t, n) {
                var i, o, r, s = t, a = 0, l = 0;
                do {
                    do {
                        s++
                    } while (Math.abs(e.turnRate[s]) < 6 && s < n);
                    s < n && (i = e.getThermalInfo(s),
                    (o = e.recordTime[i.exitIndex] - e.recordTime[i.entryIndex]) > 30 && (a += o,
                    null === e.takeOff.pressure ? l += e.gpsAltitude[i.exitIndex] - e.gpsAltitude[i.entryIndex] : l += e.pressureAltitude[i.exitIndex] - e.pressureAltitude[i.entryIndex],
                    0),
                    s = i.exitIndex)
                } while (s < n);
                return {
                    circleTime: a,
                    heightGain: l,
                    windSpeed: (r = this.getWindInfo(t, n)).speed,
                    windDirection: r.direction
                }
            },
            getWindInfo: function(t, n) {
                var i, o, s, a, l, h, u, c = [], f = [], d = 0, p = 0, m = t;
                do {
                    Math.abs(e.turnRate[m]) > 6 && (a = m,
                    l = void 0,
                    h = void 0,
                    u = void 0,
                    l = r.getEarthSize(),
                    h = (e.latLong[a + 1].lng - e.latLong[a].lng) * Math.cos(Math.PI * (e.latLong[a + 1].lat + e.latLong[a].lat) / 360),
                    u = 1e3 * (e.latLong[a + 1].lat - e.latLong[a].lat) * Math.PI * l / 180 / (e.recordTime[a + 1] - e.recordTime[a]),
                    i = {
                        xVector: 1e3 * h * Math.PI * l / 180 / (e.recordTime[a + 1] - e.recordTime[a]),
                        yVector: u
                    },
                    c.push(i.xVector),
                    d += i.xVector,
                    f.push(i.yVector),
                    p += i.yVector),
                    m++
                } while (m < n);
                o = d / c.length,
                s = p / f.length;
                var g = r.kasaRegress(c, f, o, s);
                return {
                    speed: 3.6 * g.magnitude,
                    direction: g.direction
                }
            }
        }
    }()
}
, function(t, e, n) {
    (function(t) {
        !function() {
            var e;
            n(7);
            function i() {
                t(".easyclose").hide()
            }
            window.ginit = function() {
                t("#mapWrapper").show();
                var e = n(4);
                window.haveMap = e.initmap()
            }
            ,
            window.importTask = function(t) {
                return n(6).showImported(t),
                "Task Entered"
            }
            ,
            window.name = "igcview",
            t(document).ready(function() {
                var o = n(1)
                  , r = n(6)
                  , s = n(3);
                o.getStoredValues(),
                r.showPreferences(),
                document.getElementById("help").scrollIntoView(),
                ginit(),
                t("#igc").prop("checked", !0),
                t("#help").click(function() {
                    window.open("igchelp.html", "_blank")
                }),
                t("#about").click(function() {
                    window.open("igcabout.html", "_blank")
                }),
                t("#fileControl").change(function() {
                    if (this.files.length > 0) {
                        var t = new FileReader;
                        t.onload = function(t) {
                            try {
                                s.initialise(this.result),
                                r.displayIgc()
                            } catch (t) {
                                if (!(t instanceof s.IGCException))
                                    throw t;
                                alert(t.message)
                            }
                        }
                        ,
                        t.readAsText(this.files[0])
                    }
                });
                var a = function() {
                    if ("visible" === t("#righthalf").css("visibility")) {
                        var e = n(8)
                          , i = n(4);
                        e.replot(),
                        i.resizeMap()
                    }
                };
                window.onresize = function() {
                    clearTimeout(e),
                    e = setTimeout(a, 100)
                }
                ,
                t(".closewindow").click(function() {
                    t(".easyclose").hide(),
                    t("#timeSlider").focus()
                }),
                t("#timeSlider").on("input", function() {
                    i();
                    var e = parseInt(t(this).val(), 10);
                    r.showPosition(e)
                }),
                t("#timeSlider").on("change", function() {
                    i();
                    var e = parseInt(t(this).val(), 10);
                    r.showPosition(e)
                }),
                t("#zoomtrack").click(function() {
                    r.zoomTrack()
                }),
                t("#airclip").change(function() {
                    o.setAirclip(t(this).val()),
                    r.airClipChange()
                }),
                t("#altitudeunits").change(function() {
                    o.setAltUnits(t(this).val()),
                    r.altChange(parseInt(t("#timeSlider").val(), 10))
                }),
                t("#climbunits").change(function() {
                    if (o.setClimbUnits(t(this).val()),
                    s.recordTime.length > 0) {
                        var e = parseInt(t("#timeSlider").val(), 10);
                        r.showPosition(e)
                    }
                }),
                t("#lengthunits").change(function() {
                    o.setLengthUnits(t(this).val()),
                    r.lengthChange()
                }),
                t("#cruiseunits").change(function() {
                    o.setCruiseUnits(t(this).val())
                }),
                t("#taskunits").change(function() {
                    o.setTaskUnits(t(this).val())
                }),
                t("#unitconfig").click(function() {
                    i(),
                    t("#setunits").show()
                }),
                t("#enterTask").click(function() {
                    r.getUserTask()
                }),
                t("input[type=radio][name=tasksource]").change(function() {
                    o.setTaskSource(this.id),
                    r.replaceTask(this.id)
                }),
                t("#sectorconfig").click(function() {
                    i(),
                    t("#sectordefs").show()
                }),
                t("#tpdefaults").click(function() {
                    r.showSectorPreferences("default")
                }),
                t("#setsectors").click(function() {
                    r.setSectors()
                }),
                t("#tpdefaults").click(function() {
                    o.setSectorDefaults(),
                    r.showSectorPreferences()
                }),
                t("#enl").click(function() {
                    i(),
                    t("#setenl").show()
                }),
                t("#enldefaults").click(function() {
                    r.showEnlPrefs("default")
                }),
                t("#enlhelp").click(function() {
                    window.open("igchelp.html#enl", "_blank")
                }),
                t("#applyenl").click(function() {
                    r.setEnlPrefs()
                }),
                t("#cancelenl").click(function() {
                    r.showEnlPrefs()
                }),
                t("#altref").click(function() {
                    i(),
                    t("#setaltref").show()
                }),
                t("#althelp").click(function() {
                    window.open("igchelp.html#alt", "_blank")
                }),
                t("#restorealtref").click(function() {
                    r.showAltPreferences()
                }),
                t("#analyse").click(function() {
                    i(),
                    r.reportFlight()
                }),
                t("#height").click(function() {
                    i(),
                    t("#heightDetail").show();
                    var e = parseInt(t("#timeSlider").val(), 10);
                    r.reportHeightInfo(e)
                }),
                t("#thermal").click(function() {
                    i(),
                    t("#thermalDetail").show();
                    var e = parseInt(t("#timeSlider").val(), 10);
                    r.reportThermal(e)
                }),
                t("#applyaltref").click(function() {
                    o.setAltPrefs(t("input[name='alttype']").filter(":checked").val(), t("input[name='altsource']").filter(":checked").val()),
                    r.altChange(parseInt(t("#timeSlider").val(), 10))
                }),
                t("#showgraph").click(function() {
                    t(this).parent().hide(),
                    t("#map").css("zIndex", 1),
                    t("#barogram").css("zIndex", 10),
                    t("#showmap").show()
                }),
                t("#showmap").click(function() {
                    t("#map").css("zIndex", 10),
                    t("#barogram").css("zIndex", 1),
                    t("#mapbuttons").show(),
                    t(this).hide()
                }),
                t("#showzoom").click(function() {
                    t("#zoomdiv").css("zIndex", 25),
                    t("#zoomlabel").hide()
                }),
                t("#measure").click(function() {
                    r.measure()
                }),
                t("#measurer :button").click(function() {
                    r.resetMeasure()
                }),
                t("#closemeasure").click(function() {
                    r.zapMeasure()
                }),
                t("button.toggle").click(function() {
                    t(this).next().toggle(),
                    t(this).next().is(":visible") ? t(this).text("Hide") : t(this).text("Show")
                });
                var l = new URLSearchParams(window.location.search).get("igc");
                if (l) {
                    var h = new XMLHttpRequest;
                    h.open("GET", l, !0),
                    h.responseType = "blob",
                    h.onload = function() {
                        var t, e;
                        t = h.response,
                        (e = new FileReader).readAsText(t),
                        e.onload = function(t) {
                            try {
                                s.initialise(this.result),
                                r.displayIgc()
                            } catch (t) {
                                if (!(t instanceof s.IGCException))
                                    throw t;
                                alert(t.message)
                            }
                        }
                    }
                    ,
                    h.send()
                }
            })
        }()
    }
    ).call(this, n(0))
}
, function(t, e, n) {
    /* @preserve
 * Leaflet 1.3.4, a JS library for interactive maps. http://leafletjs.com
 * (c) 2010-2018 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
    !function(t) {
        "use strict";
        var e = Object.freeze;
        function n(t) {
            var e, n, i, o;
            for (n = 1,
            i = arguments.length; n < i; n++)
                for (e in o = arguments[n])
                    t[e] = o[e];
            return t
        }
        Object.freeze = function(t) {
            return t
        }
        ;
        var i = Object.create || function() {
            function t() {}
            return function(e) {
                return t.prototype = e,
                new t
            }
        }();
        function o(t, e) {
            var n = Array.prototype.slice;
            if (t.bind)
                return t.bind.apply(t, n.call(arguments, 1));
            var i = n.call(arguments, 2);
            return function() {
                return t.apply(e, i.length ? i.concat(n.call(arguments)) : arguments)
            }
        }
        var r = 0;
        function s(t) {
            return t._leaflet_id = t._leaflet_id || ++r,
            t._leaflet_id
        }
        function a(t, e, n) {
            var i, o, r, s;
            return s = function() {
                i = !1,
                o && (r.apply(n, o),
                o = !1)
            }
            ,
            r = function() {
                i ? o = arguments : (t.apply(n, arguments),
                setTimeout(s, e),
                i = !0)
            }
        }
        function l(t, e, n) {
            var i = e[1]
              , o = e[0]
              , r = i - o;
            return t === i && n ? t : ((t - o) % r + r) % r + o
        }
        function h() {
            return !1
        }
        function u(t, e) {
            var n = Math.pow(10, void 0 === e ? 6 : e);
            return Math.round(t * n) / n
        }
        function c(t) {
            return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
        }
        function f(t) {
            return c(t).split(/\s+/)
        }
        function d(t, e) {
            for (var n in t.hasOwnProperty("options") || (t.options = t.options ? i(t.options) : {}),
            e)
                t.options[n] = e[n];
            return t.options
        }
        function p(t, e, n) {
            var i = [];
            for (var o in t)
                i.push(encodeURIComponent(n ? o.toUpperCase() : o) + "=" + encodeURIComponent(t[o]));
            return (e && -1 !== e.indexOf("?") ? "&" : "?") + i.join("&")
        }
        var m = /\{ *([\w_-]+) *\}/g;
        function g(t, e) {
            return t.replace(m, function(t, n) {
                var i = e[n];
                if (void 0 === i)
                    throw new Error("No value provided for variable " + t);
                return "function" == typeof i && (i = i(e)),
                i
            })
        }
        var v = Array.isArray || function(t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        }
        ;
        function _(t, e) {
            for (var n = 0; n < t.length; n++)
                if (t[n] === e)
                    return n;
            return -1
        }
        var y = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
        function x(t) {
            return window["webkit" + t] || window["moz" + t] || window["ms" + t]
        }
        var b = 0;
        function w(t) {
            var e = +new Date
              , n = Math.max(0, 16 - (e - b));
            return b = e + n,
            window.setTimeout(t, n)
        }
        var T = window.requestAnimationFrame || x("RequestAnimationFrame") || w
          , k = window.cancelAnimationFrame || x("CancelAnimationFrame") || x("CancelRequestAnimationFrame") || function(t) {
            window.clearTimeout(t)
        }
        ;
        function P(t, e, n) {
            if (!n || T !== w)
                return T.call(window, o(t, e));
            t.call(e)
        }
        function S(t) {
            t && k.call(window, t)
        }
        var M = (Object.freeze || Object)({
            freeze: e,
            extend: n,
            create: i,
            bind: o,
            lastId: r,
            stamp: s,
            throttle: a,
            wrapNum: l,
            falseFn: h,
            formatNum: u,
            trim: c,
            splitWords: f,
            setOptions: d,
            getParamString: p,
            template: g,
            isArray: v,
            indexOf: _,
            emptyImageUrl: y,
            requestFn: T,
            cancelFn: k,
            requestAnimFrame: P,
            cancelAnimFrame: S
        });
        function C() {}
        C.extend = function(t) {
            var e = function() {
                this.initialize && this.initialize.apply(this, arguments),
                this.callInitHooks()
            }
              , o = e.__super__ = this.prototype
              , r = i(o);
            for (var s in r.constructor = e,
            e.prototype = r,
            this)
                this.hasOwnProperty(s) && "prototype" !== s && "__super__" !== s && (e[s] = this[s]);
            return t.statics && (n(e, t.statics),
            delete t.statics),
            t.includes && (function(t) {
                if ("undefined" != typeof L && L && L.Mixin) {
                    t = v(t) ? t : [t];
                    for (var e = 0; e < t.length; e++)
                        t[e] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", (new Error).stack)
                }
            }(t.includes),
            n.apply(null, [r].concat(t.includes)),
            delete t.includes),
            r.options && (t.options = n(i(r.options), t.options)),
            n(r, t),
            r._initHooks = [],
            r.callInitHooks = function() {
                if (!this._initHooksCalled) {
                    o.callInitHooks && o.callInitHooks.call(this),
                    this._initHooksCalled = !0;
                    for (var t = 0, e = r._initHooks.length; t < e; t++)
                        r._initHooks[t].call(this)
                }
            }
            ,
            e
        }
        ,
        C.include = function(t) {
            return n(this.prototype, t),
            this
        }
        ,
        C.mergeOptions = function(t) {
            return n(this.prototype.options, t),
            this
        }
        ,
        C.addInitHook = function(t) {
            var e = Array.prototype.slice.call(arguments, 1)
              , n = "function" == typeof t ? t : function() {
                this[t].apply(this, e)
            }
            ;
            return this.prototype._initHooks = this.prototype._initHooks || [],
            this.prototype._initHooks.push(n),
            this
        }
        ;
        var z = {
            on: function(t, e, n) {
                if ("object" == typeof t)
                    for (var i in t)
                        this._on(i, t[i], e);
                else {
                    t = f(t);
                    for (var o = 0, r = t.length; o < r; o++)
                        this._on(t[o], e, n)
                }
                return this
            },
            off: function(t, e, n) {
                if (t)
                    if ("object" == typeof t)
                        for (var i in t)
                            this._off(i, t[i], e);
                    else {
                        t = f(t);
                        for (var o = 0, r = t.length; o < r; o++)
                            this._off(t[o], e, n)
                    }
                else
                    delete this._events;
                return this
            },
            _on: function(t, e, n) {
                this._events = this._events || {};
                var i = this._events[t];
                i || (i = [],
                this._events[t] = i),
                n === this && (n = void 0);
                for (var o = {
                    fn: e,
                    ctx: n
                }, r = i, s = 0, a = r.length; s < a; s++)
                    if (r[s].fn === e && r[s].ctx === n)
                        return;
                r.push(o)
            },
            _off: function(t, e, n) {
                var i, o, r;
                if (this._events && (i = this._events[t]))
                    if (e) {
                        if (n === this && (n = void 0),
                        i)
                            for (o = 0,
                            r = i.length; o < r; o++) {
                                var s = i[o];
                                if (s.ctx === n && s.fn === e)
                                    return s.fn = h,
                                    this._firingCount && (this._events[t] = i = i.slice()),
                                    void i.splice(o, 1)
                            }
                    } else {
                        for (o = 0,
                        r = i.length; o < r; o++)
                            i[o].fn = h;
                        delete this._events[t]
                    }
            },
            fire: function(t, e, i) {
                if (!this.listens(t, i))
                    return this;
                var o = n({}, e, {
                    type: t,
                    target: this,
                    sourceTarget: e && e.sourceTarget || this
                });
                if (this._events) {
                    var r = this._events[t];
                    if (r) {
                        this._firingCount = this._firingCount + 1 || 1;
                        for (var s = 0, a = r.length; s < a; s++) {
                            var l = r[s];
                            l.fn.call(l.ctx || this, o)
                        }
                        this._firingCount--
                    }
                }
                return i && this._propagateEvent(o),
                this
            },
            listens: function(t, e) {
                var n = this._events && this._events[t];
                if (n && n.length)
                    return !0;
                if (e)
                    for (var i in this._eventParents)
                        if (this._eventParents[i].listens(t, e))
                            return !0;
                return !1
            },
            once: function(t, e, n) {
                if ("object" == typeof t) {
                    for (var i in t)
                        this.once(i, t[i], e);
                    return this
                }
                var r = o(function() {
                    this.off(t, e, n).off(t, r, n)
                }, this);
                return this.on(t, e, n).on(t, r, n)
            },
            addEventParent: function(t) {
                return this._eventParents = this._eventParents || {},
                this._eventParents[s(t)] = t,
                this
            },
            removeEventParent: function(t) {
                return this._eventParents && delete this._eventParents[s(t)],
                this
            },
            _propagateEvent: function(t) {
                for (var e in this._eventParents)
                    this._eventParents[e].fire(t.type, n({
                        layer: t.target,
                        propagatedFrom: t.target
                    }, t), !0)
            }
        };
        z.addEventListener = z.on,
        z.removeEventListener = z.clearAllEventListeners = z.off,
        z.addOneTimeEventListener = z.once,
        z.fireEvent = z.fire,
        z.hasEventListeners = z.listens;
        var E = C.extend(z);
        function A(t, e, n) {
            this.x = n ? Math.round(t) : t,
            this.y = n ? Math.round(e) : e
        }
        var I = Math.trunc || function(t) {
            return t > 0 ? Math.floor(t) : Math.ceil(t)
        }
        ;
        function O(t, e, n) {
            return t instanceof A ? t : v(t) ? new A(t[0],t[1]) : null == t ? t : "object" == typeof t && "x"in t && "y"in t ? new A(t.x,t.y) : new A(t,e,n)
        }
        function B(t, e) {
            if (t)
                for (var n = e ? [t, e] : t, i = 0, o = n.length; i < o; i++)
                    this.extend(n[i])
        }
        function N(t, e) {
            return !t || t instanceof B ? t : new B(t,e)
        }
        function D(t, e) {
            if (t)
                for (var n = e ? [t, e] : t, i = 0, o = n.length; i < o; i++)
                    this.extend(n[i])
        }
        function F(t, e) {
            return t instanceof D ? t : new D(t,e)
        }
        function Z(t, e, n) {
            if (isNaN(t) || isNaN(e))
                throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
            this.lat = +t,
            this.lng = +e,
            void 0 !== n && (this.alt = +n)
        }
        function R(t, e, n) {
            return t instanceof Z ? t : v(t) && "object" != typeof t[0] ? 3 === t.length ? new Z(t[0],t[1],t[2]) : 2 === t.length ? new Z(t[0],t[1]) : null : null == t ? t : "object" == typeof t && "lat"in t ? new Z(t.lat,"lng"in t ? t.lng : t.lon,t.alt) : void 0 === e ? null : new Z(t,e,n)
        }
        A.prototype = {
            clone: function() {
                return new A(this.x,this.y)
            },
            add: function(t) {
                return this.clone()._add(O(t))
            },
            _add: function(t) {
                return this.x += t.x,
                this.y += t.y,
                this
            },
            subtract: function(t) {
                return this.clone()._subtract(O(t))
            },
            _subtract: function(t) {
                return this.x -= t.x,
                this.y -= t.y,
                this
            },
            divideBy: function(t) {
                return this.clone()._divideBy(t)
            },
            _divideBy: function(t) {
                return this.x /= t,
                this.y /= t,
                this
            },
            multiplyBy: function(t) {
                return this.clone()._multiplyBy(t)
            },
            _multiplyBy: function(t) {
                return this.x *= t,
                this.y *= t,
                this
            },
            scaleBy: function(t) {
                return new A(this.x * t.x,this.y * t.y)
            },
            unscaleBy: function(t) {
                return new A(this.x / t.x,this.y / t.y)
            },
            round: function() {
                return this.clone()._round()
            },
            _round: function() {
                return this.x = Math.round(this.x),
                this.y = Math.round(this.y),
                this
            },
            floor: function() {
                return this.clone()._floor()
            },
            _floor: function() {
                return this.x = Math.floor(this.x),
                this.y = Math.floor(this.y),
                this
            },
            ceil: function() {
                return this.clone()._ceil()
            },
            _ceil: function() {
                return this.x = Math.ceil(this.x),
                this.y = Math.ceil(this.y),
                this
            },
            trunc: function() {
                return this.clone()._trunc()
            },
            _trunc: function() {
                return this.x = I(this.x),
                this.y = I(this.y),
                this
            },
            distanceTo: function(t) {
                var e = (t = O(t)).x - this.x
                  , n = t.y - this.y;
                return Math.sqrt(e * e + n * n)
            },
            equals: function(t) {
                return (t = O(t)).x === this.x && t.y === this.y
            },
            contains: function(t) {
                return t = O(t),
                Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
            },
            toString: function() {
                return "Point(" + u(this.x) + ", " + u(this.y) + ")"
            }
        },
        B.prototype = {
            extend: function(t) {
                return t = O(t),
                this.min || this.max ? (this.min.x = Math.min(t.x, this.min.x),
                this.max.x = Math.max(t.x, this.max.x),
                this.min.y = Math.min(t.y, this.min.y),
                this.max.y = Math.max(t.y, this.max.y)) : (this.min = t.clone(),
                this.max = t.clone()),
                this
            },
            getCenter: function(t) {
                return new A((this.min.x + this.max.x) / 2,(this.min.y + this.max.y) / 2,t)
            },
            getBottomLeft: function() {
                return new A(this.min.x,this.max.y)
            },
            getTopRight: function() {
                return new A(this.max.x,this.min.y)
            },
            getTopLeft: function() {
                return this.min
            },
            getBottomRight: function() {
                return this.max
            },
            getSize: function() {
                return this.max.subtract(this.min)
            },
            contains: function(t) {
                var e, n;
                return (t = "number" == typeof t[0] || t instanceof A ? O(t) : N(t))instanceof B ? (e = t.min,
                n = t.max) : e = n = t,
                e.x >= this.min.x && n.x <= this.max.x && e.y >= this.min.y && n.y <= this.max.y
            },
            intersects: function(t) {
                t = N(t);
                var e = this.min
                  , n = this.max
                  , i = t.min
                  , o = t.max
                  , r = o.x >= e.x && i.x <= n.x
                  , s = o.y >= e.y && i.y <= n.y;
                return r && s
            },
            overlaps: function(t) {
                t = N(t);
                var e = this.min
                  , n = this.max
                  , i = t.min
                  , o = t.max
                  , r = o.x > e.x && i.x < n.x
                  , s = o.y > e.y && i.y < n.y;
                return r && s
            },
            isValid: function() {
                return !(!this.min || !this.max)
            }
        },
        D.prototype = {
            extend: function(t) {
                var e, n, i = this._southWest, o = this._northEast;
                if (t instanceof Z)
                    e = t,
                    n = t;
                else {
                    if (!(t instanceof D))
                        return t ? this.extend(R(t) || F(t)) : this;
                    if (e = t._southWest,
                    n = t._northEast,
                    !e || !n)
                        return this
                }
                return i || o ? (i.lat = Math.min(e.lat, i.lat),
                i.lng = Math.min(e.lng, i.lng),
                o.lat = Math.max(n.lat, o.lat),
                o.lng = Math.max(n.lng, o.lng)) : (this._southWest = new Z(e.lat,e.lng),
                this._northEast = new Z(n.lat,n.lng)),
                this
            },
            pad: function(t) {
                var e = this._southWest
                  , n = this._northEast
                  , i = Math.abs(e.lat - n.lat) * t
                  , o = Math.abs(e.lng - n.lng) * t;
                return new D(new Z(e.lat - i,e.lng - o),new Z(n.lat + i,n.lng + o))
            },
            getCenter: function() {
                return new Z((this._southWest.lat + this._northEast.lat) / 2,(this._southWest.lng + this._northEast.lng) / 2)
            },
            getSouthWest: function() {
                return this._southWest
            },
            getNorthEast: function() {
                return this._northEast
            },
            getNorthWest: function() {
                return new Z(this.getNorth(),this.getWest())
            },
            getSouthEast: function() {
                return new Z(this.getSouth(),this.getEast())
            },
            getWest: function() {
                return this._southWest.lng
            },
            getSouth: function() {
                return this._southWest.lat
            },
            getEast: function() {
                return this._northEast.lng
            },
            getNorth: function() {
                return this._northEast.lat
            },
            contains: function(t) {
                t = "number" == typeof t[0] || t instanceof Z || "lat"in t ? R(t) : F(t);
                var e, n, i = this._southWest, o = this._northEast;
                return t instanceof D ? (e = t.getSouthWest(),
                n = t.getNorthEast()) : e = n = t,
                e.lat >= i.lat && n.lat <= o.lat && e.lng >= i.lng && n.lng <= o.lng
            },
            intersects: function(t) {
                t = F(t);
                var e = this._southWest
                  , n = this._northEast
                  , i = t.getSouthWest()
                  , o = t.getNorthEast()
                  , r = o.lat >= e.lat && i.lat <= n.lat
                  , s = o.lng >= e.lng && i.lng <= n.lng;
                return r && s
            },
            overlaps: function(t) {
                t = F(t);
                var e = this._southWest
                  , n = this._northEast
                  , i = t.getSouthWest()
                  , o = t.getNorthEast()
                  , r = o.lat > e.lat && i.lat < n.lat
                  , s = o.lng > e.lng && i.lng < n.lng;
                return r && s
            },
            toBBoxString: function() {
                return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",")
            },
            equals: function(t, e) {
                return !!t && (t = F(t),
                this._southWest.equals(t.getSouthWest(), e) && this._northEast.equals(t.getNorthEast(), e))
            },
            isValid: function() {
                return !(!this._southWest || !this._northEast)
            }
        },
        Z.prototype = {
            equals: function(t, e) {
                if (!t)
                    return !1;
                t = R(t);
                var n = Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng));
                return n <= (void 0 === e ? 1e-9 : e)
            },
            toString: function(t) {
                return "LatLng(" + u(this.lat, t) + ", " + u(this.lng, t) + ")"
            },
            distanceTo: function(t) {
                return H.distance(this, R(t))
            },
            wrap: function() {
                return H.wrapLatLng(this)
            },
            toBounds: function(t) {
                var e = 180 * t / 40075017
                  , n = e / Math.cos(Math.PI / 180 * this.lat);
                return F([this.lat - e, this.lng - n], [this.lat + e, this.lng + n])
            },
            clone: function() {
                return new Z(this.lat,this.lng,this.alt)
            }
        };
        var j, W = {
            latLngToPoint: function(t, e) {
                var n = this.projection.project(t)
                  , i = this.scale(e);
                return this.transformation._transform(n, i)
            },
            pointToLatLng: function(t, e) {
                var n = this.scale(e)
                  , i = this.transformation.untransform(t, n);
                return this.projection.unproject(i)
            },
            project: function(t) {
                return this.projection.project(t)
            },
            unproject: function(t) {
                return this.projection.unproject(t)
            },
            scale: function(t) {
                return 256 * Math.pow(2, t)
            },
            zoom: function(t) {
                return Math.log(t / 256) / Math.LN2
            },
            getProjectedBounds: function(t) {
                if (this.infinite)
                    return null;
                var e = this.projection.bounds
                  , n = this.scale(t)
                  , i = this.transformation.transform(e.min, n)
                  , o = this.transformation.transform(e.max, n);
                return new B(i,o)
            },
            infinite: !1,
            wrapLatLng: function(t) {
                var e = this.wrapLng ? l(t.lng, this.wrapLng, !0) : t.lng
                  , n = this.wrapLat ? l(t.lat, this.wrapLat, !0) : t.lat
                  , i = t.alt;
                return new Z(n,e,i)
            },
            wrapLatLngBounds: function(t) {
                var e = t.getCenter()
                  , n = this.wrapLatLng(e)
                  , i = e.lat - n.lat
                  , o = e.lng - n.lng;
                if (0 === i && 0 === o)
                    return t;
                var r = t.getSouthWest()
                  , s = t.getNorthEast()
                  , a = new Z(r.lat - i,r.lng - o)
                  , l = new Z(s.lat - i,s.lng - o);
                return new D(a,l)
            }
        }, H = n({}, W, {
            wrapLng: [-180, 180],
            R: 6371e3,
            distance: function(t, e) {
                var n = Math.PI / 180
                  , i = t.lat * n
                  , o = e.lat * n
                  , r = Math.sin((e.lat - t.lat) * n / 2)
                  , s = Math.sin((e.lng - t.lng) * n / 2)
                  , a = r * r + Math.cos(i) * Math.cos(o) * s * s
                  , l = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                return this.R * l
            }
        }), q = {
            R: 6378137,
            MAX_LATITUDE: 85.0511287798,
            project: function(t) {
                var e = Math.PI / 180
                  , n = this.MAX_LATITUDE
                  , i = Math.max(Math.min(n, t.lat), -n)
                  , o = Math.sin(i * e);
                return new A(this.R * t.lng * e,this.R * Math.log((1 + o) / (1 - o)) / 2)
            },
            unproject: function(t) {
                var e = 180 / Math.PI;
                return new Z((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * e,t.x * e / this.R)
            },
            bounds: (j = 6378137 * Math.PI,
            new B([-j, -j],[j, j]))
        };
        function U(t, e, n, i) {
            if (v(t))
                return this._a = t[0],
                this._b = t[1],
                this._c = t[2],
                void (this._d = t[3]);
            this._a = t,
            this._b = e,
            this._c = n,
            this._d = i
        }
        function V(t, e, n, i) {
            return new U(t,e,n,i)
        }
        U.prototype = {
            transform: function(t, e) {
                return this._transform(t.clone(), e)
            },
            _transform: function(t, e) {
                return e = e || 1,
                t.x = e * (this._a * t.x + this._b),
                t.y = e * (this._c * t.y + this._d),
                t
            },
            untransform: function(t, e) {
                return e = e || 1,
                new A((t.x / e - this._b) / this._a,(t.y / e - this._d) / this._c)
            }
        };
        var G = n({}, H, {
            code: "EPSG:3857",
            projection: q,
            transformation: function() {
                var t = .5 / (Math.PI * q.R);
                return V(t, .5, -t, .5)
            }()
        })
          , $ = n({}, G, {
            code: "EPSG:900913"
        });
        function Y(t) {
            return document.createElementNS("http://www.w3.org/2000/svg", t)
        }
        function X(t, e) {
            var n, i, o, r, s, a, l = "";
            for (n = 0,
            o = t.length; n < o; n++) {
                for (s = t[n],
                i = 0,
                r = s.length; i < r; i++)
                    a = s[i],
                    l += (i ? "L" : "M") + a.x + " " + a.y;
                l += e ? St ? "z" : "x" : ""
            }
            return l || "M0 0"
        }
        var J = document.documentElement.style
          , K = "ActiveXObject"in window
          , Q = K && !document.addEventListener
          , tt = "msLaunchUri"in navigator && !("documentMode"in document)
          , et = Ct("webkit")
          , nt = Ct("android")
          , it = Ct("android 2") || Ct("android 3")
          , ot = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10)
          , rt = nt && Ct("Google") && ot < 537 && !("AudioNode"in window)
          , st = !!window.opera
          , at = Ct("chrome")
          , lt = Ct("gecko") && !et && !st && !K
          , ht = !at && Ct("safari")
          , ut = Ct("phantom")
          , ct = "OTransition"in J
          , ft = 0 === navigator.platform.indexOf("Win")
          , dt = K && "transition"in J
          , pt = "WebKitCSSMatrix"in window && "m11"in new window.WebKitCSSMatrix && !it
          , mt = "MozPerspective"in J
          , gt = !window.L_DISABLE_3D && (dt || pt || mt) && !ct && !ut
          , vt = "undefined" != typeof orientation || Ct("mobile")
          , _t = vt && et
          , yt = vt && pt
          , xt = !window.PointerEvent && window.MSPointerEvent
          , bt = !(!window.PointerEvent && !xt)
          , wt = !window.L_NO_TOUCH && (bt || "ontouchstart"in window || window.DocumentTouch && document instanceof window.DocumentTouch)
          , Tt = vt && st
          , kt = vt && lt
          , Lt = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1
          , Pt = !!document.createElement("canvas").getContext
          , St = !(!document.createElementNS || !Y("svg").createSVGRect)
          , Mt = !St && function() {
            try {
                var t = document.createElement("div");
                t.innerHTML = '<v:shape adj="1"/>';
                var e = t.firstChild;
                return e.style.behavior = "url(#default#VML)",
                e && "object" == typeof e.adj
            } catch (t) {
                return !1
            }
        }();
        function Ct(t) {
            return navigator.userAgent.toLowerCase().indexOf(t) >= 0
        }
        var zt = (Object.freeze || Object)({
            ie: K,
            ielt9: Q,
            edge: tt,
            webkit: et,
            android: nt,
            android23: it,
            androidStock: rt,
            opera: st,
            chrome: at,
            gecko: lt,
            safari: ht,
            phantom: ut,
            opera12: ct,
            win: ft,
            ie3d: dt,
            webkit3d: pt,
            gecko3d: mt,
            any3d: gt,
            mobile: vt,
            mobileWebkit: _t,
            mobileWebkit3d: yt,
            msPointer: xt,
            pointer: bt,
            touch: wt,
            mobileOpera: Tt,
            mobileGecko: kt,
            retina: Lt,
            canvas: Pt,
            svg: St,
            vml: Mt
        })
          , Et = xt ? "MSPointerDown" : "pointerdown"
          , At = xt ? "MSPointerMove" : "pointermove"
          , It = xt ? "MSPointerUp" : "pointerup"
          , Ot = xt ? "MSPointerCancel" : "pointercancel"
          , Bt = ["INPUT", "SELECT", "OPTION"]
          , Nt = {}
          , Dt = !1
          , Ft = 0;
        function Zt(t, e, n, i) {
            return "touchstart" === e ? function(t, e, n) {
                var i = o(function(t) {
                    if ("mouse" !== t.pointerType && t.MSPOINTER_TYPE_MOUSE && t.pointerType !== t.MSPOINTER_TYPE_MOUSE) {
                        if (!(Bt.indexOf(t.target.tagName) < 0))
                            return;
                        Ne(t)
                    }
                    Ht(t, e)
                });
                t["_leaflet_touchstart" + n] = i,
                t.addEventListener(Et, i, !1),
                Dt || (document.documentElement.addEventListener(Et, Rt, !0),
                document.documentElement.addEventListener(At, jt, !0),
                document.documentElement.addEventListener(It, Wt, !0),
                document.documentElement.addEventListener(Ot, Wt, !0),
                Dt = !0)
            }(t, n, i) : "touchmove" === e ? function(t, e, n) {
                var i = function(t) {
                    (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType || 0 !== t.buttons) && Ht(t, e)
                };
                t["_leaflet_touchmove" + n] = i,
                t.addEventListener(At, i, !1)
            }(t, n, i) : "touchend" === e && function(t, e, n) {
                var i = function(t) {
                    Ht(t, e)
                };
                t["_leaflet_touchend" + n] = i,
                t.addEventListener(It, i, !1),
                t.addEventListener(Ot, i, !1)
            }(t, n, i),
            this
        }
        function Rt(t) {
            Nt[t.pointerId] = t,
            Ft++
        }
        function jt(t) {
            Nt[t.pointerId] && (Nt[t.pointerId] = t)
        }
        function Wt(t) {
            delete Nt[t.pointerId],
            Ft--
        }
        function Ht(t, e) {
            for (var n in t.touches = [],
            Nt)
                t.touches.push(Nt[n]);
            t.changedTouches = [t],
            e(t)
        }
        var qt = xt ? "MSPointerDown" : bt ? "pointerdown" : "touchstart"
          , Ut = xt ? "MSPointerUp" : bt ? "pointerup" : "touchend"
          , Vt = "_leaflet_";
        function Gt(t, e, n) {
            var i, o, r = !1, s = 250;
            function a(t) {
                var e;
                if (bt) {
                    if (!tt || "mouse" === t.pointerType)
                        return;
                    e = Ft
                } else
                    e = t.touches.length;
                if (!(e > 1)) {
                    var n = Date.now()
                      , a = n - (i || n);
                    o = t.touches ? t.touches[0] : t,
                    r = a > 0 && a <= s,
                    i = n
                }
            }
            function l(t) {
                if (r && !o.cancelBubble) {
                    if (bt) {
                        if (!tt || "mouse" === t.pointerType)
                            return;
                        var n, s, a = {};
                        for (s in o)
                            n = o[s],
                            a[s] = n && n.bind ? n.bind(o) : n;
                        o = a
                    }
                    o.type = "dblclick",
                    e(o),
                    i = null
                }
            }
            return t[Vt + qt + n] = a,
            t[Vt + Ut + n] = l,
            t[Vt + "dblclick" + n] = e,
            t.addEventListener(qt, a, !1),
            t.addEventListener(Ut, l, !1),
            t.addEventListener("dblclick", e, !1),
            this
        }
        function $t(t, e) {
            var n = t[Vt + qt + e]
              , i = t[Vt + Ut + e]
              , o = t[Vt + "dblclick" + e];
            return t.removeEventListener(qt, n, !1),
            t.removeEventListener(Ut, i, !1),
            tt || t.removeEventListener("dblclick", o, !1),
            this
        }
        var Yt, Xt, Jt, Kt, Qt, te = ge(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]), ee = ge(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]), ne = "webkitTransition" === ee || "OTransition" === ee ? ee + "End" : "transitionend";
        function ie(t) {
            return "string" == typeof t ? document.getElementById(t) : t
        }
        function oe(t, e) {
            var n = t.style[e] || t.currentStyle && t.currentStyle[e];
            if ((!n || "auto" === n) && document.defaultView) {
                var i = document.defaultView.getComputedStyle(t, null);
                n = i ? i[e] : null
            }
            return "auto" === n ? null : n
        }
        function re(t, e, n) {
            var i = document.createElement(t);
            return i.className = e || "",
            n && n.appendChild(i),
            i
        }
        function se(t) {
            var e = t.parentNode;
            e && e.removeChild(t)
        }
        function ae(t) {
            for (; t.firstChild; )
                t.removeChild(t.firstChild)
        }
        function le(t) {
            var e = t.parentNode;
            e.lastChild !== t && e.appendChild(t)
        }
        function he(t) {
            var e = t.parentNode;
            e.firstChild !== t && e.insertBefore(t, e.firstChild)
        }
        function ue(t, e) {
            if (void 0 !== t.classList)
                return t.classList.contains(e);
            var n = pe(t);
            return n.length > 0 && new RegExp("(^|\\s)" + e + "(\\s|$)").test(n)
        }
        function ce(t, e) {
            if (void 0 !== t.classList)
                for (var n = f(e), i = 0, o = n.length; i < o; i++)
                    t.classList.add(n[i]);
            else if (!ue(t, e)) {
                var r = pe(t);
                de(t, (r ? r + " " : "") + e)
            }
        }
        function fe(t, e) {
            void 0 !== t.classList ? t.classList.remove(e) : de(t, c((" " + pe(t) + " ").replace(" " + e + " ", " ")))
        }
        function de(t, e) {
            void 0 === t.className.baseVal ? t.className = e : t.className.baseVal = e
        }
        function pe(t) {
            return void 0 === t.className.baseVal ? t.className : t.className.baseVal
        }
        function me(t, e) {
            "opacity"in t.style ? t.style.opacity = e : "filter"in t.style && function(t, e) {
                var n = !1
                  , i = "DXImageTransform.Microsoft.Alpha";
                try {
                    n = t.filters.item(i)
                } catch (t) {
                    if (1 === e)
                        return
                }
                e = Math.round(100 * e),
                n ? (n.Enabled = 100 !== e,
                n.Opacity = e) : t.style.filter += " progid:" + i + "(opacity=" + e + ")"
            }(t, e)
        }
        function ge(t) {
            for (var e = document.documentElement.style, n = 0; n < t.length; n++)
                if (t[n]in e)
                    return t[n];
            return !1
        }
        function ve(t, e, n) {
            var i = e || new A(0,0);
            t.style[te] = (dt ? "translate(" + i.x + "px," + i.y + "px)" : "translate3d(" + i.x + "px," + i.y + "px,0)") + (n ? " scale(" + n + ")" : "")
        }
        function _e(t, e) {
            t._leaflet_pos = e,
            gt ? ve(t, e) : (t.style.left = e.x + "px",
            t.style.top = e.y + "px")
        }
        function ye(t) {
            return t._leaflet_pos || new A(0,0)
        }
        if ("onselectstart"in document)
            Yt = function() {
                Me(window, "selectstart", Ne)
            }
            ,
            Xt = function() {
                ze(window, "selectstart", Ne)
            }
            ;
        else {
            var xe = ge(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
            Yt = function() {
                if (xe) {
                    var t = document.documentElement.style;
                    Jt = t[xe],
                    t[xe] = "none"
                }
            }
            ,
            Xt = function() {
                xe && (document.documentElement.style[xe] = Jt,
                Jt = void 0)
            }
        }
        function be() {
            Me(window, "dragstart", Ne)
        }
        function we() {
            ze(window, "dragstart", Ne)
        }
        function Te(t) {
            for (; -1 === t.tabIndex; )
                t = t.parentNode;
            t.style && (ke(),
            Kt = t,
            Qt = t.style.outline,
            t.style.outline = "none",
            Me(window, "keydown", ke))
        }
        function ke() {
            Kt && (Kt.style.outline = Qt,
            Kt = void 0,
            Qt = void 0,
            ze(window, "keydown", ke))
        }
        function Le(t) {
            do {
                t = t.parentNode
            } while (!(t.offsetWidth && t.offsetHeight || t === document.body));
            return t
        }
        function Pe(t) {
            var e = t.getBoundingClientRect();
            return {
                x: e.width / t.offsetWidth || 1,
                y: e.height / t.offsetHeight || 1,
                boundingClientRect: e
            }
        }
        var Se = (Object.freeze || Object)({
            TRANSFORM: te,
            TRANSITION: ee,
            TRANSITION_END: ne,
            get: ie,
            getStyle: oe,
            create: re,
            remove: se,
            empty: ae,
            toFront: le,
            toBack: he,
            hasClass: ue,
            addClass: ce,
            removeClass: fe,
            setClass: de,
            getClass: pe,
            setOpacity: me,
            testProp: ge,
            setTransform: ve,
            setPosition: _e,
            getPosition: ye,
            disableTextSelection: Yt,
            enableTextSelection: Xt,
            disableImageDrag: be,
            enableImageDrag: we,
            preventOutline: Te,
            restoreOutline: ke,
            getSizedParentNode: Le,
            getScale: Pe
        });
        function Me(t, e, n, i) {
            if ("object" == typeof e)
                for (var o in e)
                    Ee(t, o, e[o], n);
            else {
                e = f(e);
                for (var r = 0, s = e.length; r < s; r++)
                    Ee(t, e[r], n, i)
            }
            return this
        }
        var Ce = "_leaflet_events";
        function ze(t, e, n, i) {
            if ("object" == typeof e)
                for (var o in e)
                    Ae(t, o, e[o], n);
            else if (e) {
                e = f(e);
                for (var r = 0, s = e.length; r < s; r++)
                    Ae(t, e[r], n, i)
            } else {
                for (var a in t[Ce])
                    Ae(t, a, t[Ce][a]);
                delete t[Ce]
            }
            return this
        }
        function Ee(t, e, n, i) {
            var o = e + s(n) + (i ? "_" + s(i) : "");
            if (t[Ce] && t[Ce][o])
                return this;
            var r = function(e) {
                return n.call(i || t, e || window.event)
            }
              , a = r;
            bt && 0 === e.indexOf("touch") ? Zt(t, e, r, o) : !wt || "dblclick" !== e || !Gt || bt && at ? "addEventListener"in t ? "mousewheel" === e ? t.addEventListener("onwheel"in t ? "wheel" : "mousewheel", r, !1) : "mouseenter" === e || "mouseleave" === e ? (r = function(e) {
                e = e || window.event,
                Ue(t, e) && a(e)
            }
            ,
            t.addEventListener("mouseenter" === e ? "mouseover" : "mouseout", r, !1)) : ("click" === e && nt && (r = function(t) {
                !function(t, e) {
                    var n = t.timeStamp || t.originalEvent && t.originalEvent.timeStamp
                      , i = je && n - je;
                    i && i > 100 && i < 500 || t.target._simulatedClick && !t._simulated ? De(t) : (je = n,
                    e(t))
                }(t, a)
            }
            ),
            t.addEventListener(e, r, !1)) : "attachEvent"in t && t.attachEvent("on" + e, r) : Gt(t, r, o),
            t[Ce] = t[Ce] || {},
            t[Ce][o] = r
        }
        function Ae(t, e, n, i) {
            var o = e + s(n) + (i ? "_" + s(i) : "")
              , r = t[Ce] && t[Ce][o];
            if (!r)
                return this;
            bt && 0 === e.indexOf("touch") ? function(t, e, n) {
                var i = t["_leaflet_" + e + n];
                "touchstart" === e ? t.removeEventListener(Et, i, !1) : "touchmove" === e ? t.removeEventListener(At, i, !1) : "touchend" === e && (t.removeEventListener(It, i, !1),
                t.removeEventListener(Ot, i, !1))
            }(t, e, o) : !wt || "dblclick" !== e || !$t || bt && at ? "removeEventListener"in t ? "mousewheel" === e ? t.removeEventListener("onwheel"in t ? "wheel" : "mousewheel", r, !1) : t.removeEventListener("mouseenter" === e ? "mouseover" : "mouseleave" === e ? "mouseout" : e, r, !1) : "detachEvent"in t && t.detachEvent("on" + e, r) : $t(t, o),
            t[Ce][o] = null
        }
        function Ie(t) {
            return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0,
            qe(t),
            this
        }
        function Oe(t) {
            return Ee(t, "mousewheel", Ie),
            this
        }
        function Be(t) {
            return Me(t, "mousedown touchstart dblclick", Ie),
            Ee(t, "click", He),
            this
        }
        function Ne(t) {
            return t.preventDefault ? t.preventDefault() : t.returnValue = !1,
            this
        }
        function De(t) {
            return Ne(t),
            Ie(t),
            this
        }
        function Fe(t, e) {
            if (!e)
                return new A(t.clientX,t.clientY);
            var n = Pe(e)
              , i = n.boundingClientRect;
            return new A((t.clientX - i.left) / n.x - e.clientLeft,(t.clientY - i.top) / n.y - e.clientTop)
        }
        var Ze = ft && at ? 2 * window.devicePixelRatio : lt ? window.devicePixelRatio : 1;
        function Re(t) {
            return tt ? t.wheelDeltaY / 2 : t.deltaY && 0 === t.deltaMode ? -t.deltaY / Ze : t.deltaY && 1 === t.deltaMode ? 20 * -t.deltaY : t.deltaY && 2 === t.deltaMode ? 60 * -t.deltaY : t.deltaX || t.deltaZ ? 0 : t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : t.detail && Math.abs(t.detail) < 32765 ? 20 * -t.detail : t.detail ? t.detail / -32765 * 60 : 0
        }
        var je, We = {};
        function He(t) {
            We[t.type] = !0
        }
        function qe(t) {
            var e = We[t.type];
            return We[t.type] = !1,
            e
        }
        function Ue(t, e) {
            var n = e.relatedTarget;
            if (!n)
                return !0;
            try {
                for (; n && n !== t; )
                    n = n.parentNode
            } catch (t) {
                return !1
            }
            return n !== t
        }
        var Ve = (Object.freeze || Object)({
            on: Me,
            off: ze,
            stopPropagation: Ie,
            disableScrollPropagation: Oe,
            disableClickPropagation: Be,
            preventDefault: Ne,
            stop: De,
            getMousePosition: Fe,
            getWheelDelta: Re,
            fakeStop: He,
            skipped: qe,
            isExternalTarget: Ue,
            addListener: Me,
            removeListener: ze
        })
          , Ge = E.extend({
            run: function(t, e, n, i) {
                this.stop(),
                this._el = t,
                this._inProgress = !0,
                this._duration = n || .25,
                this._easeOutPower = 1 / Math.max(i || .5, .2),
                this._startPos = ye(t),
                this._offset = e.subtract(this._startPos),
                this._startTime = +new Date,
                this.fire("start"),
                this._animate()
            },
            stop: function() {
                this._inProgress && (this._step(!0),
                this._complete())
            },
            _animate: function() {
                this._animId = P(this._animate, this),
                this._step()
            },
            _step: function(t) {
                var e = +new Date - this._startTime
                  , n = 1e3 * this._duration;
                e < n ? this._runFrame(this._easeOut(e / n), t) : (this._runFrame(1),
                this._complete())
            },
            _runFrame: function(t, e) {
                var n = this._startPos.add(this._offset.multiplyBy(t));
                e && n._round(),
                _e(this._el, n),
                this.fire("step")
            },
            _complete: function() {
                S(this._animId),
                this._inProgress = !1,
                this.fire("end")
            },
            _easeOut: function(t) {
                return 1 - Math.pow(1 - t, this._easeOutPower)
            }
        })
          , $e = E.extend({
            options: {
                crs: G,
                center: void 0,
                zoom: void 0,
                minZoom: void 0,
                maxZoom: void 0,
                layers: [],
                maxBounds: void 0,
                renderer: void 0,
                zoomAnimation: !0,
                zoomAnimationThreshold: 4,
                fadeAnimation: !0,
                markerZoomAnimation: !0,
                transform3DLimit: 8388608,
                zoomSnap: 1,
                zoomDelta: 1,
                trackResize: !0
            },
            initialize: function(t, e) {
                e = d(this, e),
                this._initContainer(t),
                this._initLayout(),
                this._onResize = o(this._onResize, this),
                this._initEvents(),
                e.maxBounds && this.setMaxBounds(e.maxBounds),
                void 0 !== e.zoom && (this._zoom = this._limitZoom(e.zoom)),
                e.center && void 0 !== e.zoom && this.setView(R(e.center), e.zoom, {
                    reset: !0
                }),
                this._handlers = [],
                this._layers = {},
                this._zoomBoundLayers = {},
                this._sizeChanged = !0,
                this.callInitHooks(),
                this._zoomAnimated = ee && gt && !Tt && this.options.zoomAnimation,
                this._zoomAnimated && (this._createAnimProxy(),
                Me(this._proxy, ne, this._catchTransitionEnd, this)),
                this._addLayers(this.options.layers)
            },
            setView: function(t, e, i) {
                if (e = void 0 === e ? this._zoom : this._limitZoom(e),
                t = this._limitCenter(R(t), e, this.options.maxBounds),
                i = i || {},
                this._stop(),
                this._loaded && !i.reset && !0 !== i) {
                    void 0 !== i.animate && (i.zoom = n({
                        animate: i.animate
                    }, i.zoom),
                    i.pan = n({
                        animate: i.animate,
                        duration: i.duration
                    }, i.pan));
                    var o = this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, i.zoom) : this._tryAnimatedPan(t, i.pan);
                    if (o)
                        return clearTimeout(this._sizeTimer),
                        this
                }
                return this._resetView(t, e),
                this
            },
            setZoom: function(t, e) {
                return this._loaded ? this.setView(this.getCenter(), t, {
                    zoom: e
                }) : (this._zoom = t,
                this)
            },
            zoomIn: function(t, e) {
                return t = t || (gt ? this.options.zoomDelta : 1),
                this.setZoom(this._zoom + t, e)
            },
            zoomOut: function(t, e) {
                return t = t || (gt ? this.options.zoomDelta : 1),
                this.setZoom(this._zoom - t, e)
            },
            setZoomAround: function(t, e, n) {
                var i = this.getZoomScale(e)
                  , o = this.getSize().divideBy(2)
                  , r = t instanceof A ? t : this.latLngToContainerPoint(t)
                  , s = r.subtract(o).multiplyBy(1 - 1 / i)
                  , a = this.containerPointToLatLng(o.add(s));
                return this.setView(a, e, {
                    zoom: n
                })
            },
            _getBoundsCenterZoom: function(t, e) {
                e = e || {},
                t = t.getBounds ? t.getBounds() : F(t);
                var n = O(e.paddingTopLeft || e.padding || [0, 0])
                  , i = O(e.paddingBottomRight || e.padding || [0, 0])
                  , o = this.getBoundsZoom(t, !1, n.add(i));
                if ((o = "number" == typeof e.maxZoom ? Math.min(e.maxZoom, o) : o) === 1 / 0)
                    return {
                        center: t.getCenter(),
                        zoom: o
                    };
                var r = i.subtract(n).divideBy(2)
                  , s = this.project(t.getSouthWest(), o)
                  , a = this.project(t.getNorthEast(), o)
                  , l = this.unproject(s.add(a).divideBy(2).add(r), o);
                return {
                    center: l,
                    zoom: o
                }
            },
            fitBounds: function(t, e) {
                if (!(t = F(t)).isValid())
                    throw new Error("Bounds are not valid.");
                var n = this._getBoundsCenterZoom(t, e);
                return this.setView(n.center, n.zoom, e)
            },
            fitWorld: function(t) {
                return this.fitBounds([[-90, -180], [90, 180]], t)
            },
            panTo: function(t, e) {
                return this.setView(t, this._zoom, {
                    pan: e
                })
            },
            panBy: function(t, e) {
                if (t = O(t).round(),
                e = e || {},
                !t.x && !t.y)
                    return this.fire("moveend");
                if (!0 !== e.animate && !this.getSize().contains(t))
                    return this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()),
                    this;
                if (this._panAnim || (this._panAnim = new Ge,
                this._panAnim.on({
                    step: this._onPanTransitionStep,
                    end: this._onPanTransitionEnd
                }, this)),
                e.noMoveStart || this.fire("movestart"),
                !1 !== e.animate) {
                    ce(this._mapPane, "leaflet-pan-anim");
                    var n = this._getMapPanePos().subtract(t).round();
                    this._panAnim.run(this._mapPane, n, e.duration || .25, e.easeLinearity)
                } else
                    this._rawPanBy(t),
                    this.fire("move").fire("moveend");
                return this
            },
            flyTo: function(t, e, n) {
                if (!1 === (n = n || {}).animate || !gt)
                    return this.setView(t, e, n);
                this._stop();
                var i = this.project(this.getCenter())
                  , o = this.project(t)
                  , r = this.getSize()
                  , s = this._zoom;
                t = R(t),
                e = void 0 === e ? s : e;
                var a = Math.max(r.x, r.y)
                  , l = a * this.getZoomScale(s, e)
                  , h = o.distanceTo(i) || 1
                  , u = 1.42
                  , c = u * u;
                function f(t) {
                    var e = t ? -1 : 1
                      , n = t ? l : a
                      , i = l * l - a * a + e * c * c * h * h
                      , o = 2 * n * c * h
                      , r = i / o
                      , s = Math.sqrt(r * r + 1) - r
                      , u = s < 1e-9 ? -18 : Math.log(s);
                    return u
                }
                function d(t) {
                    return (Math.exp(t) - Math.exp(-t)) / 2
                }
                function p(t) {
                    return (Math.exp(t) + Math.exp(-t)) / 2
                }
                var m = f(0);
                function g(t) {
                    return a * (p(m) * (d(e = m + u * t) / p(e)) - d(m)) / c;
                    var e
                }
                var v = Date.now()
                  , _ = (f(1) - m) / u
                  , y = n.duration ? 1e3 * n.duration : 1e3 * _ * .8;
                return this._moveStart(!0, n.noMoveStart),
                function n() {
                    var r = (Date.now() - v) / y
                      , l = function(t) {
                        return 1 - Math.pow(1 - t, 1.5)
                    }(r) * _;
                    r <= 1 ? (this._flyToFrame = P(n, this),
                    this._move(this.unproject(i.add(o.subtract(i).multiplyBy(g(l) / h)), s), this.getScaleZoom(a / function(t) {
                        return a * (p(m) / p(m + u * t))
                    }(l), s), {
                        flyTo: !0
                    })) : this._move(t, e)._moveEnd(!0)
                }
                .call(this),
                this
            },
            flyToBounds: function(t, e) {
                var n = this._getBoundsCenterZoom(t, e);
                return this.flyTo(n.center, n.zoom, e)
            },
            setMaxBounds: function(t) {
                return (t = F(t)).isValid() ? (this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds),
                this.options.maxBounds = t,
                this._loaded && this._panInsideMaxBounds(),
                this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null,
                this.off("moveend", this._panInsideMaxBounds))
            },
            setMinZoom: function(t) {
                var e = this.options.minZoom;
                return this.options.minZoom = t,
                this._loaded && e !== t && (this.fire("zoomlevelschange"),
                this.getZoom() < this.options.minZoom) ? this.setZoom(t) : this
            },
            setMaxZoom: function(t) {
                var e = this.options.maxZoom;
                return this.options.maxZoom = t,
                this._loaded && e !== t && (this.fire("zoomlevelschange"),
                this.getZoom() > this.options.maxZoom) ? this.setZoom(t) : this
            },
            panInsideBounds: function(t, e) {
                this._enforcingBounds = !0;
                var n = this.getCenter()
                  , i = this._limitCenter(n, this._zoom, F(t));
                return n.equals(i) || this.panTo(i, e),
                this._enforcingBounds = !1,
                this
            },
            invalidateSize: function(t) {
                if (!this._loaded)
                    return this;
                t = n({
                    animate: !1,
                    pan: !0
                }, !0 === t ? {
                    animate: !0
                } : t);
                var e = this.getSize();
                this._sizeChanged = !0,
                this._lastCenter = null;
                var i = this.getSize()
                  , r = e.divideBy(2).round()
                  , s = i.divideBy(2).round()
                  , a = r.subtract(s);
                return a.x || a.y ? (t.animate && t.pan ? this.panBy(a) : (t.pan && this._rawPanBy(a),
                this.fire("move"),
                t.debounceMoveend ? (clearTimeout(this._sizeTimer),
                this._sizeTimer = setTimeout(o(this.fire, this, "moveend"), 200)) : this.fire("moveend")),
                this.fire("resize", {
                    oldSize: e,
                    newSize: i
                })) : this
            },
            stop: function() {
                return this.setZoom(this._limitZoom(this._zoom)),
                this.options.zoomSnap || this.fire("viewreset"),
                this._stop()
            },
            locate: function(t) {
                if (t = this._locateOptions = n({
                    timeout: 1e4,
                    watch: !1
                }, t),
                !("geolocation"in navigator))
                    return this._handleGeolocationError({
                        code: 0,
                        message: "Geolocation not supported."
                    }),
                    this;
                var e = o(this._handleGeolocationResponse, this)
                  , i = o(this._handleGeolocationError, this);
                return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(e, i, t) : navigator.geolocation.getCurrentPosition(e, i, t),
                this
            },
            stopLocate: function() {
                return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId),
                this._locateOptions && (this._locateOptions.setView = !1),
                this
            },
            _handleGeolocationError: function(t) {
                var e = t.code
                  , n = t.message || (1 === e ? "permission denied" : 2 === e ? "position unavailable" : "timeout");
                this._locateOptions.setView && !this._loaded && this.fitWorld(),
                this.fire("locationerror", {
                    code: e,
                    message: "Geolocation error: " + n + "."
                })
            },
            _handleGeolocationResponse: function(t) {
                var e = t.coords.latitude
                  , n = t.coords.longitude
                  , i = new Z(e,n)
                  , o = i.toBounds(2 * t.coords.accuracy)
                  , r = this._locateOptions;
                if (r.setView) {
                    var s = this.getBoundsZoom(o);
                    this.setView(i, r.maxZoom ? Math.min(s, r.maxZoom) : s)
                }
                var a = {
                    latlng: i,
                    bounds: o,
                    timestamp: t.timestamp
                };
                for (var l in t.coords)
                    "number" == typeof t.coords[l] && (a[l] = t.coords[l]);
                this.fire("locationfound", a)
            },
            addHandler: function(t, e) {
                if (!e)
                    return this;
                var n = this[t] = new e(this);
                return this._handlers.push(n),
                this.options[t] && n.enable(),
                this
            },
            remove: function() {
                if (this._initEvents(!0),
                this._containerId !== this._container._leaflet_id)
                    throw new Error("Map container is being reused by another instance");
                try {
                    delete this._container._leaflet_id,
                    delete this._containerId
                } catch (t) {
                    this._container._leaflet_id = void 0,
                    this._containerId = void 0
                }
                var t;
                for (t in void 0 !== this._locationWatchId && this.stopLocate(),
                this._stop(),
                se(this._mapPane),
                this._clearControlPos && this._clearControlPos(),
                this._resizeRequest && (S(this._resizeRequest),
                this._resizeRequest = null),
                this._clearHandlers(),
                this._loaded && this.fire("unload"),
                this._layers)
                    this._layers[t].remove();
                for (t in this._panes)
                    se(this._panes[t]);
                return this._layers = [],
                this._panes = [],
                delete this._mapPane,
                delete this._renderer,
                this
            },
            createPane: function(t, e) {
                var n = "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : "")
                  , i = re("div", n, e || this._mapPane);
                return t && (this._panes[t] = i),
                i
            },
            getCenter: function() {
                return this._checkIfLoaded(),
                this._lastCenter && !this._moved() ? this._lastCenter : this.layerPointToLatLng(this._getCenterLayerPoint())
            },
            getZoom: function() {
                return this._zoom
            },
            getBounds: function() {
                var t = this.getPixelBounds()
                  , e = this.unproject(t.getBottomLeft())
                  , n = this.unproject(t.getTopRight());
                return new D(e,n)
            },
            getMinZoom: function() {
                return void 0 === this.options.minZoom ? this._layersMinZoom || 0 : this.options.minZoom
            },
            getMaxZoom: function() {
                return void 0 === this.options.maxZoom ? void 0 === this._layersMaxZoom ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom
            },
            getBoundsZoom: function(t, e, n) {
                t = F(t),
                n = O(n || [0, 0]);
                var i = this.getZoom() || 0
                  , o = this.getMinZoom()
                  , r = this.getMaxZoom()
                  , s = t.getNorthWest()
                  , a = t.getSouthEast()
                  , l = this.getSize().subtract(n)
                  , h = N(this.project(a, i), this.project(s, i)).getSize()
                  , u = gt ? this.options.zoomSnap : 1
                  , c = l.x / h.x
                  , f = l.y / h.y
                  , d = e ? Math.max(c, f) : Math.min(c, f);
                return i = this.getScaleZoom(d, i),
                u && (i = Math.round(i / (u / 100)) * (u / 100),
                i = e ? Math.ceil(i / u) * u : Math.floor(i / u) * u),
                Math.max(o, Math.min(r, i))
            },
            getSize: function() {
                return this._size && !this._sizeChanged || (this._size = new A(this._container.clientWidth || 0,this._container.clientHeight || 0),
                this._sizeChanged = !1),
                this._size.clone()
            },
            getPixelBounds: function(t, e) {
                var n = this._getTopLeftPoint(t, e);
                return new B(n,n.add(this.getSize()))
            },
            getPixelOrigin: function() {
                return this._checkIfLoaded(),
                this._pixelOrigin
            },
            getPixelWorldBounds: function(t) {
                return this.options.crs.getProjectedBounds(void 0 === t ? this.getZoom() : t)
            },
            getPane: function(t) {
                return "string" == typeof t ? this._panes[t] : t
            },
            getPanes: function() {
                return this._panes
            },
            getContainer: function() {
                return this._container
            },
            getZoomScale: function(t, e) {
                var n = this.options.crs;
                return e = void 0 === e ? this._zoom : e,
                n.scale(t) / n.scale(e)
            },
            getScaleZoom: function(t, e) {
                var n = this.options.crs;
                e = void 0 === e ? this._zoom : e;
                var i = n.zoom(t * n.scale(e));
                return isNaN(i) ? 1 / 0 : i
            },
            project: function(t, e) {
                return e = void 0 === e ? this._zoom : e,
                this.options.crs.latLngToPoint(R(t), e)
            },
            unproject: function(t, e) {
                return e = void 0 === e ? this._zoom : e,
                this.options.crs.pointToLatLng(O(t), e)
            },
            layerPointToLatLng: function(t) {
                var e = O(t).add(this.getPixelOrigin());
                return this.unproject(e)
            },
            latLngToLayerPoint: function(t) {
                var e = this.project(R(t))._round();
                return e._subtract(this.getPixelOrigin())
            },
            wrapLatLng: function(t) {
                return this.options.crs.wrapLatLng(R(t))
            },
            wrapLatLngBounds: function(t) {
                return this.options.crs.wrapLatLngBounds(F(t))
            },
            distance: function(t, e) {
                return this.options.crs.distance(R(t), R(e))
            },
            containerPointToLayerPoint: function(t) {
                return O(t).subtract(this._getMapPanePos())
            },
            layerPointToContainerPoint: function(t) {
                return O(t).add(this._getMapPanePos())
            },
            containerPointToLatLng: function(t) {
                var e = this.containerPointToLayerPoint(O(t));
                return this.layerPointToLatLng(e)
            },
            latLngToContainerPoint: function(t) {
                return this.layerPointToContainerPoint(this.latLngToLayerPoint(R(t)))
            },
            mouseEventToContainerPoint: function(t) {
                return Fe(t, this._container)
            },
            mouseEventToLayerPoint: function(t) {
                return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))
            },
            mouseEventToLatLng: function(t) {
                return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))
            },
            _initContainer: function(t) {
                var e = this._container = ie(t);
                if (!e)
                    throw new Error("Map container not found.");
                if (e._leaflet_id)
                    throw new Error("Map container is already initialized.");
                Me(e, "scroll", this._onScroll, this),
                this._containerId = s(e)
            },
            _initLayout: function() {
                var t = this._container;
                this._fadeAnimated = this.options.fadeAnimation && gt,
                ce(t, "leaflet-container" + (wt ? " leaflet-touch" : "") + (Lt ? " leaflet-retina" : "") + (Q ? " leaflet-oldie" : "") + (ht ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
                var e = oe(t, "position");
                "absolute" !== e && "relative" !== e && "fixed" !== e && (t.style.position = "relative"),
                this._initPanes(),
                this._initControlPos && this._initControlPos()
            },
            _initPanes: function() {
                var t = this._panes = {};
                this._paneRenderers = {},
                this._mapPane = this.createPane("mapPane", this._container),
                _e(this._mapPane, new A(0,0)),
                this.createPane("tilePane"),
                this.createPane("shadowPane"),
                this.createPane("overlayPane"),
                this.createPane("markerPane"),
                this.createPane("tooltipPane"),
                this.createPane("popupPane"),
                this.options.markerZoomAnimation || (ce(t.markerPane, "leaflet-zoom-hide"),
                ce(t.shadowPane, "leaflet-zoom-hide"))
            },
            _resetView: function(t, e) {
                _e(this._mapPane, new A(0,0));
                var n = !this._loaded;
                this._loaded = !0,
                e = this._limitZoom(e),
                this.fire("viewprereset");
                var i = this._zoom !== e;
                this._moveStart(i, !1)._move(t, e)._moveEnd(i),
                this.fire("viewreset"),
                n && this.fire("load")
            },
            _moveStart: function(t, e) {
                return t && this.fire("zoomstart"),
                e || this.fire("movestart"),
                this
            },
            _move: function(t, e, n) {
                void 0 === e && (e = this._zoom);
                var i = this._zoom !== e;
                return this._zoom = e,
                this._lastCenter = t,
                this._pixelOrigin = this._getNewPixelOrigin(t),
                (i || n && n.pinch) && this.fire("zoom", n),
                this.fire("move", n)
            },
            _moveEnd: function(t) {
                return t && this.fire("zoomend"),
                this.fire("moveend")
            },
            _stop: function() {
                return S(this._flyToFrame),
                this._panAnim && this._panAnim.stop(),
                this
            },
            _rawPanBy: function(t) {
                _e(this._mapPane, this._getMapPanePos().subtract(t))
            },
            _getZoomSpan: function() {
                return this.getMaxZoom() - this.getMinZoom()
            },
            _panInsideMaxBounds: function() {
                this._enforcingBounds || this.panInsideBounds(this.options.maxBounds)
            },
            _checkIfLoaded: function() {
                if (!this._loaded)
                    throw new Error("Set map center and zoom first.")
            },
            _initEvents: function(t) {
                this._targets = {},
                this._targets[s(this._container)] = this;
                var e = t ? ze : Me;
                e(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress", this._handleDOMEvent, this),
                this.options.trackResize && e(window, "resize", this._onResize, this),
                gt && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd)
            },
            _onResize: function() {
                S(this._resizeRequest),
                this._resizeRequest = P(function() {
                    this.invalidateSize({
                        debounceMoveend: !0
                    })
                }, this)
            },
            _onScroll: function() {
                this._container.scrollTop = 0,
                this._container.scrollLeft = 0
            },
            _onMoveEnd: function() {
                var t = this._getMapPanePos();
                Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom())
            },
            _findEventTargets: function(t, e) {
                for (var n, i = [], o = "mouseout" === e || "mouseover" === e, r = t.target || t.srcElement, a = !1; r; ) {
                    if ((n = this._targets[s(r)]) && ("click" === e || "preclick" === e) && !t._simulated && this._draggableMoved(n)) {
                        a = !0;
                        break
                    }
                    if (n && n.listens(e, !0)) {
                        if (o && !Ue(r, t))
                            break;
                        if (i.push(n),
                        o)
                            break
                    }
                    if (r === this._container)
                        break;
                    r = r.parentNode
                }
                return i.length || a || o || !Ue(r, t) || (i = [this]),
                i
            },
            _handleDOMEvent: function(t) {
                if (this._loaded && !qe(t)) {
                    var e = t.type;
                    "mousedown" !== e && "keypress" !== e || Te(t.target || t.srcElement),
                    this._fireDOMEvent(t, e)
                }
            },
            _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
            _fireDOMEvent: function(t, e, i) {
                if ("click" === t.type) {
                    var o = n({}, t);
                    o.type = "preclick",
                    this._fireDOMEvent(o, o.type, i)
                }
                if (!t._stopped && (i = (i || []).concat(this._findEventTargets(t, e))).length) {
                    var r = i[0];
                    "contextmenu" === e && r.listens(e, !0) && Ne(t);
                    var s = {
                        originalEvent: t
                    };
                    if ("keypress" !== t.type) {
                        var a = r.getLatLng && (!r._radius || r._radius <= 10);
                        s.containerPoint = a ? this.latLngToContainerPoint(r.getLatLng()) : this.mouseEventToContainerPoint(t),
                        s.layerPoint = this.containerPointToLayerPoint(s.containerPoint),
                        s.latlng = a ? r.getLatLng() : this.layerPointToLatLng(s.layerPoint)
                    }
                    for (var l = 0; l < i.length; l++)
                        if (i[l].fire(e, s, !0),
                        s.originalEvent._stopped || !1 === i[l].options.bubblingMouseEvents && -1 !== _(this._mouseEvents, e))
                            return
                }
            },
            _draggableMoved: function(t) {
                return (t = t.dragging && t.dragging.enabled() ? t : this).dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved()
            },
            _clearHandlers: function() {
                for (var t = 0, e = this._handlers.length; t < e; t++)
                    this._handlers[t].disable()
            },
            whenReady: function(t, e) {
                return this._loaded ? t.call(e || this, {
                    target: this
                }) : this.on("load", t, e),
                this
            },
            _getMapPanePos: function() {
                return ye(this._mapPane) || new A(0,0)
            },
            _moved: function() {
                var t = this._getMapPanePos();
                return t && !t.equals([0, 0])
            },
            _getTopLeftPoint: function(t, e) {
                var n = t && void 0 !== e ? this._getNewPixelOrigin(t, e) : this.getPixelOrigin();
                return n.subtract(this._getMapPanePos())
            },
            _getNewPixelOrigin: function(t, e) {
                var n = this.getSize()._divideBy(2);
                return this.project(t, e)._subtract(n)._add(this._getMapPanePos())._round()
            },
            _latLngToNewLayerPoint: function(t, e, n) {
                var i = this._getNewPixelOrigin(n, e);
                return this.project(t, e)._subtract(i)
            },
            _latLngBoundsToNewLayerBounds: function(t, e, n) {
                var i = this._getNewPixelOrigin(n, e);
                return N([this.project(t.getSouthWest(), e)._subtract(i), this.project(t.getNorthWest(), e)._subtract(i), this.project(t.getSouthEast(), e)._subtract(i), this.project(t.getNorthEast(), e)._subtract(i)])
            },
            _getCenterLayerPoint: function() {
                return this.containerPointToLayerPoint(this.getSize()._divideBy(2))
            },
            _getCenterOffset: function(t) {
                return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())
            },
            _limitCenter: function(t, e, n) {
                if (!n)
                    return t;
                var i = this.project(t, e)
                  , o = this.getSize().divideBy(2)
                  , r = new B(i.subtract(o),i.add(o))
                  , s = this._getBoundsOffset(r, n, e);
                return s.round().equals([0, 0]) ? t : this.unproject(i.add(s), e)
            },
            _limitOffset: function(t, e) {
                if (!e)
                    return t;
                var n = this.getPixelBounds()
                  , i = new B(n.min.add(t),n.max.add(t));
                return t.add(this._getBoundsOffset(i, e))
            },
            _getBoundsOffset: function(t, e, n) {
                var i = N(this.project(e.getNorthEast(), n), this.project(e.getSouthWest(), n))
                  , o = i.min.subtract(t.min)
                  , r = i.max.subtract(t.max)
                  , s = this._rebound(o.x, -r.x)
                  , a = this._rebound(o.y, -r.y);
                return new A(s,a)
            },
            _rebound: function(t, e) {
                return t + e > 0 ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e))
            },
            _limitZoom: function(t) {
                var e = this.getMinZoom()
                  , n = this.getMaxZoom()
                  , i = gt ? this.options.zoomSnap : 1;
                return i && (t = Math.round(t / i) * i),
                Math.max(e, Math.min(n, t))
            },
            _onPanTransitionStep: function() {
                this.fire("move")
            },
            _onPanTransitionEnd: function() {
                fe(this._mapPane, "leaflet-pan-anim"),
                this.fire("moveend")
            },
            _tryAnimatedPan: function(t, e) {
                var n = this._getCenterOffset(t)._trunc();
                return !(!0 !== (e && e.animate) && !this.getSize().contains(n) || (this.panBy(n, e),
                0))
            },
            _createAnimProxy: function() {
                var t = this._proxy = re("div", "leaflet-proxy leaflet-zoom-animated");
                this._panes.mapPane.appendChild(t),
                this.on("zoomanim", function(t) {
                    var e = te
                      , n = this._proxy.style[e];
                    ve(this._proxy, this.project(t.center, t.zoom), this.getZoomScale(t.zoom, 1)),
                    n === this._proxy.style[e] && this._animatingZoom && this._onZoomTransitionEnd()
                }, this),
                this.on("load moveend", function() {
                    var t = this.getCenter()
                      , e = this.getZoom();
                    ve(this._proxy, this.project(t, e), this.getZoomScale(e, 1))
                }, this),
                this._on("unload", this._destroyAnimProxy, this)
            },
            _destroyAnimProxy: function() {
                se(this._proxy),
                delete this._proxy
            },
            _catchTransitionEnd: function(t) {
                this._animatingZoom && t.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd()
            },
            _nothingToAnimate: function() {
                return !this._container.getElementsByClassName("leaflet-zoom-animated").length
            },
            _tryAnimatedZoom: function(t, e, n) {
                if (this._animatingZoom)
                    return !0;
                if (n = n || {},
                !this._zoomAnimated || !1 === n.animate || this._nothingToAnimate() || Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold)
                    return !1;
                var i = this.getZoomScale(e)
                  , o = this._getCenterOffset(t)._divideBy(1 - 1 / i);
                return !(!0 !== n.animate && !this.getSize().contains(o) || (P(function() {
                    this._moveStart(!0, !1)._animateZoom(t, e, !0)
                }, this),
                0))
            },
            _animateZoom: function(t, e, n, i) {
                this._mapPane && (n && (this._animatingZoom = !0,
                this._animateToCenter = t,
                this._animateToZoom = e,
                ce(this._mapPane, "leaflet-zoom-anim")),
                this.fire("zoomanim", {
                    center: t,
                    zoom: e,
                    noUpdate: i
                }),
                setTimeout(o(this._onZoomTransitionEnd, this), 250))
            },
            _onZoomTransitionEnd: function() {
                this._animatingZoom && (this._mapPane && fe(this._mapPane, "leaflet-zoom-anim"),
                this._animatingZoom = !1,
                this._move(this._animateToCenter, this._animateToZoom),
                P(function() {
                    this._moveEnd(!0)
                }, this))
            }
        })
          , Ye = C.extend({
            options: {
                position: "topright"
            },
            initialize: function(t) {
                d(this, t)
            },
            getPosition: function() {
                return this.options.position
            },
            setPosition: function(t) {
                var e = this._map;
                return e && e.removeControl(this),
                this.options.position = t,
                e && e.addControl(this),
                this
            },
            getContainer: function() {
                return this._container
            },
            addTo: function(t) {
                this.remove(),
                this._map = t;
                var e = this._container = this.onAdd(t)
                  , n = this.getPosition()
                  , i = t._controlCorners[n];
                return ce(e, "leaflet-control"),
                -1 !== n.indexOf("bottom") ? i.insertBefore(e, i.firstChild) : i.appendChild(e),
                this
            },
            remove: function() {
                return this._map ? (se(this._container),
                this.onRemove && this.onRemove(this._map),
                this._map = null,
                this) : this
            },
            _refocusOnMap: function(t) {
                this._map && t && t.screenX > 0 && t.screenY > 0 && this._map.getContainer().focus()
            }
        })
          , Xe = function(t) {
            return new Ye(t)
        };
        $e.include({
            addControl: function(t) {
                return t.addTo(this),
                this
            },
            removeControl: function(t) {
                return t.remove(),
                this
            },
            _initControlPos: function() {
                var t = this._controlCorners = {}
                  , e = "leaflet-"
                  , n = this._controlContainer = re("div", e + "control-container", this._container);
                function i(i, o) {
                    var r = e + i + " " + e + o;
                    t[i + o] = re("div", r, n)
                }
                i("top", "left"),
                i("top", "right"),
                i("bottom", "left"),
                i("bottom", "right")
            },
            _clearControlPos: function() {
                for (var t in this._controlCorners)
                    se(this._controlCorners[t]);
                se(this._controlContainer),
                delete this._controlCorners,
                delete this._controlContainer
            }
        });
        var Je = Ye.extend({
            options: {
                collapsed: !0,
                position: "topright",
                autoZIndex: !0,
                hideSingleBase: !1,
                sortLayers: !1,
                sortFunction: function(t, e, n, i) {
                    return n < i ? -1 : i < n ? 1 : 0
                }
            },
            initialize: function(t, e, n) {
                for (var i in d(this, n),
                this._layerControlInputs = [],
                this._layers = [],
                this._lastZIndex = 0,
                this._handlingClick = !1,
                t)
                    this._addLayer(t[i], i);
                for (i in e)
                    this._addLayer(e[i], i, !0)
            },
            onAdd: function(t) {
                this._initLayout(),
                this._update(),
                this._map = t,
                t.on("zoomend", this._checkDisabledLayers, this);
                for (var e = 0; e < this._layers.length; e++)
                    this._layers[e].layer.on("add remove", this._onLayerChange, this);
                return this._container
            },
            addTo: function(t) {
                return Ye.prototype.addTo.call(this, t),
                this._expandIfNotCollapsed()
            },
            onRemove: function() {
                this._map.off("zoomend", this._checkDisabledLayers, this);
                for (var t = 0; t < this._layers.length; t++)
                    this._layers[t].layer.off("add remove", this._onLayerChange, this)
            },
            addBaseLayer: function(t, e) {
                return this._addLayer(t, e),
                this._map ? this._update() : this
            },
            addOverlay: function(t, e) {
                return this._addLayer(t, e, !0),
                this._map ? this._update() : this
            },
            removeLayer: function(t) {
                t.off("add remove", this._onLayerChange, this);
                var e = this._getLayer(s(t));
                return e && this._layers.splice(this._layers.indexOf(e), 1),
                this._map ? this._update() : this
            },
            expand: function() {
                ce(this._container, "leaflet-control-layers-expanded"),
                this._form.style.height = null;
                var t = this._map.getSize().y - (this._container.offsetTop + 50);
                return t < this._form.clientHeight ? (ce(this._form, "leaflet-control-layers-scrollbar"),
                this._form.style.height = t + "px") : fe(this._form, "leaflet-control-layers-scrollbar"),
                this._checkDisabledLayers(),
                this
            },
            collapse: function() {
                return fe(this._container, "leaflet-control-layers-expanded"),
                this
            },
            _initLayout: function() {
                var t = "leaflet-control-layers"
                  , e = this._container = re("div", t)
                  , n = this.options.collapsed;
                e.setAttribute("aria-haspopup", !0),
                Be(e),
                Oe(e);
                var i = this._form = re("form", t + "-list");
                n && (this._map.on("click", this.collapse, this),
                nt || Me(e, {
                    mouseenter: this.expand,
                    mouseleave: this.collapse
                }, this));
                var o = this._layersLink = re("a", t + "-toggle", e);
                o.href = "#",
                o.title = "Layers",
                wt ? (Me(o, "click", De),
                Me(o, "click", this.expand, this)) : Me(o, "focus", this.expand, this),
                n || this.expand(),
                this._baseLayersList = re("div", t + "-base", i),
                this._separator = re("div", t + "-separator", i),
                this._overlaysList = re("div", t + "-overlays", i),
                e.appendChild(i)
            },
            _getLayer: function(t) {
                for (var e = 0; e < this._layers.length; e++)
                    if (this._layers[e] && s(this._layers[e].layer) === t)
                        return this._layers[e]
            },
            _addLayer: function(t, e, n) {
                this._map && t.on("add remove", this._onLayerChange, this),
                this._layers.push({
                    layer: t,
                    name: e,
                    overlay: n
                }),
                this.options.sortLayers && this._layers.sort(o(function(t, e) {
                    return this.options.sortFunction(t.layer, e.layer, t.name, e.name)
                }, this)),
                this.options.autoZIndex && t.setZIndex && (this._lastZIndex++,
                t.setZIndex(this._lastZIndex)),
                this._expandIfNotCollapsed()
            },
            _update: function() {
                if (!this._container)
                    return this;
                ae(this._baseLayersList),
                ae(this._overlaysList),
                this._layerControlInputs = [];
                var t, e, n, i, o = 0;
                for (n = 0; n < this._layers.length; n++)
                    i = this._layers[n],
                    this._addItem(i),
                    e = e || i.overlay,
                    t = t || !i.overlay,
                    o += i.overlay ? 0 : 1;
                return this.options.hideSingleBase && (t = t && o > 1,
                this._baseLayersList.style.display = t ? "" : "none"),
                this._separator.style.display = e && t ? "" : "none",
                this
            },
            _onLayerChange: function(t) {
                this._handlingClick || this._update();
                var e = this._getLayer(s(t.target))
                  , n = e.overlay ? "add" === t.type ? "overlayadd" : "overlayremove" : "add" === t.type ? "baselayerchange" : null;
                n && this._map.fire(n, e)
            },
            _createRadioElement: function(t, e) {
                var n = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (e ? ' checked="checked"' : "") + "/>"
                  , i = document.createElement("div");
                return i.innerHTML = n,
                i.firstChild
            },
            _addItem: function(t) {
                var e, n = document.createElement("label"), i = this._map.hasLayer(t.layer);
                t.overlay ? ((e = document.createElement("input")).type = "checkbox",
                e.className = "leaflet-control-layers-selector",
                e.defaultChecked = i) : e = this._createRadioElement("leaflet-base-layers", i),
                this._layerControlInputs.push(e),
                e.layerId = s(t.layer),
                Me(e, "click", this._onInputClick, this);
                var o = document.createElement("span");
                o.innerHTML = " " + t.name;
                var r = document.createElement("div");
                n.appendChild(r),
                r.appendChild(e),
                r.appendChild(o);
                var a = t.overlay ? this._overlaysList : this._baseLayersList;
                return a.appendChild(n),
                this._checkDisabledLayers(),
                n
            },
            _onInputClick: function() {
                var t, e, n = this._layerControlInputs, i = [], o = [];
                this._handlingClick = !0;
                for (var r = n.length - 1; r >= 0; r--)
                    t = n[r],
                    e = this._getLayer(t.layerId).layer,
                    t.checked ? i.push(e) : t.checked || o.push(e);
                for (r = 0; r < o.length; r++)
                    this._map.hasLayer(o[r]) && this._map.removeLayer(o[r]);
                for (r = 0; r < i.length; r++)
                    this._map.hasLayer(i[r]) || this._map.addLayer(i[r]);
                this._handlingClick = !1,
                this._refocusOnMap()
            },
            _checkDisabledLayers: function() {
                for (var t, e, n = this._layerControlInputs, i = this._map.getZoom(), o = n.length - 1; o >= 0; o--)
                    t = n[o],
                    e = this._getLayer(t.layerId).layer,
                    t.disabled = void 0 !== e.options.minZoom && i < e.options.minZoom || void 0 !== e.options.maxZoom && i > e.options.maxZoom
            },
            _expandIfNotCollapsed: function() {
                return this._map && !this.options.collapsed && this.expand(),
                this
            },
            _expand: function() {
                return this.expand()
            },
            _collapse: function() {
                return this.collapse()
            }
        })
          , Ke = Ye.extend({
            options: {
                position: "topleft",
                zoomInText: "+",
                zoomInTitle: "Zoom in",
                zoomOutText: "&#x2212;",
                zoomOutTitle: "Zoom out"
            },
            onAdd: function(t) {
                var e = "leaflet-control-zoom"
                  , n = re("div", e + " leaflet-bar")
                  , i = this.options;
                return this._zoomInButton = this._createButton(i.zoomInText, i.zoomInTitle, e + "-in", n, this._zoomIn),
                this._zoomOutButton = this._createButton(i.zoomOutText, i.zoomOutTitle, e + "-out", n, this._zoomOut),
                this._updateDisabled(),
                t.on("zoomend zoomlevelschange", this._updateDisabled, this),
                n
            },
            onRemove: function(t) {
                t.off("zoomend zoomlevelschange", this._updateDisabled, this)
            },
            disable: function() {
                return this._disabled = !0,
                this._updateDisabled(),
                this
            },
            enable: function() {
                return this._disabled = !1,
                this._updateDisabled(),
                this
            },
            _zoomIn: function(t) {
                !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
            },
            _zoomOut: function(t) {
                !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
            },
            _createButton: function(t, e, n, i, o) {
                var r = re("a", n, i);
                return r.innerHTML = t,
                r.href = "#",
                r.title = e,
                r.setAttribute("role", "button"),
                r.setAttribute("aria-label", e),
                Be(r),
                Me(r, "click", De),
                Me(r, "click", o, this),
                Me(r, "click", this._refocusOnMap, this),
                r
            },
            _updateDisabled: function() {
                var t = this._map
                  , e = "leaflet-disabled";
                fe(this._zoomInButton, e),
                fe(this._zoomOutButton, e),
                (this._disabled || t._zoom === t.getMinZoom()) && ce(this._zoomOutButton, e),
                (this._disabled || t._zoom === t.getMaxZoom()) && ce(this._zoomInButton, e)
            }
        });
        $e.mergeOptions({
            zoomControl: !0
        }),
        $e.addInitHook(function() {
            this.options.zoomControl && (this.zoomControl = new Ke,
            this.addControl(this.zoomControl))
        });
        var Qe = Ye.extend({
            options: {
                position: "bottomleft",
                maxWidth: 100,
                metric: !0,
                imperial: !0
            },
            onAdd: function(t) {
                var e = re("div", "leaflet-control-scale")
                  , n = this.options;
                return this._addScales(n, "leaflet-control-scale-line", e),
                t.on(n.updateWhenIdle ? "moveend" : "move", this._update, this),
                t.whenReady(this._update, this),
                e
            },
            onRemove: function(t) {
                t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this)
            },
            _addScales: function(t, e, n) {
                t.metric && (this._mScale = re("div", e, n)),
                t.imperial && (this._iScale = re("div", e, n))
            },
            _update: function() {
                var t = this._map
                  , e = t.getSize().y / 2
                  , n = t.distance(t.containerPointToLatLng([0, e]), t.containerPointToLatLng([this.options.maxWidth, e]));
                this._updateScales(n)
            },
            _updateScales: function(t) {
                this.options.metric && t && this._updateMetric(t),
                this.options.imperial && t && this._updateImperial(t)
            },
            _updateMetric: function(t) {
                var e = this._getRoundNum(t)
                  , n = e < 1e3 ? e + " m" : e / 1e3 + " km";
                this._updateScale(this._mScale, n, e / t)
            },
            _updateImperial: function(t) {
                var e, n, i, o = 3.2808399 * t;
                o > 5280 ? (e = o / 5280,
                n = this._getRoundNum(e),
                this._updateScale(this._iScale, n + " mi", n / e)) : (i = this._getRoundNum(o),
                this._updateScale(this._iScale, i + " ft", i / o))
            },
            _updateScale: function(t, e, n) {
                t.style.width = Math.round(this.options.maxWidth * n) + "px",
                t.innerHTML = e
            },
            _getRoundNum: function(t) {
                var e = Math.pow(10, (Math.floor(t) + "").length - 1)
                  , n = t / e;
                return e * (n = n >= 10 ? 10 : n >= 5 ? 5 : n >= 3 ? 3 : n >= 2 ? 2 : 1)
            }
        })
          , tn = Ye.extend({
            options: {
                position: "bottomright",
                prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
            },
            initialize: function(t) {
                d(this, t),
                this._attributions = {}
            },
            onAdd: function(t) {
                for (var e in t.attributionControl = this,
                this._container = re("div", "leaflet-control-attribution"),
                Be(this._container),
                t._layers)
                    t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
                return this._update(),
                this._container
            },
            setPrefix: function(t) {
                return this.options.prefix = t,
                this._update(),
                this
            },
            addAttribution: function(t) {
                return t ? (this._attributions[t] || (this._attributions[t] = 0),
                this._attributions[t]++,
                this._update(),
                this) : this
            },
            removeAttribution: function(t) {
                return t ? (this._attributions[t] && (this._attributions[t]--,
                this._update()),
                this) : this
            },
            _update: function() {
                if (this._map) {
                    var t = [];
                    for (var e in this._attributions)
                        this._attributions[e] && t.push(e);
                    var n = [];
                    this.options.prefix && n.push(this.options.prefix),
                    t.length && n.push(t.join(", ")),
                    this._container.innerHTML = n.join(" | ")
                }
            }
        });
        $e.mergeOptions({
            attributionControl: !0
        }),
        $e.addInitHook(function() {
            this.options.attributionControl && (new tn).addTo(this)
        }),
        Ye.Layers = Je,
        Ye.Zoom = Ke,
        Ye.Scale = Qe,
        Ye.Attribution = tn,
        Xe.layers = function(t, e, n) {
            return new Je(t,e,n)
        }
        ,
        Xe.zoom = function(t) {
            return new Ke(t)
        }
        ,
        Xe.scale = function(t) {
            return new Qe(t)
        }
        ,
        Xe.attribution = function(t) {
            return new tn(t)
        }
        ;
        var en = C.extend({
            initialize: function(t) {
                this._map = t
            },
            enable: function() {
                return this._enabled ? this : (this._enabled = !0,
                this.addHooks(),
                this)
            },
            disable: function() {
                return this._enabled ? (this._enabled = !1,
                this.removeHooks(),
                this) : this
            },
            enabled: function() {
                return !!this._enabled
            }
        });
        en.addTo = function(t, e) {
            return t.addHandler(e, this),
            this
        }
        ;
        var nn, on = {
            Events: z
        }, rn = wt ? "touchstart mousedown" : "mousedown", sn = {
            mousedown: "mouseup",
            touchstart: "touchend",
            pointerdown: "touchend",
            MSPointerDown: "touchend"
        }, an = {
            mousedown: "mousemove",
            touchstart: "touchmove",
            pointerdown: "touchmove",
            MSPointerDown: "touchmove"
        }, ln = E.extend({
            options: {
                clickTolerance: 3
            },
            initialize: function(t, e, n, i) {
                d(this, i),
                this._element = t,
                this._dragStartTarget = e || t,
                this._preventOutline = n
            },
            enable: function() {
                this._enabled || (Me(this._dragStartTarget, rn, this._onDown, this),
                this._enabled = !0)
            },
            disable: function() {
                this._enabled && (ln._dragging === this && this.finishDrag(),
                ze(this._dragStartTarget, rn, this._onDown, this),
                this._enabled = !1,
                this._moved = !1)
            },
            _onDown: function(t) {
                if (!t._simulated && this._enabled && (this._moved = !1,
                !ue(this._element, "leaflet-zoom-anim") && !(ln._dragging || t.shiftKey || 1 !== t.which && 1 !== t.button && !t.touches || (ln._dragging = this,
                this._preventOutline && Te(this._element),
                be(),
                Yt(),
                this._moving)))) {
                    this.fire("down");
                    var e = t.touches ? t.touches[0] : t
                      , n = Le(this._element);
                    this._startPoint = new A(e.clientX,e.clientY),
                    this._parentScale = Pe(n),
                    Me(document, an[t.type], this._onMove, this),
                    Me(document, sn[t.type], this._onUp, this)
                }
            },
            _onMove: function(t) {
                if (!t._simulated && this._enabled)
                    if (t.touches && t.touches.length > 1)
                        this._moved = !0;
                    else {
                        var e = t.touches && 1 === t.touches.length ? t.touches[0] : t
                          , n = new A(e.clientX,e.clientY)._subtract(this._startPoint);
                        (n.x || n.y) && (Math.abs(n.x) + Math.abs(n.y) < this.options.clickTolerance || (n.x /= this._parentScale.x,
                        n.y /= this._parentScale.y,
                        Ne(t),
                        this._moved || (this.fire("dragstart"),
                        this._moved = !0,
                        this._startPos = ye(this._element).subtract(n),
                        ce(document.body, "leaflet-dragging"),
                        this._lastTarget = t.target || t.srcElement,
                        window.SVGElementInstance && this._lastTarget instanceof SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement),
                        ce(this._lastTarget, "leaflet-drag-target")),
                        this._newPos = this._startPos.add(n),
                        this._moving = !0,
                        S(this._animRequest),
                        this._lastEvent = t,
                        this._animRequest = P(this._updatePosition, this, !0)))
                    }
            },
            _updatePosition: function() {
                var t = {
                    originalEvent: this._lastEvent
                };
                this.fire("predrag", t),
                _e(this._element, this._newPos),
                this.fire("drag", t)
            },
            _onUp: function(t) {
                !t._simulated && this._enabled && this.finishDrag()
            },
            finishDrag: function() {
                for (var t in fe(document.body, "leaflet-dragging"),
                this._lastTarget && (fe(this._lastTarget, "leaflet-drag-target"),
                this._lastTarget = null),
                an)
                    ze(document, an[t], this._onMove, this),
                    ze(document, sn[t], this._onUp, this);
                we(),
                Xt(),
                this._moved && this._moving && (S(this._animRequest),
                this.fire("dragend", {
                    distance: this._newPos.distanceTo(this._startPos)
                })),
                this._moving = !1,
                ln._dragging = !1
            }
        });
        function hn(t, e) {
            if (!e || !t.length)
                return t.slice();
            var n = e * e;
            return t = function(t, e) {
                var n = t.length
                  , i = new (typeof Uint8Array != void 0 + "" ? Uint8Array : Array)(n);
                i[0] = i[n - 1] = 1,
                function t(e, n, i, o, r) {
                    var s, a, l, h = 0;
                    for (a = o + 1; a <= r - 1; a++)
                        (l = pn(e[a], e[o], e[r], !0)) > h && (s = a,
                        h = l);
                    h > i && (n[s] = 1,
                    t(e, n, i, o, s),
                    t(e, n, i, s, r))
                }(t, i, e, 0, n - 1);
                var o, r = [];
                for (o = 0; o < n; o++)
                    i[o] && r.push(t[o]);
                return r
            }(t = function(t, e) {
                for (var n = [t[0]], i = 1, o = 0, r = t.length; i < r; i++)
                    s = t[i],
                    a = t[o],
                    l = void 0,
                    h = void 0,
                    l = a.x - s.x,
                    h = a.y - s.y,
                    l * l + h * h > e && (n.push(t[i]),
                    o = i);
                var s, a, l, h;
                return o < r - 1 && n.push(t[r - 1]),
                n
            }(t, n), n)
        }
        function un(t, e, n) {
            return Math.sqrt(pn(t, e, n, !0))
        }
        function cn(t, e, n, i, o) {
            var r, s, a, l = i ? nn : dn(t, n), h = dn(e, n);
            for (nn = h; ; ) {
                if (!(l | h))
                    return [t, e];
                if (l & h)
                    return !1;
                s = fn(t, e, r = l || h, n, o),
                a = dn(s, n),
                r === l ? (t = s,
                l = a) : (e = s,
                h = a)
            }
        }
        function fn(t, e, n, i, o) {
            var r, s, a = e.x - t.x, l = e.y - t.y, h = i.min, u = i.max;
            return 8 & n ? (r = t.x + a * (u.y - t.y) / l,
            s = u.y) : 4 & n ? (r = t.x + a * (h.y - t.y) / l,
            s = h.y) : 2 & n ? (r = u.x,
            s = t.y + l * (u.x - t.x) / a) : 1 & n && (r = h.x,
            s = t.y + l * (h.x - t.x) / a),
            new A(r,s,o)
        }
        function dn(t, e) {
            var n = 0;
            return t.x < e.min.x ? n |= 1 : t.x > e.max.x && (n |= 2),
            t.y < e.min.y ? n |= 4 : t.y > e.max.y && (n |= 8),
            n
        }
        function pn(t, e, n, i) {
            var o, r = e.x, s = e.y, a = n.x - r, l = n.y - s, h = a * a + l * l;
            return h > 0 && ((o = ((t.x - r) * a + (t.y - s) * l) / h) > 1 ? (r = n.x,
            s = n.y) : o > 0 && (r += a * o,
            s += l * o)),
            a = t.x - r,
            l = t.y - s,
            i ? a * a + l * l : new A(r,s)
        }
        function mn(t) {
            return !v(t[0]) || "object" != typeof t[0][0] && void 0 !== t[0][0]
        }
        function gn(t) {
            return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),
            mn(t)
        }
        var vn = (Object.freeze || Object)({
            simplify: hn,
            pointToSegmentDistance: un,
            closestPointOnSegment: function(t, e, n) {
                return pn(t, e, n)
            },
            clipSegment: cn,
            _getEdgeIntersection: fn,
            _getBitCode: dn,
            _sqClosestPointOnSegment: pn,
            isFlat: mn,
            _flat: gn
        });
        function _n(t, e, n) {
            var i, o, r, s, a, l, h, u, c, f = [1, 4, 2, 8];
            for (o = 0,
            h = t.length; o < h; o++)
                t[o]._code = dn(t[o], e);
            for (s = 0; s < 4; s++) {
                for (u = f[s],
                i = [],
                o = 0,
                h = t.length,
                r = h - 1; o < h; r = o++)
                    a = t[o],
                    l = t[r],
                    a._code & u ? l._code & u || ((c = fn(l, a, u, e, n))._code = dn(c, e),
                    i.push(c)) : (l._code & u && ((c = fn(l, a, u, e, n))._code = dn(c, e),
                    i.push(c)),
                    i.push(a));
                t = i
            }
            return t
        }
        var yn = (Object.freeze || Object)({
            clipPolygon: _n
        })
          , xn = {
            project: function(t) {
                return new A(t.lng,t.lat)
            },
            unproject: function(t) {
                return new Z(t.y,t.x)
            },
            bounds: new B([-180, -90],[180, 90])
        }
          , bn = {
            R: 6378137,
            R_MINOR: 6356752.314245179,
            bounds: new B([-20037508.34279, -15496570.73972],[20037508.34279, 18764656.23138]),
            project: function(t) {
                var e = Math.PI / 180
                  , n = this.R
                  , i = t.lat * e
                  , o = this.R_MINOR / n
                  , r = Math.sqrt(1 - o * o)
                  , s = r * Math.sin(i)
                  , a = Math.tan(Math.PI / 4 - i / 2) / Math.pow((1 - s) / (1 + s), r / 2);
                return i = -n * Math.log(Math.max(a, 1e-10)),
                new A(t.lng * e * n,i)
            },
            unproject: function(t) {
                for (var e, n = 180 / Math.PI, i = this.R, o = this.R_MINOR / i, r = Math.sqrt(1 - o * o), s = Math.exp(-t.y / i), a = Math.PI / 2 - 2 * Math.atan(s), l = 0, h = .1; l < 15 && Math.abs(h) > 1e-7; l++)
                    e = r * Math.sin(a),
                    e = Math.pow((1 - e) / (1 + e), r / 2),
                    h = Math.PI / 2 - 2 * Math.atan(s * e) - a,
                    a += h;
                return new Z(a * n,t.x * n / i)
            }
        }
          , wn = (Object.freeze || Object)({
            LonLat: xn,
            Mercator: bn,
            SphericalMercator: q
        })
          , Tn = n({}, H, {
            code: "EPSG:3395",
            projection: bn,
            transformation: function() {
                var t = .5 / (Math.PI * bn.R);
                return V(t, .5, -t, .5)
            }()
        })
          , kn = n({}, H, {
            code: "EPSG:4326",
            projection: xn,
            transformation: V(1 / 180, 1, -1 / 180, .5)
        })
          , Ln = n({}, W, {
            projection: xn,
            transformation: V(1, 0, -1, 0),
            scale: function(t) {
                return Math.pow(2, t)
            },
            zoom: function(t) {
                return Math.log(t) / Math.LN2
            },
            distance: function(t, e) {
                var n = e.lng - t.lng
                  , i = e.lat - t.lat;
                return Math.sqrt(n * n + i * i)
            },
            infinite: !0
        });
        W.Earth = H,
        W.EPSG3395 = Tn,
        W.EPSG3857 = G,
        W.EPSG900913 = $,
        W.EPSG4326 = kn,
        W.Simple = Ln;
        var Pn = E.extend({
            options: {
                pane: "overlayPane",
                attribution: null,
                bubblingMouseEvents: !0
            },
            addTo: function(t) {
                return t.addLayer(this),
                this
            },
            remove: function() {
                return this.removeFrom(this._map || this._mapToAdd)
            },
            removeFrom: function(t) {
                return t && t.removeLayer(this),
                this
            },
            getPane: function(t) {
                return this._map.getPane(t ? this.options[t] || t : this.options.pane)
            },
            addInteractiveTarget: function(t) {
                return this._map._targets[s(t)] = this,
                this
            },
            removeInteractiveTarget: function(t) {
                return delete this._map._targets[s(t)],
                this
            },
            getAttribution: function() {
                return this.options.attribution
            },
            _layerAdd: function(t) {
                var e = t.target;
                if (e.hasLayer(this)) {
                    if (this._map = e,
                    this._zoomAnimated = e._zoomAnimated,
                    this.getEvents) {
                        var n = this.getEvents();
                        e.on(n, this),
                        this.once("remove", function() {
                            e.off(n, this)
                        }, this)
                    }
                    this.onAdd(e),
                    this.getAttribution && e.attributionControl && e.attributionControl.addAttribution(this.getAttribution()),
                    this.fire("add"),
                    e.fire("layeradd", {
                        layer: this
                    })
                }
            }
        });
        $e.include({
            addLayer: function(t) {
                if (!t._layerAdd)
                    throw new Error("The provided object is not a Layer.");
                var e = s(t);
                return this._layers[e] ? this : (this._layers[e] = t,
                t._mapToAdd = this,
                t.beforeAdd && t.beforeAdd(this),
                this.whenReady(t._layerAdd, t),
                this)
            },
            removeLayer: function(t) {
                var e = s(t);
                return this._layers[e] ? (this._loaded && t.onRemove(this),
                t.getAttribution && this.attributionControl && this.attributionControl.removeAttribution(t.getAttribution()),
                delete this._layers[e],
                this._loaded && (this.fire("layerremove", {
                    layer: t
                }),
                t.fire("remove")),
                t._map = t._mapToAdd = null,
                this) : this
            },
            hasLayer: function(t) {
                return !!t && s(t)in this._layers
            },
            eachLayer: function(t, e) {
                for (var n in this._layers)
                    t.call(e, this._layers[n]);
                return this
            },
            _addLayers: function(t) {
                t = t ? v(t) ? t : [t] : [];
                for (var e = 0, n = t.length; e < n; e++)
                    this.addLayer(t[e])
            },
            _addZoomLimit: function(t) {
                !isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[s(t)] = t,
                this._updateZoomLevels())
            },
            _removeZoomLimit: function(t) {
                var e = s(t);
                this._zoomBoundLayers[e] && (delete this._zoomBoundLayers[e],
                this._updateZoomLevels())
            },
            _updateZoomLevels: function() {
                var t = 1 / 0
                  , e = -1 / 0
                  , n = this._getZoomSpan();
                for (var i in this._zoomBoundLayers) {
                    var o = this._zoomBoundLayers[i].options;
                    t = void 0 === o.minZoom ? t : Math.min(t, o.minZoom),
                    e = void 0 === o.maxZoom ? e : Math.max(e, o.maxZoom)
                }
                this._layersMaxZoom = e === -1 / 0 ? void 0 : e,
                this._layersMinZoom = t === 1 / 0 ? void 0 : t,
                n !== this._getZoomSpan() && this.fire("zoomlevelschange"),
                void 0 === this.options.maxZoom && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom),
                void 0 === this.options.minZoom && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom)
            }
        });
        var Sn = Pn.extend({
            initialize: function(t, e) {
                var n, i;
                if (d(this, e),
                this._layers = {},
                t)
                    for (n = 0,
                    i = t.length; n < i; n++)
                        this.addLayer(t[n])
            },
            addLayer: function(t) {
                var e = this.getLayerId(t);
                return this._layers[e] = t,
                this._map && this._map.addLayer(t),
                this
            },
            removeLayer: function(t) {
                var e = t in this._layers ? t : this.getLayerId(t);
                return this._map && this._layers[e] && this._map.removeLayer(this._layers[e]),
                delete this._layers[e],
                this
            },
            hasLayer: function(t) {
                return !!t && (t in this._layers || this.getLayerId(t)in this._layers)
            },
            clearLayers: function() {
                return this.eachLayer(this.removeLayer, this)
            },
            invoke: function(t) {
                var e, n, i = Array.prototype.slice.call(arguments, 1);
                for (e in this._layers)
                    (n = this._layers[e])[t] && n[t].apply(n, i);
                return this
            },
            onAdd: function(t) {
                this.eachLayer(t.addLayer, t)
            },
            onRemove: function(t) {
                this.eachLayer(t.removeLayer, t)
            },
            eachLayer: function(t, e) {
                for (var n in this._layers)
                    t.call(e, this._layers[n]);
                return this
            },
            getLayer: function(t) {
                return this._layers[t]
            },
            getLayers: function() {
                var t = [];
                return this.eachLayer(t.push, t),
                t
            },
            setZIndex: function(t) {
                return this.invoke("setZIndex", t)
            },
            getLayerId: function(t) {
                return s(t)
            }
        })
          , Mn = Sn.extend({
            addLayer: function(t) {
                return this.hasLayer(t) ? this : (t.addEventParent(this),
                Sn.prototype.addLayer.call(this, t),
                this.fire("layeradd", {
                    layer: t
                }))
            },
            removeLayer: function(t) {
                return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]),
                t.removeEventParent(this),
                Sn.prototype.removeLayer.call(this, t),
                this.fire("layerremove", {
                    layer: t
                })) : this
            },
            setStyle: function(t) {
                return this.invoke("setStyle", t)
            },
            bringToFront: function() {
                return this.invoke("bringToFront")
            },
            bringToBack: function() {
                return this.invoke("bringToBack")
            },
            getBounds: function() {
                var t = new D;
                for (var e in this._layers) {
                    var n = this._layers[e];
                    t.extend(n.getBounds ? n.getBounds() : n.getLatLng())
                }
                return t
            }
        })
          , Cn = C.extend({
            options: {
                popupAnchor: [0, 0],
                tooltipAnchor: [0, 0]
            },
            initialize: function(t) {
                d(this, t)
            },
            createIcon: function(t) {
                return this._createIcon("icon", t)
            },
            createShadow: function(t) {
                return this._createIcon("shadow", t)
            },
            _createIcon: function(t, e) {
                var n = this._getIconUrl(t);
                if (!n) {
                    if ("icon" === t)
                        throw new Error("iconUrl not set in Icon options (see the docs).");
                    return null
                }
                var i = this._createImg(n, e && "IMG" === e.tagName ? e : null);
                return this._setIconStyles(i, t),
                i
            },
            _setIconStyles: function(t, e) {
                var n = this.options
                  , i = n[e + "Size"];
                "number" == typeof i && (i = [i, i]);
                var o = O(i)
                  , r = O("shadow" === e && n.shadowAnchor || n.iconAnchor || o && o.divideBy(2, !0));
                t.className = "leaflet-marker-" + e + " " + (n.className || ""),
                r && (t.style.marginLeft = -r.x + "px",
                t.style.marginTop = -r.y + "px"),
                o && (t.style.width = o.x + "px",
                t.style.height = o.y + "px")
            },
            _createImg: function(t, e) {
                return (e = e || document.createElement("img")).src = t,
                e
            },
            _getIconUrl: function(t) {
                return Lt && this.options[t + "RetinaUrl"] || this.options[t + "Url"]
            }
        })
          , zn = Cn.extend({
            options: {
                iconUrl: "marker-icon.png",
                iconRetinaUrl: "marker-icon-2x.png",
                shadowUrl: "marker-shadow.png",
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                tooltipAnchor: [16, -28],
                shadowSize: [41, 41]
            },
            _getIconUrl: function(t) {
                return zn.imagePath || (zn.imagePath = this._detectIconPath()),
                (this.options.imagePath || zn.imagePath) + Cn.prototype._getIconUrl.call(this, t)
            },
            _detectIconPath: function() {
                var t = re("div", "leaflet-default-icon-path", document.body)
                  , e = oe(t, "background-image") || oe(t, "backgroundImage");
                return document.body.removeChild(t),
                e = null === e || 0 !== e.indexOf("url") ? "" : e.replace(/^url\(["']?/, "").replace(/marker-icon\.png["']?\)$/, "")
            }
        })
          , En = en.extend({
            initialize: function(t) {
                this._marker = t
            },
            addHooks: function() {
                var t = this._marker._icon;
                this._draggable || (this._draggable = new ln(t,t,!0)),
                this._draggable.on({
                    dragstart: this._onDragStart,
                    predrag: this._onPreDrag,
                    drag: this._onDrag,
                    dragend: this._onDragEnd
                }, this).enable(),
                ce(t, "leaflet-marker-draggable")
            },
            removeHooks: function() {
                this._draggable.off({
                    dragstart: this._onDragStart,
                    predrag: this._onPreDrag,
                    drag: this._onDrag,
                    dragend: this._onDragEnd
                }, this).disable(),
                this._marker._icon && fe(this._marker._icon, "leaflet-marker-draggable")
            },
            moved: function() {
                return this._draggable && this._draggable._moved
            },
            _adjustPan: function(t) {
                var e = this._marker
                  , n = e._map
                  , i = this._marker.options.autoPanSpeed
                  , o = this._marker.options.autoPanPadding
                  , r = ye(e._icon)
                  , s = n.getPixelBounds()
                  , a = n.getPixelOrigin()
                  , l = N(s.min._subtract(a).add(o), s.max._subtract(a).subtract(o));
                if (!l.contains(r)) {
                    var h = O((Math.max(l.max.x, r.x) - l.max.x) / (s.max.x - l.max.x) - (Math.min(l.min.x, r.x) - l.min.x) / (s.min.x - l.min.x), (Math.max(l.max.y, r.y) - l.max.y) / (s.max.y - l.max.y) - (Math.min(l.min.y, r.y) - l.min.y) / (s.min.y - l.min.y)).multiplyBy(i);
                    n.panBy(h, {
                        animate: !1
                    }),
                    this._draggable._newPos._add(h),
                    this._draggable._startPos._add(h),
                    _e(e._icon, this._draggable._newPos),
                    this._onDrag(t),
                    this._panRequest = P(this._adjustPan.bind(this, t))
                }
            },
            _onDragStart: function() {
                this._oldLatLng = this._marker.getLatLng(),
                this._marker.closePopup().fire("movestart").fire("dragstart")
            },
            _onPreDrag: function(t) {
                this._marker.options.autoPan && (S(this._panRequest),
                this._panRequest = P(this._adjustPan.bind(this, t)))
            },
            _onDrag: function(t) {
                var e = this._marker
                  , n = e._shadow
                  , i = ye(e._icon)
                  , o = e._map.layerPointToLatLng(i);
                n && _e(n, i),
                e._latlng = o,
                t.latlng = o,
                t.oldLatLng = this._oldLatLng,
                e.fire("move", t).fire("drag", t)
            },
            _onDragEnd: function(t) {
                S(this._panRequest),
                delete this._oldLatLng,
                this._marker.fire("moveend").fire("dragend", t)
            }
        })
          , An = Pn.extend({
            options: {
                icon: new zn,
                interactive: !0,
                keyboard: !0,
                title: "",
                alt: "",
                zIndexOffset: 0,
                opacity: 1,
                riseOnHover: !1,
                riseOffset: 250,
                pane: "markerPane",
                bubblingMouseEvents: !1,
                draggable: !1,
                autoPan: !1,
                autoPanPadding: [50, 50],
                autoPanSpeed: 10
            },
            initialize: function(t, e) {
                d(this, e),
                this._latlng = R(t)
            },
            onAdd: function(t) {
                this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation,
                this._zoomAnimated && t.on("zoomanim", this._animateZoom, this),
                this._initIcon(),
                this.update()
            },
            onRemove: function(t) {
                this.dragging && this.dragging.enabled() && (this.options.draggable = !0,
                this.dragging.removeHooks()),
                delete this.dragging,
                this._zoomAnimated && t.off("zoomanim", this._animateZoom, this),
                this._removeIcon(),
                this._removeShadow()
            },
            getEvents: function() {
                return {
                    zoom: this.update,
                    viewreset: this.update
                }
            },
            getLatLng: function() {
                return this._latlng
            },
            setLatLng: function(t) {
                var e = this._latlng;
                return this._latlng = R(t),
                this.update(),
                this.fire("move", {
                    oldLatLng: e,
                    latlng: this._latlng
                })
            },
            setZIndexOffset: function(t) {
                return this.options.zIndexOffset = t,
                this.update()
            },
            setIcon: function(t) {
                return this.options.icon = t,
                this._map && (this._initIcon(),
                this.update()),
                this._popup && this.bindPopup(this._popup, this._popup.options),
                this
            },
            getElement: function() {
                return this._icon
            },
            update: function() {
                if (this._icon && this._map) {
                    var t = this._map.latLngToLayerPoint(this._latlng).round();
                    this._setPos(t)
                }
                return this
            },
            _initIcon: function() {
                var t = this.options
                  , e = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide")
                  , n = t.icon.createIcon(this._icon)
                  , i = !1;
                n !== this._icon && (this._icon && this._removeIcon(),
                i = !0,
                t.title && (n.title = t.title),
                "IMG" === n.tagName && (n.alt = t.alt || "")),
                ce(n, e),
                t.keyboard && (n.tabIndex = "0"),
                this._icon = n,
                t.riseOnHover && this.on({
                    mouseover: this._bringToFront,
                    mouseout: this._resetZIndex
                });
                var o = t.icon.createShadow(this._shadow)
                  , r = !1;
                o !== this._shadow && (this._removeShadow(),
                r = !0),
                o && (ce(o, e),
                o.alt = ""),
                this._shadow = o,
                t.opacity < 1 && this._updateOpacity(),
                i && this.getPane().appendChild(this._icon),
                this._initInteraction(),
                o && r && this.getPane("shadowPane").appendChild(this._shadow)
            },
            _removeIcon: function() {
                this.options.riseOnHover && this.off({
                    mouseover: this._bringToFront,
                    mouseout: this._resetZIndex
                }),
                se(this._icon),
                this.removeInteractiveTarget(this._icon),
                this._icon = null
            },
            _removeShadow: function() {
                this._shadow && se(this._shadow),
                this._shadow = null
            },
            _setPos: function(t) {
                _e(this._icon, t),
                this._shadow && _e(this._shadow, t),
                this._zIndex = t.y + this.options.zIndexOffset,
                this._resetZIndex()
            },
            _updateZIndex: function(t) {
                this._icon.style.zIndex = this._zIndex + t
            },
            _animateZoom: function(t) {
                var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
                this._setPos(e)
            },
            _initInteraction: function() {
                if (this.options.interactive && (ce(this._icon, "leaflet-interactive"),
                this.addInteractiveTarget(this._icon),
                En)) {
                    var t = this.options.draggable;
                    this.dragging && (t = this.dragging.enabled(),
                    this.dragging.disable()),
                    this.dragging = new En(this),
                    t && this.dragging.enable()
                }
            },
            setOpacity: function(t) {
                return this.options.opacity = t,
                this._map && this._updateOpacity(),
                this
            },
            _updateOpacity: function() {
                var t = this.options.opacity;
                me(this._icon, t),
                this._shadow && me(this._shadow, t)
            },
            _bringToFront: function() {
                this._updateZIndex(this.options.riseOffset)
            },
            _resetZIndex: function() {
                this._updateZIndex(0)
            },
            _getPopupAnchor: function() {
                return this.options.icon.options.popupAnchor
            },
            _getTooltipAnchor: function() {
                return this.options.icon.options.tooltipAnchor
            }
        })
          , In = Pn.extend({
            options: {
                stroke: !0,
                color: "#3388ff",
                weight: 3,
                opacity: 1,
                lineCap: "round",
                lineJoin: "round",
                dashArray: null,
                dashOffset: null,
                fill: !1,
                fillColor: null,
                fillOpacity: .2,
                fillRule: "evenodd",
                interactive: !0,
                bubblingMouseEvents: !0
            },
            beforeAdd: function(t) {
                this._renderer = t.getRenderer(this)
            },
            onAdd: function() {
                this._renderer._initPath(this),
                this._reset(),
                this._renderer._addPath(this)
            },
            onRemove: function() {
                this._renderer._removePath(this)
            },
            redraw: function() {
                return this._map && this._renderer._updatePath(this),
                this
            },
            setStyle: function(t) {
                return d(this, t),
                this._renderer && this._renderer._updateStyle(this),
                this
            },
            bringToFront: function() {
                return this._renderer && this._renderer._bringToFront(this),
                this
            },
            bringToBack: function() {
                return this._renderer && this._renderer._bringToBack(this),
                this
            },
            getElement: function() {
                return this._path
            },
            _reset: function() {
                this._project(),
                this._update()
            },
            _clickTolerance: function() {
                return (this.options.stroke ? this.options.weight / 2 : 0) + this._renderer.options.tolerance
            }
        })
          , On = In.extend({
            options: {
                fill: !0,
                radius: 10
            },
            initialize: function(t, e) {
                d(this, e),
                this._latlng = R(t),
                this._radius = this.options.radius
            },
            setLatLng: function(t) {
                return this._latlng = R(t),
                this.redraw(),
                this.fire("move", {
                    latlng: this._latlng
                })
            },
            getLatLng: function() {
                return this._latlng
            },
            setRadius: function(t) {
                return this.options.radius = this._radius = t,
                this.redraw()
            },
            getRadius: function() {
                return this._radius
            },
            setStyle: function(t) {
                var e = t && t.radius || this._radius;
                return In.prototype.setStyle.call(this, t),
                this.setRadius(e),
                this
            },
            _project: function() {
                this._point = this._map.latLngToLayerPoint(this._latlng),
                this._updateBounds()
            },
            _updateBounds: function() {
                var t = this._radius
                  , e = this._radiusY || t
                  , n = this._clickTolerance()
                  , i = [t + n, e + n];
                this._pxBounds = new B(this._point.subtract(i),this._point.add(i))
            },
            _update: function() {
                this._map && this._updatePath()
            },
            _updatePath: function() {
                this._renderer._updateCircle(this)
            },
            _empty: function() {
                return this._radius && !this._renderer._bounds.intersects(this._pxBounds)
            },
            _containsPoint: function(t) {
                return t.distanceTo(this._point) <= this._radius + this._clickTolerance()
            }
        })
          , Bn = On.extend({
            initialize: function(t, e, i) {
                if ("number" == typeof e && (e = n({}, i, {
                    radius: e
                })),
                d(this, e),
                this._latlng = R(t),
                isNaN(this.options.radius))
                    throw new Error("Circle radius cannot be NaN");
                this._mRadius = this.options.radius
            },
            setRadius: function(t) {
                return this._mRadius = t,
                this.redraw()
            },
            getRadius: function() {
                return this._mRadius
            },
            getBounds: function() {
                var t = [this._radius, this._radiusY || this._radius];
                return new D(this._map.layerPointToLatLng(this._point.subtract(t)),this._map.layerPointToLatLng(this._point.add(t)))
            },
            setStyle: In.prototype.setStyle,
            _project: function() {
                var t = this._latlng.lng
                  , e = this._latlng.lat
                  , n = this._map
                  , i = n.options.crs;
                if (i.distance === H.distance) {
                    var o = Math.PI / 180
                      , r = this._mRadius / H.R / o
                      , s = n.project([e + r, t])
                      , a = n.project([e - r, t])
                      , l = s.add(a).divideBy(2)
                      , h = n.unproject(l).lat
                      , u = Math.acos((Math.cos(r * o) - Math.sin(e * o) * Math.sin(h * o)) / (Math.cos(e * o) * Math.cos(h * o))) / o;
                    (isNaN(u) || 0 === u) && (u = r / Math.cos(Math.PI / 180 * e)),
                    this._point = l.subtract(n.getPixelOrigin()),
                    this._radius = isNaN(u) ? 0 : l.x - n.project([h, t - u]).x,
                    this._radiusY = l.y - s.y
                } else {
                    var c = i.unproject(i.project(this._latlng).subtract([this._mRadius, 0]));
                    this._point = n.latLngToLayerPoint(this._latlng),
                    this._radius = this._point.x - n.latLngToLayerPoint(c).x
                }
                this._updateBounds()
            }
        })
          , Nn = In.extend({
            options: {
                smoothFactor: 1,
                noClip: !1
            },
            initialize: function(t, e) {
                d(this, e),
                this._setLatLngs(t)
            },
            getLatLngs: function() {
                return this._latlngs
            },
            setLatLngs: function(t) {
                return this._setLatLngs(t),
                this.redraw()
            },
            isEmpty: function() {
                return !this._latlngs.length
            },
            closestLayerPoint: function(t) {
                for (var e, n, i = 1 / 0, o = null, r = pn, s = 0, a = this._parts.length; s < a; s++)
                    for (var l = this._parts[s], h = 1, u = l.length; h < u; h++) {
                        e = l[h - 1],
                        n = l[h];
                        var c = r(t, e, n, !0);
                        c < i && (i = c,
                        o = r(t, e, n))
                    }
                return o && (o.distance = Math.sqrt(i)),
                o
            },
            getCenter: function() {
                if (!this._map)
                    throw new Error("Must add layer to map before using getCenter()");
                var t, e, n, i, o, r, s, a = this._rings[0], l = a.length;
                if (!l)
                    return null;
                for (t = 0,
                e = 0; t < l - 1; t++)
                    e += a[t].distanceTo(a[t + 1]) / 2;
                if (0 === e)
                    return this._map.layerPointToLatLng(a[0]);
                for (t = 0,
                i = 0; t < l - 1; t++)
                    if (o = a[t],
                    r = a[t + 1],
                    n = o.distanceTo(r),
                    (i += n) > e)
                        return s = (i - e) / n,
                        this._map.layerPointToLatLng([r.x - s * (r.x - o.x), r.y - s * (r.y - o.y)])
            },
            getBounds: function() {
                return this._bounds
            },
            addLatLng: function(t, e) {
                return e = e || this._defaultShape(),
                t = R(t),
                e.push(t),
                this._bounds.extend(t),
                this.redraw()
            },
            _setLatLngs: function(t) {
                this._bounds = new D,
                this._latlngs = this._convertLatLngs(t)
            },
            _defaultShape: function() {
                return mn(this._latlngs) ? this._latlngs : this._latlngs[0]
            },
            _convertLatLngs: function(t) {
                for (var e = [], n = mn(t), i = 0, o = t.length; i < o; i++)
                    n ? (e[i] = R(t[i]),
                    this._bounds.extend(e[i])) : e[i] = this._convertLatLngs(t[i]);
                return e
            },
            _project: function() {
                var t = new B;
                this._rings = [],
                this._projectLatlngs(this._latlngs, this._rings, t);
                var e = this._clickTolerance()
                  , n = new A(e,e);
                this._bounds.isValid() && t.isValid() && (t.min._subtract(n),
                t.max._add(n),
                this._pxBounds = t)
            },
            _projectLatlngs: function(t, e, n) {
                var i, o, r = t[0]instanceof Z, s = t.length;
                if (r) {
                    for (o = [],
                    i = 0; i < s; i++)
                        o[i] = this._map.latLngToLayerPoint(t[i]),
                        n.extend(o[i]);
                    e.push(o)
                } else
                    for (i = 0; i < s; i++)
                        this._projectLatlngs(t[i], e, n)
            },
            _clipPoints: function() {
                var t = this._renderer._bounds;
                if (this._parts = [],
                this._pxBounds && this._pxBounds.intersects(t))
                    if (this.options.noClip)
                        this._parts = this._rings;
                    else {
                        var e, n, i, o, r, s, a, l = this._parts;
                        for (e = 0,
                        i = 0,
                        o = this._rings.length; e < o; e++)
                            for (a = this._rings[e],
                            n = 0,
                            r = a.length; n < r - 1; n++)
                                (s = cn(a[n], a[n + 1], t, n, !0)) && (l[i] = l[i] || [],
                                l[i].push(s[0]),
                                s[1] === a[n + 1] && n !== r - 2 || (l[i].push(s[1]),
                                i++))
                    }
            },
            _simplifyPoints: function() {
                for (var t = this._parts, e = this.options.smoothFactor, n = 0, i = t.length; n < i; n++)
                    t[n] = hn(t[n], e)
            },
            _update: function() {
                this._map && (this._clipPoints(),
                this._simplifyPoints(),
                this._updatePath())
            },
            _updatePath: function() {
                this._renderer._updatePoly(this)
            },
            _containsPoint: function(t, e) {
                var n, i, o, r, s, a, l = this._clickTolerance();
                if (!this._pxBounds || !this._pxBounds.contains(t))
                    return !1;
                for (n = 0,
                r = this._parts.length; n < r; n++)
                    for (a = this._parts[n],
                    i = 0,
                    s = a.length,
                    o = s - 1; i < s; o = i++)
                        if ((e || 0 !== i) && un(t, a[o], a[i]) <= l)
                            return !0;
                return !1
            }
        });
        Nn._flat = gn;
        var Dn = Nn.extend({
            options: {
                fill: !0
            },
            isEmpty: function() {
                return !this._latlngs.length || !this._latlngs[0].length
            },
            getCenter: function() {
                if (!this._map)
                    throw new Error("Must add layer to map before using getCenter()");
                var t, e, n, i, o, r, s, a, l, h = this._rings[0], u = h.length;
                if (!u)
                    return null;
                for (r = s = a = 0,
                t = 0,
                e = u - 1; t < u; e = t++)
                    n = h[t],
                    i = h[e],
                    o = n.y * i.x - i.y * n.x,
                    s += (n.x + i.x) * o,
                    a += (n.y + i.y) * o,
                    r += 3 * o;
                return l = 0 === r ? h[0] : [s / r, a / r],
                this._map.layerPointToLatLng(l)
            },
            _convertLatLngs: function(t) {
                var e = Nn.prototype._convertLatLngs.call(this, t)
                  , n = e.length;
                return n >= 2 && e[0]instanceof Z && e[0].equals(e[n - 1]) && e.pop(),
                e
            },
            _setLatLngs: function(t) {
                Nn.prototype._setLatLngs.call(this, t),
                mn(this._latlngs) && (this._latlngs = [this._latlngs])
            },
            _defaultShape: function() {
                return mn(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0]
            },
            _clipPoints: function() {
                var t = this._renderer._bounds
                  , e = this.options.weight
                  , n = new A(e,e);
                if (t = new B(t.min.subtract(n),t.max.add(n)),
                this._parts = [],
                this._pxBounds && this._pxBounds.intersects(t))
                    if (this.options.noClip)
                        this._parts = this._rings;
                    else
                        for (var i, o = 0, r = this._rings.length; o < r; o++)
                            (i = _n(this._rings[o], t, !0)).length && this._parts.push(i)
            },
            _updatePath: function() {
                this._renderer._updatePoly(this, !0)
            },
            _containsPoint: function(t) {
                var e, n, i, o, r, s, a, l, h = !1;
                if (!this._pxBounds || !this._pxBounds.contains(t))
                    return !1;
                for (o = 0,
                a = this._parts.length; o < a; o++)
                    for (e = this._parts[o],
                    r = 0,
                    l = e.length,
                    s = l - 1; r < l; s = r++)
                        n = e[r],
                        i = e[s],
                        n.y > t.y != i.y > t.y && t.x < (i.x - n.x) * (t.y - n.y) / (i.y - n.y) + n.x && (h = !h);
                return h || Nn.prototype._containsPoint.call(this, t, !0)
            }
        })
          , Fn = Mn.extend({
            initialize: function(t, e) {
                d(this, e),
                this._layers = {},
                t && this.addData(t)
            },
            addData: function(t) {
                var e, n, i, o = v(t) ? t : t.features;
                if (o) {
                    for (e = 0,
                    n = o.length; e < n; e++)
                        ((i = o[e]).geometries || i.geometry || i.features || i.coordinates) && this.addData(i);
                    return this
                }
                var r = this.options;
                if (r.filter && !r.filter(t))
                    return this;
                var s = Zn(t, r);
                return s ? (s.feature = Un(t),
                s.defaultOptions = s.options,
                this.resetStyle(s),
                r.onEachFeature && r.onEachFeature(t, s),
                this.addLayer(s)) : this
            },
            resetStyle: function(t) {
                return t.options = n({}, t.defaultOptions),
                this._setLayerStyle(t, this.options.style),
                this
            },
            setStyle: function(t) {
                return this.eachLayer(function(e) {
                    this._setLayerStyle(e, t)
                }, this)
            },
            _setLayerStyle: function(t, e) {
                "function" == typeof e && (e = e(t.feature)),
                t.setStyle && t.setStyle(e)
            }
        });
        function Zn(t, e) {
            var n, i, o, r, s = "Feature" === t.type ? t.geometry : t, a = s ? s.coordinates : null, l = [], h = e && e.pointToLayer, u = e && e.coordsToLatLng || Rn;
            if (!a && !s)
                return null;
            switch (s.type) {
            case "Point":
                return n = u(a),
                h ? h(t, n) : new An(n);
            case "MultiPoint":
                for (o = 0,
                r = a.length; o < r; o++)
                    n = u(a[o]),
                    l.push(h ? h(t, n) : new An(n));
                return new Mn(l);
            case "LineString":
            case "MultiLineString":
                return i = jn(a, "LineString" === s.type ? 0 : 1, u),
                new Nn(i,e);
            case "Polygon":
            case "MultiPolygon":
                return i = jn(a, "Polygon" === s.type ? 1 : 2, u),
                new Dn(i,e);
            case "GeometryCollection":
                for (o = 0,
                r = s.geometries.length; o < r; o++) {
                    var c = Zn({
                        geometry: s.geometries[o],
                        type: "Feature",
                        properties: t.properties
                    }, e);
                    c && l.push(c)
                }
                return new Mn(l);
            default:
                throw new Error("Invalid GeoJSON object.")
            }
        }
        function Rn(t) {
            return new Z(t[1],t[0],t[2])
        }
        function jn(t, e, n) {
            for (var i, o = [], r = 0, s = t.length; r < s; r++)
                i = e ? jn(t[r], e - 1, n) : (n || Rn)(t[r]),
                o.push(i);
            return o
        }
        function Wn(t, e) {
            return e = "number" == typeof e ? e : 6,
            void 0 !== t.alt ? [u(t.lng, e), u(t.lat, e), u(t.alt, e)] : [u(t.lng, e), u(t.lat, e)]
        }
        function Hn(t, e, n, i) {
            for (var o = [], r = 0, s = t.length; r < s; r++)
                o.push(e ? Hn(t[r], e - 1, n, i) : Wn(t[r], i));
            return !e && n && o.push(o[0]),
            o
        }
        function qn(t, e) {
            return t.feature ? n({}, t.feature, {
                geometry: e
            }) : Un(e)
        }
        function Un(t) {
            return "Feature" === t.type || "FeatureCollection" === t.type ? t : {
                type: "Feature",
                properties: {},
                geometry: t
            }
        }
        var Vn = {
            toGeoJSON: function(t) {
                return qn(this, {
                    type: "Point",
                    coordinates: Wn(this.getLatLng(), t)
                })
            }
        };
        function Gn(t, e) {
            return new Fn(t,e)
        }
        An.include(Vn),
        Bn.include(Vn),
        On.include(Vn),
        Nn.include({
            toGeoJSON: function(t) {
                var e = !mn(this._latlngs)
                  , n = Hn(this._latlngs, e ? 1 : 0, !1, t);
                return qn(this, {
                    type: (e ? "Multi" : "") + "LineString",
                    coordinates: n
                })
            }
        }),
        Dn.include({
            toGeoJSON: function(t) {
                var e = !mn(this._latlngs)
                  , n = e && !mn(this._latlngs[0])
                  , i = Hn(this._latlngs, n ? 2 : e ? 1 : 0, !0, t);
                return e || (i = [i]),
                qn(this, {
                    type: (n ? "Multi" : "") + "Polygon",
                    coordinates: i
                })
            }
        }),
        Sn.include({
            toMultiPoint: function(t) {
                var e = [];
                return this.eachLayer(function(n) {
                    e.push(n.toGeoJSON(t).geometry.coordinates)
                }),
                qn(this, {
                    type: "MultiPoint",
                    coordinates: e
                })
            },
            toGeoJSON: function(t) {
                var e = this.feature && this.feature.geometry && this.feature.geometry.type;
                if ("MultiPoint" === e)
                    return this.toMultiPoint(t);
                var n = "GeometryCollection" === e
                  , i = [];
                return this.eachLayer(function(e) {
                    if (e.toGeoJSON) {
                        var o = e.toGeoJSON(t);
                        if (n)
                            i.push(o.geometry);
                        else {
                            var r = Un(o);
                            "FeatureCollection" === r.type ? i.push.apply(i, r.features) : i.push(r)
                        }
                    }
                }),
                n ? qn(this, {
                    geometries: i,
                    type: "GeometryCollection"
                }) : {
                    type: "FeatureCollection",
                    features: i
                }
            }
        });
        var $n = Gn
          , Yn = Pn.extend({
            options: {
                opacity: 1,
                alt: "",
                interactive: !1,
                crossOrigin: !1,
                errorOverlayUrl: "",
                zIndex: 1,
                className: ""
            },
            initialize: function(t, e, n) {
                this._url = t,
                this._bounds = F(e),
                d(this, n)
            },
            onAdd: function() {
                this._image || (this._initImage(),
                this.options.opacity < 1 && this._updateOpacity()),
                this.options.interactive && (ce(this._image, "leaflet-interactive"),
                this.addInteractiveTarget(this._image)),
                this.getPane().appendChild(this._image),
                this._reset()
            },
            onRemove: function() {
                se(this._image),
                this.options.interactive && this.removeInteractiveTarget(this._image)
            },
            setOpacity: function(t) {
                return this.options.opacity = t,
                this._image && this._updateOpacity(),
                this
            },
            setStyle: function(t) {
                return t.opacity && this.setOpacity(t.opacity),
                this
            },
            bringToFront: function() {
                return this._map && le(this._image),
                this
            },
            bringToBack: function() {
                return this._map && he(this._image),
                this
            },
            setUrl: function(t) {
                return this._url = t,
                this._image && (this._image.src = t),
                this
            },
            setBounds: function(t) {
                return this._bounds = F(t),
                this._map && this._reset(),
                this
            },
            getEvents: function() {
                var t = {
                    zoom: this._reset,
                    viewreset: this._reset
                };
                return this._zoomAnimated && (t.zoomanim = this._animateZoom),
                t
            },
            setZIndex: function(t) {
                return this.options.zIndex = t,
                this._updateZIndex(),
                this
            },
            getBounds: function() {
                return this._bounds
            },
            getElement: function() {
                return this._image
            },
            _initImage: function() {
                var t = "IMG" === this._url.tagName
                  , e = this._image = t ? this._url : re("img");
                ce(e, "leaflet-image-layer"),
                this._zoomAnimated && ce(e, "leaflet-zoom-animated"),
                this.options.className && ce(e, this.options.className),
                e.onselectstart = h,
                e.onmousemove = h,
                e.onload = o(this.fire, this, "load"),
                e.onerror = o(this._overlayOnError, this, "error"),
                (this.options.crossOrigin || "" === this.options.crossOrigin) && (e.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin),
                this.options.zIndex && this._updateZIndex(),
                t ? this._url = e.src : (e.src = this._url,
                e.alt = this.options.alt)
            },
            _animateZoom: function(t) {
                var e = this._map.getZoomScale(t.zoom)
                  , n = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
                ve(this._image, n, e)
            },
            _reset: function() {
                var t = this._image
                  , e = new B(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast()))
                  , n = e.getSize();
                _e(t, e.min),
                t.style.width = n.x + "px",
                t.style.height = n.y + "px"
            },
            _updateOpacity: function() {
                me(this._image, this.options.opacity)
            },
            _updateZIndex: function() {
                this._image && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._image.style.zIndex = this.options.zIndex)
            },
            _overlayOnError: function() {
                this.fire("error");
                var t = this.options.errorOverlayUrl;
                t && this._url !== t && (this._url = t,
                this._image.src = t)
            }
        })
          , Xn = Yn.extend({
            options: {
                autoplay: !0,
                loop: !0
            },
            _initImage: function() {
                var t = "VIDEO" === this._url.tagName
                  , e = this._image = t ? this._url : re("video");
                if (ce(e, "leaflet-image-layer"),
                this._zoomAnimated && ce(e, "leaflet-zoom-animated"),
                e.onselectstart = h,
                e.onmousemove = h,
                e.onloadeddata = o(this.fire, this, "load"),
                t) {
                    for (var n = e.getElementsByTagName("source"), i = [], r = 0; r < n.length; r++)
                        i.push(n[r].src);
                    this._url = n.length > 0 ? i : [e.src]
                } else {
                    v(this._url) || (this._url = [this._url]),
                    e.autoplay = !!this.options.autoplay,
                    e.loop = !!this.options.loop;
                    for (var s = 0; s < this._url.length; s++) {
                        var a = re("source");
                        a.src = this._url[s],
                        e.appendChild(a)
                    }
                }
            }
        })
          , Jn = Pn.extend({
            options: {
                offset: [0, 7],
                className: "",
                pane: "popupPane"
            },
            initialize: function(t, e) {
                d(this, t),
                this._source = e
            },
            onAdd: function(t) {
                this._zoomAnimated = t._zoomAnimated,
                this._container || this._initLayout(),
                t._fadeAnimated && me(this._container, 0),
                clearTimeout(this._removeTimeout),
                this.getPane().appendChild(this._container),
                this.update(),
                t._fadeAnimated && me(this._container, 1),
                this.bringToFront()
            },
            onRemove: function(t) {
                t._fadeAnimated ? (me(this._container, 0),
                this._removeTimeout = setTimeout(o(se, void 0, this._container), 200)) : se(this._container)
            },
            getLatLng: function() {
                return this._latlng
            },
            setLatLng: function(t) {
                return this._latlng = R(t),
                this._map && (this._updatePosition(),
                this._adjustPan()),
                this
            },
            getContent: function() {
                return this._content
            },
            setContent: function(t) {
                return this._content = t,
                this.update(),
                this
            },
            getElement: function() {
                return this._container
            },
            update: function() {
                this._map && (this._container.style.visibility = "hidden",
                this._updateContent(),
                this._updateLayout(),
                this._updatePosition(),
                this._container.style.visibility = "",
                this._adjustPan())
            },
            getEvents: function() {
                var t = {
                    zoom: this._updatePosition,
                    viewreset: this._updatePosition
                };
                return this._zoomAnimated && (t.zoomanim = this._animateZoom),
                t
            },
            isOpen: function() {
                return !!this._map && this._map.hasLayer(this)
            },
            bringToFront: function() {
                return this._map && le(this._container),
                this
            },
            bringToBack: function() {
                return this._map && he(this._container),
                this
            },
            _updateContent: function() {
                if (this._content) {
                    var t = this._contentNode
                      , e = "function" == typeof this._content ? this._content(this._source || this) : this._content;
                    if ("string" == typeof e)
                        t.innerHTML = e;
                    else {
                        for (; t.hasChildNodes(); )
                            t.removeChild(t.firstChild);
                        t.appendChild(e)
                    }
                    this.fire("contentupdate")
                }
            },
            _updatePosition: function() {
                if (this._map) {
                    var t = this._map.latLngToLayerPoint(this._latlng)
                      , e = O(this.options.offset)
                      , n = this._getAnchor();
                    this._zoomAnimated ? _e(this._container, t.add(n)) : e = e.add(t).add(n);
                    var i = this._containerBottom = -e.y
                      , o = this._containerLeft = -Math.round(this._containerWidth / 2) + e.x;
                    this._container.style.bottom = i + "px",
                    this._container.style.left = o + "px"
                }
            },
            _getAnchor: function() {
                return [0, 0]
            }
        })
          , Kn = Jn.extend({
            options: {
                maxWidth: 300,
                minWidth: 50,
                maxHeight: null,
                autoPan: !0,
                autoPanPaddingTopLeft: null,
                autoPanPaddingBottomRight: null,
                autoPanPadding: [5, 5],
                keepInView: !1,
                closeButton: !0,
                autoClose: !0,
                closeOnEscapeKey: !0,
                className: ""
            },
            openOn: function(t) {
                return t.openPopup(this),
                this
            },
            onAdd: function(t) {
                Jn.prototype.onAdd.call(this, t),
                t.fire("popupopen", {
                    popup: this
                }),
                this._source && (this._source.fire("popupopen", {
                    popup: this
                }, !0),
                this._source instanceof In || this._source.on("preclick", Ie))
            },
            onRemove: function(t) {
                Jn.prototype.onRemove.call(this, t),
                t.fire("popupclose", {
                    popup: this
                }),
                this._source && (this._source.fire("popupclose", {
                    popup: this
                }, !0),
                this._source instanceof In || this._source.off("preclick", Ie))
            },
            getEvents: function() {
                var t = Jn.prototype.getEvents.call(this);
                return (void 0 !== this.options.closeOnClick ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this._close),
                this.options.keepInView && (t.moveend = this._adjustPan),
                t
            },
            _close: function() {
                this._map && this._map.closePopup(this)
            },
            _initLayout: function() {
                var t = "leaflet-popup"
                  , e = this._container = re("div", t + " " + (this.options.className || "") + " leaflet-zoom-animated")
                  , n = this._wrapper = re("div", t + "-content-wrapper", e);
                if (this._contentNode = re("div", t + "-content", n),
                Be(n),
                Oe(this._contentNode),
                Me(n, "contextmenu", Ie),
                this._tipContainer = re("div", t + "-tip-container", e),
                this._tip = re("div", t + "-tip", this._tipContainer),
                this.options.closeButton) {
                    var i = this._closeButton = re("a", t + "-close-button", e);
                    i.href = "#close",
                    i.innerHTML = "&#215;",
                    Me(i, "click", this._onCloseButtonClick, this)
                }
            },
            _updateLayout: function() {
                var t = this._contentNode
                  , e = t.style;
                e.width = "",
                e.whiteSpace = "nowrap";
                var n = t.offsetWidth;
                n = Math.min(n, this.options.maxWidth),
                n = Math.max(n, this.options.minWidth),
                e.width = n + 1 + "px",
                e.whiteSpace = "",
                e.height = "";
                var i = t.offsetHeight
                  , o = this.options.maxHeight;
                o && i > o ? (e.height = o + "px",
                ce(t, "leaflet-popup-scrolled")) : fe(t, "leaflet-popup-scrolled"),
                this._containerWidth = this._container.offsetWidth
            },
            _animateZoom: function(t) {
                var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center)
                  , n = this._getAnchor();
                _e(this._container, e.add(n))
            },
            _adjustPan: function() {
                if (!(!this.options.autoPan || this._map._panAnim && this._map._panAnim._inProgress)) {
                    var t = this._map
                      , e = parseInt(oe(this._container, "marginBottom"), 10) || 0
                      , n = this._container.offsetHeight + e
                      , i = this._containerWidth
                      , o = new A(this._containerLeft,-n - this._containerBottom);
                    o._add(ye(this._container));
                    var r = t.layerPointToContainerPoint(o)
                      , s = O(this.options.autoPanPadding)
                      , a = O(this.options.autoPanPaddingTopLeft || s)
                      , l = O(this.options.autoPanPaddingBottomRight || s)
                      , h = t.getSize()
                      , u = 0
                      , c = 0;
                    r.x + i + l.x > h.x && (u = r.x + i - h.x + l.x),
                    r.x - u - a.x < 0 && (u = r.x - a.x),
                    r.y + n + l.y > h.y && (c = r.y + n - h.y + l.y),
                    r.y - c - a.y < 0 && (c = r.y - a.y),
                    (u || c) && t.fire("autopanstart").panBy([u, c])
                }
            },
            _onCloseButtonClick: function(t) {
                this._close(),
                De(t)
            },
            _getAnchor: function() {
                return O(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0])
            }
        });
        $e.mergeOptions({
            closePopupOnClick: !0
        }),
        $e.include({
            openPopup: function(t, e, n) {
                return t instanceof Kn || (t = new Kn(n).setContent(t)),
                e && t.setLatLng(e),
                this.hasLayer(t) ? this : (this._popup && this._popup.options.autoClose && this.closePopup(),
                this._popup = t,
                this.addLayer(t))
            },
            closePopup: function(t) {
                return t && t !== this._popup || (t = this._popup,
                this._popup = null),
                t && this.removeLayer(t),
                this
            }
        }),
        Pn.include({
            bindPopup: function(t, e) {
                return t instanceof Kn ? (d(t, e),
                this._popup = t,
                t._source = this) : (this._popup && !e || (this._popup = new Kn(e,this)),
                this._popup.setContent(t)),
                this._popupHandlersAdded || (this.on({
                    click: this._openPopup,
                    keypress: this._onKeyPress,
                    remove: this.closePopup,
                    move: this._movePopup
                }),
                this._popupHandlersAdded = !0),
                this
            },
            unbindPopup: function() {
                return this._popup && (this.off({
                    click: this._openPopup,
                    keypress: this._onKeyPress,
                    remove: this.closePopup,
                    move: this._movePopup
                }),
                this._popupHandlersAdded = !1,
                this._popup = null),
                this
            },
            openPopup: function(t, e) {
                if (t instanceof Pn || (e = t,
                t = this),
                t instanceof Mn)
                    for (var n in this._layers) {
                        t = this._layers[n];
                        break
                    }
                return e || (e = t.getCenter ? t.getCenter() : t.getLatLng()),
                this._popup && this._map && (this._popup._source = t,
                this._popup.update(),
                this._map.openPopup(this._popup, e)),
                this
            },
            closePopup: function() {
                return this._popup && this._popup._close(),
                this
            },
            togglePopup: function(t) {
                return this._popup && (this._popup._map ? this.closePopup() : this.openPopup(t)),
                this
            },
            isPopupOpen: function() {
                return !!this._popup && this._popup.isOpen()
            },
            setPopupContent: function(t) {
                return this._popup && this._popup.setContent(t),
                this
            },
            getPopup: function() {
                return this._popup
            },
            _openPopup: function(t) {
                var e = t.layer || t.target;
                this._popup && this._map && (De(t),
                e instanceof In ? this.openPopup(t.layer || t.target, t.latlng) : this._map.hasLayer(this._popup) && this._popup._source === e ? this.closePopup() : this.openPopup(e, t.latlng))
            },
            _movePopup: function(t) {
                this._popup.setLatLng(t.latlng)
            },
            _onKeyPress: function(t) {
                13 === t.originalEvent.keyCode && this._openPopup(t)
            }
        });
        var Qn = Jn.extend({
            options: {
                pane: "tooltipPane",
                offset: [0, 0],
                direction: "auto",
                permanent: !1,
                sticky: !1,
                interactive: !1,
                opacity: .9
            },
            onAdd: function(t) {
                Jn.prototype.onAdd.call(this, t),
                this.setOpacity(this.options.opacity),
                t.fire("tooltipopen", {
                    tooltip: this
                }),
                this._source && this._source.fire("tooltipopen", {
                    tooltip: this
                }, !0)
            },
            onRemove: function(t) {
                Jn.prototype.onRemove.call(this, t),
                t.fire("tooltipclose", {
                    tooltip: this
                }),
                this._source && this._source.fire("tooltipclose", {
                    tooltip: this
                }, !0)
            },
            getEvents: function() {
                var t = Jn.prototype.getEvents.call(this);
                return wt && !this.options.permanent && (t.preclick = this._close),
                t
            },
            _close: function() {
                this._map && this._map.closeTooltip(this)
            },
            _initLayout: function() {
                var t = "leaflet-tooltip " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
                this._contentNode = this._container = re("div", t)
            },
            _updateLayout: function() {},
            _adjustPan: function() {},
            _setPosition: function(t) {
                var e = this._map
                  , n = this._container
                  , i = e.latLngToContainerPoint(e.getCenter())
                  , o = e.layerPointToContainerPoint(t)
                  , r = this.options.direction
                  , s = n.offsetWidth
                  , a = n.offsetHeight
                  , l = O(this.options.offset)
                  , h = this._getAnchor();
                "top" === r ? t = t.add(O(-s / 2 + l.x, -a + l.y + h.y, !0)) : "bottom" === r ? t = t.subtract(O(s / 2 - l.x, -l.y, !0)) : "center" === r ? t = t.subtract(O(s / 2 + l.x, a / 2 - h.y + l.y, !0)) : "right" === r || "auto" === r && o.x < i.x ? (r = "right",
                t = t.add(O(l.x + h.x, h.y - a / 2 + l.y, !0))) : (r = "left",
                t = t.subtract(O(s + h.x - l.x, a / 2 - h.y - l.y, !0))),
                fe(n, "leaflet-tooltip-right"),
                fe(n, "leaflet-tooltip-left"),
                fe(n, "leaflet-tooltip-top"),
                fe(n, "leaflet-tooltip-bottom"),
                ce(n, "leaflet-tooltip-" + r),
                _e(n, t)
            },
            _updatePosition: function() {
                var t = this._map.latLngToLayerPoint(this._latlng);
                this._setPosition(t)
            },
            setOpacity: function(t) {
                this.options.opacity = t,
                this._container && me(this._container, t)
            },
            _animateZoom: function(t) {
                var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
                this._setPosition(e)
            },
            _getAnchor: function() {
                return O(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0])
            }
        });
        $e.include({
            openTooltip: function(t, e, n) {
                return t instanceof Qn || (t = new Qn(n).setContent(t)),
                e && t.setLatLng(e),
                this.hasLayer(t) ? this : this.addLayer(t)
            },
            closeTooltip: function(t) {
                return t && this.removeLayer(t),
                this
            }
        }),
        Pn.include({
            bindTooltip: function(t, e) {
                return t instanceof Qn ? (d(t, e),
                this._tooltip = t,
                t._source = this) : (this._tooltip && !e || (this._tooltip = new Qn(e,this)),
                this._tooltip.setContent(t)),
                this._initTooltipInteractions(),
                this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(),
                this
            },
            unbindTooltip: function() {
                return this._tooltip && (this._initTooltipInteractions(!0),
                this.closeTooltip(),
                this._tooltip = null),
                this
            },
            _initTooltipInteractions: function(t) {
                if (t || !this._tooltipHandlersAdded) {
                    var e = t ? "off" : "on"
                      , n = {
                        remove: this.closeTooltip,
                        move: this._moveTooltip
                    };
                    this._tooltip.options.permanent ? n.add = this._openTooltip : (n.mouseover = this._openTooltip,
                    n.mouseout = this.closeTooltip,
                    this._tooltip.options.sticky && (n.mousemove = this._moveTooltip),
                    wt && (n.click = this._openTooltip)),
                    this[e](n),
                    this._tooltipHandlersAdded = !t
                }
            },
            openTooltip: function(t, e) {
                if (t instanceof Pn || (e = t,
                t = this),
                t instanceof Mn)
                    for (var n in this._layers) {
                        t = this._layers[n];
                        break
                    }
                return e || (e = t.getCenter ? t.getCenter() : t.getLatLng()),
                this._tooltip && this._map && (this._tooltip._source = t,
                this._tooltip.update(),
                this._map.openTooltip(this._tooltip, e),
                this._tooltip.options.interactive && this._tooltip._container && (ce(this._tooltip._container, "leaflet-clickable"),
                this.addInteractiveTarget(this._tooltip._container))),
                this
            },
            closeTooltip: function() {
                return this._tooltip && (this._tooltip._close(),
                this._tooltip.options.interactive && this._tooltip._container && (fe(this._tooltip._container, "leaflet-clickable"),
                this.removeInteractiveTarget(this._tooltip._container))),
                this
            },
            toggleTooltip: function(t) {
                return this._tooltip && (this._tooltip._map ? this.closeTooltip() : this.openTooltip(t)),
                this
            },
            isTooltipOpen: function() {
                return this._tooltip.isOpen()
            },
            setTooltipContent: function(t) {
                return this._tooltip && this._tooltip.setContent(t),
                this
            },
            getTooltip: function() {
                return this._tooltip
            },
            _openTooltip: function(t) {
                var e = t.layer || t.target;
                this._tooltip && this._map && this.openTooltip(e, this._tooltip.options.sticky ? t.latlng : void 0)
            },
            _moveTooltip: function(t) {
                var e, n, i = t.latlng;
                this._tooltip.options.sticky && t.originalEvent && (e = this._map.mouseEventToContainerPoint(t.originalEvent),
                n = this._map.containerPointToLayerPoint(e),
                i = this._map.layerPointToLatLng(n)),
                this._tooltip.setLatLng(i)
            }
        });
        var ti = Cn.extend({
            options: {
                iconSize: [12, 12],
                html: !1,
                bgPos: null,
                className: "leaflet-div-icon"
            },
            createIcon: function(t) {
                var e = t && "DIV" === t.tagName ? t : document.createElement("div")
                  , n = this.options;
                if (e.innerHTML = !1 !== n.html ? n.html : "",
                n.bgPos) {
                    var i = O(n.bgPos);
                    e.style.backgroundPosition = -i.x + "px " + -i.y + "px"
                }
                return this._setIconStyles(e, "icon"),
                e
            },
            createShadow: function() {
                return null
            }
        });
        Cn.Default = zn;
        var ei = Pn.extend({
            options: {
                tileSize: 256,
                opacity: 1,
                updateWhenIdle: vt,
                updateWhenZooming: !0,
                updateInterval: 200,
                zIndex: 1,
                bounds: null,
                minZoom: 0,
                maxZoom: void 0,
                maxNativeZoom: void 0,
                minNativeZoom: void 0,
                noWrap: !1,
                pane: "tilePane",
                className: "",
                keepBuffer: 2
            },
            initialize: function(t) {
                d(this, t)
            },
            onAdd: function() {
                this._initContainer(),
                this._levels = {},
                this._tiles = {},
                this._resetView(),
                this._update()
            },
            beforeAdd: function(t) {
                t._addZoomLimit(this)
            },
            onRemove: function(t) {
                this._removeAllTiles(),
                se(this._container),
                t._removeZoomLimit(this),
                this._container = null,
                this._tileZoom = void 0
            },
            bringToFront: function() {
                return this._map && (le(this._container),
                this._setAutoZIndex(Math.max)),
                this
            },
            bringToBack: function() {
                return this._map && (he(this._container),
                this._setAutoZIndex(Math.min)),
                this
            },
            getContainer: function() {
                return this._container
            },
            setOpacity: function(t) {
                return this.options.opacity = t,
                this._updateOpacity(),
                this
            },
            setZIndex: function(t) {
                return this.options.zIndex = t,
                this._updateZIndex(),
                this
            },
            isLoading: function() {
                return this._loading
            },
            redraw: function() {
                return this._map && (this._removeAllTiles(),
                this._update()),
                this
            },
            getEvents: function() {
                var t = {
                    viewprereset: this._invalidateAll,
                    viewreset: this._resetView,
                    zoom: this._resetView,
                    moveend: this._onMoveEnd
                };
                return this.options.updateWhenIdle || (this._onMove || (this._onMove = a(this._onMoveEnd, this.options.updateInterval, this)),
                t.move = this._onMove),
                this._zoomAnimated && (t.zoomanim = this._animateZoom),
                t
            },
            createTile: function() {
                return document.createElement("div")
            },
            getTileSize: function() {
                var t = this.options.tileSize;
                return t instanceof A ? t : new A(t,t)
            },
            _updateZIndex: function() {
                this._container && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._container.style.zIndex = this.options.zIndex)
            },
            _setAutoZIndex: function(t) {
                for (var e, n = this.getPane().children, i = -t(-1 / 0, 1 / 0), o = 0, r = n.length; o < r; o++)
                    e = n[o].style.zIndex,
                    n[o] !== this._container && e && (i = t(i, +e));
                isFinite(i) && (this.options.zIndex = i + t(-1, 1),
                this._updateZIndex())
            },
            _updateOpacity: function() {
                if (this._map && !Q) {
                    me(this._container, this.options.opacity);
                    var t = +new Date
                      , e = !1
                      , n = !1;
                    for (var i in this._tiles) {
                        var o = this._tiles[i];
                        if (o.current && o.loaded) {
                            var r = Math.min(1, (t - o.loaded) / 200);
                            me(o.el, r),
                            r < 1 ? e = !0 : (o.active ? n = !0 : this._onOpaqueTile(o),
                            o.active = !0)
                        }
                    }
                    n && !this._noPrune && this._pruneTiles(),
                    e && (S(this._fadeFrame),
                    this._fadeFrame = P(this._updateOpacity, this))
                }
            },
            _onOpaqueTile: h,
            _initContainer: function() {
                this._container || (this._container = re("div", "leaflet-layer " + (this.options.className || "")),
                this._updateZIndex(),
                this.options.opacity < 1 && this._updateOpacity(),
                this.getPane().appendChild(this._container))
            },
            _updateLevels: function() {
                var t = this._tileZoom
                  , e = this.options.maxZoom;
                if (void 0 !== t) {
                    for (var n in this._levels)
                        this._levels[n].el.children.length || n === t ? (this._levels[n].el.style.zIndex = e - Math.abs(t - n),
                        this._onUpdateLevel(n)) : (se(this._levels[n].el),
                        this._removeTilesAtZoom(n),
                        this._onRemoveLevel(n),
                        delete this._levels[n]);
                    var i = this._levels[t]
                      , o = this._map;
                    return i || ((i = this._levels[t] = {}).el = re("div", "leaflet-tile-container leaflet-zoom-animated", this._container),
                    i.el.style.zIndex = e,
                    i.origin = o.project(o.unproject(o.getPixelOrigin()), t).round(),
                    i.zoom = t,
                    this._setZoomTransform(i, o.getCenter(), o.getZoom()),
                    i.el.offsetWidth,
                    this._onCreateLevel(i)),
                    this._level = i,
                    i
                }
            },
            _onUpdateLevel: h,
            _onRemoveLevel: h,
            _onCreateLevel: h,
            _pruneTiles: function() {
                if (this._map) {
                    var t, e, n = this._map.getZoom();
                    if (n > this.options.maxZoom || n < this.options.minZoom)
                        this._removeAllTiles();
                    else {
                        for (t in this._tiles)
                            (e = this._tiles[t]).retain = e.current;
                        for (t in this._tiles)
                            if ((e = this._tiles[t]).current && !e.active) {
                                var i = e.coords;
                                this._retainParent(i.x, i.y, i.z, i.z - 5) || this._retainChildren(i.x, i.y, i.z, i.z + 2)
                            }
                        for (t in this._tiles)
                            this._tiles[t].retain || this._removeTile(t)
                    }
                }
            },
            _removeTilesAtZoom: function(t) {
                for (var e in this._tiles)
                    this._tiles[e].coords.z === t && this._removeTile(e)
            },
            _removeAllTiles: function() {
                for (var t in this._tiles)
                    this._removeTile(t)
            },
            _invalidateAll: function() {
                for (var t in this._levels)
                    se(this._levels[t].el),
                    this._onRemoveLevel(t),
                    delete this._levels[t];
                this._removeAllTiles(),
                this._tileZoom = void 0
            },
            _retainParent: function(t, e, n, i) {
                var o = Math.floor(t / 2)
                  , r = Math.floor(e / 2)
                  , s = n - 1
                  , a = new A(+o,+r);
                a.z = +s;
                var l = this._tileCoordsToKey(a)
                  , h = this._tiles[l];
                return h && h.active ? (h.retain = !0,
                !0) : (h && h.loaded && (h.retain = !0),
                s > i && this._retainParent(o, r, s, i))
            },
            _retainChildren: function(t, e, n, i) {
                for (var o = 2 * t; o < 2 * t + 2; o++)
                    for (var r = 2 * e; r < 2 * e + 2; r++) {
                        var s = new A(o,r);
                        s.z = n + 1;
                        var a = this._tileCoordsToKey(s)
                          , l = this._tiles[a];
                        l && l.active ? l.retain = !0 : (l && l.loaded && (l.retain = !0),
                        n + 1 < i && this._retainChildren(o, r, n + 1, i))
                    }
            },
            _resetView: function(t) {
                var e = t && (t.pinch || t.flyTo);
                this._setView(this._map.getCenter(), this._map.getZoom(), e, e)
            },
            _animateZoom: function(t) {
                this._setView(t.center, t.zoom, !0, t.noUpdate)
            },
            _clampZoom: function(t) {
                var e = this.options;
                return void 0 !== e.minNativeZoom && t < e.minNativeZoom ? e.minNativeZoom : void 0 !== e.maxNativeZoom && e.maxNativeZoom < t ? e.maxNativeZoom : t
            },
            _setView: function(t, e, n, i) {
                var o = this._clampZoom(Math.round(e));
                (void 0 !== this.options.maxZoom && o > this.options.maxZoom || void 0 !== this.options.minZoom && o < this.options.minZoom) && (o = void 0);
                var r = this.options.updateWhenZooming && o !== this._tileZoom;
                i && !r || (this._tileZoom = o,
                this._abortLoading && this._abortLoading(),
                this._updateLevels(),
                this._resetGrid(),
                void 0 !== o && this._update(t),
                n || this._pruneTiles(),
                this._noPrune = !!n),
                this._setZoomTransforms(t, e)
            },
            _setZoomTransforms: function(t, e) {
                for (var n in this._levels)
                    this._setZoomTransform(this._levels[n], t, e)
            },
            _setZoomTransform: function(t, e, n) {
                var i = this._map.getZoomScale(n, t.zoom)
                  , o = t.origin.multiplyBy(i).subtract(this._map._getNewPixelOrigin(e, n)).round();
                gt ? ve(t.el, o, i) : _e(t.el, o)
            },
            _resetGrid: function() {
                var t = this._map
                  , e = t.options.crs
                  , n = this._tileSize = this.getTileSize()
                  , i = this._tileZoom
                  , o = this._map.getPixelWorldBounds(this._tileZoom);
                o && (this._globalTileRange = this._pxBoundsToTileRange(o)),
                this._wrapX = e.wrapLng && !this.options.noWrap && [Math.floor(t.project([0, e.wrapLng[0]], i).x / n.x), Math.ceil(t.project([0, e.wrapLng[1]], i).x / n.y)],
                this._wrapY = e.wrapLat && !this.options.noWrap && [Math.floor(t.project([e.wrapLat[0], 0], i).y / n.x), Math.ceil(t.project([e.wrapLat[1], 0], i).y / n.y)]
            },
            _onMoveEnd: function() {
                this._map && !this._map._animatingZoom && this._update()
            },
            _getTiledPixelBounds: function(t) {
                var e = this._map
                  , n = e._animatingZoom ? Math.max(e._animateToZoom, e.getZoom()) : e.getZoom()
                  , i = e.getZoomScale(n, this._tileZoom)
                  , o = e.project(t, this._tileZoom).floor()
                  , r = e.getSize().divideBy(2 * i);
                return new B(o.subtract(r),o.add(r))
            },
            _update: function(t) {
                var e = this._map;
                if (e) {
                    var n = this._clampZoom(e.getZoom());
                    if (void 0 === t && (t = e.getCenter()),
                    void 0 !== this._tileZoom) {
                        var i = this._getTiledPixelBounds(t)
                          , o = this._pxBoundsToTileRange(i)
                          , r = o.getCenter()
                          , s = []
                          , a = this.options.keepBuffer
                          , l = new B(o.getBottomLeft().subtract([a, -a]),o.getTopRight().add([a, -a]));
                        if (!(isFinite(o.min.x) && isFinite(o.min.y) && isFinite(o.max.x) && isFinite(o.max.y)))
                            throw new Error("Attempted to load an infinite number of tiles");
                        for (var h in this._tiles) {
                            var u = this._tiles[h].coords;
                            u.z === this._tileZoom && l.contains(new A(u.x,u.y)) || (this._tiles[h].current = !1)
                        }
                        if (Math.abs(n - this._tileZoom) > 1)
                            this._setView(t, n);
                        else {
                            for (var c = o.min.y; c <= o.max.y; c++)
                                for (var f = o.min.x; f <= o.max.x; f++) {
                                    var d = new A(f,c);
                                    if (d.z = this._tileZoom,
                                    this._isValidTile(d)) {
                                        var p = this._tiles[this._tileCoordsToKey(d)];
                                        p ? p.current = !0 : s.push(d)
                                    }
                                }
                            if (s.sort(function(t, e) {
                                return t.distanceTo(r) - e.distanceTo(r)
                            }),
                            0 !== s.length) {
                                this._loading || (this._loading = !0,
                                this.fire("loading"));
                                var m = document.createDocumentFragment();
                                for (f = 0; f < s.length; f++)
                                    this._addTile(s[f], m);
                                this._level.el.appendChild(m)
                            }
                        }
                    }
                }
            },
            _isValidTile: function(t) {
                var e = this._map.options.crs;
                if (!e.infinite) {
                    var n = this._globalTileRange;
                    if (!e.wrapLng && (t.x < n.min.x || t.x > n.max.x) || !e.wrapLat && (t.y < n.min.y || t.y > n.max.y))
                        return !1
                }
                if (!this.options.bounds)
                    return !0;
                var i = this._tileCoordsToBounds(t);
                return F(this.options.bounds).overlaps(i)
            },
            _keyToBounds: function(t) {
                return this._tileCoordsToBounds(this._keyToTileCoords(t))
            },
            _tileCoordsToNwSe: function(t) {
                var e = this._map
                  , n = this.getTileSize()
                  , i = t.scaleBy(n)
                  , o = i.add(n)
                  , r = e.unproject(i, t.z)
                  , s = e.unproject(o, t.z);
                return [r, s]
            },
            _tileCoordsToBounds: function(t) {
                var e = this._tileCoordsToNwSe(t)
                  , n = new D(e[0],e[1]);
                return this.options.noWrap || (n = this._map.wrapLatLngBounds(n)),
                n
            },
            _tileCoordsToKey: function(t) {
                return t.x + ":" + t.y + ":" + t.z
            },
            _keyToTileCoords: function(t) {
                var e = t.split(":")
                  , n = new A(+e[0],+e[1]);
                return n.z = +e[2],
                n
            },
            _removeTile: function(t) {
                var e = this._tiles[t];
                e && (se(e.el),
                delete this._tiles[t],
                this.fire("tileunload", {
                    tile: e.el,
                    coords: this._keyToTileCoords(t)
                }))
            },
            _initTile: function(t) {
                ce(t, "leaflet-tile");
                var e = this.getTileSize();
                t.style.width = e.x + "px",
                t.style.height = e.y + "px",
                t.onselectstart = h,
                t.onmousemove = h,
                Q && this.options.opacity < 1 && me(t, this.options.opacity),
                nt && !it && (t.style.WebkitBackfaceVisibility = "hidden")
            },
            _addTile: function(t, e) {
                var n = this._getTilePos(t)
                  , i = this._tileCoordsToKey(t)
                  , r = this.createTile(this._wrapCoords(t), o(this._tileReady, this, t));
                this._initTile(r),
                this.createTile.length < 2 && P(o(this._tileReady, this, t, null, r)),
                _e(r, n),
                this._tiles[i] = {
                    el: r,
                    coords: t,
                    current: !0
                },
                e.appendChild(r),
                this.fire("tileloadstart", {
                    tile: r,
                    coords: t
                })
            },
            _tileReady: function(t, e, n) {
                e && this.fire("tileerror", {
                    error: e,
                    tile: n,
                    coords: t
                });
                var i = this._tileCoordsToKey(t);
                (n = this._tiles[i]) && (n.loaded = +new Date,
                this._map._fadeAnimated ? (me(n.el, 0),
                S(this._fadeFrame),
                this._fadeFrame = P(this._updateOpacity, this)) : (n.active = !0,
                this._pruneTiles()),
                e || (ce(n.el, "leaflet-tile-loaded"),
                this.fire("tileload", {
                    tile: n.el,
                    coords: t
                })),
                this._noTilesToLoad() && (this._loading = !1,
                this.fire("load"),
                Q || !this._map._fadeAnimated ? P(this._pruneTiles, this) : setTimeout(o(this._pruneTiles, this), 250)))
            },
            _getTilePos: function(t) {
                return t.scaleBy(this.getTileSize()).subtract(this._level.origin)
            },
            _wrapCoords: function(t) {
                var e = new A(this._wrapX ? l(t.x, this._wrapX) : t.x,this._wrapY ? l(t.y, this._wrapY) : t.y);
                return e.z = t.z,
                e
            },
            _pxBoundsToTileRange: function(t) {
                var e = this.getTileSize();
                return new B(t.min.unscaleBy(e).floor(),t.max.unscaleBy(e).ceil().subtract([1, 1]))
            },
            _noTilesToLoad: function() {
                for (var t in this._tiles)
                    if (!this._tiles[t].loaded)
                        return !1;
                return !0
            }
        })
          , ni = ei.extend({
            options: {
                minZoom: 0,
                maxZoom: 18,
                subdomains: "abc",
                errorTileUrl: "",
                zoomOffset: 0,
                tms: !1,
                zoomReverse: !1,
                detectRetina: !1,
                crossOrigin: !1
            },
            initialize: function(t, e) {
                this._url = t,
                (e = d(this, e)).detectRetina && Lt && e.maxZoom > 0 && (e.tileSize = Math.floor(e.tileSize / 2),
                e.zoomReverse ? (e.zoomOffset--,
                e.minZoom++) : (e.zoomOffset++,
                e.maxZoom--),
                e.minZoom = Math.max(0, e.minZoom)),
                "string" == typeof e.subdomains && (e.subdomains = e.subdomains.split("")),
                nt || this.on("tileunload", this._onTileRemove)
            },
            setUrl: function(t, e) {
                return this._url = t,
                e || this.redraw(),
                this
            },
            createTile: function(t, e) {
                var n = document.createElement("img");
                return Me(n, "load", o(this._tileOnLoad, this, e, n)),
                Me(n, "error", o(this._tileOnError, this, e, n)),
                (this.options.crossOrigin || "" === this.options.crossOrigin) && (n.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin),
                n.alt = "",
                n.setAttribute("role", "presentation"),
                n.src = this.getTileUrl(t),
                n
            },
            getTileUrl: function(t) {
                var e = {
                    r: Lt ? "@2x" : "",
                    s: this._getSubdomain(t),
                    x: t.x,
                    y: t.y,
                    z: this._getZoomForUrl()
                };
                if (this._map && !this._map.options.crs.infinite) {
                    var i = this._globalTileRange.max.y - t.y;
                    this.options.tms && (e.y = i),
                    e["-y"] = i
                }
                return g(this._url, n(e, this.options))
            },
            _tileOnLoad: function(t, e) {
                Q ? setTimeout(o(t, this, null, e), 0) : t(null, e)
            },
            _tileOnError: function(t, e, n) {
                var i = this.options.errorTileUrl;
                i && e.getAttribute("src") !== i && (e.src = i),
                t(n, e)
            },
            _onTileRemove: function(t) {
                t.tile.onload = null
            },
            _getZoomForUrl: function() {
                var t = this._tileZoom
                  , e = this.options.maxZoom
                  , n = this.options.zoomReverse
                  , i = this.options.zoomOffset;
                return n && (t = e - t),
                t + i
            },
            _getSubdomain: function(t) {
                var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
                return this.options.subdomains[e]
            },
            _abortLoading: function() {
                var t, e;
                for (t in this._tiles)
                    this._tiles[t].coords.z !== this._tileZoom && ((e = this._tiles[t].el).onload = h,
                    e.onerror = h,
                    e.complete || (e.src = y,
                    se(e),
                    delete this._tiles[t]))
            },
            _removeTile: function(t) {
                var e = this._tiles[t];
                if (e)
                    return rt || e.el.setAttribute("src", y),
                    ei.prototype._removeTile.call(this, t)
            },
            _tileReady: function(t, e, n) {
                if (this._map && (!n || n.getAttribute("src") !== y))
                    return ei.prototype._tileReady.call(this, t, e, n)
            }
        });
        function ii(t, e) {
            return new ni(t,e)
        }
        var oi = ni.extend({
            defaultWmsParams: {
                service: "WMS",
                request: "GetMap",
                layers: "",
                styles: "",
                format: "image/jpeg",
                transparent: !1,
                version: "1.1.1"
            },
            options: {
                crs: null,
                uppercase: !1
            },
            initialize: function(t, e) {
                this._url = t;
                var i = n({}, this.defaultWmsParams);
                for (var o in e)
                    o in this.options || (i[o] = e[o]);
                var r = (e = d(this, e)).detectRetina && Lt ? 2 : 1
                  , s = this.getTileSize();
                i.width = s.x * r,
                i.height = s.y * r,
                this.wmsParams = i
            },
            onAdd: function(t) {
                this._crs = this.options.crs || t.options.crs,
                this._wmsVersion = parseFloat(this.wmsParams.version);
                var e = this._wmsVersion >= 1.3 ? "crs" : "srs";
                this.wmsParams[e] = this._crs.code,
                ni.prototype.onAdd.call(this, t)
            },
            getTileUrl: function(t) {
                var e = this._tileCoordsToNwSe(t)
                  , n = this._crs
                  , i = N(n.project(e[0]), n.project(e[1]))
                  , o = i.min
                  , r = i.max
                  , s = (this._wmsVersion >= 1.3 && this._crs === kn ? [o.y, o.x, r.y, r.x] : [o.x, o.y, r.x, r.y]).join(",")
                  , a = ni.prototype.getTileUrl.call(this, t);
                return a + p(this.wmsParams, a, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + s
            },
            setParams: function(t, e) {
                return n(this.wmsParams, t),
                e || this.redraw(),
                this
            }
        });
        ni.WMS = oi,
        ii.wms = function(t, e) {
            return new oi(t,e)
        }
        ;
        var ri = Pn.extend({
            options: {
                padding: .1,
                tolerance: 0
            },
            initialize: function(t) {
                d(this, t),
                s(this),
                this._layers = this._layers || {}
            },
            onAdd: function() {
                this._container || (this._initContainer(),
                this._zoomAnimated && ce(this._container, "leaflet-zoom-animated")),
                this.getPane().appendChild(this._container),
                this._update(),
                this.on("update", this._updatePaths, this)
            },
            onRemove: function() {
                this.off("update", this._updatePaths, this),
                this._destroyContainer()
            },
            getEvents: function() {
                var t = {
                    viewreset: this._reset,
                    zoom: this._onZoom,
                    moveend: this._update,
                    zoomend: this._onZoomEnd
                };
                return this._zoomAnimated && (t.zoomanim = this._onAnimZoom),
                t
            },
            _onAnimZoom: function(t) {
                this._updateTransform(t.center, t.zoom)
            },
            _onZoom: function() {
                this._updateTransform(this._map.getCenter(), this._map.getZoom())
            },
            _updateTransform: function(t, e) {
                var n = this._map.getZoomScale(e, this._zoom)
                  , i = ye(this._container)
                  , o = this._map.getSize().multiplyBy(.5 + this.options.padding)
                  , r = this._map.project(this._center, e)
                  , s = this._map.project(t, e)
                  , a = s.subtract(r)
                  , l = o.multiplyBy(-n).add(i).add(o).subtract(a);
                gt ? ve(this._container, l, n) : _e(this._container, l)
            },
            _reset: function() {
                for (var t in this._update(),
                this._updateTransform(this._center, this._zoom),
                this._layers)
                    this._layers[t]._reset()
            },
            _onZoomEnd: function() {
                for (var t in this._layers)
                    this._layers[t]._project()
            },
            _updatePaths: function() {
                for (var t in this._layers)
                    this._layers[t]._update()
            },
            _update: function() {
                var t = this.options.padding
                  , e = this._map.getSize()
                  , n = this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();
                this._bounds = new B(n,n.add(e.multiplyBy(1 + 2 * t)).round()),
                this._center = this._map.getCenter(),
                this._zoom = this._map.getZoom()
            }
        })
          , si = ri.extend({
            getEvents: function() {
                var t = ri.prototype.getEvents.call(this);
                return t.viewprereset = this._onViewPreReset,
                t
            },
            _onViewPreReset: function() {
                this._postponeUpdatePaths = !0
            },
            onAdd: function() {
                ri.prototype.onAdd.call(this),
                this._draw()
            },
            _initContainer: function() {
                var t = this._container = document.createElement("canvas");
                Me(t, "mousemove", a(this._onMouseMove, 32, this), this),
                Me(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this),
                Me(t, "mouseout", this._handleMouseOut, this),
                this._ctx = t.getContext("2d")
            },
            _destroyContainer: function() {
                S(this._redrawRequest),
                delete this._ctx,
                se(this._container),
                ze(this._container),
                delete this._container
            },
            _updatePaths: function() {
                if (!this._postponeUpdatePaths) {
                    for (var t in this._redrawBounds = null,
                    this._layers)
                        this._layers[t]._update();
                    this._redraw()
                }
            },
            _update: function() {
                if (!this._map._animatingZoom || !this._bounds) {
                    this._drawnLayers = {},
                    ri.prototype._update.call(this);
                    var t = this._bounds
                      , e = this._container
                      , n = t.getSize()
                      , i = Lt ? 2 : 1;
                    _e(e, t.min),
                    e.width = i * n.x,
                    e.height = i * n.y,
                    e.style.width = n.x + "px",
                    e.style.height = n.y + "px",
                    Lt && this._ctx.scale(2, 2),
                    this._ctx.translate(-t.min.x, -t.min.y),
                    this.fire("update")
                }
            },
            _reset: function() {
                ri.prototype._reset.call(this),
                this._postponeUpdatePaths && (this._postponeUpdatePaths = !1,
                this._updatePaths())
            },
            _initPath: function(t) {
                this._updateDashArray(t),
                this._layers[s(t)] = t;
                var e = t._order = {
                    layer: t,
                    prev: this._drawLast,
                    next: null
                };
                this._drawLast && (this._drawLast.next = e),
                this._drawLast = e,
                this._drawFirst = this._drawFirst || this._drawLast
            },
            _addPath: function(t) {
                this._requestRedraw(t)
            },
            _removePath: function(t) {
                var e = t._order
                  , n = e.next
                  , i = e.prev;
                n ? n.prev = i : this._drawLast = i,
                i ? i.next = n : this._drawFirst = n,
                delete this._drawnLayers[t._leaflet_id],
                delete t._order,
                delete this._layers[s(t)],
                this._requestRedraw(t)
            },
            _updatePath: function(t) {
                this._extendRedrawBounds(t),
                t._project(),
                t._update(),
                this._requestRedraw(t)
            },
            _updateStyle: function(t) {
                this._updateDashArray(t),
                this._requestRedraw(t)
            },
            _updateDashArray: function(t) {
                if ("string" == typeof t.options.dashArray) {
                    var e, n = t.options.dashArray.split(/[, ]+/), i = [];
                    for (e = 0; e < n.length; e++)
                        i.push(Number(n[e]));
                    t.options._dashArray = i
                } else
                    t.options._dashArray = t.options.dashArray
            },
            _requestRedraw: function(t) {
                this._map && (this._extendRedrawBounds(t),
                this._redrawRequest = this._redrawRequest || P(this._redraw, this))
            },
            _extendRedrawBounds: function(t) {
                if (t._pxBounds) {
                    var e = (t.options.weight || 0) + 1;
                    this._redrawBounds = this._redrawBounds || new B,
                    this._redrawBounds.extend(t._pxBounds.min.subtract([e, e])),
                    this._redrawBounds.extend(t._pxBounds.max.add([e, e]))
                }
            },
            _redraw: function() {
                this._redrawRequest = null,
                this._redrawBounds && (this._redrawBounds.min._floor(),
                this._redrawBounds.max._ceil()),
                this._clear(),
                this._draw(),
                this._redrawBounds = null
            },
            _clear: function() {
                var t = this._redrawBounds;
                if (t) {
                    var e = t.getSize();
                    this._ctx.clearRect(t.min.x, t.min.y, e.x, e.y)
                } else
                    this._ctx.clearRect(0, 0, this._container.width, this._container.height)
            },
            _draw: function() {
                var t, e = this._redrawBounds;
                if (this._ctx.save(),
                e) {
                    var n = e.getSize();
                    this._ctx.beginPath(),
                    this._ctx.rect(e.min.x, e.min.y, n.x, n.y),
                    this._ctx.clip()
                }
                this._drawing = !0;
                for (var i = this._drawFirst; i; i = i.next)
                    t = i.layer,
                    (!e || t._pxBounds && t._pxBounds.intersects(e)) && t._updatePath();
                this._drawing = !1,
                this._ctx.restore()
            },
            _updatePoly: function(t, e) {
                if (this._drawing) {
                    var n, i, o, r, s = t._parts, a = s.length, l = this._ctx;
                    if (a) {
                        for (this._drawnLayers[t._leaflet_id] = t,
                        l.beginPath(),
                        n = 0; n < a; n++) {
                            for (i = 0,
                            o = s[n].length; i < o; i++)
                                r = s[n][i],
                                l[i ? "lineTo" : "moveTo"](r.x, r.y);
                            e && l.closePath()
                        }
                        this._fillStroke(l, t)
                    }
                }
            },
            _updateCircle: function(t) {
                if (this._drawing && !t._empty()) {
                    var e = t._point
                      , n = this._ctx
                      , i = Math.max(Math.round(t._radius), 1)
                      , o = (Math.max(Math.round(t._radiusY), 1) || i) / i;
                    this._drawnLayers[t._leaflet_id] = t,
                    1 !== o && (n.save(),
                    n.scale(1, o)),
                    n.beginPath(),
                    n.arc(e.x, e.y / o, i, 0, 2 * Math.PI, !1),
                    1 !== o && n.restore(),
                    this._fillStroke(n, t)
                }
            },
            _fillStroke: function(t, e) {
                var n = e.options;
                n.fill && (t.globalAlpha = n.fillOpacity,
                t.fillStyle = n.fillColor || n.color,
                t.fill(n.fillRule || "evenodd")),
                n.stroke && 0 !== n.weight && (t.setLineDash && t.setLineDash(e.options && e.options._dashArray || []),
                t.globalAlpha = n.opacity,
                t.lineWidth = n.weight,
                t.strokeStyle = n.color,
                t.lineCap = n.lineCap,
                t.lineJoin = n.lineJoin,
                t.stroke())
            },
            _onClick: function(t) {
                for (var e, n, i = this._map.mouseEventToLayerPoint(t), o = this._drawFirst; o; o = o.next)
                    (e = o.layer).options.interactive && e._containsPoint(i) && !this._map._draggableMoved(e) && (n = e);
                n && (He(t),
                this._fireEvent([n], t))
            },
            _onMouseMove: function(t) {
                if (this._map && !this._map.dragging.moving() && !this._map._animatingZoom) {
                    var e = this._map.mouseEventToLayerPoint(t);
                    this._handleMouseHover(t, e)
                }
            },
            _handleMouseOut: function(t) {
                var e = this._hoveredLayer;
                e && (fe(this._container, "leaflet-interactive"),
                this._fireEvent([e], t, "mouseout"),
                this._hoveredLayer = null)
            },
            _handleMouseHover: function(t, e) {
                for (var n, i, o = this._drawFirst; o; o = o.next)
                    (n = o.layer).options.interactive && n._containsPoint(e) && (i = n);
                i !== this._hoveredLayer && (this._handleMouseOut(t),
                i && (ce(this._container, "leaflet-interactive"),
                this._fireEvent([i], t, "mouseover"),
                this._hoveredLayer = i)),
                this._hoveredLayer && this._fireEvent([this._hoveredLayer], t)
            },
            _fireEvent: function(t, e, n) {
                this._map._fireDOMEvent(e, n || e.type, t)
            },
            _bringToFront: function(t) {
                var e = t._order
                  , n = e.next
                  , i = e.prev;
                n && (n.prev = i,
                i ? i.next = n : n && (this._drawFirst = n),
                e.prev = this._drawLast,
                this._drawLast.next = e,
                e.next = null,
                this._drawLast = e,
                this._requestRedraw(t))
            },
            _bringToBack: function(t) {
                var e = t._order
                  , n = e.next
                  , i = e.prev;
                i && (i.next = n,
                n ? n.prev = i : i && (this._drawLast = i),
                e.prev = null,
                e.next = this._drawFirst,
                this._drawFirst.prev = e,
                this._drawFirst = e,
                this._requestRedraw(t))
            }
        });
        function ai(t) {
            return Pt ? new si(t) : null
        }
        var li = function() {
            try {
                return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
                function(t) {
                    return document.createElement("<lvml:" + t + ' class="lvml">')
                }
            } catch (t) {
                return function(t) {
                    return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')
                }
            }
        }()
          , hi = {
            _initContainer: function() {
                this._container = re("div", "leaflet-vml-container")
            },
            _update: function() {
                this._map._animatingZoom || (ri.prototype._update.call(this),
                this.fire("update"))
            },
            _initPath: function(t) {
                var e = t._container = li("shape");
                ce(e, "leaflet-vml-shape " + (this.options.className || "")),
                e.coordsize = "1 1",
                t._path = li("path"),
                e.appendChild(t._path),
                this._updateStyle(t),
                this._layers[s(t)] = t
            },
            _addPath: function(t) {
                var e = t._container;
                this._container.appendChild(e),
                t.options.interactive && t.addInteractiveTarget(e)
            },
            _removePath: function(t) {
                var e = t._container;
                se(e),
                t.removeInteractiveTarget(e),
                delete this._layers[s(t)]
            },
            _updateStyle: function(t) {
                var e = t._stroke
                  , n = t._fill
                  , i = t.options
                  , o = t._container;
                o.stroked = !!i.stroke,
                o.filled = !!i.fill,
                i.stroke ? (e || (e = t._stroke = li("stroke")),
                o.appendChild(e),
                e.weight = i.weight + "px",
                e.color = i.color,
                e.opacity = i.opacity,
                i.dashArray ? e.dashStyle = v(i.dashArray) ? i.dashArray.join(" ") : i.dashArray.replace(/( *, *)/g, " ") : e.dashStyle = "",
                e.endcap = i.lineCap.replace("butt", "flat"),
                e.joinstyle = i.lineJoin) : e && (o.removeChild(e),
                t._stroke = null),
                i.fill ? (n || (n = t._fill = li("fill")),
                o.appendChild(n),
                n.color = i.fillColor || i.color,
                n.opacity = i.fillOpacity) : n && (o.removeChild(n),
                t._fill = null)
            },
            _updateCircle: function(t) {
                var e = t._point.round()
                  , n = Math.round(t._radius)
                  , i = Math.round(t._radiusY || n);
                this._setPath(t, t._empty() ? "M0 0" : "AL " + e.x + "," + e.y + " " + n + "," + i + " 0,23592600")
            },
            _setPath: function(t, e) {
                t._path.v = e
            },
            _bringToFront: function(t) {
                le(t._container)
            },
            _bringToBack: function(t) {
                he(t._container)
            }
        }
          , ui = Mt ? li : Y
          , ci = ri.extend({
            getEvents: function() {
                var t = ri.prototype.getEvents.call(this);
                return t.zoomstart = this._onZoomStart,
                t
            },
            _initContainer: function() {
                this._container = ui("svg"),
                this._container.setAttribute("pointer-events", "none"),
                this._rootGroup = ui("g"),
                this._container.appendChild(this._rootGroup)
            },
            _destroyContainer: function() {
                se(this._container),
                ze(this._container),
                delete this._container,
                delete this._rootGroup,
                delete this._svgSize
            },
            _onZoomStart: function() {
                this._update()
            },
            _update: function() {
                if (!this._map._animatingZoom || !this._bounds) {
                    ri.prototype._update.call(this);
                    var t = this._bounds
                      , e = t.getSize()
                      , n = this._container;
                    this._svgSize && this._svgSize.equals(e) || (this._svgSize = e,
                    n.setAttribute("width", e.x),
                    n.setAttribute("height", e.y)),
                    _e(n, t.min),
                    n.setAttribute("viewBox", [t.min.x, t.min.y, e.x, e.y].join(" ")),
                    this.fire("update")
                }
            },
            _initPath: function(t) {
                var e = t._path = ui("path");
                t.options.className && ce(e, t.options.className),
                t.options.interactive && ce(e, "leaflet-interactive"),
                this._updateStyle(t),
                this._layers[s(t)] = t
            },
            _addPath: function(t) {
                this._rootGroup || this._initContainer(),
                this._rootGroup.appendChild(t._path),
                t.addInteractiveTarget(t._path)
            },
            _removePath: function(t) {
                se(t._path),
                t.removeInteractiveTarget(t._path),
                delete this._layers[s(t)]
            },
            _updatePath: function(t) {
                t._project(),
                t._update()
            },
            _updateStyle: function(t) {
                var e = t._path
                  , n = t.options;
                e && (n.stroke ? (e.setAttribute("stroke", n.color),
                e.setAttribute("stroke-opacity", n.opacity),
                e.setAttribute("stroke-width", n.weight),
                e.setAttribute("stroke-linecap", n.lineCap),
                e.setAttribute("stroke-linejoin", n.lineJoin),
                n.dashArray ? e.setAttribute("stroke-dasharray", n.dashArray) : e.removeAttribute("stroke-dasharray"),
                n.dashOffset ? e.setAttribute("stroke-dashoffset", n.dashOffset) : e.removeAttribute("stroke-dashoffset")) : e.setAttribute("stroke", "none"),
                n.fill ? (e.setAttribute("fill", n.fillColor || n.color),
                e.setAttribute("fill-opacity", n.fillOpacity),
                e.setAttribute("fill-rule", n.fillRule || "evenodd")) : e.setAttribute("fill", "none"))
            },
            _updatePoly: function(t, e) {
                this._setPath(t, X(t._parts, e))
            },
            _updateCircle: function(t) {
                var e = t._point
                  , n = Math.max(Math.round(t._radius), 1)
                  , i = Math.max(Math.round(t._radiusY), 1) || n
                  , o = "a" + n + "," + i + " 0 1,0 "
                  , r = t._empty() ? "M0 0" : "M" + (e.x - n) + "," + e.y + o + 2 * n + ",0 " + o + 2 * -n + ",0 ";
                this._setPath(t, r)
            },
            _setPath: function(t, e) {
                t._path.setAttribute("d", e)
            },
            _bringToFront: function(t) {
                le(t._path)
            },
            _bringToBack: function(t) {
                he(t._path)
            }
        });
        function fi(t) {
            return St || Mt ? new ci(t) : null
        }
        Mt && ci.include(hi),
        $e.include({
            getRenderer: function(t) {
                var e = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer;
                return e || (e = this._renderer = this._createRenderer()),
                this.hasLayer(e) || this.addLayer(e),
                e
            },
            _getPaneRenderer: function(t) {
                if ("overlayPane" === t || void 0 === t)
                    return !1;
                var e = this._paneRenderers[t];
                return void 0 === e && (e = this._createRenderer({
                    pane: t
                }),
                this._paneRenderers[t] = e),
                e
            },
            _createRenderer: function(t) {
                return this.options.preferCanvas && ai(t) || fi(t)
            }
        });
        var di = Dn.extend({
            initialize: function(t, e) {
                Dn.prototype.initialize.call(this, this._boundsToLatLngs(t), e)
            },
            setBounds: function(t) {
                return this.setLatLngs(this._boundsToLatLngs(t))
            },
            _boundsToLatLngs: function(t) {
                return [(t = F(t)).getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()]
            }
        });
        ci.create = ui,
        ci.pointsToPath = X,
        Fn.geometryToLayer = Zn,
        Fn.coordsToLatLng = Rn,
        Fn.coordsToLatLngs = jn,
        Fn.latLngToCoords = Wn,
        Fn.latLngsToCoords = Hn,
        Fn.getFeature = qn,
        Fn.asFeature = Un,
        $e.mergeOptions({
            boxZoom: !0
        });
        var pi = en.extend({
            initialize: function(t) {
                this._map = t,
                this._container = t._container,
                this._pane = t._panes.overlayPane,
                this._resetStateTimeout = 0,
                t.on("unload", this._destroy, this)
            },
            addHooks: function() {
                Me(this._container, "mousedown", this._onMouseDown, this)
            },
            removeHooks: function() {
                ze(this._container, "mousedown", this._onMouseDown, this)
            },
            moved: function() {
                return this._moved
            },
            _destroy: function() {
                se(this._pane),
                delete this._pane
            },
            _resetState: function() {
                this._resetStateTimeout = 0,
                this._moved = !1
            },
            _clearDeferredResetState: function() {
                0 !== this._resetStateTimeout && (clearTimeout(this._resetStateTimeout),
                this._resetStateTimeout = 0)
            },
            _onMouseDown: function(t) {
                if (!t.shiftKey || 1 !== t.which && 1 !== t.button)
                    return !1;
                this._clearDeferredResetState(),
                this._resetState(),
                Yt(),
                be(),
                this._startPoint = this._map.mouseEventToContainerPoint(t),
                Me(document, {
                    contextmenu: De,
                    mousemove: this._onMouseMove,
                    mouseup: this._onMouseUp,
                    keydown: this._onKeyDown
                }, this)
            },
            _onMouseMove: function(t) {
                this._moved || (this._moved = !0,
                this._box = re("div", "leaflet-zoom-box", this._container),
                ce(this._container, "leaflet-crosshair"),
                this._map.fire("boxzoomstart")),
                this._point = this._map.mouseEventToContainerPoint(t);
                var e = new B(this._point,this._startPoint)
                  , n = e.getSize();
                _e(this._box, e.min),
                this._box.style.width = n.x + "px",
                this._box.style.height = n.y + "px"
            },
            _finish: function() {
                this._moved && (se(this._box),
                fe(this._container, "leaflet-crosshair")),
                Xt(),
                we(),
                ze(document, {
                    contextmenu: De,
                    mousemove: this._onMouseMove,
                    mouseup: this._onMouseUp,
                    keydown: this._onKeyDown
                }, this)
            },
            _onMouseUp: function(t) {
                if ((1 === t.which || 1 === t.button) && (this._finish(),
                this._moved)) {
                    this._clearDeferredResetState(),
                    this._resetStateTimeout = setTimeout(o(this._resetState, this), 0);
                    var e = new D(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));
                    this._map.fitBounds(e).fire("boxzoomend", {
                        boxZoomBounds: e
                    })
                }
            },
            _onKeyDown: function(t) {
                27 === t.keyCode && this._finish()
            }
        });
        $e.addInitHook("addHandler", "boxZoom", pi),
        $e.mergeOptions({
            doubleClickZoom: !0
        });
        var mi = en.extend({
            addHooks: function() {
                this._map.on("dblclick", this._onDoubleClick, this)
            },
            removeHooks: function() {
                this._map.off("dblclick", this._onDoubleClick, this)
            },
            _onDoubleClick: function(t) {
                var e = this._map
                  , n = e.getZoom()
                  , i = e.options.zoomDelta
                  , o = t.originalEvent.shiftKey ? n - i : n + i;
                "center" === e.options.doubleClickZoom ? e.setZoom(o) : e.setZoomAround(t.containerPoint, o)
            }
        });
        $e.addInitHook("addHandler", "doubleClickZoom", mi),
        $e.mergeOptions({
            dragging: !0,
            inertia: !it,
            inertiaDeceleration: 3400,
            inertiaMaxSpeed: 1 / 0,
            easeLinearity: .2,
            worldCopyJump: !1,
            maxBoundsViscosity: 0
        });
        var gi = en.extend({
            addHooks: function() {
                if (!this._draggable) {
                    var t = this._map;
                    this._draggable = new ln(t._mapPane,t._container),
                    this._draggable.on({
                        dragstart: this._onDragStart,
                        drag: this._onDrag,
                        dragend: this._onDragEnd
                    }, this),
                    this._draggable.on("predrag", this._onPreDragLimit, this),
                    t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this),
                    t.on("zoomend", this._onZoomEnd, this),
                    t.whenReady(this._onZoomEnd, this))
                }
                ce(this._map._container, "leaflet-grab leaflet-touch-drag"),
                this._draggable.enable(),
                this._positions = [],
                this._times = []
            },
            removeHooks: function() {
                fe(this._map._container, "leaflet-grab"),
                fe(this._map._container, "leaflet-touch-drag"),
                this._draggable.disable()
            },
            moved: function() {
                return this._draggable && this._draggable._moved
            },
            moving: function() {
                return this._draggable && this._draggable._moving
            },
            _onDragStart: function() {
                var t = this._map;
                if (t._stop(),
                this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
                    var e = F(this._map.options.maxBounds);
                    this._offsetLimit = N(this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),
                    this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity))
                } else
                    this._offsetLimit = null;
                t.fire("movestart").fire("dragstart"),
                t.options.inertia && (this._positions = [],
                this._times = [])
            },
            _onDrag: function(t) {
                if (this._map.options.inertia) {
                    var e = this._lastTime = +new Date
                      , n = this._lastPos = this._draggable._absPos || this._draggable._newPos;
                    this._positions.push(n),
                    this._times.push(e),
                    this._prunePositions(e)
                }
                this._map.fire("move", t).fire("drag", t)
            },
            _prunePositions: function(t) {
                for (; this._positions.length > 1 && t - this._times[0] > 50; )
                    this._positions.shift(),
                    this._times.shift()
            },
            _onZoomEnd: function() {
                var t = this._map.getSize().divideBy(2)
                  , e = this._map.latLngToLayerPoint([0, 0]);
                this._initialWorldOffset = e.subtract(t).x,
                this._worldWidth = this._map.getPixelWorldBounds().getSize().x
            },
            _viscousLimit: function(t, e) {
                return t - (t - e) * this._viscosity
            },
            _onPreDragLimit: function() {
                if (this._viscosity && this._offsetLimit) {
                    var t = this._draggable._newPos.subtract(this._draggable._startPos)
                      , e = this._offsetLimit;
                    t.x < e.min.x && (t.x = this._viscousLimit(t.x, e.min.x)),
                    t.y < e.min.y && (t.y = this._viscousLimit(t.y, e.min.y)),
                    t.x > e.max.x && (t.x = this._viscousLimit(t.x, e.max.x)),
                    t.y > e.max.y && (t.y = this._viscousLimit(t.y, e.max.y)),
                    this._draggable._newPos = this._draggable._startPos.add(t)
                }
            },
            _onPreDragWrap: function() {
                var t = this._worldWidth
                  , e = Math.round(t / 2)
                  , n = this._initialWorldOffset
                  , i = this._draggable._newPos.x
                  , o = (i - e + n) % t + e - n
                  , r = (i + e + n) % t - e - n
                  , s = Math.abs(o + n) < Math.abs(r + n) ? o : r;
                this._draggable._absPos = this._draggable._newPos.clone(),
                this._draggable._newPos.x = s
            },
            _onDragEnd: function(t) {
                var e = this._map
                  , n = e.options
                  , i = !n.inertia || this._times.length < 2;
                if (e.fire("dragend", t),
                i)
                    e.fire("moveend");
                else {
                    this._prunePositions(+new Date);
                    var o = this._lastPos.subtract(this._positions[0])
                      , r = (this._lastTime - this._times[0]) / 1e3
                      , s = n.easeLinearity
                      , a = o.multiplyBy(s / r)
                      , l = a.distanceTo([0, 0])
                      , h = Math.min(n.inertiaMaxSpeed, l)
                      , u = a.multiplyBy(h / l)
                      , c = h / (n.inertiaDeceleration * s)
                      , f = u.multiplyBy(-c / 2).round();
                    f.x || f.y ? (f = e._limitOffset(f, e.options.maxBounds),
                    P(function() {
                        e.panBy(f, {
                            duration: c,
                            easeLinearity: s,
                            noMoveStart: !0,
                            animate: !0
                        })
                    })) : e.fire("moveend")
                }
            }
        });
        $e.addInitHook("addHandler", "dragging", gi),
        $e.mergeOptions({
            keyboard: !0,
            keyboardPanDelta: 80
        });
        var vi = en.extend({
            keyCodes: {
                left: [37],
                right: [39],
                down: [40],
                up: [38],
                zoomIn: [187, 107, 61, 171],
                zoomOut: [189, 109, 54, 173]
            },
            initialize: function(t) {
                this._map = t,
                this._setPanDelta(t.options.keyboardPanDelta),
                this._setZoomDelta(t.options.zoomDelta)
            },
            addHooks: function() {
                var t = this._map._container;
                t.tabIndex <= 0 && (t.tabIndex = "0"),
                Me(t, {
                    focus: this._onFocus,
                    blur: this._onBlur,
                    mousedown: this._onMouseDown
                }, this),
                this._map.on({
                    focus: this._addHooks,
                    blur: this._removeHooks
                }, this)
            },
            removeHooks: function() {
                this._removeHooks(),
                ze(this._map._container, {
                    focus: this._onFocus,
                    blur: this._onBlur,
                    mousedown: this._onMouseDown
                }, this),
                this._map.off({
                    focus: this._addHooks,
                    blur: this._removeHooks
                }, this)
            },
            _onMouseDown: function() {
                if (!this._focused) {
                    var t = document.body
                      , e = document.documentElement
                      , n = t.scrollTop || e.scrollTop
                      , i = t.scrollLeft || e.scrollLeft;
                    this._map._container.focus(),
                    window.scrollTo(i, n)
                }
            },
            _onFocus: function() {
                this._focused = !0,
                this._map.fire("focus")
            },
            _onBlur: function() {
                this._focused = !1,
                this._map.fire("blur")
            },
            _setPanDelta: function(t) {
                var e, n, i = this._panKeys = {}, o = this.keyCodes;
                for (e = 0,
                n = o.left.length; e < n; e++)
                    i[o.left[e]] = [-1 * t, 0];
                for (e = 0,
                n = o.right.length; e < n; e++)
                    i[o.right[e]] = [t, 0];
                for (e = 0,
                n = o.down.length; e < n; e++)
                    i[o.down[e]] = [0, t];
                for (e = 0,
                n = o.up.length; e < n; e++)
                    i[o.up[e]] = [0, -1 * t]
            },
            _setZoomDelta: function(t) {
                var e, n, i = this._zoomKeys = {}, o = this.keyCodes;
                for (e = 0,
                n = o.zoomIn.length; e < n; e++)
                    i[o.zoomIn[e]] = t;
                for (e = 0,
                n = o.zoomOut.length; e < n; e++)
                    i[o.zoomOut[e]] = -t
            },
            _addHooks: function() {
                Me(document, "keydown", this._onKeyDown, this)
            },
            _removeHooks: function() {
                ze(document, "keydown", this._onKeyDown, this)
            },
            _onKeyDown: function(t) {
                if (!(t.altKey || t.ctrlKey || t.metaKey)) {
                    var e, n = t.keyCode, i = this._map;
                    if (n in this._panKeys)
                        i._panAnim && i._panAnim._inProgress || (e = this._panKeys[n],
                        t.shiftKey && (e = O(e).multiplyBy(3)),
                        i.panBy(e),
                        i.options.maxBounds && i.panInsideBounds(i.options.maxBounds));
                    else if (n in this._zoomKeys)
                        i.setZoom(i.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[n]);
                    else {
                        if (27 !== n || !i._popup || !i._popup.options.closeOnEscapeKey)
                            return;
                        i.closePopup()
                    }
                    De(t)
                }
            }
        });
        $e.addInitHook("addHandler", "keyboard", vi),
        $e.mergeOptions({
            scrollWheelZoom: !0,
            wheelDebounceTime: 40,
            wheelPxPerZoomLevel: 60
        });
        var _i = en.extend({
            addHooks: function() {
                Me(this._map._container, "mousewheel", this._onWheelScroll, this),
                this._delta = 0
            },
            removeHooks: function() {
                ze(this._map._container, "mousewheel", this._onWheelScroll, this)
            },
            _onWheelScroll: function(t) {
                var e = Re(t)
                  , n = this._map.options.wheelDebounceTime;
                this._delta += e,
                this._lastMousePos = this._map.mouseEventToContainerPoint(t),
                this._startTime || (this._startTime = +new Date);
                var i = Math.max(n - (+new Date - this._startTime), 0);
                clearTimeout(this._timer),
                this._timer = setTimeout(o(this._performZoom, this), i),
                De(t)
            },
            _performZoom: function() {
                var t = this._map
                  , e = t.getZoom()
                  , n = this._map.options.zoomSnap || 0;
                t._stop();
                var i = this._delta / (4 * this._map.options.wheelPxPerZoomLevel)
                  , o = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(i)))) / Math.LN2
                  , r = n ? Math.ceil(o / n) * n : o
                  , s = t._limitZoom(e + (this._delta > 0 ? r : -r)) - e;
                this._delta = 0,
                this._startTime = null,
                s && ("center" === t.options.scrollWheelZoom ? t.setZoom(e + s) : t.setZoomAround(this._lastMousePos, e + s))
            }
        });
        $e.addInitHook("addHandler", "scrollWheelZoom", _i),
        $e.mergeOptions({
            tap: !0,
            tapTolerance: 15
        });
        var yi = en.extend({
            addHooks: function() {
                Me(this._map._container, "touchstart", this._onDown, this)
            },
            removeHooks: function() {
                ze(this._map._container, "touchstart", this._onDown, this)
            },
            _onDown: function(t) {
                if (t.touches) {
                    if (Ne(t),
                    this._fireClick = !0,
                    t.touches.length > 1)
                        return this._fireClick = !1,
                        void clearTimeout(this._holdTimeout);
                    var e = t.touches[0]
                      , n = e.target;
                    this._startPos = this._newPos = new A(e.clientX,e.clientY),
                    n.tagName && "a" === n.tagName.toLowerCase() && ce(n, "leaflet-active"),
                    this._holdTimeout = setTimeout(o(function() {
                        this._isTapValid() && (this._fireClick = !1,
                        this._onUp(),
                        this._simulateEvent("contextmenu", e))
                    }, this), 1e3),
                    this._simulateEvent("mousedown", e),
                    Me(document, {
                        touchmove: this._onMove,
                        touchend: this._onUp
                    }, this)
                }
            },
            _onUp: function(t) {
                if (clearTimeout(this._holdTimeout),
                ze(document, {
                    touchmove: this._onMove,
                    touchend: this._onUp
                }, this),
                this._fireClick && t && t.changedTouches) {
                    var e = t.changedTouches[0]
                      , n = e.target;
                    n && n.tagName && "a" === n.tagName.toLowerCase() && fe(n, "leaflet-active"),
                    this._simulateEvent("mouseup", e),
                    this._isTapValid() && this._simulateEvent("click", e)
                }
            },
            _isTapValid: function() {
                return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance
            },
            _onMove: function(t) {
                var e = t.touches[0];
                this._newPos = new A(e.clientX,e.clientY),
                this._simulateEvent("mousemove", e)
            },
            _simulateEvent: function(t, e) {
                var n = document.createEvent("MouseEvents");
                n._simulated = !0,
                e.target._simulatedClick = !0,
                n.initMouseEvent(t, !0, !0, window, 1, e.screenX, e.screenY, e.clientX, e.clientY, !1, !1, !1, !1, 0, null),
                e.target.dispatchEvent(n)
            }
        });
        wt && !bt && $e.addInitHook("addHandler", "tap", yi),
        $e.mergeOptions({
            touchZoom: wt && !it,
            bounceAtZoomLimits: !0
        });
        var xi = en.extend({
            addHooks: function() {
                ce(this._map._container, "leaflet-touch-zoom"),
                Me(this._map._container, "touchstart", this._onTouchStart, this)
            },
            removeHooks: function() {
                fe(this._map._container, "leaflet-touch-zoom"),
                ze(this._map._container, "touchstart", this._onTouchStart, this)
            },
            _onTouchStart: function(t) {
                var e = this._map;
                if (t.touches && 2 === t.touches.length && !e._animatingZoom && !this._zooming) {
                    var n = e.mouseEventToContainerPoint(t.touches[0])
                      , i = e.mouseEventToContainerPoint(t.touches[1]);
                    this._centerPoint = e.getSize()._divideBy(2),
                    this._startLatLng = e.containerPointToLatLng(this._centerPoint),
                    "center" !== e.options.touchZoom && (this._pinchStartLatLng = e.containerPointToLatLng(n.add(i)._divideBy(2))),
                    this._startDist = n.distanceTo(i),
                    this._startZoom = e.getZoom(),
                    this._moved = !1,
                    this._zooming = !0,
                    e._stop(),
                    Me(document, "touchmove", this._onTouchMove, this),
                    Me(document, "touchend", this._onTouchEnd, this),
                    Ne(t)
                }
            },
            _onTouchMove: function(t) {
                if (t.touches && 2 === t.touches.length && this._zooming) {
                    var e = this._map
                      , n = e.mouseEventToContainerPoint(t.touches[0])
                      , i = e.mouseEventToContainerPoint(t.touches[1])
                      , r = n.distanceTo(i) / this._startDist;
                    if (this._zoom = e.getScaleZoom(r, this._startZoom),
                    !e.options.bounceAtZoomLimits && (this._zoom < e.getMinZoom() && r < 1 || this._zoom > e.getMaxZoom() && r > 1) && (this._zoom = e._limitZoom(this._zoom)),
                    "center" === e.options.touchZoom) {
                        if (this._center = this._startLatLng,
                        1 === r)
                            return
                    } else {
                        var s = n._add(i)._divideBy(2)._subtract(this._centerPoint);
                        if (1 === r && 0 === s.x && 0 === s.y)
                            return;
                        this._center = e.unproject(e.project(this._pinchStartLatLng, this._zoom).subtract(s), this._zoom)
                    }
                    this._moved || (e._moveStart(!0, !1),
                    this._moved = !0),
                    S(this._animRequest);
                    var a = o(e._move, e, this._center, this._zoom, {
                        pinch: !0,
                        round: !1
                    });
                    this._animRequest = P(a, this, !0),
                    Ne(t)
                }
            },
            _onTouchEnd: function() {
                this._moved && this._zooming ? (this._zooming = !1,
                S(this._animRequest),
                ze(document, "touchmove", this._onTouchMove),
                ze(document, "touchend", this._onTouchEnd),
                this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom))) : this._zooming = !1
            }
        });
        $e.addInitHook("addHandler", "touchZoom", xi),
        $e.BoxZoom = pi,
        $e.DoubleClickZoom = mi,
        $e.Drag = gi,
        $e.Keyboard = vi,
        $e.ScrollWheelZoom = _i,
        $e.Tap = yi,
        $e.TouchZoom = xi,
        Object.freeze = e,
        t.version = "1.3.4",
        t.Control = Ye,
        t.control = Xe,
        t.Browser = zt,
        t.Evented = E,
        t.Mixin = on,
        t.Util = M,
        t.Class = C,
        t.Handler = en,
        t.extend = n,
        t.bind = o,
        t.stamp = s,
        t.setOptions = d,
        t.DomEvent = Ve,
        t.DomUtil = Se,
        t.PosAnimation = Ge,
        t.Draggable = ln,
        t.LineUtil = vn,
        t.PolyUtil = yn,
        t.Point = A,
        t.point = O,
        t.Bounds = B,
        t.bounds = N,
        t.Transformation = U,
        t.transformation = V,
        t.Projection = wn,
        t.LatLng = Z,
        t.latLng = R,
        t.LatLngBounds = D,
        t.latLngBounds = F,
        t.CRS = W,
        t.GeoJSON = Fn,
        t.geoJSON = Gn,
        t.geoJson = $n,
        t.Layer = Pn,
        t.LayerGroup = Sn,
        t.layerGroup = function(t, e) {
            return new Sn(t,e)
        }
        ,
        t.FeatureGroup = Mn,
        t.featureGroup = function(t) {
            return new Mn(t)
        }
        ,
        t.ImageOverlay = Yn,
        t.imageOverlay = function(t, e, n) {
            return new Yn(t,e,n)
        }
        ,
        t.VideoOverlay = Xn,
        t.videoOverlay = function(t, e, n) {
            return new Xn(t,e,n)
        }
        ,
        t.DivOverlay = Jn,
        t.Popup = Kn,
        t.popup = function(t, e) {
            return new Kn(t,e)
        }
        ,
        t.Tooltip = Qn,
        t.tooltip = function(t, e) {
            return new Qn(t,e)
        }
        ,
        t.Icon = Cn,
        t.icon = function(t) {
            return new Cn(t)
        }
        ,
        t.DivIcon = ti,
        t.divIcon = function(t) {
            return new ti(t)
        }
        ,
        t.Marker = An,
        t.marker = function(t, e) {
            return new An(t,e)
        }
        ,
        t.TileLayer = ni,
        t.tileLayer = ii,
        t.GridLayer = ei,
        t.gridLayer = function(t) {
            return new ei(t)
        }
        ,
        t.SVG = ci,
        t.svg = fi,
        t.Renderer = ri,
        t.Canvas = si,
        t.canvas = ai,
        t.Path = In,
        t.CircleMarker = On,
        t.circleMarker = function(t, e) {
            return new On(t,e)
        }
        ,
        t.Circle = Bn,
        t.circle = function(t, e, n) {
            return new Bn(t,e,n)
        }
        ,
        t.Polyline = Nn,
        t.polyline = function(t, e) {
            return new Nn(t,e)
        }
        ,
        t.Polygon = Dn,
        t.polygon = function(t, e) {
            return new Dn(t,e)
        }
        ,
        t.Rectangle = di,
        t.rectangle = function(t, e) {
            return new di(t,e)
        }
        ,
        t.Map = $e,
        t.map = function(t, e) {
            return new $e(t,e)
        }
        ;
        var bi = window.L;
        t.noConflict = function() {
            return window.L = bi,
            this
        }
        ,
        window.L = t
    }(e)
}
, function(t, e) {
    var n, i, o;
    n = L.Marker.prototype._initIcon,
    i = L.Marker.prototype._setPos,
    o = "msTransform" === L.DomUtil.TRANSFORM,
    L.Marker.addInitHook(function() {
        var t = this.options.icon && this.options.icon.options && this.options.icon.options.iconAnchor;
        t && (t = t[0] + "px " + t[1] + "px"),
        this.options.rotationOrigin = this.options.rotationOrigin || t || "center bottom",
        this.options.rotationAngle = this.options.rotationAngle || 0,
        this.on("drag", function(t) {
            t.target._applyRotation()
        })
    }),
    L.Marker.include({
        _initIcon: function() {
            n.call(this)
        },
        _setPos: function(t) {
            i.call(this, t),
            this._applyRotation()
        },
        _applyRotation: function() {
            this.options.rotationAngle && (this._icon.style[L.DomUtil.TRANSFORM + "Origin"] = this.options.rotationOrigin,
            o ? this._icon.style[L.DomUtil.TRANSFORM] = "rotate(" + this.options.rotationAngle + "deg)" : this._icon.style[L.DomUtil.TRANSFORM] += " rotateZ(" + this.options.rotationAngle + "deg)")
        },
        setRotationAngle: function(t) {
            return this.options.rotationAngle = t,
            this.update(),
            this
        },
        setRotationOrigin: function(t) {
            return this.options.rotationOrigin = t,
            this.update(),
            this
        }
    })
}
, function(t, e) {
    !function() {
        "use strict";
        !function(t) {
            if (!t.fetch) {
                var e = {
                    searchParams: "URLSearchParams"in t,
                    iterable: "Symbol"in t && "iterator"in Symbol,
                    blob: "FileReader"in t && "Blob"in t && function() {
                        try {
                            return new Blob,
                            !0
                        } catch (t) {
                            return !1
                        }
                    }(),
                    formData: "FormData"in t,
                    arrayBuffer: "ArrayBuffer"in t
                };
                if (e.arrayBuffer)
                    var n = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"]
                      , i = function(t) {
                        return t && DataView.prototype.isPrototypeOf(t)
                    }
                      , o = ArrayBuffer.isView || function(t) {
                        return t && n.indexOf(Object.prototype.toString.call(t)) > -1
                    }
                    ;
                u.prototype.append = function(t, e) {
                    t = a(t),
                    e = l(e);
                    var n = this.map[t];
                    this.map[t] = n ? n + "," + e : e
                }
                ,
                u.prototype.delete = function(t) {
                    delete this.map[a(t)]
                }
                ,
                u.prototype.get = function(t) {
                    return t = a(t),
                    this.has(t) ? this.map[t] : null
                }
                ,
                u.prototype.has = function(t) {
                    return this.map.hasOwnProperty(a(t))
                }
                ,
                u.prototype.set = function(t, e) {
                    this.map[a(t)] = l(e)
                }
                ,
                u.prototype.forEach = function(t, e) {
                    for (var n in this.map)
                        this.map.hasOwnProperty(n) && t.call(e, this.map[n], n, this)
                }
                ,
                u.prototype.keys = function() {
                    var t = [];
                    return this.forEach(function(e, n) {
                        t.push(n)
                    }),
                    h(t)
                }
                ,
                u.prototype.values = function() {
                    var t = [];
                    return this.forEach(function(e) {
                        t.push(e)
                    }),
                    h(t)
                }
                ,
                u.prototype.entries = function() {
                    var t = [];
                    return this.forEach(function(e, n) {
                        t.push([n, e])
                    }),
                    h(t)
                }
                ,
                e.iterable && (u.prototype[Symbol.iterator] = u.prototype.entries);
                var r = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
                g.prototype.clone = function() {
                    return new g(this,{
                        body: this._bodyInit
                    })
                }
                ,
                m.call(g.prototype),
                m.call(_.prototype),
                _.prototype.clone = function() {
                    return new _(this._bodyInit,{
                        status: this.status,
                        statusText: this.statusText,
                        headers: new u(this.headers),
                        url: this.url
                    })
                }
                ,
                _.error = function() {
                    var t = new _(null,{
                        status: 0,
                        statusText: ""
                    });
                    return t.type = "error",
                    t
                }
                ;
                var s = [301, 302, 303, 307, 308];
                _.redirect = function(t, e) {
                    if (-1 === s.indexOf(e))
                        throw new RangeError("Invalid status code");
                    return new _(null,{
                        status: e,
                        headers: {
                            location: t
                        }
                    })
                }
                ,
                t.Headers = u,
                t.Request = g,
                t.Response = _,
                t.fetch = function(t, n) {
                    return new Promise(function(i, o) {
                        var r = new g(t,n)
                          , s = new XMLHttpRequest;
                        s.onload = function() {
                            var t, e, n = {
                                status: s.status,
                                statusText: s.statusText,
                                headers: (t = s.getAllResponseHeaders() || "",
                                e = new u,
                                t.split(/\r?\n/).forEach(function(t) {
                                    var n = t.split(":")
                                      , i = n.shift().trim();
                                    if (i) {
                                        var o = n.join(":").trim();
                                        e.append(i, o)
                                    }
                                }),
                                e)
                            };
                            n.url = "responseURL"in s ? s.responseURL : n.headers.get("X-Request-URL");
                            var o = "response"in s ? s.response : s.responseText;
                            i(new _(o,n))
                        }
                        ,
                        s.onerror = function() {
                            o(new TypeError("Network request failed"))
                        }
                        ,
                        s.ontimeout = function() {
                            o(new TypeError("Network request failed"))
                        }
                        ,
                        s.open(r.method, r.url, !0),
                        "include" === r.credentials && (s.withCredentials = !0),
                        "responseType"in s && e.blob && (s.responseType = "blob"),
                        r.headers.forEach(function(t, e) {
                            s.setRequestHeader(e, t)
                        }),
                        s.send(void 0 === r._bodyInit ? null : r._bodyInit)
                    }
                    )
                }
                ,
                t.fetch.polyfill = !0
            }
            function a(t) {
                if ("string" != typeof t && (t = String(t)),
                /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))
                    throw new TypeError("Invalid character in header field name");
                return t.toLowerCase()
            }
            function l(t) {
                return "string" != typeof t && (t = String(t)),
                t
            }
            function h(t) {
                var n = {
                    next: function() {
                        var e = t.shift();
                        return {
                            done: void 0 === e,
                            value: e
                        }
                    }
                };
                return e.iterable && (n[Symbol.iterator] = function() {
                    return n
                }
                ),
                n
            }
            function u(t) {
                this.map = {},
                t instanceof u ? t.forEach(function(t, e) {
                    this.append(e, t)
                }, this) : Array.isArray(t) ? t.forEach(function(t) {
                    this.append(t[0], t[1])
                }, this) : t && Object.getOwnPropertyNames(t).forEach(function(e) {
                    this.append(e, t[e])
                }, this)
            }
            function c(t) {
                if (t.bodyUsed)
                    return Promise.reject(new TypeError("Already read"));
                t.bodyUsed = !0
            }
            function f(t) {
                return new Promise(function(e, n) {
                    t.onload = function() {
                        e(t.result)
                    }
                    ,
                    t.onerror = function() {
                        n(t.error)
                    }
                }
                )
            }
            function d(t) {
                var e = new FileReader
                  , n = f(e);
                return e.readAsArrayBuffer(t),
                n
            }
            function p(t) {
                if (t.slice)
                    return t.slice(0);
                var e = new Uint8Array(t.byteLength);
                return e.set(new Uint8Array(t)),
                e.buffer
            }
            function m() {
                return this.bodyUsed = !1,
                this._initBody = function(t) {
                    if (this._bodyInit = t,
                    t)
                        if ("string" == typeof t)
                            this._bodyText = t;
                        else if (e.blob && Blob.prototype.isPrototypeOf(t))
                            this._bodyBlob = t;
                        else if (e.formData && FormData.prototype.isPrototypeOf(t))
                            this._bodyFormData = t;
                        else if (e.searchParams && URLSearchParams.prototype.isPrototypeOf(t))
                            this._bodyText = t.toString();
                        else if (e.arrayBuffer && e.blob && i(t))
                            this._bodyArrayBuffer = p(t.buffer),
                            this._bodyInit = new Blob([this._bodyArrayBuffer]);
                        else {
                            if (!e.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(t) && !o(t))
                                throw new Error("unsupported BodyInit type");
                            this._bodyArrayBuffer = p(t)
                        }
                    else
                        this._bodyText = "";
                    this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : e.searchParams && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                }
                ,
                e.blob && (this.blob = function() {
                    var t = c(this);
                    if (t)
                        return t;
                    if (this._bodyBlob)
                        return Promise.resolve(this._bodyBlob);
                    if (this._bodyArrayBuffer)
                        return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                    if (this._bodyFormData)
                        throw new Error("could not read FormData body as blob");
                    return Promise.resolve(new Blob([this._bodyText]))
                }
                ,
                this.arrayBuffer = function() {
                    return this._bodyArrayBuffer ? c(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(d)
                }
                ),
                this.text = function() {
                    var t, e, n, i = c(this);
                    if (i)
                        return i;
                    if (this._bodyBlob)
                        return t = this._bodyBlob,
                        e = new FileReader,
                        n = f(e),
                        e.readAsText(t),
                        n;
                    if (this._bodyArrayBuffer)
                        return Promise.resolve(function(t) {
                            for (var e = new Uint8Array(t), n = new Array(e.length), i = 0; i < e.length; i++)
                                n[i] = String.fromCharCode(e[i]);
                            return n.join("")
                        }(this._bodyArrayBuffer));
                    if (this._bodyFormData)
                        throw new Error("could not read FormData body as text");
                    return Promise.resolve(this._bodyText)
                }
                ,
                e.formData && (this.formData = function() {
                    return this.text().then(v)
                }
                ),
                this.json = function() {
                    return this.text().then(JSON.parse)
                }
                ,
                this
            }
            function g(t, e) {
                var n, i, o = (e = e || {}).body;
                if (t instanceof g) {
                    if (t.bodyUsed)
                        throw new TypeError("Already read");
                    this.url = t.url,
                    this.credentials = t.credentials,
                    e.headers || (this.headers = new u(t.headers)),
                    this.method = t.method,
                    this.mode = t.mode,
                    o || null == t._bodyInit || (o = t._bodyInit,
                    t.bodyUsed = !0)
                } else
                    this.url = String(t);
                if (this.credentials = e.credentials || this.credentials || "omit",
                !e.headers && this.headers || (this.headers = new u(e.headers)),
                this.method = (n = e.method || this.method || "GET",
                i = n.toUpperCase(),
                r.indexOf(i) > -1 ? i : n),
                this.mode = e.mode || this.mode || null,
                this.referrer = null,
                ("GET" === this.method || "HEAD" === this.method) && o)
                    throw new TypeError("Body not allowed for GET or HEAD requests");
                this._initBody(o)
            }
            function v(t) {
                var e = new FormData;
                return t.trim().split("&").forEach(function(t) {
                    if (t) {
                        var n = t.split("=")
                          , i = n.shift().replace(/\+/g, " ")
                          , o = n.join("=").replace(/\+/g, " ");
                        e.append(decodeURIComponent(i), decodeURIComponent(o))
                    }
                }),
                e
            }
            function _(t, e) {
                e || (e = {}),
                this.type = "default",
                this.status = "status"in e ? e.status : 200,
                this.ok = this.status >= 200 && this.status < 300,
                this.statusText = "statusText"in e ? e.statusText : "OK",
                this.headers = new u(e.headers),
                this.url = e.url || "",
                this._initBody(t)
            }
        }("undefined" != typeof self ? self : void 0);
        var t = n
          , e = {
            read: function(t, e, n, i, o) {
                var r, s, a = 8 * o - i - 1, l = (1 << a) - 1, h = l >> 1, u = -7, c = n ? o - 1 : 0, f = n ? -1 : 1, d = t[e + c];
                for (c += f,
                r = d & (1 << -u) - 1,
                d >>= -u,
                u += a; u > 0; r = 256 * r + t[e + c],
                c += f,
                u -= 8)
                    ;
                for (s = r & (1 << -u) - 1,
                r >>= -u,
                u += i; u > 0; s = 256 * s + t[e + c],
                c += f,
                u -= 8)
                    ;
                if (0 === r)
                    r = 1 - h;
                else {
                    if (r === l)
                        return s ? NaN : 1 / 0 * (d ? -1 : 1);
                    s += Math.pow(2, i),
                    r -= h
                }
                return (d ? -1 : 1) * s * Math.pow(2, r - i)
            },
            write: function(t, e, n, i, o, r) {
                var s, a, l, h = 8 * r - o - 1, u = (1 << h) - 1, c = u >> 1, f = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0, d = i ? 0 : r - 1, p = i ? 1 : -1, m = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
                for (e = Math.abs(e),
                isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0,
                s = u) : (s = Math.floor(Math.log(e) / Math.LN2),
                e * (l = Math.pow(2, -s)) < 1 && (s--,
                l *= 2),
                (e += s + c >= 1 ? f / l : f * Math.pow(2, 1 - c)) * l >= 2 && (s++,
                l /= 2),
                s + c >= u ? (a = 0,
                s = u) : s + c >= 1 ? (a = (e * l - 1) * Math.pow(2, o),
                s += c) : (a = e * Math.pow(2, c - 1) * Math.pow(2, o),
                s = 0)); o >= 8; t[n + d] = 255 & a,
                d += p,
                a /= 256,
                o -= 8)
                    ;
                for (s = s << o | a,
                h += o; h > 0; t[n + d] = 255 & s,
                d += p,
                s /= 256,
                h -= 8)
                    ;
                t[n + d - p] |= 128 * m
            }
        };
        function n(t) {
            this.buf = ArrayBuffer.isView && ArrayBuffer.isView(t) ? t : new Uint8Array(t || 0),
            this.pos = 0,
            this.type = 0,
            this.length = this.buf.length
        }
        n.Varint = 0,
        n.Fixed64 = 1,
        n.Bytes = 2,
        n.Fixed32 = 5;
        function i(t) {
            return t.type === n.Bytes ? t.readVarint() + t.pos : t.pos + 1
        }
        function o(t, e, n) {
            return n ? 4294967296 * e + (t >>> 0) : 4294967296 * (e >>> 0) + (t >>> 0)
        }
        function r(t, e, n) {
            var i = e <= 16383 ? 1 : e <= 2097151 ? 2 : e <= 268435455 ? 3 : Math.ceil(Math.log(e) / (7 * Math.LN2));
            n.realloc(i);
            for (var o = n.pos - 1; o >= t; o--)
                n.buf[o + i] = n.buf[o]
        }
        function s(t, e) {
            for (var n = 0; n < t.length; n++)
                e.writeVarint(t[n])
        }
        function a(t, e) {
            for (var n = 0; n < t.length; n++)
                e.writeSVarint(t[n])
        }
        function l(t, e) {
            for (var n = 0; n < t.length; n++)
                e.writeFloat(t[n])
        }
        function h(t, e) {
            for (var n = 0; n < t.length; n++)
                e.writeDouble(t[n])
        }
        function u(t, e) {
            for (var n = 0; n < t.length; n++)
                e.writeBoolean(t[n])
        }
        function c(t, e) {
            for (var n = 0; n < t.length; n++)
                e.writeFixed32(t[n])
        }
        function f(t, e) {
            for (var n = 0; n < t.length; n++)
                e.writeSFixed32(t[n])
        }
        function d(t, e) {
            for (var n = 0; n < t.length; n++)
                e.writeFixed64(t[n])
        }
        function p(t, e) {
            for (var n = 0; n < t.length; n++)
                e.writeSFixed64(t[n])
        }
        function m(t, e) {
            return (t[e] | t[e + 1] << 8 | t[e + 2] << 16) + 16777216 * t[e + 3]
        }
        function g(t, e, n) {
            t[n] = e,
            t[n + 1] = e >>> 8,
            t[n + 2] = e >>> 16,
            t[n + 3] = e >>> 24
        }
        function v(t, e) {
            return (t[e] | t[e + 1] << 8 | t[e + 2] << 16) + (t[e + 3] << 24)
        }
        n.prototype = {
            destroy: function() {
                this.buf = null
            },
            readFields: function(t, e, n) {
                for (n = n || this.length; this.pos < n; ) {
                    var i = this.readVarint()
                      , o = i >> 3
                      , r = this.pos;
                    this.type = 7 & i,
                    t(o, e, this),
                    this.pos === r && this.skip(i)
                }
                return e
            },
            readMessage: function(t, e) {
                return this.readFields(t, e, this.readVarint() + this.pos)
            },
            readFixed32: function() {
                var t = m(this.buf, this.pos);
                return this.pos += 4,
                t
            },
            readSFixed32: function() {
                var t = v(this.buf, this.pos);
                return this.pos += 4,
                t
            },
            readFixed64: function() {
                var t = m(this.buf, this.pos) + 4294967296 * m(this.buf, this.pos + 4);
                return this.pos += 8,
                t
            },
            readSFixed64: function() {
                var t = m(this.buf, this.pos) + 4294967296 * v(this.buf, this.pos + 4);
                return this.pos += 8,
                t
            },
            readFloat: function() {
                var t = e.read(this.buf, this.pos, !0, 23, 4);
                return this.pos += 4,
                t
            },
            readDouble: function() {
                var t = e.read(this.buf, this.pos, !0, 52, 8);
                return this.pos += 8,
                t
            },
            readVarint: function(t) {
                var e, n, i = this.buf;
                return e = 127 & (n = i[this.pos++]),
                n < 128 ? e : (e |= (127 & (n = i[this.pos++])) << 7,
                n < 128 ? e : (e |= (127 & (n = i[this.pos++])) << 14,
                n < 128 ? e : (e |= (127 & (n = i[this.pos++])) << 21,
                n < 128 ? e : function(t, e, n) {
                    var i, r, s = n.buf;
                    if (r = s[n.pos++],
                    i = (112 & r) >> 4,
                    r < 128)
                        return o(t, i, e);
                    if (r = s[n.pos++],
                    i |= (127 & r) << 3,
                    r < 128)
                        return o(t, i, e);
                    if (r = s[n.pos++],
                    i |= (127 & r) << 10,
                    r < 128)
                        return o(t, i, e);
                    if (r = s[n.pos++],
                    i |= (127 & r) << 17,
                    r < 128)
                        return o(t, i, e);
                    if (r = s[n.pos++],
                    i |= (127 & r) << 24,
                    r < 128)
                        return o(t, i, e);
                    if (r = s[n.pos++],
                    i |= (1 & r) << 31,
                    r < 128)
                        return o(t, i, e);
                    throw new Error("Expected varint not more than 10 bytes")
                }(e |= (15 & (n = i[this.pos])) << 28, t, this))))
            },
            readVarint64: function() {
                return this.readVarint(!0)
            },
            readSVarint: function() {
                var t = this.readVarint();
                return t % 2 == 1 ? (t + 1) / -2 : t / 2
            },
            readBoolean: function() {
                return Boolean(this.readVarint())
            },
            readString: function() {
                var t = this.readVarint() + this.pos
                  , e = function(t, e, n) {
                    var i = ""
                      , o = e;
                    for (; o < n; ) {
                        var r, s, a, l = t[o], h = null, u = l > 239 ? 4 : l > 223 ? 3 : l > 191 ? 2 : 1;
                        if (o + u > n)
                            break;
                        1 === u ? l < 128 && (h = l) : 2 === u ? 128 == (192 & (r = t[o + 1])) && (h = (31 & l) << 6 | 63 & r) <= 127 && (h = null) : 3 === u ? (r = t[o + 1],
                        s = t[o + 2],
                        128 == (192 & r) && 128 == (192 & s) && ((h = (15 & l) << 12 | (63 & r) << 6 | 63 & s) <= 2047 || h >= 55296 && h <= 57343) && (h = null)) : 4 === u && (r = t[o + 1],
                        s = t[o + 2],
                        a = t[o + 3],
                        128 == (192 & r) && 128 == (192 & s) && 128 == (192 & a) && ((h = (15 & l) << 18 | (63 & r) << 12 | (63 & s) << 6 | 63 & a) <= 65535 || h >= 1114112) && (h = null)),
                        null === h ? (h = 65533,
                        u = 1) : h > 65535 && (h -= 65536,
                        i += String.fromCharCode(h >>> 10 & 1023 | 55296),
                        h = 56320 | 1023 & h),
                        i += String.fromCharCode(h),
                        o += u
                    }
                    return i
                }(this.buf, this.pos, t);
                return this.pos = t,
                e
            },
            readBytes: function() {
                var t = this.readVarint() + this.pos
                  , e = this.buf.subarray(this.pos, t);
                return this.pos = t,
                e
            },
            readPackedVarint: function(t, e) {
                var n = i(this);
                for (t = t || []; this.pos < n; )
                    t.push(this.readVarint(e));
                return t
            },
            readPackedSVarint: function(t) {
                var e = i(this);
                for (t = t || []; this.pos < e; )
                    t.push(this.readSVarint());
                return t
            },
            readPackedBoolean: function(t) {
                var e = i(this);
                for (t = t || []; this.pos < e; )
                    t.push(this.readBoolean());
                return t
            },
            readPackedFloat: function(t) {
                var e = i(this);
                for (t = t || []; this.pos < e; )
                    t.push(this.readFloat());
                return t
            },
            readPackedDouble: function(t) {
                var e = i(this);
                for (t = t || []; this.pos < e; )
                    t.push(this.readDouble());
                return t
            },
            readPackedFixed32: function(t) {
                var e = i(this);
                for (t = t || []; this.pos < e; )
                    t.push(this.readFixed32());
                return t
            },
            readPackedSFixed32: function(t) {
                var e = i(this);
                for (t = t || []; this.pos < e; )
                    t.push(this.readSFixed32());
                return t
            },
            readPackedFixed64: function(t) {
                var e = i(this);
                for (t = t || []; this.pos < e; )
                    t.push(this.readFixed64());
                return t
            },
            readPackedSFixed64: function(t) {
                var e = i(this);
                for (t = t || []; this.pos < e; )
                    t.push(this.readSFixed64());
                return t
            },
            skip: function(t) {
                var e = 7 & t;
                if (e === n.Varint)
                    for (; this.buf[this.pos++] > 127; )
                        ;
                else if (e === n.Bytes)
                    this.pos = this.readVarint() + this.pos;
                else if (e === n.Fixed32)
                    this.pos += 4;
                else {
                    if (e !== n.Fixed64)
                        throw new Error("Unimplemented type: " + e);
                    this.pos += 8
                }
            },
            writeTag: function(t, e) {
                this.writeVarint(t << 3 | e)
            },
            realloc: function(t) {
                for (var e = this.length || 16; e < this.pos + t; )
                    e *= 2;
                if (e !== this.length) {
                    var n = new Uint8Array(e);
                    n.set(this.buf),
                    this.buf = n,
                    this.length = e
                }
            },
            finish: function() {
                return this.length = this.pos,
                this.pos = 0,
                this.buf.subarray(0, this.length)
            },
            writeFixed32: function(t) {
                this.realloc(4),
                g(this.buf, t, this.pos),
                this.pos += 4
            },
            writeSFixed32: function(t) {
                this.realloc(4),
                g(this.buf, t, this.pos),
                this.pos += 4
            },
            writeFixed64: function(t) {
                this.realloc(8),
                g(this.buf, -1 & t, this.pos),
                g(this.buf, Math.floor(t * (1 / 4294967296)), this.pos + 4),
                this.pos += 8
            },
            writeSFixed64: function(t) {
                this.realloc(8),
                g(this.buf, -1 & t, this.pos),
                g(this.buf, Math.floor(t * (1 / 4294967296)), this.pos + 4),
                this.pos += 8
            },
            writeVarint: function(t) {
                (t = +t || 0) > 268435455 || t < 0 ? function(t, e) {
                    var n, i;
                    t >= 0 ? (n = t % 4294967296 | 0,
                    i = t / 4294967296 | 0) : (i = ~(-t / 4294967296),
                    4294967295 ^ (n = ~(-t % 4294967296)) ? n = n + 1 | 0 : (n = 0,
                    i = i + 1 | 0));
                    if (t >= 0x10000000000000000 || t < -0x10000000000000000)
                        throw new Error("Given varint doesn't fit into 10 bytes");
                    e.realloc(10),
                    function(t, e, n) {
                        n.buf[n.pos++] = 127 & t | 128,
                        t >>>= 7,
                        n.buf[n.pos++] = 127 & t | 128,
                        t >>>= 7,
                        n.buf[n.pos++] = 127 & t | 128,
                        t >>>= 7,
                        n.buf[n.pos++] = 127 & t | 128,
                        t >>>= 7,
                        n.buf[n.pos] = 127 & t
                    }(n, 0, e),
                    function(t, e) {
                        var n = (7 & t) << 4;
                        if (e.buf[e.pos++] |= n | ((t >>>= 3) ? 128 : 0),
                        !t)
                            return;
                        if (e.buf[e.pos++] = 127 & t | ((t >>>= 7) ? 128 : 0),
                        !t)
                            return;
                        if (e.buf[e.pos++] = 127 & t | ((t >>>= 7) ? 128 : 0),
                        !t)
                            return;
                        if (e.buf[e.pos++] = 127 & t | ((t >>>= 7) ? 128 : 0),
                        !t)
                            return;
                        if (e.buf[e.pos++] = 127 & t | ((t >>>= 7) ? 128 : 0),
                        !t)
                            return;
                        e.buf[e.pos++] = 127 & t
                    }(i, e)
                }(t, this) : (this.realloc(4),
                this.buf[this.pos++] = 127 & t | (t > 127 ? 128 : 0),
                t <= 127 || (this.buf[this.pos++] = 127 & (t >>>= 7) | (t > 127 ? 128 : 0),
                t <= 127 || (this.buf[this.pos++] = 127 & (t >>>= 7) | (t > 127 ? 128 : 0),
                t <= 127 || (this.buf[this.pos++] = t >>> 7 & 127))))
            },
            writeSVarint: function(t) {
                this.writeVarint(t < 0 ? 2 * -t - 1 : 2 * t)
            },
            writeBoolean: function(t) {
                this.writeVarint(Boolean(t))
            },
            writeString: function(t) {
                t = String(t),
                this.realloc(4 * t.length),
                this.pos++;
                var e = this.pos;
                this.pos = function(t, e, n) {
                    for (var i, o, r = 0; r < e.length; r++) {
                        if ((i = e.charCodeAt(r)) > 55295 && i < 57344) {
                            if (!o) {
                                i > 56319 || r + 1 === e.length ? (t[n++] = 239,
                                t[n++] = 191,
                                t[n++] = 189) : o = i;
                                continue
                            }
                            if (i < 56320) {
                                t[n++] = 239,
                                t[n++] = 191,
                                t[n++] = 189,
                                o = i;
                                continue
                            }
                            i = o - 55296 << 10 | i - 56320 | 65536,
                            o = null
                        } else
                            o && (t[n++] = 239,
                            t[n++] = 191,
                            t[n++] = 189,
                            o = null);
                        i < 128 ? t[n++] = i : (i < 2048 ? t[n++] = i >> 6 | 192 : (i < 65536 ? t[n++] = i >> 12 | 224 : (t[n++] = i >> 18 | 240,
                        t[n++] = i >> 12 & 63 | 128),
                        t[n++] = i >> 6 & 63 | 128),
                        t[n++] = 63 & i | 128)
                    }
                    return n
                }(this.buf, t, this.pos);
                var n = this.pos - e;
                n >= 128 && r(e, n, this),
                this.pos = e - 1,
                this.writeVarint(n),
                this.pos += n
            },
            writeFloat: function(t) {
                this.realloc(4),
                e.write(this.buf, t, this.pos, !0, 23, 4),
                this.pos += 4
            },
            writeDouble: function(t) {
                this.realloc(8),
                e.write(this.buf, t, this.pos, !0, 52, 8),
                this.pos += 8
            },
            writeBytes: function(t) {
                var e = t.length;
                this.writeVarint(e),
                this.realloc(e);
                for (var n = 0; n < e; n++)
                    this.buf[this.pos++] = t[n]
            },
            writeRawMessage: function(t, e) {
                this.pos++;
                var n = this.pos;
                t(e, this);
                var i = this.pos - n;
                i >= 128 && r(n, i, this),
                this.pos = n - 1,
                this.writeVarint(i),
                this.pos += i
            },
            writeMessage: function(t, e, i) {
                this.writeTag(t, n.Bytes),
                this.writeRawMessage(e, i)
            },
            writePackedVarint: function(t, e) {
                this.writeMessage(t, s, e)
            },
            writePackedSVarint: function(t, e) {
                this.writeMessage(t, a, e)
            },
            writePackedBoolean: function(t, e) {
                this.writeMessage(t, u, e)
            },
            writePackedFloat: function(t, e) {
                this.writeMessage(t, l, e)
            },
            writePackedDouble: function(t, e) {
                this.writeMessage(t, h, e)
            },
            writePackedFixed32: function(t, e) {
                this.writeMessage(t, c, e)
            },
            writePackedSFixed32: function(t, e) {
                this.writeMessage(t, f, e)
            },
            writePackedFixed64: function(t, e) {
                this.writeMessage(t, d, e)
            },
            writePackedSFixed64: function(t, e) {
                this.writeMessage(t, p, e)
            },
            writeBytesField: function(t, e) {
                this.writeTag(t, n.Bytes),
                this.writeBytes(e)
            },
            writeFixed32Field: function(t, e) {
                this.writeTag(t, n.Fixed32),
                this.writeFixed32(e)
            },
            writeSFixed32Field: function(t, e) {
                this.writeTag(t, n.Fixed32),
                this.writeSFixed32(e)
            },
            writeFixed64Field: function(t, e) {
                this.writeTag(t, n.Fixed64),
                this.writeFixed64(e)
            },
            writeSFixed64Field: function(t, e) {
                this.writeTag(t, n.Fixed64),
                this.writeSFixed64(e)
            },
            writeVarintField: function(t, e) {
                this.writeTag(t, n.Varint),
                this.writeVarint(e)
            },
            writeSVarintField: function(t, e) {
                this.writeTag(t, n.Varint),
                this.writeSVarint(e)
            },
            writeStringField: function(t, e) {
                this.writeTag(t, n.Bytes),
                this.writeString(e)
            },
            writeFloatField: function(t, e) {
                this.writeTag(t, n.Fixed32),
                this.writeFloat(e)
            },
            writeDoubleField: function(t, e) {
                this.writeTag(t, n.Fixed64),
                this.writeDouble(e)
            },
            writeBooleanField: function(t, e) {
                this.writeVarintField(t, Boolean(e))
            }
        };
        var _ = y;
        function y(t, e) {
            this.x = t,
            this.y = e
        }
        y.prototype = {
            clone: function() {
                return new y(this.x,this.y)
            },
            add: function(t) {
                return this.clone()._add(t)
            },
            sub: function(t) {
                return this.clone()._sub(t)
            },
            mult: function(t) {
                return this.clone()._mult(t)
            },
            div: function(t) {
                return this.clone()._div(t)
            },
            rotate: function(t) {
                return this.clone()._rotate(t)
            },
            matMult: function(t) {
                return this.clone()._matMult(t)
            },
            unit: function() {
                return this.clone()._unit()
            },
            perp: function() {
                return this.clone()._perp()
            },
            round: function() {
                return this.clone()._round()
            },
            mag: function() {
                return Math.sqrt(this.x * this.x + this.y * this.y)
            },
            equals: function(t) {
                return this.x === t.x && this.y === t.y
            },
            dist: function(t) {
                return Math.sqrt(this.distSqr(t))
            },
            distSqr: function(t) {
                var e = t.x - this.x
                  , n = t.y - this.y;
                return e * e + n * n
            },
            angle: function() {
                return Math.atan2(this.y, this.x)
            },
            angleTo: function(t) {
                return Math.atan2(this.y - t.y, this.x - t.x)
            },
            angleWith: function(t) {
                return this.angleWithSep(t.x, t.y)
            },
            angleWithSep: function(t, e) {
                return Math.atan2(this.x * e - this.y * t, this.x * t + this.y * e)
            },
            _matMult: function(t) {
                var e = t[0] * this.x + t[1] * this.y
                  , n = t[2] * this.x + t[3] * this.y;
                return this.x = e,
                this.y = n,
                this
            },
            _add: function(t) {
                return this.x += t.x,
                this.y += t.y,
                this
            },
            _sub: function(t) {
                return this.x -= t.x,
                this.y -= t.y,
                this
            },
            _mult: function(t) {
                return this.x *= t,
                this.y *= t,
                this
            },
            _div: function(t) {
                return this.x /= t,
                this.y /= t,
                this
            },
            _unit: function() {
                return this._div(this.mag()),
                this
            },
            _perp: function() {
                var t = this.y;
                return this.y = this.x,
                this.x = -t,
                this
            },
            _rotate: function(t) {
                var e = Math.cos(t)
                  , n = Math.sin(t)
                  , i = e * this.x - n * this.y
                  , o = n * this.x + e * this.y;
                return this.x = i,
                this.y = o,
                this
            },
            _round: function() {
                return this.x = Math.round(this.x),
                this.y = Math.round(this.y),
                this
            }
        },
        y.convert = function(t) {
            return t instanceof y ? t : Array.isArray(t) ? new y(t[0],t[1]) : t
        }
        ;
        var x = _
          , b = w;
        function w(t, e, n, i, o) {
            this.properties = {},
            this.extent = n,
            this.type = 0,
            this._pbf = t,
            this._geometry = -1,
            this._keys = i,
            this._values = o,
            t.readFields(T, this, e)
        }
        function T(t, e, n) {
            1 == t ? e.id = n.readVarint() : 2 == t ? function(t, e) {
                var n = t.readVarint() + t.pos;
                for (; t.pos < n; ) {
                    var i = e._keys[t.readVarint()]
                      , o = e._values[t.readVarint()];
                    e.properties[i] = o
                }
            }(n, e) : 3 == t ? e.type = n.readVarint() : 4 == t && (e._geometry = n.pos)
        }
        function k(t) {
            for (var e, n, i = 0, o = 0, r = t.length, s = r - 1; o < r; s = o++)
                e = t[o],
                i += ((n = t[s]).x - e.x) * (e.y + n.y);
            return i
        }
        w.types = ["Unknown", "Point", "LineString", "Polygon"],
        w.prototype.loadGeometry = function() {
            var t = this._pbf;
            t.pos = this._geometry;
            for (var e, n = t.readVarint() + t.pos, i = 1, o = 0, r = 0, s = 0, a = []; t.pos < n; ) {
                if (!o) {
                    var l = t.readVarint();
                    i = 7 & l,
                    o = l >> 3
                }
                if (o--,
                1 === i || 2 === i)
                    r += t.readSVarint(),
                    s += t.readSVarint(),
                    1 === i && (e && a.push(e),
                    e = []),
                    e.push(new x(r,s));
                else {
                    if (7 !== i)
                        throw new Error("unknown command " + i);
                    e && e.push(e[0].clone())
                }
            }
            return e && a.push(e),
            a
        }
        ,
        w.prototype.bbox = function() {
            var t = this._pbf;
            t.pos = this._geometry;
            for (var e = t.readVarint() + t.pos, n = 1, i = 0, o = 0, r = 0, s = 1 / 0, a = -1 / 0, l = 1 / 0, h = -1 / 0; t.pos < e; ) {
                if (!i) {
                    var u = t.readVarint();
                    n = 7 & u,
                    i = u >> 3
                }
                if (i--,
                1 === n || 2 === n)
                    (o += t.readSVarint()) < s && (s = o),
                    o > a && (a = o),
                    (r += t.readSVarint()) < l && (l = r),
                    r > h && (h = r);
                else if (7 !== n)
                    throw new Error("unknown command " + n)
            }
            return [s, l, a, h]
        }
        ,
        w.prototype.toGeoJSON = function(t, e, n) {
            var i, o, r = this.extent * Math.pow(2, n), s = this.extent * t, a = this.extent * e, l = this.loadGeometry(), h = w.types[this.type];
            function u(t) {
                for (var e = 0; e < t.length; e++) {
                    var n = t[e]
                      , i = 180 - 360 * (n.y + a) / r;
                    t[e] = [360 * (n.x + s) / r - 180, 360 / Math.PI * Math.atan(Math.exp(i * Math.PI / 180)) - 90]
                }
            }
            switch (this.type) {
            case 1:
                var c = [];
                for (i = 0; i < l.length; i++)
                    c[i] = l[i][0];
                u(l = c);
                break;
            case 2:
                for (i = 0; i < l.length; i++)
                    u(l[i]);
                break;
            case 3:
                for (l = function(t) {
                    var e = t.length;
                    if (e <= 1)
                        return [t];
                    for (var n, i, o = [], r = 0; r < e; r++) {
                        var s = k(t[r]);
                        0 !== s && (void 0 === i && (i = s < 0),
                        i === s < 0 ? (n && o.push(n),
                        n = [t[r]]) : n.push(t[r]))
                    }
                    n && o.push(n);
                    return o
                }(l),
                i = 0; i < l.length; i++)
                    for (o = 0; o < l[i].length; o++)
                        u(l[i][o])
            }
            1 === l.length ? l = l[0] : h = "Multi" + h;
            var f = {
                type: "Feature",
                geometry: {
                    type: h,
                    coordinates: l
                },
                properties: this.properties
            };
            return "id"in this && (f.id = this.id),
            f
        }
        ;
        var P = b
          , S = M;
        function M(t, e) {
            this.version = 1,
            this.name = null,
            this.extent = 4096,
            this.length = 0,
            this._pbf = t,
            this._keys = [],
            this._values = [],
            this._features = [],
            t.readFields(C, this, e),
            this.length = this._features.length
        }
        function C(t, e, n) {
            15 === t ? e.version = n.readVarint() : 1 === t ? e.name = n.readString() : 5 === t ? e.extent = n.readVarint() : 2 === t ? e._features.push(n.pos) : 3 === t ? e._keys.push(n.readString()) : 4 === t && e._values.push(function(t) {
                var e = null
                  , n = t.readVarint() + t.pos;
                for (; t.pos < n; ) {
                    var i = t.readVarint() >> 3;
                    e = 1 === i ? t.readString() : 2 === i ? t.readFloat() : 3 === i ? t.readDouble() : 4 === i ? t.readVarint64() : 5 === i ? t.readVarint() : 6 === i ? t.readSVarint() : 7 === i ? t.readBoolean() : null
                }
                return e
            }(n))
        }
        M.prototype.feature = function(t) {
            if (t < 0 || t >= this._features.length)
                throw new Error("feature index out of bounds");
            this._pbf.pos = this._features[t];
            var e = this._pbf.readVarint() + this._pbf.pos;
            return new P(this._pbf,e,this.extent,this._keys,this._values)
        }
        ;
        var z = S;
        function E(t, e, n) {
            if (3 === t) {
                var i = new z(n,n.readVarint() + n.pos);
                i.length && (e[i.name] = i)
            }
        }
        var A = function(t, e) {
            this.layers = t.readFields(E, {}, e)
        };
        L.SVG.Tile = L.SVG.extend({
            initialize: function(t, e, n) {
                L.SVG.prototype.initialize.call(this, n),
                this._tileCoord = t,
                this._size = e,
                this._initContainer(),
                this._container.setAttribute("width", this._size.x),
                this._container.setAttribute("height", this._size.y),
                this._container.setAttribute("viewBox", [0, 0, this._size.x, this._size.y].join(" ")),
                this._layers = {}
            },
            getCoord: function() {
                return this._tileCoord
            },
            getContainer: function() {
                return this._container
            },
            onAdd: L.Util.falseFn,
            addTo: function(t) {
                if (this._map = t,
                this.options.interactive)
                    for (var e in this._layers) {
                        var n = this._layers[e];
                        n._path.style.pointerEvents = "auto",
                        this._map._targets[L.stamp(n._path)] = n
                    }
            },
            removeFrom: function(t) {
                if (this.options.interactive)
                    for (var e in this._layers) {
                        var n = this._layers[e];
                        delete this._map._targets[L.stamp(n._path)]
                    }
                delete this._map
            },
            _initContainer: function() {
                L.SVG.prototype._initContainer.call(this);
                L.SVG.create("rect")
            },
            _addPath: function(t) {
                this._rootGroup.appendChild(t._path),
                this._layers[L.stamp(t)] = t
            },
            _updateIcon: function(t) {
                var e = t._path = L.SVG.create("image")
                  , n = t.options.icon.options
                  , i = L.point(n.iconSize)
                  , o = n.iconAnchor || i && i.divideBy(2, !0)
                  , r = t._point.subtract(o);
                e.setAttribute("x", r.x),
                e.setAttribute("y", r.y),
                e.setAttribute("width", i.x + "px"),
                e.setAttribute("height", i.y + "px"),
                e.setAttribute("href", n.iconUrl)
            }
        }),
        L.svg.tile = function(t, e, n) {
            return new L.SVG.Tile(t,e,n)
        }
        ;
        var I = L.Class.extend({
            render: function(t, e) {
                this._renderer = t,
                this.options = e,
                t._initPath(this),
                t._updateStyle(this)
            },
            updateStyle: function(t, e) {
                this.options = e,
                t._updateStyle(this)
            },
            _getPixelBounds: function() {
                for (var t = this._parts, e = L.bounds([]), n = 0; n < t.length; n++)
                    for (var i = t[n], o = 0; o < i.length; o++)
                        e.extend(i[o]);
                var r = this._clickTolerance()
                  , s = new L.Point(r,r);
                return e.min._subtract(s),
                e.max._add(s),
                e
            },
            _clickTolerance: L.Path.prototype._clickTolerance
        })
          , O = {
            _makeFeatureParts: function(t, e) {
                var n, i = t.geometry;
                this._parts = [];
                for (var o = 0; o < i.length; o++) {
                    for (var r = i[o], s = [], a = 0; a < r.length; a++)
                        n = r[a],
                        s.push(L.point(n).scaleBy(e));
                    this._parts.push(s)
                }
            },
            makeInteractive: function() {
                this._pxBounds = this._getPixelBounds()
            }
        }
          , B = L.CircleMarker.extend({
            includes: I.prototype,
            statics: {
                iconCache: {}
            },
            initialize: function(t, e) {
                this.properties = t.properties,
                this._makeFeatureParts(t, e)
            },
            render: function(t, e) {
                I.prototype.render.call(this, t, e),
                this._radius = e.radius || L.CircleMarker.prototype.options.radius,
                this._updatePath()
            },
            _makeFeatureParts: function(t, e) {
                var n = t.geometry[0];
                "object" == typeof n[0] && "x"in n[0] ? (this._point = L.point(n[0]).scaleBy(e),
                this._empty = L.Util.falseFn) : (this._point = L.point(n).scaleBy(e),
                this._empty = L.Util.falseFn)
            },
            makeInteractive: function() {
                this._updateBounds()
            },
            updateStyle: function(t, e) {
                return this._radius = e.radius || this._radius,
                this._updateBounds(),
                I.prototype.updateStyle.call(this, t, e)
            },
            _updateBounds: function() {
                var t = this.options.icon;
                if (t) {
                    var e = L.point(t.options.iconSize)
                      , n = t.options.iconAnchor || e && e.divideBy(2, !0)
                      , i = this._point.subtract(n);
                    this._pxBounds = new L.Bounds(i,i.add(t.options.iconSize))
                } else
                    L.CircleMarker.prototype._updateBounds.call(this)
            },
            _updatePath: function() {
                this.options.icon ? this._renderer._updateIcon(this) : L.CircleMarker.prototype._updatePath.call(this)
            },
            _getImage: function() {
                if (this.options.icon) {
                    var t = this.options.icon.options.iconUrl
                      , e = B.iconCache[t];
                    if (!e) {
                        var n = this.options.icon;
                        e = B.iconCache[t] = n.createIcon()
                    }
                    return e
                }
                return null
            },
            _containsPoint: function(t) {
                return this.options.icon ? this._pxBounds.contains(t) : L.CircleMarker.prototype._containsPoint.call(this, t)
            }
        })
          , N = L.Polyline.extend({
            includes: [I.prototype, O],
            initialize: function(t, e) {
                this.properties = t.properties,
                this._makeFeatureParts(t, e)
            },
            render: function(t, e) {
                e.fill = !1,
                I.prototype.render.call(this, t, e),
                this._updatePath()
            },
            updateStyle: function(t, e) {
                e.fill = !1,
                I.prototype.updateStyle.call(this, t, e)
            }
        })
          , D = L.Polygon.extend({
            includes: [I.prototype, O],
            initialize: function(t, e) {
                this.properties = t.properties,
                this._makeFeatureParts(t, e)
            },
            render: function(t, e) {
                I.prototype.render.call(this, t, e),
                this._updatePath()
            }
        });
        L.VectorGrid = L.GridLayer.extend({
            options: {
                rendererFactory: L.svg.tile,
                vectorTileLayerStyles: {},
                interactive: !1
            },
            initialize: function(t) {
                L.setOptions(this, t),
                L.GridLayer.prototype.initialize.apply(this, arguments),
                this.options.getFeatureId && (this._vectorTiles = {},
                this._overriddenStyles = {},
                this.on("tileunload", function(t) {
                    var e = this._tileCoordsToKey(t.coords)
                      , n = this._vectorTiles[e];
                    n && this._map && n.removeFrom(this._map),
                    delete this._vectorTiles[e]
                }, this)),
                this._dataLayerNames = {}
            },
            createTile: function(t, e) {
                var n = this.options.getFeatureId
                  , i = this.getTileSize()
                  , o = this.options.rendererFactory(t, i, this.options)
                  , r = this._getVectorTilePromise(t);
                return n && (this._vectorTiles[this._tileCoordsToKey(t)] = o,
                o._features = {}),
                r.then(function(i) {
                    for (var r in i.layers) {
                        this._dataLayerNames[r] = !0;
                        for (var s = i.layers[r], a = this.getTileSize().divideBy(s.extent), l = this.options.vectorTileLayerStyles[r] || L.Path.prototype.options, h = 0; h < s.features.length; h++) {
                            var u, c = s.features[h], f = l;
                            if (n) {
                                u = this.options.getFeatureId(c);
                                var d = this._overriddenStyles[u];
                                d && (f = d[r] ? d[r] : d)
                            }
                            if (f instanceof Function && (f = f(c.properties, t.z)),
                            f instanceof Array || (f = [f]),
                            f.length) {
                                for (var p = this._createLayer(c, a), m = 0; m < f.length; m++) {
                                    var g = L.extend({}, L.Path.prototype.options, f[m]);
                                    p.render(o, g),
                                    o._addPath(p)
                                }
                                this.options.interactive && p.makeInteractive(),
                                n && (o._features[u] = {
                                    layerName: r,
                                    feature: p
                                })
                            }
                        }
                    }
                    null != this._map && o.addTo(this._map),
                    L.Util.requestAnimFrame(e.bind(t, null, null))
                }
                .bind(this)),
                o.getContainer()
            },
            setFeatureStyle: function(t, e) {
                for (var n in this._overriddenStyles[t] = e,
                this._vectorTiles) {
                    var i = this._vectorTiles[n]
                      , o = i._features[t];
                    if (o) {
                        var r = o.feature
                          , s = e;
                        e[o.layerName] && (s = e[o.layerName]),
                        this._updateStyles(r, i, s)
                    }
                }
                return this
            },
            resetFeatureStyle: function(t) {
                for (var e in delete this._overriddenStyles[t],
                this._vectorTiles) {
                    var n = this._vectorTiles[e]
                      , i = n._features[t];
                    if (i) {
                        var o = i.feature
                          , r = this.options.vectorTileLayerStyles[i.layerName] || L.Path.prototype.options;
                        this._updateStyles(o, n, r)
                    }
                }
                return this
            },
            getDataLayerNames: function() {
                return Object.keys(this._dataLayerNames)
            },
            _updateStyles: function(t, e, n) {
                (n = n instanceof Function ? n(t.properties, e.getCoord().z) : n)instanceof Array || (n = [n]);
                for (var i = 0; i < n.length; i++) {
                    var o = L.extend({}, L.Path.prototype.options, n[i]);
                    t.updateStyle(e, o)
                }
            },
            _createLayer: function(t, e, n) {
                var i;
                switch (t.type) {
                case 1:
                    i = new B(t,e);
                    break;
                case 2:
                    i = new N(t,e);
                    break;
                case 3:
                    i = new D(t,e)
                }
                return this.options.interactive && i.addEventParent(this),
                i
            }
        }),
        L.vectorGrid = function(t) {
            return new L.VectorGrid(t)
        }
        ,
        L.VectorGrid.Protobuf = L.VectorGrid.extend({
            options: {
                subdomains: "abc",
                fetchOptions: {}
            },
            initialize: function(t, e) {
                this._url = t,
                L.VectorGrid.prototype.initialize.call(this, e)
            },
            setUrl: function(t, e) {
                return this._url = t,
                e || this.redraw(),
                this
            },
            _getSubdomain: L.TileLayer.prototype._getSubdomain,
            _getVectorTilePromise: function(e) {
                var n = {
                    s: this._getSubdomain(e),
                    x: e.x,
                    y: e.y,
                    z: e.z
                };
                if (this._map && !this._map.options.crs.infinite) {
                    var i = this._globalTileRange.max.y - e.y;
                    this.options.tms && (n.y = i),
                    n["-y"] = i
                }
                var o = L.Util.template(this._url, L.extend(n, this.options));
                return fetch(o, this.options.fetchOptions).then(function(e) {
                    return e.ok ? e.blob().then(function(e) {
                        var n = new FileReader;
                        return new Promise(function(i) {
                            n.addEventListener("loadend", function() {
                                var e = new t(n.result);
                                return i(new A(e))
                            }),
                            n.readAsArrayBuffer(e)
                        }
                        )
                    }) : {
                        layers: []
                    }
                }).then(function(t) {
                    for (var e in t.layers) {
                        for (var n = [], i = 0; i < t.layers[e].length; i++) {
                            var o = t.layers[e].feature(i);
                            o.geometry = o.loadGeometry(),
                            n.push(o)
                        }
                        t.layers[e].features = n
                    }
                    return t
                })
            }
        }),
        L.vectorGrid.protobuf = function(t, e) {
            return new L.VectorGrid.Protobuf(t,e)
        }
        ;
        var F = function(t, e, n) {
            try {
                return window.URL.createObjectURL(new Blob([Uint8Array.from(t.split("").map(function(t) {
                    return t.charCodeAt(0)
                }))],{
                    type: e
                }))
            } catch (i) {
                return "data:" + e + (n ? ";base64," : ",") + t
            }
        }("'use strict';\n\nvar simplify_1 = simplify$1;\n\n// calculate simplification data using optimized Douglas-Peucker algorithm\n\nfunction simplify$1(points, tolerance) {\n\n    var sqTolerance = tolerance * tolerance,\n        len = points.length,\n        first = 0,\n        last = len - 1,\n        stack = [],\n        i, maxSqDist, sqDist, index;\n\n    // always retain the endpoints (1 is the max value)\n    points[first][2] = 1;\n    points[last][2] = 1;\n\n    // avoid recursion by using a stack\n    while (last) {\n\n        maxSqDist = 0;\n\n        for (i = first + 1; i < last; i++) {\n            sqDist = getSqSegDist(points[i], points[first], points[last]);\n\n            if (sqDist > maxSqDist) {\n                index = i;\n                maxSqDist = sqDist;\n            }\n        }\n\n        if (maxSqDist > sqTolerance) {\n            points[index][2] = maxSqDist; // save the point importance in squared pixels as a z coordinate\n            stack.push(first);\n            stack.push(index);\n            first = index;\n\n        } else {\n            last = stack.pop();\n            first = stack.pop();\n        }\n    }\n}\n\n// square distance from a point to a segment\nfunction getSqSegDist(p, a, b) {\n\n    var x = a[0], y = a[1],\n        bx = b[0], by = b[1],\n        px = p[0], py = p[1],\n        dx = bx - x,\n        dy = by - y;\n\n    if (dx !== 0 || dy !== 0) {\n\n        var t = ((px - x) * dx + (py - y) * dy) / (dx * dx + dy * dy);\n\n        if (t > 1) {\n            x = bx;\n            y = by;\n\n        } else if (t > 0) {\n            x += dx * t;\n            y += dy * t;\n        }\n    }\n\n    dx = px - x;\n    dy = py - y;\n\n    return dx * dx + dy * dy;\n}\n\nvar convert_1 = convert$1;\n\nvar simplify = simplify_1;\n\n// converts GeoJSON feature into an intermediate projected JSON vector format with simplification data\n\nfunction convert$1(data, tolerance) {\n    var features = [];\n\n    if (data.type === 'FeatureCollection') {\n        for (var i = 0; i < data.features.length; i++) {\n            convertFeature(features, data.features[i], tolerance);\n        }\n    } else if (data.type === 'Feature') {\n        convertFeature(features, data, tolerance);\n\n    } else {\n        // single geometry or a geometry collection\n        convertFeature(features, {geometry: data}, tolerance);\n    }\n    return features;\n}\n\nfunction convertFeature(features, feature, tolerance) {\n    if (feature.geometry === null) {\n        // ignore features with null geometry\n        return;\n    }\n\n    var geom = feature.geometry,\n        type = geom.type,\n        coords = geom.coordinates,\n        tags = feature.properties,\n        i, j, rings, projectedRing;\n\n    if (type === 'Point') {\n        features.push(create(tags, 1, [projectPoint(coords)]));\n\n    } else if (type === 'MultiPoint') {\n        features.push(create(tags, 1, project(coords)));\n\n    } else if (type === 'LineString') {\n        features.push(create(tags, 2, [project(coords, tolerance)]));\n\n    } else if (type === 'MultiLineString' || type === 'Polygon') {\n        rings = [];\n        for (i = 0; i < coords.length; i++) {\n            projectedRing = project(coords[i], tolerance);\n            if (type === 'Polygon') { projectedRing.outer = (i === 0); }\n            rings.push(projectedRing);\n        }\n        features.push(create(tags, type === 'Polygon' ? 3 : 2, rings));\n\n    } else if (type === 'MultiPolygon') {\n        rings = [];\n        for (i = 0; i < coords.length; i++) {\n            for (j = 0; j < coords[i].length; j++) {\n                projectedRing = project(coords[i][j], tolerance);\n                projectedRing.outer = (j === 0);\n                rings.push(projectedRing);\n            }\n        }\n        features.push(create(tags, 3, rings));\n\n    } else if (type === 'GeometryCollection') {\n        for (i = 0; i < geom.geometries.length; i++) {\n            convertFeature(features, {\n                geometry: geom.geometries[i],\n                properties: tags\n            }, tolerance);\n        }\n\n    } else {\n        throw new Error('Input data is not a valid GeoJSON object.');\n    }\n}\n\nfunction create(tags, type, geometry) {\n    var feature = {\n        geometry: geometry,\n        type: type,\n        tags: tags || null,\n        min: [2, 1], // initial bbox values;\n        max: [-1, 0]  // note that coords are usually in [0..1] range\n    };\n    calcBBox(feature);\n    return feature;\n}\n\nfunction project(lonlats, tolerance) {\n    var projected = [];\n    for (var i = 0; i < lonlats.length; i++) {\n        projected.push(projectPoint(lonlats[i]));\n    }\n    if (tolerance) {\n        simplify(projected, tolerance);\n        calcSize(projected);\n    }\n    return projected;\n}\n\nfunction projectPoint(p) {\n    var sin = Math.sin(p[1] * Math.PI / 180),\n        x = (p[0] / 360 + 0.5),\n        y = (0.5 - 0.25 * Math.log((1 + sin) / (1 - sin)) / Math.PI);\n\n    y = y < 0 ? 0 :\n        y > 1 ? 1 : y;\n\n    return [x, y, 0];\n}\n\n// calculate area and length of the poly\nfunction calcSize(points) {\n    var area = 0,\n        dist = 0;\n\n    for (var i = 0, a, b; i < points.length - 1; i++) {\n        a = b || points[i];\n        b = points[i + 1];\n\n        area += a[0] * b[1] - b[0] * a[1];\n\n        // use Manhattan distance instead of Euclidian one to avoid expensive square root computation\n        dist += Math.abs(b[0] - a[0]) + Math.abs(b[1] - a[1]);\n    }\n    points.area = Math.abs(area / 2);\n    points.dist = dist;\n}\n\n// calculate the feature bounding box for faster clipping later\nfunction calcBBox(feature) {\n    var geometry = feature.geometry,\n        min = feature.min,\n        max = feature.max;\n\n    if (feature.type === 1) { calcRingBBox(min, max, geometry); }\n    else { for (var i = 0; i < geometry.length; i++) { calcRingBBox(min, max, geometry[i]); } }\n\n    return feature;\n}\n\nfunction calcRingBBox(min, max, points) {\n    for (var i = 0, p; i < points.length; i++) {\n        p = points[i];\n        min[0] = Math.min(p[0], min[0]);\n        max[0] = Math.max(p[0], max[0]);\n        min[1] = Math.min(p[1], min[1]);\n        max[1] = Math.max(p[1], max[1]);\n    }\n}\n\nvar tile = transformTile;\nvar point = transformPoint;\n\n// Transforms the coordinates of each feature in the given tile from\n// mercator-projected space into (extent x extent) tile space.\nfunction transformTile(tile, extent) {\n    if (tile.transformed) { return tile; }\n\n    var z2 = tile.z2,\n        tx = tile.x,\n        ty = tile.y,\n        i, j, k;\n\n    for (i = 0; i < tile.features.length; i++) {\n        var feature = tile.features[i],\n            geom = feature.geometry,\n            type = feature.type;\n\n        if (type === 1) {\n            for (j = 0; j < geom.length; j++) { geom[j] = transformPoint(geom[j], extent, z2, tx, ty); }\n\n        } else {\n            for (j = 0; j < geom.length; j++) {\n                var ring = geom[j];\n                for (k = 0; k < ring.length; k++) { ring[k] = transformPoint(ring[k], extent, z2, tx, ty); }\n            }\n        }\n    }\n\n    tile.transformed = true;\n\n    return tile;\n}\n\nfunction transformPoint(p, extent, z2, tx, ty) {\n    var x = Math.round(extent * (p[0] * z2 - tx)),\n        y = Math.round(extent * (p[1] * z2 - ty));\n    return [x, y];\n}\n\nvar transform$1 = {\n\ttile: tile,\n\tpoint: point\n};\n\nvar clip_1 = clip$1;\n\n/* clip features between two axis-parallel lines:\n *     |        |\n *  ___|___     |     /\n * /   |   ____|____/\n *     |        |\n */\n\nfunction clip$1(features, scale, k1, k2, axis, intersect, minAll, maxAll) {\n\n    k1 /= scale;\n    k2 /= scale;\n\n    if (minAll >= k1 && maxAll <= k2) { return features; } // trivial accept\n    else if (minAll > k2 || maxAll < k1) { return null; } // trivial reject\n\n    var clipped = [];\n\n    for (var i = 0; i < features.length; i++) {\n\n        var feature = features[i],\n            geometry = feature.geometry,\n            type = feature.type,\n            min, max;\n\n        min = feature.min[axis];\n        max = feature.max[axis];\n\n        if (min >= k1 && max <= k2) { // trivial accept\n            clipped.push(feature);\n            continue;\n        } else if (min > k2 || max < k1) { continue; } // trivial reject\n\n        var slices = type === 1 ?\n                clipPoints(geometry, k1, k2, axis) :\n                clipGeometry(geometry, k1, k2, axis, intersect, type === 3);\n\n        if (slices.length) {\n            // if a feature got clipped, it will likely get clipped on the next zoom level as well,\n            // so there's no need to recalculate bboxes\n            clipped.push({\n                geometry: slices,\n                type: type,\n                tags: features[i].tags || null,\n                min: feature.min,\n                max: feature.max\n            });\n        }\n    }\n\n    return clipped.length ? clipped : null;\n}\n\nfunction clipPoints(geometry, k1, k2, axis) {\n    var slice = [];\n\n    for (var i = 0; i < geometry.length; i++) {\n        var a = geometry[i],\n            ak = a[axis];\n\n        if (ak >= k1 && ak <= k2) { slice.push(a); }\n    }\n    return slice;\n}\n\nfunction clipGeometry(geometry, k1, k2, axis, intersect, closed) {\n\n    var slices = [];\n\n    for (var i = 0; i < geometry.length; i++) {\n\n        var ak = 0,\n            bk = 0,\n            b = null,\n            points = geometry[i],\n            area = points.area,\n            dist = points.dist,\n            outer = points.outer,\n            len = points.length,\n            a, j, last;\n\n        var slice = [];\n\n        for (j = 0; j < len - 1; j++) {\n            a = b || points[j];\n            b = points[j + 1];\n            ak = bk || a[axis];\n            bk = b[axis];\n\n            if (ak < k1) {\n\n                if ((bk > k2)) { // ---|-----|--\x3e\n                    slice.push(intersect(a, b, k1), intersect(a, b, k2));\n                    if (!closed) { slice = newSlice(slices, slice, area, dist, outer); }\n\n                } else if (bk >= k1) { slice.push(intersect(a, b, k1)); } // ---|--\x3e  |\n\n            } else if (ak > k2) {\n\n                if ((bk < k1)) { // <--|-----|---\n                    slice.push(intersect(a, b, k2), intersect(a, b, k1));\n                    if (!closed) { slice = newSlice(slices, slice, area, dist, outer); }\n\n                } else if (bk <= k2) { slice.push(intersect(a, b, k2)); } // |  <--|---\n\n            } else {\n\n                slice.push(a);\n\n                if (bk < k1) { // <--|---  |\n                    slice.push(intersect(a, b, k1));\n                    if (!closed) { slice = newSlice(slices, slice, area, dist, outer); }\n\n                } else if (bk > k2) { // |  ---|--\x3e\n                    slice.push(intersect(a, b, k2));\n                    if (!closed) { slice = newSlice(slices, slice, area, dist, outer); }\n                }\n                // | --\x3e |\n            }\n        }\n\n        // add the last point\n        a = points[len - 1];\n        ak = a[axis];\n        if (ak >= k1 && ak <= k2) { slice.push(a); }\n\n        // close the polygon if its endpoints are not the same after clipping\n\n        last = slice[slice.length - 1];\n        if (closed && last && (slice[0][0] !== last[0] || slice[0][1] !== last[1])) { slice.push(slice[0]); }\n\n        // add the final slice\n        newSlice(slices, slice, area, dist, outer);\n    }\n\n    return slices;\n}\n\nfunction newSlice(slices, slice, area, dist, outer) {\n    if (slice.length) {\n        // we don't recalculate the area/length of the unclipped geometry because the case where it goes\n        // below the visibility threshold as a result of clipping is rare, so we avoid doing unnecessary work\n        slice.area = area;\n        slice.dist = dist;\n        if (outer !== undefined) { slice.outer = outer; }\n\n        slices.push(slice);\n    }\n    return [];\n}\n\nvar clip$2 = clip_1;\n\nvar wrap_1 = wrap$1;\n\nfunction wrap$1(features, buffer, intersectX) {\n    var merged = features,\n        left  = clip$2(features, 1, -1 - buffer, buffer,     0, intersectX, -1, 2), // left world copy\n        right = clip$2(features, 1,  1 - buffer, 2 + buffer, 0, intersectX, -1, 2); // right world copy\n\n    if (left || right) {\n        merged = clip$2(features, 1, -buffer, 1 + buffer, 0, intersectX, -1, 2); // center world copy\n\n        if (left) { merged = shiftFeatureCoords(left, 1).concat(merged); } // merge left into center\n        if (right) { merged = merged.concat(shiftFeatureCoords(right, -1)); } // merge right into center\n    }\n\n    return merged;\n}\n\nfunction shiftFeatureCoords(features, offset) {\n    var newFeatures = [];\n\n    for (var i = 0; i < features.length; i++) {\n        var feature = features[i],\n            type = feature.type;\n\n        var newGeometry;\n\n        if (type === 1) {\n            newGeometry = shiftCoords(feature.geometry, offset);\n        } else {\n            newGeometry = [];\n            for (var j = 0; j < feature.geometry.length; j++) {\n                newGeometry.push(shiftCoords(feature.geometry[j], offset));\n            }\n        }\n\n        newFeatures.push({\n            geometry: newGeometry,\n            type: type,\n            tags: feature.tags,\n            min: [feature.min[0] + offset, feature.min[1]],\n            max: [feature.max[0] + offset, feature.max[1]]\n        });\n    }\n\n    return newFeatures;\n}\n\nfunction shiftCoords(points, offset) {\n    var newPoints = [];\n    newPoints.area = points.area;\n    newPoints.dist = points.dist;\n\n    for (var i = 0; i < points.length; i++) {\n        newPoints.push([points[i][0] + offset, points[i][1], points[i][2]]);\n    }\n    return newPoints;\n}\n\nvar tile$1 = createTile$1;\n\nfunction createTile$1(features, z2, tx, ty, tolerance, noSimplify) {\n    var tile = {\n        features: [],\n        numPoints: 0,\n        numSimplified: 0,\n        numFeatures: 0,\n        source: null,\n        x: tx,\n        y: ty,\n        z2: z2,\n        transformed: false,\n        min: [2, 1],\n        max: [-1, 0]\n    };\n    for (var i = 0; i < features.length; i++) {\n        tile.numFeatures++;\n        addFeature(tile, features[i], tolerance, noSimplify);\n\n        var min = features[i].min,\n            max = features[i].max;\n\n        if (min[0] < tile.min[0]) { tile.min[0] = min[0]; }\n        if (min[1] < tile.min[1]) { tile.min[1] = min[1]; }\n        if (max[0] > tile.max[0]) { tile.max[0] = max[0]; }\n        if (max[1] > tile.max[1]) { tile.max[1] = max[1]; }\n    }\n    return tile;\n}\n\nfunction addFeature(tile, feature, tolerance, noSimplify) {\n\n    var geom = feature.geometry,\n        type = feature.type,\n        simplified = [],\n        sqTolerance = tolerance * tolerance,\n        i, j, ring, p;\n\n    if (type === 1) {\n        for (i = 0; i < geom.length; i++) {\n            simplified.push(geom[i]);\n            tile.numPoints++;\n            tile.numSimplified++;\n        }\n\n    } else {\n\n        // simplify and transform projected coordinates for tile geometry\n        for (i = 0; i < geom.length; i++) {\n            ring = geom[i];\n\n            // filter out tiny polylines & polygons\n            if (!noSimplify && ((type === 2 && ring.dist < tolerance) ||\n                                (type === 3 && ring.area < sqTolerance))) {\n                tile.numPoints += ring.length;\n                continue;\n            }\n\n            var simplifiedRing = [];\n\n            for (j = 0; j < ring.length; j++) {\n                p = ring[j];\n                // keep points with importance > tolerance\n                if (noSimplify || p[2] > sqTolerance) {\n                    simplifiedRing.push(p);\n                    tile.numSimplified++;\n                }\n                tile.numPoints++;\n            }\n\n            if (type === 3) { rewind(simplifiedRing, ring.outer); }\n\n            simplified.push(simplifiedRing);\n        }\n    }\n\n    if (simplified.length) {\n        tile.features.push({\n            geometry: simplified,\n            type: type,\n            tags: feature.tags || null\n        });\n    }\n}\n\nfunction rewind(ring, clockwise) {\n    var area = signedArea(ring);\n    if (area < 0 === clockwise) { ring.reverse(); }\n}\n\nfunction signedArea(ring) {\n    var sum = 0;\n    for (var i = 0, len = ring.length, j = len - 1, p1, p2; i < len; j = i++) {\n        p1 = ring[i];\n        p2 = ring[j];\n        sum += (p2[0] - p1[0]) * (p1[1] + p2[1]);\n    }\n    return sum;\n}\n\nvar index = geojsonvt;\n\nvar convert = convert_1;\nvar transform = transform$1;\nvar clip = clip_1;\nvar wrap = wrap_1;\nvar createTile = tile$1;     // final simplified tile generation\n\n\nfunction geojsonvt(data, options) {\n    return new GeoJSONVT(data, options);\n}\n\nfunction GeoJSONVT(data, options) {\n    options = this.options = extend(Object.create(this.options), options);\n\n    var debug = options.debug;\n\n    if (debug) { console.time('preprocess data'); }\n\n    var z2 = 1 << options.maxZoom, // 2^z\n        features = convert(data, options.tolerance / (z2 * options.extent));\n\n    this.tiles = {};\n    this.tileCoords = [];\n\n    if (debug) {\n        console.timeEnd('preprocess data');\n        console.log('index: maxZoom: %d, maxPoints: %d', options.indexMaxZoom, options.indexMaxPoints);\n        console.time('generate tiles');\n        this.stats = {};\n        this.total = 0;\n    }\n\n    features = wrap(features, options.buffer / options.extent, intersectX);\n\n    // start slicing from the top tile down\n    if (features.length) { this.splitTile(features, 0, 0, 0); }\n\n    if (debug) {\n        if (features.length) { console.log('features: %d, points: %d', this.tiles[0].numFeatures, this.tiles[0].numPoints); }\n        console.timeEnd('generate tiles');\n        console.log('tiles generated:', this.total, JSON.stringify(this.stats));\n    }\n}\n\nGeoJSONVT.prototype.options = {\n    maxZoom: 14,            // max zoom to preserve detail on\n    indexMaxZoom: 5,        // max zoom in the tile index\n    indexMaxPoints: 100000, // max number of points per tile in the tile index\n    solidChildren: false,   // whether to tile solid square tiles further\n    tolerance: 3,           // simplification tolerance (higher means simpler)\n    extent: 4096,           // tile extent\n    buffer: 64,             // tile buffer on each side\n    debug: 0                // logging level (0, 1 or 2)\n};\n\nGeoJSONVT.prototype.splitTile = function (features, z, x, y, cz, cx, cy) {\n    var this$1 = this;\n\n\n    var stack = [features, z, x, y],\n        options = this.options,\n        debug = options.debug,\n        solid = null;\n\n    // avoid recursion by using a processing queue\n    while (stack.length) {\n        y = stack.pop();\n        x = stack.pop();\n        z = stack.pop();\n        features = stack.pop();\n\n        var z2 = 1 << z,\n            id = toID(z, x, y),\n            tile = this$1.tiles[id],\n            tileTolerance = z === options.maxZoom ? 0 : options.tolerance / (z2 * options.extent);\n\n        if (!tile) {\n            if (debug > 1) { console.time('creation'); }\n\n            tile = this$1.tiles[id] = createTile(features, z2, x, y, tileTolerance, z === options.maxZoom);\n            this$1.tileCoords.push({z: z, x: x, y: y});\n\n            if (debug) {\n                if (debug > 1) {\n                    console.log('tile z%d-%d-%d (features: %d, points: %d, simplified: %d)',\n                        z, x, y, tile.numFeatures, tile.numPoints, tile.numSimplified);\n                    console.timeEnd('creation');\n                }\n                var key = 'z' + z;\n                this$1.stats[key] = (this$1.stats[key] || 0) + 1;\n                this$1.total++;\n            }\n        }\n\n        // save reference to original geometry in tile so that we can drill down later if we stop now\n        tile.source = features;\n\n        // if it's the first-pass tiling\n        if (!cz) {\n            // stop tiling if we reached max zoom, or if the tile is too simple\n            if (z === options.indexMaxZoom || tile.numPoints <= options.indexMaxPoints) { continue; }\n\n        // if a drilldown to a specific tile\n        } else {\n            // stop tiling if we reached base zoom or our target tile zoom\n            if (z === options.maxZoom || z === cz) { continue; }\n\n            // stop tiling if it's not an ancestor of the target tile\n            var m = 1 << (cz - z);\n            if (x !== Math.floor(cx / m) || y !== Math.floor(cy / m)) { continue; }\n        }\n\n        // stop tiling if the tile is solid clipped square\n        if (!options.solidChildren && isClippedSquare(tile, options.extent, options.buffer)) {\n            if (cz) { solid = z; } // and remember the zoom if we're drilling down\n            continue;\n        }\n\n        // if we slice further down, no need to keep source geometry\n        tile.source = null;\n\n        if (debug > 1) { console.time('clipping'); }\n\n        // values we'll use for clipping\n        var k1 = 0.5 * options.buffer / options.extent,\n            k2 = 0.5 - k1,\n            k3 = 0.5 + k1,\n            k4 = 1 + k1,\n            tl, bl, tr, br, left, right;\n\n        tl = bl = tr = br = null;\n\n        left  = clip(features, z2, x - k1, x + k3, 0, intersectX, tile.min[0], tile.max[0]);\n        right = clip(features, z2, x + k2, x + k4, 0, intersectX, tile.min[0], tile.max[0]);\n\n        if (left) {\n            tl = clip(left, z2, y - k1, y + k3, 1, intersectY, tile.min[1], tile.max[1]);\n            bl = clip(left, z2, y + k2, y + k4, 1, intersectY, tile.min[1], tile.max[1]);\n        }\n\n        if (right) {\n            tr = clip(right, z2, y - k1, y + k3, 1, intersectY, tile.min[1], tile.max[1]);\n            br = clip(right, z2, y + k2, y + k4, 1, intersectY, tile.min[1], tile.max[1]);\n        }\n\n        if (debug > 1) { console.timeEnd('clipping'); }\n\n        if (tl) { stack.push(tl, z + 1, x * 2,     y * 2); }\n        if (bl) { stack.push(bl, z + 1, x * 2,     y * 2 + 1); }\n        if (tr) { stack.push(tr, z + 1, x * 2 + 1, y * 2); }\n        if (br) { stack.push(br, z + 1, x * 2 + 1, y * 2 + 1); }\n    }\n\n    return solid;\n};\n\nGeoJSONVT.prototype.getTile = function (z, x, y) {\n    var this$1 = this;\n\n    var options = this.options,\n        extent = options.extent,\n        debug = options.debug;\n\n    var z2 = 1 << z;\n    x = ((x % z2) + z2) % z2; // wrap tile x coordinate\n\n    var id = toID(z, x, y);\n    if (this.tiles[id]) { return transform.tile(this.tiles[id], extent); }\n\n    if (debug > 1) { console.log('drilling down to z%d-%d-%d', z, x, y); }\n\n    var z0 = z,\n        x0 = x,\n        y0 = y,\n        parent;\n\n    while (!parent && z0 > 0) {\n        z0--;\n        x0 = Math.floor(x0 / 2);\n        y0 = Math.floor(y0 / 2);\n        parent = this$1.tiles[toID(z0, x0, y0)];\n    }\n\n    if (!parent || !parent.source) { return null; }\n\n    // if we found a parent tile containing the original geometry, we can drill down from it\n    if (debug > 1) { console.log('found parent tile z%d-%d-%d', z0, x0, y0); }\n\n    // it parent tile is a solid clipped square, return it instead since it's identical\n    if (isClippedSquare(parent, extent, options.buffer)) { return transform.tile(parent, extent); }\n\n    if (debug > 1) { console.time('drilling down'); }\n    var solid = this.splitTile(parent.source, z0, x0, y0, z, x, y);\n    if (debug > 1) { console.timeEnd('drilling down'); }\n\n    // one of the parent tiles was a solid clipped square\n    if (solid !== null) {\n        var m = 1 << (z - solid);\n        id = toID(solid, Math.floor(x / m), Math.floor(y / m));\n    }\n\n    return this.tiles[id] ? transform.tile(this.tiles[id], extent) : null;\n};\n\nfunction toID(z, x, y) {\n    return (((1 << z) * y + x) * 32) + z;\n}\n\nfunction intersectX(a, b, x) {\n    return [x, (x - a[0]) * (b[1] - a[1]) / (b[0] - a[0]) + a[1], 1];\n}\nfunction intersectY(a, b, y) {\n    return [(y - a[1]) * (b[0] - a[0]) / (b[1] - a[1]) + a[0], y, 1];\n}\n\nfunction extend(dest, src) {\n    for (var i in src) { dest[i] = src[i]; }\n    return dest;\n}\n\n// checks whether a tile is a whole-area fill after clipping; if it is, there's no sense slicing it further\nfunction isClippedSquare(tile, extent, buffer) {\n\n    var features = tile.source;\n    if (features.length !== 1) { return false; }\n\n    var feature = features[0];\n    if (feature.type !== 3 || feature.geometry.length > 1) { return false; }\n\n    var len = feature.geometry[0].length;\n    if (len !== 5) { return false; }\n\n    for (var i = 0; i < len; i++) {\n        var p = transform.point(feature.geometry[0][i], extent, tile.z2, tile.x, tile.y);\n        if ((p[0] !== -buffer && p[0] !== extent + buffer) ||\n            (p[1] !== -buffer && p[1] !== extent + buffer)) { return false; }\n    }\n\n    return true;\n}\n\nvar identity = function(x) {\n  return x;\n};\n\nvar transform$3 = function(topology) {\n  if ((transform = topology.transform) == null) { return identity; }\n  var transform,\n      x0,\n      y0,\n      kx = transform.scale[0],\n      ky = transform.scale[1],\n      dx = transform.translate[0],\n      dy = transform.translate[1];\n  return function(point, i) {\n    if (!i) { x0 = y0 = 0; }\n    point[0] = (x0 += point[0]) * kx + dx;\n    point[1] = (y0 += point[1]) * ky + dy;\n    return point;\n  };\n};\n\nvar bbox = function(topology) {\n  var bbox = topology.bbox;\n\n  function bboxPoint(p0) {\n    p1[0] = p0[0], p1[1] = p0[1], t(p1);\n    if (p1[0] < x0) { x0 = p1[0]; }\n    if (p1[0] > x1) { x1 = p1[0]; }\n    if (p1[1] < y0) { y0 = p1[1]; }\n    if (p1[1] > y1) { y1 = p1[1]; }\n  }\n\n  function bboxGeometry(o) {\n    switch (o.type) {\n      case \"GeometryCollection\": o.geometries.forEach(bboxGeometry); break;\n      case \"Point\": bboxPoint(o.coordinates); break;\n      case \"MultiPoint\": o.coordinates.forEach(bboxPoint); break;\n    }\n  }\n\n  if (!bbox) {\n    var t = transform$3(topology), p0, p1 = new Array(2), name,\n        x0 = Infinity, y0 = x0, x1 = -x0, y1 = -x0;\n\n    topology.arcs.forEach(function(arc) {\n      var i = -1, n = arc.length;\n      while (++i < n) {\n        p0 = arc[i], p1[0] = p0[0], p1[1] = p0[1], t(p1, i);\n        if (p1[0] < x0) { x0 = p1[0]; }\n        if (p1[0] > x1) { x1 = p1[0]; }\n        if (p1[1] < y0) { y0 = p1[1]; }\n        if (p1[1] > y1) { y1 = p1[1]; }\n      }\n    });\n\n    for (name in topology.objects) {\n      bboxGeometry(topology.objects[name]);\n    }\n\n    bbox = topology.bbox = [x0, y0, x1, y1];\n  }\n\n  return bbox;\n};\n\nvar reverse = function(array, n) {\n  var t, j = array.length, i = j - n;\n  while (i < --j) { t = array[i], array[i++] = array[j], array[j] = t; }\n};\n\nvar feature = function(topology, o) {\n  return o.type === \"GeometryCollection\"\n      ? {type: \"FeatureCollection\", features: o.geometries.map(function(o) { return feature$1(topology, o); })}\n      : feature$1(topology, o);\n};\n\nfunction feature$1(topology, o) {\n  var id = o.id,\n      bbox = o.bbox,\n      properties = o.properties == null ? {} : o.properties,\n      geometry = object(topology, o);\n  return id == null && bbox == null ? {type: \"Feature\", properties: properties, geometry: geometry}\n      : bbox == null ? {type: \"Feature\", id: id, properties: properties, geometry: geometry}\n      : {type: \"Feature\", id: id, bbox: bbox, properties: properties, geometry: geometry};\n}\n\nfunction object(topology, o) {\n  var transformPoint = transform$3(topology),\n      arcs = topology.arcs;\n\n  function arc(i, points) {\n    if (points.length) { points.pop(); }\n    for (var a = arcs[i < 0 ? ~i : i], k = 0, n = a.length; k < n; ++k) {\n      points.push(transformPoint(a[k].slice(), k));\n    }\n    if (i < 0) { reverse(points, n); }\n  }\n\n  function point(p) {\n    return transformPoint(p.slice());\n  }\n\n  function line(arcs) {\n    var points = [];\n    for (var i = 0, n = arcs.length; i < n; ++i) { arc(arcs[i], points); }\n    if (points.length < 2) { points.push(points[0].slice()); }\n    return points;\n  }\n\n  function ring(arcs) {\n    var points = line(arcs);\n    while (points.length < 4) { points.push(points[0].slice()); }\n    return points;\n  }\n\n  function polygon(arcs) {\n    return arcs.map(ring);\n  }\n\n  function geometry(o) {\n    var type = o.type, coordinates;\n    switch (type) {\n      case \"GeometryCollection\": return {type: type, geometries: o.geometries.map(geometry)};\n      case \"Point\": coordinates = point(o.coordinates); break;\n      case \"MultiPoint\": coordinates = o.coordinates.map(point); break;\n      case \"LineString\": coordinates = line(o.arcs); break;\n      case \"MultiLineString\": coordinates = o.arcs.map(line); break;\n      case \"Polygon\": coordinates = polygon(o.arcs); break;\n      case \"MultiPolygon\": coordinates = o.arcs.map(polygon); break;\n      default: return null;\n    }\n    return {type: type, coordinates: coordinates};\n  }\n\n  return geometry(o);\n}\n\nvar stitch = function(topology, arcs) {\n  var stitchedArcs = {},\n      fragmentByStart = {},\n      fragmentByEnd = {},\n      fragments = [],\n      emptyIndex = -1;\n\n  // Stitch empty arcs first, since they may be subsumed by other arcs.\n  arcs.forEach(function(i, j) {\n    var arc = topology.arcs[i < 0 ? ~i : i], t;\n    if (arc.length < 3 && !arc[1][0] && !arc[1][1]) {\n      t = arcs[++emptyIndex], arcs[emptyIndex] = i, arcs[j] = t;\n    }\n  });\n\n  arcs.forEach(function(i) {\n    var e = ends(i),\n        start = e[0],\n        end = e[1],\n        f, g;\n\n    if (f = fragmentByEnd[start]) {\n      delete fragmentByEnd[f.end];\n      f.push(i);\n      f.end = end;\n      if (g = fragmentByStart[end]) {\n        delete fragmentByStart[g.start];\n        var fg = g === f ? f : f.concat(g);\n        fragmentByStart[fg.start = f.start] = fragmentByEnd[fg.end = g.end] = fg;\n      } else {\n        fragmentByStart[f.start] = fragmentByEnd[f.end] = f;\n      }\n    } else if (f = fragmentByStart[end]) {\n      delete fragmentByStart[f.start];\n      f.unshift(i);\n      f.start = start;\n      if (g = fragmentByEnd[start]) {\n        delete fragmentByEnd[g.end];\n        var gf = g === f ? f : g.concat(f);\n        fragmentByStart[gf.start = g.start] = fragmentByEnd[gf.end = f.end] = gf;\n      } else {\n        fragmentByStart[f.start] = fragmentByEnd[f.end] = f;\n      }\n    } else {\n      f = [i];\n      fragmentByStart[f.start = start] = fragmentByEnd[f.end = end] = f;\n    }\n  });\n\n  function ends(i) {\n    var arc = topology.arcs[i < 0 ? ~i : i], p0 = arc[0], p1;\n    if (topology.transform) { p1 = [0, 0], arc.forEach(function(dp) { p1[0] += dp[0], p1[1] += dp[1]; }); }\n    else { p1 = arc[arc.length - 1]; }\n    return i < 0 ? [p1, p0] : [p0, p1];\n  }\n\n  function flush(fragmentByEnd, fragmentByStart) {\n    for (var k in fragmentByEnd) {\n      var f = fragmentByEnd[k];\n      delete fragmentByStart[f.start];\n      delete f.start;\n      delete f.end;\n      f.forEach(function(i) { stitchedArcs[i < 0 ? ~i : i] = 1; });\n      fragments.push(f);\n    }\n  }\n\n  flush(fragmentByEnd, fragmentByStart);\n  flush(fragmentByStart, fragmentByEnd);\n  arcs.forEach(function(i) { if (!stitchedArcs[i < 0 ? ~i : i]) { fragments.push([i]); } });\n\n  return fragments;\n};\n\nfunction extractArcs(topology, object$$1, filter) {\n  var arcs = [],\n      geomsByArc = [],\n      geom;\n\n  function extract0(i) {\n    var j = i < 0 ? ~i : i;\n    (geomsByArc[j] || (geomsByArc[j] = [])).push({i: i, g: geom});\n  }\n\n  function extract1(arcs) {\n    arcs.forEach(extract0);\n  }\n\n  function extract2(arcs) {\n    arcs.forEach(extract1);\n  }\n\n  function extract3(arcs) {\n    arcs.forEach(extract2);\n  }\n\n  function geometry(o) {\n    switch (geom = o, o.type) {\n      case \"GeometryCollection\": o.geometries.forEach(geometry); break;\n      case \"LineString\": extract1(o.arcs); break;\n      case \"MultiLineString\": case \"Polygon\": extract2(o.arcs); break;\n      case \"MultiPolygon\": extract3(o.arcs); break;\n    }\n  }\n\n  geometry(object$$1);\n\n  geomsByArc.forEach(filter == null\n      ? function(geoms) { arcs.push(geoms[0].i); }\n      : function(geoms) { if (filter(geoms[0].g, geoms[geoms.length - 1].g)) { arcs.push(geoms[0].i); } });\n\n  return arcs;\n}\n\nfunction planarRingArea(ring) {\n  var i = -1, n = ring.length, a, b = ring[n - 1], area = 0;\n  while (++i < n) { a = b, b = ring[i], area += a[0] * b[1] - a[1] * b[0]; }\n  return Math.abs(area); // Note: doubled area!\n}\n\nvar bisect = function(a, x) {\n  var lo = 0, hi = a.length;\n  while (lo < hi) {\n    var mid = lo + hi >>> 1;\n    if (a[mid] < x) { lo = mid + 1; }\n    else { hi = mid; }\n  }\n  return lo;\n};\n\nvar slicers = {};\nvar options;\n\nonmessage = function (e) {\n\tif (e.data[0] === 'slice') {\n\t\t// Given a blob of GeoJSON and some topojson/geojson-vt options, do the slicing.\n\t\tvar geojson = e.data[1];\n\t\toptions     = e.data[2];\n\n\t\tif (geojson.type && geojson.type === 'Topology') {\n\t\t\tfor (var layerName in geojson.objects) {\n\t\t\t\tslicers[layerName] = index(\n\t\t\t\t\tfeature(geojson, geojson.objects[layerName])\n\t\t\t\t, options);\n\t\t\t}\n\t\t} else {\n\t\t\tslicers[options.vectorTileLayerName] = index(geojson, options);\n\t\t}\n\n\t} else if (e.data[0] === 'get') {\n\t\t// Gets the vector tile for the given coordinates, sends it back as a message\n\t\tvar coords = e.data[1];\n\n\t\tvar tileLayers = {};\n\t\tfor (var layerName in slicers) {\n\t\t\tvar slicedTileLayer = slicers[layerName].getTile(coords.z, coords.x, coords.y);\n\n\t\t\tif (slicedTileLayer) {\n\t\t\t\tvar vectorTileLayer = {\n\t\t\t\t\tfeatures: [],\n\t\t\t\t\textent: options.extent,\n\t\t\t\t\tname: options.vectorTileLayerName,\n\t\t\t\t\tlength: slicedTileLayer.features.length\n\t\t\t\t};\n\n\t\t\t\tfor (var i in slicedTileLayer.features) {\n\t\t\t\t\tvar feat = {\n\t\t\t\t\t\tgeometry: slicedTileLayer.features[i].geometry,\n\t\t\t\t\t\tproperties: slicedTileLayer.features[i].tags,\n\t\t\t\t\t\ttype: slicedTileLayer.features[i].type\t// 1 = point, 2 = line, 3 = polygon\n\t\t\t\t\t};\n\t\t\t\t\tvectorTileLayer.features.push(feat);\n\t\t\t\t}\n\t\t\t\ttileLayers[layerName] = vectorTileLayer;\n\t\t\t}\n\t\t}\n\t\tpostMessage({ layers: tileLayers, coords: coords });\n\t}\n};\n//# sourceMappingURL=slicerWebWorker.js.worker.map\n", "text/plain; charset=us-ascii", !1);
        L.VectorGrid.Slicer = L.VectorGrid.extend({
            options: {
                vectorTileLayerName: "sliced",
                extent: 4096,
                maxZoom: 14
            },
            initialize: function(t, e) {
                L.VectorGrid.prototype.initialize.call(this, e);
                e = {};
                for (var n in this.options)
                    "rendererFactory" !== n && "vectorTileLayerStyles" !== n && "function" != typeof this.options[n] && (e[n] = this.options[n]);
                this._worker = new Worker(F),
                this._worker.postMessage(["slice", t, e])
            },
            _getVectorTilePromise: function(t) {
                var e = this
                  , n = new Promise(function(n) {
                    e._worker.addEventListener("message", function i(o) {
                        o.data.coords && o.data.coords.x === t.x && o.data.coords.y === t.y && o.data.coords.z === t.z && (n(o.data),
                        e._worker.removeEventListener("message", i))
                    })
                }
                );
                return this._worker.postMessage(["get", t]),
                n
            }
        }),
        L.vectorGrid.slicer = function(t, e) {
            return new L.VectorGrid.Slicer(t,e)
        }
        ,
        L.Canvas.Tile = L.Canvas.extend({
            initialize: function(t, e, n) {
                L.Canvas.prototype.initialize.call(this, n),
                this._tileCoord = t,
                this._size = e,
                this._initContainer(),
                this._container.setAttribute("width", this._size.x),
                this._container.setAttribute("height", this._size.y),
                this._layers = {},
                this._drawnLayers = {},
                this._drawing = !0,
                n.interactive && (this._container.style.pointerEvents = "auto")
            },
            getCoord: function() {
                return this._tileCoord
            },
            getContainer: function() {
                return this._container
            },
            getOffset: function() {
                return this._tileCoord.scaleBy(this._size).subtract(this._map.getPixelOrigin())
            },
            onAdd: L.Util.falseFn,
            addTo: function(t) {
                this._map = t
            },
            removeFrom: function(t) {
                delete this._map
            },
            _onClick: function(t) {
                var e, n, i = this._map.mouseEventToLayerPoint(t).subtract(this.getOffset());
                for (var o in this._layers)
                    (e = this._layers[o]).options.interactive && e._containsPoint(i) && !this._map._draggableMoved(e) && (n = e);
                n && (L.DomEvent.fakeStop(t),
                this._fireEvent([n], t))
            },
            _onMouseMove: function(t) {
                if (this._map && !this._map.dragging.moving() && !this._map._animatingZoom) {
                    var e = this._map.mouseEventToLayerPoint(t).subtract(this.getOffset());
                    this._handleMouseHover(t, e)
                }
            },
            _updateIcon: function(t) {
                if (this._drawing) {
                    var e = t.options.icon.options
                      , n = L.point(e.iconSize)
                      , i = e.iconAnchor || n && n.divideBy(2, !0)
                      , o = t._point.subtract(i)
                      , r = this._ctx
                      , s = t._getImage();
                    s.complete ? r.drawImage(s, o.x, o.y, n.x, n.y) : L.DomEvent.on(s, "load", function() {
                        r.drawImage(s, o.x, o.y, n.x, n.y)
                    }),
                    this._drawnLayers[t._leaflet_id] = t
                }
            }
        }),
        L.canvas.tile = function(t, e, n) {
            return new L.Canvas.Tile(t,e,n)
        }
    }()
}
, function(t, e, n) {
    (function(t) {
        !function(t) {
            t.color = {},
            t.color.make = function(e, n, i, o) {
                var r = {};
                return r.r = e || 0,
                r.g = n || 0,
                r.b = i || 0,
                r.a = null != o ? o : 1,
                r.add = function(t, e) {
                    for (var n = 0; n < t.length; ++n)
                        r[t.charAt(n)] += e;
                    return r.normalize()
                }
                ,
                r.scale = function(t, e) {
                    for (var n = 0; n < t.length; ++n)
                        r[t.charAt(n)] *= e;
                    return r.normalize()
                }
                ,
                r.toString = function() {
                    return r.a >= 1 ? "rgb(" + [r.r, r.g, r.b].join(",") + ")" : "rgba(" + [r.r, r.g, r.b, r.a].join(",") + ")"
                }
                ,
                r.normalize = function() {
                    function t(t, e, n) {
                        return e < t ? t : e > n ? n : e
                    }
                    return r.r = t(0, parseInt(r.r), 255),
                    r.g = t(0, parseInt(r.g), 255),
                    r.b = t(0, parseInt(r.b), 255),
                    r.a = t(0, r.a, 1),
                    r
                }
                ,
                r.clone = function() {
                    return t.color.make(r.r, r.b, r.g, r.a)
                }
                ,
                r.normalize()
            }
            ,
            t.color.extract = function(e, n) {
                var i;
                do {
                    if ("" != (i = e.css(n).toLowerCase()) && "transparent" != i)
                        break;
                    e = e.parent()
                } while (e.length && !t.nodeName(e.get(0), "body"));
                return "rgba(0, 0, 0, 0)" == i && (i = "transparent"),
                t.color.parse(i)
            }
            ,
            t.color.parse = function(n) {
                var i, o = t.color.make;
                if (i = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(n))
                    return o(parseInt(i[1], 10), parseInt(i[2], 10), parseInt(i[3], 10));
                if (i = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(n))
                    return o(parseInt(i[1], 10), parseInt(i[2], 10), parseInt(i[3], 10), parseFloat(i[4]));
                if (i = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(n))
                    return o(2.55 * parseFloat(i[1]), 2.55 * parseFloat(i[2]), 2.55 * parseFloat(i[3]));
                if (i = /rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(n))
                    return o(2.55 * parseFloat(i[1]), 2.55 * parseFloat(i[2]), 2.55 * parseFloat(i[3]), parseFloat(i[4]));
                if (i = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(n))
                    return o(parseInt(i[1], 16), parseInt(i[2], 16), parseInt(i[3], 16));
                if (i = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(n))
                    return o(parseInt(i[1] + i[1], 16), parseInt(i[2] + i[2], 16), parseInt(i[3] + i[3], 16));
                var r = t.trim(n).toLowerCase();
                return "transparent" == r ? o(255, 255, 255, 0) : o((i = e[r] || [0, 0, 0])[0], i[1], i[2])
            }
            ;
            var e = {
                aqua: [0, 255, 255],
                azure: [240, 255, 255],
                beige: [245, 245, 220],
                black: [0, 0, 0],
                blue: [0, 0, 255],
                brown: [165, 42, 42],
                cyan: [0, 255, 255],
                darkblue: [0, 0, 139],
                darkcyan: [0, 139, 139],
                darkgrey: [169, 169, 169],
                darkgreen: [0, 100, 0],
                darkkhaki: [189, 183, 107],
                darkmagenta: [139, 0, 139],
                darkolivegreen: [85, 107, 47],
                darkorange: [255, 140, 0],
                darkorchid: [153, 50, 204],
                darkred: [139, 0, 0],
                darksalmon: [233, 150, 122],
                darkviolet: [148, 0, 211],
                fuchsia: [255, 0, 255],
                gold: [255, 215, 0],
                green: [0, 128, 0],
                indigo: [75, 0, 130],
                khaki: [240, 230, 140],
                lightblue: [173, 216, 230],
                lightcyan: [224, 255, 255],
                lightgreen: [144, 238, 144],
                lightgrey: [211, 211, 211],
                lightpink: [255, 182, 193],
                lightyellow: [255, 255, 224],
                lime: [0, 255, 0],
                magenta: [255, 0, 255],
                maroon: [128, 0, 0],
                navy: [0, 0, 128],
                olive: [128, 128, 0],
                orange: [255, 165, 0],
                pink: [255, 192, 203],
                purple: [128, 0, 128],
                violet: [128, 0, 128],
                red: [255, 0, 0],
                silver: [192, 192, 192],
                white: [255, 255, 255],
                yellow: [255, 255, 0]
            }
        }(t),
        function(t) {
            var e = Object.prototype.hasOwnProperty;
            function n(e, n) {
                var i = n.children("." + e)[0];
                if (null == i && ((i = document.createElement("canvas")).className = e,
                t(i).css({
                    direction: "ltr",
                    position: "absolute",
                    left: 0,
                    top: 0
                }).appendTo(n),
                !i.getContext)) {
                    if (!window.G_vmlCanvasManager)
                        throw new Error("Canvas is not available. If you're using IE with a fall-back such as Excanvas, then there's either a mistake in your conditional include, or the page has no DOCTYPE and is rendering in Quirks Mode.");
                    i = window.G_vmlCanvasManager.initElement(i)
                }
                this.element = i;
                var o = this.context = i.getContext("2d")
                  , r = window.devicePixelRatio || 1
                  , s = o.webkitBackingStorePixelRatio || o.mozBackingStorePixelRatio || o.msBackingStorePixelRatio || o.oBackingStorePixelRatio || o.backingStorePixelRatio || 1;
                this.pixelRatio = r / s,
                this.resize(n.width(), n.height()),
                this.textContainer = null,
                this.text = {},
                this._textCache = {}
            }
            function i(e, i, o, r) {
                var s = []
                  , a = {
                    colors: ["#edc240", "#afd8f8", "#cb4b4b", "#4da74d", "#9440ed"],
                    legend: {
                        show: !0,
                        noColumns: 1,
                        labelFormatter: null,
                        labelBoxBorderColor: "#ccc",
                        container: null,
                        position: "ne",
                        margin: 5,
                        backgroundColor: null,
                        backgroundOpacity: .85,
                        sorted: null
                    },
                    xaxis: {
                        show: null,
                        position: "bottom",
                        mode: null,
                        font: null,
                        color: null,
                        tickColor: null,
                        transform: null,
                        inverseTransform: null,
                        min: null,
                        max: null,
                        autoscaleMargin: null,
                        ticks: null,
                        tickFormatter: null,
                        labelWidth: null,
                        labelHeight: null,
                        reserveSpace: null,
                        tickLength: null,
                        alignTicksWithAxis: null,
                        tickDecimals: null,
                        tickSize: null,
                        minTickSize: null
                    },
                    yaxis: {
                        autoscaleMargin: .02,
                        position: "left"
                    },
                    xaxes: [],
                    yaxes: [],
                    series: {
                        points: {
                            show: !1,
                            radius: 3,
                            lineWidth: 2,
                            fill: !0,
                            fillColor: "#ffffff",
                            symbol: "circle"
                        },
                        lines: {
                            lineWidth: 2,
                            fill: !1,
                            fillColor: null,
                            steps: !1
                        },
                        bars: {
                            show: !1,
                            lineWidth: 2,
                            barWidth: 1,
                            fill: !0,
                            fillColor: null,
                            align: "left",
                            horizontal: !1,
                            zero: !0
                        },
                        shadowSize: 3,
                        highlightColor: null
                    },
                    grid: {
                        show: !0,
                        aboveData: !1,
                        color: "#545454",
                        backgroundColor: null,
                        borderColor: null,
                        tickColor: null,
                        margin: 0,
                        labelMargin: 5,
                        axisMargin: 8,
                        borderWidth: 2,
                        minBorderMargin: null,
                        markings: null,
                        markingsColor: "#f4f4f4",
                        markingsLineWidth: 2,
                        clickable: !1,
                        hoverable: !1,
                        autoHighlight: !0,
                        mouseActiveRadius: 10
                    },
                    interaction: {
                        redrawOverlayInterval: 1e3 / 60
                    },
                    hooks: {}
                }
                  , l = null
                  , h = null
                  , u = null
                  , c = null
                  , f = null
                  , d = []
                  , p = []
                  , m = {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
                  , g = 0
                  , v = 0
                  , _ = {
                    processOptions: [],
                    processRawData: [],
                    processDatapoints: [],
                    processOffset: [],
                    drawBackground: [],
                    drawSeries: [],
                    draw: [],
                    bindEvents: [],
                    drawOverlay: [],
                    shutdown: []
                }
                  , y = this;
                function x(t, e) {
                    e = [y].concat(e);
                    for (var n = 0; n < t.length; ++n)
                        t[n].apply(this, e)
                }
                function b(e) {
                    s = function(e) {
                        for (var n = [], i = 0; i < e.length; ++i) {
                            var o = t.extend(!0, {}, a.series);
                            null != e[i].data ? (o.data = e[i].data,
                            delete e[i].data,
                            t.extend(!0, o, e[i]),
                            e[i].data = o.data) : o.data = e[i],
                            n.push(o)
                        }
                        return n
                    }(e),
                    function() {
                        var e, n = s.length, i = -1;
                        for (e = 0; e < s.length; ++e) {
                            var o = s[e].color;
                            null != o && (n--,
                            "number" == typeof o && o > i && (i = o))
                        }
                        n <= i && (n = i + 1);
                        var r, l = [], h = a.colors, u = h.length, c = 0;
                        for (e = 0; e < n; e++)
                            r = t.color.parse(h[e % u] || "#666"),
                            e % u == 0 && e && (c = c >= 0 ? c < .5 ? -c - .2 : 0 : -c),
                            l[e] = r.scale("rgb", 1 + c);
                        var f, m = 0;
                        for (e = 0; e < s.length; ++e) {
                            if (null == (f = s[e]).color ? (f.color = l[m].toString(),
                            ++m) : "number" == typeof f.color && (f.color = l[f.color].toString()),
                            null == f.lines.show) {
                                var g, v = !0;
                                for (g in f)
                                    if (f[g] && f[g].show) {
                                        v = !1;
                                        break
                                    }
                                v && (f.lines.show = !0)
                            }
                            null == f.lines.zero && (f.lines.zero = !!f.lines.fill),
                            f.xaxis = L(d, w(f, "x")),
                            f.yaxis = L(p, w(f, "y"))
                        }
                    }(),
                    function() {
                        var e, n, i, o, r, a, l, h, u, c, f, d, p = Number.POSITIVE_INFINITY, m = Number.NEGATIVE_INFINITY, g = Number.MAX_VALUE;
                        function v(t, e, n) {
                            e < t.datamin && e != -g && (t.datamin = e),
                            n > t.datamax && n != g && (t.datamax = n)
                        }
                        for (t.each(T(), function(t, e) {
                            e.datamin = p,
                            e.datamax = m,
                            e.used = !1
                        }),
                        e = 0; e < s.length; ++e)
                            (r = s[e]).datapoints = {
                                points: []
                            },
                            x(_.processRawData, [r, r.data, r.datapoints]);
                        for (e = 0; e < s.length; ++e) {
                            if (r = s[e],
                            f = r.data,
                            !(d = r.datapoints.format)) {
                                if ((d = []).push({
                                    x: !0,
                                    number: !0,
                                    required: !0
                                }),
                                d.push({
                                    y: !0,
                                    number: !0,
                                    required: !0
                                }),
                                r.bars.show || r.lines.show && r.lines.fill) {
                                    var y = !!(r.bars.show && r.bars.zero || r.lines.show && r.lines.zero);
                                    d.push({
                                        y: !0,
                                        number: !0,
                                        required: !1,
                                        defaultValue: 0,
                                        autoscale: y
                                    }),
                                    r.bars.horizontal && (delete d[d.length - 1].y,
                                    d[d.length - 1].x = !0)
                                }
                                r.datapoints.format = d
                            }
                            if (null == r.datapoints.pointsize) {
                                r.datapoints.pointsize = d.length,
                                l = r.datapoints.pointsize,
                                a = r.datapoints.points;
                                var b = r.lines.show && r.lines.steps;
                                for (r.xaxis.used = r.yaxis.used = !0,
                                n = i = 0; n < f.length; ++n,
                                i += l) {
                                    var w = null == (c = f[n]);
                                    if (!w)
                                        for (o = 0; o < l; ++o)
                                            h = c[o],
                                            (u = d[o]) && (u.number && null != h && (h = +h,
                                            isNaN(h) ? h = null : h == 1 / 0 ? h = g : h == -1 / 0 && (h = -g)),
                                            null == h && (u.required && (w = !0),
                                            null != u.defaultValue && (h = u.defaultValue))),
                                            a[i + o] = h;
                                    if (w)
                                        for (o = 0; o < l; ++o)
                                            null != (h = a[i + o]) && !1 !== (u = d[o]).autoscale && (u.x && v(r.xaxis, h, h),
                                            u.y && v(r.yaxis, h, h)),
                                            a[i + o] = null;
                                    else if (b && i > 0 && null != a[i - l] && a[i - l] != a[i] && a[i - l + 1] != a[i + 1]) {
                                        for (o = 0; o < l; ++o)
                                            a[i + l + o] = a[i + o];
                                        a[i + 1] = a[i - l + 1],
                                        i += l
                                    }
                                }
                            }
                        }
                        for (e = 0; e < s.length; ++e)
                            r = s[e],
                            x(_.processDatapoints, [r, r.datapoints]);
                        for (e = 0; e < s.length; ++e) {
                            r = s[e],
                            a = r.datapoints.points,
                            l = r.datapoints.pointsize,
                            d = r.datapoints.format;
                            var k = p
                              , L = p
                              , P = m
                              , S = m;
                            for (n = 0; n < a.length; n += l)
                                if (null != a[n])
                                    for (o = 0; o < l; ++o)
                                        h = a[n + o],
                                        (u = d[o]) && !1 !== u.autoscale && h != g && h != -g && (u.x && (h < k && (k = h),
                                        h > P && (P = h)),
                                        u.y && (h < L && (L = h),
                                        h > S && (S = h)));
                            if (r.bars.show) {
                                var M;
                                switch (r.bars.align) {
                                case "left":
                                    M = 0;
                                    break;
                                case "right":
                                    M = -r.bars.barWidth;
                                    break;
                                default:
                                    M = -r.bars.barWidth / 2
                                }
                                r.bars.horizontal ? (L += M,
                                S += M + r.bars.barWidth) : (k += M,
                                P += M + r.bars.barWidth)
                            }
                            v(r.xaxis, k, P),
                            v(r.yaxis, L, S)
                        }
                        t.each(T(), function(t, e) {
                            e.datamin == p && (e.datamin = null),
                            e.datamax == m && (e.datamax = null)
                        })
                    }()
                }
                function w(t, e) {
                    var n = t[e + "axis"];
                    return "object" == typeof n && (n = n.n),
                    "number" != typeof n && (n = 1),
                    n
                }
                function T() {
                    return t.grep(d.concat(p), function(t) {
                        return t
                    })
                }
                function k(t) {
                    var e, n, i = {};
                    for (e = 0; e < d.length; ++e)
                        (n = d[e]) && n.used && (i["x" + n.n] = n.c2p(t.left));
                    for (e = 0; e < p.length; ++e)
                        (n = p[e]) && n.used && (i["y" + n.n] = n.c2p(t.top));
                    return void 0 !== i.x1 && (i.x = i.x1),
                    void 0 !== i.y1 && (i.y = i.y1),
                    i
                }
                function L(e, n) {
                    return e[n - 1] || (e[n - 1] = {
                        n: n,
                        direction: e == d ? "x" : "y",
                        options: t.extend(!0, {}, e == d ? a.xaxis : a.yaxis)
                    }),
                    e[n - 1]
                }
                function P() {
                    N && clearTimeout(N),
                    u.unbind("mousemove", D),
                    u.unbind("mouseleave", F),
                    u.unbind("click", Z),
                    x(_.shutdown, [u])
                }
                function S(e) {
                    var n = e.labelWidth
                      , i = e.labelHeight
                      , o = e.options.position
                      , r = "x" === e.direction
                      , s = e.options.tickLength
                      , h = a.grid.axisMargin
                      , u = a.grid.labelMargin
                      , c = !0
                      , f = !0
                      , g = !0
                      , v = !1;
                    t.each(r ? d : p, function(t, n) {
                        n && (n.show || n.reserveSpace) && (n === e ? v = !0 : n.options.position === o && (v ? f = !1 : c = !1),
                        v || (g = !1))
                    }),
                    f && (h = 0),
                    null == s && (s = g ? "full" : 5),
                    isNaN(+s) || (u += +s),
                    r ? (i += u,
                    "bottom" == o ? (m.bottom += i + h,
                    e.box = {
                        top: l.height - m.bottom,
                        height: i
                    }) : (e.box = {
                        top: m.top + h,
                        height: i
                    },
                    m.top += i + h)) : (n += u,
                    "left" == o ? (e.box = {
                        left: m.left + h,
                        width: n
                    },
                    m.left += n + h) : (m.right += n + h,
                    e.box = {
                        left: l.width - m.right,
                        width: n
                    })),
                    e.position = o,
                    e.tickLength = s,
                    e.box.padding = u,
                    e.innermost = c
                }
                function M() {
                    var n, i = T(), o = a.grid.show;
                    for (var r in m) {
                        var h = a.grid.margin || 0;
                        m[r] = "number" == typeof h ? h : h[r] || 0
                    }
                    for (var r in x(_.processOffset, [m]),
                    m)
                        "object" == typeof a.grid.borderWidth ? m[r] += o ? a.grid.borderWidth[r] : 0 : m[r] += o ? a.grid.borderWidth : 0;
                    if (t.each(i, function(t, e) {
                        var n = e.options;
                        e.show = null == n.show ? e.used : n.show,
                        e.reserveSpace = null == n.reserveSpace ? e.show : n.reserveSpace,
                        function(t) {
                            var e = t.options
                              , n = +(null != e.min ? e.min : t.datamin)
                              , i = +(null != e.max ? e.max : t.datamax)
                              , o = i - n;
                            if (0 == o) {
                                var r = 0 == i ? 1 : .01;
                                null == e.min && (n -= r),
                                null != e.max && null == e.min || (i += r)
                            } else {
                                var s = e.autoscaleMargin;
                                null != s && (null == e.min && (n -= o * s) < 0 && null != t.datamin && t.datamin >= 0 && (n = 0),
                                null == e.max && (i += o * s) > 0 && null != t.datamax && t.datamax <= 0 && (i = 0))
                            }
                            t.min = n,
                            t.max = i
                        }(e)
                    }),
                    o) {
                        var u = t.grep(i, function(t) {
                            return t.show || t.reserveSpace
                        });
                        for (t.each(u, function(e, n) {
                            !function(e) {
                                var n, i = e.options;
                                n = "number" == typeof i.ticks && i.ticks > 0 ? i.ticks : .3 * Math.sqrt("x" == e.direction ? l.width : l.height);
                                var o = (e.max - e.min) / n
                                  , r = -Math.floor(Math.log(o) / Math.LN10)
                                  , s = i.tickDecimals;
                                null != s && r > s && (r = s);
                                var a, h = Math.pow(10, -r), u = o / h;
                                u < 1.5 ? a = 1 : u < 3 ? (a = 2,
                                u > 2.25 && (null == s || r + 1 <= s) && (a = 2.5,
                                ++r)) : a = u < 7.5 ? 5 : 10;
                                a *= h,
                                null != i.minTickSize && a < i.minTickSize && (a = i.minTickSize);
                                if (e.delta = o,
                                e.tickDecimals = Math.max(0, null != s ? s : r),
                                e.tickSize = i.tickSize || a,
                                "time" == i.mode && !e.tickGenerator)
                                    throw new Error("Time mode requires the flot.time plugin.");
                                e.tickGenerator || (e.tickGenerator = function(t) {
                                    var e, n, i, o = [], r = (n = t.min,
                                    (i = t.tickSize) * Math.floor(n / i)), s = 0, a = Number.NaN;
                                    do {
                                        e = a,
                                        a = r + s * t.tickSize,
                                        o.push(a),
                                        ++s
                                    } while (a < t.max && a != e);
                                    return o
                                }
                                ,
                                e.tickFormatter = function(t, e) {
                                    var n = e.tickDecimals ? Math.pow(10, e.tickDecimals) : 1
                                      , i = "" + Math.round(t * n) / n;
                                    if (null != e.tickDecimals) {
                                        var o = i.indexOf(".")
                                          , r = -1 == o ? 0 : i.length - o - 1;
                                        if (r < e.tickDecimals)
                                            return (r ? i : i + ".") + ("" + n).substr(1, e.tickDecimals - r)
                                    }
                                    return i
                                }
                                );
                                t.isFunction(i.tickFormatter) && (e.tickFormatter = function(t, e) {
                                    return "" + i.tickFormatter(t, e)
                                }
                                );
                                if (null != i.alignTicksWithAxis) {
                                    var c = ("x" == e.direction ? d : p)[i.alignTicksWithAxis - 1];
                                    if (c && c.used && c != e) {
                                        var f = e.tickGenerator(e);
                                        if (f.length > 0 && (null == i.min && (e.min = Math.min(e.min, f[0])),
                                        null == i.max && f.length > 1 && (e.max = Math.max(e.max, f[f.length - 1]))),
                                        e.tickGenerator = function(t) {
                                            var e, n, i = [];
                                            for (n = 0; n < c.ticks.length; ++n)
                                                e = (c.ticks[n].v - c.min) / (c.max - c.min),
                                                e = t.min + e * (t.max - t.min),
                                                i.push(e);
                                            return i
                                        }
                                        ,
                                        !e.mode && null == i.tickDecimals) {
                                            var m = Math.max(0, 1 - Math.floor(Math.log(e.delta) / Math.LN10))
                                              , g = e.tickGenerator(e);
                                            g.length > 1 && /\..*0$/.test((g[1] - g[0]).toFixed(m)) || (e.tickDecimals = m)
                                        }
                                    }
                                }
                            }(n),
                            function(e) {
                                var n, i, o = e.options.ticks, r = [];
                                null == o || "number" == typeof o && o > 0 ? r = e.tickGenerator(e) : o && (r = t.isFunction(o) ? o(e) : o);
                                for (e.ticks = [],
                                n = 0; n < r.length; ++n) {
                                    var s = null
                                      , a = r[n];
                                    "object" == typeof a ? (i = +a[0],
                                    a.length > 1 && (s = a[1])) : i = +a,
                                    null == s && (s = e.tickFormatter(i, e)),
                                    isNaN(i) || e.ticks.push({
                                        v: i,
                                        label: s
                                    })
                                }
                            }(n),
                            function(t, e) {
                                t.options.autoscaleMargin && e.length > 0 && (null == t.options.min && (t.min = Math.min(t.min, e[0].v)),
                                null == t.options.max && e.length > 1 && (t.max = Math.max(t.max, e[e.length - 1].v)))
                            }(n, n.ticks),
                            function(t) {
                                for (var e = t.options, n = t.ticks || [], i = e.labelWidth || 0, o = e.labelHeight || 0, r = i || ("x" == t.direction ? Math.floor(l.width / (n.length || 1)) : null), s = t.direction + "Axis " + t.direction + t.n + "Axis", a = "flot-" + t.direction + "-axis flot-" + t.direction + t.n + "-axis " + s, h = e.font || "flot-tick-label tickLabel", u = 0; u < n.length; ++u) {
                                    var c = n[u];
                                    if (c.label) {
                                        var f = l.getTextInfo(a, c.label, h, null, r);
                                        i = Math.max(i, f.width),
                                        o = Math.max(o, f.height)
                                    }
                                }
                                t.labelWidth = e.labelWidth || i,
                                t.labelHeight = e.labelHeight || o
                            }(n)
                        }),
                        n = u.length - 1; n >= 0; --n)
                            S(u[n]);
                        !function() {
                            var e, n = a.grid.minBorderMargin;
                            if (null == n)
                                for (n = 0,
                                e = 0; e < s.length; ++e)
                                    n = Math.max(n, 2 * (s[e].points.radius + s[e].points.lineWidth / 2));
                            var i = {
                                left: n,
                                right: n,
                                top: n,
                                bottom: n
                            };
                            t.each(T(), function(t, e) {
                                e.reserveSpace && e.ticks && e.ticks.length && ("x" === e.direction ? (i.left = Math.max(i.left, e.labelWidth / 2),
                                i.right = Math.max(i.right, e.labelWidth / 2)) : (i.bottom = Math.max(i.bottom, e.labelHeight / 2),
                                i.top = Math.max(i.top, e.labelHeight / 2)))
                            }),
                            m.left = Math.ceil(Math.max(i.left, m.left)),
                            m.right = Math.ceil(Math.max(i.right, m.right)),
                            m.top = Math.ceil(Math.max(i.top, m.top)),
                            m.bottom = Math.ceil(Math.max(i.bottom, m.bottom))
                        }(),
                        t.each(u, function(t, e) {
                            !function(t) {
                                "x" == t.direction ? (t.box.left = m.left - t.labelWidth / 2,
                                t.box.width = l.width - m.left - m.right + t.labelWidth) : (t.box.top = m.top - t.labelHeight / 2,
                                t.box.height = l.height - m.bottom - m.top + t.labelHeight)
                            }(e)
                        })
                    }
                    g = l.width - m.left - m.right,
                    v = l.height - m.bottom - m.top,
                    t.each(i, function(t, e) {
                        !function(t) {
                            function e(t) {
                                return t
                            }
                            var n, i, o = t.options.transform || e, r = t.options.inverseTransform;
                            "x" == t.direction ? (n = t.scale = g / Math.abs(o(t.max) - o(t.min)),
                            i = Math.min(o(t.max), o(t.min))) : (n = -(n = t.scale = v / Math.abs(o(t.max) - o(t.min))),
                            i = Math.max(o(t.max), o(t.min))),
                            t.p2c = o == e ? function(t) {
                                return (t - i) * n
                            }
                            : function(t) {
                                return (o(t) - i) * n
                            }
                            ,
                            t.c2p = r ? function(t) {
                                return r(i + t / n)
                            }
                            : function(t) {
                                return i + t / n
                            }
                        }(e)
                    }),
                    o && t.each(T(), function(t, e) {
                        var n, i, o, r, s, a = e.box, h = e.direction + "Axis " + e.direction + e.n + "Axis", u = "flot-" + e.direction + "-axis flot-" + e.direction + e.n + "-axis " + h, c = e.options.font || "flot-tick-label tickLabel";
                        if (l.removeText(u),
                        e.show && 0 != e.ticks.length)
                            for (var f = 0; f < e.ticks.length; ++f)
                                !(n = e.ticks[f]).label || n.v < e.min || n.v > e.max || ("x" == e.direction ? (r = "center",
                                i = m.left + e.p2c(n.v),
                                "bottom" == e.position ? o = a.top + a.padding : (o = a.top + a.height - a.padding,
                                s = "bottom")) : (s = "middle",
                                o = m.top + e.p2c(n.v),
                                "left" == e.position ? (i = a.left + a.width - a.padding,
                                r = "right") : i = a.left + a.padding),
                                l.addText(u, i, o, n.label, c, null, null, r, s))
                    }),
                    function() {
                        null != a.legend.container ? t(a.legend.container).html("") : e.find(".legend").remove();
                        if (!a.legend.show)
                            return;
                        for (var n, i, o = [], r = [], l = !1, h = a.legend.labelFormatter, u = 0; u < s.length; ++u)
                            (n = s[u]).label && (i = h ? h(n.label, n) : n.label) && r.push({
                                label: i,
                                color: n.color
                            });
                        if (a.legend.sorted)
                            if (t.isFunction(a.legend.sorted))
                                r.sort(a.legend.sorted);
                            else if ("reverse" == a.legend.sorted)
                                r.reverse();
                            else {
                                var c = "descending" != a.legend.sorted;
                                r.sort(function(t, e) {
                                    return t.label == e.label ? 0 : t.label < e.label != c ? 1 : -1
                                })
                            }
                        for (var u = 0; u < r.length; ++u) {
                            var f = r[u];
                            u % a.legend.noColumns == 0 && (l && o.push("</tr>"),
                            o.push("<tr>"),
                            l = !0),
                            o.push('<td class="legendColorBox"><div style="border:1px solid ' + a.legend.labelBoxBorderColor + ';padding:1px"><div style="width:4px;height:0;border:5px solid ' + f.color + ';overflow:hidden"></div></div></td><td class="legendLabel">' + f.label + "</td>")
                        }
                        l && o.push("</tr>");
                        if (0 == o.length)
                            return;
                        var d = '<table style="font-size:smaller;color:' + a.grid.color + '">' + o.join("") + "</table>";
                        if (null != a.legend.container)
                            t(a.legend.container).html(d);
                        else {
                            var p = ""
                              , g = a.legend.position
                              , v = a.legend.margin;
                            null == v[0] && (v = [v, v]),
                            "n" == g.charAt(0) ? p += "top:" + (v[1] + m.top) + "px;" : "s" == g.charAt(0) && (p += "bottom:" + (v[1] + m.bottom) + "px;"),
                            "e" == g.charAt(1) ? p += "right:" + (v[0] + m.right) + "px;" : "w" == g.charAt(1) && (p += "left:" + (v[0] + m.left) + "px;");
                            var _ = t('<div class="legend">' + d.replace('style="', 'style="position:absolute;' + p + ";") + "</div>").appendTo(e);
                            if (0 != a.legend.backgroundOpacity) {
                                var y = a.legend.backgroundColor;
                                null == y && ((y = (y = a.grid.backgroundColor) && "string" == typeof y ? t.color.parse(y) : t.color.extract(_, "background-color")).a = 1,
                                y = y.toString());
                                var x = _.children();
                                t('<div style="position:absolute;width:' + x.width() + "px;height:" + x.height() + "px;" + p + "background-color:" + y + ';"> </div>').prependTo(_).css("opacity", a.legend.backgroundOpacity)
                            }
                        }
                    }()
                }
                function C() {
                    l.clear(),
                    x(_.drawBackground, [c]);
                    var t = a.grid;
                    t.show && t.backgroundColor && (c.save(),
                    c.translate(m.left, m.top),
                    c.fillStyle = $(a.grid.backgroundColor, v, 0, "rgba(255, 255, 255, 0)"),
                    c.fillRect(0, 0, g, v),
                    c.restore()),
                    t.show && !t.aboveData && E();
                    for (var e = 0; e < s.length; ++e)
                        x(_.drawSeries, [c, s[e]]),
                        A(s[e]);
                    x(_.draw, [c]),
                    t.show && t.aboveData && E(),
                    l.render(),
                    j()
                }
                function z(t, e) {
                    for (var n, i, o, r, s = T(), a = 0; a < s.length; ++a)
                        if ((n = s[a]).direction == e && (t[r = e + n.n + "axis"] || 1 != n.n || (r = e + "axis"),
                        t[r])) {
                            i = t[r].from,
                            o = t[r].to;
                            break
                        }
                    if (t[r] || (n = "x" == e ? d[0] : p[0],
                    i = t[e + "1"],
                    o = t[e + "2"]),
                    null != i && null != o && i > o) {
                        var l = i;
                        i = o,
                        o = l
                    }
                    return {
                        from: i,
                        to: o,
                        axis: n
                    }
                }
                function E() {
                    var e, n, i, o;
                    c.save(),
                    c.translate(m.left, m.top);
                    var r = a.grid.markings;
                    if (r)
                        for (t.isFunction(r) && ((n = y.getAxes()).xmin = n.xaxis.min,
                        n.xmax = n.xaxis.max,
                        n.ymin = n.yaxis.min,
                        n.ymax = n.yaxis.max,
                        r = r(n)),
                        e = 0; e < r.length; ++e) {
                            var s = r[e]
                              , l = z(s, "x")
                              , h = z(s, "y");
                            if (null == l.from && (l.from = l.axis.min),
                            null == l.to && (l.to = l.axis.max),
                            null == h.from && (h.from = h.axis.min),
                            null == h.to && (h.to = h.axis.max),
                            !(l.to < l.axis.min || l.from > l.axis.max || h.to < h.axis.min || h.from > h.axis.max)) {
                                l.from = Math.max(l.from, l.axis.min),
                                l.to = Math.min(l.to, l.axis.max),
                                h.from = Math.max(h.from, h.axis.min),
                                h.to = Math.min(h.to, h.axis.max);
                                var u = l.from === l.to
                                  , f = h.from === h.to;
                                if (!u || !f)
                                    if (l.from = Math.floor(l.axis.p2c(l.from)),
                                    l.to = Math.floor(l.axis.p2c(l.to)),
                                    h.from = Math.floor(h.axis.p2c(h.from)),
                                    h.to = Math.floor(h.axis.p2c(h.to)),
                                    u || f) {
                                        var d = s.lineWidth || a.grid.markingsLineWidth
                                          , p = d % 2 ? .5 : 0;
                                        c.beginPath(),
                                        c.strokeStyle = s.color || a.grid.markingsColor,
                                        c.lineWidth = d,
                                        u ? (c.moveTo(l.to + p, h.from),
                                        c.lineTo(l.to + p, h.to)) : (c.moveTo(l.from, h.to + p),
                                        c.lineTo(l.to, h.to + p)),
                                        c.stroke()
                                    } else
                                        c.fillStyle = s.color || a.grid.markingsColor,
                                        c.fillRect(l.from, h.to, l.to - l.from, h.from - h.to)
                            }
                        }
                    n = T(),
                    i = a.grid.borderWidth;
                    for (var _ = 0; _ < n.length; ++_) {
                        var x, b, w, k, L = n[_], P = L.box, S = L.tickLength;
                        if (L.show && 0 != L.ticks.length) {
                            for (c.lineWidth = 1,
                            "x" == L.direction ? (x = 0,
                            b = "full" == S ? "top" == L.position ? 0 : v : P.top - m.top + ("top" == L.position ? P.height : 0)) : (b = 0,
                            x = "full" == S ? "left" == L.position ? 0 : g : P.left - m.left + ("left" == L.position ? P.width : 0)),
                            L.innermost || (c.strokeStyle = L.options.color,
                            c.beginPath(),
                            w = k = 0,
                            "x" == L.direction ? w = g + 1 : k = v + 1,
                            1 == c.lineWidth && ("x" == L.direction ? b = Math.floor(b) + .5 : x = Math.floor(x) + .5),
                            c.moveTo(x, b),
                            c.lineTo(x + w, b + k),
                            c.stroke()),
                            c.strokeStyle = L.options.tickColor,
                            c.beginPath(),
                            e = 0; e < L.ticks.length; ++e) {
                                var M = L.ticks[e].v;
                                w = k = 0,
                                isNaN(M) || M < L.min || M > L.max || "full" == S && ("object" == typeof i && i[L.position] > 0 || i > 0) && (M == L.min || M == L.max) || ("x" == L.direction ? (x = L.p2c(M),
                                k = "full" == S ? -v : S,
                                "top" == L.position && (k = -k)) : (b = L.p2c(M),
                                w = "full" == S ? -g : S,
                                "left" == L.position && (w = -w)),
                                1 == c.lineWidth && ("x" == L.direction ? x = Math.floor(x) + .5 : b = Math.floor(b) + .5),
                                c.moveTo(x, b),
                                c.lineTo(x + w, b + k))
                            }
                            c.stroke()
                        }
                    }
                    i && (o = a.grid.borderColor,
                    "object" == typeof i || "object" == typeof o ? ("object" != typeof i && (i = {
                        top: i,
                        right: i,
                        bottom: i,
                        left: i
                    }),
                    "object" != typeof o && (o = {
                        top: o,
                        right: o,
                        bottom: o,
                        left: o
                    }),
                    i.top > 0 && (c.strokeStyle = o.top,
                    c.lineWidth = i.top,
                    c.beginPath(),
                    c.moveTo(0 - i.left, 0 - i.top / 2),
                    c.lineTo(g, 0 - i.top / 2),
                    c.stroke()),
                    i.right > 0 && (c.strokeStyle = o.right,
                    c.lineWidth = i.right,
                    c.beginPath(),
                    c.moveTo(g + i.right / 2, 0 - i.top),
                    c.lineTo(g + i.right / 2, v),
                    c.stroke()),
                    i.bottom > 0 && (c.strokeStyle = o.bottom,
                    c.lineWidth = i.bottom,
                    c.beginPath(),
                    c.moveTo(g + i.right, v + i.bottom / 2),
                    c.lineTo(0, v + i.bottom / 2),
                    c.stroke()),
                    i.left > 0 && (c.strokeStyle = o.left,
                    c.lineWidth = i.left,
                    c.beginPath(),
                    c.moveTo(0 - i.left / 2, v + i.bottom),
                    c.lineTo(0 - i.left / 2, 0),
                    c.stroke())) : (c.lineWidth = i,
                    c.strokeStyle = a.grid.borderColor,
                    c.strokeRect(-i / 2, -i / 2, g + i, v + i))),
                    c.restore()
                }
                function A(t) {
                    t.lines.show && function(t) {
                        function e(t, e, n, i, o) {
                            var r = t.points
                              , s = t.pointsize
                              , a = null
                              , l = null;
                            c.beginPath();
                            for (var h = s; h < r.length; h += s) {
                                var u = r[h - s]
                                  , f = r[h - s + 1]
                                  , d = r[h]
                                  , p = r[h + 1];
                                if (null != u && null != d) {
                                    if (f <= p && f < o.min) {
                                        if (p < o.min)
                                            continue;
                                        u = (o.min - f) / (p - f) * (d - u) + u,
                                        f = o.min
                                    } else if (p <= f && p < o.min) {
                                        if (f < o.min)
                                            continue;
                                        d = (o.min - f) / (p - f) * (d - u) + u,
                                        p = o.min
                                    }
                                    if (f >= p && f > o.max) {
                                        if (p > o.max)
                                            continue;
                                        u = (o.max - f) / (p - f) * (d - u) + u,
                                        f = o.max
                                    } else if (p >= f && p > o.max) {
                                        if (f > o.max)
                                            continue;
                                        d = (o.max - f) / (p - f) * (d - u) + u,
                                        p = o.max
                                    }
                                    if (u <= d && u < i.min) {
                                        if (d < i.min)
                                            continue;
                                        f = (i.min - u) / (d - u) * (p - f) + f,
                                        u = i.min
                                    } else if (d <= u && d < i.min) {
                                        if (u < i.min)
                                            continue;
                                        p = (i.min - u) / (d - u) * (p - f) + f,
                                        d = i.min
                                    }
                                    if (u >= d && u > i.max) {
                                        if (d > i.max)
                                            continue;
                                        f = (i.max - u) / (d - u) * (p - f) + f,
                                        u = i.max
                                    } else if (d >= u && d > i.max) {
                                        if (u > i.max)
                                            continue;
                                        p = (i.max - u) / (d - u) * (p - f) + f,
                                        d = i.max
                                    }
                                    u == a && f == l || c.moveTo(i.p2c(u) + e, o.p2c(f) + n),
                                    a = d,
                                    l = p,
                                    c.lineTo(i.p2c(d) + e, o.p2c(p) + n)
                                }
                            }
                            c.stroke()
                        }
                        c.save(),
                        c.translate(m.left, m.top),
                        c.lineJoin = "round";
                        var n = t.lines.lineWidth
                          , i = t.shadowSize;
                        if (n > 0 && i > 0) {
                            c.lineWidth = i,
                            c.strokeStyle = "rgba(0,0,0,0.1)";
                            var o = Math.PI / 18;
                            e(t.datapoints, Math.sin(o) * (n / 2 + i / 2), Math.cos(o) * (n / 2 + i / 2), t.xaxis, t.yaxis),
                            c.lineWidth = i / 2,
                            e(t.datapoints, Math.sin(o) * (n / 2 + i / 4), Math.cos(o) * (n / 2 + i / 4), t.xaxis, t.yaxis)
                        }
                        c.lineWidth = n,
                        c.strokeStyle = t.color;
                        var r = O(t.lines, t.color, 0, v);
                        r && (c.fillStyle = r,
                        function(t, e, n) {
                            var i = t.points
                              , o = t.pointsize
                              , r = Math.min(Math.max(0, n.min), n.max)
                              , s = 0
                              , a = !1
                              , l = 1
                              , h = 0
                              , u = 0;
                            for (; !(o > 0 && s > i.length + o); ) {
                                var f = i[(s += o) - o]
                                  , d = i[s - o + l]
                                  , p = i[s]
                                  , m = i[s + l];
                                if (a) {
                                    if (o > 0 && null != f && null == p) {
                                        u = s,
                                        o = -o,
                                        l = 2;
                                        continue
                                    }
                                    if (o < 0 && s == h + o) {
                                        c.fill(),
                                        a = !1,
                                        l = 1,
                                        s = h = u + (o = -o);
                                        continue
                                    }
                                }
                                if (null != f && null != p) {
                                    if (f <= p && f < e.min) {
                                        if (p < e.min)
                                            continue;
                                        d = (e.min - f) / (p - f) * (m - d) + d,
                                        f = e.min
                                    } else if (p <= f && p < e.min) {
                                        if (f < e.min)
                                            continue;
                                        m = (e.min - f) / (p - f) * (m - d) + d,
                                        p = e.min
                                    }
                                    if (f >= p && f > e.max) {
                                        if (p > e.max)
                                            continue;
                                        d = (e.max - f) / (p - f) * (m - d) + d,
                                        f = e.max
                                    } else if (p >= f && p > e.max) {
                                        if (f > e.max)
                                            continue;
                                        m = (e.max - f) / (p - f) * (m - d) + d,
                                        p = e.max
                                    }
                                    if (a || (c.beginPath(),
                                    c.moveTo(e.p2c(f), n.p2c(r)),
                                    a = !0),
                                    d >= n.max && m >= n.max)
                                        c.lineTo(e.p2c(f), n.p2c(n.max)),
                                        c.lineTo(e.p2c(p), n.p2c(n.max));
                                    else if (d <= n.min && m <= n.min)
                                        c.lineTo(e.p2c(f), n.p2c(n.min)),
                                        c.lineTo(e.p2c(p), n.p2c(n.min));
                                    else {
                                        var g = f
                                          , v = p;
                                        d <= m && d < n.min && m >= n.min ? (f = (n.min - d) / (m - d) * (p - f) + f,
                                        d = n.min) : m <= d && m < n.min && d >= n.min && (p = (n.min - d) / (m - d) * (p - f) + f,
                                        m = n.min),
                                        d >= m && d > n.max && m <= n.max ? (f = (n.max - d) / (m - d) * (p - f) + f,
                                        d = n.max) : m >= d && m > n.max && d <= n.max && (p = (n.max - d) / (m - d) * (p - f) + f,
                                        m = n.max),
                                        f != g && c.lineTo(e.p2c(g), n.p2c(d)),
                                        c.lineTo(e.p2c(f), n.p2c(d)),
                                        c.lineTo(e.p2c(p), n.p2c(m)),
                                        p != v && (c.lineTo(e.p2c(p), n.p2c(m)),
                                        c.lineTo(e.p2c(v), n.p2c(m)))
                                    }
                                }
                            }
                        }(t.datapoints, t.xaxis, t.yaxis));
                        n > 0 && e(t.datapoints, 0, 0, t.xaxis, t.yaxis);
                        c.restore()
                    }(t),
                    t.bars.show && function(t) {
                        var e;
                        switch (c.save(),
                        c.translate(m.left, m.top),
                        c.lineWidth = t.bars.lineWidth,
                        c.strokeStyle = t.color,
                        t.bars.align) {
                        case "left":
                            e = 0;
                            break;
                        case "right":
                            e = -t.bars.barWidth;
                            break;
                        default:
                            e = -t.bars.barWidth / 2
                        }
                        var n = t.bars.fill ? function(e, n) {
                            return O(t.bars, t.color, e, n)
                        }
                        : null;
                        (function(e, n, i, o, r, s) {
                            for (var a = e.points, l = e.pointsize, h = 0; h < a.length; h += l)
                                null != a[h] && I(a[h], a[h + 1], a[h + 2], n, i, o, r, s, c, t.bars.horizontal, t.bars.lineWidth)
                        }
                        )(t.datapoints, e, e + t.bars.barWidth, n, t.xaxis, t.yaxis),
                        c.restore()
                    }(t),
                    t.points.show && function(t) {
                        function e(t, e, n, i, o, r, s, a) {
                            for (var l = t.points, h = t.pointsize, u = 0; u < l.length; u += h) {
                                var f = l[u]
                                  , d = l[u + 1];
                                null == f || f < r.min || f > r.max || d < s.min || d > s.max || (c.beginPath(),
                                f = r.p2c(f),
                                d = s.p2c(d) + i,
                                "circle" == a ? c.arc(f, d, e, 0, o ? Math.PI : 2 * Math.PI, !1) : a(c, f, d, e, o),
                                c.closePath(),
                                n && (c.fillStyle = n,
                                c.fill()),
                                c.stroke())
                            }
                        }
                        c.save(),
                        c.translate(m.left, m.top);
                        var n = t.points.lineWidth
                          , i = t.shadowSize
                          , o = t.points.radius
                          , r = t.points.symbol;
                        0 == n && (n = 1e-4);
                        if (n > 0 && i > 0) {
                            var s = i / 2;
                            c.lineWidth = s,
                            c.strokeStyle = "rgba(0,0,0,0.1)",
                            e(t.datapoints, o, null, s + s / 2, !0, t.xaxis, t.yaxis, r),
                            c.strokeStyle = "rgba(0,0,0,0.2)",
                            e(t.datapoints, o, null, s / 2, !0, t.xaxis, t.yaxis, r)
                        }
                        c.lineWidth = n,
                        c.strokeStyle = t.color,
                        e(t.datapoints, o, O(t.points, t.color), 0, !1, t.xaxis, t.yaxis, r),
                        c.restore()
                    }(t)
                }
                function I(t, e, n, i, o, r, s, a, l, h, u) {
                    var c, f, d, p, m, g, v, _, y;
                    h ? (_ = g = v = !0,
                    m = !1,
                    p = e + i,
                    d = e + o,
                    (f = t) < (c = n) && (y = f,
                    f = c,
                    c = y,
                    m = !0,
                    g = !1)) : (m = g = v = !0,
                    _ = !1,
                    c = t + i,
                    f = t + o,
                    (p = e) < (d = n) && (y = p,
                    p = d,
                    d = y,
                    _ = !0,
                    v = !1)),
                    f < s.min || c > s.max || p < a.min || d > a.max || (c < s.min && (c = s.min,
                    m = !1),
                    f > s.max && (f = s.max,
                    g = !1),
                    d < a.min && (d = a.min,
                    _ = !1),
                    p > a.max && (p = a.max,
                    v = !1),
                    c = s.p2c(c),
                    d = a.p2c(d),
                    f = s.p2c(f),
                    p = a.p2c(p),
                    r && (l.fillStyle = r(d, p),
                    l.fillRect(c, p, f - c, d - p)),
                    u > 0 && (m || g || v || _) && (l.beginPath(),
                    l.moveTo(c, d),
                    m ? l.lineTo(c, p) : l.moveTo(c, p),
                    v ? l.lineTo(f, p) : l.moveTo(f, p),
                    g ? l.lineTo(f, d) : l.moveTo(f, d),
                    _ ? l.lineTo(c, d) : l.moveTo(c, d),
                    l.stroke()))
                }
                function O(e, n, i, o) {
                    var r = e.fill;
                    if (!r)
                        return null;
                    if (e.fillColor)
                        return $(e.fillColor, i, o, n);
                    var s = t.color.parse(n);
                    return s.a = "number" == typeof r ? r : .4,
                    s.normalize(),
                    s.toString()
                }
                y.setData = b,
                y.setupGrid = M,
                y.draw = C,
                y.getPlaceholder = function() {
                    return e
                }
                ,
                y.getCanvas = function() {
                    return l.element
                }
                ,
                y.getPlotOffset = function() {
                    return m
                }
                ,
                y.width = function() {
                    return g
                }
                ,
                y.height = function() {
                    return v
                }
                ,
                y.offset = function() {
                    var t = u.offset();
                    return t.left += m.left,
                    t.top += m.top,
                    t
                }
                ,
                y.getData = function() {
                    return s
                }
                ,
                y.getAxes = function() {
                    var e = {};
                    return t.each(d.concat(p), function(t, n) {
                        n && (e[n.direction + (1 != n.n ? n.n : "") + "axis"] = n)
                    }),
                    e
                }
                ,
                y.getXAxes = function() {
                    return d
                }
                ,
                y.getYAxes = function() {
                    return p
                }
                ,
                y.c2p = k,
                y.p2c = function(t) {
                    var e, n, i, o = {};
                    for (e = 0; e < d.length; ++e)
                        if ((n = d[e]) && n.used && (i = "x" + n.n,
                        null == t[i] && 1 == n.n && (i = "x"),
                        null != t[i])) {
                            o.left = n.p2c(t[i]);
                            break
                        }
                    for (e = 0; e < p.length; ++e)
                        if ((n = p[e]) && n.used && (i = "y" + n.n,
                        null == t[i] && 1 == n.n && (i = "y"),
                        null != t[i])) {
                            o.top = n.p2c(t[i]);
                            break
                        }
                    return o
                }
                ,
                y.getOptions = function() {
                    return a
                }
                ,
                y.highlight = H,
                y.unhighlight = q,
                y.triggerRedrawOverlay = j,
                y.pointOffset = function(t) {
                    return {
                        left: parseInt(d[w(t, "x") - 1].p2c(+t.x) + m.left, 10),
                        top: parseInt(p[w(t, "y") - 1].p2c(+t.y) + m.top, 10)
                    }
                }
                ,
                y.shutdown = P,
                y.destroy = function() {
                    P(),
                    e.removeData("plot").empty(),
                    s = [],
                    a = null,
                    l = null,
                    h = null,
                    u = null,
                    c = null,
                    f = null,
                    d = [],
                    p = [],
                    _ = null,
                    B = [],
                    y = null
                }
                ,
                y.resize = function() {
                    var t = e.width()
                      , n = e.height();
                    l.resize(t, n),
                    h.resize(t, n)
                }
                ,
                y.hooks = _,
                function() {
                    for (var e = {
                        Canvas: n
                    }, i = 0; i < r.length; ++i) {
                        var o = r[i];
                        o.init(y, e),
                        o.options && t.extend(!0, a, o.options)
                    }
                }(),
                function(n) {
                    t.extend(!0, a, n),
                    n && n.colors && (a.colors = n.colors);
                    null == a.xaxis.color && (a.xaxis.color = t.color.parse(a.grid.color).scale("a", .22).toString());
                    null == a.yaxis.color && (a.yaxis.color = t.color.parse(a.grid.color).scale("a", .22).toString());
                    null == a.xaxis.tickColor && (a.xaxis.tickColor = a.grid.tickColor || a.xaxis.color);
                    null == a.yaxis.tickColor && (a.yaxis.tickColor = a.grid.tickColor || a.yaxis.color);
                    null == a.grid.borderColor && (a.grid.borderColor = a.grid.color);
                    null == a.grid.tickColor && (a.grid.tickColor = t.color.parse(a.grid.color).scale("a", .22).toString());
                    var i, o, r, s = e.css("font-size"), l = s ? +s.replace("px", "") : 13, h = {
                        style: e.css("font-style"),
                        size: Math.round(.8 * l),
                        variant: e.css("font-variant"),
                        weight: e.css("font-weight"),
                        family: e.css("font-family")
                    };
                    for (r = a.xaxes.length || 1,
                    i = 0; i < r; ++i)
                        (o = a.xaxes[i]) && !o.tickColor && (o.tickColor = o.color),
                        o = t.extend(!0, {}, a.xaxis, o),
                        a.xaxes[i] = o,
                        o.font && (o.font = t.extend({}, h, o.font),
                        o.font.color || (o.font.color = o.color),
                        o.font.lineHeight || (o.font.lineHeight = Math.round(1.15 * o.font.size)));
                    for (r = a.yaxes.length || 1,
                    i = 0; i < r; ++i)
                        (o = a.yaxes[i]) && !o.tickColor && (o.tickColor = o.color),
                        o = t.extend(!0, {}, a.yaxis, o),
                        a.yaxes[i] = o,
                        o.font && (o.font = t.extend({}, h, o.font),
                        o.font.color || (o.font.color = o.color),
                        o.font.lineHeight || (o.font.lineHeight = Math.round(1.15 * o.font.size)));
                    a.xaxis.noTicks && null == a.xaxis.ticks && (a.xaxis.ticks = a.xaxis.noTicks);
                    a.yaxis.noTicks && null == a.yaxis.ticks && (a.yaxis.ticks = a.yaxis.noTicks);
                    a.x2axis && (a.xaxes[1] = t.extend(!0, {}, a.xaxis, a.x2axis),
                    a.xaxes[1].position = "top",
                    null == a.x2axis.min && (a.xaxes[1].min = null),
                    null == a.x2axis.max && (a.xaxes[1].max = null));
                    a.y2axis && (a.yaxes[1] = t.extend(!0, {}, a.yaxis, a.y2axis),
                    a.yaxes[1].position = "right",
                    null == a.y2axis.min && (a.yaxes[1].min = null),
                    null == a.y2axis.max && (a.yaxes[1].max = null));
                    a.grid.coloredAreas && (a.grid.markings = a.grid.coloredAreas);
                    a.grid.coloredAreasColor && (a.grid.markingsColor = a.grid.coloredAreasColor);
                    a.lines && t.extend(!0, a.series.lines, a.lines);
                    a.points && t.extend(!0, a.series.points, a.points);
                    a.bars && t.extend(!0, a.series.bars, a.bars);
                    null != a.shadowSize && (a.series.shadowSize = a.shadowSize);
                    null != a.highlightColor && (a.series.highlightColor = a.highlightColor);
                    for (i = 0; i < a.xaxes.length; ++i)
                        L(d, i + 1).options = a.xaxes[i];
                    for (i = 0; i < a.yaxes.length; ++i)
                        L(p, i + 1).options = a.yaxes[i];
                    for (var u in _)
                        a.hooks[u] && a.hooks[u].length && (_[u] = _[u].concat(a.hooks[u]));
                    x(_.processOptions, [a])
                }(o),
                function() {
                    e.css("padding", 0).children().filter(function() {
                        return !t(this).hasClass("flot-overlay") && !t(this).hasClass("flot-base")
                    }).remove(),
                    "static" == e.css("position") && e.css("position", "relative");
                    l = new n("flot-base",e),
                    h = new n("flot-overlay",e),
                    c = l.context,
                    f = h.context,
                    u = t(h.element).unbind();
                    var i = e.data("plot");
                    i && (i.shutdown(),
                    h.clear());
                    e.data("plot", y)
                }(),
                b(i),
                M(),
                C(),
                function() {
                    a.grid.hoverable && (u.mousemove(D),
                    u.bind("mouseleave", F));
                    a.grid.clickable && u.click(Z);
                    x(_.bindEvents, [u])
                }();
                var B = []
                  , N = null;
                function D(t) {
                    a.grid.hoverable && R("plothover", t, function(t) {
                        return 0 != t.hoverable
                    })
                }
                function F(t) {
                    a.grid.hoverable && R("plothover", t, function(t) {
                        return !1
                    })
                }
                function Z(t) {
                    R("plotclick", t, function(t) {
                        return 0 != t.clickable
                    })
                }
                function R(t, n, i) {
                    var o = u.offset()
                      , r = n.pageX - o.left - m.left
                      , l = n.pageY - o.top - m.top
                      , h = k({
                        left: r,
                        top: l
                    });
                    h.pageX = n.pageX,
                    h.pageY = n.pageY;
                    var c = function(t, e, n) {
                        var i, o, r, l = a.grid.mouseActiveRadius, h = l * l + 1, u = null;
                        for (i = s.length - 1; i >= 0; --i)
                            if (n(s[i])) {
                                var c = s[i]
                                  , f = c.xaxis
                                  , d = c.yaxis
                                  , p = c.datapoints.points
                                  , m = f.c2p(t)
                                  , g = d.c2p(e)
                                  , v = l / f.scale
                                  , _ = l / d.scale;
                                if (r = c.datapoints.pointsize,
                                f.options.inverseTransform && (v = Number.MAX_VALUE),
                                d.options.inverseTransform && (_ = Number.MAX_VALUE),
                                c.lines.show || c.points.show)
                                    for (o = 0; o < p.length; o += r) {
                                        var y = p[o]
                                          , x = p[o + 1];
                                        if (null != y && !(y - m > v || y - m < -v || x - g > _ || x - g < -_)) {
                                            var b = Math.abs(f.p2c(y) - t)
                                              , w = Math.abs(d.p2c(x) - e)
                                              , T = b * b + w * w;
                                            T < h && (h = T,
                                            u = [i, o / r])
                                        }
                                    }
                                if (c.bars.show && !u) {
                                    var k, L;
                                    switch (c.bars.align) {
                                    case "left":
                                        k = 0;
                                        break;
                                    case "right":
                                        k = -c.bars.barWidth;
                                        break;
                                    default:
                                        k = -c.bars.barWidth / 2
                                    }
                                    for (L = k + c.bars.barWidth,
                                    o = 0; o < p.length; o += r) {
                                        y = p[o],
                                        x = p[o + 1];
                                        var P = p[o + 2];
                                        null != y && (s[i].bars.horizontal ? m <= Math.max(P, y) && m >= Math.min(P, y) && g >= x + k && g <= x + L : m >= y + k && m <= y + L && g >= Math.min(P, x) && g <= Math.max(P, x)) && (u = [i, o / r])
                                    }
                                }
                            }
                        return u ? (i = u[0],
                        o = u[1],
                        r = s[i].datapoints.pointsize,
                        {
                            datapoint: s[i].datapoints.points.slice(o * r, (o + 1) * r),
                            dataIndex: o,
                            series: s[i],
                            seriesIndex: i
                        }) : null
                    }(r, l, i);
                    if (c && (c.pageX = parseInt(c.series.xaxis.p2c(c.datapoint[0]) + o.left + m.left, 10),
                    c.pageY = parseInt(c.series.yaxis.p2c(c.datapoint[1]) + o.top + m.top, 10)),
                    a.grid.autoHighlight) {
                        for (var f = 0; f < B.length; ++f) {
                            var d = B[f];
                            d.auto != t || c && d.series == c.series && d.point[0] == c.datapoint[0] && d.point[1] == c.datapoint[1] || q(d.series, d.point)
                        }
                        c && H(c.series, c.datapoint, t)
                    }
                    e.trigger(t, [h, c])
                }
                function j() {
                    var t = a.interaction.redrawOverlayInterval;
                    -1 != t ? N || (N = setTimeout(W, t)) : W()
                }
                function W() {
                    var t, e;
                    for (N = null,
                    f.save(),
                    h.clear(),
                    f.translate(m.left, m.top),
                    t = 0; t < B.length; ++t)
                        (e = B[t]).series.bars.show ? G(e.series, e.point) : V(e.series, e.point);
                    f.restore(),
                    x(_.drawOverlay, [f])
                }
                function H(t, e, n) {
                    if ("number" == typeof t && (t = s[t]),
                    "number" == typeof e) {
                        var i = t.datapoints.pointsize;
                        e = t.datapoints.points.slice(i * e, i * (e + 1))
                    }
                    var o = U(t, e);
                    -1 == o ? (B.push({
                        series: t,
                        point: e,
                        auto: n
                    }),
                    j()) : n || (B[o].auto = !1)
                }
                function q(t, e) {
                    if (null == t && null == e)
                        return B = [],
                        void j();
                    if ("number" == typeof t && (t = s[t]),
                    "number" == typeof e) {
                        var n = t.datapoints.pointsize;
                        e = t.datapoints.points.slice(n * e, n * (e + 1))
                    }
                    var i = U(t, e);
                    -1 != i && (B.splice(i, 1),
                    j())
                }
                function U(t, e) {
                    for (var n = 0; n < B.length; ++n) {
                        var i = B[n];
                        if (i.series == t && i.point[0] == e[0] && i.point[1] == e[1])
                            return n
                    }
                    return -1
                }
                function V(e, n) {
                    var i = n[0]
                      , o = n[1]
                      , r = e.xaxis
                      , s = e.yaxis
                      , a = "string" == typeof e.highlightColor ? e.highlightColor : t.color.parse(e.color).scale("a", .5).toString();
                    if (!(i < r.min || i > r.max || o < s.min || o > s.max)) {
                        var l = e.points.radius + e.points.lineWidth / 2;
                        f.lineWidth = l,
                        f.strokeStyle = a;
                        var h = 1.5 * l;
                        i = r.p2c(i),
                        o = s.p2c(o),
                        f.beginPath(),
                        "circle" == e.points.symbol ? f.arc(i, o, h, 0, 2 * Math.PI, !1) : e.points.symbol(f, i, o, h, !1),
                        f.closePath(),
                        f.stroke()
                    }
                }
                function G(e, n) {
                    var i, o = "string" == typeof e.highlightColor ? e.highlightColor : t.color.parse(e.color).scale("a", .5).toString(), r = o;
                    switch (e.bars.align) {
                    case "left":
                        i = 0;
                        break;
                    case "right":
                        i = -e.bars.barWidth;
                        break;
                    default:
                        i = -e.bars.barWidth / 2
                    }
                    f.lineWidth = e.bars.lineWidth,
                    f.strokeStyle = o,
                    I(n[0], n[1], n[2] || 0, i, i + e.bars.barWidth, function() {
                        return r
                    }, e.xaxis, e.yaxis, f, e.bars.horizontal, e.bars.lineWidth)
                }
                function $(e, n, i, o) {
                    if ("string" == typeof e)
                        return e;
                    for (var r = c.createLinearGradient(0, i, 0, n), s = 0, a = e.colors.length; s < a; ++s) {
                        var l = e.colors[s];
                        if ("string" != typeof l) {
                            var h = t.color.parse(o);
                            null != l.brightness && (h = h.scale("rgb", l.brightness)),
                            null != l.opacity && (h.a *= l.opacity),
                            l = h.toString()
                        }
                        r.addColorStop(s / (a - 1), l)
                    }
                    return r
                }
            }
            t.fn.detach || (t.fn.detach = function() {
                return this.each(function() {
                    this.parentNode && this.parentNode.removeChild(this)
                })
            }
            ),
            n.prototype.resize = function(t, e) {
                if (t <= 0 || e <= 0)
                    throw new Error("Invalid dimensions for plot, width = " + t + ", height = " + e);
                var n = this.element
                  , i = this.context
                  , o = this.pixelRatio;
                this.width != t && (n.width = t * o,
                n.style.width = t + "px",
                this.width = t),
                this.height != e && (n.height = e * o,
                n.style.height = e + "px",
                this.height = e),
                i.restore(),
                i.save(),
                i.scale(o, o)
            }
            ,
            n.prototype.clear = function() {
                this.context.clearRect(0, 0, this.width, this.height)
            }
            ,
            n.prototype.render = function() {
                var t = this._textCache;
                for (var n in t)
                    if (e.call(t, n)) {
                        var i = this.getTextLayer(n)
                          , o = t[n];
                        for (var r in i.hide(),
                        o)
                            if (e.call(o, r)) {
                                var s = o[r];
                                for (var a in s)
                                    if (e.call(s, a)) {
                                        for (var l, h = s[a].positions, u = 0; l = h[u]; u++)
                                            l.active ? l.rendered || (i.append(l.element),
                                            l.rendered = !0) : (h.splice(u--, 1),
                                            l.rendered && l.element.detach());
                                        0 == h.length && delete s[a]
                                    }
                            }
                        i.show()
                    }
            }
            ,
            n.prototype.getTextLayer = function(e) {
                var n = this.text[e];
                return null == n && (null == this.textContainer && (this.textContainer = t("<div class='flot-text'></div>").css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    "font-size": "smaller",
                    color: "#545454"
                }).insertAfter(this.element)),
                n = this.text[e] = t("<div></div>").addClass(e).css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0
                }).appendTo(this.textContainer)),
                n
            }
            ,
            n.prototype.getTextInfo = function(e, n, i, o, r) {
                var s, a, l, h;
                if (n = "" + n,
                s = "object" == typeof i ? i.style + " " + i.variant + " " + i.weight + " " + i.size + "px/" + i.lineHeight + "px " + i.family : i,
                null == (a = this._textCache[e]) && (a = this._textCache[e] = {}),
                null == (l = a[s]) && (l = a[s] = {}),
                null == (h = l[n])) {
                    var u = t("<div></div>").html(n).css({
                        position: "absolute",
                        "max-width": r,
                        top: -9999
                    }).appendTo(this.getTextLayer(e));
                    "object" == typeof i ? u.css({
                        font: s,
                        color: i.color
                    }) : "string" == typeof i && u.addClass(i),
                    h = l[n] = {
                        width: u.outerWidth(!0),
                        height: u.outerHeight(!0),
                        element: u,
                        positions: []
                    },
                    u.detach()
                }
                return h
            }
            ,
            n.prototype.addText = function(t, e, n, i, o, r, s, a, l) {
                var h = this.getTextInfo(t, i, o, r, s)
                  , u = h.positions;
                "center" == a ? e -= h.width / 2 : "right" == a && (e -= h.width),
                "middle" == l ? n -= h.height / 2 : "bottom" == l && (n -= h.height);
                for (var c, f = 0; c = u[f]; f++)
                    if (c.x == e && c.y == n)
                        return void (c.active = !0);
                c = {
                    active: !0,
                    rendered: !1,
                    element: u.length ? h.element.clone() : h.element,
                    x: e,
                    y: n
                },
                u.push(c),
                c.element.css({
                    top: Math.round(n),
                    left: Math.round(e),
                    "text-align": a
                })
            }
            ,
            n.prototype.removeText = function(t, n, i, o, r, s) {
                if (null == o) {
                    var a = this._textCache[t];
                    if (null != a)
                        for (var l in a)
                            if (e.call(a, l)) {
                                var h = a[l];
                                for (var u in h)
                                    if (e.call(h, u))
                                        for (var c = h[u].positions, f = 0; d = c[f]; f++)
                                            d.active = !1
                            }
                } else {
                    var d;
                    for (c = this.getTextInfo(t, o, r, s).positions,
                    f = 0; d = c[f]; f++)
                        d.x == n && d.y == i && (d.active = !1)
                }
            }
            ,
            t.plot = function(e, n, o) {
                return new i(t(e),n,o,t.plot.plugins)
            }
            ,
            t.plot.version = "0.8.3",
            t.plot.plugins = [],
            t.fn.plot = function(e, n) {
                return this.each(function() {
                    t.plot(this, e, n)
                })
            }
        }(t)
    }
    ).call(this, n(0))
}
, function(t, e, n) {
    (function(t) {
        !function(t) {
            function e(t, e) {
                return e * Math.floor(t / e)
            }
            function n(t, e, n, i) {
                if ("function" == typeof t.strftime)
                    return t.strftime(e);
                var o, r = function(t, e) {
                    return e = "" + (null == e ? "0" : e),
                    1 == (t = "" + t).length ? e + t : t
                }, s = [], a = !1, l = t.getHours(), h = l < 12;
                null == n && (n = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]),
                null == i && (i = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]),
                o = l > 12 ? l - 12 : 0 == l ? 12 : l;
                for (var u = 0; u < e.length; ++u) {
                    var c = e.charAt(u);
                    if (a) {
                        switch (c) {
                        case "a":
                            c = "" + i[t.getDay()];
                            break;
                        case "b":
                            c = "" + n[t.getMonth()];
                            break;
                        case "d":
                            c = r(t.getDate());
                            break;
                        case "e":
                            c = r(t.getDate(), " ");
                            break;
                        case "h":
                        case "H":
                            c = r(l);
                            break;
                        case "I":
                            c = r(o);
                            break;
                        case "l":
                            c = r(o, " ");
                            break;
                        case "m":
                            c = r(t.getMonth() + 1);
                            break;
                        case "M":
                            c = r(t.getMinutes());
                            break;
                        case "q":
                            c = "" + (Math.floor(t.getMonth() / 3) + 1);
                            break;
                        case "S":
                            c = r(t.getSeconds());
                            break;
                        case "y":
                            c = r(t.getFullYear() % 100);
                            break;
                        case "Y":
                            c = "" + t.getFullYear();
                            break;
                        case "p":
                            c = h ? "am" : "pm";
                            break;
                        case "P":
                            c = h ? "AM" : "PM";
                            break;
                        case "w":
                            c = "" + t.getDay()
                        }
                        s.push(c),
                        a = !1
                    } else
                        "%" == c ? a = !0 : s.push(c)
                }
                return s.join("")
            }
            function i(t) {
                function e(t, e, n, i) {
                    t[e] = function() {
                        return n[i].apply(n, arguments)
                    }
                }
                var n = {
                    date: t
                };
                null != t.strftime && e(n, "strftime", t, "strftime"),
                e(n, "getTime", t, "getTime"),
                e(n, "setTime", t, "setTime");
                for (var i = ["Date", "Day", "FullYear", "Hours", "Milliseconds", "Minutes", "Month", "Seconds"], o = 0; o < i.length; o++)
                    e(n, "get" + i[o], t, "getUTC" + i[o]),
                    e(n, "set" + i[o], t, "setUTC" + i[o]);
                return n
            }
            function o(t, e) {
                if ("browser" == e.timezone)
                    return new Date(t);
                if (e.timezone && "utc" != e.timezone) {
                    if ("undefined" != typeof timezoneJS && void 0 !== timezoneJS.Date) {
                        var n = new timezoneJS.Date;
                        return n.setTimezone(e.timezone),
                        n.setTime(t),
                        n
                    }
                    return i(new Date(t))
                }
                return i(new Date(t))
            }
            var r = {
                second: 1e3,
                minute: 6e4,
                hour: 36e5,
                day: 864e5,
                month: 2592e6,
                quarter: 7776e6,
                year: 525949.2 * 60 * 1e3
            }
              , s = [[1, "second"], [2, "second"], [5, "second"], [10, "second"], [30, "second"], [1, "minute"], [2, "minute"], [5, "minute"], [10, "minute"], [30, "minute"], [1, "hour"], [2, "hour"], [4, "hour"], [8, "hour"], [12, "hour"], [1, "day"], [2, "day"], [3, "day"], [.25, "month"], [.5, "month"], [1, "month"], [2, "month"]]
              , a = s.concat([[3, "month"], [6, "month"], [1, "year"]])
              , l = s.concat([[1, "quarter"], [2, "quarter"], [1, "year"]]);
            t.plot.plugins.push({
                init: function(i) {
                    i.hooks.processOptions.push(function(i, s) {
                        t.each(i.getAxes(), function(t, i) {
                            var s = i.options;
                            "time" == s.mode && (i.tickGenerator = function(t) {
                                var n = []
                                  , i = o(t.min, s)
                                  , h = 0
                                  , u = s.tickSize && "quarter" === s.tickSize[1] || s.minTickSize && "quarter" === s.minTickSize[1] ? l : a;
                                null != s.minTickSize && (h = "number" == typeof s.tickSize ? s.tickSize : s.minTickSize[0] * r[s.minTickSize[1]]);
                                for (var c = 0; c < u.length - 1 && !(t.delta < (u[c][0] * r[u[c][1]] + u[c + 1][0] * r[u[c + 1][1]]) / 2 && u[c][0] * r[u[c][1]] >= h); ++c)
                                    ;
                                var f = u[c][0]
                                  , d = u[c][1];
                                if ("year" == d) {
                                    if (null != s.minTickSize && "year" == s.minTickSize[1])
                                        f = Math.floor(s.minTickSize[0]);
                                    else {
                                        var p = Math.pow(10, Math.floor(Math.log(t.delta / r.year) / Math.LN10))
                                          , m = t.delta / r.year / p;
                                        f = m < 1.5 ? 1 : m < 3 ? 2 : m < 7.5 ? 5 : 10,
                                        f *= p
                                    }
                                    f < 1 && (f = 1)
                                }
                                t.tickSize = s.tickSize || [f, d];
                                var g = t.tickSize[0];
                                d = t.tickSize[1];
                                var v = g * r[d];
                                "second" == d ? i.setSeconds(e(i.getSeconds(), g)) : "minute" == d ? i.setMinutes(e(i.getMinutes(), g)) : "hour" == d ? i.setHours(e(i.getHours(), g)) : "month" == d ? i.setMonth(e(i.getMonth(), g)) : "quarter" == d ? i.setMonth(3 * e(i.getMonth() / 3, g)) : "year" == d && i.setFullYear(e(i.getFullYear(), g)),
                                i.setMilliseconds(0),
                                v >= r.minute && i.setSeconds(0),
                                v >= r.hour && i.setMinutes(0),
                                v >= r.day && i.setHours(0),
                                v >= 4 * r.day && i.setDate(1),
                                v >= 2 * r.month && i.setMonth(e(i.getMonth(), 3)),
                                v >= 2 * r.quarter && i.setMonth(e(i.getMonth(), 6)),
                                v >= r.year && i.setMonth(0);
                                var _, y = 0, x = Number.NaN;
                                do {
                                    if (_ = x,
                                    x = i.getTime(),
                                    n.push(x),
                                    "month" == d || "quarter" == d)
                                        if (g < 1) {
                                            i.setDate(1);
                                            var b = i.getTime();
                                            i.setMonth(i.getMonth() + ("quarter" == d ? 3 : 1));
                                            var w = i.getTime();
                                            i.setTime(x + y * r.hour + (w - b) * g),
                                            y = i.getHours(),
                                            i.setHours(0)
                                        } else
                                            i.setMonth(i.getMonth() + g * ("quarter" == d ? 3 : 1));
                                    else
                                        "year" == d ? i.setFullYear(i.getFullYear() + g) : i.setTime(x + v)
                                } while (x < t.max && x != _);
                                return n
                            }
                            ,
                            i.tickFormatter = function(t, e) {
                                var i = o(t, e.options);
                                if (null != s.timeformat)
                                    return n(i, s.timeformat, s.monthNames, s.dayNames);
                                var a = e.options.tickSize && "quarter" == e.options.tickSize[1] || e.options.minTickSize && "quarter" == e.options.minTickSize[1]
                                  , l = e.tickSize[0] * r[e.tickSize[1]]
                                  , h = e.max - e.min
                                  , u = s.twelveHourClock ? " %p" : ""
                                  , c = s.twelveHourClock ? "%I" : "%H";
                                return n(i, l < r.minute ? c + ":%M:%S" + u : l < r.day ? h < 2 * r.day ? c + ":%M" + u : "%b %d " + c + ":%M" + u : l < r.month ? "%b %d" : a && l < r.quarter || !a && l < r.year ? h < r.year ? "%b" : "%b %Y" : a && l < r.year ? h < r.year ? "Q%q" : "Q%q %Y" : "%Y", s.monthNames, s.dayNames)
                            }
                            )
                        })
                    })
                },
                options: {
                    xaxis: {
                        timezone: null,
                        timeformat: null,
                        twelveHourClock: !1,
                        monthNames: null
                    }
                },
                name: "time",
                version: "1.0"
            }),
            t.plot.formatDate = n,
            t.plot.dateGenerator = o
        }(t)
    }
    ).call(this, n(0))
}
, function(t, e, n) {
    (function(t) {
        !function(t) {
            function e() {
                return !!document.createElement("canvas").getContext && "function" == typeof document.createElement("canvas").getContext("2d").fillText
            }
            function n() {
                var t = document.createElement("div");
                return void 0 !== t.style.MozTransition || void 0 !== t.style.OTransition || void 0 !== t.style.webkitTransition || void 0 !== t.style.transition
            }
            function i(t, e, n, i, o) {
                this.axisName = t,
                this.position = e,
                this.padding = n,
                this.plot = i,
                this.opts = o,
                this.width = 0,
                this.height = 0
            }
            function o(t, e, n, o, r) {
                i.prototype.constructor.call(this, t, e, n, o, r)
            }
            function r(t, e, n, o, r) {
                i.prototype.constructor.call(this, t, e, n, o, r),
                this.elem = null
            }
            function s(t, e, n, i, o) {
                r.prototype.constructor.call(this, t, e, n, i, o)
            }
            function a(t, e, n, i, o) {
                s.prototype.constructor.call(this, t, e, n, i, o),
                this.requiresResize = !1
            }
            i.prototype.cleanup = function() {}
            ,
            o.prototype = new i,
            o.prototype.constructor = o,
            o.prototype.calculateSize = function() {
                this.opts.axisLabelFontSizePixels || (this.opts.axisLabelFontSizePixels = 14),
                this.opts.axisLabelFontFamily || (this.opts.axisLabelFontFamily = "sans-serif");
                this.opts.axisLabelFontSizePixels,
                this.padding,
                this.opts.axisLabelFontSizePixels,
                this.padding;
                "left" == this.position || "right" == this.position ? (this.width = this.opts.axisLabelFontSizePixels + this.padding,
                this.height = 0) : (this.width = 0,
                this.height = this.opts.axisLabelFontSizePixels + this.padding)
            }
            ,
            o.prototype.draw = function(t) {
                this.opts.axisLabelColour || (this.opts.axisLabelColour = "black");
                var e = this.plot.getCanvas().getContext("2d");
                e.save(),
                e.font = this.opts.axisLabelFontSizePixels + "px " + this.opts.axisLabelFontFamily,
                e.fillStyle = this.opts.axisLabelColour;
                var n, i, o = e.measureText(this.opts.axisLabel).width, r = this.opts.axisLabelFontSizePixels, s = 0;
                "top" == this.position ? (n = t.left + t.width / 2 - o / 2,
                i = t.top + .72 * r) : "bottom" == this.position ? (n = t.left + t.width / 2 - o / 2,
                i = t.top + t.height - .72 * r) : "left" == this.position ? (n = t.left + .72 * r,
                i = t.height / 2 + t.top + o / 2,
                s = -Math.PI / 2) : "right" == this.position && (n = t.left + t.width - .72 * r,
                i = t.height / 2 + t.top - o / 2,
                s = Math.PI / 2),
                e.translate(n, i),
                e.rotate(s),
                e.fillText(this.opts.axisLabel, 0, 0),
                e.restore()
            }
            ,
            r.prototype = new i,
            r.prototype.constructor = r,
            r.prototype.calculateSize = function() {
                var e = t('<div class="axisLabels" style="position:absolute;">' + this.opts.axisLabel + "</div>");
                this.plot.getPlaceholder().append(e),
                this.labelWidth = e.outerWidth(!0),
                this.labelHeight = e.outerHeight(!0),
                e.remove(),
                this.width = this.height = 0,
                "left" == this.position || "right" == this.position ? this.width = this.labelWidth + this.padding : this.height = this.labelHeight + this.padding
            }
            ,
            r.prototype.cleanup = function() {
                this.elem && this.elem.remove()
            }
            ,
            r.prototype.draw = function(e) {
                this.plot.getPlaceholder().find("#" + this.axisName + "Label").remove(),
                this.elem = t('<div id="' + this.axisName + 'Label" " class="axisLabels" style="position:absolute;">' + this.opts.axisLabel + "</div>"),
                this.plot.getPlaceholder().append(this.elem),
                "top" == this.position ? (this.elem.css("left", e.left + e.width / 2 - this.labelWidth / 2 + "px"),
                this.elem.css("top", e.top + "px")) : "bottom" == this.position ? (this.elem.css("left", e.left + e.width / 2 - this.labelWidth / 2 + "px"),
                this.elem.css("top", e.top + e.height - this.labelHeight + "px")) : "left" == this.position ? (this.elem.css("top", e.top + e.height / 2 - this.labelHeight / 2 + "px"),
                this.elem.css("left", e.left + "px")) : "right" == this.position && (this.elem.css("top", e.top + e.height / 2 - this.labelHeight / 2 + "px"),
                this.elem.css("left", e.left + e.width - this.labelWidth + "px"))
            }
            ,
            s.prototype = new r,
            s.prototype.constructor = s,
            s.prototype.calculateSize = function() {
                r.prototype.calculateSize.call(this),
                this.width = this.height = 0,
                "left" == this.position || "right" == this.position ? this.width = this.labelHeight + this.padding : this.height = this.labelHeight + this.padding
            }
            ,
            s.prototype.transforms = function(t, e, n) {
                var i = {
                    "-moz-transform": "",
                    "-webkit-transform": "",
                    "-o-transform": "",
                    "-ms-transform": ""
                };
                if (0 != e || 0 != n) {
                    var o = " translate(" + e + "px, " + n + "px)";
                    i["-moz-transform"] += o,
                    i["-webkit-transform"] += o,
                    i["-o-transform"] += o,
                    i["-ms-transform"] += o
                }
                if (0 != t) {
                    var r = " rotate(" + t + "deg)";
                    i["-moz-transform"] += r,
                    i["-webkit-transform"] += r,
                    i["-o-transform"] += r,
                    i["-ms-transform"] += r
                }
                var s = "top: 0; left: 0; ";
                for (var a in i)
                    i[a] && (s += a + ":" + i[a] + ";");
                return s += ";"
            }
            ,
            s.prototype.calculateOffsets = function(t) {
                var e = {
                    x: 0,
                    y: 0,
                    degrees: 0
                };
                return "bottom" == this.position ? (e.x = t.left + t.width / 2 - this.labelWidth / 2,
                e.y = t.top + t.height - this.labelHeight) : "top" == this.position ? (e.x = t.left + t.width / 2 - this.labelWidth / 2,
                e.y = t.top) : "left" == this.position ? (e.degrees = -90,
                e.x = t.left - this.labelWidth / 2 + this.labelHeight / 2,
                e.y = t.height / 2 + t.top) : "right" == this.position && (e.degrees = 90,
                e.x = t.left + t.width - this.labelWidth / 2 - this.labelHeight / 2,
                e.y = t.height / 2 + t.top),
                e.x = Math.round(e.x),
                e.y = Math.round(e.y),
                e
            }
            ,
            s.prototype.draw = function(e) {
                this.plot.getPlaceholder().find("." + this.axisName + "Label").remove();
                var n = this.calculateOffsets(e);
                this.elem = t('<div class="axisLabels ' + this.axisName + 'Label" style="position:absolute; ' + this.transforms(n.degrees, n.x, n.y) + '">' + this.opts.axisLabel + "</div>"),
                this.plot.getPlaceholder().append(this.elem)
            }
            ,
            a.prototype = new s,
            a.prototype.constructor = a,
            a.prototype.transforms = function(t, e, n) {
                var i = "";
                if (0 != t) {
                    for (var o = t / 90; o < 0; )
                        o += 4;
                    i += " filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=" + o + "); ",
                    this.requiresResize = "right" == this.position
                }
                return 0 != e && (i += "left: " + e + "px; "),
                0 != n && (i += "top: " + n + "px; "),
                i
            }
            ,
            a.prototype.calculateOffsets = function(t) {
                var e = s.prototype.calculateOffsets.call(this, t);
                return "top" == this.position ? e.y = t.top + 1 : "left" == this.position ? (e.x = t.left,
                e.y = t.height / 2 + t.top - this.labelWidth / 2) : "right" == this.position && (e.x = t.left + t.width - this.labelHeight,
                e.y = t.height / 2 + t.top - this.labelWidth / 2),
                e
            }
            ,
            a.prototype.draw = function(t) {
                s.prototype.draw.call(this, t),
                this.requiresResize && (this.elem = this.plot.getPlaceholder().find("." + this.axisName + "Label"),
                this.elem.css("width", this.labelWidth),
                this.elem.css("height", this.labelHeight))
            }
            ,
            t.plot.plugins.push({
                init: function(i) {
                    i.hooks.processOptions.push(function(i, l) {
                        if (l.axisLabels.show) {
                            var h = !1
                              , u = {};
                            i.hooks.draw.push(function(i, l) {
                                var c = !1;
                                h ? (h = !1,
                                t.each(i.getAxes(), function(t, e) {
                                    var n = e.options || i.getOptions()[t];
                                    n && n.axisLabel && e.show && u[t].draw(e.box)
                                })) : (t.each(i.getAxes(), function(t, l) {
                                    var h = l.options || i.getOptions()[t];
                                    if (t in u && (l.labelHeight = l.labelHeight - u[t].height,
                                    l.labelWidth = l.labelWidth - u[t].width,
                                    h.labelHeight = l.labelHeight,
                                    h.labelWidth = l.labelWidth,
                                    u[t].cleanup(),
                                    delete u[t]),
                                    h && h.axisLabel && l.show) {
                                        c = !0;
                                        var f = null;
                                        if (h.axisLabelUseHtml || "Microsoft Internet Explorer" != navigator.appName)
                                            f = h.axisLabelUseHtml || !n() && !e() && !h.axisLabelUseCanvas ? r : h.axisLabelUseCanvas || !n() ? o : s;
                                        else {
                                            var d = navigator.userAgent;
                                            null != new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})").exec(d) && (rv = parseFloat(RegExp.$1)),
                                            f = rv >= 9 && !h.axisLabelUseCanvas && !h.axisLabelUseHtml ? s : h.axisLabelUseCanvas || h.axisLabelUseHtml ? h.axisLabelUseCanvas ? o : r : a
                                        }
                                        var p = void 0 === h.axisLabelPadding ? 2 : h.axisLabelPadding;
                                        u[t] = new f(t,l.position,p,i,h),
                                        u[t].calculateSize(),
                                        h.labelHeight = l.labelHeight + u[t].height,
                                        h.labelWidth = l.labelWidth + u[t].width
                                    }
                                }),
                                c && (h = !0,
                                i.setupGrid(),
                                i.draw()))
                            })
                        }
                    })
                },
                options: {
                    axisLabels: {
                        show: !0
                    }
                },
                name: "axisLabels",
                version: "2.0"
            })
        }(t)
    }
    ).call(this, n(0))
}
, function(t, e, n) {
    (function(t) {
        !function(e) {
            "use strict";
            var n = {
                x: null,
                y: null
            };
            t.plot.plugins.push({
                init: function(t) {
                    t.lockCrosshair = function(e) {
                        e ? (n.x = e.x,
                        n.y = e.y) : (n.x = null,
                        n.y = null),
                        t.triggerRedrawOverlay()
                    }
                    ,
                    t.hooks.drawOverlay.push(function(t, e) {
                        var i = t.getOptions().crosshair;
                        if (i.mode) {
                            var o = t.getPlotOffset();
                            if (e.save(),
                            e.translate(o.left, o.top),
                            null !== n.x && null !== n.y) {
                                var r = t.p2c(n)
                                  , s = {
                                    x: Math.max(0, Math.min(r.left, t.width())),
                                    y: Math.max(0, Math.min(r.top, t.height()))
                                }
                                  , a = t.getOptions().crosshair.lineWidth % 2 ? .5 : 0;
                                if (e.strokeStyle = i.color,
                                e.lineWidth = i.lineWidth,
                                e.lineJoin = "round",
                                e.beginPath(),
                                -1 !== i.mode.indexOf("x")) {
                                    var l = Math.floor(s.x) + a;
                                    e.moveTo(l, 0),
                                    e.lineTo(l, t.height())
                                }
                                if (-1 !== i.mode.indexOf("y")) {
                                    var h = Math.floor(s.y) + a;
                                    e.moveTo(0, h),
                                    e.lineTo(t.width(), h)
                                }
                                e.stroke()
                            }
                            e.restore()
                        }
                    })
                },
                options: {
                    crosshair: {
                        mode: null,
                        color: "rgba(170, 0, 0, 0.80)",
                        lineWidth: 1
                    }
                },
                name: "crosshair",
                version: "1.1"
            })
        }()
    }
    ).call(this, n(0))
}
]);
