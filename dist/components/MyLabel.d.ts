/// <reference types="react" />
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
export default function MyLabel({ allCaps, color, label, size, fontColor, }: Props): JSX.Element;
