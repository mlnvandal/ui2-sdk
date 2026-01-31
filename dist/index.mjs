import * as xe from "react";
import Cn, { forwardRef as un, createElement as tn, useContext as dn, createContext as fn, useState as Y, useEffect as ye, useRef as ee, useMemo as de, Children as mn, isValidElement as Wn, Fragment as Ln, useCallback as ht } from "react";
import { createPortal as Fn } from "react-dom";
var an = { exports: {} }, Mt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gn;
function Vn() {
  if (gn) return Mt;
  gn = 1;
  var e = Cn, r = Symbol.for("react.element"), s = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(f, _, y) {
    var g, x = {}, w = null, M = null;
    y !== void 0 && (w = "" + y), _.key !== void 0 && (w = "" + _.key), _.ref !== void 0 && (M = _.ref);
    for (g in _) a.call(_, g) && !l.hasOwnProperty(g) && (x[g] = _[g]);
    if (f && f.defaultProps) for (g in _ = f.defaultProps, _) x[g] === void 0 && (x[g] = _[g]);
    return { $$typeof: r, type: f, key: w, ref: M, props: x, _owner: i.current };
  }
  return Mt.Fragment = s, Mt.jsx = c, Mt.jsxs = c, Mt;
}
var Pt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xn;
function Kn() {
  return xn || (xn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Cn, r = Symbol.for("react.element"), s = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), f = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), M = Symbol.for("react.offscreen"), E = Symbol.iterator, b = "@@iterator";
    function P(t) {
      if (t === null || typeof t != "object")
        return null;
      var u = E && t[E] || t[b];
      return typeof u == "function" ? u : null;
    }
    var C = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function S(t) {
      {
        for (var u = arguments.length, h = new Array(u > 1 ? u - 1 : 0), k = 1; k < u; k++)
          h[k - 1] = arguments[k];
        G("error", t, h);
      }
    }
    function G(t, u, h) {
      {
        var k = C.ReactDebugCurrentFrame, L = k.getStackAddendum();
        L !== "" && (u += "%s", h = h.concat([L]));
        var F = h.map(function(T) {
          return String(T);
        });
        F.unshift("Warning: " + u), Function.prototype.apply.call(console[t], console, F);
      }
    }
    var te = !1, U = !1, he = !1, ne = !1, Q = !1, Ee;
    Ee = Symbol.for("react.module.reference");
    function D(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === a || t === l || Q || t === i || t === y || t === g || ne || t === M || te || U || he || typeof t == "object" && t !== null && (t.$$typeof === w || t.$$typeof === x || t.$$typeof === c || t.$$typeof === f || t.$$typeof === _ || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === Ee || t.getModuleId !== void 0));
    }
    function oe(t, u, h) {
      var k = t.displayName;
      if (k)
        return k;
      var L = u.displayName || u.name || "";
      return L !== "" ? h + "(" + L + ")" : h;
    }
    function ve(t) {
      return t.displayName || "Context";
    }
    function le(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
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
        case y:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case f:
            var u = t;
            return ve(u) + ".Consumer";
          case c:
            var h = t;
            return ve(h._context) + ".Provider";
          case _:
            return oe(t, t.render, "ForwardRef");
          case x:
            var k = t.displayName || null;
            return k !== null ? k : le(t.type) || "Memo";
          case w: {
            var L = t, F = L._payload, T = L._init;
            try {
              return le(T(F));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var A = Object.assign, K = 0, se, Le, m, $, X, be, Pe;
    function Fe() {
    }
    Fe.__reactDisabledLog = !0;
    function Ze() {
      {
        if (K === 0) {
          se = console.log, Le = console.info, m = console.warn, $ = console.error, X = console.group, be = console.groupCollapsed, Pe = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: Fe,
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
        K++;
      }
    }
    function Xe() {
      {
        if (K--, K === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: A({}, t, {
              value: se
            }),
            info: A({}, t, {
              value: Le
            }),
            warn: A({}, t, {
              value: m
            }),
            error: A({}, t, {
              value: $
            }),
            group: A({}, t, {
              value: X
            }),
            groupCollapsed: A({}, t, {
              value: be
            }),
            groupEnd: A({}, t, {
              value: Pe
            })
          });
        }
        K < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var N = C.ReactCurrentDispatcher, j;
    function W(t, u, h) {
      {
        if (j === void 0)
          try {
            throw Error();
          } catch (L) {
            var k = L.stack.trim().match(/\n( *(at )?)/);
            j = k && k[1] || "";
          }
        return `
` + j + t;
      }
    }
    var ae = !1, we;
    {
      var Te = typeof WeakMap == "function" ? WeakMap : Map;
      we = new Te();
    }
    function Ie(t, u) {
      if (!t || ae)
        return "";
      {
        var h = we.get(t);
        if (h !== void 0)
          return h;
      }
      var k;
      ae = !0;
      var L = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var F;
      F = N.current, N.current = null, Ze();
      try {
        if (u) {
          var T = function() {
            throw Error();
          };
          if (Object.defineProperty(T.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(T, []);
            } catch (_e) {
              k = _e;
            }
            Reflect.construct(t, [], T);
          } else {
            try {
              T.call();
            } catch (_e) {
              k = _e;
            }
            t.call(T.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_e) {
            k = _e;
          }
          t();
        }
      } catch (_e) {
        if (_e && k && typeof _e.stack == "string") {
          for (var B = _e.stack.split(`
`), ce = k.stack.split(`
`), q = B.length - 1, J = ce.length - 1; q >= 1 && J >= 0 && B[q] !== ce[J]; )
            J--;
          for (; q >= 1 && J >= 0; q--, J--)
            if (B[q] !== ce[J]) {
              if (q !== 1 || J !== 1)
                do
                  if (q--, J--, J < 0 || B[q] !== ce[J]) {
                    var fe = `
` + B[q].replace(" at new ", " at ");
                    return t.displayName && fe.includes("<anonymous>") && (fe = fe.replace("<anonymous>", t.displayName)), typeof t == "function" && we.set(t, fe), fe;
                  }
                while (q >= 1 && J >= 0);
              break;
            }
        }
      } finally {
        ae = !1, N.current = F, Xe(), Error.prepareStackTrace = L;
      }
      var De = t ? t.displayName || t.name : "", Ge = De ? W(De) : "";
      return typeof t == "function" && we.set(t, Ge), Ge;
    }
    function H(t, u, h) {
      return Ie(t, !1);
    }
    function zt(t) {
      var u = t.prototype;
      return !!(u && u.isReactComponent);
    }
    function Qe(t, u, h) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return Ie(t, zt(t));
      if (typeof t == "string")
        return W(t);
      switch (t) {
        case y:
          return W("Suspense");
        case g:
          return W("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case _:
            return H(t.render);
          case x:
            return Qe(t.type, u, h);
          case w: {
            var k = t, L = k._payload, F = k._init;
            try {
              return Qe(F(L), u, h);
            } catch {
            }
          }
        }
      return "";
    }
    var je = Object.prototype.hasOwnProperty, Se = {}, ut = C.ReactDebugCurrentFrame;
    function ze(t) {
      if (t) {
        var u = t._owner, h = Qe(t.type, t._source, u ? u.type : null);
        ut.setExtraStackFrame(h);
      } else
        ut.setExtraStackFrame(null);
    }
    function Ut(t, u, h, k, L) {
      {
        var F = Function.call.bind(je);
        for (var T in t)
          if (F(t, T)) {
            var B = void 0;
            try {
              if (typeof t[T] != "function") {
                var ce = Error((k || "React class") + ": " + h + " type `" + T + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[T] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ce.name = "Invariant Violation", ce;
              }
              B = t[T](u, T, k, h, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (q) {
              B = q;
            }
            B && !(B instanceof Error) && (ze(L), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", k || "React class", h, T, typeof B), ze(null)), B instanceof Error && !(B.message in Se) && (Se[B.message] = !0, ze(L), S("Failed %s type: %s", h, B.message), ze(null));
          }
      }
    }
    var Yt = Array.isArray;
    function xt(t) {
      return Yt(t);
    }
    function Xt(t) {
      {
        var u = typeof Symbol == "function" && Symbol.toStringTag, h = u && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return h;
      }
    }
    function qt(t) {
      try {
        return At(t), !1;
      } catch {
        return !0;
      }
    }
    function At(t) {
      return "" + t;
    }
    function Ot(t) {
      if (qt(t))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Xt(t)), At(t);
    }
    var yt = C.ReactCurrentOwner, me = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, bt, Re;
    function jt(t) {
      if (je.call(t, "ref")) {
        var u = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function ot(t) {
      if (je.call(t, "key")) {
        var u = Object.getOwnPropertyDescriptor(t, "key").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function Gt(t, u) {
      typeof t.ref == "string" && yt.current;
    }
    function st(t, u) {
      {
        var h = function() {
          bt || (bt = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        h.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: h,
          configurable: !0
        });
      }
    }
    function kt(t, u) {
      {
        var h = function() {
          Re || (Re = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        h.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: h,
          configurable: !0
        });
      }
    }
    var ke = function(t, u, h, k, L, F, T) {
      var B = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: t,
        key: u,
        ref: h,
        props: T,
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
        value: k
      }), Object.defineProperty(B, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: L
      }), Object.freeze && (Object.freeze(B.props), Object.freeze(B)), B;
    };
    function dt(t, u, h, k, L) {
      {
        var F, T = {}, B = null, ce = null;
        h !== void 0 && (Ot(h), B = "" + h), ot(u) && (Ot(u.key), B = "" + u.key), jt(u) && (ce = u.ref, Gt(u, L));
        for (F in u)
          je.call(u, F) && !me.hasOwnProperty(F) && (T[F] = u[F]);
        if (t && t.defaultProps) {
          var q = t.defaultProps;
          for (F in q)
            T[F] === void 0 && (T[F] = q[F]);
        }
        if (B || ce) {
          var J = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          B && st(T, J), ce && kt(T, J);
        }
        return ke(t, B, ce, L, k, yt.current, T);
      }
    }
    var at = C.ReactCurrentOwner, re = C.ReactDebugCurrentFrame;
    function Ce(t) {
      if (t) {
        var u = t._owner, h = Qe(t.type, t._source, u ? u.type : null);
        re.setExtraStackFrame(h);
      } else
        re.setExtraStackFrame(null);
    }
    var Ae;
    Ae = !1;
    function et(t) {
      return typeof t == "object" && t !== null && t.$$typeof === r;
    }
    function Dt() {
      {
        if (at.current) {
          var t = le(at.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function ft(t) {
      return "";
    }
    var $t = {};
    function pt(t) {
      {
        var u = Dt();
        if (!u) {
          var h = typeof t == "string" ? t : t.displayName || t.name;
          h && (u = `

Check the top-level render call using <` + h + ">.");
        }
        return u;
      }
    }
    function tt(t, u) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var h = pt(u);
        if ($t[h])
          return;
        $t[h] = !0;
        var k = "";
        t && t._owner && t._owner !== at.current && (k = " It was passed a child from " + le(t._owner.type) + "."), Ce(t), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', h, k), Ce(null);
      }
    }
    function qe(t, u) {
      {
        if (typeof t != "object")
          return;
        if (xt(t))
          for (var h = 0; h < t.length; h++) {
            var k = t[h];
            et(k) && tt(k, u);
          }
        else if (et(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var L = P(t);
          if (typeof L == "function" && L !== t.entries)
            for (var F = L.call(t), T; !(T = F.next()).done; )
              et(T.value) && tt(T.value, u);
        }
      }
    }
    function Ne(t) {
      {
        var u = t.type;
        if (u == null || typeof u == "string")
          return;
        var h;
        if (typeof u == "function")
          h = u.propTypes;
        else if (typeof u == "object" && (u.$$typeof === _ || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        u.$$typeof === x))
          h = u.propTypes;
        else
          return;
        if (h) {
          var k = le(u);
          Ut(h, t.props, "prop", k, t);
        } else if (u.PropTypes !== void 0 && !Ae) {
          Ae = !0;
          var L = le(u);
          S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", L || "Unknown");
        }
        typeof u.getDefaultProps == "function" && !u.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Oe(t) {
      {
        for (var u = Object.keys(t.props), h = 0; h < u.length; h++) {
          var k = u[h];
          if (k !== "children" && k !== "key") {
            Ce(t), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", k), Ce(null);
            break;
          }
        }
        t.ref !== null && (Ce(t), S("Invalid attribute `ref` supplied to `React.Fragment`."), Ce(null));
      }
    }
    var Be = {};
    function ge(t, u, h, k, L, F) {
      {
        var T = D(t);
        if (!T) {
          var B = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (B += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ce = ft();
          ce ? B += ce : B += Dt();
          var q;
          t === null ? q = "null" : xt(t) ? q = "array" : t !== void 0 && t.$$typeof === r ? (q = "<" + (le(t.type) || "Unknown") + " />", B = " Did you accidentally export a JSX literal instead of a component?") : q = typeof t, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", q, B);
        }
        var J = dt(t, u, h, L, F);
        if (J == null)
          return J;
        if (T) {
          var fe = u.children;
          if (fe !== void 0)
            if (k)
              if (xt(fe)) {
                for (var De = 0; De < fe.length; De++)
                  qe(fe[De], t);
                Object.freeze && Object.freeze(fe);
              } else
                S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              qe(fe, t);
        }
        if (je.call(u, "key")) {
          var Ge = le(t), _e = Object.keys(u).filter(function(o) {
            return o !== "key";
          }), Nt = _e.length > 0 ? "{key: someKey, " + _e.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Be[Ge + Nt]) {
            var Wt = _e.length > 0 ? "{" + _e.join(": ..., ") + ": ...}" : "{}";
            S(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Nt, Ge, Wt, Ge), Be[Ge + Nt] = !0;
          }
        }
        return t === a ? Oe(J) : Ne(J), J;
      }
    }
    function vt(t, u, h) {
      return ge(t, u, h, !0);
    }
    function Ct(t, u, h) {
      return ge(t, u, h, !1);
    }
    var Jt = Ct, Zt = vt;
    Pt.Fragment = a, Pt.jsx = Jt, Pt.jsxs = Zt;
  }()), Pt;
}
process.env.NODE_ENV === "production" ? an.exports = Vn() : an.exports = Kn();
var n = an.exports;
function yn(e, r) {
  if (typeof e == "function")
    return e(r);
  e != null && (e.current = r);
}
function Hn(...e) {
  return (r) => {
    let s = !1;
    const a = e.map((i) => {
      const l = yn(i, r);
      return !s && typeof l == "function" && (s = !0), l;
    });
    if (s)
      return () => {
        for (let i = 0; i < a.length; i++) {
          const l = a[i];
          typeof l == "function" ? l() : yn(e[i], null);
        }
      };
  };
}
var Un = Symbol.for("react.lazy"), Ht = xe[" use ".trim().toString()];
function Yn(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function Nn(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === Un && "_payload" in e && Yn(e._payload);
}
// @__NO_SIDE_EFFECTS__
function Xn(e) {
  const r = /* @__PURE__ */ Gn(e), s = xe.forwardRef((a, i) => {
    let { children: l, ...c } = a;
    Nn(l) && typeof Ht == "function" && (l = Ht(l._payload));
    const f = xe.Children.toArray(l), _ = f.find(Zn);
    if (_) {
      const y = _.props.children, g = f.map((x) => x === _ ? xe.Children.count(y) > 1 ? xe.Children.only(null) : xe.isValidElement(y) ? y.props.children : null : x);
      return /* @__PURE__ */ n.jsx(r, { ...c, ref: i, children: xe.isValidElement(y) ? xe.cloneElement(y, void 0, g) : null });
    }
    return /* @__PURE__ */ n.jsx(r, { ...c, ref: i, children: l });
  });
  return s.displayName = `${e}.Slot`, s;
}
var qn = /* @__PURE__ */ Xn("Slot");
// @__NO_SIDE_EFFECTS__
function Gn(e) {
  const r = xe.forwardRef((s, a) => {
    let { children: i, ...l } = s;
    if (Nn(i) && typeof Ht == "function" && (i = Ht(i._payload)), xe.isValidElement(i)) {
      const c = er(i), f = Qn(l, i.props);
      return i.type !== xe.Fragment && (f.ref = a ? Hn(a, c) : c), xe.cloneElement(i, f);
    }
    return xe.Children.count(i) > 1 ? xe.Children.only(null) : null;
  });
  return r.displayName = `${e}.SlotClone`, r;
}
var Jn = Symbol("radix.slottable");
function Zn(e) {
  return xe.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Jn;
}
function Qn(e, r) {
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
function er(e) {
  var a, i;
  let r = (a = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : a.get, s = r && "isReactWarning" in r && r.isReactWarning;
  return s ? e.ref : (r = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, s = r && "isReactWarning" in r && r.isReactWarning, s ? e.props.ref : e.props.ref || e.ref);
}
function En(e) {
  var r, s, a = "";
  if (typeof e == "string" || typeof e == "number") a += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (r = 0; r < i; r++) e[r] && (s = En(e[r])) && (a && (a += " "), a += s);
  } else for (s in e) e[s] && (a && (a += " "), a += s);
  return a;
}
function R() {
  for (var e, r, s = 0, a = "", i = arguments.length; s < i; s++) (e = arguments[s]) && (r = En(e)) && (a && (a += " "), a += r);
  return a;
}
const tr = "_root_1j0me_1", nr = "_disabled_1j0me_29", rr = "_active_1j0me_72", or = "_visual_1j0me_123", sr = "_block_1j0me_131", rt = {
  root: tr,
  disabled: nr,
  "size-m": "_size-m_1j0me_36",
  "size-l": "_size-l_1j0me_41",
  "variant-secondary": "_variant-secondary_1j0me_46",
  "variant-tertiary": "_variant-tertiary_1j0me_47",
  "variant-destructive": "_variant-destructive_1j0me_52",
  "variant-link": "_variant-link_1j0me_58",
  "variant-primary": "_variant-primary_1j0me_66",
  active: rr,
  visual: or,
  block: sr
}, ar = un(function({
  as: r,
  asChild: s = !1,
  active: a = !1,
  block: i = !1,
  disabled: l = !1,
  size: c = "m",
  variant: f = "primary",
  icon: _,
  textColor: y,
  leadingVisual: g,
  trailingVisual: x,
  className: w,
  children: M,
  ...E
}, b) {
  const P = f === "default" ? "primary" : f === "outline" ? "secondary" : f === "ghost" ? "tertiary" : f, C = c === "default" || c === "sm" || c === "icon" ? "m" : c === "lg" ? "l" : c, S = s ? qn : r ?? "button", G = g ?? _;
  return /* @__PURE__ */ n.jsxs(
    S,
    {
      ref: b,
      className: R(
        rt.root,
        rt[`size-${C}`],
        rt[`variant-${P}`],
        a && rt.active,
        i && rt.block,
        l && rt.disabled,
        w
      ),
      style: y ? { "--ui2-button-text-color": `var(${y})` } : void 0,
      "data-ui2-component": "Button",
      disabled: !s && S === "button" ? l : void 0,
      "aria-disabled": s && l ? !0 : void 0,
      ...E,
      children: [
        G ? /* @__PURE__ */ n.jsx("span", { className: rt.visual, children: G }) : null,
        M,
        x ? /* @__PURE__ */ n.jsx("span", { className: rt.visual, children: x }) : null
      ]
    }
  );
}), ir = "_root_1xe83_1", lr = "_disabled_1xe83_24", cr = "_active_1xe83_31", ur = "_icon_1xe83_146", Tt = {
  root: ir,
  disabled: lr,
  active: cr,
  "variant-secondary": "_variant-secondary_1xe83_43",
  "variant-tertiary": "_variant-tertiary_1xe83_44",
  "variant-inverted": "_variant-inverted_1xe83_45",
  "variant-destructive": "_variant-destructive_1xe83_49",
  "size-xs": "_size-xs_1xe83_120",
  "size-s": "_size-s_1xe83_127",
  "size-m": "_size-m_1xe83_134",
  "size-l": "_size-l_1xe83_140",
  icon: ur
};
function gt({
  children: e,
  size: r = "m",
  variant: s = "primary",
  active: a = !1,
  disabled: i = !1,
  textColor: l,
  className: c,
  ...f
}) {
  const _ = s === "default" ? "primary" : s === "outline" ? "secondary" : s === "ghost" || s === "link" ? "tertiary" : s;
  return /* @__PURE__ */ n.jsx(
    "button",
    {
      type: "button",
      disabled: i,
      className: R(
        Tt.root,
        Tt[`size-${r}`],
        _ !== "primary" && Tt[`variant-${_}`],
        i && Tt.disabled,
        c
      ),
      "data-active": a ? "true" : "false",
      style: l ? { "--ui2-button-icon-text-color": `var(${l})` } : void 0,
      ...f,
      children: /* @__PURE__ */ n.jsx("span", { className: Tt.icon, children: e })
    }
  );
}
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var dr = {
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
const V = (e, r, s, a) => {
  const i = un(
    ({ color: l = "currentColor", size: c = 24, stroke: f = 2, title: _, className: y, children: g, ...x }, w) => tn(
      "svg",
      {
        ref: w,
        ...dr[e],
        width: c,
        height: c,
        className: ["tabler-icon", `tabler-icon-${r}`, y].join(" "),
        ...e === "filled" ? {
          fill: l
        } : {
          strokeWidth: f,
          stroke: l
        },
        ...x
      },
      [
        _ && tn("title", { key: "svg-title" }, _),
        ...a.map(([M, E]) => tn(M, E)),
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
const fr = [["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0", key: "svg-0" }], ["path", { d: "M12 8v4", key: "svg-1" }], ["path", { d: "M12 16h.01", key: "svg-2" }]], pr = V("outline", "alert-circle", "AlertCircle", fr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vr = [["path", { d: "M12 9v4", key: "svg-0" }], ["path", { d: "M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0", key: "svg-1" }], ["path", { d: "M12 16h.01", key: "svg-2" }]], _r = V("outline", "alert-triangle", "AlertTriangle", vr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hr = [["path", { d: "M7 7l10 10", key: "svg-0" }], ["path", { d: "M17 8l0 9l-9 0", key: "svg-1" }]], mr = V("outline", "arrow-down-right", "ArrowDownRight", hr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gr = [["path", { d: "M7 5a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2l0 -10", key: "svg-0" }], ["path", { d: "M17 17v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2", key: "svg-1" }]], xr = V("outline", "box-multiple", "BoxMultiple", gr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yr = [["path", { d: "M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5", key: "svg-0" }], ["path", { d: "M12 12l8 -4.5", key: "svg-1" }], ["path", { d: "M12 12l0 9", key: "svg-2" }], ["path", { d: "M12 12l-8 -4.5", key: "svg-3" }]], br = V("outline", "box", "Box", yr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jr = [["path", { d: "M3 21l18 0", key: "svg-0" }], ["path", { d: "M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4", key: "svg-1" }], ["path", { d: "M5 21l0 -10.15", key: "svg-2" }], ["path", { d: "M19 21l0 -10.15", key: "svg-3" }], ["path", { d: "M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4", key: "svg-4" }]], wn = V("outline", "building-store", "BuildingStore", jr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kr = [["path", { d: "M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12", key: "svg-0" }], ["path", { d: "M16 3l0 4", key: "svg-1" }], ["path", { d: "M8 3l0 4", key: "svg-2" }], ["path", { d: "M4 11l16 0", key: "svg-3" }], ["path", { d: "M8 15h2v2h-2l0 -2", key: "svg-4" }]], Cr = V("outline", "calendar-event", "CalendarEvent", kr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nr = [["path", { d: "M3 13a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -6", key: "svg-0" }], ["path", { d: "M15 9a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -10", key: "svg-1" }], ["path", { d: "M9 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -14", key: "svg-2" }], ["path", { d: "M4 20h14", key: "svg-3" }]], Er = V("outline", "chart-bar", "ChartBar", Nr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wr = [["path", { d: "M5 12l5 5l10 -10", key: "svg-0" }]], Sr = V("outline", "check", "Check", wr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rr = [["path", { d: "M6 9l6 6l6 -6", key: "svg-0" }]], ln = V("outline", "chevron-down", "ChevronDown", Rr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Br = [["path", { d: "M15 6l-6 6l6 6", key: "svg-0" }]], Mr = V("outline", "chevron-left", "ChevronLeft", Br);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pr = [["path", { d: "M9 6l6 6l-6 6", key: "svg-0" }]], Tr = V("outline", "chevron-right", "ChevronRight", Pr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ir = [["path", { d: "M6 15l6 -6l6 6", key: "svg-0" }]], Sn = V("outline", "chevron-up", "ChevronUp", Ir);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zr = [["path", { d: "M11 7l-5 5l5 5", key: "svg-0" }], ["path", { d: "M17 7l-5 5l5 5", key: "svg-1" }]], Ar = V("outline", "chevrons-left", "ChevronsLeft", zr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Or = [["path", { d: "M7 7l5 5l-5 5", key: "svg-0" }], ["path", { d: "M13 7l5 5l-5 5", key: "svg-1" }]], Dr = V("outline", "chevrons-right", "ChevronsRight", Or);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $r = [["path", { d: "M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666", key: "svg-0" }], ["path", { d: "M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1", key: "svg-1" }]], Wr = V("outline", "copy", "Copy", $r);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lr = [["path", { d: "M12 6l4 6l5 -4l-2 10h-14l-2 -10l5 4l4 -6", key: "svg-0" }]], Fr = V("outline", "crown", "Crown", Lr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vr = [["path", { d: "M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2", key: "svg-0" }], ["path", { d: "M12 3v3m0 12v3", key: "svg-1" }]], Kr = V("outline", "currency-dollar", "CurrencyDollar", Vr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hr = [["path", { d: "M10.585 10.587a2 2 0 0 0 2.829 2.828", key: "svg-0" }], ["path", { d: "M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87", key: "svg-1" }], ["path", { d: "M3 3l18 18", key: "svg-2" }]], Rn = V("outline", "eye-off", "EyeOff", Hr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ur = [["path", { d: "M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-0" }], ["path", { d: "M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6", key: "svg-1" }]], Yr = V("outline", "eye", "Eye", Ur);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xr = [["path", { d: "M12 20l-3 1v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v3", key: "svg-0" }], ["path", { d: "M16 19h6", key: "svg-1" }], ["path", { d: "M19 16v6", key: "svg-2" }]], Bn = V("outline", "filter-plus", "FilterPlus", Xr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qr = [["path", { d: "M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5", key: "svg-0" }], ["path", { d: "M12 12l8 -4.5", key: "svg-1" }], ["path", { d: "M12 12l0 9", key: "svg-2" }], ["path", { d: "M12 12l-8 -4.5", key: "svg-3" }], ["path", { d: "M16 5.25l-8 4.5", key: "svg-4" }]], Gr = V("outline", "package", "Package", qr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jr = [["path", { d: "M3 3l18 18", key: "svg-0" }], ["path", { d: "M15 4.5l-3.249 3.249m-2.57 1.433l-2.181 .818l-1.5 1.5l7 7l1.5 -1.5l.82 -2.186m1.43 -2.563l3.25 -3.251", key: "svg-1" }], ["path", { d: "M9 15l-4.5 4.5", key: "svg-2" }], ["path", { d: "M14.5 4l5.5 5.5", key: "svg-3" }]], Zr = V("outline", "pinned-off", "PinnedOff", Jr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qr = [["path", { d: "M9 4v6l-2 4v2h10v-2l-2 -4v-6", key: "svg-0" }], ["path", { d: "M12 16l0 5", key: "svg-1" }], ["path", { d: "M8 4l8 0", key: "svg-2" }]], eo = V("outline", "pinned", "Pinned", Qr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const to = [["path", { d: "M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2m0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2m-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6", key: "svg-0" }]], Mn = V("outline", "sparkles", "Sparkles", to);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const no = [["path", { d: "M12 4l-8 4l8 4l8 -4l-8 -4", key: "svg-0" }], ["path", { d: "M4 12l8 4l8 -4", key: "svg-1" }], ["path", { d: "M4 16l8 4l8 -4", key: "svg-2" }]], ro = V("outline", "stack-2", "Stack2", no);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oo = [["path", { d: "M3 17l6 -6l4 4l8 -8", key: "svg-0" }], ["path", { d: "M14 7l7 0l0 7", key: "svg-1" }]], so = V("outline", "trending-up", "TrendingUp", oo);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ao = [["path", { d: "M5 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-0" }], ["path", { d: "M15 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-1" }], ["path", { d: "M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5", key: "svg-2" }]], io = V("outline", "truck", "Truck", ao);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lo = [["path", { d: "M18 6l-12 12", key: "svg-0" }], ["path", { d: "M6 6l12 12", key: "svg-1" }]], co = V("outline", "x", "X", lo);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uo = [["path", { d: "M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-5 3.66a1 1 0 0 0 -1 1v5.585l-2.293 -2.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l4 4c.028 .028 .057 .054 .094 .083l.092 .064l.098 .052l.081 .034l.113 .034l.112 .02l.117 .006l.115 -.007l.114 -.02l.142 -.044l.113 -.054l.111 -.071a.939 .939 0 0 0 .112 -.097l4 -4l.083 -.094a1 1 0 0 0 -1.497 -1.32l-2.293 2.291v-5.584l-.007 -.117a1 1 0 0 0 -.993 -.883z", key: "svg-0" }]], fo = V("filled", "circle-arrow-down-filled", "CircleArrowDownFilled", uo);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const po = [["path", { d: "M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-4.98 3.66l-.163 .01l-.086 .016l-.142 .045l-.113 .054l-.07 .043l-.095 .071l-.058 .054l-4 4l-.083 .094a1 1 0 0 0 1.497 1.32l2.293 -2.293v5.586l.007 .117a1 1 0 0 0 1.993 -.117v-5.585l2.293 2.292l.094 .083a1 1 0 0 0 1.32 -1.497l-4 -4l-.082 -.073l-.089 -.064l-.113 -.062l-.081 -.034l-.113 -.034l-.112 -.02l-.098 -.006z", key: "svg-0" }]], vo = V("filled", "circle-arrow-up-filled", "CircleArrowUpFilled", po), _o = "_frame_1bemm_1", ho = "_table_1bemm_9", mo = "_scroll_1bemm_30", go = "_tableInner_1bemm_50", xo = "_tableHead_1bemm_57", yo = "_tableBody_1bemm_65", bo = "_headRow_1bemm_70", jo = "_row_1bemm_77", ko = "_columnGroup_1bemm_109", Co = "_columnsPinnedStart_1bemm_115", No = "_columnsPinnedEnd_1bemm_126", Eo = "_columnsRegular_1bemm_137", wo = "_headCell_1bemm_187", So = "_headContent_1bemm_224", Ro = "_headLabel_1bemm_236", Bo = "_headButton_1bemm_246", Mo = "_sortButton_1bemm_266", Po = "_resizeHotspot_1bemm_275", To = "_dropIndicator_1bemm_302", Io = "_dropIndicatorStart_1bemm_312", zo = "_cell_1bemm_317", Ao = "_cellContent_1bemm_327", Oo = "_ghost_1bemm_383", Do = "_ghostInner_1bemm_392", $o = "_actionMenu_1bemm_406", Wo = "_actionList_1bemm_414", Lo = "_actionItem_1bemm_419", Fo = "_tooltip_1bemm_441", Vo = "_cellOutline_1bemm_465", I = {
  frame: _o,
  table: ho,
  scroll: mo,
  tableInner: go,
  tableHead: xo,
  tableBody: yo,
  headRow: bo,
  row: jo,
  columnGroup: ko,
  columnsPinnedStart: Co,
  columnsPinnedEnd: No,
  columnsRegular: Eo,
  headCell: wo,
  headContent: So,
  headLabel: Ro,
  headButton: Bo,
  sortButton: Mo,
  resizeHotspot: Po,
  dropIndicator: To,
  dropIndicatorStart: Io,
  cell: zo,
  cellContent: Ao,
  ghost: Oo,
  ghostInner: Do,
  actionMenu: $o,
  actionList: Wo,
  actionItem: Lo,
  tooltip: Fo,
  cellOutline: Vo
}, Pn = fn({});
function pn({
  onAfterSelect: e,
  children: r
}) {
  return /* @__PURE__ */ n.jsx(Pn.Provider, { value: { onAfterSelect: e }, children: r });
}
function vn({ children: e }) {
  return /* @__PURE__ */ n.jsx("div", { className: I.actionList, children: e });
}
function lt({
  onSelect: e,
  children: r,
  className: s
}) {
  const { onAfterSelect: a } = dn(Pn);
  return /* @__PURE__ */ n.jsx(
    "button",
    {
      type: "button",
      className: R(I.actionItem, s),
      onClick: () => {
        e == null || e(), a == null || a();
      },
      children: r
    }
  );
}
function _n({
  open: e,
  anchorRect: r,
  placement: s = "bottom-start",
  offset: a = 6,
  zIndex: i = 1e3,
  children: l
}) {
  const [c, f] = Y(!1);
  if (ye(() => {
    f(!0);
  }, []), !e || !r || !c)
    return null;
  const _ = {
    position: "fixed",
    zIndex: i
  }, y = s.endsWith("end") ? r.right : r.left, g = s.startsWith("top") ? r.top : r.bottom;
  return _.left = Math.round(y), _.top = Math.round(g + a), s.endsWith("end") && (_.transform = "translateX(-100%)"), s.startsWith("top") && (_.transform = `${_.transform ?? ""} translateY(-100%)`), Fn(/* @__PURE__ */ n.jsx("div", { style: _, children: l }), document.body);
}
function Tn({
  open: e,
  onOpenChange: r,
  host: s,
  children: a,
  className: i,
  zIndex: l
}) {
  const [c, f] = Y(!1), _ = ee(null), y = ee(null), g = e ?? c, [x, w] = Y(null), M = (E) => {
    r ? r(E) : f(E);
  };
  return ye(() => {
    var E;
    g && w(((E = _.current) == null ? void 0 : E.getBoundingClientRect()) ?? null);
  }, [g]), ye(() => {
    if (!g) return;
    const E = (P) => {
      var C;
      P.key === "Escape" && (P.preventDefault(), M(!1), (C = _.current) == null || C.focus());
    }, b = (P) => {
      var S, G;
      const C = P.target;
      (S = y.current) != null && S.contains(C) || (G = _.current) != null && G.contains(C) || M(!1);
    };
    return window.addEventListener("keydown", E), window.addEventListener("mousedown", b), () => {
      window.removeEventListener("keydown", E), window.removeEventListener("mousedown", b);
    };
  }, [g]), /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    s({
      open: g,
      hostProps: {
        onClick: (E) => {
          E.preventDefault(), M(!g);
        },
        onKeyDown: (E) => {
          (E.key === "ArrowDown" || E.key === "ArrowUp") && (E.preventDefault(), M(!0));
        },
        "aria-haspopup": !0,
        "aria-expanded": g,
        ref: (E) => {
          _.current = E;
        }
      }
    }),
    /* @__PURE__ */ n.jsx(_n, { open: g, anchorRect: x, placement: "bottom-start", offset: 6, zIndex: l, children: /* @__PURE__ */ n.jsx("div", { ref: y, className: R(I.actionMenu, i), children: a }) })
  ] });
}
function Ko({
  content: e,
  children: r,
  delay: s = 200
}) {
  const [a, i] = Y(!1), [l, c] = Y(null), f = ee(null), _ = ee(null);
  ye(() => () => {
    f.current && window.clearTimeout(f.current);
  }, []);
  const y = () => {
    e && (f.current && window.clearTimeout(f.current), f.current = window.setTimeout(() => {
      var x;
      c(((x = _.current) == null ? void 0 : x.getBoundingClientRect()) ?? null), i(!0);
    }, s));
  }, g = () => {
    f.current && window.clearTimeout(f.current), i(!1);
  };
  return /* @__PURE__ */ n.jsxs("div", { ref: _, onMouseEnter: y, onMouseLeave: g, children: [
    r,
    /* @__PURE__ */ n.jsx(_n, { open: a, anchorRect: l, placement: "top-start", offset: 6, children: /* @__PURE__ */ n.jsx("div", { className: I.tooltip, children: e }) })
  ] });
}
const In = fn(null);
function Ho() {
  const e = dn(In);
  if (!e)
    throw new Error("DataTableContext is missing");
  return e;
}
const zn = fn(null);
function Uo() {
  const e = dn(zn);
  if (!e)
    throw new Error("DataTableCellContext is missing");
  return e;
}
function Yo({
  align: e,
  monospace: r,
  clickable: s = !1,
  active: a = !1,
  children: i,
  ...l
}) {
  const c = Uo(), f = Ho(), _ = ee(null), [y, g] = Y(!1), [x, w] = Y(null), M = e ?? c.align, E = r ?? c.monospace, { value: b, rawValue: P, columnKey: C, filterKey: S, row: G, rowKey: te } = c, U = de(() => {
    if (!C) return null;
    const A = te ?? (G ? f.getRowKey(G) : null);
    return A == null ? null : `${A}:${C}`;
  }, [G, te, C, f]), he = de(() => S || (C && f.filterableColumnKeys.has(C) ? C : null), [S, C, f.filterableColumnKeys]), ne = de(() => {
    if (P == null)
      return !!(b && b.trim() && !["-", "—", "–"].includes(b.trim()));
    if (typeof P == "string") {
      const A = P.trim();
      return !!(A && !["-", "—", "–"].includes(A));
    }
    return typeof P == "number" || typeof P == "boolean" ? !0 : Array.isArray(P) ? P.length > 0 : typeof P == "object" ? Object.keys(P).length > 0 : !1;
  }, [P, b]);
  ye(() => {
    U && g(f.activeContextMenuKey === U);
  }, [U, f.activeContextMenuKey]), ye(() => {
    if (!y) return;
    const A = (se) => {
      var m;
      const Le = se.target;
      (m = _.current) != null && m.contains(Le) || Q();
    }, K = () => Q();
    return window.addEventListener("mousedown", A, !0), window.addEventListener("contextmenu", A, !0), window.addEventListener("scroll", K, !0), () => {
      window.removeEventListener("mousedown", A, !0), window.removeEventListener("contextmenu", A, !0), window.removeEventListener("scroll", K, !0);
    };
  }, [y]);
  const Q = () => {
    U && f.activeContextMenuKey === U && f.setActiveContextMenuKey(null);
  }, Ee = (A) => {
    if (A.preventDefault(), !U || !ne) return;
    if (f.activeContextMenuKey === U) {
      Q();
      return;
    }
    const K = (_.current ?? A.currentTarget).getBoundingClientRect();
    w(K), f.setActiveContextMenuKey(U);
  }, D = async () => {
    var K;
    const A = P == null ? b : String(P);
    if ((K = navigator.clipboard) != null && K.writeText)
      await navigator.clipboard.writeText(A);
    else {
      const se = document.createElement("textarea");
      se.value = A, se.style.position = "fixed", se.style.left = "-9999px", document.body.appendChild(se), se.focus(), se.select(), document.execCommand("copy"), se.remove();
    }
    Q();
  }, oe = () => {
    !C || !he || (f.filterByValue(C, he, P ?? b), Q());
  }, ve = a || y, le = de(() => C ? f.pinnedColumnsStartKeys.includes(C) || f.pinnedColumnsEndKeys.includes(C) : !1, [C, f.pinnedColumnsStartKeys, f.pinnedColumnsEndKeys]);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      ref: _,
      role: s ? "button" : void 0,
      tabIndex: s ? 0 : void 0,
      "data-align": M,
      "data-monospace": E ? "true" : "false",
      "data-clickable": s ? "true" : "false",
      className: I.cell,
      onContextMenu: Ee,
      ...l,
      children: [
        /* @__PURE__ */ n.jsx("span", { className: I.cellContent, "data-cell-content": "true", children: i }),
        /* @__PURE__ */ n.jsx("span", { className: I.cellOutline, "data-active": ve ? "true" : "false" }),
        /* @__PURE__ */ n.jsx(
          _n,
          {
            open: y && ne,
            anchorRect: x,
            placement: "bottom-start",
            zIndex: le ? 220 : 140,
            children: /* @__PURE__ */ n.jsx("div", { className: I.actionMenu, children: /* @__PURE__ */ n.jsx(pn, { onAfterSelect: Q, children: /* @__PURE__ */ n.jsxs(vn, { children: [
              he ? /* @__PURE__ */ n.jsxs(lt, { onSelect: oe, children: [
                /* @__PURE__ */ n.jsx(Bn, { size: 16 }),
                "Filter by value"
              ] }) : null,
              /* @__PURE__ */ n.jsxs(lt, { onSelect: D, children: [
                /* @__PURE__ */ n.jsx(Wr, { size: 16 }),
                "Copy value"
              ] })
            ] }) }) })
          }
        )
      ]
    }
  );
}
const bn = 160, It = 40, Kt = 9999;
function nn(e, r = It, s = Kt) {
  return Math.min(Math.max(e, r), s);
}
function Xo(e, r) {
  if (!r.length) return e;
  const s = new Map(r.map((a, i) => [a, i]));
  return [...e].sort((a, i) => {
    const l = s.get(a.key), c = s.get(i.key);
    return l === void 0 && c === void 0 ? 0 : l === void 0 ? 1 : c === void 0 ? -1 : l - c;
  });
}
function mt(e, r) {
  if (!r) {
    const s = e.id;
    return s == null || s === "" ? void 0 : s;
  }
  return typeof r == "function" ? r(e) : e[r];
}
function cn(e, r) {
  return typeof r.value == "function" ? r.value(e) : typeof r.value == "string" ? e[r.value] : e[r.key];
}
function qo({
  columns: e,
  rows: r,
  rowKey: s,
  size: a = "l",
  rowHover: i = !0,
  rowClickable: l = !1,
  rowActiveKey: c = null,
  onRowClick: f,
  rowDividers: _ = !0,
  sorting: y,
  defaultSorting: g = { sortBy: null, sortOrder: "asc" },
  onSortingChange: x,
  columnWidths: w,
  onColumnResize: M,
  columnsResizing: E = !0,
  columnsReordering: b = !0,
  columnsPinControl: P = !0,
  columnsVisibilityControl: C = !0,
  filterKeys: S,
  onFilterByColumn: G,
  onFilterByValue: te,
  visibleColumns: U,
  defaultVisibleColumns: he,
  onVisibleColumnsChange: ne,
  columnsOrder: Q,
  defaultColumnsOrder: Ee,
  onColumnsOrderChange: D,
  pinnedColumnsStart: oe,
  defaultPinnedColumnsStart: ve,
  onPinnedColumnsStartChange: le,
  pinnedColumnsEnd: A,
  defaultPinnedColumnsEnd: K,
  onPinnedColumnsEndChange: se,
  className: Le,
  style: m
}) {
  var Wt;
  const [$, X] = Y(g), [be, Pe] = Y({}), [Fe, Ze] = Y(Ee ?? []), [Xe, N] = Y(
    he
  ), [j, W] = Y(ve ?? []), [ae, we] = Y(K ?? []), [Te, Ie] = Y(null), H = ee(null), zt = ee(null), Qe = ee(null), je = ee(null), Se = ee({}), ut = ee(null), ze = ee(null), Ut = ee([]), Yt = ee([]), xt = ee([]), Xt = ee(0), qt = ee(0), At = ee(0), [Ot, yt] = Y(!1), [me, bt] = Y(null), [Re, jt] = Y(null), [ot, Gt] = Y(-1), [st, kt] = Y(-1), ke = y ?? $, dt = U ?? Xe, at = Q ?? Fe, re = oe ?? j, Ce = A ?? ae, Ae = de(() => new Set(S ?? []), [S]), et = (o) => {
    x ? x(o) : X(o);
  }, Dt = (o) => {
    ne ? ne(o) : N(o);
  }, ft = (o) => {
    le ? le(o) : W(o);
  }, $t = (o) => {
    D ? D(o) : Ze(o);
  }, pt = (o) => {
    const d = dt ?? e.map((v) => v.key);
    Dt(d.filter((v) => v !== o));
  }, tt = de(() => at.length ? Xo(e, at) : [...e], [e, at]), qe = de(() => Array.isArray(dt) ? tt.filter(
    ({ key: o, frozenStart: d, frozenEnd: v }) => d || v || dt.includes(o)
  ) : tt, [tt, dt]), Ne = de(
    () => qe.filter(
      ({ key: o, frozenStart: d }) => d || re.includes(o)
    ),
    [qe, re]
  ), Oe = de(
    () => qe.filter(
      ({ key: o, frozenStart: d, frozenEnd: v }) => !d && !re.includes(o) && (v || Ce.includes(o))
    ),
    [qe, re, Ce]
  ), Be = de(
    () => qe.filter(
      ({ key: o, frozenStart: d, frozenEnd: v }) => !d && !v && !re.includes(o) && !Ce.includes(o)
    ),
    [qe, re, Ce]
  );
  ye(() => {
    Pe((o) => {
      const d = { ...o };
      return e.forEach((v) => {
        const O = (w == null ? void 0 : w[v.key]) ?? o[v.key] ?? bn;
        d[v.key] = nn(
          O,
          v.minWidth ?? It,
          v.maxWidth ?? Kt
        );
      }), d;
    });
  }, [e, w]);
  const ge = de(() => e.reduce((o, d) => (o[d.key] = nn(
    (w == null ? void 0 : w[d.key]) ?? be[d.key] ?? bn,
    d.minWidth ?? It,
    d.maxWidth ?? Kt
  ), o), {}), [e, w, be]), vt = () => {
    var Et, wt, St;
    if (!H.current) return;
    const o = [...Ne, ...Be, ...Oe];
    let v = o.length > 1 && ut.current === ((Et = o[0]) == null ? void 0 : Et.key) ? 1 : 0;
    o.length > 1 && ze.current && ((wt = o[v]) == null ? void 0 : wt.key) === ze.current && (v = v === 0 ? 1 : 0), (St = o[v]) == null || St.key;
    const O = Ne.map(
      (z) => Se.current[z.key] ?? ge[z.key]
    ), Z = Oe.map(
      (z) => Se.current[z.key] ?? ge[z.key]
    ), ie = Be.map(
      (z) => Se.current[z.key] ?? ge[z.key]
    );
    let nt = O.reduce((z, $e) => z + $e, 0), Me = Z.reduce((z, $e) => z + $e, 0), Ve = ie.reduce((z, $e) => z + $e, 0), it = nt + Ve + Me;
    const Ke = H.current.clientWidth;
    Ke > it && (it = Ke);
    const Lt = O.map((z) => `${z}px`).join(" "), Ft = Z.map((z) => `${z}px`).join(" "), Qt = ie.map((z) => `${z}px`).join(" ");
    Ut.current = O, Yt.current = ie, xt.current = Z, Xt.current = nt, qt.current = Ve, At.current = Me, H.current.style.setProperty(
      "--ui2-table-row-template",
      `${nt}px ${Ve}px ${Me}px`
    ), H.current.style.setProperty("--ui2-table-grid-pinned-start", Lt), H.current.style.setProperty("--ui2-table-grid-regular", Qt), H.current.style.setProperty("--ui2-table-grid-pinned-end", Ft), H.current.style.setProperty("--ui2-table-width-pinned-start", `${nt}px`), H.current.style.setProperty("--ui2-table-width-regular", `${Ve}px`), H.current.style.setProperty("--ui2-table-width-pinned-end", `${Me}px`), H.current.style.setProperty("--ui2-table-total-width", `${it}px`);
  };
  ye(() => {
    vt();
  }, [ge, Ne, Oe, Be]), ye(() => {
    if (!H.current) return;
    const o = H.current, d = () => vt();
    if (typeof ResizeObserver < "u") {
      const v = new ResizeObserver(d);
      return v.observe(o), () => v.disconnect();
    }
    return window.addEventListener("resize", d), () => window.removeEventListener("resize", d);
  }, [H, ge, Ne, Oe, Be]);
  const Ct = (o, d) => {
    const v = e.find((O) => O.key === o);
    return nn(
      d,
      (v == null ? void 0 : v.minWidth) ?? It,
      (v == null ? void 0 : v.maxWidth) ?? Kt
    );
  }, Jt = (o) => {
    const d = o.cloneNode(!0);
    d.style.width = "max-content", d.style.maxWidth = "none", d.style.display = "inline-flex", d.style.whiteSpace = "nowrap", d.style.visibility = "hidden", d.style.position = "absolute", d.style.left = "-9999px", document.body.appendChild(d);
    const { width: v } = d.getBoundingClientRect();
    document.body.removeChild(d);
    const O = v > 0 ? v : o.scrollWidth;
    return Math.ceil(O);
  }, Zt = (o) => {
    const d = window.getComputedStyle(o), v = Number.parseFloat(d.paddingLeft || "0"), O = Number.parseFloat(d.paddingRight || "0");
    return v + O;
  }, t = (o) => {
    if (!H.current) return;
    let d = 0;
    if (Array.from(H.current.querySelectorAll(`[data-column="${o}"]`)).forEach((O) => {
      const Z = O.querySelector("[data-cell-content]") ?? O, ie = Jt(Z) + Zt(O);
      ie > d && (d = ie);
    }), !(d <= 0))
      return Ct(o, d);
  }, u = (o, d) => {
    Se.current[o] = d, ze.current = o, vt(), Pe((v) => ({ ...v, [o]: d })), M == null || M({ key: o, width: d }), window.setTimeout(() => {
      Se.current[o] === d && delete Se.current[o], ze.current === o && (ze.current = null);
    }, 0);
  }, h = () => Ne.reduce((o, d) => o + ge[d.key], 0) + Be.reduce((o, d) => o + ge[d.key], 0) + Oe.reduce((o, d) => o + ge[d.key], 0), k = (o) => {
    if (!H.current) return;
    const d = t(o);
    if (!d) return;
    const v = e.find((Ke) => Ke.key === o), O = ge[o], Z = (v == null ? void 0 : v.minWidth) ?? It, ie = h(), nt = H.current.clientWidth, Me = Math.max(0, nt - ie), Ve = 4, it = 12;
    if (O > d + Ve) {
      u(o, Math.max(d, Z));
      return;
    }
    if (Me >= it && Math.abs(O - d) <= Ve) {
      const Ke = Ct(o, O + Me);
      if (Ke <= O + 1) {
        u(o, Math.max(d, Z));
        return;
      }
      u(o, Ke);
      return;
    }
    u(o, Math.max(d, Z));
  }, L = (o, d) => {
    if (!E || o.button !== 0 && o.pointerType !== "touch") return;
    o.preventDefault(), o.stopPropagation();
    const v = o.currentTarget;
    v.setPointerCapture && v.setPointerCapture(o.pointerId), ut.current = d;
    const O = o.clientX, Z = ge[d];
    je.current = { key: d, startX: O, startWidth: Z };
  }, F = (o, d) => {
    if (!je.current || je.current.key !== d) return;
    o.preventDefault(), o.stopPropagation();
    const v = Ct(d, je.current.startWidth + (o.clientX - je.current.startX));
    Se.current[d] = v, vt();
  }, T = (o, d) => {
    if (!je.current || je.current.key !== d) return;
    o.preventDefault(), o.stopPropagation();
    const v = Se.current[d];
    v && (Pe((Z) => ({ ...Z, [d]: v })), M == null || M({ key: d, width: v })), Se.current = {}, je.current = null;
    const O = o.currentTarget;
    O.releasePointerCapture && O.releasePointerCapture(o.pointerId);
  }, B = (o, d) => {
    o.preventDefault(), o.stopPropagation(), ut.current = d, ze.current = d, k(d);
  }, ce = (o) => {
    let d = 0;
    return o.map((v) => {
      const O = d;
      return d += v, O;
    });
  }, q = (o, d) => {
    if (!b) return;
    const v = o.clientX, O = 5, Z = (nt) => {
      var St;
      if (Math.abs(v - nt.clientX) < O) return;
      window.removeEventListener("mousemove", Z), window.removeEventListener("mouseup", ie), yt(!0), bt(d);
      const Me = tt.map((z) => z.key);
      Gt(Me.indexOf(d));
      const Ve = Ne.map((z) => ge[z.key]), it = Be.map((z) => ge[z.key]), Ke = ce(Ve), Lt = ce(it), Ft = (St = zt.current) == null ? void 0 : St.querySelector("[data-column]"), Qt = Ft ? Ft.offsetLeft : 0, Et = (z) => {
        if (!H.current) return;
        const { left: $e, right: en } = H.current.getBoundingClientRect(), { scrollLeft: Rt } = H.current, Vt = z.clientX - $e + Rt;
        Qe.current && (Qe.current.style.transform = `translateX(${Vt}px)`);
        let He = z.clientX - $e - Qt;
        if (He < 0) return;
        if (He <= Ve.reduce((Bt, Ue) => Bt + Ue, 0)) {
          const Bt = Ke.findIndex(
            (Dn, $n) => He >= Dn && He < (Ke[$n + 1] ?? 1 / 0)
          ), Ue = Ne[Bt];
          jt((Ue == null ? void 0 : Ue.key) ?? null), kt(Me.indexOf((Ue == null ? void 0 : Ue.key) ?? ""));
          return;
        }
        He = He + Rt;
        const On = Lt.findIndex(
          (Bt, Ue) => He >= Bt && He < (Lt[Ue + 1] ?? 1 / 0)
        ), _t = Be[On];
        jt((_t == null ? void 0 : _t.key) ?? null), kt(Me.indexOf((_t == null ? void 0 : _t.key) ?? ""));
        const hn = 100;
        z.clientX < $e + hn ? H.current.scrollLeft = Math.max(0, H.current.scrollLeft - 15) : z.clientX > en - hn && (H.current.scrollLeft = Math.min(
          H.current.scrollWidth - H.current.clientWidth,
          H.current.scrollLeft + 15
        ));
      }, wt = () => {
        if (Re && me && me !== Re) {
          const z = [...Me], $e = z.indexOf(me), en = z.indexOf(Re);
          z.splice($e, 1), z.splice(en, 0, me), $t(z);
          const Rt = re.includes(me), Vt = re.includes(Re);
          Rt && !Vt ? ft(re.filter((He) => He !== me)) : !Rt && Vt && ft([...re, me]);
        }
        yt(!1), bt(null), jt(null), kt(-1), window.removeEventListener("mousemove", Et), window.removeEventListener("mouseup", wt);
      };
      window.addEventListener("mousemove", Et), window.addEventListener("mouseup", wt);
    }, ie = () => {
      window.removeEventListener("mousemove", Z), window.removeEventListener("mouseup", ie);
    };
    window.addEventListener("mousemove", Z), window.addEventListener("mouseup", ie);
  }, J = (o) => {
    re.includes(o) || ft([...re, o]);
  }, fe = (o) => {
    ft(re.filter((d) => d !== o));
  }, De = (o, d) => {
    const v = d ?? (Ae.has(o) ? o : null);
    v && (G == null || G({ columnKey: o, filterKey: v }));
  }, Ge = (o, d, v) => {
    const O = d ?? (Ae.has(o) ? o : null);
    O && (te == null || te({ columnKey: o, filterKey: O, value: v }));
  }, _e = de(() => {
    if (!ke.sortBy) return r;
    const o = e.find((v) => v.key === ke.sortBy);
    if (!o) return r;
    const d = [...r];
    return d.sort((v, O) => {
      if (o.sortFn) return o.sortFn(v, O, ke.sortOrder);
      const Z = cn(v, o), ie = cn(O, o);
      return typeof Z == "string" && typeof ie == "string" ? ke.sortOrder === "desc" ? ie.localeCompare(Z) : Z.localeCompare(ie) : typeof Z == "number" && typeof ie == "number" ? ke.sortOrder === "desc" ? ie - Z : Z - ie : 0;
    }), d;
  }, [r, e, ke]), Nt = de(
    () => ({
      sorting: ke,
      setSorting: et,
      pinnedColumnsStartKeys: re,
      pinnedColumnsEndKeys: Ce,
      pinColumn: J,
      unpinColumn: fe,
      hideColumn: pt,
      columnsReordering: b,
      columnsPinControl: P,
      columnsVisibilityControl: C,
      startDragging: q,
      draggedColumnKey: me,
      targetColumnKey: Re,
      draggedColumnIndex: ot,
      targetColumnIndex: st,
      filterableColumnKeys: Ae,
      filterByColumn: De,
      filterByValue: Ge,
      activeContextMenuKey: Te,
      setActiveContextMenuKey: Ie,
      getRowKey: (o) => mt(o, s) ?? ""
    }),
    [
      ke,
      re,
      Ce,
      b,
      P,
      C,
      me,
      Re,
      ot,
      st,
      Ae,
      Te,
      s
    ]
  );
  return /* @__PURE__ */ n.jsx(In.Provider, { value: Nt, children: /* @__PURE__ */ n.jsx("div", { className: R(I.frame, Le), "data-ui2-component": "DataTable", style: m, children: /* @__PURE__ */ n.jsx("div", { className: I.scroll, ref: H, children: /* @__PURE__ */ n.jsx("div", { className: I.table, "data-size": a, children: /* @__PURE__ */ n.jsxs("div", { className: I.tableInner, children: [
    /* @__PURE__ */ n.jsx("div", { className: I.tableHead, role: "rowgroup", children: /* @__PURE__ */ n.jsxs("div", { className: I.headRow, role: "row", ref: zt, children: [
      Ne.length ? /* @__PURE__ */ n.jsx("div", { className: R(I.columnGroup, I.columnsPinnedStart), "data-group": "pinned-start", children: Ne.map((o) => /* @__PURE__ */ n.jsx(
        rn,
        {
          column: o,
          sorting: ke,
          onSortingChange: et,
          onPin: () => J(o.key),
          onUnpin: () => fe(o.key),
          onHide: () => pt(o.key),
          onFilter: () => De(o.key, o.filterKey),
          onStartDragging: q,
          onResizeStart: L,
          onResizeMove: F,
          onResizeEnd: T,
          onResizeDoubleClick: B,
          canResize: E,
          canPin: P,
          pinned: re.includes(o.key),
          canHide: C,
          canReorder: b,
          canFilter: !!o.filterKey || Ae.has(o.key),
          dragState: {
            draggedColumnKey: me,
            targetColumnKey: Re,
            draggedColumnIndex: ot,
            targetColumnIndex: st
          }
        },
        o.key
      )) }) : null,
      /* @__PURE__ */ n.jsx("div", { className: R(I.columnGroup, I.columnsRegular), "data-group": "regular", children: Be.map((o) => /* @__PURE__ */ n.jsx(
        rn,
        {
          column: o,
          sorting: ke,
          onSortingChange: et,
          onPin: () => J(o.key),
          onUnpin: () => fe(o.key),
          onHide: () => pt(o.key),
          onFilter: () => De(o.key, o.filterKey),
          onStartDragging: q,
          onResizeStart: L,
          onResizeMove: F,
          onResizeEnd: T,
          onResizeDoubleClick: B,
          canResize: E,
          canPin: P,
          pinned: re.includes(o.key),
          canHide: C,
          canReorder: b,
          canFilter: !!o.filterKey || Ae.has(o.key),
          dragState: {
            draggedColumnKey: me,
            targetColumnKey: Re,
            draggedColumnIndex: ot,
            targetColumnIndex: st
          }
        },
        o.key
      )) }),
      Oe.length ? /* @__PURE__ */ n.jsx("div", { className: R(I.columnGroup, I.columnsPinnedEnd), "data-group": "pinned-end", children: Oe.map((o) => /* @__PURE__ */ n.jsx(
        rn,
        {
          column: o,
          sorting: ke,
          onSortingChange: et,
          onPin: () => J(o.key),
          onUnpin: () => fe(o.key),
          onHide: () => pt(o.key),
          onFilter: () => De(o.key, o.filterKey),
          onStartDragging: q,
          onResizeStart: L,
          onResizeMove: F,
          onResizeEnd: T,
          onResizeDoubleClick: B,
          canResize: E,
          canPin: !1,
          pinned: !1,
          canHide: C,
          canReorder: b,
          canFilter: !!o.filterKey || Ae.has(o.key),
          dragState: {
            draggedColumnKey: me,
            targetColumnKey: Re,
            draggedColumnIndex: ot,
            targetColumnIndex: st
          }
        },
        o.key
      )) }) : null,
      Ot ? /* @__PURE__ */ n.jsx("div", { className: I.ghost, ref: Qe, children: /* @__PURE__ */ n.jsx("div", { className: I.ghostInner, children: (Wt = tt.find((o) => o.key === me)) == null ? void 0 : Wt.header }) }) : null
    ] }) }),
    /* @__PURE__ */ n.jsx("div", { className: I.tableBody, role: "rowgroup", children: _e.map((o, d) => /* @__PURE__ */ n.jsxs(
      Go,
      {
        hover: i,
        clickable: l || !!f,
        active: c != null && mt(o, s) === c,
        divider: _,
        onClick: f ? () => f(o) : void 0,
        children: [
          Ne.length ? /* @__PURE__ */ n.jsx("div", { className: R(I.columnGroup, I.columnsPinnedStart), "data-group": "pinned-start", children: Ne.map((v) => /* @__PURE__ */ n.jsx(
            on,
            {
              column: v,
              row: o,
              rowKeyValue: mt(o, s) ?? d
            },
            v.key
          )) }) : null,
          /* @__PURE__ */ n.jsx("div", { className: R(I.columnGroup, I.columnsRegular), "data-group": "regular", children: Be.map((v) => /* @__PURE__ */ n.jsx(
            on,
            {
              column: v,
              row: o,
              rowKeyValue: mt(o, s) ?? d
            },
            v.key
          )) }),
          Oe.length ? /* @__PURE__ */ n.jsx("div", { className: R(I.columnGroup, I.columnsPinnedEnd), "data-group": "pinned-end", children: Oe.map((v) => /* @__PURE__ */ n.jsx(
            on,
            {
              column: v,
              row: o,
              rowKeyValue: mt(o, s) ?? d
            },
            v.key
          )) }) : null
        ]
      },
      mt(o, s) ?? d
    )) })
  ] }) }) }) }) });
}
function Go({
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
      className: I.row,
      "data-hover": r ? "true" : "false",
      "data-divider": i ? "true" : "false",
      "data-clickable": s ? "true" : "false",
      "data-active": a ? "true" : "false",
      onClick: l,
      children: e
    }
  );
}
function rn({
  column: e,
  sorting: r,
  onSortingChange: s,
  onPin: a,
  onUnpin: i,
  onHide: l,
  onFilter: c,
  onStartDragging: f,
  onResizeStart: _,
  onResizeMove: y,
  onResizeEnd: g,
  onResizeDoubleClick: x,
  canResize: w,
  canPin: M,
  canHide: E,
  canReorder: b,
  canFilter: P,
  pinned: C,
  dragState: S
}) {
  const [G, te] = Y(!1), U = r.sortBy === e.key, he = w && (e.resizable ?? !0);
  ye(() => {
    if (!G) return;
    const D = () => te(!1);
    return window.addEventListener("scroll", D, !0), () => window.removeEventListener("scroll", D, !0);
  }, [G]);
  const ne = () => {
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
  }, Q = e.key === S.targetColumnKey && e.key !== S.draggedColumnKey, Ee = S.draggedColumnIndex > S.targetColumnIndex && Q;
  return /* @__PURE__ */ n.jsx(Ko, { content: e.tooltip, children: /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: I.headCell,
      "data-align": e.align ?? "start",
      "data-open": G ? "true" : "false",
      "data-column": e.key,
      onMouseDown: (D) => {
        var oe, ve;
        (ve = (oe = D.target) == null ? void 0 : oe.closest) != null && ve.call(oe, "[data-resize-hotspot]") || !b || e.frozenStart || e.frozenEnd || f(D.nativeEvent, e.key);
      },
      children: [
        /* @__PURE__ */ n.jsx("div", { className: I.headContent, children: /* @__PURE__ */ n.jsx("span", { className: I.headLabel, "data-cell-content": "true", children: e.header }) }),
        /* @__PURE__ */ n.jsx(
          Tn,
          {
            open: G,
            onOpenChange: te,
            host: ({ hostProps: D }) => /* @__PURE__ */ n.jsx("button", { ...D, className: I.headButton, "aria-label": "Column menu" }),
            zIndex: C ? 220 : 140,
            children: /* @__PURE__ */ n.jsx(pn, { onAfterSelect: () => te(!1), children: /* @__PURE__ */ n.jsxs(vn, { children: [
              M && !e.frozenStart && !e.frozenEnd ? C ? /* @__PURE__ */ n.jsxs(lt, { onSelect: i, children: [
                /* @__PURE__ */ n.jsx(Zr, { size: 16 }),
                " Unpin column"
              ] }) : /* @__PURE__ */ n.jsxs(lt, { onSelect: a, children: [
                /* @__PURE__ */ n.jsx(eo, { size: 16 }),
                " Pin column"
              ] }) : null,
              E ? /* @__PURE__ */ n.jsxs(lt, { onSelect: l, children: [
                /* @__PURE__ */ n.jsx(Rn, { size: 16 }),
                " Hide column"
              ] }) : null,
              P ? /* @__PURE__ */ n.jsxs(lt, { onSelect: c, children: [
                /* @__PURE__ */ n.jsx(Bn, { size: 16 }),
                " Filter by column"
              ] }) : null
            ] }) })
          }
        ),
        e.sortable ? /* @__PURE__ */ n.jsx(
          gt,
          {
            size: "xs",
            variant: "tertiary",
            className: I.sortButton,
            active: U,
            textColor: "--ui2-content-secondary",
            "aria-label": `Sort ${typeof e.header == "string" ? e.header : e.key}`,
            onClick: (D) => {
              D.stopPropagation(), ne();
            },
            children: U ? r.sortOrder === "desc" ? /* @__PURE__ */ n.jsx(ln, { size: 14 }) : /* @__PURE__ */ n.jsx(Sn, { size: 14 }) : /* @__PURE__ */ n.jsx(ln, { size: 14 })
          }
        ) : null,
        he ? /* @__PURE__ */ n.jsx(
          "span",
          {
            className: I.resizeHotspot,
            "data-resize-hotspot": "true",
            onPointerDown: (D) => {
              D.preventDefault(), D.stopPropagation(), _(D, e.key);
            },
            onPointerMove: (D) => {
              y(D, e.key);
            },
            onPointerUp: (D) => {
              g(D, e.key);
            },
            onPointerCancel: (D) => {
              g(D, e.key);
            },
            onDoubleClick: (D) => {
              D.preventDefault(), D.stopPropagation(), x(D, e.key);
            }
          }
        ) : null,
        Q ? /* @__PURE__ */ n.jsx("div", { className: R(I.dropIndicator, Ee && I.dropIndicatorStart) }) : null
      ]
    }
  ) });
}
function on({
  column: e,
  row: r,
  rowKeyValue: s
}) {
  const a = cn(r, e), i = e.valueFormatter ? e.valueFormatter(a, r) : a, l = i == null ? "" : String(i), c = e.render ? e.render(r) : l;
  return /* @__PURE__ */ n.jsx(
    zn.Provider,
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
      children: /* @__PURE__ */ n.jsx(Yo, { "data-column": e.key, children: c })
    }
  );
}
const Jo = "_root_s4721_1", Zo = "_header_s4721_10", Qo = "_headerLeft_s4721_19", es = "_headerRight_s4721_28", ts = "_titlePill_s4721_36", ns = "_subtitleBadge_s4721_53", rs = "_subtitleBadgeAi_s4721_70", os = "_tableWrap_s4721_81", ss = "_tableFrame_s4721_85", as = "_footer_s4721_90", is = "_footerText_s4721_99", ls = "_footerActions_s4721_108", cs = "_filterBar_s4721_114", us = "_filterBarContent_s4721_124", ds = "_columnsActionItem_s4721_133", fs = "_columnsActionIcon_s4721_139", ps = "_columnsActionLabel_s4721_147", ue = {
  root: Jo,
  header: Zo,
  headerLeft: Qo,
  headerRight: es,
  titlePill: ts,
  subtitleBadge: ns,
  subtitleBadgeAi: rs,
  tableWrap: os,
  tableFrame: ss,
  footer: as,
  footerText: is,
  footerActions: ls,
  filterBar: cs,
  filterBarContent: us,
  columnsActionItem: ds,
  columnsActionIcon: fs,
  columnsActionLabel: ps
}, vs = 10;
function _s(e) {
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
function hs(e, r) {
  if (!r) {
    const s = e.id;
    return s == null || s === "" ? void 0 : s;
  }
  return typeof r == "function" ? r(e) : e[r];
}
function sn(e, r) {
  return e[r];
}
function ms(e) {
  if (e === "left") return "start";
  if (e === "right") return "end";
  if (e === "center") return "center";
}
function hi({
  columns: e,
  data: r,
  title: s,
  subtitle: a,
  subtitleIcon: i = "none",
  columnsVisibilityControl: l = !1,
  visibleColumns: c,
  defaultVisibleColumns: f,
  onVisibleColumnsChange: _,
  pageSize: y = vs,
  className: g,
  showActions: x = !1,
  headerAction: w,
  onRowClick: M,
  onClearFilter: E,
  rowKey: b,
  filterBar: P,
  filterKeys: C,
  onFilterByColumn: S,
  onFilterByValue: G,
  style: te
}) {
  const [U, he] = Y({ sortBy: null, sortOrder: "asc" }), [ne, Q] = Y(1), [Ee, D] = Y(null), oe = de(() => {
    const j = e.map((W) => ({
      key: String(W.key),
      header: W.label,
      sortable: W.sortable,
      filterKey: W.filterKey,
      align: ms(W.align),
      value: W.key,
      render: W.render ? (ae) => {
        var we;
        return (we = W.render) == null ? void 0 : we.call(W, sn(ae, W.key), ae);
      } : void 0
    }));
    return x ? [
      ...j,
      {
        key: "__actions",
        header: "Actions",
        sortable: !1,
        align: "end",
        render: (W) => /* @__PURE__ */ n.jsx(
          gt,
          {
            variant: "tertiary",
            size: "s",
            onClick: (ae) => ae.stopPropagation(),
            "aria-label": "View",
            children: /* @__PURE__ */ n.jsx(Yr, { size: 16 })
          }
        )
      }
    ] : j;
  }, [e, x]), ve = de(() => oe.map((j) => j.key), [oe]), [le, A] = Y(
    f ?? ve
  ), K = c ?? le ?? ve;
  ye(() => {
    c || A(f ?? ve);
  }, [ve, f, c]);
  const se = (j) => {
    _ ? _(j) : A(j);
  }, Le = de(() => {
    const j = {};
    return e.forEach((W) => {
      const ae = _s(W.width);
      ae != null && (j[String(W.key)] = ae);
    }), x && (j.__actions = 48), j;
  }, [e, x]), m = de(() => {
    if (!U.sortBy) return r;
    const j = oe.find((ae) => ae.key === U.sortBy);
    if (!j) return r;
    const W = [...r];
    return W.sort((ae, we) => {
      const Te = j.key === "__actions" ? null : sn(ae, j.key), Ie = j.key === "__actions" ? null : sn(we, j.key);
      return typeof Te == "number" && typeof Ie == "number" ? U.sortOrder === "desc" ? Ie - Te : Te - Ie : typeof Te == "string" && typeof Ie == "string" ? U.sortOrder === "desc" ? Ie.localeCompare(Te) : Te.localeCompare(Ie) : 0;
    }), W;
  }, [r, oe, U]), $ = Math.max(1, Math.ceil(m.length / y)), X = Math.min(ne, $), be = m.slice((X - 1) * y, X * y);
  ye(() => {
    X !== ne && Q(X);
  }, [X, ne]), ye(() => {
    Q(1);
  }, [y, r.length, U.sortBy, U.sortOrder]);
  const Pe = (j) => {
    const W = hs(j, b);
    W != null && D(W), M == null || M(j);
  }, Fe = mn.toArray(P).flatMap((j) => Wn(j) && j.type === Ln ? mn.toArray(j.props.children) : [j]), Ze = Fe.length, Xe = !!(E && Ze > 1), N = !!(P || Xe);
  return /* @__PURE__ */ n.jsxs("div", { className: R(ue.root, g), style: te, children: [
    (s || a || w || l) && /* @__PURE__ */ n.jsxs("div", { className: ue.header, children: [
      /* @__PURE__ */ n.jsxs("div", { className: ue.headerLeft, children: [
        s ? /* @__PURE__ */ n.jsx("div", { className: ue.titlePill, children: s }) : null,
        a ? /* @__PURE__ */ n.jsxs(
          "span",
          {
            className: R(
              ue.subtitleBadge,
              i === "ai" && ue.subtitleBadgeAi
            ),
            children: [
              i === "ai" ? /* @__PURE__ */ n.jsx(Mn, { size: 14 }) : null,
              a
            ]
          }
        ) : null
      ] }),
      (w || l) && /* @__PURE__ */ n.jsxs("div", { className: ue.headerRight, children: [
        w,
        l ? /* @__PURE__ */ n.jsx(
          Tn,
          {
            host: ({ open: j, hostProps: W }) => /* @__PURE__ */ n.jsx(
              gt,
              {
                ...W,
                variant: "tertiary",
                size: "s",
                active: j,
                "aria-label": "Columns settings",
                children: /* @__PURE__ */ n.jsx(Rn, { size: 16 })
              }
            ),
            children: /* @__PURE__ */ n.jsx(pn, { children: /* @__PURE__ */ n.jsx(vn, { children: oe.map((j) => {
              const W = K.includes(j.key);
              return /* @__PURE__ */ n.jsxs(
                lt,
                {
                  onSelect: () => {
                    if (W && K.length === 1) return;
                    const ae = W ? K.filter((we) => we !== j.key) : [...K, j.key];
                    se(ae);
                  },
                  className: ue.columnsActionItem,
                  children: [
                    /* @__PURE__ */ n.jsx("span", { className: ue.columnsActionIcon, children: W ? /* @__PURE__ */ n.jsx(Sr, { size: 14 }) : null }),
                    /* @__PURE__ */ n.jsx("span", { className: ue.columnsActionLabel, children: j.header })
                  ]
                },
                j.key
              );
            }) }) })
          }
        ) : null
      ] })
    ] }),
    N ? /* @__PURE__ */ n.jsx("div", { className: ue.filterBar, children: /* @__PURE__ */ n.jsxs("div", { className: ue.filterBarContent, children: [
      Fe,
      Xe ? /* @__PURE__ */ n.jsx(ar, { variant: "tertiary", size: "m", onClick: E, children: "Clear filter" }) : null
    ] }) }) : null,
    /* @__PURE__ */ n.jsx("div", { className: ue.tableWrap, children: /* @__PURE__ */ n.jsx(
      qo,
      {
        columns: oe,
        rows: be,
        size: "m",
        sorting: U,
        onSortingChange: he,
        columnWidths: Le,
        visibleColumns: K,
        onVisibleColumnsChange: se,
        filterKeys: C,
        onFilterByColumn: S,
        onFilterByValue: G,
        rowClickable: !!M,
        rowActiveKey: Ee,
        onRowClick: M ? Pe : void 0,
        className: ue.tableFrame
      }
    ) }),
    $ > 1 ? /* @__PURE__ */ n.jsxs("div", { className: ue.footer, children: [
      /* @__PURE__ */ n.jsxs("div", { className: ue.footerText, children: [
        m.length,
        " rows"
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: ue.footerActions, children: [
        /* @__PURE__ */ n.jsxs("span", { className: ue.footerText, children: [
          "Page ",
          X,
          " of ",
          $
        ] }),
        /* @__PURE__ */ n.jsx(
          gt,
          {
            variant: "tertiary",
            size: "s",
            onClick: () => Q(Math.max(1, X - 1)),
            disabled: X === 1,
            "aria-label": "Previous page",
            children: /* @__PURE__ */ n.jsx(Mr, { size: 16 })
          }
        ),
        /* @__PURE__ */ n.jsx(
          gt,
          {
            variant: "tertiary",
            size: "s",
            onClick: () => Q(Math.min($, X + 1)),
            disabled: X === $,
            "aria-label": "Next page",
            children: /* @__PURE__ */ n.jsx(Tr, { size: 16 })
          }
        )
      ] })
    ] }) : null
  ] });
}
const gs = "_badge_gg8ef_1", xs = "_selectWrap_gg8ef_15", ys = "_select_gg8ef_15", bs = "_outlined_gg8ef_37", js = "_approved_gg8ef_41", ks = "_pending_gg8ef_47", Cs = "_rejected_gg8ef_53", Ns = "_mix_gg8ef_59", Je = {
  badge: gs,
  selectWrap: xs,
  select: ys,
  outlined: bs,
  approved: js,
  pending: ks,
  rejected: Cs,
  mix: Ns
}, Es = ["APPROVED", "PENDING", "REJECTED", "Active", "Core", "Mix"];
function mi({
  status: e,
  onChange: r,
  variant: s = "default",
  className: a
}) {
  const i = (c) => {
    r == null || r(c.target.value);
  }, l = e === "APPROVED" || e === "Active" || e === "Core" ? Je.approved : e === "REJECTED" ? Je.rejected : e === "Mix" ? Je.mix : Je.pending;
  return r ? /* @__PURE__ */ n.jsx("div", { className: R(Je.selectWrap, l, a), children: /* @__PURE__ */ n.jsx(
    "select",
    {
      className: R(Je.select, s === "outlined" && Je.outlined),
      value: e,
      onChange: i,
      "aria-label": "Status",
      children: Es.map((c) => /* @__PURE__ */ n.jsx("option", { value: c, children: c }, c))
    }
  ) }) : /* @__PURE__ */ n.jsx(
    "span",
    {
      className: R(
        Je.badge,
        l,
        s === "outlined" && Je.outlined,
        a
      ),
      children: e
    }
  );
}
const ws = "_root_karlk_1", Ss = {
  root: ws
};
function gi({ cluster: e, className: r }) {
  return /* @__PURE__ */ n.jsx("span", { className: R(Ss.root, r), "aria-label": `Cluster ${e}`, children: e });
}
const Rs = "_root_vx2zz_1", Bs = "_track_vx2zz_8", Ms = "_fill_vx2zz_18", Ps = "_green_vx2zz_24", Ts = "_orange_vx2zz_28", Is = "_teal_vx2zz_32", zs = "_label_vx2zz_36", ct = {
  root: Rs,
  track: Bs,
  fill: Ms,
  green: Ps,
  orange: Ts,
  teal: Is,
  label: zs
}, As = {
  green: ct.green,
  orange: ct.orange,
  teal: ct.teal
};
function xi({
  value: e,
  max: r = 100,
  showLabel: s = !0,
  color: a = "green",
  className: i
}) {
  const l = Math.min(e / r * 100, 100);
  return /* @__PURE__ */ n.jsxs("div", { className: R(ct.root, i), children: [
    /* @__PURE__ */ n.jsx("div", { className: ct.track, children: /* @__PURE__ */ n.jsx("div", { className: R(ct.fill, As[a]), style: { width: `${l}%` } }) }),
    s ? /* @__PURE__ */ n.jsxs("span", { className: ct.label, children: [
      Math.round(l),
      "%"
    ] }) : null
  ] });
}
const Os = "_root_3iri6_1", Ds = "_main_3iri6_23", $s = "_heading_3iri6_29", Ws = "_headingText_3iri6_40", Ls = "_iconWrap_3iri6_46", Fs = "_value_3iri6_58", Vs = "_bottom_3iri6_74", Ks = "_meta_3iri6_80", Hs = "_trend_3iri6_89", Us = "_trendIcon_3iri6_100", Ys = "_trendValue_3iri6_108", Xs = "_trendSuffix_3iri6_114", qs = "_trendPositive_3iri6_123", Gs = "_trendNegative_3iri6_127", Js = "_trendNeutral_3iri6_131", pe = {
  root: Os,
  "variant-default": "_variant-default_3iri6_13",
  "variant-large": "_variant-large_3iri6_18",
  main: Ds,
  heading: $s,
  headingText: Ws,
  iconWrap: Ls,
  value: Fs,
  bottom: Vs,
  meta: Ks,
  trend: Hs,
  trendIcon: Us,
  trendValue: Ys,
  trendSuffix: Xs,
  trendPositive: qs,
  trendNegative: Gs,
  trendNeutral: Js
}, Zs = {
  store: wn,
  package: Gr,
  dollar: Kr,
  chart: Er,
  trending: so,
  truck: io,
  calendar: Cr,
  alert: _r,
  critical: pr,
  crown: Fr,
  layers: ro,
  tail: mr,
  sparkles: Mn,
  box: br,
  boxes: xr
};
function yi({ data: e, className: r, variant: s = "default", header: a }) {
  if (!e) return null;
  const i = e.icon ? Zs[e.icon] || wn : null, l = !!(e.trend && e.trendValue), c = e.trend === "down" ? pe.trendNegative : e.trend === "up" ? pe.trendPositive : pe.trendNeutral;
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: R(pe.root, pe[`variant-${s}`], r),
      "data-variant": s,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: pe.main, children: [
          /* @__PURE__ */ n.jsxs("div", { className: pe.heading, children: [
            i ? /* @__PURE__ */ n.jsx("span", { className: pe.iconWrap, "aria-hidden": "true", children: /* @__PURE__ */ n.jsx(i, { size: 16 }) }) : null,
            /* @__PURE__ */ n.jsx("div", { className: pe.headingText, children: a ?? e.title })
          ] }),
          /* @__PURE__ */ n.jsx("div", { className: pe.value, children: e.value })
        ] }),
        /* @__PURE__ */ n.jsxs("div", { className: pe.bottom, children: [
          e.subtitle ? /* @__PURE__ */ n.jsx("div", { className: pe.meta, children: e.subtitle }) : null,
          l ? /* @__PURE__ */ n.jsxs("div", { className: R(pe.trend, c), children: [
            e.trend === "down" ? /* @__PURE__ */ n.jsx("span", { className: pe.trendIcon, "aria-hidden": "true", children: /* @__PURE__ */ n.jsx(fo, { size: 16 }) }) : e.trend === "up" ? /* @__PURE__ */ n.jsx("span", { className: pe.trendIcon, "aria-hidden": "true", children: /* @__PURE__ */ n.jsx(vo, { size: 16 }) }) : null,
            /* @__PURE__ */ n.jsx("span", { className: pe.trendValue, children: e.trendValue }),
            e.target ? /* @__PURE__ */ n.jsx("span", { className: pe.trendSuffix, children: e.target }) : null
          ] }) : null
        ] })
      ]
    }
  );
}
const Qs = "_wrapper_1k6ep_1", ea = "_remove_1k6ep_6", ta = "_root_1k6ep_10", na = "_active_1k6ep_29", ra = "_filled_1k6ep_34", oa = "_content_1k6ep_65", sa = "_leadingVisual_1k6ep_71", aa = "_counter_1k6ep_80", ia = "_text_1k6ep_96", la = "_meta_1k6ep_103", We = {
  wrapper: Qs,
  remove: ea,
  root: ta,
  active: na,
  filled: ra,
  content: oa,
  leadingVisual: sa,
  counter: aa,
  text: ia,
  meta: la
};
function bi({
  as: e,
  asProps: r,
  filled: s = !1,
  removable: a = !1,
  active: i = !1,
  leadingVisual: l,
  meta: c,
  counter: f,
  onRemove: _,
  children: y,
  className: g,
  ...x
}) {
  const w = e ?? "span", M = R(
    We.root,
    s && We.filled,
    a && We.removable,
    i && We.active,
    g
  ), E = /* @__PURE__ */ n.jsxs(
    w,
    {
      className: M,
      ...r,
      ...x,
      "data-ui2-component": a ? void 0 : "Chip",
      children: [
        /* @__PURE__ */ n.jsxs("span", { className: We.content, children: [
          l ? /* @__PURE__ */ n.jsx("span", { className: We.leadingVisual, children: l }) : null,
          y ? /* @__PURE__ */ n.jsx("span", { className: We.text, children: y }) : null
        ] }),
        f ? /* @__PURE__ */ n.jsx("span", { className: We.counter, children: f }) : null,
        c ? /* @__PURE__ */ n.jsx("span", { className: We.meta, children: c }) : null
      ]
    }
  );
  return a ? /* @__PURE__ */ n.jsxs("span", { className: We.wrapper, "data-ui2-component": "Chip", children: [
    E,
    /* @__PURE__ */ n.jsx(
      "button",
      {
        type: "button",
        className: We.remove,
        onClick: _,
        "aria-label": "Remove",
        children: /* @__PURE__ */ n.jsx(co, { size: 14 })
      }
    )
  ] }) : E;
}
const ca = "_root_1qgig_1", ua = "_textContainer_1qgig_20", da = "_title_1qgig_25", fa = "_subtitle_1qgig_26", pa = "_leadingVisual_1qgig_48", va = "_trailingVisual_1qgig_49", _a = "_sizeS_1qgig_65", ha = "_variantSuccess_1qgig_78", ma = "_variantError_1qgig_83", ga = "_variantWarning_1qgig_88", Ye = {
  root: ca,
  textContainer: ua,
  title: da,
  subtitle: fa,
  leadingVisual: pa,
  trailingVisual: va,
  sizeS: _a,
  variantSuccess: ha,
  variantError: ma,
  variantWarning: ga
};
function ji({
  as: e,
  asProps: r,
  size: s = "m",
  variant: a,
  textColor: i,
  backgroundColor: l,
  leadingVisual: c,
  trailingVisual: f,
  subtitle: _,
  children: y,
  className: g,
  style: x,
  ...w
}) {
  const M = e ?? "span";
  return /* @__PURE__ */ n.jsxs(
    M,
    {
      className: R(
        Ye.root,
        s === "s" && Ye.sizeS,
        a === "success" && Ye.variantSuccess,
        a === "error" && Ye.variantError,
        a === "warning" && Ye.variantWarning,
        g
      ),
      style: {
        backgroundColor: l,
        color: i,
        ...x
      },
      "data-ui2-component": "Tag",
      ...r,
      ...w,
      children: [
        c ? /* @__PURE__ */ n.jsx("span", { className: Ye.leadingVisual, children: c }) : null,
        /* @__PURE__ */ n.jsxs("span", { className: Ye.textContainer, children: [
          y ? /* @__PURE__ */ n.jsx("span", { className: Ye.title, children: y }) : null,
          _ ? /* @__PURE__ */ n.jsx("span", { className: Ye.subtitle, children: _ }) : null
        ] }),
        f ? /* @__PURE__ */ n.jsx("span", { className: Ye.trailingVisual, children: f }) : null
      ]
    }
  );
}
const xa = "_root_xtrkz_1", ya = "_collapsed_xtrkz_11", ba = "_header_xtrkz_15", ja = "_accountButton_xtrkz_26", ka = "_accountInfo_xtrkz_43", Ca = "_accountAvatar_xtrkz_50", Na = "_accountName_xtrkz_71", Ea = "_accountUsername_xtrkz_72", wa = "_buttons_xtrkz_100", Sa = "_buttonsCollapsed_xtrkz_108", Ra = "_headerButton_xtrkz_112", Ba = "_headerButtonDisabled_xtrkz_144", Ma = "_headerButtonActive_xtrkz_150", Pa = "_nav_xtrkz_163", Ta = "_menuItem_xtrkz_193", Ia = "_menuButton_xtrkz_197", za = "_menuButtonPseudoHover_xtrkz_237", Aa = "_menuButtonActive_xtrkz_241", Oa = "_menuButtonExpanded_xtrkz_245", Da = "_menuButtonDisabled_xtrkz_249", $a = "_menuButtonText_xtrkz_258", Wa = "_menuButtonIcon_xtrkz_267", La = "_menuButtonChevron_xtrkz_283", Fa = "_menuButtonCompact_xtrkz_292", Va = "_children_xtrkz_298", Ka = "_child_xtrkz_298", Ha = "_childActive_xtrkz_335", Ua = "_childDisabled_xtrkz_339", Ya = "_childText_xtrkz_348", Xa = "_childIcon_xtrkz_354", qa = "_popover_xtrkz_363", Ga = "_popoverTitle_xtrkz_372", Ja = "_footer_xtrkz_437", Za = "_footerExpanded_xtrkz_449", Qa = "_footerBottom_xtrkz_453", ei = "_footerLogo_xtrkz_461", ti = "_version_xtrkz_467", ni = "_footerCollapsed_xtrkz_478", ri = "_iconButton_xtrkz_498", oi = "_pinnedButtonWrap_xtrkz_519", si = "_tooltipHost_xtrkz_524", p = {
  root: xa,
  collapsed: ya,
  header: ba,
  accountButton: ja,
  accountInfo: ka,
  accountAvatar: Ca,
  accountName: Na,
  accountUsername: Ea,
  buttons: wa,
  buttonsCollapsed: Sa,
  headerButton: Ra,
  headerButtonDisabled: Ba,
  headerButtonActive: Ma,
  nav: Pa,
  menuItem: Ta,
  menuButton: Ia,
  menuButtonPseudoHover: za,
  menuButtonActive: Aa,
  menuButtonExpanded: Oa,
  menuButtonDisabled: Da,
  menuButtonText: $a,
  menuButtonIcon: Wa,
  menuButtonChevron: La,
  menuButtonCompact: Fa,
  children: Va,
  child: Ka,
  childActive: Ha,
  childDisabled: Ua,
  childText: Ya,
  childIcon: Xa,
  popover: qa,
  popoverTitle: Ga,
  footer: Ja,
  footerExpanded: Za,
  footerBottom: Qa,
  footerLogo: ei,
  version: ti,
  footerCollapsed: ni,
  iconButton: ri,
  pinnedButtonWrap: oi,
  tooltipHost: si
};
function jn(e, r, s, a) {
  const i = a.x - r.x, l = a.y - r.y, c = s.x - r.x, f = s.y - r.y, _ = e.x - r.x, y = e.y - r.y, g = i * i + l * l, x = i * c + l * f, w = i * _ + l * y, M = c * c + f * f, E = c * _ + f * y, b = g * M - x * x;
  if (b === 0)
    return !1;
  const P = 1 / b, C = (M * w - x * E) * P, S = (g * E - x * w) * P;
  return C >= 0 && S >= 0 && C + S <= 1;
}
function kn(e, r, s = 0) {
  return e.x >= r.left - s && e.x <= r.right + s && e.y >= r.top - s && e.y <= r.bottom + s;
}
function ai(e, r, s, a, i) {
  return jn(e, r, s, a) || jn(e, r, a, i);
}
function ii(e, r, s, a = 8) {
  if (kn(e, r, a) || kn(e, s, a))
    return !0;
  const i = { x: r.right, y: r.top - a }, l = { x: s.left, y: s.top - a }, c = { x: s.left, y: s.bottom + a }, f = { x: r.right, y: r.bottom + a };
  return ai(e, i, l, c, f);
}
function li({ initials: e, name: r, username: s, collapsed: a = !1, className: i, ...l }) {
  return /* @__PURE__ */ n.jsxs("button", { type: "button", className: R(p.accountButton, i), ...l, children: [
    /* @__PURE__ */ n.jsx("div", { className: p.accountAvatar, children: e }),
    a ? null : /* @__PURE__ */ n.jsxs("div", { className: p.accountInfo, children: [
      /* @__PURE__ */ n.jsx("div", { className: p.accountName, children: r }),
      /* @__PURE__ */ n.jsx("div", { className: p.accountUsername, children: s })
    ] })
  ] });
}
function ci({
  actions: e,
  collapsed: r = !1,
  renderTooltip: s,
  className: a,
  ...i
}) {
  return /* @__PURE__ */ n.jsx("div", { className: R(p.buttons, r && p.buttonsCollapsed, a), ...i, children: e.map((l) => {
    const c = /* @__PURE__ */ n.jsx(
      "button",
      {
        type: "button",
        className: R(
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
    return s ? /* @__PURE__ */ n.jsx("div", { className: p.pinnedButtonWrap, children: s({ content: l.label, children: c }) }, l.id) : /* @__PURE__ */ n.jsx("div", { className: p.pinnedButtonWrap, children: c }, l.id);
  }) });
}
function ui({
  icon: e,
  showIcon: r = !0,
  label: s,
  compact: a = !1,
  active: i,
  expanded: l,
  disabled: c,
  pseudoHover: f,
  chevron: _,
  as: y,
  className: g,
  ...x
}) {
  const w = y ?? "button";
  return /* @__PURE__ */ n.jsxs(
    w,
    {
      ...w === "button" ? { type: "button", disabled: c } : null,
      className: R(
        p.menuButton,
        a && p.menuButtonCompact,
        i && p.menuButtonActive,
        l && p.menuButtonExpanded,
        c && p.menuButtonDisabled,
        f && p.menuButtonPseudoHover,
        g
      ),
      ...x,
      children: [
        e && r ? /* @__PURE__ */ n.jsx("span", { className: p.menuButtonIcon, children: e }) : null,
        a ? null : /* @__PURE__ */ n.jsx("span", { className: p.menuButtonText, children: s }),
        !a && _ ? /* @__PURE__ */ n.jsx("span", { className: p.menuButtonChevron, children: _ }) : null
      ]
    }
  );
}
function di({ collapsed: e = !1, version: r, logo: s, toggle: a, className: i, ...l }) {
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: R(p.footer, !e && p.footerExpanded, e && p.footerCollapsed, i),
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
function fi(e) {
  return /* @__PURE__ */ n.jsx("div", { className: R(p.nav, e.className), ...e });
}
function ki({ icon: e, label: r, className: s, ...a }) {
  return /* @__PURE__ */ n.jsx("button", { type: "button", "aria-label": r, className: R(p.iconButton, s), ...a, children: e });
}
const An = un(
  ({ title: e, children: r, className: s, ...a }, i) => /* @__PURE__ */ n.jsxs("div", { ref: i, className: R(p.popover, s), ...a, children: [
    /* @__PURE__ */ n.jsx("div", { className: p.popoverTitle, children: e }),
    r
  ] })
);
An.displayName = "SidebarPopover";
function pi({ content: e, children: r }) {
  return /* @__PURE__ */ n.jsx("span", { className: p.tooltipHost, title: e, children: r });
}
function Ci({
  collapsed: e,
  defaultCollapsed: r = !1,
  onCollapsedChange: s,
  account: a,
  pinnedActions: i = [],
  navItems: l,
  footer: c,
  className: f,
  style: _,
  renderTooltip: y,
  onItemClick: g,
  onChildClick: x
}) {
  const w = y ?? pi, [M, E] = Y(r), b = e ?? M, [P, C] = Y(null), [S, G] = Y(null), te = ee(!1), U = ee(null), he = ee(null), ne = ee({ active: !1 }), Q = ee(null), Ee = de(() => {
    const m = /* @__PURE__ */ new Map();
    return l.forEach(($) => {
      var X;
      $.defaultExpanded && m.set($.id, !0), (X = $.children) != null && X.some((be) => be.active) && m.set($.id, !0);
    }), m;
  }, [l]), [D, oe] = Y(() => Ee), ve = ht(
    (m) => {
      s ? s(m) : E(m);
    },
    [s]
  ), le = ht((m, $) => {
    C(m), G($), he.current = $;
  }, []), A = ht(() => {
    te.current || (C(null), G(null));
  }, []), K = ht(() => {
    Q.current && (window.clearTimeout(Q.current), Q.current = null);
  }, []), se = ht(
    (m = 260) => {
      K(), Q.current = window.setTimeout(() => {
        te.current || (ne.current.active = !1, A());
      }, m);
    },
    [K, A]
  ), Le = ht((m) => {
    oe(($) => {
      const X = new Map($);
      return X.set(m, !$.get(m)), X;
    });
  }, []);
  return ye(() => {
    if (!b || !P)
      return;
    const m = ($) => {
      if (!ne.current.active || te.current || !U.current || !he.current)
        return;
      const X = U.current.getBoundingClientRect(), be = { x: $.clientX, y: $.clientY };
      ii(be, he.current, X, 10) ? K() : (ne.current.active = !1, A());
    };
    return window.addEventListener("mousemove", m), () => {
      window.removeEventListener("mousemove", m);
    };
  }, [P, b, K, A]), ye(() => () => K(), [K]), /* @__PURE__ */ n.jsxs(
    "div",
    {
      "data-ui2-component": "Sidebar",
      "data-collapsed": b ? "true" : "false",
      className: R(p.root, b && p.collapsed, f),
      style: _,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: p.header, children: [
          a ? /* @__PURE__ */ n.jsx(
            li,
            {
              initials: a.initials,
              name: a.name,
              username: a.username,
              collapsed: b,
              onClick: a.onClick
            }
          ) : null,
          /* @__PURE__ */ n.jsx(ci, { actions: i, collapsed: b, renderTooltip: w })
        ] }),
        /* @__PURE__ */ n.jsx(fi, { onClick: () => C(null), children: l.map((m) => {
          var Fe, Ze, Xe;
          const $ = !!((Fe = m.children) != null && Fe.length), X = D.get(m.id) ?? !1, be = b && P === m.id && $ && !m.disabled, Pe = /* @__PURE__ */ n.jsx(
            ui,
            {
              icon: m.icon,
              showIcon: m.showIcon,
              label: m.title,
              compact: b,
              active: m.active,
              expanded: $ && X,
              disabled: m.disabled,
              pseudoHover: be,
              chevron: !b && $ ? X ? /* @__PURE__ */ n.jsx(Sn, { size: 16 }) : /* @__PURE__ */ n.jsx(ln, { size: 16 }) : void 0,
              onClick: () => {
                var N;
                if ($ && !b) {
                  Le(m.id);
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
                !b || !$ || m.disabled || (ne.current.active = !1, K(), le(m.id, N.currentTarget.getBoundingClientRect()));
              },
              onMouseLeave: (N) => {
                if (b) {
                  if (!$ || m.disabled) {
                    A();
                    return;
                  }
                  ne.current.active = !0, se();
                }
              },
              onFocus: () => {
                var j;
                if (!b || !$ || m.disabled)
                  return;
                const N = (j = document.getElementById(`ui2-sidebar-item-${m.id}`)) == null ? void 0 : j.getBoundingClientRect();
                N && le(m.id, N);
              },
              children: [
                /* @__PURE__ */ n.jsx("div", { id: `ui2-sidebar-item-${m.id}`, children: Pe }),
                $ && !b && X ? /* @__PURE__ */ n.jsx("div", { className: p.children, children: (Ze = m.children) == null ? void 0 : Ze.map((N) => /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsxs(
                  "button",
                  {
                    type: "button",
                    className: R(
                      p.child,
                      N.active && p.childActive,
                      N.disabled && p.childDisabled
                    ),
                    disabled: N.disabled,
                    onClick: N.disabled ? void 0 : () => {
                      var j;
                      x == null || x(N, m), (j = N.onClick) == null || j.call(N);
                    },
                    children: [
                      N.icon && N.showIcon !== !1 ? /* @__PURE__ */ n.jsx("span", { className: p.childIcon, children: N.icon }) : null,
                      /* @__PURE__ */ n.jsx("span", { className: p.childText, children: N.title })
                    ]
                  }
                ) }, N.id ?? N.title)) }) : null,
                $ && be && S ? /* @__PURE__ */ n.jsx(
                  An,
                  {
                    ref: U,
                    title: m.title,
                    style: {
                      position: "fixed",
                      top: Math.round(S.top),
                      left: Math.round(S.right + 12)
                    },
                    onMouseEnter: () => {
                      te.current = !0, ne.current.active = !1, K();
                    },
                    onMouseLeave: () => {
                      te.current = !1, se(120);
                    },
                    children: (Xe = m.children) == null ? void 0 : Xe.map((N) => /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsxs(
                      "button",
                      {
                        type: "button",
                        className: R(
                          p.child,
                          N.active && p.childActive,
                          N.disabled && p.childDisabled
                        ),
                        disabled: N.disabled,
                        onClick: N.disabled ? void 0 : () => {
                          var j;
                          x == null || x(N, m), (j = N.onClick) == null || j.call(N);
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
          di,
          {
            collapsed: b,
            version: c == null ? void 0 : c.version,
            logo: /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              c != null && c.logoCollapsedSrc && b ? /* @__PURE__ */ n.jsx("img", { src: c.logoCollapsedSrc, alt: c.logoAlt ?? "Logo", width: c.logoCollapsedWidth ?? 32 }) : null,
              c != null && c.logoExpandedSrc && !b ? /* @__PURE__ */ n.jsx("img", { src: c.logoExpandedSrc, alt: c.logoAlt ?? "Logo", width: c.logoExpandedWidth ?? 131 }) : null
            ] }),
            toggle: c != null && c.toggleButton ? c.toggleButton : /* @__PURE__ */ n.jsx(
              gt,
              {
                "aria-label": b ? (c == null ? void 0 : c.toggleCollapsedLabel) ?? "Expand" : (c == null ? void 0 : c.toggleExpandedLabel) ?? "Collapse",
                variant: "tertiary",
                textColor: "--ui2-content-secondary",
                onClick: () => ve(!b),
                children: b ? /* @__PURE__ */ n.jsx(Dr, { size: 18 }) : /* @__PURE__ */ n.jsx(Ar, { size: 18 })
              }
            )
          }
        )
      ]
    }
  );
}
function Ni({ collapsed: e = !1, className: r, ...s }) {
  return /* @__PURE__ */ n.jsx(
    "div",
    {
      "data-ui2-component": "SidebarShell",
      "data-collapsed": e ? "true" : "false",
      className: R(p.root, e && p.collapsed, r),
      ...s
    }
  );
}
function Ei(e) {
  return /* @__PURE__ */ n.jsx("div", { "data-ui2-component": "SidebarHeader", className: R(p.header, e.className), ...e });
}
function wi({
  initials: e,
  name: r,
  username: s,
  collapsed: a = !1,
  className: i,
  ...l
}) {
  return /* @__PURE__ */ n.jsxs("button", { type: "button", className: R(p.accountButton, i), ...l, children: [
    /* @__PURE__ */ n.jsx("div", { className: p.accountAvatar, children: e }),
    a ? null : /* @__PURE__ */ n.jsxs("div", { className: p.accountInfo, children: [
      /* @__PURE__ */ n.jsx("div", { className: p.accountName, children: r }),
      /* @__PURE__ */ n.jsx("div", { className: p.accountUsername, children: s })
    ] })
  ] });
}
function Si({ icon: e, label: r, active: s, disabled: a, className: i, ...l }) {
  return /* @__PURE__ */ n.jsx(
    "button",
    {
      type: "button",
      "aria-label": r,
      disabled: a,
      className: R(
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
function Ri({
  icon: e,
  label: r,
  compact: s = !1,
  active: a,
  disabled: i,
  pseudoHover: l,
  chevron: c,
  className: f,
  ..._
}) {
  return /* @__PURE__ */ n.jsxs(
    "button",
    {
      type: "button",
      className: R(
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
        !s && c ? /* @__PURE__ */ n.jsx("span", { className: p.menuButtonChevron, children: c }) : null
      ]
    }
  );
}
function Bi({ label: e, icon: r, active: s, disabled: a, className: i, ...l }) {
  return /* @__PURE__ */ n.jsxs(
    "button",
    {
      type: "button",
      className: R(p.child, s && p.childActive, a && p.childDisabled, i),
      disabled: a,
      ...l,
      children: [
        r ? /* @__PURE__ */ n.jsx("span", { className: p.childIcon, children: r }) : null,
        /* @__PURE__ */ n.jsx("span", { className: p.childText, children: e })
      ]
    }
  );
}
function Mi({ collapsed: e = !1, version: r, logo: s, toggle: a, className: i, ...l }) {
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      "data-ui2-component": "SidebarFooter",
      className: R(p.footer, !e && p.footerExpanded, e && p.footerCollapsed, i),
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
  ar as Button,
  gt as ButtonIcon,
  bi as Chip,
  gi as ClusterBadge,
  qo as DataTable,
  Yo as DataTableCell,
  hi as DataTableCompat,
  yi as KPICard,
  xi as ProgressBar,
  Ci as Sidebar,
  wi as SidebarAccountButton,
  Bi as SidebarChildButton,
  di as SidebarFooterPart,
  Mi as SidebarFooterSection,
  Ei as SidebarHeader,
  Si as SidebarHeaderButton,
  ki as SidebarIconButton,
  ui as SidebarItem,
  fi as SidebarNav,
  Ri as SidebarNavButton,
  ci as SidebarPinnedButtons,
  An as SidebarPopover,
  li as SidebarProfile,
  Ni as SidebarShell,
  mi as StatusBadge,
  ji as Tag
};
