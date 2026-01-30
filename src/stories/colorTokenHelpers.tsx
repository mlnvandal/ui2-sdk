import { useEffect, useState } from "react";

type ColorTokenInfo = {
  raw: string;
  resolved: string;
  alias: string | null;
};

function readRawFromStylesheets(name: string) {
  if (typeof document === "undefined") {
    return "";
  }
  for (const sheet of Array.from(document.styleSheets)) {
    let rules;
    try {
      rules = sheet.cssRules;
    } catch {
      continue;
    }
    if (!rules) continue;
    for (const rule of Array.from(rules)) {
      if (!(rule instanceof CSSStyleRule)) continue;
      if (!rule.selectorText || !rule.selectorText.includes(":root")) continue;
      const raw = rule.style.getPropertyValue(name).trim();
      if (raw) {
        return raw;
      }
    }
  }
  return "";
}

function readTokenInfo(name: string): ColorTokenInfo {
  if (typeof window === "undefined") {
    return { raw: "", resolved: "", alias: null };
  }

  const raw = readRawFromStylesheets(name) || getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  const aliasMatch = raw.match(/var\((--[^)]+)\)/);
  const alias = aliasMatch ? aliasMatch[1].trim() : null;

  const probe = document.createElement("span");
  probe.style.color = `var(${name})`;
  probe.style.position = "absolute";
  probe.style.visibility = "hidden";
  document.body.appendChild(probe);
  const resolved = getComputedStyle(probe).color;
  document.body.removeChild(probe);

  return { raw, resolved, alias };
}

export function ColorTokenRow({ name, showAliasLine = true }: { name: string; showAliasLine?: boolean }) {
  const [info, setInfo] = useState<ColorTokenInfo>({ raw: "", resolved: "", alias: null });

  useEffect(() => {
    setInfo(readTokenInfo(name));
  }, [name]);

  const displayValue = info.alias
    ? info.alias.replace(/-rgb$/, "")
    : info.raw && !info.raw.startsWith("var(")
      ? info.raw
      : info.resolved || info.raw;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "8px 0" }}>
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: 8,
          border: "1px solid var(--ui2-stroke-tertiary)",
          background: `var(${name})`,
        }}
      />
      <div style={{ fontSize: 13, display: "grid", gap: 2 }}>
        <div style={{ fontWeight: 600 }}>{name}</div>
        <div style={{ color: "var(--ui2-content-tertiary)" }}>{info.raw || `var(${name})`}</div>
        {showAliasLine ? <div style={{ color: "var(--ui2-content-tertiary)" }}>{displayValue}</div> : null}
      </div>
    </div>
  );
}
