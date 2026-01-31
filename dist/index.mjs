import * as se from "react";
import un, { forwardRef as Zt, createElement as Ut, useContext as Qt, createContext as en, useState as U, useEffect as ge, useRef as V, useMemo as ce, useCallback as it } from "react";
import { createPortal as wn } from "react-dom";
var Gt = { exports: {} }, bt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rn;
function kn() {
  if (rn) return bt;
  rn = 1;
  var t = un, o = Symbol.for("react.element"), s = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, c = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(h, y, g) {
    var _, b = {}, I = null, $ = null;
    g !== void 0 && (I = "" + g), y.key !== void 0 && (I = "" + y.key), y.ref !== void 0 && ($ = y.ref);
    for (_ in y) a.call(y, _) && !u.hasOwnProperty(_) && (b[_] = y[_]);
    if (h && h.defaultProps) for (_ in y = h.defaultProps, y) b[_] === void 0 && (b[_] = y[_]);
    return { $$typeof: o, type: h, key: I, ref: $, props: b, _owner: c.current };
  }
  return bt.Fragment = s, bt.jsx = d, bt.jsxs = d, bt;
}
var jt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var on;
function Sn() {
  return on || (on = 1, process.env.NODE_ENV !== "production" && function() {
    var t = un, o = Symbol.for("react.element"), s = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), h = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), R = Symbol.iterator, C = "@@iterator";
    function T(e) {
      if (e === null || typeof e != "object")
        return null;
      var l = R && e[R] || e[C];
      return typeof l == "function" ? l : null;
    }
    var E = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function k(e) {
      {
        for (var l = arguments.length, v = new Array(l > 1 ? l - 1 : 0), m = 1; m < l; m++)
          v[m - 1] = arguments[m];
        X("error", e, v);
      }
    }
    function X(e, l, v) {
      {
        var m = E.ReactDebugCurrentFrame, O = m.getStackAddendum();
        O !== "" && (l += "%s", v = v.concat([O]));
        var L = v.map(function(S) {
          return String(S);
        });
        L.unshift("Warning: " + l), Function.prototype.apply.call(console[e], console, L);
      }
    }
    var ee = !1, q = !1, ue = !1, ne = !1, Q = !1, ke;
    ke = Symbol.for("react.module.reference");
    function M(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === a || e === u || Q || e === c || e === g || e === _ || ne || e === $ || ee || q || ue || typeof e == "object" && e !== null && (e.$$typeof === I || e.$$typeof === b || e.$$typeof === d || e.$$typeof === h || e.$$typeof === y || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ke || e.getModuleId !== void 0));
    }
    function ve(e, l, v) {
      var m = e.displayName;
      if (m)
        return m;
      var O = l.displayName || l.name || "";
      return O !== "" ? v + "(" + O + ")" : v;
    }
    function be(e) {
      return e.displayName || "Context";
    }
    function ae(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && k("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case a:
          return "Fragment";
        case s:
          return "Portal";
        case u:
          return "Profiler";
        case c:
          return "StrictMode";
        case g:
          return "Suspense";
        case _:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case h:
            var l = e;
            return be(l) + ".Consumer";
          case d:
            var v = e;
            return be(v._context) + ".Provider";
          case y:
            return ve(e, e.render, "ForwardRef");
          case b:
            var m = e.displayName || null;
            return m !== null ? m : ae(e.type) || "Memo";
          case I: {
            var O = e, L = O._payload, S = O._init;
            try {
              return ae(S(L));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, K = 0, te, Me, x, A, re, je, He;
    function Ue() {
    }
    Ue.__reactDisabledLog = !0;
    function Ze() {
      {
        if (K === 0) {
          te = console.log, Me = console.info, x = console.warn, A = console.error, re = console.group, je = console.groupCollapsed, He = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ue,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        K++;
      }
    }
    function Qe() {
      {
        if (K--, K === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, e, {
              value: te
            }),
            info: D({}, e, {
              value: Me
            }),
            warn: D({}, e, {
              value: x
            }),
            error: D({}, e, {
              value: A
            }),
            group: D({}, e, {
              value: re
            }),
            groupCollapsed: D({}, e, {
              value: je
            }),
            groupEnd: D({}, e, {
              value: He
            })
          });
        }
        K < 0 && k("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var j = E.ReactCurrentDispatcher, de;
    function Ve(e, l, v) {
      {
        if (de === void 0)
          try {
            throw Error();
          } catch (O) {
            var m = O.stack.trim().match(/\n( *(at )?)/);
            de = m && m[1] || "";
          }
        return `
` + de + e;
      }
    }
    var ct = !1, z;
    {
      var kt = typeof WeakMap == "function" ? WeakMap : Map;
      z = new kt();
    }
    function et(e, l) {
      if (!e || ct)
        return "";
      {
        var v = z.get(e);
        if (v !== void 0)
          return v;
      }
      var m;
      ct = !0;
      var O = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var L;
      L = j.current, j.current = null, Ze();
      try {
        if (l) {
          var S = function() {
            throw Error();
          };
          if (Object.defineProperty(S.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(S, []);
            } catch (n) {
              m = n;
            }
            Reflect.construct(e, [], S);
          } else {
            try {
              S.call();
            } catch (n) {
              m = n;
            }
            e.call(S.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (n) {
            m = n;
          }
          e();
        }
      } catch (n) {
        if (n && m && typeof n.stack == "string") {
          for (var w = n.stack.split(`
`), G = m.stack.split(`
`), F = w.length - 1, Y = G.length - 1; F >= 1 && Y >= 0 && w[F] !== G[Y]; )
            Y--;
          for (; F >= 1 && Y >= 0; F--, Y--)
            if (w[F] !== G[Y]) {
              if (F !== 1 || Y !== 1)
                do
                  if (F--, Y--, Y < 0 || w[F] !== G[Y]) {
                    var le = `
` + w[F].replace(" at new ", " at ");
                    return e.displayName && le.includes("<anonymous>") && (le = le.replace("<anonymous>", e.displayName)), typeof e == "function" && z.set(e, le), le;
                  }
                while (F >= 1 && Y >= 0);
              break;
            }
        }
      } finally {
        ct = !1, j.current = L, Qe(), Error.prepareStackTrace = O;
      }
      var $e = e ? e.displayName || e.name : "", Re = $e ? Ve($e) : "";
      return typeof e == "function" && z.set(e, Re), Re;
    }
    function Se(e, l, v) {
      return et(e, !1);
    }
    function Ce(e) {
      var l = e.prototype;
      return !!(l && l.isReactComponent);
    }
    function De(e, l, v) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return et(e, Ce(e));
      if (typeof e == "string")
        return Ve(e);
      switch (e) {
        case g:
          return Ve("Suspense");
        case _:
          return Ve("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case y:
            return Se(e.render);
          case b:
            return De(e.type, l, v);
          case I: {
            var m = e, O = m._payload, L = m._init;
            try {
              return De(L(O), l, v);
            } catch {
            }
          }
        }
      return "";
    }
    var he = Object.prototype.hasOwnProperty, St = {}, Rt = E.ReactDebugCurrentFrame;
    function tt(e) {
      if (e) {
        var l = e._owner, v = De(e.type, e._source, l ? l.type : null);
        Rt.setExtraStackFrame(v);
      } else
        Rt.setExtraStackFrame(null);
    }
    function zt(e, l, v, m, O) {
      {
        var L = Function.call.bind(he);
        for (var S in e)
          if (L(e, S)) {
            var w = void 0;
            try {
              if (typeof e[S] != "function") {
                var G = Error((m || "React class") + ": " + v + " type `" + S + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[S] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw G.name = "Invariant Violation", G;
              }
              w = e[S](l, S, m, v, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (F) {
              w = F;
            }
            w && !(w instanceof Error) && (tt(O), k("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", m || "React class", v, S, typeof w), tt(null)), w instanceof Error && !(w.message in St) && (St[w.message] = !0, tt(O), k("Failed %s type: %s", v, w.message), tt(null));
          }
      }
    }
    var At = Array.isArray;
    function ut(e) {
      return At(e);
    }
    function Lt(e) {
      {
        var l = typeof Symbol == "function" && Symbol.toStringTag, v = l && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return v;
      }
    }
    function Bt(e) {
      try {
        return oe(e), !1;
      } catch {
        return !0;
      }
    }
    function oe(e) {
      return "" + e;
    }
    function dt(e) {
      if (Bt(e))
        return k("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Lt(e)), oe(e);
    }
    var ye = E.ReactCurrentOwner, ft = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ze, Pt;
    function Ye(e) {
      if (he.call(e, "ref")) {
        var l = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (l && l.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function pt(e) {
      if (he.call(e, "key")) {
        var l = Object.getOwnPropertyDescriptor(e, "key").get;
        if (l && l.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function fe(e, l) {
      typeof e.ref == "string" && ye.current;
    }
    function nt(e, l) {
      {
        var v = function() {
          ze || (ze = !0, k("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", l));
        };
        v.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: v,
          configurable: !0
        });
      }
    }
    function vt(e, l) {
      {
        var v = function() {
          Pt || (Pt = !0, k("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", l));
        };
        v.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: v,
          configurable: !0
        });
      }
    }
    var J = function(e, l, v, m, O, L, S) {
      var w = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: o,
        // Built-in properties that belong on the element
        type: e,
        key: l,
        ref: v,
        props: S,
        // Record the component responsible for creating this element.
        _owner: L
      };
      return w._store = {}, Object.defineProperty(w._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(w, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: m
      }), Object.defineProperty(w, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: O
      }), Object.freeze && (Object.freeze(w.props), Object.freeze(w)), w;
    };
    function Ae(e, l, v, m, O) {
      {
        var L, S = {}, w = null, G = null;
        v !== void 0 && (dt(v), w = "" + v), pt(l) && (dt(l.key), w = "" + l.key), Ye(l) && (G = l.ref, fe(l, O));
        for (L in l)
          he.call(l, L) && !ft.hasOwnProperty(L) && (S[L] = l[L]);
        if (e && e.defaultProps) {
          var F = e.defaultProps;
          for (L in F)
            S[L] === void 0 && (S[L] = F[L]);
        }
        if (w || G) {
          var Y = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          w && nt(S, Y), G && vt(S, Y);
        }
        return J(e, w, G, O, m, ye.current, S);
      }
    }
    var Ee = E.ReactCurrentOwner, Xe = E.ReactDebugCurrentFrame;
    function Le(e) {
      if (e) {
        var l = e._owner, v = De(e.type, e._source, l ? l.type : null);
        Xe.setExtraStackFrame(v);
      } else
        Xe.setExtraStackFrame(null);
    }
    var We;
    We = !1;
    function ht(e) {
      return typeof e == "object" && e !== null && e.$$typeof === o;
    }
    function Ge() {
      {
        if (Ee.current) {
          var e = ae(Ee.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function qe(e) {
      return "";
    }
    var Oe = {};
    function pe(e) {
      {
        var l = Ge();
        if (!l) {
          var v = typeof e == "string" ? e : e.displayName || e.name;
          v && (l = `

Check the top-level render call using <` + v + ">.");
        }
        return l;
      }
    }
    function _e(e, l) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var v = pe(l);
        if (Oe[v])
          return;
        Oe[v] = !0;
        var m = "";
        e && e._owner && e._owner !== Ee.current && (m = " It was passed a child from " + ae(e._owner.type) + "."), Le(e), k('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', v, m), Le(null);
      }
    }
    function xe(e, l) {
      {
        if (typeof e != "object")
          return;
        if (ut(e))
          for (var v = 0; v < e.length; v++) {
            var m = e[v];
            ht(m) && _e(m, l);
          }
        else if (ht(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var O = T(e);
          if (typeof O == "function" && O !== e.entries)
            for (var L = O.call(e), S; !(S = L.next()).done; )
              ht(S.value) && _e(S.value, l);
        }
      }
    }
    function ie(e) {
      {
        var l = e.type;
        if (l == null || typeof l == "string")
          return;
        var v;
        if (typeof l == "function")
          v = l.propTypes;
        else if (typeof l == "object" && (l.$$typeof === y || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        l.$$typeof === b))
          v = l.propTypes;
        else
          return;
        if (v) {
          var m = ae(l);
          zt(v, e.props, "prop", m, e);
        } else if (l.PropTypes !== void 0 && !We) {
          We = !0;
          var O = ae(l);
          k("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", O || "Unknown");
        }
        typeof l.getDefaultProps == "function" && !l.getDefaultProps.isReactClassApproved && k("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function rt(e) {
      {
        for (var l = Object.keys(e.props), v = 0; v < l.length; v++) {
          var m = l[v];
          if (m !== "children" && m !== "key") {
            Le(e), k("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", m), Le(null);
            break;
          }
        }
        e.ref !== null && (Le(e), k("Invalid attribute `ref` supplied to `React.Fragment`."), Le(null));
      }
    }
    var ot = {};
    function Nt(e, l, v, m, O, L) {
      {
        var S = M(e);
        if (!S) {
          var w = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (w += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var G = qe();
          G ? w += G : w += Ge();
          var F;
          e === null ? F = "null" : ut(e) ? F = "array" : e !== void 0 && e.$$typeof === o ? (F = "<" + (ae(e.type) || "Unknown") + " />", w = " Did you accidentally export a JSX literal instead of a component?") : F = typeof e, k("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", F, w);
        }
        var Y = Ae(e, l, v, O, L);
        if (Y == null)
          return Y;
        if (S) {
          var le = l.children;
          if (le !== void 0)
            if (m)
              if (ut(le)) {
                for (var $e = 0; $e < le.length; $e++)
                  xe(le[$e], e);
                Object.freeze && Object.freeze(le);
              } else
                k("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              xe(le, e);
        }
        if (he.call(l, "key")) {
          var Re = ae(e), n = Object.keys(l).filter(function(P) {
            return P !== "key";
          }), i = n.length > 0 ? "{key: someKey, " + n.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ot[Re + i]) {
            var p = n.length > 0 ? "{" + n.join(": ..., ") + ": ...}" : "{}";
            k(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, i, Re, p, Re), ot[Re + i] = !0;
          }
        }
        return e === a ? rt(Y) : ie(Y), Y;
      }
    }
    function Wt(e, l, v) {
      return Nt(e, l, v, !0);
    }
    function $t(e, l, v) {
      return Nt(e, l, v, !1);
    }
    var st = $t, Ft = Wt;
    jt.Fragment = a, jt.jsx = st, jt.jsxs = Ft;
  }()), jt;
}
process.env.NODE_ENV === "production" ? Gt.exports = kn() : Gt.exports = Sn();
var r = Gt.exports;
function sn(t, o) {
  if (typeof t == "function")
    return t(o);
  t != null && (t.current = o);
}
function Rn(...t) {
  return (o) => {
    let s = !1;
    const a = t.map((c) => {
      const u = sn(c, o);
      return !s && typeof u == "function" && (s = !0), u;
    });
    if (s)
      return () => {
        for (let c = 0; c < a.length; c++) {
          const u = a[c];
          typeof u == "function" ? u() : sn(t[c], null);
        }
      };
  };
}
var Bn = Symbol.for("react.lazy"), Dt = se[" use ".trim().toString()];
function Pn(t) {
  return typeof t == "object" && t !== null && "then" in t;
}
function dn(t) {
  return t != null && typeof t == "object" && "$$typeof" in t && t.$$typeof === Bn && "_payload" in t && Pn(t._payload);
}
// @__NO_SIDE_EFFECTS__
function Nn(t) {
  const o = /* @__PURE__ */ On(t), s = se.forwardRef((a, c) => {
    let { children: u, ...d } = a;
    dn(u) && typeof Dt == "function" && (u = Dt(u._payload));
    const h = se.Children.toArray(u), y = h.find(Mn);
    if (y) {
      const g = y.props.children, _ = h.map((b) => b === y ? se.Children.count(g) > 1 ? se.Children.only(null) : se.isValidElement(g) ? g.props.children : null : b);
      return /* @__PURE__ */ r.jsx(o, { ...d, ref: c, children: se.isValidElement(g) ? se.cloneElement(g, void 0, _) : null });
    }
    return /* @__PURE__ */ r.jsx(o, { ...d, ref: c, children: u });
  });
  return s.displayName = `${t}.Slot`, s;
}
var Tn = /* @__PURE__ */ Nn("Slot");
// @__NO_SIDE_EFFECTS__
function On(t) {
  const o = se.forwardRef((s, a) => {
    let { children: c, ...u } = s;
    if (dn(c) && typeof Dt == "function" && (c = Dt(c._payload)), se.isValidElement(c)) {
      const d = zn(c), h = Dn(u, c.props);
      return c.type !== se.Fragment && (h.ref = a ? Rn(a, d) : d), se.cloneElement(c, h);
    }
    return se.Children.count(c) > 1 ? se.Children.only(null) : null;
  });
  return o.displayName = `${t}.SlotClone`, o;
}
var In = Symbol("radix.slottable");
function Mn(t) {
  return se.isValidElement(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === In;
}
function Dn(t, o) {
  const s = { ...o };
  for (const a in o) {
    const c = t[a], u = o[a];
    /^on[A-Z]/.test(a) ? c && u ? s[a] = (...h) => {
      const y = u(...h);
      return c(...h), y;
    } : c && (s[a] = c) : a === "style" ? s[a] = { ...c, ...u } : a === "className" && (s[a] = [c, u].filter(Boolean).join(" "));
  }
  return { ...t, ...s };
}
function zn(t) {
  var a, c;
  let o = (a = Object.getOwnPropertyDescriptor(t.props, "ref")) == null ? void 0 : a.get, s = o && "isReactWarning" in o && o.isReactWarning;
  return s ? t.ref : (o = (c = Object.getOwnPropertyDescriptor(t, "ref")) == null ? void 0 : c.get, s = o && "isReactWarning" in o && o.isReactWarning, s ? t.props.ref : t.props.ref || t.ref);
}
function fn(t) {
  var o, s, a = "";
  if (typeof t == "string" || typeof t == "number") a += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var c = t.length;
    for (o = 0; o < c; o++) t[o] && (s = fn(t[o])) && (a && (a += " "), a += s);
  } else for (s in t) t[s] && (a && (a += " "), a += s);
  return a;
}
function W() {
  for (var t, o, s = 0, a = "", c = arguments.length; s < c; s++) (t = arguments[s]) && (o = fn(t)) && (a && (a += " "), a += o);
  return a;
}
const An = "_root_1j0me_1", Ln = "_disabled_1j0me_29", Wn = "_active_1j0me_72", $n = "_visual_1j0me_123", Fn = "_block_1j0me_131", Ke = {
  root: An,
  disabled: Ln,
  "size-m": "_size-m_1j0me_36",
  "size-l": "_size-l_1j0me_41",
  "variant-secondary": "_variant-secondary_1j0me_46",
  "variant-tertiary": "_variant-tertiary_1j0me_47",
  "variant-destructive": "_variant-destructive_1j0me_52",
  "variant-link": "_variant-link_1j0me_58",
  "variant-primary": "_variant-primary_1j0me_66",
  active: Wn,
  visual: $n,
  block: Fn
}, Ko = Zt(function({
  as: o,
  asChild: s = !1,
  active: a = !1,
  block: c = !1,
  disabled: u = !1,
  size: d = "m",
  variant: h = "primary",
  icon: y,
  textColor: g,
  leadingVisual: _,
  trailingVisual: b,
  className: I,
  children: $,
  ...R
}, C) {
  const T = h === "default" ? "primary" : h === "outline" ? "secondary" : h === "ghost" ? "tertiary" : h, E = d === "default" || d === "sm" || d === "icon" ? "m" : d === "lg" ? "l" : d, k = s ? Tn : o ?? "button", X = _ ?? y;
  return /* @__PURE__ */ r.jsxs(
    k,
    {
      ref: C,
      className: W(
        Ke.root,
        Ke[`size-${E}`],
        Ke[`variant-${T}`],
        a && Ke.active,
        c && Ke.block,
        u && Ke.disabled,
        I
      ),
      style: g ? { "--ui2-button-text-color": `var(${g})` } : void 0,
      "data-ui2-component": "Button",
      disabled: !s && k === "button" ? u : void 0,
      "aria-disabled": s && u ? !0 : void 0,
      ...R,
      children: [
        X ? /* @__PURE__ */ r.jsx("span", { className: Ke.visual, children: X }) : null,
        $,
        b ? /* @__PURE__ */ r.jsx("span", { className: Ke.visual, children: b }) : null
      ]
    }
  );
}), Kn = "_root_1xe83_1", Hn = "_disabled_1xe83_24", Un = "_active_1xe83_31", Vn = "_icon_1xe83_146", Ct = {
  root: Kn,
  disabled: Hn,
  active: Un,
  "variant-secondary": "_variant-secondary_1xe83_43",
  "variant-tertiary": "_variant-tertiary_1xe83_44",
  "variant-inverted": "_variant-inverted_1xe83_45",
  "variant-destructive": "_variant-destructive_1xe83_49",
  "size-xs": "_size-xs_1xe83_120",
  "size-s": "_size-s_1xe83_127",
  "size-m": "_size-m_1xe83_134",
  "size-l": "_size-l_1xe83_140",
  icon: Vn
};
function pn({
  children: t,
  size: o = "m",
  variant: s = "primary",
  active: a = !1,
  disabled: c = !1,
  textColor: u,
  className: d,
  ...h
}) {
  const y = s === "default" ? "primary" : s === "outline" ? "secondary" : s === "ghost" || s === "link" ? "tertiary" : s;
  return /* @__PURE__ */ r.jsx(
    "button",
    {
      type: "button",
      disabled: c,
      className: W(
        Ct.root,
        Ct[`size-${o}`],
        y !== "primary" && Ct[`variant-${y}`],
        c && Ct.disabled,
        d
      ),
      "data-active": a ? "true" : "false",
      style: u ? { "--ui2-button-icon-text-color": `var(${u})` } : void 0,
      ...h,
      children: /* @__PURE__ */ r.jsx("span", { className: Ct.icon, children: t })
    }
  );
}
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Yn = {
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
const Ie = (t, o, s, a) => {
  const c = Zt(
    ({ color: u = "currentColor", size: d = 24, stroke: h = 2, title: y, className: g, children: _, ...b }, I) => Ut(
      "svg",
      {
        ref: I,
        ...Yn[t],
        width: d,
        height: d,
        className: ["tabler-icon", `tabler-icon-${o}`, g].join(" "),
        strokeWidth: h,
        stroke: u,
        ...b
      },
      [
        y && Ut("title", { key: "svg-title" }, y),
        ...a.map(([$, R]) => Ut($, R)),
        ...Array.isArray(_) ? _ : [_]
      ]
    )
  );
  return c.displayName = `${s}`, c;
};
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xn = [["path", { d: "M6 9l6 6l6 -6", key: "svg-0" }]], qt = Ie("outline", "chevron-down", "ChevronDown", Xn);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gn = [["path", { d: "M6 15l6 -6l6 6", key: "svg-0" }]], vn = Ie("outline", "chevron-up", "ChevronUp", Gn);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qn = [["path", { d: "M11 7l-5 5l5 5", key: "svg-0" }], ["path", { d: "M17 7l-5 5l5 5", key: "svg-1" }]], Jn = Ie("outline", "chevrons-left", "ChevronsLeft", qn);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zn = [["path", { d: "M7 7l5 5l-5 5", key: "svg-0" }], ["path", { d: "M13 7l5 5l-5 5", key: "svg-1" }]], Qn = Ie("outline", "chevrons-right", "ChevronsRight", Zn);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const er = [["path", { d: "M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666", key: "svg-0" }], ["path", { d: "M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1", key: "svg-1" }]], tr = Ie("outline", "copy", "Copy", er);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nr = [["path", { d: "M10.585 10.587a2 2 0 0 0 2.829 2.828", key: "svg-0" }], ["path", { d: "M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87", key: "svg-1" }], ["path", { d: "M3 3l18 18", key: "svg-2" }]], rr = Ie("outline", "eye-off", "EyeOff", nr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const or = [["path", { d: "M12 20l-3 1v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v3", key: "svg-0" }], ["path", { d: "M16 19h6", key: "svg-1" }], ["path", { d: "M19 16v6", key: "svg-2" }]], hn = Ie("outline", "filter-plus", "FilterPlus", or);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sr = [["path", { d: "M3 3l18 18", key: "svg-0" }], ["path", { d: "M15 4.5l-3.249 3.249m-2.57 1.433l-2.181 .818l-1.5 1.5l7 7l1.5 -1.5l.82 -2.186m1.43 -2.563l3.25 -3.251", key: "svg-1" }], ["path", { d: "M9 15l-4.5 4.5", key: "svg-2" }], ["path", { d: "M14.5 4l5.5 5.5", key: "svg-3" }]], ar = Ie("outline", "pinned-off", "PinnedOff", sr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ir = [["path", { d: "M9 4v6l-2 4v2h10v-2l-2 -4v-6", key: "svg-0" }], ["path", { d: "M12 16l0 5", key: "svg-1" }], ["path", { d: "M8 4l8 0", key: "svg-2" }]], lr = Ie("outline", "pinned", "Pinned", ir), cr = "_frame_1xy0e_1", ur = "_table_1xy0e_9", dr = "_scroll_1xy0e_30", fr = "_tableInner_1xy0e_50", pr = "_tableHead_1xy0e_57", vr = "_tableBody_1xy0e_65", hr = "_headRow_1xy0e_70", yr = "_row_1xy0e_77", _r = "_columnGroup_1xy0e_99", xr = "_columnsPinnedStart_1xy0e_105", mr = "_columnsPinnedEnd_1xy0e_116", gr = "_columnsRegular_1xy0e_127", br = "_headCell_1xy0e_167", jr = "_headContent_1xy0e_204", Cr = "_headLabel_1xy0e_216", Er = "_headButton_1xy0e_226", wr = "_sortButton_1xy0e_246", kr = "_resizeHotspot_1xy0e_255", Sr = "_dropIndicator_1xy0e_282", Rr = "_dropIndicatorStart_1xy0e_292", Br = "_cell_1xy0e_297", Pr = "_cellContent_1xy0e_307", Nr = "_ghost_1xy0e_363", Tr = "_ghostInner_1xy0e_372", Or = "_actionMenu_1xy0e_386", Ir = "_actionList_1xy0e_394", Mr = "_actionItem_1xy0e_399", Dr = "_tooltip_1xy0e_421", zr = "_cellOutline_1xy0e_445", B = {
  frame: cr,
  table: ur,
  scroll: dr,
  tableInner: fr,
  tableHead: pr,
  tableBody: vr,
  headRow: hr,
  row: yr,
  columnGroup: _r,
  columnsPinnedStart: xr,
  columnsPinnedEnd: mr,
  columnsRegular: gr,
  headCell: br,
  headContent: jr,
  headLabel: Cr,
  headButton: Er,
  sortButton: wr,
  resizeHotspot: kr,
  dropIndicator: Sr,
  dropIndicatorStart: Rr,
  cell: Br,
  cellContent: Pr,
  ghost: Nr,
  ghostInner: Tr,
  actionMenu: Or,
  actionList: Ir,
  actionItem: Mr,
  tooltip: Dr,
  cellOutline: zr
}, yn = en({});
function _n({
  onAfterSelect: t,
  children: o
}) {
  return /* @__PURE__ */ r.jsx(yn.Provider, { value: { onAfterSelect: t }, children: o });
}
function xn({ children: t }) {
  return /* @__PURE__ */ r.jsx("div", { className: B.actionList, children: t });
}
function lt({
  onSelect: t,
  children: o,
  className: s
}) {
  const { onAfterSelect: a } = Qt(yn);
  return /* @__PURE__ */ r.jsx(
    "button",
    {
      type: "button",
      className: W(B.actionItem, s),
      onClick: () => {
        t == null || t(), a == null || a();
      },
      children: o
    }
  );
}
function tn({
  open: t,
  anchorRect: o,
  placement: s = "bottom-start",
  offset: a = 6,
  zIndex: c = 1e3,
  children: u
}) {
  const [d, h] = U(!1);
  if (ge(() => {
    h(!0);
  }, []), !t || !o || !d)
    return null;
  const y = {
    position: "fixed",
    zIndex: c
  }, g = s.endsWith("end") ? o.right : o.left, _ = s.startsWith("top") ? o.top : o.bottom;
  return y.left = Math.round(g), y.top = Math.round(_ + a), s.endsWith("end") && (y.transform = "translateX(-100%)"), s.startsWith("top") && (y.transform = `${y.transform ?? ""} translateY(-100%)`), wn(/* @__PURE__ */ r.jsx("div", { style: y, children: u }), document.body);
}
function Ar({
  open: t,
  onOpenChange: o,
  host: s,
  children: a,
  className: c,
  zIndex: u
}) {
  const [d, h] = U(!1), y = V(null), g = V(null), _ = t ?? d, [b, I] = U(null), $ = (R) => {
    o ? o(R) : h(R);
  };
  return ge(() => {
    var R;
    _ && I(((R = y.current) == null ? void 0 : R.getBoundingClientRect()) ?? null);
  }, [_]), ge(() => {
    if (!_) return;
    const R = (T) => {
      var E;
      T.key === "Escape" && (T.preventDefault(), $(!1), (E = y.current) == null || E.focus());
    }, C = (T) => {
      var k, X;
      const E = T.target;
      (k = g.current) != null && k.contains(E) || (X = y.current) != null && X.contains(E) || $(!1);
    };
    return window.addEventListener("keydown", R), window.addEventListener("mousedown", C), () => {
      window.removeEventListener("keydown", R), window.removeEventListener("mousedown", C);
    };
  }, [_]), /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    s({
      open: _,
      hostProps: {
        onClick: (R) => {
          R.preventDefault(), $(!_);
        },
        onKeyDown: (R) => {
          (R.key === "ArrowDown" || R.key === "ArrowUp") && (R.preventDefault(), $(!0));
        },
        "aria-haspopup": !0,
        "aria-expanded": _,
        ref: (R) => {
          y.current = R;
        }
      }
    }),
    /* @__PURE__ */ r.jsx(tn, { open: _, anchorRect: b, placement: "bottom-start", offset: 6, zIndex: u, children: /* @__PURE__ */ r.jsx("div", { ref: g, className: W(B.actionMenu, c), children: a }) })
  ] });
}
function Lr({
  content: t,
  children: o,
  delay: s = 200
}) {
  const [a, c] = U(!1), [u, d] = U(null), h = V(null), y = V(null);
  ge(() => () => {
    h.current && window.clearTimeout(h.current);
  }, []);
  const g = () => {
    t && (h.current && window.clearTimeout(h.current), h.current = window.setTimeout(() => {
      var b;
      d(((b = y.current) == null ? void 0 : b.getBoundingClientRect()) ?? null), c(!0);
    }, s));
  }, _ = () => {
    h.current && window.clearTimeout(h.current), c(!1);
  };
  return /* @__PURE__ */ r.jsxs("div", { ref: y, onMouseEnter: g, onMouseLeave: _, children: [
    o,
    /* @__PURE__ */ r.jsx(tn, { open: a, anchorRect: u, placement: "top-start", offset: 6, children: /* @__PURE__ */ r.jsx("div", { className: B.tooltip, children: t }) })
  ] });
}
const mn = en(null);
function Wr() {
  const t = Qt(mn);
  if (!t)
    throw new Error("DataTableContext is missing");
  return t;
}
const gn = en(null);
function $r() {
  const t = Qt(gn);
  if (!t)
    throw new Error("DataTableCellContext is missing");
  return t;
}
function Fr({
  align: t,
  monospace: o,
  clickable: s = !1,
  active: a = !1,
  children: c,
  ...u
}) {
  const d = $r(), h = Wr(), y = V(null), [g, _] = U(!1), [b, I] = U(null), $ = t ?? d.align, R = o ?? d.monospace, { value: C, rawValue: T, columnKey: E, filterKey: k, row: X, rowKey: ee } = d, q = ce(() => {
    if (!E) return null;
    const D = ee ?? (X ? h.getRowKey(X) : null);
    return D == null ? null : `${D}:${E}`;
  }, [X, ee, E, h]), ue = ce(() => k || (E && h.filterableColumnKeys.has(E) ? E : null), [k, E, h.filterableColumnKeys]), ne = ce(() => {
    if (T == null)
      return !!(C && C.trim() && !["-", "—", "–"].includes(C.trim()));
    if (typeof T == "string") {
      const D = T.trim();
      return !!(D && !["-", "—", "–"].includes(D));
    }
    return typeof T == "number" || typeof T == "boolean" ? !0 : Array.isArray(T) ? T.length > 0 : typeof T == "object" ? Object.keys(T).length > 0 : !1;
  }, [T, C]);
  ge(() => {
    q && _(h.activeContextMenuKey === q);
  }, [q, h.activeContextMenuKey]), ge(() => {
    if (!g) return;
    const D = (te) => {
      var x;
      const Me = te.target;
      (x = y.current) != null && x.contains(Me) || Q();
    }, K = () => Q();
    return window.addEventListener("mousedown", D, !0), window.addEventListener("contextmenu", D, !0), window.addEventListener("scroll", K, !0), () => {
      window.removeEventListener("mousedown", D, !0), window.removeEventListener("contextmenu", D, !0), window.removeEventListener("scroll", K, !0);
    };
  }, [g]);
  const Q = () => {
    q && h.activeContextMenuKey === q && h.setActiveContextMenuKey(null);
  }, ke = (D) => {
    if (D.preventDefault(), !q || !ne) return;
    if (h.activeContextMenuKey === q) {
      Q();
      return;
    }
    const K = (y.current ?? D.currentTarget).getBoundingClientRect();
    I(K), h.setActiveContextMenuKey(q);
  }, M = async () => {
    var K;
    const D = T == null ? C : String(T);
    if ((K = navigator.clipboard) != null && K.writeText)
      await navigator.clipboard.writeText(D);
    else {
      const te = document.createElement("textarea");
      te.value = D, te.style.position = "fixed", te.style.left = "-9999px", document.body.appendChild(te), te.focus(), te.select(), document.execCommand("copy"), te.remove();
    }
    Q();
  }, ve = () => {
    !E || !ue || (h.filterByValue(E, ue, T ?? C), Q());
  }, be = a || g, ae = ce(() => E ? h.pinnedColumnsStartKeys.includes(E) || h.pinnedColumnsEndKeys.includes(E) : !1, [E, h.pinnedColumnsStartKeys, h.pinnedColumnsEndKeys]);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      ref: y,
      role: s ? "button" : void 0,
      tabIndex: s ? 0 : void 0,
      "data-align": $,
      "data-monospace": R ? "true" : "false",
      "data-clickable": s ? "true" : "false",
      className: B.cell,
      onContextMenu: ke,
      ...u,
      children: [
        /* @__PURE__ */ r.jsx("span", { className: B.cellContent, "data-cell-content": "true", children: c }),
        /* @__PURE__ */ r.jsx("span", { className: B.cellOutline, "data-active": be ? "true" : "false" }),
        /* @__PURE__ */ r.jsx(
          tn,
          {
            open: g && ne,
            anchorRect: b,
            placement: "bottom-start",
            zIndex: ae ? 220 : 140,
            children: /* @__PURE__ */ r.jsx("div", { className: B.actionMenu, children: /* @__PURE__ */ r.jsx(_n, { onAfterSelect: Q, children: /* @__PURE__ */ r.jsxs(xn, { children: [
              ue ? /* @__PURE__ */ r.jsxs(lt, { onSelect: ve, children: [
                /* @__PURE__ */ r.jsx(hn, { size: 16 }),
                "Filter by value"
              ] }) : null,
              /* @__PURE__ */ r.jsxs(lt, { onSelect: M, children: [
                /* @__PURE__ */ r.jsx(tr, { size: 16 }),
                "Copy value"
              ] })
            ] }) }) })
          }
        )
      ]
    }
  );
}
const an = 160, wt = 40, Mt = 9999;
function Vt(t, o = wt, s = Mt) {
  return Math.min(Math.max(t, o), s);
}
function Kr(t, o) {
  if (!o.length) return t;
  const s = new Map(o.map((a, c) => [a, c]));
  return [...t].sort((a, c) => {
    const u = s.get(a.key), d = s.get(c.key);
    return u === void 0 && d === void 0 ? 0 : u === void 0 ? 1 : d === void 0 ? -1 : u - d;
  });
}
function Et(t, o) {
  if (!o) {
    const s = t.id;
    return s == null || s === "" ? void 0 : s;
  }
  return typeof o == "function" ? o(t) : t[o];
}
function Jt(t, o) {
  return typeof o.value == "function" ? o.value(t) : typeof o.value == "string" ? t[o.value] : t[o.key];
}
function Ho({
  columns: t,
  rows: o,
  rowKey: s,
  size: a = "l",
  rowHover: c = !0,
  rowDividers: u = !0,
  sorting: d,
  defaultSorting: h = { sortBy: null, sortOrder: "asc" },
  onSortingChange: y,
  columnWidths: g,
  onColumnResize: _,
  columnsResizing: b = !0,
  columnsReordering: I = !0,
  columnsPinControl: $ = !0,
  columnsVisibilityControl: R = !0,
  filterKeys: C,
  onFilterByColumn: T,
  onFilterByValue: E,
  visibleColumns: k,
  defaultVisibleColumns: X,
  onVisibleColumnsChange: ee,
  columnsOrder: q,
  defaultColumnsOrder: ue,
  onColumnsOrderChange: ne,
  pinnedColumnsStart: Q,
  defaultPinnedColumnsStart: ke,
  onPinnedColumnsStartChange: M,
  pinnedColumnsEnd: ve,
  defaultPinnedColumnsEnd: be,
  onPinnedColumnsEndChange: ae,
  className: D,
  style: K
}) {
  var Re;
  const [te, Me] = U(h), [x, A] = U({}), [re, je] = U(ue ?? []), [He, Ue] = U(
    X
  ), [Ze, Qe] = U(ke ?? []), [j, de] = U(be ?? []), [Ve, ct] = U(null), z = V(null), kt = V(null), et = V(null), Se = V(null), Ce = V({}), De = V(null), he = V(null), St = V([]), Rt = V([]), tt = V([]), zt = V(0), At = V(0), ut = V(0), [Lt, Bt] = U(!1), [oe, dt] = U(null), [ye, ft] = U(null), [ze, Pt] = U(-1), [Ye, pt] = U(-1), fe = d ?? te, nt = k ?? He, vt = q ?? re, J = Q ?? Ze, Ae = ve ?? j, Ee = ce(() => new Set(C ?? []), [C]), Xe = (n) => {
    y ? y(n) : Me(n);
  }, Le = (n) => {
    ee ? ee(n) : Ue(n);
  }, We = (n) => {
    M ? M(n) : Qe(n);
  }, ht = (n) => {
    ne ? ne(n) : je(n);
  }, Ge = (n) => {
    const i = nt ?? t.map((p) => p.key);
    Le(i.filter((p) => p !== n));
  }, qe = ce(() => vt.length ? Kr(t, vt) : [...t], [t, vt]), Oe = ce(() => Array.isArray(nt) ? qe.filter(
    ({ key: n, frozenStart: i, frozenEnd: p }) => i || p || nt.includes(n)
  ) : qe, [qe, nt]), pe = ce(
    () => Oe.filter(
      ({ key: n, frozenStart: i }) => i || J.includes(n)
    ),
    [Oe, J]
  ), _e = ce(
    () => Oe.filter(
      ({ key: n, frozenStart: i, frozenEnd: p }) => !i && !J.includes(n) && (p || Ae.includes(n))
    ),
    [Oe, J, Ae]
  ), xe = ce(
    () => Oe.filter(
      ({ key: n, frozenStart: i, frozenEnd: p }) => !i && !p && !J.includes(n) && !Ae.includes(n)
    ),
    [Oe, J, Ae]
  );
  ge(() => {
    A((n) => {
      const i = { ...n };
      return t.forEach((p) => {
        const P = (g == null ? void 0 : g[p.key]) ?? n[p.key] ?? an;
        i[p.key] = Vt(
          P,
          p.minWidth ?? wt,
          p.maxWidth ?? Mt
        );
      }), i;
    });
  }, [t, g]);
  const ie = ce(() => t.reduce((n, i) => (n[i.key] = Vt(
    (g == null ? void 0 : g[i.key]) ?? x[i.key] ?? an,
    i.minWidth ?? wt,
    i.maxWidth ?? Mt
  ), n), {}), [t, g, x]), rt = () => {
    var yt, _t, xt;
    if (!z.current) return;
    const n = [...pe, ...xe, ..._e];
    let p = n.length > 1 && De.current === ((yt = n[0]) == null ? void 0 : yt.key) ? 1 : 0;
    n.length > 1 && he.current && ((_t = n[p]) == null ? void 0 : _t.key) === he.current && (p = p === 0 ? 1 : 0), (xt = n[p]) == null || xt.key;
    const P = pe.map(
      (N) => Ce.current[N.key] ?? ie[N.key]
    ), H = _e.map(
      (N) => Ce.current[N.key] ?? ie[N.key]
    ), Z = xe.map(
      (N) => Ce.current[N.key] ?? ie[N.key]
    );
    let Fe = P.reduce((N, we) => N + we, 0), me = H.reduce((N, we) => N + we, 0), Be = Z.reduce((N, we) => N + we, 0), Je = Fe + Be + me;
    const Pe = z.current.clientWidth;
    Pe > Je && (Je = Pe);
    const Tt = P.map((N) => `${N}px`).join(" "), Ot = H.map((N) => `${N}px`).join(" "), Kt = Z.map((N) => `${N}px`).join(" ");
    St.current = P, Rt.current = Z, tt.current = H, zt.current = Fe, At.current = Be, ut.current = me, z.current.style.setProperty(
      "--ui2-table-row-template",
      `${Fe}px ${Be}px ${me}px`
    ), z.current.style.setProperty("--ui2-table-grid-pinned-start", Tt), z.current.style.setProperty("--ui2-table-grid-regular", Kt), z.current.style.setProperty("--ui2-table-grid-pinned-end", Ot), z.current.style.setProperty("--ui2-table-width-pinned-start", `${Fe}px`), z.current.style.setProperty("--ui2-table-width-regular", `${Be}px`), z.current.style.setProperty("--ui2-table-width-pinned-end", `${me}px`), z.current.style.setProperty("--ui2-table-total-width", `${Je}px`);
  };
  ge(() => {
    rt();
  }, [ie, pe, _e, xe]), ge(() => {
    if (!z.current) return;
    const n = z.current, i = () => rt();
    if (typeof ResizeObserver < "u") {
      const p = new ResizeObserver(i);
      return p.observe(n), () => p.disconnect();
    }
    return window.addEventListener("resize", i), () => window.removeEventListener("resize", i);
  }, [z, ie, pe, _e, xe]);
  const ot = (n, i) => {
    const p = t.find((P) => P.key === n);
    return Vt(
      i,
      (p == null ? void 0 : p.minWidth) ?? wt,
      (p == null ? void 0 : p.maxWidth) ?? Mt
    );
  }, Nt = (n) => {
    const i = n.cloneNode(!0);
    i.style.width = "max-content", i.style.maxWidth = "none", i.style.display = "inline-flex", i.style.whiteSpace = "nowrap", i.style.visibility = "hidden", i.style.position = "absolute", i.style.left = "-9999px", document.body.appendChild(i);
    const { width: p } = i.getBoundingClientRect();
    document.body.removeChild(i);
    const P = p > 0 ? p : n.scrollWidth;
    return Math.ceil(P);
  }, Wt = (n) => {
    const i = window.getComputedStyle(n), p = Number.parseFloat(i.paddingLeft || "0"), P = Number.parseFloat(i.paddingRight || "0");
    return p + P;
  }, $t = (n) => {
    if (!z.current) return;
    let i = 0;
    if (Array.from(z.current.querySelectorAll(`[data-column="${n}"]`)).forEach((P) => {
      const H = P.querySelector("[data-cell-content]") ?? P, Z = Nt(H) + Wt(P);
      Z > i && (i = Z);
    }), !(i <= 0))
      return ot(n, i);
  }, st = (n, i) => {
    Ce.current[n] = i, he.current = n, rt(), A((p) => ({ ...p, [n]: i })), _ == null || _({ key: n, width: i }), window.setTimeout(() => {
      Ce.current[n] === i && delete Ce.current[n], he.current === n && (he.current = null);
    }, 0);
  }, Ft = () => pe.reduce((n, i) => n + ie[i.key], 0) + xe.reduce((n, i) => n + ie[i.key], 0) + _e.reduce((n, i) => n + ie[i.key], 0), e = (n) => {
    if (!z.current) return;
    const i = $t(n);
    if (!i) return;
    const p = t.find((Pe) => Pe.key === n), P = ie[n], H = (p == null ? void 0 : p.minWidth) ?? wt, Z = Ft(), Fe = z.current.clientWidth, me = Math.max(0, Fe - Z), Be = 4, Je = 12;
    if (P > i + Be) {
      st(n, Math.max(i, H));
      return;
    }
    if (me >= Je && Math.abs(P - i) <= Be) {
      const Pe = ot(n, P + me);
      if (Pe <= P + 1) {
        st(n, Math.max(i, H));
        return;
      }
      st(n, Pe);
      return;
    }
    st(n, Math.max(i, H));
  }, l = (n, i) => {
    if (!b || n.button !== 0 && n.pointerType !== "touch") return;
    n.preventDefault(), n.stopPropagation();
    const p = n.currentTarget;
    p.setPointerCapture && p.setPointerCapture(n.pointerId), De.current = i;
    const P = n.clientX, H = ie[i];
    Se.current = { key: i, startX: P, startWidth: H };
  }, v = (n, i) => {
    if (!Se.current || Se.current.key !== i) return;
    n.preventDefault(), n.stopPropagation();
    const p = ot(i, Se.current.startWidth + (n.clientX - Se.current.startX));
    Ce.current[i] = p, rt();
  }, m = (n, i) => {
    if (!Se.current || Se.current.key !== i) return;
    n.preventDefault(), n.stopPropagation();
    const p = Ce.current[i];
    p && (A((H) => ({ ...H, [i]: p })), _ == null || _({ key: i, width: p })), Ce.current = {}, Se.current = null;
    const P = n.currentTarget;
    P.releasePointerCapture && P.releasePointerCapture(n.pointerId);
  }, O = (n, i) => {
    n.preventDefault(), n.stopPropagation(), De.current = i, he.current = i, e(i);
  }, L = (n) => {
    let i = 0;
    return n.map((p) => {
      const P = i;
      return i += p, P;
    });
  }, S = (n, i) => {
    if (!I) return;
    const p = n.clientX, P = 5, H = (Fe) => {
      var xt;
      if (Math.abs(p - Fe.clientX) < P) return;
      window.removeEventListener("mousemove", H), window.removeEventListener("mouseup", Z), Bt(!0), dt(i);
      const me = qe.map((N) => N.key);
      Pt(me.indexOf(i));
      const Be = pe.map((N) => ie[N.key]), Je = xe.map((N) => ie[N.key]), Pe = L(Be), Tt = L(Je), Ot = (xt = kt.current) == null ? void 0 : xt.querySelector("[data-column]"), Kt = Ot ? Ot.offsetLeft : 0, yt = (N) => {
        if (!z.current) return;
        const { left: we, right: Ht } = z.current.getBoundingClientRect(), { scrollLeft: mt } = z.current, It = N.clientX - we + mt;
        et.current && (et.current.style.transform = `translateX(${It}px)`);
        let Ne = N.clientX - we - Kt;
        if (Ne < 0) return;
        if (Ne <= Be.reduce((gt, Te) => gt + Te, 0)) {
          const gt = Pe.findIndex(
            (Cn, En) => Ne >= Cn && Ne < (Pe[En + 1] ?? 1 / 0)
          ), Te = pe[gt];
          ft((Te == null ? void 0 : Te.key) ?? null), pt(me.indexOf((Te == null ? void 0 : Te.key) ?? ""));
          return;
        }
        Ne = Ne + mt;
        const jn = Tt.findIndex(
          (gt, Te) => Ne >= gt && Ne < (Tt[Te + 1] ?? 1 / 0)
        ), at = xe[jn];
        ft((at == null ? void 0 : at.key) ?? null), pt(me.indexOf((at == null ? void 0 : at.key) ?? ""));
        const nn = 100;
        N.clientX < we + nn ? z.current.scrollLeft = Math.max(0, z.current.scrollLeft - 15) : N.clientX > Ht - nn && (z.current.scrollLeft = Math.min(
          z.current.scrollWidth - z.current.clientWidth,
          z.current.scrollLeft + 15
        ));
      }, _t = () => {
        if (ye && oe && oe !== ye) {
          const N = [...me], we = N.indexOf(oe), Ht = N.indexOf(ye);
          N.splice(we, 1), N.splice(Ht, 0, oe), ht(N);
          const mt = J.includes(oe), It = J.includes(ye);
          mt && !It ? We(J.filter((Ne) => Ne !== oe)) : !mt && It && We([...J, oe]);
        }
        Bt(!1), dt(null), ft(null), pt(-1), window.removeEventListener("mousemove", yt), window.removeEventListener("mouseup", _t);
      };
      window.addEventListener("mousemove", yt), window.addEventListener("mouseup", _t);
    }, Z = () => {
      window.removeEventListener("mousemove", H), window.removeEventListener("mouseup", Z);
    };
    window.addEventListener("mousemove", H), window.addEventListener("mouseup", Z);
  }, w = (n) => {
    J.includes(n) || We([...J, n]);
  }, G = (n) => {
    We(J.filter((i) => i !== n));
  }, F = (n, i) => {
    const p = i ?? (Ee.has(n) ? n : null);
    p && (T == null || T({ columnKey: n, filterKey: p }));
  }, Y = (n, i, p) => {
    const P = i ?? (Ee.has(n) ? n : null);
    P && (E == null || E({ columnKey: n, filterKey: P, value: p }));
  }, le = ce(() => {
    if (!fe.sortBy) return o;
    const n = t.find((p) => p.key === fe.sortBy);
    if (!n) return o;
    const i = [...o];
    return i.sort((p, P) => {
      if (n.sortFn) return n.sortFn(p, P, fe.sortOrder);
      const H = Jt(p, n), Z = Jt(P, n);
      return typeof H == "string" && typeof Z == "string" ? fe.sortOrder === "desc" ? Z.localeCompare(H) : H.localeCompare(Z) : typeof H == "number" && typeof Z == "number" ? fe.sortOrder === "desc" ? Z - H : H - Z : 0;
    }), i;
  }, [o, t, fe]), $e = ce(
    () => ({
      sorting: fe,
      setSorting: Xe,
      pinnedColumnsStartKeys: J,
      pinnedColumnsEndKeys: Ae,
      pinColumn: w,
      unpinColumn: G,
      hideColumn: Ge,
      columnsReordering: I,
      columnsPinControl: $,
      columnsVisibilityControl: R,
      startDragging: S,
      draggedColumnKey: oe,
      targetColumnKey: ye,
      draggedColumnIndex: ze,
      targetColumnIndex: Ye,
      filterableColumnKeys: Ee,
      filterByColumn: F,
      filterByValue: Y,
      activeContextMenuKey: Ve,
      setActiveContextMenuKey: ct,
      getRowKey: (n) => Et(n, s) ?? ""
    }),
    [
      fe,
      J,
      Ae,
      I,
      $,
      R,
      oe,
      ye,
      ze,
      Ye,
      Ee,
      Ve,
      s
    ]
  );
  return /* @__PURE__ */ r.jsx(mn.Provider, { value: $e, children: /* @__PURE__ */ r.jsx("div", { className: W(B.frame, D), "data-ui2-component": "DataTable", style: K, children: /* @__PURE__ */ r.jsx("div", { className: B.scroll, ref: z, children: /* @__PURE__ */ r.jsx("div", { className: B.table, "data-size": a, children: /* @__PURE__ */ r.jsxs("div", { className: B.tableInner, children: [
    /* @__PURE__ */ r.jsx("div", { className: B.tableHead, role: "rowgroup", children: /* @__PURE__ */ r.jsxs("div", { className: B.headRow, role: "row", ref: kt, children: [
      pe.length ? /* @__PURE__ */ r.jsx("div", { className: W(B.columnGroup, B.columnsPinnedStart), "data-group": "pinned-start", children: pe.map((n) => /* @__PURE__ */ r.jsx(
        Yt,
        {
          column: n,
          sorting: fe,
          onSortingChange: Xe,
          onPin: () => w(n.key),
          onUnpin: () => G(n.key),
          onHide: () => Ge(n.key),
          onFilter: () => F(n.key, n.filterKey),
          onStartDragging: S,
          onResizeStart: l,
          onResizeMove: v,
          onResizeEnd: m,
          onResizeDoubleClick: O,
          canResize: b,
          canPin: $,
          pinned: J.includes(n.key),
          canHide: R,
          canReorder: I,
          canFilter: !!n.filterKey || Ee.has(n.key),
          dragState: {
            draggedColumnKey: oe,
            targetColumnKey: ye,
            draggedColumnIndex: ze,
            targetColumnIndex: Ye
          }
        },
        n.key
      )) }) : null,
      /* @__PURE__ */ r.jsx("div", { className: W(B.columnGroup, B.columnsRegular), "data-group": "regular", children: xe.map((n) => /* @__PURE__ */ r.jsx(
        Yt,
        {
          column: n,
          sorting: fe,
          onSortingChange: Xe,
          onPin: () => w(n.key),
          onUnpin: () => G(n.key),
          onHide: () => Ge(n.key),
          onFilter: () => F(n.key, n.filterKey),
          onStartDragging: S,
          onResizeStart: l,
          onResizeMove: v,
          onResizeEnd: m,
          onResizeDoubleClick: O,
          canResize: b,
          canPin: $,
          pinned: J.includes(n.key),
          canHide: R,
          canReorder: I,
          canFilter: !!n.filterKey || Ee.has(n.key),
          dragState: {
            draggedColumnKey: oe,
            targetColumnKey: ye,
            draggedColumnIndex: ze,
            targetColumnIndex: Ye
          }
        },
        n.key
      )) }),
      _e.length ? /* @__PURE__ */ r.jsx("div", { className: W(B.columnGroup, B.columnsPinnedEnd), "data-group": "pinned-end", children: _e.map((n) => /* @__PURE__ */ r.jsx(
        Yt,
        {
          column: n,
          sorting: fe,
          onSortingChange: Xe,
          onPin: () => w(n.key),
          onUnpin: () => G(n.key),
          onHide: () => Ge(n.key),
          onFilter: () => F(n.key, n.filterKey),
          onStartDragging: S,
          onResizeStart: l,
          onResizeMove: v,
          onResizeEnd: m,
          onResizeDoubleClick: O,
          canResize: b,
          canPin: !1,
          pinned: !1,
          canHide: R,
          canReorder: I,
          canFilter: !!n.filterKey || Ee.has(n.key),
          dragState: {
            draggedColumnKey: oe,
            targetColumnKey: ye,
            draggedColumnIndex: ze,
            targetColumnIndex: Ye
          }
        },
        n.key
      )) }) : null,
      Lt ? /* @__PURE__ */ r.jsx("div", { className: B.ghost, ref: et, children: /* @__PURE__ */ r.jsx("div", { className: B.ghostInner, children: (Re = qe.find((n) => n.key === oe)) == null ? void 0 : Re.header }) }) : null
    ] }) }),
    /* @__PURE__ */ r.jsx("div", { className: B.tableBody, role: "rowgroup", children: le.map((n, i) => /* @__PURE__ */ r.jsxs(
      Hr,
      {
        hover: c,
        divider: u,
        children: [
          pe.length ? /* @__PURE__ */ r.jsx("div", { className: W(B.columnGroup, B.columnsPinnedStart), "data-group": "pinned-start", children: pe.map((p) => /* @__PURE__ */ r.jsx(
            Xt,
            {
              column: p,
              row: n,
              rowKeyValue: Et(n, s) ?? i
            },
            p.key
          )) }) : null,
          /* @__PURE__ */ r.jsx("div", { className: W(B.columnGroup, B.columnsRegular), "data-group": "regular", children: xe.map((p) => /* @__PURE__ */ r.jsx(
            Xt,
            {
              column: p,
              row: n,
              rowKeyValue: Et(n, s) ?? i
            },
            p.key
          )) }),
          _e.length ? /* @__PURE__ */ r.jsx("div", { className: W(B.columnGroup, B.columnsPinnedEnd), "data-group": "pinned-end", children: _e.map((p) => /* @__PURE__ */ r.jsx(
            Xt,
            {
              column: p,
              row: n,
              rowKeyValue: Et(n, s) ?? i
            },
            p.key
          )) }) : null
        ]
      },
      Et(n, s) ?? i
    )) })
  ] }) }) }) }) });
}
function Hr({
  children: t,
  hover: o,
  divider: s
}) {
  return /* @__PURE__ */ r.jsx("div", { className: B.row, "data-hover": o ? "true" : "false", "data-divider": s ? "true" : "false", children: t });
}
function Yt({
  column: t,
  sorting: o,
  onSortingChange: s,
  onPin: a,
  onUnpin: c,
  onHide: u,
  onFilter: d,
  onStartDragging: h,
  onResizeStart: y,
  onResizeMove: g,
  onResizeEnd: _,
  onResizeDoubleClick: b,
  canResize: I,
  canPin: $,
  canHide: R,
  canReorder: C,
  canFilter: T,
  pinned: E,
  dragState: k
}) {
  const [X, ee] = U(!1), q = o.sortBy === t.key, ue = I && (t.resizable ?? !0);
  ge(() => {
    if (!X) return;
    const M = () => ee(!1);
    return window.addEventListener("scroll", M, !0), () => window.removeEventListener("scroll", M, !0);
  }, [X]);
  const ne = () => {
    if (t.sortable) {
      if (o.sortBy !== t.key) {
        s({ sortBy: t.key, sortOrder: "asc" });
        return;
      }
      if (o.sortOrder === "desc") {
        s({ sortBy: null, sortOrder: "asc" });
        return;
      }
      s({ sortBy: t.key, sortOrder: "desc" });
    }
  }, Q = t.key === k.targetColumnKey && t.key !== k.draggedColumnKey, ke = k.draggedColumnIndex > k.targetColumnIndex && Q;
  return /* @__PURE__ */ r.jsx(Lr, { content: t.tooltip, children: /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: B.headCell,
      "data-align": t.align ?? "start",
      "data-open": X ? "true" : "false",
      "data-column": t.key,
      onMouseDown: (M) => {
        var ve, be;
        (be = (ve = M.target) == null ? void 0 : ve.closest) != null && be.call(ve, "[data-resize-hotspot]") || !C || t.frozenStart || t.frozenEnd || h(M.nativeEvent, t.key);
      },
      children: [
        /* @__PURE__ */ r.jsx("div", { className: B.headContent, children: /* @__PURE__ */ r.jsx("span", { className: B.headLabel, "data-cell-content": "true", children: t.header }) }),
        /* @__PURE__ */ r.jsx(
          Ar,
          {
            open: X,
            onOpenChange: ee,
            host: ({ hostProps: M }) => /* @__PURE__ */ r.jsx("button", { ...M, className: B.headButton, "aria-label": "Column menu" }),
            zIndex: E ? 220 : 140,
            children: /* @__PURE__ */ r.jsx(_n, { onAfterSelect: () => ee(!1), children: /* @__PURE__ */ r.jsxs(xn, { children: [
              $ && !t.frozenStart && !t.frozenEnd ? E ? /* @__PURE__ */ r.jsxs(lt, { onSelect: c, children: [
                /* @__PURE__ */ r.jsx(ar, { size: 16 }),
                " Unpin column"
              ] }) : /* @__PURE__ */ r.jsxs(lt, { onSelect: a, children: [
                /* @__PURE__ */ r.jsx(lr, { size: 16 }),
                " Pin column"
              ] }) : null,
              R ? /* @__PURE__ */ r.jsxs(lt, { onSelect: u, children: [
                /* @__PURE__ */ r.jsx(rr, { size: 16 }),
                " Hide column"
              ] }) : null,
              T ? /* @__PURE__ */ r.jsxs(lt, { onSelect: d, children: [
                /* @__PURE__ */ r.jsx(hn, { size: 16 }),
                " Filter by column"
              ] }) : null
            ] }) })
          }
        ),
        t.sortable ? /* @__PURE__ */ r.jsx(
          pn,
          {
            size: "xs",
            variant: "tertiary",
            className: B.sortButton,
            active: q,
            textColor: "--ui2-content-secondary",
            "aria-label": `Sort ${typeof t.header == "string" ? t.header : t.key}`,
            onClick: (M) => {
              M.stopPropagation(), ne();
            },
            children: q ? o.sortOrder === "desc" ? /* @__PURE__ */ r.jsx(qt, { size: 14 }) : /* @__PURE__ */ r.jsx(vn, { size: 14 }) : /* @__PURE__ */ r.jsx(qt, { size: 14 })
          }
        ) : null,
        ue ? /* @__PURE__ */ r.jsx(
          "span",
          {
            className: B.resizeHotspot,
            "data-resize-hotspot": "true",
            onPointerDown: (M) => {
              M.preventDefault(), M.stopPropagation(), y(M, t.key);
            },
            onPointerMove: (M) => {
              g(M, t.key);
            },
            onPointerUp: (M) => {
              _(M, t.key);
            },
            onPointerCancel: (M) => {
              _(M, t.key);
            },
            onDoubleClick: (M) => {
              M.preventDefault(), M.stopPropagation(), b(M, t.key);
            }
          }
        ) : null,
        Q ? /* @__PURE__ */ r.jsx("div", { className: W(B.dropIndicator, ke && B.dropIndicatorStart) }) : null
      ]
    }
  ) });
}
function Xt({
  column: t,
  row: o,
  rowKeyValue: s
}) {
  const a = Jt(o, t), c = t.valueFormatter ? t.valueFormatter(a, o) : a, u = c == null ? "" : String(c), d = t.render ? t.render(o) : u;
  return /* @__PURE__ */ r.jsx(
    gn.Provider,
    {
      value: {
        align: t.align ?? "start",
        monospace: t.monospace ?? !1,
        row: o,
        rowKey: s,
        columnKey: t.key,
        filterKey: t.filterKey,
        value: u,
        rawValue: a
      },
      children: /* @__PURE__ */ r.jsx(Fr, { "data-column": t.key, children: d })
    }
  );
}
const Ur = "_root_xtrkz_1", Vr = "_collapsed_xtrkz_11", Yr = "_header_xtrkz_15", Xr = "_accountButton_xtrkz_26", Gr = "_accountInfo_xtrkz_43", qr = "_accountAvatar_xtrkz_50", Jr = "_accountName_xtrkz_71", Zr = "_accountUsername_xtrkz_72", Qr = "_buttons_xtrkz_100", eo = "_buttonsCollapsed_xtrkz_108", to = "_headerButton_xtrkz_112", no = "_headerButtonDisabled_xtrkz_144", ro = "_headerButtonActive_xtrkz_150", oo = "_nav_xtrkz_163", so = "_menuItem_xtrkz_193", ao = "_menuButton_xtrkz_197", io = "_menuButtonPseudoHover_xtrkz_237", lo = "_menuButtonActive_xtrkz_241", co = "_menuButtonExpanded_xtrkz_245", uo = "_menuButtonDisabled_xtrkz_249", fo = "_menuButtonText_xtrkz_258", po = "_menuButtonIcon_xtrkz_267", vo = "_menuButtonChevron_xtrkz_283", ho = "_menuButtonCompact_xtrkz_292", yo = "_children_xtrkz_298", _o = "_child_xtrkz_298", xo = "_childActive_xtrkz_335", mo = "_childDisabled_xtrkz_339", go = "_childText_xtrkz_348", bo = "_childIcon_xtrkz_354", jo = "_popover_xtrkz_363", Co = "_popoverTitle_xtrkz_372", Eo = "_footer_xtrkz_437", wo = "_footerExpanded_xtrkz_449", ko = "_footerBottom_xtrkz_453", So = "_footerLogo_xtrkz_461", Ro = "_version_xtrkz_467", Bo = "_footerCollapsed_xtrkz_478", Po = "_iconButton_xtrkz_498", No = "_pinnedButtonWrap_xtrkz_519", To = "_tooltipHost_xtrkz_524", f = {
  root: Ur,
  collapsed: Vr,
  header: Yr,
  accountButton: Xr,
  accountInfo: Gr,
  accountAvatar: qr,
  accountName: Jr,
  accountUsername: Zr,
  buttons: Qr,
  buttonsCollapsed: eo,
  headerButton: to,
  headerButtonDisabled: no,
  headerButtonActive: ro,
  nav: oo,
  menuItem: so,
  menuButton: ao,
  menuButtonPseudoHover: io,
  menuButtonActive: lo,
  menuButtonExpanded: co,
  menuButtonDisabled: uo,
  menuButtonText: fo,
  menuButtonIcon: po,
  menuButtonChevron: vo,
  menuButtonCompact: ho,
  children: yo,
  child: _o,
  childActive: xo,
  childDisabled: mo,
  childText: go,
  childIcon: bo,
  popover: jo,
  popoverTitle: Co,
  footer: Eo,
  footerExpanded: wo,
  footerBottom: ko,
  footerLogo: So,
  version: Ro,
  footerCollapsed: Bo,
  iconButton: Po,
  pinnedButtonWrap: No,
  tooltipHost: To
};
function ln(t, o, s, a) {
  const c = a.x - o.x, u = a.y - o.y, d = s.x - o.x, h = s.y - o.y, y = t.x - o.x, g = t.y - o.y, _ = c * c + u * u, b = c * d + u * h, I = c * y + u * g, $ = d * d + h * h, R = d * y + h * g, C = _ * $ - b * b;
  if (C === 0)
    return !1;
  const T = 1 / C, E = ($ * I - b * R) * T, k = (_ * R - b * I) * T;
  return E >= 0 && k >= 0 && E + k <= 1;
}
function cn(t, o, s = 0) {
  return t.x >= o.left - s && t.x <= o.right + s && t.y >= o.top - s && t.y <= o.bottom + s;
}
function Oo(t, o, s, a, c) {
  return ln(t, o, s, a) || ln(t, o, a, c);
}
function Io(t, o, s, a = 8) {
  if (cn(t, o, a) || cn(t, s, a))
    return !0;
  const c = { x: o.right, y: o.top - a }, u = { x: s.left, y: s.top - a }, d = { x: s.left, y: s.bottom + a }, h = { x: o.right, y: o.bottom + a };
  return Oo(t, c, u, d, h);
}
function Mo({ initials: t, name: o, username: s, collapsed: a = !1, className: c, ...u }) {
  return /* @__PURE__ */ r.jsxs("button", { type: "button", className: W(f.accountButton, c), ...u, children: [
    /* @__PURE__ */ r.jsx("div", { className: f.accountAvatar, children: t }),
    a ? null : /* @__PURE__ */ r.jsxs("div", { className: f.accountInfo, children: [
      /* @__PURE__ */ r.jsx("div", { className: f.accountName, children: o }),
      /* @__PURE__ */ r.jsx("div", { className: f.accountUsername, children: s })
    ] })
  ] });
}
function Do({
  actions: t,
  collapsed: o = !1,
  renderTooltip: s,
  className: a,
  ...c
}) {
  return /* @__PURE__ */ r.jsx("div", { className: W(f.buttons, o && f.buttonsCollapsed, a), ...c, children: t.map((u) => {
    const d = /* @__PURE__ */ r.jsx(
      "button",
      {
        type: "button",
        className: W(
          f.headerButton,
          u.active && f.headerButtonActive,
          u.disabled && f.headerButtonDisabled
        ),
        onClick: u.disabled ? void 0 : u.onClick,
        "aria-label": u.label,
        style: { "--ui2-sidebar-pinned-icon-color": "var(--ui2-content-secondary)" },
        children: u.icon
      },
      u.id
    );
    return s ? /* @__PURE__ */ r.jsx("div", { className: f.pinnedButtonWrap, children: s({ content: u.label, children: d }) }, u.id) : /* @__PURE__ */ r.jsx("div", { className: f.pinnedButtonWrap, children: d }, u.id);
  }) });
}
function zo({
  icon: t,
  showIcon: o = !0,
  label: s,
  compact: a = !1,
  active: c,
  expanded: u,
  disabled: d,
  pseudoHover: h,
  chevron: y,
  as: g,
  className: _,
  ...b
}) {
  const I = g ?? "button";
  return /* @__PURE__ */ r.jsxs(
    I,
    {
      ...I === "button" ? { type: "button", disabled: d } : null,
      className: W(
        f.menuButton,
        a && f.menuButtonCompact,
        c && f.menuButtonActive,
        u && f.menuButtonExpanded,
        d && f.menuButtonDisabled,
        h && f.menuButtonPseudoHover,
        _
      ),
      ...b,
      children: [
        t && o ? /* @__PURE__ */ r.jsx("span", { className: f.menuButtonIcon, children: t }) : null,
        a ? null : /* @__PURE__ */ r.jsx("span", { className: f.menuButtonText, children: s }),
        !a && y ? /* @__PURE__ */ r.jsx("span", { className: f.menuButtonChevron, children: y }) : null
      ]
    }
  );
}
function Ao({ collapsed: t = !1, version: o, logo: s, toggle: a, className: c, ...u }) {
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: W(f.footer, !t && f.footerExpanded, t && f.footerCollapsed, c),
      ...u,
      children: [
        !t && o ? /* @__PURE__ */ r.jsxs("div", { className: f.version, children: [
          "v. ",
          o
        ] }) : null,
        /* @__PURE__ */ r.jsxs("div", { className: f.footerBottom, children: [
          /* @__PURE__ */ r.jsx("div", { className: f.footerLogo, children: s }),
          a
        ] })
      ]
    }
  );
}
function Lo(t) {
  return /* @__PURE__ */ r.jsx("div", { className: W(f.nav, t.className), ...t });
}
function Uo({ icon: t, label: o, className: s, ...a }) {
  return /* @__PURE__ */ r.jsx("button", { type: "button", "aria-label": o, className: W(f.iconButton, s), ...a, children: t });
}
const bn = Zt(
  ({ title: t, children: o, className: s, ...a }, c) => /* @__PURE__ */ r.jsxs("div", { ref: c, className: W(f.popover, s), ...a, children: [
    /* @__PURE__ */ r.jsx("div", { className: f.popoverTitle, children: t }),
    o
  ] })
);
bn.displayName = "SidebarPopover";
function Wo({ content: t, children: o }) {
  return /* @__PURE__ */ r.jsx("span", { className: f.tooltipHost, title: t, children: o });
}
function Vo({
  collapsed: t,
  defaultCollapsed: o = !1,
  onCollapsedChange: s,
  account: a,
  pinnedActions: c = [],
  navItems: u,
  footer: d,
  className: h,
  style: y,
  renderTooltip: g,
  onItemClick: _,
  onChildClick: b
}) {
  const I = g ?? Wo, [$, R] = U(o), C = t ?? $, [T, E] = U(null), [k, X] = U(null), ee = V(!1), q = V(null), ue = V(null), ne = V({ active: !1 }), Q = V(null), ke = ce(() => {
    const x = /* @__PURE__ */ new Map();
    return u.forEach((A) => {
      var re;
      A.defaultExpanded && x.set(A.id, !0), (re = A.children) != null && re.some((je) => je.active) && x.set(A.id, !0);
    }), x;
  }, [u]), [M, ve] = U(() => ke), be = it(
    (x) => {
      s ? s(x) : R(x);
    },
    [s]
  ), ae = it((x, A) => {
    E(x), X(A), ue.current = A;
  }, []), D = it(() => {
    ee.current || (E(null), X(null));
  }, []), K = it(() => {
    Q.current && (window.clearTimeout(Q.current), Q.current = null);
  }, []), te = it(
    (x = 260) => {
      K(), Q.current = window.setTimeout(() => {
        ee.current || (ne.current.active = !1, D());
      }, x);
    },
    [K, D]
  ), Me = it((x) => {
    ve((A) => {
      const re = new Map(A);
      return re.set(x, !A.get(x)), re;
    });
  }, []);
  return ge(() => {
    if (!C || !T)
      return;
    const x = (A) => {
      if (!ne.current.active || ee.current || !q.current || !ue.current)
        return;
      const re = q.current.getBoundingClientRect(), je = { x: A.clientX, y: A.clientY };
      Io(je, ue.current, re, 10) ? K() : (ne.current.active = !1, D());
    };
    return window.addEventListener("mousemove", x), () => {
      window.removeEventListener("mousemove", x);
    };
  }, [T, C, K, D]), ge(() => () => K(), [K]), /* @__PURE__ */ r.jsxs(
    "div",
    {
      "data-ui2-component": "Sidebar",
      "data-collapsed": C ? "true" : "false",
      className: W(f.root, C && f.collapsed, h),
      style: y,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: f.header, children: [
          a ? /* @__PURE__ */ r.jsx(
            Mo,
            {
              initials: a.initials,
              name: a.name,
              username: a.username,
              collapsed: C,
              onClick: a.onClick
            }
          ) : null,
          /* @__PURE__ */ r.jsx(Do, { actions: c, collapsed: C, renderTooltip: I })
        ] }),
        /* @__PURE__ */ r.jsx(Lo, { onClick: () => E(null), children: u.map((x) => {
          var Ue, Ze, Qe;
          const A = !!((Ue = x.children) != null && Ue.length), re = M.get(x.id) ?? !1, je = C && T === x.id && A && !x.disabled, He = /* @__PURE__ */ r.jsx(
            zo,
            {
              icon: x.icon,
              showIcon: x.showIcon,
              label: x.title,
              compact: C,
              active: x.active,
              expanded: A && re,
              disabled: x.disabled,
              pseudoHover: je,
              chevron: !C && A ? re ? /* @__PURE__ */ r.jsx(vn, { size: 16 }) : /* @__PURE__ */ r.jsx(qt, { size: 16 }) : void 0,
              onClick: () => {
                var j;
                if (A && !C) {
                  Me(x.id);
                  return;
                }
                x.disabled || (_ == null || _(x), (j = x.onClick) == null || j.call(x));
              }
            }
          );
          return /* @__PURE__ */ r.jsxs(
            "div",
            {
              className: f.menuItem,
              onMouseEnter: (j) => {
                !C || !A || x.disabled || (ne.current.active = !1, K(), ae(x.id, j.currentTarget.getBoundingClientRect()));
              },
              onMouseLeave: (j) => {
                if (C) {
                  if (!A || x.disabled) {
                    D();
                    return;
                  }
                  ne.current.active = !0, te();
                }
              },
              onFocus: () => {
                var de;
                if (!C || !A || x.disabled)
                  return;
                const j = (de = document.getElementById(`ui2-sidebar-item-${x.id}`)) == null ? void 0 : de.getBoundingClientRect();
                j && ae(x.id, j);
              },
              children: [
                /* @__PURE__ */ r.jsx("div", { id: `ui2-sidebar-item-${x.id}`, children: He }),
                A && !C && re ? /* @__PURE__ */ r.jsx("div", { className: f.children, children: (Ze = x.children) == null ? void 0 : Ze.map((j) => /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsxs(
                  "button",
                  {
                    type: "button",
                    className: W(
                      f.child,
                      j.active && f.childActive,
                      j.disabled && f.childDisabled
                    ),
                    disabled: j.disabled,
                    onClick: j.disabled ? void 0 : () => {
                      var de;
                      b == null || b(j, x), (de = j.onClick) == null || de.call(j);
                    },
                    children: [
                      j.icon && j.showIcon !== !1 ? /* @__PURE__ */ r.jsx("span", { className: f.childIcon, children: j.icon }) : null,
                      /* @__PURE__ */ r.jsx("span", { className: f.childText, children: j.title })
                    ]
                  }
                ) }, j.id ?? j.title)) }) : null,
                A && je && k ? /* @__PURE__ */ r.jsx(
                  bn,
                  {
                    ref: q,
                    title: x.title,
                    style: {
                      position: "fixed",
                      top: Math.round(k.top),
                      left: Math.round(k.right + 12)
                    },
                    onMouseEnter: () => {
                      ee.current = !0, ne.current.active = !1, K();
                    },
                    onMouseLeave: () => {
                      ee.current = !1, te(120);
                    },
                    children: (Qe = x.children) == null ? void 0 : Qe.map((j) => /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsxs(
                      "button",
                      {
                        type: "button",
                        className: W(
                          f.child,
                          j.active && f.childActive,
                          j.disabled && f.childDisabled
                        ),
                        disabled: j.disabled,
                        onClick: j.disabled ? void 0 : () => {
                          var de;
                          b == null || b(j, x), (de = j.onClick) == null || de.call(j);
                        },
                        children: [
                          j.icon && j.showIcon !== !1 ? /* @__PURE__ */ r.jsx("span", { className: f.childIcon, children: j.icon }) : null,
                          /* @__PURE__ */ r.jsx("span", { className: f.childText, children: j.title })
                        ]
                      }
                    ) }, j.id ?? j.title))
                  }
                ) : null
              ]
            },
            x.id
          );
        }) }),
        /* @__PURE__ */ r.jsx(
          Ao,
          {
            collapsed: C,
            version: d == null ? void 0 : d.version,
            logo: /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              d != null && d.logoCollapsedSrc && C ? /* @__PURE__ */ r.jsx("img", { src: d.logoCollapsedSrc, alt: d.logoAlt ?? "Logo", width: d.logoCollapsedWidth ?? 32 }) : null,
              d != null && d.logoExpandedSrc && !C ? /* @__PURE__ */ r.jsx("img", { src: d.logoExpandedSrc, alt: d.logoAlt ?? "Logo", width: d.logoExpandedWidth ?? 131 }) : null
            ] }),
            toggle: d != null && d.toggleButton ? d.toggleButton : /* @__PURE__ */ r.jsx(
              pn,
              {
                "aria-label": C ? (d == null ? void 0 : d.toggleCollapsedLabel) ?? "Expand" : (d == null ? void 0 : d.toggleExpandedLabel) ?? "Collapse",
                variant: "tertiary",
                textColor: "--ui2-content-secondary",
                onClick: () => be(!C),
                children: C ? /* @__PURE__ */ r.jsx(Qn, { size: 18 }) : /* @__PURE__ */ r.jsx(Jn, { size: 18 })
              }
            )
          }
        )
      ]
    }
  );
}
function Yo({ collapsed: t = !1, className: o, ...s }) {
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      "data-ui2-component": "SidebarShell",
      "data-collapsed": t ? "true" : "false",
      className: W(f.root, t && f.collapsed, o),
      ...s
    }
  );
}
function Xo(t) {
  return /* @__PURE__ */ r.jsx("div", { "data-ui2-component": "SidebarHeader", className: W(f.header, t.className), ...t });
}
function Go({
  initials: t,
  name: o,
  username: s,
  collapsed: a = !1,
  className: c,
  ...u
}) {
  return /* @__PURE__ */ r.jsxs("button", { type: "button", className: W(f.accountButton, c), ...u, children: [
    /* @__PURE__ */ r.jsx("div", { className: f.accountAvatar, children: t }),
    a ? null : /* @__PURE__ */ r.jsxs("div", { className: f.accountInfo, children: [
      /* @__PURE__ */ r.jsx("div", { className: f.accountName, children: o }),
      /* @__PURE__ */ r.jsx("div", { className: f.accountUsername, children: s })
    ] })
  ] });
}
function qo({ icon: t, label: o, active: s, disabled: a, className: c, ...u }) {
  return /* @__PURE__ */ r.jsx(
    "button",
    {
      type: "button",
      "aria-label": o,
      disabled: a,
      className: W(
        f.headerButton,
        s && f.headerButtonActive,
        a && f.headerButtonDisabled,
        c
      ),
      ...u,
      children: t
    }
  );
}
function Jo({
  icon: t,
  label: o,
  compact: s = !1,
  active: a,
  disabled: c,
  pseudoHover: u,
  chevron: d,
  className: h,
  ...y
}) {
  return /* @__PURE__ */ r.jsxs(
    "button",
    {
      type: "button",
      className: W(
        f.menuButton,
        s && f.menuButtonCompact,
        a && f.menuButtonActive,
        c && f.menuButtonDisabled,
        u && f.menuButtonPseudoHover,
        h
      ),
      disabled: c,
      ...y,
      children: [
        /* @__PURE__ */ r.jsx("span", { className: f.menuButtonIcon, children: t }),
        s ? null : /* @__PURE__ */ r.jsx("span", { className: f.menuButtonText, children: o }),
        !s && d ? /* @__PURE__ */ r.jsx("span", { className: f.menuButtonChevron, children: d }) : null
      ]
    }
  );
}
function Zo({ label: t, icon: o, active: s, disabled: a, className: c, ...u }) {
  return /* @__PURE__ */ r.jsxs(
    "button",
    {
      type: "button",
      className: W(f.child, s && f.childActive, a && f.childDisabled, c),
      disabled: a,
      ...u,
      children: [
        o ? /* @__PURE__ */ r.jsx("span", { className: f.childIcon, children: o }) : null,
        /* @__PURE__ */ r.jsx("span", { className: f.childText, children: t })
      ]
    }
  );
}
function Qo({ collapsed: t = !1, version: o, logo: s, toggle: a, className: c, ...u }) {
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      "data-ui2-component": "SidebarFooter",
      className: W(f.footer, !t && f.footerExpanded, t && f.footerCollapsed, c),
      ...u,
      children: [
        !t && o ? /* @__PURE__ */ r.jsxs("div", { className: f.version, children: [
          "v. ",
          o
        ] }) : null,
        /* @__PURE__ */ r.jsxs("div", { className: f.footerBottom, children: [
          /* @__PURE__ */ r.jsx("div", { className: f.footerLogo, children: s }),
          a
        ] })
      ]
    }
  );
}
export {
  Ko as Button,
  pn as ButtonIcon,
  Ho as DataTable,
  Fr as DataTableCell,
  Vo as Sidebar,
  Go as SidebarAccountButton,
  Zo as SidebarChildButton,
  Ao as SidebarFooterPart,
  Qo as SidebarFooterSection,
  Xo as SidebarHeader,
  qo as SidebarHeaderButton,
  Uo as SidebarIconButton,
  zo as SidebarItem,
  Lo as SidebarNav,
  Jo as SidebarNavButton,
  Do as SidebarPinnedButtons,
  bn as SidebarPopover,
  Mo as SidebarProfile,
  Yo as SidebarShell
};
