var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import "./mylabel.css";
export default function MyLabel(_a) {
    var _b = _a.allCaps, allCaps = _b === void 0 ? false : _b, _c = _a.color, color = _c === void 0 ? "primary" : _c, _d = _a.label, label = _d === void 0 ? "No Labels" : _d, _e = _a.size, size = _e === void 0 ? "normal" : _e, _f = _a.fontColor, fontColor = _f === void 0 ? "" : _f;
    label = allCaps ? label.toUpperCase() : label;
    return (_jsx("span", __assign({ style: { color: fontColor }, className: "label " + size + " text-" + color }, { children: label }), void 0));
}
