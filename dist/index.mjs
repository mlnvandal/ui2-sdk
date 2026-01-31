import * as he from "react";
import yn, { forwardRef as ln, createElement as Qt, useContext as cn, createContext as un, useState as U, useEffect as ye, useRef as q, useMemo as le, useCallback as ct } from "react";
import { createPortal as zn } from "react-dom";
var on = { exports: {} }, wt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pn;
function On() {
  if (pn) return wt;
  pn = 1;
  var e = yn, r = Symbol.for("react.element"), s = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(f, _, k) {
    var g, C = {}, z = null, W = null;
    k !== void 0 && (z = "" + k), _.key !== void 0 && (z = "" + _.key), _.ref !== void 0 && (W = _.ref);
    for (g in _) a.call(_, g) && !l.hasOwnProperty(g) && (C[g] = _[g]);
    if (f && f.defaultProps) for (g in _ = f.defaultProps, _) C[g] === void 0 && (C[g] = _[g]);
    return { $$typeof: r, type: f, key: z, ref: W, props: C, _owner: i.current };
  }
  return wt.Fragment = s, wt.jsx = d, wt.jsxs = d, wt;
}
var Nt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vn;
function An() {
  return vn || (vn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = yn, r = Symbol.for("react.element"), s = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), f = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), z = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), B = Symbol.iterator, x = "@@iterator";
    function E(t) {
      if (t === null || typeof t != "object")
        return null;
      var c = B && t[B] || t[x];
      return typeof c == "function" ? c : null;
    }
    var j = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(t) {
      {
        for (var c = arguments.length, h = new Array(c > 1 ? c - 1 : 0), b = 1; b < c; b++)
          h[b - 1] = arguments[b];
        V("error", t, h);
      }
    }
    function V(t, c, h) {
      {
        var b = j.ReactDebugCurrentFrame, D = b.getStackAddendum();
        D !== "" && (c += "%s", h = h.concat([D]));
        var L = h.map(function(P) {
          return String(P);
        });
        L.unshift("Warning: " + c), Function.prototype.apply.call(console[t], console, L);
      }
    }
    var ee = !1, J = !1, se = !1, re = !1, Z = !1, ce;
    ce = Symbol.for("react.module.reference");
    function S(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === a || t === l || Z || t === i || t === k || t === g || re || t === W || ee || J || se || typeof t == "object" && t !== null && (t.$$typeof === z || t.$$typeof === C || t.$$typeof === d || t.$$typeof === f || t.$$typeof === _ || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === ce || t.getModuleId !== void 0));
    }
    function _e(t, c, h) {
      var b = t.displayName;
      if (b)
        return b;
      var D = c.displayName || c.name || "";
      return D !== "" ? h + "(" + D + ")" : h;
    }
    function xe(t) {
      return t.displayName || "Context";
    }
    function $(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case a:
          return "Fragment";
        case s:
          return "Portal";
        case l:
          return "Profiler";
        case i:
          return "StrictMode";
        case k:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case f:
            var c = t;
            return xe(c) + ".Consumer";
          case d:
            var h = t;
            return xe(h._context) + ".Provider";
          case _:
            return _e(t, t.render, "ForwardRef");
          case C:
            var b = t.displayName || null;
            return b !== null ? b : $(t.type) || "Memo";
          case z: {
            var D = t, L = D._payload, P = D._init;
            try {
              return $(P(L));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var y = Object.assign, O = 0, Q, fe, m, H, ue, Ce, $e;
    function Xe() {
    }
    Xe.__reactDisabledLog = !0;
    function et() {
      {
        if (O === 0) {
          Q = console.log, fe = console.info, m = console.warn, H = console.error, ue = console.group, Ce = console.groupCollapsed, $e = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: Xe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        O++;
      }
    }
    function tt() {
      {
        if (O--, O === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: y({}, t, {
              value: Q
            }),
            info: y({}, t, {
              value: fe
            }),
            warn: y({}, t, {
              value: m
            }),
            error: y({}, t, {
              value: H
            }),
            group: y({}, t, {
              value: ue
            }),
            groupCollapsed: y({}, t, {
              value: Ce
            }),
            groupEnd: y({}, t, {
              value: $e
            })
          });
        }
        O < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var N = j.ReactCurrentDispatcher, me;
    function nt(t, c, h) {
      {
        if (me === void 0)
          try {
            throw Error();
          } catch (D) {
            var b = D.stack.trim().match(/\n( *(at )?)/);
            me = b && b[1] || "";
          }
        return `
` + me + t;
      }
    }
    var ft = !1, pt;
    {
      var Bt = typeof WeakMap == "function" ? WeakMap : Map;
      pt = new Bt();
    }
    function Pt(t, c) {
      if (!t || ft)
        return "";
      {
        var h = pt.get(t);
        if (h !== void 0)
          return h;
      }
      var b;
      ft = !0;
      var D = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var L;
      L = N.current, N.current = null, et();
      try {
        if (c) {
          var P = function() {
            throw Error();
          };
          if (Object.defineProperty(P.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(P, []);
            } catch (de) {
              b = de;
            }
            Reflect.construct(t, [], P);
          } else {
            try {
              P.call();
            } catch (de) {
              b = de;
            }
            t.call(P.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (de) {
            b = de;
          }
          t();
        }
      } catch (de) {
        if (de && b && typeof de.stack == "string") {
          for (var R = de.stack.split(`
`), oe = b.stack.split(`
`), Y = R.length - 1, X = oe.length - 1; Y >= 1 && X >= 0 && R[Y] !== oe[X]; )
            X--;
          for (; Y >= 1 && X >= 0; Y--, X--)
            if (R[Y] !== oe[X]) {
              if (Y !== 1 || X !== 1)
                do
                  if (Y--, X--, X < 0 || R[Y] !== oe[X]) {
                    var ae = `
` + R[Y].replace(" at new ", " at ");
                    return t.displayName && ae.includes("<anonymous>") && (ae = ae.replace("<anonymous>", t.displayName)), typeof t == "function" && pt.set(t, ae), ae;
                  }
                while (Y >= 1 && X >= 0);
              break;
            }
        }
      } finally {
        ft = !1, N.current = L, tt(), Error.prepareStackTrace = D;
      }
      var Te = t ? t.displayName || t.name : "", Le = Te ? nt(Te) : "";
      return typeof t == "function" && pt.set(t, Le), Le;
    }
    function F(t, c, h) {
      return Pt(t, !1);
    }
    function Tt(t) {
      var c = t.prototype;
      return !!(c && c.isReactComponent);
    }
    function Ke(t, c, h) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return Pt(t, Tt(t));
      if (typeof t == "string")
        return nt(t);
      switch (t) {
        case k:
          return nt("Suspense");
        case g:
          return nt("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case _:
            return F(t.render);
          case C:
            return Ke(t.type, c, h);
          case z: {
            var b = t, D = b._payload, L = b._init;
            try {
              return Ke(L(D), c, h);
            } catch {
            }
          }
        }
      return "";
    }
    var ge = Object.prototype.hasOwnProperty, Ee = {}, rt = j.ReactDebugCurrentFrame;
    function Me(t) {
      if (t) {
        var c = t._owner, h = Ke(t.type, t._source, c ? c.type : null);
        rt.setExtraStackFrame(h);
      } else
        rt.setExtraStackFrame(null);
    }
    function Vt(t, c, h, b, D) {
      {
        var L = Function.call.bind(ge);
        for (var P in t)
          if (L(t, P)) {
            var R = void 0;
            try {
              if (typeof t[P] != "function") {
                var oe = Error((b || "React class") + ": " + h + " type `" + P + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[P] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw oe.name = "Invariant Violation", oe;
              }
              R = t[P](c, P, b, h, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Y) {
              R = Y;
            }
            R && !(R instanceof Error) && (Me(D), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", b || "React class", h, P, typeof R), Me(null)), R instanceof Error && !(R.message in Ee) && (Ee[R.message] = !0, Me(D), w("Failed %s type: %s", h, R.message), Me(null));
          }
      }
    }
    var Ht = Array.isArray;
    function vt(t) {
      return Ht(t);
    }
    function Ut(t) {
      {
        var c = typeof Symbol == "function" && Symbol.toStringTag, h = c && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return h;
      }
    }
    function Yt(t) {
      try {
        return It(t), !1;
      } catch {
        return !0;
      }
    }
    function It(t) {
      return "" + t;
    }
    function zt(t) {
      if (Yt(t))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ut(t)), It(t);
    }
    var ht = j.ReactCurrentOwner, pe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, _t, we;
    function mt(t) {
      if (ge.call(t, "ref")) {
        var c = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function Ge(t) {
      if (ge.call(t, "key")) {
        var c = Object.getOwnPropertyDescriptor(t, "key").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function Xt(t, c) {
      typeof t.ref == "string" && ht.current;
    }
    function qe(t, c) {
      {
        var h = function() {
          _t || (_t = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        h.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: h,
          configurable: !0
        });
      }
    }
    function gt(t, c) {
      {
        var h = function() {
          we || (we = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        h.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: h,
          configurable: !0
        });
      }
    }
    var be = function(t, c, h, b, D, L, P) {
      var R = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: t,
        key: c,
        ref: h,
        props: P,
        // Record the component responsible for creating this element.
        _owner: L
      };
      return R._store = {}, Object.defineProperty(R._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(R, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: b
      }), Object.defineProperty(R, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: D
      }), Object.freeze && (Object.freeze(R.props), Object.freeze(R)), R;
    };
    function ot(t, c, h, b, D) {
      {
        var L, P = {}, R = null, oe = null;
        h !== void 0 && (zt(h), R = "" + h), Ge(c) && (zt(c.key), R = "" + c.key), mt(c) && (oe = c.ref, Xt(c, D));
        for (L in c)
          ge.call(c, L) && !pe.hasOwnProperty(L) && (P[L] = c[L]);
        if (t && t.defaultProps) {
          var Y = t.defaultProps;
          for (L in Y)
            P[L] === void 0 && (P[L] = Y[L]);
        }
        if (R || oe) {
          var X = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          R && qe(P, X), oe && gt(P, X);
        }
        return be(t, R, oe, D, b, ht.current, P);
      }
    }
    var Je = j.ReactCurrentOwner, te = j.ReactDebugCurrentFrame;
    function ke(t) {
      if (t) {
        var c = t._owner, h = Ke(t.type, t._source, c ? c.type : null);
        te.setExtraStackFrame(h);
      } else
        te.setExtraStackFrame(null);
    }
    var Be;
    Be = !1;
    function Ve(t) {
      return typeof t == "object" && t !== null && t.$$typeof === r;
    }
    function Ot() {
      {
        if (Je.current) {
          var t = $(Je.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function st(t) {
      return "";
    }
    var At = {};
    function at(t) {
      {
        var c = Ot();
        if (!c) {
          var h = typeof t == "string" ? t : t.displayName || t.name;
          h && (c = `

Check the top-level render call using <` + h + ">.");
        }
        return c;
      }
    }
    function He(t, c) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var h = at(c);
        if (At[h])
          return;
        At[h] = !0;
        var b = "";
        t && t._owner && t._owner !== Je.current && (b = " It was passed a child from " + $(t._owner.type) + "."), ke(t), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', h, b), ke(null);
      }
    }
    function We(t, c) {
      {
        if (typeof t != "object")
          return;
        if (vt(t))
          for (var h = 0; h < t.length; h++) {
            var b = t[h];
            Ve(b) && He(b, c);
          }
        else if (Ve(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var D = E(t);
          if (typeof D == "function" && D !== t.entries)
            for (var L = D.call(t), P; !(P = L.next()).done; )
              Ve(P.value) && He(P.value, c);
        }
      }
    }
    function je(t) {
      {
        var c = t.type;
        if (c == null || typeof c == "string")
          return;
        var h;
        if (typeof c == "function")
          h = c.propTypes;
        else if (typeof c == "object" && (c.$$typeof === _ || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        c.$$typeof === C))
          h = c.propTypes;
        else
          return;
        if (h) {
          var b = $(c);
          Vt(h, t.props, "prop", b, t);
        } else if (c.PropTypes !== void 0 && !Be) {
          Be = !0;
          var D = $(c);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", D || "Unknown");
        }
        typeof c.getDefaultProps == "function" && !c.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Pe(t) {
      {
        for (var c = Object.keys(t.props), h = 0; h < c.length; h++) {
          var b = c[h];
          if (b !== "children" && b !== "key") {
            ke(t), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", b), ke(null);
            break;
          }
        }
        t.ref !== null && (ke(t), w("Invalid attribute `ref` supplied to `React.Fragment`."), ke(null));
      }
    }
    var Ne = {};
    function ve(t, c, h, b, D, L) {
      {
        var P = S(t);
        if (!P) {
          var R = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (R += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var oe = st();
          oe ? R += oe : R += Ot();
          var Y;
          t === null ? Y = "null" : vt(t) ? Y = "array" : t !== void 0 && t.$$typeof === r ? (Y = "<" + ($(t.type) || "Unknown") + " />", R = " Did you accidentally export a JSX literal instead of a component?") : Y = typeof t, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Y, R);
        }
        var X = ot(t, c, h, D, L);
        if (X == null)
          return X;
        if (P) {
          var ae = c.children;
          if (ae !== void 0)
            if (b)
              if (vt(ae)) {
                for (var Te = 0; Te < ae.length; Te++)
                  We(ae[Te], t);
                Object.freeze && Object.freeze(ae);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              We(ae, t);
        }
        if (ge.call(c, "key")) {
          var Le = $(t), de = Object.keys(c).filter(function(o) {
            return o !== "key";
          }), xt = de.length > 0 ? "{key: someKey, " + de.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ne[Le + xt]) {
            var Dt = de.length > 0 ? "{" + de.join(": ..., ") + ": ...}" : "{}";
            w(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, xt, Le, Dt, Le), Ne[Le + xt] = !0;
          }
        }
        return t === a ? Pe(X) : je(X), X;
      }
    }
    function it(t, c, h) {
      return ve(t, c, h, !0);
    }
    function yt(t, c, h) {
      return ve(t, c, h, !1);
    }
    var Gt = yt, qt = it;
    Nt.Fragment = a, Nt.jsx = Gt, Nt.jsxs = qt;
  }()), Nt;
}
process.env.NODE_ENV === "production" ? on.exports = On() : on.exports = An();
var n = on.exports;
function hn(e, r) {
  if (typeof e == "function")
    return e(r);
  e != null && (e.current = r);
}
function Dn(...e) {
  return (r) => {
    let s = !1;
    const a = e.map((i) => {
      const l = hn(i, r);
      return !s && typeof l == "function" && (s = !0), l;
    });
    if (s)
      return () => {
        for (let i = 0; i < a.length; i++) {
          const l = a[i];
          typeof l == "function" ? l() : hn(e[i], null);
        }
      };
  };
}
var $n = Symbol.for("react.lazy"), Kt = he[" use ".trim().toString()];
function Wn(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function xn(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === $n && "_payload" in e && Wn(e._payload);
}
// @__NO_SIDE_EFFECTS__
function Ln(e) {
  const r = /* @__PURE__ */ Kn(e), s = he.forwardRef((a, i) => {
    let { children: l, ...d } = a;
    xn(l) && typeof Kt == "function" && (l = Kt(l._payload));
    const f = he.Children.toArray(l), _ = f.find(Hn);
    if (_) {
      const k = _.props.children, g = f.map((C) => C === _ ? he.Children.count(k) > 1 ? he.Children.only(null) : he.isValidElement(k) ? k.props.children : null : C);
      return /* @__PURE__ */ n.jsx(r, { ...d, ref: i, children: he.isValidElement(k) ? he.cloneElement(k, void 0, g) : null });
    }
    return /* @__PURE__ */ n.jsx(r, { ...d, ref: i, children: l });
  });
  return s.displayName = `${e}.Slot`, s;
}
var Fn = /* @__PURE__ */ Ln("Slot");
// @__NO_SIDE_EFFECTS__
function Kn(e) {
  const r = he.forwardRef((s, a) => {
    let { children: i, ...l } = s;
    if (xn(i) && typeof Kt == "function" && (i = Kt(i._payload)), he.isValidElement(i)) {
      const d = Yn(i), f = Un(l, i.props);
      return i.type !== he.Fragment && (f.ref = a ? Dn(a, d) : d), he.cloneElement(i, f);
    }
    return he.Children.count(i) > 1 ? he.Children.only(null) : null;
  });
  return r.displayName = `${e}.SlotClone`, r;
}
var Vn = Symbol("radix.slottable");
function Hn(e) {
  return he.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Vn;
}
function Un(e, r) {
  const s = { ...r };
  for (const a in r) {
    const i = e[a], l = r[a];
    /^on[A-Z]/.test(a) ? i && l ? s[a] = (...f) => {
      const _ = l(...f);
      return i(...f), _;
    } : i && (s[a] = i) : a === "style" ? s[a] = { ...i, ...l } : a === "className" && (s[a] = [i, l].filter(Boolean).join(" "));
  }
  return { ...e, ...s };
}
function Yn(e) {
  var a, i;
  let r = (a = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : a.get, s = r && "isReactWarning" in r && r.isReactWarning;
  return s ? e.ref : (r = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, s = r && "isReactWarning" in r && r.isReactWarning, s ? e.props.ref : e.props.ref || e.ref);
}
function bn(e) {
  var r, s, a = "";
  if (typeof e == "string" || typeof e == "number") a += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (r = 0; r < i; r++) e[r] && (s = bn(e[r])) && (a && (a += " "), a += s);
  } else for (s in e) e[s] && (a && (a += " "), a += s);
  return a;
}
function M() {
  for (var e, r, s = 0, a = "", i = arguments.length; s < i; s++) (e = arguments[s]) && (r = bn(e)) && (a && (a += " "), a += r);
  return a;
}
const Xn = "_root_1j0me_1", Gn = "_disabled_1j0me_29", qn = "_active_1j0me_72", Jn = "_visual_1j0me_123", Zn = "_block_1j0me_131", Ye = {
  root: Xn,
  disabled: Gn,
  "size-m": "_size-m_1j0me_36",
  "size-l": "_size-l_1j0me_41",
  "variant-secondary": "_variant-secondary_1j0me_46",
  "variant-tertiary": "_variant-tertiary_1j0me_47",
  "variant-destructive": "_variant-destructive_1j0me_52",
  "variant-link": "_variant-link_1j0me_58",
  "variant-primary": "_variant-primary_1j0me_66",
  active: qn,
  visual: Jn,
  block: Zn
}, Qn = ln(function({
  as: r,
  asChild: s = !1,
  active: a = !1,
  block: i = !1,
  disabled: l = !1,
  size: d = "m",
  variant: f = "primary",
  icon: _,
  textColor: k,
  leadingVisual: g,
  trailingVisual: C,
  className: z,
  children: W,
  ...B
}, x) {
  const E = f === "default" ? "primary" : f === "outline" ? "secondary" : f === "ghost" ? "tertiary" : f, j = d === "default" || d === "sm" || d === "icon" ? "m" : d === "lg" ? "l" : d, w = s ? Fn : r ?? "button", V = g ?? _;
  return /* @__PURE__ */ n.jsxs(
    w,
    {
      ref: x,
      className: M(
        Ye.root,
        Ye[`size-${j}`],
        Ye[`variant-${E}`],
        a && Ye.active,
        i && Ye.block,
        l && Ye.disabled,
        z
      ),
      style: k ? { "--ui2-button-text-color": `var(${k})` } : void 0,
      "data-ui2-component": "Button",
      disabled: !s && w === "button" ? l : void 0,
      "aria-disabled": s && l ? !0 : void 0,
      ...B,
      children: [
        V ? /* @__PURE__ */ n.jsx("span", { className: Ye.visual, children: V }) : null,
        W,
        C ? /* @__PURE__ */ n.jsx("span", { className: Ye.visual, children: C }) : null
      ]
    }
  );
}), er = "_root_1xe83_1", tr = "_disabled_1xe83_24", nr = "_active_1xe83_31", rr = "_icon_1xe83_146", St = {
  root: er,
  disabled: tr,
  active: nr,
  "variant-secondary": "_variant-secondary_1xe83_43",
  "variant-tertiary": "_variant-tertiary_1xe83_44",
  "variant-inverted": "_variant-inverted_1xe83_45",
  "variant-destructive": "_variant-destructive_1xe83_49",
  "size-xs": "_size-xs_1xe83_120",
  "size-s": "_size-s_1xe83_127",
  "size-m": "_size-m_1xe83_134",
  "size-l": "_size-l_1xe83_140",
  icon: rr
};
function Mt({
  children: e,
  size: r = "m",
  variant: s = "primary",
  active: a = !1,
  disabled: i = !1,
  textColor: l,
  className: d,
  ...f
}) {
  const _ = s === "default" ? "primary" : s === "outline" ? "secondary" : s === "ghost" || s === "link" ? "tertiary" : s;
  return /* @__PURE__ */ n.jsx(
    "button",
    {
      type: "button",
      disabled: i,
      className: M(
        St.root,
        St[`size-${r}`],
        _ !== "primary" && St[`variant-${_}`],
        i && St.disabled,
        d
      ),
      "data-active": a ? "true" : "false",
      style: l ? { "--ui2-button-icon-text-color": `var(${l})` } : void 0,
      ...f,
      children: /* @__PURE__ */ n.jsx("span", { className: St.icon, children: e })
    }
  );
}
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var or = {
  outline: {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  },
  filled: {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    stroke: "none"
  }
};
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const K = (e, r, s, a) => {
  const i = ln(
    ({ color: l = "currentColor", size: d = 24, stroke: f = 2, title: _, className: k, children: g, ...C }, z) => Qt(
      "svg",
      {
        ref: z,
        ...or[e],
        width: d,
        height: d,
        className: ["tabler-icon", `tabler-icon-${r}`, k].join(" "),
        ...e === "filled" ? {
          fill: l
        } : {
          strokeWidth: f,
          stroke: l
        },
        ...C
      },
      [
        _ && Qt("title", { key: "svg-title" }, _),
        ...a.map(([W, B]) => Qt(W, B)),
        ...Array.isArray(g) ? g : [g]
      ]
    )
  );
  return i.displayName = `${s}`, i;
};
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sr = [["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0", key: "svg-0" }], ["path", { d: "M12 8v4", key: "svg-1" }], ["path", { d: "M12 16h.01", key: "svg-2" }]], ar = K("outline", "alert-circle", "AlertCircle", sr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ir = [["path", { d: "M12 9v4", key: "svg-0" }], ["path", { d: "M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0", key: "svg-1" }], ["path", { d: "M12 16h.01", key: "svg-2" }]], lr = K("outline", "alert-triangle", "AlertTriangle", ir);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cr = [["path", { d: "M7 7l10 10", key: "svg-0" }], ["path", { d: "M17 8l0 9l-9 0", key: "svg-1" }]], ur = K("outline", "arrow-down-right", "ArrowDownRight", cr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dr = [["path", { d: "M7 5a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2l0 -10", key: "svg-0" }], ["path", { d: "M17 17v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2", key: "svg-1" }]], fr = K("outline", "box-multiple", "BoxMultiple", dr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pr = [["path", { d: "M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5", key: "svg-0" }], ["path", { d: "M12 12l8 -4.5", key: "svg-1" }], ["path", { d: "M12 12l0 9", key: "svg-2" }], ["path", { d: "M12 12l-8 -4.5", key: "svg-3" }]], vr = K("outline", "box", "Box", pr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hr = [["path", { d: "M3 21l18 0", key: "svg-0" }], ["path", { d: "M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4", key: "svg-1" }], ["path", { d: "M5 21l0 -10.15", key: "svg-2" }], ["path", { d: "M19 21l0 -10.15", key: "svg-3" }], ["path", { d: "M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4", key: "svg-4" }]], kn = K("outline", "building-store", "BuildingStore", hr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _r = [["path", { d: "M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12", key: "svg-0" }], ["path", { d: "M16 3l0 4", key: "svg-1" }], ["path", { d: "M8 3l0 4", key: "svg-2" }], ["path", { d: "M4 11l16 0", key: "svg-3" }], ["path", { d: "M8 15h2v2h-2l0 -2", key: "svg-4" }]], mr = K("outline", "calendar-event", "CalendarEvent", _r);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gr = [["path", { d: "M3 13a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -6", key: "svg-0" }], ["path", { d: "M15 9a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -10", key: "svg-1" }], ["path", { d: "M9 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -14", key: "svg-2" }], ["path", { d: "M4 20h14", key: "svg-3" }]], yr = K("outline", "chart-bar", "ChartBar", gr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xr = [["path", { d: "M6 9l6 6l6 -6", key: "svg-0" }]], sn = K("outline", "chevron-down", "ChevronDown", xr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const br = [["path", { d: "M15 6l-6 6l6 6", key: "svg-0" }]], kr = K("outline", "chevron-left", "ChevronLeft", br);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jr = [["path", { d: "M9 6l6 6l-6 6", key: "svg-0" }]], Cr = K("outline", "chevron-right", "ChevronRight", jr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Er = [["path", { d: "M6 15l6 -6l6 6", key: "svg-0" }]], jn = K("outline", "chevron-up", "ChevronUp", Er);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wr = [["path", { d: "M11 7l-5 5l5 5", key: "svg-0" }], ["path", { d: "M17 7l-5 5l5 5", key: "svg-1" }]], Nr = K("outline", "chevrons-left", "ChevronsLeft", wr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sr = [["path", { d: "M7 7l5 5l-5 5", key: "svg-0" }], ["path", { d: "M13 7l5 5l-5 5", key: "svg-1" }]], Rr = K("outline", "chevrons-right", "ChevronsRight", Sr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mr = [["path", { d: "M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666", key: "svg-0" }], ["path", { d: "M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1", key: "svg-1" }]], Br = K("outline", "copy", "Copy", Mr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pr = [["path", { d: "M12 6l4 6l5 -4l-2 10h-14l-2 -10l5 4l4 -6", key: "svg-0" }]], Tr = K("outline", "crown", "Crown", Pr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ir = [["path", { d: "M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2", key: "svg-0" }], ["path", { d: "M12 3v3m0 12v3", key: "svg-1" }]], zr = K("outline", "currency-dollar", "CurrencyDollar", Ir);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Or = [["path", { d: "M10.585 10.587a2 2 0 0 0 2.829 2.828", key: "svg-0" }], ["path", { d: "M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87", key: "svg-1" }], ["path", { d: "M3 3l18 18", key: "svg-2" }]], Ar = K("outline", "eye-off", "EyeOff", Or);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dr = [["path", { d: "M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-0" }], ["path", { d: "M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6", key: "svg-1" }]], $r = K("outline", "eye", "Eye", Dr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wr = [["path", { d: "M12 20l-3 1v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v3", key: "svg-0" }], ["path", { d: "M16 19h6", key: "svg-1" }], ["path", { d: "M19 16v6", key: "svg-2" }]], Cn = K("outline", "filter-plus", "FilterPlus", Wr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lr = [["path", { d: "M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5", key: "svg-0" }], ["path", { d: "M12 12l8 -4.5", key: "svg-1" }], ["path", { d: "M12 12l0 9", key: "svg-2" }], ["path", { d: "M12 12l-8 -4.5", key: "svg-3" }], ["path", { d: "M16 5.25l-8 4.5", key: "svg-4" }]], Fr = K("outline", "package", "Package", Lr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kr = [["path", { d: "M3 3l18 18", key: "svg-0" }], ["path", { d: "M15 4.5l-3.249 3.249m-2.57 1.433l-2.181 .818l-1.5 1.5l7 7l1.5 -1.5l.82 -2.186m1.43 -2.563l3.25 -3.251", key: "svg-1" }], ["path", { d: "M9 15l-4.5 4.5", key: "svg-2" }], ["path", { d: "M14.5 4l5.5 5.5", key: "svg-3" }]], Vr = K("outline", "pinned-off", "PinnedOff", Kr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hr = [["path", { d: "M9 4v6l-2 4v2h10v-2l-2 -4v-6", key: "svg-0" }], ["path", { d: "M12 16l0 5", key: "svg-1" }], ["path", { d: "M8 4l8 0", key: "svg-2" }]], Ur = K("outline", "pinned", "Pinned", Hr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yr = [["path", { d: "M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2m0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2m-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6", key: "svg-0" }]], En = K("outline", "sparkles", "Sparkles", Yr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xr = [["path", { d: "M12 4l-8 4l8 4l8 -4l-8 -4", key: "svg-0" }], ["path", { d: "M4 12l8 4l8 -4", key: "svg-1" }], ["path", { d: "M4 16l8 4l8 -4", key: "svg-2" }]], Gr = K("outline", "stack-2", "Stack2", Xr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qr = [["path", { d: "M3 17l6 -6l4 4l8 -8", key: "svg-0" }], ["path", { d: "M14 7l7 0l0 7", key: "svg-1" }]], Jr = K("outline", "trending-up", "TrendingUp", qr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zr = [["path", { d: "M5 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-0" }], ["path", { d: "M15 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-1" }], ["path", { d: "M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5", key: "svg-2" }]], Qr = K("outline", "truck", "Truck", Zr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eo = [["path", { d: "M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-5 3.66a1 1 0 0 0 -1 1v5.585l-2.293 -2.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l4 4c.028 .028 .057 .054 .094 .083l.092 .064l.098 .052l.081 .034l.113 .034l.112 .02l.117 .006l.115 -.007l.114 -.02l.142 -.044l.113 -.054l.111 -.071a.939 .939 0 0 0 .112 -.097l4 -4l.083 -.094a1 1 0 0 0 -1.497 -1.32l-2.293 2.291v-5.584l-.007 -.117a1 1 0 0 0 -.993 -.883z", key: "svg-0" }]], to = K("filled", "circle-arrow-down-filled", "CircleArrowDownFilled", eo);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const no = [["path", { d: "M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-4.98 3.66l-.163 .01l-.086 .016l-.142 .045l-.113 .054l-.07 .043l-.095 .071l-.058 .054l-4 4l-.083 .094a1 1 0 0 0 1.497 1.32l2.293 -2.293v5.586l.007 .117a1 1 0 0 0 1.993 -.117v-5.585l2.293 2.292l.094 .083a1 1 0 0 0 1.32 -1.497l-4 -4l-.082 -.073l-.089 -.064l-.113 -.062l-.081 -.034l-.113 -.034l-.112 -.02l-.098 -.006z", key: "svg-0" }]], ro = K("filled", "circle-arrow-up-filled", "CircleArrowUpFilled", no), oo = "_frame_1bemm_1", so = "_table_1bemm_9", ao = "_scroll_1bemm_30", io = "_tableInner_1bemm_50", lo = "_tableHead_1bemm_57", co = "_tableBody_1bemm_65", uo = "_headRow_1bemm_70", fo = "_row_1bemm_77", po = "_columnGroup_1bemm_109", vo = "_columnsPinnedStart_1bemm_115", ho = "_columnsPinnedEnd_1bemm_126", _o = "_columnsRegular_1bemm_137", mo = "_headCell_1bemm_187", go = "_headContent_1bemm_224", yo = "_headLabel_1bemm_236", xo = "_headButton_1bemm_246", bo = "_sortButton_1bemm_266", ko = "_resizeHotspot_1bemm_275", jo = "_dropIndicator_1bemm_302", Co = "_dropIndicatorStart_1bemm_312", Eo = "_cell_1bemm_317", wo = "_cellContent_1bemm_327", No = "_ghost_1bemm_383", So = "_ghostInner_1bemm_392", Ro = "_actionMenu_1bemm_406", Mo = "_actionList_1bemm_414", Bo = "_actionItem_1bemm_419", Po = "_tooltip_1bemm_441", To = "_cellOutline_1bemm_465", T = {
  frame: oo,
  table: so,
  scroll: ao,
  tableInner: io,
  tableHead: lo,
  tableBody: co,
  headRow: uo,
  row: fo,
  columnGroup: po,
  columnsPinnedStart: vo,
  columnsPinnedEnd: ho,
  columnsRegular: _o,
  headCell: mo,
  headContent: go,
  headLabel: yo,
  headButton: xo,
  sortButton: bo,
  resizeHotspot: ko,
  dropIndicator: jo,
  dropIndicatorStart: Co,
  cell: Eo,
  cellContent: wo,
  ghost: No,
  ghostInner: So,
  actionMenu: Ro,
  actionList: Mo,
  actionItem: Bo,
  tooltip: Po,
  cellOutline: To
}, wn = un({});
function Nn({
  onAfterSelect: e,
  children: r
}) {
  return /* @__PURE__ */ n.jsx(wn.Provider, { value: { onAfterSelect: e }, children: r });
}
function Sn({ children: e }) {
  return /* @__PURE__ */ n.jsx("div", { className: T.actionList, children: e });
}
function dt({
  onSelect: e,
  children: r,
  className: s
}) {
  const { onAfterSelect: a } = cn(wn);
  return /* @__PURE__ */ n.jsx(
    "button",
    {
      type: "button",
      className: M(T.actionItem, s),
      onClick: () => {
        e == null || e(), a == null || a();
      },
      children: r
    }
  );
}
function dn({
  open: e,
  anchorRect: r,
  placement: s = "bottom-start",
  offset: a = 6,
  zIndex: i = 1e3,
  children: l
}) {
  const [d, f] = U(!1);
  if (ye(() => {
    f(!0);
  }, []), !e || !r || !d)
    return null;
  const _ = {
    position: "fixed",
    zIndex: i
  }, k = s.endsWith("end") ? r.right : r.left, g = s.startsWith("top") ? r.top : r.bottom;
  return _.left = Math.round(k), _.top = Math.round(g + a), s.endsWith("end") && (_.transform = "translateX(-100%)"), s.startsWith("top") && (_.transform = `${_.transform ?? ""} translateY(-100%)`), zn(/* @__PURE__ */ n.jsx("div", { style: _, children: l }), document.body);
}
function Io({
  open: e,
  onOpenChange: r,
  host: s,
  children: a,
  className: i,
  zIndex: l
}) {
  const [d, f] = U(!1), _ = q(null), k = q(null), g = e ?? d, [C, z] = U(null), W = (B) => {
    r ? r(B) : f(B);
  };
  return ye(() => {
    var B;
    g && z(((B = _.current) == null ? void 0 : B.getBoundingClientRect()) ?? null);
  }, [g]), ye(() => {
    if (!g) return;
    const B = (E) => {
      var j;
      E.key === "Escape" && (E.preventDefault(), W(!1), (j = _.current) == null || j.focus());
    }, x = (E) => {
      var w, V;
      const j = E.target;
      (w = k.current) != null && w.contains(j) || (V = _.current) != null && V.contains(j) || W(!1);
    };
    return window.addEventListener("keydown", B), window.addEventListener("mousedown", x), () => {
      window.removeEventListener("keydown", B), window.removeEventListener("mousedown", x);
    };
  }, [g]), /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    s({
      open: g,
      hostProps: {
        onClick: (B) => {
          B.preventDefault(), W(!g);
        },
        onKeyDown: (B) => {
          (B.key === "ArrowDown" || B.key === "ArrowUp") && (B.preventDefault(), W(!0));
        },
        "aria-haspopup": !0,
        "aria-expanded": g,
        ref: (B) => {
          _.current = B;
        }
      }
    }),
    /* @__PURE__ */ n.jsx(dn, { open: g, anchorRect: C, placement: "bottom-start", offset: 6, zIndex: l, children: /* @__PURE__ */ n.jsx("div", { ref: k, className: M(T.actionMenu, i), children: a }) })
  ] });
}
function zo({
  content: e,
  children: r,
  delay: s = 200
}) {
  const [a, i] = U(!1), [l, d] = U(null), f = q(null), _ = q(null);
  ye(() => () => {
    f.current && window.clearTimeout(f.current);
  }, []);
  const k = () => {
    e && (f.current && window.clearTimeout(f.current), f.current = window.setTimeout(() => {
      var C;
      d(((C = _.current) == null ? void 0 : C.getBoundingClientRect()) ?? null), i(!0);
    }, s));
  }, g = () => {
    f.current && window.clearTimeout(f.current), i(!1);
  };
  return /* @__PURE__ */ n.jsxs("div", { ref: _, onMouseEnter: k, onMouseLeave: g, children: [
    r,
    /* @__PURE__ */ n.jsx(dn, { open: a, anchorRect: l, placement: "top-start", offset: 6, children: /* @__PURE__ */ n.jsx("div", { className: T.tooltip, children: e }) })
  ] });
}
const Rn = un(null);
function Oo() {
  const e = cn(Rn);
  if (!e)
    throw new Error("DataTableContext is missing");
  return e;
}
const Mn = un(null);
function Ao() {
  const e = cn(Mn);
  if (!e)
    throw new Error("DataTableCellContext is missing");
  return e;
}
function Do({
  align: e,
  monospace: r,
  clickable: s = !1,
  active: a = !1,
  children: i,
  ...l
}) {
  const d = Ao(), f = Oo(), _ = q(null), [k, g] = U(!1), [C, z] = U(null), W = e ?? d.align, B = r ?? d.monospace, { value: x, rawValue: E, columnKey: j, filterKey: w, row: V, rowKey: ee } = d, J = le(() => {
    if (!j) return null;
    const y = ee ?? (V ? f.getRowKey(V) : null);
    return y == null ? null : `${y}:${j}`;
  }, [V, ee, j, f]), se = le(() => w || (j && f.filterableColumnKeys.has(j) ? j : null), [w, j, f.filterableColumnKeys]), re = le(() => {
    if (E == null)
      return !!(x && x.trim() && !["-", "—", "–"].includes(x.trim()));
    if (typeof E == "string") {
      const y = E.trim();
      return !!(y && !["-", "—", "–"].includes(y));
    }
    return typeof E == "number" || typeof E == "boolean" ? !0 : Array.isArray(E) ? E.length > 0 : typeof E == "object" ? Object.keys(E).length > 0 : !1;
  }, [E, x]);
  ye(() => {
    J && g(f.activeContextMenuKey === J);
  }, [J, f.activeContextMenuKey]), ye(() => {
    if (!k) return;
    const y = (Q) => {
      var m;
      const fe = Q.target;
      (m = _.current) != null && m.contains(fe) || Z();
    }, O = () => Z();
    return window.addEventListener("mousedown", y, !0), window.addEventListener("contextmenu", y, !0), window.addEventListener("scroll", O, !0), () => {
      window.removeEventListener("mousedown", y, !0), window.removeEventListener("contextmenu", y, !0), window.removeEventListener("scroll", O, !0);
    };
  }, [k]);
  const Z = () => {
    J && f.activeContextMenuKey === J && f.setActiveContextMenuKey(null);
  }, ce = (y) => {
    if (y.preventDefault(), !J || !re) return;
    if (f.activeContextMenuKey === J) {
      Z();
      return;
    }
    const O = (_.current ?? y.currentTarget).getBoundingClientRect();
    z(O), f.setActiveContextMenuKey(J);
  }, S = async () => {
    var O;
    const y = E == null ? x : String(E);
    if ((O = navigator.clipboard) != null && O.writeText)
      await navigator.clipboard.writeText(y);
    else {
      const Q = document.createElement("textarea");
      Q.value = y, Q.style.position = "fixed", Q.style.left = "-9999px", document.body.appendChild(Q), Q.focus(), Q.select(), document.execCommand("copy"), Q.remove();
    }
    Z();
  }, _e = () => {
    !j || !se || (f.filterByValue(j, se, E ?? x), Z());
  }, xe = a || k, $ = le(() => j ? f.pinnedColumnsStartKeys.includes(j) || f.pinnedColumnsEndKeys.includes(j) : !1, [j, f.pinnedColumnsStartKeys, f.pinnedColumnsEndKeys]);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      ref: _,
      role: s ? "button" : void 0,
      tabIndex: s ? 0 : void 0,
      "data-align": W,
      "data-monospace": B ? "true" : "false",
      "data-clickable": s ? "true" : "false",
      className: T.cell,
      onContextMenu: ce,
      ...l,
      children: [
        /* @__PURE__ */ n.jsx("span", { className: T.cellContent, "data-cell-content": "true", children: i }),
        /* @__PURE__ */ n.jsx("span", { className: T.cellOutline, "data-active": xe ? "true" : "false" }),
        /* @__PURE__ */ n.jsx(
          dn,
          {
            open: k && re,
            anchorRect: C,
            placement: "bottom-start",
            zIndex: $ ? 220 : 140,
            children: /* @__PURE__ */ n.jsx("div", { className: T.actionMenu, children: /* @__PURE__ */ n.jsx(Nn, { onAfterSelect: Z, children: /* @__PURE__ */ n.jsxs(Sn, { children: [
              se ? /* @__PURE__ */ n.jsxs(dt, { onSelect: _e, children: [
                /* @__PURE__ */ n.jsx(Cn, { size: 16 }),
                "Filter by value"
              ] }) : null,
              /* @__PURE__ */ n.jsxs(dt, { onSelect: S, children: [
                /* @__PURE__ */ n.jsx(Br, { size: 16 }),
                "Copy value"
              ] })
            ] }) }) })
          }
        )
      ]
    }
  );
}
const _n = 160, Rt = 40, Ft = 9999;
function en(e, r = Rt, s = Ft) {
  return Math.min(Math.max(e, r), s);
}
function $o(e, r) {
  if (!r.length) return e;
  const s = new Map(r.map((a, i) => [a, i]));
  return [...e].sort((a, i) => {
    const l = s.get(a.key), d = s.get(i.key);
    return l === void 0 && d === void 0 ? 0 : l === void 0 ? 1 : d === void 0 ? -1 : l - d;
  });
}
function ut(e, r) {
  if (!r) {
    const s = e.id;
    return s == null || s === "" ? void 0 : s;
  }
  return typeof r == "function" ? r(e) : e[r];
}
function an(e, r) {
  return typeof r.value == "function" ? r.value(e) : typeof r.value == "string" ? e[r.value] : e[r.key];
}
function Wo({
  columns: e,
  rows: r,
  rowKey: s,
  size: a = "l",
  rowHover: i = !0,
  rowClickable: l = !1,
  rowActiveKey: d = null,
  onRowClick: f,
  rowDividers: _ = !0,
  sorting: k,
  defaultSorting: g = { sortBy: null, sortOrder: "asc" },
  onSortingChange: C,
  columnWidths: z,
  onColumnResize: W,
  columnsResizing: B = !0,
  columnsReordering: x = !0,
  columnsPinControl: E = !0,
  columnsVisibilityControl: j = !0,
  filterKeys: w,
  onFilterByColumn: V,
  onFilterByValue: ee,
  visibleColumns: J,
  defaultVisibleColumns: se,
  onVisibleColumnsChange: re,
  columnsOrder: Z,
  defaultColumnsOrder: ce,
  onColumnsOrderChange: S,
  pinnedColumnsStart: _e,
  defaultPinnedColumnsStart: xe,
  onPinnedColumnsStartChange: $,
  pinnedColumnsEnd: y,
  defaultPinnedColumnsEnd: O,
  onPinnedColumnsEndChange: Q,
  className: fe,
  style: m
}) {
  var Dt;
  const [H, ue] = U(g), [Ce, $e] = U({}), [Xe, et] = U(ce ?? []), [tt, N] = U(
    se
  ), [me, nt] = U(xe ?? []), [ft, pt] = U(O ?? []), [Bt, Pt] = U(null), F = q(null), Tt = q(null), Ke = q(null), ge = q(null), Ee = q({}), rt = q(null), Me = q(null), Vt = q([]), Ht = q([]), vt = q([]), Ut = q(0), Yt = q(0), It = q(0), [zt, ht] = U(!1), [pe, _t] = U(null), [we, mt] = U(null), [Ge, Xt] = U(-1), [qe, gt] = U(-1), be = k ?? H, ot = J ?? tt, Je = Z ?? Xe, te = _e ?? me, ke = y ?? ft, Be = le(() => new Set(w ?? []), [w]), Ve = (o) => {
    C ? C(o) : ue(o);
  }, Ot = (o) => {
    re ? re(o) : N(o);
  }, st = (o) => {
    $ ? $(o) : nt(o);
  }, At = (o) => {
    S ? S(o) : et(o);
  }, at = (o) => {
    const u = ot ?? e.map((v) => v.key);
    Ot(u.filter((v) => v !== o));
  }, He = le(() => Je.length ? $o(e, Je) : [...e], [e, Je]), We = le(() => Array.isArray(ot) ? He.filter(
    ({ key: o, frozenStart: u, frozenEnd: v }) => u || v || ot.includes(o)
  ) : He, [He, ot]), je = le(
    () => We.filter(
      ({ key: o, frozenStart: u }) => u || te.includes(o)
    ),
    [We, te]
  ), Pe = le(
    () => We.filter(
      ({ key: o, frozenStart: u, frozenEnd: v }) => !u && !te.includes(o) && (v || ke.includes(o))
    ),
    [We, te, ke]
  ), Ne = le(
    () => We.filter(
      ({ key: o, frozenStart: u, frozenEnd: v }) => !u && !v && !te.includes(o) && !ke.includes(o)
    ),
    [We, te, ke]
  );
  ye(() => {
    $e((o) => {
      const u = { ...o };
      return e.forEach((v) => {
        const A = (z == null ? void 0 : z[v.key]) ?? o[v.key] ?? _n;
        u[v.key] = en(
          A,
          v.minWidth ?? Rt,
          v.maxWidth ?? Ft
        );
      }), u;
    });
  }, [e, z]);
  const ve = le(() => e.reduce((o, u) => (o[u.key] = en(
    (z == null ? void 0 : z[u.key]) ?? Ce[u.key] ?? _n,
    u.minWidth ?? Rt,
    u.maxWidth ?? Ft
  ), o), {}), [e, z, Ce]), it = () => {
    var bt, kt, jt;
    if (!F.current) return;
    const o = [...je, ...Ne, ...Pe];
    let v = o.length > 1 && rt.current === ((bt = o[0]) == null ? void 0 : bt.key) ? 1 : 0;
    o.length > 1 && Me.current && ((kt = o[v]) == null ? void 0 : kt.key) === Me.current && (v = v === 0 ? 1 : 0), (jt = o[v]) == null || jt.key;
    const A = je.map(
      (I) => Ee.current[I.key] ?? ve[I.key]
    ), G = Pe.map(
      (I) => Ee.current[I.key] ?? ve[I.key]
    ), ne = Ne.map(
      (I) => Ee.current[I.key] ?? ve[I.key]
    );
    let Ue = A.reduce((I, Ie) => I + Ie, 0), Se = G.reduce((I, Ie) => I + Ie, 0), ze = ne.reduce((I, Ie) => I + Ie, 0), Ze = Ue + ze + Se;
    const Oe = F.current.clientWidth;
    Oe > Ze && (Ze = Oe);
    const $t = A.map((I) => `${I}px`).join(" "), Wt = G.map((I) => `${I}px`).join(" "), Jt = ne.map((I) => `${I}px`).join(" ");
    Vt.current = A, Ht.current = ne, vt.current = G, Ut.current = Ue, Yt.current = ze, It.current = Se, F.current.style.setProperty(
      "--ui2-table-row-template",
      `${Ue}px ${ze}px ${Se}px`
    ), F.current.style.setProperty("--ui2-table-grid-pinned-start", $t), F.current.style.setProperty("--ui2-table-grid-regular", Jt), F.current.style.setProperty("--ui2-table-grid-pinned-end", Wt), F.current.style.setProperty("--ui2-table-width-pinned-start", `${Ue}px`), F.current.style.setProperty("--ui2-table-width-regular", `${ze}px`), F.current.style.setProperty("--ui2-table-width-pinned-end", `${Se}px`), F.current.style.setProperty("--ui2-table-total-width", `${Ze}px`);
  };
  ye(() => {
    it();
  }, [ve, je, Pe, Ne]), ye(() => {
    if (!F.current) return;
    const o = F.current, u = () => it();
    if (typeof ResizeObserver < "u") {
      const v = new ResizeObserver(u);
      return v.observe(o), () => v.disconnect();
    }
    return window.addEventListener("resize", u), () => window.removeEventListener("resize", u);
  }, [F, ve, je, Pe, Ne]);
  const yt = (o, u) => {
    const v = e.find((A) => A.key === o);
    return en(
      u,
      (v == null ? void 0 : v.minWidth) ?? Rt,
      (v == null ? void 0 : v.maxWidth) ?? Ft
    );
  }, Gt = (o) => {
    const u = o.cloneNode(!0);
    u.style.width = "max-content", u.style.maxWidth = "none", u.style.display = "inline-flex", u.style.whiteSpace = "nowrap", u.style.visibility = "hidden", u.style.position = "absolute", u.style.left = "-9999px", document.body.appendChild(u);
    const { width: v } = u.getBoundingClientRect();
    document.body.removeChild(u);
    const A = v > 0 ? v : o.scrollWidth;
    return Math.ceil(A);
  }, qt = (o) => {
    const u = window.getComputedStyle(o), v = Number.parseFloat(u.paddingLeft || "0"), A = Number.parseFloat(u.paddingRight || "0");
    return v + A;
  }, t = (o) => {
    if (!F.current) return;
    let u = 0;
    if (Array.from(F.current.querySelectorAll(`[data-column="${o}"]`)).forEach((A) => {
      const G = A.querySelector("[data-cell-content]") ?? A, ne = Gt(G) + qt(A);
      ne > u && (u = ne);
    }), !(u <= 0))
      return yt(o, u);
  }, c = (o, u) => {
    Ee.current[o] = u, Me.current = o, it(), $e((v) => ({ ...v, [o]: u })), W == null || W({ key: o, width: u }), window.setTimeout(() => {
      Ee.current[o] === u && delete Ee.current[o], Me.current === o && (Me.current = null);
    }, 0);
  }, h = () => je.reduce((o, u) => o + ve[u.key], 0) + Ne.reduce((o, u) => o + ve[u.key], 0) + Pe.reduce((o, u) => o + ve[u.key], 0), b = (o) => {
    if (!F.current) return;
    const u = t(o);
    if (!u) return;
    const v = e.find((Oe) => Oe.key === o), A = ve[o], G = (v == null ? void 0 : v.minWidth) ?? Rt, ne = h(), Ue = F.current.clientWidth, Se = Math.max(0, Ue - ne), ze = 4, Ze = 12;
    if (A > u + ze) {
      c(o, Math.max(u, G));
      return;
    }
    if (Se >= Ze && Math.abs(A - u) <= ze) {
      const Oe = yt(o, A + Se);
      if (Oe <= A + 1) {
        c(o, Math.max(u, G));
        return;
      }
      c(o, Oe);
      return;
    }
    c(o, Math.max(u, G));
  }, D = (o, u) => {
    if (!B || o.button !== 0 && o.pointerType !== "touch") return;
    o.preventDefault(), o.stopPropagation();
    const v = o.currentTarget;
    v.setPointerCapture && v.setPointerCapture(o.pointerId), rt.current = u;
    const A = o.clientX, G = ve[u];
    ge.current = { key: u, startX: A, startWidth: G };
  }, L = (o, u) => {
    if (!ge.current || ge.current.key !== u) return;
    o.preventDefault(), o.stopPropagation();
    const v = yt(u, ge.current.startWidth + (o.clientX - ge.current.startX));
    Ee.current[u] = v, it();
  }, P = (o, u) => {
    if (!ge.current || ge.current.key !== u) return;
    o.preventDefault(), o.stopPropagation();
    const v = Ee.current[u];
    v && ($e((G) => ({ ...G, [u]: v })), W == null || W({ key: u, width: v })), Ee.current = {}, ge.current = null;
    const A = o.currentTarget;
    A.releasePointerCapture && A.releasePointerCapture(o.pointerId);
  }, R = (o, u) => {
    o.preventDefault(), o.stopPropagation(), rt.current = u, Me.current = u, b(u);
  }, oe = (o) => {
    let u = 0;
    return o.map((v) => {
      const A = u;
      return u += v, A;
    });
  }, Y = (o, u) => {
    if (!x) return;
    const v = o.clientX, A = 5, G = (Ue) => {
      var jt;
      if (Math.abs(v - Ue.clientX) < A) return;
      window.removeEventListener("mousemove", G), window.removeEventListener("mouseup", ne), ht(!0), _t(u);
      const Se = He.map((I) => I.key);
      Xt(Se.indexOf(u));
      const ze = je.map((I) => ve[I.key]), Ze = Ne.map((I) => ve[I.key]), Oe = oe(ze), $t = oe(Ze), Wt = (jt = Tt.current) == null ? void 0 : jt.querySelector("[data-column]"), Jt = Wt ? Wt.offsetLeft : 0, bt = (I) => {
        if (!F.current) return;
        const { left: Ie, right: Zt } = F.current.getBoundingClientRect(), { scrollLeft: Ct } = F.current, Lt = I.clientX - Ie + Ct;
        Ke.current && (Ke.current.style.transform = `translateX(${Lt}px)`);
        let Ae = I.clientX - Ie - Jt;
        if (Ae < 0) return;
        if (Ae <= ze.reduce((Et, De) => Et + De, 0)) {
          const Et = Oe.findIndex(
            (Tn, In) => Ae >= Tn && Ae < (Oe[In + 1] ?? 1 / 0)
          ), De = je[Et];
          mt((De == null ? void 0 : De.key) ?? null), gt(Se.indexOf((De == null ? void 0 : De.key) ?? ""));
          return;
        }
        Ae = Ae + Ct;
        const Pn = $t.findIndex(
          (Et, De) => Ae >= Et && Ae < ($t[De + 1] ?? 1 / 0)
        ), lt = Ne[Pn];
        mt((lt == null ? void 0 : lt.key) ?? null), gt(Se.indexOf((lt == null ? void 0 : lt.key) ?? ""));
        const fn = 100;
        I.clientX < Ie + fn ? F.current.scrollLeft = Math.max(0, F.current.scrollLeft - 15) : I.clientX > Zt - fn && (F.current.scrollLeft = Math.min(
          F.current.scrollWidth - F.current.clientWidth,
          F.current.scrollLeft + 15
        ));
      }, kt = () => {
        if (we && pe && pe !== we) {
          const I = [...Se], Ie = I.indexOf(pe), Zt = I.indexOf(we);
          I.splice(Ie, 1), I.splice(Zt, 0, pe), At(I);
          const Ct = te.includes(pe), Lt = te.includes(we);
          Ct && !Lt ? st(te.filter((Ae) => Ae !== pe)) : !Ct && Lt && st([...te, pe]);
        }
        ht(!1), _t(null), mt(null), gt(-1), window.removeEventListener("mousemove", bt), window.removeEventListener("mouseup", kt);
      };
      window.addEventListener("mousemove", bt), window.addEventListener("mouseup", kt);
    }, ne = () => {
      window.removeEventListener("mousemove", G), window.removeEventListener("mouseup", ne);
    };
    window.addEventListener("mousemove", G), window.addEventListener("mouseup", ne);
  }, X = (o) => {
    te.includes(o) || st([...te, o]);
  }, ae = (o) => {
    st(te.filter((u) => u !== o));
  }, Te = (o, u) => {
    const v = u ?? (Be.has(o) ? o : null);
    v && (V == null || V({ columnKey: o, filterKey: v }));
  }, Le = (o, u, v) => {
    const A = u ?? (Be.has(o) ? o : null);
    A && (ee == null || ee({ columnKey: o, filterKey: A, value: v }));
  }, de = le(() => {
    if (!be.sortBy) return r;
    const o = e.find((v) => v.key === be.sortBy);
    if (!o) return r;
    const u = [...r];
    return u.sort((v, A) => {
      if (o.sortFn) return o.sortFn(v, A, be.sortOrder);
      const G = an(v, o), ne = an(A, o);
      return typeof G == "string" && typeof ne == "string" ? be.sortOrder === "desc" ? ne.localeCompare(G) : G.localeCompare(ne) : typeof G == "number" && typeof ne == "number" ? be.sortOrder === "desc" ? ne - G : G - ne : 0;
    }), u;
  }, [r, e, be]), xt = le(
    () => ({
      sorting: be,
      setSorting: Ve,
      pinnedColumnsStartKeys: te,
      pinnedColumnsEndKeys: ke,
      pinColumn: X,
      unpinColumn: ae,
      hideColumn: at,
      columnsReordering: x,
      columnsPinControl: E,
      columnsVisibilityControl: j,
      startDragging: Y,
      draggedColumnKey: pe,
      targetColumnKey: we,
      draggedColumnIndex: Ge,
      targetColumnIndex: qe,
      filterableColumnKeys: Be,
      filterByColumn: Te,
      filterByValue: Le,
      activeContextMenuKey: Bt,
      setActiveContextMenuKey: Pt,
      getRowKey: (o) => ut(o, s) ?? ""
    }),
    [
      be,
      te,
      ke,
      x,
      E,
      j,
      pe,
      we,
      Ge,
      qe,
      Be,
      Bt,
      s
    ]
  );
  return /* @__PURE__ */ n.jsx(Rn.Provider, { value: xt, children: /* @__PURE__ */ n.jsx("div", { className: M(T.frame, fe), "data-ui2-component": "DataTable", style: m, children: /* @__PURE__ */ n.jsx("div", { className: T.scroll, ref: F, children: /* @__PURE__ */ n.jsx("div", { className: T.table, "data-size": a, children: /* @__PURE__ */ n.jsxs("div", { className: T.tableInner, children: [
    /* @__PURE__ */ n.jsx("div", { className: T.tableHead, role: "rowgroup", children: /* @__PURE__ */ n.jsxs("div", { className: T.headRow, role: "row", ref: Tt, children: [
      je.length ? /* @__PURE__ */ n.jsx("div", { className: M(T.columnGroup, T.columnsPinnedStart), "data-group": "pinned-start", children: je.map((o) => /* @__PURE__ */ n.jsx(
        tn,
        {
          column: o,
          sorting: be,
          onSortingChange: Ve,
          onPin: () => X(o.key),
          onUnpin: () => ae(o.key),
          onHide: () => at(o.key),
          onFilter: () => Te(o.key, o.filterKey),
          onStartDragging: Y,
          onResizeStart: D,
          onResizeMove: L,
          onResizeEnd: P,
          onResizeDoubleClick: R,
          canResize: B,
          canPin: E,
          pinned: te.includes(o.key),
          canHide: j,
          canReorder: x,
          canFilter: !!o.filterKey || Be.has(o.key),
          dragState: {
            draggedColumnKey: pe,
            targetColumnKey: we,
            draggedColumnIndex: Ge,
            targetColumnIndex: qe
          }
        },
        o.key
      )) }) : null,
      /* @__PURE__ */ n.jsx("div", { className: M(T.columnGroup, T.columnsRegular), "data-group": "regular", children: Ne.map((o) => /* @__PURE__ */ n.jsx(
        tn,
        {
          column: o,
          sorting: be,
          onSortingChange: Ve,
          onPin: () => X(o.key),
          onUnpin: () => ae(o.key),
          onHide: () => at(o.key),
          onFilter: () => Te(o.key, o.filterKey),
          onStartDragging: Y,
          onResizeStart: D,
          onResizeMove: L,
          onResizeEnd: P,
          onResizeDoubleClick: R,
          canResize: B,
          canPin: E,
          pinned: te.includes(o.key),
          canHide: j,
          canReorder: x,
          canFilter: !!o.filterKey || Be.has(o.key),
          dragState: {
            draggedColumnKey: pe,
            targetColumnKey: we,
            draggedColumnIndex: Ge,
            targetColumnIndex: qe
          }
        },
        o.key
      )) }),
      Pe.length ? /* @__PURE__ */ n.jsx("div", { className: M(T.columnGroup, T.columnsPinnedEnd), "data-group": "pinned-end", children: Pe.map((o) => /* @__PURE__ */ n.jsx(
        tn,
        {
          column: o,
          sorting: be,
          onSortingChange: Ve,
          onPin: () => X(o.key),
          onUnpin: () => ae(o.key),
          onHide: () => at(o.key),
          onFilter: () => Te(o.key, o.filterKey),
          onStartDragging: Y,
          onResizeStart: D,
          onResizeMove: L,
          onResizeEnd: P,
          onResizeDoubleClick: R,
          canResize: B,
          canPin: !1,
          pinned: !1,
          canHide: j,
          canReorder: x,
          canFilter: !!o.filterKey || Be.has(o.key),
          dragState: {
            draggedColumnKey: pe,
            targetColumnKey: we,
            draggedColumnIndex: Ge,
            targetColumnIndex: qe
          }
        },
        o.key
      )) }) : null,
      zt ? /* @__PURE__ */ n.jsx("div", { className: T.ghost, ref: Ke, children: /* @__PURE__ */ n.jsx("div", { className: T.ghostInner, children: (Dt = He.find((o) => o.key === pe)) == null ? void 0 : Dt.header }) }) : null
    ] }) }),
    /* @__PURE__ */ n.jsx("div", { className: T.tableBody, role: "rowgroup", children: de.map((o, u) => /* @__PURE__ */ n.jsxs(
      Lo,
      {
        hover: i,
        clickable: l || !!f,
        active: d != null && ut(o, s) === d,
        divider: _,
        onClick: f ? () => f(o) : void 0,
        children: [
          je.length ? /* @__PURE__ */ n.jsx("div", { className: M(T.columnGroup, T.columnsPinnedStart), "data-group": "pinned-start", children: je.map((v) => /* @__PURE__ */ n.jsx(
            nn,
            {
              column: v,
              row: o,
              rowKeyValue: ut(o, s) ?? u
            },
            v.key
          )) }) : null,
          /* @__PURE__ */ n.jsx("div", { className: M(T.columnGroup, T.columnsRegular), "data-group": "regular", children: Ne.map((v) => /* @__PURE__ */ n.jsx(
            nn,
            {
              column: v,
              row: o,
              rowKeyValue: ut(o, s) ?? u
            },
            v.key
          )) }),
          Pe.length ? /* @__PURE__ */ n.jsx("div", { className: M(T.columnGroup, T.columnsPinnedEnd), "data-group": "pinned-end", children: Pe.map((v) => /* @__PURE__ */ n.jsx(
            nn,
            {
              column: v,
              row: o,
              rowKeyValue: ut(o, s) ?? u
            },
            v.key
          )) }) : null
        ]
      },
      ut(o, s) ?? u
    )) })
  ] }) }) }) }) });
}
function Lo({
  children: e,
  hover: r,
  clickable: s,
  active: a,
  divider: i,
  onClick: l
}) {
  return /* @__PURE__ */ n.jsx(
    "div",
    {
      className: T.row,
      "data-hover": r ? "true" : "false",
      "data-divider": i ? "true" : "false",
      "data-clickable": s ? "true" : "false",
      "data-active": a ? "true" : "false",
      onClick: l,
      children: e
    }
  );
}
function tn({
  column: e,
  sorting: r,
  onSortingChange: s,
  onPin: a,
  onUnpin: i,
  onHide: l,
  onFilter: d,
  onStartDragging: f,
  onResizeStart: _,
  onResizeMove: k,
  onResizeEnd: g,
  onResizeDoubleClick: C,
  canResize: z,
  canPin: W,
  canHide: B,
  canReorder: x,
  canFilter: E,
  pinned: j,
  dragState: w
}) {
  const [V, ee] = U(!1), J = r.sortBy === e.key, se = z && (e.resizable ?? !0);
  ye(() => {
    if (!V) return;
    const S = () => ee(!1);
    return window.addEventListener("scroll", S, !0), () => window.removeEventListener("scroll", S, !0);
  }, [V]);
  const re = () => {
    if (e.sortable) {
      if (r.sortBy !== e.key) {
        s({ sortBy: e.key, sortOrder: "asc" });
        return;
      }
      if (r.sortOrder === "desc") {
        s({ sortBy: null, sortOrder: "asc" });
        return;
      }
      s({ sortBy: e.key, sortOrder: "desc" });
    }
  }, Z = e.key === w.targetColumnKey && e.key !== w.draggedColumnKey, ce = w.draggedColumnIndex > w.targetColumnIndex && Z;
  return /* @__PURE__ */ n.jsx(zo, { content: e.tooltip, children: /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: T.headCell,
      "data-align": e.align ?? "start",
      "data-open": V ? "true" : "false",
      "data-column": e.key,
      onMouseDown: (S) => {
        var _e, xe;
        (xe = (_e = S.target) == null ? void 0 : _e.closest) != null && xe.call(_e, "[data-resize-hotspot]") || !x || e.frozenStart || e.frozenEnd || f(S.nativeEvent, e.key);
      },
      children: [
        /* @__PURE__ */ n.jsx("div", { className: T.headContent, children: /* @__PURE__ */ n.jsx("span", { className: T.headLabel, "data-cell-content": "true", children: e.header }) }),
        /* @__PURE__ */ n.jsx(
          Io,
          {
            open: V,
            onOpenChange: ee,
            host: ({ hostProps: S }) => /* @__PURE__ */ n.jsx("button", { ...S, className: T.headButton, "aria-label": "Column menu" }),
            zIndex: j ? 220 : 140,
            children: /* @__PURE__ */ n.jsx(Nn, { onAfterSelect: () => ee(!1), children: /* @__PURE__ */ n.jsxs(Sn, { children: [
              W && !e.frozenStart && !e.frozenEnd ? j ? /* @__PURE__ */ n.jsxs(dt, { onSelect: i, children: [
                /* @__PURE__ */ n.jsx(Vr, { size: 16 }),
                " Unpin column"
              ] }) : /* @__PURE__ */ n.jsxs(dt, { onSelect: a, children: [
                /* @__PURE__ */ n.jsx(Ur, { size: 16 }),
                " Pin column"
              ] }) : null,
              B ? /* @__PURE__ */ n.jsxs(dt, { onSelect: l, children: [
                /* @__PURE__ */ n.jsx(Ar, { size: 16 }),
                " Hide column"
              ] }) : null,
              E ? /* @__PURE__ */ n.jsxs(dt, { onSelect: d, children: [
                /* @__PURE__ */ n.jsx(Cn, { size: 16 }),
                " Filter by column"
              ] }) : null
            ] }) })
          }
        ),
        e.sortable ? /* @__PURE__ */ n.jsx(
          Mt,
          {
            size: "xs",
            variant: "tertiary",
            className: T.sortButton,
            active: J,
            textColor: "--ui2-content-secondary",
            "aria-label": `Sort ${typeof e.header == "string" ? e.header : e.key}`,
            onClick: (S) => {
              S.stopPropagation(), re();
            },
            children: J ? r.sortOrder === "desc" ? /* @__PURE__ */ n.jsx(sn, { size: 14 }) : /* @__PURE__ */ n.jsx(jn, { size: 14 }) : /* @__PURE__ */ n.jsx(sn, { size: 14 })
          }
        ) : null,
        se ? /* @__PURE__ */ n.jsx(
          "span",
          {
            className: T.resizeHotspot,
            "data-resize-hotspot": "true",
            onPointerDown: (S) => {
              S.preventDefault(), S.stopPropagation(), _(S, e.key);
            },
            onPointerMove: (S) => {
              k(S, e.key);
            },
            onPointerUp: (S) => {
              g(S, e.key);
            },
            onPointerCancel: (S) => {
              g(S, e.key);
            },
            onDoubleClick: (S) => {
              S.preventDefault(), S.stopPropagation(), C(S, e.key);
            }
          }
        ) : null,
        Z ? /* @__PURE__ */ n.jsx("div", { className: M(T.dropIndicator, ce && T.dropIndicatorStart) }) : null
      ]
    }
  ) });
}
function nn({
  column: e,
  row: r,
  rowKeyValue: s
}) {
  const a = an(r, e), i = e.valueFormatter ? e.valueFormatter(a, r) : a, l = i == null ? "" : String(i), d = e.render ? e.render(r) : l;
  return /* @__PURE__ */ n.jsx(
    Mn.Provider,
    {
      value: {
        align: e.align ?? "start",
        monospace: e.monospace ?? !1,
        row: r,
        rowKey: s,
        columnKey: e.key,
        filterKey: e.filterKey,
        value: l,
        rawValue: a
      },
      children: /* @__PURE__ */ n.jsx(Do, { "data-column": e.key, children: d })
    }
  );
}
const Fo = "_root_1cr7k_1", Ko = "_header_1cr7k_10", Vo = "_headerLeft_1cr7k_19", Ho = "_headerRight_1cr7k_28", Uo = "_titlePill_1cr7k_36", Yo = "_subtitleBadge_1cr7k_53", Xo = "_subtitleBadgeAi_1cr7k_70", Go = "_tableWrap_1cr7k_81", qo = "_tableFrame_1cr7k_85", Jo = "_footer_1cr7k_90", Zo = "_footerText_1cr7k_99", Qo = "_footerActions_1cr7k_108", Re = {
  root: Fo,
  header: Ko,
  headerLeft: Vo,
  headerRight: Ho,
  titlePill: Uo,
  subtitleBadge: Yo,
  subtitleBadgeAi: Xo,
  tableWrap: Go,
  tableFrame: qo,
  footer: Jo,
  footerText: Zo,
  footerActions: Qo
}, es = 10;
function ts(e) {
  if (e == null) return;
  if (typeof e == "number" && Number.isFinite(e)) return e;
  const r = String(e).trim();
  if (!r) return;
  if (r.endsWith("px")) {
    const a = Number.parseFloat(r.slice(0, -2));
    return Number.isFinite(a) ? a : void 0;
  }
  if (r.endsWith("rem")) {
    const a = Number.parseFloat(r.slice(0, -3));
    return Number.isFinite(a) ? a * 16 : void 0;
  }
  const s = r.match(/^w-(\d+)$/);
  if (s)
    return Number.parseInt(s[1], 10) * 4;
}
function ns(e, r) {
  if (!r) {
    const s = e.id;
    return s == null || s === "" ? void 0 : s;
  }
  return typeof r == "function" ? r(e) : e[r];
}
function rn(e, r) {
  return e[r];
}
function rs(e) {
  if (e === "left") return "start";
  if (e === "right") return "end";
  if (e === "center") return "center";
}
function Oa({
  columns: e,
  data: r,
  title: s,
  subtitle: a,
  subtitleIcon: i = "none",
  pageSize: l = es,
  className: d,
  showActions: f = !1,
  headerAction: _,
  onRowClick: k,
  onClearFilter: g,
  rowKey: C,
  filterKeys: z,
  onFilterByColumn: W,
  onFilterByValue: B,
  style: x
}) {
  const [E, j] = U({ sortBy: null, sortOrder: "asc" }), [w, V] = U(1), [ee, J] = U(null), se = le(() => {
    const $ = e.map((y) => ({
      key: String(y.key),
      header: y.label,
      sortable: y.sortable,
      filterKey: y.filterKey,
      align: rs(y.align),
      value: y.key,
      render: y.render ? (O) => {
        var Q;
        return (Q = y.render) == null ? void 0 : Q.call(y, rn(O, y.key), O);
      } : void 0
    }));
    return f ? [
      ...$,
      {
        key: "__actions",
        header: "Actions",
        sortable: !1,
        align: "end",
        render: (y) => /* @__PURE__ */ n.jsx(
          Mt,
          {
            variant: "tertiary",
            size: "s",
            onClick: (O) => O.stopPropagation(),
            "aria-label": "View",
            children: /* @__PURE__ */ n.jsx($r, { size: 16 })
          }
        )
      }
    ] : $;
  }, [e, f]), re = le(() => {
    const $ = {};
    return e.forEach((y) => {
      const O = ts(y.width);
      O != null && ($[String(y.key)] = O);
    }), f && ($.__actions = 48), $;
  }, [e, f]), Z = le(() => {
    if (!E.sortBy) return r;
    const $ = se.find((O) => O.key === E.sortBy);
    if (!$) return r;
    const y = [...r];
    return y.sort((O, Q) => {
      const fe = $.key === "__actions" ? null : rn(O, $.key), m = $.key === "__actions" ? null : rn(Q, $.key);
      return typeof fe == "number" && typeof m == "number" ? E.sortOrder === "desc" ? m - fe : fe - m : typeof fe == "string" && typeof m == "string" ? E.sortOrder === "desc" ? m.localeCompare(fe) : fe.localeCompare(m) : 0;
    }), y;
  }, [r, se, E]), ce = Math.max(1, Math.ceil(Z.length / l)), S = Math.min(w, ce), _e = Z.slice((S - 1) * l, S * l);
  ye(() => {
    S !== w && V(S);
  }, [S, w]), ye(() => {
    V(1);
  }, [l, r.length, E.sortBy, E.sortOrder]);
  const xe = ($) => {
    const y = ns($, C);
    y != null && J(y), k == null || k($);
  };
  return /* @__PURE__ */ n.jsxs("div", { className: M(Re.root, d), style: x, children: [
    (s || a || _ || g) && /* @__PURE__ */ n.jsxs("div", { className: Re.header, children: [
      /* @__PURE__ */ n.jsxs("div", { className: Re.headerLeft, children: [
        s ? /* @__PURE__ */ n.jsx("div", { className: Re.titlePill, children: s }) : null,
        g ? /* @__PURE__ */ n.jsx(Qn, { variant: "secondary", size: "m", onClick: g, children: "Clear filter" }) : null,
        a ? /* @__PURE__ */ n.jsxs(
          "span",
          {
            className: M(
              Re.subtitleBadge,
              i === "ai" && Re.subtitleBadgeAi
            ),
            children: [
              i === "ai" ? /* @__PURE__ */ n.jsx(En, { size: 14 }) : null,
              a
            ]
          }
        ) : null
      ] }),
      _ ? /* @__PURE__ */ n.jsx("div", { className: Re.headerRight, children: _ }) : null
    ] }),
    /* @__PURE__ */ n.jsx("div", { className: Re.tableWrap, children: /* @__PURE__ */ n.jsx(
      Wo,
      {
        columns: se,
        rows: _e,
        size: "m",
        sorting: E,
        onSortingChange: j,
        columnWidths: re,
        filterKeys: z,
        onFilterByColumn: W,
        onFilterByValue: B,
        rowClickable: !!k,
        rowActiveKey: ee,
        onRowClick: k ? xe : void 0,
        className: Re.tableFrame
      }
    ) }),
    ce > 1 ? /* @__PURE__ */ n.jsxs("div", { className: Re.footer, children: [
      /* @__PURE__ */ n.jsxs("div", { className: Re.footerText, children: [
        "Page ",
        S,
        " of ",
        ce
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: Re.footerActions, children: [
        /* @__PURE__ */ n.jsx(
          Mt,
          {
            variant: "tertiary",
            size: "s",
            onClick: () => V(Math.max(1, S - 1)),
            disabled: S === 1,
            "aria-label": "Previous page",
            children: /* @__PURE__ */ n.jsx(kr, { size: 16 })
          }
        ),
        /* @__PURE__ */ n.jsx(
          Mt,
          {
            variant: "tertiary",
            size: "s",
            onClick: () => V(Math.min(ce, S + 1)),
            disabled: S === ce,
            "aria-label": "Next page",
            children: /* @__PURE__ */ n.jsx(Cr, { size: 16 })
          }
        )
      ] })
    ] }) : null
  ] });
}
const os = "_badge_gg8ef_1", ss = "_selectWrap_gg8ef_15", as = "_select_gg8ef_15", is = "_outlined_gg8ef_37", ls = "_approved_gg8ef_41", cs = "_pending_gg8ef_47", us = "_rejected_gg8ef_53", ds = "_mix_gg8ef_59", Fe = {
  badge: os,
  selectWrap: ss,
  select: as,
  outlined: is,
  approved: ls,
  pending: cs,
  rejected: us,
  mix: ds
}, fs = ["APPROVED", "PENDING", "REJECTED", "Active", "Core", "Mix"];
function Aa({
  status: e,
  onChange: r,
  variant: s = "default",
  className: a
}) {
  const i = (d) => {
    r == null || r(d.target.value);
  }, l = e === "APPROVED" || e === "Active" || e === "Core" ? Fe.approved : e === "REJECTED" ? Fe.rejected : e === "Mix" ? Fe.mix : Fe.pending;
  return r ? /* @__PURE__ */ n.jsx("div", { className: M(Fe.selectWrap, l, a), children: /* @__PURE__ */ n.jsx(
    "select",
    {
      className: M(Fe.select, s === "outlined" && Fe.outlined),
      value: e,
      onChange: i,
      "aria-label": "Status",
      children: fs.map((d) => /* @__PURE__ */ n.jsx("option", { value: d, children: d }, d))
    }
  ) }) : /* @__PURE__ */ n.jsx(
    "span",
    {
      className: M(
        Fe.badge,
        l,
        s === "outlined" && Fe.outlined,
        a
      ),
      children: e
    }
  );
}
const ps = "_root_karlk_1", vs = {
  root: ps
};
function Da({ cluster: e, className: r }) {
  return /* @__PURE__ */ n.jsx("span", { className: M(vs.root, r), "aria-label": `Cluster ${e}`, children: e });
}
const hs = "_root_vx2zz_1", _s = "_track_vx2zz_8", ms = "_fill_vx2zz_18", gs = "_green_vx2zz_24", ys = "_orange_vx2zz_28", xs = "_teal_vx2zz_32", bs = "_label_vx2zz_36", Qe = {
  root: hs,
  track: _s,
  fill: ms,
  green: gs,
  orange: ys,
  teal: xs,
  label: bs
}, ks = {
  green: Qe.green,
  orange: Qe.orange,
  teal: Qe.teal
};
function $a({
  value: e,
  max: r = 100,
  showLabel: s = !0,
  color: a = "green",
  className: i
}) {
  const l = Math.min(e / r * 100, 100);
  return /* @__PURE__ */ n.jsxs("div", { className: M(Qe.root, i), children: [
    /* @__PURE__ */ n.jsx("div", { className: Qe.track, children: /* @__PURE__ */ n.jsx("div", { className: M(Qe.fill, ks[a]), style: { width: `${l}%` } }) }),
    s ? /* @__PURE__ */ n.jsxs("span", { className: Qe.label, children: [
      Math.round(l),
      "%"
    ] }) : null
  ] });
}
const js = "_root_3iri6_1", Cs = "_main_3iri6_23", Es = "_heading_3iri6_29", ws = "_headingText_3iri6_40", Ns = "_iconWrap_3iri6_46", Ss = "_value_3iri6_58", Rs = "_bottom_3iri6_74", Ms = "_meta_3iri6_80", Bs = "_trend_3iri6_89", Ps = "_trendIcon_3iri6_100", Ts = "_trendValue_3iri6_108", Is = "_trendSuffix_3iri6_114", zs = "_trendPositive_3iri6_123", Os = "_trendNegative_3iri6_127", As = "_trendNeutral_3iri6_131", ie = {
  root: js,
  "variant-default": "_variant-default_3iri6_13",
  "variant-large": "_variant-large_3iri6_18",
  main: Cs,
  heading: Es,
  headingText: ws,
  iconWrap: Ns,
  value: Ss,
  bottom: Rs,
  meta: Ms,
  trend: Bs,
  trendIcon: Ps,
  trendValue: Ts,
  trendSuffix: Is,
  trendPositive: zs,
  trendNegative: Os,
  trendNeutral: As
}, Ds = {
  store: kn,
  package: Fr,
  dollar: zr,
  chart: yr,
  trending: Jr,
  truck: Qr,
  calendar: mr,
  alert: lr,
  critical: ar,
  crown: Tr,
  layers: Gr,
  tail: ur,
  sparkles: En,
  box: vr,
  boxes: fr
};
function Wa({ data: e, className: r, variant: s = "default", header: a }) {
  if (!e) return null;
  const i = e.icon ? Ds[e.icon] || kn : null, l = !!(e.trend && e.trendValue), d = e.trend === "down" ? ie.trendNegative : e.trend === "up" ? ie.trendPositive : ie.trendNeutral;
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: M(ie.root, ie[`variant-${s}`], r),
      "data-variant": s,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: ie.main, children: [
          /* @__PURE__ */ n.jsxs("div", { className: ie.heading, children: [
            i ? /* @__PURE__ */ n.jsx("span", { className: ie.iconWrap, "aria-hidden": "true", children: /* @__PURE__ */ n.jsx(i, { size: 16 }) }) : null,
            /* @__PURE__ */ n.jsx("div", { className: ie.headingText, children: a ?? e.title })
          ] }),
          /* @__PURE__ */ n.jsx("div", { className: ie.value, children: e.value })
        ] }),
        /* @__PURE__ */ n.jsxs("div", { className: ie.bottom, children: [
          e.subtitle ? /* @__PURE__ */ n.jsx("div", { className: ie.meta, children: e.subtitle }) : null,
          l ? /* @__PURE__ */ n.jsxs("div", { className: M(ie.trend, d), children: [
            e.trend === "down" ? /* @__PURE__ */ n.jsx("span", { className: ie.trendIcon, "aria-hidden": "true", children: /* @__PURE__ */ n.jsx(to, { size: 16 }) }) : e.trend === "up" ? /* @__PURE__ */ n.jsx("span", { className: ie.trendIcon, "aria-hidden": "true", children: /* @__PURE__ */ n.jsx(ro, { size: 16 }) }) : null,
            /* @__PURE__ */ n.jsx("span", { className: ie.trendValue, children: e.trendValue }),
            e.target ? /* @__PURE__ */ n.jsx("span", { className: ie.trendSuffix, children: e.target }) : null
          ] }) : null
        ] })
      ]
    }
  );
}
const $s = "_root_xtrkz_1", Ws = "_collapsed_xtrkz_11", Ls = "_header_xtrkz_15", Fs = "_accountButton_xtrkz_26", Ks = "_accountInfo_xtrkz_43", Vs = "_accountAvatar_xtrkz_50", Hs = "_accountName_xtrkz_71", Us = "_accountUsername_xtrkz_72", Ys = "_buttons_xtrkz_100", Xs = "_buttonsCollapsed_xtrkz_108", Gs = "_headerButton_xtrkz_112", qs = "_headerButtonDisabled_xtrkz_144", Js = "_headerButtonActive_xtrkz_150", Zs = "_nav_xtrkz_163", Qs = "_menuItem_xtrkz_193", ea = "_menuButton_xtrkz_197", ta = "_menuButtonPseudoHover_xtrkz_237", na = "_menuButtonActive_xtrkz_241", ra = "_menuButtonExpanded_xtrkz_245", oa = "_menuButtonDisabled_xtrkz_249", sa = "_menuButtonText_xtrkz_258", aa = "_menuButtonIcon_xtrkz_267", ia = "_menuButtonChevron_xtrkz_283", la = "_menuButtonCompact_xtrkz_292", ca = "_children_xtrkz_298", ua = "_child_xtrkz_298", da = "_childActive_xtrkz_335", fa = "_childDisabled_xtrkz_339", pa = "_childText_xtrkz_348", va = "_childIcon_xtrkz_354", ha = "_popover_xtrkz_363", _a = "_popoverTitle_xtrkz_372", ma = "_footer_xtrkz_437", ga = "_footerExpanded_xtrkz_449", ya = "_footerBottom_xtrkz_453", xa = "_footerLogo_xtrkz_461", ba = "_version_xtrkz_467", ka = "_footerCollapsed_xtrkz_478", ja = "_iconButton_xtrkz_498", Ca = "_pinnedButtonWrap_xtrkz_519", Ea = "_tooltipHost_xtrkz_524", p = {
  root: $s,
  collapsed: Ws,
  header: Ls,
  accountButton: Fs,
  accountInfo: Ks,
  accountAvatar: Vs,
  accountName: Hs,
  accountUsername: Us,
  buttons: Ys,
  buttonsCollapsed: Xs,
  headerButton: Gs,
  headerButtonDisabled: qs,
  headerButtonActive: Js,
  nav: Zs,
  menuItem: Qs,
  menuButton: ea,
  menuButtonPseudoHover: ta,
  menuButtonActive: na,
  menuButtonExpanded: ra,
  menuButtonDisabled: oa,
  menuButtonText: sa,
  menuButtonIcon: aa,
  menuButtonChevron: ia,
  menuButtonCompact: la,
  children: ca,
  child: ua,
  childActive: da,
  childDisabled: fa,
  childText: pa,
  childIcon: va,
  popover: ha,
  popoverTitle: _a,
  footer: ma,
  footerExpanded: ga,
  footerBottom: ya,
  footerLogo: xa,
  version: ba,
  footerCollapsed: ka,
  iconButton: ja,
  pinnedButtonWrap: Ca,
  tooltipHost: Ea
};
function mn(e, r, s, a) {
  const i = a.x - r.x, l = a.y - r.y, d = s.x - r.x, f = s.y - r.y, _ = e.x - r.x, k = e.y - r.y, g = i * i + l * l, C = i * d + l * f, z = i * _ + l * k, W = d * d + f * f, B = d * _ + f * k, x = g * W - C * C;
  if (x === 0)
    return !1;
  const E = 1 / x, j = (W * z - C * B) * E, w = (g * B - C * z) * E;
  return j >= 0 && w >= 0 && j + w <= 1;
}
function gn(e, r, s = 0) {
  return e.x >= r.left - s && e.x <= r.right + s && e.y >= r.top - s && e.y <= r.bottom + s;
}
function wa(e, r, s, a, i) {
  return mn(e, r, s, a) || mn(e, r, a, i);
}
function Na(e, r, s, a = 8) {
  if (gn(e, r, a) || gn(e, s, a))
    return !0;
  const i = { x: r.right, y: r.top - a }, l = { x: s.left, y: s.top - a }, d = { x: s.left, y: s.bottom + a }, f = { x: r.right, y: r.bottom + a };
  return wa(e, i, l, d, f);
}
function Sa({ initials: e, name: r, username: s, collapsed: a = !1, className: i, ...l }) {
  return /* @__PURE__ */ n.jsxs("button", { type: "button", className: M(p.accountButton, i), ...l, children: [
    /* @__PURE__ */ n.jsx("div", { className: p.accountAvatar, children: e }),
    a ? null : /* @__PURE__ */ n.jsxs("div", { className: p.accountInfo, children: [
      /* @__PURE__ */ n.jsx("div", { className: p.accountName, children: r }),
      /* @__PURE__ */ n.jsx("div", { className: p.accountUsername, children: s })
    ] })
  ] });
}
function Ra({
  actions: e,
  collapsed: r = !1,
  renderTooltip: s,
  className: a,
  ...i
}) {
  return /* @__PURE__ */ n.jsx("div", { className: M(p.buttons, r && p.buttonsCollapsed, a), ...i, children: e.map((l) => {
    const d = /* @__PURE__ */ n.jsx(
      "button",
      {
        type: "button",
        className: M(
          p.headerButton,
          l.active && p.headerButtonActive,
          l.disabled && p.headerButtonDisabled
        ),
        onClick: l.disabled ? void 0 : l.onClick,
        "aria-label": l.label,
        style: { "--ui2-sidebar-pinned-icon-color": "var(--ui2-content-secondary)" },
        children: l.icon
      },
      l.id
    );
    return s ? /* @__PURE__ */ n.jsx("div", { className: p.pinnedButtonWrap, children: s({ content: l.label, children: d }) }, l.id) : /* @__PURE__ */ n.jsx("div", { className: p.pinnedButtonWrap, children: d }, l.id);
  }) });
}
function Ma({
  icon: e,
  showIcon: r = !0,
  label: s,
  compact: a = !1,
  active: i,
  expanded: l,
  disabled: d,
  pseudoHover: f,
  chevron: _,
  as: k,
  className: g,
  ...C
}) {
  const z = k ?? "button";
  return /* @__PURE__ */ n.jsxs(
    z,
    {
      ...z === "button" ? { type: "button", disabled: d } : null,
      className: M(
        p.menuButton,
        a && p.menuButtonCompact,
        i && p.menuButtonActive,
        l && p.menuButtonExpanded,
        d && p.menuButtonDisabled,
        f && p.menuButtonPseudoHover,
        g
      ),
      ...C,
      children: [
        e && r ? /* @__PURE__ */ n.jsx("span", { className: p.menuButtonIcon, children: e }) : null,
        a ? null : /* @__PURE__ */ n.jsx("span", { className: p.menuButtonText, children: s }),
        !a && _ ? /* @__PURE__ */ n.jsx("span", { className: p.menuButtonChevron, children: _ }) : null
      ]
    }
  );
}
function Ba({ collapsed: e = !1, version: r, logo: s, toggle: a, className: i, ...l }) {
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: M(p.footer, !e && p.footerExpanded, e && p.footerCollapsed, i),
      ...l,
      children: [
        !e && r ? /* @__PURE__ */ n.jsxs("div", { className: p.version, children: [
          "v. ",
          r
        ] }) : null,
        /* @__PURE__ */ n.jsxs("div", { className: p.footerBottom, children: [
          /* @__PURE__ */ n.jsx("div", { className: p.footerLogo, children: s }),
          a
        ] })
      ]
    }
  );
}
function Pa(e) {
  return /* @__PURE__ */ n.jsx("div", { className: M(p.nav, e.className), ...e });
}
function La({ icon: e, label: r, className: s, ...a }) {
  return /* @__PURE__ */ n.jsx("button", { type: "button", "aria-label": r, className: M(p.iconButton, s), ...a, children: e });
}
const Bn = ln(
  ({ title: e, children: r, className: s, ...a }, i) => /* @__PURE__ */ n.jsxs("div", { ref: i, className: M(p.popover, s), ...a, children: [
    /* @__PURE__ */ n.jsx("div", { className: p.popoverTitle, children: e }),
    r
  ] })
);
Bn.displayName = "SidebarPopover";
function Ta({ content: e, children: r }) {
  return /* @__PURE__ */ n.jsx("span", { className: p.tooltipHost, title: e, children: r });
}
function Fa({
  collapsed: e,
  defaultCollapsed: r = !1,
  onCollapsedChange: s,
  account: a,
  pinnedActions: i = [],
  navItems: l,
  footer: d,
  className: f,
  style: _,
  renderTooltip: k,
  onItemClick: g,
  onChildClick: C
}) {
  const z = k ?? Ta, [W, B] = U(r), x = e ?? W, [E, j] = U(null), [w, V] = U(null), ee = q(!1), J = q(null), se = q(null), re = q({ active: !1 }), Z = q(null), ce = le(() => {
    const m = /* @__PURE__ */ new Map();
    return l.forEach((H) => {
      var ue;
      H.defaultExpanded && m.set(H.id, !0), (ue = H.children) != null && ue.some((Ce) => Ce.active) && m.set(H.id, !0);
    }), m;
  }, [l]), [S, _e] = U(() => ce), xe = ct(
    (m) => {
      s ? s(m) : B(m);
    },
    [s]
  ), $ = ct((m, H) => {
    j(m), V(H), se.current = H;
  }, []), y = ct(() => {
    ee.current || (j(null), V(null));
  }, []), O = ct(() => {
    Z.current && (window.clearTimeout(Z.current), Z.current = null);
  }, []), Q = ct(
    (m = 260) => {
      O(), Z.current = window.setTimeout(() => {
        ee.current || (re.current.active = !1, y());
      }, m);
    },
    [O, y]
  ), fe = ct((m) => {
    _e((H) => {
      const ue = new Map(H);
      return ue.set(m, !H.get(m)), ue;
    });
  }, []);
  return ye(() => {
    if (!x || !E)
      return;
    const m = (H) => {
      if (!re.current.active || ee.current || !J.current || !se.current)
        return;
      const ue = J.current.getBoundingClientRect(), Ce = { x: H.clientX, y: H.clientY };
      Na(Ce, se.current, ue, 10) ? O() : (re.current.active = !1, y());
    };
    return window.addEventListener("mousemove", m), () => {
      window.removeEventListener("mousemove", m);
    };
  }, [E, x, O, y]), ye(() => () => O(), [O]), /* @__PURE__ */ n.jsxs(
    "div",
    {
      "data-ui2-component": "Sidebar",
      "data-collapsed": x ? "true" : "false",
      className: M(p.root, x && p.collapsed, f),
      style: _,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: p.header, children: [
          a ? /* @__PURE__ */ n.jsx(
            Sa,
            {
              initials: a.initials,
              name: a.name,
              username: a.username,
              collapsed: x,
              onClick: a.onClick
            }
          ) : null,
          /* @__PURE__ */ n.jsx(Ra, { actions: i, collapsed: x, renderTooltip: z })
        ] }),
        /* @__PURE__ */ n.jsx(Pa, { onClick: () => j(null), children: l.map((m) => {
          var Xe, et, tt;
          const H = !!((Xe = m.children) != null && Xe.length), ue = S.get(m.id) ?? !1, Ce = x && E === m.id && H && !m.disabled, $e = /* @__PURE__ */ n.jsx(
            Ma,
            {
              icon: m.icon,
              showIcon: m.showIcon,
              label: m.title,
              compact: x,
              active: m.active,
              expanded: H && ue,
              disabled: m.disabled,
              pseudoHover: Ce,
              chevron: !x && H ? ue ? /* @__PURE__ */ n.jsx(jn, { size: 16 }) : /* @__PURE__ */ n.jsx(sn, { size: 16 }) : void 0,
              onClick: () => {
                var N;
                if (H && !x) {
                  fe(m.id);
                  return;
                }
                m.disabled || (g == null || g(m), (N = m.onClick) == null || N.call(m));
              }
            }
          );
          return /* @__PURE__ */ n.jsxs(
            "div",
            {
              className: p.menuItem,
              onMouseEnter: (N) => {
                !x || !H || m.disabled || (re.current.active = !1, O(), $(m.id, N.currentTarget.getBoundingClientRect()));
              },
              onMouseLeave: (N) => {
                if (x) {
                  if (!H || m.disabled) {
                    y();
                    return;
                  }
                  re.current.active = !0, Q();
                }
              },
              onFocus: () => {
                var me;
                if (!x || !H || m.disabled)
                  return;
                const N = (me = document.getElementById(`ui2-sidebar-item-${m.id}`)) == null ? void 0 : me.getBoundingClientRect();
                N && $(m.id, N);
              },
              children: [
                /* @__PURE__ */ n.jsx("div", { id: `ui2-sidebar-item-${m.id}`, children: $e }),
                H && !x && ue ? /* @__PURE__ */ n.jsx("div", { className: p.children, children: (et = m.children) == null ? void 0 : et.map((N) => /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsxs(
                  "button",
                  {
                    type: "button",
                    className: M(
                      p.child,
                      N.active && p.childActive,
                      N.disabled && p.childDisabled
                    ),
                    disabled: N.disabled,
                    onClick: N.disabled ? void 0 : () => {
                      var me;
                      C == null || C(N, m), (me = N.onClick) == null || me.call(N);
                    },
                    children: [
                      N.icon && N.showIcon !== !1 ? /* @__PURE__ */ n.jsx("span", { className: p.childIcon, children: N.icon }) : null,
                      /* @__PURE__ */ n.jsx("span", { className: p.childText, children: N.title })
                    ]
                  }
                ) }, N.id ?? N.title)) }) : null,
                H && Ce && w ? /* @__PURE__ */ n.jsx(
                  Bn,
                  {
                    ref: J,
                    title: m.title,
                    style: {
                      position: "fixed",
                      top: Math.round(w.top),
                      left: Math.round(w.right + 12)
                    },
                    onMouseEnter: () => {
                      ee.current = !0, re.current.active = !1, O();
                    },
                    onMouseLeave: () => {
                      ee.current = !1, Q(120);
                    },
                    children: (tt = m.children) == null ? void 0 : tt.map((N) => /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsxs(
                      "button",
                      {
                        type: "button",
                        className: M(
                          p.child,
                          N.active && p.childActive,
                          N.disabled && p.childDisabled
                        ),
                        disabled: N.disabled,
                        onClick: N.disabled ? void 0 : () => {
                          var me;
                          C == null || C(N, m), (me = N.onClick) == null || me.call(N);
                        },
                        children: [
                          N.icon && N.showIcon !== !1 ? /* @__PURE__ */ n.jsx("span", { className: p.childIcon, children: N.icon }) : null,
                          /* @__PURE__ */ n.jsx("span", { className: p.childText, children: N.title })
                        ]
                      }
                    ) }, N.id ?? N.title))
                  }
                ) : null
              ]
            },
            m.id
          );
        }) }),
        /* @__PURE__ */ n.jsx(
          Ba,
          {
            collapsed: x,
            version: d == null ? void 0 : d.version,
            logo: /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              d != null && d.logoCollapsedSrc && x ? /* @__PURE__ */ n.jsx("img", { src: d.logoCollapsedSrc, alt: d.logoAlt ?? "Logo", width: d.logoCollapsedWidth ?? 32 }) : null,
              d != null && d.logoExpandedSrc && !x ? /* @__PURE__ */ n.jsx("img", { src: d.logoExpandedSrc, alt: d.logoAlt ?? "Logo", width: d.logoExpandedWidth ?? 131 }) : null
            ] }),
            toggle: d != null && d.toggleButton ? d.toggleButton : /* @__PURE__ */ n.jsx(
              Mt,
              {
                "aria-label": x ? (d == null ? void 0 : d.toggleCollapsedLabel) ?? "Expand" : (d == null ? void 0 : d.toggleExpandedLabel) ?? "Collapse",
                variant: "tertiary",
                textColor: "--ui2-content-secondary",
                onClick: () => xe(!x),
                children: x ? /* @__PURE__ */ n.jsx(Rr, { size: 18 }) : /* @__PURE__ */ n.jsx(Nr, { size: 18 })
              }
            )
          }
        )
      ]
    }
  );
}
function Ka({ collapsed: e = !1, className: r, ...s }) {
  return /* @__PURE__ */ n.jsx(
    "div",
    {
      "data-ui2-component": "SidebarShell",
      "data-collapsed": e ? "true" : "false",
      className: M(p.root, e && p.collapsed, r),
      ...s
    }
  );
}
function Va(e) {
  return /* @__PURE__ */ n.jsx("div", { "data-ui2-component": "SidebarHeader", className: M(p.header, e.className), ...e });
}
function Ha({
  initials: e,
  name: r,
  username: s,
  collapsed: a = !1,
  className: i,
  ...l
}) {
  return /* @__PURE__ */ n.jsxs("button", { type: "button", className: M(p.accountButton, i), ...l, children: [
    /* @__PURE__ */ n.jsx("div", { className: p.accountAvatar, children: e }),
    a ? null : /* @__PURE__ */ n.jsxs("div", { className: p.accountInfo, children: [
      /* @__PURE__ */ n.jsx("div", { className: p.accountName, children: r }),
      /* @__PURE__ */ n.jsx("div", { className: p.accountUsername, children: s })
    ] })
  ] });
}
function Ua({ icon: e, label: r, active: s, disabled: a, className: i, ...l }) {
  return /* @__PURE__ */ n.jsx(
    "button",
    {
      type: "button",
      "aria-label": r,
      disabled: a,
      className: M(
        p.headerButton,
        s && p.headerButtonActive,
        a && p.headerButtonDisabled,
        i
      ),
      ...l,
      children: e
    }
  );
}
function Ya({
  icon: e,
  label: r,
  compact: s = !1,
  active: a,
  disabled: i,
  pseudoHover: l,
  chevron: d,
  className: f,
  ..._
}) {
  return /* @__PURE__ */ n.jsxs(
    "button",
    {
      type: "button",
      className: M(
        p.menuButton,
        s && p.menuButtonCompact,
        a && p.menuButtonActive,
        i && p.menuButtonDisabled,
        l && p.menuButtonPseudoHover,
        f
      ),
      disabled: i,
      ..._,
      children: [
        /* @__PURE__ */ n.jsx("span", { className: p.menuButtonIcon, children: e }),
        s ? null : /* @__PURE__ */ n.jsx("span", { className: p.menuButtonText, children: r }),
        !s && d ? /* @__PURE__ */ n.jsx("span", { className: p.menuButtonChevron, children: d }) : null
      ]
    }
  );
}
function Xa({ label: e, icon: r, active: s, disabled: a, className: i, ...l }) {
  return /* @__PURE__ */ n.jsxs(
    "button",
    {
      type: "button",
      className: M(p.child, s && p.childActive, a && p.childDisabled, i),
      disabled: a,
      ...l,
      children: [
        r ? /* @__PURE__ */ n.jsx("span", { className: p.childIcon, children: r }) : null,
        /* @__PURE__ */ n.jsx("span", { className: p.childText, children: e })
      ]
    }
  );
}
function Ga({ collapsed: e = !1, version: r, logo: s, toggle: a, className: i, ...l }) {
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      "data-ui2-component": "SidebarFooter",
      className: M(p.footer, !e && p.footerExpanded, e && p.footerCollapsed, i),
      ...l,
      children: [
        !e && r ? /* @__PURE__ */ n.jsxs("div", { className: p.version, children: [
          "v. ",
          r
        ] }) : null,
        /* @__PURE__ */ n.jsxs("div", { className: p.footerBottom, children: [
          /* @__PURE__ */ n.jsx("div", { className: p.footerLogo, children: s }),
          a
        ] })
      ]
    }
  );
}
export {
  Qn as Button,
  Mt as ButtonIcon,
  Da as ClusterBadge,
  Wo as DataTable,
  Do as DataTableCell,
  Oa as DataTableCompat,
  Wa as KPICard,
  $a as ProgressBar,
  Fa as Sidebar,
  Ha as SidebarAccountButton,
  Xa as SidebarChildButton,
  Ba as SidebarFooterPart,
  Ga as SidebarFooterSection,
  Va as SidebarHeader,
  Ua as SidebarHeaderButton,
  La as SidebarIconButton,
  Ma as SidebarItem,
  Pa as SidebarNav,
  Ya as SidebarNavButton,
  Ra as SidebarPinnedButtons,
  Bn as SidebarPopover,
  Sa as SidebarProfile,
  Ka as SidebarShell,
  Aa as StatusBadge
};
