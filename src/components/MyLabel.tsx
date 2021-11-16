import "./mylabel.css";

export interface Props {
  /**
   * this is the message to show
   */
  label: string;
  /**
   * `normal` is the predifined value.
   */
  size: "normal" | "h1" | "h2" | "h3";
  allCaps?: boolean;
  color?: "primary" | "secondary" | "tertiary";
  fontColor?: string;
}

export default function MyLabel({
  allCaps = false,
  color = "primary",
  label = "No Labels",
  size = "normal",
  fontColor = "",
}: Props) {
  label = allCaps ? label.toUpperCase() : label;
  return (
    <span
      style={{ color: fontColor }}
      className={`label ${size} text-${color}`}
    >
      {label}
    </span>
  );
}
