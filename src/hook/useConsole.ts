// useConsole.ts
import { useEffect, useState } from "react";

type LogLevel = "log" | "warn" | "error" | "info" | "debug";

export interface LogEntry {
    id: string;
    method: LogLevel;
    data: any[];
}

const logBuffer: LogEntry[] = [];

export const useConsole = () => {
    const [logs, setLogs] = useState<LogEntry[]>([...logBuffer]);

    useEffect(() => {
        const levels: LogLevel[] = ["log", "warn", "error", "info", "debug"];
        if ((window.console as any).__hooked) return;
        (window.console as any).__hooked = true;

        const originalMethods = Object.fromEntries(
            levels.map((level) => [level, window.console[level].bind(window.console)]),
        );

        levels.forEach((level) => {
            window.console[level] = (...args: any[]) => {
                originalMethods[level](...args);
                setTimeout(() => {
                    const cleanArgs = args
                        .map((arg) =>
                            typeof arg === "string"
                                ? arg
                                      .replace(/(\x9B|\x1B\[|\u009b)[0-9;]*m/g, "")
                                      .replace(/%s/g, "")
                                      .trim()
                                : arg,
                        )
                        .filter((arg) => {
                            if (typeof arg === "string") return arg.length > 0;
                            if (arg === undefined) return false;
                            return true;
                        });

                    if (cleanArgs.length === 0) return;

                    const entry: LogEntry = {
                        method: level,
                        data: cleanArgs,
                        id: `${Date.now()}-${Math.random()}`,
                    };

                    logBuffer.push(entry);
                    setLogs((prev) => [...prev, entry]);
                }, 0);
            };
        });

        return () => {
            levels.forEach((level) => {
                window.console[level] = (originalMethods as any)[level];
            });
            delete (window.console as any).__hooked;
        };
    }, []);

    const clear = () => setLogs([]);

    const refresh = () => setLogs([...logBuffer]);

    return { logs, clear, refresh };
};
