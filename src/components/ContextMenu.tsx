import Navigation from "./Navigation";

import { useEffect, useState } from "react";

import Button from "./Button";

import { LuRefreshCcw } from "react-icons/lu";

const ContextMenu = () => {
    const [menuData, setMenuData] = useState({
        show: false,
        x: 0,
        y: 0,
    });

    const handleContextMenu = (e: any) => {
        e.preventDefault();

        const menuWidth = 250;
        const menuHeight = 300;
        const padding = 10;

        const x = e.clientX;
        const y = e.clientY;

        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        let finalX = x;
        let finalY = y;

        // 🟢 horizontal (right edge → left flip)
        if (x + menuWidth + padding > windowWidth) {
            finalX = x - menuWidth;
        }

        // 🟡 bottom 100px zone → force lift up 200px
        if (y > windowHeight - 100) {
            finalY = y - 200;
        }
        // 🟢 normal bottom overflow protection
        else if (y + menuHeight + padding > windowHeight) {
            finalY = y - menuHeight;
        }

        // 🛡️ safety clamp
        finalX = Math.max(padding, Math.min(finalX, windowWidth - menuWidth - padding));
        finalY = Math.max(padding, Math.min(finalY, windowHeight - menuHeight - padding));

        setMenuData({
            show: true,
            x: finalX,
            y: finalY,
        });
    };

    const handleRefreshPage = () => {
        window.location.reload();
    };

    const handleClick = () => {
        setMenuData((prev) => ({ ...prev, show: false }));
    };

    useEffect(() => {
        window.addEventListener("click", handleClick);
        window.addEventListener("contextmenu", handleContextMenu);

        return () => {
            window.removeEventListener("click", handleClick);
            window.removeEventListener("contextmenu", handleContextMenu);
        };
    }, []);

    return (
        <div
            className={`context-menu ${menuData.show ? "context-menu--show" : ""}`}
            style={{
                top: menuData.y,
                left: menuData.x,
            }}
        >
            {menuData.show ? (
                <>
                    <Navigation />

                    <hr />
                    <div>
                        <Button clickFunction={handleRefreshPage}>
                            <LuRefreshCcw />
                        </Button>
                    </div>
                </>
            ) : null}
        </div>
    );
};

export default ContextMenu;
