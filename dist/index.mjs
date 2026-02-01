import * as xe from "react";
import Bn, { forwardRef as xn, createElement as ln, useContext as qt, createContext as Jt, useState as H, useEffect as ye, useRef as te, useMemo as oe, Children as pn, isValidElement as Qn, Fragment as Rn, useCallback as yt } from "react";
import { createPortal as er } from "react-dom";
var hn = { exports: {} }, It = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cn;
function tr() {
  if (Cn) return It;
  Cn = 1;
  var e = Bn, r = Symbol.for("react.element"), s = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, l = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(f, v, x) {
    var h, g = {}, y = null, R = null;
    x !== void 0 && (y = "" + x), v.key !== void 0 && (y = "" + v.key), v.ref !== void 0 && (R = v.ref);
    for (h in v) o.call(v, h) && !c.hasOwnProperty(h) && (g[h] = v[h]);
    if (f && f.defaultProps) for (h in v = f.defaultProps, v) g[h] === void 0 && (g[h] = v[h]);
    return { $$typeof: r, type: f, key: y, ref: R, props: g, _owner: l.current };
  }
  return It.Fragment = s, It.jsx = i, It.jsxs = i, It;
}
var $t = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nn;
function nr() {
  return Nn || (Nn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Bn, r = Symbol.for("react.element"), s = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), f = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), R = Symbol.for("react.offscreen"), S = Symbol.iterator, k = "@@iterator";
    function M(n) {
      if (n === null || typeof n != "object")
        return null;
      var d = S && n[S] || n[k];
      return typeof d == "function" ? d : null;
    }
    var w = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function z(n) {
      {
        for (var d = arguments.length, m = new Array(d > 1 ? d - 1 : 0), N = 1; N < d; N++)
          m[N - 1] = arguments[N];
        q("error", n, m);
      }
    }
    function q(n, d, m) {
      {
        var N = w.ReactDebugCurrentFrame, L = N.getStackAddendum();
        L !== "" && (d += "%s", m = m.concat([L]));
        var F = m.map(function(P) {
          return String(P);
        });
        F.unshift("Warning: " + d), Function.prototype.apply.call(console[n], console, F);
      }
    }
    var ne = !1, Y = !1, he = !1, re = !1, ee = !1, we;
    we = Symbol.for("react.module.reference");
    function D(n) {
      return !!(typeof n == "string" || typeof n == "function" || n === o || n === c || ee || n === l || n === x || n === h || re || n === R || ne || Y || he || typeof n == "object" && n !== null && (n.$$typeof === y || n.$$typeof === g || n.$$typeof === i || n.$$typeof === f || n.$$typeof === v || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      n.$$typeof === we || n.getModuleId !== void 0));
    }
    function ae(n, d, m) {
      var N = n.displayName;
      if (N)
        return N;
      var L = d.displayName || d.name || "";
      return L !== "" ? m + "(" + L + ")" : m;
    }
    function _e(n) {
      return n.displayName || "Context";
    }
    function de(n) {
      if (n == null)
        return null;
      if (typeof n.tag == "number" && z("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof n == "function")
        return n.displayName || n.name || null;
      if (typeof n == "string")
        return n;
      switch (n) {
        case o:
          return "Fragment";
        case s:
          return "Portal";
        case c:
          return "Profiler";
        case l:
          return "StrictMode";
        case x:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case f:
            var d = n;
            return _e(d) + ".Consumer";
          case i:
            var m = n;
            return _e(m._context) + ".Provider";
          case v:
            return ae(n, n.render, "ForwardRef");
          case g:
            var N = n.displayName || null;
            return N !== null ? N : de(n.type) || "Memo";
          case y: {
            var L = n, F = L._payload, P = L._init;
            try {
              return de(P(F));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var $ = Object.assign, K = 0, le, Fe, b, O, G, be, Pe;
    function Ve() {
    }
    Ve.__reactDisabledLog = !0;
    function et() {
      {
        if (K === 0) {
          le = console.log, Fe = console.info, b = console.warn, O = console.error, G = console.group, be = console.groupCollapsed, Pe = console.groupEnd;
          var n = {
            configurable: !0,
            enumerable: !0,
            value: Ve,
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
        K++;
      }
    }
    function qe() {
      {
        if (K--, K === 0) {
          var n = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: $({}, n, {
              value: le
            }),
            info: $({}, n, {
              value: Fe
            }),
            warn: $({}, n, {
              value: b
            }),
            error: $({}, n, {
              value: O
            }),
            group: $({}, n, {
              value: G
            }),
            groupCollapsed: $({}, n, {
              value: be
            }),
            groupEnd: $({}, n, {
              value: Pe
            })
          });
        }
        K < 0 && z("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var E = w.ReactCurrentDispatcher, C;
    function W(n, d, m) {
      {
        if (C === void 0)
          try {
            throw Error();
          } catch (L) {
            var N = L.stack.trim().match(/\n( *(at )?)/);
            C = N && N[1] || "";
          }
        return `
` + C + n;
      }
    }
    var ie = !1, Ee;
    {
      var Te = typeof WeakMap == "function" ? WeakMap : Map;
      Ee = new Te();
    }
    function Ie(n, d) {
      if (!n || ie)
        return "";
      {
        var m = Ee.get(n);
        if (m !== void 0)
          return m;
      }
      var N;
      ie = !0;
      var L = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var F;
      F = E.current, E.current = null, et();
      try {
        if (d) {
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
            } catch (pe) {
              N = pe;
            }
            Reflect.construct(n, [], P);
          } else {
            try {
              P.call();
            } catch (pe) {
              N = pe;
            }
            n.call(P.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (pe) {
            N = pe;
          }
          n();
        }
      } catch (pe) {
        if (pe && N && typeof pe.stack == "string") {
          for (var B = pe.stack.split(`
`), ue = N.stack.split(`
`), X = B.length - 1, J = ue.length - 1; X >= 1 && J >= 0 && B[X] !== ue[J]; )
            J--;
          for (; X >= 1 && J >= 0; X--, J--)
            if (B[X] !== ue[J]) {
              if (X !== 1 || J !== 1)
                do
                  if (X--, J--, J < 0 || B[X] !== ue[J]) {
                    var fe = `
` + B[X].replace(" at new ", " at ");
                    return n.displayName && fe.includes("<anonymous>") && (fe = fe.replace("<anonymous>", n.displayName)), typeof n == "function" && Ee.set(n, fe), fe;
                  }
                while (X >= 1 && J >= 0);
              break;
            }
        }
      } finally {
        ie = !1, E.current = F, qe(), Error.prepareStackTrace = L;
      }
      var Oe = n ? n.displayName || n.name : "", Ze = Oe ? W(Oe) : "";
      return typeof n == "function" && Ee.set(n, Ze), Ze;
    }
    function U(n, d, m) {
      return Ie(n, !1);
    }
    function Ot(n) {
      var d = n.prototype;
      return !!(d && d.isReactComponent);
    }
    function tt(n, d, m) {
      if (n == null)
        return "";
      if (typeof n == "function")
        return Ie(n, Ot(n));
      if (typeof n == "string")
        return W(n);
      switch (n) {
        case x:
          return W("Suspense");
        case h:
          return W("SuspenseList");
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case v:
            return U(n.render);
          case g:
            return tt(n.type, d, m);
          case y: {
            var N = n, L = N._payload, F = N._init;
            try {
              return tt(F(L), d, m);
            } catch {
            }
          }
        }
      return "";
    }
    var je = Object.prototype.hasOwnProperty, Se = {}, _t = w.ReactDebugCurrentFrame;
    function $e(n) {
      if (n) {
        var d = n._owner, m = tt(n.type, n._source, d ? d.type : null);
        _t.setExtraStackFrame(m);
      } else
        _t.setExtraStackFrame(null);
    }
    function Zt(n, d, m, N, L) {
      {
        var F = Function.call.bind(je);
        for (var P in n)
          if (F(n, P)) {
            var B = void 0;
            try {
              if (typeof n[P] != "function") {
                var ue = Error((N || "React class") + ": " + m + " type `" + P + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[P] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ue.name = "Invariant Violation", ue;
              }
              B = n[P](d, P, N, m, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (X) {
              B = X;
            }
            B && !(B instanceof Error) && ($e(L), z("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", N || "React class", m, P, typeof B), $e(null)), B instanceof Error && !(B.message in Se) && (Se[B.message] = !0, $e(L), z("Failed %s type: %s", m, B.message), $e(null));
          }
      }
    }
    var Qt = Array.isArray;
    function kt(n) {
      return Qt(n);
    }
    function en(n) {
      {
        var d = typeof Symbol == "function" && Symbol.toStringTag, m = d && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return m;
      }
    }
    function tn(n) {
      try {
        return Wt(n), !1;
      } catch {
        return !0;
      }
    }
    function Wt(n) {
      return "" + n;
    }
    function Lt(n) {
      if (tn(n))
        return z("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", en(n)), Wt(n);
    }
    var Ct = w.ReactCurrentOwner, me = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Nt, ze;
    function wt(n) {
      if (je.call(n, "ref")) {
        var d = Object.getOwnPropertyDescriptor(n, "ref").get;
        if (d && d.isReactWarning)
          return !1;
      }
      return n.ref !== void 0;
    }
    function it(n) {
      if (je.call(n, "key")) {
        var d = Object.getOwnPropertyDescriptor(n, "key").get;
        if (d && d.isReactWarning)
          return !1;
      }
      return n.key !== void 0;
    }
    function nn(n, d) {
      typeof n.ref == "string" && Ct.current;
    }
    function ct(n, d) {
      {
        var m = function() {
          Nt || (Nt = !0, z("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", d));
        };
        m.isReactWarning = !0, Object.defineProperty(n, "key", {
          get: m,
          configurable: !0
        });
      }
    }
    function Et(n, d) {
      {
        var m = function() {
          ze || (ze = !0, z("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", d));
        };
        m.isReactWarning = !0, Object.defineProperty(n, "ref", {
          get: m,
          configurable: !0
        });
      }
    }
    var ke = function(n, d, m, N, L, F, P) {
      var B = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: n,
        key: d,
        ref: m,
        props: P,
        // Record the component responsible for creating this element.
        _owner: F
      };
      return B._store = {}, Object.defineProperty(B._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(B, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: N
      }), Object.defineProperty(B, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: L
      }), Object.freeze && (Object.freeze(B.props), Object.freeze(B)), B;
    };
    function pt(n, d, m, N, L) {
      {
        var F, P = {}, B = null, ue = null;
        m !== void 0 && (Lt(m), B = "" + m), it(d) && (Lt(d.key), B = "" + d.key), wt(d) && (ue = d.ref, nn(d, L));
        for (F in d)
          je.call(d, F) && !me.hasOwnProperty(F) && (P[F] = d[F]);
        if (n && n.defaultProps) {
          var X = n.defaultProps;
          for (F in X)
            P[F] === void 0 && (P[F] = X[F]);
        }
        if (B || ue) {
          var J = typeof n == "function" ? n.displayName || n.name || "Unknown" : n;
          B && ct(P, J), ue && Et(P, J);
        }
        return ke(n, B, ue, L, N, Ct.current, P);
      }
    }
    var dt = w.ReactCurrentOwner, se = w.ReactDebugCurrentFrame;
    function Ce(n) {
      if (n) {
        var d = n._owner, m = tt(n.type, n._source, d ? d.type : null);
        se.setExtraStackFrame(m);
      } else
        se.setExtraStackFrame(null);
    }
    var Ae;
    Ae = !1;
    function nt(n) {
      return typeof n == "object" && n !== null && n.$$typeof === r;
    }
    function Ft() {
      {
        if (dt.current) {
          var n = de(dt.current.type);
          if (n)
            return `

Check the render method of \`` + n + "`.";
        }
        return "";
      }
    }
    function ht(n) {
      return "";
    }
    var Vt = {};
    function mt(n) {
      {
        var d = Ft();
        if (!d) {
          var m = typeof n == "string" ? n : n.displayName || n.name;
          m && (d = `

Check the top-level render call using <` + m + ">.");
        }
        return d;
      }
    }
    function rt(n, d) {
      {
        if (!n._store || n._store.validated || n.key != null)
          return;
        n._store.validated = !0;
        var m = mt(d);
        if (Vt[m])
          return;
        Vt[m] = !0;
        var N = "";
        n && n._owner && n._owner !== dt.current && (N = " It was passed a child from " + de(n._owner.type) + "."), Ce(n), z('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', m, N), Ce(null);
      }
    }
    function Je(n, d) {
      {
        if (typeof n != "object")
          return;
        if (kt(n))
          for (var m = 0; m < n.length; m++) {
            var N = n[m];
            nt(N) && rt(N, d);
          }
        else if (nt(n))
          n._store && (n._store.validated = !0);
        else if (n) {
          var L = M(n);
          if (typeof L == "function" && L !== n.entries)
            for (var F = L.call(n), P; !(P = F.next()).done; )
              nt(P.value) && rt(P.value, d);
        }
      }
    }
    function Ne(n) {
      {
        var d = n.type;
        if (d == null || typeof d == "string")
          return;
        var m;
        if (typeof d == "function")
          m = d.propTypes;
        else if (typeof d == "object" && (d.$$typeof === v || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        d.$$typeof === g))
          m = d.propTypes;
        else
          return;
        if (m) {
          var N = de(d);
          Zt(m, n.props, "prop", N, n);
        } else if (d.PropTypes !== void 0 && !Ae) {
          Ae = !0;
          var L = de(d);
          z("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", L || "Unknown");
        }
        typeof d.getDefaultProps == "function" && !d.getDefaultProps.isReactClassApproved && z("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function De(n) {
      {
        for (var d = Object.keys(n.props), m = 0; m < d.length; m++) {
          var N = d[m];
          if (N !== "children" && N !== "key") {
            Ce(n), z("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", N), Ce(null);
            break;
          }
        }
        n.ref !== null && (Ce(n), z("Invalid attribute `ref` supplied to `React.Fragment`."), Ce(null));
      }
    }
    var Be = {};
    function ge(n, d, m, N, L, F) {
      {
        var P = D(n);
        if (!P) {
          var B = "";
          (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (B += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ue = ht();
          ue ? B += ue : B += Ft();
          var X;
          n === null ? X = "null" : kt(n) ? X = "array" : n !== void 0 && n.$$typeof === r ? (X = "<" + (de(n.type) || "Unknown") + " />", B = " Did you accidentally export a JSX literal instead of a component?") : X = typeof n, z("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", X, B);
        }
        var J = pt(n, d, m, L, F);
        if (J == null)
          return J;
        if (P) {
          var fe = d.children;
          if (fe !== void 0)
            if (N)
              if (kt(fe)) {
                for (var Oe = 0; Oe < fe.length; Oe++)
                  Je(fe[Oe], n);
                Object.freeze && Object.freeze(fe);
              } else
                z("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Je(fe, n);
        }
        if (je.call(d, "key")) {
          var Ze = de(n), pe = Object.keys(d).filter(function(a) {
            return a !== "key";
          }), zt = pe.length > 0 ? "{key: someKey, " + pe.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Be[Ze + zt]) {
            var Kt = pe.length > 0 ? "{" + pe.join(": ..., ") + ": ...}" : "{}";
            z(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, zt, Ze, Kt, Ze), Be[Ze + zt] = !0;
          }
        }
        return n === o ? De(J) : Ne(J), J;
      }
    }
    function gt(n, d, m) {
      return ge(n, d, m, !0);
    }
    function St(n, d, m) {
      return ge(n, d, m, !1);
    }
    var rn = St, sn = gt;
    $t.Fragment = o, $t.jsx = rn, $t.jsxs = sn;
  }()), $t;
}
process.env.NODE_ENV === "production" ? hn.exports = tr() : hn.exports = nr();
var t = hn.exports;
function wn(e, r) {
  if (typeof e == "function")
    return e(r);
  e != null && (e.current = r);
}
function rr(...e) {
  return (r) => {
    let s = !1;
    const o = e.map((l) => {
      const c = wn(l, r);
      return !s && typeof c == "function" && (s = !0), c;
    });
    if (s)
      return () => {
        for (let l = 0; l < o.length; l++) {
          const c = o[l];
          typeof c == "function" ? c() : wn(e[l], null);
        }
      };
  };
}
var sr = Symbol.for("react.lazy"), Xt = xe[" use ".trim().toString()];
function or(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function Mn(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === sr && "_payload" in e && or(e._payload);
}
// @__NO_SIDE_EFFECTS__
function ar(e) {
  const r = /* @__PURE__ */ ir(e), s = xe.forwardRef((o, l) => {
    let { children: c, ...i } = o;
    Mn(c) && typeof Xt == "function" && (c = Xt(c._payload));
    const f = xe.Children.toArray(c), v = f.find(dr);
    if (v) {
      const x = v.props.children, h = f.map((g) => g === v ? xe.Children.count(x) > 1 ? xe.Children.only(null) : xe.isValidElement(x) ? x.props.children : null : g);
      return /* @__PURE__ */ t.jsx(r, { ...i, ref: l, children: xe.isValidElement(x) ? xe.cloneElement(x, void 0, h) : null });
    }
    return /* @__PURE__ */ t.jsx(r, { ...i, ref: l, children: c });
  });
  return s.displayName = `${e}.Slot`, s;
}
var lr = /* @__PURE__ */ ar("Slot");
// @__NO_SIDE_EFFECTS__
function ir(e) {
  const r = xe.forwardRef((s, o) => {
    let { children: l, ...c } = s;
    if (Mn(l) && typeof Xt == "function" && (l = Xt(l._payload)), xe.isValidElement(l)) {
      const i = fr(l), f = ur(c, l.props);
      return l.type !== xe.Fragment && (f.ref = o ? rr(o, i) : i), xe.cloneElement(l, f);
    }
    return xe.Children.count(l) > 1 ? xe.Children.only(null) : null;
  });
  return r.displayName = `${e}.SlotClone`, r;
}
var cr = Symbol("radix.slottable");
function dr(e) {
  return xe.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === cr;
}
function ur(e, r) {
  const s = { ...r };
  for (const o in r) {
    const l = e[o], c = r[o];
    /^on[A-Z]/.test(o) ? l && c ? s[o] = (...f) => {
      const v = c(...f);
      return l(...f), v;
    } : l && (s[o] = l) : o === "style" ? s[o] = { ...l, ...c } : o === "className" && (s[o] = [l, c].filter(Boolean).join(" "));
  }
  return { ...e, ...s };
}
function fr(e) {
  var o, l;
  let r = (o = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : o.get, s = r && "isReactWarning" in r && r.isReactWarning;
  return s ? e.ref : (r = (l = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : l.get, s = r && "isReactWarning" in r && r.isReactWarning, s ? e.props.ref : e.props.ref || e.ref);
}
function Pn(e) {
  var r, s, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var l = e.length;
    for (r = 0; r < l; r++) e[r] && (s = Pn(e[r])) && (o && (o += " "), o += s);
  } else for (s in e) e[s] && (o && (o += " "), o += s);
  return o;
}
function j() {
  for (var e, r, s = 0, o = "", l = arguments.length; s < l; s++) (e = arguments[s]) && (r = Pn(e)) && (o && (o += " "), o += r);
  return o;
}
const vr = "_root_1j0me_1", _r = "_disabled_1j0me_29", pr = "_active_1j0me_72", hr = "_visual_1j0me_123", mr = "_block_1j0me_131", ot = {
  root: vr,
  disabled: _r,
  "size-m": "_size-m_1j0me_36",
  "size-l": "_size-l_1j0me_41",
  "variant-secondary": "_variant-secondary_1j0me_46",
  "variant-tertiary": "_variant-tertiary_1j0me_47",
  "variant-destructive": "_variant-destructive_1j0me_52",
  "variant-link": "_variant-link_1j0me_58",
  "variant-primary": "_variant-primary_1j0me_66",
  active: pr,
  visual: hr,
  block: mr
}, Tn = xn(function({
  as: r,
  asChild: s = !1,
  active: o = !1,
  block: l = !1,
  disabled: c = !1,
  size: i = "m",
  variant: f = "primary",
  icon: v,
  textColor: x,
  leadingVisual: h,
  trailingVisual: g,
  className: y,
  children: R,
  ...S
}, k) {
  const M = f === "default" ? "primary" : f === "outline" ? "secondary" : f === "ghost" ? "tertiary" : f, w = i === "default" || i === "sm" || i === "icon" ? "m" : i === "lg" ? "l" : i, z = s ? lr : r ?? "button", q = h ?? v;
  return /* @__PURE__ */ t.jsxs(
    z,
    {
      ref: k,
      className: j(
        ot.root,
        ot[`size-${w}`],
        ot[`variant-${M}`],
        o && ot.active,
        l && ot.block,
        c && ot.disabled,
        y
      ),
      style: x ? { "--ui2-button-text-color": `var(${x})` } : void 0,
      "data-ui2-component": "Button",
      disabled: !s && z === "button" ? c : void 0,
      "aria-disabled": s && c ? !0 : void 0,
      ...S,
      children: [
        q ? /* @__PURE__ */ t.jsx("span", { className: ot.visual, children: q }) : null,
        R,
        g ? /* @__PURE__ */ t.jsx("span", { className: ot.visual, children: g }) : null
      ]
    }
  );
}), gr = "_root_1xe83_1", xr = "_disabled_1xe83_24", yr = "_active_1xe83_31", br = "_icon_1xe83_146", At = {
  root: gr,
  disabled: xr,
  active: yr,
  "variant-secondary": "_variant-secondary_1xe83_43",
  "variant-tertiary": "_variant-tertiary_1xe83_44",
  "variant-inverted": "_variant-inverted_1xe83_45",
  "variant-destructive": "_variant-destructive_1xe83_49",
  "size-xs": "_size-xs_1xe83_120",
  "size-s": "_size-s_1xe83_127",
  "size-m": "_size-m_1xe83_134",
  "size-l": "_size-l_1xe83_140",
  icon: br
};
function lt({
  children: e,
  size: r = "m",
  variant: s = "primary",
  active: o = !1,
  disabled: l = !1,
  textColor: c,
  className: i,
  ...f
}) {
  const v = s === "default" ? "primary" : s === "outline" ? "secondary" : s === "ghost" || s === "link" ? "tertiary" : s;
  return /* @__PURE__ */ t.jsx(
    "button",
    {
      type: "button",
      disabled: l,
      className: j(
        At.root,
        At[`size-${r}`],
        v !== "primary" && At[`variant-${v}`],
        l && At.disabled,
        i
      ),
      "data-active": o ? "true" : "false",
      style: c ? { "--ui2-button-icon-text-color": `var(${c})` } : void 0,
      ...f,
      children: /* @__PURE__ */ t.jsx("span", { className: At.icon, children: e })
    }
  );
}
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var jr = {
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
const V = (e, r, s, o) => {
  const l = xn(
    ({ color: c = "currentColor", size: i = 24, stroke: f = 2, title: v, className: x, children: h, ...g }, y) => ln(
      "svg",
      {
        ref: y,
        ...jr[e],
        width: i,
        height: i,
        className: ["tabler-icon", `tabler-icon-${r}`, x].join(" "),
        ...e === "filled" ? {
          fill: c
        } : {
          strokeWidth: f,
          stroke: c
        },
        ...g
      },
      [
        v && ln("title", { key: "svg-title" }, v),
        ...o.map(([R, S]) => ln(R, S)),
        ...Array.isArray(h) ? h : [h]
      ]
    )
  );
  return l.displayName = `${s}`, l;
};
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kr = [["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0", key: "svg-0" }], ["path", { d: "M12 8v4", key: "svg-1" }], ["path", { d: "M12 16h.01", key: "svg-2" }]], Cr = V("outline", "alert-circle", "AlertCircle", kr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nr = [["path", { d: "M12 9v4", key: "svg-0" }], ["path", { d: "M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0", key: "svg-1" }], ["path", { d: "M12 16h.01", key: "svg-2" }]], wr = V("outline", "alert-triangle", "AlertTriangle", Nr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Er = [["path", { d: "M7 7l10 10", key: "svg-0" }], ["path", { d: "M17 8l0 9l-9 0", key: "svg-1" }]], Sr = V("outline", "arrow-down-right", "ArrowDownRight", Er);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zr = [["path", { d: "M7 5a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2l0 -10", key: "svg-0" }], ["path", { d: "M17 17v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2", key: "svg-1" }]], Br = V("outline", "box-multiple", "BoxMultiple", zr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rr = [["path", { d: "M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5", key: "svg-0" }], ["path", { d: "M12 12l8 -4.5", key: "svg-1" }], ["path", { d: "M12 12l0 9", key: "svg-2" }], ["path", { d: "M12 12l-8 -4.5", key: "svg-3" }]], Mr = V("outline", "box", "Box", Rr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pr = [["path", { d: "M3 21l18 0", key: "svg-0" }], ["path", { d: "M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4", key: "svg-1" }], ["path", { d: "M5 21l0 -10.15", key: "svg-2" }], ["path", { d: "M19 21l0 -10.15", key: "svg-3" }], ["path", { d: "M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4", key: "svg-4" }]], In = V("outline", "building-store", "BuildingStore", Pr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tr = [["path", { d: "M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12", key: "svg-0" }], ["path", { d: "M16 3l0 4", key: "svg-1" }], ["path", { d: "M8 3l0 4", key: "svg-2" }], ["path", { d: "M4 11l16 0", key: "svg-3" }], ["path", { d: "M8 15h2v2h-2l0 -2", key: "svg-4" }]], Ir = V("outline", "calendar-event", "CalendarEvent", Tr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $r = [["path", { d: "M3 13a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -6", key: "svg-0" }], ["path", { d: "M15 9a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -10", key: "svg-1" }], ["path", { d: "M9 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -14", key: "svg-2" }], ["path", { d: "M4 20h14", key: "svg-3" }]], Ar = V("outline", "chart-bar", "ChartBar", $r);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dr = [["path", { d: "M5 12l5 5l10 -10", key: "svg-0" }]], Or = V("outline", "check", "Check", Dr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wr = [["path", { d: "M6 9l6 6l6 -6", key: "svg-0" }]], mn = V("outline", "chevron-down", "ChevronDown", Wr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lr = [["path", { d: "M15 6l-6 6l6 6", key: "svg-0" }]], $n = V("outline", "chevron-left", "ChevronLeft", Lr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fr = [["path", { d: "M9 6l6 6l-6 6", key: "svg-0" }]], An = V("outline", "chevron-right", "ChevronRight", Fr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vr = [["path", { d: "M6 15l6 -6l6 6", key: "svg-0" }]], Dn = V("outline", "chevron-up", "ChevronUp", Vr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kr = [["path", { d: "M11 7l-5 5l5 5", key: "svg-0" }], ["path", { d: "M17 7l-5 5l5 5", key: "svg-1" }]], Hr = V("outline", "chevrons-left", "ChevronsLeft", Kr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ur = [["path", { d: "M7 7l5 5l-5 5", key: "svg-0" }], ["path", { d: "M13 7l5 5l-5 5", key: "svg-1" }]], Yr = V("outline", "chevrons-right", "ChevronsRight", Ur);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gr = [["path", { d: "M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666", key: "svg-0" }], ["path", { d: "M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1", key: "svg-1" }]], Xr = V("outline", "copy", "Copy", Gr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qr = [["path", { d: "M12 6l4 6l5 -4l-2 10h-14l-2 -10l5 4l4 -6", key: "svg-0" }]], Jr = V("outline", "crown", "Crown", qr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zr = [["path", { d: "M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2", key: "svg-0" }], ["path", { d: "M12 3v3m0 12v3", key: "svg-1" }]], Qr = V("outline", "currency-dollar", "CurrencyDollar", Zr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const es = [["path", { d: "M10.585 10.587a2 2 0 0 0 2.829 2.828", key: "svg-0" }], ["path", { d: "M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87", key: "svg-1" }], ["path", { d: "M3 3l18 18", key: "svg-2" }]], On = V("outline", "eye-off", "EyeOff", es);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ts = [["path", { d: "M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-0" }], ["path", { d: "M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6", key: "svg-1" }]], ns = V("outline", "eye", "Eye", ts);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rs = [["path", { d: "M12 20l-3 1v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v3", key: "svg-0" }], ["path", { d: "M16 19h6", key: "svg-1" }], ["path", { d: "M19 16v6", key: "svg-2" }]], Wn = V("outline", "filter-plus", "FilterPlus", rs);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ss = [["path", { d: "M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5", key: "svg-0" }], ["path", { d: "M12 12l8 -4.5", key: "svg-1" }], ["path", { d: "M12 12l0 9", key: "svg-2" }], ["path", { d: "M12 12l-8 -4.5", key: "svg-3" }], ["path", { d: "M16 5.25l-8 4.5", key: "svg-4" }]], os = V("outline", "package", "Package", ss);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const as = [["path", { d: "M3 3l18 18", key: "svg-0" }], ["path", { d: "M15 4.5l-3.249 3.249m-2.57 1.433l-2.181 .818l-1.5 1.5l7 7l1.5 -1.5l.82 -2.186m1.43 -2.563l3.25 -3.251", key: "svg-1" }], ["path", { d: "M9 15l-4.5 4.5", key: "svg-2" }], ["path", { d: "M14.5 4l5.5 5.5", key: "svg-3" }]], ls = V("outline", "pinned-off", "PinnedOff", as);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const is = [["path", { d: "M9 4v6l-2 4v2h10v-2l-2 -4v-6", key: "svg-0" }], ["path", { d: "M12 16l0 5", key: "svg-1" }], ["path", { d: "M8 4l8 0", key: "svg-2" }]], cs = V("outline", "pinned", "Pinned", is);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ds = [["path", { d: "M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2m0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2m-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6", key: "svg-0" }]], Ln = V("outline", "sparkles", "Sparkles", ds);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const us = [["path", { d: "M12 4l-8 4l8 4l8 -4l-8 -4", key: "svg-0" }], ["path", { d: "M4 12l8 4l8 -4", key: "svg-1" }], ["path", { d: "M4 16l8 4l8 -4", key: "svg-2" }]], fs = V("outline", "stack-2", "Stack2", us);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vs = [["path", { d: "M3 17l6 -6l4 4l8 -8", key: "svg-0" }], ["path", { d: "M14 7l7 0l0 7", key: "svg-1" }]], _s = V("outline", "trending-up", "TrendingUp", vs);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ps = [["path", { d: "M5 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-0" }], ["path", { d: "M15 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-1" }], ["path", { d: "M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5", key: "svg-2" }]], hs = V("outline", "truck", "Truck", ps);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ms = [["path", { d: "M18 6l-12 12", key: "svg-0" }], ["path", { d: "M6 6l12 12", key: "svg-1" }]], gs = V("outline", "x", "X", ms);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xs = [["path", { d: "M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-5 3.66a1 1 0 0 0 -1 1v5.585l-2.293 -2.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l4 4c.028 .028 .057 .054 .094 .083l.092 .064l.098 .052l.081 .034l.113 .034l.112 .02l.117 .006l.115 -.007l.114 -.02l.142 -.044l.113 -.054l.111 -.071a.939 .939 0 0 0 .112 -.097l4 -4l.083 -.094a1 1 0 0 0 -1.497 -1.32l-2.293 2.291v-5.584l-.007 -.117a1 1 0 0 0 -.993 -.883z", key: "svg-0" }]], ys = V("filled", "circle-arrow-down-filled", "CircleArrowDownFilled", xs);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bs = [["path", { d: "M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-4.98 3.66l-.163 .01l-.086 .016l-.142 .045l-.113 .054l-.07 .043l-.095 .071l-.058 .054l-4 4l-.083 .094a1 1 0 0 0 1.497 1.32l2.293 -2.293v5.586l.007 .117a1 1 0 0 0 1.993 -.117v-5.585l2.293 2.292l.094 .083a1 1 0 0 0 1.32 -1.497l-4 -4l-.082 -.073l-.089 -.064l-.113 -.062l-.081 -.034l-.113 -.034l-.112 -.02l-.098 -.006z", key: "svg-0" }]], js = V("filled", "circle-arrow-up-filled", "CircleArrowUpFilled", bs), ks = "_frame_1bemm_1", Cs = "_table_1bemm_9", Ns = "_scroll_1bemm_30", ws = "_tableInner_1bemm_50", Es = "_tableHead_1bemm_57", Ss = "_tableBody_1bemm_65", zs = "_headRow_1bemm_70", Bs = "_row_1bemm_77", Rs = "_columnGroup_1bemm_109", Ms = "_columnsPinnedStart_1bemm_115", Ps = "_columnsPinnedEnd_1bemm_126", Ts = "_columnsRegular_1bemm_137", Is = "_headCell_1bemm_187", $s = "_headContent_1bemm_224", As = "_headLabel_1bemm_236", Ds = "_headButton_1bemm_246", Os = "_sortButton_1bemm_266", Ws = "_resizeHotspot_1bemm_275", Ls = "_dropIndicator_1bemm_302", Fs = "_dropIndicatorStart_1bemm_312", Vs = "_cell_1bemm_317", Ks = "_cellContent_1bemm_327", Hs = "_ghost_1bemm_383", Us = "_ghostInner_1bemm_392", Ys = "_actionMenu_1bemm_406", Gs = "_actionList_1bemm_414", Xs = "_actionItem_1bemm_419", qs = "_tooltip_1bemm_441", Js = "_cellOutline_1bemm_465", T = {
  frame: ks,
  table: Cs,
  scroll: Ns,
  tableInner: ws,
  tableHead: Es,
  tableBody: Ss,
  headRow: zs,
  row: Bs,
  columnGroup: Rs,
  columnsPinnedStart: Ms,
  columnsPinnedEnd: Ps,
  columnsRegular: Ts,
  headCell: Is,
  headContent: $s,
  headLabel: As,
  headButton: Ds,
  sortButton: Os,
  resizeHotspot: Ws,
  dropIndicator: Ls,
  dropIndicatorStart: Fs,
  cell: Vs,
  cellContent: Ks,
  ghost: Hs,
  ghostInner: Us,
  actionMenu: Ys,
  actionList: Gs,
  actionItem: Xs,
  tooltip: qs,
  cellOutline: Js
}, Fn = Jt({});
function yn({
  onAfterSelect: e,
  children: r
}) {
  return /* @__PURE__ */ t.jsx(Fn.Provider, { value: { onAfterSelect: e }, children: r });
}
function bn({ children: e }) {
  return /* @__PURE__ */ t.jsx("div", { className: T.actionList, children: e });
}
function ft({
  onSelect: e,
  children: r,
  className: s
}) {
  const { onAfterSelect: o } = qt(Fn);
  return /* @__PURE__ */ t.jsx(
    "button",
    {
      type: "button",
      className: j(T.actionItem, s),
      onClick: () => {
        e == null || e(), o == null || o();
      },
      children: r
    }
  );
}
function jn({
  open: e,
  anchorRect: r,
  placement: s = "bottom-start",
  offset: o = 6,
  zIndex: l = 1e3,
  children: c
}) {
  const [i, f] = H(!1);
  if (ye(() => {
    f(!0);
  }, []), !e || !r || !i)
    return null;
  const v = {
    position: "fixed",
    zIndex: l
  }, x = s.endsWith("end") ? r.right : r.left, h = s.startsWith("top") ? r.top : r.bottom;
  return v.left = Math.round(x), v.top = Math.round(h + o), s.endsWith("end") && (v.transform = "translateX(-100%)"), s.startsWith("top") && (v.transform = `${v.transform ?? ""} translateY(-100%)`), er(/* @__PURE__ */ t.jsx("div", { style: v, children: c }), document.body);
}
function Vn({
  open: e,
  onOpenChange: r,
  host: s,
  children: o,
  className: l,
  zIndex: c
}) {
  const [i, f] = H(!1), v = te(null), x = te(null), h = e ?? i, [g, y] = H(null), R = (S) => {
    r ? r(S) : f(S);
  };
  return ye(() => {
    var S;
    h && y(((S = v.current) == null ? void 0 : S.getBoundingClientRect()) ?? null);
  }, [h]), ye(() => {
    if (!h) return;
    const S = (M) => {
      var w;
      M.key === "Escape" && (M.preventDefault(), R(!1), (w = v.current) == null || w.focus());
    }, k = (M) => {
      var z, q;
      const w = M.target;
      (z = x.current) != null && z.contains(w) || (q = v.current) != null && q.contains(w) || R(!1);
    };
    return window.addEventListener("keydown", S), window.addEventListener("mousedown", k), () => {
      window.removeEventListener("keydown", S), window.removeEventListener("mousedown", k);
    };
  }, [h]), /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    s({
      open: h,
      hostProps: {
        onClick: (S) => {
          S.preventDefault(), R(!h);
        },
        onKeyDown: (S) => {
          (S.key === "ArrowDown" || S.key === "ArrowUp") && (S.preventDefault(), R(!0));
        },
        "aria-haspopup": !0,
        "aria-expanded": h,
        ref: (S) => {
          v.current = S;
        }
      }
    }),
    /* @__PURE__ */ t.jsx(jn, { open: h, anchorRect: g, placement: "bottom-start", offset: 6, zIndex: c, children: /* @__PURE__ */ t.jsx("div", { ref: x, className: j(T.actionMenu, l), children: o }) })
  ] });
}
function Zs({
  content: e,
  children: r,
  delay: s = 200
}) {
  const [o, l] = H(!1), [c, i] = H(null), f = te(null), v = te(null);
  ye(() => () => {
    f.current && window.clearTimeout(f.current);
  }, []);
  const x = () => {
    e && (f.current && window.clearTimeout(f.current), f.current = window.setTimeout(() => {
      var g;
      i(((g = v.current) == null ? void 0 : g.getBoundingClientRect()) ?? null), l(!0);
    }, s));
  }, h = () => {
    f.current && window.clearTimeout(f.current), l(!1);
  };
  return /* @__PURE__ */ t.jsxs("div", { ref: v, onMouseEnter: x, onMouseLeave: h, children: [
    r,
    /* @__PURE__ */ t.jsx(jn, { open: o, anchorRect: c, placement: "top-start", offset: 6, children: /* @__PURE__ */ t.jsx("div", { className: T.tooltip, children: e }) })
  ] });
}
const Kn = Jt(null);
function Qs() {
  const e = qt(Kn);
  if (!e)
    throw new Error("DataTableContext is missing");
  return e;
}
const Hn = Jt(null);
function eo() {
  const e = qt(Hn);
  if (!e)
    throw new Error("DataTableCellContext is missing");
  return e;
}
function to({
  align: e,
  monospace: r,
  clickable: s = !1,
  active: o = !1,
  children: l,
  ...c
}) {
  const i = eo(), f = Qs(), v = te(null), [x, h] = H(!1), [g, y] = H(null), R = e ?? i.align, S = r ?? i.monospace, { value: k, rawValue: M, columnKey: w, filterKey: z, row: q, rowKey: ne } = i, Y = oe(() => {
    if (!w) return null;
    const $ = ne ?? (q ? f.getRowKey(q) : null);
    return $ == null ? null : `${$}:${w}`;
  }, [q, ne, w, f]), he = oe(() => z || (w && f.filterableColumnKeys.has(w) ? w : null), [z, w, f.filterableColumnKeys]), re = oe(() => {
    if (M == null)
      return !!(k && k.trim() && !["-", "—", "–"].includes(k.trim()));
    if (typeof M == "string") {
      const $ = M.trim();
      return !!($ && !["-", "—", "–"].includes($));
    }
    return typeof M == "number" || typeof M == "boolean" ? !0 : Array.isArray(M) ? M.length > 0 : typeof M == "object" ? Object.keys(M).length > 0 : !1;
  }, [M, k]);
  ye(() => {
    Y && h(f.activeContextMenuKey === Y);
  }, [Y, f.activeContextMenuKey]), ye(() => {
    if (!x) return;
    const $ = (le) => {
      var b;
      const Fe = le.target;
      (b = v.current) != null && b.contains(Fe) || ee();
    }, K = () => ee();
    return window.addEventListener("mousedown", $, !0), window.addEventListener("contextmenu", $, !0), window.addEventListener("scroll", K, !0), () => {
      window.removeEventListener("mousedown", $, !0), window.removeEventListener("contextmenu", $, !0), window.removeEventListener("scroll", K, !0);
    };
  }, [x]);
  const ee = () => {
    Y && f.activeContextMenuKey === Y && f.setActiveContextMenuKey(null);
  }, we = ($) => {
    if ($.preventDefault(), !Y || !re) return;
    if (f.activeContextMenuKey === Y) {
      ee();
      return;
    }
    const K = (v.current ?? $.currentTarget).getBoundingClientRect();
    y(K), f.setActiveContextMenuKey(Y);
  }, D = async () => {
    var K;
    const $ = M == null ? k : String(M);
    if ((K = navigator.clipboard) != null && K.writeText)
      await navigator.clipboard.writeText($);
    else {
      const le = document.createElement("textarea");
      le.value = $, le.style.position = "fixed", le.style.left = "-9999px", document.body.appendChild(le), le.focus(), le.select(), document.execCommand("copy"), le.remove();
    }
    ee();
  }, ae = () => {
    !w || !he || (f.filterByValue(w, he, M ?? k), ee());
  }, _e = o || x, de = oe(() => w ? f.pinnedColumnsStartKeys.includes(w) || f.pinnedColumnsEndKeys.includes(w) : !1, [w, f.pinnedColumnsStartKeys, f.pinnedColumnsEndKeys]);
  return /* @__PURE__ */ t.jsxs(
    "div",
    {
      ref: v,
      role: s ? "button" : void 0,
      tabIndex: s ? 0 : void 0,
      "data-align": R,
      "data-monospace": S ? "true" : "false",
      "data-clickable": s ? "true" : "false",
      className: T.cell,
      onContextMenu: we,
      ...c,
      children: [
        /* @__PURE__ */ t.jsx("span", { className: T.cellContent, "data-cell-content": "true", children: l }),
        /* @__PURE__ */ t.jsx("span", { className: T.cellOutline, "data-active": _e ? "true" : "false" }),
        /* @__PURE__ */ t.jsx(
          jn,
          {
            open: x && re,
            anchorRect: g,
            placement: "bottom-start",
            zIndex: de ? 220 : 140,
            children: /* @__PURE__ */ t.jsx("div", { className: T.actionMenu, children: /* @__PURE__ */ t.jsx(yn, { onAfterSelect: ee, children: /* @__PURE__ */ t.jsxs(bn, { children: [
              he ? /* @__PURE__ */ t.jsxs(ft, { onSelect: ae, children: [
                /* @__PURE__ */ t.jsx(Wn, { size: 16 }),
                "Filter by value"
              ] }) : null,
              /* @__PURE__ */ t.jsxs(ft, { onSelect: D, children: [
                /* @__PURE__ */ t.jsx(Xr, { size: 16 }),
                "Copy value"
              ] })
            ] }) }) })
          }
        )
      ]
    }
  );
}
const En = 160, Dt = 40, Gt = 9999;
function cn(e, r = Dt, s = Gt) {
  return Math.min(Math.max(e, r), s);
}
function no(e, r) {
  if (!r.length) return e;
  const s = new Map(r.map((o, l) => [o, l]));
  return [...e].sort((o, l) => {
    const c = s.get(o.key), i = s.get(l.key);
    return c === void 0 && i === void 0 ? 0 : c === void 0 ? 1 : i === void 0 ? -1 : c - i;
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
function ro({
  columns: e,
  rows: r,
  rowKey: s,
  size: o = "l",
  rowHover: l = !0,
  rowClickable: c = !1,
  rowActiveKey: i = null,
  onRowClick: f,
  rowDividers: v = !0,
  sorting: x,
  defaultSorting: h = { sortBy: null, sortOrder: "asc" },
  onSortingChange: g,
  columnWidths: y,
  onColumnResize: R,
  columnsResizing: S = !0,
  columnsReordering: k = !0,
  columnsPinControl: M = !0,
  columnsVisibilityControl: w = !0,
  filterKeys: z,
  onFilterByColumn: q,
  onFilterByValue: ne,
  visibleColumns: Y,
  defaultVisibleColumns: he,
  onVisibleColumnsChange: re,
  columnsOrder: ee,
  defaultColumnsOrder: we,
  onColumnsOrderChange: D,
  pinnedColumnsStart: ae,
  defaultPinnedColumnsStart: _e,
  onPinnedColumnsStartChange: de,
  pinnedColumnsEnd: $,
  defaultPinnedColumnsEnd: K,
  onPinnedColumnsEndChange: le,
  className: Fe,
  style: b
}) {
  var Kt;
  const [O, G] = H(h), [be, Pe] = H({}), [Ve, et] = H(we ?? []), [qe, E] = H(
    he
  ), [C, W] = H(_e ?? []), [ie, Ee] = H(K ?? []), [Te, Ie] = H(null), U = te(null), Ot = te(null), tt = te(null), je = te(null), Se = te({}), _t = te(null), $e = te(null), Zt = te([]), Qt = te([]), kt = te([]), en = te(0), tn = te(0), Wt = te(0), [Lt, Ct] = H(!1), [me, Nt] = H(null), [ze, wt] = H(null), [it, nn] = H(-1), [ct, Et] = H(-1), ke = x ?? O, pt = Y ?? qe, dt = ee ?? Ve, se = ae ?? C, Ce = $ ?? ie, Ae = oe(() => new Set(z ?? []), [z]), nt = (a) => {
    g ? g(a) : G(a);
  }, Ft = (a) => {
    re ? re(a) : E(a);
  }, ht = (a) => {
    de ? de(a) : W(a);
  }, Vt = (a) => {
    D ? D(a) : et(a);
  }, mt = (a) => {
    const u = pt ?? e.map((p) => p.key);
    Ft(u.filter((p) => p !== a));
  }, rt = oe(() => dt.length ? no(e, dt) : [...e], [e, dt]), Je = oe(() => Array.isArray(pt) ? rt.filter(
    ({ key: a, frozenStart: u, frozenEnd: p }) => u || p || pt.includes(a)
  ) : rt, [rt, pt]), Ne = oe(
    () => Je.filter(
      ({ key: a, frozenStart: u }) => u || se.includes(a)
    ),
    [Je, se]
  ), De = oe(
    () => Je.filter(
      ({ key: a, frozenStart: u, frozenEnd: p }) => !u && !se.includes(a) && (p || Ce.includes(a))
    ),
    [Je, se, Ce]
  ), Be = oe(
    () => Je.filter(
      ({ key: a, frozenStart: u, frozenEnd: p }) => !u && !p && !se.includes(a) && !Ce.includes(a)
    ),
    [Je, se, Ce]
  );
  ye(() => {
    Pe((a) => {
      const u = { ...a };
      return e.forEach((p) => {
        const A = (y == null ? void 0 : y[p.key]) ?? a[p.key] ?? En;
        u[p.key] = cn(
          A,
          p.minWidth ?? Dt,
          p.maxWidth ?? Gt
        );
      }), u;
    });
  }, [e, y]);
  const ge = oe(() => e.reduce((a, u) => (a[u.key] = cn(
    (y == null ? void 0 : y[u.key]) ?? be[u.key] ?? En,
    u.minWidth ?? Dt,
    u.maxWidth ?? Gt
  ), a), {}), [e, y, be]), gt = () => {
    var Bt, Rt, Mt;
    if (!U.current) return;
    const a = [...Ne, ...Be, ...De];
    let p = a.length > 1 && _t.current === ((Bt = a[0]) == null ? void 0 : Bt.key) ? 1 : 0;
    a.length > 1 && $e.current && ((Rt = a[p]) == null ? void 0 : Rt.key) === $e.current && (p = p === 0 ? 1 : 0), (Mt = a[p]) == null || Mt.key;
    const A = Ne.map(
      (I) => Se.current[I.key] ?? ge[I.key]
    ), Z = De.map(
      (I) => Se.current[I.key] ?? ge[I.key]
    ), ce = Be.map(
      (I) => Se.current[I.key] ?? ge[I.key]
    );
    let st = A.reduce((I, We) => I + We, 0), Re = Z.reduce((I, We) => I + We, 0), Ke = ce.reduce((I, We) => I + We, 0), ut = st + Ke + Re;
    const He = U.current.clientWidth;
    He > ut && (ut = He);
    const Ht = A.map((I) => `${I}px`).join(" "), Ut = Z.map((I) => `${I}px`).join(" "), on = ce.map((I) => `${I}px`).join(" ");
    Zt.current = A, Qt.current = ce, kt.current = Z, en.current = st, tn.current = Ke, Wt.current = Re, U.current.style.setProperty(
      "--ui2-table-row-template",
      `${st}px ${Ke}px ${Re}px`
    ), U.current.style.setProperty("--ui2-table-grid-pinned-start", Ht), U.current.style.setProperty("--ui2-table-grid-regular", on), U.current.style.setProperty("--ui2-table-grid-pinned-end", Ut), U.current.style.setProperty("--ui2-table-width-pinned-start", `${st}px`), U.current.style.setProperty("--ui2-table-width-regular", `${Ke}px`), U.current.style.setProperty("--ui2-table-width-pinned-end", `${Re}px`), U.current.style.setProperty("--ui2-table-total-width", `${ut}px`);
  };
  ye(() => {
    gt();
  }, [ge, Ne, De, Be]), ye(() => {
    if (!U.current) return;
    const a = U.current, u = () => gt();
    if (typeof ResizeObserver < "u") {
      const p = new ResizeObserver(u);
      return p.observe(a), () => p.disconnect();
    }
    return window.addEventListener("resize", u), () => window.removeEventListener("resize", u);
  }, [U, ge, Ne, De, Be]);
  const St = (a, u) => {
    const p = e.find((A) => A.key === a);
    return cn(
      u,
      (p == null ? void 0 : p.minWidth) ?? Dt,
      (p == null ? void 0 : p.maxWidth) ?? Gt
    );
  }, rn = (a) => {
    const u = a.cloneNode(!0);
    u.style.width = "max-content", u.style.maxWidth = "none", u.style.display = "inline-flex", u.style.whiteSpace = "nowrap", u.style.visibility = "hidden", u.style.position = "absolute", u.style.left = "-9999px", document.body.appendChild(u);
    const { width: p } = u.getBoundingClientRect();
    document.body.removeChild(u);
    const A = p > 0 ? p : a.scrollWidth;
    return Math.ceil(A);
  }, sn = (a) => {
    const u = window.getComputedStyle(a), p = Number.parseFloat(u.paddingLeft || "0"), A = Number.parseFloat(u.paddingRight || "0");
    return p + A;
  }, n = (a) => {
    if (!U.current) return;
    let u = 0;
    if (Array.from(U.current.querySelectorAll(`[data-column="${a}"]`)).forEach((A) => {
      const Z = A.querySelector("[data-cell-content]") ?? A, ce = rn(Z) + sn(A);
      ce > u && (u = ce);
    }), !(u <= 0))
      return St(a, u);
  }, d = (a, u) => {
    Se.current[a] = u, $e.current = a, gt(), Pe((p) => ({ ...p, [a]: u })), R == null || R({ key: a, width: u }), window.setTimeout(() => {
      Se.current[a] === u && delete Se.current[a], $e.current === a && ($e.current = null);
    }, 0);
  }, m = () => Ne.reduce((a, u) => a + ge[u.key], 0) + Be.reduce((a, u) => a + ge[u.key], 0) + De.reduce((a, u) => a + ge[u.key], 0), N = (a) => {
    if (!U.current) return;
    const u = n(a);
    if (!u) return;
    const p = e.find((He) => He.key === a), A = ge[a], Z = (p == null ? void 0 : p.minWidth) ?? Dt, ce = m(), st = U.current.clientWidth, Re = Math.max(0, st - ce), Ke = 4, ut = 12;
    if (A > u + Ke) {
      d(a, Math.max(u, Z));
      return;
    }
    if (Re >= ut && Math.abs(A - u) <= Ke) {
      const He = St(a, A + Re);
      if (He <= A + 1) {
        d(a, Math.max(u, Z));
        return;
      }
      d(a, He);
      return;
    }
    d(a, Math.max(u, Z));
  }, L = (a, u) => {
    if (!S || a.button !== 0 && a.pointerType !== "touch") return;
    a.preventDefault(), a.stopPropagation();
    const p = a.currentTarget;
    p.setPointerCapture && p.setPointerCapture(a.pointerId), _t.current = u;
    const A = a.clientX, Z = ge[u];
    je.current = { key: u, startX: A, startWidth: Z };
  }, F = (a, u) => {
    if (!je.current || je.current.key !== u) return;
    a.preventDefault(), a.stopPropagation();
    const p = St(u, je.current.startWidth + (a.clientX - je.current.startX));
    Se.current[u] = p, gt();
  }, P = (a, u) => {
    if (!je.current || je.current.key !== u) return;
    a.preventDefault(), a.stopPropagation();
    const p = Se.current[u];
    p && (Pe((Z) => ({ ...Z, [u]: p })), R == null || R({ key: u, width: p })), Se.current = {}, je.current = null;
    const A = a.currentTarget;
    A.releasePointerCapture && A.releasePointerCapture(a.pointerId);
  }, B = (a, u) => {
    a.preventDefault(), a.stopPropagation(), _t.current = u, $e.current = u, N(u);
  }, ue = (a) => {
    let u = 0;
    return a.map((p) => {
      const A = u;
      return u += p, A;
    });
  }, X = (a, u) => {
    if (!k) return;
    const p = a.clientX, A = 5, Z = (st) => {
      var Mt;
      if (Math.abs(p - st.clientX) < A) return;
      window.removeEventListener("mousemove", Z), window.removeEventListener("mouseup", ce), Ct(!0), Nt(u);
      const Re = rt.map((I) => I.key);
      nn(Re.indexOf(u));
      const Ke = Ne.map((I) => ge[I.key]), ut = Be.map((I) => ge[I.key]), He = ue(Ke), Ht = ue(ut), Ut = (Mt = Ot.current) == null ? void 0 : Mt.querySelector("[data-column]"), on = Ut ? Ut.offsetLeft : 0, Bt = (I) => {
        if (!U.current) return;
        const { left: We, right: an } = U.current.getBoundingClientRect(), { scrollLeft: Pt } = U.current, Yt = I.clientX - We + Pt;
        tt.current && (tt.current.style.transform = `translateX(${Yt}px)`);
        let Ue = I.clientX - We - on;
        if (Ue < 0) return;
        if (Ue <= Ke.reduce((Tt, Ye) => Tt + Ye, 0)) {
          const Tt = He.findIndex(
            (Jn, Zn) => Ue >= Jn && Ue < (He[Zn + 1] ?? 1 / 0)
          ), Ye = Ne[Tt];
          wt((Ye == null ? void 0 : Ye.key) ?? null), Et(Re.indexOf((Ye == null ? void 0 : Ye.key) ?? ""));
          return;
        }
        Ue = Ue + Pt;
        const qn = Ht.findIndex(
          (Tt, Ye) => Ue >= Tt && Ue < (Ht[Ye + 1] ?? 1 / 0)
        ), xt = Be[qn];
        wt((xt == null ? void 0 : xt.key) ?? null), Et(Re.indexOf((xt == null ? void 0 : xt.key) ?? ""));
        const kn = 100;
        I.clientX < We + kn ? U.current.scrollLeft = Math.max(0, U.current.scrollLeft - 15) : I.clientX > an - kn && (U.current.scrollLeft = Math.min(
          U.current.scrollWidth - U.current.clientWidth,
          U.current.scrollLeft + 15
        ));
      }, Rt = () => {
        if (ze && me && me !== ze) {
          const I = [...Re], We = I.indexOf(me), an = I.indexOf(ze);
          I.splice(We, 1), I.splice(an, 0, me), Vt(I);
          const Pt = se.includes(me), Yt = se.includes(ze);
          Pt && !Yt ? ht(se.filter((Ue) => Ue !== me)) : !Pt && Yt && ht([...se, me]);
        }
        Ct(!1), Nt(null), wt(null), Et(-1), window.removeEventListener("mousemove", Bt), window.removeEventListener("mouseup", Rt);
      };
      window.addEventListener("mousemove", Bt), window.addEventListener("mouseup", Rt);
    }, ce = () => {
      window.removeEventListener("mousemove", Z), window.removeEventListener("mouseup", ce);
    };
    window.addEventListener("mousemove", Z), window.addEventListener("mouseup", ce);
  }, J = (a) => {
    se.includes(a) || ht([...se, a]);
  }, fe = (a) => {
    ht(se.filter((u) => u !== a));
  }, Oe = (a, u) => {
    const p = u ?? (Ae.has(a) ? a : null);
    p && (q == null || q({ columnKey: a, filterKey: p }));
  }, Ze = (a, u, p) => {
    const A = u ?? (Ae.has(a) ? a : null);
    A && (ne == null || ne({ columnKey: a, filterKey: A, value: p }));
  }, pe = oe(() => {
    if (!ke.sortBy) return r;
    const a = e.find((p) => p.key === ke.sortBy);
    if (!a) return r;
    const u = [...r];
    return u.sort((p, A) => {
      if (a.sortFn) return a.sortFn(p, A, ke.sortOrder);
      const Z = gn(p, a), ce = gn(A, a);
      return typeof Z == "string" && typeof ce == "string" ? ke.sortOrder === "desc" ? ce.localeCompare(Z) : Z.localeCompare(ce) : typeof Z == "number" && typeof ce == "number" ? ke.sortOrder === "desc" ? ce - Z : Z - ce : 0;
    }), u;
  }, [r, e, ke]), zt = oe(
    () => ({
      sorting: ke,
      setSorting: nt,
      pinnedColumnsStartKeys: se,
      pinnedColumnsEndKeys: Ce,
      pinColumn: J,
      unpinColumn: fe,
      hideColumn: mt,
      columnsReordering: k,
      columnsPinControl: M,
      columnsVisibilityControl: w,
      startDragging: X,
      draggedColumnKey: me,
      targetColumnKey: ze,
      draggedColumnIndex: it,
      targetColumnIndex: ct,
      filterableColumnKeys: Ae,
      filterByColumn: Oe,
      filterByValue: Ze,
      activeContextMenuKey: Te,
      setActiveContextMenuKey: Ie,
      getRowKey: (a) => bt(a, s) ?? ""
    }),
    [
      ke,
      se,
      Ce,
      k,
      M,
      w,
      me,
      ze,
      it,
      ct,
      Ae,
      Te,
      s
    ]
  );
  return /* @__PURE__ */ t.jsx(Kn.Provider, { value: zt, children: /* @__PURE__ */ t.jsx("div", { className: j(T.frame, Fe), "data-ui2-component": "DataTable", style: b, children: /* @__PURE__ */ t.jsx("div", { className: T.scroll, ref: U, children: /* @__PURE__ */ t.jsx("div", { className: T.table, "data-size": o, children: /* @__PURE__ */ t.jsxs("div", { className: T.tableInner, children: [
    /* @__PURE__ */ t.jsx("div", { className: T.tableHead, role: "rowgroup", children: /* @__PURE__ */ t.jsxs("div", { className: T.headRow, role: "row", ref: Ot, children: [
      Ne.length ? /* @__PURE__ */ t.jsx("div", { className: j(T.columnGroup, T.columnsPinnedStart), "data-group": "pinned-start", children: Ne.map((a) => /* @__PURE__ */ t.jsx(
        dn,
        {
          column: a,
          sorting: ke,
          onSortingChange: nt,
          onPin: () => J(a.key),
          onUnpin: () => fe(a.key),
          onHide: () => mt(a.key),
          onFilter: () => Oe(a.key, a.filterKey),
          onStartDragging: X,
          onResizeStart: L,
          onResizeMove: F,
          onResizeEnd: P,
          onResizeDoubleClick: B,
          canResize: S,
          canPin: M,
          pinned: se.includes(a.key),
          canHide: w,
          canReorder: k,
          canFilter: !!a.filterKey || Ae.has(a.key),
          dragState: {
            draggedColumnKey: me,
            targetColumnKey: ze,
            draggedColumnIndex: it,
            targetColumnIndex: ct
          }
        },
        a.key
      )) }) : null,
      /* @__PURE__ */ t.jsx("div", { className: j(T.columnGroup, T.columnsRegular), "data-group": "regular", children: Be.map((a) => /* @__PURE__ */ t.jsx(
        dn,
        {
          column: a,
          sorting: ke,
          onSortingChange: nt,
          onPin: () => J(a.key),
          onUnpin: () => fe(a.key),
          onHide: () => mt(a.key),
          onFilter: () => Oe(a.key, a.filterKey),
          onStartDragging: X,
          onResizeStart: L,
          onResizeMove: F,
          onResizeEnd: P,
          onResizeDoubleClick: B,
          canResize: S,
          canPin: M,
          pinned: se.includes(a.key),
          canHide: w,
          canReorder: k,
          canFilter: !!a.filterKey || Ae.has(a.key),
          dragState: {
            draggedColumnKey: me,
            targetColumnKey: ze,
            draggedColumnIndex: it,
            targetColumnIndex: ct
          }
        },
        a.key
      )) }),
      De.length ? /* @__PURE__ */ t.jsx("div", { className: j(T.columnGroup, T.columnsPinnedEnd), "data-group": "pinned-end", children: De.map((a) => /* @__PURE__ */ t.jsx(
        dn,
        {
          column: a,
          sorting: ke,
          onSortingChange: nt,
          onPin: () => J(a.key),
          onUnpin: () => fe(a.key),
          onHide: () => mt(a.key),
          onFilter: () => Oe(a.key, a.filterKey),
          onStartDragging: X,
          onResizeStart: L,
          onResizeMove: F,
          onResizeEnd: P,
          onResizeDoubleClick: B,
          canResize: S,
          canPin: !1,
          pinned: !1,
          canHide: w,
          canReorder: k,
          canFilter: !!a.filterKey || Ae.has(a.key),
          dragState: {
            draggedColumnKey: me,
            targetColumnKey: ze,
            draggedColumnIndex: it,
            targetColumnIndex: ct
          }
        },
        a.key
      )) }) : null,
      Lt ? /* @__PURE__ */ t.jsx("div", { className: T.ghost, ref: tt, children: /* @__PURE__ */ t.jsx("div", { className: T.ghostInner, children: (Kt = rt.find((a) => a.key === me)) == null ? void 0 : Kt.header }) }) : null
    ] }) }),
    /* @__PURE__ */ t.jsx("div", { className: T.tableBody, role: "rowgroup", children: pe.map((a, u) => /* @__PURE__ */ t.jsxs(
      so,
      {
        hover: l,
        clickable: c || !!f,
        active: i != null && bt(a, s) === i,
        divider: v,
        onClick: f ? () => f(a) : void 0,
        children: [
          Ne.length ? /* @__PURE__ */ t.jsx("div", { className: j(T.columnGroup, T.columnsPinnedStart), "data-group": "pinned-start", children: Ne.map((p) => /* @__PURE__ */ t.jsx(
            un,
            {
              column: p,
              row: a,
              rowKeyValue: bt(a, s) ?? u
            },
            p.key
          )) }) : null,
          /* @__PURE__ */ t.jsx("div", { className: j(T.columnGroup, T.columnsRegular), "data-group": "regular", children: Be.map((p) => /* @__PURE__ */ t.jsx(
            un,
            {
              column: p,
              row: a,
              rowKeyValue: bt(a, s) ?? u
            },
            p.key
          )) }),
          De.length ? /* @__PURE__ */ t.jsx("div", { className: j(T.columnGroup, T.columnsPinnedEnd), "data-group": "pinned-end", children: De.map((p) => /* @__PURE__ */ t.jsx(
            un,
            {
              column: p,
              row: a,
              rowKeyValue: bt(a, s) ?? u
            },
            p.key
          )) }) : null
        ]
      },
      bt(a, s) ?? u
    )) })
  ] }) }) }) }) });
}
function so({
  children: e,
  hover: r,
  clickable: s,
  active: o,
  divider: l,
  onClick: c
}) {
  return /* @__PURE__ */ t.jsx(
    "div",
    {
      className: T.row,
      "data-hover": r ? "true" : "false",
      "data-divider": l ? "true" : "false",
      "data-clickable": s ? "true" : "false",
      "data-active": o ? "true" : "false",
      onClick: c,
      children: e
    }
  );
}
function dn({
  column: e,
  sorting: r,
  onSortingChange: s,
  onPin: o,
  onUnpin: l,
  onHide: c,
  onFilter: i,
  onStartDragging: f,
  onResizeStart: v,
  onResizeMove: x,
  onResizeEnd: h,
  onResizeDoubleClick: g,
  canResize: y,
  canPin: R,
  canHide: S,
  canReorder: k,
  canFilter: M,
  pinned: w,
  dragState: z
}) {
  const [q, ne] = H(!1), Y = r.sortBy === e.key, he = y && (e.resizable ?? !0);
  ye(() => {
    if (!q) return;
    const D = () => ne(!1);
    return window.addEventListener("scroll", D, !0), () => window.removeEventListener("scroll", D, !0);
  }, [q]);
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
  }, ee = e.key === z.targetColumnKey && e.key !== z.draggedColumnKey, we = z.draggedColumnIndex > z.targetColumnIndex && ee;
  return /* @__PURE__ */ t.jsx(Zs, { content: e.tooltip, children: /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: T.headCell,
      "data-align": e.align ?? "start",
      "data-open": q ? "true" : "false",
      "data-column": e.key,
      onMouseDown: (D) => {
        var ae, _e;
        (_e = (ae = D.target) == null ? void 0 : ae.closest) != null && _e.call(ae, "[data-resize-hotspot]") || !k || e.frozenStart || e.frozenEnd || f(D.nativeEvent, e.key);
      },
      children: [
        /* @__PURE__ */ t.jsx("div", { className: T.headContent, children: /* @__PURE__ */ t.jsx("span", { className: T.headLabel, "data-cell-content": "true", children: e.header }) }),
        /* @__PURE__ */ t.jsx(
          Vn,
          {
            open: q,
            onOpenChange: ne,
            host: ({ hostProps: D }) => /* @__PURE__ */ t.jsx("button", { ...D, className: T.headButton, "aria-label": "Column menu" }),
            zIndex: w ? 220 : 140,
            children: /* @__PURE__ */ t.jsx(yn, { onAfterSelect: () => ne(!1), children: /* @__PURE__ */ t.jsxs(bn, { children: [
              R && !e.frozenStart && !e.frozenEnd ? w ? /* @__PURE__ */ t.jsxs(ft, { onSelect: l, children: [
                /* @__PURE__ */ t.jsx(ls, { size: 16 }),
                " Unpin column"
              ] }) : /* @__PURE__ */ t.jsxs(ft, { onSelect: o, children: [
                /* @__PURE__ */ t.jsx(cs, { size: 16 }),
                " Pin column"
              ] }) : null,
              S ? /* @__PURE__ */ t.jsxs(ft, { onSelect: c, children: [
                /* @__PURE__ */ t.jsx(On, { size: 16 }),
                " Hide column"
              ] }) : null,
              M ? /* @__PURE__ */ t.jsxs(ft, { onSelect: i, children: [
                /* @__PURE__ */ t.jsx(Wn, { size: 16 }),
                " Filter by column"
              ] }) : null
            ] }) })
          }
        ),
        e.sortable ? /* @__PURE__ */ t.jsx(
          lt,
          {
            size: "xs",
            variant: "tertiary",
            className: T.sortButton,
            active: Y,
            textColor: "--ui2-content-secondary",
            "aria-label": `Sort ${typeof e.header == "string" ? e.header : e.key}`,
            onClick: (D) => {
              D.stopPropagation(), re();
            },
            children: Y ? r.sortOrder === "desc" ? /* @__PURE__ */ t.jsx(mn, { size: 14 }) : /* @__PURE__ */ t.jsx(Dn, { size: 14 }) : /* @__PURE__ */ t.jsx(mn, { size: 14 })
          }
        ) : null,
        he ? /* @__PURE__ */ t.jsx(
          "span",
          {
            className: T.resizeHotspot,
            "data-resize-hotspot": "true",
            onPointerDown: (D) => {
              D.preventDefault(), D.stopPropagation(), v(D, e.key);
            },
            onPointerMove: (D) => {
              x(D, e.key);
            },
            onPointerUp: (D) => {
              h(D, e.key);
            },
            onPointerCancel: (D) => {
              h(D, e.key);
            },
            onDoubleClick: (D) => {
              D.preventDefault(), D.stopPropagation(), g(D, e.key);
            }
          }
        ) : null,
        ee ? /* @__PURE__ */ t.jsx("div", { className: j(T.dropIndicator, we && T.dropIndicatorStart) }) : null
      ]
    }
  ) });
}
function un({
  column: e,
  row: r,
  rowKeyValue: s
}) {
  const o = gn(r, e), l = e.valueFormatter ? e.valueFormatter(o, r) : o, c = l == null ? "" : String(l), i = e.render ? e.render(r) : c;
  return /* @__PURE__ */ t.jsx(
    Hn.Provider,
    {
      value: {
        align: e.align ?? "start",
        monospace: e.monospace ?? !1,
        row: r,
        rowKey: s,
        columnKey: e.key,
        filterKey: e.filterKey,
        value: c,
        rawValue: o
      },
      children: /* @__PURE__ */ t.jsx(to, { "data-column": e.key, children: i })
    }
  );
}
const oo = "_header_1mk0z_1", ao = "_headerLeft_1mk0z_10", lo = "_headerRight_1mk0z_19", io = "_titlePill_1mk0z_27", co = "_subtitleBadge_1mk0z_44", uo = "_subtitleBadgeAi_1mk0z_61", fo = "_footer_1mk0z_72", vo = "_footerText_1mk0z_81", _o = "_footerActions_1mk0z_90", Me = {
  header: oo,
  headerLeft: ao,
  headerRight: lo,
  titlePill: io,
  subtitleBadge: co,
  subtitleBadgeAi: uo,
  footer: fo,
  footerText: vo,
  footerActions: _o
};
function Un({ left: e, right: r, className: s }) {
  return /* @__PURE__ */ t.jsxs("div", { className: j(Me.header, s), children: [
    /* @__PURE__ */ t.jsx("div", { className: Me.headerLeft, children: e }),
    /* @__PURE__ */ t.jsx("div", { className: Me.headerRight, children: r })
  ] });
}
function Yn({ left: e, right: r, className: s }) {
  return /* @__PURE__ */ t.jsxs("div", { className: j(Me.footer, s), children: [
    /* @__PURE__ */ t.jsx("div", { className: Me.footerText, children: e }),
    /* @__PURE__ */ t.jsx("div", { className: Me.footerActions, children: r })
  ] });
}
const po = "_root_14c0l_1", ho = "_tableWrap_14c0l_82", mo = "_tableFrame_14c0l_89", go = "_filterBar_14c0l_118", xo = "_filterBarContent_14c0l_128", yo = "_columnsActionItem_14c0l_137", bo = "_columnsActionIcon_14c0l_143", jo = "_columnsActionLabel_14c0l_151", at = {
  root: po,
  tableWrap: ho,
  tableFrame: mo,
  filterBar: go,
  filterBarContent: xo,
  columnsActionItem: yo,
  columnsActionIcon: bo,
  columnsActionLabel: jo
}, ko = 10;
function Co(e) {
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
function No(e, r) {
  if (!r) {
    const s = e.id;
    return s == null || s === "" ? void 0 : s;
  }
  return typeof r == "function" ? r(e) : e[r];
}
function fn(e, r) {
  return e[r];
}
function wo(e) {
  if (e === "left") return "start";
  if (e === "right") return "end";
  if (e === "center") return "center";
}
function Ei({
  columns: e,
  data: r,
  title: s,
  subtitle: o,
  subtitleIcon: l = "none",
  columnsVisibilityControl: c = !1,
  visibleColumns: i,
  defaultVisibleColumns: f,
  onVisibleColumnsChange: v,
  pageSize: x = ko,
  className: h,
  showActions: g = !1,
  headerAction: y,
  onRowClick: R,
  onClearFilter: S,
  rowKey: k,
  filterBar: M,
  filterKeys: w,
  onFilterByColumn: z,
  onFilterByValue: q,
  style: ne
}) {
  const [Y, he] = H({ sortBy: null, sortOrder: "asc" }), [re, ee] = H(1), [we, D] = H(null), ae = oe(() => {
    const C = e.map((W) => ({
      key: String(W.key),
      header: W.label,
      sortable: W.sortable,
      filterKey: W.filterKey,
      align: wo(W.align),
      value: W.key,
      render: W.render ? (ie) => {
        var Ee;
        return (Ee = W.render) == null ? void 0 : Ee.call(W, fn(ie, W.key), ie);
      } : void 0
    }));
    return g ? [
      ...C,
      {
        key: "__actions",
        header: "Actions",
        sortable: !1,
        align: "end",
        render: (W) => /* @__PURE__ */ t.jsx(
          lt,
          {
            variant: "tertiary",
            size: "s",
            onClick: (ie) => ie.stopPropagation(),
            "aria-label": "View",
            children: /* @__PURE__ */ t.jsx(ns, { size: 16 })
          }
        )
      }
    ] : C;
  }, [e, g]), _e = oe(() => ae.map((C) => C.key), [ae]), [de, $] = H(
    f ?? _e
  ), K = i ?? de ?? _e;
  ye(() => {
    i || $(f ?? _e);
  }, [_e, f, i]);
  const le = (C) => {
    v ? v(C) : $(C);
  }, Fe = oe(() => {
    const C = {};
    return e.forEach((W) => {
      const ie = Co(W.width);
      ie != null && (C[String(W.key)] = ie);
    }), g && (C.__actions = 48), C;
  }, [e, g]), b = oe(() => {
    if (!Y.sortBy) return r;
    const C = ae.find((ie) => ie.key === Y.sortBy);
    if (!C) return r;
    const W = [...r];
    return W.sort((ie, Ee) => {
      const Te = C.key === "__actions" ? null : fn(ie, C.key), Ie = C.key === "__actions" ? null : fn(Ee, C.key);
      return typeof Te == "number" && typeof Ie == "number" ? Y.sortOrder === "desc" ? Ie - Te : Te - Ie : typeof Te == "string" && typeof Ie == "string" ? Y.sortOrder === "desc" ? Ie.localeCompare(Te) : Te.localeCompare(Ie) : 0;
    }), W;
  }, [r, ae, Y]), O = Math.max(1, Math.ceil(b.length / x)), G = Math.min(re, O), be = b.slice((G - 1) * x, G * x);
  ye(() => {
    G !== re && ee(G);
  }, [G, re]), ye(() => {
    ee(1);
  }, [x, r.length, Y.sortBy, Y.sortOrder]);
  const Pe = (C) => {
    const W = No(C, k);
    W != null && D(W), R == null || R(C);
  }, Ve = pn.toArray(M).flatMap((C) => Qn(C) && C.type === Rn ? pn.toArray(C.props.children) : [C]), et = Ve.length, qe = !!(S && et > 1), E = !!(M || qe);
  return /* @__PURE__ */ t.jsxs("div", { className: j(at.root, h), style: ne, children: [
    (s || o || y || c) && /* @__PURE__ */ t.jsx(
      Un,
      {
        left: /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
          s ? /* @__PURE__ */ t.jsx("div", { className: Me.titlePill, children: s }) : null,
          o ? /* @__PURE__ */ t.jsxs(
            "span",
            {
              className: j(
                Me.subtitleBadge,
                l === "ai" && Me.subtitleBadgeAi
              ),
              children: [
                l === "ai" ? /* @__PURE__ */ t.jsx(Ln, { size: 14 }) : null,
                o
              ]
            }
          ) : null
        ] }),
        right: /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
          y,
          c ? /* @__PURE__ */ t.jsx(
            Vn,
            {
              host: ({ open: C, hostProps: W }) => /* @__PURE__ */ t.jsx(
                lt,
                {
                  ...W,
                  variant: "tertiary",
                  size: "s",
                  active: C,
                  "aria-label": "Columns settings",
                  children: /* @__PURE__ */ t.jsx(On, { size: 16 })
                }
              ),
              children: /* @__PURE__ */ t.jsx(yn, { children: /* @__PURE__ */ t.jsx(bn, { children: ae.map((C) => {
                const W = K.includes(C.key);
                return /* @__PURE__ */ t.jsxs(
                  ft,
                  {
                    onSelect: () => {
                      if (W && K.length === 1) return;
                      const ie = W ? K.filter((Ee) => Ee !== C.key) : [...K, C.key];
                      le(ie);
                    },
                    className: at.columnsActionItem,
                    children: [
                      /* @__PURE__ */ t.jsx("span", { className: at.columnsActionIcon, children: W ? /* @__PURE__ */ t.jsx(Or, { size: 14 }) : null }),
                      /* @__PURE__ */ t.jsx("span", { className: at.columnsActionLabel, children: C.header })
                    ]
                  },
                  C.key
                );
              }) }) })
            }
          ) : null
        ] })
      }
    ),
    E ? /* @__PURE__ */ t.jsx("div", { className: at.filterBar, children: /* @__PURE__ */ t.jsxs("div", { className: at.filterBarContent, children: [
      Ve,
      qe ? /* @__PURE__ */ t.jsx(Tn, { variant: "tertiary", size: "m", onClick: S, children: "Clear filter" }) : null
    ] }) }) : null,
    /* @__PURE__ */ t.jsx("div", { className: at.tableWrap, children: /* @__PURE__ */ t.jsx(
      ro,
      {
        columns: ae,
        rows: be,
        size: "m",
        sorting: Y,
        onSortingChange: he,
        columnWidths: Fe,
        visibleColumns: K,
        onVisibleColumnsChange: le,
        filterKeys: w,
        onFilterByColumn: z,
        onFilterByValue: q,
        rowClickable: !!R,
        rowActiveKey: we,
        onRowClick: R ? Pe : void 0,
        className: at.tableFrame
      }
    ) }),
    O > 1 ? /* @__PURE__ */ t.jsx(
      Yn,
      {
        left: `${b.length} rows`,
        right: /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
          /* @__PURE__ */ t.jsxs("span", { className: Me.footerText, children: [
            "Page ",
            G,
            " of ",
            O
          ] }),
          /* @__PURE__ */ t.jsx(
            lt,
            {
              variant: "tertiary",
              size: "s",
              onClick: () => ee(Math.max(1, G - 1)),
              disabled: G === 1,
              "aria-label": "Previous page",
              children: /* @__PURE__ */ t.jsx($n, { size: 16 })
            }
          ),
          /* @__PURE__ */ t.jsx(
            lt,
            {
              variant: "tertiary",
              size: "s",
              onClick: () => ee(Math.min(O, G + 1)),
              disabled: G === O,
              "aria-label": "Next page",
              children: /* @__PURE__ */ t.jsx(An, { size: 16 })
            }
          )
        ] })
      }
    ) : null
  ] });
}
const Eo = "_badge_gg8ef_1", So = "_selectWrap_gg8ef_15", zo = "_select_gg8ef_15", Bo = "_outlined_gg8ef_37", Ro = "_approved_gg8ef_41", Mo = "_pending_gg8ef_47", Po = "_rejected_gg8ef_53", To = "_mix_gg8ef_59", Qe = {
  badge: Eo,
  selectWrap: So,
  select: zo,
  outlined: Bo,
  approved: Ro,
  pending: Mo,
  rejected: Po,
  mix: To
}, Io = ["APPROVED", "PENDING", "REJECTED", "Active", "Core", "Mix"];
function Si({
  status: e,
  onChange: r,
  variant: s = "default",
  className: o
}) {
  const l = (i) => {
    r == null || r(i.target.value);
  }, c = e === "APPROVED" || e === "Active" || e === "Core" ? Qe.approved : e === "REJECTED" ? Qe.rejected : e === "Mix" ? Qe.mix : Qe.pending;
  return r ? /* @__PURE__ */ t.jsx("div", { className: j(Qe.selectWrap, c, o), children: /* @__PURE__ */ t.jsx(
    "select",
    {
      className: j(Qe.select, s === "outlined" && Qe.outlined),
      value: e,
      onChange: l,
      "aria-label": "Status",
      children: Io.map((i) => /* @__PURE__ */ t.jsx("option", { value: i, children: i }, i))
    }
  ) }) : /* @__PURE__ */ t.jsx(
    "span",
    {
      className: j(
        Qe.badge,
        c,
        s === "outlined" && Qe.outlined,
        o
      ),
      children: e
    }
  );
}
const $o = "_root_karlk_1", Ao = {
  root: $o
};
function zi({ cluster: e, className: r }) {
  return /* @__PURE__ */ t.jsx("span", { className: j(Ao.root, r), "aria-label": `Cluster ${e}`, children: e });
}
const Do = "_root_vx2zz_1", Oo = "_track_vx2zz_8", Wo = "_fill_vx2zz_18", Lo = "_green_vx2zz_24", Fo = "_orange_vx2zz_28", Vo = "_teal_vx2zz_32", Ko = "_label_vx2zz_36", vt = {
  root: Do,
  track: Oo,
  fill: Wo,
  green: Lo,
  orange: Fo,
  teal: Vo,
  label: Ko
}, Ho = {
  green: vt.green,
  orange: vt.orange,
  teal: vt.teal
};
function Bi({
  value: e,
  max: r = 100,
  showLabel: s = !0,
  color: o = "green",
  className: l
}) {
  const c = Math.min(e / r * 100, 100);
  return /* @__PURE__ */ t.jsxs("div", { className: j(vt.root, l), children: [
    /* @__PURE__ */ t.jsx("div", { className: vt.track, children: /* @__PURE__ */ t.jsx("div", { className: j(vt.fill, Ho[o]), style: { width: `${c}%` } }) }),
    s ? /* @__PURE__ */ t.jsxs("span", { className: vt.label, children: [
      Math.round(c),
      "%"
    ] }) : null
  ] });
}
const Uo = "_root_6wn2j_1", Yo = "_heading_6wn2j_25", Go = "_value_6wn2j_34", Xo = "_main_6wn2j_47", qo = "_headingText_6wn2j_64", Jo = "_iconWrap_6wn2j_70", Zo = "_bottom_6wn2j_115", Qo = "_meta_6wn2j_121", ea = "_trend_6wn2j_130", ta = "_trendIcon_6wn2j_141", na = "_trendValue_6wn2j_149", ra = "_trendSuffix_6wn2j_155", sa = "_trendPositive_6wn2j_164", oa = "_trendNegative_6wn2j_168", aa = "_trendNeutral_6wn2j_172", ve = {
  root: Uo,
  "variant-default": "_variant-default_6wn2j_13",
  "variant-small": "_variant-small_6wn2j_18",
  heading: Yo,
  value: Go,
  "variant-large": "_variant-large_6wn2j_42",
  main: Xo,
  headingText: qo,
  iconWrap: Jo,
  bottom: Zo,
  meta: Qo,
  trend: ea,
  trendIcon: ta,
  trendValue: na,
  trendSuffix: ra,
  trendPositive: sa,
  trendNegative: oa,
  trendNeutral: aa
}, la = {
  store: In,
  package: os,
  dollar: Qr,
  chart: Ar,
  trending: _s,
  truck: hs,
  calendar: Ir,
  alert: wr,
  critical: Cr,
  crown: Jr,
  layers: fs,
  tail: Sr,
  sparkles: Ln,
  box: Mr,
  boxes: Br
};
function ia({ data: e, className: r, variant: s = "default", header: o }) {
  if (!e) return null;
  const l = e.icon ? la[e.icon] || In : null, c = !!(e.trend && e.trendValue), i = e.trend === "down" ? ve.trendNegative : e.trend === "up" ? ve.trendPositive : ve.trendNeutral;
  return /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: j(ve.root, ve[`variant-${s}`], r),
      "data-variant": s,
      children: [
        /* @__PURE__ */ t.jsxs("div", { className: ve.main, children: [
          /* @__PURE__ */ t.jsxs("div", { className: ve.heading, children: [
            l ? /* @__PURE__ */ t.jsx("span", { className: ve.iconWrap, "aria-hidden": "true", children: /* @__PURE__ */ t.jsx(l, { size: 16 }) }) : null,
            /* @__PURE__ */ t.jsx("div", { className: ve.headingText, children: o ?? e.title })
          ] }),
          /* @__PURE__ */ t.jsx("div", { className: ve.value, children: e.value })
        ] }),
        /* @__PURE__ */ t.jsxs("div", { className: ve.bottom, children: [
          e.subtitle ? /* @__PURE__ */ t.jsx("div", { className: ve.meta, children: e.subtitle }) : null,
          c ? /* @__PURE__ */ t.jsxs("div", { className: j(ve.trend, i), children: [
            e.trend === "down" ? /* @__PURE__ */ t.jsx("span", { className: ve.trendIcon, "aria-hidden": "true", children: /* @__PURE__ */ t.jsx(ys, { size: 16 }) }) : e.trend === "up" ? /* @__PURE__ */ t.jsx("span", { className: ve.trendIcon, "aria-hidden": "true", children: /* @__PURE__ */ t.jsx(js, { size: 16 }) }) : null,
            /* @__PURE__ */ t.jsx("span", { className: ve.trendValue, children: e.trendValue }),
            e.target ? /* @__PURE__ */ t.jsx("span", { className: ve.trendSuffix, children: e.target }) : null
          ] }) : null
        ] })
      ]
    }
  );
}
const ca = "_wrapper_1k6ep_1", da = "_remove_1k6ep_6", ua = "_root_1k6ep_10", fa = "_active_1k6ep_29", va = "_filled_1k6ep_34", _a = "_content_1k6ep_65", pa = "_leadingVisual_1k6ep_71", ha = "_counter_1k6ep_80", ma = "_text_1k6ep_96", ga = "_meta_1k6ep_103", Le = {
  wrapper: ca,
  remove: da,
  root: ua,
  active: fa,
  filled: va,
  content: _a,
  leadingVisual: pa,
  counter: ha,
  text: ma,
  meta: ga
};
function Ri({
  as: e,
  asProps: r,
  filled: s = !1,
  removable: o = !1,
  active: l = !1,
  leadingVisual: c,
  meta: i,
  counter: f,
  onRemove: v,
  children: x,
  className: h,
  ...g
}) {
  const y = e ?? "span", R = j(
    Le.root,
    s && Le.filled,
    o && Le.removable,
    l && Le.active,
    h
  ), S = /* @__PURE__ */ t.jsxs(
    y,
    {
      className: R,
      ...r,
      ...g,
      "data-ui2-component": o ? void 0 : "Chip",
      children: [
        /* @__PURE__ */ t.jsxs("span", { className: Le.content, children: [
          c ? /* @__PURE__ */ t.jsx("span", { className: Le.leadingVisual, children: c }) : null,
          x ? /* @__PURE__ */ t.jsx("span", { className: Le.text, children: x }) : null
        ] }),
        f ? /* @__PURE__ */ t.jsx("span", { className: Le.counter, children: f }) : null,
        i ? /* @__PURE__ */ t.jsx("span", { className: Le.meta, children: i }) : null
      ]
    }
  );
  return o ? /* @__PURE__ */ t.jsxs("span", { className: Le.wrapper, "data-ui2-component": "Chip", children: [
    S,
    /* @__PURE__ */ t.jsx(
      "button",
      {
        type: "button",
        className: Le.remove,
        onClick: v,
        "aria-label": "Remove",
        children: /* @__PURE__ */ t.jsx(gs, { size: 14 })
      }
    )
  ] }) : S;
}
const xa = "_root_1uyca_1", ya = "_textContainer_1uyca_21", ba = "_title_1uyca_26", ja = "_subtitle_1uyca_27", ka = "_leadingVisual_1uyca_49", Ca = "_trailingVisual_1uyca_50", Na = "_sizeS_1uyca_66", wa = "_variantSuccess_1uyca_79", Ea = "_variantError_1uyca_84", Sa = "_variantWarning_1uyca_89", Ge = {
  root: xa,
  textContainer: ya,
  title: ba,
  subtitle: ja,
  leadingVisual: ka,
  trailingVisual: Ca,
  sizeS: Na,
  variantSuccess: wa,
  variantError: Ea,
  variantWarning: Sa
};
function za({
  as: e,
  asProps: r,
  size: s = "m",
  variant: o,
  textColor: l,
  backgroundColor: c,
  borderColor: i,
  leadingVisual: f,
  trailingVisual: v,
  subtitle: x,
  children: h,
  className: g,
  style: y,
  ...R
}) {
  const S = e ?? "span";
  return /* @__PURE__ */ t.jsxs(
    S,
    {
      className: j(
        Ge.root,
        s === "s" && Ge.sizeS,
        o === "success" && Ge.variantSuccess,
        o === "error" && Ge.variantError,
        o === "warning" && Ge.variantWarning,
        g
      ),
      style: {
        backgroundColor: c,
        color: l,
        borderColor: i,
        ...y
      },
      "data-ui2-component": "Tag",
      ...r,
      ...R,
      children: [
        f ? /* @__PURE__ */ t.jsx("span", { className: Ge.leadingVisual, children: f }) : null,
        /* @__PURE__ */ t.jsxs("span", { className: Ge.textContainer, children: [
          h ? /* @__PURE__ */ t.jsx("span", { className: Ge.title, children: h }) : null,
          x ? /* @__PURE__ */ t.jsx("span", { className: Ge.subtitle, children: x }) : null
        ] }),
        v ? /* @__PURE__ */ t.jsx("span", { className: Ge.trailingVisual, children: v }) : null
      ]
    }
  );
}
const Ba = "_root_1rrqz_1", Ra = "_option_1rrqz_9", Ma = "_disabled_1rrqz_23", Pa = "_selected_1rrqz_23", Ta = "_leadingVisual_1rrqz_36", Ia = "_label_1rrqz_52", jt = {
  root: Ba,
  option: Ra,
  disabled: Ma,
  selected: Pa,
  leadingVisual: Ta,
  label: Ia
}, Gn = Jt(null);
function Mi({
  value: e,
  defaultValue: r = null,
  onChange: s,
  options: o,
  children: l,
  className: c
}) {
  const [i, f] = H(r), v = e ?? i, x = (g) => {
    e === void 0 && f(g), s == null || s(g);
  }, h = oe(
    () => ({
      value: v,
      onChange: x
    }),
    [v, s]
  );
  return /* @__PURE__ */ t.jsx("div", { className: j(jt.root, c), "data-ui2-component": "SegmentedControl", children: /* @__PURE__ */ t.jsx(Gn.Provider, { value: h, children: o ? o.map((g) => /* @__PURE__ */ t.jsx(
    $a,
    {
      value: g.value,
      disabled: g.disabled,
      leadingVisual: g.leadingVisual,
      children: g.label
    },
    String(g.value)
  )) : l }) });
}
function $a({
  value: e,
  disabled: r,
  leadingVisual: s,
  children: o,
  className: l
}) {
  const c = qt(Gn), i = (c == null ? void 0 : c.value) === e, f = () => {
    var v;
    r || (v = c == null ? void 0 : c.onChange) == null || v.call(c, e);
  };
  return /* @__PURE__ */ t.jsxs(
    "button",
    {
      type: "button",
      className: j(jt.option, l, i && jt.selected, r && jt.disabled),
      onClick: f,
      disabled: r,
      "data-selected": i ? "true" : "false",
      children: [
        s ? /* @__PURE__ */ t.jsx("span", { className: jt.leadingVisual, children: s }) : null,
        o || o === 0 ? /* @__PURE__ */ t.jsx("span", { className: jt.label, children: o }) : null
      ]
    }
  );
}
const Aa = "_root_47m2j_1", Da = "_rootNoFooter_47m2j_15", Oa = "_rootTable_47m2j_19", Wa = "_header_47m2j_23", La = "_footer_47m2j_24", Fa = "_headerStart_47m2j_29", Va = "_headerEnd_47m2j_30", Ka = "_footerStart_47m2j_31", Ha = "_footerEnd_47m2j_32", Ua = "_body_47m2j_36", Xe = {
  root: Aa,
  rootNoFooter: Da,
  rootTable: Oa,
  header: Wa,
  footer: La,
  headerStart: Fa,
  headerEnd: Va,
  footerStart: Ka,
  footerEnd: Ha,
  body: Ua
};
function Ya({
  variant: e = "default",
  header: r,
  headerStart: s,
  headerEnd: o,
  footer: l,
  footerStart: c,
  footerEnd: i,
  children: f,
  className: v,
  style: x
}) {
  const h = !!(r || s || o), g = !!(l || c || i);
  return /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: j(
        Xe.root,
        e === "table" && Xe.rootTable,
        !g && Xe.rootNoFooter,
        v
      ),
      style: x,
      "data-ui2-component": "DataContainer",
      children: [
        h ? r || /* @__PURE__ */ t.jsxs("div", { className: Xe.header, children: [
          /* @__PURE__ */ t.jsx("div", { className: Xe.headerStart, children: s }),
          /* @__PURE__ */ t.jsx("div", { className: Xe.headerEnd, children: o })
        ] }) : null,
        /* @__PURE__ */ t.jsx("div", { className: Xe.body, children: f }),
        g ? l || /* @__PURE__ */ t.jsxs("div", { className: Xe.footer, children: [
          /* @__PURE__ */ t.jsx("div", { className: Xe.footerStart, children: c }),
          /* @__PURE__ */ t.jsx("div", { className: Xe.footerEnd, children: i })
        ] }) : null
      ]
    }
  );
}
const Ga = "_card_19z9g_1", Xa = "_titleRow_19z9g_13", qa = "_imageBox_19z9g_20", Ja = "_image_19z9g_20", Za = "_imagePlaceholder_19z9g_38", Qa = "_titleBlock_19z9g_43", el = "_title_19z9g_13", tl = "_subtitle_19z9g_58", nl = "_tagWrap_19z9g_67", rl = "_kpiCardSuccess_19z9g_73", sl = "_sizeCurveItem_19z9g_83", ol = "_sizeCurve_19z9g_83", al = "_sizeCurveLabel_19z9g_96", ll = "_sizeCurveValue_19z9g_97", il = "_sizeCurveMax_19z9g_98", cl = "_sizeCurveBar_19z9g_121", dl = "_sizeCurveFill_19z9g_129", ul = "_glow_19z9g_138", fl = "_glowSuccess_19z9g_150", vl = "_glowDanger_19z9g_158", _l = "_hoverActions_19z9g_166", pl = "_hoverPanel_19z9g_181", hl = "_hoverItem_19z9g_191", ml = "_hoverDivider_19z9g_201", Q = {
  card: Ga,
  titleRow: Xa,
  imageBox: qa,
  image: Ja,
  imagePlaceholder: Za,
  titleBlock: Qa,
  title: el,
  subtitle: tl,
  tagWrap: nl,
  kpiCardSuccess: rl,
  sizeCurveItem: sl,
  sizeCurve: ol,
  sizeCurveLabel: al,
  sizeCurveValue: ll,
  sizeCurveMax: il,
  sizeCurveBar: cl,
  sizeCurveFill: dl,
  glow: ul,
  glowSuccess: fl,
  glowDanger: vl,
  hoverActions: _l,
  hoverPanel: pl,
  hoverItem: hl,
  hoverDivider: ml
};
function gl({ children: e, className: r, highlight: s, hoverActions: o }) {
  return /* @__PURE__ */ t.jsxs("div", { className: j(Q.card, r), "data-ui2-component": "Card", children: [
    s ? /* @__PURE__ */ t.jsx(
      "div",
      {
        className: j(
          Q.glow,
          s === "success" ? Q.glowSuccess : Q.glowDanger
        ),
        "aria-hidden": "true"
      }
    ) : null,
    o ? /* @__PURE__ */ t.jsx("div", { className: Q.hoverActions, children: o }) : null,
    e
  ] });
}
function xl({
  title: e,
  subtitle: r,
  tagLabel: s,
  tagTextColor: o,
  tagBorderColor: l,
  tagBackgroundColor: c,
  imageUrl: i,
  className: f
}) {
  return /* @__PURE__ */ t.jsxs("div", { className: j(Q.titleRow, f), children: [
    /* @__PURE__ */ t.jsx("div", { className: Q.imageBox, children: i ? /* @__PURE__ */ t.jsx("img", { src: i, alt: "", className: Q.image }) : /* @__PURE__ */ t.jsx("div", { className: Q.imagePlaceholder }) }),
    /* @__PURE__ */ t.jsxs("div", { className: Q.titleBlock, children: [
      /* @__PURE__ */ t.jsx("div", { className: Q.title, children: e }),
      r ? /* @__PURE__ */ t.jsx("div", { className: Q.subtitle, children: r }) : null,
      s ? /* @__PURE__ */ t.jsx("div", { className: Q.tagWrap, children: /* @__PURE__ */ t.jsx(
        za,
        {
          size: "s",
          textColor: o,
          backgroundColor: c,
          borderColor: l,
          children: s
        }
      ) }) : null
    ] })
  ] });
}
function yl({ items: e, className: r }) {
  return /* @__PURE__ */ t.jsx("div", { className: j(r), children: e.map((s) => /* @__PURE__ */ t.jsx(
    ia,
    {
      data: {
        id: s.label,
        title: s.label,
        value: s.value
      },
      variant: "small",
      className: j(s.tone === "success" && Q.kpiCardSuccess)
    },
    s.label
  )) });
}
function bl({ points: e, className: r }) {
  return /* @__PURE__ */ t.jsx("div", { className: j(Q.sizeCurve, r), children: e.map((s) => /* @__PURE__ */ t.jsxs("div", { className: Q.sizeCurveItem, children: [
    /* @__PURE__ */ t.jsx("div", { className: Q.sizeCurveLabel, children: s.label }),
    /* @__PURE__ */ t.jsx("div", { className: Q.sizeCurveBar, "aria-hidden": "true", children: /* @__PURE__ */ t.jsx(
      "div",
      {
        className: Q.sizeCurveFill,
        style: {
          width: `${Math.min(s.value / (s.max ?? 100) * 100, 100)}%`
        }
      }
    ) }),
    /* @__PURE__ */ t.jsx("div", { className: Q.sizeCurveValue, children: s.value }),
    s.max != null ? /* @__PURE__ */ t.jsxs("div", { className: Q.sizeCurveMax, children: [
      "/",
      s.max
    ] }) : null
  ] }, s.label)) });
}
function Pi({ children: e, className: r }) {
  const s = pn.toArray(e).filter(Boolean);
  return /* @__PURE__ */ t.jsx("div", { className: j(Q.hoverPanel, r), children: s.map((o, l) => /* @__PURE__ */ t.jsxs(Rn, { children: [
    /* @__PURE__ */ t.jsx("div", { className: Q.hoverItem, children: o }),
    l < s.length - 1 ? /* @__PURE__ */ t.jsx("div", { className: Q.hoverDivider }) : null
  ] }, l)) });
}
const jl = "_titleRow_1ssij_7", kl = "_kpiGrid_1ssij_14", Cl = "_actionButton_1ssij_20", vn = {
  titleRow: jl,
  kpiGrid: kl,
  actionButton: Cl
};
function Nl({
  title: e,
  subtitle: r,
  imageUrl: s,
  tag: o,
  metrics: l,
  sizeCurve: c,
  primaryAction: i,
  actionSlot: f,
  highlight: v,
  hoverActions: x,
  className: h
}) {
  const g = v ?? ((i == null ? void 0 : i.variant) === "success" ? "success" : (i == null ? void 0 : i.variant) === "danger" ? "danger" : void 0);
  return /* @__PURE__ */ t.jsxs(gl, { className: h, highlight: g, hoverActions: x, children: [
    /* @__PURE__ */ t.jsx("div", { className: vn.titleRow, children: /* @__PURE__ */ t.jsx(
      xl,
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
    l && l.length > 0 ? /* @__PURE__ */ t.jsx(
      yl,
      {
        items: l.map((y) => ({
          label: y.label,
          value: y.value,
          tone: y.tone
        })),
        className: vn.kpiGrid
      }
    ) : null,
    c && c.length > 0 ? /* @__PURE__ */ t.jsx(
      bl,
      {
        points: c.map((y) => ({
          label: y.label,
          value: y.value,
          max: y.max
        }))
      }
    ) : null,
    f || (i ? /* @__PURE__ */ t.jsx(
      Tn,
      {
        variant: i.variant === "danger" ? "destructive" : i.variant === "success" ? "primary" : "secondary",
        size: "m",
        onClick: i.onClick,
        className: vn.actionButton,
        leadingVisual: i.leadingVisual,
        children: i.label
      }
    ) : null)
  ] });
}
const wl = "_root_1g10y_1", El = "_grid_1g10y_9", Sl = "_body_1g10y_15", _n = {
  root: wl,
  grid: El,
  body: Sl
}, zl = 8;
function Ti({
  data: e,
  pageSize: r = zl,
  title: s = "Allocations",
  headerAction: o,
  className: l,
  style: c
}) {
  const i = oe(() => e.flatMap((y) => y.items), [e]), [f, v] = H(1), x = Math.max(1, Math.ceil(i.length / r)), h = Math.min(f, x), g = i.slice((h - 1) * r, h * r);
  return /* @__PURE__ */ t.jsx(
    Ya,
    {
      className: j(_n.root, l),
      style: c,
      header: /* @__PURE__ */ t.jsx(
        Un,
        {
          left: s ? /* @__PURE__ */ t.jsx("div", { className: Me.titlePill, children: s }) : null,
          right: /* @__PURE__ */ t.jsx(t.Fragment, { children: o })
        }
      ),
      footer: x > 1 ? /* @__PURE__ */ t.jsx(
        Yn,
        {
          left: `${i.length} items`,
          right: /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
            /* @__PURE__ */ t.jsxs("span", { className: Me.footerText, children: [
              "Page ",
              h,
              " of ",
              x
            ] }),
            /* @__PURE__ */ t.jsx(
              lt,
              {
                variant: "tertiary",
                size: "s",
                onClick: () => v(Math.max(1, h - 1)),
                disabled: h === 1,
                "aria-label": "Previous page",
                children: /* @__PURE__ */ t.jsx($n, { size: 16 })
              }
            ),
            /* @__PURE__ */ t.jsx(
              lt,
              {
                variant: "tertiary",
                size: "s",
                onClick: () => v(Math.min(x, h + 1)),
                disabled: h === x,
                "aria-label": "Next page",
                children: /* @__PURE__ */ t.jsx(An, { size: 16 })
              }
            )
          ] })
        }
      ) : null,
      children: /* @__PURE__ */ t.jsx("div", { className: _n.body, children: /* @__PURE__ */ t.jsx("div", { className: _n.grid, children: g.map((y) => /* @__PURE__ */ t.jsx(
        Nl,
        {
          title: y.title,
          subtitle: y.subtitle,
          imageUrl: y.imageUrl,
          tag: y.tag,
          metrics: y.metrics,
          sizeCurve: y.sizeCurve,
          primaryAction: y.primaryAction,
          actionSlot: y.actionSlot,
          highlight: y.highlight,
          hoverActions: y.hoverActions
        },
        y.id
      )) }) })
    }
  );
}
const Bl = "_root_xtrkz_1", Rl = "_collapsed_xtrkz_11", Ml = "_header_xtrkz_15", Pl = "_accountButton_xtrkz_26", Tl = "_accountInfo_xtrkz_43", Il = "_accountAvatar_xtrkz_50", $l = "_accountName_xtrkz_71", Al = "_accountUsername_xtrkz_72", Dl = "_buttons_xtrkz_100", Ol = "_buttonsCollapsed_xtrkz_108", Wl = "_headerButton_xtrkz_112", Ll = "_headerButtonDisabled_xtrkz_144", Fl = "_headerButtonActive_xtrkz_150", Vl = "_nav_xtrkz_163", Kl = "_menuItem_xtrkz_193", Hl = "_menuButton_xtrkz_197", Ul = "_menuButtonPseudoHover_xtrkz_237", Yl = "_menuButtonActive_xtrkz_241", Gl = "_menuButtonExpanded_xtrkz_245", Xl = "_menuButtonDisabled_xtrkz_249", ql = "_menuButtonText_xtrkz_258", Jl = "_menuButtonIcon_xtrkz_267", Zl = "_menuButtonChevron_xtrkz_283", Ql = "_menuButtonCompact_xtrkz_292", ei = "_children_xtrkz_298", ti = "_child_xtrkz_298", ni = "_childActive_xtrkz_335", ri = "_childDisabled_xtrkz_339", si = "_childText_xtrkz_348", oi = "_childIcon_xtrkz_354", ai = "_popover_xtrkz_363", li = "_popoverTitle_xtrkz_372", ii = "_footer_xtrkz_437", ci = "_footerExpanded_xtrkz_449", di = "_footerBottom_xtrkz_453", ui = "_footerLogo_xtrkz_461", fi = "_version_xtrkz_467", vi = "_footerCollapsed_xtrkz_478", _i = "_iconButton_xtrkz_498", pi = "_pinnedButtonWrap_xtrkz_519", hi = "_tooltipHost_xtrkz_524", _ = {
  root: Bl,
  collapsed: Rl,
  header: Ml,
  accountButton: Pl,
  accountInfo: Tl,
  accountAvatar: Il,
  accountName: $l,
  accountUsername: Al,
  buttons: Dl,
  buttonsCollapsed: Ol,
  headerButton: Wl,
  headerButtonDisabled: Ll,
  headerButtonActive: Fl,
  nav: Vl,
  menuItem: Kl,
  menuButton: Hl,
  menuButtonPseudoHover: Ul,
  menuButtonActive: Yl,
  menuButtonExpanded: Gl,
  menuButtonDisabled: Xl,
  menuButtonText: ql,
  menuButtonIcon: Jl,
  menuButtonChevron: Zl,
  menuButtonCompact: Ql,
  children: ei,
  child: ti,
  childActive: ni,
  childDisabled: ri,
  childText: si,
  childIcon: oi,
  popover: ai,
  popoverTitle: li,
  footer: ii,
  footerExpanded: ci,
  footerBottom: di,
  footerLogo: ui,
  version: fi,
  footerCollapsed: vi,
  iconButton: _i,
  pinnedButtonWrap: pi,
  tooltipHost: hi
};
function Sn(e, r, s, o) {
  const l = o.x - r.x, c = o.y - r.y, i = s.x - r.x, f = s.y - r.y, v = e.x - r.x, x = e.y - r.y, h = l * l + c * c, g = l * i + c * f, y = l * v + c * x, R = i * i + f * f, S = i * v + f * x, k = h * R - g * g;
  if (k === 0)
    return !1;
  const M = 1 / k, w = (R * y - g * S) * M, z = (h * S - g * y) * M;
  return w >= 0 && z >= 0 && w + z <= 1;
}
function zn(e, r, s = 0) {
  return e.x >= r.left - s && e.x <= r.right + s && e.y >= r.top - s && e.y <= r.bottom + s;
}
function mi(e, r, s, o, l) {
  return Sn(e, r, s, o) || Sn(e, r, o, l);
}
function gi(e, r, s, o = 8) {
  if (zn(e, r, o) || zn(e, s, o))
    return !0;
  const l = { x: r.right, y: r.top - o }, c = { x: s.left, y: s.top - o }, i = { x: s.left, y: s.bottom + o }, f = { x: r.right, y: r.bottom + o };
  return mi(e, l, c, i, f);
}
function xi({ initials: e, name: r, username: s, collapsed: o = !1, className: l, ...c }) {
  return /* @__PURE__ */ t.jsxs("button", { type: "button", className: j(_.accountButton, l), ...c, children: [
    /* @__PURE__ */ t.jsx("div", { className: _.accountAvatar, children: e }),
    o ? null : /* @__PURE__ */ t.jsxs("div", { className: _.accountInfo, children: [
      /* @__PURE__ */ t.jsx("div", { className: _.accountName, children: r }),
      /* @__PURE__ */ t.jsx("div", { className: _.accountUsername, children: s })
    ] })
  ] });
}
function yi({
  actions: e,
  collapsed: r = !1,
  renderTooltip: s,
  className: o,
  ...l
}) {
  return /* @__PURE__ */ t.jsx("div", { className: j(_.buttons, r && _.buttonsCollapsed, o), ...l, children: e.map((c) => {
    const i = /* @__PURE__ */ t.jsx(
      "button",
      {
        type: "button",
        className: j(
          _.headerButton,
          c.active && _.headerButtonActive,
          c.disabled && _.headerButtonDisabled
        ),
        onClick: c.disabled ? void 0 : c.onClick,
        "aria-label": c.label,
        style: { "--ui2-sidebar-pinned-icon-color": "var(--ui2-content-secondary)" },
        children: c.icon
      },
      c.id
    );
    return s ? /* @__PURE__ */ t.jsx("div", { className: _.pinnedButtonWrap, children: s({ content: c.label, children: i }) }, c.id) : /* @__PURE__ */ t.jsx("div", { className: _.pinnedButtonWrap, children: i }, c.id);
  }) });
}
function bi({
  icon: e,
  showIcon: r = !0,
  label: s,
  compact: o = !1,
  active: l,
  expanded: c,
  disabled: i,
  pseudoHover: f,
  chevron: v,
  as: x,
  className: h,
  ...g
}) {
  const y = x ?? "button";
  return /* @__PURE__ */ t.jsxs(
    y,
    {
      ...y === "button" ? { type: "button", disabled: i } : null,
      className: j(
        _.menuButton,
        o && _.menuButtonCompact,
        l && _.menuButtonActive,
        c && _.menuButtonExpanded,
        i && _.menuButtonDisabled,
        f && _.menuButtonPseudoHover,
        h
      ),
      ...g,
      children: [
        e && r ? /* @__PURE__ */ t.jsx("span", { className: _.menuButtonIcon, children: e }) : null,
        o ? null : /* @__PURE__ */ t.jsx("span", { className: _.menuButtonText, children: s }),
        !o && v ? /* @__PURE__ */ t.jsx("span", { className: _.menuButtonChevron, children: v }) : null
      ]
    }
  );
}
function ji({ collapsed: e = !1, version: r, logo: s, toggle: o, className: l, ...c }) {
  return /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: j(_.footer, !e && _.footerExpanded, e && _.footerCollapsed, l),
      ...c,
      children: [
        !e && r ? /* @__PURE__ */ t.jsxs("div", { className: _.version, children: [
          "v. ",
          r
        ] }) : null,
        /* @__PURE__ */ t.jsxs("div", { className: _.footerBottom, children: [
          /* @__PURE__ */ t.jsx("div", { className: _.footerLogo, children: s }),
          o
        ] })
      ]
    }
  );
}
function ki(e) {
  return /* @__PURE__ */ t.jsx("div", { className: j(_.nav, e.className), ...e });
}
function Ii({ icon: e, label: r, className: s, ...o }) {
  return /* @__PURE__ */ t.jsx("button", { type: "button", "aria-label": r, className: j(_.iconButton, s), ...o, children: e });
}
const Xn = xn(
  ({ title: e, children: r, className: s, ...o }, l) => /* @__PURE__ */ t.jsxs("div", { ref: l, className: j(_.popover, s), ...o, children: [
    /* @__PURE__ */ t.jsx("div", { className: _.popoverTitle, children: e }),
    r
  ] })
);
Xn.displayName = "SidebarPopover";
function Ci({ content: e, children: r }) {
  return /* @__PURE__ */ t.jsx("span", { className: _.tooltipHost, title: e, children: r });
}
function $i({
  collapsed: e,
  defaultCollapsed: r = !1,
  onCollapsedChange: s,
  account: o,
  pinnedActions: l = [],
  navItems: c,
  footer: i,
  className: f,
  style: v,
  renderTooltip: x,
  onItemClick: h,
  onChildClick: g
}) {
  const y = x ?? Ci, [R, S] = H(r), k = e ?? R, [M, w] = H(null), [z, q] = H(null), ne = te(!1), Y = te(null), he = te(null), re = te({ active: !1 }), ee = te(null), we = oe(() => {
    const b = /* @__PURE__ */ new Map();
    return c.forEach((O) => {
      var G;
      O.defaultExpanded && b.set(O.id, !0), (G = O.children) != null && G.some((be) => be.active) && b.set(O.id, !0);
    }), b;
  }, [c]), [D, ae] = H(() => we), _e = yt(
    (b) => {
      s ? s(b) : S(b);
    },
    [s]
  ), de = yt((b, O) => {
    w(b), q(O), he.current = O;
  }, []), $ = yt(() => {
    ne.current || (w(null), q(null));
  }, []), K = yt(() => {
    ee.current && (window.clearTimeout(ee.current), ee.current = null);
  }, []), le = yt(
    (b = 260) => {
      K(), ee.current = window.setTimeout(() => {
        ne.current || (re.current.active = !1, $());
      }, b);
    },
    [K, $]
  ), Fe = yt((b) => {
    ae((O) => {
      const G = new Map(O);
      return G.set(b, !O.get(b)), G;
    });
  }, []);
  return ye(() => {
    if (!k || !M)
      return;
    const b = (O) => {
      if (!re.current.active || ne.current || !Y.current || !he.current)
        return;
      const G = Y.current.getBoundingClientRect(), be = { x: O.clientX, y: O.clientY };
      gi(be, he.current, G, 10) ? K() : (re.current.active = !1, $());
    };
    return window.addEventListener("mousemove", b), () => {
      window.removeEventListener("mousemove", b);
    };
  }, [M, k, K, $]), ye(() => () => K(), [K]), /* @__PURE__ */ t.jsxs(
    "div",
    {
      "data-ui2-component": "Sidebar",
      "data-collapsed": k ? "true" : "false",
      className: j(_.root, k && _.collapsed, f),
      style: v,
      children: [
        /* @__PURE__ */ t.jsxs("div", { className: _.header, children: [
          o ? /* @__PURE__ */ t.jsx(
            xi,
            {
              initials: o.initials,
              name: o.name,
              username: o.username,
              collapsed: k,
              onClick: o.onClick
            }
          ) : null,
          /* @__PURE__ */ t.jsx(yi, { actions: l, collapsed: k, renderTooltip: y })
        ] }),
        /* @__PURE__ */ t.jsx(ki, { onClick: () => w(null), children: c.map((b) => {
          var Ve, et, qe;
          const O = !!((Ve = b.children) != null && Ve.length), G = D.get(b.id) ?? !1, be = k && M === b.id && O && !b.disabled, Pe = /* @__PURE__ */ t.jsx(
            bi,
            {
              icon: b.icon,
              showIcon: b.showIcon,
              label: b.title,
              compact: k,
              active: b.active,
              expanded: O && G,
              disabled: b.disabled,
              pseudoHover: be,
              chevron: !k && O ? G ? /* @__PURE__ */ t.jsx(Dn, { size: 16 }) : /* @__PURE__ */ t.jsx(mn, { size: 16 }) : void 0,
              onClick: () => {
                var E;
                if (O && !k) {
                  Fe(b.id);
                  return;
                }
                b.disabled || (h == null || h(b), (E = b.onClick) == null || E.call(b));
              }
            }
          );
          return /* @__PURE__ */ t.jsxs(
            "div",
            {
              className: _.menuItem,
              onMouseEnter: (E) => {
                !k || !O || b.disabled || (re.current.active = !1, K(), de(b.id, E.currentTarget.getBoundingClientRect()));
              },
              onMouseLeave: (E) => {
                if (k) {
                  if (!O || b.disabled) {
                    $();
                    return;
                  }
                  re.current.active = !0, le();
                }
              },
              onFocus: () => {
                var C;
                if (!k || !O || b.disabled)
                  return;
                const E = (C = document.getElementById(`ui2-sidebar-item-${b.id}`)) == null ? void 0 : C.getBoundingClientRect();
                E && de(b.id, E);
              },
              children: [
                /* @__PURE__ */ t.jsx("div", { id: `ui2-sidebar-item-${b.id}`, children: Pe }),
                O && !k && G ? /* @__PURE__ */ t.jsx("div", { className: _.children, children: (et = b.children) == null ? void 0 : et.map((E) => /* @__PURE__ */ t.jsx("div", { children: /* @__PURE__ */ t.jsxs(
                  "button",
                  {
                    type: "button",
                    className: j(
                      _.child,
                      E.active && _.childActive,
                      E.disabled && _.childDisabled
                    ),
                    disabled: E.disabled,
                    onClick: E.disabled ? void 0 : () => {
                      var C;
                      g == null || g(E, b), (C = E.onClick) == null || C.call(E);
                    },
                    children: [
                      E.icon && E.showIcon !== !1 ? /* @__PURE__ */ t.jsx("span", { className: _.childIcon, children: E.icon }) : null,
                      /* @__PURE__ */ t.jsx("span", { className: _.childText, children: E.title })
                    ]
                  }
                ) }, E.id ?? E.title)) }) : null,
                O && be && z ? /* @__PURE__ */ t.jsx(
                  Xn,
                  {
                    ref: Y,
                    title: b.title,
                    style: {
                      position: "fixed",
                      top: Math.round(z.top),
                      left: Math.round(z.right + 12)
                    },
                    onMouseEnter: () => {
                      ne.current = !0, re.current.active = !1, K();
                    },
                    onMouseLeave: () => {
                      ne.current = !1, le(120);
                    },
                    children: (qe = b.children) == null ? void 0 : qe.map((E) => /* @__PURE__ */ t.jsx("div", { children: /* @__PURE__ */ t.jsxs(
                      "button",
                      {
                        type: "button",
                        className: j(
                          _.child,
                          E.active && _.childActive,
                          E.disabled && _.childDisabled
                        ),
                        disabled: E.disabled,
                        onClick: E.disabled ? void 0 : () => {
                          var C;
                          g == null || g(E, b), (C = E.onClick) == null || C.call(E);
                        },
                        children: [
                          E.icon && E.showIcon !== !1 ? /* @__PURE__ */ t.jsx("span", { className: _.childIcon, children: E.icon }) : null,
                          /* @__PURE__ */ t.jsx("span", { className: _.childText, children: E.title })
                        ]
                      }
                    ) }, E.id ?? E.title))
                  }
                ) : null
              ]
            },
            b.id
          );
        }) }),
        /* @__PURE__ */ t.jsx(
          ji,
          {
            collapsed: k,
            version: i == null ? void 0 : i.version,
            logo: /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
              i != null && i.logoCollapsedSrc && k ? /* @__PURE__ */ t.jsx("img", { src: i.logoCollapsedSrc, alt: i.logoAlt ?? "Logo", width: i.logoCollapsedWidth ?? 32 }) : null,
              i != null && i.logoExpandedSrc && !k ? /* @__PURE__ */ t.jsx("img", { src: i.logoExpandedSrc, alt: i.logoAlt ?? "Logo", width: i.logoExpandedWidth ?? 131 }) : null
            ] }),
            toggle: i != null && i.toggleButton ? i.toggleButton : /* @__PURE__ */ t.jsx(
              lt,
              {
                "aria-label": k ? (i == null ? void 0 : i.toggleCollapsedLabel) ?? "Expand" : (i == null ? void 0 : i.toggleExpandedLabel) ?? "Collapse",
                variant: "tertiary",
                textColor: "--ui2-content-secondary",
                onClick: () => _e(!k),
                children: k ? /* @__PURE__ */ t.jsx(Yr, { size: 18 }) : /* @__PURE__ */ t.jsx(Hr, { size: 18 })
              }
            )
          }
        )
      ]
    }
  );
}
function Ai({ collapsed: e = !1, className: r, ...s }) {
  return /* @__PURE__ */ t.jsx(
    "div",
    {
      "data-ui2-component": "SidebarShell",
      "data-collapsed": e ? "true" : "false",
      className: j(_.root, e && _.collapsed, r),
      ...s
    }
  );
}
function Di(e) {
  return /* @__PURE__ */ t.jsx("div", { "data-ui2-component": "SidebarHeader", className: j(_.header, e.className), ...e });
}
function Oi({
  initials: e,
  name: r,
  username: s,
  collapsed: o = !1,
  className: l,
  ...c
}) {
  return /* @__PURE__ */ t.jsxs("button", { type: "button", className: j(_.accountButton, l), ...c, children: [
    /* @__PURE__ */ t.jsx("div", { className: _.accountAvatar, children: e }),
    o ? null : /* @__PURE__ */ t.jsxs("div", { className: _.accountInfo, children: [
      /* @__PURE__ */ t.jsx("div", { className: _.accountName, children: r }),
      /* @__PURE__ */ t.jsx("div", { className: _.accountUsername, children: s })
    ] })
  ] });
}
function Wi({ icon: e, label: r, active: s, disabled: o, className: l, ...c }) {
  return /* @__PURE__ */ t.jsx(
    "button",
    {
      type: "button",
      "aria-label": r,
      disabled: o,
      className: j(
        _.headerButton,
        s && _.headerButtonActive,
        o && _.headerButtonDisabled,
        l
      ),
      ...c,
      children: e
    }
  );
}
function Li({
  icon: e,
  label: r,
  compact: s = !1,
  active: o,
  disabled: l,
  pseudoHover: c,
  chevron: i,
  className: f,
  ...v
}) {
  return /* @__PURE__ */ t.jsxs(
    "button",
    {
      type: "button",
      className: j(
        _.menuButton,
        s && _.menuButtonCompact,
        o && _.menuButtonActive,
        l && _.menuButtonDisabled,
        c && _.menuButtonPseudoHover,
        f
      ),
      disabled: l,
      ...v,
      children: [
        /* @__PURE__ */ t.jsx("span", { className: _.menuButtonIcon, children: e }),
        s ? null : /* @__PURE__ */ t.jsx("span", { className: _.menuButtonText, children: r }),
        !s && i ? /* @__PURE__ */ t.jsx("span", { className: _.menuButtonChevron, children: i }) : null
      ]
    }
  );
}
function Fi({ label: e, icon: r, active: s, disabled: o, className: l, ...c }) {
  return /* @__PURE__ */ t.jsxs(
    "button",
    {
      type: "button",
      className: j(_.child, s && _.childActive, o && _.childDisabled, l),
      disabled: o,
      ...c,
      children: [
        r ? /* @__PURE__ */ t.jsx("span", { className: _.childIcon, children: r }) : null,
        /* @__PURE__ */ t.jsx("span", { className: _.childText, children: e })
      ]
    }
  );
}
function Vi({ collapsed: e = !1, version: r, logo: s, toggle: o, className: l, ...c }) {
  return /* @__PURE__ */ t.jsxs(
    "div",
    {
      "data-ui2-component": "SidebarFooter",
      className: j(_.footer, !e && _.footerExpanded, e && _.footerCollapsed, l),
      ...c,
      children: [
        !e && r ? /* @__PURE__ */ t.jsxs("div", { className: _.version, children: [
          "v. ",
          r
        ] }) : null,
        /* @__PURE__ */ t.jsxs("div", { className: _.footerBottom, children: [
          /* @__PURE__ */ t.jsx("div", { className: _.footerLogo, children: s }),
          o
        ] })
      ]
    }
  );
}
export {
  Tn as Button,
  lt as ButtonIcon,
  gl as Card,
  Nl as CardCompat,
  Pi as CardHoverActions,
  yl as CardKpisBlock,
  Ti as CardListCompat,
  bl as CardSizeCurveBlock,
  xl as CardTitleBlock,
  Ri as Chip,
  zi as ClusterBadge,
  Ya as DataContainer,
  ro as DataTable,
  to as DataTableCell,
  Ei as DataTableCompat,
  ia as KPICard,
  Bi as ProgressBar,
  Mi as SegmentedControl,
  $a as SegmentedControlOption,
  $i as Sidebar,
  Oi as SidebarAccountButton,
  Fi as SidebarChildButton,
  ji as SidebarFooterPart,
  Vi as SidebarFooterSection,
  Di as SidebarHeader,
  Wi as SidebarHeaderButton,
  Ii as SidebarIconButton,
  bi as SidebarItem,
  ki as SidebarNav,
  Li as SidebarNavButton,
  yi as SidebarPinnedButtons,
  Xn as SidebarPopover,
  xi as SidebarProfile,
  Ai as SidebarShell,
  Si as StatusBadge,
  za as Tag
};
