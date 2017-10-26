webpackJsonp([ 0 ], [ , function(e, t, n) {
    "use strict";
    function r(e) {
        return "[object Array]" === E.call(e);
    }
    function o(e) {
        return "[object ArrayBuffer]" === E.call(e);
    }
    function i(e) {
        return "undefined" != typeof FormData && e instanceof FormData;
    }
    function u(e) {
        return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer;
    }
    function a(e) {
        return "string" == typeof e;
    }
    function c(e) {
        return "number" == typeof e;
    }
    function s(e) {
        return void 0 === e;
    }
    function f(e) {
        return null !== e && "object" == typeof e;
    }
    function l(e) {
        return "[object Date]" === E.call(e);
    }
    function p(e) {
        return "[object File]" === E.call(e);
    }
    function d(e) {
        return "[object Blob]" === E.call(e);
    }
    function h(e) {
        return "[object Function]" === E.call(e);
    }
    function y(e) {
        return f(e) && h(e.pipe);
    }
    function v(e) {
        return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams;
    }
    function m(e) {
        return e.replace(/^\s*/, "").replace(/\s*$/, "");
    }
    function b() {
        return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document);
    }
    function g(e, t) {
        if (null !== e && void 0 !== e) if ("object" == typeof e || r(e) || (e = [ e ]), 
        r(e)) for (var n = 0, o = e.length; n < o; n++) t.call(null, e[n], n, e); else for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.call(null, e[i], i, e);
    }
    function O() {
        function e(e, n) {
            "object" == typeof t[n] && "object" == typeof e ? t[n] = O(t[n], e) : t[n] = e;
        }
        for (var t = {}, n = 0, r = arguments.length; n < r; n++) g(arguments[n], e);
        return t;
    }
    function w(e, t, n) {
        return g(t, function(t, r) {
            e[r] = n && "function" == typeof t ? _(t, n) : t;
        }), e;
    }
    var _ = n(28), S = n(103), E = Object.prototype.toString;
    e.exports = {
        isArray: r,
        isArrayBuffer: o,
        isBuffer: S,
        isFormData: i,
        isArrayBufferView: u,
        isString: a,
        isNumber: c,
        isObject: f,
        isUndefined: s,
        isDate: l,
        isFile: p,
        isBlob: d,
        isFunction: h,
        isStream: y,
        isURLSearchParams: v,
        isStandardBrowserEnv: b,
        forEach: g,
        merge: O,
        extend: w,
        trim: m
    };
}, function(e, t, n) {
    e.exports = n(46)();
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(19), o = n(66), i = n(67), u = n(68), a = n(23);
    n(22);
    n.d(t, "createStore", function() {
        return r.b;
    }), n.d(t, "combineReducers", function() {
        return o.a;
    }), n.d(t, "bindActionCreators", function() {
        return i.a;
    }), n.d(t, "applyMiddleware", function() {
        return u.a;
    }), n.d(t, "compose", function() {
        return a.a;
    });
}, , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(45), o = n(18), i = n(51);
    n.d(t, "Provider", function() {
        return r.b;
    }), n.d(t, "createProvider", function() {
        return r.a;
    }), n.d(t, "connectAdvanced", function() {
        return o.a;
    }), n.d(t, "connect", function() {
        return i.a;
    });
}, function(e, t, n) {
    "use strict";
    function r(e) {
        return !(!e || "function" != typeof e.hasOwnProperty || !(e.hasOwnProperty("__ownerID") || e._map && e._map.hasOwnProperty("__ownerID")));
    }
    function o(e, t, n) {
        return Object.keys(e).reduce(function(t, r) {
            var o = "" + r;
            return t.has(o) ? t.set(o, n(t.get(o), e[o])) : t;
        }, t);
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.isImmutable = r, t.denormalizeImmutable = o;
}, , , function(e, t, n) {
    "use strict";
    function r(e) {
        "undefined" != typeof console && "function" == typeof console.error && console.error(e);
        try {
            throw new Error(e);
        } catch (e) {}
    }
    t.a = r;
}, function(e, t, n) {
    "use strict";
    function r(e) {
        if (!Object(u.a)(e) || Object(o.a)(e) != a) return !1;
        var t = Object(i.a)(e);
        if (null === t) return !0;
        var n = l.call(t, "constructor") && t.constructor;
        return "function" == typeof n && n instanceof n && f.call(n) == p;
    }
    var o = n(54), i = n(59), u = n(61), a = "[object Object]", c = Function.prototype, s = Object.prototype, f = c.toString, l = s.hasOwnProperty, p = f.call(Object);
    t.a = r;
}, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.showLoading = t.resetLoading = t.loadingBarReducer = t.loadingBarMiddleware = t.LoadingBar = t.ImmutableLoadingBar = t.hideLoading = void 0;
    var o = n(26), i = r(o), u = n(80), a = r(u), c = n(27), s = n(81), f = r(s);
    t.hideLoading = c.hideLoading, t.ImmutableLoadingBar = f.default, t.LoadingBar = o.LoadingBar, 
    t.loadingBarMiddleware = a.default, t.loadingBarReducer = c.loadingBarReducer, t.resetLoading = c.resetLoading, 
    t.showLoading = c.showLoading, t.default = i.default;
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.IS_OPEN_WINDOW_TOGGLE = "IS_OPEN_WINDOW_TOGGLE", t.COMPOSITIONS_GET_REQUEST = "COMPOSITIONS_GET_REQUEST", 
    t.COMPOSITIONS_GET_SUCCESS = "COMPOSITIONS_GET_SUCCESS", t.COMPOSITIONS_GET_FAILURE = "COMPOSITIONS_GET_FAILURE";
}, function(e, t, n) {
    "use strict";
    (function(t) {
        function r(e, t) {
            !o.isUndefined(e) && o.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t);
        }
        var o = n(1), i = n(106), u = {
            "Content-Type": "application/x-www-form-urlencoded"
        }, a = {
            adapter: function() {
                var e;
                return "undefined" != typeof XMLHttpRequest ? e = n(29) : void 0 !== t && (e = n(29)), 
                e;
            }(),
            transformRequest: [ function(e, t) {
                return i(t, "Content-Type"), o.isFormData(e) || o.isArrayBuffer(e) || o.isBuffer(e) || o.isStream(e) || o.isFile(e) || o.isBlob(e) ? e : o.isArrayBufferView(e) ? e.buffer : o.isURLSearchParams(e) ? (r(t, "application/x-www-form-urlencoded;charset=utf-8"), 
                e.toString()) : o.isObject(e) ? (r(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e;
            } ],
            transformResponse: [ function(e) {
                if ("string" == typeof e) try {
                    e = JSON.parse(e);
                } catch (e) {}
                return e;
            } ],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            validateStatus: function(e) {
                return e >= 200 && e < 300;
            }
        };
        a.headers = {
            common: {
                Accept: "application/json, text/plain, */*"
            }
        }, o.forEach([ "delete", "get", "head" ], function(e) {
            a.headers[e] = {};
        }), o.forEach([ "post", "put", "patch" ], function(e) {
            a.headers[e] = o.merge(u);
        }), e.exports = a;
    }).call(t, n(105));
}, function(e, t, n) {
    "use strict";
    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
        };
    }(), i = n(6), u = function() {
        function e(t, n) {
            r(this, e), n && (this._schemaAttribute = "string" == typeof n ? function(e) {
                return e[n];
            } : n), this.define(t);
        }
        return o(e, [ {
            key: "define",
            value: function(e) {
                this.schema = e;
            }
        }, {
            key: "getSchemaAttribute",
            value: function(e, t, n) {
                return !this.isSingleSchema && this._schemaAttribute(e, t, n);
            }
        }, {
            key: "inferSchema",
            value: function(e, t, n) {
                if (this.isSingleSchema) return this.schema;
                var r = this.getSchemaAttribute(e, t, n);
                return this.schema[r];
            }
        }, {
            key: "normalizeValue",
            value: function(e, t, n, r, o) {
                var i = this.inferSchema(e, t, n);
                if (!i) return e;
                var u = r(e, t, n, i, o);
                return this.isSingleSchema || void 0 === u || null === u ? u : {
                    id: u,
                    schema: this.getSchemaAttribute(e, t, n)
                };
            }
        }, {
            key: "denormalizeValue",
            value: function(e, t) {
                var n = (0, i.isImmutable)(e) ? e.get("schema") : e.schema;
                if (!this.isSingleSchema && !n) return e;
                var r = (0, i.isImmutable)(e) ? e.get("id") : e.id, o = this.isSingleSchema ? this.schema : this.schema[n];
                return t(r || e, o);
            }
        }, {
            key: "isSingleSchema",
            get: function() {
                return !this._schemaAttribute;
            }
        } ]), e;
    }();
    t.default = u;
}, , , function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
        return i;
    }), n.d(t, "a", function() {
        return u;
    });
    var r = n(2), o = n.n(r), i = o.a.shape({
        trySubscribe: o.a.func.isRequired,
        tryUnsubscribe: o.a.func.isRequired,
        notifyNestedSubs: o.a.func.isRequired,
        isSubscribed: o.a.func.isRequired
    }), u = o.a.shape({
        subscribe: o.a.func.isRequired,
        dispatch: o.a.func.isRequired,
        getState: o.a.func.isRequired
    });
}, function(e, t, n) {
    "use strict";
    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }
    function u(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n;
    }
    function a() {}
    function c(e, t) {
        var n = {
            run: function(r) {
                try {
                    var o = e(t.getState(), r);
                    (o !== n.props || n.error) && (n.shouldComponentUpdate = !0, n.props = o, n.error = null);
                } catch (e) {
                    n.shouldComponentUpdate = !0, n.error = e;
                }
            }
        };
        return n;
    }
    function s(e) {
        var t, n, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, f = s.getDisplayName, p = void 0 === f ? function(e) {
            return "ConnectAdvanced(" + e + ")";
        } : f, O = s.methodName, w = void 0 === O ? "connectAdvanced" : O, _ = s.renderCountProp, S = void 0 === _ ? void 0 : _, E = s.shouldHandleStateChanges, P = void 0 === E || E, j = s.storeKey, T = void 0 === j ? "store" : j, C = s.withRef, I = void 0 !== C && C, x = u(s, [ "getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef" ]), k = T + "Subscription", M = b++, N = (t = {}, 
        t[T] = v.a, t[k] = v.b, t), R = (n = {}, n[k] = v.b, n);
        return function(t) {
            d()("function" == typeof t, "You must pass a component to the function returned by connect. Instead received " + JSON.stringify(t));
            var n = t.displayName || t.name || "Component", u = p(n), s = m({}, x, {
                getDisplayName: p,
                methodName: w,
                renderCountProp: S,
                shouldHandleStateChanges: P,
                storeKey: T,
                withRef: I,
                displayName: u,
                wrappedComponentName: n,
                WrappedComponent: t
            }), f = function(n) {
                function f(e, t) {
                    r(this, f);
                    var i = o(this, n.call(this, e, t));
                    return i.version = M, i.state = {}, i.renderCount = 0, i.store = e[T] || t[T], i.propsMode = Boolean(e[T]), 
                    i.setWrappedInstance = i.setWrappedInstance.bind(i), d()(i.store, 'Could not find "' + T + '" in either the context or props of "' + u + '". Either wrap the root component in a <Provider>, or explicitly pass "' + T + '" as a prop to "' + u + '".'), 
                    i.initSelector(), i.initSubscription(), i;
                }
                return i(f, n), f.prototype.getChildContext = function() {
                    var e, t = this.propsMode ? null : this.subscription;
                    return e = {}, e[k] = t || this.context[k], e;
                }, f.prototype.componentDidMount = function() {
                    P && (this.subscription.trySubscribe(), this.selector.run(this.props), this.selector.shouldComponentUpdate && this.forceUpdate());
                }, f.prototype.componentWillReceiveProps = function(e) {
                    this.selector.run(e);
                }, f.prototype.shouldComponentUpdate = function() {
                    return this.selector.shouldComponentUpdate;
                }, f.prototype.componentWillUnmount = function() {
                    this.subscription && this.subscription.tryUnsubscribe(), this.subscription = null, 
                    this.notifyNestedSubs = a, this.store = null, this.selector.run = a, this.selector.shouldComponentUpdate = !1;
                }, f.prototype.getWrappedInstance = function() {
                    return d()(I, "To access the wrapped instance, you need to specify { withRef: true } in the options argument of the " + w + "() call."), 
                    this.wrappedInstance;
                }, f.prototype.setWrappedInstance = function(e) {
                    this.wrappedInstance = e;
                }, f.prototype.initSelector = function() {
                    var t = e(this.store.dispatch, s);
                    this.selector = c(t, this.store), this.selector.run(this.props);
                }, f.prototype.initSubscription = function() {
                    if (P) {
                        var e = (this.propsMode ? this.props : this.context)[k];
                        this.subscription = new y.a(this.store, e, this.onStateChange.bind(this)), this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription);
                    }
                }, f.prototype.onStateChange = function() {
                    this.selector.run(this.props), this.selector.shouldComponentUpdate ? (this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate, 
                    this.setState(g)) : this.notifyNestedSubs();
                }, f.prototype.notifyNestedSubsOnComponentDidUpdate = function() {
                    this.componentDidUpdate = void 0, this.notifyNestedSubs();
                }, f.prototype.isSubscribed = function() {
                    return Boolean(this.subscription) && this.subscription.isSubscribed();
                }, f.prototype.addExtraProps = function(e) {
                    if (!(I || S || this.propsMode && this.subscription)) return e;
                    var t = m({}, e);
                    return I && (t.ref = this.setWrappedInstance), S && (t[S] = this.renderCount++), 
                    this.propsMode && this.subscription && (t[k] = this.subscription), t;
                }, f.prototype.render = function() {
                    var e = this.selector;
                    if (e.shouldComponentUpdate = !1, e.error) throw e.error;
                    return Object(h.createElement)(t, this.addExtraProps(e.props));
                }, f;
            }(h.Component);
            return f.WrappedComponent = t, f.displayName = u, f.childContextTypes = R, f.contextTypes = N, 
            f.propTypes = N, l()(f, t);
        };
    }
    t.a = s;
    var f = n(48), l = n.n(f), p = n(49), d = n.n(p), h = n(0), y = (n.n(h), n(50)), v = n(17), m = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
    }, b = 0, g = {};
}, function(e, t, n) {
    "use strict";
    function r(e, t, n) {
        function i() {
            m === v && (m = v.slice());
        }
        function c() {
            return y;
        }
        function s(e) {
            if ("function" != typeof e) throw new Error("Expected listener to be a function.");
            var t = !0;
            return i(), m.push(e), function() {
                if (t) {
                    t = !1, i();
                    var n = m.indexOf(e);
                    m.splice(n, 1);
                }
            };
        }
        function f(e) {
            if (!Object(o.a)(e)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
            if (void 0 === e.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
            if (b) throw new Error("Reducers may not dispatch actions.");
            try {
                b = !0, y = h(y, e);
            } finally {
                b = !1;
            }
            for (var t = v = m, n = 0; n < t.length; n++) {
                (0, t[n])();
            }
            return e;
        }
        function l(e) {
            if ("function" != typeof e) throw new Error("Expected the nextReducer to be a function.");
            h = e, f({
                type: a.INIT
            });
        }
        function p() {
            var e, t = s;
            return e = {
                subscribe: function(e) {
                    function n() {
                        e.next && e.next(c());
                    }
                    if ("object" != typeof e) throw new TypeError("Expected the observer to be an object.");
                    return n(), {
                        unsubscribe: t(n)
                    };
                }
            }, e[u.a] = function() {
                return this;
            }, e;
        }
        var d;
        if ("function" == typeof t && void 0 === n && (n = t, t = void 0), void 0 !== n) {
            if ("function" != typeof n) throw new Error("Expected the enhancer to be a function.");
            return n(r)(e, t);
        }
        if ("function" != typeof e) throw new Error("Expected the reducer to be a function.");
        var h = e, y = t, v = [], m = v, b = !1;
        return f({
            type: a.INIT
        }), d = {
            dispatch: f,
            subscribe: s,
            getState: c,
            replaceReducer: l
        }, d[u.a] = p, d;
    }
    n.d(t, "a", function() {
        return a;
    }), t.b = r;
    var o = n(10), i = n(62), u = n.n(i), a = {
        INIT: "@@redux/INIT"
    };
}, function(e, t, n) {
    "use strict";
    var r = n(55), o = r.a.Symbol;
    t.a = o;
}, function(e, t) {
    var n;
    n = function() {
        return this;
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this");
    } catch (e) {
        "object" == typeof window && (n = window);
    }
    e.exports = n;
}, function(e, t, n) {
    "use strict";
}, function(e, t, n) {
    "use strict";
    function r() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return 0 === t.length ? function(e) {
            return e;
        } : 1 === t.length ? t[0] : t.reduce(function(e, t) {
            return function() {
                return e(t.apply(void 0, arguments));
            };
        });
    }
    t.a = r;
}, function(e, t, n) {
    "use strict";
    function r(e) {
        return function(t, n) {
            function r() {
                return o;
            }
            var o = e(t, n);
            return r.dependsOnOwnProps = !1, r;
        };
    }
    function o(e) {
        return null !== e.dependsOnOwnProps && void 0 !== e.dependsOnOwnProps ? Boolean(e.dependsOnOwnProps) : 1 !== e.length;
    }
    function i(e, t) {
        return function(t, n) {
            var r = (n.displayName, function(e, t) {
                return r.dependsOnOwnProps ? r.mapToProps(e, t) : r.mapToProps(e);
            });
            return r.dependsOnOwnProps = !0, r.mapToProps = function(t, n) {
                r.mapToProps = e, r.dependsOnOwnProps = o(e);
                var i = r(t, n);
                return "function" == typeof i && (r.mapToProps = i, r.dependsOnOwnProps = o(i), 
                i = r(t, n)), i;
            }, r;
        };
    }
    t.a = r, t.b = i;
    n(25);
}, function(e, t, n) {
    "use strict";
    n(10), n(9);
}, function(e, t, n) {
    "use strict";
    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.LoadingBar = t.TERMINATING_ANIMATION_TIME = t.ANIMATION_TIME = t.PROGRESS_INCREASE = t.MAX_PROGRESS = t.UPDATE_TIME = void 0;
    var u = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
    }, a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
        };
    }(), c = n(0), s = function(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(c), f = n(2), l = n(5), p = t.UPDATE_TIME = 200, d = t.MAX_PROGRESS = 99, h = t.PROGRESS_INCREASE = 10, y = t.ANIMATION_TIME = 4 * p, v = t.TERMINATING_ANIMATION_TIME = p / 2, m = {
        terminatingAnimationTimeout: null,
        percent: 0,
        progressInterval: null
    }, b = t.LoadingBar = function(e) {
        function t(e) {
            r(this, t);
            var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return n.state = u({}, m, {
                hasMounted: !1
            }), n.boundSimulateProgress = n.simulateProgress.bind(n), n.boundResetProgress = n.resetProgress.bind(n), 
            n;
        }
        return i(t, e), a(t, [ {
            key: "componentDidMount",
            value: function() {
                this.setState({
                    hasMounted: !0
                }), this.props.loading > 0 && this.launch();
            }
        }, {
            key: "componentWillReceiveProps",
            value: function(e) {
                this.shouldStart(e) ? this.launch() : this.shouldStop(e) && (0 !== this.state.percent || this.props.showFastActions ? this.setState({
                    percent: 100
                }) : (clearInterval(this.state.progressInterval), this.resetProgress()));
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                clearInterval(this.state.progressInterval), clearTimeout(this.state.terminatingAnimationTimeout);
            }
        }, {
            key: "shouldStart",
            value: function(e) {
                return 0 === this.props.loading && e.loading > 0;
            }
        }, {
            key: "shouldStop",
            value: function(e) {
                return this.state.progressInterval && 0 === e.loading;
            }
        }, {
            key: "shouldShow",
            value: function() {
                return this.state.percent > 0 && this.state.percent <= 100;
            }
        }, {
            key: "launch",
            value: function() {
                var e = this.state, t = e.progressInterval, n = e.percent, r = this.state.terminatingAnimationTimeout, o = !t, i = 100 === n;
                o && (t = setInterval(this.boundSimulateProgress, this.props.updateTime)), i && clearTimeout(r), 
                n = 0, this.setState({
                    progressInterval: t,
                    percent: n
                });
            }
        }, {
            key: "newPercent",
            value: function() {
                var e = this.state.percent;
                return e + this.props.progressIncrease * Math.cos(e * (Math.PI / 2 / 100));
            }
        }, {
            key: "simulateProgress",
            value: function() {
                var e = this.state, t = e.progressInterval, n = e.percent, r = e.terminatingAnimationTimeout, o = this.props.maxProgress;
                100 === n ? (clearInterval(t), r = setTimeout(this.boundResetProgress, v), t = null) : this.newPercent() <= o && (n = this.newPercent()), 
                this.setState({
                    percent: n,
                    progressInterval: t,
                    terminatingAnimationTimeout: r
                });
            }
        }, {
            key: "resetProgress",
            value: function() {
                this.setState(m);
            }
        }, {
            key: "buildStyle",
            value: function() {
                var e = 100 !== this.state.percent ? y : v, t = {
                    opacity: "1",
                    transform: "scaleX(" + this.state.percent / 100 + ")",
                    transformOrigin: "left",
                    transition: "transform " + e + "ms linear",
                    width: "100%",
                    willChange: "transform, opacity"
                };
                return this.props.className || (t.height = "3px", t.backgroundColor = "red", t.position = "absolute"), 
                this.shouldShow() ? t.opacity = "1" : t.opacity = "0", u({}, t, this.props.style);
            }
        }, {
            key: "render",
            value: function() {
                return this.state.hasMounted ? s.default.createElement("div", null, s.default.createElement("div", {
                    style: this.buildStyle(),
                    className: this.props.className
                }), s.default.createElement("div", {
                    style: {
                        display: "table",
                        clear: "both"
                    }
                })) : s.default.createElement("div", null);
            }
        } ]), t;
    }(s.default.Component);
    b.propTypes = {
        className: f.string,
        loading: f.number,
        maxProgress: f.number,
        progressIncrease: f.number,
        showFastActions: f.bool,
        style: f.object,
        updateTime: f.number
    }, b.defaultProps = {
        className: void 0,
        loading: 0,
        maxProgress: d,
        progressIncrease: h,
        showFastActions: !1,
        style: {},
        updateTime: p
    };
    var g = function(e) {
        return {
            loading: e.loadingBar
        };
    };
    t.default = (0, l.connect)(g)(b);
}, function(e, t, n) {
    "use strict";
    function r() {
        return {
            type: a
        };
    }
    function o() {
        return {
            type: c
        };
    }
    function i() {
        return {
            type: s
        };
    }
    function u() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = void 0;
        switch (t.type) {
          case a:
            n = e + 1;
            break;

          case c:
            n = e > 0 ? e - 1 : 0;
            break;

          case s:
            n = 0;
            break;

          default:
            return e;
        }
        return n;
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.showLoading = r, t.hideLoading = o, t.resetLoading = i, t.loadingBarReducer = u;
    var a = t.SHOW = "loading-bar/SHOW", c = t.HIDE = "loading-bar/HIDE", s = t.RESET = "loading-bar/RESET";
}, function(e, t, n) {
    "use strict";
    e.exports = function(e, t) {
        return function() {
            for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
            return e.apply(t, n);
        };
    };
}, function(e, t, n) {
    "use strict";
    var r = n(1), o = n(107), i = n(109), u = n(110), a = n(111), c = n(30), s = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || n(112);
    e.exports = function(e) {
        return new Promise(function(t, f) {
            var l = e.data, p = e.headers;
            r.isFormData(l) && delete p["Content-Type"];
            var d = new XMLHttpRequest(), h = "onreadystatechange", y = !1;
            if (window.XMLHttpRequest || "undefined" == typeof window || !window.XDomainRequest || "withCredentials" in d || a(e.url) || (d = new window.XDomainRequest(), 
            h = "onload", y = !0, d.onprogress = function() {}, d.ontimeout = function() {}), 
            e.auth) {
                var v = e.auth.username || "", m = e.auth.password || "";
                p.Authorization = "Basic " + s(v + ":" + m);
            }
            if (d.open(e.method.toUpperCase(), i(e.url, e.params, e.paramsSerializer), !0), 
            d.timeout = e.timeout, d[h] = function() {
                if (d && (4 === d.readyState || y) && (0 !== d.status || d.responseURL && 0 === d.responseURL.indexOf("file:"))) {
                    var n = "getAllResponseHeaders" in d ? u(d.getAllResponseHeaders()) : null, r = e.responseType && "text" !== e.responseType ? d.response : d.responseText, i = {
                        data: r,
                        status: 1223 === d.status ? 204 : d.status,
                        statusText: 1223 === d.status ? "No Content" : d.statusText,
                        headers: n,
                        config: e,
                        request: d
                    };
                    o(t, f, i), d = null;
                }
            }, d.onerror = function() {
                f(c("Network Error", e, null, d)), d = null;
            }, d.ontimeout = function() {
                f(c("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", d)), d = null;
            }, r.isStandardBrowserEnv()) {
                var b = n(113), g = (e.withCredentials || a(e.url)) && e.xsrfCookieName ? b.read(e.xsrfCookieName) : void 0;
                g && (p[e.xsrfHeaderName] = g);
            }
            if ("setRequestHeader" in d && r.forEach(p, function(e, t) {
                void 0 === l && "content-type" === t.toLowerCase() ? delete p[t] : d.setRequestHeader(t, e);
            }), e.withCredentials && (d.withCredentials = !0), e.responseType) try {
                d.responseType = e.responseType;
            } catch (t) {
                if ("json" !== e.responseType) throw t;
            }
            "function" == typeof e.onDownloadProgress && d.addEventListener("progress", e.onDownloadProgress), 
            "function" == typeof e.onUploadProgress && d.upload && d.upload.addEventListener("progress", e.onUploadProgress), 
            e.cancelToken && e.cancelToken.promise.then(function(e) {
                d && (d.abort(), f(e), d = null);
            }), void 0 === l && (l = null), d.send(l);
        });
    };
}, function(e, t, n) {
    "use strict";
    var r = n(108);
    e.exports = function(e, t, n, o, i) {
        var u = new Error(e);
        return r(u, t, n, o, i);
    };
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return !(!e || !e.__CANCEL__);
    };
}, function(e, t, n) {
    "use strict";
    function r(e) {
        this.message = e;
    }
    r.prototype.toString = function() {
        return "Cancel" + (this.message ? ": " + this.message : "");
    }, r.prototype.__CANCEL__ = !0, e.exports = r;
}, function(e, t, n) {
    "use strict";
    function r(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t;
    }
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.denormalize = t.normalize = t.schema = void 0;
    var i = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
    }, u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, a = n(121), c = o(a), s = n(122), f = o(s), l = n(123), p = o(l), d = n(124), h = r(d), y = n(125), v = r(y), m = n(6), b = r(m), g = function e(t, n, r, o, i) {
        if ("object" !== (void 0 === t ? "undefined" : u(t)) || !t) return t;
        if ("object" === (void 0 === o ? "undefined" : u(o)) && (!o.normalize || "function" != typeof o.normalize)) {
            return (Array.isArray(o) ? h.normalize : v.normalize)(o, t, n, r, e, i);
        }
        return o.normalize(t, n, r, e, i);
    }, O = function(e) {
        return function(t, n, r, o, i) {
            var u = t.key, a = t.getId(r, o, i);
            u in e || (e[u] = {});
            var c = e[u][a];
            e[u][a] = c ? t.merge(c, n) : n;
        };
    }, w = (t.schema = {
        Array: h.default,
        Entity: c.default,
        Object: v.default,
        Union: f.default,
        Values: p.default
    }, t.normalize = function(e, t) {
        if (!e || "object" !== (void 0 === e ? "undefined" : u(e))) throw new Error('Unexpected input given to normalize. Expected type to be "object", found "' + (void 0 === e ? "undefined" : u(e)) + '".');
        var n = {}, r = O(n);
        return {
            entities: n,
            result: g(e, e, null, t, r)
        };
    }, function(e, t, n, r, o) {
        var a = r(e, t);
        if ("object" !== (void 0 === a ? "undefined" : u(a)) || null === a) return a;
        if (o[t.key] || (o[t.key] = {}), !o[t.key][e]) {
            var c = b.isImmutable(a) ? a : i({}, a);
            o[t.key][e] = c, o[t.key][e] = t.denormalize(c, n);
        }
        return o[t.key][e];
    }), _ = function(e) {
        var t = {}, n = S(e);
        return function e(r, o) {
            if ("object" === (void 0 === o ? "undefined" : u(o)) && (!o.denormalize || "function" != typeof o.denormalize)) {
                return (Array.isArray(o) ? h.denormalize : v.denormalize)(o, r, e);
            }
            return void 0 === r || null === r ? r : o instanceof c.default ? w(r, o, e, n, t) : o.denormalize(r, e);
        };
    }, S = function(e) {
        var t = b.isImmutable(e);
        return function(n, r) {
            var o = r.key;
            return "object" === (void 0 === n ? "undefined" : u(n)) ? n : t ? e.getIn([ o, n.toString() ]) : e[o][n];
        };
    };
    t.denormalize = function(e, t, n) {
        if (void 0 !== e) return _(n)(e, t);
    };
}, function(e, t, n) {
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    var o = n(0), i = r(o), u = n(8), a = n(5), c = n(73), s = r(c), f = n(85), l = r(f), p = (0, 
    s.default)();
    (0, u.render)(i.default.createElement(a.Provider, {
        store: p
    }, i.default.createElement(l.default, null)), document.getElementById("root"));
}, , , , , , , , , , , function(e, t, n) {
    "use strict";
    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }
    function u() {
        var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "store", n = arguments[1], u = n || t + "Subscription", c = function(e) {
            function n(i, u) {
                r(this, n);
                var a = o(this, e.call(this, i, u));
                return a[t] = i.store, a;
            }
            return i(n, e), n.prototype.getChildContext = function() {
                var e;
                return e = {}, e[t] = this[t], e[u] = null, e;
            }, n.prototype.render = function() {
                return a.Children.only(this.props.children);
            }, n;
        }(a.Component);
        return c.propTypes = {
            store: f.a.isRequired,
            children: s.a.element.isRequired
        }, c.childContextTypes = (e = {}, e[t] = f.a.isRequired, e[u] = f.b, e), c;
    }
    t.a = u;
    var a = n(0), c = (n.n(a), n(2)), s = n.n(c), f = n(17);
    n(9);
    t.b = u();
}, function(e, t, n) {
    "use strict";
    var r = n(4), o = n(7), i = n(47);
    e.exports = function() {
        function e(e, t, n, r, u, a) {
            a !== i && o(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
        }
        function t() {
            return e;
        }
        e.isRequired = e;
        var n = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t
        };
        return n.checkPropTypes = r, n.PropTypes = n, n;
    };
}, function(e, t, n) {
    "use strict";
    e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
}, function(e, t, n) {
    "use strict";
    var r = {
        childContextTypes: !0,
        contextTypes: !0,
        defaultProps: !0,
        displayName: !0,
        getDefaultProps: !0,
        mixins: !0,
        propTypes: !0,
        type: !0
    }, o = {
        name: !0,
        length: !0,
        prototype: !0,
        caller: !0,
        callee: !0,
        arguments: !0,
        arity: !0
    }, i = Object.defineProperty, u = Object.getOwnPropertyNames, a = Object.getOwnPropertySymbols, c = Object.getOwnPropertyDescriptor, s = Object.getPrototypeOf, f = s && s(Object);
    e.exports = function e(t, n, l) {
        if ("string" != typeof n) {
            if (f) {
                var p = s(n);
                p && p !== f && e(t, p, l);
            }
            var d = u(n);
            a && (d = d.concat(a(n)));
            for (var h = 0; h < d.length; ++h) {
                var y = d[h];
                if (!(r[y] || o[y] || l && l[y])) {
                    var v = c(n, y);
                    try {
                        i(t, y, v);
                    } catch (e) {}
                }
            }
            return t;
        }
        return t;
    };
}, function(e, t, n) {
    "use strict";
    var r = function(e, t, n, r, o, i, u, a) {
        if (!e) {
            var c;
            if (void 0 === t) c = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."); else {
                var s = [ n, r, o, i, u, a ], f = 0;
                c = new Error(t.replace(/%s/g, function() {
                    return s[f++];
                })), c.name = "Invariant Violation";
            }
            throw c.framesToPop = 1, c;
        }
    };
    e.exports = r;
}, function(e, t, n) {
    "use strict";
    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function o() {
        var e = [], t = [];
        return {
            clear: function() {
                t = i, e = i;
            },
            notify: function() {
                for (var n = e = t, r = 0; r < n.length; r++) n[r]();
            },
            get: function() {
                return t;
            },
            subscribe: function(n) {
                var r = !0;
                return t === e && (t = e.slice()), t.push(n), function() {
                    r && e !== i && (r = !1, t === e && (t = e.slice()), t.splice(t.indexOf(n), 1));
                };
            }
        };
    }
    n.d(t, "a", function() {
        return a;
    });
    var i = null, u = {
        notify: function() {}
    }, a = function() {
        function e(t, n, o) {
            r(this, e), this.store = t, this.parentSub = n, this.onStateChange = o, this.unsubscribe = null, 
            this.listeners = u;
        }
        return e.prototype.addNestedSub = function(e) {
            return this.trySubscribe(), this.listeners.subscribe(e);
        }, e.prototype.notifyNestedSubs = function() {
            this.listeners.notify();
        }, e.prototype.isSubscribed = function() {
            return Boolean(this.unsubscribe);
        }, e.prototype.trySubscribe = function() {
            this.unsubscribe || (this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange), 
            this.listeners = o());
        }, e.prototype.tryUnsubscribe = function() {
            this.unsubscribe && (this.unsubscribe(), this.unsubscribe = null, this.listeners.clear(), 
            this.listeners = u);
        }, e;
    }();
}, function(e, t, n) {
    "use strict";
    function r(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n;
    }
    function o(e, t, n) {
        for (var r = t.length - 1; r >= 0; r--) {
            var o = t[r](e);
            if (o) return o;
        }
        return function(t, r) {
            throw new Error("Invalid value of type " + typeof e + " for " + n + " argument when connecting component " + r.wrappedComponentName + ".");
        };
    }
    function i(e, t) {
        return e === t;
    }
    var u = n(18), a = n(52), c = n(53), s = n(69), f = n(70), l = n(71), p = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
    };
    t.a = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.connectHOC, n = void 0 === t ? u.a : t, d = e.mapStateToPropsFactories, h = void 0 === d ? s.a : d, y = e.mapDispatchToPropsFactories, v = void 0 === y ? c.a : y, m = e.mergePropsFactories, b = void 0 === m ? f.a : m, g = e.selectorFactory, O = void 0 === g ? l.a : g;
        return function(e, t, u) {
            var c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, s = c.pure, f = void 0 === s || s, l = c.areStatesEqual, d = void 0 === l ? i : l, y = c.areOwnPropsEqual, m = void 0 === y ? a.a : y, g = c.areStatePropsEqual, w = void 0 === g ? a.a : g, _ = c.areMergedPropsEqual, S = void 0 === _ ? a.a : _, E = r(c, [ "pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual" ]), P = o(e, h, "mapStateToProps"), j = o(t, v, "mapDispatchToProps"), T = o(u, b, "mergeProps");
            return n(O, p({
                methodName: "connect",
                getDisplayName: function(e) {
                    return "Connect(" + e + ")";
                },
                shouldHandleStateChanges: Boolean(e),
                initMapStateToProps: P,
                initMapDispatchToProps: j,
                initMergeProps: T,
                pure: f,
                areStatesEqual: d,
                areOwnPropsEqual: m,
                areStatePropsEqual: w,
                areMergedPropsEqual: S
            }, E));
        };
    }();
}, function(e, t, n) {
    "use strict";
    function r(e, t) {
        return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e !== e && t !== t;
    }
    function o(e, t) {
        if (r(e, t)) return !0;
        if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
        var n = Object.keys(e), o = Object.keys(t);
        if (n.length !== o.length) return !1;
        for (var u = 0; u < n.length; u++) if (!i.call(t, n[u]) || !r(e[n[u]], t[n[u]])) return !1;
        return !0;
    }
    t.a = o;
    var i = Object.prototype.hasOwnProperty;
}, function(e, t, n) {
    "use strict";
    function r(e) {
        return "function" == typeof e ? Object(a.b)(e, "mapDispatchToProps") : void 0;
    }
    function o(e) {
        return e ? void 0 : Object(a.a)(function(e) {
            return {
                dispatch: e
            };
        });
    }
    function i(e) {
        return e && "object" == typeof e ? Object(a.a)(function(t) {
            return Object(u.bindActionCreators)(e, t);
        }) : void 0;
    }
    var u = n(3), a = n(24);
    t.a = [ r, o, i ];
}, function(e, t, n) {
    "use strict";
    function r(e) {
        return null == e ? void 0 === e ? c : a : s && s in Object(e) ? Object(i.a)(e) : Object(u.a)(e);
    }
    var o = n(20), i = n(57), u = n(58), a = "[object Null]", c = "[object Undefined]", s = o.a ? o.a.toStringTag : void 0;
    t.a = r;
}, function(e, t, n) {
    "use strict";
    var r = n(56), o = "object" == typeof self && self && self.Object === Object && self, i = r.a || o || Function("return this")();
    t.a = i;
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var n = "object" == typeof e && e && e.Object === Object && e;
        t.a = n;
    }).call(t, n(21));
}, function(e, t, n) {
    "use strict";
    function r(e) {
        var t = u.call(e, c), n = e[c];
        try {
            e[c] = void 0;
            var r = !0;
        } catch (e) {}
        var o = a.call(e);
        return r && (t ? e[c] = n : delete e[c]), o;
    }
    var o = n(20), i = Object.prototype, u = i.hasOwnProperty, a = i.toString, c = o.a ? o.a.toStringTag : void 0;
    t.a = r;
}, function(e, t, n) {
    "use strict";
    function r(e) {
        return i.call(e);
    }
    var o = Object.prototype, i = o.toString;
    t.a = r;
}, function(e, t, n) {
    "use strict";
    var r = n(60), o = Object(r.a)(Object.getPrototypeOf, Object);
    t.a = o;
}, function(e, t, n) {
    "use strict";
    function r(e, t) {
        return function(n) {
            return e(t(n));
        };
    }
    t.a = r;
}, function(e, t, n) {
    "use strict";
    function r(e) {
        return null != e && "object" == typeof e;
    }
    t.a = r;
}, function(e, t, n) {
    e.exports = n(63);
}, function(e, t, n) {
    "use strict";
    (function(e, r) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o, i = n(65), u = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(i);
        o = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== e ? e : r;
        var a = (0, u.default)(o);
        t.default = a;
    }).call(t, n(21), n(64)(e));
}, function(e, t) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), 
        Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function() {
                return e.l;
            }
        }), Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function() {
                return e.i;
            }
        }), e.webpackPolyfill = 1), e;
    };
}, function(e, t, n) {
    "use strict";
    function r(e) {
        var t, n = e.Symbol;
        return "function" == typeof n ? n.observable ? t = n.observable : (t = n("observable"), 
        n.observable = t) : t = "@@observable", t;
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = r;
}, function(e, t, n) {
    "use strict";
    function r(e, t) {
        var n = t && t.type;
        return "Given action " + (n && '"' + n.toString() + '"' || "an action") + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.';
    }
    function o(e) {
        Object.keys(e).forEach(function(t) {
            var n = e[t];
            if (void 0 === n(void 0, {
                type: u.a.INIT
            })) throw new Error('Reducer "' + t + "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");
            if (void 0 === n(void 0, {
                type: "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".")
            })) throw new Error('Reducer "' + t + "\" returned undefined when probed with a random type. Don't try to handle " + u.a.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.');
        });
    }
    function i(e) {
        for (var t = Object.keys(e), n = {}, i = 0; i < t.length; i++) {
            var u = t[i];
            "function" == typeof e[u] && (n[u] = e[u]);
        }
        var a = Object.keys(n), c = void 0;
        try {
            o(n);
        } catch (e) {
            c = e;
        }
        return function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments[1];
            if (c) throw c;
            for (var o = !1, i = {}, u = 0; u < a.length; u++) {
                var s = a[u], f = n[s], l = e[s], p = f(l, t);
                if (void 0 === p) {
                    var d = r(s, t);
                    throw new Error(d);
                }
                i[s] = p, o = o || p !== l;
            }
            return o ? i : e;
        };
    }
    t.a = i;
    var u = n(19);
    n(10), n(22);
}, function(e, t, n) {
    "use strict";
    function r(e, t) {
        return function() {
            return t(e.apply(void 0, arguments));
        };
    }
    function o(e, t) {
        if ("function" == typeof e) return r(e, t);
        if ("object" != typeof e || null === e) throw new Error("bindActionCreators expected an object or a function, instead received " + (null === e ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
        for (var n = Object.keys(e), o = {}, i = 0; i < n.length; i++) {
            var u = n[i], a = e[u];
            "function" == typeof a && (o[u] = r(a, t));
        }
        return o;
    }
    t.a = o;
}, function(e, t, n) {
    "use strict";
    function r() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return function(e) {
            return function(n, r, u) {
                var a = e(n, r, u), c = a.dispatch, s = [], f = {
                    getState: a.getState,
                    dispatch: function(e) {
                        return c(e);
                    }
                };
                return s = t.map(function(e) {
                    return e(f);
                }), c = o.a.apply(void 0, s)(a.dispatch), i({}, a, {
                    dispatch: c
                });
            };
        };
    }
    t.a = r;
    var o = n(23), i = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
    };
}, function(e, t, n) {
    "use strict";
    function r(e) {
        return "function" == typeof e ? Object(i.b)(e, "mapStateToProps") : void 0;
    }
    function o(e) {
        return e ? void 0 : Object(i.a)(function() {
            return {};
        });
    }
    var i = n(24);
    t.a = [ r, o ];
}, function(e, t, n) {
    "use strict";
    function r(e, t, n) {
        return a({}, n, e, t);
    }
    function o(e) {
        return function(t, n) {
            var r = (n.displayName, n.pure), o = n.areMergedPropsEqual, i = !1, u = void 0;
            return function(t, n, a) {
                var c = e(t, n, a);
                return i ? r && o(c, u) || (u = c) : (i = !0, u = c), u;
            };
        };
    }
    function i(e) {
        return "function" == typeof e ? o(e) : void 0;
    }
    function u(e) {
        return e ? void 0 : function() {
            return r;
        };
    }
    var a = (n(25), Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
    });
    t.a = [ i, u ];
}, function(e, t, n) {
    "use strict";
    function r(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n;
    }
    function o(e, t, n, r) {
        return function(o, i) {
            return n(e(o, i), t(r, i), i);
        };
    }
    function i(e, t, n, r, o) {
        function i(o, i) {
            return h = o, y = i, v = e(h, y), m = t(r, y), b = n(v, m, y), d = !0, b;
        }
        function u() {
            return v = e(h, y), t.dependsOnOwnProps && (m = t(r, y)), b = n(v, m, y);
        }
        function a() {
            return e.dependsOnOwnProps && (v = e(h, y)), t.dependsOnOwnProps && (m = t(r, y)), 
            b = n(v, m, y);
        }
        function c() {
            var t = e(h, y), r = !p(t, v);
            return v = t, r && (b = n(v, m, y)), b;
        }
        function s(e, t) {
            var n = !l(t, y), r = !f(e, h);
            return h = e, y = t, n && r ? u() : n ? a() : r ? c() : b;
        }
        var f = o.areStatesEqual, l = o.areOwnPropsEqual, p = o.areStatePropsEqual, d = !1, h = void 0, y = void 0, v = void 0, m = void 0, b = void 0;
        return function(e, t) {
            return d ? s(e, t) : i(e, t);
        };
    }
    function u(e, t) {
        var n = t.initMapStateToProps, u = t.initMapDispatchToProps, a = t.initMergeProps, c = r(t, [ "initMapStateToProps", "initMapDispatchToProps", "initMergeProps" ]), s = n(e, c), f = u(e, c), l = a(e, c);
        return (c.pure ? i : o)(s, f, l, e, c);
    }
    t.a = u;
    n(72);
}, function(e, t, n) {
    "use strict";
    n(9);
}, function(e, t, n) {
    e.exports = n(74);
}, function(e, t, n) {
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function o(e) {
        return (0, i.createStore)(f.default, e, d);
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = o;
    var i = n(3), u = n(75), a = n(78), c = r(a), s = n(79), f = r(s), l = n(11), p = (0, 
    u.composeWithDevTools)({}), d = p((0, i.applyMiddleware)(c.default, (0, l.loadingBarMiddleware)({
        promiseTypeSuffixes: [ "REQUEST", "SUCCESS", "FAILURE" ]
    })));
}, function(e, t, n) {
    "use strict";
    var r = (n(3).compose, n(76));
    t.__esModule = !0, t.composeWithDevTools = r.composeWithDevTools, t.devToolsEnhancer = r.devToolsEnhancer;
}, function(e, t, n) {
    "use strict";
    function r() {
        var e = arguments[0] || {};
        return e.features = {
            pause: !0,
            export: !0,
            test: !0
        }, e.type = "redux", void 0 === e.autoPause && (e.autoPause = !0), void 0 === e.latency && (e.latency = 500), 
        function(t) {
            return function(n, r, o) {
                var u = t(n, r, o), a = u.dispatch, c = window.__REDUX_DEVTOOLS_EXTENSION__.connect(e);
                c.init(u.getState());
                var s = function(e) {
                    var t = a(e);
                    return c.send(e, u.getState()), t;
                };
                return Object.assign ? Object.assign(u, {
                    dispatch: s
                }) : i(u, "dispatch", s);
            };
        };
    }
    function o(e) {
        return function() {
            return u(u.apply(null, arguments), r(e));
        };
    }
    var i = n(77), u = n(3).compose;
    t.__esModule = !0, t.composeWithDevTools = function() {
        if ("undefined" != typeof window && window.__REDUX_DEVTOOLS_EXTENSION__) return 0 === arguments.length ? r() : "object" == typeof arguments[0] ? o(arguments[0]) : o().apply(null, arguments);
        if (0 !== arguments.length) return "object" == typeof arguments[0] ? u : u.apply(null, arguments);
    }, t.devToolsEnhancer = "undefined" != typeof window && window.__REDUX_DEVTOOLS_EXTENSION__ ? r : function() {
        return function(e) {
            return e;
        };
    };
}, function(e, t) {
    function n(e, t, n) {
        for (var o = r(e), i = {}, u = 0, a = o.length; u < a; u++) {
            var c = o[u];
            i[c] = e[c];
        }
        return i[t] = n, i;
    }
    var r = Object.keys || function(e) {
        var t = [];
        for (var n in e) ({}).hasOwnProperty.call(e, n) && t.push(n);
        return t;
    };
    e.exports = n;
}, function(e, t, n) {
    "use strict";
    function r(e) {
        return function(t) {
            var n = t.dispatch, r = t.getState;
            return function(t) {
                return function(o) {
                    return "function" == typeof o ? o(n, r, e) : t(o);
                };
            };
        };
    }
    t.__esModule = !0;
    var o = r();
    o.withExtraArgument = r, t.default = o;
}, function(e, t, n) {
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(3), i = n(11), u = n(82), a = r(u), c = n(84), s = r(c), f = (0, o.combineReducers)({
        storage: a.default,
        compositions: s.default,
        loadingBar: i.loadingBarReducer
    });
    t.default = f;
}, function(e, t, n) {
    "use strict";
    function r() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.promiseTypeSuffixes || u;
        return function(e) {
            var n = e.dispatch;
            return function(e) {
                return function(r) {
                    if (r.type) {
                        var u = o(t, 3), a = u[0], c = u[1], s = u[2], f = new RegExp(a + "$", "g"), l = new RegExp(c + "$", "g"), p = new RegExp(s + "$", "g");
                        r.type.match(f) ? n((0, i.showLoading)()) : (r.type.match(l) || r.type.match(p)) && n((0, 
                        i.hideLoading)());
                    }
                    return e(r);
                };
            };
        };
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function() {
        function e(e, t) {
            var n = [], r = !0, o = !1, i = void 0;
            try {
                for (var u, a = e[Symbol.iterator](); !(r = (u = a.next()).done) && (n.push(u.value), 
                !t || n.length !== t); r = !0) ;
            } catch (e) {
                o = !0, i = e;
            } finally {
                try {
                    !r && a.return && a.return();
                } finally {
                    if (o) throw i;
                }
            }
            return n;
        }
        return function(t, n) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return e(t, n);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
    }();
    t.default = r;
    var i = n(27), u = [ "PENDING", "FULFILLED", "REJECTED" ];
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(5), o = n(26), i = function(e) {
        return {
            loading: e.get("loadingBar")
        };
    };
    t.default = (0, r.connect)(i)(o.LoadingBar);
}, function(e, t, n) {
    function r() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u, t = arguments[1];
        switch (t.type) {
          case o.IS_OPEN_WINDOW_TOGGLE:
            (0, i.saveState)("isOpenWindow", t.payload);
            return {
                isOpenWindow: (0, i.getState)("isOpenWindow")
            };

          default:
            return e;
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(12), i = n(83), u = {
        isOpenWindow: (0, i.getState)("isOpenWindow") || !1
    };
    t.default = r;
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.getState = function(e) {
        try {
            var t = localStorage.getItem(e);
            if (null === t) return;
            return JSON.parse(t);
        } catch (e) {
            return;
        }
    }, t.saveState = function(e, t) {
        try {
            var n = JSON.stringify(t);
            localStorage.setItem(e, n);
        } catch (e) {}
    };
}, function(e, t, n) {
    function r() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u, t = arguments[1];
        switch (t.type) {
          case i.COMPOSITIONS_GET_REQUEST:
            return o({}, e, {
                isFetching: !0,
                error: null
            });

          case i.COMPOSITIONS_GET_SUCCESS:
            return o({}, e, {
                isFetching: !1,
                error: null,
                itemsByKey: o({}, e.itemsByKey, t.payload)
            });

          case i.COMPOSITIONS_GET_FAILURE:
            return o({}, e, {
                isFetching: !1,
                error: t.payload
            });

          default:
            return e;
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
    }, i = n(12), u = {
        isFetching: !1,
        error: null,
        itemsByKey: {}
    };
    t.default = r;
}, function(e, t, n) {
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function i(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    function u(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
        };
    }(), c = n(0), s = r(c), f = n(2), l = r(f), p = n(5), d = n(3), h = n(86), y = r(h), v = n(88), m = r(v), b = n(90), g = r(b), O = n(94), w = r(O), _ = n(96), S = r(_), E = n(98), P = n(11), j = r(P), T = n(100), C = function(e) {
        function t(e, n) {
            o(this, t);
            var r = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
            return r.onTogglePopup = r.onTogglePopup.bind(r), r.onKeyEsc = r.onKeyEsc.bind(r), 
            r;
        }
        return u(t, e), a(t, [ {
            key: "componentWillMount",
            value: function() {
                function e() {
                    this.props.loadCompositionsIfNeed(), document.addEventListener("keydown", this.onKeyEsc);
                }
                return e;
            }()
        }, {
            key: "componentWillUnmount",
            value: function() {
                function e() {
                    document.removeEventListener("keydown", this.onKeyEsc);
                }
                return e;
            }()
        }, {
            key: "onKeyEsc",
            value: function() {
                function e(e) {
                    var t = void 0;
                    null === e.which && (t = e.keyCode), 0 !== e.which && (t = e.keyCode), 27 === t && this.onTogglePopup();
                }
                return e;
            }()
        }, {
            key: "onTogglePopup",
            value: function() {
                function e() {
                    this.props.isOpenWindowToggle();
                }
                return e;
            }()
        }, {
            key: "render",
            value: function() {
                function e() {
                    var e = this.props, t = e.title, n = e.compositions, r = e.isOpenWindow, o = r && !n.isFetching, i = null !== n.error;
                    return s.default.createElement(y.default, null, s.default.createElement(j.default, null), s.default.createElement("br", null), s.default.createElement(m.default, {
                        onClick: this.onTogglePopup
                    }, "Popup"), o && s.default.createElement(g.default, {
                        onClick: this.onTogglePopup
                    }, s.default.createElement(w.default, {
                        title: t
                    }, i ? n.error : n.items.map(function(e) {
                        return s.default.createElement(S.default, {
                            key: e.id,
                            src: e.thumbnails.default.url,
                            title: e.title,
                            description: e.description
                        });
                    }))));
                }
                return e;
            }()
        } ]), t;
    }(c.Component);
    C.propTypes = {
        title: l.default.string,
        compositions: l.default.object.isRequired,
        isOpenWindow: l.default.bool.isRequired,
        loadCompositionsIfNeed: l.default.func.isRequired,
        isOpenWindowToggle: l.default.func.isRequired
    }, C.defaultProps = {
        title: "Музыкальные композиции beeline"
    };
    var I = function(e) {
        return {
            compositions: (0, E.compositionsSelector)(e),
            isOpenWindow: e.storage.isOpenWindow
        };
    }, x = function(e) {
        return (0, d.bindActionCreators)({
            loadCompositionsIfNeed: T.loadCompositionsIfNeed,
            isOpenWindowToggle: T.isOpenWindowToggle
        }, e);
    };
    t.default = (0, p.connect)(I, x)(C);
}, function(e, t, n) {
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function o(e) {
        var t = e.children;
        return u.default.createElement("div", null, t);
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(0), u = r(i), a = n(2), c = r(a), s = n(87);
    r(s);
    o.propTypes = {
        children: c.default.oneOfType([ c.default.element, c.default.array ])
    }, o.defaultProps = {}, t.default = o;
}, function(e, t) {}, function(e, t, n) {
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function o(e) {
        var t = e.children, n = e.onClick, r = e.type;
        return u.default.createElement("button", {
            className: f.default.buttonBg,
            type: r,
            onClick: n
        }, t);
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(0), u = r(i), a = n(2), c = r(a), s = n(89), f = r(s);
    o.propTypes = {
        children: c.default.string.isRequired,
        onClick: c.default.func.isRequired,
        type: c.default.string
    }, o.defaultProps = {
        type: "button"
    }, t.default = o;
}, function(e, t) {
    e.exports = {
        buttonBg: "_1iRx-6GLly4QdNFfAuG4V_"
    };
}, function(e, t, n) {
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function i(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    function u(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
        };
    }(), c = n(0), s = (r(c), n(8)), f = r(s), l = n(2), p = r(l), d = n(91), h = r(d);
    n(93);
    var y = function(e) {
        function t(e, n) {
            o(this, t);
            var r = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
            return (0, h.default)(r), r.modalRoot = document.getElementById("modal-root"), r.el = document.createElement("div"), 
            r.el.classList.add("modal-window"), r.onClick = r.onClick.bind(r), r;
        }
        return u(t, e), a(t, [ {
            key: "componentDidMount",
            value: function() {
                function e() {
                    this.modalRoot.appendChild(this.el), this.el.addEventListener("click", this.onClick);
                }
                return e;
            }()
        }, {
            key: "componentWillUnmount",
            value: function() {
                function e() {
                    this.el.removeEventListener("click", this.onClick), this.modalRoot.removeChild(this.el);
                }
                return e;
            }()
        }, {
            key: "onClick",
            value: function() {
                function e(e) {
                    e.target === this.el && this.props.onClick(e);
                }
                return e;
            }()
        }, {
            key: "render",
            value: function() {
                function e() {
                    return f.default.createPortal(this.props.children, this.el);
                }
                return e;
            }()
        } ]), t;
    }(c.Component);
    y.propTypes = {
        children: p.default.element,
        onClick: p.default.func.isRequired
    }, y.defaultProps = {
        children: null
    }, t.default = y;
}, function(e, t, n) {
    e.exports = n(92);
}, function(e, t, n) {
    "use strict";
    function r(e) {
        if (void 0 === e) return void console.error("Autobind error: No context provided.");
        var t = Object.getPrototypeOf(e);
        u = arguments.length > 1 ? Array.prototype.slice.call(arguments, 1) : Object.getOwnPropertyNames(t), 
        u.forEach(function(e) {
            var n = Object.getOwnPropertyDescriptor(t, e);
            if (void 0 === n) return void console.warn('Autobind: "' + e + '" method not found in class.');
            -1 === i.indexOf(e) && "function" == typeof n.value && Object.defineProperty(t, e, o(t, e, n));
        });
    }
    function o(e, t, n) {
        var r = n.value;
        return {
            configurable: !0,
            get: function() {
                if (this === e || this.hasOwnProperty(t)) return r;
                var n = r.bind(this);
                return Object.defineProperty(this, t, {
                    value: n,
                    configurable: !0,
                    writable: !0
                }), n;
            }
        };
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = r;
    var i = [ "constructor", "render", "componentWillMount", "componentDidMount", "componentWillReceiveProps", "shouldComponentUpdate", "componentWillUpdate", "componentDidUpdate", "componentWillUnmount" ], u = [];
    e.exports = t.default;
}, function(e, t) {}, function(e, t, n) {
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function o(e) {
        var t = e.title, n = e.children;
        return u.default.createElement("section", {
            className: f.default.dialogWindow
        }, u.default.createElement("header", null, u.default.createElement("h1", null, t)), u.default.createElement("article", null, u.default.Children.map(n, function(e) {
            return e;
        })));
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(0), u = r(i), a = n(2), c = r(a), s = n(95), f = r(s);
    o.propTypes = {
        title: c.default.string,
        children: c.default.oneOfType([ c.default.string, c.default.element, c.default.array ])
    }, o.defaultProps = {
        title: "[*title*]",
        children: "[*children*]"
    }, t.default = o;
}, function(e, t) {
    e.exports = {
        dialogWindow: "_1Grw_gJ4WXnUkkHaZ1jnQ-"
    };
}, function(e, t, n) {
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function i(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    function u(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
        };
    }(), c = n(0), s = r(c), f = n(2), l = r(f), p = n(97), d = r(p), h = function(e) {
        function t() {
            return o(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
        }
        return u(t, e), a(t, [ {
            key: "render",
            value: function() {
                function e() {
                    var e = this.props, t = e.src, n = e.title, r = e.description;
                    return s.default.createElement("article", {
                        className: d.default.composition
                    }, s.default.createElement("div", {
                        className: d.default.wrapImg
                    }, s.default.createElement("img", {
                        src: t,
                        alt: n
                    })), s.default.createElement("div", {
                        className: d.default.wrapContent
                    }, s.default.createElement("header", null, s.default.createElement("h3", null, n)), s.default.createElement("div", null, r)));
                }
                return e;
            }()
        } ]), t;
    }(c.PureComponent);
    h.propTypes = {
        src: l.default.string.isRequired,
        title: l.default.string.isRequired,
        description: l.default.string.isRequired
    }, h.defaultProps = {}, t.default = h;
}, function(e, t) {
    e.exports = {
        composition: "_1otEZfpfuNpT0_KQEnc3ur",
        wrapImg: "_3uEh9Y9_MOJkTZKutwa3-f",
        wrapContent: "_3lgXBhVbA1aBNedBbW7P4Q"
    };
}, function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.compositionsSelector = void 0;
    var r = n(99), o = function(e) {
        return e.compositions;
    };
    t.compositionsSelector = (0, r.createSelector)(o, function(e) {
        var t = e.isFetching, n = e.error, r = e.itemsByKey;
        return {
            isFetching: t,
            error: n,
            items: Object.keys(r).map(function(e) {
                return r[e];
            })
        };
    });
}, function(e, t, n) {
    "use strict";
    function r(e, t) {
        return e === t;
    }
    function o(e, t, n) {
        if (null === t || null === n || t.length !== n.length) return !1;
        for (var r = t.length, o = 0; o < r; o++) if (!e(t[o], n[o])) return !1;
        return !0;
    }
    function i(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r, n = null, i = null;
        return function() {
            return o(t, n, arguments) || (i = e.apply(null, arguments)), n = arguments, i;
        };
    }
    function u(e) {
        var t = Array.isArray(e[0]) ? e[0] : e;
        if (!t.every(function(e) {
            return "function" == typeof e;
        })) {
            var n = t.map(function(e) {
                return typeof e;
            }).join(", ");
            throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: [" + n + "]");
        }
        return t;
    }
    function a(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return function() {
            for (var t = arguments.length, r = Array(t), o = 0; o < t; o++) r[o] = arguments[o];
            var a = 0, c = r.pop(), s = u(r), f = e.apply(void 0, [ function() {
                return a++, c.apply(null, arguments);
            } ].concat(n)), l = i(function() {
                for (var e = [], t = s.length, n = 0; n < t; n++) e.push(s[n].apply(null, arguments));
                return f.apply(null, e);
            });
            return l.resultFunc = c, l.recomputations = function() {
                return a;
            }, l.resetRecomputations = function() {
                return a = 0;
            }, l;
        };
    }
    function c(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s;
        if ("object" != typeof e) throw new Error("createStructuredSelector expects first argument to be an object where each property is a selector, instead received a " + typeof e);
        var n = Object.keys(e);
        return t(n.map(function(t) {
            return e[t];
        }), function() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return t.reduce(function(e, t, r) {
                return e[n[r]] = t, e;
            }, {});
        });
    }
    t.__esModule = !0, t.defaultMemoize = i, t.createSelectorCreator = a, t.createStructuredSelector = c;
    var s = t.createSelector = a(i);
}, function(e, t, n) {
    function r() {
        return function(e, t) {
            var n = t(), r = n.compositions, o = r.isFetching, u = r.itemsByKey;
            o || (0, l.isEmpty)(u) && (e(i(s.COMPOSITIONS_GET_REQUEST, null)), a.default.get("http://cdn.music.beeline.ru/api/v2/music/clips/popularList").then(function(t) {
                var n = t.data, r = (0, c.normalize)(n.result.items, f.compositionsListSchema);
                e(i(s.COMPOSITIONS_GET_SUCCESS, r.entities.compositions));
            }).catch(function(t) {
                var n = t.response ? t.response.data : t.message;
                e(i(s.COMPOSITIONS_GET_FAILURE, n));
            }));
        };
    }
    function o() {
        return function(e, t) {
            var n = t(), r = n.storage.isOpenWindow, o = !r;
            e(i(s.IS_OPEN_WINDOW_TOGGLE, o));
        };
    }
    function i(e, t) {
        return {
            type: e,
            payload: t
        };
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.loadCompositionsIfNeed = r, t.isOpenWindowToggle = o;
    var u = n(101), a = function(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(u), c = n(33), s = n(12), f = n(126), l = n(127);
}, function(e, t, n) {
    e.exports = n(102);
}, function(e, t, n) {
    "use strict";
    function r(e) {
        var t = new u(e), n = i(u.prototype.request, t);
        return o.extend(n, u.prototype, t), o.extend(n, t), n;
    }
    var o = n(1), i = n(28), u = n(104), a = n(13), c = r(a);
    c.Axios = u, c.create = function(e) {
        return r(o.merge(a, e));
    }, c.Cancel = n(32), c.CancelToken = n(119), c.isCancel = n(31), c.all = function(e) {
        return Promise.all(e);
    }, c.spread = n(120), e.exports = c, e.exports.default = c;
}, function(e, t) {
    function n(e) {
        return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
    }
    function r(e) {
        return "function" == typeof e.readFloatLE && "function" == typeof e.slice && n(e.slice(0, 0));
    }
    e.exports = function(e) {
        return null != e && (n(e) || r(e) || !!e._isBuffer);
    };
}, function(e, t, n) {
    "use strict";
    function r(e) {
        this.defaults = e, this.interceptors = {
            request: new u(),
            response: new u()
        };
    }
    var o = n(13), i = n(1), u = n(114), a = n(115);
    r.prototype.request = function(e) {
        "string" == typeof e && (e = i.merge({
            url: arguments[0]
        }, arguments[1])), e = i.merge(o, this.defaults, {
            method: "get"
        }, e), e.method = e.method.toLowerCase();
        var t = [ a, void 0 ], n = Promise.resolve(e);
        for (this.interceptors.request.forEach(function(e) {
            t.unshift(e.fulfilled, e.rejected);
        }), this.interceptors.response.forEach(function(e) {
            t.push(e.fulfilled, e.rejected);
        }); t.length; ) n = n.then(t.shift(), t.shift());
        return n;
    }, i.forEach([ "delete", "get", "head", "options" ], function(e) {
        r.prototype[e] = function(t, n) {
            return this.request(i.merge(n || {}, {
                method: e,
                url: t
            }));
        };
    }), i.forEach([ "post", "put", "patch" ], function(e) {
        r.prototype[e] = function(t, n, r) {
            return this.request(i.merge(r || {}, {
                method: e,
                url: t,
                data: n
            }));
        };
    }), e.exports = r;
}, function(e, t) {
    function n() {
        throw new Error("setTimeout has not been defined");
    }
    function r() {
        throw new Error("clearTimeout has not been defined");
    }
    function o(e) {
        if (f === setTimeout) return setTimeout(e, 0);
        if ((f === n || !f) && setTimeout) return f = setTimeout, setTimeout(e, 0);
        try {
            return f(e, 0);
        } catch (t) {
            try {
                return f.call(null, e, 0);
            } catch (t) {
                return f.call(this, e, 0);
            }
        }
    }
    function i(e) {
        if (l === clearTimeout) return clearTimeout(e);
        if ((l === r || !l) && clearTimeout) return l = clearTimeout, clearTimeout(e);
        try {
            return l(e);
        } catch (t) {
            try {
                return l.call(null, e);
            } catch (t) {
                return l.call(this, e);
            }
        }
    }
    function u() {
        y && d && (y = !1, d.length ? h = d.concat(h) : v = -1, h.length && a());
    }
    function a() {
        if (!y) {
            var e = o(u);
            y = !0;
            for (var t = h.length; t; ) {
                for (d = h, h = []; ++v < t; ) d && d[v].run();
                v = -1, t = h.length;
            }
            d = null, y = !1, i(e);
        }
    }
    function c(e, t) {
        this.fun = e, this.array = t;
    }
    function s() {}
    var f, l, p = e.exports = {};
    !function() {
        try {
            f = "function" == typeof setTimeout ? setTimeout : n;
        } catch (e) {
            f = n;
        }
        try {
            l = "function" == typeof clearTimeout ? clearTimeout : r;
        } catch (e) {
            l = r;
        }
    }();
    var d, h = [], y = !1, v = -1;
    p.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        h.push(new c(e, t)), 1 !== h.length || y || o(a);
    }, c.prototype.run = function() {
        this.fun.apply(null, this.array);
    }, p.title = "browser", p.browser = !0, p.env = {}, p.argv = [], p.version = "", 
    p.versions = {}, p.on = s, p.addListener = s, p.once = s, p.off = s, p.removeListener = s, 
    p.removeAllListeners = s, p.emit = s, p.prependListener = s, p.prependOnceListener = s, 
    p.listeners = function(e) {
        return [];
    }, p.binding = function(e) {
        throw new Error("process.binding is not supported");
    }, p.cwd = function() {
        return "/";
    }, p.chdir = function(e) {
        throw new Error("process.chdir is not supported");
    }, p.umask = function() {
        return 0;
    };
}, function(e, t, n) {
    "use strict";
    var r = n(1);
    e.exports = function(e, t) {
        r.forEach(e, function(n, r) {
            r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r]);
        });
    };
}, function(e, t, n) {
    "use strict";
    var r = n(30);
    e.exports = function(e, t, n) {
        var o = n.config.validateStatus;
        n.status && o && !o(n.status) ? t(r("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n);
    };
}, function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n, r, o) {
        return e.config = t, n && (e.code = n), e.request = r, e.response = o, e;
    };
}, function(e, t, n) {
    "use strict";
    function r(e) {
        return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    }
    var o = n(1);
    e.exports = function(e, t, n) {
        if (!t) return e;
        var i;
        if (n) i = n(t); else if (o.isURLSearchParams(t)) i = t.toString(); else {
            var u = [];
            o.forEach(t, function(e, t) {
                null !== e && void 0 !== e && (o.isArray(e) && (t += "[]"), o.isArray(e) || (e = [ e ]), 
                o.forEach(e, function(e) {
                    o.isDate(e) ? e = e.toISOString() : o.isObject(e) && (e = JSON.stringify(e)), u.push(r(t) + "=" + r(e));
                }));
            }), i = u.join("&");
        }
        return i && (e += (-1 === e.indexOf("?") ? "?" : "&") + i), e;
    };
}, function(e, t, n) {
    "use strict";
    var r = n(1), o = [ "age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent" ];
    e.exports = function(e) {
        var t, n, i, u = {};
        return e ? (r.forEach(e.split("\n"), function(e) {
            if (i = e.indexOf(":"), t = r.trim(e.substr(0, i)).toLowerCase(), n = r.trim(e.substr(i + 1)), 
            t) {
                if (u[t] && o.indexOf(t) >= 0) return;
                u[t] = "set-cookie" === t ? (u[t] ? u[t] : []).concat([ n ]) : u[t] ? u[t] + ", " + n : n;
            }
        }), u) : u;
    };
}, function(e, t, n) {
    "use strict";
    var r = n(1);
    e.exports = r.isStandardBrowserEnv() ? function() {
        function e(e) {
            var t = e;
            return n && (o.setAttribute("href", t), t = o.href), o.setAttribute("href", t), 
            {
                href: o.href,
                protocol: o.protocol ? o.protocol.replace(/:$/, "") : "",
                host: o.host,
                search: o.search ? o.search.replace(/^\?/, "") : "",
                hash: o.hash ? o.hash.replace(/^#/, "") : "",
                hostname: o.hostname,
                port: o.port,
                pathname: "/" === o.pathname.charAt(0) ? o.pathname : "/" + o.pathname
            };
        }
        var t, n = /(msie|trident)/i.test(navigator.userAgent), o = document.createElement("a");
        return t = e(window.location.href), function(n) {
            var o = r.isString(n) ? e(n) : n;
            return o.protocol === t.protocol && o.host === t.host;
        };
    }() : function() {
        return function() {
            return !0;
        };
    }();
}, function(e, t, n) {
    "use strict";
    function r() {
        this.message = "String contains an invalid character";
    }
    function o(e) {
        for (var t, n, o = String(e), u = "", a = 0, c = i; o.charAt(0 | a) || (c = "=", 
        a % 1); u += c.charAt(63 & t >> 8 - a % 1 * 8)) {
            if ((n = o.charCodeAt(a += .75)) > 255) throw new r();
            t = t << 8 | n;
        }
        return u;
    }
    var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    r.prototype = new Error(), r.prototype.code = 5, r.prototype.name = "InvalidCharacterError", 
    e.exports = o;
}, function(e, t, n) {
    "use strict";
    var r = n(1);
    e.exports = r.isStandardBrowserEnv() ? function() {
        return {
            write: function(e, t, n, o, i, u) {
                var a = [];
                a.push(e + "=" + encodeURIComponent(t)), r.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()), 
                r.isString(o) && a.push("path=" + o), r.isString(i) && a.push("domain=" + i), !0 === u && a.push("secure"), 
                document.cookie = a.join("; ");
            },
            read: function(e) {
                var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                return t ? decodeURIComponent(t[3]) : null;
            },
            remove: function(e) {
                this.write(e, "", Date.now() - 864e5);
            }
        };
    }() : function() {
        return {
            write: function() {},
            read: function() {
                return null;
            },
            remove: function() {}
        };
    }();
}, function(e, t, n) {
    "use strict";
    function r() {
        this.handlers = [];
    }
    var o = n(1);
    r.prototype.use = function(e, t) {
        return this.handlers.push({
            fulfilled: e,
            rejected: t
        }), this.handlers.length - 1;
    }, r.prototype.eject = function(e) {
        this.handlers[e] && (this.handlers[e] = null);
    }, r.prototype.forEach = function(e) {
        o.forEach(this.handlers, function(t) {
            null !== t && e(t);
        });
    }, e.exports = r;
}, function(e, t, n) {
    "use strict";
    function r(e) {
        e.cancelToken && e.cancelToken.throwIfRequested();
    }
    var o = n(1), i = n(116), u = n(31), a = n(13), c = n(117), s = n(118);
    e.exports = function(e) {
        return r(e), e.baseURL && !c(e.url) && (e.url = s(e.baseURL, e.url)), e.headers = e.headers || {}, 
        e.data = i(e.data, e.headers, e.transformRequest), e.headers = o.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), 
        o.forEach([ "delete", "get", "head", "post", "put", "patch", "common" ], function(t) {
            delete e.headers[t];
        }), (e.adapter || a.adapter)(e).then(function(t) {
            return r(e), t.data = i(t.data, t.headers, e.transformResponse), t;
        }, function(t) {
            return u(t) || (r(e), t && t.response && (t.response.data = i(t.response.data, t.response.headers, e.transformResponse))), 
            Promise.reject(t);
        });
    };
}, function(e, t, n) {
    "use strict";
    var r = n(1);
    e.exports = function(e, t, n) {
        return r.forEach(n, function(n) {
            e = n(e, t);
        }), e;
    };
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
    };
}, function(e, t, n) {
    "use strict";
    e.exports = function(e, t) {
        return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
    };
}, function(e, t, n) {
    "use strict";
    function r(e) {
        if ("function" != typeof e) throw new TypeError("executor must be a function.");
        var t;
        this.promise = new Promise(function(e) {
            t = e;
        });
        var n = this;
        e(function(e) {
            n.reason || (n.reason = new o(e), t(n.reason));
        });
    }
    var o = n(32);
    r.prototype.throwIfRequested = function() {
        if (this.reason) throw this.reason;
    }, r.source = function() {
        var e;
        return {
            token: new r(function(t) {
                e = t;
            }),
            cancel: e
        };
    }, e.exports = r;
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return function(t) {
            return e.apply(null, t);
        };
    };
}, function(e, t, n) {
    "use strict";
    function r(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e;
    }
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, u = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
    }, a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
        };
    }(), c = n(6), s = function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t;
    }(c), f = function(e) {
        return function(t) {
            return s.isImmutable(t) ? t.get(e) : t[e];
        };
    }, l = function() {
        function e(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            if (o(this, e), !t || "string" != typeof t) throw new Error("Expected a string key for Entity, but found " + t + ".");
            var i = r.idAttribute, a = void 0 === i ? "id" : i, c = r.mergeStrategy, s = void 0 === c ? function(e, t) {
                return u({}, e, t);
            } : c, l = r.processStrategy, p = void 0 === l ? function(e) {
                return u({}, e);
            } : l;
            this._key = t, this._getId = "function" == typeof a ? a : f(a), this._idAttribute = a, 
            this._mergeStrategy = s, this._processStrategy = p, this.define(n);
        }
        return a(e, [ {
            key: "define",
            value: function(e) {
                this.schema = Object.keys(e).reduce(function(t, n) {
                    var o = e[n];
                    return u({}, t, r({}, n, o));
                }, this.schema || {});
            }
        }, {
            key: "getId",
            value: function(e, t, n) {
                return this._getId(e, t, n);
            }
        }, {
            key: "merge",
            value: function(e, t) {
                return this._mergeStrategy(e, t);
            }
        }, {
            key: "normalize",
            value: function(e, t, n, r, o) {
                var u = this, a = this._processStrategy(e, t, n);
                return Object.keys(this.schema).forEach(function(e) {
                    if (a.hasOwnProperty(e) && "object" === i(a[e])) {
                        var t = u.schema[e];
                        a[e] = r(a[e], a, e, t, o);
                    }
                }), o(this, a, e, t, n), this.getId(e, t, n);
            }
        }, {
            key: "denormalize",
            value: function(e, t) {
                var n = this;
                return s.isImmutable(e) ? s.denormalizeImmutable(this.schema, e, t) : (Object.keys(this.schema).forEach(function(r) {
                    if (e.hasOwnProperty(r)) {
                        var o = n.schema[r];
                        e[r] = t(e[r], o);
                    }
                }), e);
            }
        }, {
            key: "key",
            get: function() {
                return this._key;
            }
        }, {
            key: "idAttribute",
            get: function() {
                return this._idAttribute;
            }
        } ]), e;
    }();
    t.default = l;
}, function(e, t, n) {
    "use strict";
    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var u = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
        };
    }(), a = n(14), c = function(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(a), s = function(e) {
        function t(e, n) {
            if (r(this, t), !n) throw new Error('Expected option "schemaAttribute" not found on UnionSchema.');
            return o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
        }
        return i(t, e), u(t, [ {
            key: "normalize",
            value: function(e, t, n, r, o) {
                return this.normalizeValue(e, t, n, r, o);
            }
        }, {
            key: "denormalize",
            value: function(e, t) {
                return this.denormalizeValue(e, t);
            }
        } ]), t;
    }(c.default);
    t.default = s;
}, function(e, t, n) {
    "use strict";
    function r(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e;
    }
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function i(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    function u(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
    }, c = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
        };
    }(), s = n(14), f = function(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(s), l = function(e) {
        function t() {
            return o(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
        }
        return u(t, e), c(t, [ {
            key: "normalize",
            value: function(e, t, n, o, i) {
                var u = this;
                return Object.keys(e).reduce(function(t, n, c) {
                    var s = e[n];
                    return void 0 !== s && null !== s ? a({}, t, r({}, n, u.normalizeValue(s, e, n, o, i))) : t;
                }, {});
            }
        }, {
            key: "denormalize",
            value: function(e, t) {
                var n = this;
                return Object.keys(e).reduce(function(o, i) {
                    var u = e[i];
                    return a({}, o, r({}, i, n.denormalizeValue(u, t)));
                }, {});
            }
        } ]), t;
    }(f.default);
    t.default = l;
}, function(e, t, n) {
    "use strict";
    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.denormalize = t.normalize = void 0;
    var u = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
        };
    }(), a = n(14), c = function(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(a), s = function(e) {
        if (Array.isArray(e) && e.length > 1) throw new Error("Expected schema definition to be a single schema, but found " + e.length + ".");
        return e[0];
    }, f = function(e) {
        return Array.isArray(e) ? e : Object.keys(e).map(function(t) {
            return e[t];
        });
    }, l = (t.normalize = function(e, t, n, r, o, i) {
        return e = s(e), f(t).map(function(t, u) {
            return o(t, n, r, e, i);
        });
    }, t.denormalize = function(e, t, n) {
        return e = s(e), t && t.map ? t.map(function(t) {
            return n(t, e);
        }) : t;
    }, function(e) {
        function t() {
            return r(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
        }
        return i(t, e), u(t, [ {
            key: "normalize",
            value: function(e, t, n, r, o) {
                var i = this;
                return f(e).map(function(e, u) {
                    return i.normalizeValue(e, t, n, r, o);
                }).filter(function(e) {
                    return void 0 !== e && null !== e;
                });
            }
        }, {
            key: "denormalize",
            value: function(e, t) {
                var n = this;
                return e && e.map ? e.map(function(e) {
                    return n.denormalizeValue(e, t);
                }) : e;
            }
        } ]), t;
    }(c.default));
    t.default = l;
}, function(e, t, n) {
    "use strict";
    function r(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e;
    }
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.denormalize = t.normalize = void 0;
    var i = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
        };
    }(), u = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
    }, a = n(6), c = function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t.default = e, t;
    }(a), s = function(e, t, n, r, o, i) {
        var a = u({}, t);
        return Object.keys(e).forEach(function(n) {
            var r = e[n], u = o(t[n], t, n, r, i);
            void 0 === u || null === u ? delete a[n] : a[n] = u;
        }), a;
    };
    t.normalize = s;
    var f = function(e, t, n) {
        if (c.isImmutable(t)) return c.denormalizeImmutable(e, t, n);
        var r = u({}, t);
        return Object.keys(e).forEach(function(t) {
            r[t] && (r[t] = n(r[t], e[t]));
        }), r;
    };
    t.denormalize = f;
    var l = function() {
        function e(t) {
            o(this, e), this.define(t);
        }
        return i(e, [ {
            key: "define",
            value: function(e) {
                this.schema = Object.keys(e).reduce(function(t, n) {
                    var o = e[n];
                    return u({}, t, r({}, n, o));
                }, this.schema || {});
            }
        }, {
            key: "normalize",
            value: function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return s.apply(void 0, [ this.schema ].concat(t));
            }
        }, {
            key: "denormalize",
            value: function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return f.apply(void 0, [ this.schema ].concat(t));
            }
        } ]), e;
    }();
    t.default = l;
}, function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.compositionsListSchema = void 0;
    var r = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
    }, o = n(33), i = new o.schema.Entity("compositions", {}, {
        processStrategy: function() {
            function e(e) {
                var t = e.id, n = e.snippet;
                return r({
                    id: t
                }, n);
            }
            return e;
        }()
    });
    t.compositionsListSchema = [ i ];
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    };
    t.isEmpty = function() {
        function e(e) {
            return null === e || void 0 === e || (e && "object" === (void 0 === e ? "undefined" : n(e)) && e.constructor === Array ? 0 === e.length : e && "object" === (void 0 === e ? "undefined" : n(e)) && e.constructor === Object ? 0 === Object.getOwnPropertyNames(e).length : "string" == typeof e || "object" === (void 0 === e ? "undefined" : n(e)) && e.constructor === String ? 0 === e.length : "object" === (void 0 === e ? "undefined" : n(e)) && 0 === Object.getOwnPropertyNames(e).length || (String(parseFloat(e, 10)) === String(e) ? 0 === e : !e && e));
        }
        return e;
    }();
} ], [ 34 ]);