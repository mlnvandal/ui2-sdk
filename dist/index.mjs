import * as pe from "react";
import mn, { forwardRef as on, createElement as qt, useContext as sn, createContext as an, useState as U, useEffect as _e, useRef as G, useMemo as ae, useCallback as at } from "react";
import { createPortal as Bn } from "react-dom";
var tn = { exports: {} }, kt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var un;
function Pn() {
  if (un) return kt;
  un = 1;
  var e = mn, n = Symbol.for("react.element"), s = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(f, m, j) {
    var y, C = {}, I = null, W = null;
    j !== void 0 && (I = "" + j), m.key !== void 0 && (I = "" + m.key), m.ref !== void 0 && (W = m.ref);
    for (y in m) a.call(m, y) && !u.hasOwnProperty(y) && (C[y] = m[y]);
    if (f && f.defaultProps) for (y in m = f.defaultProps, m) C[y] === void 0 && (C[y] = m[y]);
    return { $$typeof: n, type: f, key: I, ref: W, props: C, _owner: i.current };
  }
  return kt.Fragment = s, kt.jsx = d, kt.jsxs = d, kt;
}
var Ct = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dn;
function Tn() {
  return dn || (dn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = mn, n = Symbol.for("react.element"), s = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), f = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), B = Symbol.iterator, g = "@@iterator";
    function E(t) {
      if (t === null || typeof t != "object")
        return null;
      var l = B && t[B] || t[g];
      return typeof l == "function" ? l : null;
    }
    var k = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(t) {
      {
        for (var l = arguments.length, h = new Array(l > 1 ? l - 1 : 0), b = 1; b < l; b++)
          h[b - 1] = arguments[b];
        K("error", t, h);
      }
    }
    function K(t, l, h) {
      {
        var b = k.ReactDebugCurrentFrame, A = b.getStackAddendum();
        A !== "" && (l += "%s", h = h.concat([A]));
        var $ = h.map(function(P) {
          return String(P);
        });
        $.unshift("Warning: " + l), Function.prototype.apply.call(console[t], console, $);
      }
    }
    var Q = !1, q = !1, oe = !1, ne = !1, J = !1, ie;
    ie = Symbol.for("react.module.reference");
    function R(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === a || t === u || J || t === i || t === j || t === y || ne || t === W || Q || q || oe || typeof t == "object" && t !== null && (t.$$typeof === I || t.$$typeof === C || t.$$typeof === d || t.$$typeof === f || t.$$typeof === m || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === ie || t.getModuleId !== void 0));
    }
    function ve(t, l, h) {
      var b = t.displayName;
      if (b)
        return b;
      var A = l.displayName || l.name || "";
      return A !== "" ? h + "(" + A + ")" : h;
    }
    function ye(t) {
      return t.displayName || "Context";
    }
    function D(t) {
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
        case u:
          return "Profiler";
        case i:
          return "StrictMode";
        case j:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case f:
            var l = t;
            return ye(l) + ".Consumer";
          case d:
            var h = t;
            return ye(h._context) + ".Provider";
          case m:
            return ve(t, t.render, "ForwardRef");
          case C:
            var b = t.displayName || null;
            return b !== null ? b : D(t.type) || "Memo";
          case I: {
            var A = t, $ = A._payload, P = A._init;
            try {
              return D(P($));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var x = Object.assign, M = 0, Z, ue, _, H, le, ke, De;
    function Ve() {
    }
    Ve.__reactDisabledLog = !0;
    function Je() {
      {
        if (M === 0) {
          Z = console.log, ue = console.info, _ = console.warn, H = console.error, le = console.group, ke = console.groupCollapsed, De = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: Ve,
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
        M++;
      }
    }
    function Ze() {
      {
        if (M--, M === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: x({}, t, {
              value: Z
            }),
            info: x({}, t, {
              value: ue
            }),
            warn: x({}, t, {
              value: _
            }),
            error: x({}, t, {
              value: H
            }),
            group: x({}, t, {
              value: le
            }),
            groupCollapsed: x({}, t, {
              value: ke
            }),
            groupEnd: x({}, t, {
              value: De
            })
          });
        }
        M < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var S = k.ReactCurrentDispatcher, he;
    function Qe(t, l, h) {
      {
        if (he === void 0)
          try {
            throw Error();
          } catch (A) {
            var b = A.stack.trim().match(/\n( *(at )?)/);
            he = b && b[1] || "";
          }
        return `
` + he + t;
      }
    }
    var ct = !1, ut;
    {
      var Rt = typeof WeakMap == "function" ? WeakMap : Map;
      ut = new Rt();
    }
    function Nt(t, l) {
      if (!t || ct)
        return "";
      {
        var h = ut.get(t);
        if (h !== void 0)
          return h;
      }
      var b;
      ct = !0;
      var A = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var $;
      $ = S.current, S.current = null, Je();
      try {
        if (l) {
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
            } catch (ce) {
              b = ce;
            }
            Reflect.construct(t, [], P);
          } else {
            try {
              P.call();
            } catch (ce) {
              b = ce;
            }
            t.call(P.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ce) {
            b = ce;
          }
          t();
        }
      } catch (ce) {
        if (ce && b && typeof ce.stack == "string") {
          for (var N = ce.stack.split(`
`), re = b.stack.split(`
`), V = N.length - 1, Y = re.length - 1; V >= 1 && Y >= 0 && N[V] !== re[Y]; )
            Y--;
          for (; V >= 1 && Y >= 0; V--, Y--)
            if (N[V] !== re[Y]) {
              if (V !== 1 || Y !== 1)
                do
                  if (V--, Y--, Y < 0 || N[V] !== re[Y]) {
                    var se = `
` + N[V].replace(" at new ", " at ");
                    return t.displayName && se.includes("<anonymous>") && (se = se.replace("<anonymous>", t.displayName)), typeof t == "function" && ut.set(t, se), se;
                  }
                while (V >= 1 && Y >= 0);
              break;
            }
        }
      } finally {
        ct = !1, S.current = $, Ze(), Error.prepareStackTrace = A;
      }
      var Te = t ? t.displayName || t.name : "", We = Te ? Qe(Te) : "";
      return typeof t == "function" && ut.set(t, We), We;
    }
    function F(t, l, h) {
      return Nt(t, !1);
    }
    function Bt(t) {
      var l = t.prototype;
      return !!(l && l.isReactComponent);
    }
    function $e(t, l, h) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return Nt(t, Bt(t));
      if (typeof t == "string")
        return Qe(t);
      switch (t) {
        case j:
          return Qe("Suspense");
        case y:
          return Qe("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case m:
            return F(t.render);
          case C:
            return $e(t.type, l, h);
          case I: {
            var b = t, A = b._payload, $ = b._init;
            try {
              return $e($(A), l, h);
            } catch {
            }
          }
        }
      return "";
    }
    var me = Object.prototype.hasOwnProperty, Ce = {}, et = k.ReactDebugCurrentFrame;
    function Ne(t) {
      if (t) {
        var l = t._owner, h = $e(t.type, t._source, l ? l.type : null);
        et.setExtraStackFrame(h);
      } else
        et.setExtraStackFrame(null);
    }
    function $t(t, l, h, b, A) {
      {
        var $ = Function.call.bind(me);
        for (var P in t)
          if ($(t, P)) {
            var N = void 0;
            try {
              if (typeof t[P] != "function") {
                var re = Error((b || "React class") + ": " + h + " type `" + P + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[P] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw re.name = "Invariant Violation", re;
              }
              N = t[P](l, P, b, h, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (V) {
              N = V;
            }
            N && !(N instanceof Error) && (Ne(A), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", b || "React class", h, P, typeof N), Ne(null)), N instanceof Error && !(N.message in Ce) && (Ce[N.message] = !0, Ne(A), w("Failed %s type: %s", h, N.message), Ne(null));
          }
      }
    }
    var Ft = Array.isArray;
    function dt(t) {
      return Ft(t);
    }
    function Kt(t) {
      {
        var l = typeof Symbol == "function" && Symbol.toStringTag, h = l && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return h;
      }
    }
    function Ht(t) {
      try {
        return Pt(t), !1;
      } catch {
        return !0;
      }
    }
    function Pt(t) {
      return "" + t;
    }
    function Tt(t) {
      if (Ht(t))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Kt(t)), Pt(t);
    }
    var ft = k.ReactCurrentOwner, de = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, pt, Ee;
    function vt(t) {
      if (me.call(t, "ref")) {
        var l = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (l && l.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function Ye(t) {
      if (me.call(t, "key")) {
        var l = Object.getOwnPropertyDescriptor(t, "key").get;
        if (l && l.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function Ut(t, l) {
      typeof t.ref == "string" && ft.current;
    }
    function Xe(t, l) {
      {
        var h = function() {
          pt || (pt = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", l));
        };
        h.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: h,
          configurable: !0
        });
      }
    }
    function ht(t, l) {
      {
        var h = function() {
          Ee || (Ee = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", l));
        };
        h.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: h,
          configurable: !0
        });
      }
    }
    var xe = function(t, l, h, b, A, $, P) {
      var N = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: t,
        key: l,
        ref: h,
        props: P,
        // Record the component responsible for creating this element.
        _owner: $
      };
      return N._store = {}, Object.defineProperty(N._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(N, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: b
      }), Object.defineProperty(N, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: A
      }), Object.freeze && (Object.freeze(N.props), Object.freeze(N)), N;
    };
    function tt(t, l, h, b, A) {
      {
        var $, P = {}, N = null, re = null;
        h !== void 0 && (Tt(h), N = "" + h), Ye(l) && (Tt(l.key), N = "" + l.key), vt(l) && (re = l.ref, Ut(l, A));
        for ($ in l)
          me.call(l, $) && !de.hasOwnProperty($) && (P[$] = l[$]);
        if (t && t.defaultProps) {
          var V = t.defaultProps;
          for ($ in V)
            P[$] === void 0 && (P[$] = V[$]);
        }
        if (N || re) {
          var Y = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          N && Xe(P, Y), re && ht(P, Y);
        }
        return xe(t, N, re, A, b, ft.current, P);
      }
    }
    var Ge = k.ReactCurrentOwner, ee = k.ReactDebugCurrentFrame;
    function ge(t) {
      if (t) {
        var l = t._owner, h = $e(t.type, t._source, l ? l.type : null);
        ee.setExtraStackFrame(h);
      } else
        ee.setExtraStackFrame(null);
    }
    var Be;
    Be = !1;
    function Fe(t) {
      return typeof t == "object" && t !== null && t.$$typeof === n;
    }
    function Ot() {
      {
        if (Ge.current) {
          var t = D(Ge.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function nt(t) {
      return "";
    }
    var It = {};
    function rt(t) {
      {
        var l = Ot();
        if (!l) {
          var h = typeof t == "string" ? t : t.displayName || t.name;
          h && (l = `

Check the top-level render call using <` + h + ">.");
        }
        return l;
      }
    }
    function Ke(t, l) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var h = rt(l);
        if (It[h])
          return;
        It[h] = !0;
        var b = "";
        t && t._owner && t._owner !== Ge.current && (b = " It was passed a child from " + D(t._owner.type) + "."), ge(t), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', h, b), ge(null);
      }
    }
    function Le(t, l) {
      {
        if (typeof t != "object")
          return;
        if (dt(t))
          for (var h = 0; h < t.length; h++) {
            var b = t[h];
            Fe(b) && Ke(b, l);
          }
        else if (Fe(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var A = E(t);
          if (typeof A == "function" && A !== t.entries)
            for (var $ = A.call(t), P; !(P = $.next()).done; )
              Fe(P.value) && Ke(P.value, l);
        }
      }
    }
    function be(t) {
      {
        var l = t.type;
        if (l == null || typeof l == "string")
          return;
        var h;
        if (typeof l == "function")
          h = l.propTypes;
        else if (typeof l == "object" && (l.$$typeof === m || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        l.$$typeof === C))
          h = l.propTypes;
        else
          return;
        if (h) {
          var b = D(l);
          $t(h, t.props, "prop", b, t);
        } else if (l.PropTypes !== void 0 && !Be) {
          Be = !0;
          var A = D(l);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", A || "Unknown");
        }
        typeof l.getDefaultProps == "function" && !l.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Pe(t) {
      {
        for (var l = Object.keys(t.props), h = 0; h < l.length; h++) {
          var b = l[h];
          if (b !== "children" && b !== "key") {
            ge(t), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", b), ge(null);
            break;
          }
        }
        t.ref !== null && (ge(t), w("Invalid attribute `ref` supplied to `React.Fragment`."), ge(null));
      }
    }
    var we = {};
    function fe(t, l, h, b, A, $) {
      {
        var P = R(t);
        if (!P) {
          var N = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (N += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var re = nt();
          re ? N += re : N += Ot();
          var V;
          t === null ? V = "null" : dt(t) ? V = "array" : t !== void 0 && t.$$typeof === n ? (V = "<" + (D(t.type) || "Unknown") + " />", N = " Did you accidentally export a JSX literal instead of a component?") : V = typeof t, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", V, N);
        }
        var Y = tt(t, l, h, A, $);
        if (Y == null)
          return Y;
        if (P) {
          var se = l.children;
          if (se !== void 0)
            if (b)
              if (dt(se)) {
                for (var Te = 0; Te < se.length; Te++)
                  Le(se[Te], t);
                Object.freeze && Object.freeze(se);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Le(se, t);
        }
        if (me.call(l, "key")) {
          var We = D(t), ce = Object.keys(l).filter(function(o) {
            return o !== "key";
          }), _t = ce.length > 0 ? "{key: someKey, " + ce.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!we[We + _t]) {
            var Mt = ce.length > 0 ? "{" + ce.join(": ..., ") + ": ...}" : "{}";
            w(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, _t, We, Mt, We), we[We + _t] = !0;
          }
        }
        return t === a ? Pe(Y) : be(Y), Y;
      }
    }
    function ot(t, l, h) {
      return fe(t, l, h, !0);
    }
    function mt(t, l, h) {
      return fe(t, l, h, !1);
    }
    var Vt = mt, Yt = ot;
    Ct.Fragment = a, Ct.jsx = Vt, Ct.jsxs = Yt;
  }()), Ct;
}
process.env.NODE_ENV === "production" ? tn.exports = Pn() : tn.exports = Tn();
var r = tn.exports;
function fn(e, n) {
  if (typeof e == "function")
    return e(n);
  e != null && (e.current = n);
}
function On(...e) {
  return (n) => {
    let s = !1;
    const a = e.map((i) => {
      const u = fn(i, n);
      return !s && typeof u == "function" && (s = !0), u;
    });
    if (s)
      return () => {
        for (let i = 0; i < a.length; i++) {
          const u = a[i];
          typeof u == "function" ? u() : fn(e[i], null);
        }
      };
  };
}
var In = Symbol.for("react.lazy"), Wt = pe[" use ".trim().toString()];
function Mn(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function _n(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === In && "_payload" in e && Mn(e._payload);
}
// @__NO_SIDE_EFFECTS__
function zn(e) {
  const n = /* @__PURE__ */ Dn(e), s = pe.forwardRef((a, i) => {
    let { children: u, ...d } = a;
    _n(u) && typeof Wt == "function" && (u = Wt(u._payload));
    const f = pe.Children.toArray(u), m = f.find(Wn);
    if (m) {
      const j = m.props.children, y = f.map((C) => C === m ? pe.Children.count(j) > 1 ? pe.Children.only(null) : pe.isValidElement(j) ? j.props.children : null : C);
      return /* @__PURE__ */ r.jsx(n, { ...d, ref: i, children: pe.isValidElement(j) ? pe.cloneElement(j, void 0, y) : null });
    }
    return /* @__PURE__ */ r.jsx(n, { ...d, ref: i, children: u });
  });
  return s.displayName = `${e}.Slot`, s;
}
var An = /* @__PURE__ */ zn("Slot");
// @__NO_SIDE_EFFECTS__
function Dn(e) {
  const n = pe.forwardRef((s, a) => {
    let { children: i, ...u } = s;
    if (_n(i) && typeof Wt == "function" && (i = Wt(i._payload)), pe.isValidElement(i)) {
      const d = Fn(i), f = $n(u, i.props);
      return i.type !== pe.Fragment && (f.ref = a ? On(a, d) : d), pe.cloneElement(i, f);
    }
    return pe.Children.count(i) > 1 ? pe.Children.only(null) : null;
  });
  return n.displayName = `${e}.SlotClone`, n;
}
var Ln = Symbol("radix.slottable");
function Wn(e) {
  return pe.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Ln;
}
function $n(e, n) {
  const s = { ...n };
  for (const a in n) {
    const i = e[a], u = n[a];
    /^on[A-Z]/.test(a) ? i && u ? s[a] = (...f) => {
      const m = u(...f);
      return i(...f), m;
    } : i && (s[a] = i) : a === "style" ? s[a] = { ...i, ...u } : a === "className" && (s[a] = [i, u].filter(Boolean).join(" "));
  }
  return { ...e, ...s };
}
function Fn(e) {
  var a, i;
  let n = (a = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : a.get, s = n && "isReactWarning" in n && n.isReactWarning;
  return s ? e.ref : (n = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, s = n && "isReactWarning" in n && n.isReactWarning, s ? e.props.ref : e.props.ref || e.ref);
}
function yn(e) {
  var n, s, a = "";
  if (typeof e == "string" || typeof e == "number") a += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (n = 0; n < i; n++) e[n] && (s = yn(e[n])) && (a && (a += " "), a += s);
  } else for (s in e) e[s] && (a && (a += " "), a += s);
  return a;
}
function L() {
  for (var e, n, s = 0, a = "", i = arguments.length; s < i; s++) (e = arguments[s]) && (n = yn(e)) && (a && (a += " "), a += n);
  return a;
}
const Kn = "_root_1j0me_1", Hn = "_disabled_1j0me_29", Un = "_active_1j0me_72", Vn = "_visual_1j0me_123", Yn = "_block_1j0me_131", Ue = {
  root: Kn,
  disabled: Hn,
  "size-m": "_size-m_1j0me_36",
  "size-l": "_size-l_1j0me_41",
  "variant-secondary": "_variant-secondary_1j0me_46",
  "variant-tertiary": "_variant-tertiary_1j0me_47",
  "variant-destructive": "_variant-destructive_1j0me_52",
  "variant-link": "_variant-link_1j0me_58",
  "variant-primary": "_variant-primary_1j0me_66",
  active: Un,
  visual: Vn,
  block: Yn
}, Xn = on(function({
  as: n,
  asChild: s = !1,
  active: a = !1,
  block: i = !1,
  disabled: u = !1,
  size: d = "m",
  variant: f = "primary",
  icon: m,
  textColor: j,
  leadingVisual: y,
  trailingVisual: C,
  className: I,
  children: W,
  ...B
}, g) {
  const E = f === "default" ? "primary" : f === "outline" ? "secondary" : f === "ghost" ? "tertiary" : f, k = d === "default" || d === "sm" || d === "icon" ? "m" : d === "lg" ? "l" : d, w = s ? An : n ?? "button", K = y ?? m;
  return /* @__PURE__ */ r.jsxs(
    w,
    {
      ref: g,
      className: L(
        Ue.root,
        Ue[`size-${k}`],
        Ue[`variant-${E}`],
        a && Ue.active,
        i && Ue.block,
        u && Ue.disabled,
        I
      ),
      style: j ? { "--ui2-button-text-color": `var(${j})` } : void 0,
      "data-ui2-component": "Button",
      disabled: !s && w === "button" ? u : void 0,
      "aria-disabled": s && u ? !0 : void 0,
      ...B,
      children: [
        K ? /* @__PURE__ */ r.jsx("span", { className: Ue.visual, children: K }) : null,
        W,
        C ? /* @__PURE__ */ r.jsx("span", { className: Ue.visual, children: C }) : null
      ]
    }
  );
}), Gn = "_root_1xe83_1", qn = "_disabled_1xe83_24", Jn = "_active_1xe83_31", Zn = "_icon_1xe83_146", Et = {
  root: Gn,
  disabled: qn,
  active: Jn,
  "variant-secondary": "_variant-secondary_1xe83_43",
  "variant-tertiary": "_variant-tertiary_1xe83_44",
  "variant-inverted": "_variant-inverted_1xe83_45",
  "variant-destructive": "_variant-destructive_1xe83_49",
  "size-xs": "_size-xs_1xe83_120",
  "size-s": "_size-s_1xe83_127",
  "size-m": "_size-m_1xe83_134",
  "size-l": "_size-l_1xe83_140",
  icon: Zn
};
function St({
  children: e,
  size: n = "m",
  variant: s = "primary",
  active: a = !1,
  disabled: i = !1,
  textColor: u,
  className: d,
  ...f
}) {
  const m = s === "default" ? "primary" : s === "outline" ? "secondary" : s === "ghost" || s === "link" ? "tertiary" : s;
  return /* @__PURE__ */ r.jsx(
    "button",
    {
      type: "button",
      disabled: i,
      className: L(
        Et.root,
        Et[`size-${n}`],
        m !== "primary" && Et[`variant-${m}`],
        i && Et.disabled,
        d
      ),
      "data-active": a ? "true" : "false",
      style: u ? { "--ui2-button-icon-text-color": `var(${u})` } : void 0,
      ...f,
      children: /* @__PURE__ */ r.jsx("span", { className: Et.icon, children: e })
    }
  );
}
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Qn = {
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
const je = (e, n, s, a) => {
  const i = on(
    ({ color: u = "currentColor", size: d = 24, stroke: f = 2, title: m, className: j, children: y, ...C }, I) => qt(
      "svg",
      {
        ref: I,
        ...Qn[e],
        width: d,
        height: d,
        className: ["tabler-icon", `tabler-icon-${n}`, j].join(" "),
        strokeWidth: f,
        stroke: u,
        ...C
      },
      [
        m && qt("title", { key: "svg-title" }, m),
        ...a.map(([W, B]) => qt(W, B)),
        ...Array.isArray(y) ? y : [y]
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
const er = [["path", { d: "M6 9l6 6l6 -6", key: "svg-0" }]], nn = je("outline", "chevron-down", "ChevronDown", er);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tr = [["path", { d: "M15 6l-6 6l6 6", key: "svg-0" }]], nr = je("outline", "chevron-left", "ChevronLeft", tr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rr = [["path", { d: "M9 6l6 6l-6 6", key: "svg-0" }]], or = je("outline", "chevron-right", "ChevronRight", rr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sr = [["path", { d: "M6 15l6 -6l6 6", key: "svg-0" }]], xn = je("outline", "chevron-up", "ChevronUp", sr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ar = [["path", { d: "M11 7l-5 5l5 5", key: "svg-0" }], ["path", { d: "M17 7l-5 5l5 5", key: "svg-1" }]], ir = je("outline", "chevrons-left", "ChevronsLeft", ar);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lr = [["path", { d: "M7 7l5 5l-5 5", key: "svg-0" }], ["path", { d: "M13 7l5 5l-5 5", key: "svg-1" }]], cr = je("outline", "chevrons-right", "ChevronsRight", lr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ur = [["path", { d: "M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666", key: "svg-0" }], ["path", { d: "M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1", key: "svg-1" }]], dr = je("outline", "copy", "Copy", ur);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fr = [["path", { d: "M10.585 10.587a2 2 0 0 0 2.829 2.828", key: "svg-0" }], ["path", { d: "M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87", key: "svg-1" }], ["path", { d: "M3 3l18 18", key: "svg-2" }]], pr = je("outline", "eye-off", "EyeOff", fr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vr = [["path", { d: "M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0", key: "svg-0" }], ["path", { d: "M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6", key: "svg-1" }]], hr = je("outline", "eye", "Eye", vr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mr = [["path", { d: "M12 20l-3 1v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v3", key: "svg-0" }], ["path", { d: "M16 19h6", key: "svg-1" }], ["path", { d: "M19 16v6", key: "svg-2" }]], gn = je("outline", "filter-plus", "FilterPlus", mr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _r = [["path", { d: "M3 3l18 18", key: "svg-0" }], ["path", { d: "M15 4.5l-3.249 3.249m-2.57 1.433l-2.181 .818l-1.5 1.5l7 7l1.5 -1.5l.82 -2.186m1.43 -2.563l3.25 -3.251", key: "svg-1" }], ["path", { d: "M9 15l-4.5 4.5", key: "svg-2" }], ["path", { d: "M14.5 4l5.5 5.5", key: "svg-3" }]], yr = je("outline", "pinned-off", "PinnedOff", _r);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xr = [["path", { d: "M9 4v6l-2 4v2h10v-2l-2 -4v-6", key: "svg-0" }], ["path", { d: "M12 16l0 5", key: "svg-1" }], ["path", { d: "M8 4l8 0", key: "svg-2" }]], gr = je("outline", "pinned", "Pinned", xr);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const br = [["path", { d: "M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2m0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2m-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6", key: "svg-0" }]], jr = je("outline", "sparkles", "Sparkles", br), kr = "_frame_1bemm_1", Cr = "_table_1bemm_9", Er = "_scroll_1bemm_30", wr = "_tableInner_1bemm_50", Sr = "_tableHead_1bemm_57", Rr = "_tableBody_1bemm_65", Nr = "_headRow_1bemm_70", Br = "_row_1bemm_77", Pr = "_columnGroup_1bemm_109", Tr = "_columnsPinnedStart_1bemm_115", Or = "_columnsPinnedEnd_1bemm_126", Ir = "_columnsRegular_1bemm_137", Mr = "_headCell_1bemm_187", zr = "_headContent_1bemm_224", Ar = "_headLabel_1bemm_236", Dr = "_headButton_1bemm_246", Lr = "_sortButton_1bemm_266", Wr = "_resizeHotspot_1bemm_275", $r = "_dropIndicator_1bemm_302", Fr = "_dropIndicatorStart_1bemm_312", Kr = "_cell_1bemm_317", Hr = "_cellContent_1bemm_327", Ur = "_ghost_1bemm_383", Vr = "_ghostInner_1bemm_392", Yr = "_actionMenu_1bemm_406", Xr = "_actionList_1bemm_414", Gr = "_actionItem_1bemm_419", qr = "_tooltip_1bemm_441", Jr = "_cellOutline_1bemm_465", T = {
  frame: kr,
  table: Cr,
  scroll: Er,
  tableInner: wr,
  tableHead: Sr,
  tableBody: Rr,
  headRow: Nr,
  row: Br,
  columnGroup: Pr,
  columnsPinnedStart: Tr,
  columnsPinnedEnd: Or,
  columnsRegular: Ir,
  headCell: Mr,
  headContent: zr,
  headLabel: Ar,
  headButton: Dr,
  sortButton: Lr,
  resizeHotspot: Wr,
  dropIndicator: $r,
  dropIndicatorStart: Fr,
  cell: Kr,
  cellContent: Hr,
  ghost: Ur,
  ghostInner: Vr,
  actionMenu: Yr,
  actionList: Xr,
  actionItem: Gr,
  tooltip: qr,
  cellOutline: Jr
}, bn = an({});
function jn({
  onAfterSelect: e,
  children: n
}) {
  return /* @__PURE__ */ r.jsx(bn.Provider, { value: { onAfterSelect: e }, children: n });
}
function kn({ children: e }) {
  return /* @__PURE__ */ r.jsx("div", { className: T.actionList, children: e });
}
function lt({
  onSelect: e,
  children: n,
  className: s
}) {
  const { onAfterSelect: a } = sn(bn);
  return /* @__PURE__ */ r.jsx(
    "button",
    {
      type: "button",
      className: L(T.actionItem, s),
      onClick: () => {
        e == null || e(), a == null || a();
      },
      children: n
    }
  );
}
function ln({
  open: e,
  anchorRect: n,
  placement: s = "bottom-start",
  offset: a = 6,
  zIndex: i = 1e3,
  children: u
}) {
  const [d, f] = U(!1);
  if (_e(() => {
    f(!0);
  }, []), !e || !n || !d)
    return null;
  const m = {
    position: "fixed",
    zIndex: i
  }, j = s.endsWith("end") ? n.right : n.left, y = s.startsWith("top") ? n.top : n.bottom;
  return m.left = Math.round(j), m.top = Math.round(y + a), s.endsWith("end") && (m.transform = "translateX(-100%)"), s.startsWith("top") && (m.transform = `${m.transform ?? ""} translateY(-100%)`), Bn(/* @__PURE__ */ r.jsx("div", { style: m, children: u }), document.body);
}
function Zr({
  open: e,
  onOpenChange: n,
  host: s,
  children: a,
  className: i,
  zIndex: u
}) {
  const [d, f] = U(!1), m = G(null), j = G(null), y = e ?? d, [C, I] = U(null), W = (B) => {
    n ? n(B) : f(B);
  };
  return _e(() => {
    var B;
    y && I(((B = m.current) == null ? void 0 : B.getBoundingClientRect()) ?? null);
  }, [y]), _e(() => {
    if (!y) return;
    const B = (E) => {
      var k;
      E.key === "Escape" && (E.preventDefault(), W(!1), (k = m.current) == null || k.focus());
    }, g = (E) => {
      var w, K;
      const k = E.target;
      (w = j.current) != null && w.contains(k) || (K = m.current) != null && K.contains(k) || W(!1);
    };
    return window.addEventListener("keydown", B), window.addEventListener("mousedown", g), () => {
      window.removeEventListener("keydown", B), window.removeEventListener("mousedown", g);
    };
  }, [y]), /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    s({
      open: y,
      hostProps: {
        onClick: (B) => {
          B.preventDefault(), W(!y);
        },
        onKeyDown: (B) => {
          (B.key === "ArrowDown" || B.key === "ArrowUp") && (B.preventDefault(), W(!0));
        },
        "aria-haspopup": !0,
        "aria-expanded": y,
        ref: (B) => {
          m.current = B;
        }
      }
    }),
    /* @__PURE__ */ r.jsx(ln, { open: y, anchorRect: C, placement: "bottom-start", offset: 6, zIndex: u, children: /* @__PURE__ */ r.jsx("div", { ref: j, className: L(T.actionMenu, i), children: a }) })
  ] });
}
function Qr({
  content: e,
  children: n,
  delay: s = 200
}) {
  const [a, i] = U(!1), [u, d] = U(null), f = G(null), m = G(null);
  _e(() => () => {
    f.current && window.clearTimeout(f.current);
  }, []);
  const j = () => {
    e && (f.current && window.clearTimeout(f.current), f.current = window.setTimeout(() => {
      var C;
      d(((C = m.current) == null ? void 0 : C.getBoundingClientRect()) ?? null), i(!0);
    }, s));
  }, y = () => {
    f.current && window.clearTimeout(f.current), i(!1);
  };
  return /* @__PURE__ */ r.jsxs("div", { ref: m, onMouseEnter: j, onMouseLeave: y, children: [
    n,
    /* @__PURE__ */ r.jsx(ln, { open: a, anchorRect: u, placement: "top-start", offset: 6, children: /* @__PURE__ */ r.jsx("div", { className: T.tooltip, children: e }) })
  ] });
}
const Cn = an(null);
function eo() {
  const e = sn(Cn);
  if (!e)
    throw new Error("DataTableContext is missing");
  return e;
}
const En = an(null);
function to() {
  const e = sn(En);
  if (!e)
    throw new Error("DataTableCellContext is missing");
  return e;
}
function no({
  align: e,
  monospace: n,
  clickable: s = !1,
  active: a = !1,
  children: i,
  ...u
}) {
  const d = to(), f = eo(), m = G(null), [j, y] = U(!1), [C, I] = U(null), W = e ?? d.align, B = n ?? d.monospace, { value: g, rawValue: E, columnKey: k, filterKey: w, row: K, rowKey: Q } = d, q = ae(() => {
    if (!k) return null;
    const x = Q ?? (K ? f.getRowKey(K) : null);
    return x == null ? null : `${x}:${k}`;
  }, [K, Q, k, f]), oe = ae(() => w || (k && f.filterableColumnKeys.has(k) ? k : null), [w, k, f.filterableColumnKeys]), ne = ae(() => {
    if (E == null)
      return !!(g && g.trim() && !["-", "—", "–"].includes(g.trim()));
    if (typeof E == "string") {
      const x = E.trim();
      return !!(x && !["-", "—", "–"].includes(x));
    }
    return typeof E == "number" || typeof E == "boolean" ? !0 : Array.isArray(E) ? E.length > 0 : typeof E == "object" ? Object.keys(E).length > 0 : !1;
  }, [E, g]);
  _e(() => {
    q && y(f.activeContextMenuKey === q);
  }, [q, f.activeContextMenuKey]), _e(() => {
    if (!j) return;
    const x = (Z) => {
      var _;
      const ue = Z.target;
      (_ = m.current) != null && _.contains(ue) || J();
    }, M = () => J();
    return window.addEventListener("mousedown", x, !0), window.addEventListener("contextmenu", x, !0), window.addEventListener("scroll", M, !0), () => {
      window.removeEventListener("mousedown", x, !0), window.removeEventListener("contextmenu", x, !0), window.removeEventListener("scroll", M, !0);
    };
  }, [j]);
  const J = () => {
    q && f.activeContextMenuKey === q && f.setActiveContextMenuKey(null);
  }, ie = (x) => {
    if (x.preventDefault(), !q || !ne) return;
    if (f.activeContextMenuKey === q) {
      J();
      return;
    }
    const M = (m.current ?? x.currentTarget).getBoundingClientRect();
    I(M), f.setActiveContextMenuKey(q);
  }, R = async () => {
    var M;
    const x = E == null ? g : String(E);
    if ((M = navigator.clipboard) != null && M.writeText)
      await navigator.clipboard.writeText(x);
    else {
      const Z = document.createElement("textarea");
      Z.value = x, Z.style.position = "fixed", Z.style.left = "-9999px", document.body.appendChild(Z), Z.focus(), Z.select(), document.execCommand("copy"), Z.remove();
    }
    J();
  }, ve = () => {
    !k || !oe || (f.filterByValue(k, oe, E ?? g), J());
  }, ye = a || j, D = ae(() => k ? f.pinnedColumnsStartKeys.includes(k) || f.pinnedColumnsEndKeys.includes(k) : !1, [k, f.pinnedColumnsStartKeys, f.pinnedColumnsEndKeys]);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      ref: m,
      role: s ? "button" : void 0,
      tabIndex: s ? 0 : void 0,
      "data-align": W,
      "data-monospace": B ? "true" : "false",
      "data-clickable": s ? "true" : "false",
      className: T.cell,
      onContextMenu: ie,
      ...u,
      children: [
        /* @__PURE__ */ r.jsx("span", { className: T.cellContent, "data-cell-content": "true", children: i }),
        /* @__PURE__ */ r.jsx("span", { className: T.cellOutline, "data-active": ye ? "true" : "false" }),
        /* @__PURE__ */ r.jsx(
          ln,
          {
            open: j && ne,
            anchorRect: C,
            placement: "bottom-start",
            zIndex: D ? 220 : 140,
            children: /* @__PURE__ */ r.jsx("div", { className: T.actionMenu, children: /* @__PURE__ */ r.jsx(jn, { onAfterSelect: J, children: /* @__PURE__ */ r.jsxs(kn, { children: [
              oe ? /* @__PURE__ */ r.jsxs(lt, { onSelect: ve, children: [
                /* @__PURE__ */ r.jsx(gn, { size: 16 }),
                "Filter by value"
              ] }) : null,
              /* @__PURE__ */ r.jsxs(lt, { onSelect: R, children: [
                /* @__PURE__ */ r.jsx(dr, { size: 16 }),
                "Copy value"
              ] })
            ] }) }) })
          }
        )
      ]
    }
  );
}
const pn = 160, wt = 40, Lt = 9999;
function Jt(e, n = wt, s = Lt) {
  return Math.min(Math.max(e, n), s);
}
function ro(e, n) {
  if (!n.length) return e;
  const s = new Map(n.map((a, i) => [a, i]));
  return [...e].sort((a, i) => {
    const u = s.get(a.key), d = s.get(i.key);
    return u === void 0 && d === void 0 ? 0 : u === void 0 ? 1 : d === void 0 ? -1 : u - d;
  });
}
function it(e, n) {
  if (!n) {
    const s = e.id;
    return s == null || s === "" ? void 0 : s;
  }
  return typeof n == "function" ? n(e) : e[n];
}
function rn(e, n) {
  return typeof n.value == "function" ? n.value(e) : typeof n.value == "string" ? e[n.value] : e[n.key];
}
function oo({
  columns: e,
  rows: n,
  rowKey: s,
  size: a = "l",
  rowHover: i = !0,
  rowClickable: u = !1,
  rowActiveKey: d = null,
  onRowClick: f,
  rowDividers: m = !0,
  sorting: j,
  defaultSorting: y = { sortBy: null, sortOrder: "asc" },
  onSortingChange: C,
  columnWidths: I,
  onColumnResize: W,
  columnsResizing: B = !0,
  columnsReordering: g = !0,
  columnsPinControl: E = !0,
  columnsVisibilityControl: k = !0,
  filterKeys: w,
  onFilterByColumn: K,
  onFilterByValue: Q,
  visibleColumns: q,
  defaultVisibleColumns: oe,
  onVisibleColumnsChange: ne,
  columnsOrder: J,
  defaultColumnsOrder: ie,
  onColumnsOrderChange: R,
  pinnedColumnsStart: ve,
  defaultPinnedColumnsStart: ye,
  onPinnedColumnsStartChange: D,
  pinnedColumnsEnd: x,
  defaultPinnedColumnsEnd: M,
  onPinnedColumnsEndChange: Z,
  className: ue,
  style: _
}) {
  var Mt;
  const [H, le] = U(y), [ke, De] = U({}), [Ve, Je] = U(ie ?? []), [Ze, S] = U(
    oe
  ), [he, Qe] = U(ye ?? []), [ct, ut] = U(M ?? []), [Rt, Nt] = U(null), F = G(null), Bt = G(null), $e = G(null), me = G(null), Ce = G({}), et = G(null), Ne = G(null), $t = G([]), Ft = G([]), dt = G([]), Kt = G(0), Ht = G(0), Pt = G(0), [Tt, ft] = U(!1), [de, pt] = U(null), [Ee, vt] = U(null), [Ye, Ut] = U(-1), [Xe, ht] = U(-1), xe = j ?? H, tt = q ?? Ze, Ge = J ?? Ve, ee = ve ?? he, ge = x ?? ct, Be = ae(() => new Set(w ?? []), [w]), Fe = (o) => {
    C ? C(o) : le(o);
  }, Ot = (o) => {
    ne ? ne(o) : S(o);
  }, nt = (o) => {
    D ? D(o) : Qe(o);
  }, It = (o) => {
    R ? R(o) : Je(o);
  }, rt = (o) => {
    const c = tt ?? e.map((v) => v.key);
    Ot(c.filter((v) => v !== o));
  }, Ke = ae(() => Ge.length ? ro(e, Ge) : [...e], [e, Ge]), Le = ae(() => Array.isArray(tt) ? Ke.filter(
    ({ key: o, frozenStart: c, frozenEnd: v }) => c || v || tt.includes(o)
  ) : Ke, [Ke, tt]), be = ae(
    () => Le.filter(
      ({ key: o, frozenStart: c }) => c || ee.includes(o)
    ),
    [Le, ee]
  ), Pe = ae(
    () => Le.filter(
      ({ key: o, frozenStart: c, frozenEnd: v }) => !c && !ee.includes(o) && (v || ge.includes(o))
    ),
    [Le, ee, ge]
  ), we = ae(
    () => Le.filter(
      ({ key: o, frozenStart: c, frozenEnd: v }) => !c && !v && !ee.includes(o) && !ge.includes(o)
    ),
    [Le, ee, ge]
  );
  _e(() => {
    De((o) => {
      const c = { ...o };
      return e.forEach((v) => {
        const z = (I == null ? void 0 : I[v.key]) ?? o[v.key] ?? pn;
        c[v.key] = Jt(
          z,
          v.minWidth ?? wt,
          v.maxWidth ?? Lt
        );
      }), c;
    });
  }, [e, I]);
  const fe = ae(() => e.reduce((o, c) => (o[c.key] = Jt(
    (I == null ? void 0 : I[c.key]) ?? ke[c.key] ?? pn,
    c.minWidth ?? wt,
    c.maxWidth ?? Lt
  ), o), {}), [e, I, ke]), ot = () => {
    var yt, xt, gt;
    if (!F.current) return;
    const o = [...be, ...we, ...Pe];
    let v = o.length > 1 && et.current === ((yt = o[0]) == null ? void 0 : yt.key) ? 1 : 0;
    o.length > 1 && Ne.current && ((xt = o[v]) == null ? void 0 : xt.key) === Ne.current && (v = v === 0 ? 1 : 0), (gt = o[v]) == null || gt.key;
    const z = be.map(
      (O) => Ce.current[O.key] ?? fe[O.key]
    ), X = Pe.map(
      (O) => Ce.current[O.key] ?? fe[O.key]
    ), te = we.map(
      (O) => Ce.current[O.key] ?? fe[O.key]
    );
    let He = z.reduce((O, Oe) => O + Oe, 0), Se = X.reduce((O, Oe) => O + Oe, 0), Ie = te.reduce((O, Oe) => O + Oe, 0), qe = He + Ie + Se;
    const Me = F.current.clientWidth;
    Me > qe && (qe = Me);
    const zt = z.map((O) => `${O}px`).join(" "), At = X.map((O) => `${O}px`).join(" "), Xt = te.map((O) => `${O}px`).join(" ");
    $t.current = z, Ft.current = te, dt.current = X, Kt.current = He, Ht.current = Ie, Pt.current = Se, F.current.style.setProperty(
      "--ui2-table-row-template",
      `${He}px ${Ie}px ${Se}px`
    ), F.current.style.setProperty("--ui2-table-grid-pinned-start", zt), F.current.style.setProperty("--ui2-table-grid-regular", Xt), F.current.style.setProperty("--ui2-table-grid-pinned-end", At), F.current.style.setProperty("--ui2-table-width-pinned-start", `${He}px`), F.current.style.setProperty("--ui2-table-width-regular", `${Ie}px`), F.current.style.setProperty("--ui2-table-width-pinned-end", `${Se}px`), F.current.style.setProperty("--ui2-table-total-width", `${qe}px`);
  };
  _e(() => {
    ot();
  }, [fe, be, Pe, we]), _e(() => {
    if (!F.current) return;
    const o = F.current, c = () => ot();
    if (typeof ResizeObserver < "u") {
      const v = new ResizeObserver(c);
      return v.observe(o), () => v.disconnect();
    }
    return window.addEventListener("resize", c), () => window.removeEventListener("resize", c);
  }, [F, fe, be, Pe, we]);
  const mt = (o, c) => {
    const v = e.find((z) => z.key === o);
    return Jt(
      c,
      (v == null ? void 0 : v.minWidth) ?? wt,
      (v == null ? void 0 : v.maxWidth) ?? Lt
    );
  }, Vt = (o) => {
    const c = o.cloneNode(!0);
    c.style.width = "max-content", c.style.maxWidth = "none", c.style.display = "inline-flex", c.style.whiteSpace = "nowrap", c.style.visibility = "hidden", c.style.position = "absolute", c.style.left = "-9999px", document.body.appendChild(c);
    const { width: v } = c.getBoundingClientRect();
    document.body.removeChild(c);
    const z = v > 0 ? v : o.scrollWidth;
    return Math.ceil(z);
  }, Yt = (o) => {
    const c = window.getComputedStyle(o), v = Number.parseFloat(c.paddingLeft || "0"), z = Number.parseFloat(c.paddingRight || "0");
    return v + z;
  }, t = (o) => {
    if (!F.current) return;
    let c = 0;
    if (Array.from(F.current.querySelectorAll(`[data-column="${o}"]`)).forEach((z) => {
      const X = z.querySelector("[data-cell-content]") ?? z, te = Vt(X) + Yt(z);
      te > c && (c = te);
    }), !(c <= 0))
      return mt(o, c);
  }, l = (o, c) => {
    Ce.current[o] = c, Ne.current = o, ot(), De((v) => ({ ...v, [o]: c })), W == null || W({ key: o, width: c }), window.setTimeout(() => {
      Ce.current[o] === c && delete Ce.current[o], Ne.current === o && (Ne.current = null);
    }, 0);
  }, h = () => be.reduce((o, c) => o + fe[c.key], 0) + we.reduce((o, c) => o + fe[c.key], 0) + Pe.reduce((o, c) => o + fe[c.key], 0), b = (o) => {
    if (!F.current) return;
    const c = t(o);
    if (!c) return;
    const v = e.find((Me) => Me.key === o), z = fe[o], X = (v == null ? void 0 : v.minWidth) ?? wt, te = h(), He = F.current.clientWidth, Se = Math.max(0, He - te), Ie = 4, qe = 12;
    if (z > c + Ie) {
      l(o, Math.max(c, X));
      return;
    }
    if (Se >= qe && Math.abs(z - c) <= Ie) {
      const Me = mt(o, z + Se);
      if (Me <= z + 1) {
        l(o, Math.max(c, X));
        return;
      }
      l(o, Me);
      return;
    }
    l(o, Math.max(c, X));
  }, A = (o, c) => {
    if (!B || o.button !== 0 && o.pointerType !== "touch") return;
    o.preventDefault(), o.stopPropagation();
    const v = o.currentTarget;
    v.setPointerCapture && v.setPointerCapture(o.pointerId), et.current = c;
    const z = o.clientX, X = fe[c];
    me.current = { key: c, startX: z, startWidth: X };
  }, $ = (o, c) => {
    if (!me.current || me.current.key !== c) return;
    o.preventDefault(), o.stopPropagation();
    const v = mt(c, me.current.startWidth + (o.clientX - me.current.startX));
    Ce.current[c] = v, ot();
  }, P = (o, c) => {
    if (!me.current || me.current.key !== c) return;
    o.preventDefault(), o.stopPropagation();
    const v = Ce.current[c];
    v && (De((X) => ({ ...X, [c]: v })), W == null || W({ key: c, width: v })), Ce.current = {}, me.current = null;
    const z = o.currentTarget;
    z.releasePointerCapture && z.releasePointerCapture(o.pointerId);
  }, N = (o, c) => {
    o.preventDefault(), o.stopPropagation(), et.current = c, Ne.current = c, b(c);
  }, re = (o) => {
    let c = 0;
    return o.map((v) => {
      const z = c;
      return c += v, z;
    });
  }, V = (o, c) => {
    if (!g) return;
    const v = o.clientX, z = 5, X = (He) => {
      var gt;
      if (Math.abs(v - He.clientX) < z) return;
      window.removeEventListener("mousemove", X), window.removeEventListener("mouseup", te), ft(!0), pt(c);
      const Se = Ke.map((O) => O.key);
      Ut(Se.indexOf(c));
      const Ie = be.map((O) => fe[O.key]), qe = we.map((O) => fe[O.key]), Me = re(Ie), zt = re(qe), At = (gt = Bt.current) == null ? void 0 : gt.querySelector("[data-column]"), Xt = At ? At.offsetLeft : 0, yt = (O) => {
        if (!F.current) return;
        const { left: Oe, right: Gt } = F.current.getBoundingClientRect(), { scrollLeft: bt } = F.current, Dt = O.clientX - Oe + bt;
        $e.current && ($e.current.style.transform = `translateX(${Dt}px)`);
        let ze = O.clientX - Oe - Xt;
        if (ze < 0) return;
        if (ze <= Ie.reduce((jt, Ae) => jt + Ae, 0)) {
          const jt = Me.findIndex(
            (Rn, Nn) => ze >= Rn && ze < (Me[Nn + 1] ?? 1 / 0)
          ), Ae = be[jt];
          vt((Ae == null ? void 0 : Ae.key) ?? null), ht(Se.indexOf((Ae == null ? void 0 : Ae.key) ?? ""));
          return;
        }
        ze = ze + bt;
        const Sn = zt.findIndex(
          (jt, Ae) => ze >= jt && ze < (zt[Ae + 1] ?? 1 / 0)
        ), st = we[Sn];
        vt((st == null ? void 0 : st.key) ?? null), ht(Se.indexOf((st == null ? void 0 : st.key) ?? ""));
        const cn = 100;
        O.clientX < Oe + cn ? F.current.scrollLeft = Math.max(0, F.current.scrollLeft - 15) : O.clientX > Gt - cn && (F.current.scrollLeft = Math.min(
          F.current.scrollWidth - F.current.clientWidth,
          F.current.scrollLeft + 15
        ));
      }, xt = () => {
        if (Ee && de && de !== Ee) {
          const O = [...Se], Oe = O.indexOf(de), Gt = O.indexOf(Ee);
          O.splice(Oe, 1), O.splice(Gt, 0, de), It(O);
          const bt = ee.includes(de), Dt = ee.includes(Ee);
          bt && !Dt ? nt(ee.filter((ze) => ze !== de)) : !bt && Dt && nt([...ee, de]);
        }
        ft(!1), pt(null), vt(null), ht(-1), window.removeEventListener("mousemove", yt), window.removeEventListener("mouseup", xt);
      };
      window.addEventListener("mousemove", yt), window.addEventListener("mouseup", xt);
    }, te = () => {
      window.removeEventListener("mousemove", X), window.removeEventListener("mouseup", te);
    };
    window.addEventListener("mousemove", X), window.addEventListener("mouseup", te);
  }, Y = (o) => {
    ee.includes(o) || nt([...ee, o]);
  }, se = (o) => {
    nt(ee.filter((c) => c !== o));
  }, Te = (o, c) => {
    const v = c ?? (Be.has(o) ? o : null);
    v && (K == null || K({ columnKey: o, filterKey: v }));
  }, We = (o, c, v) => {
    const z = c ?? (Be.has(o) ? o : null);
    z && (Q == null || Q({ columnKey: o, filterKey: z, value: v }));
  }, ce = ae(() => {
    if (!xe.sortBy) return n;
    const o = e.find((v) => v.key === xe.sortBy);
    if (!o) return n;
    const c = [...n];
    return c.sort((v, z) => {
      if (o.sortFn) return o.sortFn(v, z, xe.sortOrder);
      const X = rn(v, o), te = rn(z, o);
      return typeof X == "string" && typeof te == "string" ? xe.sortOrder === "desc" ? te.localeCompare(X) : X.localeCompare(te) : typeof X == "number" && typeof te == "number" ? xe.sortOrder === "desc" ? te - X : X - te : 0;
    }), c;
  }, [n, e, xe]), _t = ae(
    () => ({
      sorting: xe,
      setSorting: Fe,
      pinnedColumnsStartKeys: ee,
      pinnedColumnsEndKeys: ge,
      pinColumn: Y,
      unpinColumn: se,
      hideColumn: rt,
      columnsReordering: g,
      columnsPinControl: E,
      columnsVisibilityControl: k,
      startDragging: V,
      draggedColumnKey: de,
      targetColumnKey: Ee,
      draggedColumnIndex: Ye,
      targetColumnIndex: Xe,
      filterableColumnKeys: Be,
      filterByColumn: Te,
      filterByValue: We,
      activeContextMenuKey: Rt,
      setActiveContextMenuKey: Nt,
      getRowKey: (o) => it(o, s) ?? ""
    }),
    [
      xe,
      ee,
      ge,
      g,
      E,
      k,
      de,
      Ee,
      Ye,
      Xe,
      Be,
      Rt,
      s
    ]
  );
  return /* @__PURE__ */ r.jsx(Cn.Provider, { value: _t, children: /* @__PURE__ */ r.jsx("div", { className: L(T.frame, ue), "data-ui2-component": "DataTable", style: _, children: /* @__PURE__ */ r.jsx("div", { className: T.scroll, ref: F, children: /* @__PURE__ */ r.jsx("div", { className: T.table, "data-size": a, children: /* @__PURE__ */ r.jsxs("div", { className: T.tableInner, children: [
    /* @__PURE__ */ r.jsx("div", { className: T.tableHead, role: "rowgroup", children: /* @__PURE__ */ r.jsxs("div", { className: T.headRow, role: "row", ref: Bt, children: [
      be.length ? /* @__PURE__ */ r.jsx("div", { className: L(T.columnGroup, T.columnsPinnedStart), "data-group": "pinned-start", children: be.map((o) => /* @__PURE__ */ r.jsx(
        Zt,
        {
          column: o,
          sorting: xe,
          onSortingChange: Fe,
          onPin: () => Y(o.key),
          onUnpin: () => se(o.key),
          onHide: () => rt(o.key),
          onFilter: () => Te(o.key, o.filterKey),
          onStartDragging: V,
          onResizeStart: A,
          onResizeMove: $,
          onResizeEnd: P,
          onResizeDoubleClick: N,
          canResize: B,
          canPin: E,
          pinned: ee.includes(o.key),
          canHide: k,
          canReorder: g,
          canFilter: !!o.filterKey || Be.has(o.key),
          dragState: {
            draggedColumnKey: de,
            targetColumnKey: Ee,
            draggedColumnIndex: Ye,
            targetColumnIndex: Xe
          }
        },
        o.key
      )) }) : null,
      /* @__PURE__ */ r.jsx("div", { className: L(T.columnGroup, T.columnsRegular), "data-group": "regular", children: we.map((o) => /* @__PURE__ */ r.jsx(
        Zt,
        {
          column: o,
          sorting: xe,
          onSortingChange: Fe,
          onPin: () => Y(o.key),
          onUnpin: () => se(o.key),
          onHide: () => rt(o.key),
          onFilter: () => Te(o.key, o.filterKey),
          onStartDragging: V,
          onResizeStart: A,
          onResizeMove: $,
          onResizeEnd: P,
          onResizeDoubleClick: N,
          canResize: B,
          canPin: E,
          pinned: ee.includes(o.key),
          canHide: k,
          canReorder: g,
          canFilter: !!o.filterKey || Be.has(o.key),
          dragState: {
            draggedColumnKey: de,
            targetColumnKey: Ee,
            draggedColumnIndex: Ye,
            targetColumnIndex: Xe
          }
        },
        o.key
      )) }),
      Pe.length ? /* @__PURE__ */ r.jsx("div", { className: L(T.columnGroup, T.columnsPinnedEnd), "data-group": "pinned-end", children: Pe.map((o) => /* @__PURE__ */ r.jsx(
        Zt,
        {
          column: o,
          sorting: xe,
          onSortingChange: Fe,
          onPin: () => Y(o.key),
          onUnpin: () => se(o.key),
          onHide: () => rt(o.key),
          onFilter: () => Te(o.key, o.filterKey),
          onStartDragging: V,
          onResizeStart: A,
          onResizeMove: $,
          onResizeEnd: P,
          onResizeDoubleClick: N,
          canResize: B,
          canPin: !1,
          pinned: !1,
          canHide: k,
          canReorder: g,
          canFilter: !!o.filterKey || Be.has(o.key),
          dragState: {
            draggedColumnKey: de,
            targetColumnKey: Ee,
            draggedColumnIndex: Ye,
            targetColumnIndex: Xe
          }
        },
        o.key
      )) }) : null,
      Tt ? /* @__PURE__ */ r.jsx("div", { className: T.ghost, ref: $e, children: /* @__PURE__ */ r.jsx("div", { className: T.ghostInner, children: (Mt = Ke.find((o) => o.key === de)) == null ? void 0 : Mt.header }) }) : null
    ] }) }),
    /* @__PURE__ */ r.jsx("div", { className: T.tableBody, role: "rowgroup", children: ce.map((o, c) => /* @__PURE__ */ r.jsxs(
      so,
      {
        hover: i,
        clickable: u || !!f,
        active: d != null && it(o, s) === d,
        divider: m,
        onClick: f ? () => f(o) : void 0,
        children: [
          be.length ? /* @__PURE__ */ r.jsx("div", { className: L(T.columnGroup, T.columnsPinnedStart), "data-group": "pinned-start", children: be.map((v) => /* @__PURE__ */ r.jsx(
            Qt,
            {
              column: v,
              row: o,
              rowKeyValue: it(o, s) ?? c
            },
            v.key
          )) }) : null,
          /* @__PURE__ */ r.jsx("div", { className: L(T.columnGroup, T.columnsRegular), "data-group": "regular", children: we.map((v) => /* @__PURE__ */ r.jsx(
            Qt,
            {
              column: v,
              row: o,
              rowKeyValue: it(o, s) ?? c
            },
            v.key
          )) }),
          Pe.length ? /* @__PURE__ */ r.jsx("div", { className: L(T.columnGroup, T.columnsPinnedEnd), "data-group": "pinned-end", children: Pe.map((v) => /* @__PURE__ */ r.jsx(
            Qt,
            {
              column: v,
              row: o,
              rowKeyValue: it(o, s) ?? c
            },
            v.key
          )) }) : null
        ]
      },
      it(o, s) ?? c
    )) })
  ] }) }) }) }) });
}
function so({
  children: e,
  hover: n,
  clickable: s,
  active: a,
  divider: i,
  onClick: u
}) {
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      className: T.row,
      "data-hover": n ? "true" : "false",
      "data-divider": i ? "true" : "false",
      "data-clickable": s ? "true" : "false",
      "data-active": a ? "true" : "false",
      onClick: u,
      children: e
    }
  );
}
function Zt({
  column: e,
  sorting: n,
  onSortingChange: s,
  onPin: a,
  onUnpin: i,
  onHide: u,
  onFilter: d,
  onStartDragging: f,
  onResizeStart: m,
  onResizeMove: j,
  onResizeEnd: y,
  onResizeDoubleClick: C,
  canResize: I,
  canPin: W,
  canHide: B,
  canReorder: g,
  canFilter: E,
  pinned: k,
  dragState: w
}) {
  const [K, Q] = U(!1), q = n.sortBy === e.key, oe = I && (e.resizable ?? !0);
  _e(() => {
    if (!K) return;
    const R = () => Q(!1);
    return window.addEventListener("scroll", R, !0), () => window.removeEventListener("scroll", R, !0);
  }, [K]);
  const ne = () => {
    if (e.sortable) {
      if (n.sortBy !== e.key) {
        s({ sortBy: e.key, sortOrder: "asc" });
        return;
      }
      if (n.sortOrder === "desc") {
        s({ sortBy: null, sortOrder: "asc" });
        return;
      }
      s({ sortBy: e.key, sortOrder: "desc" });
    }
  }, J = e.key === w.targetColumnKey && e.key !== w.draggedColumnKey, ie = w.draggedColumnIndex > w.targetColumnIndex && J;
  return /* @__PURE__ */ r.jsx(Qr, { content: e.tooltip, children: /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: T.headCell,
      "data-align": e.align ?? "start",
      "data-open": K ? "true" : "false",
      "data-column": e.key,
      onMouseDown: (R) => {
        var ve, ye;
        (ye = (ve = R.target) == null ? void 0 : ve.closest) != null && ye.call(ve, "[data-resize-hotspot]") || !g || e.frozenStart || e.frozenEnd || f(R.nativeEvent, e.key);
      },
      children: [
        /* @__PURE__ */ r.jsx("div", { className: T.headContent, children: /* @__PURE__ */ r.jsx("span", { className: T.headLabel, "data-cell-content": "true", children: e.header }) }),
        /* @__PURE__ */ r.jsx(
          Zr,
          {
            open: K,
            onOpenChange: Q,
            host: ({ hostProps: R }) => /* @__PURE__ */ r.jsx("button", { ...R, className: T.headButton, "aria-label": "Column menu" }),
            zIndex: k ? 220 : 140,
            children: /* @__PURE__ */ r.jsx(jn, { onAfterSelect: () => Q(!1), children: /* @__PURE__ */ r.jsxs(kn, { children: [
              W && !e.frozenStart && !e.frozenEnd ? k ? /* @__PURE__ */ r.jsxs(lt, { onSelect: i, children: [
                /* @__PURE__ */ r.jsx(yr, { size: 16 }),
                " Unpin column"
              ] }) : /* @__PURE__ */ r.jsxs(lt, { onSelect: a, children: [
                /* @__PURE__ */ r.jsx(gr, { size: 16 }),
                " Pin column"
              ] }) : null,
              B ? /* @__PURE__ */ r.jsxs(lt, { onSelect: u, children: [
                /* @__PURE__ */ r.jsx(pr, { size: 16 }),
                " Hide column"
              ] }) : null,
              E ? /* @__PURE__ */ r.jsxs(lt, { onSelect: d, children: [
                /* @__PURE__ */ r.jsx(gn, { size: 16 }),
                " Filter by column"
              ] }) : null
            ] }) })
          }
        ),
        e.sortable ? /* @__PURE__ */ r.jsx(
          St,
          {
            size: "xs",
            variant: "tertiary",
            className: T.sortButton,
            active: q,
            textColor: "--ui2-content-secondary",
            "aria-label": `Sort ${typeof e.header == "string" ? e.header : e.key}`,
            onClick: (R) => {
              R.stopPropagation(), ne();
            },
            children: q ? n.sortOrder === "desc" ? /* @__PURE__ */ r.jsx(nn, { size: 14 }) : /* @__PURE__ */ r.jsx(xn, { size: 14 }) : /* @__PURE__ */ r.jsx(nn, { size: 14 })
          }
        ) : null,
        oe ? /* @__PURE__ */ r.jsx(
          "span",
          {
            className: T.resizeHotspot,
            "data-resize-hotspot": "true",
            onPointerDown: (R) => {
              R.preventDefault(), R.stopPropagation(), m(R, e.key);
            },
            onPointerMove: (R) => {
              j(R, e.key);
            },
            onPointerUp: (R) => {
              y(R, e.key);
            },
            onPointerCancel: (R) => {
              y(R, e.key);
            },
            onDoubleClick: (R) => {
              R.preventDefault(), R.stopPropagation(), C(R, e.key);
            }
          }
        ) : null,
        J ? /* @__PURE__ */ r.jsx("div", { className: L(T.dropIndicator, ie && T.dropIndicatorStart) }) : null
      ]
    }
  ) });
}
function Qt({
  column: e,
  row: n,
  rowKeyValue: s
}) {
  const a = rn(n, e), i = e.valueFormatter ? e.valueFormatter(a, n) : a, u = i == null ? "" : String(i), d = e.render ? e.render(n) : u;
  return /* @__PURE__ */ r.jsx(
    En.Provider,
    {
      value: {
        align: e.align ?? "start",
        monospace: e.monospace ?? !1,
        row: n,
        rowKey: s,
        columnKey: e.key,
        filterKey: e.filterKey,
        value: u,
        rawValue: a
      },
      children: /* @__PURE__ */ r.jsx(no, { "data-column": e.key, children: d })
    }
  );
}
const ao = "_root_1cr7k_1", io = "_header_1cr7k_10", lo = "_headerLeft_1cr7k_19", co = "_headerRight_1cr7k_28", uo = "_titlePill_1cr7k_36", fo = "_subtitleBadge_1cr7k_53", po = "_subtitleBadgeAi_1cr7k_70", vo = "_tableWrap_1cr7k_81", ho = "_tableFrame_1cr7k_85", mo = "_footer_1cr7k_90", _o = "_footerText_1cr7k_99", yo = "_footerActions_1cr7k_108", Re = {
  root: ao,
  header: io,
  headerLeft: lo,
  headerRight: co,
  titlePill: uo,
  subtitleBadge: fo,
  subtitleBadgeAi: po,
  tableWrap: vo,
  tableFrame: ho,
  footer: mo,
  footerText: _o,
  footerActions: yo
}, xo = 10;
function go(e) {
  if (e == null) return;
  if (typeof e == "number" && Number.isFinite(e)) return e;
  const n = String(e).trim();
  if (!n) return;
  if (n.endsWith("px")) {
    const a = Number.parseFloat(n.slice(0, -2));
    return Number.isFinite(a) ? a : void 0;
  }
  if (n.endsWith("rem")) {
    const a = Number.parseFloat(n.slice(0, -3));
    return Number.isFinite(a) ? a * 16 : void 0;
  }
  const s = n.match(/^w-(\d+)$/);
  if (s)
    return Number.parseInt(s[1], 10) * 4;
}
function bo(e, n) {
  if (!n) {
    const s = e.id;
    return s == null || s === "" ? void 0 : s;
  }
  return typeof n == "function" ? n(e) : e[n];
}
function en(e, n) {
  return e[n];
}
function jo(e) {
  if (e === "left") return "start";
  if (e === "right") return "end";
  if (e === "center") return "center";
}
function gs({
  columns: e,
  data: n,
  title: s,
  subtitle: a,
  subtitleIcon: i = "none",
  pageSize: u = xo,
  className: d,
  showActions: f = !1,
  headerAction: m,
  onRowClick: j,
  onClearFilter: y,
  rowKey: C,
  filterKeys: I,
  onFilterByColumn: W,
  onFilterByValue: B,
  style: g
}) {
  const [E, k] = U({ sortBy: null, sortOrder: "asc" }), [w, K] = U(1), [Q, q] = U(null), oe = ae(() => {
    const D = e.map((x) => ({
      key: String(x.key),
      header: x.label,
      sortable: x.sortable,
      filterKey: x.filterKey,
      align: jo(x.align),
      value: x.key,
      render: x.render ? (M) => {
        var Z;
        return (Z = x.render) == null ? void 0 : Z.call(x, en(M, x.key), M);
      } : void 0
    }));
    return f ? [
      ...D,
      {
        key: "__actions",
        header: "Actions",
        sortable: !1,
        align: "end",
        render: (x) => /* @__PURE__ */ r.jsx(
          St,
          {
            variant: "tertiary",
            size: "s",
            onClick: (M) => M.stopPropagation(),
            "aria-label": "View",
            children: /* @__PURE__ */ r.jsx(hr, { size: 16 })
          }
        )
      }
    ] : D;
  }, [e, f]), ne = ae(() => {
    const D = {};
    return e.forEach((x) => {
      const M = go(x.width);
      M != null && (D[String(x.key)] = M);
    }), f && (D.__actions = 48), D;
  }, [e, f]), J = ae(() => {
    if (!E.sortBy) return n;
    const D = oe.find((M) => M.key === E.sortBy);
    if (!D) return n;
    const x = [...n];
    return x.sort((M, Z) => {
      const ue = D.key === "__actions" ? null : en(M, D.key), _ = D.key === "__actions" ? null : en(Z, D.key);
      return typeof ue == "number" && typeof _ == "number" ? E.sortOrder === "desc" ? _ - ue : ue - _ : typeof ue == "string" && typeof _ == "string" ? E.sortOrder === "desc" ? _.localeCompare(ue) : ue.localeCompare(_) : 0;
    }), x;
  }, [n, oe, E]), ie = Math.max(1, Math.ceil(J.length / u)), R = Math.min(w, ie), ve = J.slice((R - 1) * u, R * u);
  _e(() => {
    R !== w && K(R);
  }, [R, w]), _e(() => {
    K(1);
  }, [u, n.length, E.sortBy, E.sortOrder]);
  const ye = (D) => {
    const x = bo(D, C);
    x != null && q(x), j == null || j(D);
  };
  return /* @__PURE__ */ r.jsxs("div", { className: L(Re.root, d), style: g, children: [
    (s || a || m || y) && /* @__PURE__ */ r.jsxs("div", { className: Re.header, children: [
      /* @__PURE__ */ r.jsxs("div", { className: Re.headerLeft, children: [
        s ? /* @__PURE__ */ r.jsx("div", { className: Re.titlePill, children: s }) : null,
        y ? /* @__PURE__ */ r.jsx(Xn, { variant: "secondary", size: "m", onClick: y, children: "Clear filter" }) : null,
        a ? /* @__PURE__ */ r.jsxs(
          "span",
          {
            className: L(
              Re.subtitleBadge,
              i === "ai" && Re.subtitleBadgeAi
            ),
            children: [
              i === "ai" ? /* @__PURE__ */ r.jsx(jr, { size: 14 }) : null,
              a
            ]
          }
        ) : null
      ] }),
      m ? /* @__PURE__ */ r.jsx("div", { className: Re.headerRight, children: m }) : null
    ] }),
    /* @__PURE__ */ r.jsx("div", { className: Re.tableWrap, children: /* @__PURE__ */ r.jsx(
      oo,
      {
        columns: oe,
        rows: ve,
        size: "m",
        sorting: E,
        onSortingChange: k,
        columnWidths: ne,
        filterKeys: I,
        onFilterByColumn: W,
        onFilterByValue: B,
        rowClickable: !!j,
        rowActiveKey: Q,
        onRowClick: j ? ye : void 0,
        className: Re.tableFrame
      }
    ) }),
    ie > 1 ? /* @__PURE__ */ r.jsxs("div", { className: Re.footer, children: [
      /* @__PURE__ */ r.jsxs("div", { className: Re.footerText, children: [
        "Page ",
        R,
        " of ",
        ie
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: Re.footerActions, children: [
        /* @__PURE__ */ r.jsx(
          St,
          {
            variant: "tertiary",
            size: "s",
            onClick: () => K(Math.max(1, R - 1)),
            disabled: R === 1,
            "aria-label": "Previous page",
            children: /* @__PURE__ */ r.jsx(nr, { size: 16 })
          }
        ),
        /* @__PURE__ */ r.jsx(
          St,
          {
            variant: "tertiary",
            size: "s",
            onClick: () => K(Math.min(ie, R + 1)),
            disabled: R === ie,
            "aria-label": "Next page",
            children: /* @__PURE__ */ r.jsx(or, { size: 16 })
          }
        )
      ] })
    ] }) : null
  ] });
}
const ko = "_root_xtrkz_1", Co = "_collapsed_xtrkz_11", Eo = "_header_xtrkz_15", wo = "_accountButton_xtrkz_26", So = "_accountInfo_xtrkz_43", Ro = "_accountAvatar_xtrkz_50", No = "_accountName_xtrkz_71", Bo = "_accountUsername_xtrkz_72", Po = "_buttons_xtrkz_100", To = "_buttonsCollapsed_xtrkz_108", Oo = "_headerButton_xtrkz_112", Io = "_headerButtonDisabled_xtrkz_144", Mo = "_headerButtonActive_xtrkz_150", zo = "_nav_xtrkz_163", Ao = "_menuItem_xtrkz_193", Do = "_menuButton_xtrkz_197", Lo = "_menuButtonPseudoHover_xtrkz_237", Wo = "_menuButtonActive_xtrkz_241", $o = "_menuButtonExpanded_xtrkz_245", Fo = "_menuButtonDisabled_xtrkz_249", Ko = "_menuButtonText_xtrkz_258", Ho = "_menuButtonIcon_xtrkz_267", Uo = "_menuButtonChevron_xtrkz_283", Vo = "_menuButtonCompact_xtrkz_292", Yo = "_children_xtrkz_298", Xo = "_child_xtrkz_298", Go = "_childActive_xtrkz_335", qo = "_childDisabled_xtrkz_339", Jo = "_childText_xtrkz_348", Zo = "_childIcon_xtrkz_354", Qo = "_popover_xtrkz_363", es = "_popoverTitle_xtrkz_372", ts = "_footer_xtrkz_437", ns = "_footerExpanded_xtrkz_449", rs = "_footerBottom_xtrkz_453", os = "_footerLogo_xtrkz_461", ss = "_version_xtrkz_467", as = "_footerCollapsed_xtrkz_478", is = "_iconButton_xtrkz_498", ls = "_pinnedButtonWrap_xtrkz_519", cs = "_tooltipHost_xtrkz_524", p = {
  root: ko,
  collapsed: Co,
  header: Eo,
  accountButton: wo,
  accountInfo: So,
  accountAvatar: Ro,
  accountName: No,
  accountUsername: Bo,
  buttons: Po,
  buttonsCollapsed: To,
  headerButton: Oo,
  headerButtonDisabled: Io,
  headerButtonActive: Mo,
  nav: zo,
  menuItem: Ao,
  menuButton: Do,
  menuButtonPseudoHover: Lo,
  menuButtonActive: Wo,
  menuButtonExpanded: $o,
  menuButtonDisabled: Fo,
  menuButtonText: Ko,
  menuButtonIcon: Ho,
  menuButtonChevron: Uo,
  menuButtonCompact: Vo,
  children: Yo,
  child: Xo,
  childActive: Go,
  childDisabled: qo,
  childText: Jo,
  childIcon: Zo,
  popover: Qo,
  popoverTitle: es,
  footer: ts,
  footerExpanded: ns,
  footerBottom: rs,
  footerLogo: os,
  version: ss,
  footerCollapsed: as,
  iconButton: is,
  pinnedButtonWrap: ls,
  tooltipHost: cs
};
function vn(e, n, s, a) {
  const i = a.x - n.x, u = a.y - n.y, d = s.x - n.x, f = s.y - n.y, m = e.x - n.x, j = e.y - n.y, y = i * i + u * u, C = i * d + u * f, I = i * m + u * j, W = d * d + f * f, B = d * m + f * j, g = y * W - C * C;
  if (g === 0)
    return !1;
  const E = 1 / g, k = (W * I - C * B) * E, w = (y * B - C * I) * E;
  return k >= 0 && w >= 0 && k + w <= 1;
}
function hn(e, n, s = 0) {
  return e.x >= n.left - s && e.x <= n.right + s && e.y >= n.top - s && e.y <= n.bottom + s;
}
function us(e, n, s, a, i) {
  return vn(e, n, s, a) || vn(e, n, a, i);
}
function ds(e, n, s, a = 8) {
  if (hn(e, n, a) || hn(e, s, a))
    return !0;
  const i = { x: n.right, y: n.top - a }, u = { x: s.left, y: s.top - a }, d = { x: s.left, y: s.bottom + a }, f = { x: n.right, y: n.bottom + a };
  return us(e, i, u, d, f);
}
function fs({ initials: e, name: n, username: s, collapsed: a = !1, className: i, ...u }) {
  return /* @__PURE__ */ r.jsxs("button", { type: "button", className: L(p.accountButton, i), ...u, children: [
    /* @__PURE__ */ r.jsx("div", { className: p.accountAvatar, children: e }),
    a ? null : /* @__PURE__ */ r.jsxs("div", { className: p.accountInfo, children: [
      /* @__PURE__ */ r.jsx("div", { className: p.accountName, children: n }),
      /* @__PURE__ */ r.jsx("div", { className: p.accountUsername, children: s })
    ] })
  ] });
}
function ps({
  actions: e,
  collapsed: n = !1,
  renderTooltip: s,
  className: a,
  ...i
}) {
  return /* @__PURE__ */ r.jsx("div", { className: L(p.buttons, n && p.buttonsCollapsed, a), ...i, children: e.map((u) => {
    const d = /* @__PURE__ */ r.jsx(
      "button",
      {
        type: "button",
        className: L(
          p.headerButton,
          u.active && p.headerButtonActive,
          u.disabled && p.headerButtonDisabled
        ),
        onClick: u.disabled ? void 0 : u.onClick,
        "aria-label": u.label,
        style: { "--ui2-sidebar-pinned-icon-color": "var(--ui2-content-secondary)" },
        children: u.icon
      },
      u.id
    );
    return s ? /* @__PURE__ */ r.jsx("div", { className: p.pinnedButtonWrap, children: s({ content: u.label, children: d }) }, u.id) : /* @__PURE__ */ r.jsx("div", { className: p.pinnedButtonWrap, children: d }, u.id);
  }) });
}
function vs({
  icon: e,
  showIcon: n = !0,
  label: s,
  compact: a = !1,
  active: i,
  expanded: u,
  disabled: d,
  pseudoHover: f,
  chevron: m,
  as: j,
  className: y,
  ...C
}) {
  const I = j ?? "button";
  return /* @__PURE__ */ r.jsxs(
    I,
    {
      ...I === "button" ? { type: "button", disabled: d } : null,
      className: L(
        p.menuButton,
        a && p.menuButtonCompact,
        i && p.menuButtonActive,
        u && p.menuButtonExpanded,
        d && p.menuButtonDisabled,
        f && p.menuButtonPseudoHover,
        y
      ),
      ...C,
      children: [
        e && n ? /* @__PURE__ */ r.jsx("span", { className: p.menuButtonIcon, children: e }) : null,
        a ? null : /* @__PURE__ */ r.jsx("span", { className: p.menuButtonText, children: s }),
        !a && m ? /* @__PURE__ */ r.jsx("span", { className: p.menuButtonChevron, children: m }) : null
      ]
    }
  );
}
function hs({ collapsed: e = !1, version: n, logo: s, toggle: a, className: i, ...u }) {
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: L(p.footer, !e && p.footerExpanded, e && p.footerCollapsed, i),
      ...u,
      children: [
        !e && n ? /* @__PURE__ */ r.jsxs("div", { className: p.version, children: [
          "v. ",
          n
        ] }) : null,
        /* @__PURE__ */ r.jsxs("div", { className: p.footerBottom, children: [
          /* @__PURE__ */ r.jsx("div", { className: p.footerLogo, children: s }),
          a
        ] })
      ]
    }
  );
}
function ms(e) {
  return /* @__PURE__ */ r.jsx("div", { className: L(p.nav, e.className), ...e });
}
function bs({ icon: e, label: n, className: s, ...a }) {
  return /* @__PURE__ */ r.jsx("button", { type: "button", "aria-label": n, className: L(p.iconButton, s), ...a, children: e });
}
const wn = on(
  ({ title: e, children: n, className: s, ...a }, i) => /* @__PURE__ */ r.jsxs("div", { ref: i, className: L(p.popover, s), ...a, children: [
    /* @__PURE__ */ r.jsx("div", { className: p.popoverTitle, children: e }),
    n
  ] })
);
wn.displayName = "SidebarPopover";
function _s({ content: e, children: n }) {
  return /* @__PURE__ */ r.jsx("span", { className: p.tooltipHost, title: e, children: n });
}
function js({
  collapsed: e,
  defaultCollapsed: n = !1,
  onCollapsedChange: s,
  account: a,
  pinnedActions: i = [],
  navItems: u,
  footer: d,
  className: f,
  style: m,
  renderTooltip: j,
  onItemClick: y,
  onChildClick: C
}) {
  const I = j ?? _s, [W, B] = U(n), g = e ?? W, [E, k] = U(null), [w, K] = U(null), Q = G(!1), q = G(null), oe = G(null), ne = G({ active: !1 }), J = G(null), ie = ae(() => {
    const _ = /* @__PURE__ */ new Map();
    return u.forEach((H) => {
      var le;
      H.defaultExpanded && _.set(H.id, !0), (le = H.children) != null && le.some((ke) => ke.active) && _.set(H.id, !0);
    }), _;
  }, [u]), [R, ve] = U(() => ie), ye = at(
    (_) => {
      s ? s(_) : B(_);
    },
    [s]
  ), D = at((_, H) => {
    k(_), K(H), oe.current = H;
  }, []), x = at(() => {
    Q.current || (k(null), K(null));
  }, []), M = at(() => {
    J.current && (window.clearTimeout(J.current), J.current = null);
  }, []), Z = at(
    (_ = 260) => {
      M(), J.current = window.setTimeout(() => {
        Q.current || (ne.current.active = !1, x());
      }, _);
    },
    [M, x]
  ), ue = at((_) => {
    ve((H) => {
      const le = new Map(H);
      return le.set(_, !H.get(_)), le;
    });
  }, []);
  return _e(() => {
    if (!g || !E)
      return;
    const _ = (H) => {
      if (!ne.current.active || Q.current || !q.current || !oe.current)
        return;
      const le = q.current.getBoundingClientRect(), ke = { x: H.clientX, y: H.clientY };
      ds(ke, oe.current, le, 10) ? M() : (ne.current.active = !1, x());
    };
    return window.addEventListener("mousemove", _), () => {
      window.removeEventListener("mousemove", _);
    };
  }, [E, g, M, x]), _e(() => () => M(), [M]), /* @__PURE__ */ r.jsxs(
    "div",
    {
      "data-ui2-component": "Sidebar",
      "data-collapsed": g ? "true" : "false",
      className: L(p.root, g && p.collapsed, f),
      style: m,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: p.header, children: [
          a ? /* @__PURE__ */ r.jsx(
            fs,
            {
              initials: a.initials,
              name: a.name,
              username: a.username,
              collapsed: g,
              onClick: a.onClick
            }
          ) : null,
          /* @__PURE__ */ r.jsx(ps, { actions: i, collapsed: g, renderTooltip: I })
        ] }),
        /* @__PURE__ */ r.jsx(ms, { onClick: () => k(null), children: u.map((_) => {
          var Ve, Je, Ze;
          const H = !!((Ve = _.children) != null && Ve.length), le = R.get(_.id) ?? !1, ke = g && E === _.id && H && !_.disabled, De = /* @__PURE__ */ r.jsx(
            vs,
            {
              icon: _.icon,
              showIcon: _.showIcon,
              label: _.title,
              compact: g,
              active: _.active,
              expanded: H && le,
              disabled: _.disabled,
              pseudoHover: ke,
              chevron: !g && H ? le ? /* @__PURE__ */ r.jsx(xn, { size: 16 }) : /* @__PURE__ */ r.jsx(nn, { size: 16 }) : void 0,
              onClick: () => {
                var S;
                if (H && !g) {
                  ue(_.id);
                  return;
                }
                _.disabled || (y == null || y(_), (S = _.onClick) == null || S.call(_));
              }
            }
          );
          return /* @__PURE__ */ r.jsxs(
            "div",
            {
              className: p.menuItem,
              onMouseEnter: (S) => {
                !g || !H || _.disabled || (ne.current.active = !1, M(), D(_.id, S.currentTarget.getBoundingClientRect()));
              },
              onMouseLeave: (S) => {
                if (g) {
                  if (!H || _.disabled) {
                    x();
                    return;
                  }
                  ne.current.active = !0, Z();
                }
              },
              onFocus: () => {
                var he;
                if (!g || !H || _.disabled)
                  return;
                const S = (he = document.getElementById(`ui2-sidebar-item-${_.id}`)) == null ? void 0 : he.getBoundingClientRect();
                S && D(_.id, S);
              },
              children: [
                /* @__PURE__ */ r.jsx("div", { id: `ui2-sidebar-item-${_.id}`, children: De }),
                H && !g && le ? /* @__PURE__ */ r.jsx("div", { className: p.children, children: (Je = _.children) == null ? void 0 : Je.map((S) => /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsxs(
                  "button",
                  {
                    type: "button",
                    className: L(
                      p.child,
                      S.active && p.childActive,
                      S.disabled && p.childDisabled
                    ),
                    disabled: S.disabled,
                    onClick: S.disabled ? void 0 : () => {
                      var he;
                      C == null || C(S, _), (he = S.onClick) == null || he.call(S);
                    },
                    children: [
                      S.icon && S.showIcon !== !1 ? /* @__PURE__ */ r.jsx("span", { className: p.childIcon, children: S.icon }) : null,
                      /* @__PURE__ */ r.jsx("span", { className: p.childText, children: S.title })
                    ]
                  }
                ) }, S.id ?? S.title)) }) : null,
                H && ke && w ? /* @__PURE__ */ r.jsx(
                  wn,
                  {
                    ref: q,
                    title: _.title,
                    style: {
                      position: "fixed",
                      top: Math.round(w.top),
                      left: Math.round(w.right + 12)
                    },
                    onMouseEnter: () => {
                      Q.current = !0, ne.current.active = !1, M();
                    },
                    onMouseLeave: () => {
                      Q.current = !1, Z(120);
                    },
                    children: (Ze = _.children) == null ? void 0 : Ze.map((S) => /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsxs(
                      "button",
                      {
                        type: "button",
                        className: L(
                          p.child,
                          S.active && p.childActive,
                          S.disabled && p.childDisabled
                        ),
                        disabled: S.disabled,
                        onClick: S.disabled ? void 0 : () => {
                          var he;
                          C == null || C(S, _), (he = S.onClick) == null || he.call(S);
                        },
                        children: [
                          S.icon && S.showIcon !== !1 ? /* @__PURE__ */ r.jsx("span", { className: p.childIcon, children: S.icon }) : null,
                          /* @__PURE__ */ r.jsx("span", { className: p.childText, children: S.title })
                        ]
                      }
                    ) }, S.id ?? S.title))
                  }
                ) : null
              ]
            },
            _.id
          );
        }) }),
        /* @__PURE__ */ r.jsx(
          hs,
          {
            collapsed: g,
            version: d == null ? void 0 : d.version,
            logo: /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              d != null && d.logoCollapsedSrc && g ? /* @__PURE__ */ r.jsx("img", { src: d.logoCollapsedSrc, alt: d.logoAlt ?? "Logo", width: d.logoCollapsedWidth ?? 32 }) : null,
              d != null && d.logoExpandedSrc && !g ? /* @__PURE__ */ r.jsx("img", { src: d.logoExpandedSrc, alt: d.logoAlt ?? "Logo", width: d.logoExpandedWidth ?? 131 }) : null
            ] }),
            toggle: d != null && d.toggleButton ? d.toggleButton : /* @__PURE__ */ r.jsx(
              St,
              {
                "aria-label": g ? (d == null ? void 0 : d.toggleCollapsedLabel) ?? "Expand" : (d == null ? void 0 : d.toggleExpandedLabel) ?? "Collapse",
                variant: "tertiary",
                textColor: "--ui2-content-secondary",
                onClick: () => ye(!g),
                children: g ? /* @__PURE__ */ r.jsx(cr, { size: 18 }) : /* @__PURE__ */ r.jsx(ir, { size: 18 })
              }
            )
          }
        )
      ]
    }
  );
}
function ks({ collapsed: e = !1, className: n, ...s }) {
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      "data-ui2-component": "SidebarShell",
      "data-collapsed": e ? "true" : "false",
      className: L(p.root, e && p.collapsed, n),
      ...s
    }
  );
}
function Cs(e) {
  return /* @__PURE__ */ r.jsx("div", { "data-ui2-component": "SidebarHeader", className: L(p.header, e.className), ...e });
}
function Es({
  initials: e,
  name: n,
  username: s,
  collapsed: a = !1,
  className: i,
  ...u
}) {
  return /* @__PURE__ */ r.jsxs("button", { type: "button", className: L(p.accountButton, i), ...u, children: [
    /* @__PURE__ */ r.jsx("div", { className: p.accountAvatar, children: e }),
    a ? null : /* @__PURE__ */ r.jsxs("div", { className: p.accountInfo, children: [
      /* @__PURE__ */ r.jsx("div", { className: p.accountName, children: n }),
      /* @__PURE__ */ r.jsx("div", { className: p.accountUsername, children: s })
    ] })
  ] });
}
function ws({ icon: e, label: n, active: s, disabled: a, className: i, ...u }) {
  return /* @__PURE__ */ r.jsx(
    "button",
    {
      type: "button",
      "aria-label": n,
      disabled: a,
      className: L(
        p.headerButton,
        s && p.headerButtonActive,
        a && p.headerButtonDisabled,
        i
      ),
      ...u,
      children: e
    }
  );
}
function Ss({
  icon: e,
  label: n,
  compact: s = !1,
  active: a,
  disabled: i,
  pseudoHover: u,
  chevron: d,
  className: f,
  ...m
}) {
  return /* @__PURE__ */ r.jsxs(
    "button",
    {
      type: "button",
      className: L(
        p.menuButton,
        s && p.menuButtonCompact,
        a && p.menuButtonActive,
        i && p.menuButtonDisabled,
        u && p.menuButtonPseudoHover,
        f
      ),
      disabled: i,
      ...m,
      children: [
        /* @__PURE__ */ r.jsx("span", { className: p.menuButtonIcon, children: e }),
        s ? null : /* @__PURE__ */ r.jsx("span", { className: p.menuButtonText, children: n }),
        !s && d ? /* @__PURE__ */ r.jsx("span", { className: p.menuButtonChevron, children: d }) : null
      ]
    }
  );
}
function Rs({ label: e, icon: n, active: s, disabled: a, className: i, ...u }) {
  return /* @__PURE__ */ r.jsxs(
    "button",
    {
      type: "button",
      className: L(p.child, s && p.childActive, a && p.childDisabled, i),
      disabled: a,
      ...u,
      children: [
        n ? /* @__PURE__ */ r.jsx("span", { className: p.childIcon, children: n }) : null,
        /* @__PURE__ */ r.jsx("span", { className: p.childText, children: e })
      ]
    }
  );
}
function Ns({ collapsed: e = !1, version: n, logo: s, toggle: a, className: i, ...u }) {
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      "data-ui2-component": "SidebarFooter",
      className: L(p.footer, !e && p.footerExpanded, e && p.footerCollapsed, i),
      ...u,
      children: [
        !e && n ? /* @__PURE__ */ r.jsxs("div", { className: p.version, children: [
          "v. ",
          n
        ] }) : null,
        /* @__PURE__ */ r.jsxs("div", { className: p.footerBottom, children: [
          /* @__PURE__ */ r.jsx("div", { className: p.footerLogo, children: s }),
          a
        ] })
      ]
    }
  );
}
export {
  Xn as Button,
  St as ButtonIcon,
  oo as DataTable,
  no as DataTableCell,
  gs as DataTableCompat,
  js as Sidebar,
  Es as SidebarAccountButton,
  Rs as SidebarChildButton,
  hs as SidebarFooterPart,
  Ns as SidebarFooterSection,
  Cs as SidebarHeader,
  ws as SidebarHeaderButton,
  bs as SidebarIconButton,
  vs as SidebarItem,
  ms as SidebarNav,
  Ss as SidebarNavButton,
  ps as SidebarPinnedButtons,
  wn as SidebarPopover,
  fs as SidebarProfile,
  ks as SidebarShell
};
