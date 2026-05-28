import { useEffect, useState, useRef } from "react";
import { Hook, Console, Unhook } from "console-feed";

interface Props {
    showConsole: boolean;
}

const CustomConsole = (props: Props) => {
    const { showConsole } = props;
    const [logs, setLogs] = useState<any[]>([]);
    const consoleBodyRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        Hook(
            window.console,
            (log) => {
                if (!log) return "nothing to log";

                let rawData = log.data || [{}];

                const sanitizedData = rawData
                    .map((item: any) => {
                        if (typeof item === "string") {
                            let cleaned = item.replace(/[\u001b\x1b\?]?\[[0-9;]*m/g, "").trim();

                            if (!cleaned || cleaned === "?" || cleaned === "?[0m") {
                                return null;
                            }

                            if (cleaned.startsWith("[") || cleaned.startsWith("{")) {
                                try {
                                    return JSON.parse(cleaned);
                                } catch (e) {
                                    return cleaned;
                                }
                            }
                            return cleaned;
                        }

                        if (typeof item === "object" && item !== null) {
                            try {
                                return JSON.parse(JSON.stringify(item));
                            } catch (e) {
                                return item;
                            }
                        }
                        return item;
                    })
                    .filter((item: any) => item !== null);

                if (sanitizedData.length === 0) return;

                const finalLog = {
                    ...log,
                    data: sanitizedData,
                };

                setLogs((currLogs: any) => [...currLogs, finalLog]);
            },
            false,
        );

        return () => {
            Unhook(window.console as any);
        };
    }, []);

    useEffect(() => {
        if (consoleBodyRef.current) {
            consoleBodyRef.current.scrollTop = consoleBodyRef.current.scrollHeight;
        }
    }, [logs, showConsole]);

    return (
        <>
            {showConsole && (
                <div className="custom-console">
                    <div className="console-header">
                        <span>DevTools Console</span>
                    </div>

                    <div ref={consoleBodyRef} style={styles.consoleBody}>
                        <Console logs={logs} variant="dark" />
                    </div>
                </div>
            )}
        </>
    );
};

const styles = {
    consoleBody: {
        backgroundColor: "rgba(128, 128, 128, 0.0784313725)",
        overflowY: "auto" as "auto",
        padding: "4px",
        height: "100%",
    },
};

export default CustomConsole;
