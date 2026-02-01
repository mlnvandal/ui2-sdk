import * as Ee from "react";
import zn, { forwardRef as xn, createElement as cn, useContext as Jt, createContext as Zt, useState as G, useEffect as fe, useRef as Q, useMemo as he, Children as pn, isValidElement as lr, Fragment as An, useCallback as Ue } from "react";
import { createPortal as cr } from "react-dom";
var mn = { exports: {} }, zt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nn;
function ur() {
  if (Nn) return zt;
  Nn = 1;
  var e = zn, r = Symbol.for("react.element"), s = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(f, h, y) {
    var p, m = {}, b = null, M = null;
    y !== void 0 && (b = "" + y), h.key !== void 0 && (b = "" + h.key), h.ref !== void 0 && (M = h.ref);
    for (p in h) o.call(h, p) && !l.hasOwnProperty(p) && (m[p] = h[p]);
    if (f && f.defaultProps) for (p in h = f.defaultProps, h) m[p] === void 0 && (m[p] = h[p]);
    return { $$typeof: r, type: f, key: b, ref: M, props: m, _owner: i.current };
  }
  return zt.Fragment = s, zt.jsx = c, zt.jsxs = c, zt;
}
var At = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var En;
function dr() {
  return En || (En = 1, process.env.NODE_ENV !== "production" && function() {
    var e = zn, r = Symbol.for("react.element"), s = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), f = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), M = Symbol.for("react.offscreen"), E = Symbol.iterator, N = "@@iterator";
    function I(n) {
      if (n === null || typeof n != "object")
        return null;
      var u = E && n[E] || n[N];
      return typeof u == "function" ? u : null;
    }
    var w = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function P(n) {
      {
        for (var u = arguments.length, g = new Array(u > 1 ? u - 1 : 0), S = 1; S < u; S++)
          g[S - 1] = arguments[S];
        ee("error", n, g);
      }
    }
    function ee(n, u, g) {
      {
        var S = w.ReactDebugCurrentFrame, U = S.getStackAddendum();
        U !== "" && (u += "%s", g = g.concat([U]));
        var X = g.map(function(W) {
          return String(W);
        });
        X.unshift("Warning: " + u), Function.prototype.apply.call(console[n], console, X);
      }
    }
    var oe = !1, Y = !1, pe = !1, ce = !1, J = !1, je;
    je = Symbol.for("react.module.reference");
    function $(n) {
      return !!(typeof n == "string" || typeof n == "function" || n === o || n === l || J || n === i || n === y || n === p || ce || n === M || oe || Y || pe || typeof n == "object" && n !== null && (n.$$typeof === b || n.$$typeof === m || n.$$typeof === c || n.$$typeof === f || n.$$typeof === h || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      n.$$typeof === je || n.getModuleId !== void 0));
    }
    function te(n, u, g) {
      var S = n.displayName;
      if (S)
        return S;
      var U = u.displayName || u.name || "";
      return U !== "" ? g + "(" + U + ")" : g;
    }
    function ve(n) {
      return n.displayName || "Context";
    }
    function ue(n) {
      if (n == null)
        return null;
      if (typeof n.tag == "number" && P("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof n == "function")
        return n.displayName || n.name || null;
      if (typeof n == "string")
        return n;
      switch (n) {
        case o:
          return "Fragment";
        case s:
          return "Portal";
        case l:
          return "Profiler";
        case i:
          return "StrictMode";
        case y:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case f:
            var u = n;
            return ve(u) + ".Consumer";
          case c:
            var g = n;
            return ve(g._context) + ".Provider";
          case h:
            return te(n, n.render, "ForwardRef");
          case m:
            var S = n.displayName || null;
            return S !== null ? S : ue(n.type) || "Memo";
          case b: {
            var U = n, X = U._payload, W = U._init;
            try {
              return ue(W(X));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var O = Object.assign, D = 0, ne, Se, j, L, H, ae, ke;
    function Te() {
    }
    Te.__reactDisabledLog = !0;
    function B() {
      {
        if (D === 0) {
          ne = console.log, Se = console.info, j = console.warn, L = console.error, H = console.group, ae = console.groupCollapsed, ke = console.groupEnd;
          var n = {
            configurable: !0,
            enumerable: !0,
            value: Te,
            writable: !0
          };
          Object.defineProperties(console, {
            info: n,
            log: n,
            warn: n,
            error: n,
            group: n,
            groupCollapsed: n,
            groupEnd: n
          });
        }
        D++;
      }
    }
    function R() {
      {
        if (D--, D === 0) {
          var n = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: O({}, n, {
              value: ne
            }),
            info: O({}, n, {
              value: Se
            }),
            warn: O({}, n, {
              value: j
            }),
            error: O({}, n, {
              value: L
            }),
            group: O({}, n, {
              value: H
            }),
            groupCollapsed: O({}, n, {
              value: ae
            }),
            groupEnd: O({}, n, {
              value: ke
            })
          });
        }
        D < 0 && P("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var x = w.ReactCurrentDispatcher, k;
    function T(n, u, g) {
      {
        if (k === void 0)
          try {
            throw Error();
          } catch (U) {
            var S = U.stack.trim().match(/\n( *(at )?)/);
            k = S && S[1] || "";
          }
        return `
` + k + n;
      }
    }
    var de = !1, Re;
    {
      var z = typeof WeakMap == "function" ? WeakMap : Map;
      Re = new z();
    }
    function ge(n, u) {
      if (!n || de)
        return "";
      {
        var g = Re.get(n);
        if (g !== void 0)
          return g;
      }
      var S;
      de = !0;
      var U = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var X;
      X = x.current, x.current = null, B();
      try {
        if (u) {
          var W = function() {
            throw Error();
          };
          if (Object.defineProperty(W.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(W, []);
            } catch (Ce) {
              S = Ce;
            }
            Reflect.construct(n, [], W);
          } else {
            try {
              W.call();
            } catch (Ce) {
              S = Ce;
            }
            n.call(W.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ce) {
            S = Ce;
          }
          n();
        }
      } catch (Ce) {
        if (Ce && S && typeof Ce.stack == "string") {
          for (var A = Ce.stack.split(`
`), xe = S.stack.split(`
`), re = A.length - 1, se = xe.length - 1; re >= 1 && se >= 0 && A[re] !== xe[se]; )
            se--;
          for (; re >= 1 && se >= 0; re--, se--)
            if (A[re] !== xe[se]) {
              if (re !== 1 || se !== 1)
                do
                  if (re--, se--, se < 0 || A[re] !== xe[se]) {
                    var ye = `
` + A[re].replace(" at new ", " at ");
                    return n.displayName && ye.includes("<anonymous>") && (ye = ye.replace("<anonymous>", n.displayName)), typeof n == "function" && Re.set(n, ye), ye;
                  }
                while (re >= 1 && se >= 0);
              break;
            }
        }
      } finally {
        de = !1, x.current = X, R(), Error.prepareStackTrace = U;
      }
      var Ve = n ? n.displayName || n.name : "", et = Ve ? T(Ve) : "";
      return typeof n == "function" && Re.set(n, et), et;
    }
    function Z(n, u, g) {
      return ge(n, !1);
    }
    function Dt(n) {
      var u = n.prototype;
      return !!(u && u.isReactComponent);
    }
    function rt(n, u, g) {
      if (n == null)
        return "";
      if (typeof n == "function")
        return ge(n, Dt(n));
      if (typeof n == "string")
        return T(n);
      switch (n) {
        case y:
          return T("Suspense");
        case p:
          return T("SuspenseList");
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case h:
            return Z(n.render);
          case m:
            return rt(n.type, u, g);
          case b: {
            var S = n, U = S._payload, X = S._init;
            try {
              return rt(X(U), u, g);
            } catch {
            }
          }
        }
      return "";
    }
    var Be = Object.prototype.hasOwnProperty, ze = {}, _t = w.ReactDebugCurrentFrame;
    function Le(n) {
      if (n) {
        var u = n._owner, g = rt(n.type, n._source, u ? u.type : null);
        _t.setExtraStackFrame(g);
      } else
        _t.setExtraStackFrame(null);
    }
    function Qt(n, u, g, S, U) {
      {
        var X = Function.call.bind(Be);
        for (var W in n)
          if (X(n, W)) {
            var A = void 0;
            try {
              if (typeof n[W] != "function") {
                var xe = Error((S || "React class") + ": " + g + " type `" + W + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[W] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw xe.name = "Invariant Violation", xe;
              }
              A = n[W](u, W, S, g, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (re) {
              A = re;
            }
            A && !(A instanceof Error) && (Le(U), P("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", S || "React class", g, W, typeof A), Le(null)), A instanceof Error && !(A.message in ze) && (ze[A.message] = !0, Le(U), P("Failed %s type: %s", g, A.message), Le(null));
          }
      }
    }
    var en = Array.isArray;
    function Ct(n) {
      return en(n);
    }
    function tn(n) {
      {
        var u = typeof Symbol == "function" && Symbol.toStringTag, g = u && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return g;
      }
    }
    function nn(n) {
      try {
        return Lt(n), !1;
      } catch {
        return !0;
      }
    }
    function Lt(n) {
      return "" + n;
    }
    function Wt(n) {
      if (nn(n))
        return P("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", tn(n)), Lt(n);
    }
    var kt = w.ReactCurrentOwner, we = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, wt, Ae;
    function Nt(n) {
      if (Be.call(n, "ref")) {
        var u = Object.getOwnPropertyDescriptor(n, "ref").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return n.ref !== void 0;
    }
    function ct(n) {
      if (Be.call(n, "key")) {
        var u = Object.getOwnPropertyDescriptor(n, "key").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return n.key !== void 0;
    }
    function rn(n, u) {
      typeof n.ref == "string" && kt.current;
    }
    function ut(n, u) {
      {
        var g = function() {
          wt || (wt = !0, P("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        g.isReactWarning = !0, Object.defineProperty(n, "key", {
          get: g,
          configurable: !0
        });
      }
    }
    function Et(n, u) {
      {
        var g = function() {
          Ae || (Ae = !0, P("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        g.isReactWarning = !0, Object.defineProperty(n, "ref", {
          get: g,
          configurable: !0
        });
      }
    }
    var Pe = function(n, u, g, S, U, X, W) {
      var A = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: n,
        key: u,
        ref: g,
        props: W,
        // Record the component responsible for creating this element.
        _owner: X
      };
      return A._store = {}, Object.defineProperty(A._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(A, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: S
      }), Object.defineProperty(A, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: U
      }), Object.freeze && (Object.freeze(A.props), Object.freeze(A)), A;
    };
    function pt(n, u, g, S, U) {
      {
        var X, W = {}, A = null, xe = null;
        g !== void 0 && (Wt(g), A = "" + g), ct(u) && (Wt(u.key), A = "" + u.key), Nt(u) && (xe = u.ref, rn(u, U));
        for (X in u)
          Be.call(u, X) && !we.hasOwnProperty(X) && (W[X] = u[X]);
        if (n && n.defaultProps) {
          var re = n.defaultProps;
          for (X in re)
            W[X] === void 0 && (W[X] = re[X]);
        }
        if (A || xe) {
          var se = typeof n == "function" ? n.displayName || n.name || "Unknown" : n;
          A && ut(W, se), xe && Et(W, se);
        }
        return Pe(n, A, xe, U, S, kt.current, W);
      }
    }
    var dt = w.ReactCurrentOwner, _e = w.ReactDebugCurrentFrame;
    function Me(n) {
      if (n) {
        var u = n._owner, g = rt(n.type, n._source, u ? u.type : null);
        _e.setExtraStackFrame(g);
      } else
        _e.setExtraStackFrame(null);
    }
    var We;
    We = !1;
    function st(n) {
      return typeof n == "object" && n !== null && n.$$typeof === r;
    }
    function Ft() {
      {
        if (dt.current) {
          var n = ue(dt.current.type);
          if (n)
            return `

Check the render method of \`` + n + "`.";
        }
        return "";
      }
    }
    function mt(n) {
      return "";
    }
    var Vt = {};
    function gt(n) {
      {
        var u = Ft();
        if (!u) {
          var g = typeof n == "string" ? n : n.displayName || n.name;
          g && (u = `

Check the top-level render call using <` + g + ">.");
        }
        return u;
      }
    }
    function ot(n, u) {
      {
        if (!n._store || n._store.validated || n.key != null)
          return;
        n._store.validated = !0;
        var g = gt(u);
        if (Vt[g])
          return;
        Vt[g] = !0;
        var S = "";
        n && n._owner && n._owner !== dt.current && (S = " It was passed a child from " + ue(n._owner.type) + "."), Me(n), P('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', g, S), Me(null);
      }
    }
    function Qe(n, u) {
      {
        if (typeof n != "object")
          return;
        if (Ct(n))
          for (var g = 0; g < n.length; g++) {
            var S = n[g];
            st(S) && ot(S, u);
          }
        else if (st(n))
          n._store && (n._store.validated = !0);
        else if (n) {
          var U = I(n);
          if (typeof U == "function" && U !== n.entries)
            for (var X = U.call(n), W; !(W = X.next()).done; )
              st(W.value) && ot(W.value, u);
        }
      }
    }
    function Ie(n) {
      {
        var u = n.type;
        if (u == null || typeof u == "string")
          return;
        var g;
        if (typeof u == "function")
          g = u.propTypes;
        else if (typeof u == "object" && (u.$$typeof === h || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        u.$$typeof === m))
          g = u.propTypes;
        else
          return;
        if (g) {
          var S = ue(u);
          Qt(g, n.props, "prop", S, n);
        } else if (u.PropTypes !== void 0 && !We) {
          We = !0;
          var U = ue(u);
          P("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", U || "Unknown");
        }
        typeof u.getDefaultProps == "function" && !u.getDefaultProps.isReactClassApproved && P("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Fe(n) {
      {
        for (var u = Object.keys(n.props), g = 0; g < u.length; g++) {
          var S = u[g];
          if (S !== "children" && S !== "key") {
            Me(n), P("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", S), Me(null);
            break;
          }
        }
        n.ref !== null && (Me(n), P("Invalid attribute `ref` supplied to `React.Fragment`."), Me(null));
      }
    }
    var $e = {};
    function Ne(n, u, g, S, U, X) {
      {
        var W = $(n);
        if (!W) {
          var A = "";
          (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (A += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var xe = mt();
          xe ? A += xe : A += Ft();
          var re;
          n === null ? re = "null" : Ct(n) ? re = "array" : n !== void 0 && n.$$typeof === r ? (re = "<" + (ue(n.type) || "Unknown") + " />", A = " Did you accidentally export a JSX literal instead of a component?") : re = typeof n, P("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", re, A);
        }
        var se = pt(n, u, g, U, X);
        if (se == null)
          return se;
        if (W) {
          var ye = u.children;
          if (ye !== void 0)
            if (S)
              if (Ct(ye)) {
                for (var Ve = 0; Ve < ye.length; Ve++)
                  Qe(ye[Ve], n);
                Object.freeze && Object.freeze(ye);
              } else
                P("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Qe(ye, n);
        }
        if (Be.call(u, "key")) {
          var et = ue(n), Ce = Object.keys(u).filter(function(a) {
            return a !== "key";
          }), Rt = Ce.length > 0 ? "{key: someKey, " + Ce.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!$e[et + Rt]) {
            var Kt = Ce.length > 0 ? "{" + Ce.join(": ..., ") + ": ...}" : "{}";
            P(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Rt, et, Kt, et), $e[et + Rt] = !0;
          }
        }
        return n === o ? Fe(se) : Ie(se), se;
      }
    }
    function xt(n, u, g) {
      return Ne(n, u, g, !0);
    }
    function St(n, u, g) {
      return Ne(n, u, g, !1);
    }
    var sn = St, on = xt;
    At.Fragment = o, At.jsx = sn, At.jsxs = on;
  }()), At;
}
process.env.NODE_ENV === "production" ? mn.exports = ur() : mn.exports = dr();
var t = mn.exports;
function Sn(e, r) {
  if (typeof e == "function")
    return e(r);
  e != null && (e.current = r);
}
function fr(...e) {
  return (r) => {
    let s = !1;
    const o = e.map((i) => {
      const l = Sn(i, r);
      return !s && typeof l == "function" && (s = !0), l;
    });
    if (s)
      return () => {
        for (let i = 0; i < o.length; i++) {
          const l = o[i];
          typeof l == "function" ? l() : Sn(e[i], null);
        }
      };
  };
}
var vr = Symbol.for("react.lazy"), Xt = Ee[" use ".trim().toString()];
function hr(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function $n(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === vr && "_payload" in e && hr(e._payload);
}
// @__NO_SIDE_EFFECTS__
function _r(e) {
  const r = /* @__PURE__ */ mr(e), s = Ee.forwardRef((o, i) => {
    let { children: l, ...c } = o;
    $n(l) && typeof Xt == "function" && (l = Xt(l._payload));
    const f = Ee.Children.toArray(l), h = f.find(xr);
    if (h) {
      const y = h.props.children, p = f.map((m) => m === h ? Ee.Children.count(y) > 1 ? Ee.Children.only(null) : Ee.isValidElement(y) ? y.props.children : null : m);
      return /* @__PURE__ */ t.jsx(r, { ...c, ref: i, children: Ee.isValidElement(y) ? Ee.cloneElement(y, void 0, p) : null });
    }
    return /* @__PURE__ */ t.jsx(r, { ...c, ref: i, children: l });
  });
  return s.displayName = `${e}.Slot`, s;
}
var pr = /* @__PURE__ */ _r("Slot");
// @__NO_SIDE_EFFECTS__
function mr(e) {
  const r = Ee.forwardRef((s, o) => {
    let { children: i, ...l } = s;
    if ($n(i) && typeof Xt == "function" && (i = Xt(i._payload)), Ee.isValidElement(i)) {
      const c = br(i), f = yr(l, i.props);
      return i.type !== Ee.Fragment && (f.ref = o ? fr(o, c) : c), Ee.cloneElement(i, f);
    }
    return Ee.Children.count(i) > 1 ? Ee.Children.only(null) : null;
  });
  return r.displayName = `${e}.SlotClone`, r;
}
var gr = Symbol("radix.slottable");
function xr(e) {
  return Ee.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === gr;
}
function yr(e, r) {
  const s = { ...r };
  for (const o in r) {
    const i = e[o], l = r[o];
    /^on[A-Z]/.test(o) ? i && l ? s[o] = (...f) => {
      const h = l(...f);
      return i(...f), h;
    } : i && (s[o] = i) : o === "style" ? s[o] = { ...i, ...l } : o === "className" && (s[o] = [i, l].filter(Boolean).join(" "));
  }
  return { ...e, ...s };
}
function br(e) {
  var o, i;
  let r = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, s = r && "isReactWarning" in r && r.isReactWarning;
  return s ? e.ref : (r = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, s = r && "isReactWarning" in r && r.isReactWarning, s ? e.props.ref : e.props.ref || e.ref);
}
function On(e) {
  var r, s, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (r = 0; r < i; r++) e[r] && (s = On(e[r])) && (o && (o += " "), o += s);
  } else for (s in e) e[s] && (o && (o += " "), o += s);
  return o;
}
function C() {
  for (var e, r, s = 0, o = "", i = arguments.length; s < i; s++) (e = arguments[s]) && (r = On(e)) && (o && (o += " "), o += r);
  return o;
}
const jr = "_root_1j0me_1", Cr = "_disabled_1j0me_29", kr = "_active_1j0me_72", wr = "_visual_1j0me_123", Nr = "_block_1j0me_131", it = {
  root: jr,
  disabled: Cr,
  "size-m": "_size-m_1j0me_36",
  "size-l": "_size-l_1j0me_41",
  "variant-secondary": "_variant-secondary_1j0me_46",
  "variant-tertiary": "_variant-tertiary_1j0me_47",
  "variant-destructive": "_variant-destructive_1j0me_52",
  "variant-link": "_variant-link_1j0me_58",
  "variant-primary": "_variant-primary_1j0me_66",
  active: kr,
  visual: wr,
  block: Nr
}, Dn = xn(function({
  as: r,
  asChild: s = !1,
  active: o = !1,
  block: i = !1,
  disabled: l = !1,
  size: c = "m",
  variant: f = "primary",
  icon: h,
  textColor: y,
  leadingVisual: p,
  trailingVisual: m,
  className: b,
  children: M,
  ...E
}, N) {
  const I = f === "default" ? "primary" : f === "outline" ? "secondary" : f === "ghost" ? "tertiary" : f, w = c === "default" || c === "sm" || c === "icon" ? "m" : c === "lg" ? "l" : c, P = s ? pr : r ?? "button", ee = p ?? h;
  return /* @__PURE__ */ t.jsxs(
    P,
    {
      ref: N,
      className: C(
        it.root,
        it[`size-${w}`],
        it[`variant-${I}`],
        o && it.active,
        i && it.block,
        l && it.disabled,
        b
      ),
      style: y ? { "--ui2-button-text-color": `var(${y})` } : void 0,
      "data-ui2-component": "Button",
      disabled: !s && P === "button" ? l : void 0,
      "aria-disabled": s && l ? !0 : void 0,
      ...E,
      children: [
        ee ? /* @__PURE__ */ t.jsx("span", { className: it.visual, children: ee }) : null,
        M,
        m ? /* @__PURE__ */ t.jsx("span", { className: it.visual, children: m }) : null
      ]
    }
  );
}), Er = "_root_1xe83_1", Sr = "_disabled_1xe83_24", Rr = "_active_1xe83_31", Br = "_icon_1xe83_146", $t = {
  root: Er,
  disabled: Sr,
  active: Rr,
  "variant-secondary": "_variant-secondary_1xe83_43",
  "variant-tertiary": "_variant-tertiary_1xe83_44",
  "variant-inverted": "_variant-inverted_1xe83_45",
  "variant-destructive": "_variant-destructive_1xe83_49",
  "size-xs": "_size-xs_1xe83_120",
  "size-s": "_size-s_1xe83_127",
  "size-m": "_size-m_1xe83_134",
  "size-l": "_size-l_1xe83_140",
  icon: Br
};
function nt({
  children: e,
  size: r = "m",
  variant: s = "primary",
  active: o = !1,
  disabled: i = !1,
  textColor: l,
  className: c,
  ...f
}) {
  const h = s === "default" ? "primary" : s === "outline" ? "secondary" : s === "ghost" || s === "link" ? "tertiary" : s;
  return /* @__PURE__ */ t.jsx(
    "button",
    {
      type: "button",
      disabled: i,
      className: C(
        $t.root,
        $t[`size-${r}`],
        h !== "primary" && $t[`variant-${h}`],
        i && $t.disabled,
        c
      ),
      "data-active": o ? "true" : "false",
      style: l ? { "--ui2-button-icon-text-color": `var(${l})` } : void 0,
      ...f,
      children: /* @__PURE__ */ t.jsx("span", { className: $t.icon, children: e })
    }
  );
}
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Pr = {
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
const q = (e, r, s, o) => {
  const i = xn(
    ({ color: l = "currentColor", size: c = 24, stroke: f = 2, title: h, className: y, children: p, ...m }, b) => cn(
      "svg",
      {
        ref: b,
        ...Pr[e],
        width: c,
        height: c,
        className: ["tabler-icon", `tabler-icon-${r}`, y].join(" "),
        ...e === "filled" ? {
          fill: l
        } : {
          strokeWidth: f,
          stroke: l
        },
        ...m
      },
      [
        h && cn("title", { key: "svg-title" }, h),
        ...o.map(([M, E]) => cn(M, E)),
        ...Array.isArray(p) ? p : [p]
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
const Mr = [["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0", key: "svg-0" }], ["path", { d: "M12 8v4", key: "svg-1" }], ["path", { d: "M12 16h.01", key: "svg-2" }]], Ir = q("outline", "alert-circle", "AlertCircle", Mr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tr = [["path", { d: "M12 9v4", key: "svg-0" }], ["path", { d: "M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0", key: "svg-1" }], ["path", { d: "M12 16h.01", key: "svg-2" }]], zr = q("outline", "alert-triangle", "AlertTriangle", Tr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ar = [["path", { d: "M7 7l10 10", key: "svg-0" }], ["path", { d: "M17 8l0 9l-9 0", key: "svg-1" }]], $r = q("outline", "arrow-down-right", "ArrowDownRight", Ar);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Or = [["path", { d: "M7 5a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2l0 -10", key: "svg-0" }], ["path", { d: "M17 17v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2", key: "svg-1" }]], Dr = q("outline", "box-multiple", "BoxMultiple", Or);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lr = [["path", { d: "M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5", key: "svg-0" }], ["path", { d: "M12 12l8 -4.5", key: "svg-1" }], ["path", { d: "M12 12l0 9", key: "svg-2" }], ["path", { d: "M12 12l-8 -4.5", key: "svg-3" }]], Wr = q("outline", "box", "Box", Lr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fr = [["path", { d: "M3 21l18 0", key: "svg-0" }], ["path", { d: "M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4", key: "svg-1" }], ["path", { d: "M5 21l0 -10.15", key: "svg-2" }], ["path", { d: "M19 21l0 -10.15", key: "svg-3" }], ["path", { d: "M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4", key: "svg-4" }]], Ln = q("outline", "building-store", "BuildingStore", Fr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vr = [["path", { d: "M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12", key: "svg-0" }], ["path", { d: "M16 3l0 4", key: "svg-1" }], ["path", { d: "M8 3l0 4", key: "svg-2" }], ["path", { d: "M4 11l16 0", key: "svg-3" }], ["path", { d: "M8 15h2v2h-2l0 -2", key: "svg-4" }]], Kr = q("outline", "calendar-event", "CalendarEvent", Vr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hr = [["path", { d: "M3 13a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -6", key: "svg-0" }], ["path", { d: "M15 9a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -10", key: "svg-1" }], ["path", { d: "M9 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -14", key: "svg-2" }], ["path", { d: "M4 20h14", key: "svg-3" }]], Ur = q("outline", "chart-bar", "ChartBar", Hr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gr = [["path", { d: "M5 12l5 5l10 -10", key: "svg-0" }]], Yr = q("outline", "check", "Check", Gr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xr = [["path", { d: "M6 9l6 6l6 -6", key: "svg-0" }]], qt = q("outline", "chevron-down", "ChevronDown", Xr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qr = [["path", { d: "M15 6l-6 6l6 6", key: "svg-0" }]], Wn = q("outline", "chevron-left", "ChevronLeft", qr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jr = [["path", { d: "M9 6l6 6l-6 6", key: "svg-0" }]], Fn = q("outline", "chevron-right", "ChevronRight", Jr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zr = [["path", { d: "M6 15l6 -6l6 6", key: "svg-0" }]], yn = q("outline", "chevron-up", "ChevronUp", Zr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qr = [["path", { d: "M11 7l-5 5l5 5", key: "svg-0" }], ["path", { d: "M17 7l-5 5l5 5", key: "svg-1" }]], Vn = q("outline", "chevrons-left", "ChevronsLeft", Qr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const es = [["path", { d: "M7 7l5 5l-5 5", key: "svg-0" }], ["path", { d: "M13 7l5 5l-5 5", key: "svg-1" }]], Kn = q("outline", "chevrons-right", "ChevronsRight", es);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ts = [["path", { d: "M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666", key: "svg-0" }], ["path", { d: "M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1", key: "svg-1" }]], ns = q("outline", "copy", "Copy", ts);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rs = [["path", { d: "M12 6l4 6l5 -4l-2 10h-14l-2 -10l5 4l4 -6", key: "svg-0" }]], ss = q("outline", "crown", "Crown", rs);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const os = [["path", { d: "M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2", key: "svg-0" }], ["path", { d: "M12 3v3m0 12v3", key: "svg-1" }]], as = q("outline", "currency-dollar", "CurrencyDollar", os);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const is = [["path", { d: "M10.585 10.587a2 2 0 0 0 2.829 2.828", key: "svg-0" }], ["path", { d: "M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87", key: "svg-1" }], ["path", { d: "M3 3l18 18", key: "svg-2" }]], Hn = q("outline", "eye-off", "EyeOff", is);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ls = [["path", { d: "M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-0" }], ["path", { d: "M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6", key: "svg-1" }]], cs = q("outline", "eye", "Eye", ls);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const us = [["path", { d: "M12 20l-3 1v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v3", key: "svg-0" }], ["path", { d: "M16 19h6", key: "svg-1" }], ["path", { d: "M19 16v6", key: "svg-2" }]], Un = q("outline", "filter-plus", "FilterPlus", us);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ds = [["path", { d: "M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5", key: "svg-0" }], ["path", { d: "M12 12l8 -4.5", key: "svg-1" }], ["path", { d: "M12 12l0 9", key: "svg-2" }], ["path", { d: "M12 12l-8 -4.5", key: "svg-3" }], ["path", { d: "M16 5.25l-8 4.5", key: "svg-4" }]], fs = q("outline", "package", "Package", ds);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vs = [["path", { d: "M3 3l18 18", key: "svg-0" }], ["path", { d: "M15 4.5l-3.249 3.249m-2.57 1.433l-2.181 .818l-1.5 1.5l7 7l1.5 -1.5l.82 -2.186m1.43 -2.563l3.25 -3.251", key: "svg-1" }], ["path", { d: "M9 15l-4.5 4.5", key: "svg-2" }], ["path", { d: "M14.5 4l5.5 5.5", key: "svg-3" }]], hs = q("outline", "pinned-off", "PinnedOff", vs);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _s = [["path", { d: "M9 4v6l-2 4v2h10v-2l-2 -4v-6", key: "svg-0" }], ["path", { d: "M12 16l0 5", key: "svg-1" }], ["path", { d: "M8 4l8 0", key: "svg-2" }]], ps = q("outline", "pinned", "Pinned", _s);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ms = [["path", { d: "M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2m0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2m-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6", key: "svg-0" }]], Gn = q("outline", "sparkles", "Sparkles", ms);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gs = [["path", { d: "M12 4l-8 4l8 4l8 -4l-8 -4", key: "svg-0" }], ["path", { d: "M4 12l8 4l8 -4", key: "svg-1" }], ["path", { d: "M4 16l8 4l8 -4", key: "svg-2" }]], xs = q("outline", "stack-2", "Stack2", gs);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ys = [["path", { d: "M3 17l6 -6l4 4l8 -8", key: "svg-0" }], ["path", { d: "M14 7l7 0l0 7", key: "svg-1" }]], bs = q("outline", "trending-up", "TrendingUp", ys);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const js = [["path", { d: "M5 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-0" }], ["path", { d: "M15 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-1" }], ["path", { d: "M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5", key: "svg-2" }]], Cs = q("outline", "truck", "Truck", js);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ks = [["path", { d: "M18 6l-12 12", key: "svg-0" }], ["path", { d: "M6 6l12 12", key: "svg-1" }]], ws = q("outline", "x", "X", ks);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ns = [["path", { d: "M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-5 3.66a1 1 0 0 0 -1 1v5.585l-2.293 -2.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l4 4c.028 .028 .057 .054 .094 .083l.092 .064l.098 .052l.081 .034l.113 .034l.112 .02l.117 .006l.115 -.007l.114 -.02l.142 -.044l.113 -.054l.111 -.071a.939 .939 0 0 0 .112 -.097l4 -4l.083 -.094a1 1 0 0 0 -1.497 -1.32l-2.293 2.291v-5.584l-.007 -.117a1 1 0 0 0 -.993 -.883z", key: "svg-0" }]], Es = q("filled", "circle-arrow-down-filled", "CircleArrowDownFilled", Ns);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ss = [["path", { d: "M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-4.98 3.66l-.163 .01l-.086 .016l-.142 .045l-.113 .054l-.07 .043l-.095 .071l-.058 .054l-4 4l-.083 .094a1 1 0 0 0 1.497 1.32l2.293 -2.293v5.586l.007 .117a1 1 0 0 0 1.993 -.117v-5.585l2.293 2.292l.094 .083a1 1 0 0 0 1.32 -1.497l-4 -4l-.082 -.073l-.089 -.064l-.113 -.062l-.081 -.034l-.113 -.034l-.112 -.02l-.098 -.006z", key: "svg-0" }]], Rs = q("filled", "circle-arrow-up-filled", "CircleArrowUpFilled", Ss), Bs = "_frame_1bemm_1", Ps = "_table_1bemm_9", Ms = "_scroll_1bemm_30", Is = "_tableInner_1bemm_50", Ts = "_tableHead_1bemm_57", zs = "_tableBody_1bemm_65", As = "_headRow_1bemm_70", $s = "_row_1bemm_77", Os = "_columnGroup_1bemm_109", Ds = "_columnsPinnedStart_1bemm_115", Ls = "_columnsPinnedEnd_1bemm_126", Ws = "_columnsRegular_1bemm_137", Fs = "_headCell_1bemm_187", Vs = "_headContent_1bemm_224", Ks = "_headLabel_1bemm_236", Hs = "_headButton_1bemm_246", Us = "_sortButton_1bemm_266", Gs = "_resizeHotspot_1bemm_275", Ys = "_dropIndicator_1bemm_302", Xs = "_dropIndicatorStart_1bemm_312", qs = "_cell_1bemm_317", Js = "_cellContent_1bemm_327", Zs = "_ghost_1bemm_383", Qs = "_ghostInner_1bemm_392", eo = "_actionMenu_1bemm_406", to = "_actionList_1bemm_414", no = "_actionItem_1bemm_419", ro = "_tooltip_1bemm_441", so = "_cellOutline_1bemm_465", F = {
  frame: Bs,
  table: Ps,
  scroll: Ms,
  tableInner: Is,
  tableHead: Ts,
  tableBody: zs,
  headRow: As,
  row: $s,
  columnGroup: Os,
  columnsPinnedStart: Ds,
  columnsPinnedEnd: Ls,
  columnsRegular: Ws,
  headCell: Fs,
  headContent: Vs,
  headLabel: Ks,
  headButton: Hs,
  sortButton: Us,
  resizeHotspot: Gs,
  dropIndicator: Ys,
  dropIndicatorStart: Xs,
  cell: qs,
  cellContent: Js,
  ghost: Zs,
  ghostInner: Qs,
  actionMenu: eo,
  actionList: to,
  actionItem: no,
  tooltip: ro,
  cellOutline: so
}, Yn = Zt({});
function bn({
  onAfterSelect: e,
  children: r
}) {
  return /* @__PURE__ */ t.jsx(Yn.Provider, { value: { onAfterSelect: e }, children: r });
}
function jn({ children: e }) {
  return /* @__PURE__ */ t.jsx("div", { className: F.actionList, children: e });
}
function vt({
  onSelect: e,
  children: r,
  className: s
}) {
  const { onAfterSelect: o } = Jt(Yn);
  return /* @__PURE__ */ t.jsx(
    "button",
    {
      type: "button",
      className: C(F.actionItem, s),
      onClick: () => {
        e == null || e(), o == null || o();
      },
      children: r
    }
  );
}
function Cn({
  open: e,
  anchorRect: r,
  placement: s = "bottom-start",
  offset: o = 6,
  zIndex: i = 1e3,
  children: l
}) {
  const [c, f] = G(!1);
  if (fe(() => {
    f(!0);
  }, []), !e || !r || !c)
    return null;
  const h = {
    position: "fixed",
    zIndex: i
  }, y = s.endsWith("end") ? r.right : r.left, p = s.startsWith("top") ? r.top : r.bottom;
  return h.left = Math.round(y), h.top = Math.round(p + o), s.endsWith("end") && (h.transform = "translateX(-100%)"), s.startsWith("top") && (h.transform = `${h.transform ?? ""} translateY(-100%)`), cr(/* @__PURE__ */ t.jsx("div", { style: h, children: l }), document.body);
}
function Xn({
  open: e,
  onOpenChange: r,
  host: s,
  children: o,
  className: i,
  zIndex: l
}) {
  const [c, f] = G(!1), h = Q(null), y = Q(null), p = e ?? c, [m, b] = G(null), M = (E) => {
    r ? r(E) : f(E);
  };
  return fe(() => {
    var E;
    p && b(((E = h.current) == null ? void 0 : E.getBoundingClientRect()) ?? null);
  }, [p]), fe(() => {
    if (!p) return;
    const E = (I) => {
      var w;
      I.key === "Escape" && (I.preventDefault(), M(!1), (w = h.current) == null || w.focus());
    }, N = (I) => {
      var P, ee;
      const w = I.target;
      (P = y.current) != null && P.contains(w) || (ee = h.current) != null && ee.contains(w) || M(!1);
    };
    return window.addEventListener("keydown", E), window.addEventListener("mousedown", N), () => {
      window.removeEventListener("keydown", E), window.removeEventListener("mousedown", N);
    };
  }, [p]), /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    s({
      open: p,
      hostProps: {
        onClick: (E) => {
          E.preventDefault(), M(!p);
        },
        onKeyDown: (E) => {
          (E.key === "ArrowDown" || E.key === "ArrowUp") && (E.preventDefault(), M(!0));
        },
        "aria-haspopup": !0,
        "aria-expanded": p,
        ref: (E) => {
          h.current = E;
        }
      }
    }),
    /* @__PURE__ */ t.jsx(Cn, { open: p, anchorRect: m, placement: "bottom-start", offset: 6, zIndex: l, children: /* @__PURE__ */ t.jsx("div", { ref: y, className: C(F.actionMenu, i), children: o }) })
  ] });
}
function oo({
  content: e,
  children: r,
  delay: s = 200
}) {
  const [o, i] = G(!1), [l, c] = G(null), f = Q(null), h = Q(null);
  fe(() => () => {
    f.current && window.clearTimeout(f.current);
  }, []);
  const y = () => {
    e && (f.current && window.clearTimeout(f.current), f.current = window.setTimeout(() => {
      var m;
      c(((m = h.current) == null ? void 0 : m.getBoundingClientRect()) ?? null), i(!0);
    }, s));
  }, p = () => {
    f.current && window.clearTimeout(f.current), i(!1);
  };
  return /* @__PURE__ */ t.jsxs("div", { ref: h, onMouseEnter: y, onMouseLeave: p, children: [
    r,
    /* @__PURE__ */ t.jsx(Cn, { open: o, anchorRect: l, placement: "top-start", offset: 6, children: /* @__PURE__ */ t.jsx("div", { className: F.tooltip, children: e }) })
  ] });
}
const qn = Zt(null);
function ao() {
  const e = Jt(qn);
  if (!e)
    throw new Error("DataTableContext is missing");
  return e;
}
const Jn = Zt(null);
function io() {
  const e = Jt(Jn);
  if (!e)
    throw new Error("DataTableCellContext is missing");
  return e;
}
function lo({
  align: e,
  monospace: r,
  clickable: s = !1,
  active: o = !1,
  children: i,
  ...l
}) {
  const c = io(), f = ao(), h = Q(null), [y, p] = G(!1), [m, b] = G(null), M = e ?? c.align, E = r ?? c.monospace, { value: N, rawValue: I, columnKey: w, filterKey: P, row: ee, rowKey: oe } = c, Y = he(() => {
    if (!w) return null;
    const O = oe ?? (ee ? f.getRowKey(ee) : null);
    return O == null ? null : `${O}:${w}`;
  }, [ee, oe, w, f]), pe = he(() => P || (w && f.filterableColumnKeys.has(w) ? w : null), [P, w, f.filterableColumnKeys]), ce = he(() => {
    if (I == null)
      return !!(N && N.trim() && !["-", "—", "–"].includes(N.trim()));
    if (typeof I == "string") {
      const O = I.trim();
      return !!(O && !["-", "—", "–"].includes(O));
    }
    return typeof I == "number" || typeof I == "boolean" ? !0 : Array.isArray(I) ? I.length > 0 : typeof I == "object" ? Object.keys(I).length > 0 : !1;
  }, [I, N]);
  fe(() => {
    Y && p(f.activeContextMenuKey === Y);
  }, [Y, f.activeContextMenuKey]), fe(() => {
    if (!y) return;
    const O = (ne) => {
      var j;
      const Se = ne.target;
      (j = h.current) != null && j.contains(Se) || J();
    }, D = () => J();
    return window.addEventListener("mousedown", O, !0), window.addEventListener("contextmenu", O, !0), window.addEventListener("scroll", D, !0), () => {
      window.removeEventListener("mousedown", O, !0), window.removeEventListener("contextmenu", O, !0), window.removeEventListener("scroll", D, !0);
    };
  }, [y]);
  const J = () => {
    Y && f.activeContextMenuKey === Y && f.setActiveContextMenuKey(null);
  }, je = (O) => {
    if (O.preventDefault(), !Y || !ce) return;
    if (f.activeContextMenuKey === Y) {
      J();
      return;
    }
    const D = (h.current ?? O.currentTarget).getBoundingClientRect();
    b(D), f.setActiveContextMenuKey(Y);
  }, $ = async () => {
    var D;
    const O = I == null ? N : String(I);
    if ((D = navigator.clipboard) != null && D.writeText)
      await navigator.clipboard.writeText(O);
    else {
      const ne = document.createElement("textarea");
      ne.value = O, ne.style.position = "fixed", ne.style.left = "-9999px", document.body.appendChild(ne), ne.focus(), ne.select(), document.execCommand("copy"), ne.remove();
    }
    J();
  }, te = () => {
    !w || !pe || (f.filterByValue(w, pe, I ?? N), J());
  }, ve = o || y, ue = he(() => w ? f.pinnedColumnsStartKeys.includes(w) || f.pinnedColumnsEndKeys.includes(w) : !1, [w, f.pinnedColumnsStartKeys, f.pinnedColumnsEndKeys]);
  return /* @__PURE__ */ t.jsxs(
    "div",
    {
      ref: h,
      role: s ? "button" : void 0,
      tabIndex: s ? 0 : void 0,
      "data-align": M,
      "data-monospace": E ? "true" : "false",
      "data-clickable": s ? "true" : "false",
      className: F.cell,
      onContextMenu: je,
      ...l,
      children: [
        /* @__PURE__ */ t.jsx("span", { className: F.cellContent, "data-cell-content": "true", children: i }),
        /* @__PURE__ */ t.jsx("span", { className: F.cellOutline, "data-active": ve ? "true" : "false" }),
        /* @__PURE__ */ t.jsx(
          Cn,
          {
            open: y && ce,
            anchorRect: m,
            placement: "bottom-start",
            zIndex: ue ? 220 : 140,
            children: /* @__PURE__ */ t.jsx("div", { className: F.actionMenu, children: /* @__PURE__ */ t.jsx(bn, { onAfterSelect: J, children: /* @__PURE__ */ t.jsxs(jn, { children: [
              pe ? /* @__PURE__ */ t.jsxs(vt, { onSelect: te, children: [
                /* @__PURE__ */ t.jsx(Un, { size: 16 }),
                "Filter by value"
              ] }) : null,
              /* @__PURE__ */ t.jsxs(vt, { onSelect: $, children: [
                /* @__PURE__ */ t.jsx(ns, { size: 16 }),
                "Copy value"
              ] })
            ] }) }) })
          }
        )
      ]
    }
  );
}
const Rn = 160, Ot = 40, Yt = 9999;
function un(e, r = Ot, s = Yt) {
  return Math.min(Math.max(e, r), s);
}
function co(e, r) {
  if (!r.length) return e;
  const s = new Map(r.map((o, i) => [o, i]));
  return [...e].sort((o, i) => {
    const l = s.get(o.key), c = s.get(i.key);
    return l === void 0 && c === void 0 ? 0 : l === void 0 ? 1 : c === void 0 ? -1 : l - c;
  });
}
function bt(e, r) {
  if (!r) {
    const s = e.id;
    return s == null || s === "" ? void 0 : s;
  }
  return typeof r == "function" ? r(e) : e[r];
}
function gn(e, r) {
  return typeof r.value == "function" ? r.value(e) : typeof r.value == "string" ? e[r.value] : e[r.key];
}
function uo({
  columns: e,
  rows: r,
  rowKey: s,
  size: o = "l",
  rowHover: i = !0,
  rowClickable: l = !1,
  rowActiveKey: c = null,
  onRowClick: f,
  rowDividers: h = !0,
  sorting: y,
  defaultSorting: p = { sortBy: null, sortOrder: "asc" },
  onSortingChange: m,
  columnWidths: b,
  onColumnResize: M,
  columnsResizing: E = !0,
  columnsReordering: N = !0,
  columnsPinControl: I = !0,
  columnsVisibilityControl: w = !0,
  filterKeys: P,
  onFilterByColumn: ee,
  onFilterByValue: oe,
  visibleColumns: Y,
  defaultVisibleColumns: pe,
  onVisibleColumnsChange: ce,
  columnsOrder: J,
  defaultColumnsOrder: je,
  onColumnsOrderChange: $,
  pinnedColumnsStart: te,
  defaultPinnedColumnsStart: ve,
  onPinnedColumnsStartChange: ue,
  pinnedColumnsEnd: O,
  defaultPinnedColumnsEnd: D,
  onPinnedColumnsEndChange: ne,
  className: Se,
  style: j
}) {
  var Kt;
  const [L, H] = G(p), [ae, ke] = G({}), [Te, B] = G(je ?? []), [R, x] = G(
    pe
  ), [k, T] = G(ve ?? []), [de, Re] = G(D ?? []), [z, ge] = G(null), Z = Q(null), Dt = Q(null), rt = Q(null), Be = Q(null), ze = Q({}), _t = Q(null), Le = Q(null), Qt = Q([]), en = Q([]), Ct = Q([]), tn = Q(0), nn = Q(0), Lt = Q(0), [Wt, kt] = G(!1), [we, wt] = G(null), [Ae, Nt] = G(null), [ct, rn] = G(-1), [ut, Et] = G(-1), Pe = y ?? L, pt = Y ?? R, dt = J ?? Te, _e = te ?? k, Me = O ?? de, We = he(() => new Set(P ?? []), [P]), st = (a) => {
    m ? m(a) : H(a);
  }, Ft = (a) => {
    ce ? ce(a) : x(a);
  }, mt = (a) => {
    ue ? ue(a) : T(a);
  }, Vt = (a) => {
    $ ? $(a) : B(a);
  }, gt = (a) => {
    const d = pt ?? e.map((_) => _.key);
    Ft(d.filter((_) => _ !== a));
  }, ot = he(() => dt.length ? co(e, dt) : [...e], [e, dt]), Qe = he(() => Array.isArray(pt) ? ot.filter(
    ({ key: a, frozenStart: d, frozenEnd: _ }) => d || _ || pt.includes(a)
  ) : ot, [ot, pt]), Ie = he(
    () => Qe.filter(
      ({ key: a, frozenStart: d }) => d || _e.includes(a)
    ),
    [Qe, _e]
  ), Fe = he(
    () => Qe.filter(
      ({ key: a, frozenStart: d, frozenEnd: _ }) => !d && !_e.includes(a) && (_ || Me.includes(a))
    ),
    [Qe, _e, Me]
  ), $e = he(
    () => Qe.filter(
      ({ key: a, frozenStart: d, frozenEnd: _ }) => !d && !_ && !_e.includes(a) && !Me.includes(a)
    ),
    [Qe, _e, Me]
  );
  fe(() => {
    ke((a) => {
      const d = { ...a };
      return e.forEach((_) => {
        const K = (b == null ? void 0 : b[_.key]) ?? a[_.key] ?? Rn;
        d[_.key] = un(
          K,
          _.minWidth ?? Ot,
          _.maxWidth ?? Yt
        );
      }), d;
    });
  }, [e, b]);
  const Ne = he(() => e.reduce((a, d) => (a[d.key] = un(
    (b == null ? void 0 : b[d.key]) ?? ae[d.key] ?? Rn,
    d.minWidth ?? Ot,
    d.maxWidth ?? Yt
  ), a), {}), [e, b, ae]), xt = () => {
    var Bt, Pt, Mt;
    if (!Z.current) return;
    const a = [...Ie, ...$e, ...Fe];
    let _ = a.length > 1 && _t.current === ((Bt = a[0]) == null ? void 0 : Bt.key) ? 1 : 0;
    a.length > 1 && Le.current && ((Pt = a[_]) == null ? void 0 : Pt.key) === Le.current && (_ = _ === 0 ? 1 : 0), (Mt = a[_]) == null || Mt.key;
    const K = Ie.map(
      (V) => ze.current[V.key] ?? Ne[V.key]
    ), ie = Fe.map(
      (V) => ze.current[V.key] ?? Ne[V.key]
    ), me = $e.map(
      (V) => ze.current[V.key] ?? Ne[V.key]
    );
    let at = K.reduce((V, Ke) => V + Ke, 0), Oe = ie.reduce((V, Ke) => V + Ke, 0), Ge = me.reduce((V, Ke) => V + Ke, 0), ft = at + Ge + Oe;
    const Ye = Z.current.clientWidth;
    Ye > ft && (ft = Ye);
    const Ht = K.map((V) => `${V}px`).join(" "), Ut = ie.map((V) => `${V}px`).join(" "), an = me.map((V) => `${V}px`).join(" ");
    Qt.current = K, en.current = me, Ct.current = ie, tn.current = at, nn.current = Ge, Lt.current = Oe, Z.current.style.setProperty(
      "--ui2-table-row-template",
      `${at}px ${Ge}px ${Oe}px`
    ), Z.current.style.setProperty("--ui2-table-grid-pinned-start", Ht), Z.current.style.setProperty("--ui2-table-grid-regular", an), Z.current.style.setProperty("--ui2-table-grid-pinned-end", Ut), Z.current.style.setProperty("--ui2-table-width-pinned-start", `${at}px`), Z.current.style.setProperty("--ui2-table-width-regular", `${Ge}px`), Z.current.style.setProperty("--ui2-table-width-pinned-end", `${Oe}px`), Z.current.style.setProperty("--ui2-table-total-width", `${ft}px`);
  };
  fe(() => {
    xt();
  }, [Ne, Ie, Fe, $e]), fe(() => {
    if (!Z.current) return;
    const a = Z.current, d = () => xt();
    if (typeof ResizeObserver < "u") {
      const _ = new ResizeObserver(d);
      return _.observe(a), () => _.disconnect();
    }
    return window.addEventListener("resize", d), () => window.removeEventListener("resize", d);
  }, [Z, Ne, Ie, Fe, $e]);
  const St = (a, d) => {
    const _ = e.find((K) => K.key === a);
    return un(
      d,
      (_ == null ? void 0 : _.minWidth) ?? Ot,
      (_ == null ? void 0 : _.maxWidth) ?? Yt
    );
  }, sn = (a) => {
    const d = a.cloneNode(!0);
    d.style.width = "max-content", d.style.maxWidth = "none", d.style.display = "inline-flex", d.style.whiteSpace = "nowrap", d.style.visibility = "hidden", d.style.position = "absolute", d.style.left = "-9999px", document.body.appendChild(d);
    const { width: _ } = d.getBoundingClientRect();
    document.body.removeChild(d);
    const K = _ > 0 ? _ : a.scrollWidth;
    return Math.ceil(K);
  }, on = (a) => {
    const d = window.getComputedStyle(a), _ = Number.parseFloat(d.paddingLeft || "0"), K = Number.parseFloat(d.paddingRight || "0");
    return _ + K;
  }, n = (a) => {
    if (!Z.current) return;
    let d = 0;
    if (Array.from(Z.current.querySelectorAll(`[data-column="${a}"]`)).forEach((K) => {
      const ie = K.querySelector("[data-cell-content]") ?? K, me = sn(ie) + on(K);
      me > d && (d = me);
    }), !(d <= 0))
      return St(a, d);
  }, u = (a, d) => {
    ze.current[a] = d, Le.current = a, xt(), ke((_) => ({ ..._, [a]: d })), M == null || M({ key: a, width: d }), window.setTimeout(() => {
      ze.current[a] === d && delete ze.current[a], Le.current === a && (Le.current = null);
    }, 0);
  }, g = () => Ie.reduce((a, d) => a + Ne[d.key], 0) + $e.reduce((a, d) => a + Ne[d.key], 0) + Fe.reduce((a, d) => a + Ne[d.key], 0), S = (a) => {
    if (!Z.current) return;
    const d = n(a);
    if (!d) return;
    const _ = e.find((Ye) => Ye.key === a), K = Ne[a], ie = (_ == null ? void 0 : _.minWidth) ?? Ot, me = g(), at = Z.current.clientWidth, Oe = Math.max(0, at - me), Ge = 4, ft = 12;
    if (K > d + Ge) {
      u(a, Math.max(d, ie));
      return;
    }
    if (Oe >= ft && Math.abs(K - d) <= Ge) {
      const Ye = St(a, K + Oe);
      if (Ye <= K + 1) {
        u(a, Math.max(d, ie));
        return;
      }
      u(a, Ye);
      return;
    }
    u(a, Math.max(d, ie));
  }, U = (a, d) => {
    if (!E || a.button !== 0 && a.pointerType !== "touch") return;
    a.preventDefault(), a.stopPropagation();
    const _ = a.currentTarget;
    _.setPointerCapture && _.setPointerCapture(a.pointerId), _t.current = d;
    const K = a.clientX, ie = Ne[d];
    Be.current = { key: d, startX: K, startWidth: ie };
  }, X = (a, d) => {
    if (!Be.current || Be.current.key !== d) return;
    a.preventDefault(), a.stopPropagation();
    const _ = St(d, Be.current.startWidth + (a.clientX - Be.current.startX));
    ze.current[d] = _, xt();
  }, W = (a, d) => {
    if (!Be.current || Be.current.key !== d) return;
    a.preventDefault(), a.stopPropagation();
    const _ = ze.current[d];
    _ && (ke((ie) => ({ ...ie, [d]: _ })), M == null || M({ key: d, width: _ })), ze.current = {}, Be.current = null;
    const K = a.currentTarget;
    K.releasePointerCapture && K.releasePointerCapture(a.pointerId);
  }, A = (a, d) => {
    a.preventDefault(), a.stopPropagation(), _t.current = d, Le.current = d, S(d);
  }, xe = (a) => {
    let d = 0;
    return a.map((_) => {
      const K = d;
      return d += _, K;
    });
  }, re = (a, d) => {
    if (!N) return;
    const _ = a.clientX, K = 5, ie = (at) => {
      var Mt;
      if (Math.abs(_ - at.clientX) < K) return;
      window.removeEventListener("mousemove", ie), window.removeEventListener("mouseup", me), kt(!0), wt(d);
      const Oe = ot.map((V) => V.key);
      rn(Oe.indexOf(d));
      const Ge = Ie.map((V) => Ne[V.key]), ft = $e.map((V) => Ne[V.key]), Ye = xe(Ge), Ht = xe(ft), Ut = (Mt = Dt.current) == null ? void 0 : Mt.querySelector("[data-column]"), an = Ut ? Ut.offsetLeft : 0, Bt = (V) => {
        if (!Z.current) return;
        const { left: Ke, right: ln } = Z.current.getBoundingClientRect(), { scrollLeft: It } = Z.current, Gt = V.clientX - Ke + It;
        rt.current && (rt.current.style.transform = `translateX(${Gt}px)`);
        let Xe = V.clientX - Ke - an;
        if (Xe < 0) return;
        if (Xe <= Ge.reduce((Tt, qe) => Tt + qe, 0)) {
          const Tt = Ye.findIndex(
            (ar, ir) => Xe >= ar && Xe < (Ye[ir + 1] ?? 1 / 0)
          ), qe = Ie[Tt];
          Nt((qe == null ? void 0 : qe.key) ?? null), Et(Oe.indexOf((qe == null ? void 0 : qe.key) ?? ""));
          return;
        }
        Xe = Xe + It;
        const or = Ht.findIndex(
          (Tt, qe) => Xe >= Tt && Xe < (Ht[qe + 1] ?? 1 / 0)
        ), yt = $e[or];
        Nt((yt == null ? void 0 : yt.key) ?? null), Et(Oe.indexOf((yt == null ? void 0 : yt.key) ?? ""));
        const wn = 100;
        V.clientX < Ke + wn ? Z.current.scrollLeft = Math.max(0, Z.current.scrollLeft - 15) : V.clientX > ln - wn && (Z.current.scrollLeft = Math.min(
          Z.current.scrollWidth - Z.current.clientWidth,
          Z.current.scrollLeft + 15
        ));
      }, Pt = () => {
        if (Ae && we && we !== Ae) {
          const V = [...Oe], Ke = V.indexOf(we), ln = V.indexOf(Ae);
          V.splice(Ke, 1), V.splice(ln, 0, we), Vt(V);
          const It = _e.includes(we), Gt = _e.includes(Ae);
          It && !Gt ? mt(_e.filter((Xe) => Xe !== we)) : !It && Gt && mt([..._e, we]);
        }
        kt(!1), wt(null), Nt(null), Et(-1), window.removeEventListener("mousemove", Bt), window.removeEventListener("mouseup", Pt);
      };
      window.addEventListener("mousemove", Bt), window.addEventListener("mouseup", Pt);
    }, me = () => {
      window.removeEventListener("mousemove", ie), window.removeEventListener("mouseup", me);
    };
    window.addEventListener("mousemove", ie), window.addEventListener("mouseup", me);
  }, se = (a) => {
    _e.includes(a) || mt([..._e, a]);
  }, ye = (a) => {
    mt(_e.filter((d) => d !== a));
  }, Ve = (a, d) => {
    const _ = d ?? (We.has(a) ? a : null);
    _ && (ee == null || ee({ columnKey: a, filterKey: _ }));
  }, et = (a, d, _) => {
    const K = d ?? (We.has(a) ? a : null);
    K && (oe == null || oe({ columnKey: a, filterKey: K, value: _ }));
  }, Ce = he(() => {
    if (!Pe.sortBy) return r;
    const a = e.find((_) => _.key === Pe.sortBy);
    if (!a) return r;
    const d = [...r];
    return d.sort((_, K) => {
      if (a.sortFn) return a.sortFn(_, K, Pe.sortOrder);
      const ie = gn(_, a), me = gn(K, a);
      return typeof ie == "string" && typeof me == "string" ? Pe.sortOrder === "desc" ? me.localeCompare(ie) : ie.localeCompare(me) : typeof ie == "number" && typeof me == "number" ? Pe.sortOrder === "desc" ? me - ie : ie - me : 0;
    }), d;
  }, [r, e, Pe]), Rt = he(
    () => ({
      sorting: Pe,
      setSorting: st,
      pinnedColumnsStartKeys: _e,
      pinnedColumnsEndKeys: Me,
      pinColumn: se,
      unpinColumn: ye,
      hideColumn: gt,
      columnsReordering: N,
      columnsPinControl: I,
      columnsVisibilityControl: w,
      startDragging: re,
      draggedColumnKey: we,
      targetColumnKey: Ae,
      draggedColumnIndex: ct,
      targetColumnIndex: ut,
      filterableColumnKeys: We,
      filterByColumn: Ve,
      filterByValue: et,
      activeContextMenuKey: z,
      setActiveContextMenuKey: ge,
      getRowKey: (a) => bt(a, s) ?? ""
    }),
    [
      Pe,
      _e,
      Me,
      N,
      I,
      w,
      we,
      Ae,
      ct,
      ut,
      We,
      z,
      s
    ]
  );
  return /* @__PURE__ */ t.jsx(qn.Provider, { value: Rt, children: /* @__PURE__ */ t.jsx("div", { className: C(F.frame, Se), "data-ui2-component": "DataTable", style: j, children: /* @__PURE__ */ t.jsx("div", { className: F.scroll, ref: Z, children: /* @__PURE__ */ t.jsx("div", { className: F.table, "data-size": o, children: /* @__PURE__ */ t.jsxs("div", { className: F.tableInner, children: [
    /* @__PURE__ */ t.jsx("div", { className: F.tableHead, role: "rowgroup", children: /* @__PURE__ */ t.jsxs("div", { className: F.headRow, role: "row", ref: Dt, children: [
      Ie.length ? /* @__PURE__ */ t.jsx("div", { className: C(F.columnGroup, F.columnsPinnedStart), "data-group": "pinned-start", children: Ie.map((a) => /* @__PURE__ */ t.jsx(
        dn,
        {
          column: a,
          sorting: Pe,
          onSortingChange: st,
          onPin: () => se(a.key),
          onUnpin: () => ye(a.key),
          onHide: () => gt(a.key),
          onFilter: () => Ve(a.key, a.filterKey),
          onStartDragging: re,
          onResizeStart: U,
          onResizeMove: X,
          onResizeEnd: W,
          onResizeDoubleClick: A,
          canResize: E,
          canPin: I,
          pinned: _e.includes(a.key),
          canHide: w,
          canReorder: N,
          canFilter: !!a.filterKey || We.has(a.key),
          dragState: {
            draggedColumnKey: we,
            targetColumnKey: Ae,
            draggedColumnIndex: ct,
            targetColumnIndex: ut
          }
        },
        a.key
      )) }) : null,
      /* @__PURE__ */ t.jsx("div", { className: C(F.columnGroup, F.columnsRegular), "data-group": "regular", children: $e.map((a) => /* @__PURE__ */ t.jsx(
        dn,
        {
          column: a,
          sorting: Pe,
          onSortingChange: st,
          onPin: () => se(a.key),
          onUnpin: () => ye(a.key),
          onHide: () => gt(a.key),
          onFilter: () => Ve(a.key, a.filterKey),
          onStartDragging: re,
          onResizeStart: U,
          onResizeMove: X,
          onResizeEnd: W,
          onResizeDoubleClick: A,
          canResize: E,
          canPin: I,
          pinned: _e.includes(a.key),
          canHide: w,
          canReorder: N,
          canFilter: !!a.filterKey || We.has(a.key),
          dragState: {
            draggedColumnKey: we,
            targetColumnKey: Ae,
            draggedColumnIndex: ct,
            targetColumnIndex: ut
          }
        },
        a.key
      )) }),
      Fe.length ? /* @__PURE__ */ t.jsx("div", { className: C(F.columnGroup, F.columnsPinnedEnd), "data-group": "pinned-end", children: Fe.map((a) => /* @__PURE__ */ t.jsx(
        dn,
        {
          column: a,
          sorting: Pe,
          onSortingChange: st,
          onPin: () => se(a.key),
          onUnpin: () => ye(a.key),
          onHide: () => gt(a.key),
          onFilter: () => Ve(a.key, a.filterKey),
          onStartDragging: re,
          onResizeStart: U,
          onResizeMove: X,
          onResizeEnd: W,
          onResizeDoubleClick: A,
          canResize: E,
          canPin: !1,
          pinned: !1,
          canHide: w,
          canReorder: N,
          canFilter: !!a.filterKey || We.has(a.key),
          dragState: {
            draggedColumnKey: we,
            targetColumnKey: Ae,
            draggedColumnIndex: ct,
            targetColumnIndex: ut
          }
        },
        a.key
      )) }) : null,
      Wt ? /* @__PURE__ */ t.jsx("div", { className: F.ghost, ref: rt, children: /* @__PURE__ */ t.jsx("div", { className: F.ghostInner, children: (Kt = ot.find((a) => a.key === we)) == null ? void 0 : Kt.header }) }) : null
    ] }) }),
    /* @__PURE__ */ t.jsx("div", { className: F.tableBody, role: "rowgroup", children: Ce.map((a, d) => /* @__PURE__ */ t.jsxs(
      fo,
      {
        hover: i,
        clickable: l || !!f,
        active: c != null && bt(a, s) === c,
        divider: h,
        onClick: f ? () => f(a) : void 0,
        children: [
          Ie.length ? /* @__PURE__ */ t.jsx("div", { className: C(F.columnGroup, F.columnsPinnedStart), "data-group": "pinned-start", children: Ie.map((_) => /* @__PURE__ */ t.jsx(
            fn,
            {
              column: _,
              row: a,
              rowKeyValue: bt(a, s) ?? d
            },
            _.key
          )) }) : null,
          /* @__PURE__ */ t.jsx("div", { className: C(F.columnGroup, F.columnsRegular), "data-group": "regular", children: $e.map((_) => /* @__PURE__ */ t.jsx(
            fn,
            {
              column: _,
              row: a,
              rowKeyValue: bt(a, s) ?? d
            },
            _.key
          )) }),
          Fe.length ? /* @__PURE__ */ t.jsx("div", { className: C(F.columnGroup, F.columnsPinnedEnd), "data-group": "pinned-end", children: Fe.map((_) => /* @__PURE__ */ t.jsx(
            fn,
            {
              column: _,
              row: a,
              rowKeyValue: bt(a, s) ?? d
            },
            _.key
          )) }) : null
        ]
      },
      bt(a, s) ?? d
    )) })
  ] }) }) }) }) });
}
function fo({
  children: e,
  hover: r,
  clickable: s,
  active: o,
  divider: i,
  onClick: l
}) {
  return /* @__PURE__ */ t.jsx(
    "div",
    {
      className: F.row,
      "data-hover": r ? "true" : "false",
      "data-divider": i ? "true" : "false",
      "data-clickable": s ? "true" : "false",
      "data-active": o ? "true" : "false",
      onClick: l,
      children: e
    }
  );
}
function dn({
  column: e,
  sorting: r,
  onSortingChange: s,
  onPin: o,
  onUnpin: i,
  onHide: l,
  onFilter: c,
  onStartDragging: f,
  onResizeStart: h,
  onResizeMove: y,
  onResizeEnd: p,
  onResizeDoubleClick: m,
  canResize: b,
  canPin: M,
  canHide: E,
  canReorder: N,
  canFilter: I,
  pinned: w,
  dragState: P
}) {
  const [ee, oe] = G(!1), Y = r.sortBy === e.key, pe = b && (e.resizable ?? !0);
  fe(() => {
    if (!ee) return;
    const $ = () => oe(!1);
    return window.addEventListener("scroll", $, !0), () => window.removeEventListener("scroll", $, !0);
  }, [ee]);
  const ce = () => {
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
  }, J = e.key === P.targetColumnKey && e.key !== P.draggedColumnKey, je = P.draggedColumnIndex > P.targetColumnIndex && J;
  return /* @__PURE__ */ t.jsx(oo, { content: e.tooltip, children: /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: F.headCell,
      "data-align": e.align ?? "start",
      "data-open": ee ? "true" : "false",
      "data-column": e.key,
      onMouseDown: ($) => {
        var te, ve;
        (ve = (te = $.target) == null ? void 0 : te.closest) != null && ve.call(te, "[data-resize-hotspot]") || !N || e.frozenStart || e.frozenEnd || f($.nativeEvent, e.key);
      },
      children: [
        /* @__PURE__ */ t.jsx("div", { className: F.headContent, children: /* @__PURE__ */ t.jsx("span", { className: F.headLabel, "data-cell-content": "true", children: e.header }) }),
        /* @__PURE__ */ t.jsx(
          Xn,
          {
            open: ee,
            onOpenChange: oe,
            host: ({ hostProps: $ }) => /* @__PURE__ */ t.jsx("button", { ...$, className: F.headButton, "aria-label": "Column menu" }),
            zIndex: w ? 220 : 140,
            children: /* @__PURE__ */ t.jsx(bn, { onAfterSelect: () => oe(!1), children: /* @__PURE__ */ t.jsxs(jn, { children: [
              M && !e.frozenStart && !e.frozenEnd ? w ? /* @__PURE__ */ t.jsxs(vt, { onSelect: i, children: [
                /* @__PURE__ */ t.jsx(hs, { size: 16 }),
                " Unpin column"
              ] }) : /* @__PURE__ */ t.jsxs(vt, { onSelect: o, children: [
                /* @__PURE__ */ t.jsx(ps, { size: 16 }),
                " Pin column"
              ] }) : null,
              E ? /* @__PURE__ */ t.jsxs(vt, { onSelect: l, children: [
                /* @__PURE__ */ t.jsx(Hn, { size: 16 }),
                " Hide column"
              ] }) : null,
              I ? /* @__PURE__ */ t.jsxs(vt, { onSelect: c, children: [
                /* @__PURE__ */ t.jsx(Un, { size: 16 }),
                " Filter by column"
              ] }) : null
            ] }) })
          }
        ),
        e.sortable ? /* @__PURE__ */ t.jsx(
          nt,
          {
            size: "xs",
            variant: "tertiary",
            className: F.sortButton,
            active: Y,
            textColor: "--ui2-content-secondary",
            "aria-label": `Sort ${typeof e.header == "string" ? e.header : e.key}`,
            onClick: ($) => {
              $.stopPropagation(), ce();
            },
            children: Y ? r.sortOrder === "desc" ? /* @__PURE__ */ t.jsx(qt, { size: 14 }) : /* @__PURE__ */ t.jsx(yn, { size: 14 }) : /* @__PURE__ */ t.jsx(qt, { size: 14 })
          }
        ) : null,
        pe ? /* @__PURE__ */ t.jsx(
          "span",
          {
            className: F.resizeHotspot,
            "data-resize-hotspot": "true",
            onPointerDown: ($) => {
              $.preventDefault(), $.stopPropagation(), h($, e.key);
            },
            onPointerMove: ($) => {
              y($, e.key);
            },
            onPointerUp: ($) => {
              p($, e.key);
            },
            onPointerCancel: ($) => {
              p($, e.key);
            },
            onDoubleClick: ($) => {
              $.preventDefault(), $.stopPropagation(), m($, e.key);
            }
          }
        ) : null,
        J ? /* @__PURE__ */ t.jsx("div", { className: C(F.dropIndicator, je && F.dropIndicatorStart) }) : null
      ]
    }
  ) });
}
function fn({
  column: e,
  row: r,
  rowKeyValue: s
}) {
  const o = gn(r, e), i = e.valueFormatter ? e.valueFormatter(o, r) : o, l = i == null ? "" : String(i), c = e.render ? e.render(r) : l;
  return /* @__PURE__ */ t.jsx(
    Jn.Provider,
    {
      value: {
        align: e.align ?? "start",
        monospace: e.monospace ?? !1,
        row: r,
        rowKey: s,
        columnKey: e.key,
        filterKey: e.filterKey,
        value: l,
        rawValue: o
      },
      children: /* @__PURE__ */ t.jsx(lo, { "data-column": e.key, children: c })
    }
  );
}
const vo = "_header_1mk0z_1", ho = "_headerLeft_1mk0z_10", _o = "_headerRight_1mk0z_19", po = "_titlePill_1mk0z_27", mo = "_subtitleBadge_1mk0z_44", go = "_subtitleBadgeAi_1mk0z_61", xo = "_footer_1mk0z_72", yo = "_footerText_1mk0z_81", bo = "_footerActions_1mk0z_90", De = {
  header: vo,
  headerLeft: ho,
  headerRight: _o,
  titlePill: po,
  subtitleBadge: mo,
  subtitleBadgeAi: go,
  footer: xo,
  footerText: yo,
  footerActions: bo
};
function Zn({ left: e, right: r, className: s }) {
  return /* @__PURE__ */ t.jsxs("div", { className: C(De.header, s), children: [
    /* @__PURE__ */ t.jsx("div", { className: De.headerLeft, children: e }),
    /* @__PURE__ */ t.jsx("div", { className: De.headerRight, children: r })
  ] });
}
function Qn({ left: e, right: r, className: s }) {
  return /* @__PURE__ */ t.jsxs("div", { className: C(De.footer, s), children: [
    /* @__PURE__ */ t.jsx("div", { className: De.footerText, children: e }),
    /* @__PURE__ */ t.jsx("div", { className: De.footerActions, children: r })
  ] });
}
const jo = "_root_14c0l_1", Co = "_tableWrap_14c0l_82", ko = "_tableFrame_14c0l_89", wo = "_filterBar_14c0l_118", No = "_filterBarContent_14c0l_128", Eo = "_columnsActionItem_14c0l_137", So = "_columnsActionIcon_14c0l_143", Ro = "_columnsActionLabel_14c0l_151", lt = {
  root: jo,
  tableWrap: Co,
  tableFrame: ko,
  filterBar: wo,
  filterBarContent: No,
  columnsActionItem: Eo,
  columnsActionIcon: So,
  columnsActionLabel: Ro
}, Bo = 10;
function Po(e) {
  if (e == null) return;
  if (typeof e == "number" && Number.isFinite(e)) return e;
  const r = String(e).trim();
  if (!r) return;
  if (r.endsWith("px")) {
    const o = Number.parseFloat(r.slice(0, -2));
    return Number.isFinite(o) ? o : void 0;
  }
  if (r.endsWith("rem")) {
    const o = Number.parseFloat(r.slice(0, -3));
    return Number.isFinite(o) ? o * 16 : void 0;
  }
  const s = r.match(/^w-(\d+)$/);
  if (s)
    return Number.parseInt(s[1], 10) * 4;
}
function Mo(e, r) {
  if (!r) {
    const s = e.id;
    return s == null || s === "" ? void 0 : s;
  }
  return typeof r == "function" ? r(e) : e[r];
}
function vn(e, r) {
  return e[r];
}
function Io(e) {
  if (e === "left") return "start";
  if (e === "right") return "end";
  if (e === "center") return "center";
}
function Il({
  columns: e,
  data: r,
  title: s,
  subtitle: o,
  subtitleIcon: i = "none",
  columnsVisibilityControl: l = !1,
  visibleColumns: c,
  defaultVisibleColumns: f,
  onVisibleColumnsChange: h,
  pageSize: y = Bo,
  className: p,
  showActions: m = !1,
  headerAction: b,
  onRowClick: M,
  onClearFilter: E,
  rowKey: N,
  filterBar: I,
  filterKeys: w,
  onFilterByColumn: P,
  onFilterByValue: ee,
  style: oe
}) {
  const [Y, pe] = G({ sortBy: null, sortOrder: "asc" }), [ce, J] = G(1), [je, $] = G(null), te = he(() => {
    const k = e.map((T) => ({
      key: String(T.key),
      header: T.label,
      sortable: T.sortable,
      filterKey: T.filterKey,
      align: Io(T.align),
      value: T.key,
      render: T.render ? (de) => {
        var Re;
        return (Re = T.render) == null ? void 0 : Re.call(T, vn(de, T.key), de);
      } : void 0
    }));
    return m ? [
      ...k,
      {
        key: "__actions",
        header: "Actions",
        sortable: !1,
        align: "end",
        render: (T) => /* @__PURE__ */ t.jsx(
          nt,
          {
            variant: "tertiary",
            size: "s",
            onClick: (de) => de.stopPropagation(),
            "aria-label": "View",
            children: /* @__PURE__ */ t.jsx(cs, { size: 16 })
          }
        )
      }
    ] : k;
  }, [e, m]), ve = he(() => te.map((k) => k.key), [te]), [ue, O] = G(
    f ?? ve
  ), D = c ?? ue ?? ve;
  fe(() => {
    c || O(f ?? ve);
  }, [ve, f, c]);
  const ne = (k) => {
    h ? h(k) : O(k);
  }, Se = he(() => {
    const k = {};
    return e.forEach((T) => {
      const de = Po(T.width);
      de != null && (k[String(T.key)] = de);
    }), m && (k.__actions = 48), k;
  }, [e, m]), j = he(() => {
    if (!Y.sortBy) return r;
    const k = te.find((de) => de.key === Y.sortBy);
    if (!k) return r;
    const T = [...r];
    return T.sort((de, Re) => {
      const z = k.key === "__actions" ? null : vn(de, k.key), ge = k.key === "__actions" ? null : vn(Re, k.key);
      return typeof z == "number" && typeof ge == "number" ? Y.sortOrder === "desc" ? ge - z : z - ge : typeof z == "string" && typeof ge == "string" ? Y.sortOrder === "desc" ? ge.localeCompare(z) : z.localeCompare(ge) : 0;
    }), T;
  }, [r, te, Y]), L = Math.max(1, Math.ceil(j.length / y)), H = Math.min(ce, L), ae = j.slice((H - 1) * y, H * y);
  fe(() => {
    H !== ce && J(H);
  }, [H, ce]), fe(() => {
    J(1);
  }, [y, r.length, Y.sortBy, Y.sortOrder]);
  const ke = (k) => {
    const T = Mo(k, N);
    T != null && $(T), M == null || M(k);
  }, Te = pn.toArray(I).flatMap((k) => lr(k) && k.type === An ? pn.toArray(k.props.children) : [k]), B = Te.length, R = !!(E && B > 1), x = !!(I || R);
  return /* @__PURE__ */ t.jsxs("div", { className: C(lt.root, p), style: oe, children: [
    (s || o || b || l) && /* @__PURE__ */ t.jsx(
      Zn,
      {
        left: /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
          s ? /* @__PURE__ */ t.jsx("div", { className: De.titlePill, children: s }) : null,
          o ? /* @__PURE__ */ t.jsxs(
            "span",
            {
              className: C(
                De.subtitleBadge,
                i === "ai" && De.subtitleBadgeAi
              ),
              children: [
                i === "ai" ? /* @__PURE__ */ t.jsx(Gn, { size: 14 }) : null,
                o
              ]
            }
          ) : null
        ] }),
        right: /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
          b,
          l ? /* @__PURE__ */ t.jsx(
            Xn,
            {
              host: ({ open: k, hostProps: T }) => /* @__PURE__ */ t.jsx(
                nt,
                {
                  ...T,
                  variant: "tertiary",
                  size: "s",
                  active: k,
                  "aria-label": "Columns settings",
                  children: /* @__PURE__ */ t.jsx(Hn, { size: 16 })
                }
              ),
              children: /* @__PURE__ */ t.jsx(bn, { children: /* @__PURE__ */ t.jsx(jn, { children: te.map((k) => {
                const T = D.includes(k.key);
                return /* @__PURE__ */ t.jsxs(
                  vt,
                  {
                    onSelect: () => {
                      if (T && D.length === 1) return;
                      const de = T ? D.filter((Re) => Re !== k.key) : [...D, k.key];
                      ne(de);
                    },
                    className: lt.columnsActionItem,
                    children: [
                      /* @__PURE__ */ t.jsx("span", { className: lt.columnsActionIcon, children: T ? /* @__PURE__ */ t.jsx(Yr, { size: 14 }) : null }),
                      /* @__PURE__ */ t.jsx("span", { className: lt.columnsActionLabel, children: k.header })
                    ]
                  },
                  k.key
                );
              }) }) })
            }
          ) : null
        ] })
      }
    ),
    x ? /* @__PURE__ */ t.jsx("div", { className: lt.filterBar, children: /* @__PURE__ */ t.jsxs("div", { className: lt.filterBarContent, children: [
      Te,
      R ? /* @__PURE__ */ t.jsx(Dn, { variant: "tertiary", size: "m", onClick: E, children: "Clear filter" }) : null
    ] }) }) : null,
    /* @__PURE__ */ t.jsx("div", { className: lt.tableWrap, children: /* @__PURE__ */ t.jsx(
      uo,
      {
        columns: te,
        rows: ae,
        size: "m",
        sorting: Y,
        onSortingChange: pe,
        columnWidths: Se,
        visibleColumns: D,
        onVisibleColumnsChange: ne,
        filterKeys: w,
        onFilterByColumn: P,
        onFilterByValue: ee,
        rowClickable: !!M,
        rowActiveKey: je,
        onRowClick: M ? ke : void 0,
        className: lt.tableFrame
      }
    ) }),
    L > 1 ? /* @__PURE__ */ t.jsx(
      Qn,
      {
        left: `${j.length} rows`,
        right: /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
          /* @__PURE__ */ t.jsxs("span", { className: De.footerText, children: [
            "Page ",
            H,
            " of ",
            L
          ] }),
          /* @__PURE__ */ t.jsx(
            nt,
            {
              variant: "tertiary",
              size: "s",
              onClick: () => J(Math.max(1, H - 1)),
              disabled: H === 1,
              "aria-label": "Previous page",
              children: /* @__PURE__ */ t.jsx(Wn, { size: 16 })
            }
          ),
          /* @__PURE__ */ t.jsx(
            nt,
            {
              variant: "tertiary",
              size: "s",
              onClick: () => J(Math.min(L, H + 1)),
              disabled: H === L,
              "aria-label": "Next page",
              children: /* @__PURE__ */ t.jsx(Fn, { size: 16 })
            }
          )
        ] })
      }
    ) : null
  ] });
}
const To = "_badge_gg8ef_1", zo = "_selectWrap_gg8ef_15", Ao = "_select_gg8ef_15", $o = "_outlined_gg8ef_37", Oo = "_approved_gg8ef_41", Do = "_pending_gg8ef_47", Lo = "_rejected_gg8ef_53", Wo = "_mix_gg8ef_59", tt = {
  badge: To,
  selectWrap: zo,
  select: Ao,
  outlined: $o,
  approved: Oo,
  pending: Do,
  rejected: Lo,
  mix: Wo
}, Fo = ["APPROVED", "PENDING", "REJECTED", "Active", "Core", "Mix"];
function Tl({
  status: e,
  onChange: r,
  variant: s = "default",
  className: o
}) {
  const i = (c) => {
    r == null || r(c.target.value);
  }, l = e === "APPROVED" || e === "Active" || e === "Core" ? tt.approved : e === "REJECTED" ? tt.rejected : e === "Mix" ? tt.mix : tt.pending;
  return r ? /* @__PURE__ */ t.jsx("div", { className: C(tt.selectWrap, l, o), children: /* @__PURE__ */ t.jsx(
    "select",
    {
      className: C(tt.select, s === "outlined" && tt.outlined),
      value: e,
      onChange: i,
      "aria-label": "Status",
      children: Fo.map((c) => /* @__PURE__ */ t.jsx("option", { value: c, children: c }, c))
    }
  ) }) : /* @__PURE__ */ t.jsx(
    "span",
    {
      className: C(
        tt.badge,
        l,
        s === "outlined" && tt.outlined,
        o
      ),
      children: e
    }
  );
}
const Vo = "_root_karlk_1", Ko = {
  root: Vo
};
function zl({ cluster: e, className: r }) {
  return /* @__PURE__ */ t.jsx("span", { className: C(Ko.root, r), "aria-label": `Cluster ${e}`, children: e });
}
const Ho = "_root_vx2zz_1", Uo = "_track_vx2zz_8", Go = "_fill_vx2zz_18", Yo = "_green_vx2zz_24", Xo = "_orange_vx2zz_28", qo = "_teal_vx2zz_32", Jo = "_label_vx2zz_36", ht = {
  root: Ho,
  track: Uo,
  fill: Go,
  green: Yo,
  orange: Xo,
  teal: qo,
  label: Jo
}, Zo = {
  green: ht.green,
  orange: ht.orange,
  teal: ht.teal
};
function Al({
  value: e,
  max: r = 100,
  showLabel: s = !0,
  color: o = "green",
  className: i
}) {
  const l = Math.min(e / r * 100, 100);
  return /* @__PURE__ */ t.jsxs("div", { className: C(ht.root, i), children: [
    /* @__PURE__ */ t.jsx("div", { className: ht.track, children: /* @__PURE__ */ t.jsx("div", { className: C(ht.fill, Zo[o]), style: { width: `${l}%` } }) }),
    s ? /* @__PURE__ */ t.jsxs("span", { className: ht.label, children: [
      Math.round(l),
      "%"
    ] }) : null
  ] });
}
const Qo = "_root_6wn2j_1", ea = "_heading_6wn2j_25", ta = "_value_6wn2j_34", na = "_main_6wn2j_47", ra = "_headingText_6wn2j_64", sa = "_iconWrap_6wn2j_70", oa = "_bottom_6wn2j_115", aa = "_meta_6wn2j_121", ia = "_trend_6wn2j_130", la = "_trendIcon_6wn2j_141", ca = "_trendValue_6wn2j_149", ua = "_trendSuffix_6wn2j_155", da = "_trendPositive_6wn2j_164", fa = "_trendNegative_6wn2j_168", va = "_trendNeutral_6wn2j_172", be = {
  root: Qo,
  "variant-default": "_variant-default_6wn2j_13",
  "variant-small": "_variant-small_6wn2j_18",
  heading: ea,
  value: ta,
  "variant-large": "_variant-large_6wn2j_42",
  main: na,
  headingText: ra,
  iconWrap: sa,
  bottom: oa,
  meta: aa,
  trend: ia,
  trendIcon: la,
  trendValue: ca,
  trendSuffix: ua,
  trendPositive: da,
  trendNegative: fa,
  trendNeutral: va
}, ha = {
  store: Ln,
  package: fs,
  dollar: as,
  chart: Ur,
  trending: bs,
  truck: Cs,
  calendar: Kr,
  alert: zr,
  critical: Ir,
  crown: ss,
  layers: xs,
  tail: $r,
  sparkles: Gn,
  box: Wr,
  boxes: Dr
};
function _a({ data: e, className: r, variant: s = "default", header: o }) {
  if (!e) return null;
  const i = e.icon ? ha[e.icon] || Ln : null, l = !!(e.trend && e.trendValue), c = e.trend === "down" ? be.trendNegative : e.trend === "up" ? be.trendPositive : be.trendNeutral;
  return /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: C(be.root, be[`variant-${s}`], r),
      "data-variant": s,
      children: [
        /* @__PURE__ */ t.jsxs("div", { className: be.main, children: [
          /* @__PURE__ */ t.jsxs("div", { className: be.heading, children: [
            i ? /* @__PURE__ */ t.jsx("span", { className: be.iconWrap, "aria-hidden": "true", children: /* @__PURE__ */ t.jsx(i, { size: 16 }) }) : null,
            /* @__PURE__ */ t.jsx("div", { className: be.headingText, children: o ?? e.title })
          ] }),
          /* @__PURE__ */ t.jsx("div", { className: be.value, children: e.value })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: be.bottom, children: [
          e.subtitle ? /* @__PURE__ */ t.jsx("div", { className: be.meta, children: e.subtitle }) : null,
          l ? /* @__PURE__ */ t.jsxs("div", { className: C(be.trend, c), children: [
            e.trend === "down" ? /* @__PURE__ */ t.jsx("span", { className: be.trendIcon, "aria-hidden": "true", children: /* @__PURE__ */ t.jsx(Es, { size: 16 }) }) : e.trend === "up" ? /* @__PURE__ */ t.jsx("span", { className: be.trendIcon, "aria-hidden": "true", children: /* @__PURE__ */ t.jsx(Rs, { size: 16 }) }) : null,
            /* @__PURE__ */ t.jsx("span", { className: be.trendValue, children: e.trendValue }),
            e.target ? /* @__PURE__ */ t.jsx("span", { className: be.trendSuffix, children: e.target }) : null
          ] }) : null
        ] })
      ]
    }
  );
}
const pa = "_wrapper_1k6ep_1", ma = "_remove_1k6ep_6", ga = "_root_1k6ep_10", xa = "_active_1k6ep_29", ya = "_filled_1k6ep_34", ba = "_content_1k6ep_65", ja = "_leadingVisual_1k6ep_71", Ca = "_counter_1k6ep_80", ka = "_text_1k6ep_96", wa = "_meta_1k6ep_103", He = {
  wrapper: pa,
  remove: ma,
  root: ga,
  active: xa,
  filled: ya,
  content: ba,
  leadingVisual: ja,
  counter: Ca,
  text: ka,
  meta: wa
};
function $l({
  as: e,
  asProps: r,
  filled: s = !1,
  removable: o = !1,
  active: i = !1,
  leadingVisual: l,
  meta: c,
  counter: f,
  onRemove: h,
  children: y,
  className: p,
  ...m
}) {
  const b = e ?? "span", M = C(
    He.root,
    s && He.filled,
    o && He.removable,
    i && He.active,
    p
  ), E = /* @__PURE__ */ t.jsxs(
    b,
    {
      className: M,
      ...r,
      ...m,
      "data-ui2-component": o ? void 0 : "Chip",
      children: [
        /* @__PURE__ */ t.jsxs("span", { className: He.content, children: [
          l ? /* @__PURE__ */ t.jsx("span", { className: He.leadingVisual, children: l }) : null,
          y ? /* @__PURE__ */ t.jsx("span", { className: He.text, children: y }) : null
        ] }),
        f ? /* @__PURE__ */ t.jsx("span", { className: He.counter, children: f }) : null,
        c ? /* @__PURE__ */ t.jsx("span", { className: He.meta, children: c }) : null
      ]
    }
  );
  return o ? /* @__PURE__ */ t.jsxs("span", { className: He.wrapper, "data-ui2-component": "Chip", children: [
    E,
    /* @__PURE__ */ t.jsx(
      "button",
      {
        type: "button",
        className: He.remove,
        onClick: h,
        "aria-label": "Remove",
        children: /* @__PURE__ */ t.jsx(ws, { size: 14 })
      }
    )
  ] }) : E;
}
const Na = "_root_1uyca_1", Ea = "_textContainer_1uyca_21", Sa = "_title_1uyca_26", Ra = "_subtitle_1uyca_27", Ba = "_leadingVisual_1uyca_49", Pa = "_trailingVisual_1uyca_50", Ma = "_sizeS_1uyca_66", Ia = "_variantSuccess_1uyca_79", Ta = "_variantError_1uyca_84", za = "_variantWarning_1uyca_89", Je = {
  root: Na,
  textContainer: Ea,
  title: Sa,
  subtitle: Ra,
  leadingVisual: Ba,
  trailingVisual: Pa,
  sizeS: Ma,
  variantSuccess: Ia,
  variantError: Ta,
  variantWarning: za
};
function Aa({
  as: e,
  asProps: r,
  size: s = "m",
  variant: o,
  textColor: i,
  backgroundColor: l,
  borderColor: c,
  leadingVisual: f,
  trailingVisual: h,
  subtitle: y,
  children: p,
  className: m,
  style: b,
  ...M
}) {
  const E = e ?? "span";
  return /* @__PURE__ */ t.jsxs(
    E,
    {
      className: C(
        Je.root,
        s === "s" && Je.sizeS,
        o === "success" && Je.variantSuccess,
        o === "error" && Je.variantError,
        o === "warning" && Je.variantWarning,
        m
      ),
      style: {
        backgroundColor: l,
        color: i,
        borderColor: c,
        ...b
      },
      "data-ui2-component": "Tag",
      ...r,
      ...M,
      children: [
        f ? /* @__PURE__ */ t.jsx("span", { className: Je.leadingVisual, children: f }) : null,
        /* @__PURE__ */ t.jsxs("span", { className: Je.textContainer, children: [
          p ? /* @__PURE__ */ t.jsx("span", { className: Je.title, children: p }) : null,
          y ? /* @__PURE__ */ t.jsx("span", { className: Je.subtitle, children: y }) : null
        ] }),
        h ? /* @__PURE__ */ t.jsx("span", { className: Je.trailingVisual, children: h }) : null
      ]
    }
  );
}
const $a = "_root_1rrqz_1", Oa = "_option_1rrqz_9", Da = "_disabled_1rrqz_23", La = "_selected_1rrqz_23", Wa = "_leadingVisual_1rrqz_36", Fa = "_label_1rrqz_52", jt = {
  root: $a,
  option: Oa,
  disabled: Da,
  selected: La,
  leadingVisual: Wa,
  label: Fa
}, er = Zt(null);
function Ol({
  value: e,
  defaultValue: r = null,
  onChange: s,
  options: o,
  children: i,
  className: l
}) {
  const [c, f] = G(r), h = e ?? c, y = (m) => {
    e === void 0 && f(m), s == null || s(m);
  }, p = he(
    () => ({
      value: h,
      onChange: y
    }),
    [h, s]
  );
  return /* @__PURE__ */ t.jsx("div", { className: C(jt.root, l), "data-ui2-component": "SegmentedControl", children: /* @__PURE__ */ t.jsx(er.Provider, { value: p, children: o ? o.map((m) => /* @__PURE__ */ t.jsx(
    Va,
    {
      value: m.value,
      disabled: m.disabled,
      leadingVisual: m.leadingVisual,
      children: m.label
    },
    String(m.value)
  )) : i }) });
}
function Va({
  value: e,
  disabled: r,
  leadingVisual: s,
  children: o,
  className: i
}) {
  const l = Jt(er), c = (l == null ? void 0 : l.value) === e, f = () => {
    var h;
    r || (h = l == null ? void 0 : l.onChange) == null || h.call(l, e);
  };
  return /* @__PURE__ */ t.jsxs(
    "button",
    {
      type: "button",
      className: C(jt.option, i, c && jt.selected, r && jt.disabled),
      onClick: f,
      disabled: r,
      "data-selected": c ? "true" : "false",
      children: [
        s ? /* @__PURE__ */ t.jsx("span", { className: jt.leadingVisual, children: s }) : null,
        o || o === 0 ? /* @__PURE__ */ t.jsx("span", { className: jt.label, children: o }) : null
      ]
    }
  );
}
const Ka = "_root_47m2j_1", Ha = "_rootNoFooter_47m2j_15", Ua = "_rootTable_47m2j_19", Ga = "_header_47m2j_23", Ya = "_footer_47m2j_24", Xa = "_headerStart_47m2j_29", qa = "_headerEnd_47m2j_30", Ja = "_footerStart_47m2j_31", Za = "_footerEnd_47m2j_32", Qa = "_body_47m2j_36", Ze = {
  root: Ka,
  rootNoFooter: Ha,
  rootTable: Ua,
  header: Ga,
  footer: Ya,
  headerStart: Xa,
  headerEnd: qa,
  footerStart: Ja,
  footerEnd: Za,
  body: Qa
};
function ei({
  variant: e = "default",
  header: r,
  headerStart: s,
  headerEnd: o,
  footer: i,
  footerStart: l,
  footerEnd: c,
  children: f,
  className: h,
  style: y
}) {
  const p = !!(r || s || o), m = !!(i || l || c);
  return /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: C(
        Ze.root,
        e === "table" && Ze.rootTable,
        !m && Ze.rootNoFooter,
        h
      ),
      style: y,
      "data-ui2-component": "DataContainer",
      children: [
        p ? r || /* @__PURE__ */ t.jsxs("div", { className: Ze.header, children: [
          /* @__PURE__ */ t.jsx("div", { className: Ze.headerStart, children: s }),
          /* @__PURE__ */ t.jsx("div", { className: Ze.headerEnd, children: o })
        ] }) : null,
        /* @__PURE__ */ t.jsx("div", { className: Ze.body, children: f }),
        m ? i || /* @__PURE__ */ t.jsxs("div", { className: Ze.footer, children: [
          /* @__PURE__ */ t.jsx("div", { className: Ze.footerStart, children: l }),
          /* @__PURE__ */ t.jsx("div", { className: Ze.footerEnd, children: c })
        ] }) : null
      ]
    }
  );
}
const ti = "_card_19z9g_1", ni = "_titleRow_19z9g_13", ri = "_imageBox_19z9g_20", si = "_image_19z9g_20", oi = "_imagePlaceholder_19z9g_38", ai = "_titleBlock_19z9g_43", ii = "_title_19z9g_13", li = "_subtitle_19z9g_58", ci = "_tagWrap_19z9g_67", ui = "_kpiCardSuccess_19z9g_73", di = "_sizeCurveItem_19z9g_83", fi = "_sizeCurve_19z9g_83", vi = "_sizeCurveLabel_19z9g_96", hi = "_sizeCurveValue_19z9g_97", _i = "_sizeCurveMax_19z9g_98", pi = "_sizeCurveBar_19z9g_121", mi = "_sizeCurveFill_19z9g_129", gi = "_glow_19z9g_138", xi = "_glowSuccess_19z9g_150", yi = "_glowDanger_19z9g_158", bi = "_hoverActions_19z9g_166", ji = "_hoverPanel_19z9g_181", Ci = "_hoverItem_19z9g_191", ki = "_hoverDivider_19z9g_201", le = {
  card: ti,
  titleRow: ni,
  imageBox: ri,
  image: si,
  imagePlaceholder: oi,
  titleBlock: ai,
  title: ii,
  subtitle: li,
  tagWrap: ci,
  kpiCardSuccess: ui,
  sizeCurveItem: di,
  sizeCurve: fi,
  sizeCurveLabel: vi,
  sizeCurveValue: hi,
  sizeCurveMax: _i,
  sizeCurveBar: pi,
  sizeCurveFill: mi,
  glow: gi,
  glowSuccess: xi,
  glowDanger: yi,
  hoverActions: bi,
  hoverPanel: ji,
  hoverItem: Ci,
  hoverDivider: ki
};
function wi({ children: e, className: r, highlight: s, hoverActions: o }) {
  return /* @__PURE__ */ t.jsxs("div", { className: C(le.card, r), "data-ui2-component": "Card", children: [
    s ? /* @__PURE__ */ t.jsx(
      "div",
      {
        className: C(
          le.glow,
          s === "success" ? le.glowSuccess : le.glowDanger
        ),
        "aria-hidden": "true"
      }
    ) : null,
    o ? /* @__PURE__ */ t.jsx("div", { className: le.hoverActions, children: o }) : null,
    e
  ] });
}
function Ni({
  title: e,
  subtitle: r,
  tagLabel: s,
  tagTextColor: o,
  tagBorderColor: i,
  tagBackgroundColor: l,
  imageUrl: c,
  className: f
}) {
  return /* @__PURE__ */ t.jsxs("div", { className: C(le.titleRow, f), children: [
    /* @__PURE__ */ t.jsx("div", { className: le.imageBox, children: c ? /* @__PURE__ */ t.jsx("img", { src: c, alt: "", className: le.image }) : /* @__PURE__ */ t.jsx("div", { className: le.imagePlaceholder }) }),
    /* @__PURE__ */ t.jsxs("div", { className: le.titleBlock, children: [
      /* @__PURE__ */ t.jsx("div", { className: le.title, children: e }),
      r ? /* @__PURE__ */ t.jsx("div", { className: le.subtitle, children: r }) : null,
      s ? /* @__PURE__ */ t.jsx("div", { className: le.tagWrap, children: /* @__PURE__ */ t.jsx(
        Aa,
        {
          size: "s",
          textColor: o,
          backgroundColor: l,
          borderColor: i,
          children: s
        }
      ) }) : null
    ] })
  ] });
}
function Ei({ items: e, className: r }) {
  return /* @__PURE__ */ t.jsx("div", { className: C(r), children: e.map((s) => /* @__PURE__ */ t.jsx(
    _a,
    {
      data: {
        id: s.label,
        title: s.label,
        value: s.value
      },
      variant: "small",
      className: C(s.tone === "success" && le.kpiCardSuccess)
    },
    s.label
  )) });
}
function Si({ points: e, className: r }) {
  return /* @__PURE__ */ t.jsx("div", { className: C(le.sizeCurve, r), children: e.map((s) => /* @__PURE__ */ t.jsxs("div", { className: le.sizeCurveItem, children: [
    /* @__PURE__ */ t.jsx("div", { className: le.sizeCurveLabel, children: s.label }),
    /* @__PURE__ */ t.jsx("div", { className: le.sizeCurveBar, "aria-hidden": "true", children: /* @__PURE__ */ t.jsx(
      "div",
      {
        className: le.sizeCurveFill,
        style: {
          width: `${Math.min(s.value / (s.max ?? 100) * 100, 100)}%`
        }
      }
    ) }),
    /* @__PURE__ */ t.jsx("div", { className: le.sizeCurveValue, children: s.value }),
    s.max != null ? /* @__PURE__ */ t.jsxs("div", { className: le.sizeCurveMax, children: [
      "/",
      s.max
    ] }) : null
  ] }, s.label)) });
}
function Dl({ children: e, className: r }) {
  const s = pn.toArray(e).filter(Boolean);
  return /* @__PURE__ */ t.jsx("div", { className: C(le.hoverPanel, r), children: s.map((o, i) => /* @__PURE__ */ t.jsxs(An, { children: [
    /* @__PURE__ */ t.jsx("div", { className: le.hoverItem, children: o }),
    i < s.length - 1 ? /* @__PURE__ */ t.jsx("div", { className: le.hoverDivider }) : null
  ] }, i)) });
}
const Ri = "_titleRow_1ssij_7", Bi = "_kpiGrid_1ssij_14", Pi = "_actionButton_1ssij_20", hn = {
  titleRow: Ri,
  kpiGrid: Bi,
  actionButton: Pi
};
function Mi({
  title: e,
  subtitle: r,
  imageUrl: s,
  tag: o,
  metrics: i,
  sizeCurve: l,
  primaryAction: c,
  actionSlot: f,
  highlight: h,
  hoverActions: y,
  className: p
}) {
  const m = h ?? ((c == null ? void 0 : c.variant) === "success" ? "success" : (c == null ? void 0 : c.variant) === "danger" ? "danger" : void 0);
  return /* @__PURE__ */ t.jsxs(wi, { className: p, highlight: m, hoverActions: y, children: [
    /* @__PURE__ */ t.jsx("div", { className: hn.titleRow, children: /* @__PURE__ */ t.jsx(
      Ni,
      {
        title: e,
        subtitle: r,
        imageUrl: s,
        tagLabel: o == null ? void 0 : o.label,
        tagTextColor: o == null ? void 0 : o.textColor,
        tagBorderColor: o == null ? void 0 : o.borderColor,
        tagBackgroundColor: o == null ? void 0 : o.backgroundColor
      }
    ) }),
    i && i.length > 0 ? /* @__PURE__ */ t.jsx(
      Ei,
      {
        items: i.map((b) => ({
          label: b.label,
          value: b.value,
          tone: b.tone
        })),
        className: hn.kpiGrid
      }
    ) : null,
    l && l.length > 0 ? /* @__PURE__ */ t.jsx(
      Si,
      {
        points: l.map((b) => ({
          label: b.label,
          value: b.value,
          max: b.max
        }))
      }
    ) : null,
    f || (c ? /* @__PURE__ */ t.jsx(
      Dn,
      {
        variant: c.variant === "danger" ? "destructive" : c.variant === "success" ? "primary" : "secondary",
        size: "m",
        onClick: c.onClick,
        className: hn.actionButton,
        leadingVisual: c.leadingVisual,
        children: c.label
      }
    ) : null)
  ] });
}
const Ii = "_root_1g10y_1", Ti = "_grid_1g10y_9", zi = "_body_1g10y_15", _n = {
  root: Ii,
  grid: Ti,
  body: zi
}, Ai = 8;
function Ll({
  data: e,
  pageSize: r = Ai,
  title: s = "Allocations",
  headerAction: o,
  className: i,
  style: l
}) {
  const c = he(() => e.flatMap((b) => b.items), [e]), [f, h] = G(1), y = Math.max(1, Math.ceil(c.length / r)), p = Math.min(f, y), m = c.slice((p - 1) * r, p * r);
  return /* @__PURE__ */ t.jsx(
    ei,
    {
      className: C(_n.root, i),
      style: l,
      header: /* @__PURE__ */ t.jsx(
        Zn,
        {
          left: s ? /* @__PURE__ */ t.jsx("div", { className: De.titlePill, children: s }) : null,
          right: /* @__PURE__ */ t.jsx(t.Fragment, { children: o })
        }
      ),
      footer: y > 1 ? /* @__PURE__ */ t.jsx(
        Qn,
        {
          left: `${c.length} items`,
          right: /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
            /* @__PURE__ */ t.jsxs("span", { className: De.footerText, children: [
              "Page ",
              p,
              " of ",
              y
            ] }),
            /* @__PURE__ */ t.jsx(
              nt,
              {
                variant: "tertiary",
                size: "s",
                onClick: () => h(Math.max(1, p - 1)),
                disabled: p === 1,
                "aria-label": "Previous page",
                children: /* @__PURE__ */ t.jsx(Wn, { size: 16 })
              }
            ),
            /* @__PURE__ */ t.jsx(
              nt,
              {
                variant: "tertiary",
                size: "s",
                onClick: () => h(Math.min(y, p + 1)),
                disabled: p === y,
                "aria-label": "Next page",
                children: /* @__PURE__ */ t.jsx(Fn, { size: 16 })
              }
            )
          ] })
        }
      ) : null,
      children: /* @__PURE__ */ t.jsx("div", { className: _n.body, children: /* @__PURE__ */ t.jsx("div", { className: _n.grid, children: m.map((b) => /* @__PURE__ */ t.jsx(
        Mi,
        {
          title: b.title,
          subtitle: b.subtitle,
          imageUrl: b.imageUrl,
          tag: b.tag,
          metrics: b.metrics,
          sizeCurve: b.sizeCurve,
          primaryAction: b.primaryAction,
          actionSlot: b.actionSlot,
          highlight: b.highlight,
          hoverActions: b.hoverActions
        },
        b.id
      )) }) })
    }
  );
}
const $i = "_root_193i3_1", Oi = "_collapsed_193i3_11", Di = "_header_193i3_15", Li = "_section_193i3_34", Wi = "_sectionLabel_193i3_52", Fi = "_accountButton_193i3_63", Vi = "_accountInfo_193i3_80", Ki = "_accountAvatar_193i3_87", Hi = "_accountName_193i3_108", Ui = "_accountUsername_193i3_109", Gi = "_buttons_193i3_137", Yi = "_buttonsCollapsed_193i3_145", Xi = "_headerButton_193i3_149", qi = "_headerButtonDisabled_193i3_181", Ji = "_headerButtonActive_193i3_187", Zi = "_nav_193i3_200", Qi = "_menuItem_193i3_230", el = "_menuButton_193i3_234", tl = "_menuButtonPseudoHover_193i3_274", nl = "_menuButtonActive_193i3_278", rl = "_menuButtonExpanded_193i3_282", sl = "_menuButtonDisabled_193i3_286", ol = "_menuButtonText_193i3_295", al = "_menuButtonIcon_193i3_304", il = "_menuButtonChevron_193i3_320", ll = "_menuButtonCompact_193i3_329", cl = "_children_193i3_335", ul = "_child_193i3_335", dl = "_childActive_193i3_372", fl = "_childDisabled_193i3_376", vl = "_childText_193i3_385", hl = "_childIcon_193i3_391", _l = "_popover_193i3_401", pl = "_popoverTitle_193i3_410", ml = "_footer_193i3_475", gl = "_footerExpanded_193i3_487", xl = "_footerBottom_193i3_491", yl = "_footerLogo_193i3_499", bl = "_version_193i3_505", jl = "_footerCollapsed_193i3_516", Cl = "_iconButton_193i3_536", kl = "_pinnedButtonWrap_193i3_557", wl = "_tooltipHost_193i3_562", v = {
  root: $i,
  collapsed: Oi,
  header: Di,
  section: Li,
  sectionLabel: Wi,
  accountButton: Fi,
  accountInfo: Vi,
  accountAvatar: Ki,
  accountName: Hi,
  accountUsername: Ui,
  buttons: Gi,
  buttonsCollapsed: Yi,
  headerButton: Xi,
  headerButtonDisabled: qi,
  headerButtonActive: Ji,
  nav: Zi,
  menuItem: Qi,
  menuButton: el,
  menuButtonPseudoHover: tl,
  menuButtonActive: nl,
  menuButtonExpanded: rl,
  menuButtonDisabled: sl,
  menuButtonText: ol,
  menuButtonIcon: al,
  menuButtonChevron: il,
  menuButtonCompact: ll,
  children: cl,
  child: ul,
  childActive: dl,
  childDisabled: fl,
  childText: vl,
  childIcon: hl,
  popover: _l,
  popoverTitle: pl,
  footer: ml,
  footerExpanded: gl,
  footerBottom: xl,
  footerLogo: yl,
  version: bl,
  footerCollapsed: jl,
  iconButton: Cl,
  pinnedButtonWrap: kl,
  tooltipHost: wl
};
function Bn(e, r, s, o) {
  const i = o.x - r.x, l = o.y - r.y, c = s.x - r.x, f = s.y - r.y, h = e.x - r.x, y = e.y - r.y, p = i * i + l * l, m = i * c + l * f, b = i * h + l * y, M = c * c + f * f, E = c * h + f * y, N = p * M - m * m;
  if (N === 0)
    return !1;
  const I = 1 / N, w = (M * b - m * E) * I, P = (p * E - m * b) * I;
  return w >= 0 && P >= 0 && w + P <= 1;
}
function Pn(e, r, s = 0) {
  return e.x >= r.left - s && e.x <= r.right + s && e.y >= r.top - s && e.y <= r.bottom + s;
}
function Nl(e, r, s, o, i) {
  return Bn(e, r, s, o) || Bn(e, r, o, i);
}
function tr(e, r, s, o = 8) {
  if (Pn(e, r, o) || Pn(e, s, o))
    return !0;
  const i = { x: r.right, y: r.top - o }, l = { x: s.left, y: s.top - o }, c = { x: s.left, y: s.bottom + o }, f = { x: r.right, y: r.bottom + o };
  return Nl(e, i, l, c, f);
}
function nr({ initials: e, name: r, username: s, collapsed: o = !1, className: i, ...l }) {
  return /* @__PURE__ */ t.jsxs("button", { type: "button", className: C(v.accountButton, i), ...l, children: [
    /* @__PURE__ */ t.jsx("div", { className: v.accountAvatar, children: e }),
    o ? null : /* @__PURE__ */ t.jsxs("div", { className: v.accountInfo, children: [
      /* @__PURE__ */ t.jsx("div", { className: v.accountName, children: r }),
      /* @__PURE__ */ t.jsx("div", { className: v.accountUsername, children: s })
    ] })
  ] });
}
function El({
  actions: e,
  collapsed: r = !1,
  renderTooltip: s,
  className: o,
  ...i
}) {
  return /* @__PURE__ */ t.jsx("div", { className: C(v.buttons, r && v.buttonsCollapsed, o), ...i, children: e.map((l) => {
    const c = /* @__PURE__ */ t.jsx(
      "button",
      {
        type: "button",
        className: C(
          v.headerButton,
          l.active && v.headerButtonActive,
          l.disabled && v.headerButtonDisabled
        ),
        onClick: l.disabled ? void 0 : l.onClick,
        "aria-label": l.label,
        style: { "--ui2-sidebar-pinned-icon-color": "var(--ui2-content-secondary)" },
        children: l.icon
      },
      l.id
    );
    return s ? /* @__PURE__ */ t.jsx("div", { className: v.pinnedButtonWrap, children: s({ content: l.label, children: c }) }, l.id) : /* @__PURE__ */ t.jsx("div", { className: v.pinnedButtonWrap, children: c }, l.id);
  }) });
}
function rr({
  icon: e,
  showIcon: r = !0,
  label: s,
  compact: o = !1,
  active: i,
  expanded: l,
  disabled: c,
  pseudoHover: f,
  chevron: h,
  as: y,
  className: p,
  ...m
}) {
  const b = y ?? "button";
  return /* @__PURE__ */ t.jsxs(
    b,
    {
      ...b === "button" ? { type: "button", disabled: c } : null,
      className: C(
        v.menuButton,
        o && v.menuButtonCompact,
        i && v.menuButtonActive,
        l && v.menuButtonExpanded,
        c && v.menuButtonDisabled,
        f && v.menuButtonPseudoHover,
        p
      ),
      ...m,
      children: [
        e && r ? /* @__PURE__ */ t.jsx("span", { className: v.menuButtonIcon, children: e }) : null,
        o ? null : /* @__PURE__ */ t.jsx("span", { className: v.menuButtonText, children: s }),
        !o && h ? /* @__PURE__ */ t.jsx("span", { className: v.menuButtonChevron, children: h }) : null
      ]
    }
  );
}
function sr({ collapsed: e = !1, version: r, logo: s, toggle: o, className: i, ...l }) {
  return /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: C(v.footer, !e && v.footerExpanded, e && v.footerCollapsed, i),
      ...l,
      children: [
        !e && r ? /* @__PURE__ */ t.jsxs("div", { className: v.version, children: [
          "v. ",
          r
        ] }) : null,
        /* @__PURE__ */ t.jsxs("div", { className: v.footerBottom, children: [
          /* @__PURE__ */ t.jsx("div", { className: v.footerLogo, children: s }),
          o
        ] })
      ]
    }
  );
}
function Sl(e) {
  return /* @__PURE__ */ t.jsx("div", { className: C(v.nav, e.className), ...e });
}
function Wl({ icon: e, label: r, className: s, ...o }) {
  return /* @__PURE__ */ t.jsx("button", { type: "button", "aria-label": r, className: C(v.iconButton, s), ...o, children: e });
}
const kn = xn(
  ({ title: e, children: r, className: s, ...o }, i) => /* @__PURE__ */ t.jsxs("div", { ref: i, className: C(v.popover, s), ...o, children: [
    /* @__PURE__ */ t.jsx("div", { className: v.popoverTitle, children: e }),
    r
  ] })
);
kn.displayName = "SidebarPopover";
function Rl({ content: e, children: r }) {
  return /* @__PURE__ */ t.jsx("span", { className: v.tooltipHost, title: e, children: r });
}
function Fl({
  collapsed: e,
  defaultCollapsed: r = !1,
  onCollapsedChange: s,
  account: o,
  pinnedActions: i = [],
  navItems: l,
  footer: c,
  className: f,
  style: h,
  renderTooltip: y,
  onItemClick: p,
  onChildClick: m
}) {
  const b = y ?? Rl, [M, E] = G(r), N = e ?? M, [I, w] = G(null), [P, ee] = G(null), oe = Q(!1), Y = Q(null), pe = Q(null), ce = Q({ active: !1 }), J = Q(null), je = he(() => {
    const j = /* @__PURE__ */ new Map();
    return l.forEach((L) => {
      var H;
      L.defaultExpanded && j.set(L.id, !0), (H = L.children) != null && H.some((ae) => ae.active) && j.set(L.id, !0);
    }), j;
  }, [l]), [$, te] = G(() => je), ve = Ue(
    (j) => {
      s ? s(j) : E(j);
    },
    [s]
  ), ue = Ue((j, L) => {
    w(j), ee(L), pe.current = L;
  }, []), O = Ue(() => {
    oe.current || (w(null), ee(null));
  }, []), D = Ue(() => {
    J.current && (window.clearTimeout(J.current), J.current = null);
  }, []), ne = Ue(
    (j = 260) => {
      D(), J.current = window.setTimeout(() => {
        oe.current || (ce.current.active = !1, O());
      }, j);
    },
    [D, O]
  ), Se = Ue((j) => {
    te((L) => {
      const H = new Map(L);
      return H.set(j, !L.get(j)), H;
    });
  }, []);
  return fe(() => {
    if (!N || !I)
      return;
    const j = (L) => {
      if (!ce.current.active || oe.current || !Y.current || !pe.current)
        return;
      const H = Y.current.getBoundingClientRect(), ae = { x: L.clientX, y: L.clientY };
      tr(ae, pe.current, H, 10) ? D() : (ce.current.active = !1, O());
    };
    return window.addEventListener("mousemove", j), () => {
      window.removeEventListener("mousemove", j);
    };
  }, [I, N, D, O]), fe(() => () => D(), [D]), /* @__PURE__ */ t.jsxs(
    "div",
    {
      "data-ui2-component": "Sidebar",
      "data-collapsed": N ? "true" : "false",
      className: C(v.root, N && v.collapsed, f),
      style: h,
      children: [
        /* @__PURE__ */ t.jsxs("div", { className: v.header, children: [
          o ? /* @__PURE__ */ t.jsx(
            nr,
            {
              initials: o.initials,
              name: o.name,
              username: o.username,
              collapsed: N,
              onClick: o.onClick
            }
          ) : null,
          /* @__PURE__ */ t.jsx(El, { actions: i, collapsed: N, renderTooltip: b })
        ] }),
        /* @__PURE__ */ t.jsx(Sl, { onClick: () => w(null), children: l.map((j) => {
          var Te, B, R;
          const L = !!((Te = j.children) != null && Te.length), H = $.get(j.id) ?? !1, ae = N && I === j.id && L && !j.disabled, ke = /* @__PURE__ */ t.jsx(
            rr,
            {
              icon: j.icon,
              showIcon: j.showIcon,
              label: j.title,
              compact: N,
              active: j.active,
              expanded: L && H,
              disabled: j.disabled,
              pseudoHover: ae,
              chevron: !N && L ? H ? /* @__PURE__ */ t.jsx(yn, { size: 16 }) : /* @__PURE__ */ t.jsx(qt, { size: 16 }) : void 0,
              onClick: () => {
                var x;
                if (L && !N) {
                  Se(j.id);
                  return;
                }
                j.disabled || (p == null || p(j), (x = j.onClick) == null || x.call(j));
              }
            }
          );
          return /* @__PURE__ */ t.jsxs(
            "div",
            {
              className: v.menuItem,
              onMouseEnter: (x) => {
                !N || !L || j.disabled || (ce.current.active = !1, D(), ue(j.id, x.currentTarget.getBoundingClientRect()));
              },
              onMouseLeave: (x) => {
                if (N) {
                  if (!L || j.disabled) {
                    O();
                    return;
                  }
                  ce.current.active = !0, ne();
                }
              },
              onFocus: () => {
                var k;
                if (!N || !L || j.disabled)
                  return;
                const x = (k = document.getElementById(`ui2-sidebar-item-${j.id}`)) == null ? void 0 : k.getBoundingClientRect();
                x && ue(j.id, x);
              },
              children: [
                /* @__PURE__ */ t.jsx("div", { id: `ui2-sidebar-item-${j.id}`, children: ke }),
                L && !N && H ? /* @__PURE__ */ t.jsx("div", { className: v.children, children: (B = j.children) == null ? void 0 : B.map((x) => /* @__PURE__ */ t.jsx("div", { children: /* @__PURE__ */ t.jsxs(
                  "button",
                  {
                    type: "button",
                    className: C(
                      v.child,
                      x.active && v.childActive,
                      x.disabled && v.childDisabled
                    ),
                    disabled: x.disabled,
                    onClick: x.disabled ? void 0 : () => {
                      var k;
                      m == null || m(x, j), (k = x.onClick) == null || k.call(x);
                    },
                    children: [
                      x.icon && x.showIcon !== !1 ? /* @__PURE__ */ t.jsx("span", { className: v.childIcon, children: x.icon }) : null,
                      /* @__PURE__ */ t.jsx("span", { className: v.childText, children: x.title })
                    ]
                  }
                ) }, x.id ?? x.title)) }) : null,
                L && ae && P ? /* @__PURE__ */ t.jsx(
                  kn,
                  {
                    ref: Y,
                    title: j.title,
                    style: {
                      position: "fixed",
                      top: Math.round(P.top),
                      left: Math.round(P.right + 12)
                    },
                    onMouseEnter: () => {
                      oe.current = !0, ce.current.active = !1, D();
                    },
                    onMouseLeave: () => {
                      oe.current = !1, ne(120);
                    },
                    children: (R = j.children) == null ? void 0 : R.map((x) => /* @__PURE__ */ t.jsx("div", { children: /* @__PURE__ */ t.jsxs(
                      "button",
                      {
                        type: "button",
                        className: C(
                          v.child,
                          x.active && v.childActive,
                          x.disabled && v.childDisabled
                        ),
                        disabled: x.disabled,
                        onClick: x.disabled ? void 0 : () => {
                          var k;
                          m == null || m(x, j), (k = x.onClick) == null || k.call(x);
                        },
                        children: [
                          x.icon && x.showIcon !== !1 ? /* @__PURE__ */ t.jsx("span", { className: v.childIcon, children: x.icon }) : null,
                          /* @__PURE__ */ t.jsx("span", { className: v.childText, children: x.title })
                        ]
                      }
                    ) }, x.id ?? x.title))
                  }
                ) : null
              ]
            },
            j.id
          );
        }) }),
        /* @__PURE__ */ t.jsx(
          sr,
          {
            collapsed: N,
            version: c == null ? void 0 : c.version,
            logo: /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
              c != null && c.logoCollapsedSrc && N ? /* @__PURE__ */ t.jsx("img", { src: c.logoCollapsedSrc, alt: c.logoAlt ?? "Logo", width: c.logoCollapsedWidth ?? 32 }) : null,
              c != null && c.logoExpandedSrc && !N ? /* @__PURE__ */ t.jsx("img", { src: c.logoExpandedSrc, alt: c.logoAlt ?? "Logo", width: c.logoExpandedWidth ?? 131 }) : null
            ] }),
            toggle: c != null && c.toggleButton ? c.toggleButton : /* @__PURE__ */ t.jsx(
              nt,
              {
                "aria-label": N ? (c == null ? void 0 : c.toggleCollapsedLabel) ?? "Expand" : (c == null ? void 0 : c.toggleExpandedLabel) ?? "Collapse",
                variant: "tertiary",
                textColor: "--ui2-content-secondary",
                onClick: () => ve(!N),
                children: N ? /* @__PURE__ */ t.jsx(Kn, { size: 18 }) : /* @__PURE__ */ t.jsx(Vn, { size: 18 })
              }
            )
          }
        )
      ]
    }
  );
}
function Bl({ collapsed: e = !1, className: r, ...s }) {
  return /* @__PURE__ */ t.jsx(
    "div",
    {
      "data-ui2-component": "SidebarShell",
      "data-collapsed": e ? "true" : "false",
      className: C(v.root, e && v.collapsed, r),
      ...s
    }
  );
}
function Vl(e) {
  return /* @__PURE__ */ t.jsx("div", { "data-ui2-component": "SidebarHeader", className: C(v.header, e.className), ...e });
}
function Kl({
  initials: e,
  name: r,
  username: s,
  collapsed: o = !1,
  className: i,
  ...l
}) {
  return /* @__PURE__ */ t.jsxs("button", { type: "button", className: C(v.accountButton, i), ...l, children: [
    /* @__PURE__ */ t.jsx("div", { className: v.accountAvatar, children: e }),
    o ? null : /* @__PURE__ */ t.jsxs("div", { className: v.accountInfo, children: [
      /* @__PURE__ */ t.jsx("div", { className: v.accountName, children: r }),
      /* @__PURE__ */ t.jsx("div", { className: v.accountUsername, children: s })
    ] })
  ] });
}
function Hl({ icon: e, label: r, active: s, disabled: o, className: i, ...l }) {
  return /* @__PURE__ */ t.jsx(
    "button",
    {
      type: "button",
      "aria-label": r,
      disabled: o,
      className: C(
        v.headerButton,
        s && v.headerButtonActive,
        o && v.headerButtonDisabled,
        i
      ),
      ...l,
      children: e
    }
  );
}
function Ul({
  icon: e,
  label: r,
  compact: s = !1,
  active: o,
  disabled: i,
  pseudoHover: l,
  chevron: c,
  className: f,
  ...h
}) {
  return /* @__PURE__ */ t.jsxs(
    "button",
    {
      type: "button",
      className: C(
        v.menuButton,
        s && v.menuButtonCompact,
        o && v.menuButtonActive,
        i && v.menuButtonDisabled,
        l && v.menuButtonPseudoHover,
        f
      ),
      disabled: i,
      ...h,
      children: [
        /* @__PURE__ */ t.jsx("span", { className: v.menuButtonIcon, children: e }),
        s ? null : /* @__PURE__ */ t.jsx("span", { className: v.menuButtonText, children: r }),
        !s && c ? /* @__PURE__ */ t.jsx("span", { className: v.menuButtonChevron, children: c }) : null
      ]
    }
  );
}
function Gl({ label: e, icon: r, active: s, disabled: o, className: i, ...l }) {
  return /* @__PURE__ */ t.jsxs(
    "button",
    {
      type: "button",
      className: C(v.child, s && v.childActive, o && v.childDisabled, i),
      disabled: o,
      ...l,
      children: [
        r ? /* @__PURE__ */ t.jsx("span", { className: v.childIcon, children: r }) : null,
        /* @__PURE__ */ t.jsx("span", { className: v.childText, children: e })
      ]
    }
  );
}
function Yl({ collapsed: e = !1, version: r, logo: s, toggle: o, className: i, ...l }) {
  return /* @__PURE__ */ t.jsxs(
    "div",
    {
      "data-ui2-component": "SidebarFooter",
      className: C(v.footer, !e && v.footerExpanded, e && v.footerCollapsed, i),
      ...l,
      children: [
        !e && r ? /* @__PURE__ */ t.jsxs("div", { className: v.version, children: [
          "v. ",
          r
        ] }) : null,
        /* @__PURE__ */ t.jsxs("div", { className: v.footerBottom, children: [
          /* @__PURE__ */ t.jsx("div", { className: v.footerLogo, children: s }),
          o
        ] })
      ]
    }
  );
}
const Mn = "sidebar-open-groups", In = "sidebar-scroll-position";
function Tn(e, r) {
  return `${e}::${r}`;
}
function Xl({
  collapsed: e,
  onToggle: r,
  blocks: s,
  activePath: o,
  onNavigate: i,
  account: l,
  className: c,
  style: f,
  persistOpenGroups: h = !0,
  persistScroll: y = !0,
  showFooter: p = !0,
  showChildIcons: m = !1,
  logoExpandedSrc: b,
  logoCollapsedSrc: M,
  logoAlt: E,
  logoExpandedWidth: N,
  logoCollapsedWidth: I
}) {
  const w = Q(null), [P, ee] = G(void 0), [oe, Y] = G(null), [pe, ce] = G(null), J = Q(!1), je = Q(null), $ = Q(null), te = Q({ active: !1 }), ve = Q(null), ue = Ue((B) => {
    if (!B) return "";
    const [R] = B.split(/[?#]/);
    return R;
  }, []), O = o ?? P, D = ue(O), ne = he(() => {
    const B = /* @__PURE__ */ new Set();
    return s.forEach((R) => {
      R.groups.forEach((x) => {
        x.items.some((k) => {
          const T = ue(k.path);
          return !D || !T ? !1 : D === T || D.startsWith(`${T}/`);
        }) && B.add(Tn(R.name, x.title));
      });
    }), B;
  }, [s, O]), [Se, j] = G(() => {
    if (!h)
      return new Set(ne);
    try {
      const B = sessionStorage.getItem(Mn);
      if (B)
        return new Set(JSON.parse(B));
    } catch {
    }
    return new Set(ne);
  });
  fe(() => {
    ne.size !== 0 && j((B) => {
      const R = new Set(B);
      return ne.forEach((x) => R.add(x)), R;
    });
  }, [ne]), fe(() => {
    h && sessionStorage.setItem(Mn, JSON.stringify(Array.from(Se)));
  }, [Se, h]), fe(() => {
    if (!y || !w.current) return;
    const B = sessionStorage.getItem(In);
    B && (w.current.scrollTop = Number.parseInt(B, 10) || 0);
  }, [y]);
  const L = Ue((B, R) => {
    Y(B), ce(R), $.current = R;
  }, []), H = Ue(() => {
    J.current || (Y(null), ce(null));
  }, []), ae = Ue(() => {
    ve.current && (window.clearTimeout(ve.current), ve.current = null);
  }, []), ke = Ue(
    (B = 260) => {
      ae(), ve.current = window.setTimeout(() => {
        J.current || (te.current.active = !1, H());
      }, B);
    },
    [ae, H]
  );
  fe(() => {
    if (!e || !oe)
      return;
    const B = (R) => {
      if (!te.current.active || J.current || !je.current || !$.current) return;
      const x = je.current.getBoundingClientRect(), k = { x: R.clientX, y: R.clientY };
      tr(k, $.current, x, 10) ? ae() : (te.current.active = !1, H());
    };
    return window.addEventListener("mousemove", B), () => window.removeEventListener("mousemove", B);
  }, [oe, e, ae, H]), fe(() => () => ae(), [ae]), fe(() => {
    if (!y || !w.current) return;
    const B = w.current, R = () => {
      sessionStorage.setItem(In, String(B.scrollTop));
    };
    return B.addEventListener("scroll", R), () => B.removeEventListener("scroll", R);
  }, [y]), fe(() => {
    const B = (R) => {
      (R.metaKey || R.ctrlKey) && R.key.toLowerCase() === "b" && (R.preventDefault(), r());
    };
    return window.addEventListener("keydown", B), () => window.removeEventListener("keydown", B);
  }, [r]);
  const Te = (B) => {
    j((R) => {
      const x = new Set(R);
      return x.has(B) ? x.delete(B) : x.add(B), x;
    });
  };
  return /* @__PURE__ */ t.jsxs(Bl, { collapsed: e, className: c, style: f, children: [
    /* @__PURE__ */ t.jsx("div", { className: v.header, children: l ? /* @__PURE__ */ t.jsx(
      nr,
      {
        initials: l.initials,
        name: l.name,
        username: l.role,
        collapsed: e,
        onClick: l.onClick
      }
    ) : null }),
    /* @__PURE__ */ t.jsx("div", { ref: w, className: v.nav, children: s.map((B) => /* @__PURE__ */ t.jsxs("div", { className: v.section, children: [
      e ? null : /* @__PURE__ */ t.jsx("div", { className: v.sectionLabel, children: B.name }),
      B.groups.map((R) => {
        const x = Tn(B.name, R.title), k = Se.has(x), T = e && oe === x && R.items.length > 0, de = ne.has(x), Re = de;
        return /* @__PURE__ */ t.jsxs(
          "div",
          {
            className: v.menuItem,
            onMouseEnter: (z) => {
              !e || R.items.length === 0 || (te.current.active = !1, ae(), L(x, z.currentTarget.getBoundingClientRect()));
            },
            onMouseLeave: () => {
              if (e) {
                if (R.items.length === 0) {
                  H();
                  return;
                }
                te.current.active = !0, ke();
              }
            },
            children: [
              /* @__PURE__ */ t.jsx(
                rr,
                {
                  id: `ui2-sidebar-compat-${x}`,
                  icon: R.icon,
                  label: R.title,
                  compact: e,
                  active: e ? Re : de,
                  expanded: k,
                  chevron: e ? void 0 : k ? /* @__PURE__ */ t.jsx(yn, { size: 16 }) : /* @__PURE__ */ t.jsx(qt, { size: 16 }),
                  onClick: () => {
                    e || Te(x);
                  },
                  onMouseEnter: (z) => {
                    !e || R.items.length === 0 || (te.current.active = !1, ae(), L(x, z.currentTarget.getBoundingClientRect()));
                  },
                  onMouseLeave: () => {
                    if (e) {
                      if (R.items.length === 0) {
                        H();
                        return;
                      }
                      te.current.active = !0, ke();
                    }
                  },
                  onFocus: () => {
                    var ge;
                    if (!e || R.items.length === 0) return;
                    const z = (ge = document.getElementById(`ui2-sidebar-compat-${x}`)) == null ? void 0 : ge.getBoundingClientRect();
                    z && L(x, z);
                  }
                }
              ),
              !e && k ? /* @__PURE__ */ t.jsx("div", { className: v.children, children: R.items.map((z) => {
                const ge = D ? D === ue(z.path) : !1;
                return /* @__PURE__ */ t.jsxs(
                  "button",
                  {
                    type: "button",
                    className: C(
                      v.child,
                      ge && v.childActive,
                      z.disabled && v.childDisabled
                    ),
                    disabled: z.disabled,
                    onClick: z.disabled ? void 0 : () => {
                      ee(z.path), i == null || i(z.path);
                    },
                    children: [
                      m && z.icon ? /* @__PURE__ */ t.jsx("span", { className: v.childIcon, children: z.icon }) : null,
                      /* @__PURE__ */ t.jsx("span", { className: v.childText, children: z.title })
                    ]
                  },
                  z.path
                );
              }) }) : null,
              e && T && pe ? /* @__PURE__ */ t.jsx(
                kn,
                {
                  ref: je,
                  title: R.title,
                  style: {
                    position: "fixed",
                    top: Math.round(pe.top),
                    left: Math.round(pe.right + 12)
                  },
                  onMouseEnter: () => {
                    J.current = !0, te.current.active = !1, ae();
                  },
                  onMouseLeave: () => {
                    J.current = !1, ke(120);
                  },
                  children: R.items.map((z) => {
                    const ge = D ? D === ue(z.path) : !1;
                    return /* @__PURE__ */ t.jsxs(
                      "button",
                      {
                        type: "button",
                        className: C(
                          v.child,
                          ge && v.childActive,
                          z.disabled && v.childDisabled
                        ),
                        disabled: z.disabled,
                        onClick: z.disabled ? void 0 : () => {
                          ee(z.path), i == null || i(z.path);
                        },
                        children: [
                          m && z.icon ? /* @__PURE__ */ t.jsx("span", { className: v.childIcon, children: z.icon }) : null,
                          /* @__PURE__ */ t.jsx("span", { className: v.childText, children: z.title })
                        ]
                      },
                      z.path
                    );
                  })
                }
              ) : null
            ]
          },
          x
        );
      })
    ] }, B.name)) }),
    p ? /* @__PURE__ */ t.jsx(
      sr,
      {
        collapsed: e,
        logo: /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
          M && e ? /* @__PURE__ */ t.jsx(
            "img",
            {
              src: M,
              alt: E ?? "Logo",
              width: I ?? 32
            }
          ) : null,
          b && !e ? /* @__PURE__ */ t.jsx(
            "img",
            {
              src: b,
              alt: E ?? "Logo",
              width: N ?? 131
            }
          ) : null
        ] }),
        toggle: /* @__PURE__ */ t.jsx(
          nt,
          {
            variant: "tertiary",
            onClick: r,
            "aria-label": e ? "Expand sidebar" : "Collapse sidebar",
            textColor: "--ui2-content-secondary",
            children: e ? /* @__PURE__ */ t.jsx(Kn, { size: 18 }) : /* @__PURE__ */ t.jsx(Vn, { size: 18 })
          }
        )
      }
    ) : null
  ] });
}
export {
  Dn as Button,
  nt as ButtonIcon,
  wi as Card,
  Mi as CardCompat,
  Dl as CardHoverActions,
  Ei as CardKpisBlock,
  Ll as CardListCompat,
  Si as CardSizeCurveBlock,
  Ni as CardTitleBlock,
  $l as Chip,
  zl as ClusterBadge,
  ei as DataContainer,
  uo as DataTable,
  lo as DataTableCell,
  Il as DataTableCompat,
  _a as KPICard,
  Al as ProgressBar,
  Ol as SegmentedControl,
  Va as SegmentedControlOption,
  Fl as Sidebar,
  Kl as SidebarAccountButton,
  Gl as SidebarChildButton,
  Xl as SidebarCompat,
  sr as SidebarFooterPart,
  Yl as SidebarFooterSection,
  Vl as SidebarHeader,
  Hl as SidebarHeaderButton,
  Wl as SidebarIconButton,
  rr as SidebarItem,
  Sl as SidebarNav,
  Ul as SidebarNavButton,
  El as SidebarPinnedButtons,
  kn as SidebarPopover,
  nr as SidebarProfile,
  Bl as SidebarShell,
  Tl as StatusBadge,
  Aa as Tag
};
