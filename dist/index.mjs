import sn, { forwardRef as an, createElement as Kt, useContext as qt, createContext as Jt, useState as U, useEffect as me, useRef as V, useMemo as le, useCallback as at } from "react";
import { createPortal as bn } from "react-dom";
var Yt = { exports: {} }, gt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var en;
function jn() {
  if (en) return gt;
  en = 1;
  var n = sn, o = Symbol.for("react.element"), s = Symbol.for("react.fragment"), l = Object.prototype.hasOwnProperty, v = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(h, x, b) {
    var y, j = {}, I = null, $ = null;
    b !== void 0 && (I = "" + b), x.key !== void 0 && (I = "" + x.key), x.ref !== void 0 && ($ = x.ref);
    for (y in x) l.call(x, y) && !p.hasOwnProperty(y) && (j[y] = x[y]);
    if (h && h.defaultProps) for (y in x = h.defaultProps, x) j[y] === void 0 && (j[y] = x[y]);
    return { $$typeof: o, type: h, key: I, ref: $, props: j, _owner: v.current };
  }
  return gt.Fragment = s, gt.jsx = d, gt.jsxs = d, gt;
}
var bt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tn;
function kn() {
  return tn || (tn = 1, process.env.NODE_ENV !== "production" && function() {
    var n = sn, o = Symbol.for("react.element"), s = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), h = Symbol.for("react.context"), x = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), E = Symbol.iterator, C = "@@iterator";
    function O(e) {
      if (e === null || typeof e != "object")
        return null;
      var i = E && e[E] || e[C];
      return typeof i == "function" ? i : null;
    }
    var w = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function N(e) {
      {
        for (var i = arguments.length, f = new Array(i > 1 ? i - 1 : 0), m = 1; m < i; m++)
          f[m - 1] = arguments[m];
        Z("error", e, f);
      }
    }
    function Z(e, i, f) {
      {
        var m = w.ReactDebugCurrentFrame, T = m.getStackAddendum();
        T !== "" && (i += "%s", f = f.concat([T]));
        var L = f.map(function(S) {
          return String(S);
        });
        L.unshift("Warning: " + i), Function.prototype.apply.call(console[e], console, L);
      }
    }
    var ee = !1, G = !1, ce = !1, ne = !1, Q = !1, we;
    we = Symbol.for("react.module.reference");
    function M(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === l || e === p || Q || e === v || e === b || e === y || ne || e === $ || ee || G || ce || typeof e == "object" && e !== null && (e.$$typeof === I || e.$$typeof === j || e.$$typeof === d || e.$$typeof === h || e.$$typeof === x || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === we || e.getModuleId !== void 0));
    }
    function ve(e, i, f) {
      var m = e.displayName;
      if (m)
        return m;
      var T = i.displayName || i.name || "";
      return T !== "" ? f + "(" + T + ")" : f;
    }
    function ge(e) {
      return e.displayName || "Context";
    }
    function se(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && N("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case l:
          return "Fragment";
        case s:
          return "Portal";
        case p:
          return "Profiler";
        case v:
          return "StrictMode";
        case b:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case h:
            var i = e;
            return ge(i) + ".Consumer";
          case d:
            var f = e;
            return ge(f._context) + ".Provider";
          case x:
            return ve(e, e.render, "ForwardRef");
          case j:
            var m = e.displayName || null;
            return m !== null ? m : se(e.type) || "Memo";
          case I: {
            var T = e, L = T._payload, S = T._init;
            try {
              return se(S(L));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var z = Object.assign, K = 0, te, Ie, _, A, re, be, Ke;
    function He() {
    }
    He.__reactDisabledLog = !0;
    function Je() {
      {
        if (K === 0) {
          te = console.log, Ie = console.info, _ = console.warn, A = console.error, re = console.group, be = console.groupCollapsed, Ke = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: He,
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
    function Ze() {
      {
        if (K--, K === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: z({}, e, {
              value: te
            }),
            info: z({}, e, {
              value: Ie
            }),
            warn: z({}, e, {
              value: _
            }),
            error: z({}, e, {
              value: A
            }),
            group: z({}, e, {
              value: re
            }),
            groupCollapsed: z({}, e, {
              value: be
            }),
            groupEnd: z({}, e, {
              value: Ke
            })
          });
        }
        K < 0 && N("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var g = w.ReactCurrentDispatcher, ue;
    function Ue(e, i, f) {
      {
        if (ue === void 0)
          try {
            throw Error();
          } catch (T) {
            var m = T.stack.trim().match(/\n( *(at )?)/);
            ue = m && m[1] || "";
          }
        return `
` + ue + e;
      }
    }
    var lt = !1, D;
    {
      var wt = typeof WeakMap == "function" ? WeakMap : Map;
      D = new wt();
    }
    function Qe(e, i) {
      if (!e || lt)
        return "";
      {
        var f = D.get(e);
        if (f !== void 0)
          return f;
      }
      var m;
      lt = !0;
      var T = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var L;
      L = g.current, g.current = null, Je();
      try {
        if (i) {
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
            } catch (t) {
              m = t;
            }
            Reflect.construct(e, [], S);
          } else {
            try {
              S.call();
            } catch (t) {
              m = t;
            }
            e.call(S.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (t) {
            m = t;
          }
          e();
        }
      } catch (t) {
        if (t && m && typeof t.stack == "string") {
          for (var k = t.stack.split(`
`), X = m.stack.split(`
`), F = k.length - 1, Y = X.length - 1; F >= 1 && Y >= 0 && k[F] !== X[Y]; )
            Y--;
          for (; F >= 1 && Y >= 0; F--, Y--)
            if (k[F] !== X[Y]) {
              if (F !== 1 || Y !== 1)
                do
                  if (F--, Y--, Y < 0 || k[F] !== X[Y]) {
                    var ie = `
` + k[F].replace(" at new ", " at ");
                    return e.displayName && ie.includes("<anonymous>") && (ie = ie.replace("<anonymous>", e.displayName)), typeof e == "function" && D.set(e, ie), ie;
                  }
                while (F >= 1 && Y >= 0);
              break;
            }
        }
      } finally {
        lt = !1, g.current = L, Ze(), Error.prepareStackTrace = T;
      }
      var We = e ? e.displayName || e.name : "", Se = We ? Ue(We) : "";
      return typeof e == "function" && D.set(e, Se), Se;
    }
    function Ee(e, i, f) {
      return Qe(e, !1);
    }
    function je(e) {
      var i = e.prototype;
      return !!(i && i.isReactComponent);
    }
    function Me(e, i, f) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Qe(e, je(e));
      if (typeof e == "string")
        return Ue(e);
      switch (e) {
        case b:
          return Ue("Suspense");
        case y:
          return Ue("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case x:
            return Ee(e.render);
          case j:
            return Me(e.type, i, f);
          case I: {
            var m = e, T = m._payload, L = m._init;
            try {
              return Me(L(T), i, f);
            } catch {
            }
          }
        }
      return "";
    }
    var pe = Object.prototype.hasOwnProperty, Et = {}, St = w.ReactDebugCurrentFrame;
    function et(e) {
      if (e) {
        var i = e._owner, f = Me(e.type, e._source, i ? i.type : null);
        St.setExtraStackFrame(f);
      } else
        St.setExtraStackFrame(null);
    }
    function Mt(e, i, f, m, T) {
      {
        var L = Function.call.bind(pe);
        for (var S in e)
          if (L(e, S)) {
            var k = void 0;
            try {
              if (typeof e[S] != "function") {
                var X = Error((m || "React class") + ": " + f + " type `" + S + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[S] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw X.name = "Invariant Violation", X;
              }
              k = e[S](i, S, m, f, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (F) {
              k = F;
            }
            k && !(k instanceof Error) && (et(T), N("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", m || "React class", f, S, typeof k), et(null)), k instanceof Error && !(k.message in Et) && (Et[k.message] = !0, et(T), N("Failed %s type: %s", f, k.message), et(null));
          }
      }
    }
    var zt = Array.isArray;
    function ct(e) {
      return zt(e);
    }
    function Dt(e) {
      {
        var i = typeof Symbol == "function" && Symbol.toStringTag, f = i && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return f;
      }
    }
    function Rt(e) {
      try {
        return oe(e), !1;
      } catch {
        return !0;
      }
    }
    function oe(e) {
      return "" + e;
    }
    function ut(e) {
      if (Rt(e))
        return N("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Dt(e)), oe(e);
    }
    var he = w.ReactCurrentOwner, dt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ze, Bt;
    function Ve(e) {
      if (pe.call(e, "ref")) {
        var i = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ft(e) {
      if (pe.call(e, "key")) {
        var i = Object.getOwnPropertyDescriptor(e, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function de(e, i) {
      typeof e.ref == "string" && he.current;
    }
    function tt(e, i) {
      {
        var f = function() {
          ze || (ze = !0, N("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        f.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: f,
          configurable: !0
        });
      }
    }
    function vt(e, i) {
      {
        var f = function() {
          Bt || (Bt = !0, N("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        f.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: f,
          configurable: !0
        });
      }
    }
    var q = function(e, i, f, m, T, L, S) {
      var k = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: o,
        // Built-in properties that belong on the element
        type: e,
        key: i,
        ref: f,
        props: S,
        // Record the component responsible for creating this element.
        _owner: L
      };
      return k._store = {}, Object.defineProperty(k._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(k, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: m
      }), Object.defineProperty(k, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: T
      }), Object.freeze && (Object.freeze(k.props), Object.freeze(k)), k;
    };
    function De(e, i, f, m, T) {
      {
        var L, S = {}, k = null, X = null;
        f !== void 0 && (ut(f), k = "" + f), ft(i) && (ut(i.key), k = "" + i.key), Ve(i) && (X = i.ref, de(i, T));
        for (L in i)
          pe.call(i, L) && !dt.hasOwnProperty(L) && (S[L] = i[L]);
        if (e && e.defaultProps) {
          var F = e.defaultProps;
          for (L in F)
            S[L] === void 0 && (S[L] = F[L]);
        }
        if (k || X) {
          var Y = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          k && tt(S, Y), X && vt(S, Y);
        }
        return q(e, k, X, T, m, he.current, S);
      }
    }
    var ke = w.ReactCurrentOwner, Ye = w.ReactDebugCurrentFrame;
    function Ae(e) {
      if (e) {
        var i = e._owner, f = Me(e.type, e._source, i ? i.type : null);
        Ye.setExtraStackFrame(f);
      } else
        Ye.setExtraStackFrame(null);
    }
    var Le;
    Le = !1;
    function pt(e) {
      return typeof e == "object" && e !== null && e.$$typeof === o;
    }
    function Xe() {
      {
        if (ke.current) {
          var e = se(ke.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Ge(e) {
      return "";
    }
    var Te = {};
    function fe(e) {
      {
        var i = Xe();
        if (!i) {
          var f = typeof e == "string" ? e : e.displayName || e.name;
          f && (i = `

Check the top-level render call using <` + f + ">.");
        }
        return i;
      }
    }
    function xe(e, i) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var f = fe(i);
        if (Te[f])
          return;
        Te[f] = !0;
        var m = "";
        e && e._owner && e._owner !== ke.current && (m = " It was passed a child from " + se(e._owner.type) + "."), Ae(e), N('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', f, m), Ae(null);
      }
    }
    function _e(e, i) {
      {
        if (typeof e != "object")
          return;
        if (ct(e))
          for (var f = 0; f < e.length; f++) {
            var m = e[f];
            pt(m) && xe(m, i);
          }
        else if (pt(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var T = O(e);
          if (typeof T == "function" && T !== e.entries)
            for (var L = T.call(e), S; !(S = L.next()).done; )
              pt(S.value) && xe(S.value, i);
        }
      }
    }
    function ae(e) {
      {
        var i = e.type;
        if (i == null || typeof i == "string")
          return;
        var f;
        if (typeof i == "function")
          f = i.propTypes;
        else if (typeof i == "object" && (i.$$typeof === x || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        i.$$typeof === j))
          f = i.propTypes;
        else
          return;
        if (f) {
          var m = se(i);
          Mt(f, e.props, "prop", m, e);
        } else if (i.PropTypes !== void 0 && !Le) {
          Le = !0;
          var T = se(i);
          N("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", T || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && N("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function nt(e) {
      {
        for (var i = Object.keys(e.props), f = 0; f < i.length; f++) {
          var m = i[f];
          if (m !== "children" && m !== "key") {
            Ae(e), N("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", m), Ae(null);
            break;
          }
        }
        e.ref !== null && (Ae(e), N("Invalid attribute `ref` supplied to `React.Fragment`."), Ae(null));
      }
    }
    var rt = {};
    function Pt(e, i, f, m, T, L) {
      {
        var S = M(e);
        if (!S) {
          var k = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (k += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var X = Ge();
          X ? k += X : k += Xe();
          var F;
          e === null ? F = "null" : ct(e) ? F = "array" : e !== void 0 && e.$$typeof === o ? (F = "<" + (se(e.type) || "Unknown") + " />", k = " Did you accidentally export a JSX literal instead of a component?") : F = typeof e, N("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", F, k);
        }
        var Y = De(e, i, f, T, L);
        if (Y == null)
          return Y;
        if (S) {
          var ie = i.children;
          if (ie !== void 0)
            if (m)
              if (ct(ie)) {
                for (var We = 0; We < ie.length; We++)
                  _e(ie[We], e);
                Object.freeze && Object.freeze(ie);
              } else
                N("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              _e(ie, e);
        }
        if (pe.call(i, "key")) {
          var Se = se(e), t = Object.keys(i).filter(function(B) {
            return B !== "key";
          }), a = t.length > 0 ? "{key: someKey, " + t.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!rt[Se + a]) {
            var u = t.length > 0 ? "{" + t.join(": ..., ") + ": ...}" : "{}";
            N(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, a, Se, u, Se), rt[Se + a] = !0;
          }
        }
        return e === l ? nt(Y) : ae(Y), Y;
      }
    }
    function At(e, i, f) {
      return Pt(e, i, f, !0);
    }
    function Lt(e, i, f) {
      return Pt(e, i, f, !1);
    }
    var ot = Lt, Wt = At;
    bt.Fragment = l, bt.jsx = ot, bt.jsxs = Wt;
  }()), bt;
}
process.env.NODE_ENV === "production" ? Yt.exports = jn() : Yt.exports = kn();
var r = Yt.exports;
function ln(n) {
  var o, s, l = "";
  if (typeof n == "string" || typeof n == "number") l += n;
  else if (typeof n == "object") if (Array.isArray(n)) {
    var v = n.length;
    for (o = 0; o < v; o++) n[o] && (s = ln(n[o])) && (l && (l += " "), l += s);
  } else for (s in n) n[s] && (l && (l += " "), l += s);
  return l;
}
function W() {
  for (var n, o, s = 0, l = "", v = arguments.length; s < v; s++) (n = arguments[s]) && (o = ln(n)) && (l && (l += " "), l += o);
  return l;
}
const Cn = "_root_afe8k_1", wn = "_disabled_afe8k_29", En = "_active_afe8k_39", Sn = "_visual_afe8k_102", Rn = "_block_afe8k_110", Fe = {
  root: Cn,
  disabled: wn,
  active: En,
  "size-m": "_size-m_afe8k_60",
  "size-l": "_size-l_afe8k_65",
  "variant-secondary": "_variant-secondary_afe8k_70",
  "variant-tertiary": "_variant-tertiary_afe8k_71",
  visual: Sn,
  block: Rn
};
function Bo({
  as: n,
  active: o = !1,
  block: s = !1,
  disabled: l = !1,
  size: v = "m",
  variant: p = "primary",
  icon: d,
  textColor: h,
  leadingVisual: x,
  trailingVisual: b,
  className: y,
  children: j,
  ...I
}) {
  const $ = n ?? "button", E = x ?? d;
  return /* @__PURE__ */ r.jsxs(
    $,
    {
      className: W(
        Fe.root,
        Fe[`size-${v}`],
        Fe[`variant-${p}`],
        o && Fe.active,
        s && Fe.block,
        l && Fe.disabled,
        y
      ),
      style: h ? { "--ui2-button-text-color": `var(${h})` } : void 0,
      "data-ui2-component": "Button",
      disabled: $ === "button" ? l : void 0,
      ...I,
      children: [
        E ? /* @__PURE__ */ r.jsx("span", { className: Fe.visual, children: E }) : null,
        j,
        b ? /* @__PURE__ */ r.jsx("span", { className: Fe.visual, children: b }) : null
      ]
    }
  );
}
const Bn = "_root_ka8a1_1", Pn = "_disabled_ka8a1_24", Nn = "_active_ka8a1_35", Tn = "_icon_ka8a1_131", jt = {
  root: Bn,
  disabled: Pn,
  active: Nn,
  "variant-secondary": "_variant-secondary_ka8a1_56",
  "variant-tertiary": "_variant-tertiary_ka8a1_57",
  "variant-inverted": "_variant-inverted_ka8a1_58",
  "size-xs": "_size-xs_ka8a1_105",
  "size-s": "_size-s_ka8a1_112",
  "size-m": "_size-m_ka8a1_119",
  "size-l": "_size-l_ka8a1_125",
  icon: Tn
};
function cn({
  children: n,
  size: o = "m",
  variant: s = "primary",
  active: l = !1,
  disabled: v = !1,
  textColor: p,
  className: d,
  ...h
}) {
  return /* @__PURE__ */ r.jsx(
    "button",
    {
      type: "button",
      disabled: v,
      className: W(
        jt.root,
        jt[`size-${o}`],
        s !== "primary" && jt[`variant-${s}`],
        v && jt.disabled,
        d
      ),
      "data-active": l ? "true" : "false",
      style: p ? { "--ui2-button-icon-text-color": `var(${p})` } : void 0,
      ...h,
      children: /* @__PURE__ */ r.jsx("span", { className: jt.icon, children: n })
    }
  );
}
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
var On = {
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
const Oe = (n, o, s, l) => {
  const v = an(
    ({ color: p = "currentColor", size: d = 24, stroke: h = 2, title: x, className: b, children: y, ...j }, I) => Kt(
      "svg",
      {
        ref: I,
        ...On[n],
        width: d,
        height: d,
        className: ["tabler-icon", `tabler-icon-${o}`, b].join(" "),
        strokeWidth: h,
        stroke: p,
        ...j
      },
      [
        x && Kt("title", { key: "svg-title" }, x),
        ...l.map(([$, E]) => Kt($, E)),
        ...Array.isArray(y) ? y : [y]
      ]
    )
  );
  return v.displayName = `${s}`, v;
};
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const In = [["path", { d: "M6 9l6 6l6 -6", key: "svg-0" }]], Xt = Oe("outline", "chevron-down", "ChevronDown", In);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mn = [["path", { d: "M6 15l6 -6l6 6", key: "svg-0" }]], un = Oe("outline", "chevron-up", "ChevronUp", Mn);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zn = [["path", { d: "M11 7l-5 5l5 5", key: "svg-0" }], ["path", { d: "M17 7l-5 5l5 5", key: "svg-1" }]], Dn = Oe("outline", "chevrons-left", "ChevronsLeft", zn);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const An = [["path", { d: "M7 7l5 5l-5 5", key: "svg-0" }], ["path", { d: "M13 7l5 5l-5 5", key: "svg-1" }]], Ln = Oe("outline", "chevrons-right", "ChevronsRight", An);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wn = [["path", { d: "M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666", key: "svg-0" }], ["path", { d: "M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1", key: "svg-1" }]], $n = Oe("outline", "copy", "Copy", Wn);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fn = [["path", { d: "M10.585 10.587a2 2 0 0 0 2.829 2.828", key: "svg-0" }], ["path", { d: "M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87", key: "svg-1" }], ["path", { d: "M3 3l18 18", key: "svg-2" }]], Kn = Oe("outline", "eye-off", "EyeOff", Fn);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hn = [["path", { d: "M12 20l-3 1v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v3", key: "svg-0" }], ["path", { d: "M16 19h6", key: "svg-1" }], ["path", { d: "M19 16v6", key: "svg-2" }]], dn = Oe("outline", "filter-plus", "FilterPlus", Hn);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Un = [["path", { d: "M3 3l18 18", key: "svg-0" }], ["path", { d: "M15 4.5l-3.249 3.249m-2.57 1.433l-2.181 .818l-1.5 1.5l7 7l1.5 -1.5l.82 -2.186m1.43 -2.563l3.25 -3.251", key: "svg-1" }], ["path", { d: "M9 15l-4.5 4.5", key: "svg-2" }], ["path", { d: "M14.5 4l5.5 5.5", key: "svg-3" }]], Vn = Oe("outline", "pinned-off", "PinnedOff", Un);
/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yn = [["path", { d: "M9 4v6l-2 4v2h10v-2l-2 -4v-6", key: "svg-0" }], ["path", { d: "M12 16l0 5", key: "svg-1" }], ["path", { d: "M8 4l8 0", key: "svg-2" }]], Xn = Oe("outline", "pinned", "Pinned", Yn), Gn = "_frame_1xy0e_1", qn = "_table_1xy0e_9", Jn = "_scroll_1xy0e_30", Zn = "_tableInner_1xy0e_50", Qn = "_tableHead_1xy0e_57", er = "_tableBody_1xy0e_65", tr = "_headRow_1xy0e_70", nr = "_row_1xy0e_77", rr = "_columnGroup_1xy0e_99", or = "_columnsPinnedStart_1xy0e_105", sr = "_columnsPinnedEnd_1xy0e_116", ar = "_columnsRegular_1xy0e_127", ir = "_headCell_1xy0e_167", lr = "_headContent_1xy0e_204", cr = "_headLabel_1xy0e_216", ur = "_headButton_1xy0e_226", dr = "_sortButton_1xy0e_246", fr = "_resizeHotspot_1xy0e_255", vr = "_dropIndicator_1xy0e_282", pr = "_dropIndicatorStart_1xy0e_292", hr = "_cell_1xy0e_297", xr = "_cellContent_1xy0e_307", _r = "_ghost_1xy0e_363", yr = "_ghostInner_1xy0e_372", mr = "_actionMenu_1xy0e_386", gr = "_actionList_1xy0e_394", br = "_actionItem_1xy0e_399", jr = "_tooltip_1xy0e_421", kr = "_cellOutline_1xy0e_445", R = {
  frame: Gn,
  table: qn,
  scroll: Jn,
  tableInner: Zn,
  tableHead: Qn,
  tableBody: er,
  headRow: tr,
  row: nr,
  columnGroup: rr,
  columnsPinnedStart: or,
  columnsPinnedEnd: sr,
  columnsRegular: ar,
  headCell: ir,
  headContent: lr,
  headLabel: cr,
  headButton: ur,
  sortButton: dr,
  resizeHotspot: fr,
  dropIndicator: vr,
  dropIndicatorStart: pr,
  cell: hr,
  cellContent: xr,
  ghost: _r,
  ghostInner: yr,
  actionMenu: mr,
  actionList: gr,
  actionItem: br,
  tooltip: jr,
  cellOutline: kr
}, fn = Jt({});
function vn({
  onAfterSelect: n,
  children: o
}) {
  return /* @__PURE__ */ r.jsx(fn.Provider, { value: { onAfterSelect: n }, children: o });
}
function pn({ children: n }) {
  return /* @__PURE__ */ r.jsx("div", { className: R.actionList, children: n });
}
function it({
  onSelect: n,
  children: o,
  className: s
}) {
  const { onAfterSelect: l } = qt(fn);
  return /* @__PURE__ */ r.jsx(
    "button",
    {
      type: "button",
      className: W(R.actionItem, s),
      onClick: () => {
        n == null || n(), l == null || l();
      },
      children: o
    }
  );
}
function Zt({
  open: n,
  anchorRect: o,
  placement: s = "bottom-start",
  offset: l = 6,
  zIndex: v = 1e3,
  children: p
}) {
  const [d, h] = U(!1);
  if (me(() => {
    h(!0);
  }, []), !n || !o || !d)
    return null;
  const x = {
    position: "fixed",
    zIndex: v
  }, b = s.endsWith("end") ? o.right : o.left, y = s.startsWith("top") ? o.top : o.bottom;
  return x.left = Math.round(b), x.top = Math.round(y + l), s.endsWith("end") && (x.transform = "translateX(-100%)"), s.startsWith("top") && (x.transform = `${x.transform ?? ""} translateY(-100%)`), bn(/* @__PURE__ */ r.jsx("div", { style: x, children: p }), document.body);
}
function Cr({
  open: n,
  onOpenChange: o,
  host: s,
  children: l,
  className: v,
  zIndex: p
}) {
  const [d, h] = U(!1), x = V(null), b = V(null), y = n ?? d, [j, I] = U(null), $ = (E) => {
    o ? o(E) : h(E);
  };
  return me(() => {
    var E;
    y && I(((E = x.current) == null ? void 0 : E.getBoundingClientRect()) ?? null);
  }, [y]), me(() => {
    if (!y) return;
    const E = (O) => {
      var w;
      O.key === "Escape" && (O.preventDefault(), $(!1), (w = x.current) == null || w.focus());
    }, C = (O) => {
      var N, Z;
      const w = O.target;
      (N = b.current) != null && N.contains(w) || (Z = x.current) != null && Z.contains(w) || $(!1);
    };
    return window.addEventListener("keydown", E), window.addEventListener("mousedown", C), () => {
      window.removeEventListener("keydown", E), window.removeEventListener("mousedown", C);
    };
  }, [y]), /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    s({
      open: y,
      hostProps: {
        onClick: (E) => {
          E.preventDefault(), $(!y);
        },
        onKeyDown: (E) => {
          (E.key === "ArrowDown" || E.key === "ArrowUp") && (E.preventDefault(), $(!0));
        },
        "aria-haspopup": !0,
        "aria-expanded": y,
        ref: (E) => {
          x.current = E;
        }
      }
    }),
    /* @__PURE__ */ r.jsx(Zt, { open: y, anchorRect: j, placement: "bottom-start", offset: 6, zIndex: p, children: /* @__PURE__ */ r.jsx("div", { ref: b, className: W(R.actionMenu, v), children: l }) })
  ] });
}
function wr({
  content: n,
  children: o,
  delay: s = 200
}) {
  const [l, v] = U(!1), [p, d] = U(null), h = V(null), x = V(null);
  me(() => () => {
    h.current && window.clearTimeout(h.current);
  }, []);
  const b = () => {
    n && (h.current && window.clearTimeout(h.current), h.current = window.setTimeout(() => {
      var j;
      d(((j = x.current) == null ? void 0 : j.getBoundingClientRect()) ?? null), v(!0);
    }, s));
  }, y = () => {
    h.current && window.clearTimeout(h.current), v(!1);
  };
  return /* @__PURE__ */ r.jsxs("div", { ref: x, onMouseEnter: b, onMouseLeave: y, children: [
    o,
    /* @__PURE__ */ r.jsx(Zt, { open: l, anchorRect: p, placement: "top-start", offset: 6, children: /* @__PURE__ */ r.jsx("div", { className: R.tooltip, children: n }) })
  ] });
}
const hn = Jt(null);
function Er() {
  const n = qt(hn);
  if (!n)
    throw new Error("DataTableContext is missing");
  return n;
}
const xn = Jt(null);
function Sr() {
  const n = qt(xn);
  if (!n)
    throw new Error("DataTableCellContext is missing");
  return n;
}
function Rr({
  align: n,
  monospace: o,
  clickable: s = !1,
  active: l = !1,
  children: v,
  ...p
}) {
  const d = Sr(), h = Er(), x = V(null), [b, y] = U(!1), [j, I] = U(null), $ = n ?? d.align, E = o ?? d.monospace, { value: C, rawValue: O, columnKey: w, filterKey: N, row: Z, rowKey: ee } = d, G = le(() => {
    if (!w) return null;
    const z = ee ?? (Z ? h.getRowKey(Z) : null);
    return z == null ? null : `${z}:${w}`;
  }, [Z, ee, w, h]), ce = le(() => N || (w && h.filterableColumnKeys.has(w) ? w : null), [N, w, h.filterableColumnKeys]), ne = le(() => {
    if (O == null)
      return !!(C && C.trim() && !["-", "—", "–"].includes(C.trim()));
    if (typeof O == "string") {
      const z = O.trim();
      return !!(z && !["-", "—", "–"].includes(z));
    }
    return typeof O == "number" || typeof O == "boolean" ? !0 : Array.isArray(O) ? O.length > 0 : typeof O == "object" ? Object.keys(O).length > 0 : !1;
  }, [O, C]);
  me(() => {
    G && y(h.activeContextMenuKey === G);
  }, [G, h.activeContextMenuKey]), me(() => {
    if (!b) return;
    const z = (te) => {
      var _;
      const Ie = te.target;
      (_ = x.current) != null && _.contains(Ie) || Q();
    }, K = () => Q();
    return window.addEventListener("mousedown", z, !0), window.addEventListener("contextmenu", z, !0), window.addEventListener("scroll", K, !0), () => {
      window.removeEventListener("mousedown", z, !0), window.removeEventListener("contextmenu", z, !0), window.removeEventListener("scroll", K, !0);
    };
  }, [b]);
  const Q = () => {
    G && h.activeContextMenuKey === G && h.setActiveContextMenuKey(null);
  }, we = (z) => {
    if (z.preventDefault(), !G || !ne) return;
    if (h.activeContextMenuKey === G) {
      Q();
      return;
    }
    const K = (x.current ?? z.currentTarget).getBoundingClientRect();
    I(K), h.setActiveContextMenuKey(G);
  }, M = async () => {
    var K;
    const z = O == null ? C : String(O);
    if ((K = navigator.clipboard) != null && K.writeText)
      await navigator.clipboard.writeText(z);
    else {
      const te = document.createElement("textarea");
      te.value = z, te.style.position = "fixed", te.style.left = "-9999px", document.body.appendChild(te), te.focus(), te.select(), document.execCommand("copy"), te.remove();
    }
    Q();
  }, ve = () => {
    !w || !ce || (h.filterByValue(w, ce, O ?? C), Q());
  }, ge = l || b, se = le(() => w ? h.pinnedColumnsStartKeys.includes(w) || h.pinnedColumnsEndKeys.includes(w) : !1, [w, h.pinnedColumnsStartKeys, h.pinnedColumnsEndKeys]);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      ref: x,
      role: s ? "button" : void 0,
      tabIndex: s ? 0 : void 0,
      "data-align": $,
      "data-monospace": E ? "true" : "false",
      "data-clickable": s ? "true" : "false",
      className: R.cell,
      onContextMenu: we,
      ...p,
      children: [
        /* @__PURE__ */ r.jsx("span", { className: R.cellContent, "data-cell-content": "true", children: v }),
        /* @__PURE__ */ r.jsx("span", { className: R.cellOutline, "data-active": ge ? "true" : "false" }),
        /* @__PURE__ */ r.jsx(
          Zt,
          {
            open: b && ne,
            anchorRect: j,
            placement: "bottom-start",
            zIndex: se ? 220 : 140,
            children: /* @__PURE__ */ r.jsx("div", { className: R.actionMenu, children: /* @__PURE__ */ r.jsx(vn, { onAfterSelect: Q, children: /* @__PURE__ */ r.jsxs(pn, { children: [
              ce ? /* @__PURE__ */ r.jsxs(it, { onSelect: ve, children: [
                /* @__PURE__ */ r.jsx(dn, { size: 16 }),
                "Filter by value"
              ] }) : null,
              /* @__PURE__ */ r.jsxs(it, { onSelect: M, children: [
                /* @__PURE__ */ r.jsx($n, { size: 16 }),
                "Copy value"
              ] })
            ] }) }) })
          }
        )
      ]
    }
  );
}
const nn = 160, Ct = 40, It = 9999;
function Ht(n, o = Ct, s = It) {
  return Math.min(Math.max(n, o), s);
}
function Br(n, o) {
  if (!o.length) return n;
  const s = new Map(o.map((l, v) => [l, v]));
  return [...n].sort((l, v) => {
    const p = s.get(l.key), d = s.get(v.key);
    return p === void 0 && d === void 0 ? 0 : p === void 0 ? 1 : d === void 0 ? -1 : p - d;
  });
}
function kt(n, o) {
  if (!o) {
    const s = n.id;
    return s == null || s === "" ? void 0 : s;
  }
  return typeof o == "function" ? o(n) : n[o];
}
function Gt(n, o) {
  return typeof o.value == "function" ? o.value(n) : typeof o.value == "string" ? n[o.value] : n[o.key];
}
function Po({
  columns: n,
  rows: o,
  rowKey: s,
  size: l = "l",
  rowHover: v = !0,
  rowDividers: p = !0,
  sorting: d,
  defaultSorting: h = { sortBy: null, sortOrder: "asc" },
  onSortingChange: x,
  columnWidths: b,
  onColumnResize: y,
  columnsResizing: j = !0,
  columnsReordering: I = !0,
  columnsPinControl: $ = !0,
  columnsVisibilityControl: E = !0,
  filterKeys: C,
  onFilterByColumn: O,
  onFilterByValue: w,
  visibleColumns: N,
  defaultVisibleColumns: Z,
  onVisibleColumnsChange: ee,
  columnsOrder: G,
  defaultColumnsOrder: ce,
  onColumnsOrderChange: ne,
  pinnedColumnsStart: Q,
  defaultPinnedColumnsStart: we,
  onPinnedColumnsStartChange: M,
  pinnedColumnsEnd: ve,
  defaultPinnedColumnsEnd: ge,
  onPinnedColumnsEndChange: se,
  className: z,
  style: K
}) {
  var Se;
  const [te, Ie] = U(h), [_, A] = U({}), [re, be] = U(ce ?? []), [Ke, He] = U(
    Z
  ), [Je, Ze] = U(we ?? []), [g, ue] = U(ge ?? []), [Ue, lt] = U(null), D = V(null), wt = V(null), Qe = V(null), Ee = V(null), je = V({}), Me = V(null), pe = V(null), Et = V([]), St = V([]), et = V([]), Mt = V(0), zt = V(0), ct = V(0), [Dt, Rt] = U(!1), [oe, ut] = U(null), [he, dt] = U(null), [ze, Bt] = U(-1), [Ve, ft] = U(-1), de = d ?? te, tt = N ?? Ke, vt = G ?? re, q = Q ?? Je, De = ve ?? g, ke = le(() => new Set(C ?? []), [C]), Ye = (t) => {
    x ? x(t) : Ie(t);
  }, Ae = (t) => {
    ee ? ee(t) : He(t);
  }, Le = (t) => {
    M ? M(t) : Ze(t);
  }, pt = (t) => {
    ne ? ne(t) : be(t);
  }, Xe = (t) => {
    const a = tt ?? n.map((u) => u.key);
    Ae(a.filter((u) => u !== t));
  }, Ge = le(() => vt.length ? Br(n, vt) : [...n], [n, vt]), Te = le(() => Array.isArray(tt) ? Ge.filter(
    ({ key: t, frozenStart: a, frozenEnd: u }) => a || u || tt.includes(t)
  ) : Ge, [Ge, tt]), fe = le(
    () => Te.filter(
      ({ key: t, frozenStart: a }) => a || q.includes(t)
    ),
    [Te, q]
  ), xe = le(
    () => Te.filter(
      ({ key: t, frozenStart: a, frozenEnd: u }) => !a && !q.includes(t) && (u || De.includes(t))
    ),
    [Te, q, De]
  ), _e = le(
    () => Te.filter(
      ({ key: t, frozenStart: a, frozenEnd: u }) => !a && !u && !q.includes(t) && !De.includes(t)
    ),
    [Te, q, De]
  );
  me(() => {
    A((t) => {
      const a = { ...t };
      return n.forEach((u) => {
        const B = (b == null ? void 0 : b[u.key]) ?? t[u.key] ?? nn;
        a[u.key] = Ht(
          B,
          u.minWidth ?? Ct,
          u.maxWidth ?? It
        );
      }), a;
    });
  }, [n, b]);
  const ae = le(() => n.reduce((t, a) => (t[a.key] = Ht(
    (b == null ? void 0 : b[a.key]) ?? _[a.key] ?? nn,
    a.minWidth ?? Ct,
    a.maxWidth ?? It
  ), t), {}), [n, b, _]), nt = () => {
    var ht, xt, _t;
    if (!D.current) return;
    const t = [...fe, ..._e, ...xe];
    let u = t.length > 1 && Me.current === ((ht = t[0]) == null ? void 0 : ht.key) ? 1 : 0;
    t.length > 1 && pe.current && ((xt = t[u]) == null ? void 0 : xt.key) === pe.current && (u = u === 0 ? 1 : 0), (_t = t[u]) == null || _t.key;
    const B = fe.map(
      (P) => je.current[P.key] ?? ae[P.key]
    ), H = xe.map(
      (P) => je.current[P.key] ?? ae[P.key]
    ), J = _e.map(
      (P) => je.current[P.key] ?? ae[P.key]
    );
    let $e = B.reduce((P, Ce) => P + Ce, 0), ye = H.reduce((P, Ce) => P + Ce, 0), Re = J.reduce((P, Ce) => P + Ce, 0), qe = $e + Re + ye;
    const Be = D.current.clientWidth;
    Be > qe && (qe = Be);
    const Nt = B.map((P) => `${P}px`).join(" "), Tt = H.map((P) => `${P}px`).join(" "), $t = J.map((P) => `${P}px`).join(" ");
    Et.current = B, St.current = J, et.current = H, Mt.current = $e, zt.current = Re, ct.current = ye, D.current.style.setProperty(
      "--ui2-table-row-template",
      `${$e}px ${Re}px ${ye}px`
    ), D.current.style.setProperty("--ui2-table-grid-pinned-start", Nt), D.current.style.setProperty("--ui2-table-grid-regular", $t), D.current.style.setProperty("--ui2-table-grid-pinned-end", Tt), D.current.style.setProperty("--ui2-table-width-pinned-start", `${$e}px`), D.current.style.setProperty("--ui2-table-width-regular", `${Re}px`), D.current.style.setProperty("--ui2-table-width-pinned-end", `${ye}px`), D.current.style.setProperty("--ui2-table-total-width", `${qe}px`);
  };
  me(() => {
    nt();
  }, [ae, fe, xe, _e]), me(() => {
    if (!D.current) return;
    const t = D.current, a = () => nt();
    if (typeof ResizeObserver < "u") {
      const u = new ResizeObserver(a);
      return u.observe(t), () => u.disconnect();
    }
    return window.addEventListener("resize", a), () => window.removeEventListener("resize", a);
  }, [D, ae, fe, xe, _e]);
  const rt = (t, a) => {
    const u = n.find((B) => B.key === t);
    return Ht(
      a,
      (u == null ? void 0 : u.minWidth) ?? Ct,
      (u == null ? void 0 : u.maxWidth) ?? It
    );
  }, Pt = (t) => {
    const a = t.cloneNode(!0);
    a.style.width = "max-content", a.style.maxWidth = "none", a.style.display = "inline-flex", a.style.whiteSpace = "nowrap", a.style.visibility = "hidden", a.style.position = "absolute", a.style.left = "-9999px", document.body.appendChild(a);
    const { width: u } = a.getBoundingClientRect();
    document.body.removeChild(a);
    const B = u > 0 ? u : t.scrollWidth;
    return Math.ceil(B);
  }, At = (t) => {
    const a = window.getComputedStyle(t), u = Number.parseFloat(a.paddingLeft || "0"), B = Number.parseFloat(a.paddingRight || "0");
    return u + B;
  }, Lt = (t) => {
    if (!D.current) return;
    let a = 0;
    if (Array.from(D.current.querySelectorAll(`[data-column="${t}"]`)).forEach((B) => {
      const H = B.querySelector("[data-cell-content]") ?? B, J = Pt(H) + At(B);
      J > a && (a = J);
    }), !(a <= 0))
      return rt(t, a);
  }, ot = (t, a) => {
    je.current[t] = a, pe.current = t, nt(), A((u) => ({ ...u, [t]: a })), y == null || y({ key: t, width: a }), window.setTimeout(() => {
      je.current[t] === a && delete je.current[t], pe.current === t && (pe.current = null);
    }, 0);
  }, Wt = () => fe.reduce((t, a) => t + ae[a.key], 0) + _e.reduce((t, a) => t + ae[a.key], 0) + xe.reduce((t, a) => t + ae[a.key], 0), e = (t) => {
    if (!D.current) return;
    const a = Lt(t);
    if (!a) return;
    const u = n.find((Be) => Be.key === t), B = ae[t], H = (u == null ? void 0 : u.minWidth) ?? Ct, J = Wt(), $e = D.current.clientWidth, ye = Math.max(0, $e - J), Re = 4, qe = 12;
    if (B > a + Re) {
      ot(t, Math.max(a, H));
      return;
    }
    if (ye >= qe && Math.abs(B - a) <= Re) {
      const Be = rt(t, B + ye);
      if (Be <= B + 1) {
        ot(t, Math.max(a, H));
        return;
      }
      ot(t, Be);
      return;
    }
    ot(t, Math.max(a, H));
  }, i = (t, a) => {
    if (!j || t.button !== 0 && t.pointerType !== "touch") return;
    t.preventDefault(), t.stopPropagation();
    const u = t.currentTarget;
    u.setPointerCapture && u.setPointerCapture(t.pointerId), Me.current = a;
    const B = t.clientX, H = ae[a];
    Ee.current = { key: a, startX: B, startWidth: H };
  }, f = (t, a) => {
    if (!Ee.current || Ee.current.key !== a) return;
    t.preventDefault(), t.stopPropagation();
    const u = rt(a, Ee.current.startWidth + (t.clientX - Ee.current.startX));
    je.current[a] = u, nt();
  }, m = (t, a) => {
    if (!Ee.current || Ee.current.key !== a) return;
    t.preventDefault(), t.stopPropagation();
    const u = je.current[a];
    u && (A((H) => ({ ...H, [a]: u })), y == null || y({ key: a, width: u })), je.current = {}, Ee.current = null;
    const B = t.currentTarget;
    B.releasePointerCapture && B.releasePointerCapture(t.pointerId);
  }, T = (t, a) => {
    t.preventDefault(), t.stopPropagation(), Me.current = a, pe.current = a, e(a);
  }, L = (t) => {
    let a = 0;
    return t.map((u) => {
      const B = a;
      return a += u, B;
    });
  }, S = (t, a) => {
    if (!I) return;
    const u = t.clientX, B = 5, H = ($e) => {
      var _t;
      if (Math.abs(u - $e.clientX) < B) return;
      window.removeEventListener("mousemove", H), window.removeEventListener("mouseup", J), Rt(!0), ut(a);
      const ye = Ge.map((P) => P.key);
      Bt(ye.indexOf(a));
      const Re = fe.map((P) => ae[P.key]), qe = _e.map((P) => ae[P.key]), Be = L(Re), Nt = L(qe), Tt = (_t = wt.current) == null ? void 0 : _t.querySelector("[data-column]"), $t = Tt ? Tt.offsetLeft : 0, ht = (P) => {
        if (!D.current) return;
        const { left: Ce, right: Ft } = D.current.getBoundingClientRect(), { scrollLeft: yt } = D.current, Ot = P.clientX - Ce + yt;
        Qe.current && (Qe.current.style.transform = `translateX(${Ot}px)`);
        let Pe = P.clientX - Ce - $t;
        if (Pe < 0) return;
        if (Pe <= Re.reduce((mt, Ne) => mt + Ne, 0)) {
          const mt = Be.findIndex(
            (mn, gn) => Pe >= mn && Pe < (Be[gn + 1] ?? 1 / 0)
          ), Ne = fe[mt];
          dt((Ne == null ? void 0 : Ne.key) ?? null), ft(ye.indexOf((Ne == null ? void 0 : Ne.key) ?? ""));
          return;
        }
        Pe = Pe + yt;
        const yn = Nt.findIndex(
          (mt, Ne) => Pe >= mt && Pe < (Nt[Ne + 1] ?? 1 / 0)
        ), st = _e[yn];
        dt((st == null ? void 0 : st.key) ?? null), ft(ye.indexOf((st == null ? void 0 : st.key) ?? ""));
        const Qt = 100;
        P.clientX < Ce + Qt ? D.current.scrollLeft = Math.max(0, D.current.scrollLeft - 15) : P.clientX > Ft - Qt && (D.current.scrollLeft = Math.min(
          D.current.scrollWidth - D.current.clientWidth,
          D.current.scrollLeft + 15
        ));
      }, xt = () => {
        if (he && oe && oe !== he) {
          const P = [...ye], Ce = P.indexOf(oe), Ft = P.indexOf(he);
          P.splice(Ce, 1), P.splice(Ft, 0, oe), pt(P);
          const yt = q.includes(oe), Ot = q.includes(he);
          yt && !Ot ? Le(q.filter((Pe) => Pe !== oe)) : !yt && Ot && Le([...q, oe]);
        }
        Rt(!1), ut(null), dt(null), ft(-1), window.removeEventListener("mousemove", ht), window.removeEventListener("mouseup", xt);
      };
      window.addEventListener("mousemove", ht), window.addEventListener("mouseup", xt);
    }, J = () => {
      window.removeEventListener("mousemove", H), window.removeEventListener("mouseup", J);
    };
    window.addEventListener("mousemove", H), window.addEventListener("mouseup", J);
  }, k = (t) => {
    q.includes(t) || Le([...q, t]);
  }, X = (t) => {
    Le(q.filter((a) => a !== t));
  }, F = (t, a) => {
    const u = a ?? (ke.has(t) ? t : null);
    u && (O == null || O({ columnKey: t, filterKey: u }));
  }, Y = (t, a, u) => {
    const B = a ?? (ke.has(t) ? t : null);
    B && (w == null || w({ columnKey: t, filterKey: B, value: u }));
  }, ie = le(() => {
    if (!de.sortBy) return o;
    const t = n.find((u) => u.key === de.sortBy);
    if (!t) return o;
    const a = [...o];
    return a.sort((u, B) => {
      if (t.sortFn) return t.sortFn(u, B, de.sortOrder);
      const H = Gt(u, t), J = Gt(B, t);
      return typeof H == "string" && typeof J == "string" ? de.sortOrder === "desc" ? J.localeCompare(H) : H.localeCompare(J) : typeof H == "number" && typeof J == "number" ? de.sortOrder === "desc" ? J - H : H - J : 0;
    }), a;
  }, [o, n, de]), We = le(
    () => ({
      sorting: de,
      setSorting: Ye,
      pinnedColumnsStartKeys: q,
      pinnedColumnsEndKeys: De,
      pinColumn: k,
      unpinColumn: X,
      hideColumn: Xe,
      columnsReordering: I,
      columnsPinControl: $,
      columnsVisibilityControl: E,
      startDragging: S,
      draggedColumnKey: oe,
      targetColumnKey: he,
      draggedColumnIndex: ze,
      targetColumnIndex: Ve,
      filterableColumnKeys: ke,
      filterByColumn: F,
      filterByValue: Y,
      activeContextMenuKey: Ue,
      setActiveContextMenuKey: lt,
      getRowKey: (t) => kt(t, s) ?? ""
    }),
    [
      de,
      q,
      De,
      I,
      $,
      E,
      oe,
      he,
      ze,
      Ve,
      ke,
      Ue,
      s
    ]
  );
  return /* @__PURE__ */ r.jsx(hn.Provider, { value: We, children: /* @__PURE__ */ r.jsx("div", { className: W(R.frame, z), "data-ui2-component": "DataTable", style: K, children: /* @__PURE__ */ r.jsx("div", { className: R.scroll, ref: D, children: /* @__PURE__ */ r.jsx("div", { className: R.table, "data-size": l, children: /* @__PURE__ */ r.jsxs("div", { className: R.tableInner, children: [
    /* @__PURE__ */ r.jsx("div", { className: R.tableHead, role: "rowgroup", children: /* @__PURE__ */ r.jsxs("div", { className: R.headRow, role: "row", ref: wt, children: [
      fe.length ? /* @__PURE__ */ r.jsx("div", { className: W(R.columnGroup, R.columnsPinnedStart), "data-group": "pinned-start", children: fe.map((t) => /* @__PURE__ */ r.jsx(
        Ut,
        {
          column: t,
          sorting: de,
          onSortingChange: Ye,
          onPin: () => k(t.key),
          onUnpin: () => X(t.key),
          onHide: () => Xe(t.key),
          onFilter: () => F(t.key, t.filterKey),
          onStartDragging: S,
          onResizeStart: i,
          onResizeMove: f,
          onResizeEnd: m,
          onResizeDoubleClick: T,
          canResize: j,
          canPin: $,
          pinned: q.includes(t.key),
          canHide: E,
          canReorder: I,
          canFilter: !!t.filterKey || ke.has(t.key),
          dragState: {
            draggedColumnKey: oe,
            targetColumnKey: he,
            draggedColumnIndex: ze,
            targetColumnIndex: Ve
          }
        },
        t.key
      )) }) : null,
      /* @__PURE__ */ r.jsx("div", { className: W(R.columnGroup, R.columnsRegular), "data-group": "regular", children: _e.map((t) => /* @__PURE__ */ r.jsx(
        Ut,
        {
          column: t,
          sorting: de,
          onSortingChange: Ye,
          onPin: () => k(t.key),
          onUnpin: () => X(t.key),
          onHide: () => Xe(t.key),
          onFilter: () => F(t.key, t.filterKey),
          onStartDragging: S,
          onResizeStart: i,
          onResizeMove: f,
          onResizeEnd: m,
          onResizeDoubleClick: T,
          canResize: j,
          canPin: $,
          pinned: q.includes(t.key),
          canHide: E,
          canReorder: I,
          canFilter: !!t.filterKey || ke.has(t.key),
          dragState: {
            draggedColumnKey: oe,
            targetColumnKey: he,
            draggedColumnIndex: ze,
            targetColumnIndex: Ve
          }
        },
        t.key
      )) }),
      xe.length ? /* @__PURE__ */ r.jsx("div", { className: W(R.columnGroup, R.columnsPinnedEnd), "data-group": "pinned-end", children: xe.map((t) => /* @__PURE__ */ r.jsx(
        Ut,
        {
          column: t,
          sorting: de,
          onSortingChange: Ye,
          onPin: () => k(t.key),
          onUnpin: () => X(t.key),
          onHide: () => Xe(t.key),
          onFilter: () => F(t.key, t.filterKey),
          onStartDragging: S,
          onResizeStart: i,
          onResizeMove: f,
          onResizeEnd: m,
          onResizeDoubleClick: T,
          canResize: j,
          canPin: !1,
          pinned: !1,
          canHide: E,
          canReorder: I,
          canFilter: !!t.filterKey || ke.has(t.key),
          dragState: {
            draggedColumnKey: oe,
            targetColumnKey: he,
            draggedColumnIndex: ze,
            targetColumnIndex: Ve
          }
        },
        t.key
      )) }) : null,
      Dt ? /* @__PURE__ */ r.jsx("div", { className: R.ghost, ref: Qe, children: /* @__PURE__ */ r.jsx("div", { className: R.ghostInner, children: (Se = Ge.find((t) => t.key === oe)) == null ? void 0 : Se.header }) }) : null
    ] }) }),
    /* @__PURE__ */ r.jsx("div", { className: R.tableBody, role: "rowgroup", children: ie.map((t, a) => /* @__PURE__ */ r.jsxs(
      Pr,
      {
        hover: v,
        divider: p,
        children: [
          fe.length ? /* @__PURE__ */ r.jsx("div", { className: W(R.columnGroup, R.columnsPinnedStart), "data-group": "pinned-start", children: fe.map((u) => /* @__PURE__ */ r.jsx(
            Vt,
            {
              column: u,
              row: t,
              rowKeyValue: kt(t, s) ?? a
            },
            u.key
          )) }) : null,
          /* @__PURE__ */ r.jsx("div", { className: W(R.columnGroup, R.columnsRegular), "data-group": "regular", children: _e.map((u) => /* @__PURE__ */ r.jsx(
            Vt,
            {
              column: u,
              row: t,
              rowKeyValue: kt(t, s) ?? a
            },
            u.key
          )) }),
          xe.length ? /* @__PURE__ */ r.jsx("div", { className: W(R.columnGroup, R.columnsPinnedEnd), "data-group": "pinned-end", children: xe.map((u) => /* @__PURE__ */ r.jsx(
            Vt,
            {
              column: u,
              row: t,
              rowKeyValue: kt(t, s) ?? a
            },
            u.key
          )) }) : null
        ]
      },
      kt(t, s) ?? a
    )) })
  ] }) }) }) }) });
}
function Pr({
  children: n,
  hover: o,
  divider: s
}) {
  return /* @__PURE__ */ r.jsx("div", { className: R.row, "data-hover": o ? "true" : "false", "data-divider": s ? "true" : "false", children: n });
}
function Ut({
  column: n,
  sorting: o,
  onSortingChange: s,
  onPin: l,
  onUnpin: v,
  onHide: p,
  onFilter: d,
  onStartDragging: h,
  onResizeStart: x,
  onResizeMove: b,
  onResizeEnd: y,
  onResizeDoubleClick: j,
  canResize: I,
  canPin: $,
  canHide: E,
  canReorder: C,
  canFilter: O,
  pinned: w,
  dragState: N
}) {
  const [Z, ee] = U(!1), G = o.sortBy === n.key, ce = I && (n.resizable ?? !0);
  me(() => {
    if (!Z) return;
    const M = () => ee(!1);
    return window.addEventListener("scroll", M, !0), () => window.removeEventListener("scroll", M, !0);
  }, [Z]);
  const ne = () => {
    if (n.sortable) {
      if (o.sortBy !== n.key) {
        s({ sortBy: n.key, sortOrder: "asc" });
        return;
      }
      if (o.sortOrder === "desc") {
        s({ sortBy: null, sortOrder: "asc" });
        return;
      }
      s({ sortBy: n.key, sortOrder: "desc" });
    }
  }, Q = n.key === N.targetColumnKey && n.key !== N.draggedColumnKey, we = N.draggedColumnIndex > N.targetColumnIndex && Q;
  return /* @__PURE__ */ r.jsx(wr, { content: n.tooltip, children: /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: R.headCell,
      "data-align": n.align ?? "start",
      "data-open": Z ? "true" : "false",
      "data-column": n.key,
      onMouseDown: (M) => {
        var ve, ge;
        (ge = (ve = M.target) == null ? void 0 : ve.closest) != null && ge.call(ve, "[data-resize-hotspot]") || !C || n.frozenStart || n.frozenEnd || h(M.nativeEvent, n.key);
      },
      children: [
        /* @__PURE__ */ r.jsx("div", { className: R.headContent, children: /* @__PURE__ */ r.jsx("span", { className: R.headLabel, "data-cell-content": "true", children: n.header }) }),
        /* @__PURE__ */ r.jsx(
          Cr,
          {
            open: Z,
            onOpenChange: ee,
            host: ({ hostProps: M }) => /* @__PURE__ */ r.jsx("button", { ...M, className: R.headButton, "aria-label": "Column menu" }),
            zIndex: w ? 220 : 140,
            children: /* @__PURE__ */ r.jsx(vn, { onAfterSelect: () => ee(!1), children: /* @__PURE__ */ r.jsxs(pn, { children: [
              $ && !n.frozenStart && !n.frozenEnd ? w ? /* @__PURE__ */ r.jsxs(it, { onSelect: v, children: [
                /* @__PURE__ */ r.jsx(Vn, { size: 16 }),
                " Unpin column"
              ] }) : /* @__PURE__ */ r.jsxs(it, { onSelect: l, children: [
                /* @__PURE__ */ r.jsx(Xn, { size: 16 }),
                " Pin column"
              ] }) : null,
              E ? /* @__PURE__ */ r.jsxs(it, { onSelect: p, children: [
                /* @__PURE__ */ r.jsx(Kn, { size: 16 }),
                " Hide column"
              ] }) : null,
              O ? /* @__PURE__ */ r.jsxs(it, { onSelect: d, children: [
                /* @__PURE__ */ r.jsx(dn, { size: 16 }),
                " Filter by column"
              ] }) : null
            ] }) })
          }
        ),
        n.sortable ? /* @__PURE__ */ r.jsx(
          cn,
          {
            size: "xs",
            variant: "tertiary",
            className: R.sortButton,
            active: G,
            textColor: "--ui2-content-secondary",
            "aria-label": `Sort ${typeof n.header == "string" ? n.header : n.key}`,
            onClick: (M) => {
              M.stopPropagation(), ne();
            },
            children: G ? o.sortOrder === "desc" ? /* @__PURE__ */ r.jsx(Xt, { size: 14 }) : /* @__PURE__ */ r.jsx(un, { size: 14 }) : /* @__PURE__ */ r.jsx(Xt, { size: 14 })
          }
        ) : null,
        ce ? /* @__PURE__ */ r.jsx(
          "span",
          {
            className: R.resizeHotspot,
            "data-resize-hotspot": "true",
            onPointerDown: (M) => {
              M.preventDefault(), M.stopPropagation(), x(M, n.key);
            },
            onPointerMove: (M) => {
              b(M, n.key);
            },
            onPointerUp: (M) => {
              y(M, n.key);
            },
            onPointerCancel: (M) => {
              y(M, n.key);
            },
            onDoubleClick: (M) => {
              M.preventDefault(), M.stopPropagation(), j(M, n.key);
            }
          }
        ) : null,
        Q ? /* @__PURE__ */ r.jsx("div", { className: W(R.dropIndicator, we && R.dropIndicatorStart) }) : null
      ]
    }
  ) });
}
function Vt({
  column: n,
  row: o,
  rowKeyValue: s
}) {
  const l = Gt(o, n), v = n.valueFormatter ? n.valueFormatter(l, o) : l, p = v == null ? "" : String(v), d = n.render ? n.render(o) : p;
  return /* @__PURE__ */ r.jsx(
    xn.Provider,
    {
      value: {
        align: n.align ?? "start",
        monospace: n.monospace ?? !1,
        row: o,
        rowKey: s,
        columnKey: n.key,
        filterKey: n.filterKey,
        value: p,
        rawValue: l
      },
      children: /* @__PURE__ */ r.jsx(Rr, { "data-column": n.key, children: d })
    }
  );
}
const Nr = "_root_xtrkz_1", Tr = "_collapsed_xtrkz_11", Or = "_header_xtrkz_15", Ir = "_accountButton_xtrkz_26", Mr = "_accountInfo_xtrkz_43", zr = "_accountAvatar_xtrkz_50", Dr = "_accountName_xtrkz_71", Ar = "_accountUsername_xtrkz_72", Lr = "_buttons_xtrkz_100", Wr = "_buttonsCollapsed_xtrkz_108", $r = "_headerButton_xtrkz_112", Fr = "_headerButtonDisabled_xtrkz_144", Kr = "_headerButtonActive_xtrkz_150", Hr = "_nav_xtrkz_163", Ur = "_menuItem_xtrkz_193", Vr = "_menuButton_xtrkz_197", Yr = "_menuButtonPseudoHover_xtrkz_237", Xr = "_menuButtonActive_xtrkz_241", Gr = "_menuButtonExpanded_xtrkz_245", qr = "_menuButtonDisabled_xtrkz_249", Jr = "_menuButtonText_xtrkz_258", Zr = "_menuButtonIcon_xtrkz_267", Qr = "_menuButtonChevron_xtrkz_283", eo = "_menuButtonCompact_xtrkz_292", to = "_children_xtrkz_298", no = "_child_xtrkz_298", ro = "_childActive_xtrkz_335", oo = "_childDisabled_xtrkz_339", so = "_childText_xtrkz_348", ao = "_childIcon_xtrkz_354", io = "_popover_xtrkz_363", lo = "_popoverTitle_xtrkz_372", co = "_footer_xtrkz_437", uo = "_footerExpanded_xtrkz_449", fo = "_footerBottom_xtrkz_453", vo = "_footerLogo_xtrkz_461", po = "_version_xtrkz_467", ho = "_footerCollapsed_xtrkz_478", xo = "_iconButton_xtrkz_498", _o = "_pinnedButtonWrap_xtrkz_519", yo = "_tooltipHost_xtrkz_524", c = {
  root: Nr,
  collapsed: Tr,
  header: Or,
  accountButton: Ir,
  accountInfo: Mr,
  accountAvatar: zr,
  accountName: Dr,
  accountUsername: Ar,
  buttons: Lr,
  buttonsCollapsed: Wr,
  headerButton: $r,
  headerButtonDisabled: Fr,
  headerButtonActive: Kr,
  nav: Hr,
  menuItem: Ur,
  menuButton: Vr,
  menuButtonPseudoHover: Yr,
  menuButtonActive: Xr,
  menuButtonExpanded: Gr,
  menuButtonDisabled: qr,
  menuButtonText: Jr,
  menuButtonIcon: Zr,
  menuButtonChevron: Qr,
  menuButtonCompact: eo,
  children: to,
  child: no,
  childActive: ro,
  childDisabled: oo,
  childText: so,
  childIcon: ao,
  popover: io,
  popoverTitle: lo,
  footer: co,
  footerExpanded: uo,
  footerBottom: fo,
  footerLogo: vo,
  version: po,
  footerCollapsed: ho,
  iconButton: xo,
  pinnedButtonWrap: _o,
  tooltipHost: yo
};
function rn(n, o, s, l) {
  const v = l.x - o.x, p = l.y - o.y, d = s.x - o.x, h = s.y - o.y, x = n.x - o.x, b = n.y - o.y, y = v * v + p * p, j = v * d + p * h, I = v * x + p * b, $ = d * d + h * h, E = d * x + h * b, C = y * $ - j * j;
  if (C === 0)
    return !1;
  const O = 1 / C, w = ($ * I - j * E) * O, N = (y * E - j * I) * O;
  return w >= 0 && N >= 0 && w + N <= 1;
}
function on(n, o, s = 0) {
  return n.x >= o.left - s && n.x <= o.right + s && n.y >= o.top - s && n.y <= o.bottom + s;
}
function mo(n, o, s, l, v) {
  return rn(n, o, s, l) || rn(n, o, l, v);
}
function go(n, o, s, l = 8) {
  if (on(n, o, l) || on(n, s, l))
    return !0;
  const v = { x: o.right, y: o.top - l }, p = { x: s.left, y: s.top - l }, d = { x: s.left, y: s.bottom + l }, h = { x: o.right, y: o.bottom + l };
  return mo(n, v, p, d, h);
}
function bo({ initials: n, name: o, username: s, collapsed: l = !1, className: v, ...p }) {
  return /* @__PURE__ */ r.jsxs("button", { type: "button", className: W(c.accountButton, v), ...p, children: [
    /* @__PURE__ */ r.jsx("div", { className: c.accountAvatar, children: n }),
    l ? null : /* @__PURE__ */ r.jsxs("div", { className: c.accountInfo, children: [
      /* @__PURE__ */ r.jsx("div", { className: c.accountName, children: o }),
      /* @__PURE__ */ r.jsx("div", { className: c.accountUsername, children: s })
    ] })
  ] });
}
function jo({
  actions: n,
  collapsed: o = !1,
  renderTooltip: s,
  className: l,
  ...v
}) {
  return /* @__PURE__ */ r.jsx("div", { className: W(c.buttons, o && c.buttonsCollapsed, l), ...v, children: n.map((p) => {
    const d = /* @__PURE__ */ r.jsx(
      "button",
      {
        type: "button",
        className: W(
          c.headerButton,
          p.active && c.headerButtonActive,
          p.disabled && c.headerButtonDisabled
        ),
        onClick: p.disabled ? void 0 : p.onClick,
        "aria-label": p.label,
        style: { "--ui2-sidebar-pinned-icon-color": "var(--ui2-content-secondary)" },
        children: p.icon
      },
      p.id
    );
    return s ? /* @__PURE__ */ r.jsx("div", { className: c.pinnedButtonWrap, children: s({ content: p.label, children: d }) }, p.id) : /* @__PURE__ */ r.jsx("div", { className: c.pinnedButtonWrap, children: d }, p.id);
  }) });
}
function ko({
  icon: n,
  showIcon: o = !0,
  label: s,
  compact: l = !1,
  active: v,
  expanded: p,
  disabled: d,
  pseudoHover: h,
  chevron: x,
  as: b,
  className: y,
  ...j
}) {
  const I = b ?? "button";
  return /* @__PURE__ */ r.jsxs(
    I,
    {
      ...I === "button" ? { type: "button", disabled: d } : null,
      className: W(
        c.menuButton,
        l && c.menuButtonCompact,
        v && c.menuButtonActive,
        p && c.menuButtonExpanded,
        d && c.menuButtonDisabled,
        h && c.menuButtonPseudoHover,
        y
      ),
      ...j,
      children: [
        n && o ? /* @__PURE__ */ r.jsx("span", { className: c.menuButtonIcon, children: n }) : null,
        l ? null : /* @__PURE__ */ r.jsx("span", { className: c.menuButtonText, children: s }),
        !l && x ? /* @__PURE__ */ r.jsx("span", { className: c.menuButtonChevron, children: x }) : null
      ]
    }
  );
}
function Co({ collapsed: n = !1, version: o, logo: s, toggle: l, className: v, ...p }) {
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: W(c.footer, !n && c.footerExpanded, n && c.footerCollapsed, v),
      ...p,
      children: [
        !n && o ? /* @__PURE__ */ r.jsxs("div", { className: c.version, children: [
          "v. ",
          o
        ] }) : null,
        /* @__PURE__ */ r.jsxs("div", { className: c.footerBottom, children: [
          /* @__PURE__ */ r.jsx("div", { className: c.footerLogo, children: s }),
          l
        ] })
      ]
    }
  );
}
function wo(n) {
  return /* @__PURE__ */ r.jsx("div", { className: W(c.nav, n.className), ...n });
}
function No({ icon: n, label: o, className: s, ...l }) {
  return /* @__PURE__ */ r.jsx("button", { type: "button", "aria-label": o, className: W(c.iconButton, s), ...l, children: n });
}
const _n = an(
  ({ title: n, children: o, className: s, ...l }, v) => /* @__PURE__ */ r.jsxs("div", { ref: v, className: W(c.popover, s), ...l, children: [
    /* @__PURE__ */ r.jsx("div", { className: c.popoverTitle, children: n }),
    o
  ] })
);
_n.displayName = "SidebarPopover";
function Eo({ content: n, children: o }) {
  return /* @__PURE__ */ r.jsx("span", { className: c.tooltipHost, title: n, children: o });
}
function To({
  collapsed: n,
  defaultCollapsed: o = !1,
  onCollapsedChange: s,
  account: l,
  pinnedActions: v = [],
  navItems: p,
  footer: d,
  className: h,
  style: x,
  renderTooltip: b,
  onItemClick: y,
  onChildClick: j
}) {
  const I = b ?? Eo, [$, E] = U(o), C = n ?? $, [O, w] = U(null), [N, Z] = U(null), ee = V(!1), G = V(null), ce = V(null), ne = V({ active: !1 }), Q = V(null), we = le(() => {
    const _ = /* @__PURE__ */ new Map();
    return p.forEach((A) => {
      var re;
      A.defaultExpanded && _.set(A.id, !0), (re = A.children) != null && re.some((be) => be.active) && _.set(A.id, !0);
    }), _;
  }, [p]), [M, ve] = U(() => we), ge = at(
    (_) => {
      s ? s(_) : E(_);
    },
    [s]
  ), se = at((_, A) => {
    w(_), Z(A), ce.current = A;
  }, []), z = at(() => {
    ee.current || (w(null), Z(null));
  }, []), K = at(() => {
    Q.current && (window.clearTimeout(Q.current), Q.current = null);
  }, []), te = at(
    (_ = 260) => {
      K(), Q.current = window.setTimeout(() => {
        ee.current || (ne.current.active = !1, z());
      }, _);
    },
    [K, z]
  ), Ie = at((_) => {
    ve((A) => {
      const re = new Map(A);
      return re.set(_, !A.get(_)), re;
    });
  }, []);
  return me(() => {
    if (!C || !O)
      return;
    const _ = (A) => {
      if (!ne.current.active || ee.current || !G.current || !ce.current)
        return;
      const re = G.current.getBoundingClientRect(), be = { x: A.clientX, y: A.clientY };
      go(be, ce.current, re, 10) ? K() : (ne.current.active = !1, z());
    };
    return window.addEventListener("mousemove", _), () => {
      window.removeEventListener("mousemove", _);
    };
  }, [O, C, K, z]), me(() => () => K(), [K]), /* @__PURE__ */ r.jsxs(
    "div",
    {
      "data-ui2-component": "Sidebar",
      "data-collapsed": C ? "true" : "false",
      className: W(c.root, C && c.collapsed, h),
      style: x,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: c.header, children: [
          l ? /* @__PURE__ */ r.jsx(
            bo,
            {
              initials: l.initials,
              name: l.name,
              username: l.username,
              collapsed: C,
              onClick: l.onClick
            }
          ) : null,
          /* @__PURE__ */ r.jsx(jo, { actions: v, collapsed: C, renderTooltip: I })
        ] }),
        /* @__PURE__ */ r.jsx(wo, { onClick: () => w(null), children: p.map((_) => {
          var He, Je, Ze;
          const A = !!((He = _.children) != null && He.length), re = M.get(_.id) ?? !1, be = C && O === _.id && A && !_.disabled, Ke = /* @__PURE__ */ r.jsx(
            ko,
            {
              icon: _.icon,
              showIcon: _.showIcon,
              label: _.title,
              compact: C,
              active: _.active,
              expanded: A && re,
              disabled: _.disabled,
              pseudoHover: be,
              chevron: !C && A ? re ? /* @__PURE__ */ r.jsx(un, { size: 16 }) : /* @__PURE__ */ r.jsx(Xt, { size: 16 }) : void 0,
              onClick: () => {
                var g;
                if (A && !C) {
                  Ie(_.id);
                  return;
                }
                _.disabled || (y == null || y(_), (g = _.onClick) == null || g.call(_));
              }
            }
          );
          return /* @__PURE__ */ r.jsxs(
            "div",
            {
              className: c.menuItem,
              onMouseEnter: (g) => {
                !C || !A || _.disabled || (ne.current.active = !1, K(), se(_.id, g.currentTarget.getBoundingClientRect()));
              },
              onMouseLeave: (g) => {
                if (C) {
                  if (!A || _.disabled) {
                    z();
                    return;
                  }
                  ne.current.active = !0, te();
                }
              },
              onFocus: () => {
                var ue;
                if (!C || !A || _.disabled)
                  return;
                const g = (ue = document.getElementById(`ui2-sidebar-item-${_.id}`)) == null ? void 0 : ue.getBoundingClientRect();
                g && se(_.id, g);
              },
              children: [
                /* @__PURE__ */ r.jsx("div", { id: `ui2-sidebar-item-${_.id}`, children: Ke }),
                A && !C && re ? /* @__PURE__ */ r.jsx("div", { className: c.children, children: (Je = _.children) == null ? void 0 : Je.map((g) => /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsxs(
                  "button",
                  {
                    type: "button",
                    className: W(
                      c.child,
                      g.active && c.childActive,
                      g.disabled && c.childDisabled
                    ),
                    disabled: g.disabled,
                    onClick: g.disabled ? void 0 : () => {
                      var ue;
                      j == null || j(g, _), (ue = g.onClick) == null || ue.call(g);
                    },
                    children: [
                      g.icon && g.showIcon !== !1 ? /* @__PURE__ */ r.jsx("span", { className: c.childIcon, children: g.icon }) : null,
                      /* @__PURE__ */ r.jsx("span", { className: c.childText, children: g.title })
                    ]
                  }
                ) }, g.id ?? g.title)) }) : null,
                A && be && N ? /* @__PURE__ */ r.jsx(
                  _n,
                  {
                    ref: G,
                    title: _.title,
                    style: {
                      position: "fixed",
                      top: Math.round(N.top),
                      left: Math.round(N.right + 12)
                    },
                    onMouseEnter: () => {
                      ee.current = !0, ne.current.active = !1, K();
                    },
                    onMouseLeave: () => {
                      ee.current = !1, te(120);
                    },
                    children: (Ze = _.children) == null ? void 0 : Ze.map((g) => /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsxs(
                      "button",
                      {
                        type: "button",
                        className: W(
                          c.child,
                          g.active && c.childActive,
                          g.disabled && c.childDisabled
                        ),
                        disabled: g.disabled,
                        onClick: g.disabled ? void 0 : () => {
                          var ue;
                          j == null || j(g, _), (ue = g.onClick) == null || ue.call(g);
                        },
                        children: [
                          g.icon && g.showIcon !== !1 ? /* @__PURE__ */ r.jsx("span", { className: c.childIcon, children: g.icon }) : null,
                          /* @__PURE__ */ r.jsx("span", { className: c.childText, children: g.title })
                        ]
                      }
                    ) }, g.id ?? g.title))
                  }
                ) : null
              ]
            },
            _.id
          );
        }) }),
        /* @__PURE__ */ r.jsx(
          Co,
          {
            collapsed: C,
            version: d == null ? void 0 : d.version,
            logo: /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              d != null && d.logoCollapsedSrc && C ? /* @__PURE__ */ r.jsx("img", { src: d.logoCollapsedSrc, alt: d.logoAlt ?? "Logo", width: d.logoCollapsedWidth ?? 32 }) : null,
              d != null && d.logoExpandedSrc && !C ? /* @__PURE__ */ r.jsx("img", { src: d.logoExpandedSrc, alt: d.logoAlt ?? "Logo", width: d.logoExpandedWidth ?? 131 }) : null
            ] }),
            toggle: d != null && d.toggleButton ? d.toggleButton : /* @__PURE__ */ r.jsx(
              cn,
              {
                "aria-label": C ? (d == null ? void 0 : d.toggleCollapsedLabel) ?? "Expand" : (d == null ? void 0 : d.toggleExpandedLabel) ?? "Collapse",
                variant: "tertiary",
                textColor: "--ui2-content-secondary",
                onClick: () => ge(!C),
                children: C ? /* @__PURE__ */ r.jsx(Ln, { size: 18 }) : /* @__PURE__ */ r.jsx(Dn, { size: 18 })
              }
            )
          }
        )
      ]
    }
  );
}
function Oo({ collapsed: n = !1, className: o, ...s }) {
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      "data-ui2-component": "SidebarShell",
      "data-collapsed": n ? "true" : "false",
      className: W(c.root, n && c.collapsed, o),
      ...s
    }
  );
}
function Io(n) {
  return /* @__PURE__ */ r.jsx("div", { "data-ui2-component": "SidebarHeader", className: W(c.header, n.className), ...n });
}
function Mo({
  initials: n,
  name: o,
  username: s,
  collapsed: l = !1,
  className: v,
  ...p
}) {
  return /* @__PURE__ */ r.jsxs("button", { type: "button", className: W(c.accountButton, v), ...p, children: [
    /* @__PURE__ */ r.jsx("div", { className: c.accountAvatar, children: n }),
    l ? null : /* @__PURE__ */ r.jsxs("div", { className: c.accountInfo, children: [
      /* @__PURE__ */ r.jsx("div", { className: c.accountName, children: o }),
      /* @__PURE__ */ r.jsx("div", { className: c.accountUsername, children: s })
    ] })
  ] });
}
function zo({ icon: n, label: o, active: s, disabled: l, className: v, ...p }) {
  return /* @__PURE__ */ r.jsx(
    "button",
    {
      type: "button",
      "aria-label": o,
      disabled: l,
      className: W(
        c.headerButton,
        s && c.headerButtonActive,
        l && c.headerButtonDisabled,
        v
      ),
      ...p,
      children: n
    }
  );
}
function Do({
  icon: n,
  label: o,
  compact: s = !1,
  active: l,
  disabled: v,
  pseudoHover: p,
  chevron: d,
  className: h,
  ...x
}) {
  return /* @__PURE__ */ r.jsxs(
    "button",
    {
      type: "button",
      className: W(
        c.menuButton,
        s && c.menuButtonCompact,
        l && c.menuButtonActive,
        v && c.menuButtonDisabled,
        p && c.menuButtonPseudoHover,
        h
      ),
      disabled: v,
      ...x,
      children: [
        /* @__PURE__ */ r.jsx("span", { className: c.menuButtonIcon, children: n }),
        s ? null : /* @__PURE__ */ r.jsx("span", { className: c.menuButtonText, children: o }),
        !s && d ? /* @__PURE__ */ r.jsx("span", { className: c.menuButtonChevron, children: d }) : null
      ]
    }
  );
}
function Ao({ label: n, icon: o, active: s, disabled: l, className: v, ...p }) {
  return /* @__PURE__ */ r.jsxs(
    "button",
    {
      type: "button",
      className: W(c.child, s && c.childActive, l && c.childDisabled, v),
      disabled: l,
      ...p,
      children: [
        o ? /* @__PURE__ */ r.jsx("span", { className: c.childIcon, children: o }) : null,
        /* @__PURE__ */ r.jsx("span", { className: c.childText, children: n })
      ]
    }
  );
}
function Lo({ collapsed: n = !1, version: o, logo: s, toggle: l, className: v, ...p }) {
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      "data-ui2-component": "SidebarFooter",
      className: W(c.footer, !n && c.footerExpanded, n && c.footerCollapsed, v),
      ...p,
      children: [
        !n && o ? /* @__PURE__ */ r.jsxs("div", { className: c.version, children: [
          "v. ",
          o
        ] }) : null,
        /* @__PURE__ */ r.jsxs("div", { className: c.footerBottom, children: [
          /* @__PURE__ */ r.jsx("div", { className: c.footerLogo, children: s }),
          l
        ] })
      ]
    }
  );
}
export {
  Bo as Button,
  cn as ButtonIcon,
  Po as DataTable,
  Rr as DataTableCell,
  To as Sidebar,
  Mo as SidebarAccountButton,
  Ao as SidebarChildButton,
  Co as SidebarFooterPart,
  Lo as SidebarFooterSection,
  Io as SidebarHeader,
  zo as SidebarHeaderButton,
  No as SidebarIconButton,
  ko as SidebarItem,
  wo as SidebarNav,
  Do as SidebarNavButton,
  jo as SidebarPinnedButtons,
  _n as SidebarPopover,
  bo as SidebarProfile,
  Oo as SidebarShell
};
