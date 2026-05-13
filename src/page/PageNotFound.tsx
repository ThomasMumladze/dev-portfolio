// ==========  react router ========== //
import { Link } from "react-router";

// ==========  react  ========== //
import { useEffect, useRef, useState } from "react";

// ========== cell for 404 not found  ========== //
const CELLS = [
    { char: "k" },
    { char: "v" },
    { char: "n" },
    { char: "z" },
    { char: "i" },
    { char: "x" },
    { char: "m" },
    { char: "e" },
    { char: "t" },
    { char: "a" },
    { char: "x" },
    { char: "l" },
    { char: "4", name: "one", animate: true },
    { char: "0", name: "two", animate: true },
    { char: "4", name: "three", animate: true },
    { char: "y" },
    { char: "y" },
    { char: "w" },
    { char: "v" },
    { char: "b" },
    { char: "o" },
    { char: "q" },
    { char: "d" },
    { char: "y" },
    { char: "p" },
    { char: "a" },
    { char: "p", name: "four", animate: true },
    { char: "a", name: "five", animate: true },
    { char: "g", name: "six", animate: true },
    { char: "e", name: "seven", animate: true },
    { char: "v" },
    { char: "j" },
    { char: "a" },
    { char: "n", name: "eight", animate: true },
    { char: "o", name: "nine", animate: true },
    { char: "t", name: "ten", animate: true },
    { char: "s" },
    { char: "c" },
    { char: "e" },
    { char: "w" },
    { char: "v" },
    { char: "x" },
    { char: "e" },
    { char: "p" },
    { char: "c" },
    { char: "f" },
    { char: "h" },
    { char: "q" },
    { char: "e" },
    { char: "f", name: "eleven", animate: true },
    { char: "o", name: "twelve", animate: true },
    { char: "u", name: "thirteen", animate: true },
    { char: "n", name: "fourteen", animate: true },
    { char: "d", name: "fifteen", animate: true },
    { char: "s" },
    { char: "w" },
    { char: "q" },
    { char: "v" },
    { char: "o" },
    { char: "s" },
    { char: "m" },
    { char: "v" },
    { char: "f" },
    { char: "u" },
];

const PageNotFound = () => {
    const containerRef = useRef<HTMLUListElement>(null);
    const [selected, setSelected] = useState<string[]>([]);

    useEffect(() => {
        const timers: ReturnType<typeof setTimeout>[] = [];
        let delay = 1500;

        CELLS.filter((cell) => cell.animate).forEach((cell) => {
            const t = setTimeout(() => {
                setSelected((prev) => [...prev, cell.name!]);
            }, delay);
            timers.push(t);
            delay += 500;
        });

        return () => timers.forEach(clearTimeout);
    }, []);

    return (
        <div className="wrap">
            <div className="wordsearch">
                {/* // ==========  mapping cell to select word that shows 404 not found ==========  // */}
                <ul ref={containerRef}>
                    {CELLS.map((cell, index) => (
                        <li
                            key={index}
                            className={
                                [cell.name, cell.name && selected.includes(cell.name) ? "selected" : ""]
                                    .filter(Boolean)
                                    .join(" ") || undefined
                            }
                        >
                            {cell.char}
                        </li>
                    ))}
                </ul>

                <div className="wordsearch__main-content">
                    <h1>We couldn't find what you were looking for.</h1>
                    <div className="wordsearch__navigation">
                        <Link to="/" className="navigation">
                            Home
                        </Link>
                        <Link to="/project" className="navigation">
                            Project
                        </Link>
                        <Link to="/about-me" className="navigation">
                            About-Me
                        </Link>

                        <Link to="" className="navigation">
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;
