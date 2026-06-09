export const handleTextCopy = async (text: string) => {
    if (!text) return "";

    try {
        await navigator.clipboard.writeText(text as string);
        alert("clone Url Copied");
    } catch (err) {
        console.warn("Failed to copy text", err);
    }
};
