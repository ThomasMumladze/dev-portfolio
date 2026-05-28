import { useEffect, useRef, useState } from "react";
import { useConsole } from "../hook/useConsole";

type LogLevel = "log" | "warn" | "error" | "info" | "debug";

interface LogEntry {
    id: string;
    method: LogLevel;
    data: any[];
}

const CustomConsole = ({ showConsole, setShowConsole }: { showConsole: boolean; setShowConsole: any }) => {
    const { logs, clear, refresh } = useConsole();
    const consoleBodyRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (consoleBodyRef.current) {
            consoleBodyRef.current.scrollTop = consoleBodyRef.current.scrollHeight;
        }
    }, [logs, showConsole]);

    if (!showConsole) return null;

    return (
        <div className="custom-console">
            <div className="console-header">
                <span>DevTools Console</span>
                <div className="btn">
                    <button onClick={clear}>clear</button>

                    <button
                        onClick={() => {
                            (setShowConsole(false), clear());
                        }}
                    >
                        close
                    </button>
                </div>
            </div>
            <div ref={consoleBodyRef} style={{ overflowY: "auto", height: "100%", padding: "4px" }}>
                {logs.map((log) => (
                    <LogRow key={log.id} log={log} />
                ))}
            </div>
        </div>
    );
};

const levelStyle: Record<LogLevel, { color: string; bg: string }> = {
    log: { color: "#ccc", bg: "transparent" },
    info: { color: "#5b9bd5", bg: "rgba(91,155,213,0.08)" },
    warn: { color: "#f5a623", bg: "rgba(245,166,35,0.08)" },
    error: { color: "#ff5f5f", bg: "rgba(255,95,95,0.08)" },
    debug: { color: "#888", bg: "transparent" },
};

const LogRow = ({ log }: { log: LogEntry }) => {
    const [expanded, setExpanded] = useState<Record<number, boolean>>({});
    const { color, bg } = levelStyle[log.method] ?? levelStyle.log;

    const toggleExpand = (i: number) => setExpanded((prev) => ({ ...prev, [i]: !prev[i] }));

    return (
        <div
            style={{
                display: "flex",
                gap: "6px",
                padding: "3px 6px",
                borderBottom: "1px solid rgba(255,255,255,0.04)",
                backgroundColor: bg,
                borderLeft: `3px solid ${color}`,
                fontFamily: "monospace",
                fontSize: "12px",
                color,
                alignItems: "flex-start",
            }}
        >
            <span style={{ opacity: 0.5, minWidth: "36px", userSelect: "none" }}>{log.method}</span>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "2px" }}>
                {log.data.map((d, i) => (
                    <DataValue key={i} value={d} expanded={!!expanded[i]} onToggle={() => toggleExpand(i)} />
                ))}
            </div>
        </div>
    );
};

const DataValue = ({ value, depth = 0 }: any) => {
    const [expanded, setExpanded] = useState(false);
    const isObject = value !== null && typeof value === "object";
    const isArray = Array.isArray(value);

    if (!isObject) {
        const color =
            typeof value === "string"
                ? "#ce9178"
                : typeof value === "number"
                  ? "#b5cea8"
                  : typeof value === "boolean"
                    ? "#569cd6"
                    : value === null
                      ? "#569cd6"
                      : "#ccc";

        return (
            <span style={{ color }}>
                {value === null ? "null" : typeof value === "string" ? `"${value}"` : String(value)}
            </span>
        );
    }

    const keys = Object.keys(value);
    const preview = isArray ? `Array(${value.length})` : `{${keys.slice(0, 3).join(", ")}${keys.length > 3 ? ", …" : ""}}`;

    return (
        <div style={{ paddingLeft: depth > 0 ? "12px" : 0 }}>
            <span onClick={() => setExpanded((v) => !v)} style={{ cursor: "pointer", userSelect: "none", color: "#569cd6" }}>
                {expanded ? "▾" : "▸"} {preview}
            </span>
            {expanded && (
                <div style={{ paddingLeft: "12px", borderLeft: "1px solid rgba(255,255,255,0.1)", marginTop: "2px" }}>
                    {keys.map((k) => (
                        <div key={k} style={{ display: "flex", gap: "4px", flexWrap: "wrap", alignItems: "flex-start" }}>
                            <span style={{ color: "#9cdcfe" }}>{k}:</span>
                            <DataValue value={value[k]} depth={depth + 1} />
                        </div>
                    ))}
                    {isArray && <div style={{ color: "#888", fontSize: "11px" }}>length: {value.length}</div>}
                </div>
            )}
        </div>
    );
};

export default CustomConsole;
