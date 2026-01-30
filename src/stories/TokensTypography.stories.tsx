import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Tokens/Typography",
};

export default meta;

type Story = StoryObj;

const textStyles = [
  {
    name: "UI2 Header/H1",
    className: "ui2-textstyle-header-h1",
    fontFamily: "Poppins",
    fontWeight: "Bold",
    fontSize: 38,
    letterSpacing: "-0.04em",
    textTransform: "none",
  },
  {
    name: "UI2 Header/H2",
    className: "ui2-textstyle-header-h2",
    fontFamily: "Poppins",
    fontWeight: "Bold",
    fontSize: 28,
    letterSpacing: "-0.04em",
    textTransform: "none",
  },
  {
    name: "UI2 Header/H3",
    className: "ui2-textstyle-header-h3",
    fontFamily: "Poppins",
    fontWeight: "Bold",
    fontSize: 22,
    letterSpacing: "-0.03em",
    textTransform: "none",
  },
  {
    name: "UI2 Header/H4",
    className: "ui2-textstyle-header-h4",
    fontFamily: "Poppins",
    fontWeight: "Bold",
    fontSize: 16,
    letterSpacing: "-0.02em",
    textTransform: "none",
  },
  {
    name: "UI2 Header/H5",
    className: "ui2-textstyle-header-h5",
    fontFamily: "Poppins",
    fontWeight: "Bold",
    fontSize: 15,
    letterSpacing: "-0.01em",
    textTransform: "none",
  },
  {
    name: "UI2 Data L/Medium",
    className: "ui2-textstyle-data-l-medium",
    fontFamily: "Poppins",
    fontWeight: "SemiBold",
    fontSize: 28,
    letterSpacing: "-0.04em",
    textTransform: "none",
  },
  {
    name: "UI2 Data M/Bold",
    className: "ui2-textstyle-data-m-bold",
    fontFamily: "Poppins",
    fontWeight: "Bold",
    fontSize: 24,
    letterSpacing: "-0.04em",
    textTransform: "none",
  },
  {
    name: "UI2 Data S/Semibold",
    className: "ui2-textstyle-data-s-semibold",
    fontFamily: "Poppins",
    fontWeight: "SemiBold",
    fontSize: 13,
    letterSpacing: "0",
    textTransform: "none",
  },
  {
    name: "UI2 Data S/Medium",
    className: "ui2-textstyle-data-s-medium",
    fontFamily: "Poppins",
    fontWeight: "Medium",
    fontSize: 13,
    letterSpacing: "0",
    textTransform: "none",
  },
  {
    name: "UI2 Data S/Regular",
    className: "ui2-textstyle-data-s-regular",
    fontFamily: "Poppins",
    fontWeight: "Regular",
    fontSize: 13,
    letterSpacing: "0",
    textTransform: "none",
  },
  {
    name: "UI2 Data S/Mono",
    className: "ui2-textstyle-data-s-mono",
    fontFamily: "IBM Plex Mono",
    fontWeight: "Regular",
    fontSize: 13,
    letterSpacing: "0",
    textTransform: "none",
  },
  {
    name: "UI2 Data XS/Semibold",
    className: "ui2-textstyle-data-xs-semibold",
    fontFamily: "Poppins",
    fontWeight: "SemiBold",
    fontSize: 12,
    letterSpacing: "0",
    textTransform: "none",
  },
  {
    name: "UI2 Data XS/Medium",
    className: "ui2-textstyle-data-xs-medium",
    fontFamily: "Poppins",
    fontWeight: "Medium",
    fontSize: 12,
    letterSpacing: "0",
    textTransform: "none",
  },
  {
    name: "UI2 Data XS/Regular",
    className: "ui2-textstyle-data-xs-regular",
    fontFamily: "Poppins",
    fontWeight: "Regular",
    fontSize: 12,
    letterSpacing: "0",
    textTransform: "none",
  },
  {
    name: "UI2 Data XS/Mono",
    className: "ui2-textstyle-data-xs-mono",
    fontFamily: "IBM Plex Mono",
    fontWeight: "Regular",
    fontSize: 11,
    letterSpacing: "0",
    textTransform: "none",
  },
  {
    name: "UI2 Paragraph/Regular",
    className: "ui2-textstyle-paragraph-regular",
    fontFamily: "Poppins",
    fontWeight: "Regular",
    fontSize: 14,
    letterSpacing: "0",
    textTransform: "none",
  },
];

export const Default: Story = {
  render: () => (
    <div style={{ padding: 24, maxWidth: 900 }}>
      <div style={{ marginBottom: 16 }}>
        <h3 style={{ margin: "0 0 8px", fontSize: 14 }}>Font Families</h3>
        <div style={{ fontSize: 13, display: "grid", gap: 6 }}>
          <div><strong>Poppins</strong> — body & UI</div>
          <div style={{ fontFamily: "IBM Plex Mono, monospace" }}><strong>IBM Plex Mono</strong> — monospace</div>
        </div>
      </div>
      <div style={{ display: "grid", gap: 16 }}>
        {textStyles.map((style) => (
          <div key={style.name} style={{ display: "grid", gap: 6 }}>
            <div style={{ fontSize: 12, color: "var(--ui2-content-tertiary)" }}>{style.name}</div>
            <div className={style.className}>The quick brown fox jumps over the lazy dog.</div>
            <div style={{ fontSize: 12, color: "var(--ui2-content-tertiary)" }}>
              {style.fontFamily} · {style.fontWeight} · {style.fontSize}px · {style.letterSpacing}
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};
